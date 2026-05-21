# Latin Diacritics Reading DB Ingestion Strategy

This file plans how reviewed artifacts for `latin-diacritics-v1` should move into
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
| Diacritic and letter inventory | `curriculum.graphemes`, `curriculum.course_version_graphemes`                              |
| Mark behavior                  | `curriculum.orthography_rules`, `curriculum.orthography_rule_examples`                     |
| Anchors                        | `curriculum.vocabulary_items`, `curriculum.lesson_vocabulary`, `curriculum.anchor_targets` |
| Lesson outline                 | `curriculum.lessons`, `curriculum.lesson_graphemes`, `curriculum.lesson_rules`             |
| Runtime payloads               | `delivery.course_publications`, `delivery.course_publication_lessons`                      |

## Course-Specific Decisions

- Store canonical learner-visible anchor text in NFC.
- Add metadata for canonical decomposition, combining marks, uppercase variants,
  and per-anchor language context.
- Treat marks such as acute and cedilla as pedagogical units even when they are
  rendered as part of a precomposed grapheme cluster.
- Keep third-party examples analysis-only unless legal review approves
  attribution and derived-data requirements.

## Validation Checklist

- [ ] Manifest validates with `pnpm curriculum:validate`.
- [ ] Candidate files score with `pnpm curriculum:score`.
- [ ] Review packet is generated with `pnpm curriculum:review`.
- [ ] Reviewer confirms language-specific pronunciation notes.
- [ ] Font rendering is checked for accented uppercase and lowercase forms.
