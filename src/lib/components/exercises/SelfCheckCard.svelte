<script lang="ts">
	import SoundPracticeLabel from "$lib/components/lesson/SoundPracticeLabel.svelte";
	import { isSoundPractice } from "$lib/data/course-journey";
	import type { LessonVocabularyEntry, Letter } from "$lib/data/types";

	let {
		entry,
		focusLetters = [],
		revealed,
		size = "standard",
		onReveal,
	}: {
		entry: LessonVocabularyEntry;
		focusLetters?: Letter[];
		revealed: boolean;
		size?: "standard" | "compact";
		onReveal: () => void;
	} = $props();

	const soundPractice = $derived(isSoundPractice(entry));

	function reveal() {
		if (!revealed) onReveal();
	}
</script>

<div class={["self-check-card", `self-check-card--${size}`]}>
	<button
		type="button"
		class={["self-check-card__flipper", { "self-check-card__flipper--revealed": revealed }]}
		aria-label={`Reveal pronunciation and meaning for ${entry.word.thai}`}
		aria-pressed={revealed}
		disabled={revealed}
		onclick={reveal}
	>
		<span class="self-check-card__face self-check-card__face--front" aria-hidden={revealed}>
			<span class="self-check-card__fold" aria-hidden="true"></span>
			{#if soundPractice}
				<SoundPracticeLabel />
			{:else}
				<span class="self-check-card__eyebrow">Try to read</span>
			{/if}
			<span class="self-check-card__thai thai">{entry.word.thai}</span>
			{#if focusLetters.length > 0}
				<span class="self-check-card__focus-list" aria-label="New letters in this card">
					{#each focusLetters as letter}
						<span class="self-check-card__focus-chip thai">{letter.character}</span>
					{/each}
				</span>
			{/if}
			<span class="self-check-card__tap">Tap to check</span>
		</span>

		<span class="self-check-card__face self-check-card__face--back" aria-hidden={!revealed}>
			{#if soundPractice}
				<SoundPracticeLabel />
			{:else}
				<span class="self-check-card__eyebrow">Your read</span>
			{/if}
			<span class="self-check-card__thai thai">{entry.word.thai}</span>
			<span class="self-check-card__answer">
				<strong>{entry.word.pronunciation}</strong>
				<span>{entry.word.meaning}</span>
			</span>
			{#if entry.word.syllables.length > 0 && size === "standard"}
				<span class="self-check-card__syllables">
					{#each entry.word.syllables as syllable}
						<span>
							<span class="thai">{syllable.thai}</span>
							<small>{syllable.sound}</small>
						</span>
					{/each}
				</span>
			{/if}
		</span>
	</button>

	<div class="visually-hidden" aria-live="polite">
		{#if revealed}
			{entry.word.thai}, {entry.word.pronunciation}, {entry.word.meaning}
		{/if}
	</div>
</div>

<style lang="scss">
	.self-check-card {
		perspective: 1400px;
		width: 100%;

		&__flipper {
			appearance: none;
			background: transparent;
			border: 0;
			color: inherit;
			cursor: pointer;
			display: block;
			font: inherit;
			min-height: 18rem;
			padding: 0;
			position: relative;
			transform-style: preserve-3d;
			width: 100%;
			@include motion-safe-transition(transform $motion-duration-slow $motion-ease-standard);

			&:hover:not(:disabled) .self-check-card__face {
				border-color: var(--color-mango);
				box-shadow: var(--shadow-card-hover);
			}

			&:focus-visible {
				outline: none;

				.self-check-card__face {
					box-shadow: var(--focus-ring), var(--shadow-card-hover);
				}
			}

			&:disabled {
				color: inherit;
				cursor: default;
				opacity: 1;
			}

			&--revealed {
				transform: rotateY(180deg);
			}
		}

		&__face {
			align-content: center;
			backface-visibility: hidden;
			background: var(--color-surface-card);
			border: 1px solid var(--color-border-strong);
			border-radius: $radius-xl;
			box-shadow: var(--shadow-card);
			display: grid;
			gap: $space-md;
			inset: 0;
			justify-items: center;
			overflow: hidden;
			padding: clamp(#{$space-lg}, 4vw, #{$space-2xl});
			pointer-events: none;
			position: absolute;
			text-align: center;
			@include motion-safe-transition(
				border-color $transition-fast,
				box-shadow $transition-fast
			);

			&--back {
				background:
					linear-gradient(145deg, rgb(var(--rgb-mango) / 0.1), transparent 58%),
					var(--color-surface-card);
				transform: rotateY(180deg);
			}
		}

		&__fold {
			background: linear-gradient(
				225deg,
				var(--surface-panel-mango) 0 48%,
				var(--color-mango) 49% 52%,
				transparent 53%
			);
			box-shadow: -4px 4px 7px rgb(0 0 0 / 0.12);
			height: 3.25rem;
			position: absolute;
			right: 0;
			top: 0;
			width: 3.25rem;
		}

		&__eyebrow,
		&__tap {
			color: var(--color-text-soft);
			font-size: $font-size-xs;
			font-weight: 800;
			letter-spacing: 0.09em;
			text-transform: uppercase;
		}

		&__tap {
			color: var(--color-mango);
		}

		&__thai {
			color: var(--color-primary-strong);
			font-size: clamp(2.5rem, 8vw, 4.5rem);
			font-weight: 800;
			line-height: 1.05;
		}

		&__focus-list,
		&__syllables {
			display: flex;
			flex-wrap: wrap;
			gap: $space-sm;
			justify-content: center;
		}

		&__focus-chip {
			background: rgb(var(--rgb-mango) / 0.14);
			border: 1px solid rgb(var(--rgb-mango) / 0.44);
			border-radius: $radius-full;
			color: var(--color-mango);
			font-size: $font-size-lg;
			font-weight: 800;
			padding: $space-xs $space-sm;
		}

		&__answer {
			display: grid;
			gap: $space-xs;

			strong {
				font-size: $font-size-xl;
			}

			span {
				color: var(--color-text-muted);
			}
		}

		&__syllables > span {
			background: var(--surface-interactive);
			border-radius: $radius-md;
			display: grid;
			gap: $space-xs;
			padding: $space-xs $space-sm;

			small {
				color: var(--color-text-muted);
			}
		}

		&--compact {
			.self-check-card__flipper {
				min-height: 11rem;
			}

			.self-check-card__face {
				gap: $space-sm;
				padding: $space-lg $space-md;
			}

			.self-check-card__thai {
				font-size: clamp(1.8rem, 5vw, 2.6rem);
			}
		}
	}
</style>
