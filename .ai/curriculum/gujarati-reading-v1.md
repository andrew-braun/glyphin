# Gujarati Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: bootstrap draft

## Goal

Track curriculum authoring for Gujarati Reading (`gu-Gujr`, `Gujr`).

## Source Files

- Bootstrap workspace: `docs/curriculum/gujarati-reading-v1/`
- Manifest: `docs/curriculum/gujarati-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/gujarati-reading-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/gujarati-reading-v1/gujarati-reading-v1.md`

## Current Status

- [x] Course prospectus drafted
- [x] Source manifest drafted
- [x] Script inventory drafted
- [x] Candidate anchors drafted
- [x] Lesson sequence drafted
- [x] Source manifest validated
- [x] Candidate anchors scored
- [x] Review packet generated
- [ ] DB ingestion strategy reviewed
- [ ] Lessons authored
- [ ] Publication path designed

## Open Questions

- See `docs/curriculum/gujarati-reading-v1/questions.md`.

## Notes

- Course boundary: practical Gujarati reading in modern Gujarati script with an
  abugida model, inherent vowel, matras, anusvara, virama, common conjuncts, and
  rare nukta handling documented rather than over-taught early.
- Third-party corpora and lexicons are discovery or scoring inputs only. Runtime
  examples should be app-authored and reviewed.

## Validation

- `pnpm curriculum:validate docs/curriculum/gujarati-reading-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/gujarati-reading-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/gujarati-reading-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/gujarati-reading-v1 --force`
  generated `review-packet.md`.
