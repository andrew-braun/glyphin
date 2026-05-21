# Coptic Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `coptic-reading-v1` bootstrap.

## Architecture

- How should the runtime model distinguish a historical or liturgical course from
  traveler-oriented courses in target-domain metadata?
- How should Coptic letters from the Greek and Coptic block be represented so
  script metadata stays Coptic rather than Greek?
- Should supralinear strokes be stored as grapheme metadata, orthography rules,
  edition notes, or all three?

## Product And Pedagogy

- Should v1 explicitly target Sahidic reading and defer Bohairic pronunciation to
  a future course or optional notes?
- Which sacred or liturgical anchors require special context copy before they are
  safe as lesson anchors?
- Should short grammatical forms such as `ⲡⲉ` and `ⲧⲉ` be taught as recognition
  anchors before a grammar module exists?

## Sources, Licensing, And Attribution

- Confirm per-text licensing for Coptic Scriptorium before using any derived
  examples beyond scoring.
- Confirm Coptic Dictionary Online attribution and derivative-use terms before
  using gloss strings in shipped content.
- Confirm Antinoou font licensing and bundling implications if the app needs a
  dedicated Coptic font.
- Prefer app-authored examples for all learner-visible content.

## Reviewers And Validation

- Assign a Coptic specialist to validate dialect scope, anchors, glosses,
  pronunciation hints, and religious context.
- Spot-check printed liturgical and learner-edition samples before finalizing the
  first 12 anchors.
- Verify production fonts render Coptic-specific letters and supralinear marks at
  drill sizes.

## App Expansion Recommendations

- Add historic-language and notation-course metadata before implementation.
- Add dialect labels and edition/source note fields for lesson content.
- Add combining-mark-safe rendering checks and Coptic font fallback support.
