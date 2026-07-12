// Server-first default: every route prerenders to static HTML (or server-renders
// live where a child route sets `prerender = false`). SSR is on by default —
// routes that need per-request behavior opt out explicitly (e.g. `/auth`,
// `/api/**`). Do not reintroduce `ssr = false` here: it turns the whole app back
// into an SPA that ships an empty shell to crawlers. See
// `.ai/2026-07-11-server-first-rendering-migration.md`.
export const prerender = true;
