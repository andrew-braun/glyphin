# Dependency Maintenance Baseline

Baseline captured on 2026-07-11 before the dependency refresh. This document
records declared versions and the validation evidence available in the current
execution environment; it does not change dependencies or the lockfile.

## Toolchain

| Check                            | Result                                                             |
| -------------------------------- | ------------------------------------------------------------------ |
| `node --version`                 | Exit 0: `v24.15.0`                                                 |
| `pnpm --version`                 | Exit 0: `11.6.0`                                                   |
| `pnpm install --frozen-lockfile` | Exit 0: already up to date; lockfile unchanged                     |
| `pnpm-lock.yaml` SHA-256         | `29da3652413f26897bf18358cf2622ae580d02ef1a7c2e6d7aa5ff459b27c4eb` |

The Node and pnpm versions match `package.json`. The lockfile was unchanged by
this baseline task.

## Declared Dependencies

### Runtime

| Package                    | Declared range |
| -------------------------- | -------------- |
| `@lucide/svelte`           | `^1.23.0`      |
| `@supabase/ssr`            | `^0.12.0`      |
| `@supabase/supabase-js`    | `^2.108.1`     |
| `@sveltejs/adapter-static` | `^3.0.10`      |
| `bits-ui`                  | `^2.18.1`      |
| `sass`                     | `^1.101.0`     |

### Development

| Package                             | Declared range |
| ----------------------------------- | -------------- |
| `@eslint/js`                        | `^10.0.1`      |
| `@sveltejs/adapter-node`            | `^5.5.4`       |
| `@sveltejs/kit`                     | `^2.65.0`      |
| `@sveltejs/vite-plugin-svelte`      | `^7.1.2`       |
| `@types/node`                       | `^24.13.2`     |
| `eslint`                            | `^10.5.0`      |
| `eslint-config-prettier`            | `^10.1.8`      |
| `eslint-plugin-simple-import-sort`  | `^13.0.0`      |
| `eslint-plugin-svelte`              | `^3.19.0`      |
| `eslint-plugin-unused-imports`      | `^4.4.1`       |
| `globals`                           | `^17.6.0`      |
| `husky`                             | `^9.1.7`       |
| `knip`                              | `^6.16.1`      |
| `lint-staged`                       | `^17.0.7`      |
| `markdownlint-cli2`                 | `^0.22.1`      |
| `postcss-html`                      | `^1.8.1`       |
| `postcss-scss`                      | `^4.0.9`       |
| `prettier`                          | `^3.8.4`       |
| `prettier-plugin-svelte`            | `^4.1.0`       |
| `stylelint`                         | `^17.13.0`     |
| `stylelint-config-html`             | `^1.1.0`       |
| `stylelint-config-recommended-scss` | `^17.0.1`      |
| `stylelint-order`                   | `^8.1.1`       |
| `supabase`                          | `^2.106.0`     |
| `svelte`                            | `^5.56.3`      |
| `svelte-check`                      | `^4.6.0`       |
| `typescript`                        | `^6.0.3`       |
| `typescript-eslint`                 | `^8.61.0`      |
| `vite`                              | `^8.0.16`      |

## Health Reports

| Command          | Exit/result                                                                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `pnpm check`     | Exit 0                                                                                                                                                                               |
| `pnpm build`     | Exit 0; generated 46 lessons                                                                                                                                                         |
| `pnpm lint`      | Exit 0                                                                                                                                                                               |
| `pnpm stylelint` | Exit 0                                                                                                                                                                               |
| `pnpm check:all` | Exit 1 at Prettier: 29 files were out of format, including unrelated/user changes, `.kilo`, `.pnpm-store`, `.superpowers` scratch paths, and this document; later stages did not run |

Because the aggregate quality command includes formatting and Markdown checks,
the successful focused type, Svelte, ESLint, Stylelint, and build results do not
make `pnpm check:all` a passing baseline.

## Audit Report

`pnpm audit` exited 1 with three advisories:

| Severity | Package and affected versions | Path                                                            | Patched version | Advisory              |
| -------- | ----------------------------- | --------------------------------------------------------------- | --------------- | --------------------- |
| Moderate | `markdown-it <=14.1.1`        | Via `markdownlint-cli2`                                         | `>=14.1.2`      | `GHSA-6v5v-wf23-fmfq` |
| Moderate | `js-yaml 4.0.0-4.1.1`         | Via `markdownlint-cli2`                                         | `>=4.1.2`       | `GHSA-h67p-54hq-rp68` |
| Low      | `cookie <0.7.0`               | Via `@sveltejs/adapter-static` and nested Bits UI/`runed` paths | `>=0.7.0`       | `GHSA-pxg6-pf52-xh8x` |

