# Linear B Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: bootstrap draft

## Goal

Track curriculum authoring for Linear B Reading (`gmy-Linb`, `Linb`).

## Source Files

- Bootstrap workspace: `docs/curriculum/linear-b-reading-v1/`
- Manifest: `docs/curriculum/linear-b-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/linear-b-reading-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/linear-b-reading-v1/linear-b-reading-v1.md`

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

- See `docs/curriculum/linear-b-reading-v1/questions.md`.

## Notes

- Course boundary: Mycenaean Greek Linear B tablet literacy focused on selected
  syllabograms, administrative words, and cautious transliteration.
- External tablet databases, editions, and lexica are discovery or scoring only.
  Shipped examples should be app-authored from reviewed syllable and word
  decisions.
- App gaps include syllabogram segmentation, ideogram support, transliteration
  fields, tablet-domain metadata, damaged-text notation, and nonmodern
  pronunciation limits.

## Validation

- `pnpm curriculum:validate docs/curriculum/linear-b-reading-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/linear-b-reading-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/linear-b-reading-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/linear-b-reading-v1 --force`
  generated `review-packet.md`.
