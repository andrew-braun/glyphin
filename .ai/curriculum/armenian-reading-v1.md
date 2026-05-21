# Armenian Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: bootstrap draft

## Goal

Track curriculum authoring for Armenian Reading (`hy-Armn`, `Armn`).

## Source Files

- Bootstrap workspace: `docs/curriculum/armenian-reading-v1/`
- Manifest: `docs/curriculum/armenian-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/armenian-reading-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/armenian-reading-v1/armenian-reading-v1.md`

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

- See `docs/curriculum/armenian-reading-v1/questions.md`.

## Notes

- Course boundary: modern Eastern Armenian reading for menus, transit, public signs, labels, and cultural sites.
- External sources are discovery or scoring inputs only. Learner-visible examples should be app-authored until license review is complete.
- Main app gaps are language-agnostic text fields, case-pair metadata, Armenian punctuation support, and course-aware progress state.

## Validation

- `pnpm curriculum:validate docs/curriculum/armenian-reading-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/armenian-reading-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/armenian-reading-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/armenian-reading-v1 --force` generated
  `review-packet.md`.
