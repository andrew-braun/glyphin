import { DEFAULT_OG_IMAGE_PATH } from "$lib/config/site";
import {
	appProgressFromLearnerProjection,
	buildCourseProgressStats,
} from "$lib/data/course-journey";
import { thaiPack } from "$lib/data/thai";
import { getSupabaseClient, getVerifiedUser } from "$lib/server/auth";
import { getLearnerProjection } from "$lib/server/learner-projection";
import { buildPageMetadata } from "$lib/server/page-metadata";

import type { PageServerLoad } from "./$types";

export const prerender = false;

// The homepage is indexable, and a crawler always arrives signed out — so it
// receives the marketing render, not the learner dashboard. This metadata
// therefore describes the marketing page in both branches and does not vary with
// auth state; a canonical URL that changed per visitor would be a bug.
function homeMetadata() {
	return buildPageMetadata({
		title: "Learn to Read Thai Through Real Words",
		description:
			"Learn to read Thai script through high-frequency real words, guided letter lessons, and progressive reading practice.",
		canonicalPath: "/",
		imagePath: DEFAULT_OG_IMAGE_PATH,
	});
}

export const load: PageServerLoad = async ({ locals, setHeaders }) => {
	setHeaders({
		"cache-control": "private, no-store",
	});

	// This route runs dynamically in the Worker, where the build-time publication
	// artifact is not available through Node's filesystem APIs. Stage metadata is
	// compiled into the application from the same authored source used to publish it.
	const stages = thaiPack.stages;
	const user = await getVerifiedUser(locals);

	if (!user) {
		return {
			auth: { authenticated: false, email: null },
			metadata: homeMetadata(),
			projection: null,
			serverStats: { knownLetterCount: 0, knownWordCount: 0 },
			stages,
		};
	}

	const projection = await getLearnerProjection(getSupabaseClient(locals));
	const serverProgress = appProgressFromLearnerProjection(projection);

	return {
		auth: { authenticated: true, email: user.email ?? null },
		metadata: homeMetadata(),
		projection,
		serverStats: buildCourseProgressStats({ ...thaiPack, stages }, serverProgress),
		stages,
	};
};
