# Lao Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for a
Lao reading course.

## Course Boundary

- Language/script: Lao in the Lao script, `lo-Laoo`, ISO 15924 `Laoo`.
- Target learner: English-literate traveler or beginner who wants to recognize
  useful Lao menus, shop signs, and public text before studying full grammar.
- Target domains: cafes, food menus, markets, price signs, shops, vehicle and
  road signs, hotels, public facilities, open and closed signs, and everyday
  labels.
- In scope for v1: modern printed Lao, high-yield consonants, common vowel signs,
  preposed vowel scan order, first tone marks, closed syllables, leading-h
  awareness, and reviewer-approved pronunciation hints.
- Out of scope for v1: full tone-class instruction, exhaustive vowel chart,
  rare letters, Lao numerals as a complete module, handwriting, production
  spelling, Pali and Sanskrit spelling depth, and grammar.

## Sequencing Rationale

- Frequency sources: Unicode and CLDR for script metadata, wordfreq for rough
  frequency intuition, Lao Wiktionary for discovery-only checks, OSM for
  environmental-print validation, future tokenizer tooling for segmentation QA,
  and app-authored examples for learner-visible content.
- First-session decoding target: `ນ້ຳ`, `ກາເຟ`, and `ລາຄາ`, because they cover
  survival, cafe, and market use while introducing tone marks, long-aa, and
  preposed vowels.
- Stage 1 goal: establish common bases, tone mark awareness, preposed vowel scan
  order, and simple final consonants.
- Stage 2 goal: add food, market, transit, and leading-h behavior through useful
  anchors.
- Stage 3 goal: teach wayfinding and open or closed signs after syllable frames
  are familiar.
- Stage 4 goal: use hotel and bathroom phrases to consolidate multiple
  tone-marked syllables without teaching the entire tone system.

## Script Notes

- Lao spaces often separate phrases rather than individual words. Segmentation
  needs dictionary or manual review.
- Vowels can appear before the consonant but are read with the syllable frame.
- Tone marks are visually small but pedagogically central. They should be stored
  as both visible marks and pronunciation-affecting metadata.
- Consonant class and leading-h behavior affect tone but should be introduced
  only as much as each anchor requires.
- Lao fonts must render combining marks and stacked-looking vowel frames clearly
  at drill sizes.

## Validation Notes

- Segmentation review: verify dictionary word boundaries, syllable frames, final
  consonants, tone marks, and preposed vowel spans with a Lao reviewer.
- Pronunciation review: confirm tone, vowel length, and register-neutral support
  copy for all anchors.
- Cultural review: confirm that `ນ້ຳ`, `ກາເຟ`, `ເຂົ້າ`, `ລາຄາ`, `ຮ້ານ`,
  `ຕະຫຼາດ`, `ອອກ`, `ເປີດ`, `ປິດ`, and facility phrases are natural beginner
  targets.
- License review: keep Wiktionary, OSM, tokenizer, and upstream corpus data out
  of shipped content until obligations are approved. Prefer app-authored examples
  for runtime lessons.
