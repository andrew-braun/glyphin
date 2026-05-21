# Hindi Devanagari Reading Curriculum Notes

This durable note records the v1 boundary and bootstrap decisions for Hindi
Devanagari Reading.

## Course Boundary

- Language/script: Hindi in Devanagari, `hi-Deva`, ISO 15924 `Deva`.
- Target learner: English-literate traveler or heritage learner who wants to
  decode practical Hindi signs and menu words before full grammar study.
- Target domains: menus, tea and cafe boards, bus and rail signage, shopfronts,
  public facilities, everyday labels, and basic warning signs.
- In scope for v1: modern printed Devanagari, consonant bases, independent and
  dependent vowels, inherent vowel, akshara chunking, anusvara, nukta, virama,
  and a small number of high-payoff conjuncts.
- Out of scope for v1: handwriting, Sanskrit-only signs, Vedic marks, complete
  conjunct inventory, full schwa deletion theory, production spelling, and Urdu
  Perso-Arabic script.

## Sequencing Rationale

- Frequency sources: Unicode and CLDR for script metadata, `wordfreq` for rough
  frequency intuition, Indic NLP tools and Dakshina for discovery only, OSM for
  environmental-print validation, and app-authored examples for shipped content.
- First-session decoding target: `पानी`, `चाय`, and `बस`, because they teach
  the abugida model, a long vowel matra, a final long-i matra, and the inherent
  vowel through useful words.
- Stage 1 goal: make learners read simple aksharas instead of treating the
  script as an alphabetic sequence.
- Stage 2 goal: add high-yield matras and consonants through menu and transit
  anchors.
- Stage 3 goal: introduce anusvara, nukta, short-i visual order, virama, and
  first conjuncts only after the base model is stable.

## Script Notes

- Bare consonants carry an inherent vowel that learners must expect until a
  matra, virama, or conjunct changes it.
- Matras can appear before, after, above, or below the consonant while still
  belonging to the akshara.
- Virama suppresses the inherent vowel and is the gateway to conjuncts.
- Nukta is relevant for common loan and signage words such as `बाज़ार`; it must
  be modeled as meaningful script data rather than decorative punctuation.
- Schwa deletion is important for natural pronunciation but should be introduced
  only where a specific anchor needs it.

## Validation Notes

- Segmentation review: confirm that candidate units distinguish code points,
  Unicode grapheme clusters, aksharas, and teachable parts.
- Pronunciation review: confirm vowel length, dental and retroflex contrasts,
  aspirated consonants, anusvara context, and common schwa deletion in anchors.
- Cultural review: confirm that anchors are natural in traveler-facing Hindi and
  avoid regionally odd wording.
- License review: keep Wiktionary, OSM, Dakshina, and upstream corpus outputs
  out of runtime content until attribution and derived-data obligations are
  reviewed.
