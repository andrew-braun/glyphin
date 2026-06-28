# Letter-card help tips + content wording fix

**Started:** 2026-06-28
**Status:** In progress

## Scope

Add tappable "?" help popups beside each field on the letter card (Sound, Pronunciation, Type, Position) in both the lesson Learn step and the alphabet reference panel. Fix position wording bug (`"Written right the consonant"` → `"Written to the right of the consonant"`).

## Decisions

- **Phase 1:** TS registry, client-side resolution — no DB/payload changes needed.
- **Phase 2 (committed follow-up):** `curriculum.tips` + `curriculum.tip_attachments` DB tables; extend generator + delivery mapper; update docs.
- Tips are shared-concept with optional per-letter overrides.
- Tips attach to specific slots (sound / pronunciation / type / position).
- Interaction: tap-to-open Bits UI Popover, dismiss on outside-click / Escape.
- Tip resolution is purely client-side from `letter.type/class/position` (fields in both delivery paths).

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

## Phase 2 follow-up (separate change)

- Migration: `curriculum.tips` + `curriculum.tip_attachments` (polymorphic; private schema)
- Extend `scripts/generate-thai-seed.mjs` to emit tips rows + include in delivery payload
- Extend `src/lib/server/delivery-payload.ts` mapper to read tips (DB fallback parity)
- Regenerate `seed.sql`; `supabase db reset`, `db lint`, `db advisors`
- Update `docs/db.md` + `docs/database-dto-spec.md`
