import { SITE_NAME } from "../../config/site.ts";

export type PageMetadataType = "website" | "article";

export interface PageMetadataInput {
	title: string;
	description?: string;
	canonicalPath?: string;
	noindex?: boolean;
	imagePath?: string;
	type?: PageMetadataType;
	origin: string;
}

export interface PageMetadataOutput {
	title: string;
	description?: string;
	canonicalUrl?: string;
	robots?: "noindex, nofollow";
	openGraph: {
		siteName: string;
		title: string;
		description?: string;
		url?: string;
		type: PageMetadataType;
		image?: string;
	};
	twitter: {
		card: "summary" | "summary_large_image";
		title: string;
		description?: string;
		image?: string;
	};
}

function normalizeTitle(title: string): string {
	const suffix = ` — ${SITE_NAME}`;
	return title.endsWith(suffix) ? title : `${title}${suffix}`;
}

function buildAbsoluteUrl(
	path: string,
	origin: string,
	name: "canonicalPath" | "imagePath",
): string {
	if (!path.startsWith("/") || path.startsWith("//")) {
		throw new TypeError(`${name} must begin with /`);
	}

	return new URL(path, origin).href;
}

export function buildPageMetadata(input: PageMetadataInput): PageMetadataOutput {
	const title = normalizeTitle(input.title);
	const canonicalUrl = input.canonicalPath
		? buildAbsoluteUrl(input.canonicalPath, input.origin, "canonicalPath")
		: undefined;
	const image = input.imagePath
		? buildAbsoluteUrl(input.imagePath, input.origin, "imagePath")
		: undefined;

	return {
		title,
		...(input.description ? { description: input.description } : {}),
		...(canonicalUrl ? { canonicalUrl } : {}),
		...(input.noindex ? { robots: "noindex, nofollow" as const } : {}),
		openGraph: {
			siteName: SITE_NAME,
			title,
			...(input.description ? { description: input.description } : {}),
			...(canonicalUrl ? { url: canonicalUrl } : {}),
			type: input.type ?? "website",
			...(image ? { image } : {}),
		},
		twitter: {
			card: image ? "summary_large_image" : "summary",
			title,
			...(input.description ? { description: input.description } : {}),
			...(image ? { image } : {}),
		},
	};
}
