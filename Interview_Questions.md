# 100 ML/AI Interview Questions — With Brief Answers

> Grouped by topic, roughly fundamentals → advanced within each section. Answers are intentionally brief — enough to jog your memory or answer verbally, not full essays. Use alongside [`Glossary.md`](./Glossary.md) (planned) for term lookups.

---

## 1. ML Fundamentals & Math
1. **What is the bias-variance tradeoff?** High bias underfits (model too simple), high variance overfits (model too sensitive to training data). Total error = bias² + variance + irreducible noise; the goal is minimizing the sum, not either alone.
2. **What is overfitting and how do you prevent it?** The model memorizes training data instead of generalizing. Prevent with more data, regularization (L1/L2), dropout, early stopping, or simpler models.
3. **What is regularization?** A penalty added to the loss function to discourage overly complex models. L1 (Lasso) encourages sparsity; L2 (Ridge) shrinks weights smoothly.
4. **Explain gradient descent.** An iterative optimization algorithm that updates parameters in the direction of the negative gradient of the loss function to minimize it.
5. **What's the difference between batch, stochastic, and mini-batch gradient descent?** Batch uses the whole dataset per update (stable, slow); stochastic uses one sample (fast, noisy); mini-batch uses a small subset (a practical middle ground, the standard in deep learning).
6. **What is a convex function and why does it matter for optimization?** A function where any line segment between two points on its graph lies above the graph. Convex loss functions guarantee a global minimum, so gradient descent won't get stuck in local minima.
7. **What is the curse of dimensionality?** As feature dimensions increase, data becomes sparse in the space, distances become less meaningful, and models need exponentially more data to generalize well.
8. **What's the difference between parametric and non-parametric models?** Parametric models (linear regression, logistic regression) assume a fixed functional form with a fixed number of parameters. Non-parametric models (KNN, decision trees) grow in complexity with the data.
9. **What is Occam's Razor in the context of ML?** Prefer the simplest model that adequately explains the data — simpler models generalize better and are easier to interpret and maintain.
10. **What is the difference between generative and discriminative models?** Generative models learn the joint distribution P(X, Y) and can generate new samples (e.g., Naive Bayes, GANs). Discriminative models learn P(Y|X) directly to distinguish classes (e.g., logistic regression, SVMs).

## 2. Statistics & Probability
11. **What is the difference between correlation and causation?** Correlation means two variables move together; causation means one directly influences the other. Correlation alone never proves causation — confounders can explain the relationship.
12. **Explain the Central Limit Theorem.** The sampling distribution of the mean of a sufficiently large number of independent random variables approaches a normal distribution, regardless of the underlying distribution's shape.
13. **What is a p-value?** The probability of observing results at least as extreme as the current data, assuming the null hypothesis is true. A small p-value suggests the null hypothesis is unlikely.
14. **What is the difference between Type I and Type II error?** Type I (false positive) rejects a true null hypothesis. Type II (false negative) fails to reject a false null hypothesis.
15. **What is Bayes' Theorem and why is it useful in ML?** P(A|B) = P(B|A)P(A)/P(B). It lets you update beliefs (posterior) given new evidence, and underlies Naive Bayes and Bayesian inference methods.
16. **What is the difference between covariance and correlation?** Covariance measures the direction of a linear relationship but is unscaled. Correlation normalizes covariance to a [-1, 1] range, making it comparable across variable pairs.
17. **What is a confidence interval?** A range of values that is likely to contain a population parameter with a given confidence level (e.g., 95%), based on sample data.
18. **What is maximum likelihood estimation (MLE)?** A method for estimating model parameters by finding the values that maximize the likelihood of the observed data under the assumed model.

