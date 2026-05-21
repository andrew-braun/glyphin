# Old Persian Cuneiform Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: Wave D bootstrap draft

## Goal

Track curriculum authoring for Old Persian Cuneiform Reading (`peo-Xpeo`, `Xpeo`).

## Source Files

- Bootstrap workspace: `docs/curriculum/old-persian-cuneiform-v1/`
- Manifest: `docs/curriculum/old-persian-cuneiform-v1/manifest.json`
- DB strategy: `docs/curriculum/old-persian-cuneiform-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/old-persian-cuneiform-v1/old-persian-cuneiform-v1.md`

## Current Status

- [x] Course prospectus drafted
- [x] Source manifest drafted
- [x] Script inventory drafted
- [x] Candidate anchors drafted for scoring
- [x] Lesson sequence drafted
- [x] DB ingestion strategy drafted
- [ ] Old Iranian specialist review assigned
- [ ] Lessons authored
- [ ] Publication path designed

## Open Questions

- See `docs/curriculum/old-persian-cuneiform-v1/questions.md`.

## Notes

- Course boundary is royal-inscription reading with sign and word-divider
  recognition. It does not attempt broad Old Iranian grammar.
- External editions and inscription corpora are scoring or discovery only until
  license and attribution obligations are approved.
- Runtime gaps include SMP font coverage, word-divider handling, transliteration
  fields, royal-title context, and museum-domain provenance.

## Validation

- `pnpm curriculum:validate docs/curriculum/old-persian-cuneiform-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/old-persian-cuneiform-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/old-persian-cuneiform-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/old-persian-cuneiform-v1 --force`
  generated `review-packet.md`.
