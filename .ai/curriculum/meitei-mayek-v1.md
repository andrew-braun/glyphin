# Meitei Mayek Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: bootstrap draft

## Goal

Track curriculum authoring for Meitei Mayek Reading (`mni-Mtei`, `Mtei`).

## Source Files

- Bootstrap workspace: `docs/curriculum/meitei-mayek-v1/`
- Manifest: `docs/curriculum/meitei-mayek-v1/manifest.json`
- DB strategy: `docs/curriculum/meitei-mayek-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/meitei-mayek-v1/meitei-mayek-v1.md`

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

- See `docs/curriculum/meitei-mayek-v1/questions.md`.

## Notes

- Course boundary: Meitei Mayek decoding for Manipuri beginner text, labels, and
  practical words, with final consonant letters and vowel signs modeled
  explicitly.
- Shipped examples must be app-authored and reviewer-approved. Dictionaries,
  educational references, OSM, and corpus-derived material stay discovery or
  scoring only until licensing is approved.
- Meitei Mayek adds repeatable app gaps for final consonant letters, vowel signs,
  orthographic conventions, limited corpora, font coverage, and specialist
  review.

## Validation

- `pnpm curriculum:validate docs/curriculum/meitei-mayek-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/meitei-mayek-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/meitei-mayek-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/meitei-mayek-v1 --force` generated
  `review-packet.md`.
