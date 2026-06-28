# Cloudflare Workers Alpha Deployment Plan

## Summary

Deploy Glyphin as a Cloudflare Workers Static Assets app backed by a fresh
production Supabase project. Use Workers as the long-term Cloudflare target
instead of Cloudflare Pages, while still keeping Git-based deployment as the
steady-state workflow after the first manual deploy is proven.

The deployment model is:

- Public, stable curriculum pages are built from Supabase at deploy time and
  prerendered into static assets.
- Personalized/session-aware routes run in the Cloudflare Worker.
- Supabase remains the source of truth for curriculum, auth, and learner state.
- The deployed Worker must not depend on runtime Node filesystem access.

Reference docs:

- [Cloudflare SvelteKit Workers guide](https://developers.cloudflare.com/workers/framework-guides/web-apps/sveltekit/)
- [Cloudflare Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/)
- [SvelteKit Cloudflare adapter](https://svelte.dev/docs/kit/adapter-cloudflare)
- [Supabase SvelteKit auth](https://supabase.com/docs/guides/auth/server-side/sveltekit)

## Implementation Steps

### 1. Prepare A Deployment Branch And Tracker

- Work on `deploy/cloudflare-alpha`.
- Continue updating `.ai/2026-06-27-deployment-platform-research.md`.
- Treat Supabase project creation, auth, env vars, DNS, and production deploy as
  security-sensitive sign-off gates.
- Use Workers Static Assets as the deployment target; do not create a Cloudflare
  Pages project for this alpha.

### 2. Make The SvelteKit App Worker-Compatible

- Replace `@sveltejs/adapter-node` with `@sveltejs/adapter-cloudflare`.
- Remove unused `@sveltejs/adapter-static` if still unused after the adapter
  swap.
- Add `wrangler` as a dev dependency.
- Update `svelte.config.js` to import and use the Cloudflare adapter.
- Add `wrangler.jsonc` for Workers Static Assets:
  - `name`: the alpha Worker name, for example `glyphin-alpha`.
  - `main`: `.svelte-kit/cloudflare/_worker.js`.
  - `assets.directory`: `.svelte-kit/cloudflare`.
  - `compatibility_date`: the implementation date.
  - `compatibility_flags`: start with `["nodejs_als"]`; broaden to
    `["nodejs_compat"]` only if local Worker testing proves a dependency needs
    it.
- Keep `vite.config.ts` unchanged unless Wrangler/SvelteKit integration requires
  an explicit adjustment during implementation.

### 3. Preserve Build-Time Supabase Reads And Prerendering

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

### 4. Remove Runtime Filesystem Dependence From The Worker

- Audit `src/lib/server/published-lessons.ts` and related publication paths.
- Ensure any `.generated` lesson artifacts are consumed during build/prerender,
  not opened from the deployed Worker at request time.
- If publication artifacts stay in the repo build flow, make them bundler-safe
  build inputs or direct prerender inputs.
- Runtime Worker code should fall back to Supabase only for routes that are not
  prerendered or are genuinely dynamic.
- Runtime auth/progress routes remain Worker-backed:
  - `/auth`
  - `/auth/sign-out`
  - `/api/learner/projection`
  - `/api/learner/sync`

### 5. Update Durable Docs And Instructions

- Update `AGENTS.md` and `.github/copilot-instructions.md` to say the deployment
  target is Cloudflare Workers Static Assets with a server-capable SvelteKit
  runtime.
- Update `docs/auth.md` to replace stale `adapter-node` wording with Cloudflare
  Workers/SvelteKit server runtime wording.
- Add a short `docs/deployment-cloudflare.md` runbook covering:
  - Worker build settings
  - required build env vars and runtime secrets
  - manual Wrangler deploy
  - Workers Builds/Git deployment
  - custom domain setup
  - rollback
  - smoke tests

### 6. Create The Production Supabase Project

- Create a fresh Supabase project for alpha.
- Default region: Southeast Asia/Singapore, because the product is Thai-focused
  and the local environment timezone is Bangkok.
- Capture project ref, API URL, and publishable/anon key.
- Link locally with `pnpm exec supabase link --project-ref <ref>`.
- For this fresh alpha only, run `pnpm exec supabase db reset --linked` after
  explicit confirmation that the remote project has no real user data.
- After real alpha users exist, stop using remote reset and switch to
  migration-only `pnpm exec supabase db push`.

### 7. Configure Worker Build And Runtime Secrets

- Configure local `.env` for build-time Supabase delivery reads.
- Configure Cloudflare Worker build env vars for publication/prerender:
  - `SUPABASE_DELIVERY_URL`
  - `SUPABASE_DELIVERY_ANON_KEY`
- Configure Worker runtime secrets for auth and learner state:
  - `SUPABASE_DELIVERY_URL`
  - `SUPABASE_DELIVERY_ANON_KEY`
  - `SUPABASE_AUTH_URL`
  - `SUPABASE_AUTH_PUBLISHABLE_KEY`
- Never use or store a Supabase service-role key in Cloudflare for this alpha.
- Set build/runtime versions where supported:
  - `NODE_VERSION=24.15.0`
  - `PNPM_VERSION=11.6.0`

### 8. Build And Deploy Manually First

- Run local validation:
  - `pnpm install`
  - `pnpm check`
  - `pnpm check:all`
  - `pnpm build`
- Run a local Worker smoke test with Wrangler after a successful build.
- Deploy manually first with Wrangler so the Worker config, assets, prerendered
  pages, and runtime routes are proven before Git automation.
- Verify deployment on the `workers.dev` URL first, even if the first shared URL
  will be the custom domain.

### 9. Attach The Custom Domain

- Add the custom domain to the Worker route/domain configuration.
- If the domain is not already on Cloudflare DNS, add the zone or configure the
  required DNS record.
- Wait for SSL provisioning to complete.
- Configure Supabase Auth URL settings:
  - Site URL: the custom domain.
  - Redirect allow list: the custom domain and the `workers.dev` preview/test
    domain if auth testing there is needed.
- Confirm email OTP templates still send the six-digit code flow expected by the
  current `/auth` page.

### 10. Add Git-Based Worker Deployment

- After manual deploy and smoke tests pass, enable Workers Builds/Git deployment
  or a GitHub Actions workflow.
- Preferred steady-state path: Cloudflare Workers Git integration if it supports
  the needed build env and secret model cleanly.
- Fallback steady-state path: GitHub Actions running `pnpm install`,
  `pnpm check`, `pnpm build`, and `pnpm exec wrangler deploy`.
- Protect production deploys behind the main branch or an explicit release
  branch.
- Keep preview/manual deploys available for infrastructure validation.

### 11. Deploy And Smoke Test

- Verify deployment logs for:
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
- Keep the initial manual deploy command and Worker version available as the
  rollback reference.
- Roll back Worker issues using Cloudflare Worker version rollback or by
  redeploying the last known good build.
- Roll back code issues by reverting the Cloudflare adapter/config commit.
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

- Local checks: `pnpm install`, `pnpm check`, `pnpm check:all`, `pnpm build`.
- Cloudflare local simulation: run the built Cloudflare output through Wrangler
  and verify both static pages and Worker-backed routes.
- Database checks: `pnpm db:lint`, then verify remote `delivery` and `learner`
  schemas exist after the linked reset.
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
- First operational deploy is manual Wrangler deploy; Git automation follows
  after the Worker is proven.
- First shared URL is a custom domain, with `workers.dev` used for internal smoke
  testing.
- Supabase production project is fresh and can be destructively rebuilt before
  real alpha data exists.
- Supabase region defaults to Southeast Asia/Singapore unless the known tester
  base is mostly elsewhere.
- Phase 2 will move reusable learner sync/projection backend contracts toward
  Supabase RPC or Edge Functions for mobile compatibility.
