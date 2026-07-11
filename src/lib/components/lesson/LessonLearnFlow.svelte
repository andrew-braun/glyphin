<script lang="ts">
	import LessonBackLink from "$lib/components/lesson/LessonBackLink.svelte";
	import LessonProgressTracker from "$lib/components/lesson/LessonProgressTracker.svelte";
	import StepBreakdown from "$lib/components/lesson/StepBreakdown.svelte";
	import StepIntro from "$lib/components/lesson/StepIntro.svelte";
	import StepLearningComplete from "$lib/components/lesson/StepLearningComplete.svelte";
	import StepLetters from "$lib/components/lesson/StepLetters.svelte";
	import StepRules from "$lib/components/lesson/StepRules.svelte";
	import StepSameLettersNewWords from "$lib/components/lesson/StepSameLettersNewWords.svelte";
	import type { Lesson } from "$lib/data/types";
	import { completeLessonLearning } from "$lib/stores/progress";

	// This component owns the per-lesson step machine. The parent keys it on
	// `lesson.id`, so a new lesson remounts it with a fresh `currentStepIndex`
	// instead of relying on an effect to reset step state on prop change.
	let { lesson, onStartPractice }: { lesson: Lesson; onStartPractice: () => void } = $props();

	const corePracticeWords = $derived(lesson.vocabulary.filter((entry) => entry.tier === "core"));
	const guidedPracticeWords = $derived(corePracticeWords.slice(0, 2));
	const hasGuidedPracticeWords = $derived(guidedPracticeWords.length > 0);

	type Step = "intro" | "breakdown" | "letters" | "rules" | "sameLetters" | "complete";

	// Synthesis lessons (e.g. true clusters, the tone-class matrix) teach a reading
	// pattern rather than a new glyph, so they carry no newLetters and skip the
	// letters step. The sameLetters guided-read step only appears when the lesson
	// has core practice words to guide through.
	const stepOrder = $derived(
		(
			[
				"intro",
				"breakdown",
				lesson.newLetters.length > 0 ? "letters" : null,
				"rules",
				hasGuidedPracticeWords ? "sameLetters" : null,
				"complete",
			] satisfies (Step | null)[]
		).filter((step): step is Step => step !== null),
	);

	let currentStepIndex = $state(0);

	const currentStep = $derived(stepOrder[currentStepIndex]);
	const progressPercent = $derived((currentStepIndex / (stepOrder.length - 1)) * 100);

	function nextStep() {
		if (currentStepIndex < stepOrder.length - 1) {
			currentStepIndex += 1;
		}
	}

	function handleLearningComplete() {
		completeLessonLearning(lesson.id);
		nextStep();
	}
</script>

<div class="lesson__chrome">
	<LessonBackLink />
	<LessonProgressTracker
		currentStep={currentStepIndex + 1}
		totalSteps={stepOrder.length}
		value={progressPercent}
	/>
</div>

{#key currentStep}
	<div class="lesson__stage">
		{#if currentStep === "intro"}
			<StepIntro {lesson} onNext={nextStep} />
		{:else if currentStep === "breakdown"}
			<StepBreakdown {lesson} onNext={nextStep} />
		{:else if currentStep === "letters"}
			<StepLetters letters={lesson.newLetters} onComplete={nextStep} />
		{:else if currentStep === "rules"}
			<StepRules
				rules={lesson.rulesIntroduced}
				onComplete={hasGuidedPracticeWords ? nextStep : handleLearningComplete}
				completeLabel={hasGuidedPracticeWords ? "Try two guided reads" : "Finish learning"}
			/>
		{:else if currentStep === "sameLetters"}
			<StepSameLettersNewWords
				{lesson}
				coreWords={guidedPracticeWords}
				onComplete={handleLearningComplete}
			/>
		{:else if currentStep === "complete"}
			<StepLearningComplete
				{lesson}
				guidedWordCount={guidedPracticeWords.length}
				practiceWordCount={corePracticeWords.length}
				{onStartPractice}
			/>
		{/if}
	</div>
{/key}

<style lang="scss">
	.lesson__stage {
		@include motion-safe-animation(
			lessonStageFade $motion-duration-slow $motion-ease-standard both
		);
	}

	@keyframes lessonStageFade {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}

	.lesson__chrome {
		align-items: center;
		display: grid;
		gap: $space-xs $space-sm;
		grid-template-columns: auto minmax(12rem, 1fr);
		margin: 0 auto;
		max-width: 64rem;
		width: 100%;
	}

	@media (max-width: $bp-sm) {
		.lesson__chrome {
			align-items: stretch;
			grid-template-columns: 1fr;
		}
	}
</style>
