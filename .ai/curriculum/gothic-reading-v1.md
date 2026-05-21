# Gothic Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: Wave D bootstrap draft

## Goal

Track curriculum authoring for Gothic Reading (`got-Goth`, `Goth`).

## Source Files

- Bootstrap workspace: `docs/curriculum/gothic-reading-v1/`
- Manifest: `docs/curriculum/gothic-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/gothic-reading-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/gothic-reading-v1/gothic-reading-v1.md`

## Current Status

- [x] Course prospectus drafted
- [x] Source manifest drafted
- [x] Script inventory drafted
- [x] Candidate anchors drafted for scoring
- [x] Lesson sequence drafted
- [x] DB ingestion strategy drafted
- [ ] Gothic specialist review assigned
- [ ] Lessons authored
- [ ] Publication path designed

## Open Questions

- See `docs/curriculum/gothic-reading-v1/questions.md`.

## Notes

- Course boundary is Gothic alphabet recognition for biblical manuscript and
  lexicon contexts, not a full Gothic grammar course.
- External text editions remain scoring or discovery only until reuse terms are
  approved. Shipped examples must be app-authored and reviewer-approved.
- Runtime gaps include sacred-context metadata, transliteration, historic-font
  checks, and manuscript/source provenance.

## Validation

- `pnpm curriculum:validate docs/curriculum/gothic-reading-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/gothic-reading-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/gothic-reading-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/gothic-reading-v1 --force` generated
  `review-packet.md`.
