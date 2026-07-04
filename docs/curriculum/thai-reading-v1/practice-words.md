# Thai Reading v1 — Practice Words by Lesson (14–46)

**Status:** authoring source for Stage 6 backfill (L14–21) and Stage 7–14 authoring
(L22–46). Provided 2026-07-04. Companion to
[`lesson-sequence.md`](lesson-sequence.md); consumed per authoring wave in
[`../../../.ai/2026-06-28-thai-curriculum-completion.md`](../../../.ai/2026-06-28-thai-curriculum-completion.md).

## How to use this file when authoring `src/lib/data/thai.ts`

- Each lesson lists ~15–20 real, glyph-constrained practice items. ★ marks the
  "new-unit-only / new-unit-maximizing" target words — author these as
  `drillTarget: true` and surface them first in UI.
- **Romanization already matches the app.** `thai.ts` word `pronunciation`
  fields are Paiboon with tone diacritics (`dtoo`, `bpìt`, `gài`, `khâao`).
  When transcribing from this doc, normalize IPA vowel notation to the app's
  digraph convention: `ɔɔ → aw`, `əə → er`, `ʉʉ → ue`, `ʉ → ue` (short). Keep
  the tone diacritics (`à â á ǎ`) as-is.
- **Preview-glyph rule.** Rows flagged "previews L\_\_" or "good-to-know" that
  contain a glyph not yet taught by that lesson's point in the sequence (e.g.
  `ทราย` in L15 previews L45; `ก๋วยเตี๋ยว` in L26 previews L34) must **not** be
  `drillTarget` words. Author them as `tier: "extension"` context only, or defer
  them to the lesson that unlocks the glyph.
- **Formal/rare flag.** Stage 13–14 words (L43–46) are largely Pali/Sanskrit,
  formal, or archaic. Mark them as recognition/context, not everyday decoding
  targets, per the L46 recognition-only decision.
- **L35 note.** The locked plan anchor for L35 is `ข่าว` (single `anchorWord`).
  This doc proposes a `กา / ขา / ค่า` minimal-pair set as the _practice table_
  for the tone-class synthesis — compatible: keep `ข่าว` as the lesson anchor,
  use the minimal set as the drill body.

Romanization/tone shorthand and full sourcing methodology are recorded at the
bottom of this file.

---

## Lesson 14 — Stage 6 — ของ — new: ง (consonant), final ง, อ as "aw" vowel

Rule: ง = velar nasal /ng/ both initial (งา) and final (ของ). After a consonant
with no other vowel, อ = long "aw" vowel (รอ = raw).

| Thai     | Paiboon       | English                 | Tone notes                                  |
| -------- | ------------- | ----------------------- | ------------------------------------------- |
| ของ ★    | kɔ̌ɔng         | of / thing / belongings | RISING — high ข + live (final ง). freq ≈864 |
| รอ ★     | rɔɔ           | to wait                 | MID — low ร + long aw, live                 |
| มอง ★    | mɔɔng         | to look / gaze          | MID — low ม + aw + final ง                  |
| ลอง ★    | lɔɔng         | to try                  | MID — low ล + aw + final ง                  |
| งา ★     | ngaa          | sesame / tusk           | MID — low ง initial + aa                    |
| ของกิน ★ | kɔ̌ɔng-gin     | food / things to eat    | rising+mid                                  |
| ง่าย     | ngâai         | easy                    | FALLING — low ง + mai ek                    |
| ต้อง     | dtông         | must / have to          | FALLING — mid ต + aw + mai tho. final ง     |
| สอง      | sɔ̌ɔng         | two                     | RISING — high ส + aw + final ง              |
| ห้อง     | hông          | room                    | FALLING — high ห + mai tho. final ง         |
| ทาง      | thaang        | way / direction         | MID — low ท + aa + final ง                  |
| จอง      | jɔɔng         | to reserve / book       | MID — mid จ + aw + final ง                  |
| ตรง      | dtrong        | straight                | MID — mid dtr-cluster + short-o + final ง   |
| ยังไง    | yang-ngai     | how (colloquial)        | mid+mid; double ง                           |
| ข้างหลัง | kâang-lǎng    | behind                  | falling+rising; final ง twice               |
| ร้องเพลง | rɔ́ɔng-phleeng | to sing                 | high+mid                                    |

## Lesson 15 — Stage 6 — ทาง — new: ท

Rule: ท (tho thahaan), LOW class, /th/ aspirated initial; common final /t/.

| Thai     | Paiboon    | English                | Tone notes                                            |
| -------- | ---------- | ---------------------- | ----------------------------------------------------- |
| ทาง ★    | thaang     | way / direction        | MID — low ท + aa + ง                                  |
| ทา ★     | thaa       | to apply / spread      | MID — low ท + long aa, live                           |
| ทาน ★    | thaan      | to eat (polite)        | MID — low ท + aa + final น                            |
| ทอง ★    | thɔɔng     | gold                   | MID — low ท + aw + ง                                  |
| ทางออก ★ | thaang-ɔ̀ɔk | exit                   | mid+low; ออก low (mid อ + dead)                       |
| ทำ       | tham       | to do / make           | MID — low ท + am, live                                |
| ที่      | thîi       | at / place / (ordinal) | FALLING — low ท + mai ek                              |
| ทุก      | thúk       | every                  | HIGH — low ท + dead short                             |
| เท่าไหร่ | thâo-rài   | how much               | falling+low                                           |
| ทิศ      | thít       | direction              | HIGH — low ท + dead short                             |
| ท่าน     | thâan      | you (formal)           | FALLING — low ท + mai ek                              |
| ทอด      | thɔ̂ɔt      | to deep-fry            | FALLING — low ท + aw long + dead ด                    |
| โทร      | thoo       | to phone (colloq)      | MID — low ท + oo                                      |
| ทีวี     | thii-wii   | TV                     | mid+mid                                               |
| ทราย     | saai       | sand                   | MID — ทร pronounced /s/ (false cluster). PREVIEWS L45 |
| ทาน้ำ    | thaa-náam  | to apply water         | mid+high                                              |

## Lesson 16 — Stage 6 — จะ — new: จ, ะ (short a)

Rule: จ (jo jaan), MID class /j/. ◌ะ = short "a" (dead). จะ = future marker.

| Thai     | Paiboon      | English                  | Tone notes                                     |
| -------- | ------------ | ------------------------ | ---------------------------------------------- |
| จะ ★     | jà           | will (future marker)     | LOW — mid จ + short ะ (dead)                   |
| จาน ★    | jaan         | plate                    | MID — mid จ + aa + น                           |
| จด ★     | jòt          | to note down             | LOW — mid จ + dead ด                           |
| กะ ★     | gà           | to estimate / work shift | LOW — mid ก + ะ short                          |
| จะกิน ★  | jà-gin       | will eat                 | low+mid                                        |
| จะมา ★   | jà-maa       | will come                | low+mid                                        |
| จริง     | jing         | true / really            | MID — จร false cluster, ร silent, จ mid + live |
| ใจ       | jai          | heart / mind             | MID — mid จ + ใ                                |
| จ่าย     | jàai         | to pay                   | LOW — mid จ + mai ek                           |
| จำ       | jam          | to remember              | MID — mid จ + am                               |
| จบ       | jòp          | to finish / end          | LOW — mid จ + dead บ                           |
| และ      | láe          | and                      | HIGH — low ล + แ-ะ short (dead)                |
| จอด      | jɔ̀ɔt         | to park                  | LOW — mid จ + aw + dead ด                      |
| จะไป     | jà-bpai      | will go                  | low+mid                                        |
| จักรยาน  | jàk-grà-yaan | bicycle                  | low-low-mid                                    |
| จะเอาไหม | jà-ao-mǎi    | (do you) want it?        | phrase                                         |

## Lesson 17 — Stage 6 — เกม — new: เ (e vowel)

Rule: เ- = front "ee" (long), written BEFORE the consonant, read after.

| Thai    | Paiboon    | English                | Tone notes                              |
| ------- | ---------- | ---------------------- | --------------------------------------- |
| เกม ★   | geem       | game                   | MID — mid ก + ee + ม (loanword)         |
| เท ★    | thee       | to pour                | MID — low ท + ee                        |
| เตะ ★   | dtè        | to kick                | LOW — mid ต + เ-ะ short                 |
| เลข ★   | lêek       | number / math          | FALLING — low ล + ee + dead ข           |
| เกะ ★   | gè         | to obstruct (in เกะกะ) | LOW — mid ก + เ-ะ short. marginal alone |
| เธอ     | thəə       | you (intimate)         | MID — low ธ + เ-อ                       |
| เพลง    | phleeng    | song                   | MID — low phl-cluster + ee + ง          |
| เร็ว    | rew        | fast                   | MID — low ร + เ-็ short + ว, live       |
| เป็น    | bpen       | to be                  | MID — mid ป + เ-็ short + น, live       |
| เห็น    | hěn        | to see                 | RISING — high ห + เ-็ + น live          |
| เอา     | ao         | to want / take         | MID — mid อ + เ-า                       |
| เช้า    | cháo       | morning                | HIGH — low ช + เ-า + mai tho            |
| เล่น    | lên        | to play                | FALLING — low ล + ee + mai ek           |
| เงิน    | ngən       | money                  | MID — low ง + เ-ิ (er short) + น        |
| เวลา    | wee-laa    | time                   | mid+mid                                 |
| เปิดเกม | bpə̀ət-geem | to start a game        | low+mid                                 |