## 3. Classic ML Algorithms
19. **How does linear regression work, and what are its assumptions?** It fits a line minimizing squared error between predictions and targets. Assumes linearity, independence of errors, homoscedasticity, and normally distributed residuals.
20. **How does logistic regression differ from linear regression?** Logistic regression models the log-odds of a binary outcome using a sigmoid function, producing probabilities, rather than predicting a continuous value directly.
21. **How does a decision tree decide where to split?** It picks the feature/threshold that maximizes information gain (or minimizes Gini impurity/entropy) at each node.
22. **What is the difference between bagging and boosting?** Bagging trains models in parallel on bootstrapped samples and averages results to reduce variance (e.g., Random Forest). Boosting trains models sequentially, each correcting the previous one's errors, to reduce bias (e.g., XGBoost).
23. **Explain how a Random Forest works.** It builds many decision trees on bootstrapped samples with random feature subsets at each split, then averages (regression) or votes (classification) across trees.
24. **What is the kernel trick in SVMs?** It implicitly maps data into a higher-dimensional space using a kernel function (e.g., RBF, polynomial) without explicitly computing the transformation, enabling non-linear decision boundaries.
25. **How does K-means clustering work?** It iteratively assigns points to the nearest of K centroids, then recomputes centroids as the mean of assigned points, until convergence.
26. **What is the difference between K-means and hierarchical clustering?** K-means requires specifying K upfront and partitions data flatly. Hierarchical clustering builds a tree (dendrogram) of nested clusters without needing K in advance.
27. **What is PCA and what problem does it solve?** Principal Component Analysis reduces dimensionality by projecting data onto the directions (principal components) that capture the most variance, useful for visualization and reducing noise/redundancy.
28. **Why does Naive Bayes work well despite its independence assumption?** Even though features are rarely truly independent, the model only needs to rank classes correctly, and errors from correlated features often cancel out in practice.

## 4. Model Evaluation & Metrics
29. **What's the difference between precision and recall?** Precision = TP/(TP+FP), how many predicted positives were correct. Recall = TP/(TP+FN), how many actual positives were found.
30. **What is F1 score and when would you use it over accuracy?** The harmonic mean of precision and recall. Use it over accuracy when classes are imbalanced and both false positives and false negatives matter.
31. **What is a ROC curve and AUC?** ROC plots true positive rate vs. false positive rate at various thresholds. AUC (area under the curve) summarizes overall discriminative ability, independent of a specific threshold.
32. **How do you handle imbalanced classes?** Resampling (oversample minority/undersample majority), synthetic data (SMOTE), class-weighted loss functions, or choosing metrics like F1/AUC-PR over accuracy.
33. **What is cross-validation and why use it?** Splitting data into k folds, training on k-1 and validating on the remainder, rotating through all folds. It gives a more robust estimate of generalization than a single train/test split.
34. **What is data leakage and how do you prevent it?** When information from outside the training set (often from the future or the target) leaks into features, inflating performance. Prevent by strict train/test separation, careful feature engineering, and time-aware splits for time series.
35. **What is the difference between validation set and test set?** The validation set is used during development to tune hyperparameters and select models. The test set is held out entirely until the end, to estimate real-world generalization.
36. **How do you evaluate a regression model?** Common metrics: MAE (average absolute error), MSE/RMSE (penalizes large errors more), and R² (proportion of variance explained).

## 5. Deep Learning Fundamentals
37. **Explain backpropagation.** It computes gradients of the loss with respect to each weight by applying the chain rule backward through the network, enabling gradient-based weight updates.
38. **What is the vanishing gradient problem and how is it addressed?** Gradients shrink exponentially through many layers during backprop, stalling learning in early layers. Addressed with ReLU activations, residual connections, batch normalization, and careful initialization.
39. **What is the exploding gradient problem?** The opposite of vanishing — gradients grow uncontrollably, destabilizing training. Addressed with gradient clipping and careful initialization.
40. **Why use ReLU instead of sigmoid/tanh?** ReLU avoids saturating gradients for positive inputs, is computationally cheap, and empirically trains faster and deeper networks more reliably.
41. **What is batch normalization and why does it help?** It normalizes layer inputs across a mini-batch, stabilizing and speeding up training, and providing a mild regularization effect.
42. **What is dropout and how does it prevent overfitting?** Randomly zeroing a fraction of neurons during training forces the network to not rely on any single neuron, acting like an implicit ensemble.
43. **What's the difference between a CNN and a fully connected network for images?** CNNs use shared, local filters (convolutions) that exploit spatial structure and translation invariance, using far fewer parameters than a fully connected layer over raw pixels.
44. **Why are RNNs prone to vanishing gradients over long sequences?** Repeated multiplication of gradients through many time steps causes them to shrink (or explode) exponentially, making it hard to learn long-range dependencies.
45. **How do LSTMs address the vanishing gradient problem?** Gating mechanisms (forget, input, output gates) and a cell state that allows gradients to flow largely unchanged across time steps, preserving long-range signal.
46. **What is the difference between an epoch, a batch, and an iteration?** An epoch is one full pass over the training data. A batch is a subset of data processed together. An iteration is one weight update, corresponding to one batch.

