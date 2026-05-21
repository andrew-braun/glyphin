# Brahmi Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `brahmi-reading-v1` bootstrap.

## Architecture

- How should runtime data represent consonant bases, inherent vowels, vowel
  signs, virama, and akshara chunks as separate teachable layers?
- Should Brahmi use the existing grapheme model or a dedicated abugida segment
  model shared with Indic courses?
- How should inscription provenance and regional sign variants be stored without
  copying restricted source records?

## Product And Pedagogy

- Is `sa-Brah` the correct v1 boundary or should an inscriptional Prakrit tag be
  used instead?
- Which Buddhist, royal, and donative anchors require cultural context before
  they are learner-facing?
- Should the script-name word Brahmi be deferred until conjunct behavior exists?

## Sources, Licensing, And Attribution

- Confirm inscription database and image reuse terms before deriving examples.
- Keep Sanskrit references discovery-only unless they are explicitly cleared for
  shipped examples.
- Prefer app-authored inscription-style examples from reviewed sign sequences.

## Reviewers And Validation

- Assign a Brahmi or South Asian epigraphy specialist to validate sign forms,
  language scope, transliteration, and cultural framing.
- Spot-check early anchors against Ashokan and donative inscription domains.
- Verify Brahmi font rendering for vowel signs, anusvara, and virama at drill
  sizes.

## App Expansion Recommendations

- Add abugida-aware segment metadata that separates base signs and vowel marks.
- Add inscription provenance, regional variant, and reviewer-confidence fields.
- Add cultural-context flags for religious and royal terms.
- Add Brahmi font fallback and combining-mark checks.
