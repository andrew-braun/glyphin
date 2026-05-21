# Morse Signaling Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for a
Morse signaling reading course.

## Course Boundary

- Language/script: International Morse represented as symbolic notation and timed
  signals, `und-Zsym`, ISO 15924 `Zsym`.
- Target learner: beginner signal reader, scout or radio-curious learner,
  accessibility tool builder, or cultural-history learner.
- Target domains: emergency recognition, radio learning, audio and haptic drills,
  scout learning, maritime and aviation heritage, and symbolic practice strings.
- In scope for v1: dits, dahs, gap types, high-payoff letters, SOS, short words,
  symbolic dot-dash notation, and future timing metadata.
- Out of scope for v1: sending skill, formal emergency training, operator
  certification, full radio procedure, full punctuation, prosign mastery,
  numerals, and adaptive speed training.

## Sequencing Rationale

- Frequency sources: ITU references for discovery-only standards checks, Unicode
  metadata for display symbols, ARRL-style learning context for discovery, and
  app-authored exercises for shipped content.
- First-session decoding target: `.`, `-`, and `... --- ...`, because they teach
  the basic contrast and the most recognizable sequence while making timing
  semantics explicit.
- Stage 1 goal: separate signal elements, order, and gap types.
- Stage 2 goal: add S, O, SOS, NO, and OK through high-recognition patterns.
- Stage 3 goal: add HELP, STOP, YES, and TRAIN as practical word-reading anchors.

## Script Notes

- Morse is not a normal visual script. The dot-dash notation is a compact review
  artifact for a time-based signal.
- Gaps are semantic units and must not be modeled as ordinary whitespace only.
- Prosigns are not simple words. They need a dedicated role before they become
  lesson anchors.
- Playback speed, Farnsworth spacing, audio tone, light pulse, and haptic pulse
  are curriculum-affecting metadata rather than UI preferences alone.

## Validation Notes

- Segmentation review: verify that dit, dah, intra-character gaps, character
  gaps, word gaps, and prosigns can be represented without losing timing.
- Operator review: confirm beginner-safe sequencing, emergency-context wording,
  and procedural terms.
- Accessibility review: verify audio, visual, and haptic alternatives before any
  runtime release.
- License review: keep standards and radio-reference material out of shipped
  content until obligations are approved.
