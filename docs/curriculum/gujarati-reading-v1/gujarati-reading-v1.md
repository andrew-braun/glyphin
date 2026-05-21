# Gujarati Reading Curriculum Notes

This durable note records the v1 boundary and bootstrap decisions for Gujarati
Reading.

## Course Boundary

- Language/script: Gujarati in Gujarati script, `gu-Gujr`, ISO 15924 `Gujr`.
- Target learner: English-literate traveler or heritage learner who wants to
  decode practical Gujarati signs and menu words.
- Target domains: menus, tea and cafe boards, bus and rail signage, commerce
  signs, public facilities, everyday labels, and place names.
- In scope for v1: modern printed Gujarati, consonant bases, independent and
  dependent vowels, inherent vowel, common matras, anusvara, virama, high-payoff
  conjuncts, and rare nukta awareness.
- Out of scope for v1: handwriting, complete conjunct inventory, full grammar,
  production spelling, exhaustive retroflex contrast tables, and rare Persian or
  Arabic loan-letter coverage.

## Sequencing Rationale

- Frequency sources: Unicode and CLDR for script metadata, `wordfreq` for rough
  frequency intuition, Indic NLP and Dakshina for discovery only, OSM for
  environmental-print validation, and app-authored examples for runtime content.
- First-session decoding target: `પાણી`, `ચા`, and `બસ`, because they are short,
  practical, and establish base-plus-matra reading.
- Stage 1 goal: teach simple aksharas and high-value matras through survival
  words.
- Stage 2 goal: add menu, transit, and commerce vocabulary with common bases.
- Stage 3 goal: introduce virama clusters and nasal marks through public signs
  after the base model is stable.

## Script Notes

- Gujarati lacks the Devanagari headline, so learners need visual discrimination
  that does not rely on top-line shapes.
- Matras can attach before, after, above, or below bases and should be taught as
  part of akshara segmentation.
- Virama clusters are high-load and should enter through useful signs such as
  `રસ્તો` and `સ્કૂલ`.
- Nukta exists in Gujarati but is rare for a traveler-first v1; the runtime still
  needs to preserve it if a reviewed source uses it.

## Validation Notes

- Segmentation review: confirm base-plus-matra units, anusvara, virama clusters,
  and rare nukta handling.
- Pronunciation review: confirm anchors, retroflex contrasts, vowel length, and
  natural readings for open/closed signs.
- Cultural review: confirm that anchors are natural across Gujarati public text
  and menu contexts.
- License review: keep Wiktionary, OSM, Dakshina, and upstream corpus outputs
  out of shipped content until attribution and derived-data obligations are
  reviewed.
