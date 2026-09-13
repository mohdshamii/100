# Changelog

All notable changes to the lists in this repo are tracked here — additions, removals, corrections, and link fixes. Dates are in `YYYY-MM-DD` format. Newest entries at the top.

This file tracks *content* changes to the "100" lists and supporting docs, not routine typo fixes or formatting-only edits.

---

## Format

Each entry follows:
```
## YYYY-MM-DD

### Added
- `File.md` — brief description of what was added and why

### Removed
- `File.md` — brief description of what was removed and why

### Changed
- `File.md` — brief description of a correction, re-categorization, or link fix

### Fixed
- `File.md` — broken link repaired (old → new, or note if the resource moved)
```

Not every release has every section — omit sections with nothing to report.

---

## [Unreleased]

### Added
- `ResearchPaper.md` — 100 research papers across 10 sections, from classic foundations through optimization/alignment
- `Books.md` — 100 books across 10 sections, from math/stats foundations through theory/advanced topics
- `Datasets.md` — 100 datasets across 12 sections, from beginner tabular data through RL environments and recommender systems
- `Projects.md` — 100 project ideas across 12 sections, from foundational ML through RAG/agents and reinforcement learning
- `Tools.md` — 100 tools/libraries across 12 sections, from core Python/data through MLOps and deployment
- `Interview_Questions.md` — 100 ML/AI interview questions with brief answers across 12 topics
- `Courses.md` — 100 free courses and lecture series across 12 categories
- `Blogs_and_Newsletters.md` — 100 blogs, newsletters, and people to follow across 11 categories
- `Glossary.md` — 100 key terms defined in plain language across 11 categories
- `ROADMAP.md` — unified ~30-week timeline interleaving all "100" files into one learning path
- `CHEATSHEETS.md` — condensed formula references across 8 sections (linear algebra, probability, loss functions, optimizers, Transformer math, evaluation metrics)
- `CONTRIBUTING.md` — contribution guidelines, link-quality standards, and formatting conventions
- `README.md` — repo overview, contents table, structure explanation, suggested use, and FAQ

---

## How this file gets updated

- Every PR that changes the *content* of a list (not just a typo) should include a corresponding entry under `## [Unreleased]` at the top of this file, in the correct section (Added/Removed/Changed/Fixed).
- When enough unreleased changes accumulate (or periodically, e.g., monthly), the `[Unreleased]` section gets renamed to a dated release (e.g., `## 2026-10-01`) and a fresh empty `[Unreleased]` section is added above it.
- See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for the standards new entries need to meet before they're added here.

## Why this file exists

With ten-plus files each holding a curated "100," it's easy to lose track of what changed, when, and why — especially for removals (an entry dropped to keep a list at exactly 100 should be visible, not silently disappear). This file is the audit trail for that.

