# Publication Artifact Reset Reliability

## Scope

- Keep prerendered lesson UI backed by generated publication artifacts.
- Make `pnpm db:reset` reliable when Supabase containers are restarted and the API is not immediately ready.

## Decisions

- Preserve `.generated/` as the cache/prerender layer.
- Add retry handling inside `scripts/generate-publication-artifact.mjs` so resets and builds share the same artifact generation behavior.
- Run `supabase start` after `supabase db reset --yes` in `pnpm db:reset` so a
  partially running local stack, such as a stopped Kong/API gateway, is repaired
  before artifact generation.

## Progress

- Added transient fetch retry handling to `scripts/generate-publication-artifact.mjs`.
- Updated `pnpm db:reset` to ensure the local Supabase stack is running before
  refreshing `.generated/`.
- Documented that `pnpm db:reset` regenerates `.generated/` and that the
  generator retries while the local Supabase API warms up.

## Validation

- `pnpm exec prettier --check package.json scripts/generate-publication-artifact.mjs docs/db.md AGENTS.md .github/copilot-instructions.md .ai/2026-06-28-publication-artifact-reset-reliability.md`
- `node --check scripts/generate-publication-artifact.mjs`
- `node -e 'JSON.parse(require("fs").readFileSync("package.json","utf8")); console.log("package.json ok")'`
- `pnpm publication:generate`
- `pnpm check` still fails on the pre-existing missing Node typings issue:
  `Cannot find type definition file for 'node'`.
