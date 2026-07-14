<script lang="ts">
	import SelfCheckCard from "$lib/components/exercises/SelfCheckCard.svelte";
	import StepLayout from "$lib/components/lesson/StepLayout.svelte";
	import Button from "$lib/components/ui/Button.svelte";
	import ButtonForwardLabel from "$lib/components/ui/ButtonForwardLabel.svelte";
	import type { LessonVocabularyEntry } from "$lib/data/types";

	let {
		entries,
		onComplete,
	}: {
		entries: LessonVocabularyEntry[];
		onComplete: () => void;
	} = $props();

	let revealedIndexes = $state<number[]>([]);
	const allRevealed = $derived(revealedIndexes.length === entries.length);

	function isRevealed(index: number): boolean {
		return revealedIndexes.includes(index);
	}

	function reveal(index: number) {
		if (!isRevealed(index)) {
			revealedIndexes = [...revealedIndexes, index];
		}
	}
</script>

<StepLayout counter="Quick recap">
	<section class="practice-recap surface-panel surface-panel--sky">
		<div class="practice-recap__grid">
			{#each entries as entry, index}
				<SelfCheckCard
					{entry}
					revealed={isRevealed(index)}
					size="compact"
					onReveal={() => reveal(index)}
				/>
			{/each}
		</div>
	</section>

	{#if allRevealed}
		<Button variant="primary" size="large" fullWidth={true} onclick={onComplete}>
			<ButtonForwardLabel label="Start the scored check" />
		</Button>
	{/if}
</StepLayout>

<style lang="scss">
	.practice-recap {
		padding: clamp(#{$space-lg}, 4vw, #{$space-2xl});

		&__grid {
			display: grid;
			gap: $space-md;
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: $bp-sm) {
		.practice-recap {
			&__grid {
				grid-template-columns: 1fr;
			}
		}
	}
</style>