## Lesson 18 — Stage 6 — ไก่ — new: ไ, ใ (ai vowels)

Rule: ไ (mai malai) and ใ (mai muan) both = "ai", written before the consonant.
ใ used in only ~20 native words; ไ everywhere else.

| Thai   | Paiboon | English             | Tone notes                                   |
| ------ | ------- | ------------------- | -------------------------------------------- |
| ไก่ ★  | gài     | chicken             | LOW — mid ก + ไ + mai ek                     |
| ไม่ ★  | mâi     | not                 | FALLING — low ม + ไ + mai ek. very high freq |
| ใจ ★   | jai     | heart / mind        | MID — mid จ + ใ                              |
| ใช่ ★  | châi    | yes / correct       | FALLING — low ช + ใ + mai ek                 |
| ไหน ★  | nǎi     | which / where       | RISING — ห leads น (silent). freq ≈374       |
| ใหม่ ★ | mài     | new                 | LOW — ห leads ม + mai ek (uses ใ)            |
| ไป     | bpai    | to go               | MID — mid ป + ไ. very high freq              |
| ได้    | dâai    | can / get           | FALLING — mid ด + ไ + mai tho                |
| ไหม    | mǎi     | (question particle) | RISING — ห leads ม. freq ≈360                |
| ใหญ่   | yài     | big                 | LOW — ห leads ญ + mai ek (uses ใ)            |
| ใช้    | chái    | to use              | HIGH — low ช + ใ + mai tho                   |
| ใน     | nai     | in                  | MID — low น + ใ                              |
| ให้    | hâi     | to give / for       | FALLING — high ห + ใ + mai tho               |
| ไทย    | thai    | Thai                | MID — low ท + ไ (+ silent ย)                 |
| ไข่    | khài    | egg                 | LOW — high ข + ไ + mai ek                    |
| ใกล้   | glâi    | near                | FALLING — mid gl-cluster + ใ + mai tho       |

## Lesson 19 — Stage 6 — โต — new: โ (o vowel)

Rule: โ- = long "oo", written before the consonant.

| Thai      | Paiboon            | English            | Tone notes                                       |
| --------- | ------------------ | ------------------ | ------------------------------------------------ |
| โต ★      | dtoo               | big / to grow      | MID — mid ต + oo                                 |
| โมง ★     | moong              | o'clock            | MID — low ม + oo + ง. freq ≈442                  |
| โดน ★     | doon               | to get (passive)   | MID — mid ด + oo + น                             |
| โง่ ★     | ngôo               | stupid             | FALLING — low ง + mai ek                         |
| โล ★      | loo                | kilo (colloq)      | MID — low ล + oo                                 |
| โทร       | thoo               | to phone           | MID — low ท + oo                                 |
| โรง       | roong              | building / hall    | MID — low ร + oo + ง                             |
| โต๊ะ      | dtó                | table              | HIGH — mid ต + โ-ะ short + mai tri. PREVIEWS L34 |
| โอเค      | oo-kee             | OK                 | mid+mid (loanword)                               |
| โกหก      | goo-hòk            | to lie             | mid+low                                          |
| โทษ       | thôot              | punishment / blame | FALLING — low ท + oo + dead ษ long               |
| โชค       | chôok              | luck               | FALLING — low ช + oo + dead ค                    |
| โรงเรียน  | roong-rian         | school             | mid+mid                                          |
| โรงพยาบาล | roong-phá-yaa-baan | hospital           | multi-syllable                                   |
| โมโห      | moo-hǒo            | angry              | mid+rising                                       |
| โทรหา     | thoo-hǎa           | to call (someone)  | mid+rising                                       |

## Lesson 20 — Stage 6 — ปิด — new: ป

Rule: ป (bpo bplaa), MID class, unaspirated /bp/. Contrast ผ (ph) and พ (ph).

| Thai    | Paiboon     | English         | Tone notes                           |
| ------- | ----------- | --------------- | ------------------------------------ |
| ปิด ★   | bpìt        | to close        | LOW — mid ป + dead ด                 |
| เปิด ★  | bpə̀ət       | to open         | LOW — mid ป + เ-ิ (er long) + dead ด |
| ไป ★    | bpai        | to go           | MID — mid ป + ไ                      |
| ปลา ★   | bplaa       | fish            | MID — mid bpl-cluster + aa           |
| ปี ★    | bpii        | year            | MID — mid ป + ii                     |
| ปา ★    | bpaa        | to throw        | MID — mid ป + aa                     |
| เป็น    | bpen        | to be           | MID — mid ป + short + น live         |
| ป้าย    | bpâai       | sign / label    | FALLING — mid ป + aa + mai tho       |
| ปวด     | bpùuat      | to ache         | LOW — mid ป + ua + dead ด            |
| ปาก     | bpàak       | mouth           | LOW — mid ป + aa + dead ก            |
| เปล่า   | bplào       | empty / no      | LOW — mid bpl + เ-า + mai ek         |
| ประตู   | bprà-dtuu   | door            | low+mid                              |
| ประเทศ  | bprà-thêet  | country         | low+falling                          |
| ปลอดภัย | bplɔ̀ɔt-phai | safe            | low+mid                              |
| ปกติ    | bpòk-gà-dtì | normal          | low-low-low                          |
| ปิดร้าน | bpìt-ráan   | to close a shop | low+high                             |

## Lesson 21 — Stage 6 — ยา — new: ย; final ย/ว as glide finals

Rule: ย (yo yak) /j/ initial; as final, ย = glide "-i" (สาย), ว = glide "-o/-u" (ขาว).

| Thai        | Paiboon       | English              | Tone notes                           |
| ----------- | ------------- | -------------------- | ------------------------------------ |
| ยา ★        | yaa           | medicine             | MID — low ย + aa                     |
| ยาก ★       | yâak          | difficult            | FALLING — low ย + aa + dead ก long   |
| ยาว ★       | yaao          | long                 | MID — low ย + aa + final ว glide     |
| ขาย ★       | kǎai          | to sell              | RISING — high ข + aa + final ย glide |
| ขาว ★       | kǎao          | white                | RISING — high ข + aa + final ว glide |
| ร้านขายยา ★ | ráan-kǎai-yaa | pharmacy             | high+rising+mid; double ย            |
| อยู่        | yùu           | to be located / stay | LOW — อ leads ย (ออ นำ) + mai ek     |
| อย่าง       | yàang         | kind / way           | LOW — อ leads ย + mai ek             |
| สวย         | sǔuai         | beautiful            | RISING — high ส + uai (ว glide)      |
| ด้วย        | dûuai         | also / with          | FALLING — mid ด + uai + mai tho      |
| เร็ว        | rew           | fast                 | MID — low ร + short + ว glide        |
| ข้าว        | kâao          | rice                 | FALLING — high ข + aa + ว + mai tho  |
| ยิ้ม        | yím           | to smile             | HIGH — low ย + mai tho               |
| ยืน         | yʉʉn          | to stand             | MID — low ย + ue-long + น            |
| สาย         | sǎai          | late / line          | RISING — high ส + aa + ย glide       |
| ขายของ      | kǎai-kɔ̌ɔng    | to sell goods        | rising+rising                        |

## Lesson 22 — Stage 7 — คน — new: ค

Rule: ค (kho khwai), LOW class, aspirated /k/. Very high frequency.

