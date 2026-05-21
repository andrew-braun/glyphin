# Bamum Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: Wave D bootstrap draft

## Goal

Track curriculum authoring for Bamum Reading (`bax-Bamu`, `Bamu`).

## Source Files

- Bootstrap workspace: `docs/curriculum/bamum-reading-v1/`
- Manifest: `docs/curriculum/bamum-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/bamum-reading-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/bamum-reading-v1/bamum-reading-v1.md`

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

- See `docs/curriculum/bamum-reading-v1/questions.md`.

## Notes

- Course boundary: Bamum language/script reading with v1 scoped to the modern
  Bamum block unless reviewers choose a specific historical stage.
- External scholarship and museum text stay discovery or scoring only; shipped
  examples should be app-authored and reviewed by Bamum script experts.
- Main app gaps are script-stage metadata, limited corpora, syllabary inventory
  scale, font coverage, and historically respectful context.

## Validation

- `pnpm curriculum:validate docs/curriculum/bamum-reading-v1/manifest.json` passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/bamum-reading-v1/grapheme-candidates.csv` generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/bamum-reading-v1/anchor-candidates.csv` generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/bamum-reading-v1 --force` generated `review-packet.md`.
