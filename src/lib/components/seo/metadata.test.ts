import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { buildPageMetadata } from "./metadata.ts";

const origin = "https://glyphin.example";

describe("buildPageMetadata", () => {
	it("suffixes the site name exactly once", () => {
		assert.equal(
			buildPageMetadata({ title: "Learn Thai", origin }).title,
			"Learn Thai — Glyphin",
		);
		assert.equal(
			buildPageMetadata({ title: "Learn Thai — Glyphin", origin }).title,
			"Learn Thai — Glyphin",
		);
	});

	it("constructs absolute canonical and image URLs", () => {
		const metadata = buildPageMetadata({
			title: "Learn Thai",
			canonicalPath: "/learn",
			imagePath: "/og/learn.png",
			origin,
		});

		assert.equal(metadata.canonicalUrl, "https://glyphin.example/learn");
		assert.equal(metadata.openGraph.url, "https://glyphin.example/learn");
		assert.equal(metadata.openGraph.image, "https://glyphin.example/og/learn.png");
	});

	it("rejects canonical paths that are not root-relative", () => {
		assert.throws(
			() => buildPageMetadata({ title: "Learn Thai", canonicalPath: "learn", origin }),
			/canonicalPath must begin with \//,
		);
	});

	it("builds noindex robots, Open Graph, and Twitter metadata", () => {
		const metadata = buildPageMetadata({
			title: "Lesson",
			description: "Read a Thai word.",
			canonicalPath: "/learn/lesson",
			imagePath: "/og/lesson.png",
			noindex: true,
			origin,
			type: "article",
		});

		assert.deepEqual(metadata, {
			title: "Lesson — Glyphin",
			description: "Read a Thai word.",
			canonicalUrl: "https://glyphin.example/learn/lesson",
			robots: "noindex, nofollow",
			openGraph: {
				siteName: "Glyphin",
				title: "Lesson — Glyphin",
				description: "Read a Thai word.",
				url: "https://glyphin.example/learn/lesson",
				type: "article",
				image: "https://glyphin.example/og/lesson.png",
			},
			twitter: {
				card: "summary_large_image",
				title: "Lesson — Glyphin",
				description: "Read a Thai word.",
				image: "https://glyphin.example/og/lesson.png",
			},
		});
	});
});
