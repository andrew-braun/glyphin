# Burmese Myanmar Reading Review Packet

Generated from `burmese-myanmar-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `burmese-myanmar-v1`
- Language tag: `my-Mymr`
- Script: `Mymr`
- Direction: `ltr`
- Target domains: food_tea_shop_menus, shop_storefronts, market_price_signs, transit_wayfinding, public_facilities, lodging_signage

## Sources To Review

| Source                               | Kind                 | Use             | License                                                      | Notes                                                                                                                                            |
| ------------------------------------ | -------------------- | --------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| unicode-myanmar-block                | unicode_metadata     | scoring         | Unicode License reviewed for metadata use                    | Myanmar block metadata for consonants, vowels, medials, asat, signs, numerals, punctuation, and extensions. Use as infrastructure metadata only. |
| cldr-my-exemplars                    | locale_metadata      | scoring         | Unicode License reviewed for metadata use                    | Myanmar exemplar and locale metadata. Confirm exact CLDR release before ingestion.                                                               |
| wordfreq-my                          | frequency            | scoring_only    | MIT package license; upstream corpus licenses require review | Broad Burmese frequency intuition only. Do not ship derived upstream example text.                                                               |
| myanmar-wiktionary                   | lexicon              | discovery_only  | CC BY-SA; attribution and share-alike review required        | Gloss and spelling discovery only until attribution and share-alike implications are approved.                                                   |
| openstreetmap-myanmar-burmese-names  | environmental_print  | scoring_only    | ODbL; derived-data obligations require review                | Place, transit, lodging, and facility-name validation for Burmese signage. Do not ship raw OSM extracts without review.                          |
| burmese-segmentation-tools           | segmentation_tooling | discovery_only  | tool and model licenses require review                       | Placeholder for a reviewed Burmese word segmenter. It is not a content source.                                                                   |
| app-authored-burmese-domain-examples | authored_examples    | shipped_content | app_owned                                                    | Short tea-shop, menu, sign, transit, and label examples authored by GlyphBridge after reviewer approval.                                         |

## Candidate Highlights

| Type   | Candidate | Gloss          | Score  | Notes                                                       |
| ------ | --------- | -------------- | ------ | ----------------------------------------------------------- |
| anchor | ရေ        | water          | 0.6894 | High survival word with preposed vowel sign                 |
| anchor | ဆိုင်     | shop           | 0.5418 | Storefront anchor with vowel-sign and final behavior        |
| anchor | လမ်း      | road           | 0.5038 | Wayfinding anchor with final and tone mark behavior         |
| anchor | ဈေး       | market / price | 0.5006 | Market and price anchor with distinct letter needing review |
| anchor | ဝင်       | enter          | 0.4894 | Compact entrance verb with final mark                       |
| anchor | ထမင်း     | rice / meal    | 0.4634 | Core food anchor with tone mark and final nasal behavior    |
| anchor | ပိတ်      | closed         | 0.4530 | Pairs with open and reinforces asat final behavior          |
| anchor | ကော်ဖီ    | coffee         | 0.3966 | Familiar cafe word with vowel and mark stacking             |
| anchor | ဟိုတယ်    | hotel          | 0.3878 | Lodging anchor with familiar loanword shape                 |
| anchor | ထွက်      | exit           | 0.3614 | Pairs with enter and introduces medial or vowel complexity  |
| anchor | ဆေးရုံ    | hospital       | 0.3394 | Public facility word with vowel and tone signs              |
| anchor | အိမ်သာ    | toilet         | 0.3362 | Essential facility word with carrier and asat load          |
| anchor | လက်ဖက်ရည် | tea            | 0.2498 | High cultural utility but long and asat-heavy               |
| anchor | ဖွင့်     | open           | 0.2426 | Shop sign word but requires medial and tone-mark review     |
| anchor | ဘတ်စ်ကား  | bus            | 0.2326 | Transit loanword with asat and cluster load                 |

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
