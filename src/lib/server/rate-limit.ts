import { getRequestEvent } from "$app/server";

/**
 * Per-key rate limiter.
 *
 * Cloudflare Workers use `LEARNER_SYNC_RATE_LIMITER`, a Rate Limiting binding
 * configured in `wrangler.jsonc`. Local development falls back to the in-memory
 * token bucket below because the binding is unavailable outside Wrangler.
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

function getCloudflareRateLimiter(): RateLimit | null {
	try {
		return getRequestEvent().platform?.env?.LEARNER_SYNC_RATE_LIMITER ?? null;
	} catch {
		return null;
	}
}

function readCloudflareRetryAfterSeconds(options: RateLimitOptions): number {
	return Math.max(1, Math.ceil(options.capacity / options.refillPerSecond));
}

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
 * when it is not, how many seconds to wait before retrying. `now` is injectable
 * so the local fallback can be exercised deterministically.
 */
export async function consumeRateLimitToken(
	key: string,
	options: RateLimitOptions,
	now: number = Date.now(),
): Promise<RateLimitResult> {
	const cloudflareRateLimiter = getCloudflareRateLimiter();

	if (cloudflareRateLimiter) {
		const { success } = await cloudflareRateLimiter.limit({ key });

		return {
			allowed: success,
			retryAfterSeconds: success ? 0 : readCloudflareRetryAfterSeconds(options),
		};
	}

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
