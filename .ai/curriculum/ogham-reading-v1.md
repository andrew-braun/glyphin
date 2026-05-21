# Ogham Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: bootstrap draft

## Goal

Track curriculum authoring for Ogham Reading (`sga-Ogam`, `Ogam`).

## Source Files

- Bootstrap workspace: `docs/curriculum/ogham-reading-v1/`
- Manifest: `docs/curriculum/ogham-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/ogham-reading-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/ogham-reading-v1/ogham-reading-v1.md`

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

- See `docs/curriculum/ogham-reading-v1/questions.md`.

## Notes

- Course boundary: Old Irish Ogham inscription literacy focused on formulaic
  stone-text fragments and cautious transliteration.
- External inscription databases, editions, and dictionary references are
  discovery or scoring only. Shipped examples should be app-authored from
  reviewed formula chunks.
- App gaps include mixed orientation, stemline-aware rendering, start and end
  marks, transliteration fields, formula-fragment modeling, and specialist review
  for Old Irish pronunciation limits.

## Validation

- `pnpm curriculum:validate docs/curriculum/ogham-reading-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/ogham-reading-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/ogham-reading-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/ogham-reading-v1 --force` generated
  `review-packet.md`.
