# Alpha Audit Fixes

- Start date: 2026-07-08
- Owner: Claude
- Status: in progress
- Source: pre-alpha audit (curriculum, UI, animation, CSS, perf, architecture)

## Scope (this task)

Implement the agreed high-value fixes from the alpha audit. Deployment
mechanics (adapter swap, Resend SMTP) and Thai native-speaker review are
tracked separately and out of scope here.

### Implementing

- [x] **Theme FOUC (Tier 1 #2).** Added a blocking inline script to `app.html`
      that reads `glyphbridge-theme-mode` from localStorage and stamps
      `data-theme` + `color-scheme` on `<html>` before first paint. Kept in sync
      with `src/lib/stores/theme.svelte.ts` (key + default `dark`).
- [x] **Remove Google Fonts (Tier 2 #4).** Deleted the `fonts.googleapis.com`
      preconnect + 3 `<link>`s in `app.html`. Sarabun was unreferenced; Chakra
      Petch / Manrope were only fallbacks behind self-hosted Noto Sans, so the
      stacks still resolve.
- [x] **Flip card honors PRM (Tier 3).** Wrapped the 3D `rotateY` transition on
      `.practice-deck__card` in `motion-safe-transition` — reduced-motion users
      get an instant flip instead of a spin.
- [x] **Finished state (Tier 3).** Passing the _final_ lesson now shows a
      "Course complete / You've finished every Thai lesson" branch in
      `StepPracticeComplete.svelte` instead of "That lesson is unlocked". (The
      home-hub off-by-one I originally flagged is in `LearnerHomeHub.svelte`,
      which is unused dead code — see review notes.)
- [x] **Stage grouping in LessonList (Tier 3).** Lessons now render grouped by
      `stage` under uppercase stage headings; removed the redundant per-card
      "Stage N" badge and fixed heading hierarchy (stage `h3`, lesson `h4`).

### Plan only (Tier 2 #5 — do not implement yet)

- [ ] **Slim the client curriculum bundle.** `src/lib/stores/progress.ts`
      imports the full `thaiPack` (~6.5k lines / ~570 KB) and is pulled in by
      `MainNav` → every page, so the entire curriculum ships in client JS,
      duplicating the prerendered DB-delivery payload. Plan a lightweight
      progress index (lesson ids, per-lesson letter characters, canonical words)
      so the store no longer imports the full content. See plan section below.

### Resolved after review

- [x] **Learn-page step index (#6).** Chose option (b): extracted the step
      machine into `src/lib/components/lesson/LessonLearnFlow.svelte` (holds
      `currentStepIndex` as plain `$state`) and the parent renders it under
      `{#key lesson.id}`. A new lesson remounts the flow with a fresh step index
      — no `$effect`-for-reset. Parent keeps only the gate + head.
- [x] **Design token architecture.** Removed the duplicated `$` token block from
      `global.scss`; `_variables.scss` (injected via vite `additionalData`) is
      now the single source of truth. It was already a strict superset (same
      values, plus the `$motion-*` tokens). `pnpm build` compiles clean.

### Still open

- [ ] **`LearnerHomeHub.svelte` is unused.** Delete or wire up (out of scope for
      this pass).

## Bundle-slimming plan (Tier 2 #5)

### Problem

`src/lib/stores/progress.ts` imports the full `thaiPack` and is pulled in by
`MainNav` (rendered on every route), so the entire `src/lib/data/thai.ts`
(~6.5k lines) is in the client bundle. `thaiPack` is a single exported object
literal, so it is effectively un-tree-shakeable. This duplicates the curriculum
that lesson/practice routes already receive via the prerendered
`.generated` publication artifact (`published-lessons.ts`, build-time only).

### What the client actually needs from `thaiPack`

Auditing the four client importers (`progress.ts`, `LessonList.svelte`,
`alphabet/+page.svelte`, `practice/+page.svelte`):

- **Progress store:** lesson `id`s; per-lesson `newLetters[].character`; the
  canonical `Word` payloads (`anchorWord` + non-nonsense `vocabulary[].word`)
  because `knownWords` feeds the `/words` page and the nav counter.
- **LessonList:** `id`, `stage`, `title`, `anchorWord.{thai,meaning}`,
  `newLetters[].character`. No mnemonics/rules/drills.
- **`/alphabet`:** letter detail (this is the one surface that legitimately
  needs `mnemonic` / `pronunciation` / `class` / `position`).
- **`/practice`:** known `Word` payloads.

The heavy, rarely-needed-on-the-client fields are `rulesIntroduced`
(paragraph explanations), `drills`, `contextNote`, and letter teaching prose —
almost none of which the always-loaded progress store or LessonList touch.

### Approach options (decide before implementing)

1. **Measure first.** Run `pnpm build` and inspect the client chunk that pulls
   `thai.ts` (rollup output / a visualizer) to confirm real byte cost before
   restructuring. Do not optimize blind.
2. **Split the data module.** Separate a lightweight index
   (`id/stage/title/letters/anchor/vocab Word`) that the store + LessonList
   import, from the teaching content (`rules/drills/contextNote/mnemonic`) that
   only `/alphabet` (and, if ever needed, non-prerendered client lesson views)
   import. Keeps one authoring source but lets the bundler drop teaching prose
   from the always-loaded path.
3. **Derive client state from the publication payload** instead of importing
   `thaiPack` at all, so the DB artifact is the single client source too. Larger
   change; better architectural alignment with the DB-delivery model.

### Recommendation

Start with option 1 (measure), then option 2 (module split) as the smallest
change that removes the teaching prose from the always-loaded bundle. Treat
option 3 as a follow-up once the delivery payload shape is stable.

## Notes

- `pnpm check` was clean before this task; the old `@types/node` errors are gone.
- Published artifact already contains all 46 lessons.
