# Ogham Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `ogham-reading-v1` bootstrap.

## Architecture

- How should the runtime represent horizontal Unicode display versus vertical or
  edge-following stone orientation?
- Should Ogham start and end marks be modeled as graphemes, punctuation, or
  display metadata?
- How can drills represent the stemline and aicme stroke groups without building
  a one-off Ogham renderer?
- Should formula chunks such as MAQI and MUCOI be vocabulary items, anchor
  targets, or reusable epigraphic formula units?

## Product And Pedagogy

- Should learners see Old Irish letter names, transliteration letters, or both?
- How much inscription context is needed before a fragment like MAQI becomes
  meaningful?
- How should nonmodern pronunciation limits be shown without cluttering the
  first lessons?
- Should the course include any orientation practice before the app can render
  stone-edge layouts?

## Sources, Licensing, And Attribution

- Confirm reuse terms for Ogham in 3D records and images before any source text
  appears in shipped content.
- Keep CIIC-style readings and dictionary entries discovery-only until citation
  and reuse terms are approved.
- Prefer app-authored formula-style examples and synthetic review prompts for
  shipped content.

## Reviewers And Validation

- Assign an Old Irish or Celtic epigraphy specialist to validate formula chunks,
  transliteration, and cultural context.
- Validate Ogham glyph rendering with start and end marks across supported fonts.
- Confirm that any stone-orientation diagrams or labels do not misrepresent
  actual inscriptions.

## App Expansion Recommendations

- Add orientation metadata and script-specific display notes to lesson payloads.
- Add transliteration fields alongside script text for all historical scripts.
- Add support for formula-fragment anchors that are not ordinary dictionary
  words.
- Add specialist-review status fields before publishing inscription-derived
  lessons.
