# Burmese Myanmar Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for a
Burmese reading course in the Myanmar script.

## Course Boundary

- Language/script: Burmese in the Myanmar script, `my-Mymr`, ISO 15924 `Mymr`.
- Target learner: English-literate traveler or beginner who wants to recognize
  useful Burmese signs and menu words before studying full grammar.
- Target domains: tea shops, menus, markets, prices, storefronts, transit signs,
  roads, hotels, hospitals, toilets, open and closed signs, and everyday labels.
- In scope for v1: modern printed Burmese, high-yield consonants, common vowel
  signs, first tone marks, asat, final consonant behavior, basic medials,
  syllable chunking, and reviewer-approved pronunciation hints.
- Out of scope for v1: complete consonant chart, full medial inventory, kinzi as
  a complete topic, Pali and Sanskrit spelling depth, numerals, handwriting,
  production spelling, full tone-system analysis, and grammar.

## Sequencing Rationale

- Frequency sources: Unicode and CLDR for script metadata, wordfreq for rough
  frequency intuition, Myanmar Wiktionary for discovery-only checks, OSM for
  environmental-print validation, future tokenizer tooling for segmentation QA,
  and app-authored examples for learner-visible content.
- First-session decoding target: `ရေ`, `ဆိုင်`, and `ဈေး`, because they provide
  survival, shop, and market wins while introducing preposed vowels, vowel
  stacking, final marks, and tone-like marks.
- Stage 1 goal: establish visual-order scanning and compact syllable-frame
  recognition.
- Stage 2 goal: add food, coffee, hotel, and closed-sign anchors with asat and
  vowel-sign practice.
- Stage 3 goal: introduce public-sign actions, open and closed pairs, and first
  facility chunks.
- Stage 4 goal: teach dense but useful transit, toilet, and tea-shop words after
  segmentation and shaping are stable.

## Script Notes

- Burmese uses orthographic syllables whose visible cluster may contain multiple
  signs around a base. Runtime data must separate code points from teachable
  syllable frames.
- Spaces are not reliable word boundaries in every context, so dictionary or
  manual segmentation is required.
- Asat and tone-like signs are small but high impact. They need explicit metadata
  and font QA.
- Medials and stacked behavior should not be split visually in drills.
- Myanmar font support must be validated on mobile and desktop before shipping
  learner-facing lessons.

## Validation Notes

- Segmentation review: verify dictionary word boundaries, orthographic syllable
  frames, asat spans, medials, and tone marks with a Burmese reviewer.
- Pronunciation review: confirm beginner-safe readings for all anchors,
  especially `ဈေး`, `လက်ဖက်ရည်`, `ထမင်း`, `ဝင်`, `ထွက်`, and `ဖွင့်`.
- Cultural review: confirm that shop, market, tea, hotel, hospital, toilet,
  transit, open, and closed anchors are natural and useful.
- License review: keep Wiktionary, OSM, tokenizer, and upstream corpus data out
  of shipped content until obligations are approved. Prefer app-authored examples
  for runtime lessons.
