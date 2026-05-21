# Morse Signaling Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: bootstrap draft

## Goal

Track curriculum authoring for Morse Signaling Reading (`und-Zsym`, `Zsym`).

## Source Files

- Bootstrap workspace: `docs/curriculum/morse-signaling-v1/`
- Manifest: `docs/curriculum/morse-signaling-v1/manifest.json`
- DB strategy: `docs/curriculum/morse-signaling-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/morse-signaling-v1/morse-signaling-v1.md`

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

- See `docs/curriculum/morse-signaling-v1/questions.md`.

## Notes

- Course boundary: International Morse recognition through symbolic notation plus future timed audio and haptic playback.
- External standards and radio references are discovery or scoring only. Shipped practice strings should be app-authored and reviewed.
- Major app gaps are time-based interaction, audio/haptic rendering, speed/Farnsworth metadata, prosign modeling, and notation-course storage separate from language-script courses.

## Validation

- `pnpm curriculum:validate docs/curriculum/morse-signaling-v1/manifest.json`
  passed with 0 warnings.
- `pnpm curriculum:score docs/curriculum/morse-signaling-v1/grapheme-candidates.csv`
  generated `grapheme-candidates.scored.csv`.
- `pnpm curriculum:score docs/curriculum/morse-signaling-v1/anchor-candidates.csv`
  generated `anchor-candidates.scored.csv`.
- `pnpm curriculum:review docs/curriculum/morse-signaling-v1 --force` generated
  `review-packet.md`.
