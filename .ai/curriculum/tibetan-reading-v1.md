# Tibetan Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: Wave C bootstrap draft

## Goal

Track curriculum authoring for Tibetan Reading (`bo-Tibt`, `Tibt`).

## Source Files

- Bootstrap workspace: `docs/curriculum/tibetan-reading-v1/`
- Manifest: `docs/curriculum/tibetan-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/tibetan-reading-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/tibetan-reading-v1/tibetan-reading-v1.md`

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

- See `docs/curriculum/tibetan-reading-v1/questions.md`.

## Notes

- Course boundary: modern printed Tibetan Uchen for practical signs, tea-house
  menus, cultural sites, public facilities, and place names.
- Shipped examples should be app-authored until Tibetan lexicon, OSM, and corpus
  license obligations are reviewed.
- Tibetan surfaced repeatable app gaps for tsheg-syllable segmentation, stacked
  consonants, root-letter metadata, font shaping, and pronunciation notes where
  spelling is historical.

## Validation

- `pnpm curriculum:validate docs/curriculum/tibetan-reading-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/tibetan-reading-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/tibetan-reading-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/tibetan-reading-v1 --force` generated
  `review-packet.md`.
