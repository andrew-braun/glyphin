# Old Italic Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for an
Old Italic reading course.

## Course Boundary

- Language/script: Etruscan-leaning Old Italic reading, `ett-Ital`, ISO 15924
  `Ital`.
- Target learner: museum visitor, epigraphy-curious learner, or ancient Italy
  student who wants to recognize short Old Italic inscription words.
- Target domains: Etruscan funerary inscriptions, museum object labels, personal
  names, alphabet tables, and transliteration workbenches.
- In scope for v1: selected Old Italic letters, RTL reading, personal-name and
  funerary anchors, and reviewed transliteration labels.
- Out of scope for v1: all Old Italic alphabets, Oscan or Umbrian as separate
  courses, boustrophedon production, full Etruscan grammar, and exact copied
  inscriptions.

## Sequencing Rationale

- Frequency sources: Unicode metadata, Etruscan Texts Project scoring evidence,
  epigraphic catalogs for discovery, font checks, and app-authored examples for
  shipped content.
- First-session decoding target: direction plus `𐌌𐌉`, because orientation is
  the central beginner trap and the word is compact.
- Stage 1 goal: make right-to-left reading feel concrete before adding names.
- Stage 2 goal: add funerary and personal-name anchors.
- Stage 3 goal: add lower-confidence chunks only with reviewer-gated labels.

## Script Notes

- Old Italic is a script family. This packet deliberately uses an Etruscan
  boundary and must not generalize to every Italic language.
- Direction is `rtl` for this v1 and needs runtime support rather than CSS
  guessing.
- Letter forms can resemble Latin or Greek but represent a separate historic
  script and should not be normalized to modern letters.
- Corpus scarcity and epigraphic context shape every frequency claim.

## Validation Notes

- Segmentation review: verify right-to-left ordering, spacing, separators, and
  transliteration labels.
- Pronunciation review: keep phonetic hints conservative and marked as reviewed.
- Cultural review: handle funerary inscriptions and personal names respectfully.
- License review: keep exact inscription text out of shipped content until reuse
  obligations are approved.
