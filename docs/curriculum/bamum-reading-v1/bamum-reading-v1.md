# Bamum Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for a
Bamum reading course.

## Course Boundary

- Language/script: Bamum in the Bamum script, `bax-Bamu`, ISO 15924 `Bamu`.
- Target learner: community learner, heritage learner, museum or cultural-site
  visitor, or script enthusiast.
- Target domains: script identity text, museum and cultural labels, dictionary
  headwords, community literacy materials, and short app-authored labels.
- In scope for v1: selected modern Bamum block syllabograms, script-stage policy,
  reviewer-selected anchors, and font QA.
- Out of scope for v1: historical-stage mixing, full chart memorization,
  paleography, handwriting, production spelling, and copied examples.

## Sequencing Rationale

- Frequency sources: Unicode metadata for modern and supplement blocks, Noto font
  reference for rendering checks, scholarship for discovery, and app-authored
  examples for shipped content.
- First-session decoding target: a reviewer-selected Bamum name anchor plus a
  few modern-block signs such as `ꚠ`, `ꚡ`, and `ꚢ`.
- Stage 1 goal: teach that Bamum signs are syllabic and that script-stage scope
  matters.
- Stage 2 goal: replace placeholders with reviewer-selected useful words.
- Stage 3 goal: validate museum or cultural labels with historical context.

## Script Notes

- Bamum has a modern encoded block and a supplementary historical-stage block;
  mixing them without context would be misleading.
- Placeholder sequences in this bootstrap are authoring scaffolds rather than
  final learner-facing vocabulary.
- Font fallback and sign size must be tested before runtime lessons ship.

## Validation Notes

- Segmentation review: verify modern-block syllabograms and any supplement signs
  if a later stage is added.
- Pronunciation review: confirm every anchor and syllable label with Bamum
  language or script experts.
- Cultural review: validate museum and heritage framing.
- License review: keep scholarship and external text discovery-only until terms
  are approved.
