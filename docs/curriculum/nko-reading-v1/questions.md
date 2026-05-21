# N'Ko Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `nko-reading-v1` bootstrap.

## Architecture

- How should bidi isolation be applied when N'Ko appears inside English UI text,
  review tables, generated packets, and CSV previews?
- How should combining tone and nasal marks be stored for matching, display, and
  accessibility labels?
- Should the course metadata distinguish base letters, vowel letters, marks,
  digits, and punctuation as separate pedagogical roles?

## Product And Pedagogy

- Which Manding-language context and orthographic conventions should define v1?
- Should tone marks appear in first-session anchors or wait until learners know a
  few base letters?
- Are short chunk-style anchors acceptable or should every lesson anchor be a
  full reviewed word?

## Sources, Licensing, And Attribution

- Keep Wikimedia and other CC BY-SA material discovery-only until attribution and
  share-alike implications are approved.
- Confirm any community educational source terms before using examples beyond
  discovery.
- Prefer app-authored examples reviewed by N'Ko-literate experts.

## Reviewers And Validation

- Assign N'Ko-literate reviewers for language variety, spelling, tone marks, and
  cultural context.
- Test Noto Sans N'Ko or approved alternatives for combining-mark clarity.
- Verify RTL and mark rendering on desktop and mobile before runtime release.

## App Expansion Recommendations

- Add course-aware RTL and bidi-isolation helpers before runtime implementation.
- Add combining-mark metadata and accessibility labels for mark names.
- Add font QA for small marks and punctuation in drills.