| Thai      | Paiboon     | English                             | Tone notes                                             |
| --------- | ----------- | ----------------------------------- | ------------------------------------------------------ |
| คน ★      | kon         | person                              | MID — low ค + live (น). freq ≈3136                     |
| คุณ ★     | kun         | you                                 | MID — low ค + live (ณ)                                 |
| ครับ ★    | kráp        | polite particle (male)              | HIGH — low ค (kr-cluster) + dead short. casual คับ káp |
| ค่ะ ★     | kâ          | polite particle (female, statement) | FALLING — low ค + mai ek. question form คะ = HIGH (ká) |
| ความรัก ★ | kwaam-rák   | love                                | mid+high                                               |
| คิด       | kít         | to think                            | HIGH — low ค + dead short                              |
| ค่า       | kâa         | value / fee                         | FALLING — low ค + mai ek                               |
| แค่       | kâe         | only / just                         | FALLING — low ค + แ + mai ek                           |
| คำ        | kham        | word                                | MID — low ค + am                                       |
| ครู       | kruu        | teacher                             | MID — low kr-cluster + uu                              |
| ความสุข   | kwaam-sùk   | happiness                           | mid+low                                                |
| คืน       | kʉʉn        | night / to return                   | MID — low ค + ue-long + น                              |
| คุย       | kui         | to chat                             | MID — low ค + ui                                       |
| ครอบครัว  | krɔ̂ɔp-kruua | family                              | falling+mid                                            |
| คงจะ      | kong-jà     | probably                            | mid+low                                                |
| คิดถึง    | kít-thʉ̌ng   | to miss (someone)                   | high+rising                                            |

## Lesson 23 — Stage 7 — แพง — new: พ

Rule: พ (pho phan), LOW class, aspirated /ph/. Distinguish ผ (high /ph/), ป (mid /bp/).

| Thai     | Paiboon    | English               | Tone notes                                       |
| -------- | ---------- | --------------------- | ------------------------------------------------ |
| แพง ★    | phaeng     | expensive             | MID — low พ + แ + live ง                         |
| พ่อ ★    | phâw       | father                | FALLING — low พ + mai ek                         |
| เพื่อน ★ | phûuean    | friend                | FALLING — low พ + เ-ือ + mai ek                  |
| พูด ★    | phûut      | to speak              | FALLING — low พ + uu + dead ด long               |
| พบ ★     | phóp       | to meet               | HIGH — low พ + dead short บ                      |
| พา       | phaa       | to lead / take        | MID — low พ + aa                                 |
| เพลง     | phleeng    | song                  | MID — low phl-cluster + ee + ง                   |
| แพทย์    | phâet      | doctor (formal)       | FALLING — low พ + แ long + silent ย์. colloq หมอ |
| พี่      | phîi       | older sibling         | FALLING — low พ + mai ek                         |
| แพ้      | pháe       | to lose / be allergic | HIGH — low พ + mai tho                           |
| พอ       | phɔɔ       | enough                | MID — low พ + aw                                 |
| เพราะ    | phrɔ́       | because               | HIGH — low phr + เ-าะ short                      |
| พระ      | phrá       | monk                  | HIGH — low phr + short                           |
| พริก     | phrík      | chili                 | HIGH — low phr + dead short                      |
| พรุ่งนี้ | phrûng-níi | tomorrow              | falling+high                                     |
| เพราะว่า | phrɔ́-wâa   | because               | high+falling                                     |

## Lesson 24 — Stage 7 — น้ำ — new: ◌ำ (am vowel)

Rule: ◌ำ = "am" (short, always live). Exception: น้ำ is long (náam) standalone/
word-final, but short in compounds (น้ำมัน nám-man).

| Thai    | Paiboon      | English              | Tone notes                                        |
| ------- | ------------ | -------------------- | ------------------------------------------------- |
| น้ำ ★   | náam         | water                | HIGH — low น + ำ + mai tho (long when standalone) |
| ทำ ★    | tham         | to do / make         | MID — low ท + ำ                                   |
| คำ ★    | kham         | word                 | MID — low ค + ำ                                   |
| ดำ ★    | dam          | black                | MID — mid ด + ำ                                   |
| จำ ★    | jam          | to remember          | MID — mid จ + ำ                                   |
| ทำไม    | tham-mai     | why                  | mid+mid; freq ≈5686                               |
| นำ      | nam          | to lead              | MID — low น + ำ                                   |
| ทำงาน   | tham-ngaan   | to work              | mid+mid                                           |
| น้ำมัน  | nám-man      | oil / fuel           | high+mid (am short here)                          |
| น้ำแข็ง | nám-kǎeng    | ice                  | high+rising                                       |
| สำคัญ   | sǎm-kan      | important            | rising+mid                                        |
| ทำอาหาร | tham-aa-hǎan | to cook              | phrase                                            |
| กำลัง   | gam-lang     | (progressive marker) | mid+mid                                           |
| คำถาม   | kham-thǎam   | question             | mid+rising                                        |
| ตำรวจ   | dtam-rùuat   | police               | mid+low; freq ≈360                                |
| ทำให้   | tham-hâi     | to cause / make      | mid+falling                                       |

## Lesson 25 — Stage 7 — เขา — new: เ-า (ao vowel)

Rule: เ-า = "ao" (short diphthong) wrapping the consonant.

| Thai    | Paiboon | English         | Tone notes                        |
| ------- | ------- | --------------- | --------------------------------- |
| เขา ★   | kǎo     | he / she / they | RISING — high ข + เ-า. freq ≈1283 |
| เรา ★   | rao     | we              | MID — low ร + เ-า. freq ≈1107     |
| เอา ★   | ao      | to take / want  | MID — mid อ + เ-า                 |
| เก้า ★  | gâo     | nine            | FALLING — mid ก + เ-า + mai tho   |
| เช้า ★  | cháo    | morning         | HIGH — low ช + เ-า + mai tho      |
| เล่า    | lâo     | to tell (story) | FALLING — low ล + เ-า + mai ek    |
| เบา     | bao     | light / soft    | MID — mid บ + เ-า                 |
| เผา     | phǎo    | to burn         | RISING — high ผ + เ-า             |
| เดา     | dao     | to guess        | MID — mid ด + เ-า                 |
| เหล้า   | lâo     | alcohol         | FALLING — ห leads ล + mai tho     |
| เข้า    | kâo     | to enter        | FALLING — high ข + เ-า + mai tho  |
| เท่า    | thâo    | equal to        | FALLING — low ท + เ-า + mai ek    |
| เสา     | sǎo     | pillar / post   | RISING — high ส + เ-า             |
| เก้าอี้ | gâo-îi  | chair           | falling+falling                   |
| เข้าใจ  | kâo-jai | to understand   | falling+mid                       |
| เอาไหม  | ao-mǎi  | want it?        | mid+rising                        |

## Lesson 26 — Stage 8 — ซอย — new: ซ

Rule: ซ (so so), LOW class /s/. Common in loanwords and street vocabulary.

| Thai       | Paiboon      | English           | Tone notes                                                 |
| ---------- | ------------ | ----------------- | ---------------------------------------------------------- |
| ซอย ★      | sɔɔy         | lane / soi        | MID — low ซ + aw + ย                                       |
| ซื้อ ★     | súue         | to buy            | HIGH — low ซ + ue-long + mai tho                           |
| ซ้าย ★     | sáai         | left              | HIGH — low ซ + aa + ย + mai tho                            |
| ซัก ★      | sák          | to wash (clothes) | HIGH — low ซ + dead short ก                                |
| เซ็น ★     | sen          | to sign           | MID — low ซ + เ-็ short + น live                           |
| ซอส        | sɔ́ɔt         | sauce             | HIGH — loanword; spelled long, read short/high (irregular) |
| ซ้ำ        | sám          | to repeat         | HIGH — low ซ + ำ + mai tho                                 |
| ซด         | sót          | to slurp          | HIGH — low ซ + dead short                                  |
| ซวย        | suuai        | unlucky           | MID — low ซ + uai                                          |
| ซอง        | sɔɔng        | envelope          | MID — low ซ + aw + ง                                       |
| ซื้อของ    | súue-kɔ̌ɔng   | to shop           | high+rising                                                |
| ซุป        | súp          | soup              | HIGH — loanword, dead short                                |
| ซ่อม       | sɔ̂ɔm         | to repair         | FALLING — low ซ + aw + mai ek                              |
| ซักผ้า     | sák-phâa     | to do laundry     | high+falling                                               |
| ก๋วยเตี๋ยว | gǔuai-dtǐiao | noodle soup       | rising+rising. PREVIEWS L34                                |
| ซื้อขาย    | súue-kǎai    | to trade          | high+rising                                                |

## Lesson 27 — Stage 8 — ไฟ — new: ฟ

Rule: ฟ (fo fan), LOW class /f/. Contrast ฝ (high-class /f/, L41).

