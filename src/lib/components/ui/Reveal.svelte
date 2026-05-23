<script lang="ts">
	import type { Snippet } from "svelte";

	let {
		as = "div",
		delay = 0,
		distance = 18,
		duration = 560,
		class: className = "",
		children,
	}: {
		as?: keyof HTMLElementTagNameMap;
		delay?: number;
		distance?: number;
		duration?: number;
		class?: string;
		children?: Snippet;
	} = $props();
</script>

<svelte:element
	this={as}
	class={`reveal ${className}`}
	style={`--reveal-delay:${delay}ms; --reveal-distance:${distance}px; --reveal-duration:${duration}ms;`}
>
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.reveal {
		@include motion-safe-animation(
			revealRise var(--reveal-duration) $motion-ease-standard both
		);
		animation-delay: var(--reveal-delay);
	}

	@keyframes revealRise {
		from {
			opacity: 0;
			transform: translateY(var(--reveal-distance, #{$motion-distance-md}))
				scale($motion-scale-enter);
		}

		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}
</style>
