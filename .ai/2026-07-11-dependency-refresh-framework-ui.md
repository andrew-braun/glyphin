# Framework And UI Dependency Refresh

- Started: 2026-07-11
- Scope: Reconcile Svelte, SvelteKit, Vite, adapter-node, Lucide, and Bits UI
  declarations with the shared policy-aged lockfile; remove the confirmed-unused
  static adapter.
- Decision: Keep `@sveltejs/adapter-node` until the separately tracked
  Cloudflare deployment adapter swap. Removing `@sveltejs/adapter-static` now
  is safe because it is not imported by app code or configuration.
- Guardrails: Preserve Node `24.15.0` and the existing release-age policy without
  exclusions. Do not touch concurrent security changes in `svelte.config.js` or
  `vite.config.ts`. **The pnpm `11.6.0` pin is no longer a guardrail — it is now
  the problem (see Status).**
- Status: Implemented; validation partially complete, **and the audit claim below
  was stale**. `pnpm install --frozen-lockfile` passed after the user reran it
  interactively. Focused formatting/Markdown checks on touched docs, `pnpm lint`,
  `pnpm stylelint`, and `pnpm check` passed.

  **Corrected 2026-07-14.** This file previously claimed audits were "reduced to
  one remaining low `cookie <0.7.0` advisory." A live `pnpm audit --prod` now
  reports **1 low + 3 high**. All three highs are **pnpm itself** at the pinned
  `11.6.0` (path traversal in the configDependencies env lockfile; hoisted install
  importing a lockfile alias outside `node_modules`; `patch-remove` deleting files
  outside the patches directory) — every one fixed in `>=11.8.0`. The pin that was
  written as a guardrail now enforces the vulnerability. It is a toolchain risk
  rather than a shipped-runtime one, but the pin has to move, and `AGENTS.md` has
  to move with it.

  The low `cookie <0.7.0` advisory remains, reaching us only transitively via
  `bits-ui > runed > @sveltejs/kit`. Do not close the dependency rollout gate
  until it is resolved or explicitly accepted with a time-bounded review.

  Both are queued as Task 2 in `.ai/2026-07-14-backlog-clearing-plan.md`.
