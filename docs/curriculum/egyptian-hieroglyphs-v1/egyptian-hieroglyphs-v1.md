# Egyptian Hieroglyphs Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for an
Egyptian hieroglyphic reading course.

## Course Boundary

- Language/script: Ancient Egyptian in Egyptian hieroglyphs, `egy-Egyp`, ISO
  15924 `Egyp`.
- Target learner: museum visitor, inscription-curious learner, or beginner
  Egyptology reader who wants careful sign recognition and transliteration
  support.
- Target domains: museum artifact labels, beginner sign lists, inscription
  transliterations, cartouche examples, and curated study excerpts.
- In scope for v1: selected iconic logograms, a small uniliteral sign set,
  cautious transliteration, orientation metadata, and sign identity notes.
- Out of scope for v1: full Middle Egyptian grammar, complete Gardiner coverage,
  quadrat composition as learner UI, handwriting or paleography, exhaustive
  determinatives, and confident spoken pronunciation.

## Sequencing Rationale

- Frequency sources: Unicode blocks for encoded signs and format controls,
  Egyptological databases for discovery-only attestation checks, Manuel de
  Codage conventions for transliteration planning, Noto font checks for
  rendering, and app-authored examples for shipped content.
- First-session decoding target: `𓋹`, `𓇳`, and `𓉐`, because they give a real
  museum reading win while keeping sign count small.
- Stage 1 goal: establish sign recognition, gloss labels, and the difference
  between meaning and transliteration.
- Stage 2 goal: add common uniliteral signs through short controlled words and
  reinforce that Egyptian writing usually omits vowels.
- Stage 3 goal: introduce sacred or abstract museum terms only with cultural and
  specialist review.

## Script Notes

- Direction and orientation are part of the reading problem. Ancient inscriptions
  may run right-to-left, left-to-right, or in vertical columns.
- Unicode text alone does not encode all layout expectations for historic
  quadrats. Runtime lessons need explicit source-order and display-orientation
  metadata.
- Transliteration symbols such as `ꜣ`, `ꜥ`, `ḥ`, `ḫ`, and `ṯ` are course data and
  require font support alongside the hieroglyphs.
- Pronunciation hints must be labeled as Egyptological reading conventions, not
  as recoverable modern speech.

## Validation Notes

- Segmentation review: verify sign clusters, format controls, and transliteration
  segments are stored separately from visible glyph display.
- Pronunciation review: use an Egyptologist to approve all transliteration labels
  and any classroom-style vocalization hints.
- Cultural review: treat divine names, funerary formulas, and royal terminology
  as contextual material rather than generic vocabulary.
- License review: keep databases, dictionaries, and inscription examples out of
  shipped content until source-specific attribution and reuse terms are cleared.
