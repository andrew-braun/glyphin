<script lang="ts">
	import { RadioGroup } from "bits-ui";

	import { cn } from "$lib/utils/cn";

	export type RadioButtonTone = "default" | "correct" | "wrong";

	export type RadioButtonOption = {
		value: string;
		label: string;
		disabled?: boolean;
		isThai?: boolean;
		tone?: RadioButtonTone;
	};

	let {
		options,
		value = $bindable(""),
		labelledBy,
		columns = 2,
		class: className = "",
	}: {
		options: RadioButtonOption[];
		value?: string;
		labelledBy?: string;
		columns?: number;
		class?: string;
	} = $props();

	const columnClass = $derived(
		columns === 1
			? "radio-buttons--columns-1"
			: columns === 3
				? "radio-buttons--columns-3"
				: columns === 4
					? "radio-buttons--columns-4"
					: "radio-buttons--columns-2",
	);
	const classes = $derived(cn("radio-buttons", columnClass, className));

	function getOptionClasses(option: RadioButtonOption, checked: boolean) {
		return cn(
			"radio-buttons__option",
			checked && "radio-buttons__option--selected",
			option.tone === "correct" && "radio-buttons__option--correct",
			option.tone === "wrong" && "radio-buttons__option--wrong",
		);
	}
</script>

<RadioGroup.Root class={classes} aria-labelledby={labelledBy} bind:value>
	{#each options as option}
		<RadioGroup.Item value={option.value} disabled={option.disabled}>
			{#snippet child({ props, checked })}
				<button {...props} class={getOptionClasses(option, checked)}>
					<span class={["radio-buttons__label", { thai: option.isThai }]}
						>{option.label}</span
					>
				</button>
			{/snippet}
		</RadioGroup.Item>
	{/each}
</RadioGroup.Root>

<style lang="scss">
	:global(.radio-buttons) {
		display: grid;
		gap: $space-md;
		width: 100%;
	}

	:global(.radio-buttons > button[role="radio"]) {
		width: 100%;
	}

	:global(.radio-buttons.radio-buttons--columns-1) {
		grid-template-columns: 1fr;
	}

	:global(.radio-buttons.radio-buttons--columns-2) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	:global(.radio-buttons.radio-buttons--columns-3) {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	:global(.radio-buttons.radio-buttons--columns-4) {
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}

	.radio-buttons {
		&__option {
			@include drill-option;
			@include drill-option-states;
			align-items: center;
			display: flex;
			justify-content: center;
			min-height: 5.5rem;
			text-align: center;
			width: 100%;
		}

		&__label.thai {
			font-size: $font-size-thai;
		}
	}

	@media (max-width: $bp-sm) {
		:global(.radio-buttons) {
			grid-template-columns: 1fr;
		}

		.radio-buttons {
			&__option {
				min-height: 4.75rem;
			}
		}
	}
</style>
