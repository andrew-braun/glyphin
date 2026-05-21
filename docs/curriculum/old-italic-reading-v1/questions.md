# Old Italic Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `old-italic-reading-v1` bootstrap.

## Architecture

- How should course data declare a right-to-left historic-script boundary that
  may differ from other Old Italic alphabets?
- Should orientation be a drillable pedagogical unit or route-level rendering
  metadata only?
- How should exact inscription provenance be linked without shipping restricted
  corpus text?

## Product And Pedagogy

- Should v1 explicitly say Etruscan Reading or keep the broader Old Italic name
  while declaring an Etruscan boundary?
- Which funerary anchors need context copy before they are appropriate for
  beginner lessons?
- Should low-confidence chunks stay out of runtime lessons until expert review?

## Sources, Licensing, And Attribution

- Confirm Etruscan Texts Project reuse terms before deriving examples.
- Keep epigraphic catalog records and Wiktionary glosses discovery-only until
  attribution and derivative-use obligations are reviewed.
- Prefer app-authored right-to-left examples for shipped content.

## Reviewers And Validation

- Assign an Etruscan or Old Italic specialist to validate letter values,
  orientation, anchors, glosses, and cultural framing.
- Spot-check early anchors against museum object-label contexts.
- Verify Old Italic font support and browser bidi behavior at drill sizes.

## App Expansion Recommendations

- Add per-course direction metadata that can force RTL text rendering.
- Add orientation drills and mirrored-order distractors.
- Add inscription provenance and confidence fields for reviewer-gated anchors.
- Add font fallback checks for Old Italic SMP characters.
