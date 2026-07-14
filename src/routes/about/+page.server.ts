import { DEFAULT_OG_IMAGE_PATH } from "$lib/config/site";
import { buildPageMetadata } from "$lib/server/page-metadata";

import type { PageServerLoad } from "./$types";

export const prerender = true;

export const load: PageServerLoad = () => {
	return {
		metadata: buildPageMetadata({
			title: "How Glyphin Teaches Thai Reading",
			description:
				"See how Glyphin teaches Thai script through real words, progressive decoding, retrieval practice, and evidence-informed lesson design.",
			canonicalPath: "/about",
			imagePath: DEFAULT_OG_IMAGE_PATH,
		}),
	};
};
