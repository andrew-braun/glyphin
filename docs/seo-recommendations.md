# SEO recommendations

This document is a research-backed recommendation set for Glyphin's search and
AI-discoverability posture, current as of 2026-07-11. It is not a contract:
[Route SEO contracts](seo.md) and [Search indexing contract](search-indexing.md)
remain the binding specifications for metadata and indexing behavior. This
document identifies what to add on top of those contracts, closes gaps found
during research, and flags decisions that need a product or business call
rather than an engineering default.

Each recommendation below is tagged with a priority tier:

- **P0** — blocks the existing SEO/indexing contracts from being true in
  production. Already tracked in
  [pre-rollout tasks](../.ai/2026-07-11-pre-rollout-tasks.md);
  listed here for completeness.
- **P1** — new gap found during this research, no rich result or crawler
  behavior depends on an external party's timeline. Do before or shortly
  after launch.
- **P2** — real value, not launch-blocking. Good first-quarter-post-launch
  work.
- **P3** — monitor or revisit later; not actionable today, or requires a
  precondition (a second course, real usage data) that does not exist yet.

## 1. Close the existing contract gaps (P0)

`docs/seo.md`'s "Current implementation gaps" table and
`docs/search-indexing.md`'s sitemap/robots requirements are not yet
implemented: no route emits a canonical link, `og:image`, or robots directive;
`static/robots.txt` is still the generic "allow everything" placeholder; there
is no `/sitemap.xml` route; and the root layout disables SSR for `/` and
`/about` (the two indexable routes with no server-capable layout of their
own), which means neither currently ships server-rendered primary content for
crawlers to read. This is the single highest-leverage fix available — none of
the recommendations below matter if Google cannot render the page at all. The
SSR fix has its own dedicated, deliberately narrow task —
[Restore SSR for `/` and `/about`](../.ai/2026-07-11-restore-ssr-homepage-about.md)
— because it touches module-scope store singletons shared across the whole
app and needs its own audit rather than riding along with the metadata work.
Complete that task, then the
[SEO foundation plan](superpowers/plans/2026-07-11-seo-foundation.md) and the
[search indexing readiness plan](superpowers/plans/2026-07-11-search-indexing-readiness.md)
before any of the P1 items.

## 2. Site icons and web app manifest (P1)

No favicon, `apple-touch-icon`, or web app manifest exists anywhere in the
repo (`static/` contains only `robots.txt`; `src/app.html` has no icon
`<link>` tags). This is a plain gap, not a contract change:

- `static/favicon.ico` (multi-size, legacy fallback) — Google's crawler reads
  this to show a site icon next to search results.
- `static/icon-192.png` and `static/icon-512.png`, referenced from a
  `static/manifest.webmanifest` (or `.json`) with `name`, `short_name`,
  `icons`, `theme_color`, and `background_color`. Add
  `<link rel="manifest" href="/manifest.webmanifest" />` in `src/app.html`.
- `static/apple-touch-icon.png` at 180×180, referenced with
  `<link rel="apple-touch-icon" href="/apple-touch-icon.png" />`. iOS ignores
  the manifest for "Add to Home Screen" and falls back to a blurry page
  screenshot without this tag.
- A single source SVG with an embedded `prefers-color-scheme` media query can
  drive the modern `<link rel="icon" type="image/svg+xml">` tag and stay
  consistent with the app's dark/light theme handling in `app.html`; keep the
  PNG/ICO set as the compatibility fallback.

This needs a design asset (a square mark derived from
`src/lib/assets/brand/glyphin-logo.svg`) before implementation — flagging as a
design/eng handoff, not purely engineering.

## 3. Open Graph share image (P1, already contracted)

`docs/seo.md` already specifies `static/og/glyphin-reading-thai.png` at
1200×630 as the default social image, but the file does not exist yet. This
blocks `og:image`/`twitter:image` on every indexable route once Task 3 of the
SEO foundation plan runs. No new decision needed — just create the asset.

## 4. Structured data (JSON-LD) (P1/P2)

No route emits any `application/ld+json`. Google's own guidance (updated
December 2025) confirms `Course` structured data remains actively supported
for the course-list rich result, and separately, well-formed `Course` /
`LearningResource` markup is what AI answer engines (Google AI Overviews,
ChatGPT Search, Perplexity) parse to identify and cite a page as an
educational resource — this matters even where a page has no rich-result
eligibility. Recommended additions, following the same pattern as
`src/lib/components/seo/metadata.ts` (a pure builder function plus a thin
Svelte component that serializes it into `<svelte:head>`):

