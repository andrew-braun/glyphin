# Georgian Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for a
Georgian reading course.

## Course Boundary

- Language/script: modern Georgian in the Georgian script, `ka-Geor`, ISO 15924
  `Geor`, with Mkhedruli as the default learner-visible form.
- Target learner: traveler, culture learner, or beginning Georgian learner who
  wants to decode practical signs and menus before grammar study.
- Target domains: food and cafe menus, transit signs, street labels, public
  facilities, everyday labels, market signs, hotels, and cultural sites.
- In scope for v1: Mkhedruli letters, common food and travel anchors, ejective
  and aspirated contrast families as recognition aids, and optional Mtavruli
  awareness for signage.
- Out of scope for v1: Asomtavruli or Nuskhuri as reading systems, handwriting,
  full grammar, production pronunciation, and exhaustive consonant theory.

## Sequencing Rationale

- Frequency sources: Unicode and CLDR for script metadata, wordfreq for broad
  frequency intuition, OpenStreetMap names for environmental-print validation,
  Georgian Wiktionary for discovery-only gloss checks, and app-authored examples
  for shipped content.
- First-session decoding target: `ჩაი`, `პური`, and `მენიუ`, because they are
  short, useful, and introduce stable left-to-right decoding before heavier
  clusters.
- Stage 1 goal: give immediate cafe/menu wins while flagging Georgian consonant
  contrast as recognition metadata.
- Stage 2 goal: add restaurant, metro, water, and stop through repeated chunks.
- Stage 3 goal: add public signs, price, street, museum, entrance, and exit.

## Script Notes

- Modern everyday Georgian is left-to-right and mostly uses Mkhedruli without
  uppercase/lowercase pairs.
- Mtavruli appears in some all-caps style contexts but should be deferred until
  real target-domain samples justify it.
- Georgian has many consonant contrast families. The reading course should avoid
  over-teaching production pronunciation while still warning learners about high
  confusability groups.
- Georgian words are whitespace-delimited, so the main tooling issue is not word
  segmentation but pedagogical sequencing and font rendering.

## Validation Notes

- Segmentation review: verify Georgian letters, punctuation, and optional
  Mtavruli variants can be stored without case assumptions imported from Latin.
- Pronunciation review: confirm glosses and learner-safe pronunciation hints for
  ejective and aspirated consonants.
- Cultural review: confirm anchors such as `ჩაი`, `ყავა`, `პური`, `წყალი`,
  `რესტორანი`, `ტუალეტი`, and sign pairs are natural in target contexts.
- License review: keep Wiktionary, OpenStreetMap, and upstream frequency sources
  out of shipped content until obligations are approved.
