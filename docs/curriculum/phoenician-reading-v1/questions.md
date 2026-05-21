# Phoenician Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `phoenician-reading-v1` bootstrap.

## Architecture

- How should RTL historical-script examples align script text, transliteration,
  gloss, and optional vocalization in drills?
- Should consonant skeletons be stored as vocabulary text, anchor segments, or a
  dedicated Semitic-script field?
- How should matres lectionis notes be represented without implying Phoenician is
  a fully vowel-marked script?
- Does the runtime need a separate field for scholarly transliteration symbols
  such as `ʾ`, `ʿ`, `ṣ`, and `š`?

## Product And Pedagogy

- Should v1 teach alphabet order early, or prioritize inscription words first?
- How much comparative Hebrew or Greek alphabet context is useful before it
  distracts from Phoenician itself?
- How should uncertain vocalization and nonmodern pronunciation be disclosed in
  compact drill UI?
- Which sacred or royal terms are acceptable as beginner anchors after cultural
  review?

## Sources, Licensing, And Attribution

- Confirm reuse terms for inscription editions before any attested line is used
  beyond discovery or scoring.
- Keep Wiktionary discovery-only until CC BY-SA obligations are approved.
- Prefer app-authored consonant-skeleton examples for shipped content.

## Reviewers And Validation

- Assign a Semitic epigraphy reviewer to validate letter values, transliteration,
  glosses, and cultural notes.
- Verify RTL rendering in all lesson and drill contexts.
- Test Phoenician and transliteration fonts together on mobile and desktop.

## App Expansion Recommendations

- Add first-class RTL support for non-Arabic historical scripts.
- Add transliteration and optional vocalization fields distinct from script text.
- Add abjad-specific rules for vowel omission and consonant-skeleton drills.
- Add specialist-review gates for inscription-derived vocabulary.