- **Sitewide `Organization` + `WebSite`** in the root layout: `name`, `url`,
  `logo`, and a `WebSite` node with `SearchAction` only if/when an on-site
  search exists (it does not today — omit `potentialAction` rather than fake
  one).
- **`Course` on `/learn`**: one `Course` node (not an `ItemList`/carousel —
  see below), with `name`, `description`, `provider` (`Organization`,
  pointing at the same node as the sitewide block), and `educationalLevel` if
  a defensible value exists (e.g. "Beginner"). Do not add pricing, enrollment,
  or marketing language into the `name` field — Google's course policy
  explicitly disallows that.
- **`BreadcrumbList` on `/learn/[id]`**: `Home > Lessons > {lesson.title}`,
  matching the existing route hierarchy. This remains a fully supported rich
  result and is cheap once canonical URLs exist.
- **Do not add `FAQPage` markup for rich-result purposes.** Google retired FAQ
  rich results in May 2026 (support removed from the Rich Results Test and
  reporting by August 2026). The vocabulary itself is not harmful, but there
  is no current product surface (an actual FAQ) that would justify adding it
  — don't manufacture one just to add schema.
- **Defer the `ItemList`/course-carousel format.** Google's course-list rich
  result requires marking up at least three distinct courses. Glyphin
  currently ships one course (Thai); per the curriculum backlog, Korean
  Hangul is in progress. Revisit `ItemList` once a second and third course are
  live — adding it now with one course would misrepresent the catalog.
- Structured data needs the same SSR fix as item 1 to be crawler-visible;
  sequence this after the foundation plan, not before.

## 5. `llms.txt` and AI-crawler discoverability (P2)

`llms.txt` is a community convention (proposed by Jeremy Howard, September
2024), not a ratified web standard — no major LLM provider (OpenAI,
Anthropic, Google, Meta) has committed to using it as a production search or
citation signal. Its real, verified value today is narrower than the
marketing around it suggests: IDE agents, MCP tooling, and doc-focused AI
assistants do fetch it when present. Given that cost is low and Glyphin's
public content (home, about, lesson catalog) is already exactly the kind of
concise, structured content the format wants, a minimal `static/llms.txt` is
worth adding as a P2, not because it will move search rankings, but because
it is a cheap, honest description of the site for any tool that does check
for it:

```md
# Glyphin

> Glyphin teaches people to read Thai script through real, high-frequency
> words, guided letter lessons, and progressive reading practice.

- [Home](https://<production-origin>/): product overview and learning method
- [How Glyphin teaches](https://<production-origin>/about): pedagogy and evidence
- [Thai reading lessons](https://<production-origin>/learn): the full lesson catalog
```

Keep it hand-maintained and short; do not attempt full `.md` mirrors of every
route (an `llms-full.txt` or per-page `.md` companions) until there's evidence
of real consumption — that's meaningfully more maintenance for a convention
with no confirmed adoption from the major providers.

This is separate from the **robots.txt AI-crawler policy decision**, which is
a product/business call, not an engineering default:

- AI crawlers now split into _training_ crawlers (`GPTBot`, `Google-Extended`,
  `ClaudeBot` proper) and _answer/search_ crawlers (`OAI-SearchBot`,
  `PerplexityBot`, `Claude-SearchBot`) that only fetch content to answer a live
  user query and generally attribute/link back.
- The default posture (current `static/robots.txt`, "allow everything") is a
  reasonable starting point and requires no changes to keep. If there's a
  preference to keep lesson content out of third-party model _training_ while
  still being citable in AI answers, that's an explicit `Disallow` list for
  the training-only user agents in production `robots.txt`, decided by
  whoever owns content/product strategy, not inferred here.
- Separately, verify Cloudflare's Bot Fight Mode / Super Bot Fight Mode is not
  enabled in a configuration that blanket-blocks these agents at the edge
  before relying on `robots.txt` alone — no such configuration exists in the
  repo today, but it lives in Cloudflare dashboard/Wrangler settings outside
  version control, so it needs a manual check at deploy time.

## 6. Sitemap `lastmod` (P3 — do not add without a real source)

