# Burmese Myanmar Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `burmese-myanmar-v1` bootstrap.

## Architecture

- How should the runtime represent Burmese orthographic syllables when one
  visible syllable contains multiple vowel, tone, medial, and final signs?
- Should asat be stored as its own grapheme, final-consonant metadata,
  syllable-frame metadata, or all three?
- What dictionary segmentation tool should be trusted for Burmese word
  boundaries, and what manual review is needed before publication?
- Does the drill renderer need no-split display spans for medials, tone signs,
  and stacked Myanmar forms?

## Product And Pedagogy

- Should v1 teach tone and creaky tone through visual marks only, or include
  explicit pronunciation rules from the start?
- Which romanization or pronunciation-hint style is clearest without turning the
  reading course into a transliteration course?
- Should tea appear early because it is culturally central or later because
  `လက်ဖက်ရည်` is long and asat-heavy?
- Which public facility anchors beyond hospital and toilet are worth v1 core
  treatment after reviewer validation?

## Sources, Licensing, And Attribution

- Confirm Unicode and CLDR attribution requirements before durable ingestion.
- Keep Myanmar Wiktionary discovery-only until CC BY-SA obligations are reviewed.
- Keep OSM Burmese names scoring-only until ODbL obligations are reviewed.
- Select and license-review a Burmese tokenizer before tokenizer output affects
  scoring or publication QA.
- Prefer app-authored tea-shop, menu, market, sign, and label examples for
  shipped content.

## Reviewers And Validation

- Assign a Burmese reviewer to validate anchors, pronunciation hints,
  segmentation, glosses, and cultural context.
- Spot-check real Burmese menus, tea-shop signs, markets, road signs, bus signs,
  hotel signs, hospital signs, toilets, and open or closed signs before locking
  anchors.
- Verify fonts render Myanmar vowel signs, medials, asat, anusvara, tone marks,
  and stacked forms clearly at drill sizes.

## App Expansion Recommendations

- Add language-agnostic text fields before implementation so runtime data does
  not rely on Thai-specific names such as `thai`.
- Add dictionary segmentation, orthographic-syllable, asat, medial, tone-mark,
  and no-split display metadata.
- Add drills that can contrast visual order and reading order for preposed
  Myanmar vowel signs.
- Add script-aware font fallback and shaping QA for Myanmar script.
- Add course-aware progress storage before Burmese can coexist with Thai and
  other script courses.
