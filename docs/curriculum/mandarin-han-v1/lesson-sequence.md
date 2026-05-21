# Mandarin Han Reading Lesson Sequence

This v1 teaches simplified Mandarin Han characters for menu, retail, transit,
and public-sign reading. It uses pinyin as pronunciation support, not as the
main reading target.

## Course Shape

- First-session reading win: recognize `水`, `饭`, and `菜` on menus.
- Approximate lesson count: 16 lessons.
- Structural family: simplified Han characters with component/radical hints,
  pinyin support, no whitespace segmentation, and traditional variants as
  metadata.
- Required app support beyond the current Thai runtime: no-whitespace word
  segmentation, logographic components, simplified/traditional variants, pinyin
  tone marks, and dense CJK rendering checks.

## Stage 1: Food And Drink Foundation

| Lesson | Anchor | New units           | Rule or pattern                                       | Review units | Drill focus                                        |
| ------ | ------ | ------------------- | ----------------------------------------------------- | ------------ | -------------------------------------------------- |
| 1      | `水`   | 水, 人 contrast     | Characters carry meaning as well as sound.            | none         | Recognize water and avoid confusing simple shapes. |
| 2      | `饭`   | 饭, 食              | Components can signal semantic families such as food. | 水           | Read a core meal word.                             |
| 3      | `菜`   | 菜, grass component | Plant-related components often appear in food words.  | 饭           | Scan menu category words.                          |
| 4      | `肉`   | 肉                  | Menu characters can stand alone as category labels.   | 食, 菜       | Contrast plant and meat categories.                |
| 5      | `喝`   | 喝, 口              | Mouth component appears in eating and drinking words. | 水           | Read a drink action word.                          |
| 6      | `酒`   | 酒                  | Specialized components can mark beverage families.    | 喝, 水       | Read alcohol labels.                               |

## Stage 2: Menu Expansion

| Lesson | Anchor | New units           | Rule or pattern                                              | Review units | Drill focus                       |
| ------ | ------ | ------------------- | ------------------------------------------------------------ | ------------ | --------------------------------- |
| 7      | `面`   | 面                  | A character may have multiple meanings by context.           | 饭, 菜       | Read noodle and surface contexts. |
| 8      | `汤`   | 汤, water-side form | Water can appear as a side component.                        | 水, 喝       | Recognize liquid-related words.   |
| 9      | `茶`   | 茶                  | Components repeat across food and beverage words.            | 菜           | Read tea labels.                  |
| 10     | `咖啡` | 咖, 啡              | Loanwords may use sound components and repeated mouth marks. | 口, 茶       | Decode a modern beverage word.    |
| 11     | `价钱` | 价, 钱              | Commerce words combine value and money components.           | menu words   | Read price labels.                |

## Stage 3: Signage And Public Spaces

| Lesson | Anchor            | New units  | Rule or pattern                                         | Review units | Drill focus                      |
| ------ | ----------------- | ---------- | ------------------------------------------------------- | ------------ | -------------------------------- |
| 12     | `开` and `关`     | 开, 关     | Open and closed form a store-status pair.               | prior        | Read retail signs.               |
| 13     | `上` and `下`     | 上, 下     | Direction characters can be visually iconic.            | prior        | Read wayfinding signs.           |
| 14     | `左` and `右`     | 左, 右     | Direction pairs should be learned together.             | 上, 下       | Match direction words to arrows. |
| 15     | `男` and `女`     | 男, 女     | Public facility signs often use category words.         | prior        | Read restroom labels.            |
| 16     | `出口` and `入口` | 出, 入, 口 | Multi-character sign words have manual word boundaries. | 男, 女       | Contrast exit and entrance.      |

## Coverage Notes

- Target-domain samples: menus, drink labels, price boards, shop open/closed
  signs, restroom signs, entrance/exit signs, and station wayfinding.
- Known-unit coverage goal: by Lesson 11, learners can scan a basic menu for
  food, drink, noodle, soup, tea, coffee, and price words.
- Deferred high-load material: handwriting, stroke order, tones as assessment,
  Cantonese, vertical layout, broad HSK vocabulary, and full radical taxonomy.