## 6. Optimization & Training
47. **How does Adam differ from plain SGD?** Adam maintains adaptive per-parameter learning rates using running estimates of the first and second moments of gradients, generally converging faster than plain SGD with less tuning.
48. **Why use learning rate schedules or warmup?** A learning rate that's too high early can destabilize training on randomly initialized weights; warmup gradually ramps it up, and decay schedules later help fine-grained convergence.
49. **What is weight decay and how does it differ from L2 regularization in Adam?** Weight decay directly shrinks weights each step. In naive Adam, L2 regularization interacts poorly with adaptive learning rates; AdamW decouples weight decay from the gradient update to fix this.
50. **What is gradient clipping and when is it used?** Capping the norm or value of gradients before the update step, commonly used in RNN/Transformer training to prevent exploding gradients.
51. **What's the difference between early stopping and regularization?** Early stopping halts training when validation performance stops improving, acting as an implicit regularizer by limiting how long the model can overfit; explicit regularization (L1/L2/dropout) constrains the model directly.
52. **Why do we shuffle training data each epoch?** To prevent the model from learning spurious patterns based on data order and to ensure each mini-batch is a representative, independent sample.

## 7. NLP & LLMs
53. **What is tokenization and why do LLMs use subword tokenization?** Splitting text into units the model processes. Subword methods (BPE, WordPiece) balance vocabulary size and the ability to represent rare/unseen words by breaking them into common subunits.
54. **Explain the attention mechanism in one sentence.** It computes a weighted sum of value vectors, where weights come from the similarity (via dot product) between a query and each key, letting the model focus on relevant parts of the input.
55. **Why does the Transformer use multi-head attention instead of a single attention head?** Multiple heads let the model attend to different types of relationships (syntax, position, semantics) in parallel subspaces, which a single head can't capture as richly.
56. **What is positional encoding and why is it needed?** Since self-attention has no inherent notion of order, positional encodings inject sequence-position information into token embeddings.
57. **What's the difference between BERT and GPT architecturally?** BERT is an encoder-only, bidirectional model trained with masked language modeling — good for understanding tasks. GPT is a decoder-only, autoregressive model trained to predict the next token — good for generation.
58. **What is the difference between pretraining and fine-tuning?** Pretraining trains a model on a large, general corpus to learn broad language representations. Fine-tuning further trains that model on a smaller, task-specific dataset to specialize it.
59. **What is LoRA and why is it useful?** Low-Rank Adaptation freezes the original model weights and injects small trainable low-rank matrices, drastically reducing the number of trainable parameters needed to fine-tune large models.
60. **What is RLHF and why is it used for LLMs?** Reinforcement Learning from Human Feedback trains a reward model on human preference comparisons, then fine-tunes the LLM against that reward to better align outputs with human intent.
61. **What is the difference between RLHF and DPO?** RLHF trains a separate reward model and uses RL (e.g., PPO) to optimize against it. DPO (Direct Preference Optimization) skips the reward model and RL loop, directly optimizing the policy on preference pairs with a simpler loss.
62. **What is retrieval-augmented generation (RAG) and why use it?** It retrieves relevant external documents at inference time and feeds them into the model's context, grounding responses in up-to-date or domain-specific information without retraining the model.
63. **What causes hallucination in LLMs and how can it be mitigated?** Models generate fluent but factually incorrect text because they predict plausible tokens, not verified facts. Mitigations include RAG, fine-tuning on verified data, and prompting the model to cite sources or express uncertainty.
64. **What is KV caching and why does it matter for LLM inference speed?** It stores previously computed key/value tensors from attention so each new token generation step doesn't recompute attention over the entire prior sequence, greatly speeding up autoregressive decoding.

