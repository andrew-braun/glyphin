# Hindi Devanagari Reading Review Packet

Generated from `hindi-devanagari-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `hindi-devanagari-v1`
- Language tag: `hi-Deva`
- Script: `Deva`
- Direction: `ltr`
- Target domains: food_cafe_menus, transit_signage, public_facilities, everyday_labels, public_safety_labels

## Sources To Review

| Source                             | Kind                                  | Use             | License                                                      | Notes                                                                                                                       |
| ---------------------------------- | ------------------------------------- | --------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| unicode-devanagari-block           | unicode_metadata                      | scoring         | Unicode License reviewed for metadata use                    | Devanagari block metadata for code points, combining signs, virama, nukta, and digits. Use as infrastructure metadata only. |
| cldr-hi-exemplars                  | locale_metadata                       | scoring         | Unicode License reviewed for metadata use                    | Hindi exemplar characters, numbering, and locale behavior. Confirm exact CLDR release before ingestion.                     |
| wordfreq-hi                        | frequency                             | scoring_only    | MIT package license; upstream corpus licenses require review | Broad Hindi frequency intuition. Do not ship derived upstream example text.                                                 |
| indic-nlp-library-hi               | tokenizer_transliteration_tool        | discovery_only  | MIT package license reviewed for tooling use                 | Useful for Hindi normalization and transliteration experiments. It is a tool source, not shipped curriculum text.           |
| dakshina-hi                        | transliteration_pronunciation_dataset | discovery_only  | CC BY-SA 4.0; attribution and share-alike review required    | Useful for romanization and pronunciation discovery only until share-alike implications are reviewed.                       |
| hindi-wiktionary                   | lexicon                               | discovery_only  | CC BY-SA; attribution and share-alike review required        | Gloss and spelling discovery only. Keep out of shipped content until license obligations are approved.                      |
| openstreetmap-india-names          | environmental_print                   | scoring_only    | ODbL; derived-data obligations require review                | Useful for transit, street, market, and public facility validation. Do not ship raw extracts without review.                |
| app-authored-hindi-domain-examples | authored_examples                     | shipped_content | app_owned                                                    | Short menu, sign, and label examples authored by Glyphin after reviewer validation.                                         |

## Candidate Highlights

| Type   | Candidate | Gloss      | Score  | Notes                                                            |
| ------ | --------- | ---------- | ------ | ---------------------------------------------------------------- |
| anchor | बस        | bus        | 0.7608 | Transit word that demonstrates inherent vowel in both consonants |
| anchor | नाम       | name       | 0.6970 | High frequency and useful for forms and labels                   |
| anchor | पानी      | water      | 0.6950 | Survival menu anchor with प ा न ी                                |
| anchor | चाय       | tea        | 0.6854 | Compact cafe anchor with matra and glide                         |
| anchor | रेल       | rail train | 0.6850 | Transit anchor for e matra and ल                                 |
| anchor | दाल       | lentils    | 0.6474 | Menu anchor with द ा ल                                           |
| anchor | दुकान     | shop       | 0.6098 | Everyday label with u matra and long aa                          |
| anchor | होटल      | hotel      | 0.5850 | Loanword signage anchor for ओ and retroflex ट                    |
| anchor | रोटी      | flatbread  | 0.5838 | High menu utility with ओ matra and retroflex ट                   |
| anchor | निकास     | exit       | 0.5482 | Public sign anchor with i matra and inherent vowel review        |
| anchor | खुला      | open       | 0.5350 | Shop sign word; kh needs aspirated contrast                      |
| anchor | बंद       | closed     | 0.5190 | Shop sign word with anusvara nasalization cue                    |
| anchor | बाज़ार    | market     | 0.5074 | Nukta word with strong real-world signage payoff                 |
| anchor | हिंदी     | Hindi      | 0.4674 | Meta anchor for anusvara and long ii once basics are known       |
| anchor | स्टेशन    | station    | 0.4284 | High transit utility but starts with conjunct cluster            |
| anchor | प्रवेश    | entrance   | 0.4002 | Essential public sign but conjunct and श load delay it           |
| anchor | शौचालय    | restroom   | 0.2842 | Essential facility word but too high-load for early lessons      |

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
