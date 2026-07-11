# DB Security Hardening (Supabase / RLS audit follow-up)

- Start date: 2026-07-11
- Owner: Claude + Andri
- Status: in-progress
- Source: targeted RLS/database security audit (2026-07-11)

## Goal

Take the database security posture from "already strong" to "over-the-top
compliant" by closing the remaining defense-in-depth and hosted-config gaps
found in the 2026-07-11 audit. No critical/high RLS holes were found; this is
polish + production config, not remediation.

## Audit verdict (context)

The core model is correct and layered and needs no rework:

- 4-schema isolation; `curriculum` + `internal_api` are unreachable 3 ways
  (not in `api.schemas`, grants revoked, RLS-on with zero policies = deny-all).
- `learner.*` has **no** direct grants to `anon`/`authenticated` at all
  (`20260505…`); access is only via 3 hardened `SECURITY DEFINER` RPCs that
  derive the user from `auth.uid()` and reject non-owned enrollments/devices.
- Every definer fn: `search_path = ''`, fully-qualified, execute revoked from
  public/anon. Composite FKs `(enrollment_id, user_id)` / `(course_id,
course_version_id)` block cross-tenant row stitching.
- No browser Supabase client ships; even the anon/publishable key is server-only.
- Auth boundary uses `getUser()` (not `getSession()`), httpOnly + prod-secure
  cookies, redirect allow-list, email-OTP only, anonymous sign-in disabled.

## Scope

- In scope: the hardening items below (DB migration, one config change already
  done, docs updates, hosted-rollout checklist items).
- Out of scope: any redesign of the schema/RLS/definer-function model (it's
  correct); Turnstile wiring (deferred post-launch, see below); anything
  requiring the hosted project to exist (tracked as "hosted rollout").

## Decisions

