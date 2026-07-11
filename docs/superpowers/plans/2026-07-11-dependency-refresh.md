# Dependency Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use $superpowers-subagent-driven-development (recommended) or $superpowers-executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bring direct dependencies to current compatible releases, remove unused packages, and leave an explicit, reproducible vulnerability-management policy.

**Architecture:** Establish a clean baseline, update packages in risk-based groups, validate after every group, and use narrowly scoped pnpm overrides only when an upstream transitive fix cannot otherwise be selected. Keep deployment-adapter changes coordinated with the Cloudflare deployment plan.

**Tech Stack:** Node 24.15.0, pnpm 11.6.0, SvelteKit, TypeScript, SCSS, Supabase, Cloudflare Workers

## Global Constraints

- Keep Node at `24.15.0` and pnpm at `11.6.0` unless a separate runtime decision updates all deployment documentation.
- Use current registry data at execution time; do not rely on versions recorded in this plan.
- Never add an override solely to silence an audit.
- Every override must name the advisory, compatibility evidence, owner, and removal condition.
- Preserve the user's unrelated working-tree changes.

---

### Task 1: Capture The Dependency Baseline

**Files:**

- Create: `docs/dependency-maintenance.md`
- Inspect: `package.json`
- Inspect: `pnpm-lock.yaml`
- Inspect: `knip.json`

**Interfaces:**

- Produces: Baseline versions, outdated report, audit report, and unused-package candidates

- [ ] **Step 1: Verify the toolchain**

  ```bash
  node --version
  pnpm --version
  pnpm install --frozen-lockfile
  ```

  Expected: Node `v24.15.0`, pnpm `11.6.0`, and an unchanged lockfile.

- [ ] **Step 2: Record current health**

  ```bash
  pnpm check:all
  pnpm build
  pnpm audit
  pnpm audit --prod
  pnpm outdated --long
  pnpm knip
  ```

  Record exit codes and all advisories in `docs/dependency-maintenance.md`.

- [ ] **Step 3: Confirm unused dependency candidates**

  Verify repository imports with `rg` before removing anything. In particular,
  check `@sveltejs/adapter-static`; coordinate removal or replacement with the
  Cloudflare adapter task.

- [ ] **Step 4: Commit the baseline**

  ```bash
  git add docs/dependency-maintenance.md
  git commit -m "docs: record dependency refresh baseline"
  ```

### Task 2: Refresh Tooling Dependencies

**Files:**

- Modify: `package.json`
- Modify: `pnpm-lock.yaml`
- Modify: configuration files only when a documented breaking change requires it

**Interfaces:**

- Produces: Current formatter, linter, type-checker, and build-tool chain

- [ ] **Step 1: Update low-coupling tools as one group**

  Use `pnpm up --latest` with an explicit package list for Prettier, ESLint,
  TypeScript ESLint, Stylelint, Markdownlint, Knip, Husky, lint-staged, Sass,
  and Node types. Do not update framework runtime packages in this step.

- [ ] **Step 2: Run focused validation**

  ```bash
  pnpm format:check
  pnpm markdownlint
  pnpm lint
  pnpm stylelint
  pnpm check
  pnpm knip
  ```

  Expected: all pass. Make only migration changes required by upstream release notes.

- [ ] **Step 3: Commit**

  ```bash
  git add package.json pnpm-lock.yaml eslint.config.js stylelint.config.mjs knip.json
  git commit -m "chore: refresh development tooling"
  ```

### Task 3: Refresh Svelte And UI Dependencies

**Files:**

- Modify: `package.json`
- Modify: `pnpm-lock.yaml`
- Modify: `svelte.config.js` and `vite.config.ts` only when required

**Interfaces:**

- Produces: Current compatible SvelteKit, Svelte, Vite, Lucide, and Bits UI graph

- [ ] **Step 1: Read first-party migration notes**

  Review release notes for every selected Svelte, SvelteKit, Vite, adapter,
  Bits UI, and Lucide update. Record any required migration in
  `docs/dependency-maintenance.md` before changing code.

