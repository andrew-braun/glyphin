begin;

-- Phase 3 database security hardening (audit 2026-07-11).
--
-- 1. Drop the dead `request.jwt.claim.sub` fallback from the definer functions.
--    `auth.uid()` is authoritative on current PostgREST and these functions are
--    only ever reached through it, so the coalesce fallback was always null in
--    practice. No auth semantics change: the value was only ever the real user
--    or null.
-- 2. Re-assert that `internal_api` functions carry no execute privilege for
--    public/anon/authenticated. The 3-arg sync function was re-created after the
--    original schema-wide revoke (20260425131000) and could have regained the
--    default PUBLIC execute. It is already unreachable without `internal_api`
--    schema USAGE, so this is defense-in-depth.
-- 3. Rewrite the learner RLS policies to `(select auth.uid())` so Postgres runs
--    an initPlan and caches the result per statement (current Supabase best
--    practice). These policies are defense-in-depth only today because
--    `authenticated` holds no direct table grants on `learner.*`.
-- 4. Enforce at most one active publication per course version at the DB level,
--    turning an app-layer assumption into a hard invariant.

create or replace function internal_api.sync_lesson_attempt_batch(
	p_enrollment_id uuid,
	p_device_id uuid,
	p_attempts jsonb
)
returns table (
	inserted_attempt_count integer,
	updated_lesson_count integer,
	current_lesson_id uuid,
	current_lesson_slug text,
	processed_at timestamptz
)
language plpgsql
security definer
set search_path = ''
as $$
declare
	v_user_id uuid;
	v_course_version_id uuid;
	v_current_lesson_id uuid;
	v_current_lesson_slug text;
	v_processed_at timestamptz := now();
	v_inserted_attempt_count integer := 0;
	v_updated_lesson_count integer := 0;
	v_invalid_attempt_count integer := 0;
	v_duplicate_attempt_id_count integer := 0;
