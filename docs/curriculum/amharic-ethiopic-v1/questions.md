# Amharic Ethiopic Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `amharic-ethiopic-v1` bootstrap.

## Architecture

- Should a fidel be stored as the atomic grapheme, with consonant family and
  vowel order metadata, or should the DB also model abstract family and order
  rows separately?
- How should sixth-order fidel be represented when pronunciation varies by word,
  position, or analysis tradition?
- Should support romanization use a formal standard, a practical learner hint,
  or both?
- Does the shared lesson model need a dedicated syllabary or abugida grid view
  for fidel families and orders?
- How should Ethiopic punctuation and numerals be represented if they are
  deferred from early lessons but present in target-domain samples?

## Product And Pedagogy

- Should the course reveal the seven-order grid from Lesson 1 or introduce it
  gradually after several real-word anchors?
- Which anchors are most natural for Ethiopian and diaspora contexts after native
  speaker review?
- Should `እንጀራ` appear in core v1 despite high new-load because it is culturally
  central, or should it remain late review?
- How much morphology should be explained for `መ-` words such as `መኪና`,
  `መውጫ`, and `መግቢያ`?

## Sources, Licensing, And Attribution

- Keep Wiktionary discovery-only until CC BY-SA obligations are reviewed.
- Keep Leipzig and wordfreq frequency outputs scoring-only until upstream source
  terms are approved for durable derived artifacts.
- Use app-authored examples for shipped content after Amharic speaker review.

## Reviewers And Validation

- Assign an Amharic speaker to validate every anchor, gloss, romanization hint,
  vowel-order label, and context note.
- Spot-check food, market, transit, hotel, entrance/exit, and facility examples
  against real-world Amharic environmental print.
- Verify Ethiopic rendering on mobile and desktop at drill sizes.

## App Expansion Recommendations

- Add syllabary or abugida family/order metadata to the shared grapheme model.
- Add optional pronunciation standards per course instead of hardcoding a single
  romanization field.
- Add font QA for Ethiopic fidel and punctuation.
- Add support for lesson views that teach a grid gradually without requiring the
  learner to memorize the full chart first.
