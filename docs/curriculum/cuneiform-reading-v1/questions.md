# Sumerian Cuneiform Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `cuneiform-reading-v1` bootstrap.

## Architecture

- How should runtime data represent one visible cuneiform sign with multiple
  possible readings, roles, and transliteration values?
- Should determinatives be stored as graphemes, orthography rules, semantic
  classifiers, or a separate historic-script feature type?
- How should lesson payloads store facsimile, edition, provenance, and damaged
  sign notes without exposing analysis-only source text?

## Product And Pedagogy

- Should v1 teach sign recognition only, or include carefully labeled Sumerian
  transliteration readings?
- How much historical context is needed before royal and sacred signs are safe
  as beginner anchors?
- Should learners see sign-list numbers or only human-readable sign labels?

## Sources, Licensing, And Attribution

- Confirm CDLI record licenses before using any exact transliteration,
  photograph, or object metadata beyond scoring.
- Confirm ORACC project-specific licenses before deriving runtime examples.
- Keep ePSD2 discovery-only until gloss and attribution obligations are cleared.
- Prefer app-authored examples and reviewed single-sign prompts for shipped
  content.

## Reviewers And Validation

- Assign an Assyriology or Sumerian specialist to validate sign values,
  terminology, cultural framing, and corpus-domain claims.
- Verify selected signs against real museum or inscription contexts before
  finalizing lesson order.
- Test cuneiform fonts across desktop and mobile and at drill sizes.

## App Expansion Recommendations

- Add historic-script course metadata and specialist-review status fields.
- Add sign-value and determinative metadata separate from Unicode grapheme
  storage.
- Add source-provenance fields for inscription domain, object type, edition, and
  uncertainty notes.
- Add font fallback and missing-glyph checks for SMP scripts.
