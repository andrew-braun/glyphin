# Bamum Reading Review Packet

Generated from `bamum-reading-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `bamum-reading-v1`
- Language tag: `bax-Bamu`
- Script: `Bamu`
- Direction: `ltr`
- Target domains: script_identity_text, museum_cultural_labels, dictionary_headwords, community_literacy_materials, short_app_authored_labels

## Sources To Review

| Source                             | Kind                | Use             | License                                   | Notes                                                                                                                |
| ---------------------------------- | ------------------- | --------------- | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| unicode-bamum-block                | unicode_metadata    | scoring         | Unicode License reviewed for metadata use | Modern Bamum block metadata for syllabograms and punctuation. Use as infrastructure metadata only.                   |
| unicode-bamum-supplement           | unicode_metadata    | scoring         | Unicode License reviewed for metadata use | Historical-stage Bamum Supplement metadata. Use for scope decisions and avoid mixing into v1 without review.         |
| noto-sans-bamum-font               | font_reference      | scoring         | OFL reviewed for font testing             | Rendering and fallback test source. Not a text corpus.                                                               |
| bamum-scholarship-references       | scholarly_reference | discovery_only  | terms require review before derived use   | Discovery source for script stages and encoding rationale. Do not copy examples into shipped content without review. |
| app-authored-bamum-domain-examples | authored_examples   | shipped_content | app_owned                                 | Short reviewed labels and examples authored by GlyphBridge with Bamum reviewer approval.                             |

## Candidate Highlights

| Type   | Candidate                             | Gloss                         | Score  | Notes                                                              |
| ------ | ------------------------------------- | ----------------------------- | ------ | ------------------------------------------------------------------ |
| anchor | ꚠ                                     | a syllable anchor             | 0.5076 | Micro-anchor useful only if reviewers accept sign-first pedagogy   |
| anchor | ꚠꚡ                                    | a-ka sequence candidate       | 0.1640 | Placeholder sequence for early chart-family practice               |
| anchor | ꚢꚣ                                    | u-ku sequence candidate       | 0.1596 | Placeholder sequence to compare u and ku signs                     |
| anchor | ꚤꚧ                                    | ee-o sequence candidate       | 0.1092 | Placeholder sequence requiring reviewed word replacement           |
| anchor | ꚳꚵ                                    | m-mu sequence candidate       | 0.0768 | Series-practice placeholder until real anchors are approved        |
| anchor | reviewer-selected Bamum name          | Bamum language or script name | 0.0000 | Required before final lesson copy; no unreviewed spelling included |
| anchor | reviewer-selected greeting            | greeting in Bamum             | 0.0000 | Required community-reviewed social anchor                          |
| anchor | reviewer-selected water word          | water in Bamum                | 0.0000 | High-utility word but needs spelling and pronunciation review      |
| anchor | reviewer-selected museum label        | cultural label in Bamum       | 0.0000 | Museum or heritage anchor must be culturally reviewed              |
| anchor | reviewer-selected dictionary headword | short headword                | 0.0000 | Needed to replace placeholders before ingestioncandidate_type      |

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
