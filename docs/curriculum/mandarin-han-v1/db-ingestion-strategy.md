# Mandarin Han Reading DB Ingestion Strategy

This file plans how reviewed artifacts for `mandarin-han-v1` should move into
the database. It is not an executable migration or seed script.

## Source Artifacts

- Manifest: `manifest.json`
- Sources: `sources.csv`
- Grapheme candidates: `grapheme-candidates.csv`
- Anchor candidates: `anchor-candidates.csv`
- Lesson sequence: `lesson-sequence.md`
- Review packet: `review-packet.md`
- Open questions: `questions.md`

## Mapping Plan

| Authoring artifact            | Database target                                                                            |
| ----------------------------- | ------------------------------------------------------------------------------------------ |
| Course metadata               | `curriculum.languages`, `curriculum.script_systems`, `curriculum.courses`                  |
| Han characters and components | `curriculum.graphemes`, `curriculum.course_version_graphemes`                              |
| Component and variant rules   | `curriculum.orthography_rules`, `curriculum.orthography_rule_examples`                     |
| Anchors and words             | `curriculum.vocabulary_items`, `curriculum.anchor_targets`, `curriculum.lesson_vocabulary` |
| Lesson outline                | `curriculum.lessons`, `curriculum.lesson_graphemes`, `curriculum.lesson_rules`             |
| Runtime payloads              | `delivery.course_publications`, `delivery.course_publication_lessons`                      |

## Course-Specific Decisions

- Store simplified display text as canonical for this course and traditional
  forms as explicit variants.
- Store pinyin base, tone number, and tone-marked display separately.
- Store manual segmentation for every multi-character anchor.
- Store radical and component hints as metadata until a first-class component
  schema is designed.

## Validation Checklist

- [ ] Manifest validates with `pnpm curriculum:validate`.
- [ ] Candidate files score with `pnpm curriculum:score`.
- [ ] Review packet is generated with `pnpm curriculum:review`.
- [ ] Native reviewer approves pinyin, tones, and anchor naturalness.
- [ ] Font rendering is checked for simplified Han, pinyin marks, and dense text.
