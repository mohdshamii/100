# 100 AI/ML Terms — Plain-Language Glossary

> Grouped by topic, roughly basic → advanced. Meant as a quick lookup while reading [`ResearchPaper.md`](./ResearchPaper.md), [`Books.md`](./Books.md), or working through [`Projects.md`](./Projects.md) — not a substitute for the full explanations in those materials.

---

## 1. Basic ML Concepts
1. **Model** — A function (with learned parameters) that maps inputs to predictions.
2. **Training** — The process of adjusting a model's parameters using data so its predictions improve.
3. **Feature** — An individual measurable input variable used to make a prediction (e.g., a house's square footage).
4. **Label / Target** — The correct answer a model is trying to predict during supervised training.
5. **Supervised learning** — Learning from labeled examples (input-output pairs).
6. **Unsupervised learning** — Finding patterns or structure in data that has no labels.
7. **Overfitting** — When a model learns the training data too specifically, including its noise, and performs worse on new data.
8. **Underfitting** — When a model is too simple to capture the underlying pattern, performing poorly even on training data.
9. **Generalization** — A model's ability to perform well on new, unseen data, not just the data it was trained on.
10. **Inference** — Using a trained model to make a prediction on new input.

## 2. Math & Stats Terms
11. **Gradient** — The vector of partial derivatives showing the direction of steepest increase of a function; used to know which way to adjust parameters.
12. **Loss function** — A function that measures how wrong a model's predictions are; training tries to minimize it.
13. **Derivative** — A measure of how much a function's output changes as its input changes slightly.
14. **Probability distribution** — A description of how likely each possible outcome of a random variable is.
15. **Variance** — A measure of how spread out a set of values is from their average.
16. **Bias (statistical)** — A systematic error that causes predictions to consistently miss the true value in a particular direction.
17. **Matrix multiplication** — An operation combining two matrices, central to how neural network layers transform data.
18. **Vector embedding** — A list of numbers representing an object (word, image, etc.) in a way that captures its meaning or features, so similar objects end up close together numerically.
19. **Cosine similarity** — A measure of how similar two vectors are, based on the angle between them rather than their magnitude.
20. **Dot product** — A single number computed by multiplying corresponding elements of two vectors and summing the results; used in similarity and attention calculations.

## 3. Classic ML Terms
21. **Linear regression** — A model that predicts a continuous value as a weighted sum of input features.
22. **Logistic regression** — A model that predicts the probability of a binary outcome using a sigmoid function.
23. **Decision tree** — A model that makes predictions by following a series of yes/no questions about the input features.
24. **Random forest** — A collection of decision trees trained on different random subsets of data, combined for a more robust prediction.
25. **Gradient boosting** — A technique that builds models sequentially, each one correcting the errors of the ones before it.
26. **K-Nearest Neighbors (KNN)** — A model that predicts based on the majority label (or average value) of the closest data points to a query.
27. **Support Vector Machine (SVM)** — A model that finds the boundary that best separates classes with the widest possible margin.
28. **Clustering** — Grouping similar data points together without using labels.
29. **Dimensionality reduction** — Reducing the number of input variables while preserving as much important information as possible.
30. **Feature engineering** — The process of creating or transforming input variables to help a model learn better.

## 4. Deep Learning Terms
31. **Neural network** — A model made of layers of interconnected "neurons" that transform input data through weighted connections and nonlinear functions.
32. **Neuron / Unit** — A single computational node in a neural network that combines inputs and applies an activation function.
33. **Activation function** — A nonlinear function (like ReLU or sigmoid) applied after a layer's weighted sum, allowing the network to model complex patterns.
34. **Backpropagation** — The algorithm used to compute how much each weight in a network contributed to the error, so it can be updated.
35. **Epoch** — One complete pass through the entire training dataset.
36. **Batch** — A subset of training data processed together before the model's weights are updated.
37. **Convolutional Neural Network (CNN)** — A network architecture that uses filters sliding over input data (typically images) to detect local patterns like edges and textures.
38. **Recurrent Neural Network (RNN)** — A network architecture designed for sequential data, where information from previous steps influences the processing of the current step.
39. **Dropout** — A regularization technique that randomly disables a fraction of neurons during training to prevent overfitting.
40. **Batch normalization** — A technique that normalizes the inputs to a layer across a batch, stabilizing and speeding up training.

## 5. Training & Optimization Terms
41. **Learning rate** — A number controlling how big a step the optimizer takes when updating parameters.
42. **Optimizer** — The algorithm (e.g., SGD, Adam) that updates a model's parameters based on gradients.
43. **Stochastic Gradient Descent (SGD)** — An optimization method that updates parameters using the gradient computed from a small batch of data rather than the whole dataset.
44. **Regularization** — Any technique that discourages a model from becoming too complex, to improve generalization.
45. **Early stopping** — Halting training once performance on a held-out validation set stops improving, to avoid overfitting.
46. **Vanishing gradient** — A problem where gradients become extremely small as they're propagated backward through many layers, stalling learning.
47. **Exploding gradient** — The opposite problem: gradients grow uncontrollably large, destabilizing training.
48. **Learning rate schedule** — A plan for changing the learning rate over the course of training, often starting high and decreasing.

## 6. NLP & Transformer Terms
49. **Tokenization** — Splitting text into smaller units (words, subwords, or characters) that a model can process.
50. **Embedding** — A learned numerical vector representation of a token, word, or piece of data.
51. **Attention** — A mechanism that lets a model weigh how much focus to give different parts of the input when producing each output.
52. **Self-attention** — Attention applied within a single sequence, letting each token look at every other token in that same sequence.
53. **Transformer** — A neural network architecture built primarily on self-attention layers, now the dominant architecture for language (and increasingly vision) models.
54. **Positional encoding** — Information added to token embeddings so a Transformer, which has no inherent sense of order, knows the sequence position of each token.
55. **Encoder** — The part of a model that processes an input sequence into a representation, used in understanding-focused tasks.
56. **Decoder** — The part of a model that generates an output sequence, typically one token at a time, used in generation tasks.
57. **Context window** — The maximum number of tokens a model can consider at once when generating a response.
58. **Word embedding** — A vector representation of a word such that words with similar meaning are located close together in the vector space.

## 7. LLM-Specific Terms
59. **Large Language Model (LLM)** — A very large neural network, typically Transformer-based, trained on massive text corpora to understand and generate language.
60. **Pretraining** — The initial phase of training a model on a large, general dataset before it's specialized for a task.
61. **Fine-tuning** — Further training a pretrained model on a smaller, task-specific dataset to adapt it.
62. **Prompt** — The input text given to a language model to elicit a desired response.
63. **Prompt engineering** — The practice of carefully crafting prompts to get better or more reliable outputs from a language model.
64. **In-context learning** — A model's ability to perform a new task just from examples given in the prompt, without updating its weights.
65. **Chain-of-thought prompting** — A prompting technique that asks the model to reason step by step before giving a final answer, often improving accuracy on complex tasks.
66. **LoRA (Low-Rank Adaptation)** — A fine-tuning method that trains small additional matrices instead of the full model, drastically reducing compute and memory needs.
67. **Quantization** — Reducing the numerical precision of a model's weights (e.g., from 32-bit to 8-bit or 4-bit) to make it smaller and faster, usually with a small accuracy cost.
68. **RLHF (Reinforcement Learning from Human Feedback)** — A training method that uses human preference comparisons to align a model's outputs with what people actually want.
69. **Hallucination** — When a model generates text that sounds plausible but is factually incorrect or fabricated.
70. **Retrieval-Augmented Generation (RAG)** — A technique where a model retrieves relevant external documents at inference time and uses them as extra context to produce grounded answers.

## 8. Generative Model Terms
71. **Generative model** — A model that learns to create new data resembling its training data, rather than just classifying or predicting a label.
72. **GAN (Generative Adversarial Network)** — A generative model made of two networks — a generator that creates fake data and a discriminator that tries to spot it — trained against each other.
73. **VAE (Variational Autoencoder)** — A generative model that learns to compress data into a compact representation and then reconstruct or generate new data from it.
74. **Diffusion model** — A generative model that learns to reverse a gradual noising process, starting from pure noise and iteratively refining it into a realistic sample.
75. **Latent space** — A compressed, learned representation space where similar or related data points end up close together, often used as the "input" a generative model draws from.
76. **Autoencoder** — A network trained to compress input data into a smaller representation and then reconstruct the original from it.

## 9. Reinforcement Learning Terms
77. **Agent** — The decision-maker in a reinforcement learning setup that takes actions in an environment.
78. **Environment** — The world an RL agent interacts with, which responds to the agent's actions with new states and rewards.
79. **Reward** — A numerical signal an RL agent receives after taking an action, indicating how good or bad that action was.
80. **Policy** — The strategy an RL agent uses to decide which action to take given a state.
81. **Value function** — A function estimating how good it is to be in a given state (or take a given action), in terms of expected future reward.
82. **Exploration vs. exploitation** — The tradeoff between trying new actions to learn more (exploration) and choosing the best-known action (exploitation).
83. **Q-learning** — An RL algorithm that learns the expected future reward of taking each action in each state.
84. **Policy gradient** — A family of RL methods that directly adjust a policy's parameters to increase the probability of actions that lead to higher reward.

## 10. MLOps & Systems Terms
85. **Model drift** — A decline in a deployed model's performance over time as real-world data diverges from what it was trained on.
86. **Feature store** — A centralized system for storing and serving features consistently across training and production.
87. **A/B testing** — Comparing two versions (e.g., models) by randomly splitting traffic between them and measuring which performs better on a chosen metric.
88. **Model serving** — The infrastructure and process of making a trained model available to receive input and return predictions in production.
89. **Latency** — The time it takes for a system to return a response after receiving a request.
90. **Throughput** — The number of requests (or tokens, in LLM contexts) a system can process in a given amount of time.
91. **CI/CD (Continuous Integration/Continuous Deployment)** — Automated pipelines that test and deploy code (or models) whenever changes are made.
92. **Vector database** — A database optimized for storing and searching embeddings by similarity, commonly used in RAG systems.

## 11. Evaluation & Advanced Terms
93. **Precision** — Of everything the model predicted as positive, the fraction that was actually correct.
94. **Recall** — Of everything that was actually positive, the fraction the model correctly identified.
95. **Cross-validation** — A technique for estimating model performance by repeatedly splitting the data into different training/validation folds.
96. **Benchmark** — A standardized dataset and task used to measure and compare model performance.
97. **Mixture of Experts (MoE)** — An architecture where different specialized sub-networks ("experts") handle different inputs, with only a subset activated per input to save compute.
98. **KV cache** — Stored key/value tensors from a Transformer's attention layers, reused during text generation so each new token doesn't require recomputing attention over the whole sequence from scratch.
99. **Distillation** — Training a smaller "student" model to mimic a larger "teacher" model's behavior, compressing its knowledge into a cheaper model.
100. **Emergent behavior** — A capability that appears in a model only after it crosses a certain scale (parameters, data, or compute), without being explicitly designed for.

---

### How to use this file
This glossary isn't meant to be read start to finish — keep it open as a reference while working through the other lists in this repo. If a term here feels too compressed, it's a signal to go find the fuller explanation in the relevant section of `Books.md` or `ResearchPaper.md`.
