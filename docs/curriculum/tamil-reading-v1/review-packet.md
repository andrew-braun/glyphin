# Tamil Reading Review Packet

Generated from `tamil-reading-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `tamil-reading-v1`
- Language tag: `ta-Taml`
- Script: `Taml`
- Direction: `ltr`
- Target domains: food_cafe_menus, shop_labels, transit_signage, public_facilities, everyday_packaging

## Sources To Review

| Source                             | Kind                 | Use             | License                                                      | Notes                                                                                                                                  |
| ---------------------------------- | -------------------- | --------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| unicode-tamil-block                | unicode_metadata     | scoring         | Unicode License reviewed for metadata use                    | Tamil block metadata for vowels, consonants, dependent signs, aytham, pulli, numerals, and signs. Use as infrastructure metadata only. |
| cldr-ta-exemplars                  | locale_metadata      | scoring         | Unicode License reviewed for metadata use                    | Tamil exemplar character and locale metadata. Confirm exact CLDR release before ingestion.                                             |
| wordfreq-ta                        | frequency            | scoring_only    | MIT package license; upstream corpus licenses require review | Broad frequency intuition only. Do not ship derived upstream example text.                                                             |
| tamil-wiktionary                   | lexicon              | discovery_only  | CC BY-SA; attribution and share-alike review required        | Gloss and spelling discovery only until attribution and share-alike implications are approved.                                         |
| openstreetmap-tamil-names          | environmental_print  | scoring_only    | ODbL; derived-data obligations require review                | Place, transit, and facility-name validation for Tamil-language signage. Do not ship raw extracts without license review.              |
| indic-nlp-library-ta               | segmentation_tooling | scoring_only    | MIT package license; bundled resources require review        | Potential tokenizer and normalization aid for analysis only. Confirm maintained behavior before pipeline use.                          |
| app-authored-tamil-domain-examples | authored_examples    | shipped_content | app_owned                                                    | Short menu, sign, and label examples authored by Glyphin after reviewer approval.                                                      |

## Candidate Highlights

| Type   | Candidate  | Gloss           | Score  | Notes                                                            |
| ------ | ---------- | --------------- | ------ | ---------------------------------------------------------------- |
| anchor | கடை        | shop            | 0.6572 | Compact first win for consonant bases and ai sign                |
| anchor | விலை       | price           | 0.5956 | Shopping anchor with i and ai-style visual review                |
| anchor | காபி       | coffee          | 0.5868 | Common cafe loanword and early long-aa plus i practice           |
| anchor | பால்       | milk            | 0.5852 | Teaches long aa and pulli in a short menu word                   |
| anchor | அரிசி      | rice            | 0.5772 | Food staple with independent vowel and repeated i signs          |
| anchor | தேநீர்     | tea             | 0.5128 | High cafe utility but needs pre-base e and long ii               |
| anchor | உணவு       | food            | 0.5092 | Essential menu concept but adds retroflex nasal                  |
| anchor | ரயில்      | train           | 0.4856 | Transit payoff and pulli review                                  |
| anchor | மருந்து    | medicine        | 0.4296 | Useful pharmacy anchor but includes several new signs            |
| anchor | பஸ்        | bus             | 0.4084 | Loanword with pulli and final s loan-letter issue                |
| anchor | தண்ணீர்    | water           | 0.3772 | Survival word but geminate retroflex nasal makes it later        |
| anchor | மருந்தகம்  | pharmacy        | 0.3460 | Facility word should wait until medicine chunks are familiar     |
| anchor | நுழைவு     | entrance        | 0.3108 | High signage utility but introduces ழ and ai sign                |
| anchor | வெளியே     | exit or outside | 0.3004 | Useful sign word but needs pre-base e and retroflex lateral      |
| anchor | கழிப்பிடம் | toilet          | 0.2132 | Essential facility anchor but high load from ழ and doubled signs |

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
