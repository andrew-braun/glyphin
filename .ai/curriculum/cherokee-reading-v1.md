# Cherokee Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: Wave D bootstrap draft

## Goal

Track curriculum authoring for Cherokee Reading (`chr-Cher`, `Cher`).

## Source Files

- Bootstrap workspace: `docs/curriculum/cherokee-reading-v1/`
- Manifest: `docs/curriculum/cherokee-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/cherokee-reading-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/cherokee-reading-v1/cherokee-reading-v1.md`

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

- See `docs/curriculum/cherokee-reading-v1/questions.md`.

## Notes

- Course boundary: modern Cherokee syllabary reading for community signage,
  language-revitalization labels, cultural sites, dictionary headwords, and short
  learner-facing text.
- Shipped examples should be app-authored and reviewed by Cherokee language
  experts; external sources stay discovery or scoring only until license and
  cultural review is complete.
- Main app gaps are syllabary-scale inventories, Cherokee case handling,
  font coverage, community-review workflow, and language-agnostic text fields.

## Validation

- `pnpm curriculum:validate docs/curriculum/cherokee-reading-v1/manifest.json` passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/cherokee-reading-v1/grapheme-candidates.csv` generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/cherokee-reading-v1/anchor-candidates.csv` generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/cherokee-reading-v1 --force` generated `review-packet.md`.
