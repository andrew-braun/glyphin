# Glagolitic Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `glagolitic-reading-v1` bootstrap.

## Architecture

- How should runtime data represent historic letters, yer signs, titlo marks,
  transliteration, and manuscript notes separately?
- Should sacred-context metadata be shared with Coptic and Gothic courses?
- How should the app distinguish printed Glagolitic text from manuscript
  facsimile or transcription evidence?

## Product And Pedagogy

- Should v1 use alphabet-name words as anchors even when they carry pedagogical
  rather than everyday utility?
- Which sacred names or liturgical words require additional context before they
  can be learner-facing anchors?
- Should pronunciation hints use a specific Old Church Slavonic convention or
  stay as transliteration only?

## Sources, Licensing, And Attribution

- Confirm corpus and manuscript transcription reuse terms before deriving
  examples.
- Keep Wiktionary discovery-only until CC BY-SA attribution and share-alike
  implications are reviewed.
- Prefer app-authored short examples for shipped content.

## Reviewers And Validation

- Assign an Old Church Slavonic or Glagolitic specialist to validate anchors,
  transliteration, pronunciation policy, and liturgical framing.
- Spot-check early anchors against manuscript and printed liturgical contexts.
- Verify Glagolitic font rendering and combining-mark behavior at drill sizes.

## App Expansion Recommendations

- Add historic-language and liturgical-domain metadata.
- Add sacred-context flags shared across historic and liturgical courses.
- Add transliteration and manuscript-note fields separate from glyph text.
- Add font fallback checks for Glagolitic.
