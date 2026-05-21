# Morse Signaling Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `morse-signaling-v1` bootstrap.

## Architecture

- Does the course model need a `time_based_notation` family separate from visual
  scripts and tactile scripts?
- How should dit, dah, intra-character gap, character gap, and word gap be stored
  so symbolic notation and timed playback stay synchronized?
- Should prosigns be represented as words, grapheme sequences, command symbols,
  or a separate signal-unit type?

## Product And Pedagogy

- Can symbolic dot-dash recognition ship before audio or haptic playback exists,
  or would that misrepresent the learning target?
- What speed, tone, and Farnsworth defaults are appropriate for a beginner
  reading-first course?
- How should SOS and HELP be contextualized so the app does not imply emergency
  training or certification?

## Sources, Licensing, And Attribution

- Confirm ITU terms before using standard wording or tables beyond discovery.
- Confirm ARRL or other radio-learning reference terms before adapting procedure
  examples.
- Keep external standards and reference material discovery or scoring only until
  legal review is complete.
- Prefer app-authored practice strings checked by operators for shipped content.

## Reviewers And Validation

- Assign a Morse operator or radio educator to validate code assignments, timing,
  lesson sequence, and emergency-context copy.
- Test future playback with audio-only, visual-only, and haptic-capable users.
- Verify dot-dash notation remains readable and accessible for screen readers.

## App Expansion Recommendations

- Add notation-course and time-based signal metadata.
- Add playback fields for dit length, dah length, intra-character gaps, character
  gaps, word gaps, WPM, Farnsworth spacing, tone, and haptic pattern.
- Add prosign roles and gap-aware scoring before procedural lessons ship.
