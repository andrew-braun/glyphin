# Sumerian Cuneiform Reading DB Ingestion Strategy

This file plans how reviewed authoring artifacts for `cuneiform-reading-v1`
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

- `curriculum` stores reviewed sign, source, sequence, and rule metadata.
- `delivery` stores immutable published lesson bundles for runtime reads.
- `learner` is out of scope except for future multi-course progress behavior.
- `internal_api` may eventually own publication helpers after separate review.

## Mapping Plan

| Authoring artifact             | Database target                                                             |
| ------------------------------ | --------------------------------------------------------------------------- |
| Manifest language metadata     | `curriculum.languages`                                                      |
| Manifest script metadata       | `curriculum.script_systems`                                                 |
| Course prospectus              | `curriculum.courses`                                                        |
| Release plan                   | `curriculum.course_versions`                                                |
| Reviewed sign inventory        | `curriculum.graphemes`, `curriculum.course_version_graphemes`               |
| Sign values and determinatives | `curriculum.orthography_rules`, `curriculum.anchor_segments`                |
| Lesson sequence                | `curriculum.lessons`                                                        |
| Anchor signs                   | `curriculum.vocabulary_items`, `curriculum.anchor_targets`                  |
| Drills and options             | `curriculum.drills`, `curriculum.drill_options`, `curriculum.lesson_drills` |
| Published runtime payloads     | `delivery.course_publications`, `delivery.course_publication_lessons`       |

## Publication Strategy

- Import only specialist-reviewed app-authored lesson examples.
- Store sign glyph, sign label, transliteration value, and uncertainty notes as
  separate fields.
- Preserve source provenance for scoring inputs while excluding analysis-only
  corpus text from published payloads.
- Activate a publication only after font, review, and payload smoke checks pass.

## Validation Checklist

- [ ] Manifest validates with `pnpm curriculum:validate`.
- [ ] Candidate CSVs score with `pnpm curriculum:score`.
- [ ] Source uses are restricted to discovery, scoring, or app-authored shipped
      content.
- [ ] Every anchor has one featured sign or sign sequence and one reviewed
      transliteration label.
- [ ] Every determinative lesson has explicit cultural and semantic notes.
- [ ] Delivery payloads can be regenerated deterministically.

## Open Decisions

- Should cuneiform sign values live in grapheme metadata or a dedicated sign
  reading table?
- Which uncertainty fields should be visible to learners versus reviewers only?
- Which font should be bundled or preferred for encoded cuneiform?
