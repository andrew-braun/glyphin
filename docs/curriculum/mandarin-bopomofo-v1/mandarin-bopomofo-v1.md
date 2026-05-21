# Mandarin Bopomofo Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for a
Mandarin Bopomofo reading course.

## Course Boundary

- Language/script: Mandarin Chinese pronunciation notation in Bopomofo,
  `zh-Bopo`, ISO 15924 `Bopo`.
- Target learner: beginner who wants to read Zhuyin notation in Taiwanese
  learner materials, dictionaries, pronunciation guides, ruby annotations, and
  classroom or family-learning contexts.
- Target domains: pronunciation guides, Taiwanese learner materials, dictionary
  annotations, food and cafe vocabulary, wayfinding terms, and public facility
  labels.
- In scope for v1: core Bopomofo symbols, syllable grouping, Mandarin tone
  marks, unmarked first tone, neutral-tone dot as a late review item, and
  Mandarin pronunciation support.
- Out of scope for v1: full Han character literacy, Cantonese or other Sinitic
  notation, extended dialect symbols, vertical ruby layout, tone sandhi theory,
  handwriting, keyboard input, and production practice.

## Sequencing Rationale

- Frequency sources: Unicode and CLDR for script metadata, Mandarin frequency
  sources for word utility, official and community lexicons for discovery only,
  and app-authored examples for shipped content.
- First-session decoding target: `ㄇㄚ`, `ㄇㄚˇ`, and `ㄋㄧˇ ㄏㄠˇ` establish
  syllable assembly and tone marks with a high-memorability greeting.
- Stage 1 goal: teach Bopomofo as syllable notation rather than an alphabetic
  string.
- Stage 2 goal: cover food and drink words with first, second, third, and fourth
  tone marks.
- Stage 3 goal: add commerce and store-status terms while introducing palatal
  initials carefully.
- Stage 4 goal: read compact wayfinding and public-facility notation.

## Script Notes

- Bopomofo symbols represent Mandarin initials, medials, and finals. The course
  should display them as syllable groups, not as disconnected letters.
- First tone is often unmarked. This is a rule the learner must see early rather
  than infer from missing markup.
- Second, third, and fourth tone marks are visible after the syllable in
  horizontal display. Neutral tone dot placement needs native review before it
  becomes learner-facing copy.
- Pinyin should be support metadata only. The reading target remains Bopomofo.
- Hanzi may be shown as meaning context after a Bopomofo form is known, but it
  should not drive this course's scope.

## Validation Notes

- Segmentation review: verify syllable boundaries, phrase spacing, and tone-mark
  placement for every anchor.
- Pronunciation review: a Mandarin reviewer should validate every Zhuyin form,
  pinyin support form, tone mark, and gloss.
- Cultural review: confirm Taiwan-oriented source assumptions, vocabulary, and
  learner contexts are appropriate.
- License review: keep MOE dictionary, CEDICT, and corpus-derived data out of
  shipped content until attribution and derivative-use obligations are approved.
