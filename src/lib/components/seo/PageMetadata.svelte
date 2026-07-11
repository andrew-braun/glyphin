<script lang="ts">
	import type { PageMetadataOutput } from "./metadata";

	interface Props {
		metadata: PageMetadataOutput;
	}

	let { metadata }: Props = $props();
</script>

<svelte:head>
	<title>{metadata.title}</title>
	{#if metadata.description}<meta name="description" content={metadata.description} />{/if}
	{#if metadata.canonicalUrl}<link rel="canonical" href={metadata.canonicalUrl} />{/if}
	{#if metadata.robots}<meta name="robots" content={metadata.robots} />{/if}
	{#if metadata.social}<meta
			property="og:site_name"
			content={metadata.social.openGraph.siteName}
		/>
		<meta property="og:title" content={metadata.social.openGraph.title} />
		{#if metadata.social.openGraph.description}<meta
				property="og:description"
				content={metadata.social.openGraph.description}
			/>{/if}
		{#if metadata.social.openGraph.url}<meta
				property="og:url"
				content={metadata.social.openGraph.url}
			/>{/if}
		<meta property="og:type" content={metadata.social.openGraph.type} />
		{#if metadata.social.openGraph.image}<meta
				property="og:image"
				content={metadata.social.openGraph.image}
			/>{/if}
		<meta name="twitter:card" content={metadata.social.twitter.card} />
		<meta name="twitter:title" content={metadata.social.twitter.title} />
		{#if metadata.social.twitter.description}<meta
				name="twitter:description"
				content={metadata.social.twitter.description}
			/>{/if}
		{#if metadata.social.twitter.image}<meta
				name="twitter:image"
				content={metadata.social.twitter.image}
			/>{/if}
	{/if}
</svelte:head>
