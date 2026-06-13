# Hebrew Reading Review Packet

Generated from `hebrew-reading-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `hebrew-reading-v1`
- Language tag: `he-Hebr`
- Script: `Hebr`
- Direction: `rtl`
- Target domains: food_cafe_menus, transit_signage, public_facilities, street_market_signage, everyday_labels

## Sources To Review

| Source                              | Kind                  | Use             | License                                                      | Notes                                                                                                                             |
| ----------------------------------- | --------------------- | --------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| unicode-hebrew-block                | unicode_metadata      | scoring         | Unicode License reviewed for metadata use                    | Hebrew block metadata for letters, niqqud, cantillation marks, punctuation, and final forms. Use as infrastructure metadata only. |
| cldr-he-exemplars                   | locale_metadata       | scoring         | Unicode License reviewed for metadata use                    | Hebrew exemplar characters and locale metadata. Confirm exact CLDR release before ingestion.                                      |
| wordfreq-he                         | frequency             | scoring_only    | MIT package license; upstream corpus licenses require review | Broad Hebrew frequency intuition only. Do not ship derived example text from upstream corpora.                                    |
| hebrew-wiktionary                   | lexicon               | discovery_only  | CC BY-SA; attribution and share-alike review required        | Useful for spelling and gloss checks. Keep discovery-only until share-alike obligations are reviewed.                             |
| academy-hebrew-terms                | terminology_reference | discovery_only  | terms and reuse permissions require review                   | Useful for standard spelling checks only after reuse terms are reviewed. Not a shipped-content source.                            |
| openstreetmap-israel-names          | environmental_print   | scoring_only    | ODbL; derived-data obligations require review                | Useful for street, transit, and facility-name validation in Hebrew. Do not ship raw extracts without license review.              |
| app-authored-hebrew-domain-examples | authored_examples     | shipped_content | app_owned                                                    | Short menu, sign, and label examples authored by Glyphin from reviewed vocabulary rather than copied from third-party corpora.    |

## Candidate Highlights

| Type   | Candidate | Gloss          | Score  | Notes                                                      |
| ------ | --------- | -------------- | ------ | ---------------------------------------------------------- |
| anchor | לא        | no             | 0.7268 | Compact survival word and first RTL win                    |
| anchor | מים       | water          | 0.6776 | High survival utility and final mem payoff                 |
| anchor | קפה       | coffee         | 0.6028 | Common cafe anchor with qof pe and final he                |
| anchor | שוק       | market         | 0.5964 | Useful market sign word with vav and qof                   |
| anchor | כן        | yes            | 0.5632 | Short high-frequency word but final nun and kaf need setup |
| anchor | חלב       | milk           | 0.5532 | Short food word and useful het bet review                  |
| anchor | מחיר      | price          | 0.5520 | Shopping anchor with yod as vowel marker                   |
| anchor | לחם       | bread          | 0.5352 | Menu anchor with final mem and het                         |
| anchor | שלום      | hello or peace | 0.5344 | Culturally familiar word with shin vav and final mem       |
| anchor | מונית     | taxi           | 0.5328 | Travel word and matres lectionis review                    |
| anchor | מלון      | hotel          | 0.5208 | Useful travel word and final nun review                    |
| anchor | רחוב      | street         | 0.5168 | High signage utility and vav vowel-marker practice         |
| anchor | תחנה      | station        | 0.4968 | Transit anchor with tav het nun he                         |
| anchor | כניסה     | entrance       | 0.4808 | Pairs naturally with exit and teaches kaf nun samekh       |
| anchor | יציאה     | exit           | 0.4668 | Essential sign word but tsadi and alef sequence add load   |
| anchor | סגור      | closed         | 0.4664 | Pairs with open and introduces gimel                       |
| anchor | פתוח      | open           | 0.4304 | Common storefront sign and pair with closed                |
| anchor | אוטובוס   | bus            | 0.4288 | Familiar transit word but long and vowel-letter heavy      |
| anchor | מסעדה     | restaurant     | 0.4216 | Essential but longer and includes ayin                     |
| anchor | שירותים   | restrooms      | 0.3876 | Essential facility word but long and suffix-heavy          |

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
