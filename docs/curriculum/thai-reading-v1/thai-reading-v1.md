# Thai Reading Curriculum Notes

This durable course note records the v1 boundary for the Thai backfill packet.
The live lesson content already exists in `src/lib/data/thai.ts`.

## Course Boundary

- Language/script: Thai written in Thai script, `th-Thai`, ISO 15924 `Thai`.
- Target learner: English-literate beginner who wants practical decoding wins
  for menus, storefronts, prices, transit labels, and common signs.
- Target domains: restaurant menus, street storefronts, market price signs,
  transit wayfinding, public facilities, everyday labels, and food packaging.
- In scope for this backfill: the current 13 runtime lessons, their support
  vocabulary, vowel-position rules, early tone marks, final consonant behavior,
  leading-H, silent `อ`, and food or storefront anchors.
- Out of scope for v1: full tone matrix mastery, full consonant inventory,
  production spelling, handwriting, Thai numerals, advanced clusters, and broad
  grammar instruction.

## Sequencing Rationale

- Primary source: current runtime Thai sequence in `src/lib/data/thai.ts`.
- Secondary rationale: `docs/curriculum/thai.md`, which argues for real-word and
  frequency-first sequencing over alphabetic order.
- First-session decoding target: `มาก`, `ดี`, and `กิน` give immediate payoff
  while introducing right-side, above, and final-consonant scanning.
- Middle-course payoff: `ตลาด`, `ร้าน`, `ชุด`, and `สิบ` move into market,
  storefront, menu-combo, and price contexts.
- Late current-runtime payoff: `ข้าว`, `หมู`, `อาหาร`, and `ผัด` add essential
  food words plus high-class consonants, leading-H, silent carrier behavior, and
  short-a food chunks.

## Script Notes

- Thai vowels can appear after, above, below, before, or around the consonant.
  This packet tracks right, above, below, and left placement from the runtime.
- Tone is introduced through high-frequency sight words before full tone-class
  theory. `่` and `้` appear in the current runtime sequence.
- Final consonants often change sound value. Runtime lessons explicitly teach
  final `ก` as k, final `ด` as t, final `บ` as p, and final `ร` as n-like.
- Leading `ห` behaves like a tone-helper cluster in words such as `หมู`.
- `อ` can act as a silent carrier when a syllable starts with a vowel sound.
- `ตลาด` uses hidden-vowel behavior between consonants and should be reviewed
  as a cluster or syllable-frame pattern rather than as simple character order.

## Validation Notes

- Segmentation review: confirm every runtime syllable breakdown maps cleanly to
  future `curriculum.vocabulary_segments` and `anchor_segments` rows.
- Pronunciation review: validate tone marks, aspirated consonants, final sounds,
  leading-H examples, and romanization hints before DB publication.
- Cultural review: verify food, market, storefront, and everyday context notes
  remain natural and beginner-safe.
- License review: existing runtime and app-authored examples are app-owned.
  External frequency, tokenizer, and lexicon sources remain scoring or discovery
  only until terms are reviewed.
