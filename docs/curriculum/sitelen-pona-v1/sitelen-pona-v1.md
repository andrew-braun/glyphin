# Sitelen Pona Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for a
sitelen pona reading course.

## Course Boundary

- Language/script: Toki Pona in sitelen pona-style glyphs, `tok-Zsym`, ISO 15924
  `Zsym` because no standard script code applies.
- Target learner: Toki Pona learner, conlang reader, constructed-script fan, or
  community participant who wants to recognize core glyphs.
- Target domains: community learning materials, app-authored short sentences,
  glyph identity drills, constructed-script culture, and font-rendering tests.
- In scope for v1: glyph IDs for common Toki Pona words, reviewed font policy,
  app-authored examples, and accessibility labels.
- Out of scope for v1: sitelen sitelen, copied glyph art, unreviewed PUA text,
  cartouches, advanced compounds, and automatic conversion from Latin text.

## Sequencing Rationale

- Frequency sources: community lexicon and font references for discovery, glyph
  IDs for authoring, and app-authored sentences for shipped content.
- First-session decoding target: `toki pona`, `mi moku`, and `telo` because they
  are compact and immediately meaningful.
- Stage 1 goal: establish that glyph identity is the core reading unit.
- Stage 2 goal: introduce simple compounds and particles.
- Stage 3 goal: resolve font, accessibility, and variant policy before runtime
  implementation.

## Script Notes

- This bootstrap intentionally uses glyph IDs instead of PUA codepoints or copied
  glyph art.
- Font choice is part of the curriculum data because variant shapes and coverage
  affect learner recognition.
- Accessibility labels need to expose the Toki Pona word and a concise meaning
  without relying on invisible font behavior.

## Validation Notes

- Segmentation review: verify token-to-glyph-ID mapping and compound boundaries.
- Pronunciation review: not required for glyph recognition but Toki Pona word
  pronunciation may be needed if audio is added later.
- Cultural review: validate examples and avoid presenting community variants as
  universal.
- License review: settle font and glyph-art rights before any glyph rendering
  ships.
