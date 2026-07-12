# Cloudflare Workers Alpha Deployment Plan

- Status: paused at a clean checkpoint on 2026-07-12. Supabase production
  bootstrap is complete and verified, the SvelteKit app is Worker-compatible
  (committed), and local validation (Step 8) now passes end-to-end: `pnpm
check`, `pnpm lint`, `pnpm stylelint`, a production build against the real
  Supabase project, and a local Wrangler simulation of the built Worker.
  Remaining work is Cloudflare dashboard setup (Workers Builds Git integration,
  Step 9), the custom domain and Resend SMTP gate (Step 10), and deployed smoke
  tests (Step 11) — all of which need dashboard/account access this session
  didn't have. See `.ai/archive/2026-07-04-cloudflare-deployment-plan-review.md`
  for the earlier plan review.

## Current Pause State

- Branch: `deploy/cloudflare-alpha`.
- Supabase project: `Glyphin`, ref `mtpkjcvbhkxbmqpreblp`, region
  `eu-west-1`, linked and active.
- Remote DB bootstrap: completed with linked reset, all migrations applied, and
  `supabase/seed.sql` seeded.
- Remote DB verification: `pnpm db:prod:lint` passed, `pnpm db:prod:advisors`
  passed, linked content check found `1` course, `1` course version, `46`
  lessons, `418` vocabulary items, `46` delivery lesson bundles, and all `3`
  expected learner RPCs.
- Supabase CLI note: use `pnpm exec supabase` or `pnpm db:prod:*`; avoid bare
  `supabase` because it resolves to an older global CLI on this machine. The
  stale `~/.supabase/profile` marker was moved aside during setup to fix
  `failed to read profile: Unsupported Config Type ""`.
