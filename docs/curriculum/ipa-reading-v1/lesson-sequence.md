# IPA Reading Lesson Sequence

This v1 teaches practical decoding of IPA transcriptions in dictionaries and
language-learning materials. It uses app-authored English anchor words as safe
examples and defers full phonetics theory.

## Course Shape

- First-session reading win: read `[kæt]`, `[bɪt]`, and `[dɔɡ]` as familiar word
  pronunciations.
- Approximate lesson count: 16 lessons.
- Structural family: phonetic notation with Latin base letters, IPA extensions,
  modifier letters, and stress marks.
- Required app support beyond the current Thai runtime: notation-course language
  modeling, IPA-safe fonts, optional audio hooks, combining-mark metadata, and
  drill types for sound-to-symbol matching.

## Stage 1: First Decoding Wins

| Lesson | Anchor       | New units         | Rule or pattern                             | Review units | Drill focus                            |
| ------ | ------------ | ----------------- | ------------------------------------------- | ------------ | -------------------------------------- |
| 1      | `[kæt]` cat  | k, æ, t, brackets | Brackets frame pronunciation notation.      | none         | Match IPA sequence to a familiar word. |
| 2      | `[bɪt]` bit  | b, ɪ              | Similar letters can represent exact sounds. | k, t         | Contrast æ and ɪ.                      |
| 3      | `[dɔɡ]` dog  | d, ɔ, ɡ           | IPA `ɡ` is a single-storey g.               | b, k, t      | Decode CVC anchors.                    |
| 4      | `[sɪŋ]` sing | s, ŋ              | `ŋ` is the ng sound at the end of sing.     | ɪ, k         | Spot nasals in short words.            |

## Stage 2: Contrast Families

| Lesson | Anchor           | New units | Rule or pattern                                            | Review units | Drill focus                                  |
| ------ | ---------------- | --------- | ---------------------------------------------------------- | ------------ | -------------------------------------------- |
| 5      | `[ɹʌn]` run      | ɹ, ʌ, n   | English r is usually `ɹ`, not a trilled `r`.               | short vowels | Contrast familiar spelling with IPA symbols. |
| 6      | `[θɪŋk]` think   | θ         | Dental fricatives are not t or s.                          | ŋ, ɪ, k      | Contrast θ with t and s.                     |
| 7      | `[ˈmʌðɚ]` mother | ð, ˈ      | `ð` is the voiced partner of θ and stress marks syllables. | m, ʌ         | Recognize voiced and voiceless pairs.        |
| 8      | `[əˈbaʊt]` about | ə         | Schwa is a reduced unstressed vowel.                       | stress mark  | Place the stress mark and find schwa.        |

## Stage 3: Dictionary-Style Words

| Lesson | Anchor                 | New units            | Rule or pattern                                         | Review units  | Drill focus                            |
| ------ | ---------------------- | -------------------- | ------------------------------------------------------- | ------------- | -------------------------------------- |
| 9      | `[pliz]` please        | p, l, z              | Consonant clusters are read left to right.              | b, s          | Decode polite-word transcription.      |
| 10     | `[ˈmɛʒɚ]` measure      | ɛ, ʒ                 | `ʒ` is the voiced partner of `ʃ`.                       | stress, schwa | Sort s, z, ʃ, and ʒ.                   |
| 11     | `[ˈkwɛʃən]` question   | ʃ                    | `ʃ` is the sh sound and schwa often appears unstressed. | ɛ, ə          | Decode a dictionary-looking word.      |
| 12     | `[ˈlæŋɡwɪdʒ]` language | longer chunks        | Long transcriptions can be chunked into familiar units. | æ, ŋ, ɡ, ɪ    | Chunk and read a longer word.          |
| 13     | `[ɪɡˈzæmpəl]` example  | stress in the middle | Stress marks can appear before non-initial syllables.   | z, æ, ə       | Find the stressed syllable.            |
| 14     | `[ˈjuʒuəli]` usually   | j and u preview      | IPA may use familiar letters with strict sound values.  | ʒ, ə, i       | Review fricatives and approximants.    |
| 15     | mixed review           | θ, ð, ʃ, ʒ           | Fricatives form contrast families.                      | all prior     | Choose the correct IPA transcription.  |
| 16     | dictionary line        | all prior            | IPA is a pronunciation layer separate from spelling.    | all prior     | Read a compact dictionary-style entry. |

## Coverage Notes

- Target-domain samples: dictionary entries, language textbooks, learner notes,
  pronunciation guides, and app-authored minimal word examples.
- Known-unit coverage goal: by Lesson 8, learners understand brackets, stress,
  schwa, core plosives, nasals, and dental fricatives.
- Deferred high-load material: tone letters, clicks, ejectives, advanced vowel
  charts, narrow transcription details, and full audio-production exercises.
