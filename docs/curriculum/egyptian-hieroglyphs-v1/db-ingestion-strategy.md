# Egyptian Hieroglyphs Reading DB Ingestion Strategy

This file plans how reviewed authoring artifacts for `egyptian-hieroglyphs-v1`
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

| Authoring artifact                     | Database target                                                                                   |
| -------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Manifest language metadata             | `curriculum.languages`                                                                            |
| Manifest script metadata               | `curriculum.script_systems` plus direction and orientation details                                |
| Course prospectus                      | `curriculum.courses`                                                                              |
| Release plan                           | `curriculum.course_versions`                                                                      |
| Reviewed sign inventory                | `curriculum.graphemes`, `curriculum.course_version_graphemes`                                     |
| Sign-list and transliteration metadata | Course-version grapheme details or a future structured metadata table                             |
| Lesson sequence                        | `curriculum.lessons`                                                                              |
| Anchor targets                         | `curriculum.anchor_targets`, `curriculum.anchor_segments`                                         |
| Reusable rules                         | `curriculum.orthography_rules`, `curriculum.orthography_rule_examples`, `curriculum.lesson_rules` |
| Drills and options                     | `curriculum.drills`, `curriculum.drill_options`, `curriculum.lesson_drills`                       |
| Published runtime payloads             | `delivery.course_publications`, `delivery.course_publication_lessons`                             |

## Publication Strategy

- Generate stable IDs from reviewed sign identifiers and transliteration labels.
- Store visible script text, transliteration, gloss, sign role, and orientation
  metadata as separate fields in the publication payload.
- Keep external corpus references out of learner-facing payloads unless license
  sign-off approves specific examples.
- Insert one inactive `delivery.course_publications` manifest and all matching
  `delivery.course_publication_lessons` rows.
- Activate the publication only after smoke checks confirm rendering, direction,
  and lesson ordering.

## Validation Checklist

- [ ] Manifest validates with `pnpm curriculum:validate`.
- [ ] Source licenses are marked as discovery-only, scoring-only, scoring, or
      shipped-content approved.
- [ ] Every sign maps to one course-version pedagogical unit and a reviewed role.
- [ ] Transliteration labels render with the chosen app font stack.
- [ ] Every lesson has exactly one featured anchor target.
- [ ] Every drill has exactly one correct option.
- [ ] Delivery payloads can be regenerated deterministically.
- [ ] Smoke tests compare the published payload against the runtime lesson
      contract before activation.

## Open Decisions

- Should sign IDs use Gardiner labels, Unicode names, or app-owned stable IDs?
- Which data shape can represent logogram, phonogram, and determinative roles
  without overfitting Egyptian only?
- Should format controls be stored as literal text or generated from layout
  metadata?
- Which reviewed fields are allowed to become learner-visible copy?
- Which artifacts must remain analysis-only because of source licenses?
