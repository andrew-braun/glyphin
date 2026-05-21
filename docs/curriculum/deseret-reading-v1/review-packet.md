# Deseret Reading Review Packet

Generated from `deseret-reading-v1` authoring artifacts.

## Review Gates

- [ ] Segmentation and grapheme mapping
- [ ] Pronunciation or romanization
- [ ] Cultural context and learner-facing wording
- [ ] License and attribution
- [ ] Database ingestion readiness

## Course Summary

- Course ID: `deseret-reading-v1`
- Language tag: `en-Dsrt`
- Script: `Dsrt`
- Direction: `ltr`
- Target domains: script_identity_text, phonemic_english_examples, historical_context_labels, learner_transcription_drills, short_public_labels

## Sources To Review

| Source                                        | Kind                 | Use             | License                                                      | Notes                                                                                                          |
| --------------------------------------------- | -------------------- | --------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| unicode-deseret-block                         | unicode_metadata     | scoring         | Unicode License reviewed for metadata use                    | Deseret code point metadata and letter names. Use as infrastructure metadata only.                             |
| noto-sans-deseret-font                        | font_reference       | scoring         | OFL reviewed for font testing                                | Rendering and fallback test source. Not a text corpus.                                                         |
| deseret-historical-references                 | historical_reference | discovery_only  | terms require review before derived use                      | Discovery source for history and encoding rationale. Do not copy examples into shipped content without review. |
| english-wordfreq-for-deseret-anchor-selection | frequency            | scoring_only    | MIT package license; upstream corpus licenses require review | Useful for English anchor utility only. Deseret spellings must be app-authored and reviewed.                   |
| app-authored-deseret-domain-examples          | authored_examples    | shipped_content | app_owned                                                    | Short phonemic examples authored by GlyphBridge and reviewed against the chosen Deseret transcription policy.  |

## Candidate Highlights

| Type   | Candidate | Gloss   | Score  | Notes                                                              |
| ------ | --------- | ------- | ------ | ------------------------------------------------------------------ |
| anchor | 𐑁𐐭𐐼       | food    | 0.5428 | Menu anchor with clear long-oo contrast                            |
| anchor | 𐑅𐐻𐐱𐐹      | stop    | 0.5028 | Public-label anchor with straightforward cluster                   |
| anchor | 𐐻𐐰𐐿𐑅𐐨     | taxi    | 0.4448 | Compact public-travel word with clear consonants                   |
| anchor | 𐐔𐐯𐑆𐐯𐑉𐐯𐐻   | Deseret | 0.4080 | Script-name anchor using app-authored transcription pending review |
| anchor | 𐐿𐐰𐑁𐐴      | cafe    | 0.3532 | Useful cafe anchor but vowel choice needs review                   |
| anchor | 𐐵𐐹𐐯𐑌      | open    | 0.3524 | Shop-sign anchor with reviewed transcription needed                |
| anchor | 𐑉𐐵𐐼       | road    | 0.3496 | Travel-label anchor with r and ow policy                           |
| anchor | 𐐯𐑀𐑆𐐮𐐻     | exit    | 0.3352 | Public-sign anchor but exact sound spelling varies                 |
| anchor | 𐐸𐐵𐐻𐐯𐑊     | hotel   | 0.2608 | Travel anchor with stress and vowel policy questionscandidate_type |
| anchor | 𐐶𐐱𐐻𐑉      | water   | 0.2524 | Dialect-sensitive anchor and r-vowel policy issue                  |

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
