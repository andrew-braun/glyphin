# English Braille Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for an
English braille reading course.

## Course Boundary

- Language/script: English represented in Unicode Braille Patterns, `en-Brai`,
  ISO 15924 `Brai`.
- Target learner: sighted accessibility learner, beginning braille learner, tool
  builder, or reader preparing for supervised tactile instruction.
- Target domains: accessible signage, elevator and room labels, public facility
  labels, packaging and medicine labels, menus, and learner transcriptions.
- In scope for v1: uncontracted English braille cells, dot-number patterns,
  spaces, capitalization indicator, number indicator as preview, and practical
  label words.
- Out of scope for v1: contracted braille as a full system, tactile fluency,
  embossing workflows, refreshable braille display integration, math braille,
  music braille, and certification-oriented instruction.

## Sequencing Rationale

- Frequency sources: Unicode metadata for cell inventory, UEB standards for
  discovery-only rule checks, BANA guidance for accessibility context, Liblouis
  for scoring-only translation checks, and app-authored examples for shipped
  content.
- First-session decoding target: `⠉⠁⠞`, `⠞⠑⠁`, and `⠉⠁⠋⠑`, because they
  are short and let learners name dot patterns before public-sign words.
- Stage 1 goal: teach cell identity, dot numbers, and word spacing.
- Stage 2 goal: add accessible signage words such as menu, food, door, and room.
- Stage 3 goal: add enter/exit, the capital indicator, toilet, lift, and water.

## Script Notes

- Braille is tactile. Visual Unicode cells are necessary for authoring and review
  but should not be mistaken for the full learner experience.
- Dot-number metadata should be first-class curriculum data rather than alt text
  bolted onto a glyph.
- The first course should use uncontracted English braille so learners can reason
  about cells before UEB contractions.
- Indicators such as `⠠` and `⠼` are functional cells and need a different model
  from ordinary letters.

## Validation Notes

- Segmentation review: verify words are segmented by braille cells and spaces,
  not by Latin source strings.
- Accessibility review: require braille readers and screen-reader checks before
  any learner-facing release.
- Rendering review: verify cell size, line height, contrast, and labels work for
  visual review without implying tactile equivalence.
- License review: keep UEB standards, BANA resources, and Liblouis outputs out of
  shipped content until obligations are approved.
