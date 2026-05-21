# Brahmi Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for a
Brahmi reading course.

## Course Boundary

- Language/script: Sanskrit-tagged Brahmi bootstrap, `sa-Brah`, ISO 15924
  `Brah`, with explicit inscriptional Prakrit and language-boundary review.
- Target learner: museum visitor, South Asian history learner, epigraphy-curious
  beginner, or Indic-script learner who wants early Brahmi recognition.
- Target domains: Ashokan edict terms, museum inscriptions, donative labels,
  royal names and titles, and transliteration workbenches.
- In scope for v1: core consonant bases, independent vowels, aa and i vowel
  signs, virama awareness, selected inscription words, and reviewed
  transliteration labels.
- Out of scope for v1: full paleography, regional Brahmi variants, complete
  Sanskrit or Prakrit grammar, exact edict text, and production writing.

## Sequencing Rationale

- Frequency sources: Unicode metadata, inscription database discovery, edict
  references for human research, font checks, and app-authored examples for
  shipped content.
- First-session decoding target: `𑀭𑀸𑀚`, `𑀤𑀸𑀦`, and `𑀫𑀳𑀸`, because they show
  consonant bases plus vowel signs with inscription-domain payoff.
- Stage 1 goal: establish abugida chunking through simple words.
- Stage 2 goal: add culturally important inscription terms after vowel-sign
  behavior is clear.
- Stage 3 goal: defer virama-heavy and script-name anchors until learners can
  parse clusters.

## Script Notes

- Brahmi is an abugida. A visible consonant base, inherent vowel, vowel sign,
  and virama are different pedagogical layers.
- The `sa-Brah` tag is a bootstrap boundary and must be reviewed because many
  early inscriptions are Prakrit or mixed in practice.
- Regional and chronological sign variation is a major implementation risk.
- Font support and combining-mark placement must be tested before runtime use.

## Validation Notes

- Segmentation review: verify akshara chunks, vowel signs, virama behavior,
  anusvara, and transliteration labels.
- Pronunciation review: distinguish Sanskrit-style labels from inscriptional
  Prakrit evidence.
- Cultural review: handle Buddhist, royal, and donative terms respectfully.
- License review: keep exact inscriptions and database records out of shipped
  content until reuse obligations are approved.
