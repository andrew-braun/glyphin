# Sitelen Pona Reading DB Ingestion Strategy

This file plans how reviewed authoring artifacts for `sitelen-pona-v1` should
move into the database. It is a starter strategy, not an executable migration or
seed script.

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

| Authoring artifact           | Database target                                                                                   |
| ---------------------------- | ------------------------------------------------------------------------------------------------- |
| Manifest language metadata   | `curriculum.languages`                                                                            |
| Manifest script metadata     | `curriculum.script_systems` with non-Unicode metadata                                             |
| Course prospectus            | `curriculum.courses`                                                                              |
| Release plan                 | `curriculum.course_versions`                                                                      |
| Reviewed glyph IDs           | `curriculum.graphemes`, `curriculum.course_version_graphemes`                                     |
| Font and variant policy      | `curriculum.courses.ui_config` and grapheme metadata pending convention                           |
| Lesson sequence              | `curriculum.lessons`                                                                              |
| Anchor and support sequences | `curriculum.vocabulary_items`, `curriculum.vocabulary_segments`, `curriculum.lesson_vocabulary`   |
| Featured lesson anchor       | `curriculum.anchor_targets`, `curriculum.anchor_segments`                                         |
| Reusable rules               | `curriculum.orthography_rules`, `curriculum.orthography_rule_examples`, `curriculum.lesson_rules` |
| Drills and options           | `curriculum.drills`, `curriculum.drill_options`, `curriculum.lesson_drills`                       |
| Published runtime payloads   | `delivery.course_publications`, `delivery.course_publication_lessons`                             |

## Publication Strategy

- Generate stable IDs and content hashes from reviewed glyph-ID data.
- Insert normalized `curriculum.*` rows first.
- Store glyph IDs as canonical source text until a font or asset renderer is
  approved.
- Build lesson-level runtime payloads from normalized rows, not from ad hoc UI
  data.
- Insert one inactive `delivery.course_publications` manifest and all matching
  `delivery.course_publication_lessons` rows.
- Activate the publication only after smoke checks confirm glyph rendering,
  accessibility labels, licensing status, and lesson ordering.

## Validation Checklist

- [ ] Manifest validates with `pnpm curriculum:validate`.
- [ ] Source licenses are marked as discovery-only, scoring-only, scoring, or
      shipped-content approved.
- [ ] Every glyph ID maps to one script system and one course-version pedagogy
      row.
- [ ] Every anchor sequence also exists as vocabulary with `role_key = 'anchor'`.
- [ ] Every lesson has exactly one featured anchor target.
- [ ] Every drill has exactly one correct option.
- [ ] Delivery payloads can be regenerated deterministically.
- [ ] Smoke tests compare the published payload against the runtime lesson
      contract before activation.

## Open Decisions

- Should the DB store glyph IDs only or also approved PUA text and font metadata?
- Which reviewed fields are allowed to become learner-visible copy?
- Which artifacts must remain analysis-only because of source or font licenses?
- Does the current `curriculum.graphemes.text` uniqueness rule handle glyph IDs
  and rendered forms without a new asset table?
