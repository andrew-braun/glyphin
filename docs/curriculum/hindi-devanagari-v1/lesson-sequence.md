# Hindi Devanagari Reading Lesson Sequence

This staged outline is a bootstrap plan for practical Hindi Devanagari reading.
It teaches the script as an abugida: consonant bases carry an inherent vowel
unless a matra, virama, or conjunct changes the akshara.

## Course Shape

- First-session reading win: read `पानी`, `चाय`, and `बस` from menu and transit
  contexts.
- Approximate lesson count: 15 core lessons plus late conjunct review.
- Structural family: Devanagari abugida with consonant bases, inherent vowel,
  dependent vowel signs, virama, conjuncts, nasal signs, and nukta.
- Required app support beyond the current Thai runtime: language-agnostic text
  fields, pedagogical units that differ from Unicode grapheme clusters,
  per-course akshara segmentation, matra positioning metadata, conjunct units,
  and font checks for combining signs.

## Stage 1: First Decoding Wins

| Lesson | Anchor | New units      | Rule or pattern                                                 | Review units | Drill focus                                 |
| ------ | ------ | -------------- | --------------------------------------------------------------- | ------------ | ------------------------------------------- |
| 1      | `पानी` | प, आ/ा, न, ई/ी | A consonant base has inherent `a`; matras change that vowel.    | none         | Build aksharas from base plus matra.        |
| 2      | `चाय`  | च, य           | `ा` is read after the consonant even when it attaches visually. | प, न, ी      | Read cafe words by akshara chunks.          |
| 3      | `बस`   | ब, स           | Bare consonants carry the inherent vowel in simple words.       | आ/ा          | Contrast `ब` and `बा`.                      |
| 4      | `नाम`  | म              | Long aa and final consonant bases can make compact labels.      | न, आ/ा       | Identify known bases in short public words. |

## Stage 2: Core Signs And Menus

| Lesson | Anchor  | New units | Rule or pattern                                           | Review units | Drill focus                         |
| ------ | ------- | --------- | --------------------------------------------------------- | ------------ | ----------------------------------- |
| 5      | `दाल`   | द, ल      | Dental stops need their own contrast family.              | आ/ा, म       | Decode menu staples.                |
| 6      | `रेल`   | र, ए/े    | Dependent vowel signs can appear above or after the base. | ल, द         | Match visible matra to vowel sound. |
| 7      | `रोटी`  | ओ/ो, ट    | Retroflex letters are distinct from dental letters.       | र, ल, ई/ी    | Read food words with mixed matras.  |
| 8      | `दुकान` | उ/ु, क    | Some matras appear below the consonant base.              | द, न, आ/ा    | Sort matras by visual position.     |
| 9      | `होटल`  | ह         | Loanword signage can still be read by akshara chunks.     | ओ/ो, ट, ल    | Chunk a familiar place word.        |

## Stage 3: Public Facilities And Script Rules

| Lesson | Anchor   | New units    | Rule or pattern                                                      | Review units | Drill focus                                   |
| ------ | -------- | ------------ | -------------------------------------------------------------------- | ------------ | --------------------------------------------- |
| 10     | `बंद`    | ं            | Anusvara marks nasal sound and needs context review.                 | ब, द         | Recognize open and closed signs.              |
| 11     | `खुला`   | ख            | Aspirated consonants are separate letters from plain consonants.     | उ/ु, ल, आ/ा  | Contrast क and ख in large type.               |
| 12     | `बाज़ार` | ज़, ़        | Nukta adapts letters for loan sounds and proper names.               | ब, आ/ा, र    | Spot nukta without treating it as decoration. |
| 13     | `निकास`  | इ/ि          | The short-i matra appears before the consonant but is read after it. | न, क, स      | Practice visual order versus reading order.   |
| 14     | `प्रवेश` | प् + र, श    | Virama suppresses the inherent vowel and builds clusters.            | र, ए/े       | Decode one public-sign conjunct.              |
| 15     | `स्टेशन` | स् + ट, श, न | Conjuncts and borrowed clusters raise load and need late review.     | स, ट, ए/े    | Read a high-value transit word by chunks.     |

## Coverage Notes

- Target-domain samples: menus, tea stalls, bus and rail labels, markets,
  shopfronts, entrances, exits, hotels, and public-facility signs.
- Known-unit coverage goal: by Lesson 9, learners handle common consonants and
  the highest-payoff matras in simple aksharas; by Lesson 15, they have seen
  anusvara, nukta, virama, and first conjuncts.
- Deferred high-load material: full conjunct inventory, schwa deletion, full
  aspirated and retroflex contrast tables, chandrabindu, Vedic signs, digits,
  handwriting, and production spelling.
