# Amharic Ethiopic Reading Review Packet

Generated from `amharic-ethiopic-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `amharic-ethiopic-v1`
- Language tag: `am-Ethi`
- Script: `Ethi`
- Direction: `ltr`
- Target domains: food_and_cafe_menus, street_and_market_signage, transit_wayfinding, public_facilities, everyday_labels, names_and_place_labels

## Sources To Review

| Source                         | Kind              | Use             | License                                                        | Notes                                                                                                 |
| ------------------------------ | ----------------- | --------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| unicode-ethiopic-blocks        | unicode_metadata  | scoring         | Unicode License reviewed for metadata use                      | Ethiopic, Ethiopic Supplement, and Ethiopic Extended metadata for code points and rendering checks.   |
| cldr-am-exemplars              | locale_metadata   | scoring         | Unicode License reviewed for metadata use                      | Amharic exemplar characters and locale metadata. Confirm exact CLDR release before ingestion.         |
| wordfreq-am                    | frequency         | scoring_only    | MIT package license; upstream corpus licenses require review   | Broad Amharic frequency intuition only. Do not ship derived corpus examples.                          |
| leipzig-amharic                | frequency_corpus  | scoring_only    | Leipzig corpus terms require review before derived publication | Useful broad frequency cross-check. Register and license require review.                              |
| amharic-wiktionary             | lexicon           | discovery_only  | CC BY-SA; attribution and share-alike review required          | Gloss and spelling discovery only until attribution obligations are approved.                         |
| universal-dependencies-amharic | treebank          | discovery_only  | treebank license requires review before derived use            | Potential morphology and tokenization reference. Weak direct domain match for traveler-first lessons. |
| app-authored-amharic-examples  | authored_examples | shipped_content | app_owned                                                      | Short menu, market, transit, and facility examples authored by Glyphin after Amharic speaker review.  |

## Candidate Highlights

| Type   | Candidate | Gloss             | Score  | Notes                                                       |
| ------ | --------- | ----------------- | ------ | ----------------------------------------------------------- |
| anchor | ቡና        | coffee            | 0.6636 | High memorability first food and cafe anchor                |
| anchor | ሻይ        | tea               | 0.6348 | Short beverage anchor with clear syllables                  |
| anchor | ውሃ        | water             | 0.6340 | Survival word and sixth order w behavior                    |
| anchor | ዋጋ        | price             | 0.6244 | Short commerce word for price labels                        |
| anchor | ቤት        | house / place     | 0.5928 | Compact place word and fifth plus sixth order contrast      |
| anchor | ሴት        | woman / female    | 0.5692 | Public facility category and fifth order se                 |
| anchor | ገበያ       | market            | 0.5584 | Market sign anchor and first order repetition               |
| anchor | መኪና       | car               | 0.5548 | Transit adjacent anchor and m family prefix                 |
| anchor | ምግብ       | food              | 0.5228 | Core food word but consonant cluster like reading load      |
| anchor | ሆቴል       | hotel             | 0.4960 | Traveler facility loanword with fifth and seventh order     |
| anchor | ወንድ       | man / male        | 0.4936 | Pairs with ሴት and adds sixth order nasal sequence           |
| anchor | መንገድ      | road / way        | 0.4752 | Wayfinding word and common m prefix pattern                 |
| anchor | ታክሲ       | taxi              | 0.4656 | High traveler utility but loanword and new letters add load |
| anchor | መውጫ       | exit              | 0.4588 | Public sign word with ጫ and movement noun pattern           |
| anchor | መግቢያ      | entrance          | 0.3920 | Pairs with exit but has high new unit load                  |
| anchor | እንጀራ      | injera            | 0.3360 | Culturally central food word but too much new load early    |
| anchor | አውቶቡስ     | bus               | 0.2888 | Transit utility but complex loanword sequence               |
| anchor | መጸዳጃ      | restroom / toilet | 0.1972 | Important facility word but late due to length and forms    |

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
