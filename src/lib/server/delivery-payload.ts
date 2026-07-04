import type {
	DrillQuestion,
	Lesson,
	LessonVocabularySourceType,
	Letter,
	LetterTipSlot,
	Rule,
	Tip,
	Word,
} from "../data/types";

export type PublishedLessonCard = Pick<
	Lesson,
	"id" | "stage" | "title" | "anchorWord" | "newLetters"
>;

const wordCategories = new Set<Word["category"]>(["place", "food", "transport", "daily", "sign"]);
const letterTypes = new Set<Letter["type"]>(["consonant", "vowel", "tone_mark", "numeral", "mark"]);
const letterClasses = new Set<NonNullable<Letter["class"]>>(["low", "mid", "high"]);
const letterPositions = new Set<NonNullable<Letter["position"]>>([
	"left",
	"right",
	"above",
	"below",
	"around",
	"standalone",
]);
const letterTipSlots = new Set<LetterTipSlot>(["sound", "pronunciation", "type", "position"]);
const tipDisplays = new Set<NonNullable<Tip["display"]>>(["popover", "modal"]);
const lessonVocabularyRoles = new Set<"anchor" | "practice_core" | "practice_extension">([
	"anchor",
	"practice_core",
	"practice_extension",
]);
const lessonVocabularySourceTypes = new Set<LessonVocabularySourceType>([
	"real",
	"phrase",
	"nonsense",
]);
const drillTypes = new Set<DrillQuestion["type"]>(["recognize", "match", "sound", "spot"]);

export class DeliveryPayloadError extends Error {}

function fail(context: string): never {
	throw new DeliveryPayloadError(`Invalid published lesson payload at ${context}`);
}

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null;
}

function expectRecord(value: unknown, context: string): Record<string, unknown> {
	if (!isRecord(value)) {
		fail(context);
	}

	return value;
}

function expectString(value: unknown, context: string): string {
	if (typeof value !== "string" || value.length === 0) {
		fail(context);
	}

	return value;
}

function readOptionalString(value: unknown): string | undefined {
	return typeof value === "string" && value.length > 0 ? value : undefined;
}

function expectInteger(value: unknown, context: string): number {
	if (typeof value !== "number" || !Number.isInteger(value)) {
		fail(context);
	}

	return value;
}

function expectArray(value: unknown, context: string): unknown[] {
	if (!Array.isArray(value)) {
		fail(context);
	}

	return value;
}

function expectEnum<T>(allowed: Set<T>, value: unknown, context: string): T {
	if (typeof value !== "string" || !allowed.has(value as T)) {
		fail(context);
	}

	return value as T;
}

function mapTip(value: unknown, context: string): Tip {
	const record = expectRecord(value, context);
	const display =
		record.display === undefined
			? undefined
			: expectEnum(tipDisplays, record.display, `${context}.display`);
	const sectionsValue = record.sections;
	const sections =
		sectionsValue === undefined
			? undefined
			: expectArray(sectionsValue, `${context}.sections`).map((section, index) => {
					const sectionRecord = expectRecord(section, `${context}.sections[${index}]`);
					const heading = readOptionalString(sectionRecord.heading);

					return {
						...(heading ? { heading } : {}),
						body: expectString(
							sectionRecord.body,
							`${context}.sections[${index}].body`,
						),
					};
				});

	return {
		id: expectString(record.id, `${context}.id`),
		title: expectString(record.title, `${context}.title`),
		body: expectString(record.body, `${context}.body`),
		...(display ? { display } : {}),
		...(sections && sections.length > 0 ? { sections } : {}),
	};
}

function readLessonTipCatalog(lesson: Record<string, unknown>): Record<string, Tip> {
	if (lesson.tips === undefined) {
		return {};
	}

	const catalog: Record<string, Tip> = {};
	const tips = expectArray(lesson.tips, "payload.lesson.tips");

	for (const [index, tip] of tips.entries()) {
		const mappedTip = mapTip(tip, `payload.lesson.tips[${index}]`);
		if (catalog[mappedTip.id]) {
			fail(`payload.lesson.tips[${index}].id`);
		}

		catalog[mappedTip.id] = mappedTip;
	}

	return catalog;
}

