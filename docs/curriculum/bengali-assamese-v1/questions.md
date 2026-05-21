# Bengali-Assamese Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `bengali-assamese-v1` bootstrap.

## Architecture

- How should the runtime model represent Bengali akshara segmentation when a
  visible conjunct may be taught as one chunk but stored as several code points?
- Should shared-script notes support language-specific variant metadata for
  Bengali and Assamese inside one course?
- Should Assamese-specific letters such as `ৰ` and `ৱ` be first-class grapheme
  rows in this course or only review notes until an Assamese course exists?
- How should matra visual position be represented for short-i and multi-part
  signs?

## Product And Pedagogy

- Should the learner UI name this course Bengali-first more prominently despite
  the display name including Assamese?
- Should Bengali pronunciation hints use a formal romanization standard or plain
  English approximations?
- How much Bengali vowel reduction should be taught during reading lessons?

## Sources, Licensing, And Attribution

- Confirm CLDR Bengali and Assamese exemplar release versions before durable
  ingestion.
- Keep Bengali and Assamese Wiktionary discovery-only until attribution and
  share-alike obligations are approved.
- Keep OSM signage samples scoring-only until ODbL obligations are approved.
- Use app-authored examples for shipped Bengali-first lesson text.

## Reviewers And Validation

- Assign a Bengali reviewer for anchor naturalness, script segmentation,
  pronunciation notes, and public-sign terminology.
- Assign an Assamese reviewer before any Assamese examples become shipped
  content.
- Verify font rendering for short-i placement, anusvara, hasanta clusters,
  `ট্র`, `স্ক`, `ৰ`, and `ৱ`.

## App Expansion Recommendations

- Add course metadata for language variants within one script.
- Add script-aware akshara segmentation and matra-position metadata.
- Add drill affordances for conjunct chunk recognition and visual-order versus
  reading-order practice.
- Add course-aware progress storage before multiple courses can share script
  inventory safely.
