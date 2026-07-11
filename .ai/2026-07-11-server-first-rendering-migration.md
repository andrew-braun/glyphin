# Task: Server-first rendering migration (retire the SPA default)

- Start date: 2026-07-11
- Owner: unassigned
- Status: planned
- Supersedes: `.ai/2026-07-11-restore-ssr-homepage-about.md` (that task is the
  narrow `/` + `/about` slice; this plan absorbs it and extends the same change
  to the whole route tree). Keep the narrow file as the reference for the store
  audit already done there; land Phase 1 here in its place.

## Goal

Move Glyphin from **SPA-by-default** to **server-first rendering**: every route
emits real HTML from the server (prerendered where the output is stable, live
SSR where it is not), and no route ships an empty hydration shell. Concretely:

- Static where possible: public, stable pages become prerendered static assets.
- Server-rendered where necessary: genuinely dynamic routes (auth, API) run on
  the server per request.
- No SPA: remove `export const ssr = false` from the root layout so client-only
  rendering is never the default again.

This serves the three stated objectives: **performance** (real server HTML +
CDN-cacheable static assets → fast LCP, no blank first paint), **security /
server-side work** (auth, lesson delivery, learner projection, and sync already
live on the server; this change does not move any secret client-side and keeps
the option open to move more server-side later), and **SEO crawlability** (every
indexable route ships its `h1`, copy, canonical, and structured data in the
initial response).

## Current state (audited 2026-07-11)

Root `src/routes/+layout.ts` is `prerender = true; ssr = false` — i.e. the whole
app is an SPA except where a route opts back into SSR. That is the single root
cause the SEO work (`docs/seo-recommendations.md` §1, P0) is blocked on.

| Route                                           | Current `prerender` / `ssr` / `csr` | Rendering today                           | Data source                                                                            | Index?  |
| ----------------------------------------------- | ----------------------------------- | ----------------------------------------- | -------------------------------------------------------------------------------------- | ------- |
| `/` (home)                                      | `true` / **`false`** / `true`       | SPA shell                                 | `progress` (localStorage) + `authSession`; static hero copy                            | **Yes** |
| `/about`                                        | `true` / **`false`** / `true`       | SPA shell                                 | Pure static content                                                                    | **Yes** |
| `/alphabet`                                     | `true` / **`false`** / `true`       | SPA shell                                 | `thaiPack` (static) + `knownLetters` (localStorage)                                    | No      |
| `/words`                                        | `true` / **`false`** / `true`       | SPA shell                                 | `knownWords` (localStorage)                                                            | No      |
| `/practice`                                     | `true` / **`false`** / `true`       | SPA shell                                 | `progress` (localStorage) + `thaiPack`                                                 | No      |
| `/learn`, `/learn/[id]`, `/learn/[id]/practice` | `true` / `true` / `true`            | **Prerender + SSR (reference precedent)** | build-time Supabase `delivery.*` via `published-lessons.ts` (`node:fs` + `.generated`) | Yes     |
| `/auth`, `/auth/sign-out`                       | `false` / `true` (auth)             | **Live SSR**                              | per-request Supabase session + form actions                                            | No      |
| `/api/learner/*`                                | `false` / —                         | server endpoints                          | Supabase RPC under RLS                                                                 | n/a     |
| `/test/**`                                      | `false` / `false`                   | SPA shell                                 | dev component previews                                                                 | No      |

Store safety is already established (see the narrow plan's Constraints, verified
by reading the source):

- `progress.ts` — module-scope `writable`; `loadProgress`/`saveProgress`/
  `ensureProgressInitialized` all guard `typeof window === "undefined"`. On the
  server it renders `createInitialProgress()` (empty new-visitor state) and is
  **never mutated on any server-reachable path** (`completeLessonLearning`,
  `recordLessonPracticeAttempt`, `applyLearnerProjection` are only reached from
  client interactions or `refreshLearnerProjection`, which is `browser`-guarded).
  So server output is byte-stable and there is no cross-request state leak.
- `learner.ts` — `refreshLearnerProjection` returns early unless `browser`.
- `theme.svelte.ts` — every DOM/`localStorage` touch is `browser`-guarded;
  `app.html` already sets the theme pre-paint to avoid a flash.
- No page component reads `window`/`document`/`localStorage` at render scope
  (grep clean); the only usages are the three guarded stores above.

`/learn/**` already runs exactly this pattern (prerender + SSR reading a
module-scope progress store) in production today, so this is extending a proven
configuration, not inventing one.

## The core change

Flip the default instead of opting in route by route:

1. **Root `src/routes/+layout.ts`** → `export const prerender = true;` and
   **remove `export const ssr = false;`** (SSR then defaults to `true`). This
   makes server-first the enforced convention: new routes are SSR + prerender
   unless they consciously opt out. Aligns with AGENTS.md "favor strong
   conventions."
2. **Keep the dynamic opt-outs already in place**: `/auth` stays
   `prerender = false; ssr = true`; `/api/**` and `/auth/sign-out` stay
   `prerender = false`; `/test/**` stays `prerender = false` (flip its `ssr` to
   the inherited `true` for consistency, or leave it — dev-only, low stakes).
