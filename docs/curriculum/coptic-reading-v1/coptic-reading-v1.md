# Coptic Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for a
Coptic reading course.

## Course Boundary

- Language/script: Coptic in the Coptic script, `cop-Copt`, ISO 15924 `Copt`.
- Target learner: liturgical reader, museum visitor, manuscript-curious learner,
  or historical-language beginner who wants to recognize printed Coptic words.
- Target domains: liturgical texts, hymn/service books, dictionary headwords,
  manuscript transcriptions, museum labels, and learner grammars.
- In scope for v1: Sahidic-leaning printed Coptic, core vowels and consonants,
  common short forms, selected Greek-derived and Coptic-specific letters, and a
  small set of high-frequency text anchors.
- Out of scope for v1: full dialect comparison, Bohairic pronunciation as the
  default, manuscript paleography, grammar instruction, Coptic numerals, and
  exhaustive supralinear mark behavior.

## Sequencing Rationale

- Frequency sources: Unicode metadata for script inventory, Coptic Scriptorium
  for scoring intuition, Coptic Dictionary Online for discovery-only gloss
  checks, Antinoou for rendering checks, and app-authored examples for shipped
  content.
- First-session decoding target: `ⲙⲟⲟⲩ`, `ⲣⲱⲙⲉ`, and `ⲡⲉ`, because they are
  compact and show that Coptic is readable as a left-to-right alphabet.
- Stage 1 goal: establish core vowels, consonants, and short high-frequency
  forms without overloading grammar.
- Stage 2 goal: add common verbs and a high-payoff liturgical word through
  chunking.
- Stage 3 goal: add longer text words, kinship anchors, and Greek-derived forms
  while marking specialist-review needs.

## Script Notes

- Coptic script includes dedicated Coptic letters plus letters historically tied
  to Greek and Coptic Unicode blocks.
- Some letters resemble Greek but must remain Coptic-script content in authoring
  metadata and display.
- Supralinear marks and edition-specific punctuation are high-risk for automated
  normalization and should stay reviewer-gated.
- Coptic is not a travel-sign course. Its target domains require historic and
  liturgical context fields rather than menu/transit defaults.

## Validation Notes

- Segmentation review: verify Coptic code points, shared Greek/Coptic block
  letters, and combining marks are preserved correctly.
- Pronunciation review: choose a course-level pronunciation policy and label all
  dialect-sensitive hints.
- Cultural review: handle religious anchors respectfully and avoid presenting
  sacred terms as generic vocabulary without context.
- License review: keep corpus, dictionary, and transcription sources out of
  shipped content until per-source obligations are approved.
