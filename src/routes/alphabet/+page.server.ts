import { buildPageMetadata } from "$lib/server/page-metadata";

import type { PageServerLoad } from "./$types";

export const prerender = true;

export const load: PageServerLoad = () => {
	return {
		// `noindex, follow`: this page shows only the characters THIS learner has
		// unlocked, so it has no stable public content. It is not a complete Thai
		// alphabet reference. See docs/seo.md — it can become indexable only once
		// its signed-out server render is a useful standalone reference.
		metadata: buildPageMetadata({
			title: "Thai Alphabet Progress",
			canonicalPath: "/alphabet",
			robots: "noindex, follow",
		}),
	};
};
