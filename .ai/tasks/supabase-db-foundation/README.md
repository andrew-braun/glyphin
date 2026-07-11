# Supabase DB Foundation Task Bundle

## Purpose

This directory groups the active and recently completed `.ai` task documents for the Supabase and database foundation work so they are easier to scan as one workstream instead of a flat list of session slices.

## Authoritative Sources

- `implementation-status.md` is the authoritative next-steps and resume-point document for this workstream.
- `foundation-plan.md` is the authoritative architecture and schema-rationale document.
- `auth-sync-strategy.md` is the authoritative plan for the authenticated rollout lane only.
- `../../archive/2026-04-26-thai-content-seeding-plan.md` is the authoritative planning record for the completed Thai content-seeding lane.
- `../../curriculum/thai.md` is the authoritative Thai curriculum progress, coverage, and source-inventory tracker.
- `../../../docs/concept/approach-thai.md` is the authoritative durable Thai concept source for grapheme sequencing, lesson expansion, and coverage targets.

## Recommended Reading Order

- `foundation-plan.md`
  - Strategic architecture and schema direction.
  - Keep this as the broad planning and rationale document.

- `implementation-status.md`
  - Current implementation state, completed foundation outputs, validation status, and concrete next steps.
  - Start here when resuming hands-on work.

- `../../archive/2026-04-26-thai-content-seeding-plan.md`
  - Current Thai content-seeding plan, rewrite status, and implementation sequence.

- `../../curriculum/thai.md`
  - Central Thai curriculum progress, coverage, and next-to-do tracker.

- `database-security-audit.md`
  - Security findings, severity, and recommended remediation for the current DB foundation.
  - Read before exposing the first server-backed learner route or auth flow.

- `auth-sync-strategy.md`
  - Future auth and account-linked progress rollout.
  - Read when starting authenticated sessions, merge flows, or account persistence.

## Consolidation Assessment

### Kept as distinct

- `foundation-plan.md`
  - Completion: high for planning, partial for end-to-end delivery.
  - Reason to keep: contains the durable architectural rationale, schema modeling decisions, and unresolved follow-on questions that should not be collapsed into a short status note.
  - Overlap: medium overlap with `auth-sync-strategy.md` on Supabase posture, but it is still the broader and earlier design document.

- `auth-sync-strategy.md`
  - Completion: partial.
  - Reason to keep: the authenticated rollout has not been implemented yet, and this document still contains distinct merge and account-attachment concerns that are not fully covered elsewhere.
  - Overlap: partial overlap with `foundation-plan.md` on `@supabase/ssr`, local-to-account merge direction, and server-side verification.

- `database-security-audit.md`
  - Completion: high for the audit pass, low for remediation.
  - Reason to keep: it is a distinct security review with severity-ranked findings and should remain separate from architecture planning and implementation status.
  - Overlap: medium overlap with `implementation-status.md` and `auth-sync-strategy.md` on future route/auth posture, but its security findings are materially different in purpose and detail.

### Consolidated into `implementation-status.md`

- `2026-04-25-supabase-sql-schema-foundation.md`
  - Completion: complete for the SQL foundation slice.
  - Redundancy: high overlap with session handoff and next-step notes.

- `2026-04-25-db-reference-doc.md`
  - Completion: complete.
  - Redundancy: medium to high overlap with the same current-state and follow-up notes captured elsewhere.

- `2026-04-25-instruction-files-db-guidance.md`
  - Completion: complete.
  - Redundancy: high overlap on current DB boundary guidance and follow-up maintenance.

- `2026-04-25-database-foundation-session-handoff.md`
  - Completion: complete.
  - Redundancy: very high overlap with the combined current-state and next-step sections of the other 2026-04-25 trackers.

## Durable References Outside `.ai`

- `docs/app-philosophy.md` is the product and pedagogy guardrail.
- `docs/concept/approach-thai.md` is the durable Thai sequencing and expansion concept source.
- `docs/database-dto-spec.md` is the exact schema and DTO contract.
- `docs/db.md` is the operational database reference and inspection guide.

## Current Resume Point

_Updated 2026-07-08 pre-alpha audit — the auth/sync gate below was stale; both are implemented._

- DB hardening and input-bounds remediation are complete.
- The approved Thai curriculum rewrite has landed in `src/lib/data/thai.ts` and is now the seed source of truth, and has since grown from 21 to 46 lessons — see `.ai/2026-06-28-thai-curriculum-completion.md` for current publish status.
- Thai curriculum status and future authoring work live in `.ai/curriculum/thai.md`.
- The learn index and lesson detail routes read the active published lesson bundle through `src/lib/server/delivery-lessons.ts` and server-owned SvelteKit loads.
- The app uses a server-capable SvelteKit adapter (`adapter-node` today; migrating to `adapter-cloudflare` per `.ai/2026-06-27-cloudflare-alpha-deployment-plan.md`) for DB-backed lesson delivery instead of assuming static-only hosting.
- **Auth is implemented**: the request-scoped `@supabase/ssr` boundary described in `auth-sync-strategy.md` is live in `src/hooks.server.ts` (cookie-based session, `safeGetSession`), with `/auth` sign-in and `/auth/sign-out` routes.
- **Learner sync is implemented**: `src/routes/api/learner/projection/+server.ts` and `src/routes/api/learner/sync/+server.ts`, backed by `src/lib/server/learner-projection.ts`.
- Remaining open decision: whether Drizzle lands at all — no urgency while hand-written SQL/migrations stay manageable. Tracked in `.ai/todo.md`.
- Next actual gate for this workstream is the Cloudflare alpha deploy, not further DB foundation work — this bundle is now mostly a historical/architectural reference rather than an active task queue.
