# Adlam Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: Wave D bootstrap draft

## Goal

Track curriculum authoring for Adlam Reading (`ff-Adlm`, `Adlm`).

## Source Files

- Bootstrap workspace: `docs/curriculum/adlam-reading-v1/`
- Manifest: `docs/curriculum/adlam-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/adlam-reading-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/adlam-reading-v1/adlam-reading-v1.md`

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

- See `docs/curriculum/adlam-reading-v1/questions.md`.

## Notes

- Course boundary: Fulani/Fula reading in modern Adlam with a Pular/Fulfulde
  reviewer required before any anchors become learner-facing.
- External sources stay discovery or scoring only; shipped examples should be
  app-authored and reviewed by Adlam-literate community experts.
- Major app gaps are RTL and bidi isolation, Adlam font and shaping checks,
  case handling, transliteration policy, and modern-use domain review.

## Validation

- `pnpm curriculum:validate docs/curriculum/adlam-reading-v1/manifest.json` passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/adlam-reading-v1/grapheme-candidates.csv` generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/adlam-reading-v1/anchor-candidates.csv` generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/adlam-reading-v1 --force` generated `review-packet.md`.
