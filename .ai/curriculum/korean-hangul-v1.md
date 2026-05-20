# Korean Hangul Curriculum Authoring Tracker

- Start date: 2026-05-20
- Owner: GitHub Copilot
- Status: bootstrap-complete

> **File roles:** This file is the ongoing authoring tracker for the
> `korean-hangul-v1` workspace. The bootstrap runbook — covering identifiers,
> scope decisions, and the scaffold command — lives at
> `.ai/curriculum/korean-hangul.md`.

## Goal

Track curriculum authoring progress for Korean Hangul (`ko-Hang`, `Hang`):
manifest, sources, candidate scoring, review, DB strategy, and eventual lesson
authoring.

## Source Files

- Bootstrap runbook: `.ai/curriculum/korean-hangul.md`
- Workspace: `.ai/curriculum/korean-hangul-v1/`
- Manifest: `.ai/curriculum/korean-hangul-v1/manifest.json`
- Sources: `.ai/curriculum/korean-hangul-v1/sources.csv`
- Grapheme candidates: `.ai/curriculum/korean-hangul-v1/grapheme-candidates.csv`
- Scored graphemes: `.ai/curriculum/korean-hangul-v1/grapheme-candidates.scored.csv`
- Anchor candidates: `.ai/curriculum/korean-hangul-v1/anchor-candidates.csv`
- Scored anchors: `.ai/curriculum/korean-hangul-v1/anchor-candidates.scored.csv`
- Review packet: `.ai/curriculum/korean-hangul-v1/review-packet.md`
- DB strategy: `.ai/curriculum/korean-hangul-v1/db-ingestion-strategy.md`
- Durable course notes: `docs/curriculum/korean-hangul-v1.md`

## Bootstrap Milestone (2026-05-20)

- [x] Scaffold run: workspace and all starter files created
- [x] Manifest: Korean-specific target_domains, normalization (NFC), segmentation (whitespace + algorithmic jamo decomposition), 5 sources
- [x] Sources: sejong-corpus (discovery_only), subtlex-ko (scoring_only), wiktionary-ko (scoring_only), open-korean-text (discovery_only), namuwiki (scoring_only)
- [x] Grapheme candidates: 40 jamo rows (basic and compound vowels, basic, aspirated, and tense consonants) with manual score estimates
- [x] Anchor candidates: 30 word candidates across all 4 target domains
- [x] Manifest validated: 0 errors, 0 warnings
- [x] Candidates scored: grapheme-candidates.scored.csv and anchor-candidates.scored.csv generated
- [x] Review packet generated

## Score Summary (Bootstrap Pass)

**Graphemes:**

- Strong (≥0.75): ㅏ 0.82, ㅇ 0.79, ㅣ 0.78, ㅗ 0.78, ㄴ 0.76
- Promising (0.50–0.74): ㅜ ㅁ ㅓ ㅅ ㅡ ㅈ ㄱ ㅕ ㄹ ㅎ (10 jamo)
- Weak (<0.50): aspirated consonants, tense consonants, compound vowels (25 jamo — defer to later lessons)

**Anchors:**

- Strong: 물 (0.82)
- Promising (23): 역 밥 카페 마트 주차 버스 국 커피 입구 노래 김치 면 택시 한국 은행 출구 서울 영화 메뉴 음악 라면 약국 지하철
- Weak (6, due to high load): 케이크 병원 불고기 화장실 비빔밥 편의점

## Current Status

- [x] Course prospectus drafted (bootstrap scope in korean-hangul.md)
- [x] Source manifest validated
- [x] Script inventory drafted (grapheme-candidates.csv)
- [x] Candidate anchors scored
- [x] Review packet generated
- [ ] Expert/native-speaker review
- [ ] DB ingestion strategy reviewed
- [ ] Lessons authored
- [ ] Publication path designed

## Open Questions

- Which source licenses can be upgraded from scoring_only to shipped_content after review?
- Who reviews Korean pronunciation and cultural context?
- Should ㅂ, ㄷ, ㅊ penalty weights be recalibrated? Their absolute penalties push them to "weak" despite being common consonants.
- Does the DB model need an explicit jamo-position layer (initial / vowel / final)?
