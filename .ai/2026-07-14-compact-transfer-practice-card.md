# Compact Transfer-Practice Card

## Scope

Refine the guided transfer-practice card so it reads as a compact, focused exercise on desktop and retains its responsive mobile layout.

## Design

- Cap the desktop width of the transfer-practice panel and center it within the lesson stage.
- Increase the panel's vertical padding so the self-check card has balanced space above and below.
- Preserve the current full-width behavior at smaller breakpoints.
- Remove the visible revealed-face eyebrow, "Your read", because the card's answer layout already communicates the result.
- Retain accessible button and live-region labels.
- Increase the self-check face's vertical inset so the prompt and tap affordance do not crowd its borders.
- Replace the unread face's top-right line-like fold with a small, layered folded corner at the bottom right; the revealed face has no fold.

## Boundaries

- Touch only the transfer-practice step and shared self-check card presentation.
- Do not alter lesson data, progression, reveal interaction, or other practice flows.

## Verification

- Run Svelte type and accessibility checks after the style and markup changes.
