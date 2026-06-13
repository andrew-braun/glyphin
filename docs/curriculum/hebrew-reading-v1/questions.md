# Hebrew Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `hebrew-reading-v1` bootstrap.

## Architecture

- How should the runtime lesson model represent final forms: separate grapheme
  rows, variant metadata on base letters, or orthography rules with examples?
- How should bidi isolation be applied when Hebrew anchors appear inside English
  headings, buttons, progress cards, URLs, and generated review text?
- Where should optional niqqud live so teaching aids do not become canonical
  spelling or break matching against unpointed signs?
- Should matres lectionis be modeled as graphemes, reusable chunks,
  pronunciation hints, or orthography-rule examples?
- How should unpointed Hebrew search and drill matching handle reviewer-provided
  pointed pronunciation aids?

## Product And Pedagogy

- Should Hebrew v1 choose a formal romanization standard, or use plain English
  pronunciation hints and avoid formal transliteration?
- Does the drill system need a dedicated final-form matching activity, or can
  existing recognition drills carry that work?
- How much dagesh behavior should be taught in v1 before it distracts from first
  reading wins?
- Should Biblical Hebrew expectations be mentioned only as an out-of-scope note,
  or should the product avoid that comparison entirely in the beginner course?

## Sources, Licensing, And Attribution

- Confirm Unicode and CLDR license obligations before ingesting Hebrew exemplar
  and final-form metadata into durable curriculum records.
- Keep Hebrew Wiktionary discovery-only until CC BY-SA attribution and
  share-alike implications are reviewed for compiled app content.
- Keep OpenStreetMap Hebrew-name samples scoring-only until ODbL derived-data
  obligations are reviewed.
- Keep Academy and official terminology references discovery-only until reuse
  terms are reviewed.
- Prefer app-authored menu, sign, and label examples for shipped content.

## Reviewers And Validation

- Assign a Modern Hebrew speaker to validate anchor naturalness, glosses,
  pronunciation notes, final-form treatment, and cultural context.
- Spot-check real menus, street signs, transit labels, storefront signs, and
  facility labels before locking the first 12 anchors.
- Verify fonts used by Glyphin render final forms, niqqud overlays, and
  unpointed Hebrew clearly at drill sizes.

## App Expansion Recommendations

- Add course-aware RTL layout and bidi isolation before runtime Hebrew lessons.
- Add script-aware text fields before implementation so runtime data does not
  rely on Thai-specific names such as `thai`.
- Add metadata conventions for final forms, optional niqqud, matres lectionis,
  dagesh-sensitive sound pairs, and no-case scripts.
- Add course-aware progress storage before Hebrew, Arabic, Greek, and Thai can
  coexist in learner state.
