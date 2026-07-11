<script lang="ts">
	import Row from "$lib/components/layout/Row.svelte";
	import ButtonForwardLabel from "$lib/components/ui/ButtonForwardLabel.svelte";
	import Progress from "$lib/components/ui/Progress.svelte";
	import StatCard from "$lib/components/ui/StatCard.svelte";
	import type { Word } from "$lib/data/types";

	interface Props {
		knownLetters: string[];
		knownWords: Word[];
		completedLessonCount: number;
		totalLessons: number;
	}

	let { knownLetters, knownWords, completedLessonCount, totalLessons }: Props = $props();
</script>

{#if knownLetters.length > 0}
	<section>
		<Row gap="1.5rem" stackAt="md" class="stats-row">
			<StatCard
				value={knownLetters.length.toString()}
				label="Letters Learned"
				href="/alphabet"
			>
				{#snippet children()}
					<ButtonForwardLabel label="View alphabet" />
				{/snippet}
			</StatCard>
			<StatCard value={knownWords.length.toString()} label="Words Known" href="/words">
				{#snippet children()}
					<ButtonForwardLabel label="View words" />
				{/snippet}
			</StatCard>
			<StatCard value={`${completedLessonCount}/${totalLessons}`} label="Lessons Complete">
				{#snippet children()}
					<Progress
						label="Home lesson progress"
						value={completedLessonCount}
						max={totalLessons}
						valueLabel={`${completedLessonCount} of ${totalLessons} lessons completed`}
					/>
				{/snippet}
			</StatCard>
		</Row>
	</section>
{/if}
