/**
 * Server-side error log line, visible in `wrangler tail` / Cloudflare Workers
 * Logs. Call this at the point an upstream error (Postgrest, Supabase Auth,
 * an unexpected exception) is caught, before it is rethrown or replaced with a
 * generic client-facing error — otherwise the underlying cause never surfaces
 * anywhere.
 */
export function logServerError(
	scope: string,
	cause: unknown,
	context?: Record<string, unknown>,
): void {
	console.error(`[${scope}]`, cause, context ?? {});
}
