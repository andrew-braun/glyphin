begin;

create table curriculum.tips (
	id uuid primary key default gen_random_uuid(),
	course_version_id uuid not null references curriculum.course_versions(id) on delete cascade,
	key text not null,
	title text not null,
	body text not null,
	display text not null default 'popover',
	sections jsonb not null default '[]'::jsonb,
	metadata jsonb not null default '{}'::jsonb,
	created_at timestamptz not null default now(),
	constraint tips_course_version_id_key_key unique (course_version_id, key),
	constraint tips_course_version_id_id_key unique (course_version_id, id),
	constraint tips_key_length_check check (length(key) <= 64),
	constraint tips_title_length_check check (length(title) <= 160),
	constraint tips_body_length_check check (length(body) <= 4000),
	constraint tips_display_allowed_check check (display in ('popover', 'modal')),
	constraint tips_display_length_check check (length(display) <= 16),
	constraint tips_sections_array_check check (jsonb_typeof(sections) = 'array'),
	constraint tips_metadata_object_check check (jsonb_typeof(metadata) = 'object')
);

create unique index vocabulary_items_course_version_id_id_uidx
	on curriculum.vocabulary_items (course_version_id, id);

create unique index orthography_rules_course_version_id_id_uidx
	on curriculum.orthography_rules (course_version_id, id);

create table curriculum.tip_attachments (
	id uuid primary key default gen_random_uuid(),
	course_version_id uuid not null,
	tip_id uuid not null,
	slot_key text not null,
	attachment_order integer not null default 1 check (attachment_order > 0),
	grapheme_id uuid references curriculum.graphemes(id) on delete cascade,
	vocabulary_item_id uuid,
	orthography_rule_id uuid,
	constraint tip_attachments_course_version_id_tip_id_fkey
		foreign key (course_version_id, tip_id)
		references curriculum.tips(course_version_id, id)
		on delete cascade,
	constraint tip_attachments_course_version_id_vocabulary_item_id_fkey
		foreign key (course_version_id, vocabulary_item_id)
		references curriculum.vocabulary_items(course_version_id, id)
		on delete cascade,
	constraint tip_attachments_course_version_id_orthography_rule_id_fkey
		foreign key (course_version_id, orthography_rule_id)
		references curriculum.orthography_rules(course_version_id, id)
		on delete cascade,
	constraint tip_attachments_slot_key_length_check check (length(slot_key) <= 64),
	constraint tip_attachments_exactly_one_target_check
		check (num_nonnulls(grapheme_id, vocabulary_item_id, orthography_rule_id) = 1)
);

create index tip_attachments_tip_id_idx
	on curriculum.tip_attachments (tip_id);

create index tip_attachments_grapheme_id_idx
	on curriculum.tip_attachments (grapheme_id)
	where grapheme_id is not null;

create index tip_attachments_vocabulary_item_id_idx
	on curriculum.tip_attachments (vocabulary_item_id)
	where vocabulary_item_id is not null;

create index tip_attachments_orthography_rule_id_idx
	on curriculum.tip_attachments (orthography_rule_id)
	where orthography_rule_id is not null;

create unique index tip_attachments_grapheme_slot_order_uidx
	on curriculum.tip_attachments (course_version_id, grapheme_id, slot_key, attachment_order)
	where grapheme_id is not null;

create unique index tip_attachments_vocabulary_slot_order_uidx
	on curriculum.tip_attachments (
		course_version_id,
		vocabulary_item_id,
		slot_key,
		attachment_order
	)
	where vocabulary_item_id is not null;

create unique index tip_attachments_rule_slot_order_uidx
	on curriculum.tip_attachments (
		course_version_id,
		orthography_rule_id,
		slot_key,
		attachment_order
	)
	where orthography_rule_id is not null;

alter table curriculum.tips enable row level security;
alter table curriculum.tip_attachments enable row level security;

commit;
