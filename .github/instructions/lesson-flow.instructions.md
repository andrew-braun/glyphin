---
applyTo: "src/routes/learn/**/*,src/lib/components/lesson/**/*,src/lib/data/**/*"
---

# Lesson Flow Instructions

- Preserve the canonical lesson contract: Learning runs intro, breakdown, letters, rules, guided same-letters reads, handoff; Practice runs card stack, recap, scored checkpoint, result.
- Keep lesson progression linear unless requirements explicitly change.
- New letters, support words, rules, and drills must come from the curriculum data model, not ad hoc UI literals.
- Lesson explanations should be concise, cumulative, and beginner-friendly.
- Prefer show-dont-tell copy: use card faces, reveal buttons, counters, metrics, and CTAs instead of explanatory paragraphs when the interaction pattern is already visible.
- Do not repeat what the progress tracker, counter, metric, or button label already communicates.
- Keep teaching content in lesson data; trim only UI meta-instructions. Preserve descriptive `aria-label` text for accessibility.
- Same letters/new words sections should ask learners to read the new word before revealing pronunciation, meaning, or segmentation.
- Drill interactions must feel deterministic and fair.
- Do not mark lessons complete before scored Practice completion is resolved.