`pnpm audit --prod` also exited 1. It reported exactly one low-severity
advisory: `cookie <0.7.0` via `@sveltejs/adapter-static` and nested Bits
UI/`runed` paths, patched in `cookie >=0.7.0` (`GHSA-pxg6-pf52-xh8x`).

### Binding override policy

Never add a package-manager binding override solely to silence an audit. Every
override must document the advisory, compatibility rationale and supporting
evidence, an accountable owner, and the condition under which the override will
be removed.

## Outdated Report

`pnpm outdated --long` exited 1, which is the normal result when outdated
packages are found, and reported these available updates:

| Package                        | Current | Latest  |
| ------------------------------ | ------- | ------- |
| `@sveltejs/adapter-node`       | 5.5.4   | 5.5.7   |
| `lint-staged`                  | 17.0.7  | 17.0.8  |
| `prettier-plugin-svelte`       | 4.1.0   | 4.1.1   |
| `svelte`                       | 5.56.3  | 5.56.4  |
| `@lucide/svelte`               | 1.23.0  | 1.24.0  |
| `@supabase/supabase-js`        | 2.108.1 | 2.110.2 |
| `@sveltejs/kit`                | 2.65.0  | 2.69.2  |
| `@sveltejs/vite-plugin-svelte` | 7.1.2   | 7.2.0   |
| `eslint`                       | 10.5.0  | 10.6.0  |
| `eslint-plugin-svelte`         | 3.19.0  | 3.20.0  |
| `globals`                      | 17.6.0  | 17.7.0  |
| `knip`                         | 6.16.1  | 6.25.0  |
| `prettier`                     | 3.8.4   | 3.9.5   |
| `stylelint`                    | 17.13.0 | 17.14.0 |
| `supabase`                     | 2.106.0 | 2.109.1 |
| `svelte-check`                 | 4.6.0   | 4.7.2   |
| `typescript-eslint`            | 8.61.0  | 8.63.0  |
| `vite`                         | 8.0.16  | 8.1.4   |
| `@types/node`                  | 24.13.2 | 26.1.1  |
| `typescript`                   | 6.0.3   | 7.0.2   |
| `markdownlint-cli2`            | 0.22.1  | 0.23.0  |

The `@types/node` and TypeScript updates cross major versions and require
separate compatibility review.

## Tooling Refresh Outcome (2026-07-11)

The tooling refresh retained the repository's `minimumReleaseAge` policy. At
resolution time, ESLint 10.7.0 and Knip 6.26.0 were available but too recent
for the active policy; pnpm selected ESLint 10.6.0 and Knip 6.25.0 as the
latest aged releases. No `minimumReleaseAgeExclude` entries were added.

The refresh also selected `@types/node` 24.13.3, the latest Node 24 declaration
release, to stay aligned with the declared Node 24.15.0 runtime. This outcome
supersedes the outdated-report suggestion to move Node types to 26.1.1.

## Knip Report

`pnpm knip` exited 1 with these findings:

- Unused files: `HowItWorksSection.svelte`, `LearnerHomeHub.svelte`,
  `GlyphOrbit.svelte`, `StepDrills.svelte`, `CardLink.svelte`, and
  `IconBox.svelte`.
- Unused dependency: `@sveltejs/adapter-static`.
- Unused exports: `tipCatalog`, `resolveDefaultLetterTipRefs`,
  `resolveLetterTipRefs`, `hydrateLetterTips`, `queueLessonCompletionAttempt`,
  `PRACTICE_PASS_PERCENT`, and `currentLessonId`.
- Configuration hints: remove `MainNav.svelte` from `ignoreFiles`; remove
  `@supabase/supabase-js` and `bits-ui` from `ignoreDependencies`.

### Confirmed unused-package candidate

A repository-wide `rg` check found no code or configuration import of
`@sveltejs/adapter-static`; its only package declaration is in `package.json`.
The active Svelte configuration imports `@sveltejs/adapter-node` in
`svelte.config.js`. This makes `@sveltejs/adapter-static` a manually confirmed
unused-package candidate, but removal must be coordinated with the Cloudflare
adapter task as planned.

Knip recommends removing the current ignores for `@supabase/supabase-js` and
`bits-ui`; verify those configuration changes alongside the reported findings.

## Commit Ownership

This baseline task does not stage or commit files. The controller owns the
commit as an orchestration exception.

## Framework And UI Refresh Outcome (2026-07-11)

