# Cloudflare Deployment Runbook

Glyphin deploys to Cloudflare Workers Static Assets with SvelteKit running on
`@sveltejs/adapter-cloudflare`.

## Build Model

- Build command: `pnpm build`
- Production deploy command: `pnpm exec wrangler deploy`
- Non-production deploy command: `pnpm exec wrangler versions upload`
- Worker config: `wrangler.jsonc`
- Worker entry: `.svelte-kit/cloudflare/_worker.js`
- Static assets directory: `.svelte-kit/cloudflare`

Cloudflare Workers Builds owns the Git integration. Use a non-production branch
build first, verify the preview Worker, then merge to the production branch.

## Cloudflare Build Variables

Set these in Workers Builds build settings. They are needed while `pnpm build`
generates the publication artifact and prerenders public lesson routes.

```sh
SUPABASE_DELIVERY_URL=https://<project-ref>.supabase.co
SUPABASE_DELIVERY_ANON_KEY=<supabase anon or publishable key>
PNPM_VERSION=11.6.0
```

Do not put service-role keys in Cloudflare.

Node version is not a build variable: Cloudflare's build image reads the
committed `.nvmrc` automatically, so it stays in sync with `engines.node` in
`package.json` without a dashboard setting to drift out of date.

`PNPM_VERSION` is kept as a dashboard build variable as a documented,
known-working safety net, even though `package.json` also commits the pnpm
version via `packageManager` (read by Corepack) and `devEngines.packageManager`
(read by pnpm's own CLI, pnpm 11+). Cloudflare's build-image docs explicitly
rule out `engines`-based detection but do not confirm or deny honoring
`packageManager`/Corepack, so treat the committed fields as unverified for this
platform until a real Workers Builds run confirms Corepack picks them up on
its own — at which point `PNPM_VERSION` can be dropped from the dashboard.

## Runtime Secrets

Set these in the Worker Variables & Secrets section, not in build variables and
not in `wrangler.jsonc`.

```sh
SUPABASE_AUTH_URL=https://<project-ref>.supabase.co
SUPABASE_AUTH_PUBLISHABLE_KEY=<supabase anon or publishable key>
```

The deployed Worker reads these through SvelteKit `$env/dynamic/private`.

## Local Verification

Use environment variables or local `.env` values that point at the linked
Supabase project before building:

```sh
SUPABASE_DELIVERY_URL=https://<project-ref>.supabase.co \
SUPABASE_DELIVERY_ANON_KEY=<supabase anon or publishable key> \
SUPABASE_AUTH_URL=https://<project-ref>.supabase.co \
SUPABASE_AUTH_PUBLISHABLE_KEY=<supabase anon or publishable key> \
pnpm build
```

Then simulate the Worker locally:

```sh
pnpm exec wrangler dev .svelte-kit/cloudflare/_worker.js
```

Check public prerendered routes and Worker-backed routes before pushing:

- `/`
- `/learn`
- `/learn/1`
- `/learn/1/practice`
- `/api/learner/projection`

## Custom Domain And Auth

After the Worker preview passes:

- Attach the custom domain to the Worker.
- Set the Supabase Auth Site URL to the custom domain.
- Add exact redirect URLs for the custom domain and any preview URL used for
  auth testing.
- Configure production SMTP before inviting external alpha testers.

Avoid wildcard redirect allow-list entries for alpha.

## Rollback

- Record the Worker version after every successful production deploy.
- Roll back Worker runtime issues with Cloudflare Worker version rollback.
- Roll back code issues by reverting the production branch commit and letting
  Workers Builds deploy the revert.
- Do not delete or recreate the Supabase project after alpha users exist unless
  rotating all app environment values is acceptable.
