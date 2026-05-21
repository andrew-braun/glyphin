# Tibetan Reading DB Ingestion Strategy

This file plans how reviewed authoring artifacts for `tibetan-reading-v1` should
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

| Authoring artifact                    | Database target                                                                                   |
| ------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Manifest language metadata            | `curriculum.languages`                                                                            |
| Manifest script metadata              | `curriculum.script_systems`                                                                       |
| Course prospectus                     | `curriculum.courses`                                                                              |
| Release plan                          | `curriculum.course_versions`                                                                      |
| Reviewed base letters and vowel signs | `curriculum.graphemes`, `curriculum.course_version_graphemes`                                     |
| Tsheg syllable and stack segmentation | `curriculum.vocabulary_segments`, `curriculum.anchor_segments`                                    |
| Lesson sequence                       | `curriculum.lessons`                                                                              |
| Anchor and support words              | `curriculum.vocabulary_items`, `curriculum.lesson_vocabulary`                                     |
| Root-letter and stack rules           | `curriculum.orthography_rules`, `curriculum.orthography_rule_examples`, `curriculum.lesson_rules` |
| Drills and options                    | `curriculum.drills`, `curriculum.drill_options`, `curriculum.lesson_drills`                       |
| Published runtime payloads            | `delivery.course_publications`, `delivery.course_publication_lessons`                             |

## Publication Strategy

- Generate stable IDs from reviewed Tibetan source strings and normalized NFC
  forms.
- Store raw text, tsheg-syllable segments, and pedagogical units separately so
  spelling, pronunciation, and visible cluster behavior can be reviewed.
- Insert normalized `curriculum.*` rows first, including stack and root-letter
  details in structured metadata.
- Build lesson-level runtime payloads from normalized rows, not from ad hoc UI
  data.
- Insert one inactive `delivery.course_publications` manifest and all matching
  `delivery.course_publication_lessons` rows.
- Activate the publication only after font rendering, segmentation, and payload
  smoke checks pass.

## Validation Checklist

- [ ] Manifest validates with `pnpm curriculum:validate`.
- [ ] Source licenses are marked as discovery-only, scoring-only, scoring, or
      shipped-content approved.
- [ ] Every new grapheme maps to one Tibetan script system and one course-version
      pedagogy row.
- [ ] Every anchor word also exists as vocabulary with `role_key = 'anchor'`.
- [ ] Every anchor has tsheg-syllable segmentation and optional root-letter
      metadata when a stack appears.
- [ ] Every lesson has exactly one featured anchor target.
- [ ] Every drill has exactly one correct option.
- [ ] Delivery payloads can be regenerated deterministically.
- [ ] Smoke tests compare the published payload against the runtime lesson
      contract before activation.

## Open Decisions

- Should Tibetan enter the runtime through a TypeScript seed module first or go
  straight to generated SQL publication artifacts?
- Which fields should store beginner pronunciation hints without confusing them
  with source spelling?
- Should tsheg be stored as a grapheme-like punctuation unit, segment boundary,
  or both?
- How should stacked letters be represented so drills can highlight whole visible
  syllables and still teach subparts?
