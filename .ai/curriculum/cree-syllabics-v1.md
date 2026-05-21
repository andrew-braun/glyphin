# Cree Syllabics Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: Wave D bootstrap draft

## Goal

Track curriculum authoring for Cree Syllabics Reading (`cr-Cans`, `Cans`).

## Source Files

- Bootstrap workspace: `docs/curriculum/cree-syllabics-v1/`
- Manifest: `docs/curriculum/cree-syllabics-v1/manifest.json`
- DB strategy: `docs/curriculum/cree-syllabics-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/cree-syllabics-v1/cree-syllabics-v1.md`

## Current Status

- [x] Course prospectus drafted
- [x] Source manifest drafted
- [x] Script inventory drafted
- [x] Candidate anchors drafted for manual scoring
- [x] Lesson sequence drafted
- [x] Review packet generated
- [ ] DB ingestion strategy reviewed
- [ ] Lessons authored
- [ ] Publication path designed

## Open Questions

- See `docs/curriculum/cree-syllabics-v1/questions.md`.

## Notes

- Course boundary: a Plains Cree-oriented syllabics reading path inside the wider
  Canadian Aboriginal Syllabics script family.
- External dictionaries and teaching resources are discovery or scoring only;
  shipped examples should be app-authored and reviewed by Cree language experts.
- Key gaps are dialect and orthography selection, syllabic rotation metadata,
  finals handling, font rendering, and community review.

## Validation

- `pnpm curriculum:validate docs/curriculum/cree-syllabics-v1/manifest.json` passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/cree-syllabics-v1/grapheme-candidates.csv` generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/cree-syllabics-v1/anchor-candidates.csv` generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/cree-syllabics-v1 --force` generated `review-packet.md`.
