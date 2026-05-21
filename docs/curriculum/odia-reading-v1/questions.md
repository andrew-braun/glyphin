# Odia Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `odia-reading-v1` bootstrap.

## Architecture

- How should the runtime model represent Odia akshara segmentation when a single
  visible word may include below-base signs, virama clusters, and nukta-bearing
  letters?
- Should `ଡ଼` and similar forms be stored as separate pedagogical units or as
  base-plus-nukta variants?
- How should conjuncts such as `ସ୍କ` and `କ୍ତ` be stored: graphemes, reusable
  chunks, or orthography-rule examples?
- Does the app need script-specific font QA for rounded Odia glyphs and marks at
  small drill sizes?

## Product And Pedagogy

- Should Odia pronunciation hints use a formal transliteration standard or plain
  English approximations?
- How much vowel reduction and schwa behavior should be taught in a reading-
  first course?
- Can the existing drill set teach base-plus-matra composition and cluster
  recognition without a new akshara-building interaction?

## Sources, Licensing, And Attribution

- Confirm CLDR and Unicode release versions before ingesting exemplar metadata.
- Keep Dakshina discovery-only until CC BY-SA obligations are reviewed.
- Keep Odia Wiktionary discovery-only until attribution and share-alike impact is
  approved.
- Keep OSM signage samples scoring-only until ODbL obligations are approved.
- Use app-authored examples for shipped learner content.

## Reviewers And Validation

- Assign an Odia reviewer to validate anchor naturalness, segmentation,
  pronunciation notes, and public-sign terminology.
- Verify fonts at drill sizes for below-base signs, virama clusters, anusvara,
  and nukta-bearing letters.
- Check menus, bus signs, markets, and public labels before final lesson order.

## App Expansion Recommendations

- Add script-aware akshara segmentation and combining-mark metadata.
- Add drill affordances for base-plus-matra composition, inherent-vowel changes,
  virama suppression, nukta recognition, and conjunct recognition.
- Add course-aware progress storage before multiple Indic scripts can coexist.
