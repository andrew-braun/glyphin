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
