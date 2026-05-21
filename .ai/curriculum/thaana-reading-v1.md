# Thaana Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: bootstrap draft

## Goal

Track curriculum authoring for Thaana Reading (`dv-Thaa`, `Thaa`).

## Source Files

- Bootstrap workspace: `docs/curriculum/thaana-reading-v1/`
- Manifest: `docs/curriculum/thaana-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/thaana-reading-v1/db-ingestion-strategy.md`
- Durable course notes:
  `docs/curriculum/thaana-reading-v1/thaana-reading-v1.md`

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

- See `docs/curriculum/thaana-reading-v1/questions.md`.

## Notes

- Course boundary: Dhivehi Thaana decoding for menus, water, common public words,
  and wayfinding, with RTL and vowel-sign behavior treated as implementation
  requirements.
- Shipped examples must be app-authored and reviewer-approved. Dictionaries,
  OSM, and corpus-derived material remain discovery or scoring only until license
  obligations are reviewed.
- Thaana adds repeatable app gaps for RTL layout, obligatory vowel signs, sukun,
  font shaping, mixed-direction UI, limited corpora, and specialist review.

## Validation

- `pnpm curriculum:validate docs/curriculum/thaana-reading-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/thaana-reading-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/thaana-reading-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/thaana-reading-v1 --force` generated
  `review-packet.md`.
