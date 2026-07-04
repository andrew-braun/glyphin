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
- Keep durable curriculum rationale in `../../docs/curriculum/thai.md` and
  `../../docs/curriculum/thai-reading-v1/`; keep exact DB schema truth in
  `../../docs/database-dto-spec.md`.
- Keep Supabase runtime and auth sequencing in `../tasks/supabase-db-foundation/implementation-status.md`.

## Current Summary

- Thai is complete for the current v1 seeded content slice, not for the full long-term
  Thai curriculum.
- The DB content model is already capable of lessons with graphemes, multiple words,
  rule or tip-style explanations, examples, drills, and published lesson bundles.
- The first authored Thai seed is implemented and validated end to end.
- The approved runtime curriculum now covers lesson-sequence Stages 1-6
  (Lessons 1-21), including the 2026-06-28 high-frequency consonant and
  leading-vowel expansion.
- The old `docs/concept/approach-thai.md` reference is superseded by
  `docs/curriculum/thai.md`, `docs/curriculum/thai-reading-v1/`, and the active
  `.ai/curriculum/` trackers. Do not restore it unless a future audit finds
  unique surviving content that needs migration.

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

| Lesson-sequence stage | Runtime coverage | Status      | Notes                                                                                  |
| --------------------- | ---------------- | ----------- | -------------------------------------------------------------------------------------- |
| Stage 1               | Lessons 1-3      | implemented | `มาก`, `ดี`, and `กิน` establish the first high-payoff consonants and vowels           |
| Stage 2               | Lessons 4-5      | implemented | `ตลาด` and `บิน` cover hidden vowels, market reading, and reusable `-ิน` frames        |
| Stage 3               | Lessons 6-7      | implemented | `แม่` and `ร้าน` introduce left-side vowels and the first two tone marks               |
| Stage 4               | Lessons 8-9      | implemented | `ชุด` and `สิบ` cover `ช`, `ส`, `ุ`, and another final-stop family                     |
| Stage 5               | Lessons 10-13    | implemented | `ข้าว`, `หมู`, `อาหาร`, and `ผัด` cover food, leading-`ห`, and silent-carrier patterns |
| Stage 6               | Lessons 14-21    | implemented | `ง`, low `ท`, `จ`, `ะ`, leading vowels (`เ ไ ใ โ`), `ป`, `ย`, and glide/final rules    |
| Stages 7-14           | Lessons 22-46    | planned     | Full-alphabet completion, tone synthesis, numerals, marks, and recognition-only glyphs |

## Current Source Hierarchy

1. `src/lib/data/thai.ts`
   - Canonical source for the current authored Thai lesson set, anchor words,
     grapheme pedagogy, rules, drills, and review ordering.
2. `src/lib/data/types.ts`
   - Canonical runtime lesson contract.
3. `docs/curriculum/thai.md` and `docs/curriculum/thai-reading-v1/`
   - Durable Thai sequencing rationale, coverage goals, review questions, and
     full-alphabet lesson planning.
4. `.ai/2026-06-28-thai-curriculum-completion.md`
   - Active tracker for completing lessons 22-46.
5. `docs/database-dto-spec.md`
   - Canonical schema and DTO contract for how Thai content maps into the DB.
6. `scripts/generate-thai-seed.mjs` and `supabase/seed.sql`
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
  proposed Stage 7+ lesson sequence (Lessons 22-46) is drafted in
  `docs/curriculum/thai-reading-v1/lesson-sequence.md`. Tracking files:
  `.ai/archive/2026-06-27-thai-full-alphabet-research.md` and
  `.ai/2026-06-28-thai-curriculum-completion.md`. Next: anchor scoring for
  Lessons 22-46 and Thai-speaker review of first-pass scores and the Stage 6
  glosses/pronunciations.
- Stage 6 (Lessons 14-21) is now authored and seeded (2026-06-28). The 8 lessons
  (ของ, ทาง, จะ, เกม, ไก่, โต, ปิด, ยา) introduce ง + final ng, the อ-as-aw vowel,
  low ท, จ + the ะ short-a glottal stop, the leading-vowel family (เ ไ ใ โ), mid ป,
  and ย + glide finals. They live in `src/lib/data/thai.ts`, are wired into the
  slug map in `scripts/generate-thai-seed.mjs`, regenerated into `supabase/seed.sql`,
  and verified end to end: `pnpm db:reset` now publishes 21 lessons. L14 kept dense
  (three new ideas) per the cadence decision; the อ-aw split was declined. Pending:
  Thai-speaker pass on the new glosses/codas before calling Stage 6 final.
- Append and score Stage 7-14 anchors in
  `docs/curriculum/thai-reading-v1/anchor-candidates.csv`.
- Author Stage 7 lessons from the finalized full-curriculum plan after anchor
  scoring.
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
- Handwriting production for the completed Thai sequence

## Practical Status Language

Use this wording when summarizing Thai status:

"We have a complete v1 Thai content schema plus a fully seeded 21-lesson Thai
course (Stages 1-6), but we do not yet have the full long-term Thai curriculum
encoded."
