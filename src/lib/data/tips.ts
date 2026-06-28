import type { Letter, LetterTipSlot, Tip } from "$lib/data/types";

export const tips: Record<string, Tip> = {
	"sound-romanization": {
		id: "sound-romanization",
		title: "Romanization",
		body: "This shows an approximate English spelling for the sound. Thai sounds don't map perfectly to English letters, so treat this as a guide, not a rule. Listening is the best way to nail the exact sound.",
	},
	"pronunciation-by-position": {
		id: "pronunciation-by-position",
		title: "Sound changes by position",
		body: "Thai consonants can sound different depending on where they appear in a syllable. The pronunciation shown here is the initial (leading) sound. When the same consonant closes a syllable, it often changes — for example, many consonants become a soft 'n', 'm', or stop sound at the end.",
	},
	"consonant-class-tones": {
		id: "consonant-class-tones",
		title: "Consonant class & tone",
		body: "Every Thai consonant belongs to one of three classes — low, mid, or high. The class of the opening consonant is the starting point for every tone rule in the language.",
		display: "modal",
		sections: [
			{
				heading: "Think of it like three singers",
				body: 'Imagine three singers — one with a naturally mid-range voice, one higher, one lower. Every Thai consonant is one of them.\n\nMid class (like ก, จ, ด): middle default tone.\nHigh class (like ข, ฉ, ถ): higher default tone.\nLow class (like ค, ง, น): lower default tone.\n\nThat "natural voice" is the consonant class. It sets the starting pitch for any syllable the consonant begins.',
			},
			{
				heading: "Why it changes the meaning of a word",
				body: 'Two syllables can look nearly identical but mean completely different things — just because their opening consonant belongs to a different class.\n\nก (mid class) + า → กา "crow" → mid tone\nค (low class) + า → คา "value / stuck" → rising tone\n\nSame vowel, same length, different consonant class → different tone → different word.',
			},
			{
				heading: "Class is just the starting point",
				body: "Vowel length, the type of final consonant, and tone marks all layer on top of the class. But class comes first — miss it, and the rest of the tone rules won't make sense.\n\nFor now, just learn each consonant's class as you meet it. The tone patterns will click into place as you see more words.",
			},
			{
				heading: "For this card",
				body: "The class shown here is this letter's class. When you see it open a real syllable, that class is your first clue about the syllable's tone — before vowel length, finals, or marks come into play.",
			},
		],
	},
	"letter-type-vowel": {
		id: "letter-type-vowel",
		title: "Vowel",
		body: "Thai vowels are separate characters that attach to a consonant. Unlike English letters, they can appear above, below, to the left, or to the right of — or even wrapped around — their consonant. Visual order doesn't always match reading order.",
	},
	"letter-type-tone-mark": {
		id: "letter-type-tone-mark",
		title: "Tone mark",
		body: "Tone marks are small symbols written above a consonant to override the default tone of the syllable. Thai has two common tone marks (mai ek ่ and mai tho ้). Their effect depends on the consonant class of the syllable they modify.",
	},
	"vowel-position": {
		id: "vowel-position",
		title: "Vowel position",
		body: "Thai vowels don't always sit where you expect. This vowel is written in a specific spot relative to its consonant — but when you read a word, you still pronounce the consonant first, then the vowel sound, regardless of visual position.",
	},
};

/**
 * Resolves which tips to show for each slot on a letter card.
 * Applies shared concept defaults by letter type/class/position,
 * then merges any per-letter override tip ids from letter.tips.
 * This is the TS analogue of the future tip_attachments DB query.
 */
export function resolveLetterTips(letter: Letter): Partial<Record<LetterTipSlot, Tip>> {
	const resolved: Partial<Record<LetterTipSlot, Tip>> = {};

	// Sound slot: romanization explanation for every letter
	resolved.sound = tips["sound-romanization"];

	// Pronunciation slot: consonants get the position-dependent sound tip
	if (letter.type === "consonant") {
		resolved.pronunciation = tips["pronunciation-by-position"];
	}

	// Type slot: depends on letter type
	if (letter.type === "consonant" && letter.class) {
		resolved.type = tips["consonant-class-tones"];
	} else if (letter.type === "vowel") {
		resolved.type = tips["letter-type-vowel"];
	} else if (letter.type === "tone_mark") {
		resolved.type = tips["letter-type-tone-mark"];
	}

	// Position slot: non-standalone vowels/marks get the vowel-position tip
	if (letter.position && letter.position !== "standalone") {
		resolved.position = tips["vowel-position"];
	}

	// Apply per-letter overrides (letter.tips values are tip ids)
	if (letter.tips) {
		for (const [slot, tipId] of Object.entries(letter.tips) as [LetterTipSlot, string][]) {
			const override = tips[tipId];
			if (override) {
				resolved[slot] = override;
			}
		}
	}

	return resolved;
}
