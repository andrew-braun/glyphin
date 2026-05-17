<script lang="ts">
	import Badge from "$lib/components/ui/Badge.svelte";
	import Heading from "$lib/components/ui/Heading.svelte";
	import { thaiPack } from "$lib/data/thai";
	import type { Word } from "$lib/data/types";
	import { cn } from "$lib/utils/cn";

	interface Props {
		currentLessonId: number;
		knownWords: Word[];
	}

	let { currentLessonId, knownWords }: Props = $props();

	function getLessonItemClasses(isCompleted: boolean, isCurrent: boolean, isLocked: boolean) {
		return cn(
			"lesson-item",
			"card",
			isCompleted && "lesson-item--completed",
			isCurrent && "lesson-item--current",
			isLocked && "lesson-item--locked",
		);
	}
</script>

<section class="upcoming">
	<Heading>Your Lessons</Heading>
	<div class="lesson-list">
		{#each thaiPack.lessons as lesson}
			{@const isCompleted = knownWords.some((w) => w.thai === lesson.anchorWord.thai)}
			{@const isCurrent = lesson.id === currentLessonId}
			{@const isLocked = lesson.id > currentLessonId}
			<svelte:element
				this={isLocked ? "div" : "a"}
				href={isLocked ? undefined : `/learn/${lesson.id}`}
				class={getLessonItemClasses(isCompleted, isCurrent, isLocked)}
				aria-disabled={isLocked ? "true" : undefined}
			>
				<div class="lesson-item__status">
					{#if isCompleted}
						<span class="lesson-item__check">&#10003;</span>
					{:else if isCurrent}
						<span class="lesson-item__dot"></span>
					{:else}
						<span class="lesson-item__lock">&#128274;</span>
					{/if}
				</div>

				<div class="lesson-item__content">
					<Badge class="lesson-item__stage">Stage {lesson.stage}</Badge>
					<h3 class="lesson-item__title">{lesson.title}</h3>
					<span class="lesson-item__word thai thai--sm">{lesson.anchorWord.thai}</span>
					<span class="lesson-item__meaning">{lesson.anchorWord.meaning}</span>
				</div>

				<div class="lesson-item__letters">
					{#each lesson.newLetters as letter}
						<span class="lesson-item__letter thai thai--sm">{letter.character}</span>
					{/each}
				</div>
			</svelte:element>
		{/each}
	</div>
</section>

<style lang="scss">
	.upcoming {
		display: flex;
		flex-direction: column;
	}

	.lesson-list {
		display: flex;
		flex-direction: column;
		gap: $space-md;
	}

	.lesson-item {
		align-items: center;
		color: inherit;
		display: flex;
		gap: $space-lg;
		padding: $space-lg $space-xl;
		text-decoration: none;
		transition: all $transition-base;

		&--completed {
			border-left: 4px solid var(--color-success);
		}

		&--current {
			border-left: 4px solid var(--color-primary);
			box-shadow: var(--shadow-card-hover);
		}

		&--locked {
			cursor: not-allowed;
			opacity: 0.5;

			&:hover {
				box-shadow: $shadow-md;
			}
		}

		&__status {
			align-items: center;
			display: flex;
			flex-shrink: 0;
			height: 40px;
			justify-content: center;
			width: 40px;
		}

		&__check {
			color: var(--color-success);
			font-size: $font-size-xl;
			font-weight: 700;
		}

		&__dot {
			animation: pulse 2s ease-in-out infinite;
			background: var(--color-primary);
			border-radius: $radius-full;
			height: 14px;
			width: 14px;
		}

		&__lock {
			font-size: $font-size-lg;
		}

		&__content {
			display: flex;
			flex: 1;
			flex-direction: column;
			gap: $space-xs;
		}

		&__title {
			font-size: $font-size-lg;
		}

		&__word {
			color: var(--color-primary-strong);
		}

		&__meaning {
			color: var(--color-text-muted);
			font-size: $font-size-sm;
		}

		&__letters {
			display: flex;
			gap: $space-sm;
		}

		&__letter {
			align-items: center;
			background: rgb(var(--rgb-primary) / 0.12);
			border-radius: $radius-md;
			color: var(--color-primary-strong);
			display: flex;
			font-size: $font-size-xl;
			height: 44px;
			justify-content: center;
			width: 44px;
		}
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}

	@media (max-width: $bp-md) {
		.lesson-item {
			&__letters {
				display: none;
			}
		}
	}
</style>
