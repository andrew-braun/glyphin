# Sitelen Pona Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `sitelen-pona-v1` bootstrap.

## Architecture

- Should runtime content store glyph IDs, PUA text, SVG assets, font feature
  strings, or a generated asset bundle?
- How should accessibility labels represent glyph IDs, Toki Pona words, and
  concise meanings?
- Does the course model need a non-Unicode script mode for constructed glyph
  systems?

## Product And Pedagogy

- Which glyph style and font should v1 use?
- Should the course teach only core word glyphs or include compounds and
  cartouches?
- How should variant glyphs be presented without implying one community style is
  the only valid form?

## Sources, Licensing, And Attribution

- Confirm font licenses and bundling rights before rendering glyphs in runtime
  lessons.
- Keep community lexicons, glyph charts, and examples discovery-only until terms
  and attribution are approved.
- Prefer app-authored sentences and reviewed glyph-ID mappings for shipped
  content.

## Reviewers And Validation

- Assign Toki Pona and sitelen pona community reviewers for glyph identity,
  style, and learner tone.
- Test selected fonts on desktop and mobile at lesson-card and drill sizes.
- Verify screen-reader output for every glyph and compound.

## App Expansion Recommendations

- Add a glyph-ID content path that can render through approved fonts or assets.
- Add variant and accessibility metadata for logographic constructed scripts.
- Add license status fields for fonts and glyph assets before publication.
