# Tifinagh Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: bootstrap draft

## Goal

Track curriculum authoring for Tifinagh Reading (`zgh-Tfng`, `Tfng`).

## Source Files

- Bootstrap workspace: `docs/curriculum/tifinagh-reading-v1/`
- Manifest: `docs/curriculum/tifinagh-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/tifinagh-reading-v1/db-ingestion-strategy.md`
- Durable course notes:
  `docs/curriculum/tifinagh-reading-v1/tifinagh-reading-v1.md`

## Current Status

- [x] Course prospectus drafted
- [x] Source manifest drafted
- [x] Script inventory drafted
- [x] Candidate anchors drafted
- [x] Lesson sequence drafted
- [x] Source manifest validated
- [x] Candidate anchors scored
- [x] Review packet generated
- [ ] DB ingestion strategy reviewed
- [ ] Lessons authored
- [ ] Publication path designed

## Open Questions

- See `docs/curriculum/tifinagh-reading-v1/questions.md`.

## Notes

- Course boundary: Standard Moroccan Amazigh in Neo-Tifinagh, focused on short
  high-utility labels, greetings, identity words, and public text.
- Shipped examples must be app-authored and reviewer-approved. Unicode, CLDR,
  dictionaries, and official or educational references remain metadata,
  discovery, or scoring only until licensing is approved.
- Tifinagh is visually distinctive and LTR, but still needs specialist review
  for regional vocabulary, orthographic conventions, and font coverage.

## Validation

- `pnpm curriculum:validate docs/curriculum/tifinagh-reading-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/tifinagh-reading-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/tifinagh-reading-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/tifinagh-reading-v1 --force`
  generated `review-packet.md`.
