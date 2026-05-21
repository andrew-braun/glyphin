# Javanese Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `javanese-reading-v1` bootstrap.

## Architecture

- How should runtime data represent base aksara plus dependent vowel signs as a
  teachable unit without losing raw Unicode fidelity?
- Can current drill components render above, below, and surrounding vowel signs
  without clipping?
- Should pangkon, final signs, and pasangan become graphemes, rule examples, or
  separate orthographic features?
- Which font stack supports Javanese shaping reliably on all target platforms?

## Product And Pedagogy

- Should v1 use Latin transliteration, pronunciation hints, or both?
- How early should pasangan appear if enter and other useful words require it?
- Which vocabulary register should be used for food, road, and everyday words?

## Sources, Licensing, And Attribution

- Confirm Unicode and CLDR metadata terms before durable ingestion.
- Keep Wiktionary discovery-only until CC BY-SA obligations are approved.
- Keep Javanese learning references discovery-only until publication rights are
  reviewed.
- Keep OpenStreetMap scoring-only until ODbL obligations are reviewed.
- Prefer app-authored examples for shipped content.

## Reviewers And Validation

- Assign a Javanese script specialist for spelling, register, romanization, and
  pronunciation.
- Run font shaping checks on all dependent vowel signs and final marks used in
  the sequence.
- Verify real sign and cultural-site examples before publication.

## App Expansion Recommendations

- Add akshara-aware segmentation metadata for abugida courses.
- Add drill rendering tests for dependent marks and stacked forms.
- Add source-confidence display in review tooling so manual estimates are not
  mistaken for corpus-backed rankings.
