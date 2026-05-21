# Runic Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: bootstrap draft

## Goal

Track curriculum authoring for Runic Reading (`und-Runr`, `Runr`).

## Source Files

- Bootstrap workspace: `docs/curriculum/runic-reading-v1/`
- Manifest: `docs/curriculum/runic-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/runic-reading-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/runic-reading-v1/runic-reading-v1.md`

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

- See `docs/curriculum/runic-reading-v1/questions.md`.

## Notes

- Course boundary: introductory Runic script reading with an Elder Futhark first
  pass and explicit notes that Runic covers multiple periods and languages.
- External inscription databases and rune-name references are discovery or
  scoring only. Shipped examples should be app-authored and specialist reviewed.
- App gaps include transliteration fields, futhark variant metadata, uncertain
  sound values, inscription direction notes, word-divider handling, and
  nonmodern pronunciation limits.

## Validation

- `pnpm curriculum:validate docs/curriculum/runic-reading-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/runic-reading-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/runic-reading-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/runic-reading-v1 --force` generated
  `review-packet.md`.
