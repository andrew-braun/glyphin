<script lang="ts">
	import type { Snippet } from "svelte";

	import { cn } from "$lib/utils/cn";

	type EyebrowTone = "primary" | "accent" | "success" | "warning" | "muted";
	type EyebrowElement = "p" | "span" | "div";

	let {
		tone = "primary",
		as = "p",
		class: className = "",
		children,
	}: {
		tone?: EyebrowTone;
		as?: EyebrowElement;
		class?: string;
		children?: Snippet;
	} = $props();

	const classes = $derived(cn("eyebrow", `eyebrow--${tone}`, className));
</script>

<svelte:element this={as} class={classes}>
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.eyebrow {
		font-family: $font-display;
		font-size: $font-size-xs;
		font-weight: 700;
		letter-spacing: 0.14em;
		margin: 0;
		text-transform: uppercase;
	}

	.eyebrow--primary {
		color: var(--color-primary-strong);
	}

	.eyebrow--accent {
		color: var(--color-accent);
	}

	.eyebrow--success {
		color: var(--color-success);
	}

	.eyebrow--warning {
		color: var(--color-warning);
	}

	.eyebrow--muted {
		color: var(--color-text-soft);
	}
</style>
