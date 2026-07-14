import { env } from "$env/dynamic/private";
import {
	buildPageMetadata as buildMetadata,
	type PageMetadataInput,
	type PageMetadataOutput,
} from "$lib/components/seo/metadata";
import { validateProductionOrigin } from "$lib/config/site";

export type ServerPageMetadataInput = Omit<PageMetadataInput, "origin">;

/**
 * The sole production boundary for canonical origins.
 *
 * Deliberately throws rather than defaulting when SITE_ORIGIN is unset: a
 * silently wrong origin would emit canonical and og:url tags pointing at the
 * wrong site, which is worse than a loud build failure. Prerendered routes
 * resolve this at BUILD time, so the value must exist in the build environment
 * as well as the Worker runtime.
 */
export function getCanonicalOrigin(): string {
	return validateProductionOrigin(env.SITE_ORIGIN);
}

/**
 * Route server loads call this factory, then pass the serializable result to
 * PageMetadata.
 */
export function buildPageMetadata(input: ServerPageMetadataInput): PageMetadataOutput {
	return buildMetadata({ ...input, origin: getCanonicalOrigin() });
}
