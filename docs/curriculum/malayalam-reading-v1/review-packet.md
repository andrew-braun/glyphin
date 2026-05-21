# Malayalam Reading Review Packet

Generated from `malayalam-reading-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `malayalam-reading-v1`
- Language tag: `ml-Mlym`
- Script: `Mlym`
- Direction: `ltr`
- Target domains: food_cafe_menus, shop_labels, transit_signage, public_facilities, everyday_packaging

## Sources To Review

| Source                                 | Kind                 | Use             | License                                                      | Notes                                                                                                                                              |
| -------------------------------------- | -------------------- | --------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| unicode-malayalam-block                | unicode_metadata     | scoring         | Unicode License reviewed for metadata use                    | Malayalam block metadata for vowels, consonants, dependent signs, chandrakkala, chillus, numerals, and signs. Use as infrastructure metadata only. |
| cldr-ml-exemplars                      | locale_metadata      | scoring         | Unicode License reviewed for metadata use                    | Malayalam exemplar character and locale metadata. Confirm exact CLDR release before ingestion.                                                     |
| wordfreq-ml                            | frequency            | scoring_only    | MIT package license; upstream corpus licenses require review | Broad frequency intuition only. Do not ship derived upstream example text.                                                                         |
| malayalam-wiktionary                   | lexicon              | discovery_only  | CC BY-SA; attribution and share-alike review required        | Gloss and spelling discovery only until attribution and share-alike implications are approved.                                                     |
| openstreetmap-malayalam-names          | environmental_print  | scoring_only    | ODbL; derived-data obligations require review                | Place, transit, and facility-name validation for Malayalam-language signage. Do not ship raw extracts without license review.                      |
| indic-nlp-library-ml                   | segmentation_tooling | scoring_only    | MIT package license; bundled resources require review        | Potential tokenizer and normalization aid for analysis only. Confirm maintained behavior before pipeline use.                                      |
| app-authored-malayalam-domain-examples | authored_examples    | shipped_content | app_owned                                                    | Short menu, sign, and label examples authored by GlyphBridge after reviewer approval.                                                              |

## Candidate Highlights

| Type   | Candidate | Gloss           | Score  | Notes                                                           |
| ------ | --------- | --------------- | ------ | --------------------------------------------------------------- |
| anchor | കട        | shop            | 0.6412 | Compact first win for consonant bases and inherent vowel        |
| anchor | വില       | price           | 0.6128 | Shopping anchor with short i sign and common consonants         |
| anchor | അരി       | rice            | 0.6016 | Food staple with independent vowel and i sign                   |
| anchor | ചായ       | tea             | 0.5736 | Short cafe anchor with long aa sign                             |
| anchor | പാൽ       | milk            | 0.5596 | Teaches long aa and chillu l in a short menu word               |
| anchor | കാപ്പി    | coffee          | 0.4540 | Cafe loanword but geminate ppa makes it Stage 2+                |
| anchor | അപ്പം     | appam or bread  | 0.4200 | Food anchor with geminate pp and anusvara                       |
| anchor | ബസ്       | bus             | 0.4008 | Transit loanword and chandrakkala endpoint                      |
| anchor | മരുന്ന്   | medicine        | 0.3936 | Useful pharmacy concept with geminate nn and final chandrakkala |
| anchor | ഹോട്ടൽ    | hotel           | 0.3816 | Common sign loanword with o sign and chillu l                   |
| anchor | വെള്ളം    | water           | 0.3736 | Survival word but ll conjunct and anusvara make it later        |
| anchor | പുറത്ത്   | exit or outside | 0.2908 | Useful sign concept but doubled tta needs review                |
| anchor | പ്രവേശനം  | entrance        | 0.2896 | High signage utility but pr cluster and long word make it late  |
| anchor | ട്രെയിൻ   | train           | 0.2240 | Transit anchor but tra cluster and chillu n are high load       |
| anchor | ശൗചാലയം   | toilet          | 0.2172 | Useful facility word but too many new signs for early lessons   |

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