function readHydratedLetterTips(
	value: unknown,
	tipCatalog: Record<string, Tip>,
	context: string,
): Partial<Record<LetterTipSlot, Tip>> | undefined {
	if (value === undefined) {
		return undefined;
	}

	const record = expectRecord(value, context);
	const tips: Partial<Record<LetterTipSlot, Tip>> = {};

	for (const [slot, tipIdValue] of Object.entries(record)) {
		if (!letterTipSlots.has(slot as LetterTipSlot)) {
			fail(`${context}.${slot}`);
		}

		const tipId = expectString(tipIdValue, `${context}.${slot}`);
		const tip = tipCatalog[tipId];
		if (!tip) {
			fail(`${context}.${slot}`);
		}

		tips[slot as LetterTipSlot] = tip;
	}

	return Object.keys(tips).length > 0 ? tips : undefined;
}

function mapWord(value: unknown, context: string): Word {
	const record = expectRecord(value, context);
	const syllables = expectArray(record.segments, `${context}.segments`).map((segment, index) => {
		const segmentRecord = expectRecord(segment, `${context}.segments[${index}]`);

		return {
			thai: expectString(segmentRecord.text, `${context}.segments[${index}].text`),
			sound: expectString(segmentRecord.sound, `${context}.segments[${index}].sound`),
		};
	});

	const contextNote = readOptionalString(record.contextNote);

	return {
		thai: expectString(record.text, `${context}.text`),
		meaning: expectString(record.meaning, `${context}.meaning`),
		pronunciation: expectString(record.pronunciation, `${context}.pronunciation`),
		category: expectEnum(wordCategories, record.categoryKey, `${context}.categoryKey`),
		syllables,
		...(contextNote ? { contextNote } : {}),
	};
}

function readVocabularySourceType(value: unknown, context: string): LessonVocabularySourceType {
	if (value === undefined) {
		return "real";
	}

	return expectEnum(lessonVocabularySourceTypes, value, context);
}

function mapLetter(value: unknown, context: string, tipCatalog: Record<string, Tip>): Letter {
	const record = expectRecord(value, context);
	const details = isRecord(record.details) ? record.details : {};
	const candidateClass = details.class;
	const className =
		candidateClass === undefined
			? undefined
			: expectEnum(letterClasses, candidateClass, `${context}.details.class`);
	const position =
		record.position === undefined
			? undefined
			: expectEnum(letterPositions, record.position, `${context}.position`);
	const tips = readHydratedLetterTips(record.tipRefs, tipCatalog, `${context}.tipRefs`);

	return {
		character: expectString(record.text, `${context}.text`),
		romanization: expectString(record.romanization, `${context}.romanization`),
		pronunciation: expectString(record.pronunciationHint, `${context}.pronunciationHint`),
		type: expectEnum(letterTypes, record.kind, `${context}.kind`),
		mnemonic: expectString(record.mnemonic, `${context}.mnemonic`),
		...(className ? { class: className } : {}),
		...(position ? { position } : {}),
		...(tips ? { tips } : {}),
	};
}

function mapRule(value: unknown, context: string): Rule {
	const record = expectRecord(value, context);
	const examples = expectArray(record.examples, `${context}.examples`).map((example, index) => {
		const exampleRecord = expectRecord(example, `${context}.examples[${index}]`);

		return expectString(exampleRecord.text, `${context}.examples[${index}].text`);
	});

	return {
		id: expectString(record.key, `${context}.key`),
		name: expectString(record.name, `${context}.name`),
		shortDescription: expectString(record.shortDescription, `${context}.shortDescription`),
		explanation: expectString(record.explanation, `${context}.explanation`),
		examples,
	};
}

function mapDrill(value: unknown, context: string): DrillQuestion {
	const record = expectRecord(value, context);
	const options = expectArray(record.options, `${context}.options`).map((option, index) => {
		const optionRecord = expectRecord(option, `${context}.options[${index}]`);

		return {
			text: expectString(optionRecord.text, `${context}.options[${index}].text`),
			isCorrect: optionRecord.isCorrect === true,
		};
	});

	const correctIndexes = options.flatMap((option, index) => (option.isCorrect ? [index] : []));
	if (correctIndexes.length !== 1) {
		fail(`${context}.options`);
	}

	const hint = readOptionalString(record.hint);

	return {
		type: expectEnum(drillTypes, record.type, `${context}.type`),
		prompt: expectString(record.prompt, `${context}.prompt`),
		options: options.map((option) => option.text),
		correctIndex: correctIndexes[0],
		...(hint ? { hint } : {}),
	};
}