| Thai    | Paiboon   | English            | Tone notes                       |
| ------- | --------- | ------------------ | -------------------------------- |
| ไฟ ★    | fai       | fire / light       | MID — low ฟ + ไ                  |
| ฟัง ★   | fang      | to listen          | MID — low ฟ + live ง             |
| ไฟฟ้า ★ | fai-fáa   | electricity        | mid+high; ฟ้า high (mai tho)     |
| ฟรี ★   | frii      | free               | MID — low ฟ (fr) + ii (loanword) |
| ฟัน ★   | fan       | tooth              | MID — low ฟ + live น             |
| ฟ้า     | fáa       | sky / blue         | HIGH — low ฟ + mai tho           |
| ไฟไหม้  | fai-mâi   | fire (disaster)    | mid+falling                      |
| กาแฟ    | gaa-fae   | coffee             | mid+mid                          |
| ฟุตบอล  | fút-bɔɔn  | football           | loanword                         |
| ฟิล์ม   | fim       | film               | MID — loanword, silent ล์        |
| ฟื้น    | fʉ́ʉn      | to recover         | HIGH — low ฟ + mai tho           |
| ฟาง     | faang     | straw / hay        | MID — low ฟ + aa + ง             |
| ไฟแดง   | fai-daeng | red light          | mid+mid                          |
| เปิดไฟ  | bpə̀ət-fai | turn on the light  | low+mid                          |
| ดับไฟ   | dàp-fai   | turn off the light | low+mid                          |
| ฟรีไหม  | frii-mǎi  | is it free?        | mid+rising                       |

## Lesson 28 — Stage 8 — ถนน — new: ถ

Rule: ถ (tho thung), HIGH class /th/. ถนน demonstrates the leading-consonant
rule: high-class ถ governs syllable 2 → rising (thà-nǒn).

| Thai    | Paiboon      | English              | Tone notes                                         |
| ------- | ------------ | -------------------- | -------------------------------------------------- |
| ถนน ★   | thà-nǒn      | road / street        | LOW+RISING — ถ high+short=low; ถ leads นน → rising |
| ถาม ★   | thǎam        | to ask               | RISING — high ถ + aa + ม live                      |
| ถูก ★   | thùuk        | cheap / correct      | LOW — high ถ + uu + dead ก                         |
| ถ้า ★   | thâa         | if                   | FALLING — high ถ + mai tho                         |
| ถือ ★   | thǔue        | to hold              | RISING — high ถ + ue-long                          |
| ถ้วย    | thûuai       | cup / bowl           | FALLING — high ถ + uai + mai tho                   |
| ถัง     | thǎng        | bucket / tank        | RISING — high ถ + live ง                           |
| ถึง     | thʉ̌ng        | to arrive / until    | RISING — high ถ + ue-short + ง                     |
| ถอน     | thɔ̌ɔn        | to withdraw          | RISING — high ถ + aw + น                           |
| ถอย     | thɔ̌ɔy        | to reverse / back up | RISING — high ถ + aw + ย                           |
| ถ่าย    | thàai        | to photograph        | LOW — high ถ + aa + mai ek                         |
| ถาด     | thàat        | tray                 | LOW — high ถ + aa + dead ด                         |
| ถ่ายรูป | thàai-rûup   | to take a photo      | low+falling                                        |
| ถามทาง  | thǎam-thaang | to ask directions    | rising+mid                                         |
| ถูกต้อง | thùuk-dtông  | correct              | low+falling                                        |
| ถนนใหญ่ | thà-nǒn-yài  | main road            | phrase                                             |

## Lesson 29 — Stage 8 — มือ — new: ◌ื, ◌ึ (ue vowels)

Rule: ◌ื = long "ue"; ◌ึ = short "ue". A bare ◌ื with no final is followed by
silent อ (มือ = mue).

| Thai    | Paiboon   | English           | Tone notes                         |
| ------- | --------- | ----------------- | ---------------------------------- |
| มือ ★   | mʉʉ       | hand              | MID — low ม + ◌ือ (silent อ)       |
| คือ ★   | kʉʉ       | is / namely       | MID — low ค + ◌ือ                  |
| ถือ ★   | thǔue     | to hold           | RISING — high ถ + ◌ือ              |
| ลืม ★   | lʉʉm      | to forget         | MID — low ล + ◌ื + ม               |
| หนึ่ง ★ | nʉ̀ng      | one               | LOW — ห leads น + ◌ึ + ง + mai ek  |
| ดึก     | dʉ̀k       | late at night     | LOW — mid ด + ◌ึ + dead ก          |
| นึก     | nʉ́k       | to think / recall | HIGH — low น + ◌ึ + dead ก         |
| ซื้อ    | súue      | to buy            | HIGH — low ซ + ◌ื + mai tho        |
| ยืม     | yʉʉm      | to borrow         | MID — low ย + ◌ื + ม               |
| มืด     | mʉ̂ʉt      | dark              | FALLING — low ม + ◌ื + dead ด long |
| ตึก     | dtʉ̀k      | building          | LOW — mid ต + ◌ึ + dead ก          |
| ดื่ม    | dʉ̀ʉm      | to drink          | LOW — mid ด + ◌ื + mai ek          |
| คืน     | kʉʉn      | night / to return | MID — low ค + ◌ื + น               |
| มือถือ  | mʉʉ-thǔue | mobile phone      | mid+rising                         |
| รู้สึก  | rúu-sʉ̀k   | to feel           | high+low                           |
| คิดถึง  | kít-thʉ̌ng | to miss (someone) | high+rising                        |

## Lesson 30 — Stage 9 — เบียร์ — new: เ-ีย (ia vowel), ◌์ (karan/silent mark)

Rule: เ-ีย = "ia" diphthong. ◌์ (karan) silences the consonant beneath it,
common in loanwords and Pali/Sanskrit. เบียร์ = "beer" (ร silenced).

| Thai       | Paiboon       | English                | Tone notes                                             |
| ---------- | ------------- | ---------------------- | ------------------------------------------------------ |
| เบียร์ ★   | biia          | beer                   | MID — mid บ + เ-ีย + silent ร์ (karan)                 |
| เสีย ★     | sǐia          | to lose / broken       | RISING — high ส + เ-ีย                                 |
| เมีย ★     | miia          | wife (colloq)          | MID — low ม + เ-ีย                                     |
| เรียน ★    | rian          | to study               | MID — low ร + เ-ีย + น                                 |
| เขียน ★    | kǐian         | to write               | RISING — high ข + เ-ีย + น                             |
| เปียก      | bpìiak        | wet                    | LOW — mid ป + เ-ีย + dead ก                            |
| เดี๋ยว     | dǐiao         | in a moment            | RISING — mid ด + เ-ีย + ว + mai chattawa. PREVIEWS L34 |
| เสื้อ      | sʉ̂ʉa          | shirt                  | FALLING — high ส + เ-ือ + mai tho                      |
| โทรศัพท์   | thoo-rá-sàp   | telephone              | karan silences พ์                                      |
| อาทิตย์    | aa-thít       | week / Sunday          | karan silences ย์                                      |
| สมาร์ทโฟน  | sà-máat-foon  | smartphone             | karan ร์                                               |
| เรียนภาษา  | rian-phaa-sǎa | to study a language    | phrase                                                 |
| เปียโน     | bpiia-noo     | piano                  | loanword                                               |
| เสียใจ     | sǐia-jai      | sad                    | rising+mid                                             |
| วันอาทิตย์ | wan-aa-thít   | Sunday                 | karan ย์                                               |
| เสียเงิน   | sǐia-ngən     | to spend / waste money | rising+mid                                             |

## Lesson 31 — Stage 9 — วัว — new: ◌ัว (ua vowel)

Rule: ◌ัว = "ua" diphthong with no final; becomes ◌ว◌ with a final (สวน sǔuan).

| Thai     | Paiboon     | English           | Tone notes                         |
| -------- | ----------- | ----------------- | ---------------------------------- |
| วัว ★    | wuua        | cow               | MID — low ว + ◌ัว                  |
| ตัว ★    | dtuua       | body / classifier | MID — mid ต + ◌ัว                  |
| หัว ★    | hǔua        | head              | RISING — high ห + ◌ัว              |
| กลัว ★   | gluua       | to fear           | MID — mid gl-cluster + ◌ัว         |
| ด้วย ★   | dûuai       | also / with       | FALLING — mid ด + ◌ว + ย + mai tho |
| ครัว     | kruua       | kitchen           | MID — low kr + ◌ัว                 |
| ผัว      | phǔua       | husband (colloq)  | RISING — high ผ + ◌ัว              |
| รวย      | ruuai       | rich              | MID — low ร + ◌ว + ย               |
| สวย      | sǔuai       | beautiful         | RISING — high ส + ◌ว + ย           |
| ส่วน     | sùuan       | part / portion    | LOW — high ส + ◌ว + น + mai ek     |
| ตัวเอง   | dtuua-eeng  | oneself           | mid+mid                            |
| ชั่วโมง  | chûua-moong | hour              | falling+mid                        |
| ตัวเลข   | dtuua-lêek  | number / digit    | mid+falling                        |
| ครอบครัว | krɔ̂ɔp-kruua | family            | falling+mid                        |
| มัว      | muua        | dim / blurred     | MID — low ม + ◌ัว                  |
| กลัวไหม  | gluua-mǎi   | are you scared?   | mid+rising                         |

