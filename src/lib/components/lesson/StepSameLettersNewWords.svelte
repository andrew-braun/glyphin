<!--
  StepSameLettersNewWords.svelte — Lesson Step 5: Transfer Words
  ===============================================================
  Shows support vocabulary that reuses the lesson's new letters and patterns.
  This gives the learner a low-stakes transfer moment before scored drills.
-->
<script lang="ts">
	import SameLettersWordList from "$lib/components/lesson/SameLettersWordList.svelte";
	import StepLayout from "$lib/components/lesson/StepLayout.svelte";
	import Button from "$lib/components/ui/Button.svelte";
	import Eyebrow from "$lib/components/ui/Eyebrow.svelte";
	import Reveal from "$lib/components/ui/Reveal.svelte";
	import type { Lesson, LessonVocabularyEntry } from "$lib/data/types";

	let {
		lesson,
		words,
		onComplete,
	}: {
		lesson: Lesson;
		words: LessonVocabularyEntry[];
		onComplete: () => void;
	} = $props();
</script>

<StepLayout class="step--same-letters">
	<section class="same-letters surface-panel lesson-accent-panel lesson-accent-panel--mango">
		<Reveal as="div" distance={14}>
			<div class="same-letters__intro">
				<div class="same-letters__copy">
					<Eyebrow>Fresh word shapes</Eyebrow>
					<h2>Same letters, new words</h2>
					<p>
						The word you opened was <span class="thai">{lesson.anchorWord.thai}</span>.
						Now read the same letters and patterns in different real words.
					</p>
				</div>

				<div class="same-letters__anchor" aria-label="Anchor word from this lesson">
					<span class="same-letters__anchor-label">Anchor</span>
					<span class="same-letters__anchor-word thai">{lesson.anchorWord.thai}</span>
					<span class="same-letters__anchor-meaning">{lesson.anchorWord.meaning}</span>
				</div>
			</div>
		</Reveal>

		<SameLettersWordList
			entries={words}
			newLetters={lesson.newLetters}
			ariaLabel="Words using this lesson's letters"
			revealStart={120}
		/>
	</section>

	<Button variant="primary" size="large" fullWidth={true} onclick={onComplete}>
		Bring on the drills ->
	</Button>
</StepLayout>

<style lang="scss">
	.same-letters {
		--same-letters-accent: var(--color-mango);
		--same-letters-panel-padding: clamp(#{$space-lg}, 4vw, #{$space-2xl});

		display: grid;
		gap: clamp(#{$space-lg}, 3vw, #{$space-2xl});
		padding: var(--same-letters-panel-padding);

		.same-letters__intro {
			display: grid;
			gap: $space-lg;
		}

		.same-letters__copy {
			display: grid;
			gap: $space-sm;
			max-width: 38rem;

			h2,
			p {
				margin: 0;
			}

			p {
				color: var(--color-text-muted);
				font-size: $font-size-lg;
				line-height: 1.65;
			}

			.thai {
				color: var(--color-mango);
				font-weight: 800;
			}
		}

		.same-letters__anchor {
			align-content: center;
			background: var(--color-mango);
			border: 1px solid var(--color-mango);
			border-radius: $radius-lg;
			box-shadow: var(--shadow-card);
			color: var(--color-on-mango);
			display: grid;
			gap: $space-xs;
			justify-items: center;
			padding: $space-lg;
			text-align: center;
		}

		.same-letters__anchor-label {
			color: var(--color-on-mango);
			font-size: $font-size-xs;
			font-weight: 800;
			letter-spacing: 0.08em;
			text-transform: uppercase;
		}

		.same-letters__anchor-word {
			font-size: clamp(2.5rem, 7vw, 4rem);
			font-weight: 750;
			line-height: 1;
		}

		.same-letters__anchor-meaning {
			color: var(--color-on-mango);
		}
	}

	@media (min-width: $bp-md) {
		.same-letters {
			.same-letters__intro {
				align-items: center;
				grid-template-columns: minmax(0, 1fr) minmax(14rem, 0.42fr);
			}
		}
	}

	@media (max-width: $bp-sm) {
		.same-letters {
			padding: $space-lg;
		}
	}
</style>
