# Phoenician Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for a
Phoenician reading course.

## Course Boundary

- Language/script: Phoenician in the Phoenician script, `phn-Phnx`, ISO 15924
  `Phnx`.
- Target learner: museum visitor, historical-script learner, or beginner Semitic
  epigraphy reader who wants to recognize consonant letters and formulaic words.
- Target domains: museum inscriptions, artifact labels, alphabet charts,
  scholarly transliterations, and beginner epigraphy notes.
- In scope for v1: core consonant letters, right-to-left reading, consonant
  skeletons, conservative transliteration, and selected short inscription words.
- Out of scope for v1: full Phoenician grammar, exact vocalization, advanced
  paleography, Punic regional developments, and unreviewed inscription excerpts.

## Sequencing Rationale

- Frequency sources: Unicode metadata for script inventory, inscription and
  epigraphy references for discovery-only vocabulary checks, Wiktionary for
  gloss discovery, Noto font checks for rendering, and app-authored examples for
  shipped content.
- First-session decoding target: `𐤌𐤋𐤊`, `𐤁𐤍`, and `𐤔𐤌`, because they are compact
  and demonstrate RTL consonant reading quickly.
- Stage 1 goal: establish RTL order and consonant-skeleton decoding.
- Stage 2 goal: add alep, taw, ayin, and sacred-context vocabulary with careful
  gloss labels.
- Stage 3 goal: expand to harder Semitic consonants, short geographic words, and
  review pairs.

## Script Notes

- Phoenician is a consonantal abjad. The written words in v1 should not silently
  add vowels to the script text.
- Transliteration is required for beginner comprehension but must remain distinct
  from both the Phoenician letters and any cautious vocalization.
- The corpus is limited and inscription-heavy. Every anchor needs attestation and
  context review before it becomes learner-facing content.
- Pronunciation hints are scholarly conventions and should be labeled as such.

## Validation Notes

- Segmentation review: verify right-to-left storage, display order, and
  transliteration alignment for every anchor.
- Pronunciation review: use a Semitic epigraphy specialist for alep, ayin, sade,
  qop, and shin labels.
- Cultural review: frame divine and royal vocabulary in inscription context.
- License review: keep inscription editions, lexica, and transliterations out of
  shipped content until reuse terms are approved.
