# Punjabi Gurmukhi Reading Review Packet

Generated from `punjabi-gurmukhi-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `punjabi-gurmukhi-v1`
- Language tag: `pa-Guru`
- Script: `Guru`
- Direction: `ltr`
- Target domains: food_cafe_menus, transit_signage, public_facilities, everyday_labels, media_culture

## Sources To Review

| Source                               | Kind                                  | Use             | License                                                      | Notes                                                                                                           |
| ------------------------------------ | ------------------------------------- | --------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| unicode-gurmukhi-block               | unicode_metadata                      | scoring         | Unicode License reviewed for metadata use                    | Gurmukhi block metadata for letters, vowel signs, tippi, bindi, addak, halant, nukta, and digits.               |
| cldr-pa-guru-exemplars               | locale_metadata                       | scoring         | Unicode License reviewed for metadata use                    | Punjabi Gurmukhi exemplar characters and locale behavior. Confirm exact CLDR release before ingestion.          |
| wordfreq-pa                          | frequency                             | scoring_only    | MIT package license; upstream corpus licenses require review | Broad Punjabi frequency intuition. Do not ship derived upstream example text.                                   |
| indic-nlp-library-pa                 | tokenizer_transliteration_tool        | discovery_only  | MIT package license reviewed for tooling use                 | Useful for Indic normalization and transliteration experiments. It is not shipped curriculum text.              |
| dakshina-pa                          | transliteration_pronunciation_dataset | discovery_only  | CC BY-SA 4.0; attribution and share-alike review required    | Pronunciation and romanization discovery only until share-alike obligations are reviewed.                       |
| pa-wiktionary                        | lexicon                               | discovery_only  | CC BY-SA; attribution and share-alike review required        | Gloss and spelling discovery only until attribution obligations are approved.                                   |
| openstreetmap-punjab-names           | environmental_print                   | scoring_only    | ODbL; derived-data obligations require review                | Useful for place names, transit labels, and public-signage validation. Do not ship raw extracts without review. |
| app-authored-punjabi-domain-examples | authored_examples                     | shipped_content | app_owned                                                    | Short Gurmukhi menu, sign, and label examples authored by GlyphBridge after reviewer validation.                |

## Candidate Highlights

| Type   | Candidate | Gloss         | Score  | Notes                                                      |
| ------ | --------- | ------------- | ------ | ---------------------------------------------------------- |
| anchor | ਚਾਹ       | tea           | 0.7250 | Compact cafe anchor and h awareness                        |
| anchor | ਰੇਲ       | rail train    | 0.6902 | Transit anchor for ੇ sign                                  |
| anchor | ਦਾਲ       | lentils       | 0.6750 | Menu staple with ਦ ਆ ਲ                                     |
| anchor | ਪਾਣੀ      | water         | 0.6742 | Survival anchor with ਪ ਆ ਣ and ੀ                           |
| anchor | ਨਾਮ       | name          | 0.6702 | High-frequency label and form word                         |
| anchor | ਦੁਕਾਨ     | shop          | 0.6182 | Everyday storefront anchor with ੁ and ਆ                    |
| anchor | ਰਾਹ       | road path     | 0.6122 | Useful sign and direction word                             |
| anchor | ਰੋਟੀ      | flatbread     | 0.6018 | High menu utility with ੋ and ੀ                             |
| anchor | ਬੱਸ       | bus           | 0.5886 | Transit anchor and addak gateway                           |
| anchor | ਸਕੂਲ      | school        | 0.4954 | Everyday label and long-u sign                             |
| anchor | ਬਜ਼ਾਰ     | market        | 0.4886 | Nukta word with strong real-world signage payoff           |
| anchor | ਬੰਦ       | closed        | 0.4474 | High utility and nasal sign review                         |
| anchor | ਪੰਜਾਬ     | Punjab        | 0.4390 | Meta and place anchor with tippi and final ਬ               |
| anchor | ਹਸਪਤਾਲ    | hospital      | 0.4294 | Public facility word but long for early stage              |
| anchor | ਦਰਵਾਜ਼ਾ   | door entrance | 0.3186 | Useful sign word with nukta and length                     |
| anchor | ਖੁੱਲ੍ਹਾ   | open          | 0.2546 | Shop sign word but addak and half-letter load make it late |

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
