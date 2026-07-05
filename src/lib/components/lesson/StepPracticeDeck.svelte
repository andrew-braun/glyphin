<script lang="ts">
	import StepLayout from "$lib/components/lesson/StepLayout.svelte";
	import type { Lesson, LessonVocabularyEntry } from "$lib/data/types";

	let {
		lesson,
		entries,
		onComplete,
	}: {
		lesson: Lesson;
		entries: LessonVocabularyEntry[];
		onComplete: () => void;
	} = $props();

	let currentIndex = $state(0);
	let revealed = $state(false);

	const currentEntry = $derived(entries[currentIndex]);
	const hasNextEntry = $derived(currentIndex < entries.length - 1);
	const focusLetters = $derived(
		currentEntry
			? lesson.newLetters.filter((letter) =>
					currentEntry.word.thai.includes(letter.character),
				)
			: [],
	);
	const hintText = $derived(
		revealed ? (hasNextEntry ? "Tap for next card" : "Tap to continue") : "Tap to reveal",
	);
	const cardActionLabel = $derived(
		revealed
			? hasNextEntry
				? `Show next practice card after ${currentEntry?.word.thai}`
				: "Continue to quick recap"
			: `Reveal pronunciation and meaning for ${currentEntry?.word.thai}`,
	);

	function handleCardAction() {
		if (!revealed) {
			revealed = true;
			return;
		}

		if (hasNextEntry) {
			currentIndex += 1;
			revealed = false;
			return;
		}

		onComplete();
	}
</script>

