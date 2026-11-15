/**
 * AI/ML Formula Deck & Mathematical Cheatsheet Dataset
 * Grounded in CHEATSHEETS.md
 */

const FORMULA_DATA = [
  {
    id: "f1",
    category: "Linear Algebra",
    title: "Vector Dot Product & Cosine Angle",
    formula: "a \\cdot b = \\sum_{i=1}^n a_i b_i = \\|a\\| \\|b\\| \\cos\\theta",
    code: "dot_product = sum(a_i * b_i for a_i, b_i in zip(a, b))",
    explanation: "Fundamental projection operator in machine learning. Measures alignment between two vectors; zero when vectors are orthogonal (perpendicular).",
    repoRef: "CHEATSHEETS.md#1-linear-algebra"
  },
  {
    id: "f2",
    category: "Linear Algebra",
    title: "Singular Value Decomposition (SVD)",
    formula: "A = U \\Sigma V^T",
    code: "U, S, Vt = np.linalg.svd(A)",
    explanation: "Decomposes any real m x n matrix into orthogonal singular vectors U, V and singular values Sigma. Forms the mathematical backbone of PCA, pseudo-inverse, and low-rank LoRA matrix adaptation.",
    repoRef: "CHEATSHEETS.md#1-linear-algebra"
  },
  {
    id: "f3",
    category: "Probability & Statistics",
    title: "Bayes' Theorem",
    formula: "P(A|B) = \\frac{P(B|A) P(A)}{P(B)} = \\frac{P(B|A) P(A)}{\\sum_k P(B|A_k) P(A_k)}",
    code: "posterior = (likelihood * prior) / marginal_evidence",
    explanation: "Updates probability estimate of hypothesis A given observation evidence B. Core principle of Naive Bayes, Bayesian neural networks, and prompt belief updating.",
    repoRef: "CHEATSHEETS.md#2-probability--statistics"
  },
  {
    id: "f4",
    category: "Probability & Statistics",
    title: "Kullback-Leibler (KL) Divergence",
    formula: "D_{KL}(P \\parallel Q) = \\sum_{x} P(x) \\log\\left(\\frac{P(x)}{Q(x)}\\right)",
    code: "kl_div = sum(p * math.log(p / q) for p, q in zip(P, Q))",
    explanation: "Measures statistical relative entropy from distribution Q to reference distribution P. Asymmetric ($D_{KL}(P||Q) \\neq D_{KL}(Q||P)$). Essential in VAE loss and RLHF / PPO policy penalty.",
    repoRef: "CHEATSHEETS.md#2-probability--statistics"
  },
  {
    id: "f5",
    category: "Loss Functions",
    title: "Mean Squared Error (MSE)",
    formula: "\\text{MSE} = \\frac{1}{N} \\sum_{i=1}^N (y_i - \\hat{y}_i)^2 \\quad \\frac{\\partial \\text{MSE}}{\\partial \\hat{y}_i} = \\frac{2}{N}(\\hat{y}_i - y_i)",
    code: "mse = sum((yp - yt)**2 for yt, yp in zip(y_true, y_pred)) / len(y_true)",
    explanation: "Standard regression loss function penalizing large prediction errors quadratically. Convex with respect to linear model parameters.",
    repoRef: "CHEATSHEETS.md#4-common-loss-functions"
  },
  {
    id: "f6",
    category: "Loss Functions",
    title: "Binary Cross-Entropy (Log Loss)",
    formula: "\\mathcal{L} = -\\frac{1}{N}\\sum_{i=1}^N \\left[y_i \\log(\\hat{y}_i) + (1 - y_i)\\log(1 - \\hat{y}_i)\\right]",
    code: "bce = -sum(y*log(p) + (1-y)*log(1-p) for y, p in zip(y_true, y_pred)) / N",
    explanation: "Negative log-likelihood for Bernoulli binary classification. Heavily penalizes confident incorrect predictions (e.g. predicting 0.99 when true is 0).",
    repoRef: "CHEATSHEETS.md#4-common-loss-functions"
  },
  {
    id: "f7",
    category: "Loss Functions",
    title: "Categorical Cross-Entropy Loss",
    formula: "\\mathcal{L} = -\\sum_{i=1}^N \\sum_{c=1}^C y_{i,c} \\log(\\hat{y}_{i,c})",
    code: "cce = -sum(sum(yt_c * log(yp_c) for yt_c, yp_c in zip(yt, yp)) for yt, yp in zip(Y, P)) / N",
    explanation: "Multi-class classification loss paired with Softmax activation. Measures distance between true one-hot distribution and predicted categorical probability.",
    repoRef: "CHEATSHEETS.md#4-common-loss-functions"
  },
  {
    id: "f8",
    category: "Activation Functions",
    title: "Gaussian Error Linear Unit (GELU)",
    formula: "\\text{GELU}(x) = x \\cdot \\Phi(x) \\approx 0.5x\\left(1 + \\tanh\\left(\\sqrt{\\frac{2}{\\pi}}(x + 0.044715x^3)\\right)\\right)",
    code: "def gelu(x): return 0.5 * x * (1.0 + math.tanh(math.sqrt(2.0/math.pi) * (x + 0.044715 * x**3)))",
    explanation: "Smooth probabilistic non-linearity used in modern Transformers (BERT, GPT-2, GPT-3, ViT, LLaMA). Weights inputs by their percentile in normal distribution.",
    repoRef: "CHEATSHEETS.md#5-activation-functions--derivatives"
  },
  {
    id: "f9",
    category: "Optimizers",
    title: "Adam & AdamW Parameter Update Rules",
    formula: "m_t = \\beta_1 m_{t-1} + (1-\\beta_1)g_t, \\; v_t = \\beta_2 v_{t-1} + (1-\\beta_2)g_t^2, \\; \\theta_{t+1} = \\theta_t - \\eta\\frac{\\hat{m}_t}{\\sqrt{\\hat{v}_t} + \\epsilon} - \\eta \\lambda \\theta_t",
    code: "theta = theta - lr * (m_hat / (sqrt(v_hat) + eps)) - lr * weight_decay * theta",
    explanation: "Combines momentum (direction smoothing) and RMSprop (adaptive per-parameter learning rate scaling) with decoupled weight decay (AdamW).",
    repoRef: "CHEATSHEETS.md#6-optimizer-update-rules"
  },
  {
    id: "f10",
    category: "Transformers & Attention",
    title: "Scaled Dot-Product Attention",
    formula: "\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V",
    code: "attention = softmax((Q @ K.T) / math.sqrt(d_k)) @ V",
    explanation: "The core foundational equation of the Transformer architecture. Queries match Keys to calculate soft probability attention weights over Values.",
    repoRef: "CHEATSHEETS.md#7-transformer--attention-formulas"
  },
  {
    id: "f11",
    category: "Transformers & Attention",
    title: "Multi-Head Attention",
    formula: "\\text{MultiHead}(Q, K, V) = \\text{Concat}(\\text{head}_1, \\dots, \\text{head}_h)W^O \\quad \\text{head}_i = \\text{Attention}(Q W_i^Q, K W_i^K, V W_i^V)",
    code: "multi_head = torch.cat([head_i for head_i in heads], dim=-1) @ W_O",
    explanation: "Projects Q, K, V into h distinct representation subspaces simultaneously, enabling models to attend to syntax, semantics, and position concurrently.",
    repoRef: "CHEATSHEETS.md#7-transformer--attention-formulas"
  },
  {
    id: "f12",
    category: "Evaluation Metrics",
    title: "F1-Score (Harmonic Mean)",
    formula: "F_1 = 2 \\cdot \\frac{\\text{Precision} \\cdot \\text{Recall}}{\\text{Precision} + \\text{Recall}} = \\frac{2\\text{TP}}{2\\text{TP} + \\text{FP} + \\text{FN}}",
    code: "f1 = 2 * (precision * recall) / (precision + recall) if (p + r) > 0 else 0",
    explanation: "Harmonic mean of precision and recall. Penalizes models severely if either precision or recall is close to zero, making it vital for imbalanced datasets.",
    repoRef: "CHEATSHEETS.md#8-common-evaluation-metrics"
  }
];

if (typeof module !== 'undefined') {
  module.exports = { FORMULA_DATA };
}
