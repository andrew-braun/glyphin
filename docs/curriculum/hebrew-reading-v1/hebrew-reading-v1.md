# Hebrew Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for a
Modern Hebrew reading course.

## Course Boundary

- Language/script: Modern Hebrew in the Hebrew script, `he-Hebr`, ISO 15924
  `Hebr`.
- Target learner: English-literate traveler, heritage learner, or general
  beginner who wants to read practical Hebrew text before studying full grammar
  or production spelling.
- Target domains: menus, cafes, market signs, street signs, transit labels,
  hotels, public facilities, everyday labels, and storefront signage.
- In scope for v1: unpointed Modern Hebrew, RTL reading direction, base letters,
  five final-letter forms, common matres lectionis behavior, selected
  dagesh-sensitive pairs, and optional niqqud only as teaching aids.
- Out of scope for v1: Biblical Hebrew as a separate course, cantillation,
  full niqqud mastery, handwriting, production spelling, advanced morphology,
  and religious or politically sensitive domain content beyond neutral public
  text.

## Sequencing Rationale

- Frequency sources: Unicode and CLDR for script metadata, `wordfreq` for rough
  Hebrew frequency intuition, OpenStreetMap names for environmental-print
  validation, Hebrew Wiktionary and Academy references for discovery-only
  spelling checks, and app-authored examples for learner-visible content.
- First-session decoding target: `לא`, `מים`, `קפה`, and `שלום`, because they
  are short practical anchors that introduce RTL direction, alef, lamed, mem and
  final mem, yod, qof, pe, he, shin, and vav.
- Stage 1 goal: make learners comfortable reading right-to-left words and seeing
  final forms as positional variants.
- Stage 2 goal: add food, market, price, and restaurant anchors while introducing
  kaf/final kaf, nun/final nun, het, bet, samekh, ayin, dalet, and resh.
- Stage 3 goal: add entrance/exit, station, taxi, and bus anchors that reinforce
  final forms and matres lectionis.
- Stage 4 goal: use open/closed, restroom, and hotel signs to consolidate longer
  chunks after the core sign-reading path is underway.

## Script Notes

- Hebrew is right-to-left and has no case. Mixed Hebrew and English UI needs
  explicit bidi isolation.
- Five letters have final forms: ך, ם, ן, ף, and ץ. These should usually be
  treated as positional variants rather than unrelated letters.
- Everyday Modern Hebrew is usually unpointed. Vowel points can teach
  pronunciation but should not be required for normal sign or menu recognition.
- Matres lectionis such as ו, י, and ה are crucial for beginner decoding but
  cannot be treated as one-to-one vowel symbols.
- Some pronunciation details vary by register or are historically conditioned.
  Reviewer-approved plain-language hints should beat formal romanization unless
  the product chooses a standard.

## Validation Notes

- Segmentation review: verify that final forms, niqqud marks, matres lectionis,
  and unpointed words are represented without confusing Unicode grapheme clusters
  with pedagogical units.
- Pronunciation review: confirm kaf/khaf, pe/fe, bet/vet, shin/sin, het, ayin,
  qof, resh, and unpointed vowel hints before learner-facing copy ships.
- Cultural review: confirm anchors such as `שלום`, `מסעדה`, `שירותים`, `פתוח`,
  and `סגור` are natural and neutral for beginner traveler contexts.
- License review: keep Wiktionary, OpenStreetMap, official terminology sources,
  and upstream corpus data out of shipped content until attribution and
  derived-data obligations are approved. Prefer app-authored examples for
  runtime lessons.
