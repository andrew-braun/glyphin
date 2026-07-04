# Thai Reading Curriculum

- Start date: 2026-05-21
- Owner: GitHub Copilot
- Status: implementation-ready after anchor scoring

## Goal

Track curriculum authoring for Thai Reading (`th-Thai`, `Thai`). This is a
backfill packet for the existing runtime Thai course.

## Source Files

- Bootstrap workspace: `docs/curriculum/thai-reading-v1/`
- Manifest: `docs/curriculum/thai-reading-v1/manifest.json`
- DB strategy: `docs/curriculum/thai-reading-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/thai-reading-v1/thai-reading-v1.md`

## Current Status

- [x] Course prospectus drafted
- [x] Source manifest drafted
- [x] Script inventory drafted
- [x] Candidate anchors drafted
- [x] Lesson sequence drafted from runtime data
- [x] Source manifest validated
- [x] Candidate anchors scored
- [x] Review packet generated
- [x] Full-alphabet grapheme inventory scored frequency-first (2026-06-27 pass)
- [x] Frequency-ordered full-alphabet lesson sequence drafted
- [x] Stage 6 lessons 14-21 authored, seeded, and smoke-verified
- [x] Full-curriculum completion plan finalized
- [ ] First-pass expansion scores reviewed by a Thai speaker / corpus
- [ ] Anchor candidates scored for Stages 7-14
- [ ] DB ingestion strategy reviewed
- [ ] Lessons authored beyond Stage 6
- [ ] Publication path designed
- [ ] New lessons expanded to 1 anchor plus a target of 20 core practice reads
      per lesson, with 10 as the hard minimum
- [x] Lesson 1 spoiler audit completed so practice words are not revealed before
      read-before-reveal practice

## Open Questions

- See `docs/curriculum/thai-reading-v1/questions.md`.
- See `.ai/2026-06-13-practice-vocabulary-expansion.md` for the current
  practice-vocabulary expansion plan.
- See `.ai/archive/2026-06-27-thai-full-alphabet-research.md` for the
  full-alphabet research pass and proposed Stage 7+ sequence.
- See `.ai/2026-06-28-thai-curriculum-completion.md` for the active completion
  tracker and locked decisions.

## Notes

- Align first with `src/lib/data/thai.ts`, then with the broader rationale in
  `docs/curriculum/thai.md`.
- Preserve the runtime order: มาก, ดี, กิน, ตลาด, บิน, แม่, ร้าน, ชุด, สิบ,
  ข้าว, หมู, อาหาร, ผัด.
- The old two-support-word pattern is now considered underpowered. Future Thai
  authoring should use one anchor and target 20 core practice reads, with 10 as
  the hard minimum. Later lessons may include an optional extension set.
  Nonsense words are allowed when clearly tagged as meaning-free decoding
  practice.
- Runtime implementation now supports core versus extension practice, phrase and
  nonsense tagging, and spoiler-safe read-before-reveal sequencing. Lesson 1 has
  been expanded to ten core practice targets; Lessons 2-13 still need their
  larger practice pass.
