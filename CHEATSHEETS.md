# Cheatsheets — Linear Algebra, Probability, Loss Functions & Optimizers

> Condensed formula references — for jogging your memory, not for learning these from scratch. Pair with [`Books.md`](./Books.md) §1 (Math & Stats Foundations) or [`Courses.md`](./Courses.md) §1 if you need the full explanations behind any of these.

---

## 1. Linear Algebra

**Vector dot product**
$$a \cdot b = \sum_i a_i b_i = |a||b|\cos\theta$$

**Matrix multiplication** (A is m×n, B is n×p → result is m×p)
$$(AB)_{ij} = \sum_k A_{ik}B_{kj}$$

**Transpose properties**
$$(AB)^T = B^T A^T \qquad (A^T)^T = A$$

**Identity & inverse**
$$AA^{-1} = A^{-1}A = I \qquad (AB)^{-1} = B^{-1}A^{-1}$$

**Norms**
- L1 norm: $\|x\|_1 = \sum_i |x_i|$
- L2 (Euclidean) norm: $\|x\|_2 = \sqrt{\sum_i x_i^2}$
- L∞ norm: $\|x\|_\infty = \max_i |x_i|$

**Cosine similarity**
$$\text{sim}(a, b) = \frac{a \cdot b}{\|a\|\|b\|}$$

**Eigenvalue equation**
$$Av = \lambda v$$
($v$ is an eigenvector, $\lambda$ its eigenvalue — the matrix only scales, never rotates, its own eigenvectors)

