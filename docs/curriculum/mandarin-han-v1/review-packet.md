# Mandarin Han Reading Review Packet

Generated from `mandarin-han-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `mandarin-han-v1`
- Language tag: `zh-Hans`
- Script: `Hans`
- Direction: `ltr`
- Target domains: restaurant_menus, food_labels, transit_signage, public_notices, retail_signage

## Sources To Review

| Source                         | Kind                  | Use             | License                                                      | Notes                                                                                             |
| ------------------------------ | --------------------- | --------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| unicode-han-block              | unicode_metadata      | scoring         | Unicode License reviewed for metadata use                    | CJK Unified Ideographs metadata for infrastructure and rendering checks.                          |
| cldr-zh-exemplars              | locale_metadata       | scoring         | Unicode License reviewed for metadata use                    | Chinese locale metadata and exemplar characters.                                                  |
| hsk-word-lists                 | pedagogical_word_list | scoring_only    | official list terms require review                           | Mandarin proficiency word-list reference for beginner frequency and utility.                      |
| wordfreq-zh                    | frequency             | scoring_only    | MIT package license; upstream corpus licenses require review | Broad Mandarin frequency intuition. Do not ship derived corpus examples.                          |
| jieba-frequency                | tokenizer_frequency   | scoring_only    | MIT package license; corpus provenance requires review       | Segmentation and word-frequency intuition for analysis only.                                      |
| cc-cedict                      | lexicon               | discovery_only  | CC BY-SA; attribution and share-alike review required        | Gloss, pinyin, and traditional-variant discovery only until attribution obligations are approved. |
| opencc                         | variant_tool          | discovery_only  | Apache 2.0                                                   | Simplified/traditional conversion reference for analysis and QA only.                             |
| app-authored-mandarin-examples | authored_examples     | shipped_content | app_owned                                                    | Short menu, transit, sign, and retail examples authored by Glyphin.                               |

## Candidate Highlights

| Type   | Candidate | Gloss                      | Score  | Notes                                     |
| ------ | --------- | -------------------------- | ------ | ----------------------------------------- |
| anchor | 水        | water                      | 0.6586 | First-session survival word               |
| anchor | 饭        | meal / rice                | 0.6250 | Core menu word and food component anchor  |
| anchor | 菜        | dish / vegetable           | 0.6150 | Menu category and grass radical anchor    |
| anchor | 肉        | meat                       | 0.6002 | High-payoff menu category                 |
| anchor | 开        | open                       | 0.5862 | Store-status sign word                    |
| anchor | 喝        | drink                      | 0.5838 | Mouth radical and beverage action         |
| anchor | 关        | closed / shut              | 0.5774 | Pairs with open for signage               |
| anchor | 出口      | exit                       | 0.5610 | Transit sign word                         |
| anchor | 茶        | tea                        | 0.5598 | Beverage and culture anchor               |
| anchor | 入口      | entrance                   | 0.5566 | Pairs with exit and contrasts 入 with 人  |
| anchor | 酒        | alcohol                    | 0.5546 | Menu and culture word                     |
| anchor | 上/下     | up / down                  | 0.5458 | Directional pair for signs and navigation |
| anchor | 汤        | soup                       | 0.5454 | Water radical reinforcement               |
| anchor | 面        | noodles / face             | 0.5398 | Menu word with contextual ambiguity       |
| anchor | 价钱      | price / money              | 0.5122 | Commerce and pricing anchor               |
| anchor | 男/女     | male / female              | 0.4994 | Restroom sign pair                        |
| anchor | 左/右     | left / right               | 0.4974 | Wayfinding pair                           |
| anchor | 咖啡      | coffee                     | 0.4578 | Loanword and mouth radical repetition     |
| anchor | 卫生      | hygiene / restroom context | 0.4154 | Facility anchor and component review      |
| anchor | 谢谢      | thank you                  | 0.3586 | Late politeness anchor due to complexity  |

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
