/**
 * 100 — A Two-Track AI/ML Reading List
 * TypeScript Interactive Engine for Dynamic UI
 * Preserves the exact original theme: Minimalist editorial dark aesthetic with warm amber and muted teal accents.
 */
// =========================================================================
// ORIGINAL DATASETS & REPOSITORY GROUNDING
// =========================================================================
const BOOKS_URL = "https://github.com/mohdshamii/100/blob/main/Books.md";
const PAPERS_URL = "https://github.com/mohdshamii/100/blob/main/ResearchPaper.md";
const DATASETS_URL = "https://github.com/mohdshamii/100/blob/main/Datasets.md";
const TOOLS_URL = "https://github.com/mohdshamii/100/blob/main/Tools.md";
const PROJECTS_URL = "https://github.com/mohdshamii/100/blob/main/Projects.md";
const COURSES_URL = "https://github.com/mohdshamii/100/blob/main/Courses.md";
const GLOSSARY_URL = "https://github.com/mohdshamii/100/blob/main/Glossary.md";
const INTERVIEW_URL = "https://github.com/mohdshamii/100/blob/main/Interview_Questions.md";
const originalBooksCategories = [
    {
        n: 1,
        name: "Math & Stats Foundations",
        count: 10,
        anchor: "1-math--stats-foundations",
        track: "books",
        trackLabel: "Books",
        base: BOOKS_URL,
        examples: [
            "Linear Algebra Done Right — Axler",
            "Convex Optimization — Boyd & Vandenberghe",
            "Mathematics for Machine Learning — Deisenroth, Faisal, Ong"
        ]
    },
    {
        n: 2,
        name: "Classic Machine Learning",
        count: 10,
        anchor: "2-classic-machine-learning",
        track: "books",
        trackLabel: "Books",
        base: BOOKS_URL,
        examples: [
            "Pattern Recognition and Machine Learning — Bishop",
            "The Elements of Statistical Learning — Hastie, Tibshirani, Friedman",
            "The Hundred-Page Machine Learning Book — Burkov"
        ]
    },
    {
        n: 3,
        name: "Deep Learning Foundations",
        count: 10,
        anchor: "3-deep-learning-foundations",
        track: "books",
        trackLabel: "Books",
        base: BOOKS_URL,
        examples: [
            "Deep Learning — Goodfellow, Bengio, Courville",
            "Dive into Deep Learning — Zhang, Lipton, Li, Smola",
            "Grokking Deep Learning — Trask"
        ]
    },
    {
        n: 4,
        name: "Practical / Applied ML Engineering",
        count: 10,
        anchor: "4-practical--applied-ml-engineering",
        track: "books",
        trackLabel: "Books",
        base: BOOKS_URL,
        examples: [
            "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow — Géron",
            "Machine Learning Yearning — Ng",
            "Interpretable Machine Learning — Molnar"
        ]
    },
    {
        n: 5,
        name: "Natural Language Processing",
        count: 8,
        anchor: "5-natural-language-processing",
        track: "books",
        trackLabel: "Books",
        base: BOOKS_URL,
        examples: [
            "Speech and Language Processing — Jurafsky & Martin",
            "Natural Language Processing with Transformers — Tunstall, von Werra, Wolf"
        ]
    },
    {
        n: 6,
        name: "Computer Vision",
        count: 7,
        anchor: "6-computer-vision",
        track: "books",
        trackLabel: "Books",
        base: BOOKS_URL,
        examples: [
            "Computer Vision: Algorithms and Applications — Szeliski",
            "Multiple View Geometry in Computer Vision — Hartley & Zisserman"
        ]
    },
    {
        n: 7,
        name: "Reinforcement Learning",
        count: 7,
        anchor: "7-reinforcement-learning",
        track: "books",
        trackLabel: "Books",
        base: BOOKS_URL,
        examples: [
            "Reinforcement Learning: An Introduction — Sutton & Barto",
            "Grokking Deep Reinforcement Learning — Morales"
        ]
    },
    {
        n: 8,
        name: "Generative AI & LLMs",
        count: 10,
        anchor: "8-generative-ai--llms",
        track: "books",
        trackLabel: "Books",
        base: BOOKS_URL,
        examples: [
            "Build a Large Language Model (From Scratch) — Raschka",
            "Hands-On Large Language Models — Alammar & Grootendorst",
            "AI Engineering — Huyen"
        ]
    },
    {
        n: 9,
        name: "MLOps & Systems",
        count: 8,
        anchor: "9-mlops--systems",
        track: "books",
        trackLabel: "Books",
        base: BOOKS_URL,
        examples: [
            "Designing Machine Learning Systems — Huyen",
            "Designing Data-Intensive Applications — Kleppmann"
        ]
    },
    {
        n: 10,
        name: "Theory & Advanced Topics",
        count: 20,
        anchor: "10-theory--advanced-topics",
        track: "books",
        trackLabel: "Books",
        base: BOOKS_URL,
        examples: [
            "Artificial Intelligence: A Modern Approach — Russell & Norvig",
            "The Book of Why — Pearl & Mackenzie",
            "Superintelligence — Bostrom",
            "Causal Inference: The Mixtape — Cunningham"
        ]
    }
];
const originalPapersCategories = [
    {
        n: 1,
        name: "Classic Foundations (Beginner)",
        count: 10,
        anchor: "1-classic-foundations-beginner",
        track: "papers",
        trackLabel: "Papers",
        base: PAPERS_URL,
        examples: [
            "Rosenblatt — The Perceptron (1958)",
            "Rumelhart, Hinton, Williams — Learning representations by back-propagating errors (1986)",
            "Krizhevsky, Sutskever, Hinton — AlexNet (2012)"
        ]
    },
    {
        n: 2,
        name: "Deep CNN Architectures",
        count: 10,
        anchor: "2-deep-cnn-architectures",
        track: "papers",
        trackLabel: "Papers",
        base: PAPERS_URL,
        examples: [
            "Simonyan & Zisserman — VGG",
            "He et al. — ResNet",
            "Tan & Le — EfficientNet"
        ]
    },
    {
        n: 3,
        name: "Sequence Models (RNN/LSTM era)",
        count: 8,
        anchor: "3-sequence-models-rnnlstm-era",
        track: "papers",
        trackLabel: "Papers",
        base: PAPERS_URL,
        examples: [
            "Sutskever, Vinyals, Le — Sequence to Sequence Learning",
            "Mikolov et al. — Word2Vec",
            "Peters et al. — ELMo"
        ]
    },
    {
        n: 4,
        name: "Attention & Transformers",
        count: 10,
        anchor: "4-attention--transformers",
        track: "papers",
        trackLabel: "Papers",
        base: PAPERS_URL,
        examples: [
            "Vaswani et al. — Attention Is All You Need",
            "Devlin et al. — BERT",
            "Dosovitskiy et al. — Vision Transformer (ViT)"
        ]
    },
    {
        n: 5,
        name: "Large Language Models",
        count: 15,
        anchor: "5-large-language-models",
        track: "papers",
        trackLabel: "Papers",
        base: PAPERS_URL,
        examples: [
            "Brown et al. — GPT-3",
            "Touvron et al. — LLaMA",
            "Hu et al. — LoRA",
            "Wei et al. — Chain-of-Thought Prompting"
        ]
    },
    {
        n: 6,
        name: "Generative Models",
        count: 12,
        anchor: "6-generative-models",
        track: "papers",
        trackLabel: "Papers",
        base: PAPERS_URL,
        examples: [
            "Goodfellow et al. — Generative Adversarial Networks",
            "Ho, Jain, Abbeel — DDPM",
            "Rombach et al. — Latent Diffusion (Stable Diffusion)"
        ]
    },
    {
        n: 7,
        name: "Reinforcement Learning",
        count: 10,
        anchor: "7-reinforcement-learning",
        track: "papers",
        trackLabel: "Papers",
        base: PAPERS_URL,
        examples: [
            "Mnih et al. — DQN",
            "Schulman et al. — PPO",
            "Silver et al. — AlphaGo Zero"
        ]
    },
    {
        n: 8,
        name: "Self-Supervised & Representation Learning",
        count: 7,
        anchor: "8-self-supervised--representation-learning",
        track: "papers",
        trackLabel: "Papers",
        base: PAPERS_URL,
        examples: [
            "Chen et al. — SimCLR",
            "Caron et al. — DINO",
            "He et al. — Masked Autoencoders (MAE)"
        ]
    },
    {
        n: 9,
        name: "Multimodal & Vision-Language",
        count: 7,
        anchor: "9-multimodal--vision-language",
        track: "papers",
        trackLabel: "Papers",
        base: PAPERS_URL,
        examples: [
            "Kirillov et al. — Segment Anything (SAM)",
            "Liu et al. — LLaVA",
            "Radford et al. — CLIP"
        ]
    },
    {
        n: 10,
        name: "Optimization, Efficiency, Alignment & Safety (Advanced)",
        count: 11,
        anchor: "10-optimization-efficiency-alignment--safety-advanced",
        track: "papers",
        trackLabel: "Papers",
        base: PAPERS_URL,
        examples: [
            "Kingma & Ba — Adam",
            "Bai et al. — Constitutional AI",
            "Hendrycks et al. — MMLU"
        ]
    }
];
// Additional rich collections from repository's other markdown files
const additionalCategories = [
    {
        n: 1,
        name: "Datasets: Tabular, Vision, NLP & Multimodal",
        count: 100,
        anchor: "1-beginner-tabular--classic-ml",
        track: "datasets",
        trackLabel: "Datasets",
        base: DATASETS_URL,
        examples: [
            "Iris, Titanic, California Housing (Tabular)",
            "MNIST, CIFAR-10, ImageNet (Vision)",
            "SQuAD 2.0, GLUE, Common Crawl, Anthropic HH-RLHF (NLP/RLHF)"
        ]
    },
    {
        n: 2,
        name: "Projects: 100 Practical Builds from Scratch to LLMs",
        count: 108,
        anchor: "1-foundational-ml-regression--classification--beginner",
        track: "projects",
        trackLabel: "Projects",
        base: PROJECTS_URL,
        examples: [
            "Linear & Logistic Regression from Scratch (No sklearn)",
            "ResNet & LSTM in PyTorch, U-Net Segmentation",
            "LoRA Fine-Tuning Open LLMs, Enterprise RAG Pipeline, FastAPI Deployment"
        ]
    },
    {
        n: 3,
        name: "Tools & Libraries: Fundamentals to Production",
        count: 100,
        anchor: "1-core-python--data-handling",
        track: "tools",
        trackLabel: "Tools",
        base: TOOLS_URL,
        examples: [
            "NumPy, Pandas, Polars, SciPy (Data Handling)",
            "PyTorch, JAX, Hugging Face Transformers, vLLM (Deep Learning & LLMs)",
            "MLflow, Docker, Ray, Triton Inference Server (MLOps)"
        ]
    },
    {
        n: 4,
        name: "Free Courses & Lectures: Beginner to Advanced",
        count: 100,
        anchor: "1-math-foundations",
        track: "courses",
        trackLabel: "Courses",
        base: COURSES_URL,
        examples: [
            "MIT 18.06 Linear Algebra (Gilbert Strang)",
            "Stanford CS229 Machine Learning & CS224N NLP",
            "DeepLearning.AI, Fast.ai, Karpathy's Neural Networks Zero to Hero"
        ]
    },
    {
        n: 5,
        name: "Glossary: 100 AI/ML Terms Explained in Plain Language",
        count: 100,
        anchor: "1-basic-ml-concepts",
        track: "glossary",
        trackLabel: "Glossary",
        base: GLOSSARY_URL,
        examples: [
            "Overfitting, Generalization, Inductive Bias, Backpropagation",
            "Self-Attention, KV Cache, FlashAttention, Mixture of Experts (MoE)",
            "Low-Rank Adaptation (LoRA), Direct Preference Optimization (DPO)"
        ]
    },
    {
        n: 6,
        name: "Interview Questions: 100 Technical & Architectural Q&A",
        count: 105,
        anchor: "1-ml-fundamentals--math",
        track: "interview",
        trackLabel: "Interview",
        base: INTERVIEW_URL,
        examples: [
            "Bias-Variance Tradeoff & Mathematical Decomposition",
            "Why Scaled Dot-Product Attention divides by sqrt(d_k)",
            "Designing YouTube-scale Recommendation Systems (Two-Tower architecture)"
        ]
    }
];
const booksRoadmap = [
    { when: "Months 1–2", what: "Math foundations (§1) alongside classic ML (§2)." },
    { when: "Months 3–4", what: "Deep learning foundations (§3) + practical engineering (§4)." },
    { when: "Months 5–6", what: "Pick your specialty — NLP (§5), CV (§6), or RL (§7)." },
    { when: "Month 7", what: "Generative AI / LLMs (§8) — most relevant to current industry roles." },
    { when: "Month 8+", what: "MLOps (§9) for production skills, then theory (§10) as you go deeper." }
];
const papersRoadmap = [
    { when: "Weeks 1–3", what: "Sections 1–3 (fundamentals, classic CNNs, RNNs)." },
    { when: "Weeks 4–6", what: "Sections 4–5 (Transformers, LLMs) — most relevant for AI/ML engineering roles today." },
    { when: "Weeks 7–8", what: "Section 6 (Generative models)." },
    { when: "Weeks 9–10", what: "Sections 7–8 (RL, self-supervised learning)." },
    { when: "Weeks 11–12", what: "Sections 9–10 (multimodal, efficiency, alignment)." }
];
// =========================================================================
// APPLICATION CONTROLLER CLASS
// =========================================================================
class App {
    constructor() {
        this.state = {
            theme: 'dark',
            searchQuery: '',
            activeTrack: 'all',
            expandedCategories: new Set()
        };
        this.elements = {
            themeToggle: document.getElementById("themeToggle"),
            themeIcon: document.getElementById("themeIcon"),
            menuToggle: document.getElementById("menuToggle"),
            mobilePanel: document.getElementById("mobilePanel"),
            searchInput: document.getElementById("searchInput"),
            trackTabs: document.querySelectorAll(".track-tab"),
            resultsCount: document.getElementById("resultsCount"),
            catList: document.getElementById("catList"),
            noResults: document.getElementById("noResults"),
            booksTimeline: document.getElementById("booksTimeline"),
            papersTimeline: document.getElementById("papersTimeline")
        };
        this.initTheme();
        this.initMobileMenu();
        this.initExplorer();
        this.initTimelines();
        this.initObservers();
    }
    // 1. Theme Management (Preserves dark default with warm amber/teal, toggleable to warm off-white)
    initTheme() {
        const savedTheme = localStorage.getItem("theme_preference");
        if (savedTheme === 'light' || savedTheme === 'dark') {
            this.state.theme = savedTheme;
        }
        else {
            // Default to dark as in original index.html
            this.state.theme = 'dark';
        }
        this.applyTheme();
        if (this.elements.themeToggle) {
            this.elements.themeToggle.addEventListener("click", () => {
                this.state.theme = this.state.theme === "dark" ? "light" : "dark";
                localStorage.setItem("theme_preference", this.state.theme);
                this.applyTheme();
            });
        }
    }
    applyTheme() {
        const isDark = this.state.theme === "dark";
        if (isDark) {
            document.documentElement.removeAttribute("data-theme");
        }
        else {
            document.documentElement.setAttribute("data-theme", "light");
        }
        if (this.elements.themeToggle && this.elements.themeIcon) {
            const sunPath = '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>';
            const moonPath = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
            this.elements.themeIcon.innerHTML = isDark ? moonPath : sunPath;
            this.elements.themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
            this.elements.themeToggle.setAttribute("title", isDark ? "Switch to light theme" : "Switch to dark theme");
        }
    }
    // 2. Mobile Menu (Accessible keyboard & touch handling)
    initMobileMenu() {
        if (!this.elements.menuToggle || !this.elements.mobilePanel)
            return;
        const toggle = this.elements.menuToggle;
        const panel = this.elements.mobilePanel;
        toggle.addEventListener("click", () => {
            const isOpen = panel.classList.toggle("open");
            toggle.setAttribute("aria-expanded", String(isOpen));
        });
        panel.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                panel.classList.remove("open");
                toggle.setAttribute("aria-expanded", "false");
            });
        });
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && panel.classList.contains("open")) {
                panel.classList.remove("open");
                toggle.setAttribute("aria-expanded", "false");
                toggle.focus();
            }
        });
    }
    // 3. Resource Explorer & Accordion Engine
    getAllCategories() {
        return [
            ...originalBooksCategories,
            ...originalPapersCategories,
            ...additionalCategories
        ];
    }
    initExplorer() {
        this.renderCategoryList();
        if (this.elements.searchInput) {
            this.elements.searchInput.addEventListener("input", (e) => {
                const target = e.target;
                this.state.searchQuery = target.value.trim().toLowerCase();
                this.applyFilters();
            });
        }
        this.elements.trackTabs.forEach(tab => {
            tab.addEventListener("click", () => {
                this.elements.trackTabs.forEach(t => t.setAttribute("aria-pressed", "false"));
                tab.setAttribute("aria-pressed", "true");
                this.state.activeTrack = (tab.dataset.track || 'all');
                this.applyFilters();
            });
        });
        this.applyFilters();
    }
    renderCategoryList() {
        if (!this.elements.catList)
            return;
        const all = this.getAllCategories();
        this.elements.catList.innerHTML = all.map(c => `
      <div class="cat-item" data-open="false" data-track="${c.track}" data-search="${(c.name + ' ' + c.examples.join(' ')).toLowerCase()}" id="cat-${c.track}-${c.n}">
        <button class="cat-trigger" aria-expanded="false" aria-controls="panel-${c.track}-${c.n}">
          <span class="num">${String(c.n).padStart(2, '0')}</span>
          <span class="body">
            <span class="name">${c.name}</span>
            <span class="track-pill">${c.trackLabel}</span>
          </span>
          <span class="count-pill">${c.count} ${c.track === 'books' ? 'books' : c.track === 'papers' ? 'papers' : 'items'}</span>
          <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="cat-panel" id="panel-${c.track}-${c.n}">
          <div class="cat-panel-inner">
            <ul class="cat-examples">
              ${c.examples.map(e => `<li>${e}</li>`).join('')}
            </ul>
            <a class="open-link" href="${c.base}#${c.anchor}" target="_blank" rel="noopener">View this section on GitHub ↗</a>
          </div>
        </div>
      </div>
    `).join('');
        this.elements.catList.querySelectorAll(".cat-trigger").forEach(btn => {
            btn.addEventListener("click", () => {
                const item = btn.closest(".cat-item");
                if (!item)
                    return;
                const panel = item.querySelector(".cat-panel");
                if (!panel)
                    return;
                const isOpen = item.getAttribute("data-open") === "true";
                item.setAttribute("data-open", String(!isOpen));
                btn.setAttribute("aria-expanded", String(!isOpen));
                panel.style.maxHeight = isOpen ? "0px" : panel.scrollHeight + "px";
            });
            btn.addEventListener("keydown", (e) => {
                if (e.key === "Escape") {
                    const item = btn.closest(".cat-item");
                    if (item && item.getAttribute("data-open") === "true") {
                        const panel = item.querySelector(".cat-panel");
                        item.setAttribute("data-open", "false");
                        btn.setAttribute("aria-expanded", "false");
                        if (panel)
                            panel.style.maxHeight = "0px";
                        btn.focus();
                    }
                }
            });
        });
    }
    applyFilters() {
        const q = this.state.searchQuery;
        const activeTrack = this.state.activeTrack;
        const items = document.querySelectorAll(".cat-item");
        let visible = 0;
        items.forEach(item => {
            const itemTrack = item.dataset.track || '';
            const itemSearch = item.dataset.search || '';
            const matchesTrack = activeTrack === "all" || itemTrack === activeTrack;
            const matchesSearch = !q || itemSearch.includes(q);
            const show = matchesTrack && matchesSearch;
            item.style.display = show ? "" : "none";
            if (show)
                visible++;
        });
        if (this.elements.noResults) {
            this.elements.noResults.hidden = visible !== 0;
        }
        if (this.elements.resultsCount) {
            const total = items.length;
            this.elements.resultsCount.textContent = `Showing ${visible} of ${total} categories`;
        }
    }
    // 4. Roadmap Timelines
    initTimelines() {
        if (this.elements.booksTimeline) {
            this.renderTimeline(this.elements.booksTimeline, booksRoadmap, "");
        }
        if (this.elements.papersTimeline) {
            this.renderTimeline(this.elements.papersTimeline, papersRoadmap, "papers");
        }
    }
    renderTimeline(el, data, cls) {
        el.innerHTML = data.map(step => `
      <div class="tl-step ${cls}">
        <div class="when">${step.when}</div>
        <div class="what">${step.what}</div>
      </div>
    `).join('');
    }
    // 5. Intersection Observers (Smooth Count-up & Scroll Reveal)
    initObservers() {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        // Scroll reveal
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        document.querySelectorAll(".reveal").forEach(el => {
            if (reduceMotion) {
                el.classList.add("is-visible");
            }
            else {
                revealObserver.observe(el);
            }
        });
        // Count animation
        const animateCount = (el) => {
            const target = parseInt(el.dataset.count || '0', 10);
            if (reduceMotion) {
                el.textContent = String(target);
                return;
            }
            const duration = 900;
            const start = performance.now();
            const tick = (now) => {
                const p = Math.min(1, (now - start) / duration);
                const eased = 1 - Math.pow(1 - p, 3);
                el.textContent = String(Math.round(eased * target));
                if (p < 1)
                    requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        };
        const countObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCount(entry.target);
                    countObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });
        document.querySelectorAll(".stat-num").forEach(el => {
            countObserver.observe(el);
        });
    }
}
// Instantiate on DOM ready
document.addEventListener("DOMContentLoaded", () => {
    new App();
});
export {};
