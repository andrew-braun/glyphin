# App Expansion Matrix For Multi-Script Courses

- Start date: 2026-05-21
- Status: active

## Purpose

Track cross-course runtime and data-model gaps discovered while bootstrapping
writing systems beyond Thai. Course-specific questions stay in each course
folder; repeated needs are consolidated here for future implementation planning.

## Current Runtime Constraints

- The runtime data model still contains Thai-specific field names and assumptions
  in `src/lib/data/types.ts` and `src/lib/data/thai.ts`.
- The progress store is not yet course-aware, so multiple curricula would collide
  without a course/version boundary.
- Script styling and detection are Thai-specific instead of course/script-driven.
- Lesson breakdown components assume a syllable or Thai-like decomposition rather
  than a generic pedagogical-unit model.
- Direction metadata exists at the data level but is not yet propagated through
  app layout or lesson surfaces.

## Gap Matrix

| Capability                                 | First surfaced by                | Affected course families                                                               | Recommendation                                                                                                         |
| ------------------------------------------ | -------------------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Language-agnostic text fields              | Korean Hangul, Greek             | All non-Thai courses                                                                   | Rename runtime fields such as `thai` to neutral names such as `text` before adding new course data.                    |
| Course-aware progress                      | Korean Hangul, Greek             | All multi-course runtime work                                                          | Include course/version IDs in learner progress keys and DB learner-state records.                                      |
| Script-aware styling                       | Korean Hangul, Greek             | All courses                                                                            | Replace hardcoded Thai text detection with course/script metadata and reusable script display classes.                 |
| Pedagogical unit model                     | Korean Hangul, Greek             | Hangul, Greek, abugidas, logographic systems                                           | Represent teachable units separately from Unicode code points and grapheme clusters.                                   |
| Positional variants                        | Korean Hangul, Greek             | Hangul, Greek, Arabic, Indic scripts                                                   | Add metadata for position-sensitive units such as final sigma, Hangul initial/final jamo roles, and contextual forms.  |
| Digraph or chunk units                     | Greek                            | Greek, Cyrillic variants, Latin digraph courses, Indic transliteration paths           | Allow multi-character units to be taught as a single pedagogical unit when useful.                                     |
| Case-pair metadata                         | Greek                            | Greek, Cyrillic, Armenian, Georgian variants, Latin extensions                         | Store uppercase/lowercase pairs and sign-heavy display recommendations without duplicating lesson content.             |
| Stress and diacritic metadata              | Greek, Latin, IPA                | Greek, Latin diacritics, IPA, Indic scripts, Arabic/Hebrew vowel marks                 | Distinguish pronunciation aids, required orthographic marks, tone marks, and optional diacritics.                      |
| Combining and normalization metadata       | Latin diacritics                 | Latin diacritics, IPA, Indic scripts, Arabic/Hebrew vowel marks                        | Store canonical display text plus decomposition or combining-mark details for scoring, variants, and rendering.        |
| Per-anchor language context                | Latin diacritics                 | Multilingual Latin courses, IPA, comparative script courses                            | Allow a course to contain anchors from several languages without pretending they share one pronunciation rule set.     |
| Notation-course modeling                   | IPA                              | IPA, transliteration courses, phonetic notation, signaling systems                     | Support courses that teach a notation or signal system rather than a natural language tied to one BCP 47 language.     |
| Confusable-pair metadata                   | Russian Cyrillic                 | Cyrillic, Greek, Latin extensions, Armenian, historical alphabets                      | Store script-to-script lookalike traps such as Cyrillic Р vs Latin P for contrast drills.                              |
| No-whitespace segmentation                 | Japanese, Mandarin Han           | Japanese, Chinese, Khmer, Lao, Thai refinements                                        | Store manually authored word and pedagogical-unit boundaries instead of relying on whitespace tokenization.            |
| Kana modifier variants                     | Japanese                         | Japanese kana, Bopomofo tone marks, syllabaries with modifiers                         | Model dakuten, handakuten, small kana, and chōon as reusable modifiers or variants.                                    |
| Logographic components                     | Japanese, Mandarin Han           | Han Chinese, Japanese kanji, Egyptian hieroglyphs, Maya glyphs                         | Store component/radical hints separately from Unicode code points and do not require full parser-level decomposition.  |
| Script variants                            | Mandarin Han                     | Simplified/traditional Chinese, regional CJK glyphs, Serbian Cyrillic variants         | Link variant display forms explicitly and avoid lossy one-to-one conversion assumptions.                               |
| Romanization and tone metadata             | Mandarin Han                     | Mandarin, Bopomofo, Vietnamese Latin, IPA, tonal language support                      | Store romanization base forms, tone numbers, tone marks, and optional audio references separately.                     |
| RTL and bidi propagation                   | Arabic, Hebrew                   | Arabic, Hebrew, Syriac, N'Ko, Adlam                                                    | Thread `dir`, language metadata, and bidi isolation through route/layout/component surfaces before RTL lessons ship.   |
| Contextual joining and ligatures           | Arabic                           | Arabic, Syriac, Mongolian, historical cursive scripts                                  | Model joining forms and required shaping as rendering behavior, not separate learner-visible characters by default.    |
| Abjad vowel-mark handling                  | Arabic, Hebrew                   | Arabic, Hebrew, Syriac                                                                 | Distinguish base consonants, optional vowel marks, pronunciation aids, and fully written learner scaffolds.            |
| Akshara and abugida units                  | Thai, Indic scripts              | Thai, Devanagari, Bengali, Gurmukhi, Gujarati, Odia, Tamil, Telugu, Kannada, Malayalam | Store taught units at the syllable or akshara level where visual order differs from code-point order.                  |
| Matra and visual-order metadata            | Indic scripts                    | Devanagari, Bengali, Gujarati, Odia, Gurmukhi, Telugu, Kannada, Malayalam              | Represent vowel signs by logical storage order and rendered visual position such as left, right, above, below, split.  |
| Virama, conjunct, and ligature shaping     | Indic scripts                    | Devanagari, Bengali, Gujarati, Odia, Gurmukhi, Telugu, Kannada, Malayalam              | Track virama behavior, conjuncts, and font-shaping dependencies separately from simple code-point inventories.         |
| Script-family inventory order              | Ethiopic, Indic scripts          | Ethiopic, Indic abugidas, syllabaries                                                  | Store native pedagogical ordering such as fidel series or varga rows rather than sorting only by Unicode.              |
| Existing-course backfill identity          | Thai                             | Thai and any runtime-first course                                                      | Define how existing runtime course IDs map to new authoring packet IDs before DB publication.                          |
| Vertical layout support                    | Planned for Mongolian            | Mongolian, some CJK/historical modes                                                   | Verify CSS, drill layout, and text rendering for vertical or mixed-direction scripts before implementation.            |
| Media and audio hooks                      | Greek, future IPA                | IPA, Greek, Arabic, Indic, historical pronunciation courses                            | Reserve optional pronunciation/audio fields without blocking text-first v1 courses.                                    |
| Tactile notation support                   | English Braille                  | Braille, tactile scripts, accessibility-first courses                                  | Support tactile-cell semantics and screen-reader-friendly descriptions rather than treating Unicode Braille as enough. |
| Time-based signaling support               | Morse signaling                  | Morse, semaphore, auditory/light/haptic signaling systems                              | Add gap-aware timing, playback, and recognition primitives before runtime implementation.                              |
| Nonstandard interaction modes              | Braille, Morse/signaling         | Braille, Morse, semaphore, tactile/signaling systems                                   | Design separate drill primitives for tactile or time-based signals rather than forcing letter-card drills.             |
| Historical transliteration layers          | Egyptian, Phoenician, Linear B   | Historical scripts, museum courses, epigraphic courses                                 | Store source glyphs, transliteration, scholarly labels, and learner glosses as separate fields.                        |
| Epigraphic orientation and layout          | Egyptian, Ogham, Maya, Mongolian | Egyptian hieroglyphs, Ogham, Maya glyphs, Mongolian, inscription courses               | Support mixed or vertical orientation metadata without assuming one horizontal text flow.                              |
| Sparse corpus and specialist-review status | Historical scripts               | Ancient, reconstructed, liturgical, and community-documented scripts                   | Track confidence, review status, and source posture in authoring artifacts before publication.                         |
| Obscure Unicode and font coverage          | Historical and minority scripts  | Cuneiform, Maya, Ogham, Linear B, Bamum, Vai, Adlam, N'Ko, Shavian, Deseret            | Add font availability checks and fallback plans for scripts that common system fonts may not cover.                    |
| Block and cluster glyph units              | Egyptian, Maya                   | Egyptian hieroglyphs, Maya glyphs, cuneiform sign groups                               | Allow visual glyph groups or blocks to function as one learner-facing unit even when encoded as multiple signs.        |
| Syllabary series metadata                  | Cherokee, Cree, Vai, Bamum       | Cherokee, Canadian syllabics, Vai, Bamum, Linear B, Ethiopic                           | Store native series/order, consonant-vowel grids, and syllabic values separately from alphabet-style rows.             |
| Private-use or unencoded script support    | Sitelen Pona                     | Sitelen Pona, experimental scripts, community scripts                                  | Decide whether private-use glyphs can ship and how fallbacks work when Unicode encoding is incomplete or disputed.     |

