# IPA Reading DB Ingestion Strategy

This file plans how reviewed artifacts for `ipa-reading-v1` should move into the
database. It is not an executable migration or seed script.

## Source Artifacts

- Manifest: `manifest.json`
- Sources: `sources.csv`
- Grapheme candidates: `grapheme-candidates.csv`
- Anchor candidates: `anchor-candidates.csv`
- Lesson sequence: `lesson-sequence.md`
- Review packet: `review-packet.md`
- Open questions: `questions.md`

## Mapping Plan

| Authoring artifact       | Database target                                                                            |
| ------------------------ | ------------------------------------------------------------------------------------------ |
| Notation-course metadata | `curriculum.languages`, `curriculum.script_systems`, `curriculum.courses`                  |
| IPA symbols and marks    | `curriculum.graphemes`, `curriculum.course_version_graphemes`                              |
| Sound contrast rules     | `curriculum.orthography_rules`, `curriculum.orthography_rule_examples`                     |
| Anchor transcriptions    | `curriculum.vocabulary_items`, `curriculum.anchor_targets`, `curriculum.lesson_vocabulary` |
| Lesson sequence          | `curriculum.lessons`, `curriculum.lesson_graphemes`, `curriculum.lesson_rules`             |
| Runtime payloads         | `delivery.course_publications`, `delivery.course_publication_lessons`                      |

## Course-Specific Decisions

- Store the ordinary word and IPA transcription separately.
- Use `und-Latn` until the schema has a first-class notation-course concept.
- Store IPA symbol metadata such as name, Unicode code point, voicing, place,
  manner, vowel height, and example sound in JSON details.
- Add optional audio fields before implementation if product expects listening
  drills.

## Validation Checklist

- [ ] Manifest validates with `pnpm curriculum:validate`.
- [ ] Candidate files score with `pnpm curriculum:score`.
- [ ] Review packet is generated with `pnpm curriculum:review`.
- [ ] Phonetics reviewer approves anchor transcriptions.
- [ ] Font rendering is checked for IPA extensions and modifier letters.
