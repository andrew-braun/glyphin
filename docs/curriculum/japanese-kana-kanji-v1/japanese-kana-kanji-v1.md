# Japanese Kana And Kanji Reading Curriculum Notes

Japanese Kana And Kanji Reading v1 is a conservative mixed-script bootstrap. It
teaches enough hiragana, katakana, and high-payoff kanji for early environmental
print wins without attempting a complete Japanese course.

## Course Boundary

- Language/script: Japanese in `Jpan`, combining hiragana, katakana, and kanji.
- Target learner: English-literate traveler, media fan, or beginner who wants to
  decode practical Japanese text.
- Target domains: food and cafe menus, transit signage, convenience stores,
  anime/manga surface text, and public safety labels.
- In scope for v1: core kana rows, dakuten and handakuten, small kana, chōon,
  15 to 20 high-payoff kanji, and mixed-script segmentation.
- Out of scope for v1: full JLPT N5, handwriting, stroke order, full grammar,
  pitch accent, keigo, dialect variation, and vertical-layout rendering.

## Sequencing Rationale

- Start with a tiny set of survival kanji and kana readings so learners see why
  Japanese mixes scripts.
- Move into katakana early because loanwords produce fast menu and transit wins.
- Treat dakuten, handakuten, small kana, and chōon as reusable modifiers rather
  than as isolated memorization lists.
- Limit kanji to a visible survival set and teach components only as hints.

## Validation Notes

- Segmentation review: manually segment all v1 anchors and do not rely on
  whitespace. Future implementation may use a Japanese tokenizer for authoring
  support, but learner-visible content needs human review.
- Pronunciation review: native-speaker review is required for long vowels,
  dakuten, small kana, and common word readings.
- Cultural review: confirm that menu, transit, store, and public-sign anchors are
  natural and not dictionary-only examples.
- License review: keep BCCWJ, SUBTLEX-JP, JMdict, and KANJIDIC-derived content
  out of shipped examples until attribution obligations are approved.
