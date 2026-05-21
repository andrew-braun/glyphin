# Malayalam Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for a
Malayalam reading course.

## Course Boundary

- Language/script: Malayalam in the Malayalam script, `ml-Mlym`, ISO 15924
  `Mlym`.
- Target learner: English-literate traveler, heritage learner, or general
  beginner who wants to decode practical Malayalam text before studying grammar.
- Target domains: food and cafe menus, shop labels, transit labels, hotels,
  pharmacies or medicine labels, public facilities, and entrance or exit signage.
- In scope for v1: core independent vowels, high-payoff consonants, dependent
  vowel signs, inherent vowel behavior, anusvara, chandrakkala, common chillus,
  and selected practical conjunct frames.
- Out of scope for v1: handwriting, full grammar, exhaustive consonant chart,
  numerals, traditional ligature catalog, production spelling, and detailed
  reformed-versus-traditional orthography history.

## Sequencing Rationale

- Frequency sources: Unicode and CLDR for script metadata, `wordfreq` for rough
  frequency intuition, OpenStreetMap names for environmental-print validation,
  Malayalam Wiktionary for discovery-only gloss checks, Indic NLP tooling for
  analysis only, and app-authored examples for learner-visible content.
- First-session decoding target: `കട`, `വില`, `ചായ`, and `പാൽ`, because they are
  short and introduce the abugida model through shop, price, tea, and milk
  payoffs.
- Stage 1 goal: establish consonant bases, inherent vowel expectations,
  dependent vowel signs, and chillu behavior.
- Stage 2 goal: add independent vowels, food anchors, anusvara, and the first
  chandrakkala-driven clusters.
- Stage 3 goal: introduce loanword endings, common chillus, and selected dense
  clusters through high-value transit and facility signs.

## Script Notes

- Malayalam is written left to right and needs font shaping for vowel signs,
  chandrakkala, chillus, and conjunct or ligature forms.
- A bare consonant base normally carries an inherent vowel. Chandrakkala `്`
  suppresses that vowel and can participate in conjunct display forms.
- Chillu letters such as `ൽ` and `ൻ` are encoded signs that learners will see in
  common practical words; they should be first-class pedagogical units.
- Malayalam has reformed and traditional orthographic display differences.
  Reviewer and font checks must decide which forms the app expects to show.
- Dense words such as `വെള്ളം`, `ട്രെയിൻ`, and `പ്രവേശനം` should be staged by
  chunking rather than taught as raw strings.

## Validation Notes

- Segmentation review: verify that visible aksharas, Unicode grapheme clusters,
  chandrakkala sequences, chillus, and pedagogical parts are stored separately
  enough for lessons and drills.
- Pronunciation review: confirm anchor pronunciations, chillu wording, anusvara
  behavior, and loanword naturalness.
- Cultural review: confirm that anchors such as `കട`, `വില`, `ചായ`, `പാൽ`,
  `വെള്ളം`, `ഹോട്ടൽ`, and `പ്രവേശനം` are natural for beginner contexts.
- Font review: test Malayalam vowel signs, chandrakkala, chillus, and conjunct
  forms at all drill sizes before publishing.
- License review: keep Wiktionary, OpenStreetMap, and upstream corpus evidence
  out of shipped content until attribution and derived-data obligations are
  approved. Prefer app-authored examples for runtime lessons.
