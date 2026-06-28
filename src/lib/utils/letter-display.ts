import type { Letter } from "$lib/data/types";

/** Full display sentence for a letter's written position, or null when standalone/undefined. */
export function formatPositionPhrase(position: Letter["position"]): string | null {
	switch (position) {
		case "left":
			return "Written to the left of the consonant";
		case "right":
			return "Written to the right of the consonant";
		case "above":
			return "Written above the consonant";
		case "below":
			return "Written below the consonant";
		case "around":
			return "Written around the consonant";
		default:
			return null;
	}
}
