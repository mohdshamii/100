# Contributing

Thanks for wanting to improve this repo. Contributions are welcome for new entries, corrections, and broken-link fixes across any of the "100" files. This document covers what to submit, how to format it, and the bar for quality — please read the relevant section before opening a PR.

---

## Before you open a PR

1. **Check it doesn't already exist.** Search the target file for the title/name first — duplicate entries won't be merged.
2. **Check it fits an existing section.** Every file is organized into topic sections (see each file's table of contents at the top). If your entry fits an existing section, add it there. Don't create a new section for a single entry.
3. **One logical change per PR.** A PR that adds one paper is easy to review; a PR that adds 15 unrelated entries across 4 files is not. Group related additions (e.g., "add 3 diffusion model papers") into one PR; keep unrelated changes separate.

---

## What we accept

- **New entries** for `ResearchPaper.md`, `Books.md`, `Datasets.md`, `Projects.md`, `Tools.md`, `Interview_Questions.md`, `Courses.md`, `Blogs_and_Newsletters.md`, and `Glossary.md`
- **Broken link fixes** — a corrected URL for an existing entry, with a note on what changed
- **Corrections** — wrong author, wrong year, wrong link target, factual errors in a definition or answer
- **Reordering** — if you believe an entry is miscategorized by difficulty (e.g., something in a "beginner" section is actually intermediate), open an issue to discuss before submitting the PR

## What we don't accept

- Entries behind a paywall with no free alternative, unless the topic has no free option at all (rare, and should be flagged as such in the PR description)
- Pirated or unauthorized mirrors of copyrighted material (no pirate PDF sites, no unauthorized re-uploads)
- Self-promotional additions unless the resource is genuinely one of the best references for its topic — "I wrote a blog post about X" is not by itself a reason to add it
- Duplicate coverage of a topic already well-represented in the same file (we're aiming for a curated 100, not an exhaustive list)
- Entries where the underlying resource has been retracted, deprecated, or is widely considered outdated/incorrect

---

## Link quality standards

In order of preference:

1. **Primary/official source** — the paper's own arXiv page, the book's official free release, the tool's own docs/repo, the dataset's originating institution
2. **Author's personal or academic page**, if the primary source doesn't have a stable direct link
3. **Reputable publisher page** (O'Reilly, Manning, MIT Press, Wiley, etc.) for books without a free version
4. **Well-established aggregator** (Hugging Face Datasets/Papers, Kaggle) when there's no single canonical original source

Avoid: URL shorteners, affiliate links, link aggregator sites with ads, or anything requiring a login/paywall when a free alternative exists.

---

## Formatting conventions by file

### `ResearchPaper.md`, `Books.md`, `Datasets.md`, `Tools.md`, `Courses.md`, `Blogs_and_Newsletters.md`
```
N. Author(s) — Title — link
```
or, where the file uses a slightly different convention (check the surrounding entries in that section), match the existing style exactly. Keep author names as commonly cited (e.g., "Vaswani et al." for multi-author papers once there are 3+ authors).

### `Projects.md`
```
N. One-line project description, phrased as an action ("Build a...", "Fine-tune a...", "Implement...")
```
No link required — projects are ideas/specs, optionally paired with a dataset from `Datasets.md`.

### `Interview_Questions.md`
```
N. **Question, phrased as it would be asked in an interview?** Answer in 1–3 sentences.
```
Keep answers brief — this is a memory-jog reference, not a textbook. If your answer needs more than 3–4 sentences to be correct, the question may belong broken into two questions instead.

### `Glossary.md`
```
N. **Term** — One-sentence, plain-language definition. No jargon in the definition itself; if the definition needs another glossary term to make sense, that's fine, but don't require outside knowledge beyond this file.
```

### All numbered files
- **Renumbering:** if your addition doesn't fit as a clean append to a section, you may need to renumber subsequent entries. Do this carefully and make sure the total still reflects what's stated in the file's title/intro (adding new entries to a "100" list means removing an existing one, or the file becomes a ">100" list — flag this tradeoff explicitly in your PR description rather than silently growing the count).
- **Section placement:** entries should go in the section matching their topic, in roughly the right difficulty position relative to neighboring entries — not just appended to the end of the file.

---

## PR description checklist

Please include in your PR description:
- [ ] Which file(s) you're changing
- [ ] Whether this is an addition, correction, or link fix
- [ ] Why this entry belongs (one sentence is fine — e.g., "foundational paper for diffusion models, currently missing from §6")
- [ ] Confirmation the link works and points to a free/legitimate source
- [ ] If adding a new entry to a "100" file: which existing entry (if any) you'd suggest removing to keep the count at 100, or an explicit note that you're okay with maintainers making that call

## Reporting a broken link without submitting a fix

If you don't have a replacement link handy, open an issue instead of a PR — include the file name, the entry number/title, and what happens when you try the current link (404, paywall, moved content, etc.).

## Review process

PRs are reviewed for: correctness of the entry, link validity, formatting consistency with the surrounding file, and whether the entry meaningfully improves the list. Expect feedback on placement/formatting even for otherwise-good suggestions — that's normal, not a rejection.

Thanks again for contributing — this repo is more useful the more current and well-curated it stays.

