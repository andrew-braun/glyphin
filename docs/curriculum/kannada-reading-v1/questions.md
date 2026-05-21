# Kannada Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `kannada-reading-v1` bootstrap.

## Architecture

- How should the runtime represent a pedagogical unit that is smaller than a
  visible Kannada akshara but larger than a single code point?
- Should virama forms and common ottaksharas such as `ಪ್ರ`, `ತ್ರ`, and `ರ್ಗ` be
  stored as graphemes, variant metadata, or orthography-rule examples?
- Does the drill renderer need explicit cluster-boundary metadata so subjoined
  forms are not split visually?
- Should loanword anchors with final virama forms use a separate loanword flag?

## Product And Pedagogy

- Confirm whether v1 optimizes for Karnataka travel signage, heritage learners,
  or a shared beginner baseline.
- Decide how much aspirated and retroflex contrast belongs in early reading copy.
- Determine whether compact loanwords such as `ಕಾಫಿ` should lead the course or
  be balanced with native vocabulary from the first session.

## Sources, Licensing, And Attribution

- Confirm CLDR and Unicode attribution requirements before ingesting metadata.
- Keep Kannada Wiktionary discovery-only until CC BY-SA obligations are reviewed.
- Keep OpenStreetMap examples scoring-only until ODbL derived-data obligations
  are reviewed.
- Prefer app-authored shop, menu, and facility examples for shipped content.

## Reviewers And Validation

- Assign a Kannada reviewer to validate anchor naturalness, glosses,
  pronunciation, and regional vocabulary.
- Test fonts for vowel signs, virama, anusvara, and ottakshara rendering in
  drills.
- Validate that early anchors appear in real Kannada environmental-print
  contexts.

## App Expansion Recommendations

- Add language-agnostic text fields before implementation so runtime data does
  not rely on Thai-specific names such as `thai`.
- Add script-aware display classes and font fallbacks for Kannada shaping.
- Add metadata for inherent vowels, vowel signs, virama suppression, anusvara,
  and conjunct pedagogy.
- Add course-aware progress storage before Kannada can coexist with Thai lessons.
