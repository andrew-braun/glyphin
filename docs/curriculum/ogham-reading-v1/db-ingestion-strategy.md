# Ogham Reading DB Ingestion Strategy

This file plans how reviewed authoring artifacts for `ogham-reading-v1` should
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

| Authoring artifact          | Database target                                                                                   |
| --------------------------- | ------------------------------------------------------------------------------------------------- |
| Manifest language metadata  | `curriculum.languages`                                                                            |
| Manifest script metadata    | `curriculum.script_systems` plus orientation details                                              |
| Course prospectus           | `curriculum.courses`                                                                              |
| Release plan                | `curriculum.course_versions`                                                                      |
| Reviewed Ogham inventory    | `curriculum.graphemes`, `curriculum.course_version_graphemes`                                     |
| Aicme and boundary metadata | Course-version grapheme details or a future script metadata table                                 |
| Lesson sequence             | `curriculum.lessons`                                                                              |
| Formula anchor targets      | `curriculum.anchor_targets`, `curriculum.anchor_segments`                                         |
| Reusable rules              | `curriculum.orthography_rules`, `curriculum.orthography_rule_examples`, `curriculum.lesson_rules` |
| Drills and options          | `curriculum.drills`, `curriculum.drill_options`, `curriculum.lesson_drills`                       |
| Published runtime payloads  | `delivery.course_publications`, `delivery.course_publication_lessons`                             |

## Publication Strategy

- Generate stable IDs from Ogham text plus reviewed transliteration and formula
  label.
- Store script text, transliteration, formula role, boundary marks, and
  orientation notes separately in publication payloads.
- Keep external inscription records out of learner-facing payloads unless license
  sign-off approves specific examples.
- Insert one inactive `delivery.course_publications` manifest and all matching
  `delivery.course_publication_lessons` rows.
- Activate the publication only after smoke checks confirm glyph rendering,
  orientation notes, and lesson ordering.

## Validation Checklist

- [ ] Manifest validates with `pnpm curriculum:validate`.
- [ ] Source licenses are marked as discovery-only, scoring-only, scoring, or
      shipped-content approved.
- [ ] Every Ogham unit has a reviewed transliteration and aicme or boundary role.
- [ ] Formula chunks are clearly distinguished from dictionary vocabulary.
- [ ] Orientation metadata is present for any example modeled on stone layout.
- [ ] Every lesson has exactly one featured anchor target.
- [ ] Delivery payloads can be regenerated deterministically.
- [ ] Smoke tests compare the published payload against the runtime lesson
      contract before activation.

## Open Decisions

- Should Ogham boundary marks be stored as graphemes or punctuation-like anchor
  segments?
- Which field should carry stone orientation and source-display notes?
- Which artifacts must remain analysis-only because of source licenses?
- Should formula fragments become a reusable curriculum concept across
  epigraphic courses?
