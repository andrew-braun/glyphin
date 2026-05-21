# Sinhala Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `sinhala-reading-v1` bootstrap.

## Architecture

- How should the runtime represent Sinhala aksharas when one learner-visible
  unit may contain a base, vowel sign, al-lakuna, or conjunct sequence?
- Should al-lakuna be stored as a grapheme, syllable feature, final-consonant
  marker, cluster trigger, or all of these depending on context?
- Does the drill renderer need no-split display spans for conjuncts and
  multi-part vowel signs?
- Which fields should distinguish pure Sinhala letters, mixed Sinhala letters,
  and v1 beginner inventory without duplicating the whole script chart?

## Product And Pedagogy

- Should v1 use plain English pronunciation hints or a formal Sinhala
  romanization style?
- How much pure-versus-mixed letter inventory should appear in beginner-facing
  copy before it distracts from practical decoding?
- Should `වැසිකිළිය` be a core late lesson despite its visual density because
  toilet signage is high utility?
- Which open, closed, enter, and exit forms are most natural on real Sinhala
  signage and should be preferred after reviewer validation?

## Sources, Licensing, And Attribution

- Confirm Unicode and CLDR attribution requirements before durable ingestion.
- Keep Sinhala Wiktionary discovery-only until CC BY-SA obligations are reviewed.
- Keep OSM Sinhala names scoring-only until ODbL obligations are reviewed.
- Confirm Sinhala coverage and bundled-resource terms for any Indic NLP tooling
  before tooling output affects scoring or publication QA.
- Prefer app-authored tea, menu, shop, transit, sign, and label examples for
  shipped content.

## Reviewers And Validation

- Assign a Sinhala reviewer to validate anchors, pronunciation hints,
  segmentation, glosses, and cultural context.
- Spot-check real Sri Lankan tea shops, menus, price signs, bus and train signs,
  road signs, school labels, hotel signs, hospital signs, toilets, and open or
  closed signs before locking anchors.
- Verify fonts render Sinhala vowel signs, al-lakuna, anusvara, and conjuncts
  clearly at drill sizes.

## App Expansion Recommendations

- Add language-agnostic text fields before implementation so runtime data does
  not rely on Thai-specific names such as `thai`.
- Add word, akshara, vowel-position, al-lakuna, conjunct, and no-split display
  metadata.
- Add drills that can highlight multi-part vowel signs as a single teachable
  unit.
- Add script-aware font fallback and shaping QA for Sinhala.
- Add course-aware progress storage before Sinhala can coexist with Thai and
  other script courses.
