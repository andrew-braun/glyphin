# Bengali-Assamese Reading Curriculum Notes

This durable note records the v1 boundary and bootstrap decisions for
Bengali-Assamese Reading.

## Course Boundary

- Language/script: Bengali-first content in the Bengali script, `bn-Beng`, ISO
  15924 `Beng`.
- Target learner: English-literate traveler or heritage learner who wants to
  decode Bengali-script menus, signs, and labels.
- Target domains: tea and food menus, bus and rail signs, markets, shops,
  hotels, schools, public facilities, and everyday labels.
- In scope for v1: Bengali printed forms, inherent vowel, common vowel signs,
  akshara chunking, anusvara, hasanta, a small number of high-payoff conjuncts,
  and Assamese letter notes for `ৰ` and `ৱ`.
- Out of scope for v1: full Assamese vocabulary sequencing, handwriting,
  literary spelling depth, complete conjunct inventory, full phonology, and
  production spelling.

## Sequencing Rationale

- Frequency sources: Unicode and CLDR for script metadata, `wordfreq` for rough
  Bengali frequency intuition, Indic NLP tools for discovery, Wiktionary for
  discovery-only gloss checks, OSM for environmental-print validation, and
  app-authored examples for runtime content.
- First-session decoding target: `চা`, `ভাত`, and `বাস`, because they are short,
  practical, and introduce the abugida model with high-value words.
- Stage 1 goal: establish base letters, inherent vowel, and the aa sign.
- Stage 2 goal: add high-payoff matras and common consonants through menus,
  markets, shops, and hotels.
- Stage 3 goal: introduce anusvara, hasanta, and first conjuncts only after
  learners can read simple aksharas.

## Script Notes

- The course must separate rendered grapheme clusters from teachable akshara
  parts.
- The short-i sign appears before the consonant in display order but is read
  after the consonant.
- Bengali conjuncts can be visually opaque and should be sequenced as high-load
  chunks rather than treated as ordinary consonant sequences.
- Assamese `ৰ` and `ৱ` are important shared-script differences but belong in
  notes until the product supports a separate Assamese path.

## Validation Notes

- Segmentation review: verify base-plus-matra units, hasanta behavior, conjunct
  segmentation, and Assamese-specific note boundaries.
- Pronunciation review: confirm Bengali anchor pronunciations and decide how
  much vowel reduction to explain in learner-facing copy.
- Cultural review: confirm Bengali-first anchor naturalness across Bangladesh
  and West Bengal contexts.
- License review: keep Wiktionary and OSM outputs out of shipped content until
  attribution and derived-data obligations are approved.
