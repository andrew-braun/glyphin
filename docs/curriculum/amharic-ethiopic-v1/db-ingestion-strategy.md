# Amharic Ethiopic Reading DB Ingestion Strategy

This file plans how reviewed authoring artifacts for `amharic-ethiopic-v1`
should move into the database. It is a starter strategy, not an executable
migration or seed script.

## Source Artifacts

- Manifest: `manifest.json`
- Sources: `sources.csv`
- Grapheme candidates: `grapheme-candidates.csv`
- Anchor candidates: `anchor-candidates.csv`
- Lesson sequence: `lesson-sequence.md`
- Review packet: `review-packet.md`
- Open questions: `questions.md`
- Future lesson data: TBD

## Target Database Boundary

- `curriculum` stores normalized authoring data and is not queried directly by
  learner routes.
- `delivery` stores immutable published lesson bundles for runtime reads and
  offline caching.
- `learner` is out of scope for curriculum ingestion except for future progress
  compatibility checks.
- `internal_api` may eventually own publication helper functions, but this
  starter strategy should not add privileged functions without separate review.

## Mapping Plan

| Authoring artifact              | Database target                                                                                   |
| ------------------------------- | ------------------------------------------------------------------------------------------------- |
| Manifest language metadata      | `curriculum.languages`                                                                            |
| Manifest script metadata        | `curriculum.script_systems`                                                                       |
| Course prospectus               | `curriculum.courses`                                                                              |
| Release plan                    | `curriculum.course_versions`                                                                      |
| Reviewed fidel inventory        | `curriculum.graphemes`, `curriculum.course_version_graphemes`                                     |
| Fidel family and order metadata | JSON metadata on grapheme rows until a shared grid model exists                                   |
| Lesson sequence                 | `curriculum.lessons`                                                                              |
| Anchor and support words        | `curriculum.vocabulary_items`, `curriculum.vocabulary_segments`, `curriculum.lesson_vocabulary`   |
| Featured lesson anchor          | `curriculum.anchor_targets`, `curriculum.anchor_segments`                                         |
| Vowel-order and family rules    | `curriculum.orthography_rules`, `curriculum.orthography_rule_examples`, `curriculum.lesson_rules` |
| Drills and options              | `curriculum.drills`, `curriculum.drill_options`, `curriculum.lesson_drills`                       |
| Published runtime payloads      | `delivery.course_publications`, `delivery.course_publication_lessons`                             |

## Publication Strategy

- Generate stable IDs from course ID, lesson number, fidel text, and word text.
- Store each Ethiopic fidel as learner-visible text with reviewed family and
  order metadata.
- Keep external corpus and lexicon sources out of learner-visible payloads.
- Insert one inactive delivery publication and activate only after Amharic
  speaker review, font review, and smoke checks.

## Validation Checklist

- [ ] Manifest validates with `pnpm curriculum:validate`.
- [ ] Source licenses are marked as discovery-only, scoring-only, scoring, or
      shipped-content approved.
- [ ] Every new fidel maps to one script system and one course-version row.
- [ ] Every grapheme has reviewed family and order metadata where applicable.
- [ ] Every anchor word also exists as vocabulary with `role_key = 'anchor'`.
- [ ] Every lesson has exactly one featured anchor target or documented pair.
- [ ] Every drill has exactly one correct option.
- [ ] Delivery payloads can be regenerated deterministically.
- [ ] Smoke tests verify Ethiopic text and punctuation render correctly.

## Open Decisions

- Should family and order become first-class database tables or stay JSON
  metadata until another syllabary or abugida course needs the same model?
- Which romanization or pronunciation hint standard should Amharic use?
- Should morphology around `መ-` nouns be stored as rule metadata or avoided in
  v1 learner-visible copy?
- Which frequency and lexicon sources can safely inform shipped content after
  legal and reviewer sign-off?
