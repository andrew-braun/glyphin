# Task: Known Words Cascade Fix

- Start date: 2026-07-05
- Status: done

## Goal

Ensure the Words page only shows vocabulary from lessons whose Practice phase
has passed, instead of eventually unlocking the full Thai curriculum.

## Root Cause

`collectKnownWords` treated any persisted `knownWords` entry as proof that an
entire lesson should unlock. Because many Thai practice words repeat across
lessons, completing one lesson could pull in another lesson that shared a word,
which then persisted more words and unlocked more lessons on the next save/load
cycle. Within a few persistence cycles this grew to all 262+ words even when only
a handful of lessons were completed.

## Fix

Derive `knownWords` solely from lessons with `practicePassed === true`. Ignore
legacy persisted `knownWords` arrays when rebuilding progress.

## Validation

- `pnpm check`
