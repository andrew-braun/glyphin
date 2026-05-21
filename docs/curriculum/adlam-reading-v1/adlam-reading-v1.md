# Adlam Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for an
Adlam reading course.

## Course Boundary

- Language/script: Fulani/Fula in Adlam, `ff-Adlm`, ISO 15924 `Adlm`.
- Target learner: community learner, heritage learner, West African script
  enthusiast, or reader who wants to recognize modern Adlam text.
- Target domains: community literacy materials, dictionary headwords, digital
  messaging, cultural identity text, and short public labels.
- In scope for v1: modern printed Adlam, right-to-left reading, core letters,
  case pairs, a small reviewer-approved anchor set, and app-authored examples.
- Out of scope for v1: full Fulani grammar, dialect-complete coverage, production
  spelling, copied literacy materials, and final publication without community
  review.

## Sequencing Rationale

- Frequency sources: Unicode and CLDR metadata for inventory, font references for
  rendering checks, community resources for discovery, and app-authored examples
  for shipped content.
- First-session decoding target: `𞤀𞤣𞤤𞤢𞤥` because script identity gives a clear
  first reading win and forces RTL QA early.
- Stage 1 goal: establish directionality, core letters, and case pairs.
- Stage 2 goal: introduce reviewer-approved identity and everyday anchors.
- Stage 3 goal: validate public-label and digital-message examples in the UI.

## Script Notes

- Adlam is modern, community-owned in practice, and culturally important; review
  should not be treated as optional polish.
- RTL embedding inside English review packets and UI labels needs bidi isolation.
- Font fallback can materially change readability and must be tested before
  runtime lessons ship.

## Validation Notes

- Segmentation review: verify Adlam letters, case pairs, punctuation, and any
  combining marks used in examples.
- Pronunciation review: confirm transliteration and dialect assumptions for every
  anchor.
- Cultural review: confirm that identity and community-use examples are
  respectful and locally appropriate.
- License review: keep external literacy resources discovery or scoring only
  until reuse terms are approved.
