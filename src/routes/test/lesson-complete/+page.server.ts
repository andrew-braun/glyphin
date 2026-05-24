import { error } from "@sveltejs/kit";

import { dev } from "$app/environment";
import { thaiPack } from "$lib/data/thai";

import type { PageServerLoad } from "./$types";

export const prerender = false;

export const load: PageServerLoad = () => {
	if (!dev) {
		throw error(404, "Not found");
	}

	const lesson = thaiPack.lessons[0];
	if (!lesson) {
		throw error(404, "Preview lesson not found");
	}

	return {
		correctCount: 4,
		hasNextLesson: true,
		lesson,
		totalDrills: lesson.drills.length,
	};
};
