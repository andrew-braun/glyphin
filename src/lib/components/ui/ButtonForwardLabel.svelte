<script lang="ts">
	import ArrowRight from "@lucide/svelte/icons/arrow-right";

	let { label }: { label: string } = $props();
</script>

<span class="btn-forward-label">
	{label}
	<ArrowRight aria-hidden="true" class="btn-forward-label__icon" />
</span>

<style lang="scss">
	.btn-forward-label {
		align-items: center;
		display: inline-flex;
		gap: $space-sm;
		justify-content: center;

		:global(.btn-forward-label__icon) {
			flex-shrink: 0;
			height: 1.125em;
			width: 1.125em;
		}
	}
</style>
