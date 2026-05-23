<!--
  StepComplete.svelte — Lesson Step 6: Completion Summary
  ========================================================
  Shows the learner a celebration screen with:
    - Their drill score (e.g. "5/6 Drills Correct")
    - The anchor word they just learned
    - A grid of the new letters they unlocked
    - Navigation to the next lesson or back to the lesson list
-->
<script lang="ts">
	import GlyphRibbon from "$lib/components/illustrations/GlyphRibbon.svelte";
	import ActionGroup from "$lib/components/layout/ActionGroup.svelte";
	import StepLayout from "$lib/components/lesson/StepLayout.svelte";
	import Button from "$lib/components/ui/Button.svelte";
	import Eyebrow from "$lib/components/ui/Eyebrow.svelte";
	import MetricDisplay from "$lib/components/ui/MetricDisplay.svelte";
	import Reveal from "$lib/components/ui/Reveal.svelte";
	import type { Lesson } from "$lib/data/types";

	let {
		lesson,
		correctCount,
		totalDrills,
		onNextLesson,
		hasNextLesson,
	}: {
		lesson: Lesson;
		correctCount: number;
		totalDrills: number;
		onNextLesson: () => void;
		hasNextLesson: boolean;
	} = $props();

	const supportingWords = $derived(lesson.vocabulary);
	const newLetterCount = $derived(lesson.newLetters.length);
	const relatedWordCount = $derived(supportingWords.length);
</script>

