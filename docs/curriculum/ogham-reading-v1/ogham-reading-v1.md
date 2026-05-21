# Ogham Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for an
Ogham reading course.

## Course Boundary

- Language/script: Old Irish in the Ogham script, `sga-Ogam`, ISO 15924 `Ogam`.
- Target learner: museum visitor, heritage-site visitor, Celtic studies beginner,
  or historical-script learner who wants to recognize formulaic Ogham fragments.
- Target domains: stone inscriptions, museum labels, heritage-site signage,
  epigraphic transcriptions, and beginner Ogham guides.
- In scope for v1: core Ogham letters, start and end marks, aicme grouping,
  transliteration, orientation notes, and selected formulaic chunks.
- Out of scope for v1: full Old Irish grammar, manuscript Ogham, damaged-stone
  readings, exact prosopography, advanced forfeda use, and unreviewed inscription
  copies.

## Sequencing Rationale

- Frequency sources: Unicode metadata for script inventory, Ogham in 3D for
  scoring-only formula intuition, CIIC-style references for discovery-only
  inscription checks, eDIL for lexical discovery, Noto font checks for rendering,
  and app-authored examples for shipped content.
- First-session decoding target: `ᚋᚐᚊᚊᚔ`, because MAQI is a compact high-payoff
  formula chunk and introduces visually distinctive letters.
- Stage 1 goal: establish stemline reading and formula chunks through MAQI,
  MUCOI, and AVI.
- Stage 2 goal: add boundary marks and context-sensitive fragment readings.
- Stage 3 goal: expand into name-style chunks and repeated-letter handling while
  keeping inscription specificity reviewer-gated.

## Script Notes

- Unicode Ogham is commonly displayed horizontally, but many original stones are
  read along vertical or edge-following paths.
- Ogham letters are structured around a stemline and grouped into aicme families.
  This visual structure should inform drills.
- Transliteration labels are necessary for beginners but are not direct modern
  Irish pronunciation.
- The corpus is limited and inscription-specific. Formula fragments are safer
  early anchors than copied full inscriptions.

## Validation Notes

- Segmentation review: verify boundary marks, repeated letters, and formula
  chunks have stable segment IDs.
- Pronunciation review: use an Old Irish or Celtic epigraphy reviewer for all
  letter names, formula glosses, and transliteration labels.
- Cultural review: avoid turning personal memorial inscriptions into generic
  vocabulary without context.
- License review: keep database records and edition readings out of shipped
  content until attribution and reuse terms are cleared.
