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
		publication,
		stages,
		lessons,
	};
};
