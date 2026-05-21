# Mongolian Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `mongolian-reading-v1` bootstrap.

## Architecture

- Does the current lesson UI support top-to-bottom text without clipping cards,
  controls, or answer options?
- How should runtime data preserve free variation selectors and distinguish them
  from ordinary grapheme clusters?
- Should positional forms be modeled as rule metadata, examples, or separate
  pedagogical units when they are visually dramatic?
- Which font stack supports traditional Mongolian shaping and vertical layout
  across Linux, macOS, Windows, Android, and iOS?

## Product And Pedagogy

- Should v1 teach traditional Mongolian directly, or include Cyrillic
  transliteration only as a pronunciation aid?
- How much vowel harmony should appear in a reading-first sequence?
- Are identity words such as Mongol appropriate early anchors despite higher
  shaping load?

## Sources, Licensing, And Attribution

- Confirm Unicode and CLDR metadata terms before durable ingestion.
- Keep Wiktionary and grammar references discovery-only until attribution and
  share-alike implications are approved.
- Keep OpenStreetMap validation scoring-only until ODbL obligations are reviewed.
- Prefer app-authored examples for shipped content.

## Reviewers And Validation

- Assign a reader of traditional Mongolian script to validate anchors,
  pronunciation, and visible forms.
- Run screenshots on mobile and desktop with the exact production font stack.
- Test vertical text inside tables, cards, drills, and review packets.

## App Expansion Recommendations

- Add a course-level writing mode field in addition to direction.
- Add text components that can switch between horizontal and vertical layout.
- Add variation-sequence preservation tests for curriculum serialization.
- Add a font-shaping QA checklist for scripts with contextual forms.
