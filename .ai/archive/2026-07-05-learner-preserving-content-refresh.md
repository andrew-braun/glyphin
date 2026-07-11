# Learner-Preserving Content Refresh

## Scope

- Add a new local workflow that refreshes curriculum and publication content
  without discarding learner-facing local state.
- Keep `pnpm db:reset` available for full local state resets, including learner
  and auth data.
- Document the new workflow as the default path for local content updates.

## Context

- `pnpm db:reset` currently runs a full `supabase db reset --yes`, which drops
  and recreates local Supabase state before regenerating `.generated/`.
- Learner state lives in `learner.*` and depends on `auth.users`.
- The Thai seed generator emits stable IDs for course, course version, lessons,
  vocabulary, and publication rows, which makes learner-state restoration
  feasible after a content rebuild.
- Published course versions are intentionally immutable in the database, so a
  learner-safe refresh should preserve user state around a rebuild rather than
  mutating the published version in place.

## Plan

- Inspect the local auth and learner schemas to determine the minimum
  backup-and-restore set.
- Implement a script that snapshots local auth and learner state, refreshes the
  database content, restores user state, and regenerates the publication
  artifact.
- Wire the new script into `package.json`.
- Update `docs/db.md` and any repo guidance that still points developers to
  `pnpm db:reset` as the default content-refresh path.

## Progress

- [x] Confirmed `pnpm db:reset` is a full local rebuild that also drops learner
      state.
- [x] Confirmed the current curriculum seed uses stable IDs.
- [x] Confirmed published course versions are immutable, which rules out a
      simple in-place content update on the current published version.
- [x] Inspected local `auth` and `learner` tables to define backup scope.
- [x] Implement learner-preserving content refresh script.
- [x] Update scripts and docs.
- [x] Validate the new workflow locally.

## Notes

- The local DB currently has zero rows in `auth.users` and `learner.*`, so the
  backup/restore flow should handle the empty-state path cleanly.
- The workflow is intended for local Supabase only, not shared or linked remote
  environments.
- The first backup attempt used `pg_dump`, but the host binary was PostgreSQL 16
  while the local Supabase container was PostgreSQL 17. The final implementation
  switched to a version-independent `psql` JSON snapshot and SQL restore file.
- Validation used a temporary synthetic local learner row in `auth.users`,
  `learner.preferences`, `learner.course_enrollments`, and
  `learner.lesson_progress`, then verified that `pnpm db:content:refresh`
  preserved the restored values before deleting the test row.
