# Lesson Step Rules

## Purpose

- Lesson components implement the step-by-step teaching experience for a single lesson.

## Pedagogical Constraints

- Preserve the canonical phase order: Learning runs intro, breakdown, letters, rules, guided same-letters reads, handoff; Practice runs card stack, recap, scored checkpoint, result.
- Each step should have one clear learning objective.
- Keep explanations concise, concrete, and cumulative.
- Let learners attempt a transfer read before revealing pronunciation, meaning, or segmentation.
- Prefer reinforcing previously introduced patterns over introducing surprise complexity.

## Data Ownership

- Step components render data that comes from the lesson model.
- Do not hardcode duplicate lesson facts in multiple step components when they belong in `src/lib/data`.
- Support-word transfer sections should render lesson vocabulary, not route-local or component-local word lists.
- If a step needs new structured content, extend the data model deliberately rather than sprinkling string literals through the UI.

## Interaction Standards

- Drills must feel deterministic and fair.
- Completion logic belongs in the lesson flow owner, not in arbitrary leaf components.
- Keep the pace tight and the cognitive load low on mobile as well as desktop.

## Copy Standards

- Prefer show-dont-tell: let card faces, reveal buttons, counters, metrics, and CTAs communicate the interaction instead of explanatory paragraphs.
- Use zero visible header copy on flash-card steps when the pattern is already clear from the UI.
- Read-before-reveal list cards may use one short prompt plus a skeleton preview that mirrors the revealed answer layout.
- Do not repeat what the progress tracker, counter, metric, or button label already says.
- Keep teaching content (rules, letter mnemonics, syllable breakdown, curriculum context notes); trim only meta-instructions about how to use the UI.
- Keep `aria-label` and `aria-live` text descriptive for screen readers even when visible copy is minimal.
- Gate and locked-lesson screens may stay more explicit because the learner needs orientation.
