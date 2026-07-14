export const SITE_NAME = "Glyphin";

/**
 * Shared social share card for indexable pages. 1200x630 as required by
 * `docs/seo.md`; raster because Open Graph consumers do not render SVG.
 *
 * `noindex` routes deliberately omit it — `buildPageMetadata` drops all social
 * metadata when `robots` is set, so passing this on a `noindex` route is a no-op
 * rather than a bug.
 */
export const DEFAULT_OG_IMAGE_PATH = "/og/glyphin-reading-thai.png";

export function validateProductionOrigin(value: string | undefined): string {
	let origin: URL;
	const hasQueryOrFragment = value?.includes("?") || value?.includes("#");

	try {
		if (!value) throw new TypeError();
		origin = new URL(value);
	} catch {
		throw new TypeError("SITE_ORIGIN must be a valid https:// origin");
	}

	if (
		origin.protocol !== "https:" ||
		origin.username ||
		origin.password ||
		origin.pathname !== "/" ||
		hasQueryOrFragment ||
		origin.search ||
		origin.hash
	) {
		throw new TypeError("SITE_ORIGIN must be a valid https:// origin");
	}

	return origin.origin;
}
