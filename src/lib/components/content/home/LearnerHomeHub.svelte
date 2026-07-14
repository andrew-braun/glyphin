<script lang="ts">
	import CourseStageJourney from "$lib/components/content/lesson/CourseStageJourney.svelte";
	import Button from "$lib/components/ui/Button.svelte";
	import Heading from "$lib/components/ui/Heading.svelte";
	import Progress from "$lib/components/ui/Progress.svelte";
	import StatCard from "$lib/components/ui/StatCard.svelte";
	import type { CourseJourney, CourseProgressStats } from "$lib/data/course-journey";

	let {
		authenticated,
		journey,
		stats,
	}: {
		authenticated: boolean;
		journey: CourseJourney;
		stats: CourseProgressStats;
	} = $props();

	const currentStage = $derived(
		journey.stages.find((stage) => stage.state === "current") ?? journey.stages.at(-1),
	);
	const progressPercent = $derived(
		journey.totalLessonCount === 0
			? 0
			: Math.round((journey.completedLessonCount / journey.totalLessonCount) * 100),
	);
	const continueLabel = $derived(
		journey.resumeTarget.phase === "practice"
			? "Continue practice"
			: journey.resumeTarget.phase === "review"
				? "Review what you know"
				: "Continue learning",
	);
</script>

<section class="learner-home">
	<div class="learner-home__hero card">
		<div class="learner-home__copy">
			<span class="learner-home__eyebrow">
				{authenticated ? "Welcome back" : "Saved on this device"}
			</span>
			<div class="learner-home__heading">
				<Heading as="h1">Your Thai reading journey</Heading>
			</div>
			{#if currentStage}
				<p class="learner-home__lead">
					Stage {currentStage.ordinal}: {currentStage.title}
				</p>
			{/if}
		</div>

		<div class="learner-home__action">
			<Button href={journey.resumeTarget.href} size="large" variant="primary">
				{continueLabel}
			</Button>
		</div>
	</div>

	<div class="learner-home__stats">
		<StatCard
			value={stats.knownLetterCount.toString()}
			label="Letters learned"
			href="/alphabet"
		/>
		<StatCard
			value={stats.knownWordCount.toString()}
			label="Real words learned"
			href="/words"
		/>
		<StatCard value={`${progressPercent}%`} label="Course progress">
			{#snippet children()}
				<Progress
					label="Thai course progress"
					value={journey.completedLessonCount}
					max={journey.totalLessonCount}
					valueLabel={`${journey.completedLessonCount} of ${journey.totalLessonCount}`}
				/>
			{/snippet}
		</StatCard>
	</div>

	<section class="learner-home__journey" aria-labelledby="course-journey-heading">
		<div class="learner-home__journey-heading">
			<div>
				<span class="learner-home__eyebrow">Course path</span>
				<h2 id="course-journey-heading">See how far you’ve come</h2>
			</div>
			<a href="/learn">Open curriculum</a>
		</div>
		<CourseStageJourney {journey} />
	</section>
</section>

<style lang="scss">
	.learner-home {
		display: grid;
		gap: $space-xl;

		&__hero {
			align-items: center;
			background:
				linear-gradient(120deg, rgb(var(--rgb-primary) / 0.12), transparent 58%),
				var(--color-surface-card);
			display: flex;
			gap: $space-lg;
			justify-content: space-between;
			padding: clamp($space-lg, 3.5vw, $space-2xl);
		}

		&__copy {
			display: grid;
			gap: $space-sm;
		}

		&__heading {
			--heading-font-size: clamp(2rem, 4vw, 3.5rem);
			--heading-line-height: 1;
			--heading-margin-bottom: 0;
		}

		&__eyebrow {
			color: var(--color-primary-strong);
			font-size: $font-size-xs;
			font-weight: 800;
			letter-spacing: 0.1em;
			text-transform: uppercase;
		}

		&__lead {
			color: var(--color-text-muted);
			font-size: $font-size-lg;
			margin: $space-sm 0 0;
		}

		&__action {
			flex-shrink: 0;

			:global(.btn) {
				white-space: nowrap;
			}
		}

		&__stats {
			display: grid;
			gap: $space-md;
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}

		&__journey {
			display: grid;
			gap: $space-md;
			margin-inline: auto;
			max-width: 60rem;
			width: 100%;
		}

		&__journey-heading {
			align-items: end;
			display: flex;
			gap: $space-md;
			justify-content: space-between;

			h2 {
				margin: $space-xs 0 0;
			}
		}
	}

	@media (max-width: $bp-md) {
		.learner-home {
			&__hero {
				align-items: stretch;
				flex-direction: column;
			}

			&__action {
				:global(.btn) {
					width: 100%;
				}
			}

			&__stats {
				grid-template-columns: 1fr;
			}
		}
	}
</style>
