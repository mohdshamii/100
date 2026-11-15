/**
 * Top Machine Learning Interview Questions Dataset
 * Inspired by GeeksforGeeks Interview Corner & grounded in repository Interview_Questions.md
 */

const INTERVIEW_QUESTIONS = [
  {
    id: "iq1",
    num: 1,
    category: "ML Fundamentals",
    difficulty: "easy",
    question: "What is the bias-variance tradeoff?",
    answer: "The bias-variance tradeoff describes the fundamental tension between a model's complexity and its error decomposition. <strong>High bias</strong> underfits because the model is too simplistic to capture underlying patterns (e.g., linear model on curved data). <strong>High variance</strong> overfits because the model is overly sensitive to random fluctuations in the training sample.<br><br>$$\\text{Expected Prediction Error} = \\text{Bias}^2 + \\text{Variance} + \\sigma_{\\epsilon}^2$$<br>The optimal model minimizes the total sum of bias squared and variance, reaching the sweet spot of generalization on unseen test data.",
    tip: "In interviews, always state the mathematical decomposition first, draw the U-shaped total error curve, and mention that irreducible noise cannot be removed by any model."
  },
  {
    id: "iq2",
    num: 2,
    category: "ML Fundamentals",
    difficulty: "easy",
    question: "What is overfitting and how do you systematically prevent it?",
    answer: "Overfitting occurs when a model memorizes idiosyncrasies, outliers, and noise in the training set instead of learning the true data-generating distribution. Symptoms include near-zero training error alongside poor test performance.<br><br><strong>Key Prevention Techniques:</strong><ul><li><strong>More Training Data:</strong> Collecting more diverse samples or data augmentation.</li><li><strong>Regularization:</strong> L1 (Lasso) for sparsity, L2 (Ridge) for weight shrinkage, Dropout in neural nets.</li><li><strong>Early Stopping:</strong> Monitoring validation loss and halting when it begins to diverge.</li><li><strong>Structural Constraints:</strong> Limiting max tree depth, min samples per leaf, pruning, or reducing hidden units.</li><li><strong>Ensemble Averaging:</strong> Bagging and Random Forests to reduce variance.</li></ul>",
    tip: "Explain both data-centric fixes (augmentation, more data) and model-centric fixes (regularization, pruning, architecture simplification)."
  },
  {
    id: "iq3",
    num: 3,
    category: "Classic ML",
    difficulty: "medium",
    question: "What is the difference between Bagging and Boosting?",
    answer: "Both are ensemble techniques combining weak learners into a strong model, but they differ fundamentally in execution and purpose:<ul><li><strong>Bagging (Bootstrap Aggregating):</strong> Trains multiple base learners <em>independently in parallel</em> on bootstrapped subsets of data. Their predictions are averaged (regression) or voted (classification). <strong>Primary goal:</strong> Variance reduction (e.g., Random Forests).</li><li><strong>Boosting:</strong> Trains base learners <em>sequentially</em>, where each subsequent model focuses on the errors/residuals made by previous models. <strong>Primary goal:</strong> Bias reduction (e.g., AdaBoost, Gradient Boosting, XGBoost, LightGBM).</li></ul>",
    tip: "Mention that bagging works best with high-variance, unpruned deep trees, whereas boosting works best with shallow, high-bias weak learners (e.g., depth-3 to 6 trees or stumps)."
  },
  {
    id: "iq4",
    num: 4,
    category: "Evaluation Metrics",
    difficulty: "easy",
    question: "What is the difference between Precision and Recall, and when would you favor one over the other?",
    answer: "<ul><li><strong>Precision:</strong> $\\frac{\\text{TP}}{\\text{TP} + \\text{FP}}$ — Out of all instances predicted as positive, how many were actually positive? Focuses on minimizing False Positives.</li><li><strong>Recall (Sensitivity):</strong> $\\frac{\\text{TP}}{\\text{TP} + \\text{FN}}$ — Out of all actual positive instances in the population, how many did the model identify? Focuses on minimizing False Negatives.</li></ul><strong>Tradeoffs:</strong><ul><li><strong>High Recall Priority:</strong> Medical cancer screening or fraud detection (missing a sick patient or fraudster is catastrophic).</li><li><strong>High Precision Priority:</strong> Spam filtering or YouTube video recommendation (sending legitimate client emails to spam ruins trust; irrelevant recommendations annoy users).</li></ul>",
    tip: "Mention the F-beta score: $F_\\beta = (1+\\beta^2)\\frac{P \\cdot R}{\\beta^2 P + R}$, where $\\beta=2$ weights recall higher and $\\beta=0.5$ weights precision higher."
  },
  {
    id: "iq5",
    num: 5,
    category: "Deep Learning",
    difficulty: "medium",
    question: "Why do we use ReLU instead of Sigmoid or Tanh in deep neural networks?",
    answer: "<ul><li><strong>Vanishing Gradient Mitigation:</strong> Sigmoid derivative $\\sigma'(z) \\le 0.25$ and Tanh $\\tanh'(z) \\le 1.0$. In networks with 10+ layers, multiplying these small fractions repeatedly during backpropagation shrinks gradients toward zero, halting early-layer learning. ReLU has constant derivative $\\frac{d}{dz}\\text{ReLU}(z) = 1$ for all $z > 0$.</li><li><strong>Computational Efficiency:</strong> Computing $\\max(0, z)$ requires a single comparison instruction on CPUs/GPUs, unlike costly transcendental exponentials $\\frac{1}{1 + e^{-z}}$.</li><li><strong>Empirical Sparsity:</strong> When $z \\le 0$, the activation is exactly 0, producing true sparse representations in hidden layers.</li></ul>",
    tip: "Address the Dying ReLU caveat where neurons permanently output 0 if initialized poorly or hit with large negative updates, and mention Leaky ReLU / GELU as modern remedies."
  },
  {
    id: "iq6",
    num: 6,
    category: "Deep Learning",
    difficulty: "hard",
    question: "What is Batch Normalization and how does it differ from Layer Normalization?",
    answer: "Both normalize activations using learnable scale $\\gamma$ and shift $\\beta$, but they compute mean $\\mu$ and variance $\\sigma^2$ across completely different dimensions:<ul><li><strong>Batch Normalization (BatchNorm):</strong> Normalizes across the <strong>Batch dimension $B$</strong> for each feature/channel independently. Effective in vision CNNs, but fails when batch sizes are small ($B < 8$) or variable-length sequences. Requires maintaining running stats for inference.</li><li><strong>Layer Normalization (LayerNorm):</strong> Normalizes across the <strong>Feature/Channel dimension $C$</strong> independently for each individual sample in the batch. It does NOT depend on other samples in the batch. This makes it standard for RNNs, Transformers, and LLMs where sequence lengths vary dynamically.</li></ul>",
    tip: "Highlight that LayerNorm operates at inference time identically to training time without needing running averages, making it ideal for distributed LLM training."
  },
  {
    id: "iq7",
    num: 7,
    category: "Optimization",
    difficulty: "medium",
    question: "How does the Adam optimizer work, and why was AdamW introduced?",
    answer: "Adam (Adaptive Moment Estimation) combines momentum and RMSprop:<ul><li><strong>1st Moment $m_t$:</strong> Exponential moving average of gradients $\\beta_1 m_{t-1} + (1-\\beta_1)g_t$ (direction smoothing).</li><li><strong>2nd Moment $v_t$:</strong> Exponential moving average of squared gradients $\\beta_2 v_{t-1} + (1-\\beta_2)g_t^2$ (per-parameter adaptive scaling).</li><li><strong>Bias Correction:</strong> Divides by $(1 - \\beta^t)$ to correct zero initialization bias in early steps.</li></ul><strong>Why AdamW?</strong> In classic Adam, adding an L2 regularization penalty $\\lambda \\theta$ directly to the gradient causes adaptive scaling $\\frac{1}{\\sqrt{v_t}}$ to shrink weights with large historical gradients LESS than weights with small gradients, distorting regularization. <strong>AdamW</strong> decouples weight decay directly into the update: $\\theta_{t+1} = \\theta_t - \\eta \\frac{\\hat{m}_t}{\\sqrt{\\hat{v}_t} + \\epsilon} - \\eta \\lambda \\theta_t$.",
    tip: "Citing Loshchilov & Hutter (2017) and explaining the decoupled weight decay formula shows strong technical depth."
  },
  {
    id: "iq8",
    num: 8,
    category: "NLP & Transformers",
    difficulty: "hard",
    question: "Explain the self-attention mechanism and why the $\\sqrt{d_k}$ scaling factor is necessary.",
    answer: "Self-attention maps input sequence vectors to Queries $Q$, Keys $K$, and Values $V$ via learned linear projections. It computes alignment scores between every token and all other tokens:<br><br>$$\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V$$<br><strong>Why scale by $\\sqrt{d_k}$?</strong> If components of $Q$ and $K$ are independent zero-mean unit-variance variables, their dot product $\\sum_{i=1}^{d_k} Q_i K_i$ has mean 0 and variance $d_k$. For large dimensions (e.g. $d_k = 64$ or $128$), the dot products grow very large in magnitude. Feeding large values into $\\text{softmax}$ pushes probabilities into saturation regions where gradients are exponentially tiny ($e^{-x}$), causing the vanishing gradient problem during backprop. Dividing by $\\sqrt{d_k}$ restores the variance to 1.0, preserving healthy gradients.",
    tip: "A standard question at Google/OpenAI. Mention that softmax saturation leads to one-hot distributions and negligible gradient updates."
  },
  {
    id: "iq9",
    num: 9,
    category: "Generative AI & LLMs",
    difficulty: "hard",
    question: "What is LoRA (Low-Rank Adaptation) and how does it save memory during fine-tuning?",
    answer: "Full fine-tuning updates all weights $W_0 \\in \\mathbb{R}^{d \\times k}$, requiring storing optimizer states (Adam requires 8 bytes per parameter for moments) for all billions of parameters.<br><br>LoRA hypothesizes that weight changes $\\Delta W$ have a low 'intrinsic rank'. It freezes the original pretrained weights $W_0$ and parameterizes $\\Delta W$ as the product of two low-rank matrices:<br><br>$$W = W_0 + \\Delta W = W_0 + \\frac{\\alpha}{r} B \\cdot A$$<br>where $A \\in \\mathbb{R}^{r \\times k}$ is initialized from a Gaussian and $B \\in \\mathbb{R}^{d \\times r}$ is initialized to zero, with rank $r \\ll \\min(d, k)$ (typically $r=8$ or $16$).<br><br><strong>Memory Benefits:</strong> Reduces trainable parameters by 99%+. Only gradients and optimizer states for $A$ and $B$ are kept in VRAM. At inference time, $BA$ can be merged directly into $W_0$, adding zero inference latency overhead.",
    tip: "Point out that LoRA allows running multi-tenant fine-tuned adapters on a single base model by swapping small adapter weights dynamically in memory."
  },
  {
    id: "iq10",
    num: 10,
    category: "Generative AI & LLMs",
    difficulty: "hard",
    question: "What is the difference between RLHF and DPO for LLM alignment?",
    answer: "<ul><li><strong>RLHF (Reinforcement Learning from Human Feedback):</strong> Requires 3 distinct models and stages: (1) SFT, (2) Training a separate Reward Model $r_\\psi(x, y)$ on human pairwise preferences, and (3) Optimizing the policy LLM with Proximal Policy Optimization (PPO) using a KL divergence penalty to avoid drifting too far from the reference model. It is notoriously unstable, GPU memory heavy, and sensitive to PPO hyperparameter tuning.</li><li><strong>DPO (Direct Preference Optimization):</strong> Analytically proves that the reward model can be expressed directly in closed-form as the log-ratio between the active policy and frozen reference policy. By substituting this into the Bradley-Terry preference objective, DPO skips reward model training and PPO loops entirely, optimizing the policy directly on preferred $(y_w)$ vs dispreferred $(y_l)$ text pairs using simple binary cross-entropy.</li></ul>",
    tip: "State that DPO achieves comparable or superior alignment benchmarks with dramatically lower GPU memory and training stability."
  },
  {
    id: "iq11",
    num: 11,
    category: "ML System Design",
    difficulty: "hard",
    question: "How do you design a real-time recommendation system at scale (e.g., YouTube / Instagram)?",
    answer: "Industrial recommendation systems split the problem into a multi-stage funnel:<ul><li><strong>1. Candidate Generation / Retrieval (Millions $\\rightarrow$ Hundreds):</strong> Uses fast, lightweight models (Two-Tower embeddings, matrix factorization, approximate nearest neighbors with HNSW / ScaNN / Milvus) to retrieve 500-1000 candidates within &lt;15ms.</li><li><strong>2. Scoring / Ranking (Hundreds $\\rightarrow$ Top 50):</strong> Employs a complex, feature-heavy model (Deep & Cross Networks, Transformer rankers) computing precise predicted CTR and watch-time with hundreds of user/item/context features.</li><li><strong>3. Re-ranking & Diversity Filtering (Top 50 $\\rightarrow$ Final 10):</strong> Applies business logic: deduplication, creator diversity, freshness boosts, exploration bandits (Thompson sampling), and safety/toxicity filters.</li></ul>",
    tip: "Always clarify latency SLAs (e.g., &lt;50ms end-to-end), cold-start strategies for new users/videos, and offline batch vs real-time stream feature stores."
  },
  {
    id: "iq12",
    num: 12,
    category: "MLOps & Production",
    difficulty: "medium",
    question: "What is Data Drift vs Concept Drift, and how do you monitor them in production?",
    answer: "<ul><li><strong>Data Drift (Covariate Shift):</strong> The input feature distribution $P(X)$ changes over time while the mapping $P(Y|X)$ remains constant. (Example: Users start uploading higher-resolution photos or customer demographic ages shift).</li><li><strong>Concept Drift:</strong> The true statistical relationship between inputs and targets $P(Y|X)$ changes over time. (Example: Purchasing behavior during COVID-19 lockdown changed overnight even for the same age groups).</li></ul><strong>Monitoring in Production:</strong><ul><li><strong>Statistical Distance:</strong> Kolmogorov-Smirnov (KS) test for numerical features, Chi-Square test for categoricals, and Population Stability Index (PSI &gt; 0.2 indicates significant drift).</li><li><strong>Embedding Drift:</strong> Monitoring centroid shifts or cosine similarity distribution of latent embeddings.</li><li><strong>Performance Tracking:</strong> Tracking rolling ground-truth accuracy/F1 if labels arrive quickly, or tracking prediction distribution shifts if labels are delayed.</li></ul>",
    tip: "Mention tools like Evidently AI, Great Expectations, and Prometheus alerts to show real production engineering awareness."
  }
];

if (typeof module !== 'undefined') {
  module.exports = { INTERVIEW_QUESTIONS };
}
