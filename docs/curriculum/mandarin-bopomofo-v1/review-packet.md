# Mandarin Bopomofo Reading Review Packet

Generated from `mandarin-bopomofo-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `mandarin-bopomofo-v1`
- Language tag: `zh-Bopo`
- Script: `Bopo`
- Direction: `ltr`
- Target domains: mandarin_pronunciation_guides, taiwanese_learner_materials, dictionary_and_ruby_annotations, food_and_cafe_vocabulary, transit_and_wayfinding_terms, public_facility_labels

## Sources To Review

| Source                         | Kind              | Use             | License                                                         | Notes                                                                                                                      |
| ------------------------------ | ----------------- | --------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| unicode-bopomofo-blocks        | unicode_metadata  | scoring         | Unicode License reviewed for metadata use                       | Bopomofo and Bopomofo Extended block metadata for symbol inventory and rendering checks.                                   |
| cldr-zh-bopo-transforms        | locale_metadata   | scoring         | Unicode License reviewed for metadata use                       | CLDR transform and locale metadata for Bopomofo and Mandarin romanization support. Confirm exact release before ingestion. |
| moe-mandarin-dictionary        | official_lexicon  | discovery_only  | Taiwan MOE data terms require review before derived publication | Authoritative Traditional Chinese and Zhuyin reference. Keep discovery-only until terms and attribution are reviewed.      |
| cc-cedict                      | lexicon           | discovery_only  | CC BY-SA; attribution and share-alike review required           | Gloss and pinyin cross-checking only until share-alike implications are approved.                                          |
| wordfreq-zh                    | frequency         | scoring_only    | MIT package license; upstream corpus licenses require review    | Broad Mandarin word frequency intuition. Do not ship derived corpus examples.                                              |
| app-authored-bopomofo-examples | authored_examples | shipped_content | app_owned                                                       | Short Bopomofo syllable, tone, menu, and wayfinding examples authored by GlyphBridge.                                      |

## Candidate Highlights

| Type   | Candidate       | Gloss              | Score  | Notes                                                  |
| ------ | --------------- | ------------------ | ------ | ------------------------------------------------------ |
| anchor | ㄇㄚ            | mā / ma syllable   | 0.7042 | First syllable for symbol plus unmarked first tone     |
| anchor | ㄈㄢˋ           | fàn meal / rice    | 0.6650 | Food anchor and fourth tone                            |
| anchor | ㄔㄚˊ           | chá tea            | 0.6298 | Second tone beverage anchor                            |
| anchor | ㄏㄜ            | drink syllable hē  | 0.6118 | Common verb syllable and ㄜ final                      |
| anchor | ㄎㄞ            | open               | 0.6066 | Store status word with ㄎ and ㄞ                       |
| anchor | ㄇㄚˇ           | mǎ tone contrast   | 0.6034 | Early third tone contrast using same symbols           |
| anchor | ㄕㄨㄟˇ         | shuǐ water         | 0.5942 | Survival word and medial final stack                   |
| anchor | ㄋㄧˇ ㄏㄠˇ     | nǐ hǎo hello       | 0.5934 | Greeting anchor with third tone repetition             |
| anchor | ㄎㄚ ㄈㄟ       | kā fēi coffee      | 0.5594 | Loanword beverage with repeated unmarked first tone    |
| anchor | ㄔ ㄈㄢˋ        | chī fàn eat a meal | 0.5530 | Practical phrase with first and fourth tones           |
| anchor | ㄍㄨㄢ          | closed / shut      | 0.5118 | Pairs with open and adds ㄍㄨㄢ frame                  |
| anchor | ㄔㄨ ㄎㄡˇ      | exit               | 0.4966 | Transit sign word with mouth final ㄎㄡˇ               |
| anchor | ㄖㄨˋ ㄎㄡˇ     | entrance           | 0.4562 | Pairs with exit and introduces ㄖ                      |
| anchor | ㄋㄢˊ ㄋㄩˇ     | male / female      | 0.4382 | Public facility pair and ㄩ support                    |
| anchor | ㄐㄧㄚˋ ㄑㄧㄢˊ | price / money      | 0.4062 | Commerce anchor but high new initial load              |
| anchor | ㄗㄨㄛˇ ㄧㄡˋ   | left / right       | 0.4042 | Wayfinding pair with ㄗ and ㄧㄡˋ                      |
| anchor | ㄒㄧㄝˋ ㄒㄧㄝ˙ | thank you          | 0.3310 | Late politeness anchor due to neutral tone and ㄒ load |

## Reviewer Notes

### Segmentation

-

### Pronunciation

-

### Cultural Context

-

### License And Attribution

-

### DB Ingestion

-
