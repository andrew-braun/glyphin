/**
 * In-memory per-key token-bucket rate limiter.
 *
 * RUNTIME CAVEAT (read before deploying to Cloudflare): the bucket state lives
 * in this module's process memory. That is correct for the current
 * `adapter-node` deployment, which runs one long-lived server process. It does
 * NOT survive the planned Cloudflare Workers migration: requests are spread
 * across ephemeral isolates that do not share memory, so this limiter would only
 * throttle within a single isolate and be trivially bypassed. Before (or at) the
 * Cloudflare cutover, replace the store with a Workers-native mechanism — a
 * Durable Object, Workers KV, or Cloudflare's Rate Limiting binding — while
 * keeping `consumeRateLimitToken`'s signature so callers do not change.
 * Tracked in `.ai/2026-07-11-db-security-hardening.md`.
 */

type Bucket = {
	tokens: number;
	updatedAt: number;
};

type RateLimitOptions = {
	/** Maximum burst — the bucket's full token capacity. */
	capacity: number;
	/** Sustained refill rate, in tokens per second. */
	refillPerSecond: number;
};

type RateLimitResult = {
	allowed: boolean;
	/** Seconds until at least one token is available (0 when allowed). */
	retryAfterSeconds: number;
};

const buckets = new Map<string, Bucket>();

const SWEEP_MIN_INTERVAL_MS = 60_000;
let lastSweepAt = 0;

/**
 * Drop buckets that have been idle long enough to have fully refilled, so memory
 * stays bounded by the number of *recently active* keys rather than every key
 * ever seen. Runs at most once per `SWEEP_MIN_INTERVAL_MS`.
 */
function sweepIdleBuckets(now: number, idleTtlMs: number): void {
	if (now - lastSweepAt < SWEEP_MIN_INTERVAL_MS) return;
	lastSweepAt = now;

	for (const [key, bucket] of buckets) {
		if (now - bucket.updatedAt > idleTtlMs) {
			buckets.delete(key);
		}
	}
}

/**
 * Consume a single token for `key`. Returns whether the request is allowed and,
 * when it is not, how many seconds to wait before a token frees up. `now` is
 * injectable so the behavior can be exercised deterministically.
 */
export function consumeRateLimitToken(
	key: string,
	options: RateLimitOptions,
	now: number = Date.now(),
): RateLimitResult {
	const { capacity, refillPerSecond } = options;

	const idleTtlMs = Math.max(SWEEP_MIN_INTERVAL_MS, (capacity / refillPerSecond) * 1000 * 2);
	sweepIdleBuckets(now, idleTtlMs);

	const bucket = buckets.get(key) ?? { tokens: capacity, updatedAt: now };

	const elapsedSeconds = Math.max(0, (now - bucket.updatedAt) / 1000);
	bucket.tokens = Math.min(capacity, bucket.tokens + elapsedSeconds * refillPerSecond);
	bucket.updatedAt = now;

	if (bucket.tokens >= 1) {
		bucket.tokens -= 1;
		buckets.set(key, bucket);
		return { allowed: true, retryAfterSeconds: 0 };
	}

	buckets.set(key, bucket);

	const tokensNeeded = 1 - bucket.tokens;
	const retryAfterSeconds = Math.max(1, Math.ceil(tokensNeeded / refillPerSecond));
	return { allowed: false, retryAfterSeconds };
}
