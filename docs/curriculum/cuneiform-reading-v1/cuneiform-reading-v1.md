# Sumerian Cuneiform Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for a
Sumerian cuneiform reading course.

## Course Boundary

- Language/script: Sumerian sign-recognition course using encoded cuneiform,
  `sux-Xsux`, ISO 15924 `Xsux`.
- Target learner: museum visitor, ancient-history learner, or research-curious
  beginner who wants to recognize a small set of real cuneiform signs.
- Target domains: museum inscriptions, royal and dedicatory inscriptions,
  lexical lists, object labels, and transliteration workbenches.
- In scope for v1: a small reviewed set of high-salience signs, sign-value
  labels, determinative awareness, and inscription-domain context.
- Out of scope for v1: full Sumerian grammar, Akkadian readings, tablet
  paleography, sign-list completeness, damaged text restoration, and production.

## Sequencing Rationale

- Frequency sources: Unicode for code points, CDLI and ORACC for corpus-shaped
  scoring intuition, ePSD2 for discovery-only gloss checks, Noto Sans Cuneiform
  for rendering checks, and app-authored examples for shipped content.
- First-session decoding target: `𒀀`, `𒆠`, and `𒂍`, because they are compact
  signs with memorable values and inscriptional payoff.
- Stage 1 goal: teach visible sign recognition without pretending that one sign
  has one universal pronunciation.
- Stage 2 goal: introduce royal, place, title, and determinative behavior.
- Stage 3 goal: add corpus-specific signs only after the review model and
  warning language are in place.

## Script Notes

- Cuneiform signs are polyvalent. A Unicode sign is not the same thing as a
  pronunciation, word, or stable pedagogical meaning.
- Determinatives such as `𒀭` need explicit metadata so learners understand why a
  sign may classify a following name.
- Corpus scarcity and genre skew are central. Museum-visible signs may not match
  broad text frequency from edited corpora.
- Font support is non-negotiable because many default stacks render cuneiform
  poorly or not at all.

## Validation Notes

- Segmentation review: verify sign boundaries, determinative tags,
  transliteration labels, and damaged-source conventions.
- Pronunciation review: no reconstructed pronunciation should ship without a
  separate expert-approved policy.
- Cultural review: handle divine names, royal inscriptions, and modern museum
  context with care.
- License review: keep CDLI, ORACC, and ePSD2 derived content out of runtime
  lessons until per-source reuse obligations are approved.
