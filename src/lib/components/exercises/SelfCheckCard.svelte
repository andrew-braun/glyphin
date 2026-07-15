<script lang="ts">
	import SoundPracticeLabel from "$lib/components/lesson/SoundPracticeLabel.svelte";
	import { isSoundPractice } from "$lib/data/course-journey";
	import type { LessonVocabularyEntry, Letter } from "$lib/data/types";
	import { formatLetterGlyph } from "$lib/utils/letter-display";
	import { hasMeaningfulSyllableBreakdown } from "$lib/utils/word-display";

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
	const showSyllableBreakdown = $derived(hasMeaningfulSyllableBreakdown(entry.word));

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
						<span class="self-check-card__focus-chip thai">
							{formatLetterGlyph(letter.character)}
						</span>
					{/each}
				</span>
			{/if}
			<span class="self-check-card__tap">Tap to check</span>
		</span>

		<span class="self-check-card__face self-check-card__face--back" aria-hidden={!revealed}>
			{#if soundPractice}
				<SoundPracticeLabel />
			{/if}
			<span class="self-check-card__thai thai">{entry.word.thai}</span>
			<span class="self-check-card__answer">
				<strong>{entry.word.pronunciation}</strong>
				<span>{entry.word.meaning}</span>
			</span>
			{#if showSyllableBreakdown && size === "standard"}
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
			min-height: clamp(11rem, 38dvh, 16rem);
			padding: 0;
			position: relative;
			transform-style: preserve-3d;
			width: 100%;
			@include motion-safe-transition(transform $motion-duration-slow $motion-ease-standard);

			&:hover:not(:disabled) {
				.self-check-card__face {
					border-color: var(--color-mango);
					box-shadow: var(--shadow-card-hover);
				}

				.self-check-card__fold::after {
					filter: drop-shadow(3px 3px 3px rgb(0 0 0 / 0.22));
					transform: translate(-0.14rem, -0.14rem);
				}
			}

			&:focus-visible {
				outline: none;

				.self-check-card__face {
					box-shadow: var(--focus-ring), var(--shadow-card-hover);
				}

				.self-check-card__fold::after {
					filter: drop-shadow(3px 3px 3px rgb(0 0 0 / 0.22));
					transform: translate(-0.14rem, -0.14rem);
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
			gap: $space-sm;
			inset: 0;
			justify-items: center;
			overflow: hidden;
			padding: clamp(#{$space-md}, 3vw, #{$space-xl}) clamp(#{$space-lg}, 4vw, #{$space-2xl});
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
			bottom: 0;
			height: clamp(3.75rem, 11vw, 4.75rem);
			pointer-events: none;
			position: absolute;
			right: 0;
			width: clamp(3.75rem, 11vw, 4.75rem);
			z-index: 1;

			&::before,
			&::after {
				content: "";
				inset: 0;
				position: absolute;
			}

			&::before {
				background: linear-gradient(
					135deg,
					rgb(var(--rgb-mango) / 0.08),
					rgb(var(--rgb-mango) / 0.34)
				);
				clip-path: polygon(100% 0, 100% 100%, 0 100%);
			}

			&::after {
				background: linear-gradient(
					135deg,
					rgb(var(--rgb-mango) / 0.22),
					var(--color-mango)
				);
				clip-path: polygon(0 0, 100% 0, 0 100%);
				filter: drop-shadow(2px 2px 2px rgb(0 0 0 / 0.18));
				transform-origin: 100% 100%;
				@include motion-safe-transition(
					transform $motion-duration-base $motion-ease-standard,
					filter $motion-duration-base $motion-ease-standard
				);
			}
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
				min-height: clamp(8rem, 24dvh, 10rem);
			}

			.self-check-card__face {
				gap: $space-xs;
				padding: $space-md;
			}

			.self-check-card__thai {
				font-size: clamp(1.8rem, 5vw, 2.6rem);
			}
		}
	}
</style>
