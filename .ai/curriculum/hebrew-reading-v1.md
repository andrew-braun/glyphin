# Hebrew Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: bootstrap draft

## Goal

Track curriculum authoring for Hebrew Reading (`he-Hebr`, `Hebr`, RTL).

## Source Files

- Bootstrap workspace: `docs/curriculum/hebrew-reading-v1/`
- Manifest: `docs/curriculum/hebrew-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/hebrew-reading-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/hebrew-reading-v1/hebrew-reading-v1.md`

## Current Status

- [x] Course prospectus drafted
- [x] Source manifest validated
- [x] Script inventory drafted
- [x] Candidate anchors scored
- [x] Lesson sequence drafted
- [x] Review packet generated
- [ ] DB ingestion strategy reviewed
- [ ] Lessons authored
- [ ] Publication path designed

## Open Questions

- See `docs/curriculum/hebrew-reading-v1/questions.md`.

## Notes

- Course boundary: Modern Hebrew reading for practical signs, menus, transit,
  public facilities, and everyday labels.
- Shipped examples should be app-authored until Wiktionary, OpenStreetMap,
  word-frequency corpora, and official terminology source obligations are
  approved.
- Hebrew exposes shared app gaps for RTL layout, bidi isolation, final-letter
  variants, optional niqqud, matres lectionis, and course-aware progress.

## Validation

- `pnpm curriculum:validate docs/curriculum/hebrew-reading-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/hebrew-reading-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/hebrew-reading-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/hebrew-reading-v1 --force` generated
  `review-packet.md`.