## Lesson 32 — Stage 9 — เจอ — new: เ-อ (er vowel)

Rule: เ-อ = long "er". Reduces to เ-ิ- before a final (เดิน dern); เงิน (ngern) is short.

| Thai      | Paiboon    | English              | Tone notes                              |
| --------- | ---------- | -------------------- | --------------------------------------- |
| เจอ ★     | jəə        | to meet / find       | MID — mid จ + เ-อ                       |
| เธอ ★     | thəə       | you (intimate) / she | MID — low ธ + เ-อ                       |
| เงิน ★    | ngən       | money / silver       | MID — low ง + เ-ิ + น (short exception) |
| เดิน ★    | dəən       | to walk              | MID — mid ด + เ-ิ + น                   |
| เปิด ★    | bpə̀ət      | to open              | LOW — mid ป + เ-ิ + dead ด              |
| เกิด      | gə̀ət       | to be born / happen  | LOW — mid ก + เ-ิ + dead ด              |
| เริ่ม     | rə̂əm       | to begin             | FALLING — low ร + เ-ิ + mai ek          |
| เพิ่ม     | phə̂əm      | to increase          | FALLING — low พ + เ-ิ + mai ek          |
| เลย       | ləəi       | at all / completely  | MID — low ล + เ-ย (er + ย)              |
| เคย       | kəəi       | to have ever         | MID — low ค + เ-ย                       |
| เลิก      | lə̂ək       | to quit / stop       | FALLING — low ล + เ-ิ + dead ก long     |
| เจอกัน    | jəə-gan    | see you / meet up    | mid+mid                                 |
| เงินเดือน | ngən-dʉuan | salary               | mid+mid                                 |
| เดินเล่น  | dəən-lên   | to stroll            | mid+falling                             |
| เปิดร้าน  | bpə̀ət-ráan | to open a shop       | low+high                                |
| เกิดอะไร  | gə̀ət-à-rai | what happened        | phrase                                  |

## Lesson 33 — Stage 9 — ปลา — new: true initial clusters

Rule: A true cluster = stop (ก ข ค ต ป พ ฟ) + ร/ล/ว, pronounced together with NO
inserted vowel. Tone is set by the FIRST consonant's class; a tone mark sits over
the second consonant.

| Thai    | Paiboon      | English                 | Tone notes                                              |
| ------- | ------------ | ----------------------- | ------------------------------------------------------- |
| ปลา ★   | bplaa        | fish                    | MID — ป mid sets tone; bpl + aa                         |
| กลับ ★  | glàp         | to return               | LOW — ก mid + dead บ; gl-cluster                        |
| ครับ ★  | kráp         | polite particle (m)     | HIGH — ค low + dead short; kr-cluster                   |
| กลาง ★  | glaang       | middle / center         | MID — ก mid + live ง; gl-cluster                        |
| ความ ★  | kwaam        | -ness (abstract prefix) | MID — ค low + live ม; kw-cluster                        |
| ปลอดภัย | bplɔ̀ɔt-phai  | safe                    | low+mid; bpl-cluster                                    |
| กรุงเทพ | grung-thêep  | Bangkok                 | mid+falling; gr-cluster                                 |
| เครื่อง | krʉ̂ʉang      | machine / appliance     | FALLING — ค low + mai tho; khr-cluster                  |
| ขวา     | kwǎa         | right (direction)       | RISING — ข high sets tone; kw-cluster                   |
| พระ     | phrá         | monk                    | HIGH — พ low + short; phr-cluster                       |
| ตรง     | dtrong       | straight                | MID — ต mid + short-o + ง; dtr-cluster                  |
| กลัว    | gluua        | to fear                 | MID — ก mid + ◌ัว; gl-cluster                           |
| เปลี่ยน | bplìian      | to change               | LOW — ป mid + mai ek; bpl-cluster                       |
| ใกล้    | glâi         | near                    | FALLING — ก mid + mai tho; gl-cluster                   |
| ปลุก    | bplùk        | to wake (someone)       | LOW — ป mid + dead ก                                    |
| ขนมปัง  | kà-nǒm-bpang | bread                   | ขน is NOT a true cluster — inserted /a/ (contrast item) |

## Lesson 34 — Stage 10 — โต๊ะ — new: ◌๊ (mai tri), ◌๋ (mai chattawa)

Rule: These two marks appear almost exclusively on MID-class consonants.
◌๊ mai tri → HIGH; ◌๋ mai chattawa → RISING. Mostly colloquial/loan/
onomatopoeic and food vocabulary.

| Thai         | Paiboon      | English                           | Tone notes                                      |
| ------------ | ------------ | --------------------------------- | ----------------------------------------------- |
| โต๊ะ ★       | dtó          | table                             | HIGH — mid ต + โ-ะ short + mai tri (๊)          |
| ก๋วยเตี๋ยว ★ | gǔuai-dtǐiao | noodle soup                       | RISING+RISING — both syllables mai chattawa (๋) |
| ตี๋ ★        | dtǐi         | (nickname; Chinese-Thai boy)      | RISING — mid ต + ii + mai chattawa              |
| จ๊ะ ★        | já           | (friendly particle)               | HIGH — mid จ + ะ + mai tri                      |
| เก๊ก ★       | géek         | to pose / chrysanthemum (เก๊กฮวย) | HIGH — mid ก + mai tri                          |
| ป๊ะ          | bpá          | dad (colloq)                      | HIGH — mid ป + mai tri                          |
| ตุ๊กตา       | dtúk-gà-dtaa | doll                              | high-low-mid; mai tri on ตุ๊                    |
| ก๊อก         | gɔ́ɔk         | faucet / tap                      | HIGH — mid ก + aw + mai tri                     |
| เป๊ะ         | bpé          | exactly / perfect (slang)         | HIGH — mid ป + mai tri                          |
| จ๋า          | jǎa          | (sweet response particle)         | RISING — mid จ + mai chattawa                   |
| ก๋ง          | gǒng         | grandfather (Chinese-Thai)        | RISING — mid ก + ง + mai chattawa               |
| เก๋          | gěe          | chic / stylish                    | RISING — mid ก + ee + mai chattawa              |
| โป๊          | bpó          | nude / risqué                     | HIGH — mid ป + oo + mai tri                     |
| ตุ๊ด         | dtút         | (slang)                           | HIGH — mid ต + mai tri                          |
| ตี๋น้อย      | dtǐi-nɔ́ɔy    | (restaurant brand)                | rising+high                                     |
| น้องตี๋      | nɔ́ɔng-dtǐi   | little brother Tee                | phrase                                          |

## Lesson 35 — Stage 10 — ข่าว (anchor) / กา · ขา · ค่า (synthesis set) — full tone-class matrix

Rule: SYNTHESIS. Contrast the three consonant classes on the same vowel /aa/
across marks. Keep `ข่าว` as the lesson anchor; use the minimal set as the drill.

| Thai  | Paiboon | English               | Tone notes                    |
| ----- | ------- | --------------------- | ----------------------------- |
| กา ★  | gaa     | crow                  | MID — mid + live (baseline)   |
| ขา ★  | kǎa     | leg                   | RISING — high + live          |
| คา ★  | khaa    | to be stuck           | MID — low + live              |
| ข่า ★ | khàa    | galangal              | LOW — high + mai ek           |
| ค่า ★ | khâa    | value / fee           | FALLING — low + mai ek        |
| ค้า ★ | kháa    | to trade              | HIGH — low + mai tho          |
| ข้า   | khâa    | I (archaic) / servant | FALLING — high + mai tho      |
| ม้า   | máa     | horse                 | HIGH — low ม + mai tho        |
| หมา   | mǎa     | dog                   | RISING — ห leads ม            |
| ม่าน  | mâan    | curtain               | FALLING — low + mai ek        |
| ปา    | bpaa    | to throw              | MID — mid + live              |
| ป่า   | bpàa    | forest                | LOW — mid + mai ek            |
| ป้า   | bpâa    | aunt                  | FALLING — mid + mai tho       |
| ตา    | dtaa    | eye / grandfather     | MID — mid + live              |
| นา    | naa     | rice field            | MID — low + live              |
| หน้า  | nâa     | face / front / page   | FALLING — ห leads น + mai tho |

## Lesson 36 — Stage 10 — เด็ก — new: ◌็ (mai taikhu / vowel-shortener)

Rule: ◌็ shortens the vowel in a closed syllable, mainly with เ and แ before a
final. Cannot co-occur with a tone mark or above-vowel in standard Thai.

