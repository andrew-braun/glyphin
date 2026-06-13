# Tifinagh Reading Review Packet

Generated from `tifinagh-reading-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `tifinagh-reading-v1`
- Language tag: `zgh-Tfng`
- Script: `Tfng`
- Direction: `ltr`
- Target domains: public_signage, school_primer_words, cultural_site_labels, food_market_words, everyday_labels

## Sources To Review

| Source                                | Kind                  | Use             | License                                               | Notes                                                                                                             |
| ------------------------------------- | --------------------- | --------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| unicode-tifinagh-block                | unicode_metadata      | scoring         | Unicode License reviewed for metadata use             | Tifinagh block metadata for code point inventory and font QA.                                                     |
| cldr-zgh-exemplars                    | locale_metadata       | scoring         | Unicode License reviewed for metadata use             | Standard Moroccan Amazigh exemplar and locale metadata. Confirm exact CLDR release before ingestion.              |
| irc-amazigh-references                | orthography_reference | discovery_only  | site and publication licenses require review          | Potential reference for Neo-Tifinagh standardization and vocabulary. Discovery only until license review.         |
| wiktionary-tamazight-discovery        | lexicon               | discovery_only  | CC BY-SA; attribution and share-alike review required | Useful for gloss and spelling checks only. Do not ship copied entries.                                            |
| openstreetmap-tifinagh-names          | environmental_print   | scoring_only    | ODbL; derived-data obligations require review         | Potential validation source for public labels and place names. Do not ship raw extracts.                          |
| app-authored-tifinagh-domain-examples | authored_examples     | shipped_content | app_owned                                             | Short reviewed examples authored by Glyphin from approved vocabulary rather than copied from third-party corpora. |

## Candidate Highlights

| Type   | Candidate | Gloss     | Score  | Notes                                                    |
| ------ | --------- | --------- | ------ | -------------------------------------------------------- |
| anchor | ⴰⵎⴰⵏ      | water     | 0.6676 | Compact survival word with high vowel and m n payoff     |
| anchor | ⴰⵣⵓⵍ      | hello     | 0.5224 | Memorable greeting with identity value and easy units    |
| anchor | ⴰⵎⴰⵣⵉⵖ    | Amazigh   | 0.4696 | Core identity anchor but gh pronunciation needs review   |
| anchor | ⴰⵙⵉⴼ      | river     | 0.4168 | Short environmental word with s i f                      |
| anchor | ⴰⵙⵓⴳ      | market    | 0.4136 | Market anchor with clear signs value after g             |
| anchor | ⴰⵖⵔⵓⵎ     | bread     | 0.3932 | Useful food anchor with gh and r load                    |
| anchor | ⵜⵉⵏⵎⵍ     | school    | 0.3316 | Primer-friendly word after t i n m l                     |
| anchor | ⵜⴰⵎⴰⵣⵉⵖⵜ  | Tamazight | 0.3160 | Identity anchor with feminine frame and gh review        |
| anchor | ⵜⴰⴷⴷⴰⵔⵜ   | house     | 0.3140 | Useful but gemination and feminine frame add load        |
| anchor | ⴰⵔⴳⴰⵣ     | man       | 0.3112 | Useful for primer text but less target-domain urgent     |
| anchor | ⵜⴰⵎⴷⵉⵏⵜ   | city      | 0.3060 | Public text payoff but long and morphology-heavy         |
| anchor | ⵜⴰⵎⵖⴰⵔⵜ   | woman     | 0.1380 | Late primer word because gh and morphology load are high |

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