- [ ] **Step 2: Update the framework group explicitly**

  Run `pnpm up --latest` with the exact framework and UI package names. Ensure
  the selected deployment adapter matches the Cloudflare rollout plan and
  remove unused adapters.

- [ ] **Step 3: Validate behavior and bundles**

  ```bash
  pnpm check:all
  pnpm build
  ```

  Manually verify home, lesson, practice, auth, menu, disclosure, popover, and
  radio interactions, including keyboard navigation and reduced motion.

- [ ] **Step 4: Commit**

  ```bash
  git add package.json pnpm-lock.yaml svelte.config.js vite.config.ts src
  git commit -m "chore: refresh Svelte and UI dependencies"
  ```

### Task 4: Refresh Supabase Dependencies

**Files:**

- Modify: `package.json`
- Modify: `pnpm-lock.yaml`
- Modify: `src/hooks.server.ts` only for required SSR API changes
- Modify: `docs/auth.md` when provider guidance changes

**Interfaces:**

- Produces: Current compatible Supabase SSR, JavaScript client, and CLI graph

- [ ] **Step 1: Review current Supabase SSR guidance**

  Confirm cookie `getAll`/`setAll`, cache-header propagation, and verified-user
  guidance from official Supabase documentation.

- [ ] **Step 2: Update the Supabase group**

  Update `@supabase/ssr`, `@supabase/supabase-js`, and the Supabase CLI together.

- [ ] **Step 3: Validate auth and delivery boundaries**

  ```bash
  pnpm check:all
  pnpm db:lint
  pnpm db:smoke:delivery
  pnpm build
  ```

  Manually test OTP request/verification, cookie refresh, sign-out, projection
  reads, attempt sync, and a missing delivery configuration.

- [ ] **Step 4: Commit**

  ```bash
  git add package.json pnpm-lock.yaml src/hooks.server.ts docs/auth.md
  git commit -m "chore: refresh Supabase dependencies"
  ```

### Task 5: Resolve Or Document Advisories

**Files:**

- Modify: `package.json`
- Modify: `pnpm-lock.yaml`
- Modify: `docs/dependency-maintenance.md`

**Interfaces:**

- Produces: Clean audits or explicit time-bounded risk acceptances

- [ ] **Step 1: Run both audits**

  ```bash
  pnpm audit
  pnpm audit --prod
  ```

- [ ] **Step 2: Prefer normal resolution**

  For each advisory: remove the unused parent, update the direct parent, or
  allow pnpm to select a patched compatible transitive version.

- [ ] **Step 3: Add an override only when necessary**

  If normal resolution is impossible and compatibility is verified, add the
  narrowest `pnpm.overrides` selector possible. Record the advisory URL,
  vulnerable path, patched version, validation evidence, owner, and removal
  trigger in `docs/dependency-maintenance.md`.

- [ ] **Step 4: Reinstall and validate from the lockfile**

  ```bash
  pnpm install
  pnpm install --frozen-lockfile
  pnpm audit
  pnpm audit --prod
  pnpm check:all
  pnpm build
  ```

- [ ] **Step 5: Commit**

  ```bash
  git add package.json pnpm-lock.yaml docs/dependency-maintenance.md
  git commit -m "chore: resolve dependency advisories"
  ```

### Task 6: Close The Rollout Gate

**Files:**

- Modify: `docs/dependency-maintenance.md`
- Modify: `docs/pre-rollout-tasks.md`

- [ ] **Step 1: Record final versions and evidence**

  Include the update date, audit results, validation commands, manual surfaces,
  accepted advisories, and next review date.

- [ ] **Step 2: Check the master rollout item and commit**

  ```bash
  git add docs/dependency-maintenance.md docs/pre-rollout-tasks.md
  git commit -m "docs: complete dependency readiness gate"
  ```
