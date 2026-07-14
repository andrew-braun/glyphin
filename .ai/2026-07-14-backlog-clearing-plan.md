# Master Backlog-Clearing Plan

- Start date: 2026-07-14
- Owner: unassigned
- Status: planning
- Source: `.ai` directory audit (2026-07-14), verified against the codebase and
  a live `pnpm audit`, not against tracker self-reporting.

## Why this exists

`.ai` accumulated 11 root-level plans written across three months of pre-launch
work. The audit found that **the launch happened out from under the trackers**:
the app is live at `glyphin.app` on Cloudflare Workers, but
`.ai/2026-07-11-pre-rollout-tasks.md` still lists its gates as unchecked, and
several of those gates never landed. Meanwhile four plans are fully done and
three trackers assert things that are no longer true.

This plan is the single ordered queue for what is genuinely left. It replaces
`.ai/todo.md` as the working backlog; `todo.md` now points here.

## The headline finding

**Three pre-launch gates were never completed, and the site shipped anyway.**
They are not theoretical — they are live gaps on a public domain:

1. **No security headers at all.** No CSP in `svelte.config.js`, no header
   handling in `wrangler.jsonc` or `src/hooks.server.ts`. The plan for this
   (`.ai/2026-07-11-security-headers.md`) is 0/23 steps done.
2. **`static/robots.txt` is a permissive stub** — `Disallow:` with nothing after
   it, i.e. _allow crawling everything_. That includes `/test/**` and `/auth`,
   which `docs/seo.md` contractually marks `noindex`. Crawlers can index the dev
   component previews and the auth page today.
3. **`PageMetadata.svelte` is wired into zero routes.** The helper, its types,
   and its tests are all built and committed (`51303a2`), but
   `grep -rln PageMetadata src/routes/` returns nothing. Live pages ship no
   canonical, no `og:*`, no per-route description. There is also no sitemap route.

None of these block the app _working_, which is why they slipped. They do mean
the SEO and security contracts written in `docs/` are currently fiction.

## Verified state of every existing plan

Checked against source, not against what each tracker claims about itself.

| Plan                                          | Tracker says          | Actually                                                                                   | Disposition                          |
| --------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------ |
| `2026-07-11-server-first-rendering-migration` | implemented           | **Done.** Root `+layout.ts` is `prerender = true`, no `ssr = false` (`da14fe2`).           | Archive                              |
| `2026-07-11-restore-ssr-homepage-about`       | superseded            | **Done** — absorbed by the migration above.                                                | Archive                              |
| `2026-06-27-cloudflare-alpha-deployment-plan` | steps 1–11 done       | **Done.** adapter-cloudflare, `wrangler.jsonc`, live on `glyphin.app`, Turnstile shipped.  | Archive (residual → Task 3)          |
| `2026-07-08-alpha-audit-fixes`                | in progress           | **Done.** Last open item (`LearnerHomeHub`) no longer exists — already deleted.            | Archive (residual → Task 6)          |
| `2026-06-28-thai-curriculum-completion`       | publish gates pending | **Gates are actually done** — 46 lessons in the artifact + prod DB. Checkboxes are stale.  | Keep open, correct it (Task 5)       |
| `2026-07-11-db-security-hardening`            | hosted items pending  | Mostly landed via the deploy. Rate-limiter follow-up is **done** (Workers binding exists). | Keep open, correct it (Task 3)       |
| `2026-07-11-dependency-refresh-framework-ui`  | "one low advisory"    | **Wrong.** 1 low + **3 high** (all `pnpm` itself).                                         | Keep open (Task 2)                   |
| `2026-07-11-pre-rollout-tasks`                | pre-launch checklist  | Overtaken by the actual launch; half its gates silently shipped, half never did.           | Rewrite as post-launch (Task 7)      |
| `2026-06-13-practice-vocabulary-expansion`    | in progress           | Core contract landed. "Next phase" not started — and now **conflicts** with a newer plan.  | Keep open, needs a decision (Task 4) |
| `2026-04-30-db-single-source-of-truth`        | not started           | **Accurate.** 4 runtime files still import `thaiPack`.                                     | Keep open (Task 6)                   |
| `2026-04-30-caching-offline-performance`      | partial, deferred     | **Accurate.** Static/dynamic split shipped; PWA/IndexedDB deferred.                        | Keep open, deferred                  |

