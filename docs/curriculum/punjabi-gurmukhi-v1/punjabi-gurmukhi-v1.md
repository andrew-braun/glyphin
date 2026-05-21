# Punjabi Gurmukhi Reading Curriculum Notes

This durable note records the v1 boundary and bootstrap decisions for Punjabi
Gurmukhi Reading.

## Course Boundary

- Language/script: Punjabi in Gurmukhi, `pa-Guru`, ISO 15924 `Guru`.
- Target learner: English-literate traveler or heritage learner who wants to
  decode practical Punjabi signs and menu words.
- Target domains: menus, tea and cafe boards, bus and rail signage, shopfronts,
  public facilities, everyday labels, and culture or place names.
- In scope for v1: modern printed Gurmukhi, consonant bases, vowel bearers,
  dependent vowel signs, inherent vowel, tippi, bindi awareness, addak, nukta,
  and a small number of high-payoff pairin or cluster examples.
- Out of scope for v1: Shahmukhi, handwriting, full pairin inventory, advanced
  tonal history, full grammar, production spelling, and exhaustive loan-letter
  coverage.

## Sequencing Rationale

- Frequency sources: Unicode and CLDR for script metadata, `wordfreq` for rough
  frequency intuition, Indic NLP and Dakshina for discovery only, OSM for
  environmental-print validation, and app-authored examples for runtime content.
- First-session decoding target: `ਪਾਣੀ`, `ਚਾਹ`, and `ਦਾਲ`, because they are
  high-utility and establish the base-plus-matra model quickly.
- Stage 1 goal: teach simple aksharas and high-value matras through food words.
- Stage 2 goal: add transit and label vocabulary plus addak.
- Stage 3 goal: introduce tippi, nukta, and pairin behavior through high-value
  public words only after base reading is stable.

## Script Notes

- Gurmukhi uses vowel bearers for independent vowels and matras for dependent
  vowels; learners need both concepts.
- The sihari sign appears before the consonant visually but is read after the
  consonant.
- Tippi, bindi, and addak are small but meaningful signs and need large-font
  review.
- Nukta-marked letters are relevant for loanwords and names such as `ਬਜ਼ਾਰ`.
- Pairin letters and halant behavior should be taught as late chunks rather than
  as a complete chart in v1.

## Validation Notes

- Segmentation review: confirm vowel sign attachment, addak, nasal signs, nukta,
  and pairin examples.
- Pronunciation review: confirm anchor pronunciations, nasalization, gemination,
  and loan-letter values.
- Cultural review: confirm anchors are natural for Punjabi traveler-facing text.
- License review: keep Wiktionary, OSM, Dakshina, and upstream corpus outputs
  out of shipped content until attribution and derived-data obligations are
  reviewed.
