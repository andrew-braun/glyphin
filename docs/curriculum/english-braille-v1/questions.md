# English Braille Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `english-braille-v1` bootstrap.

## Architecture

- Does the course model need a `notation` or `tactile_script` family separate
  from ordinary visual writing systems?
- How should each braille cell store dot-number metadata, spoken labels, Unicode
  cell text, and future tactile or haptic patterns?
- Should source English text and braille output be stored together or generated
  only after a reviewed braille translation step?

## Product And Pedagogy

- Can a visual-only braille course ship as a preview, or must v1 wait for tactile
  or haptic interaction support?
- Should the first release explicitly call itself uncontracted Grade 1 English
  braille and defer UEB contractions?
- Which workflows need screen-reader-first design before visual drills are useful?

## Sources, Licensing, And Attribution

- Confirm ICEB and BANA terms before any standards wording or examples become
  learner-visible.
- Confirm Liblouis license implications before using generated translations in a
  build or authoring pipeline.
- Keep external standards and tool outputs discovery or scoring only until legal
  and accessibility review is complete.
- Prefer app-authored examples checked by braille readers for shipped content.

## Reviewers And Validation

- Assign braille readers and accessibility specialists to validate cell labels,
  dot numbers, examples, and UI interaction.
- Test with screen readers and keyboard-only navigation before runtime release.
- Verify Unicode braille cells render legibly at drill sizes and have meaningful
  accessible names.

## App Expansion Recommendations

- Add notation-course and tactile-script metadata.
- Add dot-number fields, indicator-cell roles, and grade-level metadata.
- Add haptic or tactile mode planning and screen-reader-safe alternatives.