## 8. Computer Vision
65. **What does a convolutional filter actually learn?** Early layers typically learn edges, colors, and textures; deeper layers combine these into increasingly abstract, task-relevant features (shapes, object parts).
66. **What is the purpose of pooling layers in a CNN?** They downsample feature maps (e.g., max pooling), reducing spatial dimensions and computation while providing some translation invariance.
67. **What is transfer learning and why is it common in computer vision?** Reusing a model pretrained on a large dataset (e.g., ImageNet) as a starting point for a new, often smaller, task — since low-level visual features generalize well across tasks.
68. **What's the difference between object detection and image segmentation?** Detection localizes objects with bounding boxes and class labels. Segmentation assigns a class label to every pixel (semantic) or to every pixel of every distinct object instance (instance segmentation).
69. **What is data augmentation and why is it used in vision tasks?** Applying random transformations (flips, crops, color jitter) to training images to artificially expand the dataset and improve generalization.
70. **How does a Vision Transformer (ViT) process an image differently than a CNN?** It splits the image into fixed-size patches, linearly embeds them as tokens, and processes them with standard self-attention, rather than using convolutional filters.

## 9. Reinforcement Learning
71. **What are the core components of an RL problem?** Agent, environment, state, action, reward, and policy — the agent takes actions based on a policy to maximize cumulative reward from the environment.
72. **What is the exploration-exploitation tradeoff?** The agent must balance trying new actions to discover better strategies (exploration) against choosing the best-known action to maximize reward (exploitation).
73. **What is the difference between value-based and policy-based RL methods?** Value-based methods (e.g., Q-learning, DQN) learn a value function and derive a policy from it. Policy-based methods (e.g., REINFORCE, PPO) directly parameterize and optimize the policy.
74. **What is the Bellman equation?** It expresses the value of a state as the immediate reward plus the discounted value of the next state, forming the recursive basis for most RL algorithms.
75. **What is the difference between on-policy and off-policy learning?** On-policy methods (e.g., PPO, SARSA) learn from data generated by the current policy. Off-policy methods (e.g., Q-learning, DQN) can learn from data generated by a different (or past) policy.
76. **Why is PPO popular for training LLMs with RLHF?** It constrains policy updates to stay close to the previous policy (via a clipped objective), giving stable training without the complexity of strict trust-region methods like TRPO.

## 10. ML System Design & MLOps
77. **How would you design a recommendation system at scale?** Typically a two-stage system: fast candidate generation (e.g., collaborative filtering or embeddings + approximate nearest neighbor search) to narrow millions of items to hundreds, then a more expensive ranking model to order the final candidates.
78. **How do you detect and handle model drift in production?** Monitor input feature distributions and prediction/performance metrics over time against a baseline; trigger alerts or retraining pipelines when drift exceeds a threshold.
79. **What is a feature store and why is it useful?** A centralized system for storing, versioning, and serving features consistently between training and real-time inference, avoiding training/serving skew.
80. **How would you design an A/B test for a new ML model?** Randomly split traffic between the current (control) and new (treatment) model, define a clear success metric in advance, ensure sufficient sample size/duration for statistical power, and monitor for guardrail metric regressions.
81. **What's the difference between online and batch inference?** Online (real-time) inference serves predictions on demand with low latency requirements. Batch inference processes large volumes of data on a schedule, prioritizing throughput over latency.
82. **How do you version and reproduce ML experiments?** Version code (git), data (DVC or similar), and track hyperparameters/metrics/artifacts with an experiment tracker (MLflow, W&B) so any run can be reproduced.
83. **What is model quantization and why use it?** Reducing the numerical precision of model weights/activations (e.g., FP32 → INT8) to shrink model size and speed up inference, usually with a small accuracy tradeoff.
84. **What is model distillation?** Training a smaller "student" model to mimic a larger "teacher" model's outputs (often its soft probabilities), compressing knowledge into a cheaper model for deployment.
85. **How would you design a system to serve an LLM at low latency and high throughput?** Use an optimized inference server (e.g., vLLM) with continuous batching and KV caching, quantize the model where acceptable, and consider speculative decoding or smaller distilled models for latency-sensitive paths.
86. **How do you monitor a deployed ML model's health?** Track prediction distribution drift, input data quality, latency/throughput, and downstream business metrics — not just offline accuracy, which can't be measured live without labels.

