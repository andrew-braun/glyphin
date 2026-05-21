# Syriac Reading Review Packet

Generated from `syriac-reading-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `syriac-reading-v1`
- Language tag: `syr-Syrc`
- Script: `Syrc`
- Direction: `rtl`
- Target domains: heritage_liturgical_labels, cultural_site_signage, classroom_primer_words, community_wayfinding, everyday_labels

## Sources To Review

| Source                              | Kind                | Use             | License                                               | Notes                                                                                                                 |
| ----------------------------------- | ------------------- | --------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| unicode-syriac-block                | unicode_metadata    | scoring         | Unicode License reviewed for metadata use             | Syriac block metadata for letters, points, punctuation, and shaping-sensitive code points.                            |
| unicode-joining-data                | unicode_metadata    | scoring         | Unicode License reviewed for metadata use             | Joining-type metadata needed for Syriac contextual shaping and font QA.                                               |
| cldr-syr-exemplars                  | locale_metadata     | scoring         | Unicode License reviewed for metadata use             | Locale metadata and exemplar checks where available. Confirm exact CLDR release before ingestion.                     |
| syriac-wiktionary-discovery         | lexicon             | discovery_only  | CC BY-SA; attribution and share-alike review required | Useful for spelling and gloss discovery only. Do not ship copied entries.                                             |
| syriaca-org-gazetteer               | cultural_reference  | discovery_only  | source license and attribution terms require review   | Cultural and place-name reference for reviewer planning only.                                                         |
| openstreetmap-syriac-names          | environmental_print | scoring_only    | ODbL; derived-data obligations require review         | Potential validation source for churches, cultural sites, and community labels. Do not ship raw extracts.             |
| app-authored-syriac-domain-examples | authored_examples   | shipped_content | app_owned                                             | Short reviewed examples authored by GlyphBridge from approved vocabulary rather than copied from third-party corpora. |

## Candidate Highlights

| Type   | Candidate | Gloss            | Score  | Notes                                                       |
| ------ | --------- | ---------------- | ------ | ----------------------------------------------------------- |
| anchor | ܡܝܐ       | water            | 0.5474 | High survival value and compact mater lectionis example     |
| anchor | ܫܠܡܐ      | peace or hello   | 0.4630 | Memorable greeting but cultural and dialect review required |
| anchor | ܒܝܬܐ      | house            | 0.4438 | Core word for signs and cultural text with beth plus yodh   |
| anchor | ܠܚܡܐ      | bread            | 0.4094 | Useful food anchor with guttural consonant load             |
| anchor | ܢܘܢܐ      | fish             | 0.4042 | Menu-friendly anchor with repeated nun and waw              |
| anchor | ܫܘܩܐ      | market           | 0.2998 | Useful domain word but qoph pronunciation needs review      |
| anchor | ܣܦܪܐ      | book             | 0.2750 | Good classroom anchor but adds pe and rish                  |
| anchor | ܚܠܒܐ      | milk             | 0.2462 | Useful food anchor but guttural and beth dot review needed  |
| anchor | ܐܬܘܬܐ     | letters or signs | 0.2394 | Meta-literacy anchor only after alap and taw are stable     |
| anchor | ܥܕܬܐ      | church           | 0.1990 | Strong cultural-site utility but ayin is high load          |
| anchor | ܡܕܝܢܬܐ    | city             | 0.1802 | Wayfinding payoff but too long for early lessons            |
| anchor | ܡܠܦܢܐ     | teacher          | 0.1686 | Classroom vocabulary for primer contexts after core letters |

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