<StepLayout>
	<div class="complete">
		<section class="complete__hero surface-panel surface-panel--success card">
			<Reveal as="div" distance={14}>
				<div class="complete__hero-copy">
					<div class="complete__flare">
						<GlyphRibbon tokens={["ไ", "ท", "ย"]} tone="success" />
					</div>
					<Eyebrow tone="success">Lesson checkpoint saved</Eyebrow>
					<h1>Lesson complete.</h1>
					<p class="complete__word-intro">You can now read</p>
					<div class="complete__anchor card card--flat">
						<span class="complete__anchor-word thai">{lesson.anchorWord.thai}</span>
						<span class="complete__anchor-meaning">{lesson.anchorWord.meaning}</span>
					</div>
				</div>

				<div class="complete__hero-aside">
					<div class="complete__score surface-panel card card--flat">
						<MetricDisplay
							value={`${correctCount}/${totalDrills}`}
							label="Drills Correct"
							tone="success"
						/>
					</div>

					<dl class="complete__hero-stats">
						<div>
							<dt>New letters</dt>
							<dd>{newLetterCount}</dd>
						</div>
						{#if relatedWordCount > 0}
							<div>
								<dt>Pattern words</dt>
								<dd>{relatedWordCount}</dd>
							</div>
						{/if}
					</dl>
				</div>
			</Reveal>
		</section>

		<div class="complete__grid">
			<section class="complete__panel complete__panel--letters surface-panel card card--flat">
				<Reveal as="div" delay={80} distance={12}>
					<div class="complete__section-header">
						<div>
							<p class="complete__section-kicker">New in this lesson</p>
							<h2>What this lesson added</h2>
						</div>
						<p class="complete__section-copy">
							The core symbols you can now recognize immediately in real words.
						</p>
					</div>

					<div class="complete__letter-grid">
						{#each lesson.newLetters as letter, index}
							<div class="complete__letter">
								<Reveal as="span" delay={120 + index * 70} distance={10}>
									<span class="complete__letter-character thai"
										>{letter.character}</span
									>
								</Reveal>
								<Reveal as="span" delay={150 + index * 70} distance={10}>
									<span class="complete__letter-label">{letter.romanization}</span
									>
								</Reveal>
								<Reveal as="span" delay={180 + index * 70} distance={10}>
									<span class="complete__letter-meta">
										{letter.type}{letter.class
											? ` · ${letter.class} class`
											: ""}
									</span>
								</Reveal>
							</div>
						{/each}
					</div>
				</Reveal>
			</section>

			{#if supportingWords.length > 0}
				<section
					class="complete__panel complete__panel--vocabulary surface-panel card card--flat"
				>
					<Reveal as="div" delay={140} distance={12}>
						<div class="complete__section-header">
							<div>
								<p class="complete__section-kicker">Keep spotting the pattern</p>
								<h2>More words built the same way</h2>
							</div>
							<p class="complete__section-copy">
								Use these as quick follow-up reads while this lesson is still fresh.
							</p>
						</div>

						<div class="complete__vocabulary-grid">
							{#each supportingWords as entry, index}
								<div class="complete__vocabulary-card">
									<Reveal as="span" delay={180 + index * 70} distance={10}>
										<span class="complete__vocabulary-word thai thai--sm">
											{entry.word.thai}
										</span>
									</Reveal>
									<Reveal as="span" delay={210 + index * 70} distance={10}>
										<span class="complete__vocabulary-pronunciation">
											{entry.word.pronunciation}
										</span>
									</Reveal>
									<Reveal as="span" delay={240 + index * 70} distance={10}>
										<span class="complete__vocabulary-meaning"
											>{entry.word.meaning}</span
										>
									</Reveal>
								</div>
							{/each}
						</div>
					</Reveal>
				</section>
			{/if}
		</div>

		<section class="complete__next surface-panel card card--flat">
			<Reveal as="div" delay={220} distance={10}>
				<div class="complete__next-copy">
					<p class="complete__section-kicker">Keep the momentum</p>
					<h2>Ready for the next step?</h2>
					<p class="complete__section-copy">
						Move on while the word shape and spelling pattern are still active.
					</p>
				</div>

				<ActionGroup justify="start" stackAt="sm">
					{#if hasNextLesson}
						<Button variant="primary" size="large" onclick={onNextLesson}>
							Go to the next word ->
						</Button>
					{:else}
						<Button href="/practice" variant="primary" size="large">
							Practice what you know
						</Button>
					{/if}
					<Button href="/learn" variant="secondary" size="large">All Lessons</Button>
				</ActionGroup>
			</Reveal>
		</section>
	</div>
</StepLayout>

<style lang="scss">
	.complete {
		display: grid;
		gap: $space-lg;

		&__hero,
		&__panel,
		&__next {
			display: grid;
			gap: $space-lg;
		}

		&__hero-copy {
			display: grid;
			gap: $space-sm;
		}

		&__flare {
			margin-bottom: $space-xs;
		}

		&__word-intro {
			color: var(--color-text-muted);
			font-size: $font-size-sm;
			font-weight: 700;
			letter-spacing: 0.08em;
			margin: 0;
			text-transform: uppercase;
		}

		&__anchor {
			align-items: baseline;
			background: rgb(var(--rgb-success) / 0.1);
			border: 1px solid rgb(var(--rgb-success) / 0.24);
			display: flex;
			flex-wrap: wrap;
			gap: $space-sm $space-md;
			padding: $space-lg;
		}

		&__anchor-word {
			font-size: clamp(2.25rem, 5vw, 3.5rem);
			line-height: 1;
		}

		&__anchor-meaning {
			color: var(--color-text-muted);
			font-size: $font-size-lg;
		}

		&__hero-aside {
			display: grid;
			gap: $space-md;
		}

		&__score {
			padding: $space-lg;
		}

		&__hero-stats {
			display: grid;
			gap: $space-sm;
			grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
			margin: 0;

			div {
				background: var(--surface-interactive);
				border: 1px solid var(--color-border);
				border-radius: $radius-lg;
				display: grid;
				gap: $space-xs;
				padding: $space-md;
			}

			dt {
				color: var(--color-text-muted);
				font-size: $font-size-sm;
				font-weight: 600;
				margin: 0;
			}

			dd {
				font-size: $font-size-2xl;
				font-weight: 800;
				line-height: 1;
				margin: 0;
			}
		}

		&__grid {
			display: grid;
			gap: $space-lg;
		}

		&__section-header {
			display: grid;
			gap: $space-xs;
		}

		&__section-kicker {
			color: var(--color-success);
			font-size: $font-size-sm;
			font-weight: 700;
			letter-spacing: 0.08em;
			margin: 0;
			text-transform: uppercase;
		}

		&__section-copy {
			color: var(--color-text-muted);
			margin: 0;
		}

		&__letter-grid {
			display: grid;
			gap: $space-md;
			grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));
		}

		&__letter {
			align-content: start;
			background: linear-gradient(180deg, rgb(var(--rgb-success) / 0.08), transparent);
			border: 1px solid var(--color-border);
			border-radius: $radius-lg;
			display: grid;
			gap: $space-xs;
			justify-items: start;
			min-height: 9rem;
			padding: $space-md;
		}

		&__letter-character {
			font-size: 2.8rem;
			line-height: 1;
		}

		&__letter-label {
			font-size: $font-size-lg;
			font-weight: 700;
		}

		&__letter-meta {
			color: var(--color-text-muted);
			font-size: $font-size-sm;
		}

		&__vocabulary-grid {
			display: grid;
			gap: $space-md;
			grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
		}

		&__vocabulary-card {
			background: var(--surface-panel-accent);
			border: 1px solid var(--color-border);
			border-radius: $radius-lg;
			display: grid;
			gap: $space-xs;
			padding: $space-lg;
		}

		&__vocabulary-word {
			font-size: $font-size-2xl;
			line-height: 1.1;
		}

		&__vocabulary-pronunciation {
			font-size: $font-size-lg;
			font-weight: 600;
		}

		&__vocabulary-meaning {
			color: var(--color-text-muted);
		}

		&__next-copy {
			display: grid;
			gap: $space-xs;
		}

		:global(.action-group) {
			align-items: stretch;
		}
	}

	@media (min-width: $bp-md) {
		.complete {
			gap: $space-xl;

			&__hero {
				align-items: start;
				grid-template-columns: minmax(0, 1.2fr) minmax(16rem, 0.8fr);
			}

			&__grid {
				grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
			}

			&__section-header {
				align-items: end;
				grid-template-columns: minmax(0, 1fr) minmax(16rem, 0.8fr);
			}

			&__next {
				align-items: center;
				grid-template-columns: minmax(0, 1fr) auto;
			}

			:global(.action-group) {
				justify-content: flex-end;
			}
		}
	}

	@media (max-width: $bp-sm) {
		.complete {
			&__anchor {
				align-items: start;
				flex-direction: column;
			}

			&__letter,
			&__vocabulary-card,
			&__score {
				padding: $space-md;
			}

			:global(.action-group) {
				width: 100%;
			}

			:global(.action-group > *) {
				width: 100%;
			}
		}
	}
</style>
