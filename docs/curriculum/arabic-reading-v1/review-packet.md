# Arabic Script Reading Review Packet

Generated from `arabic-reading-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `arabic-reading-v1`
- Language tag: `ar-Arab`
- Script: `Arab`
- Direction: `rtl`
- Target domains: food_cafe_menus, transit_signage, public_facilities, street_market_signage, everyday_labels

## Sources To Review

| Source                              | Kind                           | Use             | License                                                      | Notes                                                                                                                                |
| ----------------------------------- | ------------------------------ | --------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| unicode-arabic-block                | unicode_metadata               | scoring         | Unicode License reviewed for metadata use                    | Arabic block metadata for letters, marks, digits, and punctuation. Use as infrastructure metadata only.                              |
| unicode-arabic-shaping              | unicode_metadata               | scoring         | Unicode License reviewed for metadata use                    | Joining type and shaping metadata needed to explain positional forms without storing presentation forms as content.                  |
| cldr-ar-exemplars                   | locale_metadata                | scoring         | Unicode License reviewed for metadata use                    | Arabic exemplar characters and locale metadata. Confirm exact CLDR release before ingestion.                                         |
| wordfreq-ar                         | frequency                      | scoring_only    | MIT package license; upstream corpus licenses require review | Broad Arabic frequency intuition only. Do not ship derived example text from upstream corpora.                                       |
| arabic-wiktionary                   | lexicon                        | discovery_only  | CC BY-SA; attribution and share-alike review required        | Useful for spelling and gloss checks. Keep discovery-only until share-alike obligations are reviewed.                                |
| camel-tools                         | tokenizer_transliteration_tool | discovery_only  | tool license and model/data licenses require review          | Potential analysis aid for tokenization, morphology, and transliteration. Not a text source and not needed for shipped examples.     |
| openstreetmap-arabic-names          | environmental_print            | scoring_only    | ODbL; derived-data obligations require review                | Useful for street, transit, and facility-name validation in Arabic-script contexts. Do not ship raw extracts without license review. |
| app-authored-arabic-domain-examples | authored_examples              | shipped_content | app_owned                                                    | Short menu, sign, and label examples authored by Glyphin from reviewed vocabulary rather than copied from third-party corpora.       |

## Candidate Highlights

| Type   | Candidate | Gloss      | Score  | Notes                                                      |
| ------ | --------- | ---------- | ------ | ---------------------------------------------------------- |
| anchor | لا        | no         | 0.7468 | Compact survival word and lam-alif shaping payoff          |
| anchor | باب       | door       | 0.6424 | Simple repeated ba anchor for right-to-left joining        |
| anchor | شاي       | tea        | 0.5872 | Useful cafe word with sheen and final ya                   |
| anchor | ماء       | water      | 0.5840 | High survival utility but hamza needs review               |
| anchor | سوق       | market     | 0.5668 | High real-world utility and long-vowel practice            |
| anchor | تاكسي     | taxi       | 0.5484 | Familiar loanword for travel and dotted-letter review      |
| anchor | فندق      | hotel      | 0.5004 | Public travel word with fa noon dal qaf                    |
| anchor | دخول      | entrance   | 0.4840 | Pairs naturally with exit and reviews dal kha waw lam      |
| anchor | قهوة      | coffee     | 0.4832 | Strong cafe anchor with qaf waw ha and ta marbuta          |
| anchor | خروج      | exit       | 0.4708 | Essential sign word and strong pair with دخول              |
| anchor | حليب      | milk       | 0.4708 | Menu anchor for long i with ya                             |
| anchor | شارع      | street     | 0.4604 | Common street-sign word but ayn raises pronunciation load  |
| anchor | سعر       | price      | 0.4544 | Shopping anchor and good unvowelled short-vowel discussion |
| anchor | حلال      | halal      | 0.4516 | High signage utility with cultural review required         |
| anchor | مطار      | airport    | 0.4424 | Travel anchor after emphatic ta is known                   |
| anchor | حمام      | bathroom   | 0.4260 | Useful but regional wording needs reviewer confirmation    |
| anchor | خبز       | bread      | 0.4236 | Useful food anchor after kha and zay are introduced        |
| anchor | مفتوح     | open       | 0.3912 | Common shop sign word but longer and chunk-heavy           |
| anchor | مطعم      | restaurant | 0.3696 | Essential but high-load because of emphatic ta and ayn     |
| anchor | مغلق      | closed     | 0.3360 | Pairs with open and introduces ghayn late                  |

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
