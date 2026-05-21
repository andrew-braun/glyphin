# English Braille Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: bootstrap draft

## Goal

Track curriculum authoring for English Braille Reading (`en-Brai`, `Brai`).

## Source Files

- Bootstrap workspace: `docs/curriculum/english-braille-v1/`
- Manifest: `docs/curriculum/english-braille-v1/manifest.json`
- DB strategy: `docs/curriculum/english-braille-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/english-braille-v1/english-braille-v1.md`

## Current Status

- [x] Course prospectus drafted
- [x] Source manifest drafted
- [x] Script inventory drafted
- [x] Candidate anchors drafted
- [x] Lesson sequence drafted
- [x] DB ingestion strategy drafted
- [x] Candidate files scored in current validation pass
- [x] Review packet generated in current validation pass
- [ ] Lessons authored
- [ ] Publication path designed

## Open Questions

- See `docs/curriculum/english-braille-v1/questions.md`.

## Notes

- Course boundary: uncontracted UEB-style English braille reading through Unicode braille cells and future tactile/haptic affordances.
- External standards and translation tools are discovery or scoring only. Shipped examples should be app-authored and checked by braille readers.
- Major app gaps are tactile interaction, dot-number metadata, braille-cell sizing, accessibility review, and notation-course modeling distinct from ordinary visual scripts.

## Validation

- `pnpm curriculum:validate docs/curriculum/english-braille-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/english-braille-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/english-braille-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/english-braille-v1 --force` generated
  `review-packet.md`.
