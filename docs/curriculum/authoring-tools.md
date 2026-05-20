# Curriculum Authoring Tools

GlyphBridge's first curriculum tools are offline authoring helpers. They create
reviewable files, validate course manifests, score hand-entered candidates, and
generate review packets. They do not download corpora, call external services,
write to Supabase, or publish runtime lessons.

## Commands

Create a starter workspace for a future course:

```sh
pnpm curriculum:scaffold japanese-kana-v1 --name "Japanese Kana" --language-tag ja-Jpan --script Jpan
```

Validate a course manifest:

```sh
pnpm curriculum:validate .ai/curriculum/japanese-kana-v1/manifest.json
```

Score hand-entered anchor or grapheme candidates:

```sh
pnpm curriculum:score .ai/curriculum/japanese-kana-v1/anchor-candidates.csv
pnpm curriculum:score .ai/curriculum/japanese-kana-v1/grapheme-candidates.csv
```

Generate a review packet from the manifest and scored anchor candidates:

```sh
pnpm curriculum:review .ai/curriculum/japanese-kana-v1 --force
```

## Scaffolded Files

The scaffold command creates these files:

- `.ai/curriculum/<course-id>.md`: central course tracker.
- `.ai/curriculum/<course-id>/manifest.json`: machine-validated source and
  course manifest.
- `.ai/curriculum/<course-id>/sources.csv`: source inventory and license notes.
- `.ai/curriculum/<course-id>/grapheme-candidates.csv`: manual grapheme scoring
  input.
- `.ai/curriculum/<course-id>/anchor-candidates.csv`: manual anchor scoring
  input.
- `.ai/curriculum/<course-id>/review-packet.md`: generated reviewer handoff.
- `.ai/curriculum/<course-id>/db-ingestion-strategy.md`: starter strategy for
  moving reviewed data into `curriculum.*` and `delivery.*`.
- `docs/curriculum/<course-id>.md`: durable course notes once the course becomes
  more than a task.

The generated DB strategy intentionally stays Markdown. It should be reviewed
before any seed generator, SQL migration, or publication helper is written.

## Candidate Scoring

The score command implements the formulas from the
[curriculum authoring framework](./authoring-framework.md). It accepts CSV rows
with `candidate_type` set to `anchor` or `grapheme`, appends
`candidate_score` and `score_band`, and writes a sorted `.scored.csv` file.

All scoring fields are numbers from `0` to `1`. Penalties are also numbers from
`0` to `1` and are subtracted from the weighted score. The score is an authoring
signal, not an automatic lesson decision.

## Manifest Validation

The manifest validator checks:

- required course, language, script, normalization, segmentation, source, DB, and
  review fields;
- lowercase kebab-case course IDs;
- known source-use values: `discovery_only`, `scoring_only`, `scoring`, and
  `shipped_content`;
- source domain weights from `0` to `1`;
- license clarity before anything is marked as shipped content.

Unknown licenses are allowed for discovery-only research but should be resolved
before scoring or authoring learner-visible content.

## Corpus Analysis Strategy

Do not build a full corpus-analysis pipeline first. For widely used writing
systems, good prior work already exists: precomputed word frequencies,
segmentation tools, dictionaries, treebanks, and national corpora often cover the
hardest parts.

Recommended order:

1. Start with precomputed sources: `wordfreq`, Leipzig, language-specific
   frequency lists, Unicode/CLDR inventories, Wiktionary, and established learner
   lists.
2. Add language-specific tokenizers only when the target script needs them:
   MeCab or Sudachi for Japanese, CAMeL Tools for Arabic, PyThaiNLP for Thai,
   KoNLPy or mecab-ko for Korean, Indic NLP tools for Indic scripts.
3. Use domain samples to validate rankings rather than to build a giant corpus:
   menus, signs, packaging, transit maps, OpenStreetMap names, Open Food Facts,
   Wikivoyage, or licensed image/text samples.
4. Build custom corpus ingestion only when existing sources disagree, fail a
   target domain, or do not cover the script.

The deferred Unicode inventory probe should come with the corpus-analysis pass.
It can inspect sample text for scripts, code points, grapheme clusters,
normalization differences, and mixed-script behavior before any tokenizer-specific
adapter is added.

## Existing Corpus And Frequency Tools

Useful off-the-shelf options by need:

