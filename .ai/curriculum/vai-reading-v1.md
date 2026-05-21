# Vai Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: Wave D bootstrap draft

## Goal

Track curriculum authoring for Vai Reading (`vai-Vaii`, `Vaii`).

## Source Files

- Bootstrap workspace: `docs/curriculum/vai-reading-v1/`
- Manifest: `docs/curriculum/vai-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/vai-reading-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/vai-reading-v1/vai-reading-v1.md`

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

- See `docs/curriculum/vai-reading-v1/questions.md`.

## Notes

- Course boundary: Vai language reading in the Vai syllabary with a small
  reviewer-approved first inventory.
- External scholarship and digital text stay discovery or scoring only; shipped
  examples should be app-authored and reviewed by Vai language/script experts.
- Key gaps are living-language review, limited open corpora, syllabary-scale
  inventory handling, font coverage, and culturally grounded target domains.

## Validation

- `pnpm curriculum:validate docs/curriculum/vai-reading-v1/manifest.json` passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/vai-reading-v1/grapheme-candidates.csv` generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/vai-reading-v1/anchor-candidates.csv` generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/vai-reading-v1 --force` generated `review-packet.md`.
