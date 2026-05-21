# Georgian Reading Review Packet

Generated from `georgian-reading-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `georgian-reading-v1`
- Language tag: `ka-Geor`
- Script: `Geor`
- Direction: `ltr`
- Target domains: food_cafe_menus, transit_signage, public_facilities, everyday_labels, museum_cultural_sites

## Sources To Review

| Source                         | Kind                | Use             | License                                                      | Notes                                                                                            |
| ------------------------------ | ------------------- | --------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| unicode-georgian-block         | unicode_metadata    | scoring         | Unicode License reviewed for metadata use                    | Georgian code point metadata for Mkhedruli, Mtavruli, and historical forms.                      |
| cldr-ka-exemplars              | locale_metadata     | scoring         | Unicode License reviewed for metadata use                    | Georgian exemplar characters and locale metadata. Confirm exact CLDR release before ingestion.   |
| wordfreq-ka                    | frequency           | scoring_only    | MIT package license; upstream corpus licenses require review | Broad Georgian frequency intuition only. Do not ship derived corpus examples.                    |
| georgian-wiktionary            | lexicon             | discovery_only  | CC BY-SA; attribution and share-alike review required        | Gloss and spelling discovery only until attribution obligations are approved.                    |
| openstreetmap-georgia-names    | environmental_print | scoring_only    | ODbL; derived-data obligations require review                | Place-name, transit, and public-sign validation. Do not ship raw extracts without review.        |
| app-authored-georgian-examples | authored_examples   | shipped_content | app_owned                                                    | Short menu, transit, facility, and label examples authored by GlyphBridge after reviewer checks. |

## Candidate Highlights

| Type   | Candidate  | Gloss      | Score  | Notes                                                |
| ------ | ---------- | ---------- | ------ | ---------------------------------------------------- |
| anchor | ჩაი        | tea        | 0.6272 | Short cafe anchor with strong first win              |
| anchor | მენიუ      | menu       | 0.5872 | Short menu anchor and useful label word              |
| anchor | პური       | bread      | 0.5808 | Useful food anchor and p contrast gateway            |
| anchor | მეტრო      | metro      | 0.5740 | Transit loanword with simple chunking                |
| anchor | ფასი       | price      | 0.5032 | Short shopping anchor and ფ gateway                  |
| anchor | ბაზარი     | market     | 0.5024 | Shopping anchor with stable sounds                   |
| anchor | ტუალეტი    | restroom   | 0.4990 | High utility loanword-like facility anchor           |
| anchor | მუზეუმი    | museum     | 0.4972 | Cultural-site anchor with familiar vowels            |
| anchor | რესტორანი  | restaurant | 0.4940 | Recognizable restaurant loanword                     |
| anchor | ყავა       | coffee     | 0.4772 | High utility but introduces high-load ყ              |
| anchor | ქუჩა       | street     | 0.4436 | Street-sign word and aspirated ქ gateway             |
| anchor | სასტუმრო   | hotel      | 0.4280 | Lodging anchor with repeated ს                       |
| anchor | ღია        | open       | 0.3892 | Storefront sign word with high-load ღ                |
| anchor | გაჩერება   | stop       | 0.3876 | Transit stop anchor with repeated vowels             |
| anchor | რძე        | milk       | 0.3780 | Compact food anchor with high consonant load         |
| anchor | გამარჯობა  | hello      | 0.3660 | Useful greeting after core letters are stable        |
| anchor | წყალი      | water      | 0.3514 | Survival word but consonant cluster makes it Stage 2 |
| anchor | დაკეტილია  | closed     | 0.3216 | Pairs with open but length delays it                 |
| anchor | აფთიაქი    | pharmacy   | 0.3116 | Facility anchor with aspirated consonants            |
| anchor | გასასვლელი | exit       | 0.3012 | Pairs with entrance and shares visible chunks        |

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
