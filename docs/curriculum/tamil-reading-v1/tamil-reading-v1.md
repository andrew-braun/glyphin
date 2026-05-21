# Tamil Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for a
Tamil reading course.

## Course Boundary

- Language/script: Tamil in the Tamil script, `ta-Taml`, ISO 15924 `Taml`.
- Target learner: English-literate traveler, heritage learner, or general
  beginner who wants to decode practical Tamil text before studying grammar.
- Target domains: shop labels, food and cafe menus, transit labels, public
  facilities, pharmacy signs, and everyday packaging.
- In scope for v1: core independent vowels, high-payoff consonants, dependent
  vowel signs, inherent vowel behavior, pulli, selected loan letters, and a small
  number of high-value Tamil-specific contrasts.
- Out of scope for v1: handwriting, full grammar, literary Tamil, exhaustive
  consonant inventory, numerals, rare Sanskritic forms, production spelling, and
  detailed regional pronunciation variation.

## Sequencing Rationale

- Frequency sources: Unicode and CLDR for script metadata, `wordfreq` for rough
  frequency intuition, OpenStreetMap names for environmental-print validation,
  Tamil Wiktionary for discovery-only gloss checks, Indic NLP tooling for
  analysis only, and app-authored examples for learner-visible content.
- First-session decoding target: `கடை`, `காபி`, and `பால்`, because they are
  visible in practical domains and quickly introduce consonant bases, vowel
  signs, and pulli without forcing dense conjuncts.
- Stage 1 goal: make the learner understand the abugida model: consonant plus
  inherent vowel, vowel-sign modification, and pulli suppression.
- Stage 2 goal: add independent vowels, long vowels, pre-base signs, and common
  menu or transit anchors.
- Stage 3 goal: introduce loan letters, longer facility words, and Tamil-specific
  contrasts such as ழ only after core decoding is stable.

## Script Notes

- Tamil is written left to right and shaped by the font. Some vowel signs are
  typed after a consonant but appear visually before or around it.
- A bare consonant base normally includes an inherent vowel. Pulli `்` suppresses
  that vowel and is essential for words such as `பால்` and `ரயில்`.
- Native Tamil letters do not map neatly onto English voiced and aspirated stop
  categories. Beginner copy should avoid overpromising one-to-one sound values.
- Tamil has multiple laterally or nasally contrasting letters such as ல, ள, ழ and
  ந, ண, ன. These need staged visual and pronunciation review.
- Grantha letters such as ஸ may be necessary for common loanwords but should be
  kept late or explicitly marked as loan-letter material.

## Validation Notes

- Segmentation review: verify that Unicode grapheme clusters, visible aksharas,
  and pedagogical units are stored separately enough for lessons and drills.
- Pronunciation review: confirm anchor pronunciations, contextual stop values,
  long vowels, and the level of explanation for ழ.
- Cultural review: confirm that anchors such as `கடை`, `காபி`, `தேநீர்`, `பால்`,
  `விலை`, and `கழிப்பிடம்` are natural and appropriate for beginner contexts.
- Font review: test Tamil vowel signs, pre-base marks, pulli, and Grantha letters
  at all drill sizes before publishing.
- License review: keep Wiktionary, OpenStreetMap, and upstream corpus evidence
  out of shipped content until attribution and derived-data obligations are
  approved. Prefer app-authored examples for runtime lessons.
