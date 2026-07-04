# Cloudflare Deployment Plan Review

## Scope

Review `.ai/2026-06-27-cloudflare-alpha-deployment-plan.md` against the current
Glyphin app and current primary documentation for SvelteKit, Cloudflare Workers
Static Assets, Workers Builds, and Supabase Auth.

## Sources Checked

- Cloudflare SvelteKit Workers guide.
- Cloudflare Workers Static Assets documentation.
- Cloudflare Workers Builds configuration, GitHub integration, and build image
  documentation.
- Cloudflare Node.js compatibility and compatibility flag documentation.
- SvelteKit `adapter-cloudflare` documentation.
- Supabase SvelteKit SSR, custom SMTP, redirect URL, and Auth rate-limit
  documentation.

## Findings And Decisions

- The Workers Static Assets + `adapter-cloudflare` direction matches current
  Cloudflare and SvelteKit guidance.
- `nodejs_compat` is appropriate for this app even though SvelteKit's minimal
  adapter example uses `nodejs_als`, because the app uses Supabase packages and
  Cloudflare's Node compatibility docs require a `2024-09-23` or later
  compatibility date for v2 polyfills.
- Workers Builds docs confirm separate build-time variables and runtime
  Variables & Secrets, plus the default production deploy and non-production
  `wrangler versions upload` flow.
- The plan's `@supabase/server` reference was not consistent with the current
  package surface. Mobile/native work should refer to `@supabase/supabase-js`
  with bearer-token/session handling, while the web BFF keeps `@supabase/ssr`.
- The plan needed a more exact Wrangler local simulation command for built
  Workers output.

## Progress

- [x] Reviewed repo deployment/auth shape.
- [x] Researched current primary docs.
- [x] Updated the deployment plan with corrections and clarifications.

## Follow-Up

- When implementation starts, update durable docs and aligned instruction files
  in the same change that actually swaps the deployment target.
