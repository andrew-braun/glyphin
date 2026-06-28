# Thai Curriculum

- Start date: 2026-05-02
- Owner: GitHub Copilot
- Status: active

## Goal

Track the implemented Thai glyph-system curriculum, its current coverage, and the
next authoring work needed to expand it.

## Authority

- This is the authoritative `.ai` tracker for Thai curriculum progress and to-dos.
- Use this file as the central status location for Thai content work.
- Keep durable concept rationale in `../../docs/concept/approach-thai.md` and exact DB
  schema truth in `../../docs/database-dto-spec.md`.
- Keep Supabase runtime and auth sequencing in `../tasks/supabase-db-foundation/implementation-status.md`.

## Current Summary

- Thai is complete for the current v1 seeded content slice, not for the full long-term
  Thai curriculum.
- The DB content model is already capable of lessons with graphemes, multiple words,
  rule or tip-style explanations, examples, drills, and published lesson bundles.
- The first authored Thai seed is implemented and validated end to end.
- The approved runtime curriculum covers `approach-thai.md` levels 1 through 5,
  plus the lesson-sequence Stage 6 expansion (Lessons 14-21) authored 2026-06-28,
  which deepens high-frequency consonant and leading-vowel coverage.
- The `approach-thai.md` level 6 loanword and complex-cluster expansion is still
  future work. Note the numbering axes differ: lesson-sequence "Stage 6" is the
  leading-vowel/consonant deepening, not the `approach-thai.md` "Level 6" loanwords.

## What Exists Now

### Authored v1 Thai Course

Snapshot as of 2026-06-28 (Stages 1-6 authored). Vocabulary totals also move with
the separate in-progress per-lesson practice-vocabulary expansion, so treat those
lines as current-state rather than fixed.

- Lessons: 21
- Unique new graphemes: 34
- Lesson-grapheme joins: 136 total
  - 34 `new`
  - 102 `review`
- Rules: 46
- Rule examples: 95
- Drills: 107
- Drill options: 428
- Vocabulary items: 157
- Lesson-vocabulary joins: 191 total
  - 21 `anchor`
  - 170 `support`
- Vocabulary segments: 196
- Anchor segments: 39

### Implemented Thai Content Capabilities

- Grapheme-by-grapheme lesson pedagogy
- One featured anchor word per lesson
- Multiple reusable lesson vocabulary words via support vocabulary
- Rule and tip-style explanations with authored examples
- Choice-based drills and answer options
- Published `delivery.*` lesson bundles for runtime reads

### Current Coverage Status

| Concept level from `approach-thai.md`               | Runtime coverage | Status      | Notes                                                                                  |
| --------------------------------------------------- | ---------------- | ----------- | -------------------------------------------------------------------------------------- |
| Level 1: anchor set and first five letters          | Lessons 1-3      | implemented | `มาก`, `ดี`, and `กิน` establish the first high-payoff consonants and vowels           |
| Level 2: verticality and transit                    | Lessons 4-5      | implemented | `ตลาด` and `บิน` cover hidden vowels, market reading, and reusable `-ิน` frames        |
| Level 3: before vowels and tone markers             | Lessons 6-7      | implemented | `แม่` and `ร้าน` introduce left-side vowels and the first two tone marks               |
| Level 4: sibilants and short `u`                    | Lessons 8-9      | implemented | `ชุด` and `สิบ` cover `ช`, `ส`, `ุ`, and another final-stop family                     |
| Level 5: high-class consonants and survival utility | Lessons 10-13    | implemented | `ข้าว`, `หมู`, `อาหาร`, and `ผัด` cover food, leading-`ห`, and silent-carrier patterns |
| Level 6: loanwords and complex clusters             | none yet         | pending     | `คอมพิวเตอร์`, `เซเว่น`, `แบงก์`, and `ไวไฟ` remain future Thai content                |

