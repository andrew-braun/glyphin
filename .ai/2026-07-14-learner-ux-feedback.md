# Learner Journey And Lesson Clarity

## Status

Implementation and change-scoped verification complete. Production deployment
is pending the required backup and human sign-off.

## Approved Scope

- Replace the returning-learner homepage with a stage journey, progress summary,
  and direct Continue action.
- Collapse curriculum lessons by stage and hide lesson details for locked stages.
- Standardize unscored reading interactions on a one-way, tap-to-reveal card.
- Label invented reading targets as sound practice rather than real Thai words.
- Publish stage metadata through the curriculum database and generated delivery
  artifact.

## Decisions

- Newcomers see the marketing homepage; signed-in learners and anonymous
  learners with local progress see the dashboard.
- The dashboard shows stages, letters, and real words, but no lesson list.
- Stage metadata is additive navigation metadata for the existing course version.
- Production receives a new publication for the same course version so lesson
  IDs and learner progress remain stable.
- Database deployment precedes the application deployment and requires backup
  verification plus human sign-off.

## Progress

- [x] Product design and rollout plan approved.
- [x] Stage model, journey projection, and tests.
- [x] Database schema, seed, migration, and publication artifact.
- [x] Dashboard and curriculum stage journey.
- [x] Shared self-check interaction and sound-practice labels.
- [x] Documentation, local content refresh, and change-scoped verification.
- [ ] Repository-wide `pnpm check:all` formatting gate; it is blocked by 27
      pre-existing files outside this task, including `.kilo/`, `.pnpm-store/`,
      archived planning files, and `supabase/templates/magic-link.html`.

## Verification Notes

- Local content refresh preserved learner/auth state and produced 14 stage
  bundles plus 46 lesson bundles.
- Delivery payload smoke and local database lint passed.
- Tests, ESLint, Stylelint, Svelte diagnostics, touched-file Prettier, and
  touched-file Markdown lint passed.
- The built Cloudflare Worker returned 200 for `/`, `/learn`, and `/learn/1`;
  the dynamic homepage returned `Cache-Control: private, no-store`.
- Production migration execution remains intentionally pending backup
  verification and explicit human sign-off.

## Threat Review

- Curriculum stage rows remain private: runtime roles receive no curriculum
  grants and RLS remains deny-by-default.
- Delivery roles receive read-only stage access, limited by policy to the active
  publication; no client write path or new secret is introduced.
- Publication integrity is transaction-bound and guarded by the expected active
  publication ID, 46-lesson count, and pre-stage course content hash. Drift
  aborts the transaction before activation.
- Learner enrollment, progress, and attempts retain the same course version and
  lesson identifiers; the previous publication remains inactive for rollback.
- Residual deployment risk is the production data state itself. The migration's
  populated-database branch must not run until backup verification, linked
  lint/advisors/dry-run checks, post-migration count queries, and human sign-off.

## Constraints

- Preserve stable lesson IDs, ordering, and learner progress contracts.
- Keep private curriculum data behind the delivery boundary and active-publication
  RLS.
- Do not run destructive production reset commands.
