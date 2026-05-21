# Mongolian Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for
`mongolian-reading-v1`.

## Course Boundary

- Language/script: Mongolian in the traditional Mongolian script, `mn-Mong`, ISO
  15924 `Mong`.
- Target learner: English-literate beginner who wants to decode simple
  traditional-script labels before studying full orthography.
- Target domains: food and cafe words, water labels, road and market signs,
  cultural-site labels, classroom-primer words, and identity labels.
- In scope for v1: core vowels and consonants, vertical reading order,
  contextual shaping, selected high-payoff words, and variation-sequence QA.
- Out of scope for v1: full Mongolian grammar, Cyrillic conversion, handwriting,
  exhaustive positional-form charts, historical orthographic debates, and
  production spelling.

## Sequencing Rationale

- Frequency sources: Unicode and CLDR for script metadata, standardized variants
  for rendering QA, Wiktionary and orthography references for discovery only,
  OpenStreetMap for possible environmental-print validation, and app-authored
  examples for runtime content.
- First-session decoding target: `ᠤᠰᠤ`, `ᠴᠠᠢ`, and `ᠨᠣᠮ`, because they are
  compact and expose vertical order without too many positional complications.
- Stage 1 goal: teach vertical order and the most approachable vowel and
  consonant shapes.
- Stage 2 goal: add high-value food and cultural words while making positional
  form changes visible.
- Stage 3 goal: consolidate longer words and decide which variation sequences
  need explicit learner-facing treatment.

## Script Notes

- Traditional Mongolian is written vertically from top to bottom with columns
  progressing across the page. App rendering must not assume horizontal text.
- Letter forms vary by position and neighboring letters. These are shaping
  behaviors first and separate pedagogical units only when reviewers require it.
- Free variation selectors and other shaping controls must be preserved in
  source audit fields and tested with the chosen font stack.
- Corpora for the traditional script are more limited than for Cyrillic
  Mongolian, so bootstrap scores are manual estimates.

## Validation Notes

- Segmentation review: verify grapheme clusters and variation sequences before
  scoring coverage.
- Pronunciation review: confirm romanization hints and vowel values with a
  Mongolian reader familiar with the traditional script.
- Cultural review: confirm anchors such as `ᠭᠡᠷ`, `ᠮᠣᠩᠭᠣᠯ`, and `ᠵᠠᠬ᠎ᠠ` are
  natural and pedagogically appropriate.
- License review: keep Wiktionary, OSM, and grammar references out of shipped
  content until attribution and derived-data obligations are approved.