begin
	if jsonb_typeof(p_attempts) is distinct from 'array' then
		raise exception 'p_attempts must be a JSON array';
	end if;

	if jsonb_array_length(p_attempts) > 200 then
		raise exception 'p_attempts contains too many rows';
	end if;

	v_user_id := auth.uid();

	if v_user_id is null then
		raise exception 'unauthenticated';
	end if;

	select ce.course_version_id
	into v_course_version_id
	from learner.course_enrollments ce
	where ce.id = p_enrollment_id
		and ce.user_id = v_user_id
	for update;

	if not found then
		raise exception 'Enrollment % does not belong to authenticated user', p_enrollment_id;
	end if;

	if p_device_id is not null then
		perform 1
		from learner.devices d
		where d.id = p_device_id
			and d.user_id = v_user_id;

		if not found then
			raise exception 'Device % does not belong to authenticated user', p_device_id;
		end if;
	end if;

	with payload_rows as (
		select *
		from jsonb_to_recordset(p_attempts) as payload(
			client_attempt_id text,
			lesson_id uuid,
			completed boolean,
			score integer,
			time_spent_ms integer,
			attempt_payload jsonb,
			completed_at timestamptz
		)
	)
	select count(*)::integer
	into v_duplicate_attempt_id_count
	from (
		select payload_rows.client_attempt_id
		from payload_rows
		group by payload_rows.client_attempt_id
		having count(*) > 1
	) duplicated_attempt_ids;

	if v_duplicate_attempt_id_count > 0 then
		raise exception 'p_attempts contains duplicate client_attempt_id values';
	end if;

	with payload_rows as (
		select *
		from jsonb_to_recordset(p_attempts) as payload(
			client_attempt_id text,
			lesson_id uuid,
			completed boolean,
			score integer,
			time_spent_ms integer,
			attempt_payload jsonb,
			completed_at timestamptz
		)
	)
	select count(*)::integer
	into v_invalid_attempt_count
	from payload_rows
	left join curriculum.lessons l
		on l.id = payload_rows.lesson_id
		and l.course_version_id = v_course_version_id
	where payload_rows.client_attempt_id is null
		or length(payload_rows.client_attempt_id) < 1
		or length(payload_rows.client_attempt_id) > 64
		or payload_rows.lesson_id is null
		or payload_rows.completed_at is null
		or payload_rows.completed_at < v_processed_at - interval '30 days'
		or payload_rows.completed_at > v_processed_at + interval '1 minute'
		or (payload_rows.score is not null and (payload_rows.score < 0 or payload_rows.score > 100))
		or (payload_rows.time_spent_ms is not null and (payload_rows.time_spent_ms < 0 or payload_rows.time_spent_ms > 86400000))
		or octet_length(coalesce(payload_rows.attempt_payload, '{}'::jsonb)::text) > 32768
		or l.id is null;

	if v_invalid_attempt_count > 0 then
		raise exception 'p_attempts contains invalid, oversized, or out-of-window rows';
	end if;

	with payload_rows as (
		select *
		from jsonb_to_recordset(p_attempts) as payload(
			client_attempt_id text,
			lesson_id uuid,
			completed boolean,
			score integer,
			time_spent_ms integer,
			attempt_payload jsonb,
			completed_at timestamptz
		)
	),
	validated_rows as (
		select
			payload_rows.client_attempt_id,
			payload_rows.lesson_id,
			coalesce(payload_rows.completed, false) as completed,
			payload_rows.score,
			payload_rows.time_spent_ms,
			coalesce(payload_rows.attempt_payload, '{}'::jsonb) as attempt_payload,
			payload_rows.completed_at
		from payload_rows
		join curriculum.lessons l
			on l.id = payload_rows.lesson_id
			and l.course_version_id = v_course_version_id
	),
	inserted_attempts as (
		insert into learner.lesson_attempts (
			id,
			user_id,
			enrollment_id,
			lesson_id,
			device_id,
			client_attempt_id,
			score,
			completed,
			time_spent_ms,
			attempt_payload,
			completed_at,
			created_at
		)
		select
			extensions.gen_random_uuid(),
			v_user_id,
			p_enrollment_id,
			validated_rows.lesson_id,
			p_device_id,
			validated_rows.client_attempt_id,
			validated_rows.score,
			validated_rows.completed,
			validated_rows.time_spent_ms,
			validated_rows.attempt_payload,
			validated_rows.completed_at,
			v_processed_at
		from validated_rows
		on conflict (enrollment_id, client_attempt_id) do nothing
		returning id, lesson_id, client_attempt_id, score, completed, completed_at
	),
	per_lesson as (
		select
			inserted_attempts.lesson_id,
			count(*)::integer as attempt_count_delta,
			max(inserted_attempts.score) as batch_best_score,
			min(inserted_attempts.completed_at) filter (where inserted_attempts.completed) as batch_first_completed_at,
			max(inserted_attempts.completed_at) as batch_last_attempt_at,
			bool_or(inserted_attempts.completed) as batch_completed
		from inserted_attempts
		group by inserted_attempts.lesson_id
	),
	latest_per_lesson as (
		select distinct on (inserted_attempts.lesson_id)
			inserted_attempts.lesson_id,
			inserted_attempts.score as batch_latest_score
		from inserted_attempts
		order by inserted_attempts.lesson_id, inserted_attempts.completed_at desc, inserted_attempts.client_attempt_id desc
	),
	upserted_progress as (
		insert into learner.lesson_progress (
			id,
			user_id,
			enrollment_id,
			lesson_id,
			status,
			best_score,
			latest_score,
			attempt_count,
			first_completed_at,
			last_attempt_at,
			updated_at
		)
		select
			extensions.gen_random_uuid(),
			v_user_id,
			p_enrollment_id,
			per_lesson.lesson_id,
			case
				when per_lesson.batch_completed then 'completed'::curriculum.lesson_progress_status
				else 'in_progress'::curriculum.lesson_progress_status
			end,
			per_lesson.batch_best_score,
			latest_per_lesson.batch_latest_score,
			per_lesson.attempt_count_delta,
			per_lesson.batch_first_completed_at,
			per_lesson.batch_last_attempt_at,
			v_processed_at
		from per_lesson
		join latest_per_lesson using (lesson_id)
		on conflict (enrollment_id, lesson_id) do update
		set status = case
			when learner.lesson_progress.status = 'completed'::curriculum.lesson_progress_status
				or excluded.status = 'completed'::curriculum.lesson_progress_status
			then 'completed'::curriculum.lesson_progress_status
			else 'in_progress'::curriculum.lesson_progress_status
		end,
		best_score = case
			when learner.lesson_progress.best_score is null then excluded.best_score
			when excluded.best_score is null then learner.lesson_progress.best_score
			else greatest(learner.lesson_progress.best_score, excluded.best_score)
		end,
		latest_score = excluded.latest_score,
		attempt_count = learner.lesson_progress.attempt_count + excluded.attempt_count,
		first_completed_at = case
			when learner.lesson_progress.first_completed_at is null then excluded.first_completed_at
			when excluded.first_completed_at is null then learner.lesson_progress.first_completed_at
			else least(learner.lesson_progress.first_completed_at, excluded.first_completed_at)
		end,
		last_attempt_at = case
			when learner.lesson_progress.last_attempt_at is null then excluded.last_attempt_at
			when excluded.last_attempt_at is null then learner.lesson_progress.last_attempt_at
			else greatest(learner.lesson_progress.last_attempt_at, excluded.last_attempt_at)
		end,
		updated_at = v_processed_at
		returning lesson_id
	),
	marked_attempts as (
		update learner.lesson_attempts
		set processed_at = v_processed_at
		where learner.lesson_attempts.processed_at is null
			and exists (
				select 1
				from inserted_attempts
				where inserted_attempts.id = learner.lesson_attempts.id
			)
		returning id
	)
	select
		coalesce((select count(*)::integer from inserted_attempts), 0),
		coalesce((select count(distinct lesson_id)::integer from upserted_progress), 0)
	into v_inserted_attempt_count, v_updated_lesson_count;

	select
		l.id,
		l.slug
	into v_current_lesson_id, v_current_lesson_slug
	from curriculum.lessons l
	left join learner.lesson_progress lp
		on lp.enrollment_id = p_enrollment_id
		and lp.lesson_id = l.id
		and lp.status = 'completed'::curriculum.lesson_progress_status
	where l.course_version_id = v_course_version_id
		and lp.id is null
	order by l.lesson_ordinal
	limit 1;

	update learner.course_enrollments ce
	set current_lesson_id = v_current_lesson_id,
		last_active_at = v_processed_at,
		completed_at = case
			when v_current_lesson_id is null then coalesce(ce.completed_at, v_processed_at)
			else null
		end,
		updated_at = v_processed_at
	where ce.id = p_enrollment_id;

	return query
	select
		v_inserted_attempt_count,
		v_updated_lesson_count,
		v_current_lesson_id,
		v_current_lesson_slug,
		v_processed_at;
