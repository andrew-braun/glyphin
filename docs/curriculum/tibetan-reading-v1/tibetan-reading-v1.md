# Tibetan Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for a
Tibetan reading course.

## Course Boundary

- Language/script: Tibetan in the Tibetan script, `bo-Tibt`, ISO 15924 `Tibt`.
- Target learner: English-literate traveler, culture learner, or heritage
  beginner who wants to recognize practical printed Tibetan before studying
  full orthography or grammar.
- Target domains: tea-house menus, water and everyday labels, road and place
  names, cultural-site signs, public facilities, schools, hotels, and simple
  direction signs.
- In scope for v1: modern printed Uchen forms, high-yield base letters, vowel
  signs, tsheg-syllable boundaries, common compounds, first stacked letters, and
  reviewer-approved pronunciation hints.
- Out of scope for v1: handwriting, Ume calligraphic styles, exhaustive prefix
  and suffix rules, full Wylie transliteration, Sanskrit extensions, classical
  grammar, chant or liturgical fluency, and dialect comparison.

## Sequencing Rationale

- Frequency sources: Unicode and CLDR for script metadata, broad corpus sources
  only as scoring signals, Tibetan Wiktionary for discovery-only checks, OSM for
  environmental-print validation, Botok for future segmentation exploration, and
  app-authored examples for learner-visible content.
- First-session decoding target: `ཇ`, `ཆུ`, and `ལམ`, because they provide a
  tea-house word, a survival word, and a wayfinding word with minimal stack load.
- Stage 1 goal: establish base letters, below vowel signs, simple syllable
  shapes, and written finals.
- Stage 2 goal: teach tsheg boundaries and reusable compounds such as `ཁང` and
  `ཟ་ཁང`.
- Stage 3 goal: introduce pronunciation support for historical spelling and the
  first stacked or subjoined forms.
- Stage 4 goal: use cultural-site and facility words to consolidate dense stacks
  after the renderer and segmentation model are ready.

## Script Notes

- Tibetan uses visible tsheg marks between syllables. Those boundaries should not
  be treated as ordinary spaces or as guaranteed word boundaries.
- Vowel signs attach around a consonant base and can be smaller than the
  learner-visible syllable unit.
- Stacked letters require script-aware fonts and metadata so drills do not split
  rendered clusters visually.
- Beginner pronunciation often diverges from written letters, especially around
  prefixes, suffixes, and stacks. Reviewer-approved pronunciation notes are
  required before runtime lessons ship.
- Tibetan punctuation such as shad should be recognized as script-specific
  punctuation rather than copied into Latin punctuation assumptions.

## Validation Notes

- Segmentation review: verify tsheg-syllable boundaries, root consonants,
  suffixes, and stacked forms against a Tibetan reviewer or trusted tokenizer.
- Pronunciation review: confirm beginner-safe readings for anchors, especially
  `བོད`, `སྒོ`, `འགྲོ`, `དགོན་པ`, and `མགྲོན་ཁང`.
- Cultural review: confirm that tea-house, cultural-site, school, road, hotel,
  and facility anchors are natural and useful in Tibetan-script contexts.
- License review: keep Wiktionary, OSM, tokenizer, and broad corpus outputs out
  of shipped content until their obligations are approved. Prefer app-authored
  examples for runtime lessons.
