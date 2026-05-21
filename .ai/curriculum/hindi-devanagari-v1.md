# Hindi Devanagari Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: bootstrap draft

## Goal

Track curriculum authoring for Hindi Devanagari Reading (`hi-Deva`, `Deva`).

## Source Files

- Bootstrap workspace: `docs/curriculum/hindi-devanagari-v1/`
- Manifest: `docs/curriculum/hindi-devanagari-v1/manifest.json`
- DB strategy: `docs/curriculum/hindi-devanagari-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/hindi-devanagari-v1/hindi-devanagari-v1.md`

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

- See `docs/curriculum/hindi-devanagari-v1/questions.md`.

## Notes

- Course boundary: traveler-first Hindi reading in modern Devanagari with an
  abugida model, inherent vowel, matras, virama, conjuncts, anusvara, and nukta
  introduced as explicit reading rules.
- Third-party corpora and lexicons are discovery or scoring inputs only. Runtime
  examples should be app-authored and reviewed.

## Validation

- `pnpm curriculum:validate docs/curriculum/hindi-devanagari-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/hindi-devanagari-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/hindi-devanagari-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/hindi-devanagari-v1 --force`
  generated `review-packet.md`.
