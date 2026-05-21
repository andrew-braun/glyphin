# Arabic Script Reading DB Ingestion Strategy

This file plans how reviewed authoring artifacts for `arabic-reading-v1` should move
into the database. It is a starter strategy, not an executable migration or seed
script.

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

## Script-Specific Ingestion Notes

- Store canonical Arabic text in NFC and preserve original source strings for
  audit. Do not store Arabic presentation forms as canonical lesson text.
- Model base letters separately from rendered positional forms unless reviewer
  feedback proves a chunk needs a learner-visible row.
- Preserve RTL direction and require bidi isolation in generated runtime payloads
  that mix Arabic with English UI strings.
- Treat optional harakat, hamza variants, ta marbuta, nonjoining behavior, and
  lam-alif as explicit metadata or orthography-rule rows after review.

## Mapping Plan

| Authoring artifact          | Database target                                                                                   |
| --------------------------- | ------------------------------------------------------------------------------------------------- |
| Manifest language metadata  | `curriculum.languages`                                                                            |
| Manifest script metadata    | `curriculum.script_systems`                                                                       |
| Course prospectus           | `curriculum.courses`                                                                              |
| Release plan                | `curriculum.course_versions`                                                                      |
| Reviewed grapheme inventory | `curriculum.graphemes`, `curriculum.course_version_graphemes`                                     |
| Lesson sequence             | `curriculum.lessons`                                                                              |
| Anchor and support words    | `curriculum.vocabulary_items`, `curriculum.vocabulary_segments`, `curriculum.lesson_vocabulary`   |
| Featured lesson anchor      | `curriculum.anchor_targets`, `curriculum.anchor_segments`                                         |
| Reusable rules              | `curriculum.orthography_rules`, `curriculum.orthography_rule_examples`, `curriculum.lesson_rules` |
| Drills and options          | `curriculum.drills`, `curriculum.drill_options`, `curriculum.lesson_drills`                       |
| Published runtime payloads  | `delivery.course_publications`, `delivery.course_publication_lessons`                             |

## Publication Strategy

- Generate stable IDs and content hashes from reviewed source data.
- Insert normalized `curriculum.*` rows first.
- Build lesson-level runtime payloads from normalized rows, not from ad hoc UI
  data.
- Insert one inactive `delivery.course_publications` manifest and all matching
  `delivery.course_publication_lessons` rows.
- Activate the publication only after smoke checks confirm payload shape and
  lesson ordering.

## Validation Checklist

- [ ] Manifest validates with `pnpm curriculum:validate`.
- [ ] Source licenses are marked as discovery-only, scoring-only, scoring, or
      shipped-content approved.
- [ ] Every new grapheme maps to one script system and one course-version
      pedagogy row.
- [ ] Every anchor word also exists as vocabulary with `role_key = 'anchor'`.
- [ ] Every lesson has exactly one featured anchor target.
- [ ] Every drill has exactly one correct option.
- [ ] Delivery payloads can be regenerated deterministically.
- [ ] Smoke tests compare the published payload against the runtime lesson
      contract before activation.

## Open Decisions

- Should this course use a TypeScript source module first, or go straight to a
  generated SQL seed/publication artifact?
- Which reviewed fields are allowed to become learner-visible copy?
- Which artifacts must remain analysis-only because of source licenses?
- Should Arabic positional forms live in `curriculum.graphemes.details`, in a
  separate variant table, or as rule examples rendered from base letters?
- Should lam-alif be stored as a grapheme, a chunk, or an orthography-rule
  example?
- How should delivery payloads mark text direction and bidi isolation for mixed
  Arabic and English strings?
- How should unvowelled canonical text relate to optional teaching vowels in
  drills and reviewer packets?
