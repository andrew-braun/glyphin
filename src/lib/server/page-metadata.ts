import { env } from "$env/dynamic/private";
import {
	buildPageMetadata as buildMetadata,
	type PageMetadataInput,
	type PageMetadataOutput,
} from "$lib/components/seo/metadata";
import { validateProductionOrigin } from "$lib/config/site";

export type ServerPageMetadataInput = Omit<PageMetadataInput, "origin">;

/**
 * The sole production boundary for canonical origins. Route server loads call
 * this factory, then pass the serializable result to PageMetadata.
 */
export function buildPageMetadata(input: ServerPageMetadataInput): PageMetadataOutput {
	return buildMetadata({ ...input, origin: validateProductionOrigin(env.SITE_ORIGIN) });
}
