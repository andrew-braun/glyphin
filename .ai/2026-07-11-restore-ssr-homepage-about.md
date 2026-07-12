# Task: Restore SSR for `/` and `/about`

- Start date: 2026-07-11
- Owner: unassigned
- Status: superseded — done as part of the broader
  `.ai/2026-07-11-server-first-rendering-migration.md`, which flipped the root
  layout to server-first (SSR + prerender) for the whole route tree, not just
  `/` and `/about`. The store-safety audit recorded below remains the reference
  for why the flip is safe. Kept for history; no separate work remains here.

## Goal

Make `/` and `/about` — the two routes `docs/seo.md` marks indexable that
have no server-capable layout of their own — actually emit real HTML in the
initial server response, so crawlers and non-JS clients (Bing, most AI
crawlers, Open Graph unfurlers for Slack/Discord/X/iMessage) see real content
instead of an empty hydration shell.

This was surfaced as the P0 blocker in `docs/seo-recommendations.md`: neither
`docs/superpowers/plans/2026-07-11-seo-foundation.md` nor
`2026-07-11-search-indexing-readiness.md` touches the `ssr` flag, so as
written they'd ship `<title>`/canonical/robots tags that never reach the
wire for these two routes.

## Scope

- In scope:
  - `src/routes/+page.ts` (new) — `export const ssr = true;` for `/` only.
  - `src/routes/about/+page.ts` (new) — `export const ssr = true;` for
    `/about` only.
  - Audit of every store/module the home and about component trees touch for
    server-render safety (see Constraints).
  - Build verification that `/` and `/about` produce real prerendered HTML.
- Out of scope:
  - `/alphabet`, `/words`, `/practice`, `/auth`, `/test/**` stay exactly as
    they are. They're `noindex` per `docs/seo.md`, so there's no indexing
    payoff, and every one of them reads learner-local or session state more
    directly than the home page — not worth the audit risk for zero benefit.
  - The route metadata migration itself (`PageMetadata`, canonical URLs,
    structured data) — tracked in the SEO foundation plan and
    `docs/seo-recommendations.md`. This task only makes the server capable of
    rendering that content; it doesn't add the content.
  - The Cloudflare Workers adapter migration
    (`.ai/2026-06-27-cloudflare-alpha-deployment-plan.md`). This task targets
    the current `@sveltejs/adapter-node` setup. Flag for the migration
    reviewer if anything here turns out to be adapter-specific.

## Constraints

- Technical:
  - `src/lib/stores/progress.ts` (`progress` writable), `src/lib/stores/learner.ts`
    (`authSession`, `learnerProjection`), and `src/lib/stores/theme.svelte.ts`
    are **module-scope singletons**, not per-request state. `loadProgress()` and
    `ensureProgressInitialized()` already guard on `typeof window === "undefined"`,
    and `refreshLearnerProjection()` guards on `$app/environment`'s `browser` —
    confirmed by reading both files on 2026-07-11. Before landing this, verify
    (don't just re-assert) that nothing on the server-render path ever calls a
    _mutating_ function on these stores (`progress.update`, `authSession.set`
    outside `refreshLearnerProjection`'s browser guard, etc.) — if it did, that
    mutation would apply to the shared module instance for the life of the
    server process/build, not just one request.
  - `MainNav.svelte` (rendered by the root layout on every route) already reads
    `authSession`, `knownLetters`, and `knownWords` and already renders under
    SSR today, because `/learn` already sets `prerender = true; ssr = true`.
    Treat `/learn`'s existing working SSR as the reference precedent, not a
    hypothesis to re-derive from scratch.
  - Confirm the server-rendered/prerendered output for `/` is byte-stable
    across repeated builds (no timestamp, random ID, or per-build-only state
    leaking into the static asset) — required for prerendering to be valid at
    all, and a good canary for accidental shared-state bugs.
  - Verify no hydration mismatch: the client's first render (before `onMount`
    fires) must match the server-rendered DOM exactly, since both read the
    same store defaults before `refreshLearnerProjection()`/`theme.initialize()`
    run.
- Product:
  - The prerendered `/` will show the generic new-visitor hero (no stats, no
    lesson list) because personalized state only loads client-side after
    hydration via `refreshLearnerProjection()`. This is intentional and matches
    the existing architecture note in
    `.ai/2026-06-27-cloudflare-alpha-deployment-plan.md` ("public, stable
    curriculum pages are built ... and prerendered into static assets;
    personalized/session-aware routes run in the Worker") — it is not a
    regression to fix, just confirm it reads correctly for a first-time
    visitor.
- Security:
  - Neither route gets a `+page.server.ts` as part of this task. If SSR
    surfaces a reason to add one later (e.g. to read real Supabase-backed
    stats), that's separate, higher-risk work requiring the sign-off in
    `AGENTS.md`'s Security And Deployment Governance section — do not fold it
    into this task.

## Decisions

- Decision: override `ssr` per-page (`+page.ts` on `/` and `/about` only)
  instead of flipping the shared `src/routes/+layout.ts` default.
  Reason: minimizes blast radius. The noindex utility routes get no benefit
  from SSR and carry real audit cost (they read learner-local state more
  centrally than the home page does); leaving the root layout's `ssr = false`
  default alone means we don't have to re-verify all of them too.

## Progress

- [ ] Discovery and research — confirm (via `grep`/read, not assumption) that
      no server-reachable code path mutates `progress`, `authSession`, or
      `learnerProjection`.
- [ ] Implementation — add the two `+page.ts` overrides.
- [ ] Validation
  - `pnpm check:all`
  - `pnpm build`
  - Inspect the generated prerendered HTML for `/` and `/about` directly
    (not just "build succeeded") and confirm real content — hero copy, `h1`,
    nav — is present in the raw HTML, not only in a script tag.
  - Confirm no Svelte hydration-mismatch warnings in the dev console or build
    output.
  - Manually load `/` in a browser with JS disabled (or view-source) to
    confirm the new-visitor experience renders correctly server-side, then
    re-enable JS and confirm personalized state still swaps in post-load for
    an account with progress.
- [ ] Documentation updates — once verified, remove the "SSR restore" caveat
      for `/` and `/about` from `docs/seo.md`'s gap table, and update the P0
      item in `docs/seo-recommendations.md` and
      `.ai/2026-07-11-pre-rollout-tasks.md` to point at this task as done rather
      than open.

## Open Questions

- None yet — the per-page `ssr = true` override plus the existing `/learn`
  precedent should cover this without needing a broader store refactor. If
  the mutation audit above turns up a real server-reachable mutation path,
  that changes the risk profile and this task should stop and get re-scoped
  rather than proceeding.

## Follow-Up

- After this lands, `docs/superpowers/plans/2026-07-11-seo-foundation.md`
  Task 3 (route metadata migration) can proceed for `/` and `/about` and
  actually have effect.
- If/when the Cloudflare Workers adapter migration happens, re-confirm this
  reasoning holds under the Workers runtime's request/isolate lifecycle, not
  just `adapter-node`.
