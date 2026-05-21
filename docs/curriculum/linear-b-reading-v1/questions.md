# Linear B Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `linear-b-reading-v1` bootstrap.

## Architecture

- How should runtime data model syllabograms, ideograms, numerals, and damaged
  tablet notation without treating them all as ordinary graphemes?
- Should transliteration syllables such as `ka` and interpreted words such as
  bronze be separate vocabulary layers?
- How should synthetic practice syllable pairs be flagged so they are not
  confused with attested tablet words?
- Does the publication payload need tablet provenance and confidence fields for
  every anchor?

## Product And Pedagogy

- Should the first course teach only syllabograms, or include a small number of
  ideograms because tablets are administrative?
- How much Mycenaean Greek interpretation belongs in a reading course before the
  learner has the syllabary foundation?
- How should omitted final consonants and l/r conventions be introduced without
  overwhelming Lesson 1?
- How should nonmodern pronunciation limits be shown in compact drills?

## Sources, Licensing, And Attribution

- Confirm DĀMOS and tablet edition reuse terms before any attested text appears
  in shipped content.
- Keep Wiktionary discovery-only until CC BY-SA obligations are approved.
- Prefer app-authored syllabogram examples and reviewed word summaries for
  shipped content.

## Reviewers And Validation

- Assign a Mycenaean Greek or Aegean scripts specialist to validate signs,
  transliterations, glosses, and tablet-domain context.
- Verify Linear B font rendering for syllabograms and any ideograms chosen for
  later lessons.
- Confirm that uncertain tablet interpretations are marked before publication.

## App Expansion Recommendations

- Add syllabogram and ideogram roles to pedagogical unit metadata.
- Add transliteration fields distinct from interpreted vocabulary glosses.
- Add confidence and attestation metadata for historical-script anchors.
- Add support for synthetic practice items that are clearly separate from
  attested source examples.
