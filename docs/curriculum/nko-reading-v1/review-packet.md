# N'Ko Reading Review Packet

Generated from `nko-reading-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `nko-reading-v1`
- Language tag: `nqo-Nkoo`
- Script: `Nkoo`
- Direction: `rtl`
- Target domains: community_literacy_materials, dictionary_headwords, digital_text, cultural_identity_text, short_public_labels

## Sources To Review

| Source                           | Kind                     | Use             | License                                               | Notes                                                                                                                |
| -------------------------------- | ------------------------ | --------------- | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| unicode-nko-block                | unicode_metadata         | scoring         | Unicode License reviewed for metadata use             | N'Ko code point metadata for letters, digits, punctuation, and combining marks. Use as infrastructure metadata only. |
| cldr-nqo-exemplars               | locale_metadata          | scoring         | Unicode License reviewed for metadata use             | N'Ko locale data where available. Confirm exact CLDR release before ingestion.                                       |
| noto-sans-nko-font               | font_reference           | scoring         | OFL reviewed for font testing                         | Rendering and fallback test source for letters and combining marks. Not a text corpus.                               |
| nko-wikimedia-references         | lexicon_corpus_reference | discovery_only  | CC BY-SA; attribution and share-alike review required | Useful for modern digital text discovery only until share-alike implications are reviewed.                           |
| app-authored-nko-domain-examples | authored_examples        | shipped_content | app_owned                                             | Short reviewed labels and examples authored by GlyphBridge with N'Ko-literate reviewer approval.                     |

## Candidate Highlights

| Type   | Candidate | Gloss                        | Score  | Notes                                                                   |
| ------ | --------- | ---------------------------- | ------ | ----------------------------------------------------------------------- |
| anchor | ߒߞߏ       | N'Ko                         | 0.6684 | Script-name anchor with strong identity payoff                          |
| anchor | ߞߊ        | ka chunk candidate           | 0.4280 | Useful as a readable chunk if reviewers accept micro-anchors            |
| anchor | ߡߊ        | ma chunk candidate           | 0.4236 | Useful for early recognition but may be too grammar-light               |
| anchor | ߟߊ        | la chunk candidate           | 0.3952 | Readable chunk candidate for early drills                               |
| anchor | ߊߟߎ       | social word candidate        | 0.3560 | Short candidate requiring native review before glossing                 |
| anchor | ߛߎ        | water / liquid candidate     | 0.2340 | Everyday-word placeholder requiring lexicon and reviewer confirmation   |
| anchor | ߡߊ߲߬ߘߋ߲   | Manding candidate            | 0.1404 | Identity anchor with combining marks and language-scope sensitivity     |
| anchor | ߘߐ        | inside / place candidate     | 0.1176 | Short candidate but gloss and domain utility require review             |
| anchor | ߞߎ߬ߙߊ     | new / modern candidate       | 0.0768 | Combining-mark candidate for later review                               |
| anchor | ߞߊ߬ߙߊ߲    | learning / reading candidate | 0.0000 | Learning-domain candidate with combining marks; keep latecandidate_type |

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
