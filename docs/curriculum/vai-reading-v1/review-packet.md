# Vai Reading Review Packet

Generated from `vai-reading-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `vai-reading-v1`
- Language tag: `vai-Vaii`
- Script: `Vaii`
- Direction: `ltr`
- Target domains: script_identity_text, dictionary_headwords, community_literacy_materials, cultural_site_labels, short_app_authored_labels

## Sources To Review

| Source                           | Kind                | Use             | License                                   | Notes                                                                                                        |
| -------------------------------- | ------------------- | --------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| unicode-vai-block                | unicode_metadata    | scoring         | Unicode License reviewed for metadata use | Vai code point metadata for syllabograms and punctuation. Use as infrastructure metadata only.               |
| cldr-vai-exemplars               | locale_metadata     | scoring         | Unicode License reviewed for metadata use | Vai locale exemplar data where available. Confirm exact CLDR release before ingestion.                       |
| noto-sans-vai-font               | font_reference      | scoring         | OFL reviewed for font testing             | Rendering and fallback test source. Not a text corpus.                                                       |
| vai-scholarship-references       | scholarly_reference | discovery_only  | terms require review before derived use   | Discovery source for script inventory and history. Do not copy examples into shipped content without review. |
| app-authored-vai-domain-examples | authored_examples   | shipped_content | app_owned                                 | Short reviewed labels and examples authored by GlyphBridge with Vai reviewer approval.                       |

## Candidate Highlights

| Type   | Candidate                      | Gloss                           | Score  | Notes                                                              |
| ------ | ------------------------------ | ------------------------------- | ------ | ------------------------------------------------------------------ |
| anchor | ꕙꔤ                             | Vai script / language candidate | 0.5936 | Script-name candidate; reviewer must confirm spelling and context  |
| anchor | ꕉ                              | a syllable anchor               | 0.5120 | Micro-anchor useful only if reviewers accept sign-first pedagogy   |
| anchor | ꔤ                              | i syllable anchor               | 0.5120 | Micro-anchor for early sign recognition                            |
| anchor | ꕮꕯ                             | ma-na word candidate            | 0.1700 | Placeholder until Vai reviewer supplies high-utility words         |
| anchor | ꕪꕉ                             | ka-a word candidate             | 0.1548 | Placeholder sequence for series practice                           |
| anchor | ꕎꔤ                             | wa-i word candidate             | 0.1220 | Placeholder sequence requiring lexicon review                      |
| anchor | ꔡꔢ                             | mee-nee word candidate          | 0.0984 | Series-practice placeholder until real anchors are approved        |
| anchor | reviewer-selected greeting     | greeting in Vai syllabary       | 0.0000 | Required before final lesson copy; no unreviewed spelling included |
| anchor | reviewer-selected water word   | water in Vai syllabary          | 0.0000 | High utility but needs native spelling and pronunciation review    |
| anchor | reviewer-selected public label | short public label              | 0.0000 | Domain anchor must be app-authored and reviewedcandidate_type      |

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
