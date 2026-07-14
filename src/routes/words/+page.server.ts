import { buildPageMetadata } from "$lib/server/page-metadata";

import type { PageServerLoad } from "./$types";

export const prerender = true;

export const load: PageServerLoad = () => {
	return {
		// `noindex, follow`: learner-specific vocabulary, empty before local
		// progress hydrates. See docs/seo.md.
		metadata: buildPageMetadata({
			title: "Your Thai Words",
			canonicalPath: "/words",
			robots: "noindex, follow",
		}),
	};
};
