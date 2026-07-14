import type { LearnerProjection } from "./learner";
import type {
	AppProgress,
	CourseStage,
	LanguagePack,
	Lesson,
	LessonProgress,
	LessonVocabularyEntry,
} from "./types";

export type CourseJourneyPhase = "learn" | "practice" | "review";
export type CourseStageState = "complete" | "current" | "locked";

export interface CourseResumeTarget {
	lessonId: number | null;
	phase: CourseJourneyPhase;
	href: string;
}

export type CourseJourneyLessonSource = Pick<
	Lesson,
	"id" | "stage" | "title" | "anchorWord" | "newLetters"
>;

export interface CourseJourneySource {
	stages: CourseStage[];
	lessons: CourseJourneyLessonSource[];
}

export interface CourseJourneyLesson {
	lesson: CourseJourneyLessonSource;
	learnUnlocked: boolean;
	practiceUnlocked: boolean;
	learningCompleted: boolean;
	practicePassed: boolean;
	practiceAttempts: number;
	bestPracticeScore?: number;
	latestPracticeScore?: number;
	isCurrent: boolean;
	currentPhase: Exclude<CourseJourneyPhase, "review"> | null;
}

export interface CourseJourneyStage extends CourseStage {
	state: CourseStageState;
	lessons: CourseJourneyLesson[];
	completedLessonCount: number;
	totalLessonCount: number;
	showLessons: boolean;
	defaultExpanded: boolean;
}

export interface CourseJourney {
	stages: CourseJourneyStage[];
	resumeTarget: CourseResumeTarget;
	completedLessonCount: number;
	totalLessonCount: number;
	isComplete: boolean;
}

export interface CourseProgressStats {
	knownLetterCount: number;
	knownWordCount: number;
}

export const SOUND_PRACTICE_EXPLANATION = "Made for reading practice — not a real Thai word.";

export function isSoundPractice(entry: LessonVocabularyEntry): boolean {
	return entry.sourceType === "nonsense";
}

export function countsAsKnownWord(entry: LessonVocabularyEntry): boolean {
	return !isSoundPractice(entry);
}

export function appProgressFromLearnerProjection(projection: LearnerProjection): AppProgress {
	return {
		knownLetters: [],
		knownWords: [],
		lessonProgress: projection.lessons
			.filter((lesson) => lesson.status !== "not_started" || lesson.attemptCount > 0)
			.map((lesson) => {
				const practicePassed = lesson.status === "completed";
				const learningCompleted = practicePassed || lesson.attemptCount > 0;
				const completedAt = lesson.firstCompletedAt ?? undefined;

				return {
					lessonId: lesson.lessonId,
					learningCompleted,
					...(completedAt ? { learningCompletedAt: completedAt } : {}),
					practiceAttempts: lesson.attemptCount,
					...(lesson.bestScore !== null ? { bestPracticeScore: lesson.bestScore } : {}),
					...(lesson.latestScore !== null
						? { latestPracticeScore: lesson.latestScore }
						: {}),
					practicePassed,
					...(practicePassed && completedAt ? { practicePassedAt: completedAt } : {}),
				};
			}),
		currentLessonId: projection.resumeLessonId ?? projection.currentLessonId ?? 1,
	};
}

export function buildCourseProgressStats(
	pack: LanguagePack,
	progress: AppProgress,
): CourseProgressStats {
	const learnedLetters = new Set<string>();
	const learnedWords = new Set<string>();

	for (const lesson of pack.lessons) {
		const entry = getProgressEntry(progress.lessonProgress, lesson.id);

		if (hasLearningCompleted(entry)) {
			for (const letter of lesson.newLetters) {
				learnedLetters.add(letter.character);
			}
		}

		if (!hasPracticePassed(entry)) continue;

		learnedWords.add(lesson.anchorWord.thai);
		for (const vocabularyEntry of lesson.vocabulary) {
			if (countsAsKnownWord(vocabularyEntry)) {
				learnedWords.add(vocabularyEntry.word.thai);
			}
		}
	}

	return {
		knownLetterCount: learnedLetters.size,
		knownWordCount: learnedWords.size,
	};
}

