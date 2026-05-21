# Khmer Reading Review Packet

Generated from `khmer-reading-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `khmer-reading-v1`
- Language tag: `km-Khmr`
- Script: `Khmr`
- Direction: `ltr`
- Target domains: food_cafe_menus, market_shop_signs, transit_wayfinding, public_facilities, everyday_packaging

## Sources To Review

| Source                             | Kind                 | Use             | License                                                      | Notes                                                                                                                                                    |
| ---------------------------------- | -------------------- | --------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| unicode-khmer-block                | unicode_metadata     | scoring         | Unicode License reviewed for metadata use                    | Khmer block metadata for consonants, independent vowels, dependent vowels, coeng, signs, numerals, and punctuation. Use as infrastructure metadata only. |
| cldr-km-exemplars                  | locale_metadata      | scoring         | Unicode License reviewed for metadata use                    | Khmer exemplar and locale metadata. Confirm exact CLDR release before ingestion.                                                                         |
| wordfreq-km                        | frequency            | scoring_only    | MIT package license; upstream corpus licenses require review | Broad Khmer frequency intuition only. Do not ship derived upstream example text.                                                                         |
| khmer-wiktionary                   | lexicon              | discovery_only  | CC BY-SA; attribution and share-alike review required        | Gloss and spelling discovery only until attribution and share-alike implications are approved.                                                           |
| openstreetmap-cambodia-khmer-names | environmental_print  | scoring_only    | ODbL; derived-data obligations require review                | Place, transit, and facility-name validation for Khmer signage. Do not ship raw OSM extracts without review.                                             |
| khmer-tokenizer-tools              | segmentation_tooling | discovery_only  | tool and model licenses require review                       | Placeholder for a reviewed Khmer word segmenter. It is not a content source.                                                                             |
| app-authored-khmer-domain-examples | authored_examples    | shipped_content | app_owned                                                    | Short menu, market, sign, and label examples authored by GlyphBridge after reviewer approval.                                                            |

## Candidate Highlights

| Type   | Candidate   | Gloss         | Score  | Notes                                                                   |
| ------ | ----------- | ------------- | ------ | ----------------------------------------------------------------------- |
| anchor | បាយ         | rice / meal   | 0.6494 | Strong food anchor with common base letters                             |
| anchor | ទឹក         | water         | 0.6010 | High survival utility and early vowel-placement payoff                  |
| anchor | តែ          | tea           | 0.5986 | Compact cafe anchor for preposed vowel practice                         |
| anchor | សាលា        | school        | 0.5210 | Useful sign word after aa signs and s/l are known                       |
| anchor | ចូល         | enter / go in | 0.4970 | Public sign verb with below vowel sign                                  |
| anchor | ចេញ         | exit / go out | 0.4470 | Pairs naturally with enter and teaches exit chunk                       |
| anchor | ផ្សារ       | market        | 0.4010 | High environmental-print payoff with subscript complexity               |
| anchor | ផ្លូវ       | road          | 0.3482 | Wayfinding anchor but requires coeng cluster and vowel review           |
| anchor | កាហ្វេ      | coffee        | 0.3406 | Familiar cafe word but needs coeng and loan spelling review             |
| anchor | រថយន្ត      | car / vehicle | 0.3258 | Transit word with final cluster behavior                                |
| anchor | បង្គន់      | toilet        | 0.2990 | Essential facility word but dense for early lessons                     |
| anchor | សណ្ឋាគារ    | hotel         | 0.1978 | Useful hotel sign with high cluster and length load                     |
| anchor | ភោជនីយដ្ឋាន | restaurant    | 0.1394 | Formal restaurant word is late because it is long and cluster-heavy     |
| anchor | មន្ទីរពេទ្យ | hospital      | 0.1282 | Important facility anchor but requires advanced cluster support         |
| anchor | ឱសថស្ថាន    | pharmacy      | 0.0898 | High-value facility word to defer until clusters and carriers are known |

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
