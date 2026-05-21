# Japanese Kana And Kanji Reading DB Ingestion Strategy

This file plans how reviewed artifacts for `japanese-kana-kanji-v1` should move
into the database. It is not an executable migration or seed script.

## Source Artifacts

- Manifest: `manifest.json`
- Sources: `sources.csv`
- Grapheme candidates: `grapheme-candidates.csv`
- Anchor candidates: `anchor-candidates.csv`
- Lesson sequence: `lesson-sequence.md`
- Review packet: `review-packet.md`
- Open questions: `questions.md`

## Mapping Plan

| Authoring artifact          | Database target                                                                            |
| --------------------------- | ------------------------------------------------------------------------------------------ |
| Course metadata             | `curriculum.languages`, `curriculum.script_systems`, `curriculum.courses`                  |
| Kana, modifiers, and kanji  | `curriculum.graphemes`, `curriculum.course_version_graphemes`                              |
| Kana and mixed-script rules | `curriculum.orthography_rules`, `curriculum.orthography_rule_examples`                     |
| Anchors                     | `curriculum.vocabulary_items`, `curriculum.anchor_targets`, `curriculum.lesson_vocabulary` |
| Lesson outline              | `curriculum.lessons`, `curriculum.lesson_graphemes`, `curriculum.lesson_rules`             |
| Runtime payloads            | `delivery.course_publications`, `delivery.course_publication_lessons`                      |

## Course-Specific Decisions

- Store each authored anchor with manual segment boundaries because Japanese has
  no whitespace word delimiters.
- Store kana modifiers and small kana as rule-driven variants when possible.
- Store kanji component hints in JSON details until the schema has first-class
  component tables.
- Store readings separately from display text so kanji with multiple readings do
  not collapse into one pronunciation value.

## Validation Checklist

- [ ] Manifest validates with `pnpm curriculum:validate`.
- [ ] Candidate files score with `pnpm curriculum:score`.
- [ ] Review packet is generated with `pnpm curriculum:review`.
- [ ] Native reviewer approves readings and anchor naturalness.
- [ ] Font rendering is checked for kana, kanji, marks, and dense mobile layouts.
