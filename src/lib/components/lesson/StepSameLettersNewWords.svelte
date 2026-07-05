<!--
  StepSameLettersNewWords.svelte — Lesson Step 5: Transfer Practice
  =================================================================
	Self-checks lesson practice vocabulary that reuses the lesson's new letters and
	patterns. Learners see each target before its pronunciation and meaning are revealed.
-->
<script lang="ts">
	import SameLettersWordList from "$lib/components/lesson/SameLettersWordList.svelte";
	import StepLayout from "$lib/components/lesson/StepLayout.svelte";
	import Button from "$lib/components/ui/Button.svelte";
	import ButtonForwardLabel from "$lib/components/ui/ButtonForwardLabel.svelte";
	import Reveal from "$lib/components/ui/Reveal.svelte";
	import type { Lesson, LessonVocabularyEntry } from "$lib/data/types";

	let {
		lesson,
		coreWords,
		extensionWords,
		onComplete,
	}: {
		lesson: Lesson;
		coreWords: LessonVocabularyEntry[];
		extensionWords?: LessonVocabularyEntry[];
		onComplete: () => void;
	} = $props();

	type PracticePhase = "core" | "extensionPrompt" | "extension";

	let phase = $state<PracticePhase>("core");
	let currentIndex = $state(0);
	let isAnswerRevealed = $state(false);

	const extensionSet = $derived(extensionWords ?? []);
	const isExtensionPrompt = $derived(phase === "extensionPrompt");
	const isExtensionPhase = $derived(phase === "extension");
	const activeWords = $derived(isExtensionPhase ? extensionSet : coreWords);
	const currentWord = $derived(activeWords[currentIndex]);
	const currentEntries = $derived(currentWord ? [currentWord] : []);
	const hasNextWord = $derived(currentIndex < activeWords.length - 1);
	const hasExtensionWords = $derived(extensionSet.length > 0);
	const counterLabel = $derived(
		isExtensionPrompt
			? "Optional extension"
			: `${isExtensionPhase ? "Extension" : "Core"} practice ${currentIndex + 1} of ${activeWords.length}`,
	);
	const forwardActionLabel = $derived(
		hasNextWord
			? "Try the next read"
			: phase === "core" && hasExtensionWords
				? "See optional extension"
				: "Finish learning",
	);

	function next() {
		if (isExtensionPrompt) {
			return;
		}

		if (!isAnswerRevealed) {
			isAnswerRevealed = true;
			return;
		}

		if (hasNextWord) {
			currentIndex++;
			isAnswerRevealed = false;
			return;
		}

		if (phase === "core" && hasExtensionWords) {
			phase = "extensionPrompt";
			currentIndex = 0;
			isAnswerRevealed = false;
			return;
		}

		onComplete();
	}

	function startExtension() {
		phase = "extension";
		currentIndex = 0;
		isAnswerRevealed = false;
	}
</script>

<StepLayout class="step--same-letters" counter={counterLabel}>
	<section class="same-letters surface-panel lesson-accent-panel lesson-accent-panel--mango">
		{#if isExtensionPrompt}
			<Reveal as="div" delay={120} distance={10}>
				<div class="same-letters__extension-prompt">
					<div class="same-letters__extension-copy">
						<h3>Extension reads?</h3>
					</div>

					<div class="same-letters__actions">
						<Button
							variant="primary"
							size="large"
							fullWidth={true}
							onclick={startExtension}
						>
							Start extension
						</Button>
						<Button
							variant="secondary"
							size="large"
							fullWidth={true}
							onclick={onComplete}
						>
							Finish learning
						</Button>
					</div>
				</div>
			</Reveal>
		{:else}
			{#key `${phase}-${currentIndex}`}
				<SameLettersWordList
					entries={currentEntries}
					newLetters={lesson.newLetters}
					ariaLabel={isAnswerRevealed
						? "Answer for the current practice target"
						: "Current practice target to read before revealing the answer"}
					revealStart={120}
					showAnswers={isAnswerRevealed}
					previewPrompt="Sound it out, then check your read."
				/>
			{/key}
		{/if}
	</section>

	{#if !isExtensionPrompt}
		<Button variant="primary" size="large" fullWidth={true} onclick={next}>
			{#if isAnswerRevealed}
				<ButtonForwardLabel label={forwardActionLabel} />
			{:else}
				Check my read
			{/if}
		</Button>
	{/if}
</StepLayout>

<style lang="scss">
	.same-letters {
		--same-letters-accent: var(--color-mango);
		--same-letters-panel-padding: #{$space-lg};

		display: grid;
		gap: clamp(#{$space-md}, 2vw, #{$space-lg});
		padding: var(--same-letters-panel-padding);

		.same-letters__extension-prompt {
			background: var(--color-surface-card);
			border: 1px solid var(--color-border-strong);
			border-radius: $radius-lg;
			display: grid;
			gap: $space-lg;
			padding: clamp(#{$space-md}, 2vw, #{$space-lg});
		}

		.same-letters__extension-copy {
			display: grid;
			gap: $space-sm;

			h3 {
				margin: 0;
			}
		}

		.same-letters__actions {
			display: grid;
			gap: $space-sm;
		}
	}

	@media (max-width: $bp-sm) {
		.same-letters {
			padding: $space-lg;
		}
	}
</style>
