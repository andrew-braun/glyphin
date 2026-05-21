# Shavian Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `shavian-reading-v1` bootstrap.

## Architecture

- Where should pronunciation-model metadata live: course version, lesson, anchor,
  or all three?
- Should the runtime support phonemic-source fields separate from ordinary
  romanization and pronunciation hints?
- How should screen-reader labels expose Shavian letter names and sounds?

## Product And Pedagogy

- Which English accent model should v1 use?
- Should first lessons teach Shavian letter names, sound values, or both?
- Does the course need audio playback before phonemic drills are useful?

## Sources, Licensing, And Attribution

- Confirm terms for community Shavian resources before using examples beyond
  discovery.
- Keep English frequency sources scoring-only; do not ship corpus-derived text.
- Prefer app-authored transcriptions reviewed against the selected standard.

## Reviewers And Validation

- Assign Shavian-literate reviewers or phonetics reviewers to validate
  transcriptions.
- Test Noto Sans Shavian or approved alternatives at lesson and drill sizes.
- Verify accessible names for letters and words before runtime release.

## App Expansion Recommendations

- Add pronunciation-model metadata for phonemic scripts.
- Add optional audio hooks for sound-letter mapping.
- Add accessible symbol-name fields for nonstandard alphabets.
