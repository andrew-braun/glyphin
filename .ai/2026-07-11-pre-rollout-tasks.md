# Pre-Rollout Tasks

Transient rollout checklists and implementation plans belong in `.ai/`, not
`docs/`. Durable operational guidance lives in `docs/auth.md`, `docs/db.md`, and
`docs/security-review-checklist.md`.

This is the master checklist for production rollout. Complete every pre-launch
gate before promoting the production deployment.

## Pre-Launch Gates

### Hosted Authentication

- [ ] Mirror `supabase/templates/magic-link.html` in the hosted Supabase email
      template and confirm that a delivered production email matches Glyphin's
      OTP-first copy.
- [ ] Configure custom SMTP with a verified sending domain and complete a real
      inbox delivery test. Do not launch using Supabase's default test mailer.
- [ ] Implement the CAPTCHA-compatible OTP request flow before enabling CAPTCHA
      in hosted Supabase. Completion requires a valid CAPTCHA token to reach
      `signInWithOtp`, an expired/invalid token to fail safely, and the form to
      remain usable when auth is intentionally unconfigured locally.
- [ ] Set the hosted Site URL and redirect allow-list to exact production and
      approved preview URLs; do not use wildcard production redirects.
- [ ] Review OTP initiation, verification, and refresh limits; set OTP expiry to
      3600 seconds or less; keep refresh-token rotation enabled.
- [ ] Test request, verification, expiry, replay, throttling, sign-out, and
      unavailable-provider failure paths against the hosted project.

References: `docs/auth.md`,
`.ai/2026-06-27-cloudflare-alpha-deployment-plan.md`, and
`docs/security-review-checklist.md`.

### Security And Dependency Readiness

- [ ] Complete the
      [security headers implementation plan](./2026-07-11-security-headers.md).
      Verify headers on both prerendered assets and Worker-rendered responses.
- [ ] Complete the
      [dependency refresh plan](./2026-07-11-dependency-refresh-full.md).
      Release evidence must include clean production and development audits, or
      a documented and time-bounded acceptance for every remaining advisory.
      Resume note 2026-07-11: install plus focused lint/type/style checks pass;
      `pnpm build` is blocked by unreachable local delivery API during
      `publication:generate`; audits still report one low `cookie <0.7.0`
      advisory through SvelteKit/Runed paths.

### SEO And Search Readiness

- [ ] Complete
      [Restore SSR for `/` and `/about`](./2026-07-11-restore-ssr-homepage-about.md)
      first. Neither plan below turns on server rendering, so their metadata
      work has no crawler-visible effect on those two routes until this lands.
- [ ] Complete the
      [site-wide SEO foundation plan](./2026-07-11-seo-foundation.md).
- [ ] Complete the
      [search indexing readiness plan](./2026-07-11-search-indexing-readiness.md).
      Webmaster-tool submission may happen immediately after the production
      domain becomes live, but sitemap, robots, canonical, and indexability
      behavior must be ready before deploy.
- [ ] Review [SEO recommendations](../docs/seo-recommendations.md) and schedule
      the P1 items (favicon/manifest, OG image, JSON-LD structured data)
      alongside or shortly after the two plans above. The P2 items (`llms.txt`,
      AI-crawler robots policy, Search Console DNS verification, Core Web Vitals
      monitoring) do not block launch.

### Asset Touch-Up

- [x] Optimize `src/lib/assets/brand/glyphin-logo.svg`. Raw and production-build
      asset size decreased from 661,957 bytes to 649,386 bytes (12,571 bytes,
      1.90%). The generated precompressed asset decreased from 267,892 to
      266,935 bytes with gzip and from 172,751 to 172,192 bytes with Brotli.
      Byte-identical 1516x1516 Chromium renders confirmed the appearance did
      not change; `pnpm check` and `pnpm build` passed after optimization.

## Deployment-Process Verification

These checks belong to the existing Cloudflare deployment workflow rather than
a separate implementation project.

- [ ] Run the full `pnpm build` in the deployment environment with production
      `SUPABASE_DELIVERY_URL` and `SUPABASE_DELIVERY_ANON_KEY` values.
- [ ] Confirm publication generation finds exactly one active publication and
      exports the expected lesson set before SvelteKit builds.
- [ ] Confirm the preview deployment passes the smoke tests in
      `.ai/2026-06-27-cloudflare-alpha-deployment-plan.md` before production
      promotion.

## Post-Launch Follow-Up

- [ ] Complete a human review using `docs/security-review-checklist.md`, record
      hosted Supabase and Cloudflare findings, assign owners to residual risks,
      and schedule the next review.
- [ ] Execute the
      [automated test suites plan](./2026-07-11-automated-test-suites.md)
      in stages, beginning with pure utilities and server input validation.
