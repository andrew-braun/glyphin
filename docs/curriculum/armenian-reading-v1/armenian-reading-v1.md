# Armenian Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for an
Armenian reading course.

## Course Boundary

- Language/script: modern Eastern Armenian in the Armenian script, `hy-Armn`,
  ISO 15924 `Armn`.
- Target learner: English-literate traveler, diaspora learner, or culture learner
  who wants practical decoding before full grammar study.
- Target domains: menus, cafes, transit signs, public facilities, everyday
  labels, storefronts, markets, hotels, and cultural-site labels.
- In scope for v1: modern printed Armenian, core lowercase letters, selected
  uppercase sign forms, the `ու` digraph, the `և` ligature, common aspirated
  contrast families, and practical anchor words.
- Out of scope for v1: handwriting, classical orthography details, Western
  Armenian as a separate pronunciation path, full grammar, production spelling,
  and exhaustive punctuation.

## Sequencing Rationale

- Frequency sources: Unicode and CLDR for script metadata, wordfreq for broad
  frequency intuition, OpenStreetMap names for sign validation, Armenian
  Wiktionary for discovery-only gloss checks, and app-authored examples for
  shipped content.
- First-session decoding target: `ջուր`, `թեյ`, and `հաց`, because they are
  practical menu words and introduce the `ու` digraph, aspirated թ, and compact
  word decoding early.
- Stage 1 goal: teach a few useful food and drink words while separating letters,
  sounds, and multi-letter pedagogical units.
- Stage 2 goal: add transit and restaurant anchors with repeated vowels,
  sonorants, and affricates.
- Stage 3 goal: add public-sign pairs such as entrance/exit and open/closed plus
  compact price and pharmacy labels.

## Script Notes

- Armenian is written left to right and has uppercase and lowercase pairs that
  may both appear in signs.
- The `ու` sequence should be modeled as a high-priority pedagogical unit for
  /u/ even though it is two letters.
- The `և` ligature is both a common sign form and the word for "and". It needs a
  display and normalization policy before runtime lessons ship.
- Armenian punctuation includes script-specific marks that should not be folded
  into generic Latin punctuation without review.

## Validation Notes

- Segmentation review: verify `ու`, `և`, and Armenian punctuation handling in the
  authoring-to-runtime path.
- Pronunciation review: confirm Eastern Armenian values for aspirated consonants,
  affricates, and high-load anchors before learner-facing copy ships.
- Cultural review: confirm that food, transit, public-facility, and storefront
  anchors are natural for Armenian contexts.
- License review: keep Wiktionary, OpenStreetMap, and upstream frequency sources
  out of shipped content until obligations are approved.
