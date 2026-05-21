# Baybayin Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for
`baybayin-reading-v1`.

## Course Boundary

- Language/script: Tagalog in Baybayin, `tl-Tglg`, ISO 15924 `Tglg`.
- Target learner: English-literate heritage or culture learner who wants to read
  simple Baybayin text and understand modern revival conventions.
- Target domains: cultural labels, identity and name text, classroom-primer
  words, simple everyday words, and modern revitalization examples.
- In scope for v1: base syllable signs, inherent `a`, i/e and u/o marks, a
  clearly documented final-consonant policy, and practical short words.
- Out of scope for v1: exhaustive historical orthography, handwriting, Kulitan or
  other Philippine scripts, decorative calligraphy, production spelling, and
  copied community examples.

## Sequencing Rationale

- Frequency sources: Unicode and CLDR for script metadata, Tagalog lexicons and
  Baybayin references for discovery only, community samples for usage discovery,
  and app-authored examples for shipped content.
- First-session decoding target: `ᜊᜊᜌᜒ` and `ᜎᜎᜃᜒ`, because they are open-syllable
  primer words that avoid final-consonant policy at first.
- Stage 1 goal: teach inherent-vowel behavior and the i/e mark before adding
  final consonants.
- Stage 2 goal: add everyday and sign words while making the modern virama policy
  visible.
- Stage 3 goal: put the script name and longer everyday words after learners can
  decode final-consonant notation.

## Script Notes

- Baybayin is an abugida. Base signs are syllabic and carry inherent `a` unless
  marked.
- Historic Baybayin and modern revival practices differ in how final consonants
  are represented. This is an unresolved product and cultural decision.
- The Unicode Tagalog block includes a virama, but modern community usage may
  also discuss pamudpod conventions that need specialist review.
- Bootstrap scores are manual estimates because modern Baybayin corpora are
  sparse and heavily community-curated.

## Validation Notes

- Segmentation review: verify base signs, dependent marks, and final-consonant
  notation before runtime data is built.
- Pronunciation review: confirm Tagalog glosses and pronunciation hints with a
  Tagalog speaker familiar with Baybayin.
- Cultural review: confirm whether modern revival examples and final-consonant
  notation choices are appropriate and respectful.
- License review: keep Wiktionary, learning references, and community samples out
  of shipped content until obligations are approved.
