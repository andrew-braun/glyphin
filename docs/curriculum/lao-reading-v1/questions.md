# Lao Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `lao-reading-v1` bootstrap.

## Architecture

- How should the runtime represent Lao syllable frames when vowels may appear
  before, above, below, after, or around the consonant base?
- Should tone marks be modeled as graphemes, syllable metadata, pronunciation
  metadata, or all three?
- What dictionary segmentation tool should be trusted for Lao word boundaries,
  and what review workflow catches phrase-space ambiguity?
- How should leading-h and consonant-class behavior be stored without requiring
  every lesson to teach full tone calculation?

## Product And Pedagogy

- Should v1 explicitly teach tone classes or use just-in-time tone notes tied to
  real anchors?
- Which romanization or pronunciation-hint style is least distracting for Lao
  learners?
- Should `ເຂົ້າ` appear as both rice and enter early, or should one context wait
  until semantic ambiguity is easier to explain?
- Which facility terms beyond bathroom, hotel, open, and closed deserve v1 core
  treatment after reviewer validation?

## Sources, Licensing, And Attribution

- Confirm Unicode and CLDR attribution requirements before durable ingestion.
- Keep Lao Wiktionary discovery-only until CC BY-SA obligations are reviewed.
- Keep OSM Lao names scoring-only until ODbL obligations are reviewed.
- Select and license-review a Lao tokenizer before tokenizer output affects
  scoring or publication QA.
- Prefer app-authored menu, market, sign, and label examples for shipped content.

## Reviewers And Validation

- Assign a Lao reviewer to validate anchors, tones, vowel length, segmentation,
  glosses, and cultural context.
- Spot-check real Lao menus, shop signs, markets, road labels, hotel signs, open
  or closed signs, and bathroom signs before locking anchors.
- Verify fonts render tone marks, vowel signs, preposed vowels, and Lao digits
  clearly at drill sizes.

## App Expansion Recommendations

- Add language-agnostic text fields before implementation so runtime data does
  not rely on Thai-specific names such as `thai`.
- Add dictionary segmentation, syllable-frame, vowel-position, tone-mark, and
  consonant-class metadata.
- Add drills that can contrast visual order and reading order for preposed vowel
  signs.
- Add script-aware font fallback and combining-mark QA for Lao.
- Add course-aware progress storage before Lao can coexist with Thai and other
  script courses.
