<script lang="ts">
	import PageShell from "$lib/components/layout/PageShell.svelte";
	import StepComplete from "$lib/components/lesson/StepComplete.svelte";
	import PageMetadata from "$lib/components/seo/PageMetadata.svelte";

	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();

	function handlePreviewNextLesson() {
		// Preview-only route: no lesson state or navigation side effects.
	}
</script>

<PageMetadata metadata={data.metadata} />

<PageShell class="lesson-complete-preview">
	<StepComplete
		lesson={data.lesson}
		correctCount={data.correctCount}
		totalDrills={data.totalDrills}
		onNextLesson={handlePreviewNextLesson}
		hasNextLesson={data.hasNextLesson}
	/>
</PageShell>
