# Armenian Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `armenian-reading-v1` bootstrap.

## Architecture

- How should the runtime model store a pedagogical unit such as `ու` that is two
  letters but one early reading unit?
- Should the `և` ligature be normalized to `եւ` for search while preserving the
  original learner-visible glyph?
- Where should Armenian punctuation and stress-like marks live in the lesson data
  model?

## Product And Pedagogy

- Should v1 explicitly choose Eastern Armenian pronunciation and defer Western
  Armenian to notes or a future course?
- Do aspirated consonant contrasts need dedicated audio-backed drills before they
  are used in anchor words?
- How much uppercase signage should be introduced before the lowercase alphabet
  is stable?

## Sources, Licensing, And Attribution

- Confirm CLDR and Unicode attribution requirements before metadata is embedded
  in durable curriculum records.
- Keep Armenian Wiktionary discovery-only until CC BY-SA obligations are reviewed.
- Keep OpenStreetMap names scoring-only until ODbL derived-data obligations are
  reviewed.
- Prefer app-authored examples for all learner-visible content.

## Reviewers And Validation

- Assign an Eastern Armenian reader to validate anchor naturalness, glosses,
  pronunciation notes, and punctuation.
- Spot-check real menu, transit, and facility signs from Armenia to verify the
  first 12 anchors are visible in environmental print.
- Verify the production font renders Armenian lowercase, uppercase, `ու`, `և`,
  and punctuation clearly at drill sizes.

## App Expansion Recommendations

- Add language-agnostic text fields before implementation so runtime data does
  not rely on Thai-specific property names.
- Add case-pair metadata and multi-code-point pedagogical units.
- Add script-aware punctuation handling and per-course progress state.
