# Hindi Devanagari Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `hindi-devanagari-v1` bootstrap.

## Architecture

- How should the runtime model represent pedagogical units that may be a
  consonant base, dependent vowel sign, rendered akshara, explicit virama
  sequence, or opaque conjunct?
- Should matra visual position be structured metadata so drills can teach
  reading order versus display order?
- Should nukta be stored as a separate pedagogical mark, variant metadata on
  affected consonants, or both?
- How should syllable or akshara segmentation be exposed to review tooling when
  Unicode grapheme cluster boundaries are insufficient?

## Product And Pedagogy

- Which romanization style should reviewer notes use for Hindi anchors if the
  learner UI avoids formal transliteration?
- How soon should schwa deletion be explained versus deferred as pronunciation
  review only?
- Does the existing drill set support matra placement and consonant-base
  composition clearly enough for Devanagari?

## Sources, Licensing, And Attribution

- Confirm CLDR and Unicode release versions before ingesting exemplar metadata.
- Keep Dakshina discovery-only until CC BY-SA obligations are reviewed.
- Keep Hindi Wiktionary discovery-only until attribution and share-alike impact
  is approved.
- Keep OSM signage samples scoring-only until ODbL derived-data obligations are
  approved.
- Use only app-authored examples for shipped learner content until all source
  rights are signed off.

## Reviewers And Validation

- Assign a Hindi reader to validate anchor naturalness, matra segmentation,
  schwa deletion notes, and public-sign terminology.
- Validate fonts at drill sizes for short-i, below-base u, anusvara, nukta, and
  conjuncts such as `प्र` and `स्ट`.
- Check environmental-print samples for menus, bus signs, shops, and
  entrance/exit signs before selecting final lesson order.

## App Expansion Recommendations

- Add language-agnostic text fields before implementation so runtime data does
  not rely on Thai-specific names.
- Add script-aware grapheme and akshara segmentation metadata.
- Add drill affordances for base-plus-matra composition, inherent-vowel changes,
  virama suppression, and conjunct recognition.
- Add course-aware progress storage before multiple scripts can coexist.
