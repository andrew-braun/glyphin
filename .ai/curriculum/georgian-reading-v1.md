# Georgian Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: bootstrap draft

## Goal

Track curriculum authoring for Georgian Reading (`ka-Geor`, `Geor`).

## Source Files

- Bootstrap workspace: `docs/curriculum/georgian-reading-v1/`
- Manifest: `docs/curriculum/georgian-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/georgian-reading-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/georgian-reading-v1/georgian-reading-v1.md`

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

- See `docs/curriculum/georgian-reading-v1/questions.md`.

## Notes

- Course boundary: modern Georgian Mkhedruli reading for menus, transit, public signs, labels, and cultural sites.
- External corpora and lexicons are discovery or scoring only. Shipped examples should be app-authored and reviewer-approved.
- App gaps include Georgian font sizing, no-case Mkhedruli metadata plus optional Mtavruli policy, ejective/aspirated contrast support, and course-aware progress state.

## Validation

- `pnpm curriculum:validate docs/curriculum/georgian-reading-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/georgian-reading-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/georgian-reading-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/georgian-reading-v1 --force` generated
  `review-packet.md`.
