import { DEFAULT_OG_IMAGE_PATH } from "$lib/config/site";
import { buildPageMetadata } from "$lib/server/page-metadata";
import {
	getPublishedCourseStages,
	getPublishedLessonCards,
	getPublishedLessonVersion,
} from "$lib/server/published-lessons";

import type { PageServerLoad } from "./$types";

export const prerender = true;

export const load: PageServerLoad = async () => {
	const [publication, stages, lessons] = await Promise.all([
		getPublishedLessonVersion(),
		getPublishedCourseStages(),
		getPublishedLessonCards(),
	]);

	return {
		metadata: buildPageMetadata({
			title: "Thai Reading Lessons",
			description:
				"Browse step-by-step Thai reading lessons that introduce useful words, letters, and rules in a progressive learning path.",
			canonicalPath: "/learn",
			imagePath: DEFAULT_OG_IMAGE_PATH,
		}),
		publication,
		stages,
		lessons,
	};
};
