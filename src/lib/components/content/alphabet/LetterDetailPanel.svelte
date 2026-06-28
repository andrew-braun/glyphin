<script lang="ts">
	import Button from "$lib/components/ui/Button.svelte";
	import CollapsiblePanel from "$lib/components/ui/CollapsiblePanel.svelte";
	import DetailRow from "$lib/components/ui/DetailRow.svelte";
	import { resolveLetterTips } from "$lib/data/tips";
	import type { Letter } from "$lib/data/types";
	import { formatPositionPhrase } from "$lib/utils/letter-display";

	const panelHeadingId = "letter-detail-panel-heading";

	let {
		letter,
		onClose,
	}: {
		letter: Letter | null;
		onClose: () => void;
	} = $props();

	const letterTips = $derived(letter ? resolveLetterTips(letter) : {});
</script>

<CollapsiblePanel open={letter !== null} labelledBy={panelHeadingId}>
	{#if letter}
		<div class="detail-panel card">
			<h2 id={panelHeadingId} class="visually-hidden">Details for {letter.character}</h2>
			<div class="detail-panel__close">
				<Button variant="ghost" onclick={onClose}>
					<span aria-hidden="true">&times;</span>
					<span class="visually-hidden">Close details for {letter.character}</span>
				</Button>
			</div>
			<div class="detail-panel__char thai">{letter.character}</div>
			<div class="detail-panel__info">
				<DetailRow label="Sound" value={letter.romanization} tip={letterTips.sound} />
				<DetailRow
					label="Pronunciation"
					value={letter.pronunciation}
					tip={letterTips.pronunciation}
				/>
				<DetailRow
					label="Type"
					value={`${letter.type}${letter.class ? ` (${letter.class} class)` : ""}`}
					tip={letterTips.type}
				/>
				{#if letter.position && letter.position !== "standalone"}
					{@const positionPhrase = formatPositionPhrase(letter.position)}
					{#if positionPhrase}
						<DetailRow
							label="Position"
							value={positionPhrase}
							tip={letterTips.position}
						/>
					{/if}
				{/if}
				<div class="detail-panel__mnemonic">
					<strong>Memory trick:</strong>
					{letter.mnemonic}
				</div>
			</div>
		</div>
	{/if}
</CollapsiblePanel>

<style lang="scss">
	.detail-panel {
		align-items: flex-start;
		display: flex;
		gap: $space-xl;
		margin-top: $space-xl;
		position: relative;

		&__char {
			color: var(--color-primary-strong);
			font-size: 4rem;
		}

		&__close {
			font-size: $font-size-xl;
			position: absolute;
			right: $space-md;
			top: $space-md;
		}

		&__info {
			display: flex;
			flex: 1;
			flex-direction: column;
			gap: $space-sm;
		}

		&__mnemonic {
			background: var(--surface-interactive);
			border-radius: $radius-md;
			font-size: $font-size-sm;
			line-height: 1.6;
			margin-top: $space-sm;
			padding: $space-md;
		}
	}

	@media (max-width: $bp-sm) {
		.detail-panel {
			align-items: center;
			flex-direction: column;
			text-align: center;
		}
	}
</style>
