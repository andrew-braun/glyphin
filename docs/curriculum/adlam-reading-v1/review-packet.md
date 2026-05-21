# Adlam Reading Review Packet

Generated from `adlam-reading-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `adlam-reading-v1`
- Language tag: `ff-Adlm`
- Script: `Adlm`
- Direction: `rtl`
- Target domains: community_literacy_materials, dictionary_headwords, digital_messaging, cultural_identity_text, short_public_labels

## Sources To Review

| Source                             | Kind                | Use             | License                                   | Notes                                                                                                                 |
| ---------------------------------- | ------------------- | --------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| unicode-adlam-block                | unicode_metadata    | scoring         | Unicode License reviewed for metadata use | Adlam code point metadata for letters, digits, punctuation, and combining marks. Use as infrastructure metadata only. |
| cldr-ff-adlm-exemplars             | locale_metadata     | scoring         | Unicode License reviewed for metadata use | Fulani Adlam locale data where available. Confirm exact CLDR release and locale coverage before ingestion.            |
| noto-sans-adlam-font               | font_reference      | scoring         | OFL reviewed for font testing             | Rendering and fallback test source. Not a text corpus.                                                                |
| winden-jangen-adlam-resources      | community_reference | discovery_only  | terms require review before derived use   | Community and literacy discovery only. Do not copy examples into shipped content without approval.                    |
| app-authored-adlam-domain-examples | authored_examples   | shipped_content | app_owned                                 | Short reviewed labels and examples authored by GlyphBridge with Adlam-literate reviewer approval.                     |

## Candidate Highlights

| Type   | Candidate | Gloss                       | Score  | Notes                                                                           |
| ------ | --------- | --------------------------- | ------ | ------------------------------------------------------------------------------- |
| anchor | 𞤀𞤣𞤤𞤢𞤥     | Adlam                       | 0.5212 | Script-name anchor; exact casing and spelling require community review          |
| anchor | 𞤊𞤵𞤤𞤢      | Fula candidate              | 0.4188 | Language identity candidate; reviewer must confirm spelling and dialect         |
| anchor | 𞤆𞤵𞤤𞤢𞤪     | Pular candidate             | 0.3152 | Dialect or language-name candidate with case-policy implications                |
| anchor | 𞤶𞤢𞤥       | peace / greeting candidate  | 0.3060 | Compact social anchor if reviewers approve form and context                     |
| anchor | 𞤲𞤣𞤭𞤴𞤢𞤥    | water candidate             | 0.1972 | Useful everyday word but spelling and pronunciation must be confirmed           |
| anchor | 𞤢𞤤𞤢       | God / religious candidate   | 0.1480 | Potentially sensitive religious word; likely defer or omit                      |
| anchor | 𞤩𞤢𞤦𞤢      | father / family candidate   | 0.0976 | Family-word candidate for reviewer selection                                    |
| anchor | 𞤢𞤪𞤣𞤮      | road / travel candidate     | 0.0148 | Public-label placeholder; use only after corpus and native reviewcandidate_type |
| anchor | 𞤥𞤢𞤱𞤣𞤮     | market candidate            | 0.0032 | Domain candidate; keep as placeholder until real corpus review                  |
| anchor | 𞤤𞤫𞤲𞤴𞤮𞤤    | school / learning candidate | 0.0000 | Learning-domain placeholder requiring reviewer-provided spelling                |

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
