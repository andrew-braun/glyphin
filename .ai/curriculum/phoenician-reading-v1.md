# Phoenician Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: bootstrap draft

## Goal

Track curriculum authoring for Phoenician Reading (`phn-Phnx`, `Phnx`).

## Source Files

- Bootstrap workspace: `docs/curriculum/phoenician-reading-v1/`
- Manifest: `docs/curriculum/phoenician-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/phoenician-reading-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/phoenician-reading-v1/phoenician-reading-v1.md`

## Current Status

- [x] Course prospectus drafted
- [x] Source manifest drafted
- [x] Script inventory drafted
- [x] Candidate anchors drafted
- [x] Lesson sequence drafted
- [x] DB ingestion strategy drafted
- [x] Candidate files scored in current validation pass
- [x] Review packet generated in current validation pass
- [ ] Lessons authored
- [ ] Publication path designed

## Open Questions

- See `docs/curriculum/phoenician-reading-v1/questions.md`.

## Notes

- Course boundary: inscription and museum-label literacy for Phoenician consonant
  writing with conservative transliteration support.
- External inscription corpora, dictionaries, and alphabet-name references are
  discovery or scoring only. Shipped examples should be app-authored and reviewed
  by a Semitic epigraphy specialist.
- App gaps include RTL historical scripts, consonantal abjad modeling,
  transliteration fields, vowel-omission explanations, and nonmodern
  pronunciation limits.

## Validation

- `pnpm curriculum:validate docs/curriculum/phoenician-reading-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/phoenician-reading-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/phoenician-reading-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/phoenician-reading-v1 --force`
  generated `review-packet.md`.
