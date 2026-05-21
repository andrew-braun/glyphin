# Armenian Reading Review Packet

Generated from `armenian-reading-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `armenian-reading-v1`
- Language tag: `hy-Armn`
- Script: `Armn`
- Direction: `ltr`
- Target domains: food_cafe_menus, transit_signage, public_facilities, everyday_labels, museum_cultural_sites

## Sources To Review

| Source                         | Kind                | Use             | License                                                      | Notes                                                                                            |
| ------------------------------ | ------------------- | --------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| unicode-armenian-block         | unicode_metadata    | scoring         | Unicode License reviewed for metadata use                    | Armenian code point and punctuation metadata for script inventory work.                          |
| cldr-hy-exemplars              | locale_metadata     | scoring         | Unicode License reviewed for metadata use                    | Armenian exemplar characters and casing behavior. Confirm exact CLDR release before ingestion.   |
| wordfreq-hy                    | frequency           | scoring_only    | MIT package license; upstream corpus licenses require review | Broad Eastern Armenian frequency intuition only. Do not ship derived corpus examples.            |
| armenian-wiktionary            | lexicon             | discovery_only  | CC BY-SA; attribution and share-alike review required        | Gloss and spelling discovery only until attribution obligations are approved.                    |
| openstreetmap-armenia-names    | environmental_print | scoring_only    | ODbL; derived-data obligations require review                | Place-name and public-sign validation. Do not ship raw extracts without review.                  |
| app-authored-armenian-examples | authored_examples   | shipped_content | app_owned                                                    | Short menu, transit, facility, and label examples authored by GlyphBridge after reviewer checks. |

## Candidate Highlights

| Type   | Candidate | Gloss      | Score  | Notes                                                   |
| ------ | --------- | ---------- | ------ | ------------------------------------------------------- |
| anchor | թեյ       | tea        | 0.5656 | Short cafe anchor and aspirated թ gateway               |
| anchor | հաց       | bread      | 0.5648 | Useful food word with compact shape                     |
| anchor | ջուր      | water      | 0.5526 | Survival anchor for ու and ջ with strong payoff         |
| anchor | մետրո     | metro      | 0.5416 | Transit loanword with clear positive transfer           |
| anchor | գին       | price      | 0.5208 | Compact shopping anchor                                 |
| anchor | կաթ       | milk       | 0.5100 | Food anchor for կ and թ review                          |
| anchor | ելք       | exit       | 0.4936 | Short public sign word with high utility                |
| anchor | բաց       | open       | 0.4908 | Short storefront sign word                              |
| anchor | շուկա     | market     | 0.4796 | Useful shopping anchor and շ review                     |
| anchor | սուրճ     | coffee     | 0.4548 | High cafe utility but introduces ու and ճ               |
| anchor | մուտք     | entrance   | 0.4396 | Public sign anchor and ք gateway                        |
| anchor | փակ       | closed     | 0.4348 | Pairs with բաց and teaches փ                            |
| anchor | կանգառ    | stop       | 0.4088 | Transit stop anchor with nasal and r review             |
| anchor | ճաշարան   | restaurant | 0.4024 | Core destination word but long and affricate-heavy      |
| anchor | բարև      | hello      | 0.3792 | Useful greeting but և display needs policy              |
| anchor | զուգարան  | restroom   | 0.3434 | High survival utility but length delays it              |
| anchor | թանգարան  | museum     | 0.3384 | Cultural-site anchor with repeated ա                    |
| anchor | փողոց     | street     | 0.3356 | Street-sign anchor but adds փ and ղ                     |
| anchor | դեղատուն  | pharmacy   | 0.3152 | Public-facility anchor for later stage                  |
| anchor | հյուրանոց | hotel      | 0.2892 | Important lodging word but high digraph and length load |

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
