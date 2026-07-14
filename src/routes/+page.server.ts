import {
	appProgressFromLearnerProjection,
	buildCourseProgressStats,
} from "$lib/data/course-journey";
import { thaiPack } from "$lib/data/thai";
import { getSupabaseClient, getVerifiedUser } from "$lib/server/auth";
import { getLearnerProjection } from "$lib/server/learner-projection";

import type { PageServerLoad } from "./$types";

export const prerender = false;

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
			projection: null,
			serverStats: { knownLetterCount: 0, knownWordCount: 0 },
			stages,
		};
	}

	const projection = await getLearnerProjection(getSupabaseClient(locals));
	const serverProgress = appProgressFromLearnerProjection(projection);

	return {
		auth: { authenticated: true, email: user.email ?? null },
		projection,
		serverStats: buildCourseProgressStats({ ...thaiPack, stages }, serverProgress),
		stages,
	};
};
