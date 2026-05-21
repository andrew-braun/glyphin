# Tamil Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `tamil-reading-v1` bootstrap.

## Architecture

- How should the runtime represent a pedagogical unit that is smaller than a
  visible Tamil akshara but larger than a single code point?
- Should pulli-suppressed forms such as `ல்` be stored as separate graphemes,
  variant rows on base consonants, or orthography-rule examples?
- How should pre-base vowel signs such as `ெ`, `ே`, and `ை` be ordered in lesson
  data so learner-facing displays match font-shaped text?
- Should selected loan letters such as ஸ be part of the core inventory or a late
  optional loanword module?

## Product And Pedagogy

- Confirm whether v1 should optimize for Tamil Nadu travel signage, Sri Lankan
  Tamil contexts, heritage reading, or a shared beginner baseline.
- Decide how much pronunciation detail to provide for contextual stop values
  without turning the course into a phonology lesson.
- Determine how early to teach high-identity but high-load letters such as ழ.

## Sources, Licensing, And Attribution

- Confirm CLDR and Unicode attribution requirements before ingesting metadata.
- Keep Tamil Wiktionary discovery-only until CC BY-SA obligations are reviewed.
- Keep OpenStreetMap examples scoring-only until ODbL derived-data obligations
  are reviewed.
- Prefer app-authored shop, menu, and facility examples for shipped content.

## Reviewers And Validation

- Assign a Tamil reviewer to validate anchor naturalness, glosses, pronunciation,
  and regional vocabulary.
- Test fonts for dependent vowel signs, pulli, Grantha letters, and small-size
  rendering in drills.
- Validate that early anchors appear in real Tamil environmental-print contexts.

## App Expansion Recommendations

- Add language-agnostic text fields before implementation so runtime data does
  not rely on Thai-specific names such as `thai`.
- Add script-aware display classes and font fallbacks for Tamil shaping.
- Add metadata for inherent vowels, vowel signs, pulli suppression, and
  pedagogical units inside aksharas.
- Add course-aware progress storage before Tamil can coexist with Thai lessons.
