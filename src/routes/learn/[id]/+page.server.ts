import { error } from "@sveltejs/kit";

import { DEFAULT_OG_IMAGE_PATH } from "$lib/config/site";
import { buildPageMetadata } from "$lib/server/page-metadata";
import {
	getPublishedLesson,
	getPublishedLessonEntries,
	getPublishedLessonVersion,
} from "$lib/server/published-lessons";

import type { EntryGenerator, PageServerLoad } from "./$types";

export const prerender = true;

export const entries: EntryGenerator = async () => {
	return getPublishedLessonEntries();
};

export const load: PageServerLoad = async ({ params }) => {
	if (!/^\d+$/.test(params.id)) {
		throw error(404, "Lesson not found");
	}

	const lessonId = Number(params.id);
	if (!Number.isFinite(lessonId) || lessonId < 1) {
		throw error(404, "Lesson not found");
	}

	const [publication, lessonData] = await Promise.all([
		getPublishedLessonVersion(),
		getPublishedLesson(lessonId),
	]);
	const { lesson, nextLessonId } = lessonData;

	return {
		metadata: buildPageMetadata({
			title: `${lesson.title} — Thai Reading Lesson`,
			description: `Learn to read ${lesson.anchorWord.thai}, meaning ${lesson.anchorWord.meaning}, with guided Thai letter, sound, and reading instruction.`,
			canonicalPath: `/learn/${lesson.id}`,
			imagePath: DEFAULT_OG_IMAGE_PATH,
		}),
		publication,
		lesson,
		nextLessonId,
	};
};