The framework/UI refresh reconciled the direct declarations with the shared
policy-aged lockfile resolution. Node remains `24.15.0` and pnpm remains
`11.6.0`; no `minimumReleaseAgeExclude` entries were added.

| Package                        | Previous declaration | Selected declaration | Migration required                                        |
| ------------------------------ | -------------------- | -------------------- | --------------------------------------------------------- |
| `svelte`                       | `^5.56.3`            | `^5.56.4`            | No; patch fixes only.                                     |
| `@sveltejs/kit`                | `^2.65.0`            | `^2.69.2`            | No; remains within SvelteKit 2.                           |
| `@sveltejs/adapter-node`       | `^5.5.4`             | `^5.5.7`             | No configuration change.                                  |
| `@sveltejs/vite-plugin-svelte` | `^7.1.2`             | `^7.2.0`             | No; the added inspector context menu is development-only. |
| `vite`                         | `^8.0.16`            | `^8.1.4`             | No; current config remains compatible.                    |
| `@lucide/svelte`               | `^1.23.0`            | `^1.24.0`            | No import changes.                                        |
| `bits-ui`                      | `^2.18.1`            | `^2.18.1`            | No; this is the current policy-aged release.              |

### First-party migration review

- Svelte remains on v5. The [Svelte 5 migration guide](https://svelte.dev/docs/svelte/v5-migration-guide)
  confirms the relevant runes/callback-prop model already used by this project;
  the selected patch release requires no new source migration.
- SvelteKit remains on v2. The [SvelteKit 2 migration guide](https://svelte.dev/docs/kit/migrating-to-sveltekit-2)
  introduces no additional work for this minor/patch update. Existing cookie
  path and server-load behavior remains covered by current code and checks.
- The upstream release notes were reviewed for
  [Svelte 5.56.4](https://github.com/sveltejs/svelte/releases/tag/svelte%405.56.4),
  [SvelteKit 2.69.2](https://github.com/sveltejs/kit/releases/tag/%40sveltejs%2Fkit%402.69.2),
  [adapter-node 5.5.7](https://github.com/sveltejs/kit/releases/tag/%40sveltejs%2Fadapter-node%405.5.7),
  [vite-plugin-svelte 7.2.0](https://github.com/sveltejs/vite-plugin-svelte/releases/tag/%40sveltejs%2Fvite-plugin-svelte%407.2.0),
  [Vite 8.1.4](https://github.com/vitejs/vite/releases/tag/v8.1.4),
  [Bits UI 2.18.1](https://github.com/huntabyte/bits-ui/releases/tag/bits-ui%402.18.1),
  and [Lucide 1.24.0](https://github.com/lucide-icons/lucide/releases/tag/1.24.0).
  They introduce no required application migration for the selected versions.

### Adapter decision

`@sveltejs/adapter-static` was removed. A repository-wide source/configuration
search confirmed it had no runtime import, while `svelte.config.js` actively
uses `@sveltejs/adapter-node`. Its removal is compatible with the current
Cloudflare rollout plan: that plan separately replaces adapter-node with the
Cloudflare adapter and explicitly removes unused static adapter support during
that deployment work. This refresh does not perform the Cloudflare adapter
swap or alter `svelte.config.js`/`vite.config.ts`, preserving concurrent
security configuration changes.

### Resume Validation (2026-07-11)

The resumed validation pass established the following state after the refreshed
lockfile was installed:

| Command / check                                   | Result                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm install --frozen-lockfile`                  | Exit 0 when rerun interactively by the user; lockfile passed supply-chain policies and installed the refreshed dependency graph.                                                                                                                                                                                                                            |
| Focused Prettier check on touched docs/task files | Exit 0 after formatting the touched files only. The broad `pnpm check:all` still fails at its repository-wide Prettier step because pre-existing `.ai`, `.kilo`, `.pnpm-store`, `.superpowers`, `docs/database-dto-spec.md`, and `supabase/templates/magic-link.html` files are out of format; those unrelated files were intentionally not mass-formatted. |
| Focused markdownlint on touched docs/task files   | Exit 0.                                                                                                                                                                                                                                                                                                                                                     |
| `pnpm lint`                                       | Exit 0.                                                                                                                                                                                                                                                                                                                                                     |
| `pnpm stylelint`                                  | Exit 0.                                                                                                                                                                                                                                                                                                                                                     |
| `pnpm check`                                      | Exit 0; `svelte-check` found 0 errors and 0 warnings.                                                                                                                                                                                                                                                                                                       |
| `pnpm build`                                      | Exit 1 before Vite build because `publication:generate` could not fetch the active lesson publication after 12 attempts (`TypeError: fetch failed`). Re-run with local Supabase/delivery API reachable.                                                                                                                                                     |
| `pnpm audit`                                      | Exit 1 with one remaining low `cookie <0.7.0` advisory (`GHSA-pxg6-pf52-xh8x`) through SvelteKit paths.                                                                                                                                                                                                                                                     |
| `pnpm audit --prod`                               | Exit 1 with the same low `cookie <0.7.0` advisory through `bits-ui`/`runed`/SvelteKit paths.                                                                                                                                                                                                                                                                |

The remaining audit finding is not closed. `@sveltejs/kit@2.69.2` still depends
on `cookie@0.6.0`; the lockfile also contains `cookie@1.1.1` for Supabase, but
that does not affect the SvelteKit path. Do not add a pnpm override without
verifying SvelteKit compatibility. The dependency rollout gate can close only
after either a normal upstream update removes `cookie@0.6.0` from the graph, or
a release owner records a time-bounded acceptance with owner, mitigation, review
date, and removal trigger.

## Toolchain Security Bump (2026-07-14)

`pnpm` moved from `11.6.0` to `11.8.0` in `packageManager` and
`devEngines.packageManager`. The pinned `11.6.0` carried three **high**
advisories — `patch-remove` deleting project-selected files outside the patches
directory, hoisted install importing a lockfile alias outside `node_modules`, and
path traversal in the `configDependencies` env lockfile allowing symlink creation
outside `node_modules/.pnpm-config`. Two are fixed in `>=11.7.0` and the third in
`>=11.8.0`, so `11.8.0` is the minimum version that clears all three. It is also
the best-aged option consistent with the `minimumReleaseAge` policy (published
2026-06-18, roughly four weeks before the bump; the 11.11–11.13 releases were
days old).

`pnpm install --frozen-lockfile` succeeded. The lockfile diff is confined to the
`packageManagerDependencies` block — the `pnpm` / `@pnpm/exe` binaries and their
platform variants move `11.6.0` → `11.8.0`. **No application dependency, version,
or resolution changed.** `pnpm check` (939 files, 0 errors, 0 warnings) and
`pnpm lint` stayed clean. `pnpm audit` and `pnpm audit --prod` both dropped from
four findings to one.

Cloudflare Workers Builds reads `packageManager` to select the package manager,
so this changes the production build toolchain. Confirm the next deploy resolves
`pnpm@11.8.0`.

## Accepted Advisory: `cookie <0.7.0` (GHSA-pxg6-pf52-xh8x)

| Field              | Value                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Advisory           | `GHSA-pxg6-pf52-xh8x` — `cookie` accepts out-of-bounds characters in cookie name, path, and domain                                                                                                                                                                                                                                                                                              |
| Severity           | Low                                                                                                                                                                                                                                                                                                                                                                                             |
| Accepted on        | 2026-07-14                                                                                                                                                                                                                                                                                                                                                                                      |
| Owner              | Andri (release owner)                                                                                                                                                                                                                                                                                                                                                                           |
| Review date        | 2026-10-14 (three months), or earlier if the removal trigger fires                                                                                                                                                                                                                                                                                                                              |
| Removal trigger    | Any `@sveltejs/kit` release whose `cookie` dependency range admits `>=0.7.0`. Re-check on every dependency refresh.                                                                                                                                                                                                                                                                             |
| Why not fixed      | No upstream fix exists. The latest SvelteKit (`2.69.3`) still declares `cookie: ^0.6.0`, the same as the pinned `2.69.2`. The advisory reaches the graph **only** through SvelteKit.                                                                                                                                                                                                            |
| Why not overridden | A pnpm override to `cookie@^0.7.0` would force a version outside SvelteKit's declared `^0.6.0` range, in the library that handles Supabase auth session cookies on a live site. That is a real availability and auth-correctness risk taken on behalf of an unreachable low-severity finding. Not a good trade.                                                                                 |
| Mitigation         | Not reachable in this application. The vulnerability requires attacker-influenced cookie **name**, **path**, or **domain**. In `src/hooks.server.ts` the only `cookies.set` call takes its name from Supabase SSR (`sb-<project-ref>-auth-token`), hardcodes `path: "/"`, and sets no `domain`. None of the three derive from untrusted input. Cookie _values_ are unaffected by this advisory. |

Re-verify the mitigation if `src/hooks.server.ts` ever sets a cookie whose name,
path, or domain is derived from a request, a route parameter, or user input.
