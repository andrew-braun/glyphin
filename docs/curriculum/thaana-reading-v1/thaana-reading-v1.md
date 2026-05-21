# Thaana Reading Curriculum Notes

This durable course note records the v1 boundary and bootstrap decisions for
`thaana-reading-v1`.

## Course Boundary

- Language/script: Dhivehi in Thaana, `dv-Thaa`, ISO 15924 `Thaa`.
- Target learner: English-literate traveler, culture learner, or beginner who
  wants to decode practical Dhivehi text.
- Target domains: food and cafe words, public facilities, road and island-travel
  labels, cultural-site labels, and everyday signs.
- In scope for v1: common base letters, vowel signs, sukun, RTL reading order,
  selected high-payoff words, and font mark QA.
- Out of scope for v1: full grammar, handwriting, advanced loanword spelling,
  numerals, dialect comparison, and production spelling.

## Sequencing Rationale

- Frequency sources: Unicode and CLDR for script metadata, Dhivehi references and
  Wiktionary for discovery only, OpenStreetMap for possible wayfinding
  validation, and app-authored examples for learner-visible content.
- First-session decoding target: `ފެން`, `މަސް`, and `މަގު`, because they are
  compact and teach RTL order, vowel signs, and sukun with practical words.
- Stage 1 goal: teach base-plus-vowel clusters and sukun through short useful
  words.
- Stage 2 goal: add identity, house, coffee, and restroom words with longer mark
  patterns.
- Stage 3 goal: delay open/closed, loanwords, and cultural-site words until core
  RTL and mark handling are stable.

## Script Notes

- Thaana is written right to left. Mixed English and Thaana UI requires explicit
  bidirectional isolation.
- Vowel signs are integral to beginner decoding and must be grouped with base
  letters in the pedagogy layer.
- Sukun is a high-payoff rule for final consonants and clusters.
- Manual bootstrap scores are relative estimates because target-domain Dhivehi
  corpus access is limited.

## Validation Notes

- Segmentation review: verify base-plus-mark clusters and sukun behavior before
  runtime data is built.
- Pronunciation review: confirm romanization and vowel length with a Dhivehi
  speaker.
- Cultural review: confirm anchors such as restroom, mosque, open, and closed are
  natural and context-appropriate.
- License review: keep dictionaries, OSM, and corpus-derived material out of
  shipped content until obligations are approved.
