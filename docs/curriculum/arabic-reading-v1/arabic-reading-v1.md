# Arabic Script Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for an
Arabic-script reading course.

## Course Boundary

- Language/script: Arabic in the Arabic script, `ar-Arab`, ISO 15924 `Arab`.
- Target learner: English-literate traveler, heritage learner, or general
  beginner who wants to read practical Arabic-script text before studying full
  grammar or production.
- Target domains: menus, cafes, market signs, street signs, transit labels,
  hotels, public facilities, everyday labels, and common storefront signage.
- In scope for v1: Modern Standard Arabic oriented signage vocabulary, RTL
  reading direction, joining behavior, positional forms, long-vowel letters,
  hamza as an early visible mark, ta marbuta, lam-alif, and selected unvowelled
  short words.
- Out of scope for v1: dialect production, Qur'anic or liturgical registers,
  full morphology, handwriting, calligraphy, full vocalization, advanced hamza
  spelling rules, and region-specific vocabulary beyond reviewer-approved
  practical labels.

## Sequencing Rationale

- Frequency sources: Unicode and CLDR for script metadata, `wordfreq` for rough
  Arabic frequency intuition, OpenStreetMap names for environmental-print
  validation, Arabic Wiktionary for discovery-only spelling/gloss checks, CAMeL
  Tools as a possible analysis aid, and app-authored examples for learner-visible
  content.
- First-session decoding target: `لا`, `باب`, `ماء`, and `شاي`, because they are
  short practical anchors that introduce RTL direction, alif, lam, lam-alif,
  ba, meem, hamza, sheen, and ya.
- Stage 1 goal: make learners comfortable following right-to-left words and
  seeing that visible glyph forms change by position.
- Stage 2 goal: add high-payoff menu and facility letters through `سوق`, `قهوة`,
  `تاكسي`, `فندق`, `حلال`, and `حمام`.
- Stage 3 goal: add entry/exit sign pairs and unvowelled reading through `خروج`,
  `دخول`, `سعر`, `خبز`, and `حليب`.
- Stage 4 goal: use longer facility and storefront words such as `مطعم`, `مطار`,
  `مفتوح`, and `مغلق` to consolidate chunks after the learner has enough known
  material.

## Script Notes

- Arabic letters shape contextually. The learner-facing unit is usually the base
  letter, while the rendered glyph may appear isolated, initial, medial, or
  final.
- Arabic is right-to-left, but the app UI and notes will often be mixed with
  English. Bidi isolation needs to be deliberate before runtime content ships.
- Most everyday Arabic text is unvowelled. Short-vowel marks can help teaching,
  but they should be presented as optional aids rather than normal sign text.
- Some words and pronunciations vary regionally. Early anchors should stay as
  region-neutral as possible and require native-speaker review.
- App-authored examples should avoid copying real signs or source sentences from
  third-party corpora until source licenses are approved.

## Validation Notes

- Segmentation review: verify that base letters, contextual forms, lam-alif,
  hamza, ta marbuta, and optional harakat are modeled without confusing Unicode
  grapheme clusters with pedagogical units.
- Pronunciation review: confirm qaf, ha, kha, ayn, ghayn, emphatic consonants,
  hamza, ta marbuta, and long vowels before learner-facing copy is shipped.
- Cultural review: confirm `حلال`, restroom wording, and region-neutral signage
  vocabulary with Arabic-speaking reviewers.
- License review: keep Wiktionary, OpenStreetMap, word-frequency corpora, and
  tokenizer/model data out of shipped content until attribution and derived-data
  obligations are approved. Prefer app-authored examples for runtime lessons.
