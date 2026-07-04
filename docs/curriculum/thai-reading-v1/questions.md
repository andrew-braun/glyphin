# Thai Reading Questions

Use this file for open questions, review gates, and resolved decisions from the
`thai-reading-v1` bootstrap.

## Architecture

- How should current Thai-specific fields such as `thai` in runtime lesson data
  be generalized before this packet becomes multi-course DB seed data?

## Resolved

- Full-alphabet coverage is now in scope (decision 2026-06-27). The remaining
  Thai inventory has been scored frequency-first in
  `grapheme-candidates.scored.csv`, and a proposed Stage 7+ sequence is drafted
  in `lesson-sequence.md`. Tracking: `.ai/archive/2026-06-27-thai-full-alphabet-research.md`.
- Redundant phonemes (multiple glyphs -> one sound) and obsolete glyphs are
  grouped into late "same sound, rarer glyph" recognition lessons rather than
  given individual high-effort lessons.
- The full-alphabet expansion ships as a continuation of `thai-reading-v1`, not
  as a new `thai-reading-v2` boundary. The manifest course ID remains
  `thai-reading-v1`; the runtime `thai` pack ID remains a compatibility slug
  until a deliberate multi-course migration changes it.
- For v1, pedagogical units that are not simple Unicode grapheme clusters remain
  modeled through authored lesson rules, tips, drills, review letters, and
  practice vocabulary. No DB schema change is required before lessons 22-46.
- Authored Thai word and syllable segmentation remains manual for v1. PyThaiNLP
  or another tokenizer may be used as a reviewer aid, but not as an automatic
  publication dependency.
- The obsolete/historical glyph set (`ฃ ฅ ฦ ฦๅ ฤๅ ๅ`) ships as optional
  recognition-only L46 unless final review rejects it.
- L35 includes the formal tone-class matrix in v1 as a synthesis lesson. Use
  `ข่าว` as the representative anchor unless anchor scoring finds a clear
  replacement.
- L38 uses `เกาะ` as the representative anchor for short diphthong synthesis
  unless anchor scoring finds a clear replacement.
- Tone marks are assessed primarily as visual reading/recognition in drills.
  Pronunciation, romanization, and gloss accuracy are final content-review gates,
  not an audio-production scope requirement.
- Hidden-vowel frames, true initial clusters, and leading-`ห` stay separate rule
  cards rather than one generic cluster mechanic.
- `ร้านอาหาร`, `ออก`, and `ผัก` remain practice/review targets unless anchor
  scoring later proves that one should replace a planned anchor.
- Stage 7+ lessons target 20 core practice reads per lesson. Ten core practice
  reads is the hard minimum and any exception must be documented in the task
  tracker and `lesson-sequence.md`.

## Product And Pedagogy

- The first-pass expansion scores are LLM frequency intuition only and need a
  Thai-speaker / corpus review before they are treated as a final sequence.
- Anchors for Stages 7-14 are provisional and still need the anchor-candidate
  scoring pass before lesson authoring.

## Sources, Licensing, And Attribution

- Keep external Thai frequency and lexicon sources out of shipped content until
  license and attribution obligations are reviewed.
- Confirm exact Unicode and CLDR license notices required if metadata is copied
  into durable course records.
- Verify whether any current runtime context note was influenced by third-party
  material before treating it as app-authored shipped content.

## Reviewers And Validation

- Assign a Thai speaker to validate tone marks, romanization, glosses, food
  vocabulary, and register.
- Spot-check menus, storefronts, market price signs, transit labels, and public
  facility signs against the current 21-lesson coverage.
- Verify fonts render Thai above and below marks clearly at lesson and drill
  sizes on mobile and desktop.

## App Expansion Recommendations

- Add language-agnostic runtime text fields before publishing non-Thai courses.
- Add course-aware progress storage so the existing Thai course can coexist with
  future script courses.
- Add metadata for vowel position, tone marks, final consonant sound roles,
  leading clusters, and silent carriers.
- Add Thai syllable or word segmentation boundaries to the DB seed pipeline
  rather than relying on UI-only syllable arrays.
