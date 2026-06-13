# Thai Reading Review Packet

Generated from `thai-reading-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `thai-reading-v1`
- Language tag: `th-Thai`
- Script: `Thai`
- Direction: `ltr`
- Target domains: restaurant_menus, street_storefronts, market_price_signs, transit_wayfinding, public_facilities, everyday_labels

## Sources To Review

| Source                            | Kind                 | Use             | License                                                      | Notes                                                                                                                                        |
| --------------------------------- | -------------------- | --------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| runtime-thai-course               | runtime_seed         | shipped_content | app_owned                                                    | Existing Glyphin Thai runtime lessons. Treat as the source of truth for this backfill packet.                                                |
| thai-curriculum-strategy          | curriculum_reference | scoring         | app_owned                                                    | Durable Thai sequencing rationale for frequency first consonants, vowel placement, tones as sight words, and environmental-print validation. |
| unicode-thai-block                | unicode_metadata     | scoring         | Unicode License reviewed for metadata use                    | Thai code point, vowel sign, tone mark, numeral, and punctuation metadata for infrastructure checks.                                         |
| cldr-th-exemplars                 | locale_metadata      | scoring         | Unicode License reviewed for metadata use                    | Thai exemplar and locale metadata. Confirm exact CLDR release before ingestion.                                                              |
| wordfreq-th                       | frequency            | scoring_only    | MIT package license; upstream corpus licenses require review | Broad Thai frequency intuition only. Do not ship derived upstream examples.                                                                  |
| pythainlp                         | tokenizer_tool       | discovery_only  | Apache 2.0 package license                                   | Future tokenizer and syllable review tool. It is not a content source.                                                                       |
| thai-language-reference           | lexicon_reference    | discovery_only  | site terms require review before derived use                 | Useful for consonant classes, final sounds, and gloss checks. Keep discovery-only until terms are reviewed.                                  |
| app-authored-thai-domain-examples | authored_examples    | shipped_content | app_owned                                                    | Short menu, sign, and label examples authored by Glyphin rather than copied from third-party corpora.                                        |

## Candidate Highlights

| Type   | Candidate | Gloss         | Score  | Notes                                                         |
| ------ | --------- | ------------- | ------ | ------------------------------------------------------------- |
| anchor | กิน       | to eat        | 0.7468 | Runtime lesson 3 and core food verb                           |
| anchor | ดี        | good          | 0.7320 | Runtime lesson 2 and above vowel intro                        |
| anchor | ร้าน      | shop          | 0.7028 | Runtime lesson 7 and storefront anchor                        |
| anchor | สิบ       | ten           | 0.7024 | Runtime lesson 9 and price reading payoff                     |
| anchor | มาก       | very / a lot  | 0.6912 | Runtime lesson 1 high payoff word for final k and long aa     |
| anchor | ผัก       | vegetable     | 0.6742 | Runtime support word for ผัด and menu expansion               |
| anchor | ผัด       | stir-fry      | 0.6696 | Runtime lesson 13 and high value cooking word                 |
| anchor | บิน       | to fly        | 0.6560 | Runtime lesson 5 reuses the in frame                          |
| anchor | ข้าว      | rice          | 0.6508 | Runtime lesson 10 and essential Thai menu word                |
| anchor | ชุด       | set / combo   | 0.6252 | Runtime lesson 8 and below short u in menu contexts           |
| anchor | ตลาด      | market        | 0.6152 | Runtime lesson 4 and hidden vowel plus market signage         |
| anchor | หมู       | pork          | 0.5908 | Runtime lesson 11 and leading H pattern                       |
| anchor | แม่       | mother        | 0.5780 | Runtime lesson 6 introduces before vowel and mai ek tone mark |
| anchor | ออก       | exit / go out | 0.5598 | Runtime support word and public wayfinding gap                |
| anchor | อาหาร     | food          | 0.5544 | Runtime lesson 12 and silent carrier plus final r to n        |
| anchor | ร้านอาหาร | restaurant    | 0.4926 | High payoff compound assembled from runtime anchors           |

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
