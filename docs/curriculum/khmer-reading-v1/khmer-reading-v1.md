# Khmer Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for a
Khmer reading course.

## Course Boundary

- Language/script: Khmer in the Khmer script, `km-Khmr`, ISO 15924 `Khmr`.
- Target learner: English-literate traveler or beginner who wants to recognize
  useful Khmer signs and menu words before studying full grammar.
- Target domains: menus, cafes, markets, shops, road signs, entrance and exit
  signs, public facilities, hotels, hospitals, pharmacies, schools, and everyday
  packaging.
- In scope for v1: modern printed Khmer, high-yield base consonants, common
  dependent vowels, inherent-vowel series awareness, coeng subscript basics,
  public-sign chunks, and reviewer-approved pronunciation hints.
- Out of scope for v1: full consonant and vowel charts, exhaustive register
  rules, Pali and Sanskrit spelling depth, handwriting, calligraphy, production
  spelling, full dictionary segmentation, and grammar.

## Sequencing Rationale

- Frequency sources: Unicode and CLDR for script metadata, wordfreq for broad
  frequency intuition, Khmer Wiktionary for discovery-only checks, OSM for
  environmental-print validation, future Khmer tokenizer tooling for
  segmentation QA, and app-authored examples for learner-visible content.
- First-session decoding target: `ទឹក`, `បាយ`, and `តែ`, because they are
  high-utility menu or survival words that show base letters and vowel placement
  without requiring dense coeng clusters.
- Stage 1 goal: teach common bases and before or after vowel signs through short
  practical words.
- Stage 2 goal: add enter and exit signs, market and road words, and first coeng
  cluster awareness.
- Stage 3 goal: teach familiar loanwords and compact public-facility anchors.
- Stage 4 goal: use long facility terms only after chunking and font rendering
  behavior are reliable.

## Script Notes

- Khmer is an abugida. Consonant series affects vowel values, so pronunciation
  copy needs reviewer control.
- Spaces do not reliably mark individual words. Runtime segmentation must support
  dictionary or manual word boundaries.
- Dependent vowels can appear before, above, below, after, or around the
  consonant base; drills need visual-order and reading-order metadata.
- Coeng and subscript consonants must be treated as shaped clusters for display
  and as teachable subparts for pedagogy.
- Font fallback is not optional: Khmer marks and subscripts need to render
  clearly at mobile drill sizes.

## Validation Notes

- Segmentation review: verify word boundaries, orthographic syllables, coeng
  clusters, and vowel-position metadata with a Khmer reviewer.
- Pronunciation review: confirm vowel values by consonant series, loanword
  readings, and public-sign terms before learner-facing copy ships.
- Cultural review: confirm that anchors such as `ទឹក`, `បាយ`, `ផ្សារ`, `ចូល`,
  `ចេញ`, `បង្គន់`, and facility terms are natural for beginner contexts.
- License review: keep Wiktionary, OSM, tokenizer, and upstream corpus data out
  of shipped content until obligations are approved. Prefer app-authored examples
  for runtime lessons.
