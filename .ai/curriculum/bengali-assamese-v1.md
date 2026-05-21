# Bengali-Assamese Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: bootstrap draft

## Goal

Track curriculum authoring for Bengali-Assamese Reading (`bn-Beng`, `Beng`).

## Source Files

- Bootstrap workspace: `docs/curriculum/bengali-assamese-v1/`
- Manifest: `docs/curriculum/bengali-assamese-v1/manifest.json`
- DB strategy: `docs/curriculum/bengali-assamese-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/bengali-assamese-v1/bengali-assamese-v1.md`

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

- See `docs/curriculum/bengali-assamese-v1/questions.md`.

## Notes

- Course boundary: Bengali-first reading in the Bengali script with Assamese
  notes for shared-script awareness and high-visibility Assamese-specific forms.
- Runtime examples should be app-authored and Bengali-first unless a future
  reviewer approves a separate Assamese lesson path.

## Validation

- `pnpm curriculum:validate docs/curriculum/bengali-assamese-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/bengali-assamese-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/bengali-assamese-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/bengali-assamese-v1 --force`
  generated `review-packet.md`.
