# Old Persian Cuneiform Reading DB Ingestion Strategy

This file plans how reviewed authoring artifacts for `old-persian-cuneiform-v1`
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

- `curriculum` stores reviewed sign, transliteration, source, and lesson data.
- `delivery` stores immutable published lesson bundles with cleared content.
- `learner` is out of scope except for future progress compatibility.
- `internal_api` may own publication helpers after separate review.

## Mapping Plan

| Authoring artifact                     | Database target                                                             |
| -------------------------------------- | --------------------------------------------------------------------------- |
| Manifest language metadata             | `curriculum.languages`                                                      |
| Manifest script metadata               | `curriculum.script_systems`                                                 |
| Course prospectus                      | `curriculum.courses`                                                        |
| Release plan                           | `curriculum.course_versions`                                                |
| Reviewed sign inventory                | `curriculum.graphemes`, `curriculum.course_version_graphemes`               |
| Word divider and transliteration rules | `curriculum.orthography_rules`, `curriculum.anchor_segments`                |
| Lesson sequence                        | `curriculum.lessons`                                                        |
| Anchor sign sequences                  | `curriculum.vocabulary_items`, `curriculum.anchor_targets`                  |
| Drills and options                     | `curriculum.drills`, `curriculum.drill_options`, `curriculum.lesson_drills` |
| Published runtime payloads             | `delivery.course_publications`, `delivery.course_publication_lessons`       |

## Publication Strategy

- Ingest only specialist-reviewed app-authored examples.
- Store glyph sequence, transliteration, gloss, and provenance separately.
- Treat exact inscription editions as analysis-only until rights review passes.
- Activate only after font and word-divider smoke checks pass.

## Validation Checklist

- [ ] Manifest validates with `pnpm curriculum:validate`.
- [ ] Candidate CSVs score with `pnpm curriculum:score`.
- [ ] Every anchor has a reviewed transliteration and gloss.
- [ ] The word divider has a stable modeling decision.
- [ ] Source licenses are marked conservatively.
- [ ] Delivery payloads can be regenerated deterministically.

## Open Decisions

- Should royal-name chunks be stored as vocabulary, anchors, or both?
- Which transliteration standard should be stored for learner-facing display?
- Which font should be required for production rendering?
