# Balinese Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `balinese-reading-v1` bootstrap.

## Architecture

- How should runtime data represent base aksara plus vowel signs and final signs
  as teachable units without losing raw Unicode fidelity?
- Can current drill surfaces render marks above, below, and after bases without
  clipping?
- Should adeg-adeg and gantungan behavior be modeled as graphemes, rule examples,
  or a script-specific cluster feature?
- Which font stack supports Balinese script reliably on all target platforms?

## Product And Pedagogy

- Should v1 use plain pronunciation hints or a formal transliteration convention?
- How should cultural words such as temple and warung be contextualized?
- Which register of Balinese vocabulary is appropriate for beginner labels?

## Sources, Licensing, And Attribution

- Confirm Unicode and CLDR metadata terms before durable ingestion.
- Keep Wiktionary discovery-only until CC BY-SA obligations are approved.
- Keep online learning references discovery-only until publication rights are
  reviewed.
- Keep OpenStreetMap scoring-only until ODbL obligations are reviewed.
- Prefer app-authored examples for shipped content.

## Reviewers And Validation

- Assign a Balinese script specialist for spelling, register, romanization, and
  pronunciation.
- Run font shaping checks on all dependent vowel signs, final signs, and
  adeg-adeg examples.
- Verify cultural-site and everyday examples against real usage before
  publication.

## App Expansion Recommendations

- Add akshara-aware segmentation metadata for abugida courses.
- Add drill rendering tests for dependent marks and final signs.
- Add cultural-context review fields for anchors tied to religious or place
  domains.
