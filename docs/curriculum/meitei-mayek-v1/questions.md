# Meitei Mayek Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `meitei-mayek-v1` bootstrap.

## Architecture

- Should lonsum final consonant letters be modeled as separate grapheme rows,
  positional variants, or vocabulary segment metadata?
- Can current drill components render Meitei vowel signs and final letters
  clearly at mobile sizes?
- Does the database need per-course conventions for final-letter systems that are
  not Thai-style final consonant classes?
- Should loanword clusters be allowed in v1 runtime data before a cluster model
  exists?

## Product And Pedagogy

- Which romanization style should v1 use for learner-facing hints?
- Should family words or public words dominate the first ten lessons?
- How should the course handle words whose gloss depends on context such as road
  or land?

## Sources, Licensing, And Attribution

- Confirm Unicode and CLDR metadata terms before durable ingestion.
- Keep Wiktionary discovery-only until CC BY-SA obligations are approved.
- Keep learning references discovery-only until publication rights are reviewed.
- Keep OpenStreetMap scoring-only until ODbL obligations are reviewed.
- Prefer app-authored examples for shipped content.

## Reviewers And Validation

- Assign a Meitei Mayek specialist for spelling, romanization, final-letter use,
  and cultural fit.
- Verify water, food, people, and place-word anchors against real usage.
- Run font checks for `ꯩ`, `ꯤ`, `ꯨ`, `ꯛ`, `ꯡ`, and `ꯝ`.

## App Expansion Recommendations

- Add final-letter metadata that can apply beyond Thai final consonant rules.
- Add combining-mark rendering tests for non-Indic and Indic-adjacent scripts.
- Add source-confidence notes in review packets for limited-corpus courses.
