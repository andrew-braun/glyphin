# Runic Reading Review Packet

Generated from `runic-reading-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `runic-reading-v1`
- Language tag: `und-Runr`
- Script: `Runr`
- Direction: `ltr`
- Target domains: museum_inscriptions, runestone_labels, academic_transliterations, replica_artifact_labels, beginner_script_charts

## Sources To Review

| Source                           | Kind                 | Use             | License                                                   | Notes                                                                                             |
| -------------------------------- | -------------------- | --------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| unicode-runic-block              | unicode_metadata     | scoring         | Unicode License reviewed for metadata use                 | Runic block metadata for encoded rune inventory and names.                                        |
| scandinavian-runic-text-database | inscription_database | discovery_only  | database terms and attribution require review             | Discovery source for inscription forms and transliterations. Do not ship copied inscription text. |
| rundata-derived-references       | corpus_reference     | scoring_only    | derived corpus terms require review                       | Scoring intuition for formulaic chunks and rune distribution after license review.                |
| wiktionary-runic-names           | lexicon              | discovery_only  | CC BY-SA with attribution and share-alike review required | Rune-name discovery only until share-alike implications are approved.                             |
| junicode-font                    | font_reference       | scoring         | SIL Open Font License                                     | Rendering reference for Runic glyph support and scholarly typography.                             |
| app-authored-runic-examples      | authored_examples    | shipped_content | app_owned                                                 | Short transliteration and rune-name examples authored by Glyphin after specialist review.         |

## Candidate Highlights

| Type   | Candidate | Gloss                 | Score  | Notes                                                       |
| ------ | --------- | --------------------- | ------ | ----------------------------------------------------------- |
| anchor | ᚠᚢᚦᚨᚱᚲ    | futhark sequence      | 0.5564 | Core chart anchor and compact script identity win           |
| anchor | ᚱᚢᚾᚨ      | rune or secret        | 0.4752 | Useful as app-authored transliteration example after review |
| anchor | ᚠᛖᚺᚢ      | fehu cattle or wealth | 0.4172 | Rune-name anchor with cultural framing                      |
| anchor | ᛏᛁᚹᚨᛉ     | tiwaz rune name       | 0.3388 | Useful for t and i review but culturally loaded             |
| anchor | ᚨᚾᛊᚢᛉ     | ansuz rune name       | 0.3304 | Name and deity associations require careful wording         |
| anchor | ᛗᚨᚾᚾᚨᛉ    | mannaz rune name      | 0.2964 | Good nasal review and late z value caveat                   |
| anchor | ᚲᛖᚾᚨᛉ     | kenaz rune name       | 0.2696 | Useful for k and e but period labels need review            |
| anchor | ᚱᚨᛁᛞᛟ     | raido rune name       | 0.2680 | Introduces d and o after core futhark                       |
| anchor | ᛒᛖᚱᚲᚨᚾᚨ   | berkana rune name     | 0.2556 | Longer rune-name anchor after core runes                    |
| anchor | ᚺᚨᚷᚨᛚᚨᛉ   | hagalaz rune name     | 0.2308 | Good h and g review after futhark basics                    |
| anchor | ᛊᛟᚹᛁᛚᛟ    | sowilo rune name      | 0.2084 | Late anchor for s and o with variant-form review            |
| anchor | ᛟᚦᚨᛚᚨ     | othala rune name      | 0.1528 | Sensitive modern misuse risk requires explicit review       |

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
