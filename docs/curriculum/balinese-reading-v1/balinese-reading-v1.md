# Balinese Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for
`balinese-reading-v1`.

## Course Boundary

- Language/script: Balinese in the Balinese script, `ban-Bali`, ISO 15924 `Bali`.
- Target learner: English-literate beginner who wants a first decoding path for
  Balinese-script words in cultural and everyday contexts.
- Target domains: food and market words, temple and cultural-site labels,
  classroom-primer words, road and shop signs, and everyday labels.
- In scope for v1: high-payoff base letters, inherent vowel, selected vowel
  signs, final signs, adeg-adeg exposure, and practical anchors.
- Out of scope for v1: full literary literacy, ritual text interpretation,
  handwriting, complete gantungan behavior, numerals, advanced punctuation, and
  production spelling.

## Sequencing Rationale

- Frequency sources: Unicode and CLDR for script metadata, Balinese references
  and Wiktionary for discovery only, OpenStreetMap for possible environmental
  validation, and app-authored examples for learner-visible content.
- First-session decoding target: `ᬩᬮᬶ`, `ᬦᬲᬶ`, and `ᬲᬸᬲᬸ`, because they are
  compact and introduce place identity plus food vocabulary.
- Stage 1 goal: teach inherent-vowel behavior and dependent vowel signs through
  real short words.
- Stage 2 goal: add temple, market, language, and house words with final signs.
- Stage 3 goal: delay adeg-adeg and high-load public words until basic clusters
  are stable.

## Script Notes

- Balinese is an abugida. Rendered clusters, code points, and lesson units must
  be modeled separately.
- Dependent vowel signs and final signs need careful mobile rendering checks.
- Adeg-adeg and conjunct-like behavior should be introduced after learners know
  simple base plus vowel sign patterns.
- Available digital corpora for Balinese script are limited, so bootstrap scores
  are manual estimates and need review.

## Validation Notes

- Segmentation review: verify aksara clusters, vowel signs, final signs, and
  adeg-adeg before building runtime data.
- Pronunciation review: confirm romanization and glosses with a Balinese reader.
- Cultural review: confirm `ᬧᬸᬭ`, `ᬯᬭᬸᬂ`, and other place or cultural anchors are
  appropriate for beginner reading.
- License review: keep Wiktionary, online references, OSM, and corpus-derived
  material out of shipped content until obligations are approved.
