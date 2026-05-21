# Burmese Myanmar Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: Wave C bootstrap draft

## Goal

Track curriculum authoring for Burmese Myanmar Reading (`my-Mymr`, `Mymr`).

## Source Files

- Bootstrap workspace: `docs/curriculum/burmese-myanmar-v1/`
- Manifest: `docs/curriculum/burmese-myanmar-v1/manifest.json`
- DB strategy: `docs/curriculum/burmese-myanmar-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/burmese-myanmar-v1/burmese-myanmar-v1.md`

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

- See `docs/curriculum/burmese-myanmar-v1/questions.md`.

## Notes

- Course boundary: modern Burmese in the Myanmar script for menus, shops,
  transit, public facilities, lodging, and everyday labels.
- Shipped examples should be app-authored until Burmese lexicon, OSM, corpus, and
  segmentation-source obligations are reviewed.
- Burmese surfaced repeatable app gaps for syllable segmentation, asat, medials,
  vowel and tone signs, kinzi or stacked behavior, and Myanmar font shaping.

## Validation

- `pnpm curriculum:validate docs/curriculum/burmese-myanmar-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/burmese-myanmar-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/burmese-myanmar-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/burmese-myanmar-v1 --force` generated
  `review-packet.md`.
