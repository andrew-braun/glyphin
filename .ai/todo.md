# Backlog

Last audited: 2026-07-08 (pre-alpha `.ai` cleanup — see git history for what
moved to `archive/`).

## Alpha-Blocking (Thai-only launch)

- Finish Thai curriculum publish gates: refresh review packet, `pnpm db:reset`,
  `pnpm db:smoke:delivery`, `pnpm curriculum:validate`, `pnpm build`. Tracker:
  `.ai/2026-06-28-thai-curriculum-completion.md`.
- Thai-speaker/corpus-backed content review of L22-46 (tone marks,
  romanization, glosses, register, segmentation, accepted weak-band anchors)
  before final publication. Same tracker.
- Implement the Cloudflare Workers deployment: adapter swap
  (`adapter-node` → `adapter-cloudflare`), `wrangler.jsonc`, production
  Supabase project, Workers Builds Git integration, custom domain, Resend
  SMTP for auth OTP. Plan: `.ai/2026-06-27-cloudflare-alpha-deployment-plan.md`.

## In Progress, Not Launch-Blocking

- Practice vocabulary expansion (`.ai/2026-06-13-practice-vocabulary-expansion.md`):
  the core practice-tier contract (anchor/core/extension, DB role keys,
  10+ core words per lesson) has landed. The planned "Next Phase" — reworking
  `/learn/[id]/practice` into a scored multiple-choice flip-card flow and
  retiring `StepPracticeCheckpoint.svelte` — has not started
  (`StepPracticeCheckpoint.svelte` still exists as of 2026-07-08). Open
  questions in that doc (cross-device sync of failed attempts, extension-set
  placement) are still unresolved.

## Deferred Post-Alpha

- Remove remaining `thaiPack` runtime imports so the DB is the sole source of
  truth for lesson content (`progress.ts`, `LessonList.svelte`,
  `alphabet/+page.svelte`, `practice/+page.svelte`, `published-lessons.ts`).
  Plan: `.ai/2026-04-30-db-single-source-of-truth.md`.
- Service worker / PWA offline support and the IndexedDB migration for
  learner state (only needed once offline writes/sync become a requirement).
  Plan: `.ai/2026-04-30-caching-offline-performance.md`.
- Replace the localStorage-backed learn-card progress overlay with a
  server-backed learner projection once that becomes the primary auth path
  (same plan as above).
- Revise curriculum authoring templates and scoring conventions based on
  pilot-review learnings from the 61-writing-system bootstrap pass
  (`.ai/archive/2026-05-21-bulk-writing-system-bootstraps.md`).
- Multi-course architecture: generalize the Thai-only DTO/route assumptions
  into course-aware seams before adding a second language. See
  `.ai/tasks/curriculum-and-architecture/`. Explicitly out of scope for the
  Thai-only alpha.
- Add a shared route metadata/SEO helper so page-level titles, descriptions,
  and canonical handling stay consistent as routes grow.
- Cloudflare Phase 1 edge-latency work (asymmetric JWT signing keys +
  `getClaims()`, content edge-caching) — fast-follow after the alpha deploy
  lands, not a launch blocker. See Phase 1 in the Cloudflare deployment plan.

## Open Decisions

- Whether to adopt Drizzle now or keep hand-written SQL/migrations. No
  urgency while the schema is still pre-alpha and stable without it.
