# Lao Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: Wave C bootstrap draft

## Goal

Track curriculum authoring for Lao Reading (`lo-Laoo`, `Laoo`).

## Source Files

- Bootstrap workspace: `docs/curriculum/lao-reading-v1/`
- Manifest: `docs/curriculum/lao-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/lao-reading-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/lao-reading-v1/lao-reading-v1.md`

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

- See `docs/curriculum/lao-reading-v1/questions.md`.

## Notes

- Course boundary: modern Lao reading for menus, markets, shops, transit,
  lodging, public facilities, and everyday labels.
- Shipped examples should be app-authored until Lao lexicon, OSM, corpus, and
  tokenizer license obligations are reviewed.
- Lao surfaced repeatable app gaps for phrase-level spacing, dictionary
  segmentation, preposed vowels, tone marks, consonant classes, and font QA.

## Validation

- `pnpm curriculum:validate docs/curriculum/lao-reading-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/lao-reading-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/lao-reading-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/lao-reading-v1 --force` generated
  `review-packet.md`.
