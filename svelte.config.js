import { relative, sep } from "node:path";

import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// defaults to rune mode for the project, execept for `node_modules`. Can be removed in svelte 6.
		runes: ({ filename }) => {
			const relativePath = relative(import.meta.dirname, filename);
			const pathSegments = relativePath.toLowerCase().split(sep);
			const isExternalLibrary = pathSegments.includes("node_modules");

			return isExternalLibrary ? undefined : true;
		},
	},
	preprocess: vitePreprocess(),
	kit: {
		// SECURITY: SvelteKit's built-in CSRF protection (`kit.csrf.checkOrigin`,
		// default `true`) is what blocks cross-site POSTs to our JSON endpoints
		// such as `/api/learner/sync`. Do NOT set `csrf: { checkOrigin: false }`.
		// See `docs/auth.md` and the note in
		// `src/routes/api/learner/sync/+server.ts`.

		// SECURITY: Content-Security-Policy.
		//
		// `mode: "auto"` is what makes this work across Glyphin's two response
		// classes: SvelteKit emits SHA-256 hashes for the inline scripts it
		// injects into PRERENDERED pages (delivered in a <meta> tag, the only
		// option for a static file), and per-request nonces for SSR pages like
		// `/auth` (delivered as a real response header).
		//
		// Non-CSP headers, and `frame-ancestors` — which is invalid in a meta tag
		// and so cannot be set here for prerendered pages — live in
		// `src/lib/server/security-headers.ts`, `_headers`, and
		// `src/hooks.server.ts`. See the comments in those files before changing
		// anything here.
		//
		// Do NOT add 'unsafe-inline' to script-src. The one inline script we had
		// (theme init) was deliberately moved to `static/theme-init.js` to avoid
		// it; SvelteKit does not hash scripts written into `src/app.html`.
		csp: {
			mode: "auto",
			directives: {
				"default-src": ["self"],
				// challenges.cloudflare.com: Turnstile widget on /auth.
				"script-src": ["self", "https://challenges.cloudflare.com"],
				// 'unsafe-inline' for styles only: Svelte emits inline style
				// attributes (and app.html has `style="display: contents"`), which
				// cannot be hashed. Style injection is not a script-execution vector,
				// so this is a materially different risk from script 'unsafe-inline'.
				"style-src": ["self", "unsafe-inline"],
				"img-src": ["self", "data:"],
				"font-src": ["self"],
				// Supabase is server-only (src/lib/server/**); no browser client ships,
				// so the app never makes a cross-origin fetch. Keep this at 'self'.
				"connect-src": ["self"],
				// Turnstile renders its challenge in an iframe.
				"frame-src": ["https://challenges.cloudflare.com"],
				"object-src": ["none"],
				"base-uri": ["self"],
				"form-action": ["self"],
			},
		},
		alias: {
			$assets: "src/lib/assets",
			$components: "src/lib/components",
			$data: "src/lib/data",
			$stores: "src/lib/stores",
			$styles: "src/lib/styles",
			$utils: "src/lib/utils",
		},
		typescript: {
			config(config) {
				config.compilerOptions ??= {};
				config.compilerOptions.allowArbitraryExtensions = true;

				return config;
			},
		},
		adapter: adapter(),
	},
};

export default config;
