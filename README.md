# 100

A collection of curated "100" lists to take you from zero to job-ready in AI/ML engineering — papers, books, datasets, projects, and more, each organized beginner → advanced with direct links.

## Why this exists

Most "awesome-X" lists on GitHub are unordered link dumps: hundreds of resources with no indication of what to read first, what depends on what, or how long any of it should take. That's fine as a reference, but useless as a study plan.

Every list in this repo is deliberately **sequenced**, not just collected:

- Entries are grouped into topic sections, and those sections are ordered beginner → advanced.
- Within a section, entries are also roughly ordered by difficulty.
- Every file ends with a suggested timeline (in weeks or months) so you know how long to spend before moving on.
- Files are designed to be worked **in parallel** — e.g. read the transformer papers in `ResearchPaper.md` the same week you build the transformer project in `Projects.md`, using a dataset from `Datasets.md`.

The goal is that someone with basic Python and math could open this repo on day one and have a full, ordered curriculum through papers, books, hands-on datasets, and projects — with no other planning required.

## Who this is for

- Self-taught learners who want structure without paying for a bootcamp
- CS/math students who know the theory but want a practical build-things path
- Software engineers transitioning into ML/AI engineering roles
- Anyone prepping for AI/ML engineering interviews who wants a checklist of what "should" be known

It assumes basic Python and enough math to be willing to learn linear algebra/probability alongside the material — it does not assume prior ML experience.

---

## Contents

