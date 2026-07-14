# Production Stage Publication Migration Fix

## Scope

Repair the pending stage-publication migration so it can be applied to the linked
production Supabase project without affecting registered-user auth or learner
progress.

## Diagnosis

The production build failed because `delivery.course_publication_stages` does not
exist remotely. The pending `20260714120000_course_stage_publication.sql` migration
creates it, but its backfill attempts to update the `content_hash` of an already
published `curriculum.course_versions` row. The immutable-version trigger correctly
rejects that update, and PostgreSQL rolls the transaction back.

## Approved Correction

- Remove the forbidden `curriculum.course_versions.content_hash` update from the
  still-unapplied migration.
- Preserve the migration's curriculum-stage and delivery-publication backfill,
  including activation of the new delivery publication.
- Add a regression test asserting that the migration does not update published
  course-version data.
- Reset and validate the local database, then dry-run and apply the single pending
  migration to production.

## Threat Review

- The operation must not run `db reset`, seed production data, or touch `auth` or
  `learner` tables.
- The migration changes only `curriculum` and `delivery` objects needed for the
  stage publication; it keeps the existing RLS policy for public reads.
- The remote migration was verified as unapplied after the failed transaction.

## Progress

- [x] Diagnosed the Cloudflare build failure and confirmed the missing migration.
- [x] Confirmed the failed remote migration rolled back and did not alter learner data.
- [x] Add regression coverage and correct the unapplied migration.
- [x] Validate the corrected migration with the targeted test suite and local schema lint.
- [x] Dry-run and apply the single migration remotely.
- [x] Verify remote migration history and the local delivery-read contract.
- [ ] Push the corrected migration source and verify the Cloudflare production build.

## Remote Result

The linked production migration history now includes
`20260714120000_course_stage_publication`. The original failed run rolled back
completely; the corrected run applied successfully. The local delivery smoke test
continues to pass against its local endpoint. Cloudflare's production endpoint is
verified by the next build, which uses its separately configured build variables.
