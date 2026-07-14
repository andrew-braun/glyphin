# Rollout Tracker

**Glyphin launched before this checklist was finished.** The site is live at
`https://glyphin.app` with 46 published Thai lessons. This file was written as a
set of pre-launch gates, and it kept being read as if those gates still blocked a
launch that had already happened. It is now a post-launch tracker: what is live
and verified, what is live and _unverified_, and what is still open.

Rewritten 2026-07-14 during the `.ai` backlog audit. Master queue:
[`2026-07-14-backlog-clearing-plan.md`](./2026-07-14-backlog-clearing-plan.md).

Rules for this file: do not mark anything done that has not been observed. If a
gate depends on a hosted dashboard or a human, say so and name the owner. The
previous version of this file drifted from reality precisely because boxes were
ticked from intent rather than evidence.

## Live And Verified

Observed against production on 2026-07-14 with `curl`. Re-verify after any change
to routing, headers, or the adapter.

- [x] **Security headers on both response classes.** `/` (prerendered static
      asset) and `/auth` (Worker) each return all seven headers: HSTS,
      `x-content-type-options`, `x-frame-options: DENY`, `referrer-policy`,
      `permissions-policy`, COOP, and CORP. This is the two-mechanism policy in
      `docs/security-headers.md` (`_headers` for assets, `src/hooks.server.ts` for
      the Worker) working end to end — neither mechanism alone reaches both.
- [x] **CSP in both delivery modes.** `/auth` carries a real
      `content-security-policy` response header with a per-request nonce. `/`
      carries its CSP as a `<meta http-equiv>` tag with a SHA-256 script hash.
      `script-src` contains no `'unsafe-inline'` on either. This is `kit.csp`
      `mode: "auto"` behaving as designed.
- [x] **Toolchain advisories cleared.** pnpm pinned to `11.8.0`, clearing three
      HIGH advisories carried by the previous `11.6.0` pin. One low `cookie`
      advisory (GHSA-pxg6-pf52-xh8x) remains, accepted and time-bounded in
      `docs/dependency-maintenance.md` (owner Andri, review 2026-10-14).

## Live But Unverified

**This is the category that matters.** Each item below is running in production
and has never been confirmed against the hosted system. Anything here can be
broken right now without anyone knowing.

- [ ] **A real learner can actually sign in.** Needs a human with a real inbox:
      request an OTP through the live Turnstile widget, receive the mail, verify,
      confirm the session cookie attributes (`HttpOnly`, `Secure`, `SameSite`,
      `Path=/`), complete a lesson, confirm it syncs, then sign out and confirm
      the cookie is cleared. Turnstile and the OTP flow were both implemented
      (`0bef72a`, `300ef04`) but the end-to-end path has never been walked on
      production. **Owner: Andri.**
- [ ] **Hosted Supabase auth configuration.** Dashboard-only; cannot be checked
      from the repo. Confirm the magic-link template matches
      `supabase/templates/magic-link.html`; custom SMTP with a verified sending
      domain is configured (not Supabase's default test mailer, which is
      rate-limited and not for production); Site URL and the redirect allow-list
      name exact production and preview URLs with no wildcards; OTP expiry is
      3600s or less; refresh-token rotation is on. **Owner: Andri.**
- [ ] **Auth failure paths.** Expiry, replay, throttling, and
      unavailable-provider behavior against the hosted project — not local.
      **Owner: Andri.**
- [ ] **Hosted database hardening.** Enforce SSL on the hosted DB; migrate to
      publishable/secret API keys and disable the legacy JWT-based keys; confirm
      the publication generator writes over a privileged connection; decide
      whether `graphql_public` should stay in `api.schemas`. Tracked in the
      backlog plan as the Task 3 hosted tail.
- [ ] **Thai content review, lessons 22-46.** No native-speaker or corpus review
      has happened for the back half of the course, including eight anchors that
      passed with weak scores. This is the one true content gate and it has no
      owner. Learners are using this material now. **Needs a reviewer sourced.**

## Production Drift Found 2026-07-14

### Cloudflare is rewriting `robots.txt`

The live file is not the file in `static/robots.txt`. Cloudflare's Managed
robots.txt / AI Crawl Control feature prepends its own block, which ends with a
second `User-agent: *` group containing `Allow: /`. The live file therefore has
two `User-agent: *` groups.

