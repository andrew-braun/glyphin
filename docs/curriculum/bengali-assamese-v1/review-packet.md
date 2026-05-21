# Bengali-Assamese Reading Review Packet

Generated from `bengali-assamese-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `bengali-assamese-v1`
- Language tag: `bn-Beng`
- Script: `Beng`
- Direction: `ltr`
- Target domains: food_cafe_menus, transit_signage, public_facilities, everyday_labels, bengali_first_with_assamese_notes

## Sources To Review

| Source                               | Kind                           | Use             | License                                                      | Notes                                                                                                                      |
| ------------------------------------ | ------------------------------ | --------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| unicode-bengali-block                | unicode_metadata               | scoring         | Unicode License reviewed for metadata use                    | Bengali block metadata for code points, combining signs, hasanta, Bengali letters, and Assamese-specific letters.          |
| cldr-bn-as-exemplars                 | locale_metadata                | scoring         | Unicode License reviewed for metadata use                    | Bengali and Assamese exemplar comparison. Confirm exact CLDR release before ingestion.                                     |
| wordfreq-bn                          | frequency                      | scoring_only    | MIT package license; upstream corpus licenses require review | Broad Bengali frequency intuition. Do not ship derived upstream example text.                                              |
| indic-nlp-library-bn                 | tokenizer_transliteration_tool | discovery_only  | MIT package license reviewed for tooling use                 | Useful for Indic normalization and transliteration experiments. It is not a content corpus.                                |
| bn-wiktionary                        | lexicon                        | discovery_only  | CC BY-SA; attribution and share-alike review required        | Bengali spelling and gloss discovery only until share-alike implications are reviewed.                                     |
| as-wiktionary                        | lexicon                        | discovery_only  | CC BY-SA; attribution and share-alike review required        | Assamese contrast notes only. Do not use for shipped examples in Bengali-first v1 without separate review.                 |
| openstreetmap-bangladesh-assam-names | environmental_print            | scoring_only    | ODbL; derived-data obligations require review                | Place, transit, and public-signage validation across Bengali-script environments. Do not ship raw extracts without review. |
| app-authored-bengali-domain-examples | authored_examples              | shipped_content | app_owned                                                    | Bengali-first menu, sign, and label examples authored by GlyphBridge after reviewer validation.                            |

## Candidate Highlights

| Type   | Candidate | Gloss            | Score  | Notes                                                     |
| ------ | --------- | ---------------- | ------ | --------------------------------------------------------- |
| anchor | চা        | tea              | 0.7574 | Compact cafe anchor with চ and আ sign                     |
| anchor | বাস       | bus              | 0.7546 | Transit anchor with inherent vowel and স                  |
| anchor | নাম       | name             | 0.6842 | High-frequency form and label word                        |
| anchor | ভাত       | rice meal        | 0.6518 | Menu staple and inherent vowel checkpoint                 |
| anchor | দোকান     | shop             | 0.6202 | Everyday storefront anchor with ও sign                    |
| anchor | বাজার     | market           | 0.6050 | High sign payoff with ব জ র                               |
| anchor | পানি      | water            | 0.5802 | Useful in Bangladesh contexts; reviewer should compare জল |
| anchor | দুধ       | milk             | 0.5578 | Menu anchor with দ and vowel sign review                  |
| anchor | হোটেল     | hotel            | 0.5578 | Loanword signage with ও and এ signs                       |
| anchor | খোলা      | open             | 0.5350 | Shop sign word with খ and ও sign                          |
| anchor | রাস্তা    | road street      | 0.5018 | Signage word with conjunct load                           |
| anchor | বাংলা     | Bengali language | 0.4502 | Meta anchor for anusvara and language identity            |
| anchor | ট্রেন     | train            | 0.4326 | High transit utility but needs conjunct cluster           |
| anchor | স্কুল     | school           | 0.3950 | Everyday label but begins with conjunct cluster           |
| anchor | বন্ধ      | closed           | 0.3322 | High utility but conjunct and nasal signs make it late    |
| anchor | প্রবেশ    | entrance         | 0.3014 | Essential public sign but high conjunct load              |
| anchor | প্রস্থান  | exit             | 0.2786 | Pairs with entrance but should be late                    |

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