| Need                               | Existing tools or sources                                                                                       |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Cross-language word frequency      | `wordfreq`, Leipzig Corpora Collection, OPUS, OSCAR, Wikimedia dumps                                            |
| Unicode inventory and segmentation | Unicode UAX #29, CLDR, ICU BreakIterator, `Intl.Segmenter`, Python `regex`                                      |
| Tokenization and morphology        | Universal Dependencies, Stanza, spaCy, UDPipe, CAMeL Tools, PyThaiNLP, MeCab, Sudachi, KoNLPy                   |
| Japanese writing system            | BCCWJ resources, MeCab, Sudachi, JMdict, KANJIDIC2, Joyo and Kyoiku kanji lists                                 |
| Chinese characters                 | SUBTLEX-CH-style lists, Unihan, CC-CEDICT, jieba, pkuseg, Wikimedia dumps                                       |
| Korean Hangul                      | Sejong-style resources, KoNLPy, mecab-ko, Universal Dependencies, Wiktionary                                    |
| Arabic script                      | CAMeL Tools, Buckwalter-style transliteration resources, Tashkeela, Quranic Arabic corpora, Arabic UD treebanks |
| Indic scripts                      | Indic NLP Library, Aksharamukha, IndicXlit, IndicTrans2, Dakshina, AI4Bharat datasets                           |
| Low-resource languages             | Glottolog bibliographies, PHOIBLE, Lexibank, PanLex, UniMorph, OPUS, Tatoeba                                    |
| Environmental print                | OpenStreetMap, OpenAddresses, libpostal, Wikivoyage, Open Food Facts                                            |

Licenses vary widely. Treat most corpus outputs as scoring evidence until a
source is explicitly cleared for shipped examples.

## What To Defer

Defer these until a pilot course proves the need:

- corpus downloaders and crawlers;
- OCR for environmental-print photos;
- language-specific tokenizer wrappers;
- G2P or transliteration model integration;
- automated lesson sequencing;
- DB seed generation for non-Thai courses.

The current tools should get authors to a reviewed source manifest, ranked
candidates, and a concrete DB ingestion plan. That is the right amount of runway
before the next course is selected.

## Known Friction Points

These gaps were identified during the Korean Hangul bootstrap (2026-05-20) and
should be addressed before the next course:

### Duplicate tracker on scaffold

The scaffold command always creates `.ai/curriculum/<course-id>.md` even when a
bootstrap runbook with a similar name already exists. For Korean Hangul this
produced two parallel files: `korean-hangul.md` (bootstrap runbook, written by
hand) and `korean-hangul-v1.md` (scaffold output). The fix is to add a
`--tracker <path>` flag so authors can point scaffold at an existing file instead
of creating a second one, or at minimum to print a warning when a tracker-like
file already exists in `.ai/curriculum/`.

### No `jamo_position` field in grapheme candidates

The grapheme-candidates CSV has no way to declare the positional role of a
grapheme: initial consonant (choseong), vowel (jungseong), or final consonant
(jongseong). This matters critically for Hangul because ㅇ behaves as a silent
placeholder as an initial but as the ng sound as a final — they are the same
glyph but completely different pedagogical units. The workaround is to document
position in the `notes` column, but that is invisible to the scorer.

Proposed fix: add an optional `jamo_position` column (values: `initial`,
`vowel`, `final`, `any`) to the grapheme candidate schema. Document it in the
Hangul-specific authoring notes in `authoring-framework.md`.

### Manual scoring and `source_confidence`

The scoring CSV has no automated pathway to populate frequency columns from a
real corpus. For a bootstrap pass, all scores are hand-entered estimates.
The `source_confidence` field is the correct place to encode this uncertainty —
set it to `0.4`–`0.5` for manual estimates and `0.8`–`1.0` for corpus-backed
values. Document this convention explicitly so reviewers know how to interpret
score bands on a manual-estimate pass.

Score bands on a bootstrap pass are **relative rankings, not absolute quality
judgments**. A "weak" anchor word (e.g., 화장실) is still an essential lesson
anchor — it just has a high `new_load_penalty` that appropriately delays it to
Stage 2+.

### CSV column order sensitivity

Penalty columns must appear in the exact order declared in the CSV header.
During the Korean Hangul bootstrap, a descriptive notes string was accidentally
placed in the `new_load_penalty` column, causing the score command to fail with
a numeric parse error. The fix is to always write penalty values before any
free-text `notes` field. Consider adding a header-validation step to the score
command that checks that penalty columns contain numeric values and surfaces a
clear error message pointing to the offending column.

### Penalty weight calibration

Grapheme penalties are subtracted as absolute values from the weighted score.
A `confusability_penalty` of `0.10` plus `irregularity_penalty` of `0.05` drops
a consonant with an otherwise strong 0.64 raw score below the 0.50 "promising"
threshold. For ㅂ and ㄷ — common Korean consonants with well-known aspirated
counterparts — this pushes them into "weak" despite being required for core
target-domain vocabulary (밥, 버스, etc.). Consider either (a) reducing default
penalty magnitudes for widely common graphemes or (b) treating confusability as
a soft sequencing constraint ("teach after its pair") rather than a score
reducer.

### Runtime type names

`Word.thai` and `SyllableBreakdown.thai` in `src/lib/data/types.ts` are
Thai-specific field names. Before Korean lesson content can be added to the
app, these must be renamed to a language-agnostic field (e.g., `text`), with
all references in `src/lib/data/thai.ts` updated accordingly. This rename is
tracked as an engineering follow-up and was intentionally deferred from the
bootstrap task.
