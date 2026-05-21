# Baybayin Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `baybayin-reading-v1` bootstrap.

## Architecture

- How should runtime data encode the course's final-consonant policy without
  pretending historic and modern practices are identical?
- Should the virama or pamudpod be modeled as a grapheme, a rule, or a display
  feature attached to vocabulary segments?
- Can drill components render dependent vowel marks and virama clearly at mobile
  sizes?
- Does the database need a convention field for historic versus modern revival
  orthography?

## Product And Pedagogy

- Should v1 begin with open-syllable historic reading and add modern final
  notation later, or teach the modern convention immediately?
- How should the course explain that Baybayin is culturally alive without turning
  examples into decorative text?
- Which Tagalog words are appropriate as beginner anchors when many everyday
  words require final consonants?

## Sources, Licensing, And Attribution

- Confirm Unicode and CLDR metadata terms before durable ingestion.
- Keep Wiktionary discovery-only until CC BY-SA obligations are approved.
- Keep learning references and community samples discovery-only until permission
  and attribution requirements are reviewed.
- Prefer app-authored examples for shipped content.

## Reviewers And Validation

- Assign a Tagalog/Baybayin specialist for spelling, cultural framing, and final
  consonant policy.
- Spot-check modern examples with cultural reviewers before publication.
- Verify font rendering of `ᜒ`, `ᜓ`, and `᜔` in all lesson surfaces.

## App Expansion Recommendations

- Add abugida policy metadata for final-consonant handling.
- Add script-variant notes for revival scripts with multiple living conventions.
- Add rendering tests for dependent marks and virama-like signs.