`docs/search-indexing.md` currently and correctly omits `lastmod`,
`changefreq`, and `priority` entirely. This matches current Google guidance:
Google ignores `changefreq`/`priority` outright (both were widely gamed to
`1.0`/`daily`), and only trusts `lastmod` when it's consistently accurate — an
inaccurate `lastmod` is worse than none, since it can cause Google to
distrust the whole sitemap's freshness signal. If the lesson publication
pipeline (`getPublishedLessonEntries()`) gains a trustworthy per-lesson
`updated_at` tied to real content changes, adding `lastmod` from that field
would be a legitimate, low-effort upgrade. Do not synthesize one from build
time or deploy time.

## 7. Core Web Vitals / performance (P1 for the SSR fix, P2 for the rest)

Google's stated position (page-experience docs) is that Core Web Vitals are
one signal among many and only act as a tiebreaker between similarly relevant
pages — not a guaranteed ranking lever. The practical thresholds to track
(75th percentile, mobile and desktop): LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1.

- The biggest available lever is item 1: the root layout currently disables
  SSR globally, which directly hurts LCP (nothing meaningful paints from the
  server) independent of any search-ranking effect — a slow, empty initial
  paint is a bad experience on its own merits.
- Once SSR is restored for indexable routes, stream non-critical data from
  `load` functions rather than blocking navigation on it, keep hydration
  payloads lean per Svelte 5's fine-grained reactivity (avoid re-introducing
  large reactive trees that force big hydration work), and audit the lesson
  practice UI for layout shift (scored feedback, unlocking animations) since
  CLS regressions are easy to introduce in interactive drill components.
- The recent logo asset optimization (`.ai/2026-07-11-pre-rollout-tasks.md`) is the
  right category of work — continue treating brand/media assets as
  render-blocking risk, not just bytes.
- After launch, add PageSpeed Insights / Search Console Core Web Vitals
  monitoring as a recurring check rather than a one-time audit; field data
  (real users) is what Google actually uses, not lab scores alone.

## 8. Search Console / Bing Webmaster verification method (P2)

`docs/search-indexing.md` already assigns sitemap submission to the release
owner post-launch. One concrete recommendation to fold into that step: verify
ownership via a **DNS TXT record** on the production domain rather than an
HTML file or meta tag. It's the only method that doesn't require a deploy to
add or rotate, survives hosting changes, and can be set up before the
production origin is even serving traffic.

## 9. Internationalization / `hreflang` (P3 — not applicable yet)

Glyphin's UI chrome is English-only regardless of which script it teaches, so
there is no `hreflang` need today. This stays a non-issue unless the app UI
itself gets localized (not the taught language — the interface language).
Revisit only if that roadmap changes.

## Suggested sequencing

| Order | Item                                                  | Priority | Blocked by                      |
| ----- | ----------------------------------------------------- | -------- | ------------------------------- |
| 1     | Restore SSR on indexable routes                       | P0       | —                               |
| 2     | Finish SEO foundation + search indexing plans         | P0       | SSR restore                     |
| 3     | Favicon / apple-touch-icon / manifest                 | P1       | Design asset                    |
| 4     | OG share image                                        | P1       | Design asset                    |
| 5     | JSON-LD: Organization/WebSite, Course, BreadcrumbList | P1       | Item 2                          |
| 6     | `llms.txt`                                            | P2       | Canonical origin decided        |
| 7     | AI-crawler `robots.txt` training-bot policy           | P2       | Product decision                |
| 8     | DNS TXT verification for Search Console/Bing          | P2       | Production domain live          |
| 9     | Core Web Vitals monitoring cadence                    | P2       | Production launch               |
| 10    | Sitemap `lastmod` from real publication timestamps    | P3       | Trustworthy `updated_at` source |
| 11    | `ItemList` course-carousel schema                     | P3       | Second/third course launched    |

## Sources

- [Course structured data — Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/course)
- [BreadcrumbList structured data — Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
- [FAQPage structured data — Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
- [Page experience and ranking — Google Search Central](https://developers.google.com/search/docs/appearance/page-experience)
- [Web Vitals — web.dev](https://web.dev/articles/vitals)
- [Build and submit a sitemap — Google Search Central](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Sitemaps `lastmod`/ping deprecation — Google Search Central Blog](https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping)
- [llms.txt specification](https://llmstxt.org/)
