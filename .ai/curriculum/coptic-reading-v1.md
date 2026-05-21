# Coptic Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: bootstrap draft

## Goal

Track curriculum authoring for Coptic Reading (`cop-Copt`, `Copt`).

## Source Files

- Bootstrap workspace: `docs/curriculum/coptic-reading-v1/`
- Manifest: `docs/curriculum/coptic-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/coptic-reading-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/coptic-reading-v1/coptic-reading-v1.md`

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

- See `docs/curriculum/coptic-reading-v1/questions.md`.

## Notes

- Course boundary: beginner Sahidic-leaning Coptic script reading for liturgical, manuscript, museum, and dictionary contexts.
- External corpora and dictionaries are discovery or scoring only. Shipped examples should be app-authored and reviewed by a Coptic specialist.
- App gaps include historic-language course modeling, dialect labels, combining supralinear mark handling, Coptic font support, and non-travel target domains.

## Validation

- `pnpm curriculum:validate docs/curriculum/coptic-reading-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/coptic-reading-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/coptic-reading-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/coptic-reading-v1 --force` generated
  `review-packet.md`.