- Production Data API exposed schemas: `delivery` and `learner` were added via
  Project Settings > Data API in the Supabase dashboard on 2026-07-12 (matching
  `supabase/config.toml`'s `[api].schemas`). This only makes PostgREST route to
  those schemas; it does not by itself grant access — `learner` still has all
  table privileges revoked from `anon`/`authenticated` (only `SECURITY DEFINER`
  RPCs are reachable), and `delivery` read access is scoped by RLS to
  `is_active = true` rows. `internal_api` was not added to the exposed list.
- Cloudflare app work complete and committed (`3a5ca61`): `@sveltejs/adapter-cloudflare`,
  `wrangler`, `@cloudflare/workers-types`, `wrangler.jsonc`, and the Cloudflare
  Rate Limiting binding path for learner sync have all been added.
- Step 8 local validation completed on 2026-07-12:
  - `pnpm check`, `pnpm lint`, `pnpm stylelint` all pass clean. (`pnpm
check:all`'s `format:check` step fails only on pre-existing, unrelated
    files outside this work — `.pnpm-store/`, `.kilo/`, `.superpowers/`, and
    other untouched `.ai/*.md` docs are not covered by `.prettierignore`; not
    fixed here, out of scope.)
  - `pnpm build` ran successfully against the real production Supabase project
    (temporarily pointing local `.env` at
    `https://mtpkjcvbhkxbmqpreblp.supabase.co` with the production publishable
    key, then restoring local dev values afterward — `.env` is gitignored so
    this left no tracked changes). Verified `.svelte-kit/cloudflare/_worker.js`
    and all 46 prerendered `/learn/<id>` and `/learn/<id>/practice` routes were
    emitted as static output.
  - Added a local `.dev.vars` file (gitignored, new pattern — added
    `.dev.vars`/`.dev.vars.*` to `.gitignore`) holding `SUPABASE_AUTH_URL` and
    `SUPABASE_AUTH_PUBLISHABLE_KEY` so `wrangler dev` has runtime secrets, the
    same two values that go into Cloudflare's Settings > Variables & Secrets
    later. Documented this pattern in `AGENTS.md`'s Validation Workflow.
  - Ran `pnpm exec wrangler dev .svelte-kit/cloudflare/_worker.js` locally and
    smoke tested `/`, `/learn`, `/learn/1`, `/learn/1/practice`,
    `/api/learner/projection` (returned the expected unauthenticated
    projection), and `/auth` — all `200`; an unknown route correctly returned
    `404`. The `LEARNER_SYNC_RATE_LIMITER` binding, `ASSETS` binding, and both
    runtime secrets bound correctly in the local simulation with no errors in
    the Wrangler log.
- Verification still pending: Cloudflare Workers Builds dashboard setup
  (Step 9), custom domain + Resend SMTP (Step 10), and deployed smoke tests
  (Step 11).
- Current code state: only this plan file and `AGENTS.md`/`.gitignore` (the
  `.dev.vars` documentation/ignore addition) are modified and uncommitted;
  everything else from this session was either already committed or is a local
  gitignored file (`.env`, `.dev.vars`). Start the next session with
  `git status --short`.

## Summary

Deploy Glyphin as a Cloudflare Workers Static Assets app backed by a fresh
production Supabase project. Bootstrap Supabase first: the SvelteKit build
prerenders public curriculum from Postgres delivery reads, and the runtime
Worker depends on Supabase auth and learner-state RPCs. Use Workers as the
long-term Cloudflare target instead of Cloudflare Pages, with Git-based
deployment (Cloudflare Workers Builds) as the deployment workflow from day one.
The repo already lives on GitHub, so there is no separate manual-deploy
bootstrap phase: local validation plus a non-production preview deploy proves
the Worker before the production branch goes live.

The deployment model is:

- A fresh production Supabase project is created, linked, migrated/seeded, and
  verified before the first Cloudflare Worker build is configured.
- Public, stable curriculum pages are built from Supabase at deploy time and
  prerendered into static assets.
- Personalized/session-aware routes run in the Cloudflare Worker.
- Supabase remains the source of truth for curriculum, auth, and learner state.
- The deployed Worker must not depend on runtime Node filesystem access.

Reference docs:

- [Cloudflare SvelteKit Workers guide](https://developers.cloudflare.com/workers/framework-guides/web-apps/sveltekit/)
- [Cloudflare Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/)
- [Cloudflare Workers Builds configuration](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/)
- [Cloudflare Workers GitHub integration](https://developers.cloudflare.com/workers/ci-cd/builds/git-integration/github-integration/)
- [Cloudflare Workers Node.js compatibility](https://developers.cloudflare.com/workers/runtime-apis/nodejs/)
- [SvelteKit Cloudflare adapter](https://svelte.dev/docs/kit/adapter-cloudflare)
- [Supabase SvelteKit auth](https://supabase.com/docs/guides/auth/server-side/sveltekit)
- [Supabase custom SMTP](https://supabase.com/docs/guides/auth/auth-smtp)
- [Supabase Auth rate limits](https://supabase.com/docs/guides/auth/rate-limits)

## Architectural Principle: Keep The Backend Contract Mobile-Ready

The long-term goal is a mobile app running in parallel with the web app, so
phase-1 choices must not entrench web-only patterns.

- The durable cross-platform contract is the Postgres RPC / security-definer
  layer (the functions `src/lib/server/learner-projection.ts` already calls),
  not the SvelteKit routes. Both clients sit thinly on top of the same DB
  contract under RLS.
- Web (now): SvelteKit BFF with cookie-based auth via `@supabase/ssr`.
- Mobile (phase 2): a Supabase client using bearer-token auth, calling the same
  RPCs directly under RLS. Native apps cannot reuse the cookie-based SvelteKit
  routes, so treating those routes as the contract would force a rebuild.
- Keep learner sync/projection business logic in the database (RPC / security
  definer), not in `+server.ts` handlers, so logic added during the alpha stays
  reusable from mobile.
- For phase-2 mobile/native code, use `@supabase/supabase-js` with the native
  client's bearer-token/session model and call the same RPCs under RLS.
  `@supabase/ssr` remains the web BFF package for cookie-backed SvelteKit
  server clients; do not invent a web-route contract just because the first
  client is the web app.

## Implementation Steps

### 1. Prepare A Deployment Branch And Tracker

- Work on `deploy/cloudflare-alpha`. Confirmed active branch on 2026-07-12.
- Continue updating this plan during implementation; this review is tracked in
  `.ai/2026-07-04-cloudflare-deployment-plan-review.md`.
- Treat Supabase project creation, auth, env vars, DNS, and production deploy as
  security-sensitive sign-off gates.
- Use Workers Static Assets as the deployment target; do not create a Cloudflare
  Pages project for this alpha.
- Deploy via Cloudflare Workers Builds (GitHub integration) from the start. The
  `deploy/cloudflare-alpha` branch (or another non-production branch) acts as the
  preview/verification branch via the non-production branch deploy command
  (`wrangler versions upload`); merging to the production branch is what ships.
  There is no separate manual `wrangler deploy` bootstrap step.

### 2. Bootstrap The Production Supabase Project Before Cloudflare

- Completed on 2026-07-12: created and linked a fresh Supabase project for
  alpha before configuring the Cloudflare Worker or Workers Builds.
- Default region: Europe West/Ireland if available, because the target audience
  is primarily U.S./European even though the target language is Thai. Supabase
  CLI region choice confirmed as `eu-west-1` on 2026-07-12.
- Captured project ref: `mtpkjcvbhkxbmqpreblp`. API URL is
  `https://mtpkjcvbhkxbmqpreblp.supabase.co`. Publishable/anon key still needs
  to be copied into local build env/Cloudflare dashboard surfaces before build
  verification.
- Use the dedicated Supabase CLI scripts added on 2026-07-12:
  `pnpm db:prod:login`, `pnpm db:prod:projects`, and
  `pnpm db:prod:link -- --project-ref <ref>`. Use the project-local
  `pnpm exec supabase`/package scripts rather than bare `supabase`; bare
  `supabase` resolves to an older global CLI on this machine. Do not pass
  `--profile glyphin` to linked DB commands, and move aside
  `~/.supabase/profile` if the CLI reports
  `failed to read profile: Unsupported Config Type ""`.
- Completed on 2026-07-12 for this fresh alpha only: ran the destructive linked
  reset after user-side confirmation that the project had no real user data.
  Shortcut: `pnpm db:prod:reset:fresh-alpha`.
- Run database verification before any Cloudflare configuration:
  - `pnpm db:lint` (local run on 2026-07-12 is blocked until Docker is running;
    `pnpm check` passed with 0 errors and 0 warnings)
  - `pnpm db:prod:lint` passed on 2026-07-12 after the linked reset
  - `pnpm db:prod:advisors` passed on 2026-07-12 after the linked reset
  - a linked schema/content check after reset
    - 2026-07-12 linked counts: `1` course, `1` course version, `46` lessons,
      `418` vocabulary items, `46` delivery lesson bundles, and all `3`
      expected learner RPCs present
  - a local `pnpm db:content:refresh` if needed to regenerate
    `.generated/` publication artifacts from the linked project
- Confirmed on 2026-07-12: the linked production project exposes the schemas
  and RPC surfaces the app requires:
  - `delivery` for build-time published curriculum reads — added to Data API
    exposed schemas via the dashboard.
  - `learner` for learner projection and sync — added to Data API exposed
    schemas via the dashboard; still has zero direct table grants for
    `anon`/`authenticated`, access is RPC-only.
  - auth configuration ready for the web BFF flow, with custom domain/SMTP
    settings still gated until the Cloudflare URL is known
- Record the exact values needed by the later Cloudflare phase:
  - Build env vars: `SUPABASE_DELIVERY_URL`,
    `SUPABASE_DELIVERY_ANON_KEY`
  - Runtime secrets: `SUPABASE_AUTH_URL`,
    `SUPABASE_AUTH_PUBLISHABLE_KEY`
- After real alpha users exist, stop using remote reset and switch to
  migration-only `pnpm exec supabase db push`.

### 3. Make The SvelteKit App Worker-Compatible

- Complete and committed as of 2026-07-12 (`3a5ca61`); verified via a
  production build plus local Wrangler simulation the same day (see Step 8).
- Replaced `@sveltejs/adapter-node` with `@sveltejs/adapter-cloudflare`.
- Remove unused `@sveltejs/adapter-static` if still unused after the adapter
  swap.
- Added `wrangler` as a dev dependency.
- Updated `svelte.config.js` to import and use the Cloudflare adapter.
- Added `@cloudflare/workers-types` because runtime code now reads the typed
  Cloudflare Rate Limiting binding from `event.platform.env` via SvelteKit's
  current request event. Ordinary string env vars still use SvelteKit `$env`
  modules.
- Added `wrangler.jsonc` for Workers Static Assets:
  - `name`: the alpha Worker name, for example `glyphin-alpha`.
  - `main`: `.svelte-kit/cloudflare/_worker.js`.
  - `assets.binding`: `ASSETS`.
  - `assets.directory`: `.svelte-kit/cloudflare`.
  - `compatibility_date`: the implementation date (must be `2024-09-23` or
    later so `nodejs_compat` resolves to `nodejs_compat_v2`).
  - `compatibility_flags`: use `["nodejs_compat"]` from the start. Do not start
    with `nodejs_als`. `nodejs_compat` is a superset that already includes
    `AsyncLocalStorage`, and both `@supabase/ssr` and `@supabase/supabase-js`
    pull in Node built-ins (`stream`, `buffer`, etc.) that fail on Workers
    without it. Cloudflare's own Supabase-on-Workers guidance requires
    `nodejs_compat`.
  - Reference config:

    ```jsonc
    {
     "name": "glyphin-alpha",
     "main": ".svelte-kit/cloudflare/_worker.js",
     "compatibility_date": "<implementation date, >= 2024-09-23>",
     "compatibility_flags": ["nodejs_compat"],
     "assets": {
      "binding": "ASSETS",
      "directory": ".svelte-kit/cloudflare",
     },
    }
    ```

- Keep `vite.config.ts` unchanged unless Wrangler/SvelteKit integration requires
  an explicit adjustment during implementation.
- No server code change is expected for env access: SvelteKit's `$env` modules
  are the preferred interface for environment variables, and `event.platform.env`
  is only needed for Cloudflare-specific bindings such as KV, D1, Durable
  Objects, and similar resources. Keep `src/hooks.server.ts` and
  `src/lib/server/delivery-lessons.ts` on `$env/dynamic/private`; do not rewrite
  them to read `platform.env` directly for ordinary string secrets.
- Replaced the Worker runtime rate limiter path with Cloudflare's Rate Limiting
  binding in `wrangler.jsonc`; local development still falls back to the
  in-memory token bucket when the binding is unavailable.
- Original risk addressed: the previous `src/lib/server/rate-limit.ts` store
  kept token-bucket state in process memory, which would only throttle within a
  single Worker isolate. `/api/learner/sync` now still calls
  `consumeRateLimitToken`, but the implementation uses the Cloudflare binding
  when present. Note `src/lib/server/delivery-lessons.ts` also caches a
  module-scoped client + publication id; that is safe (rebuildable per-isolate)
  but still needs build/runtime verification. Tracked in
  `.ai/2026-07-11-db-security-hardening.md` (audit #10).

### 4. Preserve Build-Time Supabase Reads And Prerendering

- Keep build-time reads from Supabase `delivery.*`; the database is the source
  of truth for published curriculum.
- Keep `pnpm build` able to generate/prerender public lesson content from the
  active Supabase publication.
- Keep or refine `publication:generate` as a build-time publication artifact
  step if it remains the cleanest way to feed SvelteKit prerendering.
- Do not remove build-time database access just to make the Worker simpler.
- Ensure Cloudflare build env vars include:
  - `SUPABASE_DELIVERY_URL`
  - `SUPABASE_DELIVERY_ANON_KEY`
- Preserve prerendering for stable public content:
  - `/learn`
  - `/learn/[id]`
  - other future public lesson/catalog routes that do not need user-specific
    state.

### 5. Remove Runtime Filesystem Dependence From The Worker

- Audit `src/lib/server/published-lessons.ts` and related publication paths.
- Ensure any `.generated` lesson artifacts are consumed during build/prerender,
  not opened from the deployed Worker at request time.
- Treat this as a load-bearing invariant: `published-lessons.ts` uses `node:fs`
  and `process.cwd()/.generated`, which only works because every route that
  imports it (`/learn`, `/learn/[id]`) is `prerender = true`, so those reads run
  at build time. No non-prerendered route may import `published-lessons.ts`.
  With `nodejs_compat` enabled, a violating import would bundle cleanly and then
  fail at request time with a missing-file error (a worse failure mode than a
  build break), so guard against it deliberately.
- Before shipping, verify with `rg` that `published-lessons.ts` is imported only
  from prerendered route modules or build-only code.
- If publication artifacts stay in the repo build flow, make them bundler-safe
  build inputs or direct prerender inputs.
- Runtime Worker code should fall back to Supabase only for routes that are not
  prerendered or are genuinely dynamic.
- Runtime auth/progress routes remain Worker-backed:
  - `/auth`
  - `/auth/sign-out`
  - `/api/learner/projection`
  - `/api/learner/sync`

### 6. Update Durable Docs And Instructions

- Update `AGENTS.md` and `.github/copilot-instructions.md` to say the deployment
  target is Cloudflare Workers Static Assets with a server-capable SvelteKit
  runtime.
- Update `docs/auth.md` to replace stale `adapter-node` wording with Cloudflare
  Workers/SvelteKit server runtime wording.
- Add a short `docs/deployment-cloudflare.md` runbook covering:
  - Worker build settings (build command, deploy command, production branch)
  - required build env vars and runtime secrets, and which dashboard section each
    lives in
  - Workers Builds/Git deployment (preview branch -> production branch flow)
  - local Wrangler simulation for pre-push verification
  - custom domain setup
  - rollback (Worker version rollback + git revert)
  - smoke tests

### 7. Configure Worker Build And Runtime Secrets

- Configure local `.env` for build-time Supabase delivery reads.
- Workers Builds separates build-time and runtime config in the dashboard. Use
  the two distinct locations deliberately:
  - Build env vars (Settings > Build, build-only, not present at runtime):
    - `SUPABASE_DELIVERY_URL`
    - `SUPABASE_DELIVERY_ANON_KEY`
    - `NODE_VERSION=24.15.0`
    - `PNPM_VERSION=11.6.0`
  - Runtime secrets (Settings > Variables & Secrets):
    - `SUPABASE_AUTH_URL`
    - `SUPABASE_AUTH_PUBLISHABLE_KEY`
- Keep `SUPABASE_DELIVERY_URL` and `SUPABASE_DELIVERY_ANON_KEY` as build env vars
  only, not runtime secrets. Delivery reads happen at build (prerender) or as a
  fallback that must remain reachable only from prerendered routes, so the
  deployed Worker should not need them. Add them as runtime secrets later only if
  a non-prerendered route deliberately starts reading `delivery.*` and that
  change passes a security review.
- Set the two runtime secrets via the dashboard (or `wrangler secret put`).
  Secrets set this way persist across Git deploys; `wrangler deploy` does not
  delete them. Do not put secrets in `wrangler.jsonc`.
- Do not put runtime secrets in Workers Builds build variables; build variables
  are build-only and are the wrong surface for auth runtime configuration.
- Never use or store a Supabase service-role key in Cloudflare for this alpha.

### 8. Validate Locally Before Connecting Git

- Completed 2026-07-12. See "Current Pause State" above for full detail.
- Ran local validation:
  - `pnpm install` — already up to date.
  - `pnpm check` — 0 errors, 0 warnings.
  - `pnpm lint` / `pnpm stylelint` — clean. (`pnpm check:all`'s format step
    flags only pre-existing unrelated files; not this work's concern.)
  - `pnpm build` — succeeded against the real production Supabase project;
    confirmed `_worker.js` and all 46 prerendered lesson routes in
    `.svelte-kit/cloudflare`.
- Ran a local Worker simulation of the built Cloudflare output with Wrangler:
  `pnpm exec wrangler dev .svelte-kit/cloudflare/_worker.js`, using a new local
  `.dev.vars` file for runtime secrets. Exercised both prerendered static pages
  (`/`, `/learn`, `/learn/1`, `/learn/1/practice`) and Worker-backed routes
  (`/api/learner/projection`, `/auth`) — all `200`, unknown route `404`, no
  errors in the Wrangler log, all bindings (rate limiter, assets, both runtime
  secrets) resolved correctly.
- This caught the one real gap before connecting Git: the production Supabase
  project's Data API did not yet expose `delivery`/`learner`, which would have
  failed the very first Workers Builds build. Fixed via the dashboard (see
  Step 2).

### 9. Set Up Git-Based Deployment (Workers Builds)

- Connect the existing GitHub repo to a new Worker via Cloudflare Workers Builds.
  This creates the Worker and runs the first build/deploy; there is no separate
  manual `wrangler deploy` bootstrap.
- Configure build settings in the dashboard:
  - Build command: `pnpm build` (runs `prebuild` -> `publication:generate` ->
    `vite build`).
  - Deploy command (production branch): `pnpm exec wrangler deploy`.
  - Non-production branches: `pnpm exec wrangler versions upload` for preview
    URLs used to verify before promoting to production.
  - Git branch (production): the production branch (defaults to `main`).
- Enable non-production branch builds so Cloudflare uses the configured
  non-production deploy command for preview versions instead of promoting every
  branch push.
- Add the build env vars and runtime secrets from step 7 in their respective
  dashboard sections.
- Note: Workers Builds does not honor `[build]` custom-build config in
  `wrangler.jsonc`; the build command lives in the dashboard build settings.
- First-deploy verification flow:
  - Push `deploy/cloudflare-alpha` (non-production) to trigger a preview
    `versions upload`, and verify the Worker on its preview/`workers.dev` URL.
  - Only after preview verification passes, merge to the production branch to
    trigger the production `wrangler deploy`.
- Optional fallback (only if Workers Builds proves limiting): a GitHub Actions
  workflow running `pnpm install`, `pnpm check`, `pnpm build`, and
  `pnpm exec wrangler deploy`. Prefer native Workers Builds for the alpha.

### 10. Attach The Custom Domain

- Add the custom domain to the Worker route/domain configuration.
- If the domain is not already on Cloudflare DNS, add the zone or configure the
  required DNS record.
- Wait for SSL provisioning to complete.
- Configure Supabase Auth URL settings:
  - Site URL: the custom domain.
  - Redirect allow list: the exact custom-domain callback/return URLs and the
    exact `workers.dev` preview/test URL if auth testing there is needed. Avoid
    wildcard redirect entries for the alpha.
- Configure custom SMTP via Resend before sharing the URL. This is a hard gate,
  not optional polish: Supabase's default email service only delivers to project
  team members and is heavily rate-limited (~2-30/hr), so external alpha testers
  cannot receive OTP codes without it. Email OTP is the entire auth flow.
  - Create a Resend account, verify the sending domain (SPF/DKIM), and create an
    SMTP credential / API key.
  - Set Supabase Auth custom SMTP host, port, user, and password to the Resend
    values, plus a verified sender address.
  - Set OTP expiry to `3600` seconds or lower.
  - Tune auth rate limits (sign-in, OTP initiation, token verification, refresh)
    to sane alpha values.
  - Enable CAPTCHA before public signup/OTP exposure if the alpha URL is not
    invite-only or otherwise access-controlled.
  - Treat the Resend SMTP credential as a Supabase-side secret; it never goes
    into Cloudflare or any client bundle.
- Confirm email OTP templates still send the six-digit code flow expected by the
  current `/auth` page, delivered through Resend.

### 11. Deploy And Smoke Test

- Run this against the non-production preview deploy first, then re-run the
  critical paths against production after promotion.
- Verify Workers Builds logs for:
  - Cloudflare adapter output
  - static asset upload
  - Worker script upload
  - successful build-time Supabase publication reads
  - no runtime filesystem assumptions
- Test on the deployed Worker:
  - `/` renders.
  - `/learn` is served as prerendered public content.
  - `/learn/1` and `/learn/1/practice` render.
  - `/api/learner/projection` returns unauthenticated projection for signed-out
    users.
  - Email OTP sign-in works.
  - Completing a lesson syncs progress and survives refresh/navigation.
  - Sign-out clears the session.
- Confirm secure cookies are `HttpOnly`, `Secure`, and `SameSite=Lax`.
- Confirm Supabase keys are not serialized into client bundles or page data.

### 12. Rollout And Rollback

- Share the custom domain only after smoke tests pass.
- Record the last known good Worker version (deployment ID) after each successful
  production deploy as the rollback reference.
- Roll back Worker issues using Cloudflare Worker version rollback to the last
  known good version, or by re-running a production deploy from a known good
  commit.
- Roll back code issues by reverting the offending commit on the production
  branch, which triggers a fresh Workers Builds deploy.
- Do not delete/recreate the Supabase project during alpha unless rotating all
  Cloudflare env vars is acceptable.

## Public Interfaces And Config Changes

- No learner-facing route or API shape should change in phase 1.
- Existing server-only env var names remain unchanged.
- Deployment target changes from Node adapter output to Cloudflare Workers Static
  Assets output.
- Public lesson content should be prerendered from Supabase at build time.
- Runtime Worker routes remain responsible for auth, learner projection, learner
  sync, and other personalized behavior.

## Test Plan

- Supabase-first checks: create/link the fresh production project, run
  `pnpm db:lint`, run the confirmed-safe linked reset, verify remote `delivery`
  and `learner` schemas/RPCs exist, and confirm the delivery/auth env values are
  captured before configuring Cloudflare.
- Local checks: `pnpm install`, `pnpm check`, `pnpm check:all`, `pnpm build`.
- Cloudflare local simulation: run the built Cloudflare output through Wrangler
  with `pnpm exec wrangler dev .svelte-kit/cloudflare/_worker.js` and verify both
  static pages and Worker-backed routes.
- Build-output checks: confirm `/learn` and lesson routes are present as
  prerendered/static output where SvelteKit emits them.
- Deployed smoke tests: public lessons, lesson page, practice page, auth OTP,
  progress sync, sign-out, refresh persistence.
- Security checks: no service-role key in Cloudflare, no env values in client
  bundle, auth cookies secure, Supabase Auth redirect URLs limited to alpha
  domains.

## Assumptions

- First deployment target is Cloudflare Workers Static Assets, not Cloudflare
  Pages.
- Deployment is Git-based via Cloudflare Workers Builds from the start; the repo
  already lives on GitHub. There is no manual-Wrangler-deploy bootstrap. Local
  Wrangler simulation plus a non-production preview deploy provide verification
  before the production branch ships.
- First shared URL is a custom domain, with `workers.dev` used for internal smoke
  testing.
- Supabase production project is fresh and can be destructively rebuilt before
  real alpha data exists.
- Cloudflare Worker setup waits until Supabase is linked, reset/migrated, and
  verified because the app build and runtime auth/progress flows depend on that
  Postgres/Auth project.
- Supabase region defaults to Europe West/Ireland if available, because the
  known tester base is expected to be primarily U.S./European.
- Phase 2 will expose the reusable learner sync/projection contract through the
  Supabase RPC / security-definer layer so the parallel mobile app can call it
  with bearer-token auth under RLS, using `@supabase/supabase-js` from the native
  client or a deliberately chosen mobile backend. See "Architectural Principle:
  Keep The Backend Contract Mobile-Ready" above.
