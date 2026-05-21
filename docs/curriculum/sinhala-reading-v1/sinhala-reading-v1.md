# Sinhala Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for a
Sinhala reading course.

## Course Boundary

- Language/script: Sinhala in the Sinhala script, `si-Sinh`, ISO 15924 `Sinh`.
- Target learner: English-literate traveler or beginner who wants to recognize
  useful Sinhala signs and menu words before studying full grammar.
- Target domains: tea shops, menus, food words, shops, price labels, bus and
  train signs, roads, schools, hotels, hospitals, toilets, open or closed signs,
  and everyday labels.
- In scope for v1: modern printed Sinhala, high-yield consonants, common vowel
  signs, inherent vowel behavior, al-lakuna, first conjunct or cluster chunks,
  public-sign vocabulary, and reviewer-approved pronunciation hints.
- Out of scope for v1: complete pure and mixed letter inventories, full conjunct
  chart, rare signs, Sinhala numerals, handwriting, production spelling,
  morphology, and grammar.

## Sequencing Rationale

- Frequency sources: Unicode and CLDR for script metadata, wordfreq for rough
  frequency intuition, Sinhala Wiktionary for discovery-only checks, OSM for
  environmental-print validation, Indic NLP tooling for possible normalization or
  segmentation QA, and app-authored examples for learner-visible content.
- First-session decoding target: `තේ`, `බත්`, and `වතුර`, because they cover
  tea, food, and survival needs while introducing vowel signs, al-lakuna, and
  multi-akshara chunking.
- Stage 1 goal: teach base-plus-vowel frames, al-lakuna, and short practical
  words.
- Stage 2 goal: add shop, coffee, bus, and road words with multi-part vowels and
  final signs.
- Stage 3 goal: teach school, hotel, hospital, and train anchors as public-place
  and transit coverage.
- Stage 4 goal: use open, closed, enter, exit, and toilet signs to consolidate
  dense chunks after display and segmentation support are stable.

## Script Notes

- Sinhala is an abugida. Consonant bases carry an inherent vowel unless a vowel
  sign or al-lakuna changes the syllable.
- Word spaces help, but runtime segmentation still needs akshara and cluster
  boundaries.
- Al-lakuna can suppress vowels and participate in conjunct behavior. It needs
  explicit metadata for final consonants and clusters.
- Multi-part vowel signs should be highlighted as one pedagogical unit when they
  belong to the same akshara.
- Sinhala font fallback must be checked on mobile and desktop before shipping
  learner-facing lessons.

## Validation Notes

- Segmentation review: verify word boundaries, akshara spans, al-lakuna, vowel
  signs, and conjunct chunks with a Sinhala reviewer.
- Pronunciation review: confirm beginner-safe readings for all anchors,
  especially `බත්`, `වතුර`, `කඩේ`, `දුම්රිය`, `ඇතුල්`, `පිටවීම`, and
  `වැසිකිළිය`.
- Cultural review: confirm that tea, rice, water, shop, price, bus, road,
  school, hotel, hospital, open, closed, entrance, exit, and toilet anchors are
  natural and useful.
- License review: keep Wiktionary, OSM, tooling, and upstream corpus data out of
  shipped content until obligations are approved. Prefer app-authored examples
  for runtime lessons.
