<script lang="ts">
	import Check from "@lucide/svelte/icons/check";
	import Lock from "@lucide/svelte/icons/lock";
	import MapPin from "@lucide/svelte/icons/map-pin";
	import type { Snippet } from "svelte";

	import Progress from "$lib/components/ui/Progress.svelte";
	import type {
		CourseJourney,
		CourseJourneyLesson,
		CourseJourneyStage,
	} from "$lib/data/course-journey";

	let {
		journey,
		showLessons = false,
		lessonCard,
	}: {
		journey: CourseJourney;
		showLessons?: boolean;
		lessonCard?: Snippet<[CourseJourneyLesson]>;
	} = $props();

	function stageStatusLabel(stage: CourseJourneyStage): string {
		if (stage.state === "complete") return "Complete";
		if (stage.state === "current") return "Current stage";
		return "Locked";
	}
</script>

<div class:stage-journey--with-lessons={showLessons} class="stage-journey">
	{#each journey.stages as stage}
		<div class={["stage-journey__stop", `stage-journey__stop--${stage.state}`]}>
			<div class="stage-journey__rail" aria-hidden="true">
				<span class="stage-journey__marker">
					{#if stage.state === "complete"}
						<Check />
					{:else if stage.state === "current"}
						<MapPin />
					{:else}
						<Lock />
					{/if}
				</span>
			</div>

			{#if showLessons && stage.showLessons}
				<details class="stage-journey__stage card" open={stage.defaultExpanded}>
					<summary class="stage-journey__summary">
						<div class="stage-journey__heading">
							<span class="stage-journey__eyebrow">
								Stage {stage.ordinal} · {stageStatusLabel(stage)}
							</span>
							<h2>{stage.title}</h2>
							<p>{stage.summary}</p>
						</div>
						<span class="stage-journey__count">
							{stage.completedLessonCount}/{stage.totalLessonCount}
						</span>
					</summary>

					<div class="stage-journey__lessons">
						{#each stage.lessons as lesson}
							{@render lessonCard?.(lesson)}
						{/each}
					</div>
				</details>
			{:else}
				<article class="stage-journey__stage card">
					<div class="stage-journey__summary">
						<div class="stage-journey__heading">
							<span class="stage-journey__eyebrow">
								Stage {stage.ordinal} · {stageStatusLabel(stage)}
							</span>
							<h2>{stage.title}</h2>
							<p>{stage.summary}</p>
						</div>
						{#if stage.state !== "locked"}
							<span class="stage-journey__count">
								{stage.completedLessonCount}/{stage.totalLessonCount}
							</span>
						{/if}
					</div>

					{#if stage.state === "current"}
						<Progress
							label={`Stage ${stage.ordinal} progress`}
							value={stage.completedLessonCount}
							max={stage.totalLessonCount}
							valueLabel={`${stage.completedLessonCount} of ${stage.totalLessonCount}`}
						/>
					{/if}
				</article>
			{/if}
		</div>
	{/each}
</div>

<style lang="scss">
	.stage-journey {
		display: grid;

		&__stop {
			display: grid;
			gap: $space-md;
			grid-template-columns: 2.5rem minmax(0, 1fr);

			&:last-child {
				.stage-journey__rail::after {
					display: none;
				}
			}

			&--current {
				.stage-journey__stage {
					border-color: var(--color-primary);
					box-shadow: var(--shadow-card-hover);
				}

				.stage-journey__marker {
					background: var(--color-primary);
					color: var(--color-on-primary);
				}
			}

			&--complete {
				.stage-journey__marker {
					background: var(--color-success);
					color: var(--color-on-success);
				}
			}

			&--locked {
				.stage-journey__stage {
					background: var(--color-surface-muted);
					opacity: 0.78;
				}
			}
		}

		&__rail {
			display: flex;
			justify-content: center;
			position: relative;

			&::after {
				background: var(--color-border);
				content: "";
				inset: 2.4rem auto 0;
				position: absolute;
				width: 2px;
			}
		}

		&__marker {
			align-items: center;
			background: var(--color-surface-card);
			border: 2px solid var(--color-border);
			border-radius: $radius-full;
			color: var(--color-text-muted);
			display: flex;
			height: 2.5rem;
			justify-content: center;
			position: relative;
			width: 2.5rem;
			z-index: 1;

			:global(svg) {
				height: 1.1rem;
				width: 1.1rem;
			}
		}

		&__stage {
			margin-bottom: $space-md;
			padding: 0;
		}

		&__summary {
			align-items: flex-start;
			display: flex;
			gap: $space-md;
			justify-content: space-between;
			list-style: none;
			padding: $space-lg;

			&::-webkit-details-marker {
				display: none;
			}
		}

		details .stage-journey__summary {
			cursor: pointer;

			&:focus-visible {
				box-shadow: var(--focus-ring);
				outline: none;
			}
		}

		&__heading {
			display: grid;
			gap: $space-xs;

			h2,
			p {
				margin: 0;
			}

			h2 {
				font-size: $font-size-lg;
				line-height: 1.25;
			}

			p {
				color: var(--color-text-muted);
				font-size: $font-size-sm;
			}
		}

		&__eyebrow,
		&__count {
			color: var(--color-text-soft);
			font-size: $font-size-xs;
			font-weight: 700;
			letter-spacing: 0.06em;
			text-transform: uppercase;
		}

		&__count {
			flex-shrink: 0;
		}

		&__lessons {
			display: grid;
			gap: $space-md;
			grid-template-columns: repeat(2, minmax(0, 1fr));
			padding: 0 $space-lg $space-lg;
		}

		:global(.progress) {
			padding: 0 $space-lg $space-lg;
		}
	}

	@media (max-width: $bp-md) {
		.stage-journey {
			&__lessons {
				grid-template-columns: 1fr;
			}
		}
	}

	@media (max-width: $bp-sm) {
		.stage-journey {
			&__stop {
				gap: $space-sm;
				grid-template-columns: 2rem minmax(0, 1fr);
			}

			&__marker {
				height: 2rem;
				width: 2rem;
			}

			&__rail::after {
				inset-block-start: 2rem;
			}

			&__summary {
				padding: $space-md;
			}
		}
	}
</style>
