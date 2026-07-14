<script lang="ts">
	import Badge from "$lib/components/ui/Badge.svelte";
	import { SOUND_PRACTICE_EXPLANATION } from "$lib/data/course-journey";
</script>

<div class="sound-practice-label">
	<Badge tone="accent">Sound practice</Badge>
	<span>{SOUND_PRACTICE_EXPLANATION}</span>
</div>

<style lang="scss">
	.sound-practice-label {
		align-items: center;
		color: var(--color-text-muted);
		display: flex;
		flex-wrap: wrap;
		font-size: $font-size-xs;
		gap: $space-xs $space-sm;
		justify-content: center;
		line-height: 1.4;
		text-align: center;
	}
</style>
