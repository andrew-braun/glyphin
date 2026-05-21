# Khmer Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: Wave C bootstrap draft

## Goal

Track curriculum authoring for Khmer Reading (`km-Khmr`, `Khmr`).

## Source Files

- Bootstrap workspace: `docs/curriculum/khmer-reading-v1/`
- Manifest: `docs/curriculum/khmer-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/khmer-reading-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/khmer-reading-v1/khmer-reading-v1.md`

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

- See `docs/curriculum/khmer-reading-v1/questions.md`.

## Notes

- Course boundary: modern Khmer reading for menus, markets, transit labels,
  public facilities, shop signs, and everyday packaging.
- Shipped examples should be app-authored until Khmer lexicon, OSM, corpus, and
  tokenizer license obligations are reviewed.
- Khmer surfaced repeatable app gaps for dictionary segmentation, inherent vowel
  series, dependent vowel placement, coeng/subscript clusters, and font shaping.

## Validation

- `pnpm curriculum:validate docs/curriculum/khmer-reading-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/khmer-reading-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/khmer-reading-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/khmer-reading-v1 --force` generated
  `review-packet.md`.
