# Arabic Script Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `arabic-reading-v1` bootstrap.

## Architecture

- How should the runtime lesson model represent one Arabic pedagogical letter
  while showing isolated, initial, medial, and final glyph forms?
- Should lam-alif be stored as a grapheme-like chunk, a ligature display rule, or
  an orthography rule linked to examples?
- How should bidi isolation be applied when Arabic anchors appear inside English
  headings, buttons, progress cards, URLs, and generated review text?
- Where should optional short-vowel marks live so teaching aids do not become
  canonical spelling or break unvowelled search and matching?
- Should hamza and alif variants be separate grapheme records, variant metadata,
  or staged orthography rules?

## Product And Pedagogy

- Should Arabic v1 teach Modern Standard Arabic names and pronunciations only,
  or allow regional notes for qaf, jim, and restroom vocabulary?
- Which romanization style should be used in hints, if any, without making the
  learner dependent on transliteration?
- Does the drill system need a dedicated positional-form matching activity for
  Arabic joining, or can existing recognition drills carry that work?
- How much should v1 explain root-and-pattern morphology before it distracts
  from first reading wins?

## Sources, Licensing, And Attribution

- Confirm Unicode and CLDR license obligations before ingesting Arabic shaping
  and exemplar metadata into durable curriculum records.
- Keep Arabic Wiktionary discovery-only until CC BY-SA attribution and
  share-alike implications are reviewed for compiled app content.
- Keep OpenStreetMap Arabic-name samples scoring-only until ODbL derived-data
  obligations are reviewed.
- Keep `wordfreq` and tokenizer or model outputs scoring-only until upstream
  corpus and model-data licenses are reviewed.
- Prefer app-authored menu, sign, and label examples for shipped content.

## Reviewers And Validation

- Assign at least one Arabic speaker to validate anchor naturalness, glosses,
  pronunciation notes, and region-neutral wording.
- Spot-check real menus, market signs, transit labels, and facility signs across
  more than one Arabic-speaking region before locking the first 12 anchors.
- Verify fonts used by GlyphBridge render Arabic joining, hamza, ta marbuta,
  lam-alif, and optional harakat clearly at drill sizes.

## App Expansion Recommendations

- Add course-aware RTL layout and bidi isolation before runtime Arabic lessons.
- Add script-aware text fields before implementation so runtime data does not
  rely on Thai-specific names such as `thai`.
- Add metadata conventions for joining forms, nonjoining letters, lam-alif
  chunks, optional diacritics, hamza variants, and ta marbuta.
- Add course-aware progress storage before Arabic, Hebrew, Greek, and Thai can
  coexist in learner state.
