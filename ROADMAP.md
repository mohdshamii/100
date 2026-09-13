# ROADMAP — One Unified Learning Path

> This file replaces the need to cross-reference each list's independent "suggested path." It interleaves [`ResearchPaper.md`](./ResearchPaper.md), [`Books.md`](./Books.md), [`Datasets.md`](./Datasets.md), [`Projects.md`](./Projects.md), and [`Tools.md`](./Tools.md) into one week-by-week plan — each phase tells you exactly which numbered entries to use from each file, so you're reading, building, and practicing on the same topic simultaneously instead of each file in isolation.
>
> Total length: **~30 weeks** at a steady part-time pace (10–15 hrs/week). Compress or stretch based on your own schedule — the *order* matters more than the exact timing.
>
> Use [`Glossary.md`](./Glossary.md) as a standing reference throughout, and rotate in a couple of sources from [`Blogs_and_Newsletters.md`](./Blogs_and_Newsletters.md) and [`Courses.md`](./Courses.md) every phase — they aren't called out week-by-week below, but they belong in the mix continuously.

---

## Phase 1 — Foundations (Weeks 1–4)

Goal: get comfortable with the math, classic ML workflow, and Python tooling before touching deep learning.

- **Books:** §1 Math & Stats Foundations (1–10), §2 Classic ML (11–20)
- **Papers:** §1 Classic Foundations (1–10)
- **Datasets:** §1 Beginner Tabular & Classic ML (1–10)
- **Projects:** §1 Foundational ML (1–10), §2 Classic ML From Scratch (11–20)
- **Tools:** §1 Core Python & Data (1–10), §2 Classic Machine Learning (11–20)
- **Courses:** §1 Math Foundations, §2 Programming & CS Foundations, §3 Classic ML
- **Glossary:** §1 Basic ML Concepts, §2 Math & Stats Terms
- **Interview prep:** §1–4 (fundamentals, stats, classic algorithms, evaluation) — read through, don't worry about answering perfectly yet

**Checkpoint:** you can implement linear/logistic regression, a decision tree, and K-means from scratch, and explain bias-variance tradeoff and precision/recall without notes.

---

## Phase 2 — Deep Learning Core (Weeks 5–8)

Goal: understand what's happening inside a neural network, not just how to call `.fit()`.

- **Books:** §3 Deep Learning Foundations (21–30)
- **Papers:** §2 Deep CNN Architectures (11–20), §3 Sequence Models (21–28)
- **Datasets:** §2 Classic Image Datasets (11–20), §3 Classic NLP/Text (21–28)
- **Projects:** §3 Computer Vision (21–30), §5 Deep Learning Internals From Scratch (41–48)
- **Tools:** §3 Deep Learning Frameworks (21–28) — pick PyTorch unless you have a strong reason otherwise
- **Courses:** §4 Deep Learning
- **Glossary:** §3 Classic ML Terms, §4 Deep Learning Terms, §5 Training & Optimization Terms
- **Interview prep:** §5–6 (deep learning fundamentals, optimization)

**Checkpoint:** you've trained a CNN on MNIST/CIFAR-10 and an LSTM on a text dataset, and can explain backpropagation, vanishing gradients, and batch normalization.

---

## Phase 3 — Attention, Transformers & NLP (Weeks 9–12)

Goal: understand the architecture behind every modern language model before jumping to LLMs specifically.

- **Papers:** §4 Attention & Transformers (29–38)
- **Books:** §5 Natural Language Processing (41–48)
- **Datasets:** §3 Classic NLP (21–28, if not finished), plus SQuAD and GLUE/SuperGLUE from §8 Advanced NLP (68–70)
- **Projects:** §4 Natural Language Processing (31–40)
- **Tools:** §4 NLP & LLM Tooling (29–40)
- **Courses:** §5 Natural Language Processing
- **Glossary:** §6 NLP & Transformer Terms
- **Interview prep:** §7 NLP & LLMs, questions 53–58 (tokenization through pretraining/fine-tuning)

**Checkpoint:** you can explain self-attention and positional encoding from memory, and you've fine-tuned BERT for a classification task.

---

## Phase 4 — Specialize: Computer Vision *or* Reinforcement Learning (Weeks 13–16)

Goal: go deep in one vertical. Pick based on your target role — you can circle back to the other later.

**Track A: Computer Vision**
- **Books:** §6 Computer Vision (49–55)
- **Datasets:** §7 Advanced Computer Vision (51–60)
- **Projects:** advanced builds from §3 (26–30) — object detection, segmentation, ViT fine-tuning
- **Tools:** §5 Computer Vision (41–48)
- **Courses:** §6 Computer Vision

**Track B: Reinforcement Learning**
- **Papers:** §7 Reinforcement Learning (66–75)
- **Books:** §7 Reinforcement Learning (56–62)
- **Datasets:** §11 Reinforcement Learning Environments (89–94)
- **Projects:** §12 Reinforcement Learning (96–100)
- **Courses:** §7 Reinforcement Learning

**Glossary (either track):** §9 Reinforcement Learning Terms (if Track B)
**Interview prep:** §7 questions 65–70 (CV) or §9 questions 71–76 (RL)

**Checkpoint (CV):** you've fine-tuned a ViT or built a working object detector.
**Checkpoint (RL):** you've trained a DQN or PPO agent to solve a Gymnasium environment.

