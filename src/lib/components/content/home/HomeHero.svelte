<script lang="ts">
	import Button from "$lib/components/ui/Button.svelte";
	import Heading from "$lib/components/ui/Heading.svelte";
	import Reveal from "$lib/components/ui/Reveal.svelte";
</script>

<section class="home-hero">
	<div class="home-hero__container card">
		<Reveal delay={40}>
			<div class="home-hero__copy">
				<!-- <span class="badge badge--accent">Learn alphabets by reading, not by drilling</span> -->
				<div class="home-hero__heading">
					<Heading as="h1">Skip the drills. Start reading.</Heading>
				</div>
				<p class="home-hero__lead">
					Glyphin teaches you the highest-frequency letter/word combinations first, so you
					can start reading real words from day one.
				</p>

				<div class="home-hero__actions">
					<Button href="/auth" variant="primary" size="large">Get Started for Free</Button
					>
				</div>
			</div>
		</Reveal>

		<Reveal delay={180} distance={24}>
			<div class="home-hero__art">
				<div class="language-card">
					<div class="language-card__sample thai">ไทย</div>
					<div class="language-card__copy">
						<span class="language-card__name">Thai</span>
						<span class="language-card__status">Available now</span>
					</div>
					<Button href="/learn/1" variant="primary">Learn Thai</Button>
				</div>
				<p class="home-hero__future">More writing systems will join the path later.</p>
			</div>
		</Reveal>
	</div>
</section>

<style lang="scss">
	.home-hero {
		display: flex;
		flex-direction: column;

		&__container {
			align-items: center;
			background: var(--color-surface-card);
			display: grid;
			gap: $space-xl;
			grid-template-columns: minmax(0, 1.05fr) minmax(20rem, 0.95fr);
			overflow: hidden;
			padding: clamp($space-xl, 5vw, $space-3xl);
		}

		&__copy {
			display: flex;
			flex-direction: column;
			gap: $space-lg;
		}

		&__heading {
			--heading-font-size: clamp(2.2rem, 4.5vw, 4.75rem);
			--heading-line-height: 0.98;
			--heading-margin-bottom: 0;
		}

		&__lead {
			color: var(--color-text-muted);
			font-size: $font-size-lg;
			max-width: 34rem;
		}

		&__actions {
			display: flex;
			flex-wrap: wrap;
			gap: $space-md;
		}

		&__art {
			display: flex;
			flex-direction: column;
			gap: $space-md;
			justify-content: center;
		}

		&__future {
			color: var(--color-text-soft);
			font-size: $font-size-sm;
			margin: 0;
			text-align: center;
		}

		.language-card {
			align-items: center;
			background: var(--color-surface-card);
			border: 1px solid var(--color-border);
			border-radius: $radius-xl;
			box-shadow: var(--shadow-card-hover);
			display: flex;
			gap: $space-lg;
			padding: $space-xl;

			@media (max-width: $bp-sm) {
				flex-direction: column;
			}

			&__sample {
				align-items: center;
				background: rgb(var(--rgb-primary) / 0.1);
				border-radius: $radius-lg;
				color: var(--color-primary-strong);
				display: flex;
				font-size: $font-size-3xl;
				height: 5rem;
				justify-content: center;
				width: 5rem;
			}

			&__copy {
				display: grid;
				flex: 1;
				gap: $space-xs;
			}

			&__name {
				font-size: $font-size-lg;
				font-weight: 800;
			}

			&__status {
				color: var(--color-success);
				font-size: $font-size-sm;
				font-weight: 700;
			}
		}
	}

	@media (max-width: $bp-lg) {
		.home-hero {
			&__container {
				grid-template-columns: 1fr;
			}

			&__art {
				order: -1;
			}
		}
	}

	@media (max-width: $bp-sm) {
		.home-hero {
			&__actions {
				flex-direction: column;
			}
		}
	}
</style>
