# Linear B Reading DB Ingestion Strategy

This file plans how reviewed authoring artifacts for `linear-b-reading-v1` should
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

| Authoring artifact             | Database target                                                                                   |
| ------------------------------ | ------------------------------------------------------------------------------------------------- |
| Manifest language metadata     | `curriculum.languages`                                                                            |
| Manifest script metadata       | `curriculum.script_systems` plus syllabary and ideogram notes                                     |
| Course prospectus              | `curriculum.courses`                                                                              |
| Release plan                   | `curriculum.course_versions`                                                                      |
| Reviewed syllabogram inventory | `curriculum.graphemes`, `curriculum.course_version_graphemes`                                     |
| Ideogram and tablet metadata   | Course-version grapheme details or a future script metadata table                                 |
| Lesson sequence                | `curriculum.lessons`                                                                              |
| Anchor targets                 | `curriculum.anchor_targets`, `curriculum.anchor_segments`                                         |
| Reusable rules                 | `curriculum.orthography_rules`, `curriculum.orthography_rule_examples`, `curriculum.lesson_rules` |
| Drills and options             | `curriculum.drills`, `curriculum.drill_options`, `curriculum.lesson_drills`                       |
| Published runtime payloads     | `delivery.course_publications`, `delivery.course_publication_lessons`                             |

## Publication Strategy

- Generate stable IDs from script signs plus reviewed transliteration.
- Store script text, transliteration, interpreted gloss, unit role, attestation
  status, and tablet-domain note separately in publication payloads.
- Keep external tablet text out of learner-facing payloads unless license
  sign-off approves specific examples.
- Insert one inactive `delivery.course_publications` manifest and all matching
  `delivery.course_publication_lessons` rows.
- Activate the publication only after smoke checks confirm glyph rendering,
  transliteration alignment, and lesson ordering.

## Validation Checklist

- [ ] Manifest validates with `pnpm curriculum:validate`.
- [ ] Source licenses are marked as discovery-only, scoring-only, scoring, or
      shipped-content approved.
- [ ] Every syllabogram has a reviewed transliteration value.
- [ ] Ideograms and syllabograms are not collapsed into one generic unit type.
- [ ] Synthetic practice items are flagged separately from attested anchors.
- [ ] Every lesson has exactly one featured anchor target.
- [ ] Delivery payloads can be regenerated deterministically.
- [ ] Smoke tests compare the published payload against the runtime lesson
      contract before activation.

## Open Decisions

- Should ideograms be allowed in v1 runtime data before a dedicated drill design
  exists?
- Which field should carry tablet attestation confidence and source provenance?
- Which artifacts must remain analysis-only because of source licenses?
- How should transliteration syllables and interpreted words map to existing
  vocabulary tables?
