# Brahmi Reading DB Ingestion Strategy

This file plans how reviewed authoring artifacts for `brahmi-reading-v1` should
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

- `curriculum` stores reviewed signs, akshara segments, transliteration, source,
  and lesson data.
- `delivery` stores immutable published lesson bundles with cleared content.
- `learner` is out of scope except for future progress compatibility.
- `internal_api` may own publication helpers after separate review.

## Mapping Plan

| Authoring artifact           | Database target                                                             |
| ---------------------------- | --------------------------------------------------------------------------- |
| Manifest language metadata   | `curriculum.languages`                                                      |
| Manifest script metadata     | `curriculum.script_systems`                                                 |
| Course prospectus            | `curriculum.courses`                                                        |
| Release plan                 | `curriculum.course_versions`                                                |
| Reviewed sign inventory      | `curriculum.graphemes`, `curriculum.course_version_graphemes`               |
| Akshara and vowel-sign rules | `curriculum.orthography_rules`, `curriculum.anchor_segments`                |
| Lesson sequence              | `curriculum.lessons`                                                        |
| Anchor words                 | `curriculum.vocabulary_items`, `curriculum.anchor_targets`                  |
| Drills and options           | `curriculum.drills`, `curriculum.drill_options`, `curriculum.lesson_drills` |
| Published runtime payloads   | `delivery.course_publications`, `delivery.course_publication_lessons`       |

## Publication Strategy

- Ingest only specialist-reviewed app-authored examples.
- Store glyph text, akshara segmentation, transliteration, language-scope note,
  and inscription provenance separately.
- Keep exact inscriptions and external database records analysis-only until
  rights review.
- Activate only after font, combining-mark, and cultural-context checks pass.

## Validation Checklist

- [ ] Manifest validates with `pnpm curriculum:validate`.
- [ ] Candidate CSVs score with `pnpm curriculum:score`.
- [ ] Every anchor has reviewed transliteration and segmentation.
- [ ] Sanskrit versus Prakrit scope is explicitly resolved or flagged.
- [ ] Source licenses are marked conservatively.
- [ ] Delivery payloads can be regenerated deterministically.

## Open Decisions

- Should Brahmi share an abugida segment model with modern Indic courses?
- Which language tag should be used for the first reviewed inscription course?
- How should regional and chronological sign variants be exposed to learners?
