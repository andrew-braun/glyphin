# Gujarati Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `gujarati-reading-v1` bootstrap.

## Architecture

- How should the runtime model represent Gujarati akshara segmentation when the
  script lacks the Devanagari headline and has compact matra placement?
- Should rare nukta be a first-class grapheme candidate or only a preservation
  rule until a reviewed anchor requires it?
- How should virama clusters such as `સ્ક` and `સ્પ` be stored: graphemes,
  reusable chunks, or orthography-rule examples?
- Does the app need script-specific font QA for Gujarati matras at small sizes?

## Product And Pedagogy

- Should Gujarati pronunciation hints use a formal transliteration standard or
  plain English approximations?
- How much vowel reduction should be taught during reading-first lessons?
- Can the existing drill set teach base-plus-matra composition and cluster
  recognition without a new akshara-building interaction?

## Sources, Licensing, And Attribution

- Confirm CLDR and Unicode release versions before ingesting exemplar metadata.
- Keep Dakshina discovery-only until CC BY-SA obligations are reviewed.
- Keep Gujarati Wiktionary discovery-only until attribution and share-alike
  impact is approved.
- Keep OSM signage samples scoring-only until ODbL obligations are approved.
- Use app-authored examples for shipped learner content.

## Reviewers And Validation

- Assign a Gujarati reviewer to validate anchor naturalness, segmentation,
  pronunciation notes, and public-sign terminology.
- Verify fonts at drill sizes for below-base signs, anusvara, virama clusters,
  and rare nukta.
- Check menus, bus signs, markets, and public labels before final lesson order.

## App Expansion Recommendations

- Add script-aware akshara segmentation and combining-mark metadata.
- Add drill affordances for base-plus-matra composition, inherent-vowel changes,
  virama suppression, and conjunct recognition.
- Add course-aware progress storage before multiple Indic scripts can coexist.
