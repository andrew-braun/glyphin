import type { Word } from "$lib/data/types";

export function hasMeaningfulSyllableBreakdown(
	word: Pick<Word, "thai" | "pronunciation" | "syllables">,
): boolean {
	return (
		word.syllables.length > 1 ||
		word.syllables.some(
			(syllable) => syllable.thai !== word.thai || syllable.sound !== word.pronunciation,
		)
	);
}