| Thai     | Paiboon   | English           | Tone notes                            |
| -------- | --------- | ----------------- | ------------------------------------- |
| เด็ก ★   | dèk       | child             | LOW — mid ด + เ-็ short + dead ก      |
| เป็น ★   | bpen      | to be             | MID — mid ป + เ-็ + sonorant น (live) |
| เล่น ★   | lên       | to play           | FALLING — low ล + เ-็… + mai ek       |
| เห็น ★   | hěn       | to see            | RISING — high ห + เ-็ + น             |
| เก็บ ★   | gèp       | to keep / collect | LOW — mid ก + เ-็ + dead บ            |
| เย็น     | yen       | cool / evening    | MID — low ย + เ-็ + น                 |
| เผ็ด     | phèt      | spicy             | LOW — high ผ + เ-็ + dead ด           |
| เค็ม     | khem      | salty             | MID — low ค + เ-็ + ม                 |
| เล็ก     | lék       | small             | HIGH — low ล + เ-็ + dead ก           |
| แข็ง     | kǎeng     | hard / strong     | RISING — high ข + แ-็ + ง             |
| เต็ม     | dtem      | full              | MID — mid ต + เ-็ + ม                 |
| เด็กๆ    | dèk-dèk   | children          | low; PREVIEWS ๆ (L37)                 |
| เป็นไง   | bpen-ngai | how's it going    | phrase                                |
| น้ำเย็น  | nám-yen   | cold water        | high+mid                              |
| เห็นด้วย | hěn-dûuai | to agree          | rising+falling                        |
| เก็บเงิน | gèp-ngən  | to save money     | low+mid                               |

## Lesson 37 — Stage 10 — ช้าๆ — new: ◌ๆ (mai yamok / repetition mark)

Rule: ◌ๆ repeats the preceding word/phrase — plural, intensification, or
"each/every." Read the word twice; written attached, with a space after.

| Thai    | Paiboon         | English               | Tone notes                      |
| ------- | --------------- | --------------------- | ------------------------------- |
| ช้าๆ ★  | cháa-cháa       | slowly / take it easy | HIGH (each) — low ช + mai tho   |
| เด็กๆ ★ | dèk-dèk         | children              | LOW (each); plural              |
| เร็วๆ ★ | rew-rew         | quickly / hurry       | MID (each); intensify           |
| บ่อยๆ ★ | bɔ̀ɔy-bɔ̀ɔy       | frequently            | LOW (each) — mid บ + mai ek     |
| ง่ายๆ ★ | ngâai-ngâai     | very easy / simple    | FALLING (each) — low ง + mai ek |
| ใกล้ๆ   | glâi-glâi       | nearby                | FALLING (each)                  |
| มากๆ    | mâak-mâak       | very much             | FALLING (each); intensify       |
| ดีๆ     | dii-dii         | nicely / good ones    | MID (each)                      |
| น้อยๆ   | nɔ́ɔy-nɔ́ɔy       | just a little         | HIGH (each)                     |
| เบาๆ    | bao-bao         | gently / softly       | MID (each)                      |
| เงียบๆ  | ngîiap-ngîiap   | quietly               | FALLING (each)                  |
| ค่อยๆ   | khɔ̂ɔy-khɔ̂ɔy     | gradually / carefully | FALLING (each)                  |
| ร้อนๆ   | rɔ́ɔn-rɔ́ɔn       | piping hot            | HIGH (each); food context       |
| ใหม่ๆ   | mài-mài         | brand new / recently  | LOW (each)                      |
| เล็กๆ   | lék-lék         | tiny                  | HIGH (each)                     |
| พูดช้าๆ | phûut-cháa-cháa | speak slowly          | phrase                          |

## Lesson 38 — Stage 10 — เกาะ / เตะ / แกะ — new: short diphthongs + unwritten short-o

Rule: เ-าะ = short "aw" (dead); เ-ะ = short "e"; แ-ะ = short "ae"; โ-ะ = short "o".
Unwritten short-o: a consonant-consonant syllable with no written vowel = short
"o" (คน kon, นก nók).

| Thai       | Paiboon     | English           | Tone notes                          |
| ---------- | ----------- | ----------------- | ----------------------------------- |
| เกาะ ★     | gɔ̀          | island            | LOW — mid ก + เ-าะ short (dead)     |
| เตะ ★      | dtè         | to kick           | LOW — mid ต + เ-ะ short             |
| แกะ ★      | gàe         | sheep / to unwrap | LOW — mid ก + แ-ะ short             |
| เลอะ ★     | lə́          | messy / dirty     | HIGH — low ล + เ-อะ short           |
| โต๊ะ       | dtó         | table             | HIGH — mid ต + โ-ะ + mai tri        |
| จะ         | jà          | will              | LOW — mid จ + ะ short               |
| และ        | láe         | and               | HIGH — low ล + แ-ะ                  |
| เยอะ       | yə́          | a lot             | HIGH — low ย + เ-อะ                 |
| คน         | kon         | person            | MID — unwritten short-o (ค + น)     |
| ผม         | phǒm        | I (male) / hair   | RISING — high ผ + unwritten o + ม   |
| นก         | nók         | bird              | HIGH — low น + unwritten o + dead ก |
| รถ         | rót         | car / vehicle     | HIGH — low ร + unwritten o + dead ถ |
| จบ         | jòp         | to finish         | LOW — mid จ + unwritten o + dead บ  |
| ฝน         | fǒn         | rain              | RISING — high ฝ + unwritten o + น   |
| สด         | sòt         | fresh             | LOW — high ส + unwritten o + dead ด |
| เกาะอังกฤษ | gɔ̀-ang-grìt | British Isles     | PREVIEWS ฤ (L45)                    |

## Lesson 39 — Stage 11 — ๑๐ บาท — new: Thai numerals ๐๑๒๓๔๕๖๗๘๙

Rule: ๐=0 ๑=1 ๒=2 ๓=3 ๔=4 ๕=5 ๖=6 ๗=7 ๘=8 ๙=9. Appear on temple/park entry
signs, dual pricing, license plates, government documents, and banknotes.
Fares/prices below are illustrative-current; re-verify before final publication.

| Thai        | Paiboon                         | English              | Context                                  |
| ----------- | ------------------------------- | -------------------- | ---------------------------------------- |
| ๑๐ บาท ★    | sìp bàat                        | 10 baht              | common everyday price                    |
| ๘ บาท ★     | bpàet bàat                      | 8 baht               | BMTA daytime bus fare (illustrative)     |
| ๒๐ บาท ★    | yîi-sìp bàat                    | 20 baht              | A/C bus range                            |
| ๑๐๐ ★       | nʉ̀ng rɔ́ɔy                       | 100 (one hundred)    | banknote                                 |
| ๕ บาท ★     | hâa bàat                        | 5 baht               | coin                                     |
| ๓๕ บาท      | sǎam-sìp-hâa bàat               | 35 baht              | taxi flag-fall (illustrative)            |
| ๑๗ บาท      | sìp-jèt bàat                    | 17 baht              | BTS Golden Line flat fare (illustrative) |
| ๙           | gâo                             | nine                 | auspicious number                        |
| ๕๐ สตางค์   | hâa-sìp sà-dtaang               | 50 satang            | coin value                               |
| ๑,๐๐๐       | nʉ̀ng phan                       | 1,000 (one thousand) | banknote                                 |
| ๕๐๐         | hâa-rɔ́ɔy                        | 500                  | banknote                                 |
| ๒๕๖๗        | sɔ̌ɔng-phan hâa-rɔ́ɔy hòk-sìp-jèt | 2567 (Buddhist year) | calendar/date                            |
| ราคา ๔๐ บาท | raa-kaa sìi-sìp bàat            | price 40 baht        | menu phrase                              |
| ห้อง ๓๐๑    | hông sǎam-sǔun-nʉ̀ng             | room 301             | building/room                            |
| เบอร์ ๐๘๑   | bəə sǔun-bpàet-nʉ̀ng             | number 081           | phone number                             |
| ๑๒ บาท      | sìp-sɔ̌ɔng bàat                  | 12 baht              | A/C bus minimum                          |

Flag: ๒ (2) and ๓ (3) are easily confused; drill them as a minimal pair.

## Lesson 40 — Stage 11 — กรุงเทพฯ — new: ฯ (paiyannoi / abbreviation mark)

Rule: ฯ (paiyannoi) marks a well-known long name shortened — but you READ THE FULL
FORM aloud. กรุงเทพฯ = "Krung-thêep-má-hǎa-ná-kawn." ฯลฯ (paiyanyai) = "etc."

