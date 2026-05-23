<script lang="ts">
	import { Collapsible } from "bits-ui";
	import type { Snippet } from "svelte";

	let {
		open = $bindable(false),
		label,
		labelledBy,
		class: className = "",
		children,
	}: {
		open?: boolean;
		label?: string;
		labelledBy?: string;
		class?: string;
		children?: Snippet;
	} = $props();

	const resolvedAriaLabel = $derived(labelledBy ? undefined : label);
</script>

<Collapsible.Root bind:open>
	<Collapsible.Content
		class={`collapsible-panel ${className}`.trim()}
		aria-label={resolvedAriaLabel}
		aria-labelledby={labelledBy}
	>
		<div class="collapsible-panel__inner">
			{@render children?.()}
		</div>
	</Collapsible.Content>
</Collapsible.Root>

<style lang="scss">
	:global(.collapsible-panel) {
		display: grid;
		grid-template-rows: 0fr;
		opacity: 0;
		overflow: hidden;
		@include motion-safe-transition(
			grid-template-rows $transition-base,
			opacity $transition-fast
		);
	}

	:global(.collapsible-panel[data-state="open"]) {
		grid-template-rows: 1fr;
		opacity: 1;
	}

	:global(.collapsible-panel[data-state="closed"]) {
		pointer-events: none;
	}

	.collapsible-panel__inner {
		min-height: 0;
	}
</style>
