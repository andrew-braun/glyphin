# Vai Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for a
Vai syllabary reading course.

## Course Boundary

- Language/script: Vai in the Vai syllabary, `vai-Vaii`, ISO 15924 `Vaii`.
- Target learner: community learner, heritage learner, museum or cultural-site
  visitor, or script enthusiast.
- Target domains: script identity text, dictionary headwords, community literacy
  materials, cultural-site labels, and short app-authored labels.
- In scope for v1: selected Unicode Vai syllabograms, script-name identity,
  reviewer-selected short anchors, and font QA.
- Out of scope for v1: full chart memorization, handwriting, broad corpus mining,
  historical comparison, production spelling, and copied examples.

## Sequencing Rationale

- Frequency sources: Unicode and CLDR metadata for inventory, Noto font reference
  for rendering checks, scholarship for discovery, and app-authored examples for
  shipped content.
- First-session decoding target: `ꕙꔤ` if reviewers confirm it as an appropriate
  script or language identity anchor.
- Stage 1 goal: teach that Vai signs are syllables and establish a few visible
  signs.
- Stage 2 goal: replace placeholders with reviewer-selected useful words.
- Stage 3 goal: validate dictionary, cultural-label, and public-label examples.

## Script Notes

- Vai is a living syllabary with a large inventory and limited open frequency
  data for quick sequencing.
- Placeholder sequences in this bootstrap are authoring scaffolds rather than
  final learner-facing vocabulary.
- Font fallback and sign size must be tested before runtime lessons ship.

## Validation Notes

- Segmentation review: verify syllabogram boundaries and any punctuation in
  sample text.
- Pronunciation review: confirm every anchor and syllable label with Vai language
  experts.
- Cultural review: validate target domains and avoid using culturally sensitive
  examples without context.
- License review: keep scholarship and external text discovery-only until terms
  are approved.
