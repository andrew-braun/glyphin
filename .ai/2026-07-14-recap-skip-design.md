# Quick Recap Skip Design

## Goal

Make the lesson practice recap self-explanatory and optional without changing the
scored-check flow or learner progress rules.

## Approved Design

`StepPracticeRecap.svelte` will show a short prompt above its self-check cards:
learners should try each word, then tap a card to reveal its answer.

A visible secondary **Skip recap** button will remain available beneath the card
grid. It will call the existing `onComplete` callback and enter the scored check
immediately, with no confirmation step. When every card has been revealed, the
existing primary **Start the scored check** button will remain available as the
recommended next action.

## Scope And Boundaries

- Change only the recap step's rendering and scoped styles.
- Reuse the existing completion callback; do not add a new route, state store,
  curriculum field, or progression rule.
- Keep the current self-check card interaction and all-revealed calculation.
- Use a test-first change appropriate to the current Node test setup, covering
  the completion behavior where it can be exercised without a component test
  harness.

## Acceptance Criteria

- A learner can see how to use the recap before interacting with a card.
- A learner can continue to the scored check before revealing every card.
- Skipping continues directly to the scored check.
- Revealing every card still presents the existing primary scored-check action.
- Type, accessibility, style, and relevant automated checks pass.
