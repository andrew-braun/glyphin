export const SITE_NAME = "Glyphin";

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
