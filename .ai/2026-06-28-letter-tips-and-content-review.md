# Letter-card help tips + content wording fix

**Started:** 2026-06-28
**Status:** Done

## Scope

Add tappable "?" help popups beside each field on the letter card (Sound, Pronunciation, Type, Position) in both the lesson Learn step and the alphabet reference panel. Fix position wording bug (`"Written right the consonant"` → `"Written to the right of the consonant"`). Follow through on the committed DB-backed phase so tips are stored in `curriculum`, published through `delivery`, and hydrated back into runtime lesson letters.

## Decisions

- **Phase 1:** TS registry, client-side resolution — no DB/payload changes needed.
- **Phase 2 (implemented in this task):** `curriculum.tips` + typed `curriculum.tip_attachments` DB tables; extend generator + delivery mapper; update docs.
- Tips are shared-concept with optional per-letter overrides.
- Tips attach to specific slots (sound / pronunciation / type / position).
- Interaction: tap-to-open Bits UI Popover, dismiss on outside-click / Escape.
- DB design uses concrete nullable foreign keys (`grapheme_id`, `vocabulary_item_id`, `orthography_rule_id`) instead of a loose polymorphic `target_type + target_id`.
- Published lessons carry a lesson-local tip catalog plus grapheme `tipRefs`.
- Runtime lesson letters should hydrate to `tips?: Partial<Record<LetterTipSlot, Tip>>`; client-side resolution remains only as a fallback for local TS-authored lessons and the alphabet reference panel.

## Files changed (phase 1)

**New:**

- `src/lib/utils/letter-display.ts` — `formatPositionPhrase()`
- `src/lib/data/tips.ts` — `tips` registry + `resolveLetterTips()`
- `src/lib/components/ui/HelpPopover.svelte` — Bits UI Popover wrapper

**Edited:**

- `src/lib/data/types.ts` — `Tip`, `LetterTipSlot`, `Letter.tips?`
- `src/lib/components/ui/DetailRow.svelte` — optional `tip?: Tip` prop
- `src/lib/components/lesson/StepLetters.svelte` — tips + formatter
- `src/lib/components/content/alphabet/LetterDetailPanel.svelte` — tips + formatter
- `src/lib/styles/_variables.scss` — `--z-popover: 200`

## Progress

- [x] Task tracker created
- [x] `letter-display.ts` (formatter)
- [x] `types.ts` (Tip types)
- [x] `tips.ts` (registry + resolver)
- [x] `HelpPopover.svelte`
- [x] `DetailRow.svelte` extended
- [x] `StepLetters.svelte` wired
- [x] `LetterDetailPanel.svelte` wired
- [x] z-index token added
- [x] `pnpm check` + vite build green (3 pre-existing node-types errors unrelated to this change)
- [x] Schema migration for `curriculum.tips` and `curriculum.tip_attachments`
- [x] `docs/db.md` + `docs/database-dto-spec.md` updated for tip tables and payload shape
- [x] `src/lib/data/tips.ts` split into catalog + resolver helpers for DB publication
- [x] `scripts/generate-thai-seed.mjs` emits tips, attachments, and published lesson tip catalogs
- [x] `src/lib/server/delivery-payload.ts` hydrates `tipRefs` into runtime `Letter.tips`
- [x] Lesson UI prefers hydrated `letter.tips` and falls back only when absent
- [x] Regenerate `supabase/seed.sql`
- [x] `pnpm exec supabase db reset --yes`
- [x] Delivery smoke + payload mapper coverage for tips

## Notes

- `src/lib/data/thai.ts`, `scripts/generate-thai-seed.mjs`, and `supabase/seed.sql` already had in-progress Thai lesson expansion changes at task start. The DB tip work must preserve those edits while extending the same publication path.
- Validation after implementation:
  - `node scripts/test-delivery-payload-tips.mjs` passed
  - `pnpm exec supabase db reset --yes` passed
  - `pnpm publication:generate` regenerated `.generated/` from the active publication
  - delivery smoke passed for `21` lessons
  - SQL spot checks: `6` tips, `102` tip attachments, `0` invalid single-target rows
- `pnpm check` still reports the pre-existing missing Node type setup in `src/lib/server/published-lessons.ts` and `tsconfig.json`; no new tip-specific Svelte type errors were introduced
