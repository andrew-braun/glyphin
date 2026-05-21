# Arabic Script Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: bootstrap draft

## Goal

Track curriculum authoring for Arabic Script Reading (`ar-Arab`, `Arab`, RTL).

## Source Files

- Bootstrap workspace: `docs/curriculum/arabic-reading-v1/`
- Manifest: `docs/curriculum/arabic-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/arabic-reading-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/arabic-reading-v1/arabic-reading-v1.md`

## Current Status

- [x] Course prospectus drafted
- [x] Source manifest validated
- [x] Script inventory drafted
- [x] Candidate anchors scored
- [x] Lesson sequence drafted
- [x] Review packet generated
- [ ] DB ingestion strategy reviewed
- [ ] Lessons authored
- [ ] Publication path designed

## Open Questions

- See `docs/curriculum/arabic-reading-v1/questions.md`.

## Notes

- Course boundary: Arabic-script reading for practical Modern Standard Arabic
  and region-neutral travel signage rather than dialect production.
- Shipped examples should be app-authored until Wiktionary, OpenStreetMap,
  word-frequency corpora, and tokenizer/source licenses are approved.
- Arabic exposes shared app gaps for RTL layout, bidi isolation, joining forms,
  optional vowel marks, hamza and alif variants, and lam-alif chunks.

## Validation

- `pnpm curriculum:validate docs/curriculum/arabic-reading-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/arabic-reading-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/arabic-reading-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/arabic-reading-v1 --force` generated
  `review-packet.md`.
