# Syriac Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for
`syriac-reading-v1`.

## Course Boundary

- Language/script: Syriac in the Syriac script, `syr-Syrc`, ISO 15924 `Syrc`.
- Target learner: English-literate heritage, cultural, or liturgical learner who
  wants a first decoding path for short Syriac-script text.
- Target domains: short greetings, water and food labels, classroom-primer
  words, cultural-site labels, church labels, and community wayfinding.
- In scope for v1: base letters needed for compact anchors, RTL order,
  contextual shaping, matres lectionis, dot awareness, and optional vowel-point
  exposure.
- Out of scope for v1: full grammar, dialect comparison, liturgical chanting,
  manuscript hands, palaeography, production spelling, and exhaustive vowel
  pointing.

## Sequencing Rationale

- Frequency sources: Unicode and CLDR metadata for script inventory, joining
  data for shaping checks, Wiktionary and Syriaca.org for discovery-only review,
  OpenStreetMap for possible community-label validation, and app-authored
  examples for learner-visible content.
- First-session decoding target: `ܡܝܐ`, `ܫܠܡܐ`, and `ܠܚܡܐ`, because they are
  compact and expose RTL order, joining, matres lectionis, and a food word.
- Stage 1 goal: make the learner comfortable reading right-to-left joined text
  without treating presentation forms as separate letters.
- Stage 2 goal: add dot-aware letters, market and classroom vocabulary, and
  repeated matres lectionis.
- Stage 3 goal: introduce cultural-site and longer words only after direction
  and joining are stable.

## Script Notes

- Syriac is written right to left and requires correct bidirectional isolation
  when mixed with English UI text.
- Contextual forms should be rendered by the font. They should not be stored as
  separate presentation-form lesson content.
- Optional vowel points can support pedagogy but are not guaranteed in real
  environmental text.
- Dot distinctions and small marks need font-size QA at drill, card, and table
  sizes.

## Validation Notes

- Segmentation review: verify grapheme-cluster handling for combining points and
  ensure pedagogical units do not split required marks away from base letters.
- Pronunciation review: assign a Syriac specialist to validate dialect-sensitive
  hints and decide whether v1 uses Classical Syriac style pronunciation notes.
- Cultural review: confirm anchors such as `ܫܠܡܐ`, `ܥܕܬܐ`, and `ܡܠܦܢܐ` fit the
  intended learner context.
- License review: keep Wiktionary, Syriaca.org, OpenStreetMap, and corpus-derived
  examples out of shipped content until obligations are approved.