| Thai          | Paiboon                             | English               | Tone notes                                      |
| ------------- | ----------------------------------- | --------------------- | ----------------------------------------------- |
| กรุงเทพฯ ★    | grung-thêep (full: …má-hǎa-ná-kawn) | Bangkok               | ฯ abbreviates the ceremonial name; read in full |
| ฯลฯ ★         | láe-ʉ̀ʉn-ʉ̀ʉn                         | etc. / and so on      | paiyanyai; read "and others"                    |
| นายกฯ ★       | naa-yók (full: …rát-thà-mon-dtrii)  | PM (Prime Minister)   | ฯ shortens นายกรัฐมนตรี                         |
| ทูลเกล้าฯ     | thuun-glâo (…thuun-grà-mɔ̀m)         | to present to royalty | formal/royal abbreviation                       |
| โปรดเกล้าฯ    | bpròot-glâo (…bpròot-grà-mɔ̀m)       | royal command verb    | formal                                          |
| กรุงเทพมหานคร | grung-thêep-má-hǎa-ná-kawn          | Bangkok (full)        | the unabbreviated form                          |
| ฯพณฯ          | phá-ná-thân                         | His Excellency        | special paiyannoi form                          |
| กทม.          | gaw-thaw-maw                        | BMA (Bangkok)         | dot-abbreviation alternative                    |
| ในกรุงเทพฯ    | nai grung-thêep                     | in Bangkok            | phrase                                          |
| ไปกรุงเทพฯ    | bpai grung-thêep                    | go to Bangkok         | phrase                                          |
| ผลไม้ ฯลฯ     | phǒn-lá-máai láe-ʉ̀ʉn-ʉ̀ʉn            | fruits, etc.          | list usage                                      |
| เช่น…ฯลฯ      | chên…láe-ʉ̀ʉn-ʉ̀ʉn                    | such as…etc.          | list usage                                      |
| กรุงเทพฯ และ… | grung-thêep láe…                    | Bangkok and…          | phrase                                          |
| นายกฯ พูด     | naa-yók phûut                       | the PM speaks         | phrase                                          |
| สมเด็จฯ       | sǒm-dèt                             | royal title (abbrev.) | formal                                          |
| ราชการ        | râat-chá-gaan                       | government service    | formal context                                  |

Flag: ฯ is read as the FULL words, never as a sound of its own.

## Lesson 41 — Stage 12 — ฉัน — new: ฉ, ฝ

Rule: ฉ (cho ching), HIGH class /ch/. ฝ (fo fa), HIGH class /f/ (contrast low ฟ).
Both high-class → rising default; take only mai ek / mai tho.

| Thai    | Paiboon    | English                   | Tone notes                        |
| ------- | ---------- | ------------------------- | --------------------------------- |
| ฉัน ★   | chǎn       | I / me                    | RISING — high ฉ + live น          |
| ฝน ★    | fǒn        | rain                      | RISING — high ฝ + unwritten o + น |
| ฝาก ★   | fàak       | to deposit / leave with   | LOW — high ฝ + aa + dead ก        |
| ฉลาด ★  | chà-làat   | clever                    | low+low; high ฉ leads             |
| ฝรั่ง ★ | fà-ràng    | Westerner / guava         | low+low; ฝ high, false cluster ฝร |
| ฉี่     | chìi       | to pee (colloq)           | LOW — high ฉ + mai ek             |
| ฉาย     | chǎai      | to project / show (film)  | RISING — high ฉ + aa + ย          |
| ฉบับ    | chà-bàp    | copy / issue (classifier) | low+low                           |
| ฝา      | fǎa        | lid / cover               | RISING — high ฝ + aa              |
| ฝั่ง    | fàng       | bank / side (of river)    | LOW — high ฝ + mai ek             |
| ฝึก     | fʉ̀k        | to train / practice       | LOW — high ฝ + dead ก             |
| ฝัน     | fǎn        | to dream                  | RISING — high ฝ + live น          |
| ฉลอง    | chà-lɔ̌ɔng  | to celebrate              | low+rising                        |
| ฝากเงิน | fàak-ngən  | to deposit money          | low+mid                           |
| ฝนตก    | fǒn dtòk   | it's raining              | rising+low                        |
| ฉุกเฉิน | chùk-chə̌ən | emergency                 | low+rising; sign vocabulary       |

## Lesson 42 — Stage 12 — ใหญ่ — new: ญ, ธ, ภ, ฮ

Rule: ญ (yo ying, LOW, /y/ initial, /n/ final); ธ (tho thong, LOW, /th/); ภ (pho
samphao, LOW, /ph/); ฮ (ho nokhuk, LOW, /h/). Everyday + Pali/Sanskrit words.

| Thai      | Paiboon       | English             | Tone notes                              |
| --------- | ------------- | ------------------- | --------------------------------------- |
| ใหญ่ ★    | yài           | big                 | LOW — ห leads ญ + mai ek; ญ initial /y/ |
| ธนาคาร ★  | thá-naa-khaan | bank                | high+mid+mid; ธ initial /th/            |
| ภาษา ★    | phaa-sǎa      | language            | mid+rising; ภ initial /ph/              |
| ฮา ★      | haa           | funny / hilarious   | MID — low ฮ + aa                        |
| ผู้หญิง ★ | phûu-yǐng     | woman               | falling+rising; ญ initial /y/           |
| ธรรมดา    | tham-má-daa   | ordinary            | mid+high+mid; ธ + รร                    |
| ธง        | thong         | flag                | MID — low ธ + live ง                    |
| ธุระ      | thú-rá        | errand / business   | high+high; ธ initial                    |
| ภาพ       | phâap         | picture / image     | FALLING — low ภ + aa + dead พ long      |
| ภูเขา     | phuu-kǎo      | mountain            | mid+rising; ภ initial                   |
| ฮัลโหล    | han-lǒo       | hello (phone)       | loanword; ฮ initial                     |
| ปัญหา     | bpan-hǎa      | problem             | mid+rising; ญ as /n/ final              |
| ญี่ปุ่น   | yîi-bpùn      | Japan               | falling+low; ญ initial /y/              |
| ธันวาคม   | than-waa-khom | December            | ธ initial; calendar                     |
| เฮ้ย      | həəi          | hey! (exclamation)  | ฮ initial; colloquial                   |
| คุณใหญ่   | khun-yài      | the boss / big shot | phrase                                  |

## Lesson 43 — Stage 13 — ประเทศ — new: ศ, ษ, ณ

Rule: ศ (so sala, HIGH /s/), ษ (so ruesi, HIGH /s/), ณ (no nen, LOW /n/) — mostly
Pali/Sanskrit loanwords; common on signs and in formal vocabulary.

| Thai        | Paiboon         | English                 | Tone notes                          |
| ----------- | --------------- | ----------------------- | ----------------------------------- |
| ประเทศ ★    | bprà-thêet      | country                 | low+falling; ศ as final /t/         |
| ศาล ★       | sǎan            | court (of law)          | RISING — high ศ + aa + น            |
| เศษ ★       | sèet            | fraction / scraps       | LOW — high ศ + dead                 |
| ณ ★         | ná              | at (formal preposition) | HIGH — low ณ + short                |
| ศูนย์ ★     | sǔun            | zero / center           | RISING — high ศ + uu + silent น์    |
| ศึกษา       | sʉ̀k-sǎa         | education / to study    | low+rising; ศ + ษ together          |
| นักศึกษา    | nák-sʉ̀k-sǎa     | university student      | high+low+rising; ศ                  |
| เศรษฐกิจ    | sèet-thà-gìt    | economy                 | ศ+ษ+ฐ; sign/news vocabulary         |
| ศิลปะ       | sǐn-lá-bpà      | art                     | rising+high+low; ศ initial          |
| พิเศษ       | phí-sèet        | special                 | high+low; ษ as final /t/            |
| ศาสนา       | sàat-sà-nǎa     | religion                | ศ initial; formal                   |
| ศุกร์       | sùk             | Friday                  | LOW — high ศ + silent ร์ (วันศุกร์) |
| ลักษณะ      | lák-sà-nà       | characteristic          | ษ; formal                           |
| คณะ         | khá-ná          | faculty / group         | high+high; ณ                        |
| ประเทศไทย   | bprà-thêet-thai | Thailand                | phrase                              |
| ศูนย์การค้า | sǔun-gaan-kháa  | shopping mall           | rising…high; ศ                      |

## Lesson 44 — Stage 13 — กีฬา — new: ฐ ฑ ฒ ฎ ฏ ฆ ฬ ฌ (rare consonants)

Rule: Almost entirely Pali/Sanskrit loanwords, formal/legal vocabulary, proper
nouns. ฬ /l/, ฆ /kh/, ฌ /ch/, ฎ/ฏ /d,t/ (mid), ฐ/ฑ/ฒ /th/. All formal/rare.

