# Lesson show-dont-tell copy

## Scope

Trim lesson-step UI copy so interaction patterns (flash cards, reveal buttons, counters, stats, CTAs) carry meaning instead of explanatory paragraphs.

## Decisions

- Flash-card steps (practice deck, guided same-letters reads): zero visible header copy; card faces + buttons + counters only.
- Learning complete handoff: eyebrow + anchor word + stats + CTA; remove hero prose and practice callout.
- Practice recap: no intro block; counter + per-card Reveal hints + button.
- Practice complete: short headline only; score shown via MetricDisplay.
- Teaching content (rules, letters, syllables, contextNote) unchanged.
- Gate screens stay explicit.

## Progress

- [x] StepLearningComplete trimmed
- [x] StepPracticeDeck header removed
- [x] StepSameLettersNewWords header removed + CTA fix
- [x] SameLettersWordList hiddenLabel removed
- [x] StepPracticeRecap intro removed
- [x] StepPracticeComplete copy trimmed
- [x] Light pass: StepIntro, StepBreakdown, StepPracticeCheckpoint
- [x] AGENTS.md + lesson-flow.instructions.md updated
- [x] pnpm check

## Follow-up

- Lesson list card status strings left as-is unless still heavy after step changes.
- Same-letters pre-reveal card redesigned with one-line prompt + answer skeleton (2026-07-05).
