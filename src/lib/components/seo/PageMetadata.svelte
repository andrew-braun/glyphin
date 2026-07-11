<script lang="ts">
	import { env } from "$env/dynamic/public";
	import { getProductionOrigin } from "$lib/config/site";

	import { buildPageMetadata, type PageMetadataType } from "./metadata";

	interface Props {
		title: string;
		description?: string;
		canonicalPath?: string;
		noindex?: boolean;
		imagePath?: string;
		type?: PageMetadataType;
	}

	let {
		title,
		description,
		canonicalPath,
		noindex = false,
		imagePath,
		type = "website",
	}: Props = $props();

	const metadata = $derived(
		buildPageMetadata({
			title,
			description,
			canonicalPath,
			noindex,
			imagePath,
			type,
			origin: getProductionOrigin(env.PUBLIC_SITE_ORIGIN),
		}),
	);
</script>

<svelte:head>
	<title>{metadata.title}</title>
	{#if metadata.description}<meta name="description" content={metadata.description} />{/if}
	{#if metadata.canonicalUrl}<link rel="canonical" href={metadata.canonicalUrl} />{/if}
	{#if metadata.robots}<meta name="robots" content={metadata.robots} />{/if}
	<meta property="og:site_name" content={metadata.openGraph.siteName} />
	<meta property="og:title" content={metadata.openGraph.title} />
	{#if metadata.openGraph.description}<meta
			property="og:description"
			content={metadata.openGraph.description}
		/>{/if}
	{#if metadata.openGraph.url}<meta property="og:url" content={metadata.openGraph.url} />{/if}
	<meta property="og:type" content={metadata.openGraph.type} />
	{#if metadata.openGraph.image}<meta
			property="og:image"
			content={metadata.openGraph.image}
		/>{/if}
	<meta name="twitter:card" content={metadata.twitter.card} />
	<meta name="twitter:title" content={metadata.twitter.title} />
	{#if metadata.twitter.description}<meta
			name="twitter:description"
			content={metadata.twitter.description}
		/>{/if}
	{#if metadata.twitter.image}<meta name="twitter:image" content={metadata.twitter.image} />{/if}
</svelte:head>
