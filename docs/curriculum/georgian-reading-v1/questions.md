# Georgian Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `georgian-reading-v1` bootstrap.

## Architecture

- How should course data represent Georgian contrast families such as ejective,
  aspirated, and voiced stops without forcing production-pronunciation lessons?
- Should Mtavruli sign variants be represented as variant metadata or deferred
  entirely from v1?
- Do Georgian font metrics require per-script sizing overrides in drills and
  flashcards?

## Product And Pedagogy

- Should the first course explicitly teach only Mkhedruli and mention historical
  scripts only in durable notes?
- Which consonant contrasts need audio-backed drills before learner-facing
  pronunciation hints are safe?
- Should long signs such as entrance and exit be introduced as chunk-recognition
  anchors before every component letter is mastered?

## Sources, Licensing, And Attribution

- Confirm CLDR and Unicode attribution requirements before metadata is embedded
  in durable curriculum records.
- Keep Georgian Wiktionary discovery-only until CC BY-SA obligations are reviewed.
- Keep OpenStreetMap names scoring-only until ODbL derived-data obligations are
  reviewed.
- Prefer app-authored examples for all learner-visible content.

## Reviewers And Validation

- Assign a Georgian reader to validate anchor naturalness, glosses, and safe
  pronunciation hints.
- Spot-check real menu, transit, and facility signs from Georgia to verify the
  first 12 anchors match environmental print.
- Verify GlyphBridge fonts render Mkhedruli clearly at small and large drill
  sizes.

## App Expansion Recommendations

- Add language-agnostic text fields before implementation.
- Add optional contrast-family metadata for graphemes and drills.
- Add per-course script styling and course-aware progress state.
