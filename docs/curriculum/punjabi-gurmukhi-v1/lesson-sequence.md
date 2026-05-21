# Punjabi Gurmukhi Reading Lesson Sequence

This staged outline teaches modern printed Gurmukhi as an abugida. It starts
with simple base-plus-vowel signs before adding nasal marks, addak, and loanword
nukta forms.

## Course Shape

- First-session reading win: read `ਪਾਣੀ`, `ਚਾਹ`, and `ਦਾਲ` from menu contexts.
- Approximate lesson count: 15 core lessons plus late pairin and loan-letter
  review.
- Structural family: Gurmukhi abugida with inherent vowel, dependent vowel
  signs, vowel bearers, tippi, bindi, addak, halant, pairin letters, and nukta.
- Required app support beyond the current Thai runtime: language-agnostic text
  fields, akshara segmentation, matra-position metadata, nasal-sign metadata,
  addak/gemination handling, and font checks for combining marks.

## Stage 1: First Decoding Wins

| Lesson | Anchor | New units      | Rule or pattern                                                    | Review units | Drill focus                          |
| ------ | ------ | -------------- | ------------------------------------------------------------------ | ------------ | ------------------------------------ |
| 1      | `ਪਾਣੀ` | ਪ, ਆ/ਾ, ਣ, ਈ/ੀ | Consonant bases carry an inherent vowel unless a matra changes it. | none         | Build aksharas from base plus matra. |
| 2      | `ਚਾਹ`  | ਚ, ਹ           | The vowel sign is attached to the consonant base.                  | ਆ/ਾ          | Read a compact cafe word.            |
| 3      | `ਦਾਲ`  | ਦ, ਲ           | Bare consonants can still carry the inherent vowel.                | ਆ/ਾ          | Decode a menu staple.                |
| 4      | `ਨਾਮ`  | ਨ, ਮ           | Long vowels and final bases make compact labels.                   | ਆ/ਾ          | Identify known bases in short words. |

## Stage 2: Menus And Transit

| Lesson | Anchor  | New units | Rule or pattern                                          | Review units   | Drill focus                        |
| ------ | ------- | --------- | -------------------------------------------------------- | -------------- | ---------------------------------- |
| 5      | `ਰੋਟੀ`  | ਰ, ਓ/ੋ    | Vowel signs can appear above or after the base.          | ਟ preview, ਈ/ੀ | Read food words by akshara chunks. |
| 6      | `ਰੇਲ`   | ਏ/ੇ       | Lavan marks the e vowel and is common in transit words.  | ਰ, ਲ           | Match matra shape to vowel sound.  |
| 7      | `ਦੁਕਾਨ` | ਉ/ੁ, ਕ    | Some vowel signs attach below the base.                  | ਦ, ਨ, ਆ/ਾ      | Sort matras by visual position.    |
| 8      | `ਸਕੂਲ`  | ਸ, ਕ, ਊ/ੂ | Long-u signs and clusters can appear in familiar labels. | ਲ              | Decode a school sign with support. |
| 9      | `ਬੱਸ`   | ਬ, ੱ      | Addak marks consonant doubling and is common in signs.   | ਸ              | Spot addak above the line.         |

## Stage 3: Nasal Signs And Public Text

| Lesson | Anchor    | New units         | Rule or pattern                                            | Review units | Drill focus                                   |
| ------ | --------- | ----------------- | ---------------------------------------------------------- | ------------ | --------------------------------------------- |
| 10     | `ਬੰਦ`     | ੰ                 | Tippi marks nasalization and appears above the base.       | ਬ, ਦ         | Recognize closed signs.                       |
| 11     | `ਪੰਜਾਬ`   | ਜ, ਤippi review   | Nasal signs can appear in place and identity words.        | ਪ, ਬ         | Read a high-salience place word.              |
| 12     | `ਬਜ਼ਾਰ`   | ਜ਼, nukta         | Nukta marks loan sounds and names.                         | ਬ, ਰ         | Spot nukta without treating it as decoration. |
| 13     | `ਰਾਹ`     | ਰ, ਹ review       | Long vowels can carry direction words.                     | ਆ/ਾ          | Read wayfinding text.                         |
| 14     | `ਖੁੱਲ੍ਹਾ` | ਖ, ੁ, ੱ, pairin ਹ | Open signs combine matra, addak, and half-letter behavior. | ਲ, ਹ         | Decode a high-load sign word by chunks.       |
| 15     | `ਦਰਵਾਜ਼ਾ` | ਵ, ਜ਼ review      | Longer public words should be chunked by known units.      | ਦ, ਰ, ਆ/ਾ    | Read door or entrance text with support.      |

## Coverage Notes

- Target-domain samples: menus, tea stalls, bus labels, rail signs, markets,
  shopfronts, school labels, hospitals, open/closed signs, and Punjab place
  names.
- Known-unit coverage goal: by Lesson 9, learners handle common base letters and
  high-payoff matras; by Lesson 15, they have seen tippi, addak, nukta, and a
  first pairin-letter example.
- Deferred high-load material: full pairin inventory, tone/aspiration history,
  full Perso-Arabic loan-letter set, bindi versus tippi distribution, digits,
  handwriting, and production spelling.
