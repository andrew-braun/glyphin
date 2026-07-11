# Task: Thai Practice Word Regression Audit

- Start date: 2026-07-05
- Owner: Codex
- Status: complete

## Goal

Find where Thai lesson 1 lost previously available practice words, restore the
intended authored set, and audit the rest of the curriculum for the same kind
of regression.

## Scope

- In scope:
  - Trace lesson 1 practice vocabulary through current source, task history,
    and git history.
  - Restore missing lesson 1 practice words in the canonical Thai curriculum
    source if they were dropped unintentionally.
  - Audit other Thai lessons for unexpectedly small or regressed practice
    vocabularies.
  - Refresh any generated publication artifact that should stay aligned with
    the runtime lesson source.
- Out of scope:
  - Rewriting the broader Thai curriculum beyond regression repair.
  - Changing lesson-flow UI unless the content audit proves a runtime filter is
    hiding valid authored words.

## Findings

- `src/lib/data/thai.ts` is the source of truth for authored runtime lesson
  vocabulary, with `practiceVocabularyByLessonId` near the bottom of the file.
- Current lesson 1 only contains four authored practice entries total:
  `มา`, `กา`, `กาก`, and one nonsense item `มาม`.
- The earlier June vocabulary-expansion task explicitly targeted at least ten
  core practice targets per standard lesson, so the current lesson 1 set is
  inconsistent with that earlier contract.
- Git history shows the last full lesson 1 authored set lived in commit
  `9c37ac5` and was reduced in the later content pass that landed in
  `341dd5c`, where lesson 1 dropped from 10 practice entries to 4.
- A current lesson-count audit shows several lessons remain under 10 practice
  entries, but the available tracker notes indicate those are mixed cases:
  some are documented small-pool exceptions or late optional-recognition
  lessons, while lesson 1 was the clearest direct authored regression.

## Progress

- Read repo-wide and curriculum-data instructions.
- Located the current lesson 1 practice-vocabulary source.
- Began comparing authored history and current lesson counts.
- Restored lesson 1 to the prior 10-entry authored set in `src/lib/data/thai.ts`.
- Regenerated `supabase/seed.sql` from the updated Thai source.
- Synced the local `.generated/` published lesson artifact for lesson 1 so the
  app stops serving the stale 4-word cache.
- Verified the generated artifact now reports 10 lesson 1 practice entries and
  `pnpm`-equivalent Svelte checks pass cleanly (`svelte-check found 0 errors
and 0 warnings`).
