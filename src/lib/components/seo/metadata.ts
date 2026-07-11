import { SITE_NAME } from "../../config/site.ts";

export type PageMetadataType = "website" | "article";
export type PageRobots = "noindex, follow" | "noindex, nofollow";

export interface PageMetadataInput {
	title: string;
	description?: string;
	canonicalPath?: string;
	robots?: PageRobots;
	imagePath?: string;
	type?: PageMetadataType;
	social?: boolean;
	origin: string;
}

export interface PageMetadataOutput {
	title: string;
	description?: string;
	canonicalUrl?: string;
	robots?: PageRobots;
	social?: {
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
	const noindex = Boolean(input.robots);
	const canonicalUrl = input.canonicalPath
		? buildAbsoluteUrl(input.canonicalPath, input.origin, "canonicalPath")
		: undefined;
	const image = input.imagePath
		? buildAbsoluteUrl(input.imagePath, input.origin, "imagePath")
		: undefined;

	const description = noindex ? undefined : input.description || undefined;
	const social =
		!noindex && input.social !== false
			? {
					openGraph: {
						siteName: SITE_NAME,
						title,
						...(description ? { description } : {}),
						...(canonicalUrl ? { url: canonicalUrl } : {}),
						type: input.type ?? "website",
						...(image ? { image } : {}),
					},
					twitter: {
						card: image ? ("summary_large_image" as const) : ("summary" as const),
						title,
						...(description ? { description } : {}),
						...(image ? { image } : {}),
					},
				}
			: undefined;

	return {
		title,
		...(description ? { description } : {}),
		...(canonicalUrl ? { canonicalUrl } : {}),
		...(input.robots ? { robots: input.robots } : {}),
		...(social ? { social } : {}),
	};
}
