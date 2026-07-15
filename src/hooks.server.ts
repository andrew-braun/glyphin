import { createServerClient } from "@supabase/ssr";
import type { Handle, HandleServerError } from "@sveltejs/kit";

import { env } from "$env/dynamic/private";
import { logServerError } from "$lib/server/logging";
import { applySecurityHeaders } from "$lib/server/security-headers";

type SupabaseAuthConfig = {
	url: string;
	publishableKey: string;
};

function getSupabaseAuthConfig(): SupabaseAuthConfig | null {
	const url = env.SUPABASE_AUTH_URL;
	const publishableKey = env.SUPABASE_AUTH_PUBLISHABLE_KEY;

	if (!url || !publishableKey) return null;

	return { url, publishableKey };
}

export const handle: Handle = async ({ event, resolve }) => {
	const config = getSupabaseAuthConfig();
	const useSecureCookies = event.url.protocol === "https:" || env.NODE_ENV === "production";

	event.locals.authConfigured = config !== null;
	event.locals.supabase = null;
	event.locals.safeGetSession = async () => ({ session: null, user: null });

	if (config) {
		const supabase = createServerClient(config.url, config.publishableKey, {
			cookies: {
				getAll() {
					return event.cookies.getAll();
				},
				setAll(cookiesToSet, headers) {
					cookiesToSet.forEach(({ name, value, options }) => {
						event.cookies.set(name, value, {
							...options,
							httpOnly: true,
							path: "/",
							sameSite: options.sameSite ?? "lax",
							secure: options.secure ?? useSecureCookies,
						});
					});

					Object.entries(headers).forEach(([name, value]) => {
						if (name === "set-cookie") return;

						try {
							event.setHeaders({ [name]: value });
						} catch {
							// SvelteKit throws if the same header is set twice per request.
							// A route's own load (e.g. the root page) may already set
							// `cache-control` with an equally strict no-store directive —
							// that's fine, so ignore the duplicate instead of crashing every
							// signed-in request that happens to refresh the session cookie.
						}
					});
				},
			},
		});

		let safeSessionPromise: Promise<{
			session: Awaited<ReturnType<typeof supabase.auth.getSession>>["data"]["session"] | null;
			user: Awaited<ReturnType<typeof supabase.auth.getUser>>["data"]["user"] | null;
		}> | null = null;

		event.locals.supabase = supabase;
		event.locals.safeGetSession = async () => {
			safeSessionPromise ??= (async () => {
				try {
					const {
						data: { session },
					} = await supabase.auth.getSession();

					if (!session) return { session: null, user: null };

					const {
						data: { user },
						error: userError,
					} = await supabase.auth.getUser();

					if (userError || !user) return { session: null, user: null };

					return { session, user };
				} catch (cause) {
					// Network-level failures (a cold Worker's first fetch to Supabase,
					// a timeout) can reject here instead of resolving with `{ error }`.
					// Fail closed to signed-out rather than letting this bubble up as
					// an unhandled 500 for every signed-in request.
					logServerError("hooks.safeGetSession", cause, { path: event.url.pathname });
					return { session: null, user: null };
				}
			})();

			return safeSessionPromise;
		};

		await event.locals.safeGetSession();
	}

	const response = await resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === "content-range" || name === "x-supabase-api-version";
		},
	});

	// SECURITY: apply the security headers to Worker-rendered responses (/auth,
	// /api/**, /auth/sign-out). Prerendered pages and static assets never reach
	// this hook — Cloudflare serves them directly — so they get the same headers
	// from `_headers`. Both sources are kept in step by
	// `src/lib/server/security-headers.test.ts`.
	//
	// This runs after `resolve` so it cannot disturb the Supabase SSR session
	// cookies set during rendering; it only adds headers, never removes them.
	applySecurityHeaders(response.headers);

	return response;
};

// Last line of defense: any exception thrown from a load/action/endpoint that
// isn't already a SvelteKit `error()` lands here before becoming a generic 500.
// Without this, the underlying cause (a Postgrest error, a thrown fetch
// rejection, etc.) is never logged anywhere.
export const handleError: HandleServerError = ({ error: cause, event, status, message }) => {
	logServerError("hooks.handleError", cause, {
		method: event.request.method,
		path: event.url.pathname,
		status,
	});

	return { message };
};