RFC 9309 requires crawlers to merge same-token groups, and Google does
(longest-match wins, so our `Disallow: /alphabet` still beats `Allow: /`), so the
major engines behave correctly. But a crawler that honors only the first matching
group sees `Allow: /` and ignores every crawl-budget rule we wrote — and
`docs/search-indexing.md` specifies exact robots.txt content that production no
longer matches.

The AI-crawler `Disallow` rules Cloudflare injects are probably wanted. The
duplicate `Allow: /` group is not.

- [ ] **Decide:** disable the managed feature and own the file, or keep it and
      reconcile `docs/search-indexing.md` with what is actually served. Either way
      the contract doc and reality must agree. Resolve before adding the
      `Sitemap:` line in the metadata task below.

## Open Work

### Route metadata and sitemap (backlog Task 1.3)

`PageMetadata` is built and tested but wired into **zero** routes, so live pages
emit no canonical, no `og:*`, and no `noindex` on learner utilities. The contracts
already exist: `docs/seo.md` (per-route titles, descriptions, robots) and
`docs/search-indexing.md` (sitemap membership).

Two prerequisites were discovered on 2026-07-14:

1. `SITE_ORIGIN` was set nowhere, and `validateProductionOrigin()` throws when it
   is missing — so adopting the metadata helper in prerendered routes fails the
   build. This is why the component was never adopted. It is now set to
   `https://glyphin.app` in the gitignored `.env` and `.dev.vars`. It still needs
   a non-secret `vars` entry in `wrangler.jsonc` for the Worker runtime, **and** a
   build-time variable in the Cloudflare Workers Builds settings — prerendering
   reads it at build time, so a missing build var breaks the deploy.
2. `docs/seo.md` mandates an OG image at `/og/glyphin-reading-thai.png`
   (1200x630) that does not exist. Referencing a missing image is worse than
   omitting it, so metadata will ship without `og:image` (degrading to a `summary`
   card) until the asset is designed. **Owner: Andri.**

- [ ] Wire `PageMetadata` into every route per the `docs/seo.md` inventory.
- [ ] Add `/sitemap.xml`, sourcing lesson IDs from `getPublishedLessonEntries()`.
- [ ] Add the `Sitemap:` line to `robots.txt` (after the drift decision above).

### Remaining

- [ ] **`h1` gaps.** `docs/seo.md` records that `/learn`, `/alphabet`, `/words`,
      `/practice`, and `/learn/[id]` have no `h1` in their default server-rendered
      state, and `/` uses non-contract copy. Separate from the metadata layer, and
      it overlaps the in-flight learner-journey work — sequence it after that lands.
- [ ] **`thaiPack` runtime cleanup** (backlog Task 6). Blocked: the in-flight
      learner-journey work is actively building _on_ `thaiPack` in
      `src/lib/stores/progress.ts` and `src/lib/server/published-lessons.ts`.
      Attempt only after that work commits.
- [ ] **Human security review.** Walk `docs/security-review-checklist.md` against
      hosted Supabase and Cloudflare, record findings, assign owners to residual
      risks, schedule the next review.
- [ ] **Automated test suites.** [Plan](./2026-07-11-automated-test-suites.md).
      Stage it, starting with pure utilities and server input validation.

## Done

- [x] **Security headers implemented and deployed.**
      [Plan](./2026-07-11-security-headers.md); durable policy in
      `docs/security-headers.md`. Verified live 2026-07-14.
- [x] **Dependency refresh.**
      [Plan](./2026-07-11-dependency-refresh-full.md). One low advisory accepted
      and time-bounded in `docs/dependency-maintenance.md`.
- [x] **Two-column scored-practice answer grid** (`fbc3946`).
      [Plan](./2026-07-11-practice-answer-grid.md).
- [x] **Server-first rendering.** `/` and `/about` emit real server HTML;
      prerender is the default. Archived:
      `.ai/archive/2026-07-11-restore-ssr-homepage-about.md`.
- [x] **Logo optimization.** `glyphin-logo.svg` 661,957 to 649,386 bytes (1.90%);
      Brotli 172,751 to 172,192. Byte-identical 1516x1516 renders confirmed no
      visual change.

## Deferred, Not Blocking

`llms.txt`, an AI-crawler robots policy beyond what Cloudflare already injects,
Search Console DNS verification, Core Web Vitals monitoring, JSON-LD structured
data, and favicon/manifest. See `docs/seo-recommendations.md`.
