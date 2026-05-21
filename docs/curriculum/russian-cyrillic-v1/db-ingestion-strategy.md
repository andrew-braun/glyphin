# Russian Cyrillic Reading DB Ingestion Strategy

This file plans how reviewed artifacts for `russian-cyrillic-v1` should move into
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

| Authoring artifact             | Database target                                                                            |
| ------------------------------ | ------------------------------------------------------------------------------------------ |
| Course metadata                | `curriculum.languages`, `curriculum.script_systems`, `curriculum.courses`                  |
| Cyrillic letters and modifiers | `curriculum.graphemes`, `curriculum.course_version_graphemes`                              |
| Confusable and sound rules     | `curriculum.orthography_rules`, `curriculum.orthography_rule_examples`                     |
| Anchors                        | `curriculum.vocabulary_items`, `curriculum.anchor_targets`, `curriculum.lesson_vocabulary` |
| Lesson outline                 | `curriculum.lessons`, `curriculum.lesson_graphemes`, `curriculum.lesson_rules`             |
| Runtime payloads               | `delivery.course_publications`, `delivery.course_publication_lessons`                      |

## Course-Specific Decisions

- Store uppercase and lowercase forms as display variants on one pedagogical
  grapheme unless implementation review requires separate rows.
- Store stress marks as pronunciation metadata rather than canonical spelling.
- Store soft and hard signs with `kind = orthographic_modifier` or equivalent.
- Add confusable-pair metadata for Latin-lookalike drills.

## Validation Checklist

- [ ] Manifest validates with `pnpm curriculum:validate`.
- [ ] Candidate files score with `pnpm curriculum:score`.
- [ ] Review packet is generated with `pnpm curriculum:review`.
- [ ] Native reviewer approves stress and pronunciation hints.
- [ ] Font rendering is checked for Cyrillic uppercase/lowercase and signs.
