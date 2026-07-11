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
