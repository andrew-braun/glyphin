# Mandarin Han Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `mandarin-han-v1` bootstrap.

## Architecture

- How should simplified and traditional variants be stored when mappings are not
  always one-to-one?
- Should radicals and components be first-class grapheme rows, JSON metadata, or
  a separate component table?
- How should pinyin tone marks and tone numbers be represented for sorting,
  display, and future audio?
- How should manually authored word boundaries be stored for no-whitespace Han
  strings?

## Product And Pedagogy

- Should tones be assessed in v1 or shown only as pronunciation support?
- Should traditional variants appear inline, behind a reveal, or only in review
  notes?
- How many component hints are helpful before the course starts feeling like a
  radical taxonomy?

## Sources, Licensing, And Attribution

- Keep CEDICT data discovery-only until CC BY-SA obligations are reviewed.
- Keep HSK, jieba, and wordfreq-derived content scoring-only until source terms
  are approved for durable derived artifacts.
- Prefer app-authored menu and sign examples for learner-visible content.

## Reviewers And Validation

- Assign a native Mandarin reviewer for pinyin, tones, naturalness, and Mainland
  simplified usage.
- Spot-check menu and signage examples from multiple Mainland city contexts.
- Verify CJK font rendering on mobile and desktop.

## App Expansion Recommendations

- Add logographic component metadata and display grouping.
- Add no-whitespace word segmentation for authored payloads.
- Add simplified/traditional variant metadata.
- Add pinyin and tone support with optional audio hooks.
