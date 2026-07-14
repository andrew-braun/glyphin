// Apply the saved theme before first paint so light-mode users never see a
// flash of the dark default. Loaded as a blocking classic script from the
// document head, so it still runs pre-paint.
//
// This lives in a file rather than inline in `src/app.html` because the
// Content-Security-Policy (see `kit.csp` in svelte.config.js) has no
// 'unsafe-inline' in script-src, and SvelteKit only hashes the inline scripts
// it generates itself — never ones written into the app.html template. As an
// external same-origin script it is covered by `script-src 'self'` with no hash
// to keep in sync.
//
// Keep the storage key and default in sync with src/lib/stores/theme.svelte.ts.
(() => {
	try {
		const stored = localStorage.getItem("glyphbridge-theme-mode");
		const mode = stored === "light" || stored === "dark" ? stored : "dark";
		document.documentElement.dataset.theme = mode;
		document.documentElement.style.colorScheme = mode;
	} catch {
		// localStorage unavailable — fall back to the CSS default (dark).
	}
})();
