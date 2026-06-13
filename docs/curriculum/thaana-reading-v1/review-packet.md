# Thaana Reading Review Packet

Generated from `thaana-reading-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `thaana-reading-v1`
- Language tag: `dv-Thaa`
- Script: `Thaa`
- Direction: `rtl`
- Target domains: food_cafe_menus, public_facilities, street_wayfinding, island_travel_labels, everyday_labels

## Sources To Review

| Source                              | Kind                  | Use             | License                                               | Notes                                                                                                             |
| ----------------------------------- | --------------------- | --------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| unicode-thaana-block                | unicode_metadata      | scoring         | Unicode License reviewed for metadata use             | Thaana block metadata for letters, vowel signs, sukun, and punctuation.                                           |
| cldr-dv-exemplars                   | locale_metadata       | scoring         | Unicode License reviewed for metadata use             | Dhivehi exemplar and locale metadata. Confirm exact CLDR release before ingestion.                                |
| wiktionary-dhivehi-discovery        | lexicon               | discovery_only  | CC BY-SA; attribution and share-alike review required | Useful for spelling and gloss discovery only. Do not ship copied entries.                                         |
| dhivehi-language-references         | orthography_reference | discovery_only  | publisher or site licenses require review             | Use for specialist planning around vowel signs and romanization only.                                             |
| openstreetmap-dhivehi-names         | environmental_print   | scoring_only    | ODbL; derived-data obligations require review         | Potential validation source for island, road, and facility labels. Do not ship raw extracts.                      |
| app-authored-thaana-domain-examples | authored_examples     | shipped_content | app_owned                                             | Short reviewed examples authored by Glyphin from approved vocabulary rather than copied from third-party corpora. |

## Candidate Highlights

| Type   | Candidate | Gloss    | Score  | Notes                                                 |
| ------ | --------- | -------- | ------ | ----------------------------------------------------- |
| anchor | ފެން      | water    | 0.5752 | High survival value with f e n sukun                  |
| anchor | މަގު      | road     | 0.4888 | Wayfinding anchor with simple marks                   |
| anchor | މަސް      | fish     | 0.4816 | High menu utility with m a s sukun                    |
| anchor | ބަތް      | rice     | 0.4564 | Food anchor with a sign and final sukun               |
| anchor | ދިވެހި    | Dhivehi  | 0.4380 | Identity anchor with several core letters and marks   |
| anchor | ގޭ        | house    | 0.3044 | Short word but long vowel representation needs review |
| anchor | ކޮފީ      | coffee   | 0.2852 | Cafe loanword with o and long i behavior              |
| anchor | ފާހާނާ    | restroom | 0.2376 | Important facility word but long-vowel load is high   |
| anchor | ބަންދު    | closed   | 0.2360 | Pairs with open but sukun cluster load is high        |
| anchor | މަސްޖިދު  | mosque   | 0.1564 | Cultural-site anchor needs context review             |
| anchor | ސުކޫލް    | school   | 0.1444 | Loanword useful for primer contexts but mark-heavy    |
| anchor | ހުޅުވާ    | open     | 0.1248 | Sign word needs specialist spelling confirmation      |

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