> Beyond the `approach-thai.md` levels above, lesson-sequence Stage 6 (Lessons
> 14-21) is now authored and seeded: `ง` + final ng, the `อ`-as-aw vowel, low `ท`,
> `จ` + the `ะ` glottal short-a, the leading-vowel family (`เ ไ ใ โ`), mid `ป`, and
> `ย` + glide finals. See `docs/curriculum/thai-reading-v1/lesson-sequence.md`.

## Current Source Hierarchy

1. `src/lib/data/thai.ts`
   - Canonical source for the current authored Thai lesson set, anchor words,
     grapheme pedagogy, rules, drills, and review ordering.
2. `src/lib/data/types.ts`
   - Canonical runtime lesson contract.
3. `docs/concept/approach-thai.md`
   - Durable Thai concept source for sequencing rationale, coverage goals, and
     future expansion candidates.
4. `docs/database-dto-spec.md`
   - Canonical schema and DTO contract for how Thai content maps into the DB.
5. `scripts/generate-thai-seed.mjs` and `supabase/seed.sql`
   - Current materialization path from authored Thai runtime content into DB seed
     and published delivery payloads.

## Current Authoring Status

- The first Thai curriculum seed is complete and validated.
- The public learn runtime now reads the published lesson bundle without drift from
  the authored Thai runtime contract.
- Thai is ready for more lessons, more graphemes, more vocabulary, and more rule
  content within the current DB model.
- Thai is not yet complete as a full script-learning program, because the next
  concept wave is still unencoded.

## Open To-Dos

- Full-alphabet scope is now approved (2026-06-27). The remaining Thai grapheme
  inventory is scored frequency-first in
  `docs/curriculum/thai-reading-v1/grapheme-candidates.scored.csv`, and a
  proposed Stage 6+ lesson sequence (Lessons 14-46) is drafted in
  `docs/curriculum/thai-reading-v1/lesson-sequence.md`. Tracking file:
  `.ai/archive/2026-06-27-thai-full-alphabet-research.md`. Next: Thai-speaker review of
  first-pass scores and the Stage 6 glosses/pronunciations.
- Stage 6 (Lessons 14-21) is now authored and seeded (2026-06-28). The 8 lessons
  (ของ, ทาง, จะ, เกม, ไก่, โต, ปิด, ยา) introduce ง + final ng, the อ-as-aw vowel,
  low ท, จ + the ะ short-a glottal stop, the leading-vowel family (เ ไ ใ โ), mid ป,
  and ย + glide finals. They live in `src/lib/data/thai.ts`, are wired into the
  slug map in `scripts/generate-thai-seed.mjs`, regenerated into `supabase/seed.sql`,
  and verified end to end: `pnpm db:reset` now publishes 21 lessons. L14 kept dense
  (three new ideas) per the cadence decision; the อ-aw split was declined. Pending:
  Thai-speaker pass on the new glosses/codas before calling Stage 6 final.
- Scope the first level 6 Thai content wave from `docs/concept/approach-thai.md`.
- Decide the next Thai version boundary after the current 13-lesson release.
- Validate the next lesson candidates against real-world print targets such as
  signage, menus, transit labels, and packaging.
- Decide whether the next Thai seed should start filling
  `pedagogical_group_key`, `pedagogical_group_label`, or `tags` for grapheme and
  lesson metadata.
- Keep `src/lib/data/thai.ts`, `scripts/generate-thai-seed.mjs`, and
  `supabase/seed.sql` aligned whenever Thai content changes.

## Not In Scope Yet

- Translation tables or localized alternate course copy
- Audio or image assets tied to Thai lessons
- Spaced-repetition projections as part of Thai content authoring
- A fully encoded level 6 Thai expansion

## Practical Status Language

Use this wording when summarizing Thai status:

"We have a complete v1 Thai content schema plus a fully seeded 21-lesson Thai
course (Stages 1-6), but we do not yet have the full long-term Thai curriculum
encoded."
