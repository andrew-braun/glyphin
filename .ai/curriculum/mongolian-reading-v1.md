# Mongolian Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: bootstrap draft

## Goal

Track curriculum authoring for Mongolian Reading (`mn-Mong`, `Mong`).

## Source Files

- Bootstrap workspace: `docs/curriculum/mongolian-reading-v1/`
- Manifest: `docs/curriculum/mongolian-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/mongolian-reading-v1/db-ingestion-strategy.md`
- Durable course notes:
  `docs/curriculum/mongolian-reading-v1/mongolian-reading-v1.md`

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

- See `docs/curriculum/mongolian-reading-v1/questions.md`.

## Notes

- Course boundary: traditional Mongolian-script decoding for practical beginner
  words, with vertical layout and contextual shaping treated as first-class
  product requirements.
- Shipped examples must be app-authored and reviewer-approved. Unicode, CLDR,
  dictionaries, and OSM-style sources are metadata, discovery, or scoring inputs
  only until licensing is approved.
- Mongolian adds repeatable app gaps for top-to-bottom layout, column flow,
  positional glyph forms, variation selectors, font shaping, and limited corpus
  availability for the traditional script.

## Validation

- `pnpm curriculum:validate docs/curriculum/mongolian-reading-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/mongolian-reading-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/mongolian-reading-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/mongolian-reading-v1 --force`
  generated `review-packet.md`.
