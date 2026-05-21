# Telugu Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for a
Telugu reading course.

## Course Boundary

- Language/script: Telugu in the Telugu script, `te-Telu`, ISO 15924 `Telu`.
- Target learner: English-literate traveler, heritage learner, or general
  beginner who wants to decode practical Telugu text before studying grammar.
- Target domains: food and cafe menus, shop labels, transit labels, hotels,
  pharmacies, hospitals, and entrance or exit signage.
- In scope for v1: core independent vowels, high-payoff consonants, dependent
  vowel signs, inherent vowel behavior, anusvara, virama, and selected common
  conjunct frames.
- Out of scope for v1: handwriting, full grammar, exhaustive varga chart,
  numerals, rare conjuncts, production spelling, and detailed Sanskrit or poetic
  orthography.

## Sequencing Rationale

- Frequency sources: Unicode and CLDR for script metadata, `wordfreq` for rough
  frequency intuition, OpenStreetMap names for environmental-print validation,
  Telugu Wiktionary for discovery-only gloss checks, Indic NLP tooling for
  analysis only, and app-authored examples for learner-visible content.
- First-session decoding target: `టీ`, `నీరు`, `కాఫీ`, and `పాలు`, because they
  are short and introduce the abugida model through immediate food and drink
  payoffs.
- Stage 1 goal: establish consonant bases, inherent vowel expectations, and
  dependent vowel signs.
- Stage 2 goal: add independent vowels, anusvara, shopping and transit anchors,
  and the first cluster warning through `అన్నం`.
- Stage 3 goal: introduce virama and selected conjuncts through loanwords and
  high-value facility signs.

## Script Notes

- Telugu is written left to right and needs font shaping for vowel signs,
  virama, and subjoined consonant forms.
- A bare consonant base normally carries an inherent vowel. Virama `్` suppresses
  that vowel and can trigger conjunct display forms.
- Anusvara `ం` is frequent in practical words and should be taught as a visible
  nasal marker with reviewer-approved sound notes.
- Conjuncts such as `ప్ర`, `త్ర`, and denser clusters in `నిష్క్రమణ` should be
  staged after learners can handle base consonant-vowel frames.
- Loanwords such as `టీ`, `కాఫీ`, `బస్`, `హోటల్`, and `ఫార్మసీ` may be very
  visible but need explicit notes so the course does not feel like a loanword
  list.

## Validation Notes

- Segmentation review: verify that visible aksharas, Unicode grapheme clusters,
  virama sequences, and pedagogical parts are stored separately enough for
  lessons and drills.
- Pronunciation review: confirm anchor pronunciations, aspirated consonant
  wording, anusvara behavior, and loanword naturalness.
- Cultural review: confirm that anchors such as `టీ`, `నీరు`, `కాఫీ`, `పాలు`,
  `దుకాణం`, `హోటల్`, and `ప్రవేశం` are natural for beginner contexts.
- Font review: test Telugu vowel signs, virama, anusvara, and conjunct forms at
  all drill sizes before publishing.
- License review: keep Wiktionary, OpenStreetMap, and upstream corpus evidence
  out of shipped content until attribution and derived-data obligations are
  approved. Prefer app-authored examples for runtime lessons.
