# Latin Diacritics Reading Review Packet

Generated from `latin-diacritics-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `latin-diacritics-v1`
- Language tag: `mul-Latn`
- Script: `Latn`
- Direction: `ltr`
- Target domains: food_cafe_menus, transit_signage, hotel_facilities, street_names, everyday_labels

## Sources To Review

| Source                                | Kind                | Use             | License                                                      | Notes                                                                                                         |
| ------------------------------------- | ------------------- | --------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| unicode-latin-extended                | unicode_metadata    | scoring         | Unicode License reviewed for metadata use                    | Latin Extended code points and combining mark metadata for infrastructure use.                                |
| cldr-latin-exemplars                  | locale_metadata     | scoring         | Unicode License reviewed for metadata use                    | Locale exemplar characters for Spanish, French, Portuguese, German, Polish, Czech, Slovak, and Hungarian.     |
| wordfreq-multilingual-latin           | frequency           | scoring_only    | MIT package license; upstream corpus licenses require review | Broad frequency intuition across target European languages. Do not ship derived corpus examples.              |
| openstreetmap-europe-names            | environmental_print | scoring_only    | ODbL; derived-data obligations require review                | Street, station, and place-name validation for diacritic visibility. Do not ship raw extracts without review. |
| wiktionary-multilingual-latin         | lexicon             | discovery_only  | CC BY-SA; attribution and share-alike review required        | Gloss and spelling discovery only until attribution and share-alike implications are approved.                |
| app-authored-latin-diacritic-examples | authored_examples   | shipped_content | app_owned                                                    | Short menu, hotel, transit, and label examples authored by GlyphBridge.                                       |

## Candidate Highlights

| Type   | Candidate | Gloss              | Score  | Notes                                                                          |
| ------ | --------- | ------------------ | ------ | ------------------------------------------------------------------------------ |
| anchor | café      | cafe               | 0.7770 | High memorability and acute mark payoff                                        |
| anchor | entrada   | entrance           | 0.7586 | Spanish and Portuguese sign word with no diacritic but strong survival utility |
| anchor | salida    | exit               | 0.7586 | Pairs naturally with entrada for sign reading                                  |
| anchor | mañana    | morning / tomorrow | 0.7008 | Strong Spanish tilde anchor                                                    |
| anchor | entrée    | entry / starter    | 0.6618 | Menu and entrance overlap with multiple accents                                |
| anchor | español   | Spanish language   | 0.6180 | Combines ñ and accent in a visible language label                              |
| anchor | crème     | cream              | 0.6036 | French menu word for grave and circumflex recognition                          |
| anchor | açúcar    | sugar              | 0.6034 | Portuguese ingredient anchor with cedilla and acute                            |
| anchor | pâté      | pate               | 0.5728 | French menu circumflex consolidation                                           |
| anchor | Käse      | cheese             | 0.5466 | Compact German menu anchor for umlaut                                          |
| anchor | château   | castle / estate    | 0.5024 | Tourism and place-name circumflex anchor                                       |
| anchor | façade    | facade             | 0.4964 | Cedilla anchor with architectural signage context                              |
| anchor | résumé    | resume             | 0.4840 | Recognizable double-acute anchor but lower travel utility                      |
| anchor | naïve     | naive              | 0.4820 | Diaeresis contrast anchor but lower travel utility                             |
| anchor | Straße    | street             | 0.4626 | German street sign convention and eszett recognition                           |
| anchor | Bücher    | books              | 0.4422 | Shop and library context for ü                                                 |

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
