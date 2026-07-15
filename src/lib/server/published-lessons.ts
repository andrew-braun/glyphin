import { error } from "@sveltejs/kit";

import { thaiPack } from "$lib/data/thai";
import type { CourseStage, Lesson } from "$lib/data/types";

import type { PublishedLessonCard, PublishedLessonCatalogEntry } from "./delivery-lessons";

export type PublishedLessonVersion = {
	publicationId: string;
	publicationCacheKey: string;
	generatedAt: string;
};

type LessonPublicationArtifact = PublishedLessonVersion & {
	stages?: CourseStage[];
	lessons: Lesson[];
};

type LessonPublicationManifest = PublishedLessonVersion & {
	artifactPath: string;
};

const canonicalLessonById = new Map(thaiPack.lessons.map((lesson) => [lesson.id, lesson]));
const generatedArtifactModules = import.meta.glob("../../../.generated/published-lessons.*.json", {
	eager: true,
	import: "default",
}) as Record<string, LessonPublicationArtifact>;
const generatedManifestModules = import.meta.glob(
	"../../../.generated/published-lessons-manifest.json",
	{
		eager: true,
		import: "default",
	},
) as Record<string, LessonPublicationManifest>;

function toLessonCard(lesson: Lesson): PublishedLessonCard {
	return {
		id: lesson.id,
		stage: lesson.stage,
		title: lesson.title,
		anchorWord: lesson.anchorWord,
		newLetters: lesson.newLetters,
	};
}

function toLessonCatalogEntry(lesson: Lesson): PublishedLessonCatalogEntry {
	return {
		...toLessonCard(lesson),
		vocabulary: lesson.vocabulary,
		drills: lesson.drills,
	};
}

function isCurrentVocabularyEntryShape(value: unknown): boolean {
	if (typeof value !== "object" || value === null) {
		return false;
	}

	return "tier" in value && "sourceType" in value && "drillTarget" in value && "word" in value;
}

function hasCurrentLessonShape(lesson: Lesson): boolean {
	return lesson.vocabulary.every((entry) => isCurrentVocabularyEntryShape(entry));
}

function normalizeArtifactLessons(lessons: Lesson[]): Lesson[] {
	const hasLegacyLessonShape = lessons.some((lesson) => !hasCurrentLessonShape(lesson));

	if (!hasLegacyLessonShape) {
		return lessons;
	}

	return lessons.map((lesson) => canonicalLessonById.get(lesson.id) ?? lesson);
}

async function getPublicationArtifact(): Promise<LessonPublicationArtifact> {
	const manifest = Object.values(generatedManifestModules)[0];
	if (!manifest) {
		throw error(500, "Generated lesson publication manifest is missing from the build");
	}

	const artifact = Object.entries(generatedArtifactModules).find(([path]) =>
		path.endsWith(`/${manifest.artifactPath}`),
	)?.[1];
	if (!artifact) {
		throw error(500, "Generated lesson publication artifact is missing from the build");
	}

	if (
		artifact.publicationId !== manifest.publicationId ||
		artifact.publicationCacheKey !== manifest.publicationCacheKey
	) {
		throw error(500, "Generated lesson publication artifact does not match its manifest");
	}

	return {
		...artifact,
		stages: artifact.stages ?? thaiPack.stages,
		lessons: normalizeArtifactLessons(artifact.lessons),
	};
}

export async function getPublishedCourseStages(): Promise<CourseStage[]> {
	const artifact = await getPublicationArtifact();
	return artifact.stages ?? thaiPack.stages;
}

export async function getPublishedLessonVersion(): Promise<PublishedLessonVersion> {
	const artifact = await getPublicationArtifact();
	return {
		publicationId: artifact.publicationId,
		publicationCacheKey: artifact.publicationCacheKey,
		generatedAt: artifact.generatedAt,
	};
}

export async function getPublishedLessonCards(): Promise<PublishedLessonCard[]> {
	const artifact = await getPublicationArtifact();
	return artifact.lessons.map((lesson) => toLessonCard(lesson));
}

export async function getPublishedLessonCatalog(): Promise<PublishedLessonCatalogEntry[]> {
	const artifact = await getPublicationArtifact();
	return artifact.lessons.map((lesson) => toLessonCatalogEntry(lesson));
}

export async function getPublishedLesson(
	lessonId: number,
): Promise<{ lesson: Lesson; nextLessonId: number | null }> {
	const artifact = await getPublicationArtifact();
	const currentLessonIndex = artifact.lessons.findIndex((lesson) => lesson.id === lessonId);
	if (currentLessonIndex < 0) {
		throw error(404, "Lesson not found");
	}

	return {
		lesson: artifact.lessons[currentLessonIndex],
		nextLessonId: artifact.lessons[currentLessonIndex + 1]?.id ?? null,
	};
}

export async function getPublishedLessonEntries(): Promise<Array<{ id: string }>> {
	const artifact = await getPublicationArtifact();
	return artifact.lessons.map((lesson) => ({ id: String(lesson.id) }));
}
