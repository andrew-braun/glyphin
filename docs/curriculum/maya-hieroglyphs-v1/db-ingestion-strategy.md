# Maya Hieroglyphs Reading DB Ingestion Strategy

This file plans how reviewed authoring artifacts for `maya-hieroglyphs-v1`
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

- `curriculum` stores reviewed sign labels, block metadata, sources, and lesson
  sequencing.
- `delivery` stores immutable published lesson bundles with only cleared assets.
- `learner` is out of scope except for future multi-course progress behavior.
- `internal_api` may own publication helpers only after rights and asset review.

## Mapping Plan

| Authoring artifact         | Database target                                                             |
| -------------------------- | --------------------------------------------------------------------------- |
| Manifest language metadata | `curriculum.languages`                                                      |
| Manifest script metadata   | `curriculum.script_systems`                                                 |
| Course prospectus          | `curriculum.courses`                                                        |
| Release plan               | `curriculum.course_versions`                                                |
| Reviewed sign inventory    | `curriculum.graphemes`, `curriculum.course_version_graphemes`               |
| Glyph blocks and variants  | `curriculum.anchor_segments`, future asset metadata                         |
| Lesson sequence            | `curriculum.lessons`                                                        |
| Anchor sign labels         | `curriculum.vocabulary_items`, `curriculum.anchor_targets`                  |
| Drills and options         | `curriculum.drills`, `curriculum.drill_options`, `curriculum.lesson_drills` |
| Published runtime payloads | `delivery.course_publications`, `delivery.course_publication_lessons`       |

## Publication Strategy

- Publish only app-authored block diagrams or explicitly cleared sign assets.
- Store sign label, transliteration, catalog ID, block position, and rights status
  separately.
- Exclude analysis-only inscription text and external drawings from runtime
  payloads.
- Activate only after Mayanist review, rights review, and rendering checks pass.

## Validation Checklist

- [ ] Manifest validates with `pnpm curriculum:validate`.
- [ ] Candidate CSVs score with `pnpm curriculum:score`.
- [ ] Each shipped asset has explicit app-owned or licensed status.
- [ ] Every anchor has a reviewed sign label and learner-safe context.
- [ ] Mixed-direction block order is represented without relying on plain text.
- [ ] Delivery payloads can be regenerated deterministically.

## Open Decisions

- Does the existing schema need a separate table for glyph assets and catalog
  identifiers?
- How should review packets include non-text glyph evidence without shipping it?
- Which renderer should own block layout and variant display?
