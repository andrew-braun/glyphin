# Syriac Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: bootstrap draft

## Goal

Track curriculum authoring for Syriac Reading (`syr-Syrc`, `Syrc`).

## Source Files

- Bootstrap workspace: `docs/curriculum/syriac-reading-v1/`
- Manifest: `docs/curriculum/syriac-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/syriac-reading-v1/db-ingestion-strategy.md`
- Durable course notes:
  `docs/curriculum/syriac-reading-v1/syriac-reading-v1.md`

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

- See `docs/curriculum/syriac-reading-v1/questions.md`.

## Notes

- Course boundary: practical Syriac-script decoding for short liturgical,
  cultural, label, and classroom-style words rather than a full dialect course.
- Shipped examples must be app-authored and reviewer-approved. Wiktionary,
  OpenStreetMap, and corpus sources stay discovery or scoring only until license
  obligations are reviewed.
- Syriac adds repeatable app gaps for RTL layout, bidirectional isolation,
  contextual shaping, optional vowel points, dot distinctions, and font fallback.

## Validation

- `pnpm curriculum:validate docs/curriculum/syriac-reading-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/syriac-reading-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/syriac-reading-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/syriac-reading-v1 --force` generated
  `review-packet.md`.
