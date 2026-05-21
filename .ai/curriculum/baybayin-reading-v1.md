# Baybayin Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: bootstrap draft

## Goal

Track curriculum authoring for Baybayin Reading (`tl-Tglg`, `Tglg`).

## Source Files

- Bootstrap workspace: `docs/curriculum/baybayin-reading-v1/`
- Manifest: `docs/curriculum/baybayin-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/baybayin-reading-v1/db-ingestion-strategy.md`
- Durable course notes:
  `docs/curriculum/baybayin-reading-v1/baybayin-reading-v1.md`

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

- See `docs/curriculum/baybayin-reading-v1/questions.md`.

## Notes

- Course boundary: Baybayin reading for Tagalog-script heritage and cultural
  literacy, with historic versus modern virama practice explicitly unresolved.
- Shipped examples must be app-authored and reviewer-approved. Public references,
  Wiktionary, and community examples stay discovery or scoring only until
  licensing is approved.
- Baybayin adds repeatable app gaps for abugida vowel signs, final consonant
  policy, virama or pamudpod display, modern revival conventions, and specialist
  review.

## Validation

- `pnpm curriculum:validate docs/curriculum/baybayin-reading-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/baybayin-reading-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/baybayin-reading-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/baybayin-reading-v1 --force`
  generated `review-packet.md`.
