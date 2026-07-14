import assert from "node:assert/strict";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { createClient } from "@supabase/supabase-js";

import { thaiPack } from "../src/lib/data/thai.ts";
import { resolveLetterTips } from "../src/lib/data/tips.ts";
import {
	mapPublishedLessonPayload,
	mapPublishedStagePayload,
} from "../src/lib/server/delivery-payload.ts";
import { loadDeliveryCredentials } from "./delivery-env.mjs";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, "..");

function normalizeForComparison(value) {
	return JSON.parse(JSON.stringify(value));
}

function withResolvedLessonTips(lesson) {
	return {
		...lesson,
		newLetters: lesson.newLetters.map((letter) => ({
			...letter,
			tips: resolveLetterTips(letter),
		})),
	};
}

const { url: supabaseUrl, anonKey: supabaseAnonKey } = loadDeliveryCredentials(repoRoot);

if (!supabaseUrl || !supabaseAnonKey) {
	throw new Error("Missing Supabase delivery read credentials for the delivery smoke test.");
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
	throw new Error(`Unable to load the active lesson publication: ${publicationError.message}`);
}

assert.ok(publications?.length, "No active lesson publication is available");
assert.equal(
	publications.length,
	1,
	"Expected exactly one active lesson publication for the delivery smoke test",
);

const publicationId = publications[0].id;
const { data: stageRows, error: stageError } = await delivery
	.from("course_publication_stages")
	.select("stage_ordinal, payload")
	.eq("publication_id", publicationId)
	.order("stage_ordinal", { ascending: true });

if (stageError) {
	throw new Error(`Unable to load published stages: ${stageError.message}`);
}

assert.ok(stageRows, "Expected published stages for the active publication");
assert.equal(
	stageRows.length,
	thaiPack.stages.length,
	`Expected ${thaiPack.stages.length} published stages, received ${stageRows.length}`,
);

for (const [index, row] of stageRows.entries()) {
	assert.equal(row.stage_ordinal, thaiPack.stages[index].ordinal);
	assert.deepStrictEqual(mapPublishedStagePayload(row.payload), thaiPack.stages[index]);
}

const { data: lessonRows, error: lessonError } = await delivery
	.from("course_publication_lessons")
	.select("lesson_ordinal, payload")
	.eq("publication_id", publicationId)
	.order("lesson_ordinal", { ascending: true });

if (lessonError) {
	throw new Error(`Unable to load published lessons: ${lessonError.message}`);
}

assert.ok(lessonRows, "Expected published lessons for the active publication");
assert.equal(
	lessonRows.length,
	thaiPack.lessons.length,
	`Expected ${thaiPack.lessons.length} published lessons, received ${lessonRows.length}`,
);

for (const [index, row] of lessonRows.entries()) {
	const runtimeLesson = thaiPack.lessons[index];
	assert.ok(runtimeLesson, `Unexpected published lesson at index ${index}`);
	assert.equal(
		row.lesson_ordinal,
		runtimeLesson.id,
		`Published lesson ordinal mismatch at index ${index}`,
	);

	const publishedLesson = normalizeForComparison(mapPublishedLessonPayload(row.payload));
	const expectedLesson = normalizeForComparison(withResolvedLessonTips(runtimeLesson));
	assert.deepStrictEqual(
		publishedLesson,
		expectedLesson,
		`Published lesson ${runtimeLesson.id} diverged from the runtime lesson contract`,
	);
}

console.log(
	`Delivery payload smoke passed for ${stageRows.length} stages and ${lessonRows.length} lessons in active publication ${publicationId}.`,
);
