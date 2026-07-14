# Launch Readiness Planning Design

## Purpose

Create one authoritative pre-rollout checklist that distinguishes release gates
from post-launch improvements while linking larger workstreams to focused plans.
The result should make the launch decision easy to audit without duplicating the
existing Cloudflare deployment plan.

## Planning Structure

`.ai/2026-07-11-pre-rollout-tasks.md` remains the master release checklist. It
owns small, concrete rollout tasks directly and links to dedicated planning files
for work that needs its own scope, decisions, implementation sequence, or
verification strategy.

The master checklist will use three explicit sections:

1. **Pre-launch gates** for work that must be completed before the public deploy.
2. **Deployment-process verification** for checks that naturally happen while
   deploying and should not become standalone implementation projects.
3. **Post-launch follow-up** for important work that is intentionally
   non-blocking for the initial release.

Each item will have a clear completion condition and a link to its detailed plan
or existing source document where applicable.

## Pre-Launch Gates

### Authentication readiness

Keep the smaller hosted-authentication tasks together in
`.ai/2026-07-11-pre-rollout-tasks.md`:

- mirror the committed OTP-first email template in hosted Supabase
- configure and verify production custom SMTP delivery
- implement a CAPTCHA-compatible email OTP request flow before enabling hosted
  CAPTCHA protection
- configure exact production site and redirect URLs without wildcards
- review and tune OTP initiation, verification, and refresh rate limits
- verify OTP expiry, refresh-token rotation, and failure-path behavior

These tasks extend the existing authentication-email entry. They should link to
`docs/auth.md` and the Cloudflare deployment plan rather than repeat their
operational instructions.

### Security headers

Create a dedicated implementation plan for a comprehensive response-header
policy. It must cover Content Security Policy, clickjacking protection,
referrer policy, permissions policy, HSTS at the deployed HTTPS boundary,
content-type sniffing protection, and the caching requirements of authenticated
responses.

The plan must account for the inline pre-paint theme script in `src/app.html`,
Cloudflare Workers deployment, prerendered pages, Supabase connections, and
local development. It must include deployed-response verification rather than
considering configuration alone sufficient.

### Dependency currency and vulnerability handling

Create a dedicated implementation plan for updating direct dependencies and
development dependencies to their current compatible releases. The plan must:

- remove packages that are no longer used, including checking whether
  `@sveltejs/adapter-static` can be removed
- update the lockfile through `pnpm`
- run the full validation and production build workflow
- audit production and development dependency graphs
- use package-manager overrides only for unresolved transitive advisories when
  the selected version is compatible and the override is documented
- avoid overrides that merely hide audit output or force an incompatible
  dependency graph
- record any accepted advisory with severity, reachability, mitigation, owner,
  and review date

### SEO planning

Create a dedicated SEO planning file that inventories every user-facing route
and defines its search intent, indexability, unique title, meta description,
canonical URL, primary heading, and social-sharing metadata requirements.

The SEO plan must also define a shared metadata convention so new routes do not
reintroduce inconsistent head markup. It should address the homepage metadata
gap and explicitly classify authenticated, utility, test, and learner-specific
surfaces.

### Search indexing readiness

Create a separate implementation plan for crawler and search-engine readiness.
It must cover:

- production `robots.txt` behavior
- sitemap generation and inclusion rules
- canonical consistency and duplicate-URL prevention
- `noindex` treatment for authentication, test, and non-search surfaces
- correct status codes for missing or invalid lesson routes
- deployed-domain verification in major search webmaster tools
- crawl checks against the production host after launch configuration is live

SEO planning defines page-level intent and metadata; search indexing readiness
implements and verifies crawler discovery and index controls.

### Logo optimization

Keep logo optimization as a small task in
`.ai/2026-07-11-pre-rollout-tasks.md`. The task must measure the current SVG,
remove unnecessary editor metadata or path complexity without changing the brand
appearance, and compare production-build asset size before and after
optimization.

## Deployment-Process Verification

Do not create a separate plan for publication-backed production builds. Link to
the existing Cloudflare deployment plan and treat a successful full `pnpm build`
with production delivery variables and exactly one active publication as a
deployment gate exercised by the deploy pipeline.

The pre-rollout checklist should make the expected evidence visible without
duplicating deployment configuration or build instructions.

## Post-Launch Follow-Up

### Human security review

Move the comprehensive human security review to the post-launch checklist. The
initial release still requires the concrete pre-launch protections in this
design, but the broader documented review of hosted controls, operational risk,
and remaining assumptions will not block the first deploy.

### Automated test suites

Create a dedicated future test-suite plan and link it from the post-launch
section. It must define staged coverage for:

- pure curriculum and mapping utilities
- learner stores and progress reconciliation
- server authentication helpers and API validation
- database/RPC integration behavior
- Svelte component interaction and accessibility
- end-to-end anonymous learning, OTP authentication, progress sync, and
  deployment smoke tests

The plan should recommend a minimal initial toolchain only after evaluating the
current SvelteKit ecosystem and should sequence adoption so each stage produces
useful protection independently.

## Documentation Boundaries

- `.ai/2026-07-11-pre-rollout-tasks.md` is the concise master checklist.
- Temporary rollout plans and launch checklists belong in `.ai/`; `docs/`
  should only keep durable launch policy, contracts, and operational references.
- `docs/auth.md`, `docs/security-review-checklist.md`, and the existing
  Cloudflare deployment plan remain the authoritative operational references.
- `.ai/` continues to hold task-scoped execution tracking; durable launch policy
  and implementation plans remain under `docs/`.

## Completion Criteria

This planning update is complete when:

- every agreed pre-launch and post-launch item appears exactly once in the
  master checklist
- each larger workstream has a focused, actionable planning file linked from
  the master checklist
- the production build is referenced as deployment-process verification rather
  than duplicated as a standalone project
- authentication readiness is clearly launch-blocking
- the human security review and future test suites are clearly post-launch
- no task is left without an objective completion condition