## Open Implementation Threads

- Define a language-agnostic runtime lesson DTO before any second course ships.
- Decide how notation-only courses such as IPA should fit language and script
  tables.
- Define a canonical representation for manually authored no-whitespace segment
  boundaries.
- Define a canonical representation for abugida aksharas, vowel signs, virama,
  and conjuncts before any Indic course ships.
- Define bidi isolation and RTL layout behavior before Arabic, Hebrew, Syriac,
  N'Ko, or Adlam implementation work begins.
- Decide whether `curriculum.graphemes` should store pedagogical digraphs and
  positional variants directly or whether these belong in course-version details.
- Decide whether logographic components and radicals need first-class schema
  tables or can remain course-version metadata for v1.
- Decide whether tactile and time-based signal courses need separate lesson and
  drill DTOs rather than extensions of text-card drills.
- Define source-confidence and specialist-review metadata for historical and
  reconstructed scripts before learner-facing publication.
- Define a font QA matrix for obscure Unicode blocks and private-use/community
  scripts.
- Decide whether glyph-block scripts need visual layout primitives beyond linear
  text spans.
- Add a fixture matrix for LTR alphabet, RTL abjad, abugida, logographic, Hangul,
  and nonstandard signaling/tactile courses.
- Keep source-license and reviewer status out of runtime payloads unless they are
  intentionally displayed for attribution.
