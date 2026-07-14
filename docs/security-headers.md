# Security header policy

How Glyphin delivers browser security headers, and why it takes two mechanisms
to do it. Implementation lives in `svelte.config.js` (`kit.csp`),
`src/lib/server/security-headers.ts`, `_headers`, and `src/hooks.server.ts`.

## Why two mechanisms

Glyphin serves two classes of response, and no single mechanism reaches both.

| Response class       | Routes                                                                        | Served by                        | Headers come from                                       |
| -------------------- | ----------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------- |
| Prerendered / static | `/`, `/about`, `/learn/**`, `/alphabet`, `/words`, `/practice`, JS/CSS/images | Cloudflare Workers Static Assets | `_headers` (non-CSP) + meta tag (CSP)                   |
| Worker               | `/auth`, `/auth/sign-out`, `/api/**`                                          | The Worker                       | `src/hooks.server.ts` (non-CSP) + response header (CSP) |

Cloudflare serves static assets **directly, without invoking the Worker**, so
`hooks.server.ts` cannot add headers to them. Conversely, Cloudflare's `_headers`
file applies **only to static asset responses**, so it cannot reach Worker
responses. Both are required.

`_headers` must sit in the **project root**, not `static/`.
`@sveltejs/adapter-cloudflare` copies it into the build output itself and
hard-errors if it finds one under `static/`.

### Preventing drift

`_headers` restates the same policy as `src/lib/server/security-headers.ts`
because a plain text file cannot import TypeScript.
`src/lib/server/security-headers.test.ts` parses the real `_headers` file and
asserts the two match exactly, so the duplication cannot silently drift into a
site where half the routes are protected and half are not. Change one, change the
other, or the test fails.

## Content-Security-Policy

CSP is owned by `kit.csp` in `svelte.config.js` with `mode: "auto"`. That mode is
what makes one config work across both response classes:

- **Prerendered pages** get SHA-256 **hashes** for the inline scripts SvelteKit
  injects, delivered in a `<meta http-equiv>` tag — the only option available to
  a static file.
- **Worker-rendered pages** (`/auth`) get a per-request **nonce**, delivered as a
  real `Content-Security-Policy` response header.

### Two constraints that shaped the policy

**A meta-tag CSP cannot express `frame-ancestors`.** The spec forbids it and
SvelteKit's CSP code explicitly skips it when generating meta content. Since
prerendered pages receive their CSP as a meta tag, their clickjacking protection
**cannot** come from `kit.csp`. `X-Frame-Options: DENY` in `_headers` carries it
instead. Do not "fix" this by adding `frame-ancestors` to `kit.csp` and assuming
it applies — it will be silently dropped on every prerendered page.

**`Content-Security-Policy-Report-Only` cannot be delivered in a meta tag
either.** SvelteKit's `CspReportOnlyProvider` has no meta variant, only a header.
A report-only rollout therefore covers `/auth` and nothing else — it is not a
usable rehearsal for this app. Validate against a Cloudflare **preview URL**
instead (`preview_urls: true` is already set in `wrangler.jsonc`).

**No `'unsafe-inline'` in `script-src`.** The one inline script we had — the
pre-paint theme initializer — was moved to `static/theme-init.js` specifically to
avoid it. SvelteKit only hashes the inline scripts **it** generates; it never
scans `src/app.html`, so an inline script there would be blocked. Keep the theme
script external.

`style-src` does allow `'unsafe-inline'`, because Svelte emits inline style
attributes that cannot be hashed. Style injection is not a script-execution
vector, so this is a materially weaker concession than script `'unsafe-inline'`
would be.

### Third-party origins

`https://challenges.cloudflare.com` (Cloudflare Turnstile, on `/auth` only) is
allowed in `script-src` and `frame-src`. This matches Cloudflare's documented
Turnstile CSP requirements. `connect-src` stays `'self'`: Turnstile's network
calls happen inside its own iframe, and Cloudflare only requires
`connect-src 'self'` for pre-clearance mode, which Glyphin does not use.

Supabase is **server-only** (`src/lib/server/**`) — no browser client ships — so
the app makes no cross-origin fetches and `connect-src 'self'` is sufficient. If
a browser-side Supabase client is ever introduced, `connect-src` must be widened
to the Supabase project origin, and that is a security-sensitive change requiring
sign-off.

## Verification

Headers cannot be verified by a build alone; the two response classes must be
exercised separately against the real Worker:

```bash
pnpm build
pnpm exec wrangler dev .svelte-kit/cloudflare/_worker.js --port 8788 --local

curl -sI http://127.0.0.1:8788/       # prerendered static asset
curl -sI http://127.0.0.1:8788/auth   # Worker response (CSP header + nonce)
```

To exercise the Turnstile branch locally, pass Turnstile's official always-passes
test site key, since `PUBLIC_TURNSTILE_SITE_KEY` is read from `.dev.vars` at
runtime (not `.env`, which is build-time only):

```bash
pnpm exec wrangler dev .svelte-kit/cloudflare/_worker.js --local \
  --var PUBLIC_TURNSTILE_SITE_KEY:1x00000000000000000000AA
```

Without it, the sign-in form's Turnstile branch does not render and the CSP's
riskiest path goes untested.
