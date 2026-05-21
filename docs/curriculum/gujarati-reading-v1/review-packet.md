# Gujarati Reading Review Packet

Generated from `gujarati-reading-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `gujarati-reading-v1`
- Language tag: `gu-Gujr`
- Script: `Gujr`
- Direction: `ltr`
- Target domains: food_cafe_menus, transit_signage, public_facilities, everyday_labels, commerce_signage

## Sources To Review

| Source                                | Kind                                  | Use             | License                                                      | Notes                                                                                                                            |
| ------------------------------------- | ------------------------------------- | --------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| unicode-gujarati-block                | unicode_metadata                      | scoring         | Unicode License reviewed for metadata use                    | Gujarati block metadata for letters, vowel signs, anusvara, virama, nukta, and digits.                                           |
| cldr-gu-exemplars                     | locale_metadata                       | scoring         | Unicode License reviewed for metadata use                    | Gujarati exemplar characters and locale behavior. Confirm exact CLDR release before ingestion.                                   |
| wordfreq-gu                           | frequency                             | scoring_only    | MIT package license; upstream corpus licenses require review | Broad Gujarati frequency intuition. Do not ship derived upstream example text.                                                   |
| indic-nlp-library-gu                  | tokenizer_transliteration_tool        | discovery_only  | MIT package license reviewed for tooling use                 | Useful for Indic normalization and transliteration experiments. It is not a content corpus.                                      |
| dakshina-gu                           | transliteration_pronunciation_dataset | discovery_only  | CC BY-SA 4.0; attribution and share-alike review required    | Pronunciation and romanization discovery only until share-alike obligations are reviewed.                                        |
| gu-wiktionary                         | lexicon                               | discovery_only  | CC BY-SA; attribution and share-alike review required        | Gloss and spelling discovery only until attribution obligations are approved.                                                    |
| openstreetmap-gujarat-names           | environmental_print                   | scoring_only    | ODbL; derived-data obligations require review                | Useful for place names, transit labels, commerce signs, and public-facility validation. Do not ship raw extracts without review. |
| app-authored-gujarati-domain-examples | authored_examples                     | shipped_content | app_owned                                                    | Short Gujarati menu, sign, and label examples authored by GlyphBridge after reviewer validation.                                 |

## Candidate Highlights

| Type   | Candidate | Gloss      | Score  | Notes                                                |
| ------ | --------- | ---------- | ------ | ---------------------------------------------------- |
| anchor | બસ        | bus        | 0.7590 | Transit anchor with inherent vowel in both bases     |
| anchor | ચા        | tea        | 0.7530 | Compact cafe anchor with ચ and aa sign               |
| anchor | રેલ       | rail train | 0.6902 | Transit anchor for e sign                            |
| anchor | પાણી      | water      | 0.6742 | Survival anchor with પ આ ણ and ી                     |
| anchor | નામ       | name       | 0.6702 | High-frequency form and label word                   |
| anchor | દાળ       | lentils    | 0.6378 | Menu staple with દ આ ળ                               |
| anchor | દુકાન     | shop       | 0.6182 | Everyday storefront anchor with u sign and aa        |
| anchor | બજાર      | market     | 0.6074 | Commerce sign anchor with બ જ ર                      |
| anchor | દૂધ       | milk       | 0.5350 | Menu anchor and long-u sign                          |
| anchor | રસ્તો     | road       | 0.5170 | Wayfinding anchor with cluster and o sign            |
| anchor | રોટલી     | flatbread  | 0.5034 | High menu utility but longer than early anchors      |
| anchor | ગુજરાત    | Gujarat    | 0.4886 | Place identity anchor and broad review               |
| anchor | બંધ       | closed     | 0.3978 | High utility but cluster and nasal mark make it late |
| anchor | સ્કૂલ     | school     | 0.3750 | Everyday label but conjunct cluster makes it late    |
| anchor | ખુલ્લું   | open       | 0.3210 | Shop sign word with cluster and nasal sign           |
| anchor | હોસ્પિટલ  | hospital   | 0.2654 | Public facility word but cluster and length delay it |

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
