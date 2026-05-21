# Brahmi Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: Wave D bootstrap draft

## Goal

Track curriculum authoring for Brahmi Reading (`sa-Brah`, `Brah`).

## Source Files

- Bootstrap workspace: `docs/curriculum/brahmi-reading-v1/`
- Manifest: `docs/curriculum/brahmi-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/brahmi-reading-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/brahmi-reading-v1/brahmi-reading-v1.md`

## Current Status

- [x] Course prospectus drafted
- [x] Source manifest drafted
- [x] Script inventory drafted
- [x] Candidate anchors drafted for scoring
- [x] Lesson sequence drafted
- [x] DB ingestion strategy drafted
- [ ] Brahmi or South Asian epigraphy specialist review assigned
- [ ] Lessons authored
- [ ] Publication path designed

## Open Questions

- See `docs/curriculum/brahmi-reading-v1/questions.md`.

## Notes

- Course boundary is inscription-focused Brahmi recognition with Sanskrit-tagged
  metadata but explicit Prakrit and epigraphic caveats.
- External inscriptions and databases remain discovery or scoring only. Shipped
  examples must be app-authored and specialist-reviewed.
- Runtime gaps include abugida segmentation, vowel signs, virama behavior,
  inscription provenance, and Brahmi font support.

## Validation

- `pnpm curriculum:validate docs/curriculum/brahmi-reading-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/brahmi-reading-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/brahmi-reading-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/brahmi-reading-v1 --force` generated
  `review-packet.md`.
