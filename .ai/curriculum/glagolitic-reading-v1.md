# Glagolitic Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: Wave D bootstrap draft

## Goal

Track curriculum authoring for Glagolitic Reading (`cu-Glag`, `Glag`).

## Source Files

- Bootstrap workspace: `docs/curriculum/glagolitic-reading-v1/`
- Manifest: `docs/curriculum/glagolitic-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/glagolitic-reading-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/glagolitic-reading-v1/glagolitic-reading-v1.md`

## Current Status

- [x] Course prospectus drafted
- [x] Source manifest drafted
- [x] Script inventory drafted
- [x] Candidate anchors drafted for scoring
- [x] Lesson sequence drafted
- [x] DB ingestion strategy drafted
- [ ] Old Church Slavonic specialist review assigned
- [ ] Lessons authored
- [ ] Publication path designed

## Open Questions

- See `docs/curriculum/glagolitic-reading-v1/questions.md`.

## Notes

- Course boundary is Old Church Slavonic Glagolitic recognition in liturgical,
  manuscript, and museum contexts.
- External corpora and manuscript transcriptions remain discovery or scoring
  only. Shipped examples must be app-authored and reviewer-approved.
- Runtime gaps include historic-language metadata, manuscript/source notes,
  font coverage, and liturgical context fields.

## Validation

- `pnpm curriculum:validate docs/curriculum/glagolitic-reading-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/glagolitic-reading-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/glagolitic-reading-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/glagolitic-reading-v1 --force`
  generated `review-packet.md`.
