# Maya Hieroglyphs Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: Wave D bootstrap draft

## Goal

Track curriculum authoring for Maya Hieroglyphs Reading (`myn-Maya`, `Maya`).

## Source Files

- Bootstrap workspace: `docs/curriculum/maya-hieroglyphs-v1/`
- Manifest: `docs/curriculum/maya-hieroglyphs-v1/manifest.json`
- DB strategy: `docs/curriculum/maya-hieroglyphs-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/maya-hieroglyphs-v1/maya-hieroglyphs-v1.md`

## Current Status

- [x] Course prospectus drafted
- [x] Source manifest drafted
- [x] Script inventory drafted
- [x] Candidate anchors drafted for scoring
- [x] Lesson sequence drafted
- [x] DB ingestion strategy drafted
- [ ] Mayanist review assigned
- [ ] Lessons authored
- [ ] Publication path designed

## Open Questions

- See `docs/curriculum/maya-hieroglyphs-v1/questions.md`.

## Notes

- Course boundary is glyph-block recognition through reviewed sign labels and
  transliteration. Full epigraphic decipherment is out of scope.
- Unicode support is incomplete for the script, so v1 must not assume plain text
  Maya glyph storage is enough for runtime display.
- Shipped examples must be app-authored from reviewed sign labels rather than
  copied from inscriptions, drawings, or catalogs.

## Validation

- `pnpm curriculum:validate docs/curriculum/maya-hieroglyphs-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/maya-hieroglyphs-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/maya-hieroglyphs-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/maya-hieroglyphs-v1 --force`
  generated `review-packet.md`.