3. **`/learn/**`'s explicit `ssr = true`** becomes redundant once the root
   default is `true`. Leave `prerender = true` there (it also carries the
   build-time `load`); the now-redundant `ssr = true` can stay for local clarity
   or be removed — cosmetic, decide during cleanup.
4. **`/`, `/alphabet`, `/words`, `/practice`** need no per-route file at all
   after the flip: they inherit prerender + SSR and render their stable
   new-visitor default on the server, then hydrate personalized state on the
   client (see the personalization boundary below).

Net result: the only routes that are _not_ static assets are the ones that
genuinely cannot be (`/auth`, `/api/**`, `/auth/sign-out`) — exactly "static
where possible, server-rendered where necessary."

## The personalization boundary (the honest limit of "no client rendering")

The goal says "basically NO client-rendered stuff." One hard constraint makes a
literal reading impossible, and it should be a conscious decision rather than a
silent gap:

**Anonymous learner progress lives in `localStorage`.** It has no server-side
representation for signed-out users, so it _cannot_ be server-rendered — there is
nothing on the server to render it from. Every page that shows "known letters,"
"known words," resume state, or stats therefore has a genuinely client-only
layer for anonymous users.

This is fine and is _not_ the SPA problem. The SPA problem is an **empty shell**;
after this migration every page ships its full public/new-visitor HTML from the
server, and personalization is a **progressive-enhancement overlay** that
hydrates on top (`refreshLearnerProjection()` in the root layout's `onMount`,
plus the localStorage-backed stores). Crawlers, non-JS clients, and first paint
all see real content; returning learners see their state swap in after hydrate.

### Recommended architecture (Option A — prerender-static + hydrated overlay)

Keep personalization as a client-hydration overlay on top of prerendered static
HTML. This is the recommendation because it _maximizes_ the stated performance
goal: the shared shell is a CDN static asset (no per-request server work),
matching the Cloudflare Workers Static Assets model the deployment plan already
assumes. It also keeps all secrets and privileged reads server-side exactly
where they are today.

### The alternative to be explicit about (Option B — server-rendered personalization)

Render personalized state on the server per request for **signed-in** users
(load the projection in a `+layout.server.ts` from the auth cookie instead of a
client fetch to `/api/learner/projection`). This removes the post-hydrate fetch
waterfall for authenticated users and is "more server-rendered."

Costs, which is why it is **not** recommended as the default:

- Any route showing personalized state can no longer be prerendered → every
  request hits the Worker → loses static CDN caching → **worse** performance for
  the shared content, contradicting the primary goal.
- It only helps signed-in users. Anonymous progress is still localStorage-only,
  so the client overlay stays regardless.
- It is a larger change touching auth-scoped server loads (higher-risk per
  AGENTS.md security governance) and would need its own sign-off.

Option B is a legitimate _future_ enhancement for the authenticated experience,
but it should be decided on its own merits, not folded into this migration.
**This plan implements Option A.**

### `csr = false` — noted, not adopted

SvelteKit's `csr = false` drops the JS bundle entirely for a page (max static
perf for pure content like `/about`). It is **not** usable here without a layout
split, because the global `MainNav` is interactive (`ThemeToggle`,
`HamburgerMenu`) and the personalization overlay needs hydration. Flagged as a
possible future optimization for a genuinely leaf, chrome-free content route;
out of scope now.

## Adapter posture

- **Stay on `@sveltejs/adapter-node` for this task.** The prerender/SSR split
  defined here is adapter-agnostic and is a prerequisite that makes the planned
  `@sveltejs/adapter-cloudflare` migration
  (`.ai/2026-06-27-cloudflare-alpha-deployment-plan.md`) cleaner — prerendered
  routes become Workers Static Assets, dynamic routes become the Worker.
- **Do not switch to `@sveltejs/adapter-static`.** The app has real server
  surfaces (`/auth` form actions + session, `/api/learner/*`, `/auth/sign-out`)
  that a fully static adapter cannot serve. "Static where possible" is achieved
  by prerendering individual routes under a server-capable adapter, not by going
  static-only. (`adapter-static` is currently an unused dep; the Cloudflare plan
  already tracks removing it.)

## Scope

- In scope:
  - Root `+layout.ts`: remove `ssr = false`, keep `prerender = true`.
  - Per-route audit + validation that `/`, `/about`, `/alphabet`, `/words`,
    `/practice` render correct server HTML and hydrate without mismatch.
  - Cleanup of now-redundant `ssr = true` overrides (`/learn/**`) — optional,
    cosmetic.
  - Doc updates: `docs/seo.md` gap table, `docs/seo-recommendations.md` §1 P0,
    `.ai/2026-07-11-pre-rollout-tasks.md`, and the narrow plan's status.
