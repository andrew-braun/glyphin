# English Braille Reading Lesson Sequence

This staged outline targets uncontracted English braille reading. Visual Unicode
braille cells are a reviewable proxy, not a substitute for tactile learning.

## Course Shape

- First-session reading win: read `⠉⠁⠞`, `⠞⠑⠁`, and `⠉⠁⠋⠑` while naming dot
  patterns.
- Approximate lesson count: 14 core lessons plus optional indicators and numbers.
- Structural family: tactile notation encoded as Unicode braille cells with
  dot-number metadata, spaces, indicators, punctuation, and later contractions.
- Required app support beyond the current Thai runtime: notation-course modeling,
  dot-pattern metadata, tactile or haptic review modes, screen-reader-safe labels,
  braille-cell sizing, keyboard alternatives, and accessibility review by braille
  readers.

## Stage 1: First Cell Patterns

| Lesson | Anchor | New units | Rule or pattern                                   | Review units | Drill focus                                  |
| ------ | ------ | --------- | ------------------------------------------------- | ------------ | -------------------------------------------- |
| 1      | `⠉⠁⠞`  | ⠁, ⠉, ⠞   | A braille cell is a six-dot pattern.              | none         | Match cells to dot numbers and letters.      |
| 2      | `⠃⠁⠛`  | ⠃, ⠛      | Related cells add dots in predictable positions.  | ⠁            | Compare dot patterns by touch-ready labels.  |
| 3      | `⠞⠑⠁`  | ⠑         | Words are sequences of cells separated by spaces. | ⠞, ⠁         | Decode a short practical word.               |
| 4      | `⠉⠁⠋⠑` | ⠋         | Unicode braille display is visual support only.   | ⠉, ⠁, ⠑      | Read a cafe label and name each dot pattern. |

## Stage 2: Accessible Signage Words

| Lesson | Anchor | New units | Rule or pattern                                  | Review units | Drill focus                              |
| ------ | ------ | --------- | ------------------------------------------------ | ------------ | ---------------------------------------- |
| 5      | `⠍⠑⠝⠥` | ⠍, ⠝, ⠥   | Common labels should be read cell by cell first. | ⠑            | Decode menu labels.                      |
| 6      | `⠋⠕⠕⠙` | ⠕, ⠙      | Repeated cells should stay stable in layout.     | ⠋            | Read a practical label with repeated ⠕.  |
| 7      | `⠙⠕⠕⠗` | ⠗         | Navigation words build from common cells.        | ⠙, ⠕         | Decode room and door labels.             |
| 8      | `⠗⠕⠕⠍` | ⠍ review  | Similar words can share tactile chunks.          | ⠗, ⠕         | Pair room and door in navigation drills. |

## Stage 3: Public Facilities And Indicators

| Lesson | Anchor   | New units | Rule or pattern                                            | Review units | Drill focus                                           |
| ------ | -------- | --------- | ---------------------------------------------------------- | ------------ | ----------------------------------------------------- |
| 9      | `⠑⠝⠞⠑⠗`  | ⠝ review  | Enter and exit form a high-value sign pair.                | ⠑, ⠞, ⠗      | Read entry navigation labels.                         |
| 10     | `⠑⠭⠊⠞`   | ⠭, ⠊      | Less common letters can be justified by strong signs.      | ⠑, ⠞         | Decode exit labels.                                   |
| 11     | `⠠⠑⠭⠊⠞`  | ⠠         | The capital indicator is a cell with a function.           | exit cells   | Read all-caps signage without treating ⠠ as a letter. |
| 12     | `⠞⠕⠊⠇⠑⠞` | ⠇         | Longer labels are read by stable cell chunks.              | ⠞, ⠕, ⠊, ⠑   | Decode a public-facility anchor.                      |
| 13     | `⠇⠊⠋⠞`   | ⠇ review  | Elevator or lift labels are high-value accessibility text. | ⠊, ⠋, ⠞      | Read compact facility labels.                         |
| 14     | `⠺⠁⠞⠑⠗`  | ⠺         | High-utility words can add later cells.                    | ⠁, ⠞, ⠑, ⠗   | Decode a practical label and review sequence length.  |

## Optional Review

- Add number indicator `⠼` for room, elevator, and platform labels after letter
  cells are stable.
- Add punctuation cells only after word spacing is reliable.
- Defer UEB contractions until the app can represent grade level and contraction
  rules clearly.

## Coverage Notes

- Target-domain samples: accessible restroom signs, elevator and room labels,
  transit labels, medicine and packaging labels, menu labels, public navigation,
  and learner transcriptions.
- Known-cell coverage goal: by Lesson 8, learners recognize the first practical
  letter set plus space behavior and repeated cells.
- Known-word coverage goal: by Lesson 14, learners recognize cafe, tea, menu,
  food, door, room, enter, exit, toilet, lift, and water in uncontracted braille.
- Deferred high-load material: contracted braille, tactile fluency, embossing,
  refreshable braille display integration, full punctuation, numbers, math, and
  capitalization beyond common signs.
