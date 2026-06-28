import assert from "node:assert/strict";

import { resolveLetterTips } from "../src/lib/data/tips.ts";
import {
	DeliveryPayloadError,
	mapPublishedLessonPayload,
} from "../src/lib/server/delivery-payload.ts";

function buildLessonPayload(overrides = {}) {
	return {
		course: {
			id: "course-1",
			slug: "thai",
			versionId: "version-1",
			displayVersion: "1.0.0",
		},
		lesson: {
			id: "lesson-1",
			slug: "sample",
			lessonOrdinal: 1,
			stage: 1,
			title: "Sample",
			anchor: {
				id: "anchor-1",
				slug: "sample",
				text: "กา",
				meaning: "crow",
				pronunciation: "gaa",
				categoryKey: "daily",
				segments: [{ text: "กา", sound: "gaa" }],
			},
			vocabulary: [],
			tips: [
				{
					id: "sound-romanization",
					title: "Romanization",
					body: "Popover body",
				},
				{
					id: "consonant-class-tones",
					title: "Consonant class & tone",
					body: "Modal lead",
					display: "modal",
					sections: [
						{
							heading: "Section",
							body: "More detail",
						},
					],
				},
			],
			newGraphemes: [
				{
					id: "grapheme-1",
					text: "ก",
					kind: "consonant",
					romanization: "g/k",
					pronunciationHint: "hard g/k sound",
					mnemonic: "A mnemonic",
					position: "standalone",
					details: { class: "mid" },
					tipRefs: {
						sound: "sound-romanization",
						type: "consonant-class-tones",
					},
					tags: [],
				},
			],
			reviewGraphemes: [],
			rules: [],
			drills: [],
			...overrides,
		},
	};
}

const mappedLesson = mapPublishedLessonPayload(buildLessonPayload());
assert.equal(mappedLesson.newLetters[0].tips?.sound?.id, "sound-romanization");
assert.equal(mappedLesson.newLetters[0].tips?.type?.display, "modal");
assert.equal(mappedLesson.newLetters[0].tips?.type?.sections?.[0]?.heading, "Section");
assert.equal(mappedLesson.newLetters[0].tips?.type?.sections?.[0]?.body, "More detail");

assert.throws(
	() =>
		mapPublishedLessonPayload(
			buildLessonPayload({
				newGraphemes: [
					{
						id: "grapheme-1",
						text: "ก",
						kind: "consonant",
						romanization: "g/k",
						pronunciationHint: "hard g/k sound",
						mnemonic: "A mnemonic",
						position: "standalone",
						details: { class: "mid" },
						tipRefs: {
							type: "missing-tip",
						},
						tags: [],
					},
				],
			}),
		),
	(error) => error instanceof DeliveryPayloadError,
	"Expected missing tip refs to fail payload mapping",
);

const locallyResolvedOverride = resolveLetterTips({
	character: "ก",
	romanization: "g/k",
	pronunciation: "hard g/k sound",
	type: "consonant",
	class: "mid",
	mnemonic: "A mnemonic",
	position: "standalone",
	tipOverrides: {
		type: "sound-romanization",
	},
});

assert.equal(locallyResolvedOverride.type?.id, "sound-romanization");

console.log("Delivery payload tip mapper coverage passed.");
