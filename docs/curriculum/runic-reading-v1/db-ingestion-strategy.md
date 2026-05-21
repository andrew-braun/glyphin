# Runic Reading DB Ingestion Strategy

This file plans how reviewed authoring artifacts for `runic-reading-v1` should
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

| Authoring artifact                 | Database target                                                                                   |
| ---------------------------------- | ------------------------------------------------------------------------------------------------- |
| Manifest language metadata         | `curriculum.languages`                                                                            |
| Manifest script metadata           | `curriculum.script_systems` plus tradition details                                                |
| Course prospectus                  | `curriculum.courses`                                                                              |
| Release plan                       | `curriculum.course_versions`                                                                      |
| Reviewed rune inventory            | `curriculum.graphemes`, `curriculum.course_version_graphemes`                                     |
| Transliteration and variant labels | Course-version grapheme details or a future unit metadata table                                   |
| Lesson sequence                    | `curriculum.lessons`                                                                              |
| Anchor targets                     | `curriculum.anchor_targets`, `curriculum.anchor_segments`                                         |
| Reusable rules                     | `curriculum.orthography_rules`, `curriculum.orthography_rule_examples`, `curriculum.lesson_rules` |
| Drills and options                 | `curriculum.drills`, `curriculum.drill_options`, `curriculum.lesson_drills`                       |
| Published runtime payloads         | `delivery.course_publications`, `delivery.course_publication_lessons`                             |

## Publication Strategy

- Generate stable IDs from encoded rune plus reviewed tradition label.
- Store rune text, transliteration, rune name, period label, and sensitivity note
  separately in publication payloads.
- Use only app-authored examples unless an external inscription source has been
  cleared for shipped use.
- Insert one inactive `delivery.course_publications` manifest and all matching
  `delivery.course_publication_lessons` rows.
- Activate the publication only after smoke checks confirm glyph rendering,
  lesson ordering, and review status.

## Validation Checklist

- [ ] Manifest validates with `pnpm curriculum:validate`.
- [ ] Source licenses are marked as discovery-only, scoring-only, scoring, or
      shipped-content approved.
- [ ] Every rune maps to one script system and one reviewed tradition context.
- [ ] Every anchor has a transliteration and a nonmodern pronunciation note.
- [ ] Sensitive symbols are flagged before learner-facing publication.
- [ ] Every lesson has exactly one featured anchor target.
- [ ] Delivery payloads can be regenerated deterministically.
- [ ] Smoke tests compare the published payload against the runtime lesson
      contract before activation.

## Open Decisions

- Should Elder Futhark be encoded as the only v1 variant or as a lesson-level
  tradition filter inside a broader Runic course?
- Which fields should distinguish transliteration, rune name, and reconstructed
  pronunciation?
- Which artifacts must remain analysis-only because of source licenses?
- How should cultural sensitivity review state be represented in curriculum and
  delivery payloads?
