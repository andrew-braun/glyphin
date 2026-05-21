# Kannada Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for a
Kannada reading course.

## Course Boundary

- Language/script: Kannada in the Kannada script, `kn-Knda`, ISO 15924 `Knda`.
- Target learner: English-literate traveler, heritage learner, or general
  beginner who wants to decode practical Kannada text before studying grammar.
- Target domains: food and cafe menus, shop labels, transit labels, hotels,
  pharmacies or medicine labels, hospitals, and entrance or exit signage.
- In scope for v1: core independent vowels, high-payoff consonants, dependent
  vowel signs, inherent vowel behavior, anusvara, virama, and selected common
  ottakshara frames.
- Out of scope for v1: handwriting, full grammar, exhaustive varga chart,
  numerals, rare conjuncts, production spelling, and formal literary registers.

## Sequencing Rationale

- Frequency sources: Unicode and CLDR for script metadata, `wordfreq` for rough
  frequency intuition, OpenStreetMap names for environmental-print validation,
  Kannada Wiktionary for discovery-only gloss checks, Indic NLP tooling for
  analysis only, and app-authored examples for learner-visible content.
- First-session decoding target: `ನೀರು`, `ಕಾಫಿ`, `ಚಹಾ`, and `ಹಾಲು`, because they
  are short and introduce the abugida model through immediate food and drink
  payoffs.
- Stage 1 goal: establish consonant bases, inherent vowel expectations, and
  dependent vowel signs.
- Stage 2 goal: add independent vowels, anusvara, shopping and transit anchors,
  and the first cluster warning through `ಅನ್ನ`.
- Stage 3 goal: introduce virama and selected ottakshara forms through loanwords
  and high-value facility signs.

## Script Notes

- Kannada is written left to right and needs font shaping for vowel signs,
  virama, and subjoined consonant forms.
- A bare consonant base normally carries an inherent vowel. Virama `್` suppresses
  that vowel and can trigger ottakshara display forms.
- Anusvara `ಂ` is frequent in practical words and should be taught as a visible
  nasal marker with reviewer-approved sound notes.
- Conjuncts such as `ಪ್ರ`, `ತ್ರ`, and `ರ್ಗ` should be staged after learners can
  handle base consonant-vowel frames.
- Kannada and Telugu have visual family resemblance but are separate scripts;
  avoid cross-script assumptions in learner-facing copy.

## Validation Notes

- Segmentation review: verify that visible aksharas, Unicode grapheme clusters,
  virama sequences, and pedagogical parts are stored separately enough for
  lessons and drills.
- Pronunciation review: confirm anchor pronunciations, aspirated consonant
  wording, anusvara behavior, and loanword naturalness.
- Cultural review: confirm that anchors such as `ನೀರು`, `ಕಾಫಿ`, `ಚಹಾ`, `ಹಾಲು`,
  `ಅಂಗಡಿ`, `ಹೋಟೆಲ್`, and `ಪ್ರವೇಶ` are natural for beginner contexts.
- Font review: test Kannada vowel signs, virama, anusvara, and ottakshara forms
  at all drill sizes before publishing.
- License review: keep Wiktionary, OpenStreetMap, and upstream corpus evidence
  out of shipped content until attribution and derived-data obligations are
  approved. Prefer app-authored examples for runtime lessons.
