# Tibetan Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `tibetan-reading-v1` bootstrap.

## Architecture

- How should the runtime represent tsheg-delimited syllables when a learner
  anchor may contain several syllables but the UI should still expose root
  consonants and stacked subparts?
- Should root letter, prefix, suffix, superscribed, and subjoined roles be stored
  as grapheme metadata, segment metadata, or rule-linked annotations?
- Does the drill renderer need explicit no-split cluster boundaries for stacked
  Tibetan forms to avoid selecting or highlighting half a rendered syllable?
- How should Tibetan shad punctuation and tsheg spacing interact with current
  word-card, drill-option, and review-packet layouts?

## Product And Pedagogy

- Should v1 use Wylie, THL-style phonetics, IPA, or plain English pronunciation
  hints for support text?
- Which Tibetan variety should pronunciation hints assume, and how should that
  choice be disclosed without turning a reading course into a dialect course?
- How early should silent or historical letters be explained instead of treating
  the first anchors as whole-word recognition?
- Should cultural-site vocabulary be a main path or a late elective slice after
  survival and wayfinding signs?

## Sources, Licensing, And Attribution

- Confirm Unicode and CLDR attribution requirements before durable ingestion.
- Keep Tibetan Wiktionary discovery-only until CC BY-SA obligations are reviewed.
- Keep OSM Tibetan-script names scoring-only until ODbL obligations are reviewed.
- Confirm Botok package and model-data terms before using tokenizer outputs in
  scoring or segmentation QA.
- Prefer app-authored tea-house, sign, and label examples for shipped content.

## Reviewers And Validation

- Assign a Tibetan reviewer to validate anchor naturalness, spelling,
  pronunciation hints, and cultural context.
- Spot-check real Tibetan-script tea-house, monastery, school, road, hotel, and
  facility signs before locking the first 12 anchors.
- Verify fonts render vowel signs, stacks, tsheg, shad, and Uchen forms clearly
  at drill sizes on mobile and desktop.

## App Expansion Recommendations

- Add language-agnostic text fields before implementation so runtime data does
  not rely on Thai-specific names such as `thai`.
- Add script-aware segmentation metadata for syllables, root letters, suffixes,
  stacked forms, and punctuation.
- Add per-course font fallback and cluster-highlighting QA for Tibetan stacks.
- Add course-aware progress storage before Tibetan can coexist with Thai and
  other script courses.