| # | File | Status | What it is |
|---|---|---|---|
| 1 | [`ResearchPaper.md`](./ResearchPaper.md) | ✅ Available | 100 research papers across 10 sections: classic foundations, deep CNN architectures, sequence models (RNN/LSTM), attention & transformers, large language models, generative models (GAN/VAE/diffusion), reinforcement learning, self-supervised learning, multimodal models, and optimization/efficiency/alignment. Nearly all linked directly to arXiv PDFs; pre-2013 classics link to their original hosting page. |
| 2 | [`Books.md`](./Books.md) | ✅ Available | 100 books across 10 sections: math & stats foundations, classic ML, deep learning foundations, applied ML engineering, NLP, computer vision, reinforcement learning, generative AI/LLMs, MLOps & systems, and theory/advanced topics. Links prioritize free official versions (author sites, open textbooks) before falling back to publisher pages. |
| 3 | [`Datasets.md`](./Datasets.md) | ✅ Available | 100 datasets across 12 sections: beginner tabular data, classic image datasets, classic NLP/text, Kaggle practice competitions, time series, audio/speech, advanced computer vision, advanced NLP/LLM pretraining corpora, multimodal data, RLHF/alignment datasets, RL environments, and recommender systems. Links go to the official source (UCI, Kaggle, Hugging Face, or project page). |
| 4 | [`Projects.md`](./Projects.md) | ✅ Available | 100 project ideas across 12 sections, from foundational regression/classification, through from-scratch algorithm implementations, computer vision, NLP, deep learning internals, time series, recommenders, generative models, LLM fine-tuning, RAG/agents, MLOps deployment, and reinforcement learning. |
| 5 | `Tools.md` | 🚧 Planned | 100 tools and libraries, tiered from fundamentals to production infrastructure. Planned coverage: **data/numerics** — numpy, pandas, polars; **classic ML** — scikit-learn, XGBoost, LightGBM; **deep learning frameworks** — PyTorch, TensorFlow, JAX; **NLP/LLM tooling** — Hugging Face Transformers/Datasets/Tokenizers, LangChain, LlamaIndex, spaCy; **serving/inference** — vLLM, TGI, Triton, ONNX Runtime; **experiment tracking & orchestration** — MLflow, Weights & Biases, Ray, Airflow; **deployment** — Docker, Kubernetes, FastAPI; **vector databases** — FAISS, Pinecone, Chroma, Weaviate. |
| 6 | `Interview_Questions.md` | 🚧 Planned | 100 ML/AI interview questions with concise model answers, grouped into: ML fundamentals & math (bias-variance, regularization, gradient descent variants), coding/DSA relevant to ML roles, deep learning theory (backprop, vanishing gradients, normalization), NLP/LLMs (tokenization, attention, fine-tuning strategies), ML system design (recommendation systems, feature stores, model serving at scale), and behavioral/take-home-style questions specific to ML teams. |
| 7 | `Courses.md` | 🚧 Planned | 100 free courses and lecture series sequenced into a curriculum. Planned coverage: university OpenCourseWare (Stanford CS229 Machine Learning, CS231n Computer Vision, CS224n NLP, MIT 6.036/6.S191), YouTube lecture series (3Blue1Brown's linear algebra/neural network series, StatQuest, Andrej Karpathy's "Zero to Hero"), and structured MOOCs (fast.ai Practical Deep Learning, DeepLearning.AI specializations, Hugging Face's free NLP/LLM courses). |
| 8 | `Blogs_and_Newsletters.md` | 🚧 Planned | 100 blogs, newsletters, and people to follow for staying current. Planned coverage: research-lab blogs (OpenAI, Anthropic, DeepMind, Google Research), independent researcher explainers (Lil'Log, Jay Alammar's illustrated posts, Sebastian Raschka's newsletter), engineering blogs from AI-native companies, and weekly-digest newsletters for people who want curated news rather than raw papers. |
| 9 | `Glossary.md` | 🚧 Planned | 100 key terms defined in plain language as a quick lookup while working through the other lists — spanning basic terms (overfitting, gradient descent, epoch) through intermediate (attention, embedding, fine-tuning) to advanced (RLHF, quantization, mixture of experts, KV cache). |
| 10 | `ROADMAP.md` | 🚧 Planned | A single unified week-by-week timeline that interleaves papers, books, datasets, and projects into one schedule, replacing the need to manually cross-reference each file's independent suggested path. |
| 11 | `CHEATSHEETS.md` | 🚧 Planned | Condensed one-page references: linear algebra identities, common probability distributions, loss functions with their gradients, optimizer update rules (SGD, momentum, Adam, AdamW), and transformer architecture dimension/shape references. |
| 12 | `CONTRIBUTING.md` | 🚧 Planned | Formal contribution guidelines: how to propose a new entry, formatting conventions for each file type, and the bar for link quality (must be a primary/official source, not an aggregator or paywalled mirror). |
| 13 | `CHANGELOG.md` | 🚧 Planned | A running, dated log of every addition, removal, and link fix across all files, so the repo's evolution is auditable. |

---

## How the "100" files are structured

Every completed list follows the same template so they're easy to navigate interchangeably:

- **10–12 topic sections**, ordered roughly beginner → advanced, both within a section and across the file.
- **Numbered entries 1–100**, each with a title, author/source, and a direct link.
- **A suggested timeline** at the bottom of the file (in weeks or months) showing how long to spend in each section before moving to the next.
- A preference for **primary, stable sources** — arXiv for papers, official/author sites for books and datasets, official repos for projects — over aggregator or reseller links, so links stay valid longer.

Example entry format (from `ResearchPaper.md`):
```
29. Vaswani et al. — Attention Is All You Need — https://arxiv.org/pdf/1706.03762
```

## Suggested use

If you're starting from zero and want one path through everything currently available:

1. **Foundations (parallel track, ~weeks 1–4):** Work through §1 of `ResearchPaper.md` and §1–2 of `Books.md` together (classic ML papers + math/stats books), while doing §1–2 of `Projects.md` using datasets from §1–2 of `Datasets.md`.
2. **Deep learning core (~weeks 5–10):** Move through the deep learning sections in all four files together — CNN/RNN/attention papers, deep learning books, image/text datasets, and CV/NLP projects.
3. **Specialize (~weeks 11–14):** Pick NLP, computer vision, or reinforcement learning as a focus and go deep in that vertical across all four files simultaneously.
4. **Modern stack (~weeks 15–20):** Finish with the LLM/generative-AI and MLOps sections in every file — this is where current AI/ML engineering hiring demand concentrates: fine-tuning, RAG, agents, and deployment.
5. **Ongoing:** Revisit `Interview_Questions.md` and `Glossary.md` (once available) throughout, rather than only at the end, so terminology and interview prep compound alongside the technical work.
6. **Once `ROADMAP.md` exists:** it will replace steps 1–4 above with a single explicit week-by-week schedule.

## Notes on link quality

- **Papers:** primarily direct arXiv PDF links. A handful of pre-2013 classics (Perceptron, backprop, LeNet, AlexNet, LSTM) predate arXiv and link to their original hosting page instead.
- **Books:** links prioritize free, legal versions (author sites, open textbooks, official free releases) where they exist; otherwise they point to the publisher's page — never to pirated copies.
- **Datasets:** links go to the official source (UCI, Kaggle, Hugging Face Datasets, or the originating research group/project page).
- **Projects:** entries are ideas/specs rather than links, meant to be paired with a dataset from `Datasets.md` and, where relevant, a paper from `ResearchPaper.md`.
- If any link has moved, search the title + author/source — nearly everything here is a well-known, stable reference, so it's usually one search away.

## FAQ

**Do I need to go through the files in order (papers → books → datasets → projects)?**
No — they're designed to be worked in parallel by topic, not sequentially file-by-file. See "Suggested use" above.

**Do I need a strong math background to start?**
Enough to be comfortable learning linear algebra and probability alongside the material. `Books.md` §1 and `ResearchPaper.md` classics section are there to build that base if you don't have it yet.

**What if a link is broken?**
Search the title and author/source — these are stable, well-known references, so a broken link almost always means the host changed its URL, not that the resource disappeared. Feel free to open a PR with the fix.

**Why arXiv PDFs instead of the published/journal version?**
arXiv links are free, permanent, and don't require institutional access — the tradeoff is that a few papers' arXiv versions are preprints rather than the final camera-ready version, which rarely matters for study purposes.

## Contributing

Found a broken link, an outdated resource, or have a paper/book/dataset/project worth adding? Open an issue or a pull request. Once `CONTRIBUTING.md` is added it will contain formal formatting conventions — until then, match the existing structure of the file you're editing (numbered entry, title, author/source, link, correct section placement).

## License

No license file yet — treat contents as reference material for personal study until one is added.
