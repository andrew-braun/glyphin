# Task: Bulk Writing-System Bootstraps

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: in progress

## Goal

Bootstrap every writing system in the data-readiness ranking with bootstrap
difficulty of `High` or easier into a review-ready curriculum outline.

The output should follow the authoring framework, reuse the existing Korean
Hangul bootstrap as the reference packet, and record app or schema gaps before
runtime implementation begins.

## Scope

- In scope:
  - Use the `Ranking By Available Data` table in
    `docs/curriculum/writing-systems-catalog.md` as the candidate source of
    truth.
  - Cover ranks 1-61, from `Very low` through `High`.
  - Skip Hangul as already bootstrapped, while using
    `docs/curriculum/korean-hangul-v1/` as the quality reference.
  - Backfill Thai into the same authoring-artifact shape because the runtime
    course exists but no full `docs/curriculum/<course-id>/` packet exists yet.
  - Create one representative implementable v1 course for bundled rows unless a
    row explicitly needs an umbrella/question-only pass.
  - Create per-course `questions.md` files for architecture, product, source,
    reviewer, or licensing decisions that research cannot resolve safely.
- Out of scope:
  - Publishing runtime lessons.
  - Writing Supabase migrations or seed data.
  - Calling external services, downloading corpora, OCR, or model APIs.
  - Final legal, cultural, pronunciation, or native-speaker signoff.

## Ready-To-Implement Definition

Each completed course packet should include:

- `manifest.json`
- `sources.csv`
- `grapheme-candidates.csv` and `grapheme-candidates.scored.csv`
- `anchor-candidates.csv` and `anchor-candidates.scored.csv`
- `lesson-sequence.md`
- `review-packet.md`
- `db-ingestion-strategy.md`
- `<course-id>.md`
- `questions.md` when unresolved decisions remain

This is a review-ready curriculum outline, not finished learner-facing lesson
copy.

## Implementation Waves

### Pilot Calibration

- [x] `thai-reading-v1` draft packet
- [x] `greek-reading-v1` draft packet
- [x] `arabic-reading-v1` draft packet
- [x] `mandarin-han-v1` draft packet
- [x] `english-braille-v1` and `morse-signaling-v1` draft packets

### Wave A: Lowest Data Risk

- [x] Latin extensions and diacritics: `latin-diacritics-v1`
- [x] International Phonetic Alphabet: `ipa-reading-v1`
- [x] Hangul: already bootstrapped at `docs/curriculum/korean-hangul-v1/`
- [x] Greek: `greek-reading-v1`
- [x] Cyrillic: `russian-cyrillic-v1`
- [x] Japanese writing system: `japanese-kana-kanji-v1`
- [x] Han characters for Chinese: `mandarin-han-v1`

### Wave B: Medium Risk

- [x] Arabic script: `arabic-reading-v1`
- [x] Devanagari: `hindi-devanagari-v1`
- [x] Hebrew: `hebrew-reading-v1`
- [x] Thai: `thai-reading-v1`
- [x] Bopomofo: `mandarin-bopomofo-v1`
- [x] Bengali-Assamese: `bengali-assamese-v1`
- [x] Tamil: `tamil-reading-v1`
- [x] Gurmukhi: `punjabi-gurmukhi-v1`
- [x] Telugu: `telugu-reading-v1`
- [x] Kannada: `kannada-reading-v1`
- [x] Malayalam: `malayalam-reading-v1`
- [x] Gujarati: `gujarati-reading-v1`
- [x] Odia: `odia-reading-v1`
- [x] Ethiopic: `amharic-ethiopic-v1`
- [x] Braille: `english-braille-v1`
- [x] Morse code and signaling systems: `morse-signaling-v1`
- [x] Armenian: `armenian-reading-v1`
- [x] Georgian: `georgian-reading-v1`
- [x] Coptic: `coptic-reading-v1`

### Wave C: Medium-High Risk

- [x] Tibetan: `tibetan-reading-v1`
- [x] Khmer: `khmer-reading-v1`
- [x] Lao: `lao-reading-v1`
- [x] Myanmar: `burmese-myanmar-v1`
- [x] Sinhala: `sinhala-reading-v1`
- [x] Egyptian hieroglyphs: `egyptian-hieroglyphs-v1`
- [x] Runic scripts: `runic-reading-v1`
- [x] Phoenician: `phoenician-reading-v1`
- [x] Ogham: `ogham-reading-v1`
- [x] Linear B: `linear-b-reading-v1`

### Wave D: High Risk

