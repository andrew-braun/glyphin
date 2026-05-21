# Japanese Kana And Kanji Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `japanese-kana-kanji-v1` bootstrap.

## Architecture

- How should the runtime model represent mixed-script anchors with no whitespace
  boundaries?
- Should dakuten, handakuten, chōon, and small kana be graphemes, modifiers,
  variants, or orthographic rules?
- How should kanji components or radicals be stored when they are hints rather
  than required runtime parsing units?
- Should kana and kanji readings live on anchors, graphemes, or pronunciation
  records?

## Product And Pedagogy

- Should hiragana and katakana be taught in alternating stages or as parallel
  equivalent rows after the first few wins?
- How much romaji should be visible in a reading-first course?
- Should v1 include anime/manga examples or keep those as later domain modules?

## Sources, Licensing, And Attribution

- Keep JMdict and KANJIDIC data discovery-only until EDRDG obligations are
  reviewed.
- Keep BCCWJ and SUBTLEX frequency-derived claims scoring-only unless attribution
  requirements are approved.
- Prefer app-authored examples for learner-visible content.

## Reviewers And Validation

- Assign a native Japanese reviewer for readings, long vowels, and naturalness.
- Spot-check real signage from Tokyo, Osaka, and Kyoto before implementation.
- Verify fonts for kana, kanji, small kana, dakuten, handakuten, and chōon.

## App Expansion Recommendations

- Add no-whitespace segmentation support for authored lesson payloads.
- Add modifier and variant metadata for kana.
- Add kanji component hints and mixed-script display grouping.
- Add domain-specific rendering checks for dense CJK text.
