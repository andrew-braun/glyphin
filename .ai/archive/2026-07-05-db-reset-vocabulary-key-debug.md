# DB Reset Vocabulary Key Debug

## Scope

- Investigate why `pnpm db:reset` fails during local Supabase seeding.
- Identify the exact `curriculum.vocabulary_items` row violating the key length constraint.
- Determine whether the fix belongs in source curriculum data, seed generation, or database constraints.

## Relevant Context

- Failure occurs after migrations complete and while seeding `supabase/seed.sql`.
- Current error: `new row for relation "vocabulary_items" violates check constraint "vocabulary_items_key_length_check"`.
- Repo instructions require database work to start from `docs/db.md` and `docs/database-dto-spec.md`.

## Progress

- Confirmed the failure happens in `supabase/seed.sql`, not in schema migrations.
- Confirmed `curriculum.vocabulary_items.key` is constrained to `length(key) <= 64`.
- Identified the offending generated row as `กรุงเทพมหานคร`, whose codepoint-derived key was `69` characters long.
- Updated `scripts/generate-thai-seed.mjs` so vocabulary keys stay in the existing readable codepoint format when they fit, and fall back to a shorter deterministic hash-suffixed format when they do not.
- Regenerated `supabase/seed.sql` and confirmed there are no remaining over-limit vocabulary keys.
- Verified `pnpm db:reset` completes successfully end to end after the seed update.
- Observed a separate local-environment issue during debugging: the Supabase Kong container had been stopped before the reset run, which caused publication export fetch failures until the local Supabase stack was fully restarted.

## Decisions

- Keep the database key length constraint unchanged at `64`.
- Fix the generator rather than weakening the schema constraint, because the content itself is legitimate and the overflow came from an overly verbose internal key format.

## Follow-Up

- If `pnpm db:reset` fails with `fetch failed` after the database work succeeds, inspect local Supabase service health; a partial local stack can leave the API gateway down even when Postgres is healthy.
- `pnpm check` currently fails for an unrelated existing issue: missing Node type definitions referenced by `tsconfig.json`.