- [x] Cuneiform: `cuneiform-reading-v1`
- [x] Maya hieroglyphs: `maya-hieroglyphs-v1`
- [x] Old Persian cuneiform: `old-persian-cuneiform-v1`
- [x] Ugaritic: `ugaritic-reading-v1`
- [x] Old Italic family: `old-italic-reading-v1`
- [x] Glagolitic: `glagolitic-reading-v1`
- [x] Gothic: `gothic-reading-v1`
- [x] Brahmi: `brahmi-reading-v1`
- [x] Syriac: `syriac-reading-v1`
- [x] Mongolian: `mongolian-reading-v1`
- [x] Tifinagh: `tifinagh-reading-v1`
- [x] Javanese: `javanese-reading-v1`
- [x] Balinese: `balinese-reading-v1`
- [x] Baybayin or Tagalog script: `baybayin-reading-v1`
- [x] Cherokee: `cherokee-reading-v1`
- [x] Canadian Aboriginal syllabics: `cree-syllabics-v1`
- [x] Adlam: `adlam-reading-v1`
- [x] N'Ko: `nko-reading-v1`
- [x] Shavian: `shavian-reading-v1`
- [x] Deseret alphabet: `deseret-reading-v1`
- [x] Sitelen Pona: `sitelen-pona-v1`
- [x] Vai: `vai-reading-v1`
- [x] Bamum: `bamum-reading-v1`
- [x] Thaana: `thaana-reading-v1`
- [x] Meitei Mayek: `meitei-mayek-v1`

## Plan

- [x] Confirm candidate scope and autonomous defaults.
- [x] Harden authoring tools for repeatable bulk bootstrapping.
- [x] Document the expanded artifact contract.
- [x] Create a central app-expansion matrix.
- [x] Run the pilot calibration packet set.
- [ ] Revise templates and scoring conventions after pilot review.
- [x] Run Waves C-D.
- [x] Final validation and consolidation.

## Subagent Pattern

For each pilot or wave course, launch read-only research subagents with separate
responsibilities:

- source and license scouting;
- script inventory, Unicode, normalization, rendering, and segmentation;
- pedagogy, anchors, candidate sequence, and target-domain fit;
- app, DB, and runtime implementation gaps.

The main agent owns artifact writing, validation, and tracker updates.

## Validation

- Tooling changes: run `pnpm check`.
- Formatting, lint, alias, or style changes: run `pnpm check:all`.
- Per course: run
  `pnpm curriculum:validate docs/curriculum/<course-id>/manifest.json`.
- Per course: run `pnpm curriculum:score` for both candidate CSVs.
- Per course: run
  `pnpm curriculum:review docs/curriculum/<course-id> --force`.
- Per wave: spot-check at least one packet from each structural family.

## Decisions

- Decision: Use the data-readiness ranking, not the popularity ranking.
  Reason: The user referenced difficulty `High` or below and rank 61, which maps
  to Meitei Mayek in the data-readiness table.
- Decision: Skip Hangul as already bootstrapped.
  Reason: `docs/curriculum/korean-hangul-v1/` already contains the reference
  packet.
- Decision: Backfill Thai into the authoring-tool packet format.
  Reason: Thai has runtime lessons and docs, but not a full bootstrap folder
  matching the new course-authoring contract.
- Decision: Default to one representative v1 per bundled row.
  Reason: Splitting every row into all possible language variants would expand
  this task far beyond the ranked 61 candidates.

## Progress

- [x] Planning discovery completed.
- [x] Master tracker created.
- [x] Authoring tool hardening completed for the pilot slice.
- [x] Greek pilot packet drafted.
- [x] Central app-expansion matrix created.
- [x] Greek pilot manifest validated, candidates scored, and review packet
      generated.
- [x] Wave A research subagents completed for Latin diacritics, IPA, Russian
      Cyrillic, Japanese, and Mandarin Han.
- [x] Wave A packets drafted for `latin-diacritics-v1`, `ipa-reading-v1`,
      `russian-cyrillic-v1`, `japanese-kana-kanji-v1`, and `mandarin-han-v1`.
- [x] Wave A manifests validated, candidates scored, and review packets
      generated.
- [x] Wave B packets drafted for RTL, Indic, Thai, Bopomofo, Ethiopic, Armenian,
      Georgian, Coptic, Braille, and Morse course families.
- [x] Wave B manifests validated, candidates scored, and review packets
      generated.
- [x] Wave C packets drafted for Tibetan, Khmer, Lao, Myanmar, Sinhala,
      Egyptian hieroglyphs, Runic, Phoenician, Ogham, and Linear B.
- [x] Wave D packets drafted for the high-risk historical, complex, modern,
      constructed, and community-script rows through Meitei Mayek.
- [x] Wave C/D manifests validated, candidates scored, and review packets
      generated.
- [x] Final validation passed across all 61 curriculum manifests, touched-file
      Prettier checks, touched-file markdownlint checks, `pnpm check`, and
      `git diff --check`.

## Open Questions

- None blocking the infrastructure slice. Course-specific questions should live
  in each course folder as `questions.md`.

## Follow-Up

- Runtime implementation should be split into separate tasks after the app-gap
  matrix exposes repeated needs across multiple courses.