| Thai     | Paiboon         | English                   | Tone notes                     |
| -------- | --------------- | ------------------------- | ------------------------------ |
| กีฬา ★   | gii-laa         | sport(s)                  | mid+mid; ฬ /l/ — stadiums/TV   |
| ฐาน ★    | thǎan           | base / pedestal           | RISING — high ฐ + aa + น       |
| ปริญญา ★ | bpà-rin-yaa     | (university) degree       | ญ + formal; graduation context |
| ระฆัง ★  | rá-khang        | bell                      | high+mid; ฆ /kh/; temple       |
| นาฬิกา ★ | naa-lí-gaa      | clock / watch             | mid+high+mid; ฬ /l/            |
| กฎหมาย   | gòt-mǎai        | law                       | low+rising; ฎ /d/ (mid)        |
| ปฏิบัติ  | bpà-dtì-bàt     | to practice / perform     | ฏ /t/ (mid); formal            |
| วัฒนธรรม | wát-thá-ná-tham | culture                   | ฒ /th/; formal/news            |
| ปฐม      | bpà-thǒm        | first / primary           | ฐ                              |
| มณฑล     | mon-thon        | region / mandala          | ฑ /th/; administrative         |
| วุฒิ     | wút-thí         | qualification / seniority | ฒ; formal (วุฒิสภา Senate)     |
| ฌาน      | chaan           | meditative absorption     | ฌ /ch/; Buddhist               |
| ปลาวาฬ   | bplaa-waan      | whale                     | ฬ as final /n/                 |
| รัฐบาล   | rát-thà-baan    | government                | ฐ; very common in news         |
| มาตรฐาน  | mâat-dtrà-thǎan | standard                  | ฐ; product labels/signs        |
| สนามกีฬา | sà-nǎam gii-laa | stadium                   | ฬ; phrase                      |

## Lesson 45 — Stage 13 — อังกฤษ — new: ฤ; leading อ; silent r / ทร = "s"

Rule: ฤ (sara rue) = /rí/, /rúe/, or /rer/ depending on the word. Leading อ (ออ
นำ) makes the next consonant mid-class in exactly four words: อยู่, อย่า, อย่าง,
อยาก (all low tone). ทร often = /s/ (false cluster); ร is silent in จร/ศร/สร.

| Thai       | Paiboon               | English           | Tone notes                              |
| ---------- | --------------------- | ----------------- | --------------------------------------- |
| อังกฤษ ★   | ang-grìt              | England / English | ฤ = /rí/ here; กฤ cluster; low final    |
| ฤดู ★      | rʉ́-duu                | season            | ฤ = /rúe/; high+mid                     |
| อยาก ★     | yàak                  | to want           | LOW — leading อ makes ย mid; dead → low |
| อยู่ ★     | yùu                   | to be (located)   | LOW — leading อ + mai ek                |
| ทราย ★     | saai                  | sand              | ทร = /s/! MID — ร silent                |
| ทราบ       | sâap                  | to know (formal)  | FALLING — ทร=/s/; dead long             |
| อย่าง      | yàang                 | kind / type / -ly | LOW — leading อ + mai ek                |
| อย่า       | yàa                   | don't             | LOW — leading อ + mai ek                |
| จริง       | jing                  | true / real       | MID — จร, ร silent, จ mid + live        |
| ศรี        | sǐi                   | glory (in names)  | RISING — ศร, ร silent; ศ high           |
| สร้าง      | sâang                 | to build          | FALLING — สร, ร silent; mai tho         |
| ฤทธิ์      | rít                   | power / magic     | HIGH — ฤ=/rí/; karan silences ธิ์       |
| วิกฤต      | wí-grìt               | crisis / critical | high+low; กฤ                            |
| พฤษภาคม    | phrʉ́t-sà-phaa-khom    | May               | ฤ=/rúe/; calendar                       |
| พฤหัสบดี   | phá-rʉ́-hàt-sà-baw-dii | Thursday          | ฤ=/rúe/; calendar                       |
| ภาษาอังกฤษ | phaa-sǎa ang-grìt     | English language  | phrase                                  |

## Lesson 46 — Stage 14 — recognition-only — ฃ ฅ ฦ ฦๅ ฤๅ ๅ (archaic/rare)

Rule: RECOGNITION ONLY. ฃ (kho khuat) and ฅ (kho khon) are obsolete — replaced by
ข and ค (no modern words use them). ฦ/ฦๅ (lue) are obsolete, replaced by ลึ/ลือ.
ฤๅ (ruue) is a rare long form of ฤ. ๅ (lakkhangyao) only lengthens ฤ/ฦ.

| Thai            | Paiboon         | English                          | Tone notes                                   |
| --------------- | --------------- | -------------------------------- | -------------------------------------------- |
| ฃ ★             | kaw-khùuat      | "kho khuat" (obsolete letter)    | OBSOLETE high /kh/; now ข. recognition only  |
| ฅ ★             | kaw-khon        | "kho khon" (obsolete letter)     | OBSOLETE low /kh/; now ค. recognition only   |
| ฤๅษี ★          | rʉʉ-sǐi         | hermit / rishi                   | ฤๅ = long /rue/; archaic; literature/temples |
| ฦ ★             | lʉ́              | "lue" (obsolete)                 | OBSOLETE; words now use ลึ (ลึก deep)        |
| ฦๅ ★            | lʉʉ             | "luue" (obsolete)                | OBSOLETE; words now use ลือ                  |
| ๅ               | lák-khâang-yaao | vowel-lengthener (with ฤ/ฦ only) | not a standalone sound                       |
| ฤๅ              | rʉʉ             | "or?" (archaic question word)    | literary; modern หรือ                        |
| สมปฤๅดี         | sǒm-bpà-rʉʉ-dii | consciousness (archaic)          | rare literary; ฤๅ                            |
| ฃวด (archaic)   | khùuat          | bottle (old spelling of ขวด)     | now ขวด; shows ฃ→ข                           |
| ฅน (archaic)    | khon            | person (old spelling of คน)      | now คน; shows ฅ→ค                            |
| น้ำฦก (archaic) | náam-lʉ́k        | deep water (old spelling)        | now น้ำลึก; illustrates obsolescence         |

---

## Sourcing and conventions

- **Frequency source.** Primary ranking = hermitdave _FrequencyWords_
  OpenSubtitles-2016 Thai list (`th_50k.txt`), reflecting spoken/everyday Thai;
  cross-referenced with ThaiPod101 Core 100 and Transparent Language "Top 25
  Thai words." Spellings/tones verified against thai-language.com,
  thai2english.com, and Wiktionary. The raw file has UTF-8/TIS-620 mojibake, so
  reliable counts survive only for a subset (cited inline where known).
- **Romanization.** Paiboon-style phonemic with tone diacritics: unmarked = mid,
  à = low, â = falling, á = high, ǎ = rising; long vowels doubled (aa, ii, uu,
  ee, oo). Consonants: ต=dt, ก=g, ป=bp, จ=j, ค/ข=k(h), ท/ถ=th, พ/ผ=ph. This
  file keeps the source's IPA vowel symbols (ɔɔ, əə, ʉʉ) in the tables;
  normalize to the app digraphs (aw, er, ue) when authoring `thai.ts`.
- **Tone shorthand.** LOW class ค ฅ ฆ ง ช ซ ฌ ญ ฑ ฒ ณ ท ธ น พ ฟ ภ ม ย ร ล ว ฬ ฮ;
  MID class ก จ ด ต บ ป อ (+ฎ ฏ); HIGH class ข ฉ ฐ ถ ผ ฝ ศ ษ ส ห. Live = ends in
  long vowel or sonorant (ม น ง ย ว); dead = ends in stop or short vowel. LOW:
  live+nomark→MID, dead+short→HIGH, dead+long→FALLING, ่→FALLING, ้→HIGH. HIGH:
  live→RISING, dead→LOW, ่→LOW, ้→FALLING. MID: live→MID, dead→LOW, ่→LOW,
  ้→FALLING, ๊→HIGH, ๋→RISING. Leading ห/อ pushes its class onto the next consonant.

### Caveats to carry into content review

- No phrase-frequency corpus exists; phrases were chosen for everyday usefulness
  within the letter pool, not measured frequency. Several (ขอชา, หมูสด, ตี๋น้อย)
  are natural constructed combinations, not fixed idioms.
- Tone is computed from spelling rules and dictionary-verified, but regional/
  colloquial variants exist (e.g. ลาบ is Isan/Lao in origin; standard Thai tone
  is falling). Trust native audio over romanization for any future audio work.
- Numeral-lesson (L39) fares/prices are illustrative of real 2025–2026 signage
  but should be re-verified before publication; they are decoding targets, not
  price references.
- ทร=/s/ (ทราย, ทราบ) and ฤ readings (/rí/ vs /rúe/ vs /rer/) are lexically
  governed — teach per word, not by rule.
