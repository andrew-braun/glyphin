# Lao Reading Review Packet

Generated from `lao-reading-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `lao-reading-v1`
- Language tag: `lo-Laoo`
- Script: `Laoo`
- Direction: `ltr`
- Target domains: food_cafe_menus, market_price_signs, shop_storefronts, transit_wayfinding, public_facilities, lodging_signage

## Sources To Review

| Source                           | Kind                 | Use             | License                                                      | Notes                                                                                                                         |
| -------------------------------- | -------------------- | --------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| unicode-lao-block                | unicode_metadata     | scoring         | Unicode License reviewed for metadata use                    | Lao block metadata for consonants, vowels, tone marks, signs, numerals, and punctuation. Use as infrastructure metadata only. |
| cldr-lo-exemplars                | locale_metadata      | scoring         | Unicode License reviewed for metadata use                    | Lao exemplar and locale metadata. Confirm exact CLDR release before ingestion.                                                |
| wordfreq-lo                      | frequency            | scoring_only    | MIT package license; upstream corpus licenses require review | Broad Lao frequency intuition only. Do not ship derived upstream example text.                                                |
| lao-wiktionary                   | lexicon              | discovery_only  | CC BY-SA; attribution and share-alike review required        | Gloss and spelling discovery only until attribution and share-alike implications are approved.                                |
| openstreetmap-laos-lao-names     | environmental_print  | scoring_only    | ODbL; derived-data obligations require review                | Place, transit, lodging, and facility-name validation for Lao signage. Do not ship raw OSM extracts without review.           |
| lao-tokenizer-tools              | segmentation_tooling | discovery_only  | tool and model licenses require review                       | Placeholder for a reviewed Lao tokenizer or word segmenter. It is not a content source.                                       |
| app-authored-lao-domain-examples | authored_examples    | shipped_content | app_owned                                                    | Short menu, sign, market, and label examples authored by GlyphBridge after reviewer approval.                                 |

## Candidate Highlights

| Type   | Candidate | Gloss             | Score  | Notes                                                                |
| ------ | --------- | ----------------- | ------ | -------------------------------------------------------------------- |
| anchor | ລາຄາ      | price             | 0.6134 | Market anchor with transparent repeated aa sign                      |
| anchor | ກາເຟ      | coffee            | 0.5942 | Familiar cafe word and preposed vowel practice                       |
| anchor | ນ້ຳ       | water             | 0.5766 | Essential survival word with tone mark and am sign                   |
| anchor | ອອກ       | exit / out        | 0.5666 | Clear exit anchor with repeated carrier shape                        |
| anchor | ທາງ       | road / way        | 0.5638 | Wayfinding anchor with final nasal behavior                          |
| anchor | ອາຫານ     | food              | 0.5390 | Useful food category word with carrier and h behavior                |
| anchor | ລົດ       | vehicle / car     | 0.5326 | Transit word with compact closed syllable                            |
| anchor | ຮ້ານ      | shop / restaurant | 0.5230 | Storefront anchor with tone mark and long vowel                      |
| anchor | ປິດ       | closed            | 0.4826 | Pairs with open and reinforces final d spelling                      |
| anchor | ເຂົ້າ     | rice / food       | 0.4758 | High utility but heavy tone and vowel-frame load                     |
| anchor | ເປີດ      | open              | 0.4226 | Useful shop sign after preposed vowels and final consonants          |
| anchor | ເຂົ້າ     | enter             | 0.4026 | Pairs with exit but collides semantically with rice and needs review |
| anchor | ຕະຫຼາດ    | market            | 0.3730 | High payoff market word with leading h and cluster behavior          |
| anchor | ໂຮງແຮມ    | hotel             | 0.3350 | Lodging anchor with preposed vowels and compound chunks              |
| anchor | ຫ້ອງນ້ຳ   | toilet / bathroom | 0.2608 | Essential facility phrase but high combining-mark load               |

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
