import { getPublishedLessonCatalog } from "$lib/server/published-lessons";

import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async () => ({
	catalog: await getPublishedLessonCatalog(),
});