## Two structural problems

### ~~`docs/superpowers/plans/` is task-scoped work living in `docs/`~~ — RESOLVED 2026-07-14

Six implementation plans and two design specs sat in `docs/superpowers/`, which
violated `AGENTS.md` ("Use `.ai/` for task-scoped specs, temporary rollout
plans... Use `docs/` for durable project documents") and contradicted the literal
first sentence of `.ai/2026-07-11-pre-rollout-tasks.md`.

All eight have been moved to `.ai/` and `docs/superpowers/` is deleted.
`docs/superpowers/plans/2026-07-11-dependency-refresh.md` was renamed to
`.ai/2026-07-11-dependency-refresh-full.md` to disambiguate it from the existing
`.ai/2026-07-11-dependency-refresh-framework-ui.md` (the narrower slice that was
partially executed). Inbound links in `docs/seo-recommendations.md` and the
pre-rollout tracker are updated.

The rule is now written into `AGENTS.md` so this cannot recur — see "Durable
Documentation".

**Still outstanding from this cleanup:** their checkbox state is unreliable in
both directions and has not yet been re-derived from source. `seo-foundation.md`
reads 0/20 done, yet the metadata helper it specifies is fully built and
committed — it was simply never adopted by any route. Fix each plan's checkboxes
as you pick it up, not speculatively.

### `pnpm` is pinned to a version with three high advisories

`AGENTS.md` and the dependency tracker both pin pnpm `11.6.0` as a guardrail.
That exact version carries three high-severity advisories (path traversal,
lockfile alias escape, `patch-remove` deleting files outside the patches dir),
all fixed in `>=11.8.0`. The guardrail now _enforces_ the vulnerability. It is a
toolchain risk, not a shipped-runtime one, but the pin has to move and `AGENTS.md`
has to move with it.

---

## The queue

Ordered by "live public exposure" first, then correctness, then deferred work.

### Task 0 — Consolidate the plan directories — **DONE 2026-07-14**

- [x] Moved all six plans and both design specs out of `docs/superpowers/` into
      `.ai/`; deleted `docs/superpowers/`.
- [x] Renamed the full dependency plan to `2026-07-11-dependency-refresh-full.md`
      so it no longer collides conceptually with the partially-executed
      `2026-07-11-dependency-refresh-framework-ui.md`.
- [x] Updated inbound links in `docs/seo-recommendations.md` (which also still
      pointed at the now-archived server-first migration plan) and
      `.ai/2026-07-11-pre-rollout-tasks.md`.
- [x] Wrote the rule into `AGENTS.md` → "Durable Documentation" so planning docs
      can never land in `docs/` again, and mirrored it to the Copilot instruction
      files.
- [ ] Re-derive each moved plan's checkboxes from source when you pick it up.
      They are unreliable in both directions today (see above).

### Task 1 — Close the three live gaps (highest priority)

The site is public. These are the only items on this list with real-world
exposure today.

- [x] **1.1 `robots.txt`** — **DONE 2026-07-14.** Was a `Disallow:` stub allowing
      everything. Now disallows `/api/`, `/auth`, `/test/`, `/alphabet`, `/words`,
      `/practice`, `/learn/*/practice` per `docs/search-indexing.md`. The
      `Sitemap:` directive is deliberately omitted until `/sitemap.xml` exists —
      advertising a sitemap that 404s is worse than advertising none. Add it in
      the same change as 1.3.

- [x] **1.2 Security headers** — **BUILT AND LOCALLY VERIFIED 2026-07-14; NOT YET
      DEPLOYED.** Full write-up in `docs/security-headers.md`; tracker at
      `.ai/2026-07-11-security-headers.md`. - CSP via `kit.csp` `mode: "auto"` — SHA hashes in a meta tag for
      prerendered pages, per-request nonce header for `/auth`. - `_headers` (project root) for static assets + `hooks.server.ts` for Worker
      responses, since neither mechanism reaches both classes. A test parses the
      real `_headers` file and asserts it matches the TS record, so they cannot
      drift. - Theme script moved to `static/theme-init.js` so `script-src` needs no
      `'unsafe-inline'`. - Verified against the real built Worker (`wrangler dev`): both response
      classes carry every header; `/auth` gets a nonce'd CSP; the Turnstile
      branch renders and is allowed by `script-src`/`frame-src` (matches
      Cloudflare's documented Turnstile CSP requirements). - **Remaining: deploy verification.** Report-Only turned out to be
      unusable here (it cannot be delivered in a meta tag, so it would cover
      only `/auth`). Substitute: ship to a Cloudflare **preview URL**
      (`preview_urls: true` is already on), confirm headers plus a real
      Turnstile sign-in there, then promote to `glyphin.app`.

- [ ] **1.3 Adopt `PageMetadata` in routes + add a sitemap** — the seo-foundation
      and search-indexing plans, minus the helper work that is already done.
      Derive the sitemap from the same published-lesson artifact the app reads,
      and add the `Sitemap:` line to `robots.txt` in the same change.

### Task 2 — Unpin pnpm, clear the audit gate — **DONE 2026-07-14**

- [x] Bumped pnpm `11.6.0` → `11.8.0` in `packageManager` and
      `devEngines.packageManager`. Both audits went from **4 findings (3 high) to
      1 low**. Lockfile diff is confined to pnpm's own binary entries — no
      application dependency moved. `pnpm check` (939 files, 0/0) and `pnpm lint`
      clean.
- [x] Accepted the residual low `cookie <0.7.0` (`GHSA-pxg6-pf52-xh8x`) with a
      time-bounded record in `docs/dependency-maintenance.md` (owner Andri, review
      2026-10-14, removal trigger = any SvelteKit release admitting
      `cookie >=0.7.0`). No upstream fix exists — the latest SvelteKit `2.69.3`
      still declares `cookie: ^0.6.0`. An override was rejected: it would force a
      version outside SvelteKit's declared range in the library that handles
      Supabase auth session cookies on a live site, and the advisory is
      **unreachable here** (it needs attacker-influenced cookie name/path/domain;
      ours come from Supabase SSR with a hardcoded `path: "/"` and no domain).
- [x] Corrected the stale audit claim in
      `.ai/2026-07-11-dependency-refresh-framework-ui.md`; that gate is now closed.

**Next deploy:** Cloudflare Workers Builds reads `packageManager`, so the
production build toolchain changed. Confirm it resolves `pnpm@11.8.0`.

### Task 3 — Finish the hosted-security tail

From `.ai/2026-07-11-db-security-hardening.md`, with the tracker corrected first:

- **Already done, mark them so:** OTP expiry mirrored, Resend SMTP, hosted rate
  limits, Turnstile (shipped despite being logged as "deferred post-launch"), and
  the Workers rate-limiter swap (`wrangler.jsonc` has the
  `LEARNER_SYNC_RATE_LIMITER` binding; `rate-limit.ts` uses it with an in-memory
  local fallback).
- **Genuinely open:** enforce SSL on the hosted DB; adopt the publishable/secret
  API-key model and disable the legacy JWT keys; verify the publication
  generator's write path is privileged and server-only (audit #14); decide
  whether to drop `graphql_public` from `api.schemas` (audit #12, low).
- **Residual from the Cloudflare plan:** the authenticated smoke checks (real OTP
  sign-in through Turnstile, lesson-completion sync persistence, sign-out, cookie
  attributes). These need a human — a live captcha and a real inbox. Andri runs
  these; they are the last thing standing between "deployed" and "verified."

### Task 4 — Practice flow: two-column answer grid — **DECIDED 2026-07-14**

Two plans wanted opposite things. **Andri's decision: keep
`StepPracticeCheckpoint.svelte` and give it the two-column answer grid.**

- ✅ **Adopt** `.ai/2026-07-11-practice-answer-grid.md` — configure
  `StepPracticeCheckpoint` through the `columns` prop that `RadioButtons` already
  supports, so the four scored-practice answers lay out in two columns on desktop
  and collapse to one on mobile. Five steps, no shared-component API change.
- ❌ **Drop** the "Next Phase" of
  `.ai/2026-06-13-practice-vocabulary-expansion.md` — the scored multiple-choice
  flip-card rebuild that would have retired `StepPracticeCheckpoint`. Its core
  practice-tier contract (anchor/core/extension, DB role keys, 10+ core words per
  lesson) already shipped and stands; only the flow rework is dropped. Its two
  open questions (cross-device sync of failed attempts, extension-set placement)
  become moot for now and can be reopened on their own merits if they resurface.

This is the cheapest item in the queue that produces visible product improvement,
so it is a good one to slot in whenever the security work is blocked on sign-off.

### Task 5 — Thai curriculum: correct the tracker, then finish the review gate

The publish gates in `.ai/2026-06-28-thai-curriculum-completion.md` are listed as
unchecked but the evidence says they ran: `.generated` holds all 46 lessons
(regenerated 2026-07-12) and the production DB verified 46 lessons / 418
vocabulary items. Tick them, then finish what is actually left:

- Refresh the review packet (`pnpm curriculum:review … --force`).
- **Thai-speaker or corpus-backed review of L22–46** — tone marks, romanization,
  glosses, register, segmentation, and the 8 accepted weak-band anchors. This is
  the real remaining gate and it needs a human reviewer.
- Retire the stale `approach-thai.md` references in the runtime/DB docs.

### Task 6 — Retire `thaiPack` from the client bundle

`.ai/2026-04-30-db-single-source-of-truth.md` is accurate and unstarted: four
runtime paths still import the static bundle (`progress.ts`,
`LessonList.svelte`, `alphabet/+page.svelte`, `practice/+page.svelte`), plus
`published-lessons.ts` and one test route.

Fold in the bundle-slimming analysis from `.ai/2026-07-08-alpha-audit-fixes.md`
(Tier 2 #5) — it is the same problem seen from the performance side: `progress.ts`
pulls the full ~570 KB `thaiPack` into every page via `MainNav`. That doc's
recommendation (measure first, then split the data module) should be merged into
the single-source-of-truth plan rather than tracked separately.

Also still open from that audit: the shared route metadata/SEO helper is now
built, so that `todo.md` line can be retired once Task 1 wires it up.

### Task 7 — Rewrite the pre-rollout tracker as a post-launch checklist

`.ai/2026-07-11-pre-rollout-tasks.md` is a pre-launch document for a site that
already launched. Rewrite it to reflect reality: which gates shipped, which
shipped _without_ their gate (Task 1), and what post-launch verification remains
(the security-review-checklist pass, the automated test suites).

### Deferred — no action, keep the plans

- `.ai/2026-04-30-caching-offline-performance.md` — service worker / PWA and the
  IndexedDB migration. Only needed once offline _writes_ become a requirement.
- Multi-course architecture (`.ai/tasks/curriculum-and-architecture/`) — out of
  scope until a second language ships.
- Curriculum authoring template revisions from the 61-system bootstrap pass.
- Automated test suites — real work, but it is post-launch hardening, not a gap.
- Drizzle-vs-hand-written-SQL — still no urgency.

## Order

- [x] **Task 0** — plan-directory consolidation + the `AGENTS.md` hard rule. Done 2026-07-14.
- [x] **Task 4 decision** — two-column answer grid, keep `StepPracticeCheckpoint`. Decided 2026-07-14.
- [x] **Task 1.1** — `robots.txt`. Done 2026-07-14.
- [x] **Task 2** — pnpm `11.8.0`; 3 highs cleared, residual low accepted. Done 2026-07-14.
- [x] **Task 1.2** — security headers. **Verified live on production 2026-07-14.**
      `curl` against `glyphin.app` confirms all seven headers on both response
      classes, a nonce'd CSP header on `/auth`, and a hashed `<meta>` CSP on `/`.
      Deploy verification is closed.
- [x] **Task 4 implementation** — two-column answer grid shipped in `fbc3946`.
      `RadioButtons` already supported `columns={2}` with a `$bp-sm` collapse, so
      it was a one-line reconfiguration of `StepPracticeCheckpoint`.
- [x] **Task 7** — pre-rollout tracker rewritten as a post-launch tracker
      (`2026-07-11-pre-rollout-tasks.md`). Done 2026-07-14.
- [ ] **Task 1.3** — route metadata adoption + sitemap. **Unblocked but not
      started** (paused 2026-07-14, see below). Two prerequisites were discovered:
      `SITE_ORIGIN` was set nowhere and `validateProductionOrigin()` throws
      without it, so adopting the helper in prerendered routes fails the build —
      now set to `https://glyphin.app` in gitignored `.env` / `.dev.vars`, still
      needs a `wrangler.jsonc` `vars` entry and a Cloudflare Workers Builds
      build-time variable. And `docs/seo.md` mandates an OG image that does not
      exist; ship without `og:image` until it is designed.
- [ ] **Task 3** — hosted security tail (SSL enforcement, API-key migration,
      publication write path, `graphql_public`) + Andri's authenticated smoke
      checks. The security-header and pnpm deploy verification folded in here is
      **done** — headers confirmed live.
- [ ] **Task 5** — Thai native-speaker review. Needs a human; start sourcing a
      reviewer in parallel rather than last.
- [ ] **Task 6** — `thaiPack` cleanup. **Blocked**, see below.
- [ ] **NEW: robots.txt drift.** Cloudflare's Managed robots.txt feature prepends
      its own block to the live file, adding a second `User-agent: *` group with
      `Allow: /`. Compliant crawlers merge same-token groups so Google still
      honors our `Disallow:` rules, but production no longer matches the exact
      content specified in `docs/search-indexing.md`. Decide whether to disable
      the managed feature or reconcile the contract doc. Resolve before adding the
      `Sitemap:` line in Task 1.3.

## Concurrency hazard (2026-07-14)

A second session is actively implementing the learner-journey UX work
(`.ai/2026-07-14-learner-ux-feedback.md`) and its changes are **uncommitted**.
Files moved under me mid-read. Contested surfaces:

- `src/lib/stores/progress.ts`, `src/lib/data/thai.ts`, `types.ts`,
  `course-journey.ts`, `src/lib/server/published-lessons.ts`,
  `delivery-lessons.ts`, `delivery-payload.ts`, `src/routes/learn/+page.server.ts`,
  `scripts/generate-thai-seed.mjs`, `generate-publication-artifact.mjs`, and a new
  migration.

**Task 6 is blocked head-on:** it wants `thaiPack` _removed_ from the client
runtime, while the in-flight work is adding new `thaiPack` call sites to
`progress.ts` and `published-lessons.ts`. Do not attempt it until that work
commits. It should also get _easier_ afterwards — that work publishes stage
metadata through the delivery artifact, which is the mechanism Task 6 needs.

**Task 1.3 is partially contested:** new `+page.server.ts` files for `/about`,
`/alphabet`, `/words`, `/practice` are clean, but `/learn/+page.server.ts`,
`/+page.svelte`, and `/learn/+page.svelte` are being rewritten right now.

## Open questions

- ~~Task 4's product decision~~ — **resolved 2026-07-14**: two-column answer grid,
  shipped.
- ~~Task 1.2 deploy verification~~ — **resolved 2026-07-14**: confirmed live.
- Task 5's native-speaker review needs a reviewer identified; it has no owner today.
- The OG image (`/og/glyphin-reading-thai.png`, 1200x630) has no owner and blocks
  full social metadata.
- Whether to keep Cloudflare's Managed robots.txt (see the drift item above).