## 11. Coding, DSA & Practical
87. **Implement a function to compute the softmax of a vector, handling numerical stability.** Subtract the max value from all elements before exponentiating to prevent overflow, then normalize: `exp(x - max(x)) / sum(exp(x - max(x)))`.
88. **How would you implement K-nearest neighbors from scratch?** Compute the distance (e.g., Euclidean) from the query point to every training point, sort by distance, take the K closest, and return the majority class (or average, for regression).
89. **Write pseudocode for mini-batch gradient descent.** Loop over epochs; within each epoch, shuffle data and loop over mini-batches; for each batch, compute the forward pass, loss, gradients via backprop, and update weights.
90. **How would you efficiently find duplicate rows in a very large dataset that doesn't fit in memory?** Process in chunks, hash each row (or a subset of key columns), and use an external sort or a disk-backed hash set to detect collisions across chunks.
91. **What data structure would you use for fast approximate nearest neighbor search over millions of embeddings?** An index like HNSW (hierarchical navigable small world graphs) or IVF (inverted file index with product quantization), as used in FAISS — exact search doesn't scale to that volume.
92. **How would you shuffle a large dataset that doesn't fit in memory?** Use reservoir sampling or shuffle in chunks with a buffer, or shuffle indices/pointers on disk and stream data in shuffled order rather than loading everything into memory at once.
93. **Write the formula for and explain cross-entropy loss.** `-Σ y_i log(ŷ_i)` — it penalizes confident wrong predictions heavily and rewards confident correct ones, making it well-suited to classification with probabilistic outputs.
94. **How would you implement early stopping in a training loop?** Track validation loss each epoch; if it hasn't improved for a set number of epochs (patience), stop training and restore the best-performing checkpoint.

## 12. Behavioral & Take-Home
95. **Tell me about a time an ML model you built didn't perform as expected in production. What did you do?** Focus on the diagnostic process — checking for data drift, train/serve skew, or a broken assumption — and the concrete fix, not just the outcome.
96. **How do you decide when a model is "good enough" to ship?** Tie it to a business/product metric and a baseline (existing system or simple heuristic), not just offline accuracy — and factor in latency, cost, and failure mode severity.
97. **Describe a project where you had to balance model accuracy against interpretability or latency constraints.** Emphasize the tradeoff reasoning and stakeholder communication, not just the technical choice.
98. **How do you stay current with the fast pace of AI/ML research?** Mention concrete habits — following specific papers/newsletters, reproducing key results, or regularly rebuilding smaller versions of new techniques.
99. **How would you explain a complex model's prediction to a non-technical stakeholder?** Focus on translating feature importance or example-based reasoning (e.g., SHAP values, similar past cases) into plain business language, not the underlying math.
100. **Walk me through how you'd approach a take-home ML task with an ambiguous problem statement.** Emphasize clarifying the objective/metric upfront, doing quick exploratory data analysis before modeling, starting with a simple baseline, and documenting assumptions clearly in the writeup.

---

### Suggested path
1. **Week 1:** §1–4 — fundamentals, stats, classic algorithms, and evaluation metrics (these underlie almost every other answer)
2. **Week 2:** §5–6 — deep learning and optimization internals
3. **Week 3:** §7–9 — pick the specialty most relevant to your target role (NLP/LLMs, CV, or RL) and go deep
4. **Week 4:** §10–11 — system design and coding rounds, typically the highest-weighted rounds for ML engineering roles
5. **Ongoing:** §12 — prepare 2–3 concrete personal examples for each behavioral question well before interviews, rather than improvising
