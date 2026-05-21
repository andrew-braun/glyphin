# Maya Hieroglyphs Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `maya-hieroglyphs-v1` bootstrap.

## Architecture

- How should runtime lessons represent glyph blocks, reading order, sign IDs,
  and sign variants when full Unicode plain text is not available?
- Should the app support image-backed graphemes or catalog-ID-backed glyph slots
  before a Maya course can ship?
- How should mixed-direction and two-dimensional reading order be expressed in
  lesson data and drills?

## Product And Pedagogy

- Should v1 teach sign labels only or include syllabic spelling exercises after
  logogram recognition?
- Which calendar terms are safe early anchors without turning the course into a
  calendrical math module?
- How should the course signal that it is an introductory recognition course and
  not complete epigraphy training?

## Sources, Licensing, And Attribution

- Confirm rights for CMHI images, drawings, and transcriptions before any exact
  inscription material is used.
- Keep Mesoweb, FAMSI, and specialist databases discovery-only until per-source
  reuse terms are reviewed.
- Prefer app-authored sign-label prompts and abstract block diagrams for shipped
  content.
- Verify whether any font or image asset for glyph signs can be bundled.

## Reviewers And Validation

- Assign a Mayanist reviewer for sign labels, transliteration, calendar terms,
  cultural framing, and source provenance.
- Validate all royal and sacred terms for respectful beginner presentation.
- Test glyph-block rendering on mobile before committing to an implementation
  path.

## App Expansion Recommendations

- Add support for image-backed or catalog-backed pedagogical units.
- Add block-layout metadata and two-dimensional reading-order drills.
- Add source-rights fields for drawings, photographs, catalog IDs, and
  transliterations.
- Add a mode for courses where Unicode text is incomplete or unavailable.
