import type { CourseJourneySource } from "../data/course-journey";
import type { LessonCatalogEntry } from "../data/types";

export type ProgressCatalog = {
	lessons: LessonCatalogEntry[];
	firstLessonId: number;
	lessonIds: number[];
	lastLessonId: number;
	lessonById: Map<number, LessonCatalogEntry>;
	knownLetterCharacters: Set<string>;
	journeySource: CourseJourneySource;
};

export function createProgressCatalog(lessons: LessonCatalogEntry[]): ProgressCatalog {
	const lessonIds = lessons.map((lesson) => lesson.id);
	const firstLessonId = lessons[0]?.id ?? 1;

	return {
		lessons,
		firstLessonId,
		lessonIds,
		lastLessonId: lessonIds.at(-1) ?? firstLessonId,
		lessonById: new Map(lessons.map((lesson) => [lesson.id, lesson])),
		knownLetterCharacters: new Set(
			lessons.flatMap((lesson) => lesson.newLetters.map((letter) => letter.character)),
		),
		journeySource: { stages: [], lessons },
	};
}
