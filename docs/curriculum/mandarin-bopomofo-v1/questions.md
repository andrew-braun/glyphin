# Mandarin Bopomofo Reading Questions

Use this file for unresolved decisions that research cannot safely settle during
the `mandarin-bopomofo-v1` bootstrap.

## Architecture

- How should syllable groups be represented when a learner-visible unit contains
  multiple Bopomofo symbols plus a tone mark?
- Should tone marks be stored as separate graphemes, syllable metadata, or both?
- How should unmarked first tone be represented so the absence of a mark is
  teachable and reviewable?
- How should optional Hanzi and pinyin support fields attach to a Bopomofo
  anchor without making Han or pinyin the primary script?
- Do we need a layout field for horizontal Bopomofo now, or should vertical ruby
  be deferred entirely?

## Product And Pedagogy

- Should the course explicitly target Taiwan usage in its display copy?
- Should tone sandhi be avoided in v1 or mentioned only in reviewer notes for
  common phrases like `ㄋㄧˇ ㄏㄠˇ`?
- Should neutral tone be introduced through `ㄒㄧㄝˋ ㄒㄧㄝ˙` or deferred until a
  broader pronunciation module exists?
- How much pinyin should be visible before it distracts from Bopomofo decoding?

## Sources, Licensing, And Attribution

- Keep Taiwan MOE dictionary data discovery-only until official terms and
  attribution requirements are reviewed.
- Keep CEDICT data discovery-only until CC BY-SA implications are approved.
- Keep wordfreq and other corpus outputs scoring-only; use app-authored examples
  for shipped Bopomofo content.

## Reviewers And Validation

- Assign a Mandarin reviewer familiar with Taiwan Zhuyin usage.
- Validate tone marks, neutral-tone dot placement, syllable spacing, pinyin
  support forms, and glosses.
- Verify Bopomofo font rendering on mobile and desktop at drill sizes.

## App Expansion Recommendations

- Add a syllable-group display model for phonetic scripts.
- Add tone-mark metadata that can represent both visible marks and unmarked first
  tone.
- Add optional secondary notation fields for Hanzi, pinyin, IPA, or plain
  pronunciation hints.
- Add script-specific font QA for Bopomofo symbols and tone marks.
