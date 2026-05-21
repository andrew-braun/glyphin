# Balinese Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: bootstrap draft

## Goal

Track curriculum authoring for Balinese Reading (`ban-Bali`, `Bali`).

## Source Files

- Bootstrap workspace: `docs/curriculum/balinese-reading-v1/`
- Manifest: `docs/curriculum/balinese-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/balinese-reading-v1/db-ingestion-strategy.md`
- Durable course notes:
  `docs/curriculum/balinese-reading-v1/balinese-reading-v1.md`

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

- See `docs/curriculum/balinese-reading-v1/questions.md`.

## Notes

- Course boundary: Balinese-script decoding for common food, water, place,
  cultural, and primer words, not full literary or ritual literacy.
- Shipped examples must be app-authored and reviewer-approved. Dictionaries,
  learning references, OSM, and corpus-derived material stay discovery or
  scoring only until licensing is approved.
- Balinese adds repeatable app gaps for abugida vowel signs, final signs,
  adeg-adeg behavior, font shaping, limited digital corpora, and specialist
  review.

## Validation

- `pnpm curriculum:validate docs/curriculum/balinese-reading-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/balinese-reading-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/balinese-reading-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/balinese-reading-v1 --force`
  generated `review-packet.md`.
