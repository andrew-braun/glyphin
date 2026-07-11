export const SITE_NAME = "Glyphin";

export function getProductionOrigin(value: string | undefined): string {
	let origin: URL;

	try {
		if (!value) throw new TypeError();
		origin = new URL(value);
	} catch {
		throw new TypeError("PUBLIC_SITE_ORIGIN must be a valid https:// origin");
	}

	if (
		origin.protocol !== "https:" ||
		origin.username ||
		origin.password ||
		origin.pathname !== "/" ||
		origin.search ||
		origin.hash
	) {
		throw new TypeError("PUBLIC_SITE_ORIGIN must be a valid https:// origin");
	}

	return origin.origin;
}
