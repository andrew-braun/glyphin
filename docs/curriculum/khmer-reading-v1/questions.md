# Khmer Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `khmer-reading-v1` bootstrap.

## Architecture

- How should the runtime represent Khmer words when spaces are phrase separators
  and not reliable word boundaries?
- Should consonant-series information live on grapheme rows, segment rows, or
  orthography-rule records?
- Does the drill renderer need no-split cluster metadata for coeng subscripts and
  multi-position vowels?
- How should visual-order versus reading-order prompts be modeled for preposed
  and surrounding vowel signs?

## Product And Pedagogy

- Should v1 teach consonant series explicitly from the first lesson or defer the
  full series model until several anchors are familiar?
- Which pronunciation support style is clearest for Khmer without teaching a
  full romanization system?
- Should formal facility words such as `ភោជនីយដ្ឋាន` and `មន្ទីរពេទ្យ` be late
  core lessons or optional review cards?
- How much Pali or Sanskrit spelling background is useful before it distracts
  from practical decoding?

## Sources, Licensing, And Attribution

- Confirm Unicode and CLDR attribution requirements before durable ingestion.
- Keep Khmer Wiktionary discovery-only until CC BY-SA obligations are reviewed.
- Keep OSM Khmer names scoring-only until ODbL obligations are reviewed.
- Select and license-review a Khmer segmenter before tokenizer output affects
  scoring or publication QA.
- Prefer app-authored menu, sign, and label examples for shipped content.

## Reviewers And Validation

- Assign a Khmer reviewer to validate anchors, pronunciation hints, glosses,
  segmentation, and cultural context.
- Spot-check real Cambodian menus, market signs, road signs, entrance and exit
  labels, hotel signs, and public-facility signage before locking anchors.
- Verify fonts render dependent vowels, coeng subscripts, final marks, and Khmer
  punctuation clearly at drill sizes.

## App Expansion Recommendations

- Add language-agnostic text fields before implementation so runtime data does
  not rely on Thai-specific names such as `thai`.
- Add dictionary segmentation and orthographic-syllable metadata for scripts
  without reliable word spaces.
- Add vowel-position and coeng cluster metadata for visual-order drills.
- Add script-aware font fallback and cluster-highlighting QA for Khmer.
- Add course-aware progress storage before Khmer can coexist with Thai and other
  script courses.
