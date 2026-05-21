# Runic Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `runic-reading-v1` bootstrap.

## Architecture

- How should the runtime model distinguish one encoded rune from multiple
  historical values across Elder Futhark, Younger Futhark, and futhorc contexts?
- Should rune names, transliterations, and reconstructed sounds be separate
  fields on every pedagogical unit?
- How should inscription separators and non-left-to-right source orientation be
  represented in lesson examples?
- Does the app need an explicit sensitivity-review field for signs with modern
  extremist misuse risk?

## Product And Pedagogy

- Should v1 be branded as Elder Futhark first, or as a general Runic reading
  course with Elder Futhark as the starting convention?
- How much historical-language context belongs in a script course before it
  becomes Old Norse or Proto-Germanic instruction?
- Which rune-name tradition should be displayed by default?
- How should nonmodern pronunciation limits be shown without cluttering drills?

## Sources, Licensing, And Attribution

- Confirm inscription database reuse terms before any attested text influences
  shipped lesson examples.
- Keep Wiktionary rune-name material discovery-only until attribution and
  share-alike implications are approved.
- Prefer app-authored transliteration examples and chart-style prompts for
  shipped content.

## Reviewers And Validation

- Assign a Runology or historical linguistics reviewer to validate rune values,
  names, period labels, and cultural notes.
- Verify Runic font support for all selected glyphs and variant display needs.
- Review all modern cultural references for safety and neutrality.

## App Expansion Recommendations

- Add script-specific variant metadata for signs whose values change across
  traditions.
- Add transliteration and reconstructed-pronunciation fields distinct from
  learner-facing glosses.
- Add review-state metadata for sensitive historical or modern-symbol contexts.
- Add source-orientation notes for historical inscriptions even when runtime text
  is displayed left-to-right.
