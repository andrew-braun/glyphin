# Syriac Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `syriac-reading-v1` bootstrap.

## Architecture

- How should runtime data mark contextual joining behavior without storing
  presentation forms as separate learner-visible graphemes?
- Do existing text components provide enough bidirectional isolation for Syriac
  mixed with English glosses and UI labels?
- Should optional vowel points be modeled as graphemes, lesson annotations, or
  rule examples?
- Which font stack reliably renders Syriac dots and joining forms at mobile drill
  sizes?

## Product And Pedagogy

- Which pronunciation convention should v1 use when Classical and modern
  community pronunciations differ?
- Should the course foreground liturgical reading, heritage community labels, or
  a neutral script primer as the first-use case?
- How much religious context is appropriate for anchors such as church without
  making the course too narrow?

## Sources, Licensing, And Attribution

- Confirm CLDR and Unicode metadata terms before durable ingestion.
- Keep Wiktionary discovery-only until CC BY-SA attribution and share-alike
  implications are approved.
- Keep Syriaca.org and OpenStreetMap discovery or scoring only until derived-data
  and attribution obligations are reviewed.
- Prefer app-authored examples for shipped content.

## Reviewers And Validation

- Assign a Syriac specialist for letter names, dialect-sensitive pronunciation,
  and cultural fit.
- Verify unpointed and pointed samples with at least one font expected to ship in
  the app.
- Test all lesson tables in RTL and mixed-direction contexts before publication.

## App Expansion Recommendations

- Add course-level direction metadata to all lesson rendering surfaces.
- Add script-aware font classes and bidi isolation wrappers.
- Add support for combining-mark pedagogy and optional vocalization overlays.
- Add review metadata for scripts where pronunciation choices are community or
  register sensitive.
