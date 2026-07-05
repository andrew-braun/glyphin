# Lucide icon setup

## Scope

- Add `@lucide/svelte` as the standard icon library.
- Replace text-based forward arrows (`->`, `→`) on lesson and drill next buttons with Lucide icons.
- Document Lucide as the default choice for UI icons.

## Progress

- [x] Install `@lucide/svelte`
- [x] Add shared `ButtonForwardLabel` UI primitive
- [x] Update lesson flow and drill next buttons
- [x] Update AGENTS and Copilot instruction files
- [x] Add `ssr.noExternal: ['@lucide/svelte']` to `vite.config.ts` for SvelteKit SSR

## Notes

- Decorative arrows in pedagogical content (for example syllable breakdown connectors or curriculum copy) stay as text/HTML entities unless they become interactive UI.
- Import icons directly from `@lucide/svelte/icons/<icon-name>`; only shared button label composition lives in `ButtonForwardLabel.svelte`.
- Do not import from the `@lucide/svelte` package root barrel.
