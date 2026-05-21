# Latin Diacritics Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `latin-diacritics-v1` bootstrap.

## Architecture

- Should precomposed accented characters and decomposed base-plus-mark sequences
  share one pedagogical unit row or be stored as variants?
- Where should uppercase variants such as `É`, `Ç`, and `Ü` live so sign-heavy
  lessons do not duplicate every lowercase unit?
- Should language context live on graphemes, anchors, rules, or all three?

## Product And Pedagogy

- Should v1 group lessons by mark shape or by language context once the first
  sign-reading lessons are complete?
- How much pronunciation should be included when the same mark behaves
  differently across languages?
- Should `ß`, `ł`, and similar special letters be late v1 lessons or deferred to
  language-specific follow-up courses?

## Sources, Licensing, And Attribution

- Keep OpenStreetMap-derived place and street names scoring-only until ODbL
  obligations are reviewed.
- Keep Wiktionary-derived glosses discovery-only until CC BY-SA implications are
  reviewed.
- Prefer app-authored menu and sign examples for shipped content.

## Reviewers And Validation

- Assign reviewers for Spanish, French, German, and Portuguese anchor naturalness
  before implementation.
- Spot-check signage and menus from at least four countries to confirm the lesson
  sequence is not overfitted to familiar loanwords.

## App Expansion Recommendations

- Add combining-mark metadata and canonical decomposition fields.
- Add case-pair and variant metadata for sign-heavy uppercase text.
- Add per-anchor language tags inside a multilingual course.
- Add script-aware styling instead of hardcoded Thai text classes.
