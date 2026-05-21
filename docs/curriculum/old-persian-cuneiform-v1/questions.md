# Old Persian Cuneiform Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `old-persian-cuneiform-v1` bootstrap.

## Architecture

- How should the runtime model store an encoded sign sequence alongside
  transliteration, normalized transliteration, and gloss?
- Should the Old Persian word divider be a grapheme, punctuation unit, or
  segmentation rule in curriculum data?
- How should inscription provenance and line references be stored without
  copying analysis-only source text?

## Product And Pedagogy

- Should v1 focus on royal-name and title recognition before any grammar terms?
- How much Achaemenid historical context is necessary for respectful learner
  copy?
- Should learners see reconstructed pronunciation or only sign values and
  transliteration?

## Sources, Licensing, And Attribution

- Confirm reuse rights for Achaemenid inscription editions before deriving
  learner-facing examples.
- Keep TITUS and reference-site text scoring or discovery only until license
  obligations are documented.
- Prefer app-authored inscription-style examples built from reviewed sign
  sequences.

## Reviewers And Validation

- Assign an Old Iranian or Achaemenid epigraphy specialist to validate signs,
  transliteration, glosses, and cultural framing.
- Spot-check all early anchors against museum-visible inscriptions.
- Verify Old Persian font support and word-divider rendering at drill sizes.

## App Expansion Recommendations

- Add transliteration and normalized transliteration fields separate from glyph
  text.
- Add punctuation or divider pedagogical-unit support.
- Add historic-inscription provenance and reviewer status fields.
- Add SMP font fallback checks for Old Persian cuneiform.
