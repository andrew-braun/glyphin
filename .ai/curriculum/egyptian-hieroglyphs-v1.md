# Egyptian Hieroglyphs Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: bootstrap draft

## Goal

Track curriculum authoring for Egyptian Hieroglyphs Reading (`egy-Egyp`, `Egyp`).

## Source Files

- Bootstrap workspace: `docs/curriculum/egyptian-hieroglyphs-v1/`
- Manifest: `docs/curriculum/egyptian-hieroglyphs-v1/manifest.json`
- DB strategy: `docs/curriculum/egyptian-hieroglyphs-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/egyptian-hieroglyphs-v1/egyptian-hieroglyphs-v1.md`

## Current Status

- [x] Course prospectus drafted
- [x] Source manifest drafted
- [x] Script inventory drafted
- [x] Candidate anchors drafted
- [x] Lesson sequence drafted
- [x] DB ingestion strategy drafted
- [x] Candidate files scored in current validation pass
- [x] Review packet generated in current validation pass
- [ ] Lessons authored
- [ ] Publication path designed

## Open Questions

- See `docs/curriculum/egyptian-hieroglyphs-v1/questions.md`.

## Notes

- Course boundary: museum and inscription reading for selected Middle Egyptian
  hieroglyphic signs with Manuel de Codage style transliteration support.
- External corpora and sign lists are discovery or scoring only. Shipped
  examples should be app-authored from reviewed sign and word decisions.
- App gaps include mixed direction and orientation metadata, Egyptological
  transliteration symbols, sign-list identifiers, determinative modeling,
  quadrant layout support, and specialist review for pronunciation limits.

## Validation

- `pnpm curriculum:validate docs/curriculum/egyptian-hieroglyphs-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/egyptian-hieroglyphs-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/egyptian-hieroglyphs-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/egyptian-hieroglyphs-v1 --force`
  generated `review-packet.md`.
