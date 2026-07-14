begin;

create table curriculum.course_stages (
	id uuid primary key default gen_random_uuid(),
	course_version_id uuid not null references curriculum.course_versions(id) on delete cascade,
	stage_ordinal integer not null check (stage_ordinal > 0),
	title text not null check (length(title) <= 160),
	summary text not null check (length(summary) <= 320),
	metadata jsonb not null default '{}'::jsonb,
	created_at timestamptz not null default now(),
	constraint course_stages_course_version_id_stage_ordinal_key
		unique (course_version_id, stage_ordinal),
	constraint course_stages_course_version_id_id_key unique (course_version_id, id)
);

create index course_stages_course_version_id_stage_ordinal_idx
	on curriculum.course_stages (course_version_id, stage_ordinal);

create table delivery.course_publication_stages (
	id uuid primary key default gen_random_uuid(),
	publication_id uuid not null references delivery.course_publications(id) on delete cascade,
	course_stage_id uuid not null references curriculum.course_stages(id) on delete restrict,
	stage_ordinal integer not null check (stage_ordinal > 0),
	payload jsonb not null,
	payload_hash text not null check (length(payload_hash) <= 128),
	created_at timestamptz not null default now(),
	constraint course_publication_stages_publication_id_course_stage_id_key
		unique (publication_id, course_stage_id),
	constraint course_publication_stages_publication_id_stage_ordinal_key
		unique (publication_id, stage_ordinal)
);

create index course_publication_stages_publication_id_stage_ordinal_idx
	on delivery.course_publication_stages (publication_id, stage_ordinal);

revoke all on curriculum.course_stages from public, anon, authenticated;
grant select on delivery.course_publication_stages to anon, authenticated;

alter table curriculum.course_stages enable row level security;
alter table delivery.course_publication_stages enable row level security;

create policy delivery_course_publication_stages_public_select
	on delivery.course_publication_stages
	for select
	to anon, authenticated
	using (
		exists (
			select 1
			from delivery.course_publications cp
			where cp.id = publication_id
				and cp.is_active = true
		)
	);

do $$
declare
	expected_course_version_id constant uuid := '92c6b63e-6aab-5f26-af3d-30738bdaaf37';
	expected_publication_id constant uuid := '05ef7f1d-533e-5a74-afe1-17d35390fa15';
	stage_publication_id constant uuid := 'b73c138f-20d5-50d7-afe8-cfdb8d00f5d1';
	active_publication_count integer;
	active_publication_id uuid;
	active_manifest_hash text;
	active_created_by uuid;
	lesson_count integer;