end;
$$;

create or replace function learner.ensure_course_enrollment_for_publication(
	p_publication_id uuid
)
returns table (
	enrollment_id uuid,
	course_id uuid,
	course_version_id uuid,
	current_lesson_id uuid,
	current_lesson_slug text
)
language plpgsql
security definer
set search_path = ''
as $$
declare
	v_user_id uuid;
	v_course_id uuid;
	v_course_version_id uuid;
	v_first_lesson_id uuid;
begin
	v_user_id := auth.uid();

	if v_user_id is null then
		raise exception 'unauthenticated';
	end if;

	select cp.course_version_id
	into v_course_version_id
	from delivery.course_publications cp
	where cp.id = p_publication_id
		and cp.is_active = true;

	if v_course_version_id is null then
		raise exception 'Active publication % was not found', p_publication_id;
	end if;

	select cv.course_id
	into v_course_id
	from curriculum.course_versions cv
	where cv.id = v_course_version_id;

	if v_course_id is null then
		raise exception 'Course version % was not found', v_course_version_id;
	end if;

	select l.id
	into v_first_lesson_id
	from curriculum.lessons l
	where l.course_version_id = v_course_version_id
	order by l.lesson_ordinal
	limit 1;

	if v_first_lesson_id is null then
		raise exception 'Course version % has no lessons', v_course_version_id;
	end if;

	insert into learner.course_enrollments (
		user_id,
		course_id,
		course_version_id,
		current_lesson_id
	)
	values (
		v_user_id,
		v_course_id,
		v_course_version_id,
		v_first_lesson_id
	)
	on conflict on constraint course_enrollments_user_id_course_id_course_version_id_key do nothing;

	return query
	select
		ce.id,
		ce.course_id,
		ce.course_version_id,
		ce.current_lesson_id,
		l.slug
	from learner.course_enrollments ce
	left join curriculum.lessons l
		on l.id = ce.current_lesson_id
	where ce.user_id = v_user_id
		and ce.course_id = v_course_id
		and ce.course_version_id = v_course_version_id;
end;
$$;

-- Re-assert least-privilege execute on internal_api after the create-or-replace
-- above (a re-created function can regain the default PUBLIC execute grant).
revoke all on all functions in schema internal_api from public, anon, authenticated;

-- Re-assert the intended grant on the replaced learner function.
revoke all on function learner.ensure_course_enrollment_for_publication(uuid) from public, anon, authenticated;
grant execute on function learner.ensure_course_enrollment_for_publication(uuid) to authenticated;

-- Wrap auth.uid() in a subquery so the optimizer caches it per statement.
alter policy learner_profiles_select_own on learner.profiles
	using ((select auth.uid()) = user_id);

alter policy learner_profiles_update_own on learner.profiles
	using ((select auth.uid()) = user_id)
	with check ((select auth.uid()) = user_id);

alter policy learner_devices_select_own on learner.devices
	using ((select auth.uid()) = user_id);

alter policy learner_course_enrollments_select_own on learner.course_enrollments
	using ((select auth.uid()) = user_id);

alter policy learner_lesson_attempts_select_own on learner.lesson_attempts
	using ((select auth.uid()) = user_id);

alter policy learner_lesson_progress_select_own on learner.lesson_progress
	using ((select auth.uid()) = user_id);

alter policy learner_preferences_select_own on learner.preferences
	using ((select auth.uid()) = user_id);

alter policy learner_preferences_update_own on learner.preferences
	using ((select auth.uid()) = user_id)
	with check ((select auth.uid()) = user_id);

-- At most one active publication per course version, enforced by the database.
create unique index course_publications_one_active_per_version_uidx
	on delivery.course_publications (course_version_id)
	where is_active;

commit;
