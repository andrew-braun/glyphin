<script lang="ts">
	import type { Snippet } from "svelte";

	import HelpPopover from "$lib/components/ui/HelpPopover.svelte";
	import type { Tip } from "$lib/data/types";
	import { cn } from "$lib/utils/cn";

	let {
		label,
		value,
		tip,
		class: className = "",
		children,
	}: {
		label: string;
		value?: string | number;
		tip?: Tip;
		class?: string;
		children?: Snippet;
	} = $props();

	const classes = $derived(cn("detail-row", className));
</script>

<div class={classes}>
	<span class="detail-row__label">
		{label}
		{#if tip}
			<HelpPopover
				title={tip.title}
				body={tip.body}
				display={tip.display}
				sections={tip.sections}
			/>
		{/if}
	</span>
	<span class="detail-row__value">
		{#if children}
			{@render children()}
		{:else}
			{value}
		{/if}
	</span>
</div>

<style lang="scss">
	.detail-row {
		@include detail-row;

		&__label {
			@include detail-label;

			align-items: center;
			display: flex;
			gap: $space-xs;
		}

		&__value {
			font-weight: 500;
		}
	}

	@media (max-width: $bp-sm) {
		.detail-row {
			align-items: flex-start;
			flex-direction: column;
			gap: $space-xs;
		}
	}
</style>
