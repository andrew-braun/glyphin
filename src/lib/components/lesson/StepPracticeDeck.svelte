<script lang="ts">
	import SelfCheckCard from "$lib/components/exercises/SelfCheckCard.svelte";
	import StepLayout from "$lib/components/lesson/StepLayout.svelte";
	import Button from "$lib/components/ui/Button.svelte";
	import ButtonForwardLabel from "$lib/components/ui/ButtonForwardLabel.svelte";
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

	function reveal() {
		revealed = true;
	}

	function next() {
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
			{#key currentIndex}
				<div class="practice-deck__stack">
					<div class="practice-deck__shadow practice-deck__shadow--back"></div>
					<div class="practice-deck__shadow practice-deck__shadow--mid"></div>
					<SelfCheckCard
						entry={currentEntry}
						{focusLetters}
						{revealed}
						onReveal={reveal}
					/>
				</div>
			{/key}
		</section>

		{#if revealed}
			<Button variant="primary" size="large" fullWidth={true} onclick={next}>
				<ButtonForwardLabel label={hasNextEntry ? "Next card" : "Continue to recap"} />
			</Button>
		{/if}
	{/if}
</StepLayout>

<style lang="scss">
	.practice-deck {
		padding: clamp(#{$space-md}, 3vw, #{$space-lg});

		&__stack {
			margin: 0 auto;
			max-width: 32rem;
			position: relative;
		}

		&__shadow {
			background: rgb(var(--rgb-mango) / 0.12);
			border: 1px solid rgb(var(--rgb-mango) / 0.18);
			border-radius: $radius-xl;
			inset: auto 0 0;
			pointer-events: none;
			position: absolute;

			&--back {
				height: calc(100% - 0.35rem);
				transform: translateY(0.7rem) scale(0.96);
			}

			&--mid {
				height: calc(100% - 0.2rem);
				transform: translateY(0.4rem) scale(0.98);
			}
		}

		:global(.self-check-card) {
			position: relative;
		}
	}
</style>