**Singular Value Decomposition (SVD)**
$$A = U\Sigma V^T$$
(underlies PCA, low-rank approximation, and LoRA's low-rank update matrices)

**Trace and determinant**
$$\text{tr}(A) = \sum_i A_{ii} \qquad \det(A) \text{ measures volume scaling; } \det(A)=0 \Rightarrow A \text{ is singular (non-invertible)}$$

---

## 2. Probability & Statistics

**Bayes' Theorem**
$$P(A|B) = \frac{P(B|A)P(A)}{P(B)}$$

**Expected value & variance**
$$E[X] = \sum_x x \cdot P(x) \qquad \text{Var}(X) = E[(X - E[X])^2] = E[X^2] - E[X]^2$$

**Gaussian (normal) distribution**
$$f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$

**Bernoulli distribution** (single binary trial, probability $p$ of success)
$$P(X=1) = p, \quad P(X=0) = 1-p$$

**Binomial distribution** (n independent Bernoulli trials)
$$P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$$

**Softmax** (converts a vector of scores into a probability distribution)
$$\text{softmax}(z_i) = \frac{e^{z_i}}{\sum_j e^{z_j}}$$

**KL Divergence** (how one probability distribution diverges from a reference distribution)
$$D_{KL}(P \| Q) = \sum_x P(x) \log\frac{P(x)}{Q(x)}$$

**Entropy** (average uncertainty/information content of a distribution)
$$H(P) = -\sum_x P(x)\log P(x)$$

**Central Limit Theorem (informal)**
The sampling distribution of the mean of enough i.i.d. random variables approaches a normal distribution, regardless of the variables' original distribution.

---

## 3. Calculus Essentials

**Chain rule** (the backbone of backpropagation)
$$\frac{d}{dx}f(g(x)) = f'(g(x)) \cdot g'(x)$$

**Partial derivative / gradient**
$$\nabla f = \left(\frac{\partial f}{\partial x_1}, \frac{\partial f}{\partial x_2}, \dots, \frac{\partial f}{\partial x_n}\right)$$

**Gradient descent update (general form)**
$$\theta \leftarrow \theta - \eta \nabla_\theta J(\theta)$$
($\eta$ = learning rate, $J$ = loss function, $\theta$ = parameters)

---

## 4. Common Loss Functions

**Mean Squared Error (MSE)** — regression
$$\text{MSE} = \frac{1}{n}\sum_{i=1}^n (y_i - \hat{y}_i)^2 \qquad \frac{\partial \text{MSE}}{\partial \hat{y}_i} = \frac{2}{n}(\hat{y}_i - y_i)$$

**Mean Absolute Error (MAE)** — regression, more robust to outliers than MSE
$$\text{MAE} = \frac{1}{n}\sum_{i=1}^n |y_i - \hat{y}_i|$$

**Binary Cross-Entropy** — binary classification
$$\mathcal{L} = -\frac{1}{n}\sum_{i=1}^n \left[y_i \log(\hat{y}_i) + (1-y_i)\log(1-\hat{y}_i)\right]$$

**Categorical Cross-Entropy** — multi-class classification
$$\mathcal{L} = -\sum_{i=1}^n \sum_{c=1}^{C} y_{i,c} \log(\hat{y}_{i,c})$$

**Hinge Loss** — used in SVMs
$$\mathcal{L} = \max(0, 1 - y \cdot \hat{y})$$

**KL Divergence Loss** — used when matching a predicted distribution to a target distribution (e.g., knowledge distillation)
$$\mathcal{L} = D_{KL}(P_{\text{target}} \| P_{\text{predicted}})$$

**Contrastive Loss (simplified, e.g., SimCLR-style)** — pulls similar pairs together, pushes dissimilar pairs apart
$$\mathcal{L} = -\log \frac{\exp(\text{sim}(z_i, z_j)/\tau)}{\sum_{k \neq i} \exp(\text{sim}(z_i, z_k)/\tau)}$$
($\tau$ = temperature hyperparameter)

---

## 5. Activation Functions & Derivatives

| Function | Formula | Derivative |
|---|---|---|
| Sigmoid | $\sigma(x) = \frac{1}{1+e^{-x}}$ | $\sigma(x)(1-\sigma(x))$ |
| Tanh | $\tanh(x) = \frac{e^x - e^{-x}}{e^x + e^{-x}}$ | $1 - \tanh^2(x)$ |
| ReLU | $\max(0, x)$ | $1$ if $x>0$, else $0$ |
| Leaky ReLU | $x$ if $x>0$, else $\alpha x$ | $1$ if $x>0$, else $\alpha$ |
| GELU (used in Transformers) | $x \cdot \Phi(x)$ ($\Phi$ = Gaussian CDF) | smooth approximation, no simple closed form |
| Softmax | see §2 above | see §7 (Jacobian, used with cross-entropy) |

---

## 6. Optimizer Update Rules

**SGD (plain)**
$$\theta \leftarrow \theta - \eta \nabla_\theta J(\theta)$$

**SGD with Momentum**
$$v \leftarrow \beta v + (1-\beta)\nabla_\theta J(\theta) \qquad \theta \leftarrow \theta - \eta v$$
($\beta$ typically ~0.9 — accumulates a moving average of past gradients to smooth out updates)

**RMSProp**
$$s \leftarrow \beta s + (1-\beta)(\nabla_\theta J)^2 \qquad \theta \leftarrow \theta - \frac{\eta}{\sqrt{s}+\epsilon}\nabla_\theta J$$
(adapts the learning rate per-parameter based on recent squared gradient magnitude)

**Adam** (combines momentum + RMSProp)
$$m \leftarrow \beta_1 m + (1-\beta_1)\nabla_\theta J \qquad v \leftarrow \beta_2 v + (1-\beta_2)(\nabla_\theta J)^2$$
$$\hat{m} = \frac{m}{1-\beta_1^t} \qquad \hat{v} = \frac{v}{1-\beta_2^t} \qquad \theta \leftarrow \theta - \eta \frac{\hat{m}}{\sqrt{\hat{v}}+\epsilon}$$
(defaults: $\beta_1$=0.9, $\beta_2$=0.999, $\epsilon$=1e-8; the $\hat{m}$/$\hat{v}$ terms correct for bias in early training steps)

**AdamW** (Adam with decoupled weight decay)
$$\theta \leftarrow \theta - \eta \left(\frac{\hat{m}}{\sqrt{\hat{v}}+\epsilon} + \lambda\theta\right)$$
(applies weight decay directly to the parameters rather than folding it into the gradient, which fixes a subtle interaction problem in plain Adam + L2 regularization)

---

## 7. Transformer & Attention Formulas

**Scaled dot-product attention**
$$\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$
($Q$=queries, $K$=keys, $V$=values, $d_k$=key dimension — the $\sqrt{d_k}$ scaling prevents dot products from growing too large and saturating softmax)

**Multi-head attention**
$$\text{MultiHead}(Q,K,V) = \text{Concat}(\text{head}_1, \dots, \text{head}_h)W^O$$
$$\text{head}_i = \text{Attention}(QW_i^Q, KW_i^K, VW_i^V)$$

**Positional encoding (sinusoidal, original Transformer)**
$$PE_{(pos, 2i)} = \sin\left(\frac{pos}{10000^{2i/d}}\right) \qquad PE_{(pos, 2i+1)} = \cos\left(\frac{pos}{10000^{2i/d}}\right)$$

**Layer normalization**
$$\text{LayerNorm}(x) = \gamma \cdot \frac{x - \mu}{\sqrt{\sigma^2 + \epsilon}} + \beta$$
(normalizes across the feature dimension for each individual example, unlike batch norm which normalizes across the batch)

---

## 8. Common Evaluation Metrics

**Precision, Recall, F1**
$$\text{Precision} = \frac{TP}{TP+FP} \qquad \text{Recall} = \frac{TP}{TP+FN} \qquad F1 = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}$$

**Accuracy**
$$\text{Accuracy} = \frac{TP+TN}{TP+TN+FP+FN}$$

**R² (coefficient of determination)** — regression
$$R^2 = 1 - \frac{\sum_i (y_i - \hat{y}_i)^2}{\sum_i (y_i - \bar{y})^2}$$

**Perplexity** — language models (lower is better; effectively "how surprised" the model is by the test data)
$$\text{Perplexity} = \exp\left(-\frac{1}{N}\sum_{i=1}^N \log P(w_i)\right)$$

**BLEU (simplified intuition)** — machine translation/generation quality
Measures n-gram overlap between generated and reference text, with a penalty for outputs that are too short.

---

## Notes

- Notation follows common ML conventions: $\theta$ for parameters, $\eta$ for learning rate, $\mathcal{L}$ or $J$ for loss, $\nabla$ for gradient.
- If a rendered equation looks broken, your Markdown viewer may not support LaTeX-style math — GitHub's native renderer supports it, but not every editor does.
- This is a lookup sheet, not a derivation — for full derivations (e.g., *why* Adam's bias correction terms take that exact form), see [`Books.md`](./Books.md) §1 or §10, or the original papers in [`ResearchPaper.md`](./ResearchPaper.md) §10.
