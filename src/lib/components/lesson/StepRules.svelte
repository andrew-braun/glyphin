<!--
  StepRules.svelte — Lesson Step 4: Rule Introduction
  ====================================================
  Teaches the spelling/pronunciation rules needed for the anchor word.
  Rules are only introduced when the learner encounters them naturally
  in a real word — never as abstract grammar dumps.

  Each rule card shows:
    - Rule name and short description
    - Full explanation with context
    - Concrete examples the learner can already (mostly) read
-->
<script lang="ts">
	import StepLayout from "$lib/components/lesson/StepLayout.svelte";
	import Button from "$lib/components/ui/Button.svelte";
	import Reveal from "$lib/components/ui/Reveal.svelte";
	import type { Rule } from "$lib/data/types";

	let {
		rules,
		onComplete,
	}: {
		rules: Rule[];
		onComplete: () => void;
	} = $props();

	// Track which rule the learner is currently viewing
	let currentIndex = $state(0);
	const currentRule = $derived(rules[currentIndex]);

	/** Advance to next rule, or move to drills if all rules shown. */
	function next() {
		if (currentIndex < rules.length - 1) {
			currentIndex++;
		} else {
			onComplete();
		}
	}
</script>

<StepLayout counter={`Rule ${currentIndex + 1} of ${rules.length}`}>
	{#key `${currentIndex}-${currentRule.name}`}
		<div class="rule-card">
			<h2><Reveal as="span" distance={14}>{currentRule.name}</Reveal></h2>
			<p class="rule-card__short">
				<Reveal as="span" delay={60} distance={12}>{currentRule.shortDescription}</Reveal>
			</p>

			<!-- Detailed explanation — this is where the real teaching happens -->
			<div class="rule-card__explanation card card--flat">
				<Reveal as="div" delay={120} distance={14}>
					<p>{currentRule.explanation}</p>
				</Reveal>
			</div>

			<!-- Concrete examples using letters the learner knows -->
			<div class="rule-card__examples">
				<h4><Reveal as="span" delay={180} distance={10}>Examples:</Reveal></h4>
				{#each currentRule.examples as example, index}
					<div class="rule-card__example">
						<Reveal
							as="span"
							class="thai thai--sm"
							delay={220 + index * 70}
							distance={10}
						>
							{example.split(" ")[0]}
						</Reveal>
						<Reveal as="span" delay={240 + index * 70} distance={10}>{example}</Reveal>
					</div>
				{/each}
			</div>
		</div>
	{/key}

	<Button variant="primary" size="large" fullWidth={true} onclick={next}>
		{currentIndex < rules.length - 1 ? "Next rule ->" : "Bring on the drills ->"}
	</Button>
</StepLayout>

<style lang="scss">
	.rule-card {
		display: flex;
		flex-direction: column;
		gap: $space-md;

		// Short description — acts as a subtitle for the rule name
		&__short {
			color: var(--color-primary-strong);
			font-size: $font-size-lg;
			font-weight: 500;
		}

		&__explanation {
			line-height: 1.7;
		}

		// Example list with Thai script + romanization
		&__examples {
			display: flex;
			flex-direction: column;
			gap: $space-sm;

			h4 {
				@include step-counter; // reuse the small uppercase label style
			}
		}

		// Individual example row
		&__example {
			align-items: center;
			background: var(--surface-interactive);
			border: 1px solid var(--color-border);
			border-radius: $radius-md;
			display: flex;
			font-size: $font-size-sm;
			gap: $space-md;
			padding: $space-sm $space-md;
		}
	}

	@media (min-width: $bp-md) {
		.rule-card {
			display: grid;
			gap: $space-md $space-xl;
			grid-template-columns: minmax(0, 1.05fr) minmax(16rem, 0.95fr);

			h2,
			&__short,
			&__explanation {
				grid-column: 1;
			}

			&__examples {
				align-self: stretch;
				grid-column: 2;
				grid-row: 1 / span 3;
			}
		}
	}
</style>
