# Thaana Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `thaana-reading-v1` bootstrap.

## Architecture

- Do all lesson surfaces isolate RTL Thaana text correctly when mixed with
  English glosses and controls?
- Should base-plus-vowel clusters be stored as grapheme rows, vocabulary
  segments, or rule examples?
- Can current components render vowel signs and sukun without clipping or
  mark-position drift?
- Does the database need separate fields for direction and script-specific mark
  segmentation policy?

## Product And Pedagogy

- Which romanization or pronunciation hint style should v1 use?
- How early should long vowels be introduced if high-utility words require them?
- Which open and closed sign spellings are natural enough for beginner lessons?

## Sources, Licensing, And Attribution

- Confirm Unicode and CLDR metadata terms before durable ingestion.
- Keep Wiktionary discovery-only until CC BY-SA obligations are approved.
- Keep language references discovery-only until publication rights are reviewed.
- Keep OpenStreetMap scoring-only until ODbL obligations are reviewed.
- Prefer app-authored examples for shipped content.

## Reviewers And Validation

- Assign a Dhivehi speaker for spelling, pronunciation, romanization, and
  cultural fit.
- Run font and bidi checks for every vowel mark and sukun example.
- Verify real-world restroom, road, and open/closed examples before publication.

## App Expansion Recommendations

- Add bidi isolation wrappers to reusable lesson text components.
- Add combining-mark-aware segmentation metadata.
- Add font QA for scripts with obligatory vowel marks.
