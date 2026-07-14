/**
 * Security response headers applied to every document response.
 *
 * These headers must be delivered twice, because Glyphin's responses come from
 * two places that no single mechanism covers:
 *
 * - **Prerendered pages and assets** (`/`, `/about`, `/learn/**`, `/alphabet`,
 *   `/words`, `/practice`, plus JS/CSS/images) are Cloudflare Workers Static
 *   Assets. Cloudflare serves them directly and the Worker never runs, so
 *   `hooks.server.ts` cannot touch them. They get these headers from
 *   `_headers`.
 * - **Worker responses** (`/auth`, `/api/**`, `/auth/sign-out`) are not static
 *   assets, and Cloudflare's `_headers` file only applies to asset responses.
 *   They get these headers from `hooks.server.ts`.
 *
 * `_headers` therefore duplicates this list by necessity — it is a plain
 * text file and cannot import TypeScript. `security-headers.test.ts` parses that
 * file and asserts it matches this record exactly, so the two cannot drift.
 * If you change a header here, change it there too or the test fails.
 *
 * The Content-Security-Policy is deliberately NOT in this list. SvelteKit owns
 * it via `kit.csp` in `svelte.config.js`, which is the only thing that can emit
 * the per-page script hashes prerendered pages need. The one exception is
 * `frame-ancestors` below — see FRAME_ANCESTORS_NOTE.
 */

/**
 * `frame-ancestors` cannot be delivered in a `<meta>` tag; the spec forbids it
 * and SvelteKit's CSP code explicitly skips it when generating meta content.
 * Prerendered pages receive their CSP as a meta tag, so their clickjacking
 * protection cannot come from `kit.csp` at all. `X-Frame-Options: DENY` is the
 * header-based equivalent and is honored on every response class.
 */
export const FRAME_ANCESTORS_NOTE =
	"X-Frame-Options carries clickjacking protection because meta-tag CSP cannot express frame-ancestors.";

export const SECURITY_HEADERS: Readonly<Record<string, string>> = Object.freeze({
	/**
	 * Force HTTPS for two years including subdomains. `preload` is set because
	 * glyphin.app is HTTPS-only and has no HTTP-only subdomain to break.
	 */
	"strict-transport-security": "max-age=63072000; includeSubDomains; preload",

	/** Block MIME sniffing, which is a vector for turning an upload into a script. */
	"x-content-type-options": "nosniff",

	/** See FRAME_ANCESTORS_NOTE. */
	"x-frame-options": "DENY",

	/**
	 * Send the origin (not the full path) cross-origin, and nothing at all when
	 * downgrading to HTTP. Keeps lesson URLs out of third-party referer logs.
	 */
	"referrer-policy": "strict-origin-when-cross-origin",

	/**
	 * Deny the powerful features Glyphin never uses. An empty allowlist `()`
	 * denies the feature to the page itself and to every embed.
	 */
	"permissions-policy":
		"accelerometer=(), camera=(), display-capture=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()",

	/** Isolate the browsing context group; blocks cross-origin window handles. */
	"cross-origin-opener-policy": "same-origin",

	/** Prevent other origins from embedding our documents as a resource. */
	"cross-origin-resource-policy": "same-origin",
});

/** Apply the policy to a response, without clobbering headers already set. */
export function applySecurityHeaders(headers: Headers): void {
	for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
		headers.set(name, value);
	}
}
