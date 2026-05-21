# Sitelen Pona Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: Wave D bootstrap draft

## Goal

Track curriculum authoring for Sitelen Pona Reading (`tok-Zsym`, `Zsym`).

## Source Files

- Bootstrap workspace: `docs/curriculum/sitelen-pona-v1/`
- Manifest: `docs/curriculum/sitelen-pona-v1/manifest.json`
- DB strategy: `docs/curriculum/sitelen-pona-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/sitelen-pona-v1/sitelen-pona-v1.md`

## Current Status

- [x] Course prospectus drafted
- [x] Source manifest drafted
- [x] Script inventory drafted with glyph IDs rather than final glyph text
- [x] Candidate anchors drafted for manual scoring
- [x] Lesson sequence drafted
- [x] Review packet generated
- [ ] DB ingestion strategy reviewed
- [ ] Lessons authored
- [ ] Publication path designed

## Open Questions

- See `docs/curriculum/sitelen-pona-v1/questions.md`.

## Notes

- Course boundary: Toki Pona reading in sitelen pona using glyph IDs until a
  reviewed font or encoding strategy is approved.
- External glyph charts, fonts, and community examples are discovery or scoring
  only; shipped examples should be app-authored and licensed through an approved
  glyph/font path.
- Main app gaps are non-Unicode glyph identity, font licensing, variant handling,
  logographic segmentation, accessibility names, and community review.

## Validation

- `pnpm curriculum:validate docs/curriculum/sitelen-pona-v1/manifest.json` passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/sitelen-pona-v1/grapheme-candidates.csv` generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/sitelen-pona-v1/anchor-candidates.csv` generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/sitelen-pona-v1 --force` generated `review-packet.md`.
