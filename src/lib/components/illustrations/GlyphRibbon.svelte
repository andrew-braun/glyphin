<script lang="ts">
	type GlyphRibbonTone = "mixed" | "primary" | "accent" | "sky" | "mango" | "success" | "warning";
	type GlyphRibbonSize = "sm" | "md";

	let {
		tokens,
		tone = "mixed",
		size = "md",
		animated = true,
		class: className = "",
	}: {
		tokens: string[];
		tone?: GlyphRibbonTone;
		size?: GlyphRibbonSize;
		animated?: boolean;
		class?: string;
	} = $props();

	const mixedTones: Array<Exclude<GlyphRibbonTone, "mixed">> = [
		"primary",
		"sky",
		"mango",
		"accent",
		"success",
		"warning",
	];

	function resolveTone(index: number): Exclude<GlyphRibbonTone, "mixed"> {
		return tone === "mixed" ? mixedTones[index % mixedTones.length] : tone;
	}
</script>

<div
	class={`glyph-ribbon glyph-ribbon--${size} ${!animated ? "glyph-ribbon--static" : ""} ${className}`}
	aria-hidden="true"
>
	{#each tokens as token, index}
		<span
			class={`glyph-ribbon__token glyph-ribbon__token--${resolveTone(index)} thai thai--sm`}
			style={`--glyph-delay:${index * 110}ms`}
		>
			{token}
		</span>
	{/each}
</div>

<style lang="scss">
	.glyph-ribbon {
		align-items: center;
		display: inline-flex;
		flex-wrap: wrap;
		gap: $space-sm;
		justify-content: center;

		.glyph-ribbon__token {
			align-items: center;
			animation: glyphRibbonFloat 4.8s ease-in-out infinite;
			animation-delay: var(--glyph-delay);
			border: 0;
			border-radius: $radius-full;
			box-shadow: var(--shadow-soft);
			display: inline-flex;
			font-weight: 800;
			justify-content: center;
			min-width: 3rem;
			padding: 0.2rem 0.95rem;

			&.glyph-ribbon__token--primary {
				background: var(--color-primary);
				color: var(--color-on-primary);
			}

			&.glyph-ribbon__token--accent {
				background: var(--color-accent);
				color: var(--color-on-accent);
			}

			&.glyph-ribbon__token--sky {
				background: var(--color-sky);
				color: var(--color-on-sky);
			}

			&.glyph-ribbon__token--mango {
				background: var(--color-mango);
				color: var(--color-on-mango);
			}

			&.glyph-ribbon__token--success {
				background: var(--color-success);
				color: var(--color-on-success);
			}

			&.glyph-ribbon__token--warning {
				background: var(--color-warning);
				color: var(--color-on-warning);
			}
		}

		&.glyph-ribbon--sm {
			.glyph-ribbon__token {
				font-size: $font-size-lg;
				min-width: 2.6rem;
				padding: 0.15rem 0.75rem;
			}
		}

		&.glyph-ribbon--static {
			.glyph-ribbon__token {
				animation: none;
			}
		}
	}

	@keyframes glyphRibbonFloat {
		0%,
		100% {
			transform: translateY(0);
		}

		50% {
			transform: translateY(-6px);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.glyph-ribbon {
			.glyph-ribbon__token {
				animation: none;
			}
		}
	}
</style>
