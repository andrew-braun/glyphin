# Scored practice answer grid

## Goal

Keep the four scored-practice answer buttons compact enough that the continuation button remains visible, while preserving a single-column layout on small screens.

## Design

- Reuse the existing `RadioButtons` `columns` prop rather than adding a new layout API.
- Configure `StepPracticeCheckpoint` with `columns={2}` for its answer options.
- Preserve the shared component's current small-screen rule, which collapses multi-column layouts to one column at the `$bp-sm` breakpoint.
- Leave all other `RadioButtons` consumers unchanged.

## Verification

- Run Prettier's focused check for the touched Svelte file and design document.
- Run `pnpm check` to verify Svelte and TypeScript correctness.
- Run focused ESLint and Stylelint checks for the touched component.
