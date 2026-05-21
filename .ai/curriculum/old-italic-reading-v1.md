# Old Italic Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: Wave D bootstrap draft

## Goal

Track curriculum authoring for Old Italic Reading (`ett-Ital`, `Ital`).

## Source Files

- Bootstrap workspace: `docs/curriculum/old-italic-reading-v1/`
- Manifest: `docs/curriculum/old-italic-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/old-italic-reading-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/old-italic-reading-v1/old-italic-reading-v1.md`

## Current Status

- [x] Course prospectus drafted
- [x] Source manifest drafted
- [x] Script inventory drafted
- [x] Candidate anchors drafted for scoring
- [x] Lesson sequence drafted
- [x] DB ingestion strategy drafted
- [ ] Etruscan or Italic specialist review assigned
- [ ] Lessons authored
- [ ] Publication path designed

## Open Questions

- See `docs/curriculum/old-italic-reading-v1/questions.md`.

## Notes

- Course boundary is Etruscan-leaning Old Italic inscription recognition with
  right-to-left display and transliteration support.
- External inscriptions and editions remain scoring or discovery only until
  reuse obligations are approved.
- Runtime gaps center on RTL historic-script display, personal-name domains,
  inscription provenance, and font coverage.

## Validation

- `pnpm curriculum:validate docs/curriculum/old-italic-reading-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/old-italic-reading-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/old-italic-reading-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/old-italic-reading-v1 --force`
  generated `review-packet.md`.
