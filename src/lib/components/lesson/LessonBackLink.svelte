<script lang="ts">
	import Button from "$lib/components/ui/Button.svelte";

	let {
		href = "/learn",
		label = "Lessons",
	}: {
		href?: string;
		label?: string;
	} = $props();
</script>

<nav class="lesson-back" aria-label="Lesson navigation">
	<Button {href} variant="ghost" class="lesson-back__button">
		<span aria-hidden="true">&larr;</span>
		<span>{label}</span>
	</Button>
</nav>

<style lang="scss">
	.lesson-back {
		align-self: flex-start;
		display: flex;

		:global(.lesson-back__button) {
			gap: $space-xs;
		}
	}
</style>
