# Japanese Kana And Kanji Reading Lesson Sequence

This v1 teaches a compact survival path through hiragana, katakana, and a small
set of high-payoff kanji. It avoids full grammar and full kanji systems.

## Course Shape

- First-session reading win: recognize `水`, `すし`, and `カフェ`.
- Approximate lesson count: 20 lessons.
- Structural family: mixed Japanese writing with two kana syllabaries and
  logographic kanji.
- Required app support beyond the current Thai runtime: mixed-script
  segmentation, no-whitespace word handling, kana variant metadata, long-vowel
  and small-kana chunks, and kanji component hints.

## Stage 1: Hiragana And Survival Kanji

| Lesson | Anchor          | New units          | Rule or pattern                                        | Review units | Drill focus                      |
| ------ | --------------- | ------------------ | ------------------------------------------------------ | ------------ | -------------------------------- |
| 1      | `水` and `みず` | 水, み, ず preview | Kanji can carry meaning and kana can show reading.     | none         | Match kanji to survival meaning. |
| 2      | `あいうえお`    | あ, い, う, え, お | Hiragana symbols represent syllables.                  | 水           | Read vowel-row kana.             |
| 3      | `米` and `こめ` | 米, こ, め         | Kana spell readings while kanji carries meaning.       | vowels       | Read a food word.                |
| 4      | `すし`          | す, し             | Some kana romanize irregularly such as shi.            | vowels       | Decode a familiar menu word.     |
| 5      | `は` and `の`   | は, の             | Particles can have special function and pronunciation. | す, し       | Spot particles in short phrases. |

## Stage 2: Katakana And Loanwords

| Lesson | Anchor            | New units             | Rule or pattern                               | Review units | Drill focus                         |
| ------ | ----------------- | --------------------- | --------------------------------------------- | ------------ | ----------------------------------- |
| 6      | `カフェ`          | カ, フ, ェ            | Katakana often marks loanwords.               | kana vowels  | Read a cafe sign.                   |
| 7      | `バス`            | dakuten, バ, ス       | Dakuten voices kana series.                   | カ, フ       | Read bus and simple transit labels. |
| 8      | `ビール`          | ビ, ー, ル            | Katakana uses the chōon mark for long vowels. | dakuten      | Decode long-vowel loanwords.        |
| 9      | `レストラン`      | レ, ト, ラ, ン        | Longer katakana words can be chunked.         | ス, ン       | Read restaurant signs.              |
| 10     | small-kana review | small ゃ/ゅ/ょ and ェ | Small kana modify the preceding syllable.     | katakana     | Recognize combination chunks.       |

## Stage 3: Mixed-Script Sign And Menu Reading

| Lesson | Anchor           | New units       | Rule or pattern                                         | Review units | Drill focus                        |
| ------ | ---------------- | --------------- | ------------------------------------------------------- | ------------ | ---------------------------------- |
| 11     | `駅`             | 駅, え, き      | Transit kanji often appear alone or with kana readings. | え, き       | Read station signage.              |
| 12     | `入口`           | 入, 口          | Two kanji can form a sign word.                         | 駅           | Read entrance signs.               |
| 13     | `出口`           | 出              | Entrance and exit form a kanji pair.                    | 入, 口       | Contrast entry and exit signs.     |
| 14     | `食べる`         | 食, べ, る      | Kanji stem plus hiragana ending is common.              | kana rows    | Segment mixed-script verbs.        |
| 15     | `飲む`           | 飲, む          | Kanji plus kana ending supports beverage words.         | 食           | Read drink-related labels.         |
| 16     | `肉`             | 肉              | Single kanji can be a menu category.                    | 食           | Scan menu categories.              |
| 17     | `魚`             | 魚              | Higher-stroke kanji need visual anchors.                | 肉           | Contrast meat and fish categories. |
| 18     | `ご飯`           | 飯, ご          | Mixed kana-kanji words may include polite prefixes.     | 米, 食       | Read meal and rice labels.         |
| 19     | `女` and `人`    | 女, 人          | Public signs often use simple category kanji.           | 入, 出       | Read facility labels.              |
| 20     | `日`, `月`, `火` | date/sign kanji | Calendar and warning words reuse simple kanji.          | all prior    | Consolidate mixed-script scanning. |

## Coverage Notes

- Target-domain samples: cafe signs, restaurant menus, train station signs,
  convenience store labels, public restroom labels, and safety labels.
- Known-unit coverage goal: by Lesson 13, learners can recognize basic transit
  sign pairs and common katakana loanwords.
- Deferred high-load material: full JLPT N5 kanji, radical taxonomy, pitch accent,
  handwriting, keigo, grammar trees, and vertical layout.