<StepLayout counter={`Practice stack ${currentIndex + 1} of ${entries.length}`}>
	{#if currentEntry}
		<section class="practice-deck surface-panel lesson-accent-panel lesson-accent-panel--mango">
			<div class="practice-deck__stack" aria-live="polite">
				<div class="practice-deck__shadow practice-deck__shadow--back"></div>
				<div class="practice-deck__shadow practice-deck__shadow--mid"></div>
				<button
					type="button"
					class={["practice-deck__card", { "practice-deck__card--revealed": revealed }]}
					aria-label={cardActionLabel}
					onclick={handleCardAction}
				>
					<div
						class="practice-deck__face practice-deck__face--front"
						aria-hidden={revealed}
					>
						<span class="practice-deck__face-label">Try to read</span>
						<span class="practice-deck__thai thai">{currentEntry.word.thai}</span>
						{#if focusLetters.length > 0}
							<ul
								class="practice-deck__focus-list"
								aria-label="New letters in this card"
							>
								{#each focusLetters as letter}
									<li class="practice-deck__focus-chip thai">
										{letter.character}
									</li>
								{/each}
							</ul>
						{/if}
					</div>

					<div
						class="practice-deck__face practice-deck__face--back"
						aria-hidden={!revealed}
					>
						<span class="practice-deck__face-label">Check yourself</span>
						<span class="practice-deck__thai thai">{currentEntry.word.thai}</span>
						<div class="practice-deck__answer">
							<strong>{currentEntry.word.pronunciation}</strong>
							<span>{currentEntry.word.meaning}</span>
						</div>
					</div>
				</button>
			</div>

			<p class="practice-deck__hint">
				<span class="practice-deck__hint-arrow" aria-hidden="true">&uarr;</span>
				<span>{hintText}</span>
			</p>
		</section>
	{/if}
</StepLayout>

<style lang="scss">
	.practice-deck {
		display: grid;
		gap: $space-sm;
		padding: clamp(#{$space-md}, 3vw, #{$space-lg});

		.practice-deck__face-label {
			color: var(--color-text-soft);
			font-size: $font-size-xs;
			font-weight: 800;
			letter-spacing: 0.08em;
			text-transform: uppercase;
		}

		.practice-deck__thai {
			font-size: clamp(2rem, 6vw, 3rem);
			font-weight: 800;
			line-height: 1;
		}

		.practice-deck__stack {
			margin: 0 auto;
			max-width: 32rem;
			padding: $space-sm 0 0;
			perspective: 1400px;
			position: relative;
			width: min(100%, 32rem);
		}

		.practice-deck__shadow,
		.practice-deck__card {
			border-radius: $radius-lg;
		}

		.practice-deck__shadow {
			background: rgb(var(--rgb-mango) / 0.12);
			border: 1px solid rgb(var(--rgb-mango) / 0.18);
			inset: auto 0 0;
			pointer-events: none;
			position: absolute;
		}

		.practice-deck__shadow--back {
			height: calc(100% - 0.35rem);
			transform: translateY(0.65rem) scale(0.96);
		}

		.practice-deck__shadow--mid {
			height: calc(100% - 0.2rem);
			transform: translateY(0.35rem) scale(0.98);
		}

		.practice-deck__card {
			appearance: none;
			background: transparent;
			border: 0;
			color: inherit;
			cursor: pointer;
			display: block;
			font: inherit;
			min-height: 20rem;
			padding: 0;
			position: relative;
			text-align: inherit;
			transform-style: preserve-3d;
			transition:
				transform $motion-duration-slow $motion-ease-standard,
				box-shadow $motion-duration-base $motion-ease-standard;
			width: 100%;

			&:hover .practice-deck__face {
				box-shadow: var(--shadow-card-hover);
			}

			&:focus-visible {
				outline: none;

				.practice-deck__face--front,
				.practice-deck__face--back {
					outline: 2px solid var(--color-mango);
					outline-offset: 3px;
				}
			}

			&.practice-deck__card--revealed {
				transform: rotateY(180deg);
			}
		}

		.practice-deck__face {
			backface-visibility: hidden;
			background: var(--color-surface-card);
			border: 1px solid var(--color-border-strong);
			border-radius: $radius-lg;
			box-shadow: var(--shadow-card);
			display: grid;
			gap: $space-sm;
			inset: 0;
			padding: clamp(#{$space-md}, 3vw, #{$space-lg});
			pointer-events: none;
			position: absolute;
			text-align: center;
			transition: box-shadow $motion-duration-base $motion-ease-standard;
		}

		.practice-deck__face--front,
		.practice-deck__face--back {
			align-content: center;
			justify-items: center;
		}

		.practice-deck__face--back {
			transform: rotateY(180deg);
		}

		.practice-deck__focus-list {
			display: flex;
			flex-wrap: wrap;
			gap: $space-sm;
			justify-content: center;
			list-style: none;
			margin: 0;
			padding: 0;
		}

		.practice-deck__focus-chip {
			align-items: center;
			background: var(--surface-interactive);
			border: 1px solid var(--color-border);
			border-radius: 999px;
			color: var(--color-mango);
			display: inline-flex;
			font-size: $font-size-lg;
			font-weight: 800;
			gap: $space-xs;
			justify-content: center;
			padding: $space-xs $space-sm;
		}

		.practice-deck__answer {
			display: grid;
			gap: $space-xs;

			strong {
				font-size: $font-size-lg;
			}

			span {
				color: var(--color-text-muted);
				font-size: $font-size-base;
			}
		}

		.practice-deck__hint {
			align-items: center;
			color: var(--color-text-soft);
			display: grid;
			font-size: $font-size-xs;
			font-weight: 800;
			gap: $space-xs;
			justify-items: center;
			letter-spacing: 0.08em;
			margin: 0;
			text-transform: uppercase;
		}

		.practice-deck__hint-arrow {
			color: var(--color-mango);
			font-size: $font-size-xl;
			line-height: 1;
		}
	}

	@media (min-width: $bp-md) {
		.practice-deck {
			gap: $space-sm;
			padding: $space-lg;

			.practice-deck__stack {
				max-width: 28rem;
			}

			.practice-deck__card {
				min-height: 14.5rem;
			}

			.practice-deck__face {
				gap: $space-sm;
				padding: $space-lg $space-xl;
			}

			.practice-deck__thai {
				font-size: clamp(1.9rem, 2.8vw, 2.5rem);
			}
		}
	}

	@media (max-width: $bp-sm) {
		.practice-deck {
			.practice-deck__card {
				min-height: 18rem;
			}
		}
	}
</style>
