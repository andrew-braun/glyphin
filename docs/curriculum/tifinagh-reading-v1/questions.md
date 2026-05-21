# Tifinagh Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `tifinagh-reading-v1` bootstrap.

## Architecture

- Which font stack gives reliable Tifinagh coverage across supported platforms?
- Should morphology chunks such as the `ⵜ...ⵜ` frame be represented as rules,
  reusable chunks, or lesson notes?
- Does the runtime need locale-specific search or sorting for Tifinagh course
  indexes?

## Product And Pedagogy

- Should v1 use formal romanization, plain pronunciation hints, or both?
- Which regional vocabulary forms should be accepted or avoided in a Standard
  Moroccan Amazigh course?
- Should identity words appear in Lesson 1 or after water and greeting anchors?

## Sources, Licensing, And Attribution

- Confirm CLDR and Unicode metadata terms before durable ingestion.
- Keep IRCAM and educational references discovery-only until publication rights
  are reviewed.
- Keep Wiktionary discovery-only until CC BY-SA obligations are approved.
- Keep OpenStreetMap scoring-only until ODbL obligations are reviewed.
- Prefer app-authored examples for shipped content.

## Reviewers And Validation

- Assign a Standard Moroccan Amazigh reviewer for spelling, pronunciation, and
  cultural fit.
- Spot-check public signs and school-style examples against real Tifinagh usage.
- Verify all app fonts render `ⵖ`, `ⵣ`, and `ⵜ` clearly at small sizes.

## App Expansion Recommendations

- Add script-level font QA even for LTR alphabetic courses.
- Add morphology chunk metadata that can be reused across non-Thai courses.
- Add per-course pronunciation display settings rather than hardcoded Thai copy.