function getProgressEntry(
	lessonProgress: LessonProgress[],
	lessonId: number,
): LessonProgress | undefined {
	return lessonProgress.find((entry) => entry.lessonId === lessonId);
}

function hasLearningCompleted(entry: LessonProgress | undefined): boolean {
	return entry?.learningCompleted === true;
}

function hasPracticePassed(entry: LessonProgress | undefined): boolean {
	return entry?.practicePassed === true;
}

export function buildCourseJourney(
	pack: CourseJourneySource,
	progress: AppProgress,
): CourseJourney {
	const lessonIds = pack.lessons.map((lesson) => lesson.id);
	const lastLessonId = lessonIds.at(-1) ?? null;
	const firstIncompleteLessonIndex = pack.lessons.findIndex(
		(lesson) => !hasPracticePassed(getProgressEntry(progress.lessonProgress, lesson.id)),
	);
	const isComplete = pack.lessons.length > 0 && firstIncompleteLessonIndex === -1;
	const currentLesson = isComplete ? null : pack.lessons[firstIncompleteLessonIndex];
	const currentStageOrdinal = currentLesson?.stage ?? null;

	const journeyLessons = pack.lessons.map((lesson, index): CourseJourneyLesson => {
		const entry = getProgressEntry(progress.lessonProgress, lesson.id);
		const previousLesson = index > 0 ? pack.lessons[index - 1] : null;
		const previousEntry = previousLesson
			? getProgressEntry(progress.lessonProgress, previousLesson.id)
			: undefined;
		const learningCompleted = hasLearningCompleted(entry);
		const practicePassed = hasPracticePassed(entry);
		const isCurrent = lesson.id === currentLesson?.id;

		return {
			lesson,
			learnUnlocked: previousLesson === null || hasPracticePassed(previousEntry),
			practiceUnlocked: learningCompleted,
			learningCompleted,
			practicePassed,
			practiceAttempts: entry?.practiceAttempts ?? 0,
			...(entry?.bestPracticeScore !== undefined
				? { bestPracticeScore: entry.bestPracticeScore }
				: {}),
			...(entry?.latestPracticeScore !== undefined
				? { latestPracticeScore: entry.latestPracticeScore }
				: {}),
			isCurrent,
			currentPhase: isCurrent ? (learningCompleted ? "practice" : "learn") : null,
		};
	});

	const stages = pack.stages.map((stage): CourseJourneyStage => {
		const lessons = journeyLessons.filter((entry) => entry.lesson.stage === stage.ordinal);
		const completedLessonCount = lessons.filter((entry) => entry.practicePassed).length;
		const state: CourseStageState =
			lessons.length > 0 && completedLessonCount === lessons.length
				? "complete"
				: stage.ordinal === currentStageOrdinal
					? "current"
					: "locked";

		return {
			...stage,
			state,
			lessons,
			completedLessonCount,
			totalLessonCount: lessons.length,
			showLessons: state !== "locked",
			defaultExpanded: state === "current",
		};
	});

	const resumeTarget: CourseResumeTarget = isComplete
		? { lessonId: lastLessonId, phase: "review", href: "/practice" }
		: hasLearningCompleted(getProgressEntry(progress.lessonProgress, currentLesson?.id ?? -1))
			? {
					lessonId: currentLesson?.id ?? null,
					phase: "practice",
					href: `/learn/${currentLesson?.id}/practice`,
				}
			: {
					lessonId: currentLesson?.id ?? null,
					phase: "learn",
					href: currentLesson ? `/learn/${currentLesson.id}` : "/learn",
				};

	return {
		stages,
		resumeTarget,
		completedLessonCount: journeyLessons.filter((entry) => entry.practicePassed).length,
		totalLessonCount: journeyLessons.length,
		isComplete,
	};
}
