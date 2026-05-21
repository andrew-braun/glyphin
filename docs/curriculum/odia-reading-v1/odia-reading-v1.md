# Odia Reading Curriculum Notes

This durable note records the v1 boundary and bootstrap decisions for Odia
Reading.

## Course Boundary

- Language/script: Odia in Odia script, `or-Orya`, ISO 15924 `Orya`.
- Target learner: English-literate traveler or heritage learner who wants to
  decode practical Odia signs and menu words.
- Target domains: menus, tea and cafe boards, bus and rail signage, commerce
  signs, public facilities, everyday labels, and Odisha place names.
- In scope for v1: modern printed Odia, consonant bases, independent and
  dependent vowels, inherent vowel, common matras, anusvara, virama, high-payoff
  conjuncts, and nukta-bearing letters such as `ଡ଼`.
- Out of scope for v1: handwriting, complete conjunct inventory, full grammar,
  production spelling, exhaustive retroflex contrast tables, and long Sanskritic
  facility terms as early lessons.

## Sequencing Rationale

- Frequency sources: Unicode and CLDR for script metadata, `wordfreq` where
  available for rough frequency intuition, Indic NLP and Dakshina for discovery
  only, OSM for environmental-print validation, and app-authored examples for
  runtime content.
- First-session decoding target: `ପାଣି`, `ଚା`, and `ବସ`, because they are
  short, practical, and establish base-plus-matra reading.
- Stage 1 goal: teach simple aksharas and high-value matras through survival
  words.
- Stage 2 goal: add menu, transit, and shop vocabulary with common bases.
- Stage 3 goal: introduce virama clusters and nukta through public signs and
  place names after the base model is stable.

## Script Notes

- Odia rounded forms can be visually dense at small sizes; font QA is part of
  curriculum validation.
- Matras and below-base components should be taught as akshara parts rather than
  isolated decorative marks.
- Nukta is relevant for forms such as `ଡ଼` in `ଓଡ଼ିଶା` and must be preserved.
- Conjuncts should be taught as high-load chunks tied to useful words such as
  `ରାସ୍ତା`, `ସ୍କୁଲ`, and `ଡାକ୍ତର`.

## Validation Notes

- Segmentation review: confirm base-plus-matra units, anusvara, virama clusters,
  nukta-bearing letters, and below-base components.
- Pronunciation review: confirm anchors, retroflex contrasts, vowel length, and
  natural readings for open/closed signs.
- Cultural review: confirm that anchors are natural across Odia public text and
  menu contexts.
- License review: keep Wiktionary, OSM, Dakshina, and upstream corpus outputs
  out of shipped content until attribution and derived-data obligations are
  reviewed.
