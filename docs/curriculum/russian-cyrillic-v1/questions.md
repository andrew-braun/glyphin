# Russian Cyrillic Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `russian-cyrillic-v1` bootstrap.

## Architecture

- Should uppercase and lowercase Cyrillic forms be variants on one grapheme row
  or separate rows for signage-heavy lessons?
- Should soft and hard signs be graphemes, modifiers, or orthographic rules?
- How should optional stress marks be attached to anchors without changing the
  canonical learner-visible spelling?
- Should confusable pairs such as В/B, Н/H, Р/P, С/C, and Х/X live in grapheme
  metadata or drill metadata?

## Product And Pedagogy

- Should v1 teach a formal transliteration standard or plain English phonetic
  hints only?
- How much palatalization should be shown in a reading-first course?
- Should politeness words such as `спасибо` and `пожалуйста` be late core or
  optional review because of length?

## Sources, Licensing, And Attribution

- Keep Russian Wiktionary glosses discovery-only until CC BY-SA obligations are
  reviewed.
- Keep OpenStreetMap-derived names scoring-only until ODbL obligations are
  reviewed.
- Prefer app-authored examples for learner-visible content.

## Reviewers And Validation

- Assign a native Russian reviewer for stress marks, glosses, and sign
  naturalness.
- Verify fonts for Cyrillic uppercase and lowercase at drill sizes.

## App Expansion Recommendations

- Add case-pair and confusable metadata.
- Add optional pronunciation overlays for stress marks.
- Add modifier handling for hard and soft signs.
- Add per-script contrast drill support.
