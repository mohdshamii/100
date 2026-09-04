# 100 Project Ideas — Beginner to Advanced

> Organized by category, ordered roughly beginner → advanced within each. Pick projects that build toward your target role — pair these with datasets from [`Datasets.md`](./Datasets.md).

---

## 1. Foundational ML (Regression & Classification) — Beginner
1. Predict house prices with linear regression (California Housing dataset)
2. Predict Titanic survival with logistic regression
3. Classify iris species with K-Nearest Neighbors
4. Predict diabetes onset with logistic regression (Pima dataset)
5. Build a spam classifier with Naive Bayes
6. Predict wine quality with a decision tree
7. Customer churn prediction with a random forest
8. Credit card fraud detection, handling severe class imbalance
9. Predict loan default risk from applicant data
10. Customer segmentation with K-means clustering

## 2. Classic ML Algorithms — Build From Scratch
11. Implement linear regression from scratch using gradient descent (no sklearn)
12. Implement logistic regression from scratch
13. Implement K-means clustering from scratch
14. Implement a decision tree from scratch
15. Implement K-Nearest Neighbors from scratch
16. Implement a single-hidden-layer neural network with just numpy
17. Build a gradient boosting model with XGBoost/LightGBM on a Kaggle competition
18. Implement PCA from scratch for dimensionality reduction
19. Build a stacked/blended ensemble for a Kaggle competition
20. Implement Naive Bayes from scratch

## 3. Computer Vision
21. Handwritten digit classifier on MNIST with a simple CNN
22. Fashion item classifier on Fashion-MNIST
23. Cat vs. dog classifier using transfer learning
24. Face detection app with OpenCV (Haar cascades)
25. Image segmentation with U-Net on a small dataset
26. Object detection on a custom dataset with YOLO
27. Image captioning model (CNN encoder + Transformer/RNN decoder)
28. Neural style transfer app
29. Facial emotion recognition system
30. Fine-tune a Vision Transformer (ViT) on a custom classification task

## 4. Natural Language Processing
31. Sentiment analysis on IMDB reviews with TF-IDF + logistic regression
32. Spam/ham text classifier
33. Named entity recognition with spaCy
34. Extractive text summarizer
35. Rule-based / intent-matching chatbot
36. Fine-tune BERT for sentiment classification
37. Question-answering system using a pretrained model on SQuAD
38. Topic modeling on news articles with LDA
39. Text generation with an LSTM language model
40. Fine-tune a transformer for abstractive summarization

## 5. Deep Learning Internals — Build From Scratch
41. Neural network from scratch (numpy only) to classify MNIST
42. Manual backpropagation implementation, verified with gradient checking
43. CNN built from scratch (no framework) for a small image dataset
44. Implement dropout and batch normalization from scratch
45. Autoencoder for image denoising
46. Variational Autoencoder (VAE) for MNIST digit generation
47. LSTM cell implemented from scratch
48. Minimal Transformer encoder from scratch, trained on a toy sequence task

## 6. Time Series & Forecasting
49. Forecast airline passenger counts with ARIMA
50. Stock price prediction with an LSTM
51. Electricity demand forecasting with Prophet
52. Multivariate weather forecasting model
53. Anomaly detection in sensor time series data
54. Retail demand forecasting (Kaggle Store Sales competition)
55. Temporal Fusion Transformer for multi-horizon forecasting

## 7. Recommender Systems
56. Movie recommender with collaborative filtering (MovieLens)
57. Content-based recommender using TF-IDF/cosine similarity
58. Matrix factorization (SVD) for recommendations
59. Hybrid recommender combining collaborative + content-based signals
60. Real-time recommendation API served with FastAPI
61. Session-based recommender using RNNs

## 8. Generative Models
62. DCGAN to generate handwritten digits (MNIST)
63. GAN for generating faces (CelebA)
64. Conditional GAN (cGAN) for class-controlled generation
65. Image-to-image translation with CycleGAN or Pix2Pix
66. Train a simple diffusion model on a small image dataset
67. Fine-tune Stable Diffusion on a custom style/subject with DreamBooth or LoRA
68. Text-to-image generation demo using a pretrained diffusion model
69. Music generation model with an RNN/Transformer

## 9. LLMs & Fine-Tuning
70. Fine-tune GPT-2 on a custom text corpus
71. Fine-tune BERT for a custom text classification task
72. Instruction-tune an open-source LLM (LLaMA/Mistral) with LoRA
73. Fine-tune an LLM with QLoRA for memory-efficient training on consumer GPUs
74. Train a custom tokenizer and a small language model from scratch
75. Fine-tune an LLM for domain-specific code generation
76. Preference-tune a small model with DPO (RLHF-style, no RL loop needed)
77. Build an evaluation harness comparing a fine-tuned model against its base
78. Distill a large LLM into a smaller student model
79. Fine-tune a multimodal model (e.g., LLaVA) on custom image-text pairs

## 10. RAG, Agents & LLM Applications
80. Basic RAG pipeline over a PDF using LangChain/LlamaIndex + a vector DB
81. RAG chatbot over your own notes or documents
82. RAG system with hybrid search (keyword + vector retrieval)
83. Multi-document RAG system with citation tracking
84. Web-browsing agent that can research and answer questions
85. Tool-using agent (calculator, search, code execution) via function calling
86. Multi-agent system where agents collaborate on a task (e.g., research + writing)
87. RAG-powered customer support bot with a feedback/correction loop

## 11. MLOps & Deployment
88. Deploy a trained model as a REST API with FastAPI or Flask
89. Containerize an ML model with Docker
90. CI/CD pipeline for automated model training and deployment
91. Experiment tracking setup with MLflow or Weights & Biases
92. Model monitoring dashboard for data/concept drift
93. Deploy a model to a managed cloud service (SageMaker, Vertex AI, etc.)
94. Build a feature store for a real-time ML application
95. End-to-end pipeline: data ingestion → training → deployment → monitoring

## 12. Reinforcement Learning
96. Solve CartPole with tabular Q-learning
97. Train a Deep Q-Network (DQN) to play an Atari game
98. Train a PPO agent for continuous control (MuJoCo/Gymnasium)
99. Design a custom game environment and train an RL agent to solve it
100. Train a multi-agent RL system for a cooperative or competitive game

---

### Suggested path
1. **Weeks 1–4:** §1–2 — get the ML fundamentals and intuition for what's under the hood
2. **Weeks 5–8:** §3–4 — pick vision or NLP (or both) and build real projects
3. **Weeks 9–10:** §5 — implement core deep learning pieces from scratch for deeper understanding
4. **Weeks 11–13:** §6–7 — forecasting and recommenders round out practical skills
5. **Weeks 14–16:** §8–9 — generative models and LLM fine-tuning, the core of current AI engineering work
6. **Weeks 17–18:** §10 — RAG and agentic applications, the most in-demand LLM-application skill
7. **Weeks 19–20:** §11 — MLOps, so your projects are deployable, not just notebooks
8. **Ongoing:** §12 — RL projects as a specialization track if relevant to your target role

