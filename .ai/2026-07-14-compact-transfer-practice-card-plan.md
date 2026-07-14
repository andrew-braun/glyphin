# Compact Transfer-Practice Card Implementation Plan

> **For agentic workers:** Execute this plan inline. The task is a single, focused UI slice and does not need subagent delegation.

**Goal:** Make the transfer-practice card compact and vertically balanced on desktop, while removing its redundant revealed-state label.

**Architecture:** Keep the width and spacing rule owned by `StepSameLettersNewWords.svelte`, which composes the transfer-practice step. Keep the redundant-label removal in `SelfCheckCard.svelte`, where both card faces are rendered. No data or interaction contracts change.

**Tech Stack:** Svelte 5, TypeScript, component-scoped SCSS, `svelte-check`.

## Global Constraints

- Preserve full-width mobile behavior and existing reveal interaction.
- Keep the button's accessible name and live-region result announcement.
- Do not modify lesson data, progression, or unrelated practice steps.
- Restrict the folded-corner decoration to the unread face.

---

### Task 1: Refine the transfer-practice presentation

**Files:**

- Modify: `src/lib/components/lesson/StepSameLettersNewWords.svelte:141-177`
- Modify: `src/lib/components/exercises/SelfCheckCard.svelte:46-60`

**Interfaces:**

- Consumes: existing `SelfCheckCard` props: `entry`, `focusLetters`, `revealed`, `onReveal`.
- Produces: unchanged public component APIs and responsive card behavior.

- [x] **Step 1: Establish the verification baseline**

Run: `pnpm check`

Expected: the existing project checks complete successfully before the presentation-only change.

- [x] **Step 2: Apply the minimal component changes**

In `StepSameLettersNewWords.svelte`, add a desktop media rule that centers `.same-letters`, caps its width at `42rem`, and increases its vertical padding without changing the small-screen rule. In `SelfCheckCard.svelte`, delete only the non-sound-practice revealed-face eyebrow (`Your read`), leaving the Thai word, answer, and screen-reader announcement intact.

- [x] **Step 3: Verify the component change**

Run: `pnpm check`

Expected: Svelte type and accessibility checks pass with no new diagnostics.

- [x] **Step 4: Review the diff**

Run: `git diff --check && git diff -- src/lib/components/lesson/StepSameLettersNewWords.svelte src/lib/components/exercises/SelfCheckCard.svelte`

Expected: no whitespace errors; only the scoped layout and revealed-label changes appear.

### Task 2: Clarify the self-check card's edge treatment

**Files:**

- Modify: `src/lib/components/exercises/SelfCheckCard.svelte:41-130`

**Interfaces:**

- Consumes: the existing front-face-only `.self-check-card__fold` element and standard-size card layout.
- Produces: unchanged card markup and interaction contracts, with a bottom-right folded-corner visual and larger vertical content inset.

- [x] **Step 1: Establish the verification baseline**

Run: `pnpm check`

Expected: the Svelte type and accessibility checks complete with zero errors and zero warnings before the styling refinement.

- [x] **Step 2: Apply the minimal presentation changes**

In `SelfCheckCard.svelte`, increase the face's block padding and standard flipper minimum height so the first and last visible items remain visibly inset. Replace the current top-right gradient fold with a bottom-right layered triangle using the card surface and mango accent; inset it from the bottom/right edge so its shape remains legible inside the rounded border. Do not add a fold to the answer face.

- [x] **Step 3: Verify the component change**

Run: `pnpm check`

Expected: Svelte type and accessibility checks pass with no new diagnostics.

- [x] **Step 4: Review the diff**

Run: `git diff --check && git diff -- src/lib/components/exercises/SelfCheckCard.svelte`

Expected: no whitespace errors; the diff is limited to card spacing and folded-corner styling.
