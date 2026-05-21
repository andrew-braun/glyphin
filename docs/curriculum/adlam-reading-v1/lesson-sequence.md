# Adlam Reading Lesson Sequence

This staged outline is a review-ready starting point, not final learner-facing
lesson copy. It assumes a modern Adlam literacy context and requires
Adlam-literate Fulani/Fula review before implementation.

## Course Shape

- First-session reading win: read `𞤀𞤣𞤤𞤢𞤥` and recognize that Adlam is RTL.
- Approximate lesson count: 12 core lessons plus community-selected domain text.
- Structural family: modern RTL alphabet with case pairs, vowel letters,
  punctuation, and font/shaping requirements.
- Required app support beyond the current Thai runtime: RTL layout, bidi
  isolation, Adlam font coverage, case metadata, transliteration policy, and
  reviewer-gated community examples.

## Stage 1: First Decoding Wins

| Lesson | Anchor   | New units    | Rule or pattern                                            | Review units | Drill focus                                                   |
| ------ | -------- | ------------ | ---------------------------------------------------------- | ------------ | ------------------------------------------------------------- |
| 1      | `𞤀𞤣𞤤𞤢𞤥`  | 𞤀/𞤢, 𞤣, 𞤤, 𞤥 | Adlam reads right to left in the UI.                       | None         | Read the script-name anchor with bidi isolation.              |
| 2      | `𞤊𞤵𞤤𞤢`   | 𞤊/𞤬, 𞤵       | Case pairs and vowel letters are part of the reading task. | 𞤤, 𞤢         | Decode a language-name candidate after reviewer approval.     |
| 3      | `𞤆𞤵𞤤𞤢𞤪`  | 𞤆/𞤨, 𞤪       | Names and dialect labels require exact spelling policy.    | 𞤵, 𞤤         | Read a Pular candidate and discuss review status.             |
| 4      | `𞤲𞤣𞤭𞤴𞤢𞤥` | 𞤲, 𞤭, 𞤴      | Longer words can be chunked by known letters.              | 𞤣, 𞤥         | Decode a useful everyday candidate with explicit uncertainty. |

## Stage 2: Letter Families And Community Text

| Lesson | Anchor                  | New units                     | Rule or pattern                                          | Review units    | Drill focus                                        |
| ------ | ----------------------- | ----------------------------- | -------------------------------------------------------- | --------------- | -------------------------------------------------- |
| 5      | `𞤶𞤢𞤥`                   | 𞤶                             | Social anchors need cultural context.                    | 𞤢, 𞤥            | Match compact words only after reviewer signoff.   |
| 6      | Case review             | lowercase and uppercase pairs | Case is encoded and must not be lost in normalization.   | Stage 1 letters | Pair upper and lower forms at stable sizes.        |
| 7      | Digital message set     | reviewer-selected words       | Modern use includes messaging and community literacy.    | Stage 1 units   | Read short app-authored phrases in RTL containers. |
| 8      | Dictionary headword set | reviewer-selected headwords   | Headwords need transliteration and pronunciation policy. | Case pairs      | Match Adlam headwords to approved glosses.         |

## Stage 3: Domain Text And RTL QA

| Lesson | Anchor                      | New units                    | Rule or pattern                                                     | Review units   | Drill focus                                      |
| ------ | --------------------------- | ---------------------------- | ------------------------------------------------------------------- | -------------- | ------------------------------------------------ |
| 9      | Public label set            | reviewer-selected labels     | App-authored labels must be culturally and linguistically reviewed. | Stage 2 units  | Spot known letters in short labels.              |
| 10     | Numeral and punctuation set | Adlam digits and punctuation | Digits and punctuation need RTL display QA.                         | Core letters   | Recognize direction-safe numbers and separators. |
| 11     | Font fallback test set      | confusable pairs             | Font fallback can break learner recognition.                        | Case pairs     | Compare letters across approved fonts.           |
| 12     | Review gate                 | selected anchors             | No anchors become shipped content without community review.         | All core units | Read a final reviewed mini-set.                  |

## Coverage Notes

- Target-domain samples: community literacy materials, digital messages,
  dictionary headwords, cultural identity text, and short public labels.
- Known-unit coverage goal: teach the letters needed for script and language
  identity anchors before domain examples.
- Known-anchor coverage goal: approve at least three community-reviewed anchors
  before runtime implementation.
- Deferred high-load material: full orthography, regional language variation,
  production spelling, advanced diacritics, copied community text, and non-Fulani
  uses of the script.
