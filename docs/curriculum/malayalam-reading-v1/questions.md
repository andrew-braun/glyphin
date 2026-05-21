# Malayalam Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `malayalam-reading-v1` bootstrap.

## Architecture

- How should the runtime represent a pedagogical unit that is smaller than a
  visible Malayalam akshara but larger than a single code point?
- Should chillus such as `ൽ` and `ൻ` be stored as graphemes, consonant variants,
  or orthography-rule examples?
- Should chandrakkala clusters such as `പ്പ`, `ള്ള`, and `ട്ര` be distinct
  teachable units or rule-linked segment rows?
- Does the drill renderer need explicit cluster-boundary metadata so conjuncts
  and traditional ligatures are not split visually?

## Product And Pedagogy

- Confirm whether v1 optimizes for Kerala travel signage, heritage learners, or
  a shared beginner baseline.
- Decide how much reformed-versus-traditional orthography explanation belongs in
  beginner reading copy.
- Determine whether high-utility but cluster-heavy words such as `വെള്ളം` should
  be delayed or taught as visual whole-word anchors first.

## Sources, Licensing, And Attribution

- Confirm CLDR and Unicode attribution requirements before ingesting metadata.
- Keep Malayalam Wiktionary discovery-only until CC BY-SA obligations are
  reviewed.
- Keep OpenStreetMap examples scoring-only until ODbL derived-data obligations
  are reviewed.
- Prefer app-authored shop, menu, and facility examples for shipped content.

## Reviewers And Validation

- Assign a Malayalam reviewer to validate anchor naturalness, glosses,
  pronunciation, and Kerala signage vocabulary.
- Test fonts for vowel signs, chandrakkala, chillus, and conjunct rendering in
  drills.
- Validate that early anchors appear in real Malayalam environmental-print
  contexts.

## App Expansion Recommendations

- Add language-agnostic text fields before implementation so runtime data does
  not rely on Thai-specific names such as `thai`.
- Add script-aware display classes and font fallbacks for Malayalam shaping.
- Add metadata for inherent vowels, vowel signs, chandrakkala suppression,
  chillus, anusvara, and conjunct pedagogy.
- Add course-aware progress storage before Malayalam can coexist with Thai
  lessons.
