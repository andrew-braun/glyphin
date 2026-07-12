# Cloudflare Deployment Runbook

Glyphin deploys to Cloudflare Workers Static Assets with SvelteKit running on
`@sveltejs/adapter-cloudflare`.

## Build Model

- Build command: `pnpm build`
- Production deploy command: `pnpm exec wrangler deploy`
- Non-production deploy command: `pnpm exec wrangler versions upload`
- Worker name: `glyphin` (matches `package.json`'s `name`). Cloudflare Workers
  cannot be renamed after creation — the dashboard's Git-import flow auto-named
  the first Worker `glyphbridge` from the repo folder, which had to be deleted
  and recreated correctly rather than renamed. `wrangler.jsonc`'s `name` field
  must always match whatever the dashboard actually created, or every build
  overrides remote config and Cloudflare tries to open a config-fix PR — pick
  the name deliberately in the dashboard at creation time going forward.
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
```

Do not put service-role keys in Cloudflare.

`NODE_VERSION`/`PNPM_VERSION` dashboard vars are not needed. Workers Builds
reads the committed `.nvmrc` (`24.15.0`) and `package.json`'s
`packageManager`/`devEngines.packageManager` (`pnpm@11.6.0`) and detects the
right versions on its own — confirmed on the `glyphin` Worker's first build
(`Detected the following tools from environment: nodejs@24.15.0,
pnpm@11.6.0`), 2026-07-12. An earlier build against the since-deleted
`glyphbridge` Worker failed to pick these up and needed both vars set
explicitly; that turned out to be specific to that Worker's build
environment, not a general Workers Builds limitation. If a future build
regresses to wrong detected versions, re-add both vars as a fallback before
digging further.

## Runtime Secrets

Set these in the Worker Variables & Secrets section, not in build variables and
not in `wrangler.jsonc`.

```sh
SUPABASE_AUTH_URL=https://<project-ref>.supabase.co
SUPABASE_AUTH_PUBLISHABLE_KEY=<supabase anon or publishable key>
```

The deployed Worker reads these through SvelteKit `$env/dynamic/private`.

Also set this **non-secret** runtime variable (plain text, not the Secret
toggle) in the same Variables & Secrets section — it must be a runtime var,
not a build var, because `/auth` is dynamically rendered per request, not
prerendered:

```sh
PUBLIC_TURNSTILE_SITE_KEY=<Cloudflare Turnstile site key>
```

The `/auth` page reads it through `$env/dynamic/public` to render the
Turnstile widget and gate `signInWithOtp` (OTP request only — not
`verifyOtp`, since Supabase's SDK marks `captchaToken` on `verifyOtp` as
deprecated). The matching Turnstile **secret** key is entered directly into
Supabase's Auth > Bot and Abuse Protection settings — it never touches
Cloudflare or the app's own env vars. Locally, `.env` uses Cloudflare's
published test sitekey `1x00000000000000000000AA` (always passes, visible
widget) since local Supabase has no captcha enforcement configured.

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
