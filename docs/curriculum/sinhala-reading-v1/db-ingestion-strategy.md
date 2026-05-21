# Sinhala Reading DB Ingestion Strategy

This file plans how reviewed authoring artifacts for `sinhala-reading-v1` should
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

| Authoring artifact                                | Database target                                                                                   |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Manifest language metadata                        | `curriculum.languages`                                                                            |
| Manifest script metadata                          | `curriculum.script_systems`                                                                       |
| Course prospectus                                 | `curriculum.courses`                                                                              |
| Release plan                                      | `curriculum.course_versions`                                                                      |
| Reviewed consonants, vowels, al-lakuna, and signs | `curriculum.graphemes`, `curriculum.course_version_graphemes`                                     |
| Akshara and word segmentation                     | `curriculum.vocabulary_segments`, `curriculum.anchor_segments`                                    |
| Lesson sequence                                   | `curriculum.lessons`                                                                              |
| Anchor and support words                          | `curriculum.vocabulary_items`, `curriculum.lesson_vocabulary`                                     |
| Inherent-vowel, al-lakuna, and conjunct rules     | `curriculum.orthography_rules`, `curriculum.orthography_rule_examples`, `curriculum.lesson_rules` |
| Drills and options                                | `curriculum.drills`, `curriculum.drill_options`, `curriculum.lesson_drills`                       |
| Published runtime payloads                        | `delivery.course_publications`, `delivery.course_publication_lessons`                             |

## Publication Strategy

- Generate stable IDs from reviewed Sinhala source strings and normalized NFC
  forms.
- Store raw text, words, akshara spans, visual-order spans, and pedagogical units
  separately.
- Add structured metadata for inherent vowel behavior, vowel signs, al-lakuna,
  final consonants, conjunct chunks, and no-split display spans before
  publication.
- Insert normalized `curriculum.*` rows first.
- Build lesson-level runtime payloads from normalized rows, not from ad hoc UI
  data.
- Insert one inactive `delivery.course_publications` manifest and all matching
  `delivery.course_publication_lessons` rows.
- Activate the publication only after segmentation review, pronunciation review,
  font rendering, and payload smoke checks pass.

## Validation Checklist

- [ ] Manifest validates with `pnpm curriculum:validate`.
- [ ] Source licenses are marked as discovery-only, scoring-only, scoring, or
      shipped-content approved.
- [ ] Every new grapheme maps to one Sinhala script system and one course-version
      pedagogy row.
- [ ] Every anchor word also exists as vocabulary with `role_key = 'anchor'`.
- [ ] Every anchor has reviewed word and akshara segmentation.
- [ ] Al-lakuna, multi-part vowels, and conjunct chunks have explicit metadata.
- [ ] Every lesson has exactly one featured anchor target.
- [ ] Every drill has exactly one correct option.
- [ ] Delivery payloads can be regenerated deterministically.
- [ ] Smoke tests compare the published payload against the runtime lesson
      contract before activation.

## Open Decisions

- Should Sinhala seed data enter through a TypeScript source module first or go
  straight to generated SQL publication artifacts?
- Which segmentation and no-split display fields should block publication if
  missing?
- Should al-lakuna be represented differently for final consonants, conjuncts,
  and explicit no-vowel teaching examples?
- How should pure and mixed Sinhala inventory metadata be stored without making
  beginner v1 feel like an exhaustive chart course?
