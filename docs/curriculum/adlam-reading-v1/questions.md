# Adlam Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `adlam-reading-v1` bootstrap.

## Architecture

- How should bidi isolation be applied when Adlam appears inside English
  headings, CSV-derived review tables, buttons, and progress cards?
- Should case pairs live in one grapheme row with display variants or in separate
  grapheme rows linked by metadata?
- Does the publication payload need an explicit font-family recommendation for
  Adlam lessons?

## Product And Pedagogy

- Which Fulani/Fula variety and spelling conventions should define v1?
- Should first lessons foreground the script-name identity word or a community
  educator-selected sequence?
- How much transliteration should be visible to learners versus kept as reviewer
  metadata?

## Sources, Licensing, And Attribution

- Confirm terms for community Adlam resources before using examples beyond
  discovery.
- Confirm whether any font files or specimens can be bundled or only referenced.
- Prefer app-authored examples reviewed by Adlam-literate community experts.

## Reviewers And Validation

- Assign Adlam-literate Fulani/Fula reviewers for spelling, pronunciation,
  dialect, and cultural context.
- Verify RTL layout and bidi isolation across cards, tables, inputs, and generated
  review packets.
- Test Noto Sans Adlam or approved alternatives at lesson and drill sizes.

## App Expansion Recommendations

- Add course-aware RTL and bidi-isolation helpers before runtime implementation.
- Add case-pair metadata that is not tied to Latin assumptions.
- Add font QA and reviewer-status fields for modern community scripts.
