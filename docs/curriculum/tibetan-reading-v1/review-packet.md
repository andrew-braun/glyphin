# Tibetan Reading Review Packet

Generated from `tibetan-reading-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `tibetan-reading-v1`
- Language tag: `bo-Tibt`
- Script: `Tibt`
- Direction: `ltr`
- Target domains: tea_house_menus, cultural_site_signage, transit_place_names, public_facilities, everyday_labels

## Sources To Review

| Source                               | Kind                 | Use             | License                                                      | Notes                                                                                                                                                            |
| ------------------------------------ | -------------------- | --------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| unicode-tibetan-block                | unicode_metadata     | scoring         | Unicode License reviewed for metadata use                    | Tibetan code point metadata for base letters, vowel signs, subjoined signs, punctuation, numerals, and Sanskrit extensions. Use as infrastructure metadata only. |
| cldr-bo-exemplars                    | locale_metadata      | scoring         | Unicode License reviewed for metadata use                    | Tibetan exemplar and locale metadata. Confirm exact CLDR release before ingestion.                                                                               |
| wordfreq-bo                          | frequency            | scoring_only    | MIT package license; upstream corpus licenses require review | Broad frequency intuition only if Tibetan coverage is sufficient. Do not ship derived upstream example text.                                                     |
| tibetan-wiktionary                   | lexicon              | discovery_only  | CC BY-SA; attribution and share-alike review required        | Gloss and spelling discovery only until attribution and share-alike implications are approved.                                                                   |
| openstreetmap-tibetan-names          | environmental_print  | scoring_only    | ODbL; derived-data obligations require review                | Place-name and facility-sign validation for Tibetan-script signage. Do not ship raw OSM extracts without review.                                                 |
| botok-tokenizer                      | segmentation_tooling | discovery_only  | package license and model data require review                | Potential Tibetan word segmentation aid for analysis only. It is not a content source.                                                                           |
| app-authored-tibetan-domain-examples | authored_examples    | shipped_content | app_owned                                                    | Short tea-house, sign, and label examples authored by Glyphin after reviewer approval.                                                                           |

## Candidate Highlights

| Type   | Candidate | Gloss                     | Score  | Notes                                                             |
| ------ | --------- | ------------------------- | ------ | ----------------------------------------------------------------- |
| anchor | ཆུ        | water                     | 0.6404 | High survival utility and introduces below vowel sign             |
| anchor | ཇ         | tea                       | 0.6150 | Compact tea-house anchor with one visible syllable                |
| anchor | ལམ        | road / path               | 0.5930 | Useful wayfinding word with compact consonant sequence            |
| anchor | ཁང        | house / building          | 0.5098 | Common compound element for shops and facilities                  |
| anchor | ཟ་ཁང      | restaurant / eating house | 0.4994 | Strong menu anchor and clear tsheg-syllable compound              |
| anchor | ཇ་ཁང      | tea house                 | 0.4894 | Pairs with tea and building after both units are known            |
| anchor | ནང        | inside                    | 0.4470 | Useful direction word after final nga pattern                     |
| anchor | བོད       | Tibet / Tibetan           | 0.4050 | Identity and signage anchor with written-pronounced mismatch      |
| anchor | ཨང        | number                    | 0.3778 | Useful for labels and counters after syllable structure is stable |
| anchor | སྒོ       | door                      | 0.2990 | Useful sign word but needs stacked-letter support                 |
| anchor | དགོན་པ    | monastery                 | 0.2258 | Essential cultural-site anchor but too complex for early lessons  |
| anchor | འགྲོ      | go                        | 0.1918 | Common verb form with stack behavior; not first-session material  |
| anchor | ཕྱི       | outside                   | 0.1846 | High stack load makes this late despite wayfinding utility        |
| anchor | སློབ་གྲྭ  | school                    | 0.1222 | Dense stacked form belongs in late cluster review                 |
| anchor | མགྲོན་ཁང  | guest house / hotel       | 0.1114 | High facility utility but requires stack and silent-prefix review |

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
