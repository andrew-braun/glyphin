# Egyptian Hieroglyphs Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `egyptian-hieroglyphs-v1` bootstrap.

## Architecture

- How should runtime data store sign identity: Unicode scalar, Gardiner code,
  sign-list family, or a course-owned pedagogical unit ID?
- How should mixed direction and vertical column orientation be represented so
  lessons can show museum examples without assuming left-to-right text?
- Should Egyptian Hieroglyph Format Controls be allowed in learner-facing text,
  or should lessons render sign groups from structured layout metadata?
- How should determinatives be modeled when they are visible signs but not read
  as ordinary phonetic units?

## Product And Pedagogy

- Should the course teach only sign recognition at first, or include a small
  phonetic transliteration track from Lesson 1?
- Which transliteration standard should be used for learner-facing labels, and
  how much specialist notation is acceptable for beginners?
- How should nonmodern pronunciation limits be disclosed without turning every
  lesson into a caveat?
- Which museum domains are appropriate for early sacred or funerary vocabulary?

## Sources, Licensing, And Attribution

- Confirm reuse terms for each Egyptological database before using attested
  examples beyond discovery.
- Keep Wiktionary and database entries discovery-only until attribution and
  share-alike or citation obligations are approved.
- Prefer app-authored sign examples and synthetic museum-style prompts for
  shipped content.

## Reviewers And Validation

- Assign an Egyptologist or advanced Middle Egyptian reader to validate signs,
  transliteration, glosses, and cultural framing.
- Validate font rendering for hieroglyphs, transliteration marks, and format
  controls across desktop and mobile.
- Confirm that orientation examples do not misrepresent the source inscription.

## App Expansion Recommendations

- Add script-aware display metadata for direction, orientation, and historical
  layout notes.
- Add support for transliteration alongside script text as a first-class lesson
  field.
- Add metadata for logogram, phonogram, determinative, and semantic classifier
  roles.
- Add specialist-review status fields before publishing historical-script
  lessons.
