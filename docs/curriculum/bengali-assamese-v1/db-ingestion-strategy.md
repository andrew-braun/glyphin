# Bengali-Assamese Reading DB Ingestion Strategy

This file plans how reviewed authoring artifacts for `bengali-assamese-v1`
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

| Authoring artifact                       | Database target                                                                                   |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Manifest language metadata               | `curriculum.languages`                                                                            |
| Manifest script metadata                 | `curriculum.script_systems`                                                                       |
| Course prospectus                        | `curriculum.courses`                                                                              |
| Release plan                             | `curriculum.course_versions`                                                                      |
| Reviewed Bengali and Assamese-note units | `curriculum.graphemes`, `curriculum.course_version_graphemes`                                     |
| Akshara and conjunct segmentation        | `curriculum.vocabulary_segments`, `curriculum.anchor_segments`                                    |
| Lesson sequence                          | `curriculum.lessons`                                                                              |
| Anchor and support words                 | `curriculum.vocabulary_items`, `curriculum.lesson_vocabulary`                                     |
| Orthographic rules                       | `curriculum.orthography_rules`, `curriculum.orthography_rule_examples`, `curriculum.lesson_rules` |
| Drills and options                       | `curriculum.drills`, `curriculum.drill_options`, `curriculum.lesson_drills`                       |
| Published runtime payloads               | `delivery.course_publications`, `delivery.course_publication_lessons`                             |

## Publication Strategy

- Generate stable IDs and content hashes from reviewed source data.
- Store learner-visible Bengali text in NFC and keep Assamese note examples
  separate from Bengali-first lesson anchors.
- Insert normalized `curriculum.*` rows before generating delivery payloads.
- Represent hasanta clusters and matra position as structured segment metadata.
- Insert one inactive `delivery.course_publications` manifest and all matching
  `delivery.course_publication_lessons` rows.
- Activate the publication only after smoke checks confirm payload shape and
  lesson ordering.

## Validation Checklist

- [ ] Manifest validates with `pnpm curriculum:validate`.
- [ ] Candidate files score with `pnpm curriculum:score`.
- [ ] Review packet is generated with `pnpm curriculum:review`.
- [ ] Source licenses are marked as discovery-only, scoring-only, scoring, or
      shipped-content approved.
- [ ] Every anchor has reviewed Bengali-first segmentation.
- [ ] Assamese notes are flagged so they do not appear as early Bengali lesson
      requirements.
- [ ] Delivery payloads can be regenerated deterministically.

## Open Decisions

- Should Bengali and Assamese share one course version or split into linked
  courses before runtime implementation?
- Which fields carry shared-script variant notes in the delivery payload?
- Should conjuncts be stored as graphemes, orthography-rule examples, or both?
- Which source-derived facts remain analysis-only because of source licenses?
