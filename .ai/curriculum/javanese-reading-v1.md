# Javanese Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: bootstrap draft

## Goal

Track curriculum authoring for Javanese Reading (`jv-Java`, `Java`).

## Source Files

- Bootstrap workspace: `docs/curriculum/javanese-reading-v1/`
- Manifest: `docs/curriculum/javanese-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/javanese-reading-v1/db-ingestion-strategy.md`
- Durable course notes:
  `docs/curriculum/javanese-reading-v1/javanese-reading-v1.md`

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

- See `docs/curriculum/javanese-reading-v1/questions.md`.

## Notes

- Course boundary: Aksara Jawa decoding for common words and signs, with
  inherent-vowel, sandhangan, final marks, and pasangan behavior flagged as app
  expansion work.
- Shipped examples must be app-authored and reviewer-approved. Dictionaries,
  online references, and corpora remain discovery or scoring only until license
  obligations are reviewed.
- Javanese adds repeatable app gaps for abugida vowel signs, stacked/pasangan
  forms, font shaping, limited digital corpora, and specialist review.

## Validation

- `pnpm curriculum:validate docs/curriculum/javanese-reading-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/javanese-reading-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/javanese-reading-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/javanese-reading-v1 --force`
  generated `review-packet.md`.
