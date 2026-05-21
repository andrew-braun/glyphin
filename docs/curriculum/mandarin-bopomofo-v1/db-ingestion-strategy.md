# Mandarin Bopomofo Reading DB Ingestion Strategy

This file plans how reviewed authoring artifacts for `mandarin-bopomofo-v1`
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

| Authoring artifact                | Database target                                                                                 |
| --------------------------------- | ----------------------------------------------------------------------------------------------- |
| Manifest language metadata        | `curriculum.languages`                                                                          |
| Manifest script metadata          | `curriculum.script_systems`                                                                     |
| Course prospectus                 | `curriculum.courses`                                                                            |
| Release plan                      | `curriculum.course_versions`                                                                    |
| Reviewed symbol inventory         | `curriculum.graphemes`, `curriculum.course_version_graphemes`                                   |
| Syllable groups and anchors       | `curriculum.anchor_targets`, `curriculum.anchor_segments`                                       |
| Tone marks and first-tone rule    | `curriculum.orthography_rules`, `curriculum.lesson_rules`                                       |
| Support words and phrases         | `curriculum.vocabulary_items`, `curriculum.vocabulary_segments`, `curriculum.lesson_vocabulary` |
| Optional Hanzi and pinyin support | JSON metadata on vocabulary and anchor segment rows until a shared notation table exists        |
| Drills and options                | `curriculum.drills`, `curriculum.drill_options`, `curriculum.lesson_drills`                     |
| Published runtime payloads        | `delivery.course_publications`, `delivery.course_publication_lessons`                           |

## Publication Strategy

- Generate stable IDs from course ID, lesson number, Bopomofo anchor text, and
  syllable index.
- Store Bopomofo as the primary learner-visible text and attach Hanzi or pinyin
  only as reviewed support metadata.
- Represent tone marks explicitly, including the absence of a first-tone mark.
- Insert one inactive delivery publication and activate only after pronunciation,
  font, and segmentation review.

## Validation Checklist

- [ ] Manifest validates with `pnpm curriculum:validate`.
- [ ] Source licenses are marked as discovery-only, scoring-only, scoring, or
      shipped-content approved.
- [ ] Every Bopomofo symbol maps to one script system and course-version row.
- [ ] Every syllable segment has reviewed tone metadata.
- [ ] Every anchor also exists as vocabulary with `role_key = 'anchor'`.
- [ ] Every lesson has exactly one featured anchor target or documented pair.
- [ ] Every drill has exactly one correct option.
- [ ] Delivery payloads can be regenerated deterministically.
- [ ] Smoke tests verify Bopomofo symbols and tone marks render correctly.

## Open Decisions

- Should tone marks be normalized into separate grapheme rows or retained inside
  syllable segment metadata?
- Should pinyin be stored as a generic pronunciation field or as a course-specific
  support notation?
- Should neutral-tone dot placement be modeled now or deferred until vertical
  ruby layout work begins?
- Which Taiwan-oriented sources can safely inform shipped content after legal
  review?
