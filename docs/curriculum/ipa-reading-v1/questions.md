# IPA Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `ipa-reading-v1` bootstrap.

## Architecture

- Should notation courses be modeled as `language_tag = und-Latn`, or should the
  curriculum schema support script or notation courses without a language row?
- How should IPA modifier letters and combining diacritics be represented in the
  grapheme model?
- Should affricates and diphthongs be stored as pedagogical chunks, rules, or
  plain sequences?

## Product And Pedagogy

- Should v1 include audio playback, or can text-only IPA decoding ship first?
- Which English accent should anchor transcriptions assume for the first course?
- Should future IPA courses branch into language-specific IPA paths such as
  French IPA or Mandarin IPA?

## Sources, Licensing, And Attribution

- Confirm whether official IPA chart symbols can be referenced directly and what
  attribution is required.
- Do not ship copied dictionary transcriptions unless rights are approved.
- Keep Wikipedia and PHOIBLE material out of learner-visible prose unless
  attribution and share-alike obligations are addressed.

## Reviewers And Validation

- Assign a phonetics reviewer for anchor transcriptions.
- Test IPA fonts at mobile drill sizes before implementation.

## App Expansion Recommendations

- Add optional audio hooks to anchors and drills.
- Add notation-course support for non-language curricula.
- Add IPA-safe font fallbacks and rendering checks.
- Add symbol-to-sound and sound-to-symbol drill types.
