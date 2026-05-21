# Meitei Mayek Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for
`meitei-mayek-v1`.

## Course Boundary

- Language/script: Manipuri or Meitei in Meitei Mayek, `mni-Mtei`, ISO 15924
  `Mtei`.
- Target learner: English-literate beginner who wants a first decoding path for
  Meitei Mayek words and labels.
- Target domains: classroom-primer words, water and food words, identity labels,
  people words, roads or place labels, and everyday signs.
- In scope for v1: common base letters, dependent vowel signs, lonsum final
  letters, high-payoff short words, and limited loanword review.
- Out of scope for v1: full grammar, Bengali-script comparison, handwriting,
  advanced spelling, numerals, punctuation, and production writing.

## Sequencing Rationale

- Frequency sources: Unicode and CLDR for script metadata, Meitei Mayek learning
  references and Wiktionary for discovery only, OpenStreetMap for possible
  public-label validation, and app-authored examples for learner-visible content.
- First-session decoding target: `ꯆꯥ`, `ꯏꯁꯤꯡ`, and `ꯃꯩꯇꯩ`, because they are
  compact and teach vowel signs plus final letters quickly.
- Stage 1 goal: introduce dependent vowel signs and lonsum final letters through
  food, water, and identity words.
- Stage 2 goal: add house, road or land, and family words with short clusters.
- Stage 3 goal: compare people words and defer long place or loanword clusters.

## Script Notes

- Meitei Mayek is LTR but has final consonant letters that should be treated as
  explicit pedagogical units.
- Vowel signs and diphthong signs need rendering QA at small sizes.
- Loanword clusters may use orthographic conventions that require specialist
  confirmation before any learner-facing examples ship.
- Digital corpora and target-domain samples are limited, so bootstrap scores are
  manual estimates.

## Validation Notes

- Segmentation review: verify base letters, vowel signs, diphthong signs, and
  lonsum final consonants before runtime data is built.
- Pronunciation review: confirm glosses, romanization, and final-letter behavior
  with a Meitei Mayek specialist.
- Cultural review: confirm family, identity, and place-word anchors are natural
  for beginner use.
- License review: keep Wiktionary, learning references, OSM, and corpus-derived
  material out of shipped content until obligations are approved.
