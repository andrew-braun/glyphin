# N'Ko Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: Wave D bootstrap draft

## Goal

Track curriculum authoring for N'Ko Reading (`nqo-Nkoo`, `Nkoo`).

## Source Files

- Bootstrap workspace: `docs/curriculum/nko-reading-v1/`
- Manifest: `docs/curriculum/nko-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/nko-reading-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/nko-reading-v1/nko-reading-v1.md`

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

- See `docs/curriculum/nko-reading-v1/questions.md`.

## Notes

- Course boundary: N'Ko reading for Manding-language literacy contexts with
  exact language variety and orthography policy pending reviewer approval.
- External sources stay discovery or scoring only; shipped examples should be
  app-authored and reviewed by N'Ko-literate experts.
- Key app gaps are RTL and bidi isolation, combining tone mark display,
  font coverage, language/orthography scope, and culturally grounded anchors.

## Validation

- `pnpm curriculum:validate docs/curriculum/nko-reading-v1/manifest.json` passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/nko-reading-v1/grapheme-candidates.csv` generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/nko-reading-v1/anchor-candidates.csv` generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/nko-reading-v1 --force` generated `review-packet.md`.
