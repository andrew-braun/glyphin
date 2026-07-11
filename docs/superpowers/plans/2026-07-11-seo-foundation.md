# SEO Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use $superpowers-subagent-driven-development (recommended) or $superpowers-executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give every route an intentional, consistent search and sharing contract without adding SEO-only filler.

**Architecture:** Create a durable route inventory and a small typed metadata helper, then migrate each route to explicit titles, descriptions, canonical URLs, robots directives, and social metadata. Keep route-specific copy in route modules and centralize only mechanical rendering conventions.

**Tech Stack:** SvelteKit 2, Svelte 5, TypeScript, Svelte head metadata

## Global Constraints

- Every user-facing page has one unique, accurate title and one clear `h1`.
- Add descriptions only when a page has search or sharing value.
- Do not index authentication, test, or learner-private surfaces.
- Canonical URLs use the final HTTPS production origin from a single server-safe configuration boundary.
- Do not duplicate canonical lesson content under alternate URLs.
- Copy remains concise, learner-focused, and people-first.

---

### Task 1: Create The Route-Level SEO Inventory

**Files:**

- Create: `docs/seo.md`
- Inspect: `src/routes/**/+page.svelte`
- Inspect: `src/routes/**/+page.server.ts`
- Inspect: `src/routes/**/+layout.ts`

**Interfaces:**

- Produces: One row per route pattern with intent, indexability, title, description, canonical, `h1`, and social-image status

- [ ] **Step 1: Inventory all route patterns**

  Include `/`, `/about`, `/learn`, `/learn/[id]`, `/learn/[id]/practice`,
  `/alphabet`, `/words`, `/practice`, `/auth`, and `/test/**`. Classify API and
  sign-out endpoints as non-document surfaces.

- [ ] **Step 2: Define each page contract**

  For each document route, record:

  ```text
  Route | Search intent | Index? | Title | Description | Canonical | H1 | OG type/image
  ```

  Index public evergreen content. Mark `/auth`, `/test/**`, and learner-specific
  utility views `noindex`. Decide whether aggregate `/words` and `/practice`
  pages have enough stable public value to index before writing metadata.

- [ ] **Step 3: Check title and heading uniqueness**

  Use `rg` to locate existing `<svelte:head>`, `<title>`, and `<h1>` markup.
  Record every missing or duplicate case in the inventory.

- [ ] **Step 4: Commit**

  ```bash
  git add docs/seo.md
  git commit -m "docs: define route SEO contracts"
  ```

### Task 2: Add A Typed Metadata Convention

**Files:**

- Create: `src/lib/components/seo/PageMetadata.svelte`
- Create: `src/lib/components/seo/metadata.ts`
- Create: `src/lib/components/seo/metadata.test.ts`
- Create: `src/lib/config/site.ts`
- Modify: `.env.example` only if a deployment-provided canonical origin is required

**Interfaces:**

- Produces: `buildPageMetadata(input: PageMetadataInput): PageMetadataOutput`
- Produces: `PageMetadata` props `{ title: string; description?: string; canonicalPath?: string; noindex?: boolean; imagePath?: string; type?: "website" | "article" }`
- Produces: `SITE_NAME` and a validated production-origin accessor that never exposes secrets

- [ ] **Step 1: Write failing metadata tests**

  Cover title suffixing exactly once, absolute canonical construction,
  `noindex, nofollow`, Open Graph fields, and Twitter card fields. Reject a
  canonical path that does not begin with `/`.

- [ ] **Step 2: Run the focused test**

  ```bash
  node --test src/lib/components/seo/metadata.test.ts
  ```

  Expected: failure because the component/helper does not exist.

- [ ] **Step 3: Implement the component**

  Implement absolute URL construction and title normalization in `metadata.ts`.
  Have `PageMetadata.svelte` render `<title>`, optional description, optional
  canonical, robots directive, `og:site_name`, `og:title`, `og:description`,
  `og:url`, `og:type`, optional `og:image`, and matching Twitter card tags from
  that output. Do not emit empty metadata tags.

- [ ] **Step 4: Validate**

  ```bash
  node --test src/lib/components/seo/metadata.test.ts
  pnpm check
  pnpm lint
  ```

- [ ] **Step 5: Commit**

  ```bash
  git add src/lib/components/seo src/lib/config/site.ts .env.example
  git commit -m "feat: add typed page metadata convention"
  ```

### Task 3: Migrate Public Landing And Catalog Routes

**Files:**

- Modify: `src/routes/+page.svelte`
- Modify: `src/routes/about/+page.svelte`
- Modify: `src/routes/learn/+page.svelte`
- Modify: `src/routes/alphabet/+page.svelte`
- Modify: `src/routes/words/+page.svelte`
- Modify: `src/routes/practice/+page.svelte`

**Interfaces:**

- Consumes: `PageMetadata`
- Produces: Inventory-compliant page head markup

- [ ] **Step 1: Add homepage metadata first**

  Replace the generic `app.html` fallback as the homepage's effective metadata
  with a specific title, description, canonical `/`, and social tags from the
  approved `docs/seo.md` row.

- [ ] **Step 2: Migrate remaining public routes**

  Replace direct head markup with `PageMetadata`. Preserve each route's unique
  copy and verify one primary `h1`.

- [ ] **Step 3: Validate rendered output**

  ```bash
  pnpm check
  pnpm build
  ```

  Inspect generated HTML for unique titles, descriptions, canonicals, robots,
  and social tags.

- [ ] **Step 4: Commit**

  ```bash
  git add src/routes
  git commit -m "feat: add SEO metadata to public routes"
  ```

### Task 4: Migrate Lesson And Non-Indexable Routes

**Files:**

- Modify: `src/routes/learn/[id]/+page.svelte`
- Modify: `src/routes/learn/[id]/practice/+page.svelte`
- Modify: `src/routes/auth/+page.svelte`
- Modify: `src/routes/test/lesson-complete/+page.svelte`

**Interfaces:**

- Consumes: Route data and `PageMetadata`
- Produces: Canonical lesson metadata and explicit non-indexing for utility routes

- [ ] **Step 1: Add lesson canonicals**

  Build the title, description, and `/learn/{id}` canonical from validated
  server-loaded lesson data. Ensure invalid IDs continue to return 404.

- [ ] **Step 2: Classify practice and private utility routes**

  Apply the exact decision from `docs/seo.md`. Always mark `/auth` and `/test/**`
  `noindex, nofollow`; exclude test routes from sitemap generation.

- [ ] **Step 3: Validate**

  ```bash
  pnpm check:all
  pnpm build
  ```

- [ ] **Step 4: Commit**

  ```bash
  git add src/routes/learn src/routes/auth src/routes/test
  git commit -m "feat: complete route metadata coverage"
  ```

### Task 5: Verify Inventory Coverage

**Files:**

- Modify: `docs/seo.md`
- Modify: `docs/pre-rollout-tasks.md`

- [ ] **Step 1: Audit source and rendered HTML**

  Confirm every inventory row matches source and build output. Check title
  uniqueness, canonical validity, `h1` count, and noindex coverage.

- [ ] **Step 2: Record evidence and close the rollout gate**

  Add the verification date and build identifier to `docs/seo.md`, check the
  SEO item in the master checklist, and commit.

  ```bash
  git add docs/seo.md docs/pre-rollout-tasks.md
  git commit -m "docs: verify SEO foundation"
  ```
