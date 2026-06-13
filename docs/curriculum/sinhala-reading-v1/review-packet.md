# Sinhala Reading Review Packet

Generated from `sinhala-reading-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `sinhala-reading-v1`
- Language tag: `si-Sinh`
- Script: `Sinh`
- Direction: `ltr`
- Target domains: tea_food_menus, shop_price_signs, transit_wayfinding, public_facilities, lodging_signage, school_civic_labels

## Sources To Review

| Source                                | Kind                 | Use             | License                                                      | Notes                                                                                                                                      |
| ------------------------------------- | -------------------- | --------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| unicode-sinhala-block                 | unicode_metadata     | scoring         | Unicode License reviewed for metadata use                    | Sinhala block metadata for vowels, consonants, dependent signs, al-lakuna, numerals, and punctuation. Use as infrastructure metadata only. |
| cldr-si-exemplars                     | locale_metadata      | scoring         | Unicode License reviewed for metadata use                    | Sinhala exemplar and locale metadata. Confirm exact CLDR release before ingestion.                                                         |
| wordfreq-si                           | frequency            | scoring_only    | MIT package license; upstream corpus licenses require review | Broad Sinhala frequency intuition only. Do not ship derived upstream example text.                                                         |
| sinhala-wiktionary                    | lexicon              | discovery_only  | CC BY-SA; attribution and share-alike review required        | Gloss and spelling discovery only until attribution and share-alike implications are approved.                                             |
| openstreetmap-sri-lanka-sinhala-names | environmental_print  | scoring_only    | ODbL; derived-data obligations require review                | Place, transit, school, lodging, and facility-name validation for Sinhala signage. Do not ship raw OSM extracts without review.            |
| indic-nlp-library-si                  | segmentation_tooling | scoring_only    | MIT package license; bundled resources require review        | Potential normalization or segmentation aid for analysis only. Confirm Sinhala coverage before pipeline use.                               |
| app-authored-sinhala-domain-examples  | authored_examples    | shipped_content | app_owned                                                    | Short tea, menu, sign, transit, and label examples authored by Glyphin after reviewer approval.                                            |

## Candidate Highlights

| Type   | Candidate | Gloss          | Score  | Notes                                                         |
| ------ | --------- | -------------- | ------ | ------------------------------------------------------------- |
| anchor | තේ        | tea            | 0.6842 | Compact high-payoff tea anchor                                |
| anchor | බත්       | rice / meal    | 0.6242 | Core food word and first al-lakuna payoff                     |
| anchor | මිල       | price          | 0.6182 | Compact price label anchor                                    |
| anchor | පාර       | road           | 0.6078 | Wayfinding anchor with transparent aa frame                   |
| anchor | වතුර      | water          | 0.5898 | Survival word with multiple reusable consonants               |
| anchor | බස්       | bus            | 0.5870 | Transit loanword with al-lakuna final                         |
| anchor | කඩේ       | shop           | 0.5610 | Useful storefront anchor with e vowel sign                    |
| anchor | පාසල      | school         | 0.5530 | School and civic label word with simple frames                |
| anchor | වසා       | closed         | 0.4994 | Pairs with open and uses known consonants                     |
| anchor | කෝපි      | coffee         | 0.4970 | Familiar cafe word and multi-part vowel sign practice         |
| anchor | රෝහල      | hospital       | 0.4818 | Public facility word with reusable hotel-like chunks          |
| anchor | හෝටලය     | hotel          | 0.4030 | Lodging anchor with loanword familiarity and vowel signs      |
| anchor | දුම්රිය   | train          | 0.3310 | High transit utility but cluster and sign load make it later  |
| anchor | ඇතුල්     | enter / inside | 0.3274 | Useful entrance concept but needs vowel and final-mark review |
| anchor | පිටවීම    | exit           | 0.2894 | Public-sign anchor with long morphology and vowel signs       |
| anchor | විවෘත     | open           | 0.2786 | Shop sign word best handled after vowel and cluster review    |
| anchor | වැසිකිළිය | toilet         | 0.2110 | Essential facility word but long and visually dense           |

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
