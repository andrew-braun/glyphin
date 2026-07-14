import assert from "node:assert/strict";
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { fileURLToPath } from "node:url";

import { createClient } from "@supabase/supabase-js";

import {
	mapPublishedLessonPayload,
	mapPublishedStagePayload,
} from "../src/lib/server/delivery-payload.ts";
import {
	GENERATED_PUBLICATION_MANIFEST_FILE,
	getPublicationArtifactFileName,
	getPublicationCacheKey,
} from "../src/lib/utils/publication.ts";
import { loadDeliveryCredentials } from "./delivery-env.mjs";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, "..");
const outputDir = resolve(repoRoot, ".generated");
const legacyArtifactFile = resolve(outputDir, "published-lessons.json");
const manifestFile = resolve(outputDir, GENERATED_PUBLICATION_MANIFEST_FILE);
const deliveryFetchRetryAttempts = 12;
const deliveryFetchRetryDelayMs = 1_000;

function getErrorMessage(error) {
	if (error instanceof Error) {
		return error.message;
	}

	if (typeof error === "object" && error !== null && "message" in error) {
		return String(error.message);
	}

	return String(error);
}

function isTransientDeliveryFetchError(error) {
	const message = getErrorMessage(error).toLowerCase();

	return (
		message.includes("fetch failed") ||
		message.includes("econnrefused") ||
		message.includes("econnreset") ||
		message.includes("etimedout") ||
		message.includes("socket hang up")
	);
}

async function loadDeliveryArtifactOnce() {
	const { url: supabaseUrl, anonKey: supabaseAnonKey } = loadDeliveryCredentials(repoRoot);

	if (!supabaseUrl || !supabaseAnonKey) {
		throw new Error(
			"Missing delivery read credentials for publication export. Set SUPABASE_DELIVERY_URL/SUPABASE_DELIVERY_ANON_KEY or map your local Supabase API_URL/PUBLISHABLE_KEY into .env before building.",
		);
	}

	const supabase = createClient(supabaseUrl, supabaseAnonKey, {
		auth: {
			autoRefreshToken: false,
			persistSession: false,
		},
	});
	const delivery = supabase.schema("delivery");

	const { data: publications, error: publicationError } = await delivery
		.from("course_publications")
		.select("id")
		.eq("is_active", true)
		.order("created_at", { ascending: false })
		.limit(2);

	if (publicationError) {
		throw new Error(
			`Unable to load the active lesson publication: ${publicationError.message}`,
		);
	}

	assert.ok(publications?.length, "No active lesson publication is available");
	assert.equal(
		publications.length,
		1,
		"Expected exactly one active lesson publication for publication export",
	);

	const publicationId = publications[0].id;
	const [stageResult, lessonResult] = await Promise.all([
		delivery
			.from("course_publication_stages")
			.select("stage_ordinal, payload")
			.eq("publication_id", publicationId)
			.order("stage_ordinal", { ascending: true }),
		delivery
			.from("course_publication_lessons")
			.select("lesson_ordinal, payload")
			.eq("publication_id", publicationId)
			.order("lesson_ordinal", { ascending: true }),
	]);
	const { data: stageRows, error: stageError } = stageResult;
	const { data: lessonRows, error: lessonError } = lessonResult;

	if (stageError) {
		throw new Error(`Unable to load published stages: ${stageError.message}`);
	}

	if (lessonError) {
		throw new Error(`Unable to load published lessons: ${lessonError.message}`);
	}

	assert.ok(stageRows?.length, "Expected published stages for the active publication");
	assert.ok(lessonRows?.length, "Expected published lessons for the active publication");

	return {
		publicationId,
		stages: stageRows.map((row) => {
			const stage = mapPublishedStagePayload(row.payload);
			assert.equal(
				stage.ordinal,
				row.stage_ordinal,
				`Published stage ordinal mismatch for stage ${row.stage_ordinal}`,
			);

			return stage;
		}),
		lessons: lessonRows.map((row) => {
			const lesson = mapPublishedLessonPayload(row.payload);
			assert.equal(
				lesson.id,
				row.lesson_ordinal,
				`Published lesson ordinal mismatch for lesson ${row.lesson_ordinal}`,
			);

			return lesson;
		}),
	};
}

async function loadDeliveryArtifact() {
	let lastTransientError;

	for (let attempt = 1; attempt <= deliveryFetchRetryAttempts; attempt += 1) {
		try {
			return await loadDeliveryArtifactOnce();
		} catch (error) {
			if (!isTransientDeliveryFetchError(error)) {
				throw error;
			}

			lastTransientError = error;

			if (attempt === deliveryFetchRetryAttempts) {
				break;
			}

			console.warn(
				`Delivery API is not ready for publication export yet (${getErrorMessage(
					error,
				)}). Retrying in ${deliveryFetchRetryDelayMs}ms (${attempt}/${deliveryFetchRetryAttempts})...`,
			);
			await delay(deliveryFetchRetryDelayMs);
		}
	}

	throw new Error(
		`Unable to load the active lesson publication after ${deliveryFetchRetryAttempts} attempts. Check that Supabase is running and the delivery API URL in .env is reachable. Last error: ${getErrorMessage(
			lastTransientError,
		)}`,
	);
}

const publicationArtifact = await loadDeliveryArtifact();
const generatedAt = new Date().toISOString();
const artifactPath = getPublicationArtifactFileName(publicationArtifact.publicationId);
const artifactFile = resolve(outputDir, artifactPath);
const publicationCacheKey = getPublicationCacheKey(publicationArtifact.publicationId);

mkdirSync(outputDir, { recursive: true });
rmSync(legacyArtifactFile, { force: true });
writeFileSync(
	artifactFile,
	`${JSON.stringify(
		{
			publicationId: publicationArtifact.publicationId,
			publicationCacheKey,
			generatedAt,
			stages: publicationArtifact.stages,
			lessons: publicationArtifact.lessons,
		},
		null,
		2,
	)}\n`,
	"utf8",
);

writeFileSync(
	manifestFile,
	`${JSON.stringify(
		{
			publicationId: publicationArtifact.publicationId,
			publicationCacheKey,
			generatedAt,
			artifactPath,
		},
		null,
		2,
	)}\n`,
	"utf8",
);

console.log(
	`Generated ${publicationArtifact.stages.length} stages and ${publicationArtifact.lessons.length} lessons for active publication ${publicationArtifact.publicationId} at ${artifactFile} and wrote manifest ${manifestFile}.`,
);
