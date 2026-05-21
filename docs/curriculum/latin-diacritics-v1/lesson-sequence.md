# Latin Diacritics Reading Lesson Sequence

This v1 teaches common European Latin-script diacritics through practical menu,
hotel, transit, and sign words. It is multilingual by design but should avoid
pretending to teach complete orthographies.

## Course Shape

- First-session reading win: identify `café`, `entrada`, and `salida` on signs
  and menus.
- Approximate lesson count: 14 lessons.
- Structural family: Latin alphabet extension with combining marks and selected
  special letters.
- Required app support beyond the current Thai runtime: NFC/decomposition
  metadata, case-pair metadata, language context on anchors, and script-aware
  display classes.

## Stage 1: First Decoding Wins

| Lesson | Anchor    | New units      | Rule or pattern                                                    | Review units | Drill focus                                        |
| ------ | --------- | -------------- | ------------------------------------------------------------------ | ------------ | -------------------------------------------------- |
| 1      | `café`    | acute, A, E, F | Acute marks a changed or stressed vowel depending on language.     | none         | Spot the acute mark and read a familiar menu word. |
| 2      | `entrada` | N, T, R, D     | Not every useful word has a mark; build base Latin scanning first. | A, E         | Read entrance signs.                               |
| 3      | `salida`  | S, L, I        | Entrance/exit pairs are high-value environmental print.            | A, D         | Contrast entrance and exit words.                  |
| 4      | `mañana`  | tilde, Ñ       | Tilde over n makes a distinct Spanish letter.                      | A, N         | Contrast n and ñ.                                  |

## Stage 2: Mark Families

| Lesson | Anchor    | New units              | Rule or pattern                                        | Review units   | Drill focus                              |
| ------ | --------- | ---------------------- | ------------------------------------------------------ | -------------- | ---------------------------------------- |
| 5      | `español` | accented vowels with ñ | A word can combine a special letter and a stress mark. | acute, tilde   | Identify multiple marks in one word.     |
| 6      | `crème`   | grave, circumflex      | Grave and circumflex are visually distinct from acute. | E, R           | Sort acute, grave, and circumflex marks. |
| 7      | `entrée`  | double-accent chunking | Multi-accent words should be read by chunks.           | acute, grave   | Read a menu and entrance word family.    |
| 8      | `façade`  | cedilla, C             | Cedilla changes c before vowels such as a and o.       | A, E           | Contrast c and ç.                        |
| 9      | `açúcar`  | cedilla plus acute     | Portuguese words can combine marks across syllables.   | cedilla, acute | Decode ingredient labels.                |

## Stage 3: Language-Specific Extensions

| Lesson | Anchor               | New units                | Rule or pattern                                             | Review units             | Drill focus                                   |
| ------ | -------------------- | ------------------------ | ----------------------------------------------------------- | ------------------------ | --------------------------------------------- |
| 10     | `Straße`             | ß                        | German ß is a letter often seen in street names.            | S, E                     | Recognize eszett without overgeneralizing it. |
| 11     | `Käse`               | umlaut ä                 | German umlaut changes vowel quality.                        | A, E, S                  | Read compact food words.                      |
| 12     | `Bücher`             | umlaut ü                 | Umlaut family includes ä, ö, and ü.                         | umlaut ä                 | Recognize shops and labels.                   |
| 13     | `naïve`              | diaeresis ï              | The same two-dot shape can mark vowel separation in French. | umlaut                   | Contrast name and function of two-dot marks.  |
| 14     | `château` and `pâté` | circumflex consolidation | Longer marked words are readable by familiar chunks.        | acute, grave, circumflex | Read tourism and menu words.                  |

## Coverage Notes

- Target-domain samples: cafe boards, French and Spanish menus, German street
  signs, Portuguese ingredient labels, hotel entrance/exit signs, and tourist
  landmark labels.
- Known-unit coverage goal: by Lesson 9, learners recognize the highest-payoff
  accent, cedilla, and tilde patterns.
- Deferred high-load material: full Polish, Czech, Hungarian, Scandinavian, and
  Vietnamese alphabets; caron, ring, ogonek, breve, double acute, and macron;
  production spelling.
