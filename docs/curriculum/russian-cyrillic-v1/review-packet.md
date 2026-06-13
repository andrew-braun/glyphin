# Russian Cyrillic Reading Review Packet

Generated from `russian-cyrillic-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `russian-cyrillic-v1`
- Language tag: `ru-Cyrl`
- Script: `Cyrl`
- Direction: `ltr`
- Target domains: food_cafe_menus, transit_signage, public_facilities, everyday_labels, hotel_lodging

## Sources To Review

| Source                        | Kind                | Use             | License                                                      | Notes                                                                                |
| ----------------------------- | ------------------- | --------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| unicode-cyrillic-block        | unicode_metadata    | scoring         | Unicode License reviewed for metadata use                    | Cyrillic code points and case metadata for infrastructure use.                       |
| cldr-ru-exemplars             | locale_metadata     | scoring         | Unicode License reviewed for metadata use                    | Russian exemplar characters and collation data.                                      |
| wordfreq-ru                   | frequency           | scoring_only    | MIT package license; upstream corpus licenses require review | Broad Russian frequency intuition. Do not ship derived corpus examples.              |
| russian-wiktionary            | lexicon             | discovery_only  | CC BY-SA; attribution and share-alike review required        | Gloss and stress discovery only until attribution obligations are approved.          |
| openstreetmap-russia-names    | environmental_print | scoring_only    | ODbL; derived-data obligations require review                | Street, transit, and place-name validation. Do not ship raw extracts without review. |
| app-authored-russian-examples | authored_examples   | shipped_content | app_owned                                                    | Short menu, transit, public facility, and label examples authored by Glyphin.        |

## Candidate Highlights

| Type   | Candidate  | Gloss      | Score  | Notes                                              |
| ------ | ---------- | ---------- | ------ | -------------------------------------------------- |
| anchor | метро      | metro      | 0.6610 | Transit utility and familiar loanword              |
| anchor | кофе       | coffee     | 0.6430 | Recognizable cafe loanword                         |
| anchor | вода       | water      | 0.6342 | Survival drink word and first visible Cyrillic win |
| anchor | такси      | taxi       | 0.6338 | Traveler utility and familiar loanword             |
| anchor | чай        | tea        | 0.6078 | Short drink anchor for Ч                           |
| anchor | салат      | salad      | 0.6030 | Recognizable menu loanword                         |
| anchor | меню       | menu       | 0.5690 | Recognizable restaurant anchor with Ю              |
| anchor | молоко     | milk       | 0.5522 | Repeated о pattern and menu utility                |
| anchor | туалет     | restroom   | 0.5504 | Public-facility survival anchor                    |
| anchor | ресторан   | restaurant | 0.5334 | High-utility longer sign word                      |
| anchor | мясо       | meat       | 0.5186 | Introduces soft vowel я                            |
| anchor | цена       | price      | 0.5122 | Shopping and menu pricing anchor                   |
| anchor | вход       | entrance   | 0.5094 | Public sign anchor paired with выход               |
| anchor | выход      | exit       | 0.4896 | Essential sign pair with hard i vowel              |
| anchor | хлеб       | bread      | 0.4878 | Food anchor for Х and Б                            |
| anchor | аптека     | pharmacy   | 0.4854 | Public-facility anchor                             |
| anchor | спасибо    | thank you  | 0.4594 | Useful politeness word but longer                  |
| anchor | пожалуйста | please     | 0.3518 | Late politeness anchor due to length and load      |

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
