# Sinhala Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: Wave C bootstrap draft

## Goal

Track curriculum authoring for Sinhala Reading (`si-Sinh`, `Sinh`).

## Source Files

- Bootstrap workspace: `docs/curriculum/sinhala-reading-v1/`
- Manifest: `docs/curriculum/sinhala-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/sinhala-reading-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/sinhala-reading-v1/sinhala-reading-v1.md`

## Current Status

- [x] Course prospectus drafted
- [x] Source manifest drafted
- [x] Script inventory drafted
- [x] Candidate anchors drafted for scoring
- [x] Lesson sequence drafted
- [x] Review packet generated
- [ ] DB ingestion strategy reviewed
- [ ] Lessons authored
- [ ] Publication path designed

## Open Questions

- See `docs/curriculum/sinhala-reading-v1/questions.md`.

## Notes

- Course boundary: modern Sinhala reading for tea and food, shops, transit,
  prices, schools, public facilities, lodging, and everyday labels.
- Shipped examples should be app-authored until Sinhala lexicon, OSM, corpus, and
  segmentation-source obligations are reviewed.
- Sinhala surfaced repeatable app gaps for akshara segmentation, vowel signs,
  al-lakuna, conjunct or ligature behavior, and script font rendering.

## Validation

- `pnpm curriculum:validate docs/curriculum/sinhala-reading-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/sinhala-reading-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/sinhala-reading-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/sinhala-reading-v1 --force` generated
  `review-packet.md`.
