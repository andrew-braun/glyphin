# Punjabi Gurmukhi Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `punjabi-gurmukhi-v1` bootstrap.

## Architecture

- How should the runtime model represent vowel bearers separately from dependent
  vowel signs while keeping learner-visible examples simple?
- Should tippi, bindi, addak, nukta, and halant share one combining-mark schema
  or have script-specific pedagogical roles?
- How should pairin letters and half-letter behavior be represented in segment
  metadata?
- Does the app need font fallback checks for small marks above and below the
  headline?

## Product And Pedagogy

- Should the course use formal transliteration, plain pronunciation hints, or
  both in reviewer-only notes?
- How much tone and aspiration history belongs in a reading-first v1 course?
- Can the existing drill set teach addak and nasal signs clearly enough?

## Sources, Licensing, And Attribution

- Confirm CLDR and Unicode release versions before ingesting exemplar metadata.
- Keep Dakshina discovery-only until CC BY-SA obligations are reviewed.
- Keep Punjabi Wiktionary discovery-only until attribution and share-alike impact
  is approved.
- Keep OSM signage samples scoring-only until ODbL obligations are approved.
- Use app-authored examples for shipped learner content.

## Reviewers And Validation

- Assign a Gurmukhi-literate Punjabi reviewer to validate anchors, segmentation,
  pronunciation notes, nasal signs, addak, and loan-letter values.
- Verify fonts at drill sizes for tippi, bindi, addak, nukta, and pairin forms.
- Check menus, bus signs, markets, and public labels before final lesson order.

## App Expansion Recommendations

- Add script-aware akshara segmentation and combining-mark metadata.
- Add drill affordances for base-plus-matra composition, visual-order versus
  reading-order practice, nasal-sign recognition, and addak recognition.
- Add course-aware progress storage before multiple Indic scripts can coexist.
