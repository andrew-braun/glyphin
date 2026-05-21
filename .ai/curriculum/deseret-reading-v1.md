# Deseret Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: Wave D bootstrap draft

## Goal

Track curriculum authoring for Deseret Reading (`en-Dsrt`, `Dsrt`).

## Source Files

- Bootstrap workspace: `docs/curriculum/deseret-reading-v1/`
- Manifest: `docs/curriculum/deseret-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/deseret-reading-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/deseret-reading-v1/deseret-reading-v1.md`

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

- See `docs/curriculum/deseret-reading-v1/questions.md`.

## Notes

- Course boundary: English reading in the Deseret alphabet using reviewed modern
  teaching transcriptions and clear historical context.
- External historical and community sources stay discovery or scoring only;
  shipped examples should be app-authored and reviewed.
- Main app gaps are phonemic transcription metadata, case-pair display, font
  support, historical context fields, and accessibility labels.

## Validation

- `pnpm curriculum:validate docs/curriculum/deseret-reading-v1/manifest.json` passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/deseret-reading-v1/grapheme-candidates.csv` generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/deseret-reading-v1/anchor-candidates.csv` generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/deseret-reading-v1 --force` generated `review-packet.md`.
