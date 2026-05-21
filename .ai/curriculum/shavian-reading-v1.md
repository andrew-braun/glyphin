# Shavian Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: Wave D bootstrap draft

## Goal

Track curriculum authoring for Shavian Reading (`en-Shaw`, `Shaw`).

## Source Files

- Bootstrap workspace: `docs/curriculum/shavian-reading-v1/`
- Manifest: `docs/curriculum/shavian-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/shavian-reading-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/shavian-reading-v1/shavian-reading-v1.md`

## Current Status

- [x] Course prospectus drafted
- [x] Source manifest drafted
- [x] Script inventory drafted
- [x] Candidate anchors drafted for manual scoring
- [x] Lesson sequence drafted
- [x] Review packet generated
- [ ] DB ingestion strategy reviewed
- [ ] Lessons authored
- [ ] Publication path designed

## Open Questions

- See `docs/curriculum/shavian-reading-v1/questions.md`.

## Notes

- Course boundary: English reading in Shavian using a reviewed dialect and
  transcription policy rather than mixed ad hoc spellings.
- External Shavian references are discovery or scoring only; shipped examples are
  app-authored phonemic transcriptions reviewed against the chosen standard.
- Main app gaps are phonemic transcription metadata, dialect labeling, font
  coverage, text-to-speech expectations, and symbol accessibility names.

## Validation

- `pnpm curriculum:validate docs/curriculum/shavian-reading-v1/manifest.json` passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/shavian-reading-v1/grapheme-candidates.csv` generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/shavian-reading-v1/anchor-candidates.csv` generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/shavian-reading-v1 --force` generated `review-packet.md`.
