# Deseret Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `deseret-reading-v1` bootstrap.

## Architecture

- Where should pronunciation-model metadata live for phonemic English scripts?
- Should case pairs be separate grapheme rows or one row with display variants?
- How should screen-reader labels expose Deseret letter names and sound values?

## Product And Pedagogy

- Which English accent model should v1 use?
- How much historical context should appear in lessons versus course notes?
- Should first lessons teach Deseret letter names, sound values, or both?

## Sources, Licensing, And Attribution

- Confirm terms for historical Deseret references before using examples beyond
  discovery.
- Keep English frequency sources scoring-only; do not ship corpus-derived text.
- Prefer app-authored transcriptions reviewed against the selected standard.

## Reviewers And Validation

- Assign Deseret-literate or phonetics reviewers to validate transcriptions.
- Test Noto Sans Deseret or approved alternatives at lesson and drill sizes.
- Verify historical framing with a reviewer before runtime release.

## App Expansion Recommendations

- Add pronunciation-model metadata for phonemic scripts.
- Add case-pair metadata for non-Latin alphabets.
- Add accessible symbol-name fields for historical scripts.
