# Phoenician Reading DB Ingestion Strategy

This file plans how reviewed authoring artifacts for `phoenician-reading-v1`
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

| Authoring artifact                        | Database target                                                                                   |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Manifest language metadata                | `curriculum.languages`                                                                            |
| Manifest script metadata                  | `curriculum.script_systems` plus RTL details                                                      |
| Course prospectus                         | `curriculum.courses`                                                                              |
| Release plan                              | `curriculum.course_versions`                                                                      |
| Reviewed consonant inventory              | `curriculum.graphemes`, `curriculum.course_version_graphemes`                                     |
| Transliteration and vocalization metadata | Course-version grapheme details or future vocabulary metadata                                     |
| Lesson sequence                           | `curriculum.lessons`                                                                              |
| Anchor targets                            | `curriculum.anchor_targets`, `curriculum.anchor_segments`                                         |
| Reusable rules                            | `curriculum.orthography_rules`, `curriculum.orthography_rule_examples`, `curriculum.lesson_rules` |
| Drills and options                        | `curriculum.drills`, `curriculum.drill_options`, `curriculum.lesson_drills`                       |
| Published runtime payloads                | `delivery.course_publications`, `delivery.course_publication_lessons`                             |

## Publication Strategy

- Generate stable IDs from normalized consonant skeletons plus reviewed
  transliteration.
- Store script text, transliteration, optional vocalization, gloss, and RTL flags
  separately in publication payloads.
- Keep external inscription text out of learner-facing payloads unless license
  sign-off approves specific examples.
- Insert one inactive `delivery.course_publications` manifest and all matching
  `delivery.course_publication_lessons` rows.
- Activate the publication only after smoke checks confirm RTL rendering,
  transliteration alignment, and lesson ordering.

## Validation Checklist

- [ ] Manifest validates with `pnpm curriculum:validate`.
- [ ] Source licenses are marked as discovery-only, scoring-only, scoring, or
      shipped-content approved.
- [ ] Every consonant has a reviewed transliteration label.
- [ ] Every anchor stores script text and consonant skeleton separately from
      vocalized glosses.
- [ ] RTL rendering is smoke-tested in drills and review screens.
- [ ] Every lesson has exactly one featured anchor target.
- [ ] Delivery payloads can be regenerated deterministically.
- [ ] Smoke tests compare the published payload against the runtime lesson
      contract before activation.

## Open Decisions

- Should Semitic consonant skeletons become a reusable vocabulary field for
  Phoenician, Hebrew, and Arabic-derived courses?
- Which transliteration standard should the database store by default?
- Which artifacts must remain analysis-only because of source licenses?
- How should uncertain vocalization be represented without becoming learner copy
  by accident?
