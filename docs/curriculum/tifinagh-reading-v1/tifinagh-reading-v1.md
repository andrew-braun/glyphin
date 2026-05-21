# Tifinagh Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for
`tifinagh-reading-v1`.

## Course Boundary

- Language/script: Standard Moroccan Amazigh in Neo-Tifinagh, `zgh-Tfng`, ISO
  15924 `Tfng`.
- Target learner: English-literate beginner who wants to read short Tifinagh
  labels, greetings, and identity words.
- Target domains: public signage, school or primer words, cultural-site labels,
  market and food words, and everyday labels.
- In scope for v1: core Neo-Tifinagh letters, short words, identity vocabulary,
  high-payoff public text, and morphology-aware chunking.
- Out of scope for v1: full Amazigh grammar, regional dialect comparison,
  handwriting, historical Tifinagh variants, production spelling, and exhaustive
  vocabulary.

## Sequencing Rationale

- Frequency sources: Unicode and CLDR for script metadata, IRCAM-style references
  for discovery only, Wiktionary for gloss checks, OpenStreetMap for public-label
  validation, and app-authored examples for shipped content.
- First-session decoding target: `ⴰⵎⴰⵏ`, `ⴰⵣⵓⵍ`, and `ⴰⵎⴰⵣⵉⵖ`, because they
  are compact, meaningful, and introduce very reusable letters.
- Stage 1 goal: give learners a real LTR decoding win and identity vocabulary.
- Stage 2 goal: add market, school, house, and environmental words with common
  consonants and morphology-aware chunks.
- Stage 3 goal: compare related identity words and delay high-load longer forms
  until enough letters are known.

## Script Notes

- Tifinagh is LTR and visually clear, but font support must still be verified in
  all lesson surfaces.
- Regional vocabulary and orthographic conventions should be treated as reviewer
  decisions rather than guessed from mixed online sources.
- The feminine `ⵜ...ⵜ` pattern is pedagogically useful but should be introduced
  as a reading chunk before grammar explanations.
- Manual scores are relative because accessible corpora for exactly `zgh-Tfng`
  target domains are limited.

## Validation Notes

- Segmentation review: verify Unicode grapheme clusters and word boundaries for
  all examples.
- Pronunciation review: confirm romanization hints and the treatment of `ⵖ` with
  an Amazigh speaker.
- Cultural review: confirm `ⴰⵣⵓⵍ`, `ⴰⵎⴰⵣⵉⵖ`, `ⵜⴰⵎⴰⵣⵉⵖⵜ`, and public-domain
  anchors are natural for v1.
- License review: keep IRCAM references, Wiktionary, OSM, and corpus-derived
  material out of shipped content until obligations are approved.