- Out of scope:
  - The SEO metadata content itself (canonical, `og:*`, JSON-LD, titles/`h1`
    contract copy) — tracked in
    `docs/superpowers/plans/2026-07-11-seo-foundation.md` and the search-indexing
    readiness plan. This task makes the server _capable_ of rendering that
    content; it does not author it.
  - Option B (server-rendered personalization) — separate, sign-off-gated.
  - The Cloudflare adapter migration — separate plan; flag anything here that
    turns out adapter-specific.
  - Making `/alphabet`/`/words`/`/practice` indexable — they stay `noindex` per
    `docs/seo.md` until they have a stable, useful no-progress default worth
    indexing. SSR here is purely a perf/UX/first-paint win, not an indexing one.

## Constraints

- Security: no route gains a `+page.server.ts` in this task; no secret moves
  client-side; no auth logic changes. If SSR later motivates server-side
  personalization (Option B), that is separate high-risk work per AGENTS.md.
- Technical: prerender output must be byte-stable across builds (no timestamps,
  random IDs, or per-build state in the static HTML) — required for prerendering
  to be valid and a canary for accidental shared-state bugs.
- Technical: the client's first render (pre-`onMount`) must match the
  server-rendered DOM exactly (both read the same empty store defaults), so there
  is no hydration mismatch. `/learn` already demonstrates this holds.
- Product: prerendered `/` shows the generic new-visitor hero (no stats/lesson
  list); `/words`/`/practice` show their empty states; `/alphabet` shows the full
  letter grid with nothing highlighted. Personalized state swaps in post-hydrate.
  Confirm each reads correctly for a first-time visitor — it is intended, not a
  regression.

## Decisions

- **Flip the root default** (remove `ssr = false`) rather than add per-page
  `+page.ts` overrides for `/` and `/about` only. Reason: the user's goal is to
  retire SPA globally, the store audit shows the utility routes are just as
  server-safe as the home page, and a flipped default makes server-first the
  durable convention. This intentionally reverses the narrow plan's
  "minimize blast radius / per-page override" decision, which was scoped to only
  the two indexable routes.
- **Option A (prerender-static + hydrated personalization overlay)** over Option
  B. Reason: best serves the stated performance goal and matches the Cloudflare
  static-assets deployment model; anonymous progress is localStorage-bound and
  cannot be server-rendered regardless.
- **Stay on adapter-node; reject adapter-static.** Reason: real server routes
  exist; per-route prerender under a server-capable adapter is the correct way to
  get "static where possible."

## Phased rollout (each phase independently shippable + verifiable)

- **Phase 1 — indexable routes (`/`, `/about`).** Highest value (unblocks all
  SEO work). This is the narrow plan's content; land it here. Can be done via the
  root flip directly if Phase 2 follows immediately, or via temporary per-page
  `ssr = true` if you want to ship `/` + `/about` before auditing the utilities.
- **Phase 2 — utility routes (`/alphabet`, `/words`, `/practice`).** Audit each
  page + its child components for render-scope browser access (expected clean),
  then confirm they inherit SSR under the flipped default.
- **Phase 3 — consolidate.** Remove `ssr = false` from the root layout (if not
  already), delete redundant per-route `ssr = true`, normalize `/test/**`.
- **Phase 4 — docs.** Update the SEO docs, pre-rollout tasks, and mark the narrow
  plan superseded.

If Phases 1–3 are done together (recommended, since the audit is small and the
end-state is a single clean default), collapse them into one change with per-
route verification rather than shipping the temporary per-page overrides.

## Validation

- `pnpm check:all`
- `pnpm build`, then inspect the emitted prerendered HTML for `/`, `/about`,
  `/alphabet`, `/words`, `/practice` **directly** (not just "build succeeded"):
  confirm real content — `h1`, hero/section copy, nav — is in the raw HTML, not
  only inside a hydration `<script>`.
- Confirm no Svelte hydration-mismatch warnings in dev console or build output.
- Load each route with JS disabled (or view-source): new-visitor experience must
  render correctly server-side. Re-enable JS and confirm personalized state
  (stats, known counts, resume) swaps in post-hydrate for an account/local
  progress.
- Rebuild and confirm the prerendered HTML for `/` is byte-identical across two
  clean builds (shared-state / determinism canary).
- Confirm `/auth`, `/api/learner/*`, `/auth/sign-out` still behave exactly as
  before (not prerendered, session/actions intact).

## Open questions

Both resolved 2026-07-11:

- **Personalization: Option A (confirmed).** Personalization stays a
  client-hydrated overlay on prerendered static HTML. Option B (server-rendered
  personalization for signed-in users) is explicitly deferred to a separate,
  sign-off-gated follow-up plan and is not part of this task.
- **Rollout: consolidated flip (confirmed).** Audit all routes, then flip the
  root default in one change with per-route verification — no temporary per-page
  `ssr = true` overrides. Phases 1–3 collapse into that single change; Phase 4
  (docs) follows.

## Follow-up

- Once landed, `docs/superpowers/plans/2026-07-11-seo-foundation.md` (metadata,
  canonical, JSON-LD) and the search-indexing readiness plan can proceed and
  actually reach the wire.
- Re-confirm the prerender/SSR split holds under the Cloudflare Workers runtime
  during `.ai/2026-06-27-cloudflare-alpha-deployment-plan.md`.
- Revisit `csr = false` for a future chrome-free content route, and Option B for
  the authenticated experience, each on its own merits.
