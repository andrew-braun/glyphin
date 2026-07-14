<script lang="ts">
	import { onMount } from "svelte";

	import CourseStageJourney from "$lib/components/content/lesson/CourseStageJourney.svelte";
	import PageShell from "$lib/components/layout/PageShell.svelte";
	import Badge from "$lib/components/ui/Badge.svelte";
	import Button from "$lib/components/ui/Button.svelte";
	import Heading from "$lib/components/ui/Heading.svelte";
	import { buildCourseJourney, type CourseJourneyLesson } from "$lib/data/course-journey";
	import type { AppProgress } from "$lib/data/types";
	import { progress } from "$lib/stores/progress";
	import { cn } from "$lib/utils/cn";

	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();
	let hasHydratedProgress = $state(false);

	const emptyProgress = $derived<AppProgress>({
		knownLetters: [],
		knownWords: [],
		lessonProgress: [],
		currentLessonId: data.lessons[0]?.id ?? 1,
	});
	const activeProgress = $derived(hasHydratedProgress ? $progress : emptyProgress);
	const journey = $derived(
		buildCourseJourney({ stages: data.stages, lessons: data.lessons }, activeProgress),
	);

	onMount(() => {
		hasHydratedProgress = true;
	});

	function getLessonCardClasses(entry: CourseJourneyLesson): string {
		return cn(
			"lesson-card",
			entry.isCurrent && "lesson-card--current",
			!entry.learnUnlocked && "lesson-card--locked",
			entry.practicePassed && "lesson-card--done",
		);
	}

	function getStatusCopy(entry: CourseJourneyLesson): string {
		if (!entry.learnUnlocked) return "Keep moving through this stage to unlock it.";
		if (!entry.practiceUnlocked) return "Learn the pattern, then practice it.";
		if (entry.practicePassed) {
			return entry.bestPracticeScore !== undefined
				? `Best practice score: ${entry.bestPracticeScore}%`
				: "Practice passed.";
		}

		return entry.practiceAttempts > 0
			? `Latest practice score: ${entry.latestPracticeScore ?? 0}%`
			: "Practice is ready.";
	}
</script>

<svelte:head>
	<title>Learn — Glyphin</title>
	<meta
		name="description"
		content="Move through the Thai reading course one unlocked stage at a time."
	/>
	<meta name="glyphbridge-publication-id" content={data.publication.publicationId} />
	<meta name="glyphbridge-publication-cache-key" content={data.publication.publicationCacheKey} />
</svelte:head>

<PageShell class="learn">
	<header class="learn__header">
		<div class="learn__heading">
			<Heading as="h1">Your Thai course</Heading>
		</div>
		<p>Focus on the stage in front of you. The rest will open as you go.</p>
	</header>

	<CourseStageJourney {journey} showLessons>
		{#snippet lessonCard(entry)}
			<article class={getLessonCardClasses(entry)}>
				<div class="lesson-card__header">
					<Badge>Lesson {entry.lesson.id}</Badge>
					{#if entry.practicePassed}
						<Badge tone="success">Passed</Badge>
					{:else if entry.practiceUnlocked}
						<Badge tone="accent">Practice Ready</Badge>
					{:else if entry.isCurrent}
						<Badge tone="accent">Current</Badge>
					{/if}
				</div>

				<div class="lesson-card__word thai">{entry.lesson.anchorWord.thai}</div>
				<h3>{entry.lesson.title}</h3>
				<p class="lesson-card__meaning">{entry.lesson.anchorWord.meaning}</p>

				<div class="lesson-card__new-letters">
					{#each entry.lesson.newLetters as letter}
						<span class="letter-chip thai thai--sm">{letter.character}</span>
					{/each}
				</div>

				<p class="lesson-card__status">{getStatusCopy(entry)}</p>

				<div class="lesson-card__actions">
					<Button
						href={entry.learnUnlocked ? `/learn/${entry.lesson.id}` : undefined}
						variant="primary"
						disabled={!entry.learnUnlocked}
					>
						{entry.learningCompleted ? "Learn Again" : "Learn"}
					</Button>
					<Button
						href={entry.practiceUnlocked
							? `/learn/${entry.lesson.id}/practice`
							: undefined}
						variant="secondary"
						disabled={!entry.practiceUnlocked}
					>
						Practice
					</Button>
				</div>
			</article>
		{/snippet}
	</CourseStageJourney>
</PageShell>

<style lang="scss">
	.learn {
		&__header {
			display: grid;
			gap: $space-sm;
			margin-bottom: $space-2xl;
			max-width: 48rem;

			p {
				color: var(--color-text-muted);
				font-size: $font-size-lg;
				margin: 0;
			}
		}

		&__heading {
			--heading-margin-bottom: 0;
		}
	}

	.lesson-card {
		background: var(--color-surface-card);
		border: 1px solid var(--color-border);
		border-radius: $radius-lg;
		display: grid;
		gap: $space-sm;
		padding: $space-lg;
		@include motion-safe-transition(
			border-color $transition-base,
			box-shadow $transition-base,
			transform $transition-base,
			opacity $transition-fast
		);

		&:hover {
			transform: translateY(-2px);
		}

		&--current {
			border-color: var(--color-primary);
			box-shadow: var(--shadow-card-hover);
		}

		&--done {
			border-left: 4px solid var(--color-success);
		}

		&--locked {
			opacity: 0.65;
		}

		&__header,
		&__actions,
		&__new-letters {
			display: flex;
			flex-wrap: wrap;
		}

		&__header,
		&__actions {
			gap: $space-sm;
		}

		&__word {
			color: var(--color-primary-strong);
			line-height: 1.25;
		}

		h3,
		&__meaning,
		&__status {
			margin: 0;
		}

		&__meaning,
		&__status {
			color: var(--color-text-muted);
			font-size: $font-size-sm;
		}

		&__new-letters {
			gap: $space-xs;
			margin-top: $space-xs;
		}

		&__status {
			min-height: 2.8rem;
		}

		&__actions {
			margin-top: auto;

			:global(.btn) {
				flex: 1 1 8rem;
			}
		}
	}

	.letter-chip {
		align-items: center;
		background: var(--surface-interactive-strong);
		border-radius: $radius-md;
		color: var(--color-primary-strong);
		display: flex;
		height: 36px;
		justify-content: center;
		width: 36px;
	}
</style>
