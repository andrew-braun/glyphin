# Thai Curriculum Completion

- Start date: 2026-06-28
- Owner: Codex
- Status: plan finalized; implementation not started

## Goal

Complete full-alphabet Thai Reading v1 by extending the current 21-lesson shipped
course to 46 lessons across 14 stages.

## Authority Chain

1. `docs/curriculum/thai-reading-v1/lesson-sequence.md`
2. `docs/curriculum/thai-reading-v1/anchor-candidates.scored.csv`
3. `src/lib/data/thai.ts`
4. `scripts/generate-thai-seed.mjs`
5. `supabase/seed.sql`
6. `delivery.*` smoke output

## Locked Decisions

- Continue as `thai-reading-v1`; keep runtime `thai` as a compatibility slug.
- **Widen the schema for non-letter graphemes.** Stages 11–14 introduce Thai
  numerals (๐–๙), `ๆ`, `ฯ`, `์`, `็` — none fit the current
  `Letter.type = "consonant" | "vowel" | "tone_mark"`. Widen the union (add
  `numeral` / `mark`) and add a matching /alphabet section before Wave 1, since
  the type touches every downstream artifact. Supersedes the earlier
  "no schema change" assumption. See [[project_thai_completion_schema_gap]].
- Otherwise keep the current Thai runtime content shape for v1; broader
  language-agnostic cleanup remains later app-expansion work.
- Keep manual Thai segmentation for v1. Tokenizer output may support review only.
- Practice vocabulary for L14–46 is sourced from
  `docs/curriculum/thai-reading-v1/practice-words.md` (provided 2026-07-04):
  ~16 glyph-constrained, frequency-ranked words per lesson, ★-marked targets.
  Romanization already matches the app (Paiboon w/ tone diacritics); normalize
  IPA vowels `ɔɔ/əə/ʉʉ → aw/er/ue`. Words flagged "previews L\_\_" must not be
  `drillTarget` at their appearance lesson.
- Target 20 core practice reads per new lesson. Ten is the hard minimum.
- Use `ข่าว` for L35 tone-class synthesis unless scoring finds a better anchor.
- Use `เกาะ` for L38 short-diphthong synthesis unless scoring finds a better anchor.
- Keep L46 as optional recognition-only obsolete/historical glyph coverage.
- Treat hidden-vowel frames, true clusters, and leading-`ห` as separate rule cards.
- Treat old `docs/concept/approach-thai.md` references as superseded by the current
  curriculum docs and trackers.

## Progress

- [x] Finalize plan decisions
- [x] Sync decision state into `questions.md`
- [x] Sync high-level Thai curriculum trackers
- [x] Capture L14-46 practice-word source (`practice-words.md`, 2026-07-04)
- [x] Widen `Letter.type` for numerals/marks + add /alphabet section (pre-Wave 1)
  - `types.ts` union → adds `numeral` | `mark`; `delivery-payload.ts` validator Set
    updated (else numeral/mark letters reject at publish); `/alphabet` gains
    Numerals + Marks sections (empty sections are filtered until authored);
    `tips.ts` gains `letter-type-numeral` / `letter-type-mark` so the Type row
    stays populated. All four files typecheck clean.
- [ ] Backfill Stage 6 (L14-21) practice vocab from `practice-words.md` (currently 4-5 words/lesson)
- [ ] Retire remaining stale `approach-thai.md` references in runtime/DB docs
- [ ] Append L22-L46 anchors to `anchor-candidates.csv`
- [ ] Run `pnpm curriculum:score docs/curriculum/thai-reading-v1/anchor-candidates.csv`
- [ ] Refresh review packet with `pnpm curriculum:review docs/curriculum/thai-reading-v1 --force`
- [ ] Wave 1: Stage 7 lessons 22-25
- [ ] Wave 2: Stage 8 lessons 26-29
- [ ] Wave 3: Stage 9 lessons 30-33
- [ ] Wave 4: Stage 10 lessons 34-38
- [ ] Wave 5: Stages 11-14 lessons 39-46
- [ ] Regenerate `supabase/seed.sql`
- [ ] Run `pnpm db:reset`
- [ ] Run `pnpm db:smoke:delivery`
- [ ] Run `pnpm check`
- [ ] Run `pnpm curriculum:validate docs/curriculum/thai-reading-v1/manifest.json`
- [ ] Run `pnpm build`

## Blockers And Review Gates

- Anchor scoring is required before authoring each wave.
- Thai-speaker or corpus-backed review is required before final publication for
  tone marks, romanization, glosses, register, segmentation, and accepted
  weak-band anchors.
- Any lesson with fewer than 10 core practice targets needs an explicit exception
  in this tracker and `lesson-sequence.md`.
- Final publication requires seed regeneration, local DB reset, delivery smoke,
  curriculum validation, and build verification.

## Cross-Links

- Plan: `.ai/2026-06-28-thai_curriculum_completion_1b3f0dd3.plan.md`
- Practice-word source (L14-46): `docs/curriculum/thai-reading-v1/practice-words.md`
- Language tracker: `.ai/curriculum/thai.md`
- Backfill tracker: `.ai/curriculum/thai-reading-v1.md`
- Full-alphabet research: `.ai/archive/2026-06-27-thai-full-alphabet-research.md`