begin
	select count(*)
	into active_publication_count
	from delivery.course_publications
	where course_version_id = expected_course_version_id
		and is_active = true;

	-- Fresh local resets apply migrations before seed data exists; the generated
	-- seed below will create the stage-aware initial publication itself.
	if active_publication_count = 0 then
		return;
	end if;

	select id, manifest_hash, created_by
	into active_publication_id, active_manifest_hash, active_created_by
	from delivery.course_publications
	where course_version_id = expected_course_version_id
		and is_active = true
	order by created_at desc
	limit 1;

	if active_publication_count <> 1 or active_publication_id <> expected_publication_id then
		raise exception
			'course stage publication expected active publication %, found % (% active)',
			expected_publication_id,
			active_publication_id,
			active_publication_count;
	end if;

	select count(*)
	into lesson_count
	from delivery.course_publication_lessons
	where publication_id = active_publication_id;

	if lesson_count <> 46 then
		raise exception
			'course stage publication expected 46 lessons, found %',
			lesson_count;
	end if;

	if exists (
		select 1
		from curriculum.course_stages
		where course_version_id = expected_course_version_id
	) then
		raise exception 'course stage publication expected no existing stage rows';
	end if;

	insert into curriculum.course_stages (
		id,
		course_version_id,
		stage_ordinal,
		title,
		summary,
		metadata
	)
	values
		('74d11ee1-218b-51e9-ab29-6dbe07e9c8b2', expected_course_version_id, 1, 'Runtime First Decoding Wins', 'Decode useful everyday words with the first consonants and vowels.', '{}'::jsonb),
		('4ac2338d-3f96-5baa-a31c-eda9d651530e', expected_course_version_id, 2, 'Markets And Reusable Frames', 'Reuse familiar reading patterns in market and movement words.', '{}'::jsonb),
		('e4ad5ecf-d58f-5ede-a973-01e0b92790f3', expected_course_version_id, 3, 'Before Vowels And Tone Marks', 'Scan left and above the consonant before sounding out a word.', '{}'::jsonb),
		('3823ebb1-da4a-53a7-a55d-5f5346ea2a3e', expected_course_version_id, 4, 'Menu Combos And Prices', 'Read compact menu combinations, price words, and clipped final sounds.', '{}'::jsonb),
		('37279a53-acc3-5a5b-ad8d-39737cb6b2f7', expected_course_version_id, 5, 'Survival Food Words And Carriers', 'Recognize food words, silent carriers, and leading-H patterns.', '{}'::jsonb),
		('ec699459-a41d-5aae-abc0-d7106e3ce687', expected_course_version_id, 6, 'High-Frequency Consonants And The Leading-Vowel System', 'Use common consonants and leading vowels across signs and labels.', '{}'::jsonb),
		('7b86bf98-878f-5c9d-a251-76cfbab7b835', expected_course_version_id, 7, 'Remaining Core Consonants And Wrap-Around Vowels', 'Read high-frequency consonants inside wrap-around vowel shapes.', '{}'::jsonb),
		('4c787b53-c686-52d2-a144-795949dfcfb0', expected_course_version_id, 8, 'Sibilant/Fricative Completion And Above-Line Vowels', 'Complete common sound pairs and scan vowels written above the line.', '{}'::jsonb),
		('7697da28-81f4-5a7e-a43d-dc005f18480c', expected_course_version_id, 9, 'Diphthongs, Glide Finals, And True Clusters', 'Join multi-part vowels, glide endings, and consonant clusters.', '{}'::jsonb),
		('45eea383-7c9c-555e-adfb-e811da6fb271', expected_course_version_id, 10, 'The Full Tone System And Spelling Marks', 'Combine consonant class, tone marks, and spelling marks with confidence.', '{}'::jsonb),
		('3035a18b-ecf8-57bc-a7ea-271526875a20', expected_course_version_id, 11, 'Numerals And Abbreviations', 'Read Thai prices, addresses, numerals, and common abbreviations.', '{}'::jsonb),
		('494ebd25-bfd7-54bc-aeed-d6f1e40bc82b', expected_course_version_id, 12, 'Remaining Live Consonants', 'Recognize the remaining consonants used in modern everyday Thai.', '{}'::jsonb),
		('80ea2c46-f67a-5966-aa30-d679fec8c4da', expected_course_version_id, 13, 'Redundant Sanskrit/Pali Glyphs', 'Map rarer formal glyphs onto sounds you already know.', '{}'::jsonb),
		('f40ee14f-98ad-5956-a0ca-9f6aafd45d18', expected_course_version_id, 14, 'Historical Glyphs', 'Recognize obsolete characters without treating them as modern reading targets.', '{}'::jsonb);

	insert into delivery.course_publications (
		id,
		course_version_id,
		manifest_hash,
		is_active,
		created_by
	)
	values (
		stage_publication_id,
		expected_course_version_id,
		encode(
			extensions.digest(active_manifest_hash || ':course-stages-v1', 'sha256'),
			'hex'
		),
		false,
		active_created_by
	);

	insert into delivery.course_publication_lessons (
		id,
		publication_id,
		lesson_id,
		lesson_slug,
		lesson_ordinal,
		payload,
		payload_hash
	)
	select
		gen_random_uuid(),
		stage_publication_id,
		lesson_id,
		lesson_slug,
		lesson_ordinal,
		payload,
		payload_hash
	from delivery.course_publication_lessons
	where publication_id = active_publication_id
	order by lesson_ordinal;

	insert into delivery.course_publication_stages (
		id,
		publication_id,
		course_stage_id,
		stage_ordinal,
		payload,
		payload_hash
	)
	select
		stage_ids.publication_stage_id,
		stage_publication_id,
		course_stage.id,
		course_stage.stage_ordinal,
		jsonb_build_object(
			'ordinal', course_stage.stage_ordinal,
			'title', course_stage.title,
			'summary', course_stage.summary
		),
		stage_ids.payload_hash
	from curriculum.course_stages course_stage
	join (
		values
			(1, 'd4a74551-78b4-5b30-a316-f959ea9471df'::uuid, '8da77b800731c9c78bd602a286770a3231ce951f0d622cf5bc5074628258bb9a'),
			(2, '63bdad67-fd09-59be-a9f0-e07d063e7ace'::uuid, '160adcb5eda933b2b2c1b1051657fba5aefc82d1a383f68dcf3599a8ccb9ec2a'),
			(3, '38d7638d-77a4-58a2-af08-eab598841d12'::uuid, 'ce3ebf7f0703947cdc5049dab4e3db2bc2ae9987fa3a912b252d83527031168f'),
			(4, '23b39238-11cb-527a-a493-9fedbf364039'::uuid, '59b573235b59bdebb907e0865fbd4068507791202435ae1c7c7691e04b549a91'),
			(5, 'f2936ef7-8233-5a29-a347-da539c4c8df8'::uuid, '9b63f3008c7c58febf7d07faeb8db585a55427a590d28682083ae2f26a243748'),
			(6, 'd2af2f8b-b76c-5b04-a441-1c117fefc10d'::uuid, '970abaac80217a97251123fff7af02f57046ec7357e59b3cfdf8d68da6a65461'),
			(7, '05b4588b-aae1-51dd-a982-bd26703baa3b'::uuid, '889d974aec72234be5d9cd7ae024c3fc4aad5f7ab20f12fe5f0c26d21c86fcb8'),
			(8, '60f8f338-b0ae-5010-affc-4dfd5161c9aa'::uuid, '33c83fa9b2ccba6b0df84908349462f215c8f4220ca9a60af045bdaba268247c'),
			(9, '7779a125-4169-549d-a792-a1df8f9459d8'::uuid, '31ca52f7c94a3396673b49c109d0c0d6be8925ccbff131fb6384988b6984d73f'),
			(10, '4d72f7e9-df11-5f4e-ab68-d6067b0aa022'::uuid, '69f179420bcad53cc410e4bb72cbcee286c3ef2ed1e023c712115a25b3ea35ad'),
			(11, '897173af-abed-50ee-acb5-81a150578885'::uuid, 'a6e3f8414d77dbbc3ec8c4dff154efb0ccce1d355abd1b186e6891a4c7900443'),
			(12, '4a4b5888-36e8-5381-a0d0-1322866513fe'::uuid, 'f85b8d65aac9fc45e3d42f82f32f96e33316cb396f5fa120dca4628535d4daac'),
			(13, 'e3758330-4eb5-5038-a489-b32a50dc2847'::uuid, '55348482c11da924dc82d41a36271ddfb56fe7dfa8bed511fbaee4aa6da4f72b'),
			(14, 'aa479521-dc5d-504f-a662-3cac5aae0ede'::uuid, '38c4172764577f8f56dcb9d39fb98b61241b1a562fdc8b7e224513c536caea02')
	) as stage_ids(stage_ordinal, publication_stage_id, payload_hash)
		on stage_ids.stage_ordinal = course_stage.stage_ordinal
	where course_stage.course_version_id = expected_course_version_id
	order by course_stage.stage_ordinal;

	update delivery.course_publications
	set is_active = false
	where id = active_publication_id;

	update delivery.course_publications
	set is_active = true
	where id = stage_publication_id;
end;
$$;

commit;
