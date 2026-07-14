# Learner Dashboard Design Pass

## Status

Design approved; implementation pending.

## Goal

Make the returning-learner dashboard feel compact and task-focused while
preserving clear spacing within its text hierarchy.

## Scope

- Reduce the dashboard's oversized outer spacing, especially the hero padding
  and the gaps between the hero, statistics, and course path.
- Scale the hero heading closer to the rest of the application's page-heading
  hierarchy.
- Keep intentional breathing room between the H1 and the current stage text so
  those lines never feel crowded.
- Present the resume action as a cohesive, single-line control.
- Remove the arrow from the dashboard resume action only when needed to keep
  the label focused and unbroken.
- Preserve the existing statistics and course-stage journey structure.

## Design

The hero becomes a concise resume panel. On wider screens, its learner context
sits on the left and its resume action sits on the right. The internal text
stack retains a clear hierarchy: eyebrow, H1, then a visibly separated current
stage line. Tightening the dashboard must come from reduced container padding
and section gaps, not from crowding adjacent text lines.

The resume control uses the existing primary button styling but renders its
label without the forward-arrow composition. Its text must not wrap for any of
the current labels: "Continue learning," "Continue practice," and "Review what
you know."

On narrower screens, the hero stacks vertically. The resume action sits below
the copy, uses the available width, and retains a single-line label. Statistics
remain a single-column stack at the existing breakpoint.

## Non-goals

- Changing learner progress data, resume targeting, or dashboard behavior.
- Reorganizing or combining the statistics.
- Redesigning the course-stage journey.
- Changing the shared forward-label component for other application buttons.

## Verification

- Inspect the dashboard at desktop and mobile widths.
- Confirm clear spacing between the H1 and current stage line.
- Confirm all three possible resume labels stay on one line.
- Confirm the compact layout remains readable in light and dark themes.
- Run `pnpm check` and focused style linting for the touched Svelte component.
