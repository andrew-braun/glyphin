# Javanese Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for
`javanese-reading-v1`.

## Course Boundary

- Language/script: Javanese in Aksara Jawa, `jv-Java`, ISO 15924 `Java`.
- Target learner: English-literate beginner who wants to decode common Javanese
  script words and signs before learning full orthography.
- Target domains: food and market words, cultural-site labels, road and shop
  signs, classroom-primer words, and everyday labels.
- In scope for v1: high-payoff aksara, inherent vowel, selected sandhangan,
  final marks, pangkon, limited pasangan exposure, and practical words.
- Out of scope for v1: full aksara chart order, handwriting, advanced orthography,
  murda or rekan depth, numerals, poetry conventions, and production spelling.

## Sequencing Rationale

- Frequency sources: Unicode and CLDR for script metadata, Javanese references
  and Wiktionary for discovery only, OpenStreetMap for possible signage
  validation, and app-authored examples for learner-visible content.
- First-session decoding target: `ꦱꦸꦱꦸ`, `ꦱꦼꦒ`, and `ꦧꦚꦸ`, because they show
  useful food and water words while introducing dependent vowel signs early.
- Stage 1 goal: teach the inherent-vowel model and two dependent vowel signs
  through real words.
- Stage 2 goal: add wayfinding and menu words with final marks and pangkon.
- Stage 3 goal: delay pasangan and long facility words until the learner has
  enough visual scaffolding.

## Script Notes

- Javanese is an abugida. Code points, rendered clusters, and pedagogical units
  are not the same layer.
- Dependent vowel signs can appear above, below, before, or around a base letter
  in ways that need drill-specific layout checks.
- Pangkon and pasangan require font shaping support and a runtime model for
  stacked or subjoined forms.
- Digital corpora in Javanese script are limited, so bootstrap scores are manual
  estimates and must not be treated as final frequency data.

## Validation Notes

- Segmentation review: verify akshara-like clusters, vowel signs, final marks,
  and pangkon before building runtime data.
- Pronunciation review: confirm romanization and glosses with a Javanese reader.
- Cultural review: confirm anchors such as `ꦧꦚꦸ`, `ꦱꦼꦒ`, `ꦥꦱꦂ`, and `ꦩꦼꦠꦸ` are
  natural and appropriate for beginner reading.
- License review: keep dictionaries, online references, OSM, and corpus-derived
  material out of shipped content until obligations are approved.
