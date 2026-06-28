<script lang="ts">
	import { Dialog, Popover } from "bits-ui";

	import type { TipSection } from "$lib/data/types";

	let {
		title,
		body,
		label,
		display = "popover",
		sections,
	}: {
		title: string;
		body: string;
		label?: string;
		display?: "popover" | "modal";
		sections?: TipSection[];
	} = $props();

	const triggerLabel = $derived(label ?? `Help: ${title}`);
</script>

{#if display === "modal"}
	<Dialog.Root>
		<Dialog.Trigger class="help-popover__trigger" aria-label={triggerLabel}>?</Dialog.Trigger>
		<Dialog.Portal>
			<Dialog.Overlay class="help-modal__overlay" />
			<Dialog.Content class="help-modal__content" aria-describedby={undefined}>
				<Dialog.Title class="help-modal__title">{title}</Dialog.Title>
				<p class="help-modal__body">{body}</p>
				{#if sections}
					{#each sections as section}
						<div class="help-modal__section">
							{#if section.heading}
								<p class="help-modal__section-heading">{section.heading}</p>
							{/if}
							<p class="help-modal__section-body">{section.body}</p>
						</div>
					{/each}
				{/if}
				<Dialog.Close class="help-modal__close" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</Dialog.Close>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
{:else}
	<Popover.Root>
		<Popover.Trigger class="help-popover__trigger" aria-label={triggerLabel}>?</Popover.Trigger>
		<Popover.Portal>
			<Popover.Content class="help-popover__content" sideOffset={8}>
				<p class="help-popover__title">{title}</p>
				<p class="help-popover__body">{body}</p>
			</Popover.Content>
		</Popover.Portal>
	</Popover.Root>
{/if}

<style lang="scss">
	/* --- Shared trigger --- */
	:global(.help-popover__trigger) {
		align-items: center;
		background: var(--surface-interactive);
		border: 1px solid var(--color-border);
		border-radius: $radius-full;
		color: var(--color-text-soft);
		cursor: pointer;
		display: inline-flex;
		flex-shrink: 0;
		font-size: $font-size-xs;
		font-weight: 600;
		height: 1.25rem;
		justify-content: center;
		line-height: 1;
		padding: 0;
		width: 1.25rem;
		@include motion-safe-transition(
			background $transition-fast,
			color $transition-fast,
			border-color $transition-fast
		);

		&:hover,
		&:focus-visible {
			background: var(--surface-interactive-strong);
			border-color: var(--color-border-strong);
			color: var(--color-text);
		}

		&:focus-visible {
			box-shadow: var(--focus-ring);
			outline: none;
		}
	}

	/* --- Popover mode --- */
	:global(.help-popover__content) {
		background: var(--color-surface-card);
		border: 1px solid var(--color-border);
		border-radius: $radius-md;
		box-shadow: var(--shadow-card);
		max-width: min(22rem, calc(100vw - 2rem));
		padding: $space-md;
		z-index: var(--z-popover);
	}

	:global(.help-popover__title) {
		color: var(--color-text);
		font-size: $font-size-sm;
		font-weight: 600;
		margin-bottom: $space-xs;
	}

	:global(.help-popover__body) {
		color: var(--color-text-muted);
		font-size: $font-size-sm;
		line-height: 1.6;
	}

	/* --- Modal mode --- */
	:global(.help-modal__overlay) {
		background: rgb(0 0 0 / 0.5);
		inset: 0;
		position: fixed;
		z-index: var(--z-modal);
	}

	:global(.help-modal__content) {
		background: var(--color-surface-card);
		border: 1px solid var(--color-border);
		border-radius: $radius-lg;
		box-shadow: var(--shadow-card);
		left: 50%;
		max-height: min(90dvh, 42rem);
		max-width: min(36rem, calc(100vw - 2rem));
		overflow-y: auto;
		padding: $space-xl;
		position: fixed;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		z-index: var(--z-modal);
	}

	:global(.help-modal__title) {
		color: var(--color-text);
		font-size: $font-size-xl;
		font-weight: 700;
		margin-bottom: $space-sm;
		padding-right: $space-2xl;
	}

	:global(.help-modal__body) {
		color: var(--color-text-soft);
		font-size: $font-size-sm;
		line-height: 1.7;
		margin-bottom: $space-md;
	}

	:global(.help-modal__section) {
		border-top: 1px solid var(--color-border);
		margin-top: $space-md;
		padding-top: $space-md;
	}

	:global(.help-modal__section-heading) {
		color: var(--color-text);
		font-size: $font-size-sm;
		font-weight: 600;
		margin-bottom: $space-xs;
	}

	:global(.help-modal__section-body) {
		color: var(--color-text-muted);
		font-size: $font-size-sm;
		line-height: 1.7;
		white-space: pre-line;
	}

	:global(.help-modal__close) {
		align-items: center;
		background: transparent;
		border: 1px solid var(--color-border);
		border-radius: $radius-full;
		color: var(--color-text-muted);
		cursor: pointer;
		display: flex;
		font-size: $font-size-xl;
		height: 2rem;
		justify-content: center;
		line-height: 1;
		padding: 0;
		position: absolute;
		right: $space-md;
		top: $space-md;
		width: 2rem;
		@include motion-safe-transition(
			background $transition-fast,
			border-color $transition-fast,
			color $transition-fast
		);

		&:hover,
		&:focus-visible {
			background: var(--surface-interactive);
			border-color: var(--color-border-strong);
			color: var(--color-text);
		}

		&:focus-visible {
			box-shadow: var(--focus-ring);
			outline: none;
		}
	}
</style>
