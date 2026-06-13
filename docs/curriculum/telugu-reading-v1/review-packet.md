# Telugu Reading Review Packet

Generated from `telugu-reading-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `telugu-reading-v1`
- Language tag: `te-Telu`
- Script: `Telu`
- Direction: `ltr`
- Target domains: food_cafe_menus, shop_labels, transit_signage, public_facilities, everyday_packaging

## Sources To Review

| Source                              | Kind                 | Use             | License                                                      | Notes                                                                                                                            |
| ----------------------------------- | -------------------- | --------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| unicode-telugu-block                | unicode_metadata     | scoring         | Unicode License reviewed for metadata use                    | Telugu block metadata for vowels, consonants, dependent signs, virama, numerals, and signs. Use as infrastructure metadata only. |
| cldr-te-exemplars                   | locale_metadata      | scoring         | Unicode License reviewed for metadata use                    | Telugu exemplar character and locale metadata. Confirm exact CLDR release before ingestion.                                      |
| wordfreq-te                         | frequency            | scoring_only    | MIT package license; upstream corpus licenses require review | Broad frequency intuition only. Do not ship derived upstream example text.                                                       |
| telugu-wiktionary                   | lexicon              | discovery_only  | CC BY-SA; attribution and share-alike review required        | Gloss and spelling discovery only until attribution and share-alike implications are approved.                                   |
| openstreetmap-telugu-names          | environmental_print  | scoring_only    | ODbL; derived-data obligations require review                | Place, transit, and facility-name validation for Telugu-language signage. Do not ship raw extracts without license review.       |
| indic-nlp-library-te                | segmentation_tooling | scoring_only    | MIT package license; bundled resources require review        | Potential tokenizer and normalization aid for analysis only. Confirm maintained behavior before pipeline use.                    |
| app-authored-telugu-domain-examples | authored_examples    | shipped_content | app_owned                                                    | Short menu, sign, and label examples authored by Glyphin after reviewer approval.                                                |

## Candidate Highlights

| Type   | Candidate | Gloss        | Score  | Notes                                                     |
| ------ | --------- | ------------ | ------ | --------------------------------------------------------- |
| anchor | నీరు      | water        | 0.6312 | Survival word and strong vowel-sign practice              |
| anchor | పాలు      | milk         | 0.6064 | Short menu word for pa la and u sign review               |
| anchor | టీ        | tea          | 0.6008 | Very compact cafe anchor with long ii sign                |
| anchor | కాఫీ      | coffee       | 0.5352 | Cafe loanword with long aa and long ii                    |
| anchor | ధర        | price        | 0.5252 | Shopping anchor with aspirated consonant review           |
| anchor | మందు      | medicine     | 0.5244 | Useful pharmacy concept with nasal cluster awareness      |
| anchor | రైలు      | train        | 0.5228 | Transit anchor and ai sign practice                       |
| anchor | అన్నం     | rice or meal | 0.4820 | Food staple but doubled consonant and anusvara add load   |
| anchor | దుకాణం    | shop         | 0.4508 | Core domain word with long aa and anusvara                |
| anchor | హోటల్     | hotel        | 0.4044 | Common sign loanword but adds o sign and final virama     |
| anchor | బస్       | bus          | 0.4008 | Transit loanword and virama endpoint                      |
| anchor | ప్రవేశం   | entrance     | 0.3332 | High signage utility but pr conjunct and sha make it late |
| anchor | ఆసుపత్రి  | hospital     | 0.3112 | Facility anchor with vowel signs and tri conjunct         |
| anchor | ఫార్మసీ   | pharmacy     | 0.2444 | Useful loanword but includes fa and rma cluster           |
| anchor | నిష్క్రమణ | exit         | 0.2288 | Essential sign concept but has dense conjunct load        |

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
