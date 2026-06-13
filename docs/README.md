# Docs Directory

This directory is for durable project documentation that should stay useful beyond a single implementation task.

Use `docs/` for:

- Security review checklists
- Architecture notes
- Operational runbooks
- Workflow guides
- Durable design decisions that should be easy to find later

Do not use `docs/` for task-by-task implementation tracking. Task specs, in-progress notes, and backlog items belong in `.ai/`.

## Current Documents

- `auth.md` — durable auth architecture and security guide for request-scoped Supabase auth, learner sync boundaries, and rollout pitfalls.
- `app-philosophy.md` — authoritative product guide covering the app model, lesson contract, progress path, and technical guardrails.
- `concept/learning-philosophy.md` — canonical pedagogical concept document for the real-word-first, frequency-driven Glyphin lesson model.
- `curriculum/authoring-framework.md` — reusable framework and tool design for building new Glyphin curricula across writing systems.
- `curriculum/authoring-tools.md` — offline authoring-tool commands, scaffolded file layout, DB handoff strategy, and corpus-analysis guidance.
- `curriculum/thai.md` — Thai curriculum strategy and frequency-first sequencing reference.
- `curriculum/writing-systems-catalog.md` — ranked roadmap of living, historical, and fictional or constructed writing systems Glyphin could cover.
- `db.md` — README-style database guide covering schema roles, table responsibilities, common SQL queries, local and linked Supabase CLI workflow, and remote deployment guidance.
- `database-dto-spec.md` — build-ready PostgreSQL, Supabase, and runtime DTO specification for curriculum delivery and learner progress.
- `pre-rollout-tasks.md` — shared list of concrete follow-up work that must land before production rollout.
- `security-review-checklist.md` — deployment gate and review checklist for high-risk security-sensitive changes
