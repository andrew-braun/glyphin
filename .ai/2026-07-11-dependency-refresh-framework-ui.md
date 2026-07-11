# Framework And UI Dependency Refresh

- Started: 2026-07-11
- Scope: Reconcile Svelte, SvelteKit, Vite, adapter-node, Lucide, and Bits UI
  declarations with the shared policy-aged lockfile; remove the confirmed-unused
  static adapter.
- Decision: Keep `@sveltejs/adapter-node` until the separately tracked
  Cloudflare deployment adapter swap. Removing `@sveltejs/adapter-static` now
  is safe because it is not imported by app code or configuration.
- Guardrails: Preserve Node `24.15.0`, pnpm `11.6.0`, and the existing
  release-age policy without exclusions. Do not touch concurrent security
  changes in `svelte.config.js` or `vite.config.ts`.
- Status: Implemented; validation partially complete. `pnpm install
--frozen-lockfile` passed after the user reran it interactively. Focused
  formatting/Markdown checks on touched docs, `pnpm lint`, `pnpm stylelint`, and
  `pnpm check` passed. `pnpm build` is blocked until the local delivery API is
  reachable for `publication:generate`. Audits are reduced to one remaining low
  `cookie <0.7.0` advisory through SvelteKit/Runed paths; do not close the
  dependency rollout gate until that advisory is resolved or explicitly accepted
  with a time-bounded review.
