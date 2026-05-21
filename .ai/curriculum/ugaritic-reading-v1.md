# Ugaritic Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: Wave D bootstrap draft

## Goal

Track curriculum authoring for Ugaritic Reading (`uga-Ugar`, `Ugar`).

## Source Files

- Bootstrap workspace: `docs/curriculum/ugaritic-reading-v1/`
- Manifest: `docs/curriculum/ugaritic-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/ugaritic-reading-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/ugaritic-reading-v1/ugaritic-reading-v1.md`

## Current Status

- [x] Course prospectus drafted
- [x] Source manifest drafted
- [x] Script inventory drafted
- [x] Candidate anchors drafted for scoring
- [x] Lesson sequence drafted
- [x] DB ingestion strategy drafted
- [ ] Northwest Semitic specialist review assigned
- [ ] Lessons authored
- [ ] Publication path designed

## Open Questions

- See `docs/curriculum/ugaritic-reading-v1/questions.md`.

## Notes

- Course boundary is Ugaritic alphabetic-cuneiform recognition for tablets,
  museum labels, and transliteration workbenches.
- Mythological and divine-name anchors require cultural and specialist review.
- External corpora and dictionaries remain discovery or scoring only. Shipped
  examples must be app-authored.

## Validation

- `pnpm curriculum:validate docs/curriculum/ugaritic-reading-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/ugaritic-reading-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/ugaritic-reading-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/ugaritic-reading-v1 --force` generated
  `review-packet.md`.
