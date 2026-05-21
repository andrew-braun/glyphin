# Kannada Reading Review Packet

Generated from `kannada-reading-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `kannada-reading-v1`
- Language tag: `kn-Knda`
- Script: `Knda`
- Direction: `ltr`
- Target domains: food_cafe_menus, shop_labels, transit_signage, public_facilities, everyday_packaging

## Sources To Review

| Source                               | Kind                 | Use             | License                                                      | Notes                                                                                                                             |
| ------------------------------------ | -------------------- | --------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| unicode-kannada-block                | unicode_metadata     | scoring         | Unicode License reviewed for metadata use                    | Kannada block metadata for vowels, consonants, dependent signs, virama, numerals, and signs. Use as infrastructure metadata only. |
| cldr-kn-exemplars                    | locale_metadata      | scoring         | Unicode License reviewed for metadata use                    | Kannada exemplar character and locale metadata. Confirm exact CLDR release before ingestion.                                      |
| wordfreq-kn                          | frequency            | scoring_only    | MIT package license; upstream corpus licenses require review | Broad frequency intuition only. Do not ship derived upstream example text.                                                        |
| kannada-wiktionary                   | lexicon              | discovery_only  | CC BY-SA; attribution and share-alike review required        | Gloss and spelling discovery only until attribution and share-alike implications are approved.                                    |
| openstreetmap-kannada-names          | environmental_print  | scoring_only    | ODbL; derived-data obligations require review                | Place, transit, and facility-name validation for Kannada-language signage. Do not ship raw extracts without license review.       |
| indic-nlp-library-kn                 | segmentation_tooling | scoring_only    | MIT package license; bundled resources require review        | Potential tokenizer and normalization aid for analysis only. Confirm maintained behavior before pipeline use.                     |
| app-authored-kannada-domain-examples | authored_examples    | shipped_content | app_owned                                                    | Short menu, sign, and label examples authored by GlyphBridge after reviewer approval.                                             |

## Candidate Highlights

| Type   | Candidate | Gloss        | Score  | Notes                                                          |
| ------ | --------- | ------------ | ------ | -------------------------------------------------------------- |
| anchor | ನೀರು      | water        | 0.6312 | Survival word and strong vowel-sign practice                   |
| anchor | ಹಾಲು      | milk         | 0.6064 | Short menu word for haa la and u sign review                   |
| anchor | ಚಹಾ       | tea          | 0.5564 | Short cafe anchor with clear consonant-vowel frames            |
| anchor | ಬೆಲೆ      | price        | 0.5476 | Shopping anchor with e signs and l review                      |
| anchor | ಕಾಫಿ      | coffee       | 0.5352 | Cafe loanword with long aa and i sign                          |
| anchor | ರೈಲು      | train        | 0.5228 | Transit anchor and ai sign practice                            |
| anchor | ಅನ್ನ      | rice or food | 0.4680 | Food staple but doubled consonant adds load                    |
| anchor | ಅಂಗಡಿ     | shop         | 0.4280 | Core domain word with anusvara and new retroflex stop          |
| anchor | ಬಸ್       | bus          | 0.4008 | Transit loanword and virama endpoint                           |
| anchor | ಹೋಟೆಲ್    | hotel        | 0.3816 | Common sign loanword but adds o sign and final virama          |
| anchor | ಪ್ರವೇಶ    | entrance     | 0.3332 | High signage utility but pr conjunct and sha make it late      |
| anchor | ಔಷಧಿ      | medicine     | 0.3080 | Useful pharmacy concept but includes less common vowel and sha |
| anchor | ಆಸ್ಪತ್ರೆ  | hospital     | 0.2884 | Facility anchor with spa and tre clusters                      |
| anchor | ನಿರ್ಗಮನ   | exit         | 0.2560 | Essential sign concept but has rga conjunct load               |
| anchor | ಶೌಚಾಲಯ    | toilet       | 0.2172 | Useful facility word but too many new signs for early lessons  |

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
