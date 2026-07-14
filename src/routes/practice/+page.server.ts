import { buildPageMetadata } from "$lib/server/page-metadata";

import type { PageServerLoad } from "./$types";

export const prerender = true;

export const load: PageServerLoad = () => {
	return {
		// `noindex, follow`: a randomized review drawn from the lessons THIS learner
		// has completed. No stable public content. See docs/seo.md.
		metadata: buildPageMetadata({
			title: "Thai Reading Practice",
			canonicalPath: "/practice",
			robots: "noindex, follow",
		}),
	};
};
