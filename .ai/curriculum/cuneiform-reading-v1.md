# Sumerian Cuneiform Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: Wave D bootstrap draft

## Goal

Track curriculum authoring for Sumerian Cuneiform Reading (`sux-Xsux`, `Xsux`).

## Source Files

- Bootstrap workspace: `docs/curriculum/cuneiform-reading-v1/`
- Manifest: `docs/curriculum/cuneiform-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/cuneiform-reading-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/cuneiform-reading-v1/cuneiform-reading-v1.md`

## Current Status

- [x] Course prospectus drafted
- [x] Source manifest drafted
- [x] Script inventory drafted
- [x] Candidate anchors drafted for scoring
- [x] Lesson sequence drafted
- [x] DB ingestion strategy drafted
- [ ] Specialist review assigned
- [ ] Lessons authored
- [ ] Publication path designed

## Open Questions

- See `docs/curriculum/cuneiform-reading-v1/questions.md`.

## Notes

- Course boundary is inscription and museum recognition for Sumerian sign values
  rather than full Akkadian or Assyriology training.
- All external corpora and sign lists are scoring or discovery only until source
  obligations are reviewed. Shipped examples must be app-authored and
  specialist-reviewed.
- Runtime gaps center on sign-value metadata, determinatives, transliteration,
  facsimile/source notes, and reliable cuneiform font support.

## Validation

- `pnpm curriculum:validate docs/curriculum/cuneiform-reading-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/cuneiform-reading-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/cuneiform-reading-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/cuneiform-reading-v1 --force`
  generated `review-packet.md`.