---

## Phase 5 — Generative Models (Weeks 17–19)

Goal: understand GANs, VAEs, and diffusion models before layering LLM-specific generative techniques on top.

- **Papers:** §6 Generative Models (54–65)
- **Books:** relevant chapters from §8 Generative AI & LLMs (63–72) — focus on the GAN/diffusion-specific titles
- **Datasets:** §9 Multimodal (71–78) for image-text pairs
- **Projects:** §8 Generative Models (62–69)
- **Courses:** §8 LLMs & Generative AI (the generative-model-specific lectures within it)
- **Glossary:** §8 Generative Model Terms

**Checkpoint:** you've trained a DCGAN on MNIST and a small diffusion model, and can explain the difference between a GAN, a VAE, and a diffusion model.

---

## Phase 6 — LLMs & Fine-Tuning (Weeks 20–23)

Goal: this is the core of current AI/ML engineering hiring — spend real time here.

- **Papers:** §5 Large Language Models (39–53), §9 Multimodal (83–89)
- **Books:** §8 Generative AI & LLMs (63–72)
- **Datasets:** §8 Advanced NLP/LLM Pretraining (61–70), §10 RLHF & Alignment Datasets (79–88)
- **Projects:** §9 LLMs & Fine-Tuning (70–79)
- **Tools:** revisit §4 NLP/LLM Tooling (PEFT, TRL specifically), plus §9 Model Serving (71–80)
- **Courses:** §8 LLMs & Generative AI
- **Glossary:** §7 LLM-Specific Terms
- **Interview prep:** §7 in full (questions 53–64), especially LoRA, RLHF vs. DPO, and hallucination

**Checkpoint:** you've fine-tuned an open-source LLM with LoRA/QLoRA and can explain the difference between pretraining, fine-tuning, RLHF, and DPO clearly enough to teach it.

---

## Phase 7 — RAG, Agents & Applications (Weeks 24–25)

Goal: build the application layer on top of the LLMs you now understand from the inside.

- **Projects:** §10 RAG, Agents & LLM Applications (80–87)
- **Tools:** §8 Vector Databases & Retrieval (64–70), §9 Model Serving & Inference (71–80, if not already covered)
- **Books:** *AI Engineering* and *Designing Large Language Model Applications* from §8 (Books.md)
- **Courses:** revisit §8 (Courses.md) — the DeepLearning.AI short courses are especially built for this phase
- **Glossary:** term 70 (RAG) as a refresher, plus revisit term 63 (in-context learning)

**Checkpoint:** you've built a working RAG pipeline over your own documents and a simple tool-using agent.

---

## Phase 8 — MLOps & Production (Weeks 26–28)

Goal: make sure your projects are deployable systems, not just notebooks.

- **Papers:** §10 Optimization, Efficiency & Alignment (90–100)
- **Books:** §9 MLOps & Systems (73–80)
- **Projects:** §11 MLOps & Deployment (88–95)
- **Tools:** §6 Experiment Tracking (49–55), §7 Data Engineering & Pipelines (56–63), §10 Distributed Training (81–88), §11 MLOps, Deployment & Infrastructure (89–96)
- **Courses:** §9 MLOps & Deployment
- **Glossary:** §10 MLOps & Systems Terms
- **Interview prep:** §10–11 (ML system design and coding/DSA)

**Checkpoint:** you've deployed a model behind a REST API in a Docker container with basic monitoring, and can walk through designing a recommendation system end-to-end.

---

## Phase 9 — Interview Prep & Portfolio Polish (Weeks 29–30)

Goal: consolidate everything into interview-readiness and a presentable portfolio.

- **Interview prep:** all of `Interview_Questions.md`, with extra repetition on §12 Behavioral & Take-Home — prepare concrete personal examples in advance
- **Books:** dip into §10 Theory & Advanced Topics (81–100) for any area where interviewers in your target role probe deeper
- **Optional specialization round-out:** §12 Recommender Systems (Datasets 95–100, Projects 56–61) as a well-rounded bonus topic
- **Portfolio:** package 3–5 of your strongest projects from across all phases with clear READMEs, since this is what most interviewers and recruiters will actually look at

**Checkpoint:** you can whiteboard an ML system design question, answer a random question from any `Interview_Questions.md` section without notes, and point to a working project for each major skill area (classic ML, deep learning, NLP/LLMs, and MLOps).

---

## Notes on using this roadmap

- **Parallel, not sequential, within a phase.** Each phase lists five categories of material for the same reason: read a paper, then immediately try the matching project on the matching dataset. Don't finish all the papers in a phase before starting any projects.
- **Compress ruthlessly if you already know something.** If you already have a strong classic ML background, Phase 1 might take you 3 days, not 4 weeks — the phases are ordered checkpoints, not mandatory durations.
- **It's fine to loop back.** If Phase 6 makes you realize your Transformer fundamentals from Phase 3 are shaky, go back — this roadmap is a spiral, not a strict staircase.
- **This will get outdated on its own timeline.** The LLM/generative AI phases in particular will need periodic refreshing as the field moves — check `Blogs_and_Newsletters.md` and the "Planned" row for `CHANGELOG.md` in the main README for how this repo tracks that.

