# Old Italic Reading DB Ingestion Strategy

This file plans how reviewed authoring artifacts for `old-italic-reading-v1`
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

- `curriculum` stores reviewed letters, orientation, transliteration, and source
  metadata.
- `delivery` stores immutable published lesson bundles with cleared examples.
- `learner` is out of scope except for future progress compatibility.
- `internal_api` may own publication helpers after separate review.

## Mapping Plan

| Authoring artifact                  | Database target                                                             |
| ----------------------------------- | --------------------------------------------------------------------------- |
| Manifest language metadata          | `curriculum.languages`                                                      |
| Manifest script metadata            | `curriculum.script_systems`                                                 |
| Course prospectus                   | `curriculum.courses`                                                        |
| Release plan                        | `curriculum.course_versions`                                                |
| Reviewed letter inventory           | `curriculum.graphemes`, `curriculum.course_version_graphemes`               |
| Direction and transliteration rules | `curriculum.orthography_rules`, `curriculum.anchor_segments`                |
| Lesson sequence                     | `curriculum.lessons`                                                        |
| Anchor words and names              | `curriculum.vocabulary_items`, `curriculum.anchor_targets`                  |
| Drills and options                  | `curriculum.drills`, `curriculum.drill_options`, `curriculum.lesson_drills` |
| Published runtime payloads          | `delivery.course_publications`, `delivery.course_publication_lessons`       |

## Publication Strategy

- Ingest only specialist-reviewed app-authored examples.
- Store glyph text, transliteration, direction, source confidence, and context
  separately.
- Keep exact inscriptions analysis-only until reuse rights are cleared.
- Activate only after RTL rendering and font checks pass.

## Validation Checklist

- [ ] Manifest validates with `pnpm curriculum:validate`.
- [ ] Candidate CSVs score with `pnpm curriculum:score`.
- [ ] Every anchor has reviewed orientation and transliteration.
- [ ] Low-confidence chunks are excluded or clearly reviewer-gated.
- [ ] Source licenses are marked conservatively.
- [ ] Delivery payloads can be regenerated deterministically.

## Open Decisions

- Should the display name stay Old Italic if v1 is Etruscan-leaning?
- Where should RTL orientation drills live in the curriculum schema?
- Which inscriptions or object domains are safe enough to model in app-authored
  examples?
