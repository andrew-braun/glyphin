# Amharic Ethiopic Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for an
Amharic Ethiopic reading course.

## Course Boundary

- Language/script: Amharic written in Ethiopic script, `am-Ethi`, ISO 15924
  `Ethi`.
- Target learner: English-literate beginner who wants to recognize practical
  Amharic words in menus, markets, transit contexts, public facilities, and
  place labels.
- Target domains: food and cafe menus, street and market signage, transit
  wayfinding, public facilities, everyday labels, and names or place labels.
- In scope for v1: common fidel syllables, consonant-family awareness, seven
  vowel orders, whitespace word segmentation, high-payoff food and sign words,
  and Ethiopic font rendering.
- Out of scope for v1: complete fidel chart mastery, handwriting, calligraphy,
  morphology, full grammar, Ge'ez or other Ethiopic-script languages, regional
  language comparison, and production spelling.

## Sequencing Rationale

- Frequency sources: Unicode and CLDR for inventory and rendering metadata,
  broad Amharic frequency sources for scoring intuition, lexicons and treebanks
  for discovery only, and app-authored examples for shipped content.
- First-session decoding target: `ቡና`, `ሻይ`, and `ውሃ` because they are short,
  culturally salient, and useful in cafe or survival contexts.
- Stage 1 goal: teach fidel as readable syllabic units before introducing the
  full chart.
- Stage 2 goal: introduce movement, market, price, and food words while exposing
  multiple vowel orders in real anchors.
- Stage 3 goal: cover hotel, road, entrance, exit, and public-facility labels.
- Stage 4 goal: add culturally central and high-load words after the learner has
  a stable order-grid model.

## Script Notes

- Ethiopic fidel are visible syllabic units. A learner sees one symbol, but the
  pedagogical explanation links it to a consonant family and vowel order.
- Traditional order behavior is central: first order often maps to an ä-like
  vowel, second to u, third to i, fourth to a, fifth to e, sixth to ə or reduced
  values, and seventh to o. Amharic speaker review must refine every hint.
- Whitespace word boundaries exist, but many practical words are morphologically
  dense. V1 should prefer authored segmentation over automated morphology.
- Ethiopic punctuation and numerals are out of scope for early lessons but need
  rendering review before production.

## Validation Notes

- Segmentation review: verify word boundaries, syllable chunking, and fidel
  order labels for every anchor.
- Pronunciation review: validate romanization hints, vowel order descriptions,
  schwa-like sixth order behavior, and loanword pronunciations.
- Cultural review: confirm menu, market, facility, and transit anchors are
  natural and appropriate for beginner learners.
- License review: keep Wiktionary, Leipzig, wordfreq, and treebank-derived data
  out of shipped content until attribution and derivative-use obligations are
  approved.