function readLessonCore(payload: unknown): {
	lesson: Record<string, unknown>;
	reviewLetters: string[];
	tipCatalog: Record<string, Tip>;
} {
	const payloadRecord = expectRecord(payload, "payload");
	const lesson = expectRecord(payloadRecord.lesson, "payload.lesson");
	const tipCatalog = readLessonTipCatalog(lesson);
	const reviewGraphemes = expectArray(lesson.reviewGraphemes, "payload.lesson.reviewGraphemes");
	const reviewLetters = reviewGraphemes.map((grapheme, index) => {
		const graphemeRecord = expectRecord(grapheme, `payload.lesson.reviewGraphemes[${index}]`);

		return expectString(graphemeRecord.text, `payload.lesson.reviewGraphemes[${index}].text`);
	});

	return { lesson, reviewLetters, tipCatalog };
}

export function mapPublishedLessonCard(payload: unknown): PublishedLessonCard {
	const { lesson, tipCatalog } = readLessonCore(payload);

	return {
		id: expectInteger(lesson.lessonOrdinal, "payload.lesson.lessonOrdinal"),
		stage: expectInteger(lesson.stage, "payload.lesson.stage"),
		title: expectString(lesson.title, "payload.lesson.title"),
		anchorWord: mapWord(lesson.anchor, "payload.lesson.anchor"),
		newLetters: expectArray(lesson.newGraphemes, "payload.lesson.newGraphemes").map(
			(grapheme, index) =>
				mapLetter(grapheme, `payload.lesson.newGraphemes[${index}]`, tipCatalog),
		),
	};
}

export function mapPublishedLessonPayload(payload: unknown): Lesson {
	const { lesson, reviewLetters, tipCatalog } = readLessonCore(payload);

	return {
		id: expectInteger(lesson.lessonOrdinal, "payload.lesson.lessonOrdinal"),
		stage: expectInteger(lesson.stage, "payload.lesson.stage"),
		title: expectString(lesson.title, "payload.lesson.title"),
		anchorWord: mapWord(lesson.anchor, "payload.lesson.anchor"),
		vocabulary: expectArray(lesson.vocabulary, "payload.lesson.vocabulary").flatMap(
			(entry, index) => {
				const entryRecord = expectRecord(entry, `payload.lesson.vocabulary[${index}]`);
				const itemRecord = expectRecord(
					entryRecord.item,
					`payload.lesson.vocabulary[${index}].item`,
				);
				const role = expectEnum(
					lessonVocabularyRoles,
					entryRecord.roleKey,
					`payload.lesson.vocabulary[${index}].roleKey`,
				);

				if (role === "anchor") {
					return [];
				}

				const itemMetadata = isRecord(itemRecord.metadata) ? itemRecord.metadata : {};
				const tier = role === "practice_extension" ? "extension" : "core";

				return [
					{
						tier,
						sourceType: readVocabularySourceType(
							itemMetadata.sourceType,
							`payload.lesson.vocabulary[${index}].item.metadata.sourceType`,
						),
						drillTarget: entryRecord.isDrillTarget === true,
						word: mapWord(itemRecord, `payload.lesson.vocabulary[${index}].item`),
					},
				];
			},
		),
		newLetters: expectArray(lesson.newGraphemes, "payload.lesson.newGraphemes").map(
			(grapheme, index) =>
				mapLetter(grapheme, `payload.lesson.newGraphemes[${index}]`, tipCatalog),
		),
		rulesIntroduced: expectArray(lesson.rules, "payload.lesson.rules").map((rule, index) =>
			mapRule(rule, `payload.lesson.rules[${index}]`),
		),
		drills: expectArray(lesson.drills, "payload.lesson.drills").map((drill, index) =>
			mapDrill(drill, `payload.lesson.drills[${index}]`),
		),
		...(reviewLetters.length > 0 ? { reviewLetters } : {}),
	};
}
