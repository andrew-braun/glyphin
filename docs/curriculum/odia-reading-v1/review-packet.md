# Odia Reading Review Packet

Generated from `odia-reading-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `odia-reading-v1`
- Language tag: `or-Orya`
- Script: `Orya`
- Direction: `ltr`
- Target domains: food_cafe_menus, transit_signage, public_facilities, everyday_labels, commerce_signage

## Sources To Review

| Source                            | Kind                                  | Use             | License                                                      | Notes                                                                                                                            |
| --------------------------------- | ------------------------------------- | --------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| unicode-odia-block                | unicode_metadata                      | scoring         | Unicode License reviewed for metadata use                    | Odia block metadata for letters, vowel signs, anusvara, virama, nukta, and digits.                                               |
| cldr-or-exemplars                 | locale_metadata                       | scoring         | Unicode License reviewed for metadata use                    | Odia exemplar characters and locale behavior. Confirm exact CLDR release before ingestion.                                       |
| wordfreq-or                       | frequency                             | scoring_only    | MIT package license; upstream corpus licenses require review | Rough Odia frequency intuition where available. Do not ship derived upstream example text.                                       |
| indic-nlp-library-or              | tokenizer_transliteration_tool        | discovery_only  | MIT package license reviewed for tooling use                 | Useful for Indic normalization and transliteration experiments. It is not a content corpus.                                      |
| dakshina-or                       | transliteration_pronunciation_dataset | discovery_only  | CC BY-SA 4.0; attribution and share-alike review required    | Pronunciation and romanization discovery only until share-alike obligations are reviewed.                                        |
| or-wiktionary                     | lexicon                               | discovery_only  | CC BY-SA; attribution and share-alike review required        | Gloss and spelling discovery only until attribution obligations are approved.                                                    |
| openstreetmap-odisha-names        | environmental_print                   | scoring_only    | ODbL; derived-data obligations require review                | Useful for place names, transit labels, commerce signs, and public-facility validation. Do not ship raw extracts without review. |
| app-authored-odia-domain-examples | authored_examples                     | shipped_content | app_owned                                                    | Short Odia menu, sign, and label examples authored by Glyphin after reviewer validation.                                         |

## Candidate Highlights

| Type   | Candidate | Gloss      | Score  | Notes                                                         |
| ------ | --------- | ---------- | ------ | ------------------------------------------------------------- |
| anchor | ବସ        | bus        | 0.7590 | Transit anchor with inherent vowel in both bases              |
| anchor | ଚା        | tea        | 0.7530 | Compact cafe anchor with ଚ and aa sign                        |
| anchor | ପାଣି      | water      | 0.6742 | Survival anchor with ପ ଆ ଣ and ି                              |
| anchor | ନାମ       | name       | 0.6702 | High-frequency form and label word                            |
| anchor | ରେଳ       | rail train | 0.6558 | Transit anchor for e sign and retroflex lateral               |
| anchor | ଭାତ       | rice meal  | 0.6218 | Menu staple and inherent vowel checkpoint                     |
| anchor | ଦୋକାନ     | shop       | 0.6182 | Everyday storefront anchor with o sign and aa                 |
| anchor | ବଜାର      | market     | 0.6074 | Commerce sign anchor with ବ ଜ ର                               |
| anchor | ଦୁଧ       | milk       | 0.5350 | Menu anchor and u sign                                        |
| anchor | ଖୋଲା      | open       | 0.5350 | Shop sign word with kh and o sign                             |
| anchor | ରାସ୍ତା    | road       | 0.4722 | Wayfinding anchor with conjunct load                          |
| anchor | ବନ୍ଦ      | closed     | 0.3978 | High utility but conjunct makes it late                       |
| anchor | ସ୍କୁଲ     | school     | 0.3750 | Everyday label but starts with conjunct cluster               |
| anchor | ଓଡ଼ିଶା    | Odisha     | 0.3562 | Place identity anchor and nukta checkpoint                    |
| anchor | ଡାକ୍ତର    | doctor     | 0.2790 | Public facility word but conjunct and retroflex load delay it |
| anchor | ଶୌଚାଳୟ    | restroom   | 0.2386 | Essential facility word but too high-load for early lessons   |

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