- **Decision: Do NOT enable `FORCE ROW LEVEL SECURITY` on `learner.*` or
  `curriculum.*`.**
  Reason: `FORCE RLS` subjects the table _owner_ to policies, and our
  `SECURITY DEFINER` functions run _as the owner_ to perform writes. Forcing it
  would break `sync_lesson_attempt_batch` (there are intentionally no
  INSERT/UPDATE policies) and block migration/seed writes on `curriculum`. Our
  "deny-by-default via revoked grants" model is stronger than FORCE RLS here.
  (Audit item #11 — documented in code/docs so it never gets "helpfully" added.)

- **Decision: Keep direct-DB network restrictions OFF (allow-all) for now;
  enable SSL enforcement always on hosted.**
  Reason: the Cloudflare-hosted runtime never makes a direct Postgres connection
  (it uses REST/RPC), so IP-restricting direct Postgres protects nothing in prod
  and only inconveniences roaming `psql`/`db push` from Andri's laptop. SSL
  enforcement is a pure win. Revisit network restriction only if a static
  hosting egress range becomes available. (Audit item #4.)

- **Decision: Enforce one active publication _per course version_ at the DB via
  a partial unique index.**
  Reason: closes the "two active publications → every learner read 500s" failure
  as a DB invariant instead of an app-layer check. Note the app currently
  assumes one active publication _globally_ (single course); revisit
  `getActivePublication()` if/when a second course ships. (Audit item #9.)

- **Decision: Adopt the new publishable/secret API-key model at hosted rollout
  and disable legacy JWT `anon`/`service_role` keys after migrating.**
  Reason: opaque, individually-revocable, GitHub-secret-scanning auto-revoke; no
  service_role key is used today so there's nothing to migrate on the secret
  side. (Audit item #6.)

## Work items

### Done

- [x] **MFA on the Supabase org/dashboard account** (audit #1). — Andri, 2026-07-11.
- [x] **Lower email OTP expiry 3600 → 1200s (20 min)** (audit #3). Changed in
      `supabase/config.toml`; hosted dashboard must mirror the value.
- [x] **Phase-3 migration** `20260711120000_security_hardening_phase3.sql`
      (audit #8, #9, #13 + a bonus latent fix). Validated 2026-07-11 via
      `supabase db reset --yes` (full chain applies clean), `db lint`
      (no schema errors), `db advisors` (no issues), `pnpm check` (0/0), and
      manual `pg_policies` / `pg_indexes` / `has_function_privilege` checks.
  - Rewrote all 8 remaining `learner_*` RLS policies to `(select auth.uid())`
    (initPlan caching; defense-in-depth only today since `authenticated` has no
    direct table grants). The `delivery_*` policies were left alone (no
    `auth.uid()`).
  - Added `course_publications_one_active_per_version_uidx`
    (`unique … (course_version_id) where is_active`). Seed had exactly 1 active
    row, so it applied cleanly.
  - Deleted the dead `request.jwt.claim.sub` fallback — it lived in **2**
    functions, not 3: `internal_api.sync_lesson_attempt_batch` and
    `learner.ensure_course_enrollment_for_publication`. (`get_lesson_progress_projection`
    never derived the user directly — it delegates to `ensure_…`.) Both now use
    `v_user_id := auth.uid();`. No auth semantics change.
  - **Bonus / latent fix:** re-asserted
    `revoke all on all functions in schema internal_api from public, anon,
authenticated`. `internal_api.sync_lesson_attempt_batch` had likely regained
    the default `PUBLIC EXECUTE` when it was re-created as a new 3-arg signature
    in phase 1 (after the original schema-wide revoke). It was never reachable
    without `internal_api` schema `USAGE` (which is revoked), so not exploitable,
    but it's now explicitly owner-only. Verified `anon`/`authenticated` execute =
    false on every `internal_api` function; learner wrappers remain
    `authenticated`-only.

### App code

- [x] **Per-user rate limit on `/api/learner/sync`** (audit #10). Added
      `src/lib/server/rate-limit.ts` — an in-memory token-bucket limiter
      (`consumeRateLimitToken(key, { capacity, refillPerSecond }, now?)`) with an
      opportunistic idle-bucket sweep for bounded memory. The sync endpoint keys
      it by `learner-sync:${user.id}` (after auth) at `capacity: 12,
    refillPerSecond: 0.2` (~12/min sustained, burst 12) and returns 429 +
      `Retry-After` when exceeded. Safe by construction: the client batches all
      pending attempts into one POST and, on any non-OK response, keeps them
      queued and retries on the next flush, so a 429 never drops data or causes a
      retry storm. Verified: behavioral test against the real module (burst /
      deny / refill / per-key isolation / hammer-cap all pass) + `pnpm check`
      clean. **Runtime caveat documented in the module:** in-memory state is
      correct for `adapter-node` but must move to a Workers-native store at the
      Cloudflare cutover (see Follow-Up).

### Docs / comments (keep guardrails from silently regressing) — DONE 2026-07-11

- [x] **Definer-function trust boundary + FORCE-RLS decision** (audit #11 +
      structural note). New "RLS And Function Trust Boundary" section in
      `docs/db.md`: the real learner-data control is the in-function `auth.uid()`
      checks + revoked grants, not server-only calls (any valid JWT can call the
      RPCs directly — fine, they self-authorize). Records the **FORCE RLS =
      do-not-enable** decision and why.
- [x] **CSRF note** (audit #15). Guard comment at the exact place it could be
      disabled — `svelte.config.js` (`kit` block) — plus a note at
      `src/routes/api/learner/sync/+server.ts` and a bullet in `docs/auth.md`.
      (`checkOrigin` is default-on; there is no csrf config today, so the guard
      is a comment, not a live setting.) Projection endpoint is GET, so CSRF
      N/A there.
- [x] **Postgres patching + post-deploy advisors** (audit #5). Added to the
      "Remote deployment cautions" in `docs/db.md`: keep Postgres current
      (advisor flags known-CVE versions) and re-run `db advisors --linked` after
      every deploy, treating new findings as release blockers.

### Hosted rollout (do at/after Cloudflare deploy — cross-ref cloudflare plan)

See also `.ai/2026-06-27-cloudflare-alpha-deployment-plan.md`.

- [ ] **Enforce SSL** on the hosted DB (Dashboard → Database → Settings → SSL).
- [ ] **Mirror OTP expiry = 1200s** in the hosted auth settings.
- [ ] **Adopt publishable/secret API keys**; use publishable for delivery+auth
      clients; disable legacy JWT `anon`/`service_role` after cutover (audit #6).
- [ ] **Turnstile CAPTCHA on OTP initiation** (audit #2) — _deferred, post-launch._
      Cloudflare Turnstile fits the hosting. `requestCode` uses
      `shouldCreateUser: true` with no captcha today → email enumeration /
      email-bombing risk. Wire `[auth.captcha]` (provider = turnstile) + client
      token before opening signup broadly.
- [ ] **Tune hosted auth rate limits** + wire real SMTP (built-in email is
      throttled and not for prod) — already noted in `docs/auth.md`.
- [ ] **Leave network restrictions allow-all** per decision above; revisit only
      with a static egress range.

### Flagged for review (not yet a task)

- [ ] **Verify the publication generator's write path** (audit #14). Confirm
      `pnpm publication:generate` writes to `delivery.*` over a privileged
      server-only connection, NOT the anon/publishable key. Runtime reads
      (`delivery-lessons.ts`) correctly use the anon key read-only.
- [ ] **`graphql_public` exposure** (audit #12, low). App is server-only
      REST/RPC; if GraphQL is unused, drop `graphql_public` from `api.schemas`
      to shrink surface. Confirm nothing depends on it first.

## Open Questions

- None blocking. (Second-course scenario for the active-publication invariant is
  captured as a future revisit under Decisions.)

## Follow-Up

- **Cloudflare cutover: replace the in-memory rate limiter's store.**
  `src/lib/server/rate-limit.ts` keeps bucket state in process memory, which is
  correct for `adapter-node` but not for Workers isolates (no shared memory →
  the limit only applies per-isolate and is easily bypassed). Swap the store for
  a Durable Object, Workers KV, or Cloudflare's Rate Limiting binding; keep
  `consumeRateLimitToken`'s signature so `/api/learner/sync` does not change.
  Cross-referenced in `.ai/2026-06-27-cloudflare-alpha-deployment-plan.md`.
- Re-run `docs/security-review-checklist.md` before hosted deploy.
- After the phase-3 migration lands, re-run `supabase db advisors` and confirm no
  new lints.
