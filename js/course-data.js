/**
 * 100 Days of AI/ML Course Curriculum & Preparation Plan
 * Grounded in GeeksforGeeks, TutorialsPoint, and W3Schools references
 */
const COURSE_DATA = [
  {
    "day": 1,
    "phase": 1,
    "phaseName": "Phase 1: Math & Python Foundations",
    "category": "Python & Data Structures",
    "difficulty": "easy",
    "title": "Python Core for AI/ML: Data Structures, Comprehensions & OOP",
    "summary": "Master core Python essentials for machine learning: list/dict/set comprehensions, generators, lambda functions, decorators, and object-oriented design for model pipelines.",
    "concepts": [
      "List & Dict Comprehensions",
      "Generators & Iterators",
      "Lambda & Map/Filter",
      "Object-Oriented Programming",
      "Dunder Methods (__call__, __len__)"
    ],
    "references": {
      "gfg": {
        "title": "Python Programming Language",
        "url": "https://www.geeksforgeeks.org/python-programming-language/"
      },
      "tutorialspoint": {
        "title": "Python 3 Tutorial",
        "url": "https://www.tutorialspoint.com/python/index.htm"
      },
      "w3schools": {
        "title": "Python Tutorial",
        "url": "https://www.w3schools.com/python/default.asp"
      }
    },
    "practice": "Implement a custom MiniBatchGenerator class with __iter__ and __next__ that shuffles and yields mini-batches of size B from features X and targets y.",
    "formula": "Batch Generator: yields X[i:i+B], y[i:i+B] for i in range(0, N, B)",
    "repoRef": "Tools.md#1-core-python--data"
  },
  {
    "day": 2,
    "phase": 1,
    "phaseName": "Phase 1: Math & Python Foundations",
    "category": "NumPy & Vectorization",
    "difficulty": "easy",
    "title": "NumPy Essentials: Arrays, Vectorization, Broadcasting & Slicing",
    "summary": "Ditch Python slow for-loops with NumPy's C-accelerated ndarrays. Master vectorization, broadcasting semantics, boolean masking, strided slicing, and reduction axes.",
    "concepts": [
      "ndarrays & Memory Layout",
      "Broadcasting Rules",
      "Axis Reductions (sum, mean, std)",
      "Fancy Indexing & Masking",
      "Linear Algebra Submodule (np.linalg)"
    ],
    "references": {
      "gfg": {
        "title": "NumPy Tutorial",
        "url": "https://www.geeksforgeeks.org/numpy-tutorial/"
      },
      "tutorialspoint": {
        "title": "NumPy Tutorial",
        "url": "https://www.tutorialspoint.com/numpy/index.htm"
      },
      "w3schools": {
        "title": "NumPy Tutorial",
        "url": "https://www.w3schools.com/python/numpy/default.asp"
      }
    },
    "practice": "Write a vectorized function to compute pairwise Euclidean distances between two matrices of vectors X (N x D) and Y (M x D) without any loops.",
    "formula": "||x - y||^2 = ||x||^2 + ||y||^2 - 2(x . y)",
    "repoRef": "Tools.md#1-core-python--data"
  },
  {
    "day": 3,
    "phase": 1,
    "phaseName": "Phase 1: Math & Python Foundations",
    "category": "Pandas & Data Wrangling",
    "difficulty": "easy",
    "title": "Pandas for Data Wrangling: Series, DataFrames, Merges & Missing Data",
    "summary": "Clean and reshape structured data with Pandas. Master loc/iloc indexing, hierarchical groupby aggregations, relational joins/merges, categorical encoding, and handling NaNs.",
    "concepts": [
      "Series & DataFrames",
      "loc vs iloc Indexing",
      "Handling Missing Data (dropna, fillna)",
      "Groupby & Multi-Aggregations",
      "Concat, Merge & Join Operations"
    ],
    "references": {
      "gfg": {
        "title": "Pandas Tutorial",
        "url": "https://www.geeksforgeeks.org/pandas-tutorial/"
      },
      "tutorialspoint": {
        "title": "Python Pandas Tutorial",
        "url": "https://www.tutorialspoint.com/python_pandas/index.htm"
      },
      "w3schools": {
        "title": "Pandas Tutorial",
        "url": "https://www.w3schools.com/python/pandas/default.asp"
      }
    },
    "practice": "Load a raw messy dataset, impute missing values using group median, clip numerical outliers beyond 3 IQRs, and compute one-hot encoding on categoricals.",
    "formula": "IQR = Q3 - Q1; Outlier range: [Q1 - 1.5*IQR, Q3 + 1.5*IQR]",
    "repoRef": "Datasets.md#1-beginner-tabular--classic-ml"
  },
  {
    "day": 4,
    "phase": 1,
    "phaseName": "Phase 1: Math & Python Foundations",
    "category": "Data Visualization & EDA",
    "difficulty": "easy",
    "title": "Exploratory Data Analysis: Matplotlib, Seaborn & Statistical Plots",
    "summary": "Uncover underlying distributions, correlations, class imbalances, and bivariate interactions using Matplotlib subplots, Seaborn heatmaps, boxplots, pairplots, and KDEs.",
    "concepts": [
      "Distribution Analysis (Histograms, KDE)",
      "Correlation Matrix Heatmaps",
      "Boxplots & Outlier Identification",
      "Pairplots & Bivariate Scatters",
      "Visualizing Class Imbalance"
    ],
    "references": {
      "gfg": {
        "title": "Matplotlib Tutorial",
        "url": "https://www.geeksforgeeks.org/matplotlib-tutorial/"
      },
      "tutorialspoint": {
        "title": "Matplotlib Tutorial",
        "url": "https://www.tutorialspoint.com/matplotlib/index.htm"
      },
      "w3schools": {
        "title": "Matplotlib Tutorial",
        "url": "https://www.w3schools.com/python/matplotlib_intro.asp"
      }
    },
    "practice": "Create a multi-panel 2x2 publication-ready dashboard: histogram with KDE, correlation matrix heatmap, boxplot across classes, and scatter with regression fit.",
    "formula": "Covariance: Cov(X, Y) = E[(X - mu_x)(Y - mu_y)]; Correlation: r = Cov(X, Y) / (sigma_x * sigma_y)",
    "repoRef": "Books.md#1-mathematics--statistics-foundations"
  },
  {
    "day": 5,
    "phase": 1,
    "phaseName": "Phase 1: Math & Python Foundations",
    "category": "Linear Algebra",
    "difficulty": "easy",
    "title": "Linear Algebra I: Vectors, Vector Spaces, Dot Products & Norms",
    "summary": "Build the geometric foundations of ML. Understand linear combinations, span, basis vectors, inner products (dot product as projection), and vector norms (L1, L2, L-infinity).",
    "concepts": [
      "Vector Spaces & Span",
      "Dot Product & Geometric Angle",
      "Orthogonality & Projections",
      "L1 Norm (Manhattan) & Sparsity",
      "L2 Norm (Euclidean Distance)"
    ],
    "references": {
      "gfg": {
        "title": "Linear Algebra for Machine Learning",
        "url": "https://www.geeksforgeeks.org/linear-algebra-for-machine-learning/"
      },
      "tutorialspoint": {
        "title": "Linear Algebra Tutorial",
        "url": "https://www.tutorialspoint.com/linear-algebra/index.htm"
      },
      "w3schools": {
        "title": "Linear Algebra in AI",
        "url": "https://www.w3schools.com/ai/ai_linear_algebra.asp"
      }
    },
    "practice": "Implement vector projection of vector a onto vector b from scratch using dot products, and verify orthogonality of the residual vector.",
    "formula": "proj_b(a) = ((a . b) / ||b||^2) * b; ||x||_p = (sum |x_i|^p)^(1/p)",
    "repoRef": "CHEATSHEETS.md#1-linear-algebra"
  },
  {
    "day": 6,
    "phase": 1,
    "phaseName": "Phase 1: Math & Python Foundations",
    "category": "Linear Algebra",
    "difficulty": "medium",
    "title": "Linear Algebra II: Matrices, Transpose, Inverses, Determinants & Rank",
    "summary": "Understand matrices as linear transformations. Master matrix multiplication, linear independence, rank, determinants (volume scaling factor), and matrix inverses.",
    "concepts": [
      "Matrix Multiplication as Transformation",
      "Rank & Column Space",
      "Determinant & Invertibility",
      "Gaussian Elimination & Solving Ax = b",
      "Singular vs Non-Singular Matrices"
    ],
    "references": {
      "gfg": {
        "title": "Matrix Operations in Python",
        "url": "https://www.geeksforgeeks.org/matrix-operations-in-python/"
      },
      "tutorialspoint": {
        "title": "Matrix Operations Tutorial",
        "url": "https://www.tutorialspoint.com/matrix/index.htm"
      },
      "w3schools": {
        "title": "NumPy Matrix Operations",
        "url": "https://www.w3schools.com/python/numpy/numpy_matrix.asp"
      }
    },
    "practice": "Write a pure Python function to compute the determinant of an N x N matrix recursively using Laplace cofactor expansion.",
    "formula": "det(A) != 0 <=> A is invertible; (AB)^T = B^T A^T; (AB)^(-1) = B^(-1) A^(-1)",
    "repoRef": "CHEATSHEETS.md#1-linear-algebra"
  },
  {
    "day": 7,
    "phase": 1,
    "phaseName": "Phase 1: Math & Python Foundations",
    "category": "Linear Algebra",
    "difficulty": "medium",
    "title": "Linear Algebra III: Eigenvalues, Eigenvectors & Spectral Decomposition",
    "summary": "Discover directions where linear transformations act purely as scalar scaling. Learn the characteristic equation, symmetric matrix eigendecomposition, and positive semi-definiteness.",
    "concepts": [
      "Eigenvalue Equation A v = lambda v",
      "Characteristic Polynomial det(A - lambda I) = 0",
      "Eigendecomposition A = Q Lambda Q^(-1)",
      "Spectral Theorem for Symmetric Matrices",
      "Positive Semi-Definite Matrices (PSD)"
    ],
    "references": {
      "gfg": {
        "title": "Eigenvalues and Eigenvectors",
        "url": "https://www.geeksforgeeks.org/eigenvalues-and-eigenvectors/"
      },
      "tutorialspoint": {
        "title": "Eigenvalues & Eigenvectors",
        "url": "https://www.tutorialspoint.com/eigenvalues_and_eigenvectors/index.htm"
      },
      "w3schools": {
        "title": "Data Science Linear Algebra",
        "url": "https://www.w3schools.com/datascience/ds_linear_algebra.asp"
      }
    },
    "practice": "Implement Power Iteration from scratch to compute the dominant eigenvalue and eigenvector of a square symmetric matrix.",
    "formula": "A v = lambda v; A = V diag(lambda) V^(-1)",
    "repoRef": "CHEATSHEETS.md#1-linear-algebra"
  },
  {
    "day": 8,
    "phase": 1,
    "phaseName": "Phase 1: Math & Python Foundations",
    "category": "Calculus for ML",
    "difficulty": "easy",
    "title": "Calculus for ML I: Derivatives, Partial Derivatives & The Chain Rule",
    "summary": "Understand rates of change that govern neural network learning. Master single-variable differentiation rules, partial derivatives of multivariable functions, and the Chain Rule.",
    "concepts": [
      "Limit Definition of Derivative",
      "Power, Product & Quotient Rules",
      "Partial Derivatives del f / del x",
      "Multivariate Chain Rule",
      "Jacobian Matrix for Vector-Valued Functions"
    ],
    "references": {
      "gfg": {
        "title": "Calculus for Machine Learning",
        "url": "https://www.geeksforgeeks.org/calculus-for-machine-learning/"
      },
      "tutorialspoint": {
        "title": "Calculus Tutorial",
        "url": "https://www.tutorialspoint.com/calculus/index.htm"
      },
      "w3schools": {
        "title": "Calculus in AI",
        "url": "https://www.w3schools.com/ai/ai_calculus.asp"
      }
    },
    "practice": "Implement numerical differentiation using central difference method f'(x) approx (f(x+h) - f(x-h))/(2h) and verify against analytical derivatives.",
    "formula": "d/dx [f(g(x))] = f'(g(x)) * g'(x); del/del x_i [x^T A x] = (A + A^T) x",
    "repoRef": "CHEATSHEETS.md#3-calculus-essentials"
  },
  {
    "day": 9,
    "phase": 1,
    "phaseName": "Phase 1: Math & Python Foundations",
    "category": "Calculus for ML",
    "difficulty": "medium",
    "title": "Calculus for ML II: Gradients, Hessians & Directional Derivatives",
    "summary": "Ascend and descend multidimensional cost surfaces. Master gradient vectors (direction of steepest ascent), directional derivatives, and Hessian matrices for second-order curvature.",
    "concepts": [
      "Gradient Vector grad f(x)",
      "Directional Derivative D_u f",
      "Hessian Matrix H_ij = del^2 f / (del x_i del x_j)",
      "Curvature & Second Derivative Test",
      "Saddle Points vs Local Minima"
    ],
    "references": {
      "gfg": {
        "title": "Gradient Descent Algorithm and Variants",
        "url": "https://www.geeksforgeeks.org/gradient-descent-algorithm-and-its-variants/"
      },
      "tutorialspoint": {
        "title": "Optimization Techniques",
        "url": "https://www.tutorialspoint.com/optimization/index.htm"
      },
      "w3schools": {
        "title": "Gradient Descent in AI",
        "url": "https://www.w3schools.com/ai/ai_gradient_descent.asp"
      }
    },
    "practice": "Write code to compute the Hessian matrix of a bivariate loss function f(x, y) = x^2 + 2y^2 - 0.3*cos(3pi*x) and classify critical points.",
    "formula": "grad f = [del f/del x_1, ..., del f/del x_d]^T; H = [del^2 f / (del x_i del x_j)]",
    "repoRef": "CHEATSHEETS.md#3-calculus-essentials"
  },
  {
    "day": 10,
    "phase": 1,
    "phaseName": "Phase 1: Math & Python Foundations",
    "category": "Probability & Statistics",
    "difficulty": "easy",
    "title": "Probability Fundamentals: Sample Spaces, Conditional Probability & Bayes Theorem",
    "summary": "Quantify uncertainty in predictive models. Understand sample spaces, axioms of probability, joint and marginal distributions, independence, and Bayes Theorem for belief updates.",
    "concepts": [
      "Sample Spaces & Events",
      "Joint & Marginal Probabilities",
      "Conditional Probability P(A|B)",
      "Law of Total Probability",
      "Bayes Theorem (Prior, Likelihood, Posterior)"
    ],
    "references": {
      "gfg": {
        "title": "Probability in Machine Learning",
        "url": "https://www.geeksforgeeks.org/probability-in-machine-learning/"
      },
      "tutorialspoint": {
        "title": "Probability Tutorial",
        "url": "https://www.tutorialspoint.com/probability/index.htm"
      },
      "w3schools": {
        "title": "Probability in Statistics",
        "url": "https://www.w3schools.com/statistics/statistics_probability.php"
      }
    },
    "practice": "Simulate a medical diagnostic test in Python: given prevalence, sensitivity, and specificity, calculate the posterior probability P(Disease | Positive Test).",
    "formula": "P(A|B) = [P(B|A) * P(A)] / P(B)",
    "repoRef": "CHEATSHEETS.md#2-probability--statistics"
  },
  {
    "day": 11,
    "phase": 1,
    "phaseName": "Phase 1: Math & Python Foundations",
    "category": "Probability & Statistics",
    "difficulty": "medium",
    "title": "Probability Distributions: Gaussian, Binomial, Poisson & Maximum Likelihood",
    "summary": "Master standard distributions used in ML modeling. Differentiate discrete vs continuous random variables, probability mass/density functions, and Maximum Likelihood Estimation (MLE).",
    "concepts": [
      "Bernoulli & Binomial Distributions",
      "Gaussian (Normal) Distribution & Central Limit Theorem",
      "Poisson & Exponential Distributions",
      "PDF, CDF & Quantile Functions",
      "Maximum Likelihood Estimation (MLE)"
    ],
    "references": {
      "gfg": {
        "title": "Probability Distributions in Python",
        "url": "https://www.geeksforgeeks.org/probability-distribution/"
      },
      "tutorialspoint": {
        "title": "Probability Distributions",
        "url": "https://www.tutorialspoint.com/statistics/probability_distributions.htm"
      },
      "w3schools": {
        "title": "NumPy Random Distributions",
        "url": "https://www.w3schools.com/python/numpy/numpy_random_distributions.asp"
      }
    },
    "practice": "Derive and implement MLE for the mean and variance of 1D Gaussian data, comparing empirical formulas with scipy.stats estimates.",
    "formula": "Gaussian PDF: f(x) = (1 / (sigma sqrt(2pi))) * exp(- (x - mu)^2 / (2 sigma^2))",
    "repoRef": "CHEATSHEETS.md#2-probability--statistics"
  },
  {
    "day": 12,
    "phase": 1,
    "phaseName": "Phase 1: Math & Python Foundations",
    "category": "Probability & Statistics",
    "difficulty": "easy",
    "title": "Descriptive & Inferential Statistics: Moments, Variance & Covariance",
    "summary": "Summarize data distributions numerically. Master central tendency (mean, median, mode), spread (variance, standard deviation, IQR), skewness, kurtosis, and covariance matrices.",
    "concepts": [
      "Mean, Median, Mode & Robustness",
      "Variance & Standard Deviation",
      "Skewness & Kurtosis",
      "Covariance Matrix Sigma",
      "Pearson vs Spearman Correlation"
    ],
    "references": {
      "gfg": {
        "title": "Statistics for Machine Learning",
        "url": "https://www.geeksforgeeks.org/statistics-for-machine-learning/"
      },
      "tutorialspoint": {
        "title": "Statistics Tutorial",
        "url": "https://www.tutorialspoint.com/statistics/index.htm"
      },
      "w3schools": {
        "title": "Statistics Introduction",
        "url": "https://www.w3schools.com/statistics/index.php"
      }
    },
    "practice": "Compute the complete D x D covariance matrix of a dataset using pure NumPy vector operations without calling np.cov().",
    "formula": "Sigma = (1 / (N - 1)) * (X - mu)^T (X - mu)",
    "repoRef": "CHEATSHEETS.md#2-probability--statistics"
  },
  {
    "day": 13,
    "phase": 1,
    "phaseName": "Phase 1: Math & Python Foundations",
    "category": "Probability & Statistics",
    "difficulty": "medium",
    "title": "Hypothesis Testing & Statistical Significance: p-values, t-test & ANOVA",
    "summary": "Verify if performance differences between models are statistically significant. Learn null/alternative hypotheses, Type I/II errors, p-values, two-sample t-tests, and ANOVA.",
    "concepts": [
      "Null (H0) & Alternative (H1) Hypotheses",
      "Type I Error (alpha) & Type II Error (beta)",
      "p-value Interpretation & Misconceptions",
      "Student t-test (Independent & Paired)",
      "One-Way ANOVA & F-test"
    ],
    "references": {
      "gfg": {
        "title": "Hypothesis Testing in Machine Learning",
        "url": "https://www.geeksforgeeks.org/hypothesis-testing-in-machine-learning/"
      },
      "tutorialspoint": {
        "title": "Hypothesis Testing Tutorial",
        "url": "https://www.tutorialspoint.com/statistics/hypothesis_testing.htm"
      },
      "w3schools": {
        "title": "Hypothesis Testing in Data Science",
        "url": "https://www.w3schools.com/datascience/ds_hypothesis_testing.asp"
      }
    },
    "practice": "Run an A/B test simulation comparing two conversion rates using a two-sample z-test and compute 95% confidence intervals.",
    "formula": "t = (x_bar_1 - x_bar_2) / sqrt(s_1^2/n_1 + s_2^2/n_2)",
    "repoRef": "Books.md#1-mathematics--statistics-foundations"
  },
  {
    "day": 14,
    "phase": 1,
    "phaseName": "Phase 1: Math & Python Foundations",
    "category": "Optimization Foundations",
    "difficulty": "medium",
    "title": "Optimization Foundations: Convexity, Loss Functions & Gradient Descent",
    "summary": "Understand convex optimization. Define convex sets and functions, master standard loss functions (MSE, MAE), and implement Vanilla Batch Gradient Descent.",
    "concepts": [
      "Convex vs Non-Convex Functions",
      "Global vs Local Optima",
      "Mean Squared Error (MSE) Convexity",
      "Gradient Descent Step theta = theta - eta * grad J",
      "Learning Rate Tuning & Divergence"
    ],
    "references": {
      "gfg": {
        "title": "Gradient Descent in Machine Learning",
        "url": "https://www.geeksforgeeks.org/gradient-descent-in-machine-learning/"
      },
      "tutorialspoint": {
        "title": "Machine Learning Gradient Descent",
        "url": "https://www.tutorialspoint.com/machine_learning/machine_learning_gradient_descent.htm"
      },
      "w3schools": {
        "title": "Gradient Descent Algorithm",
        "url": "https://www.w3schools.com/ai/ai_gradient_descent.asp"
      }
    },
    "practice": "Implement Batch Gradient Descent to find the global minimum of f(w) = w^2 - 4w + 5, tracking loss history over 50 iterations.",
    "formula": "theta_{t+1} = theta_t - eta * grad J(theta_t)",
    "repoRef": "CHEATSHEETS.md#6-optimizer-update-rules"
  },
  {
    "day": 15,
    "phase": 1,
    "phaseName": "Phase 1: Math & Python Foundations",
    "category": "Phase 1 Milestone",
    "difficulty": "medium",
    "title": "Phase 1 Milestone: Exploratory Data Analysis & Math from Scratch Benchmark",
    "summary": "Consolidate Phase 1. Build an end-to-end exploratory analysis pipeline with NumPy, Pandas, Matplotlib, and verify your linear algebra & calculus functions against library implementations.",
    "concepts": [
      "Consolidated Data Pipeline",
      "Vectorized Math Benchmarking",
      "Distribution & Outlier Auditing",
      "Correlation Analysis",
      "Phase 1 Self-Assessment"
    ],
    "references": {
      "gfg": {
        "title": "Exploratory Data Analysis in Python",
        "url": "https://www.geeksforgeeks.org/exploratory-data-analysis-in-python/"
      },
      "tutorialspoint": {
        "title": "Python Exploratory Data Analysis",
        "url": "https://www.tutorialspoint.com/python_data_science/python_exploratory_data_analysis.htm"
      },
      "w3schools": {
        "title": "Data Science Case Study",
        "url": "https://www.w3schools.com/datascience/ds_case_study.asp"
      }
    },
    "practice": "Take the California Housing tabular dataset, run automated EDA, compute summary stats, and fit a 1D linear trendline purely using NumPy formulas.",
    "formula": "Slope: m = (N*sum(xy) - sum(x)*sum(y)) / (N*sum(x^2) - (sum(x))^2)",
    "repoRef": "Projects.md#1-foundational-ml-regression--classification--beginner"
  },
  {
    "day": 16,
    "phase": 2,
    "phaseName": "Phase 2: Classical Machine Learning",
    "category": "Data Preprocessing & Feature Engineering",
    "difficulty": "easy",
    "title": "Data Preprocessing: Scaling, Encoding & Feature Engineering",
    "summary": "Prepare raw features for machine learning algorithms. Master StandardScaler (Z-score), MinMaxScaler, RobustScaler, One-Hot Encoding, Ordinal Encoding, and interaction terms.",
    "concepts": [
      "StandardScaler vs MinMaxScaler",
      "RobustScaler with Medians & IQRs",
      "One-Hot vs Target Encoding",
      "Imputation (Mean, KNN, Iterative)",
      "Train/Test Leakage Prevention"
    ],
    "references": {
      "gfg": {
        "title": "Feature Engineering for Machine Learning",
        "url": "https://www.geeksforgeeks.org/feature-engineering-for-machine-learning/"
      },
      "tutorialspoint": {
        "title": "ML Data Preprocessing",
        "url": "https://www.tutorialspoint.com/machine_learning/machine_learning_data_preprocessing.htm"
      },
      "w3schools": {
        "title": "Machine Learning Scale",
        "url": "https://www.w3schools.com/python/python_ml_scale.asp"
      }
    },
    "practice": "Implement a custom Transformer class following scikit-learn's fit/transform contract that standardizes numeric columns without data leakage.",
    "formula": "Z-score: z = (x - mu) / sigma; MinMax: x' = (x - x_min) / (x_max - x_min)",
    "repoRef": "Tools.md#2-classic-machine-learning"
  },
  {
    "day": 17,
    "phase": 2,
    "phaseName": "Phase 2: Classical Machine Learning",
    "category": "Supervised Learning - Regression",
    "difficulty": "easy",
    "title": "Linear Regression from Scratch: Normal Equation & Gradient Descent",
    "summary": "Derive ordinary least squares (OLS). Solve for optimal weights analytically via the closed-form Normal Equation (X^T X)^(-1) X^T y and iteratively via Batch Gradient Descent.",
    "concepts": [
      "Ordinary Least Squares (OLS)",
      "Residual Sum of Squares (RSS)",
      "Closed-Form Normal Equation",
      "Batch Gradient Descent on MSE",
      "Assumptions of Linear Regression (BLUE)"
    ],
    "references": {
      "gfg": {
        "title": "Linear Regression Python Implementation",
        "url": "https://www.geeksforgeeks.org/linear-regression-python-implementation/"
      },
      "tutorialspoint": {
        "title": "ML with Python - Linear Regression",
        "url": "https://www.tutorialspoint.com/machine_learning_with_python/machine_learning_with_python_linear_regression.htm"
      },
      "w3schools": {
        "title": "Python Linear Regression",
        "url": "https://www.w3schools.com/python/python_ml_linear_regression.asp"
      }
    },
    "practice": "Implement a LinearRegressionFromScratch class with fit() and predict() supporting both method='normal_eqn' and method='gradient_descent'.",
    "formula": "theta* = (X^T X)^(-1) X^T y; grad_w J = (2/N) * X^T (Xw - y)",
    "repoRef": "Projects.md#2-classic-ml-algorithms--build-from-scratch"
  },
  {
    "day": 18,
    "phase": 2,
    "phaseName": "Phase 2: Classical Machine Learning",
    "category": "Supervised Learning - Regression",
    "difficulty": "medium",
    "title": "Multiple Linear Regression & Polynomial Feature Modeling",
    "summary": "Extend linear regression to multi-dimensional feature spaces and non-linear data surfaces via Polynomial Features, and learn how to diagnose multicollinearity with VIF.",
    "concepts": [
      "Multiple Feature Vectors",
      "Polynomial Feature Expansion",
      "Multicollinearity & Variance Inflation Factor (VIF)",
      "R-squared vs Adjusted R-squared",
      "Residual Diagnostics (Heteroskedasticity)"
    ],
    "references": {
      "gfg": {
        "title": "Multiple Linear Regression with Scikit-Learn",
        "url": "https://www.geeksforgeeks.org/multiple-linear-regression-with-scikit-learn/"
      },
      "tutorialspoint": {
        "title": "Multiple Linear Regression Tutorial",
        "url": "https://www.tutorialspoint.com/machine_learning/machine_learning_multiple_linear_regression.htm"
      },
      "w3schools": {
        "title": "Multiple Regression in Python",
        "url": "https://www.w3schools.com/python/python_ml_multiple_regression.asp"
      }
    },
    "practice": "Fit a 3rd-degree polynomial regression on non-linear synthetic data and plot train vs test MSE across polynomial degrees 1 through 10.",
    "formula": "R^2 = 1 - (SS_res / SS_tot); R^2_adj = 1 - [(1 - R^2)(n - 1) / (n - p - 1)]",
    "repoRef": "Projects.md#1-foundational-ml-regression--classification--beginner"
  },
  {
    "day": 19,
    "phase": 2,
    "phaseName": "Phase 2: Classical Machine Learning",
    "category": "Regularization",
    "difficulty": "medium",
    "title": "Regularization: Ridge (L2), Lasso (L1) & Elastic Net",
    "summary": "Control model complexity and combat overfitting. Understand how L2 penalty shrinks weights proportionally and how L1 diamond geometry drives exact zero-weight sparsity.",
    "concepts": [
      "Overfitting & High Weight Norms",
      "Ridge Regression (L2 Penalty)",
      "Lasso Regression (L1 Sparsity)",
      "Elastic Net Convex Combination",
      "Geometric Intuition of L1 vs L2 Contours"
    ],
    "references": {
      "gfg": {
        "title": "Regularization in Machine Learning",
        "url": "https://www.geeksforgeeks.org/regularization-in-machine-learning/"
      },
      "tutorialspoint": {
        "title": "ML Regularization Techniques",
        "url": "https://www.tutorialspoint.com/machine_learning/machine_learning_regularization.htm"
      },
      "w3schools": {
        "title": "Linear Regression Regularization",
        "url": "https://www.w3schools.com/datascience/ds_linear_regression_regularization.asp"
      }
    },
    "practice": "Implement Coordinate Descent from scratch for Lasso Regression and observe feature coefficients zeroing out as lambda increases.",
    "formula": "Ridge: J = MSE + alpha * ||w||_2^2; Lasso: J = MSE + alpha * ||w||_1",
    "repoRef": "CHEATSHEETS.md#4-common-loss-functions"
  },
  {
    "day": 20,
    "phase": 2,
    "phaseName": "Phase 2: Classical Machine Learning",
    "category": "Supervised Learning - Classification",
    "difficulty": "easy",
    "title": "Logistic Regression: Sigmoid, Odds Ratio & Binary Cross-Entropy",
    "summary": "Transition from regression to probabilistic classification. Learn the Sigmoid function, Log-Odds (logit), maximum likelihood derivation of Binary Cross-Entropy, and decision thresholds.",
    "concepts": [
      "Sigmoid (Logistic) Function",
      "Odds Ratio & Log-Odds Transformation",
      "Binary Cross-Entropy (Log Loss)",
      "Decision Boundary Linearity",
      "Threshold Tuning & Probability Calibration"
    ],
    "references": {
      "gfg": {
        "title": "Understanding Logistic Regression",
        "url": "https://www.geeksforgeeks.org/understanding-logistic-regression/"
      },
      "tutorialspoint": {
        "title": "ML with Python - Logistic Regression",
        "url": "https://www.tutorialspoint.com/machine_learning_with_python/machine_learning_with_python_logistic_regression.htm"
      },
      "w3schools": {
        "title": "Python Logistic Regression",
        "url": "https://www.w3schools.com/python/python_ml_logistic_regression.asp"
      }
    },
    "practice": "Code a LogisticRegression binary classifier from scratch with gradient descent weight updates and plot the linear decision boundary.",
    "formula": "sigma(z) = 1 / (1 + exp(-z)); Loss = - (1/N) * sum [y log(y_hat) + (1-y) log(1-y_hat)]",
    "repoRef": "Projects.md#2-classic-ml-algorithms--build-from-scratch"
  },
  {
    "day": 21,
    "phase": 2,
    "phaseName": "Phase 2: Classical Machine Learning",
    "category": "Supervised Learning - Classification",
    "difficulty": "medium",
    "title": "Multiclass Classification: Softmax Regression & One-vs-Rest (OvR)",
    "summary": "Extend binary classifiers to K classes. Master the Softmax activation for categorical probability distributions and compare One-vs-Rest (OvR) vs One-vs-One (OvO) architectures.",
    "concepts": [
      "Softmax Activation Function",
      "Categorical Cross-Entropy Loss",
      "One-vs-Rest (OvR) / One-vs-All",
      "One-vs-One (OvO) Voting Scheme",
      "Numerical Stability with Softmax Shift"
    ],
    "references": {
      "gfg": {
        "title": "Multiclass Classification Using Scikit-Learn",
        "url": "https://www.geeksforgeeks.org/multiclass-classification-using-scikit-learn/"
      },
      "tutorialspoint": {
        "title": "ML Classification Algorithms",
        "url": "https://www.tutorialspoint.com/machine_learning/machine_learning_classification_algorithms.htm"
      },
      "w3schools": {
        "title": "AI Classifiers",
        "url": "https://www.w3schools.com/ai/ai_classifiers.asp"
      }
    },
    "practice": "Implement numerically stable Softmax in Python: subtract max(z) from input logits before exponentiation to prevent floating-point overflow.",
    "formula": "P(y=k|x) = exp(z_k) / sum_{j=1}^K exp(z_j); Loss = - sum_{k=1}^K y_k log(y_hat_k)",
    "repoRef": "CHEATSHEETS.md#5-activation-functions--derivatives"
  },
  {
    "day": 22,
    "phase": 2,
    "phaseName": "Phase 2: Classical Machine Learning",
    "category": "Model Evaluation & Metrics",
    "difficulty": "easy",
    "title": "Model Evaluation Metrics: Confusion Matrix, Precision, Recall, F1 & ROC-AUC",
    "summary": "Move beyond naive accuracy on imbalanced datasets. Calculate True/False Positives/Negatives, Precision, Recall, F1-Score, specificity, PR curves, and ROC-AUC.",
    "concepts": [
      "Confusion Matrix (TP, FP, TN, FN)",
      "Precision (Purity) vs Recall (Sensitivity)",
      "F1-Score & Harmonic Mean",
      "Receiver Operating Characteristic (ROC)",
      "Area Under the Curve (AUC) & PR-AUC"
    ],
    "references": {
      "gfg": {
        "title": "Confusion Matrix in Machine Learning",
        "url": "https://www.geeksforgeeks.org/confusion-matrix-machine-learning/"
      },
      "tutorialspoint": {
        "title": "ML Performance Metrics",
        "url": "https://www.tutorialspoint.com/machine_learning_with_python/machine_learning_with_python_performance_metrics.htm"
      },
      "w3schools": {
        "title": "Confusion Matrix in Python",
        "url": "https://www.w3schools.com/python/python_ml_confusion_matrix.asp"
      }
    },
    "practice": "Write pure Python functions to compute Confusion Matrix, Precision, Recall, and F1-Score from raw predictions without scikit-learn.",
    "formula": "Precision = TP / (TP + FP); Recall = TP / (TP + FN); F1 = 2 * (P * R) / (P + R)",
    "repoRef": "CHEATSHEETS.md#8-common-evaluation-metrics"
  },
  {
    "day": 23,
    "phase": 2,
    "phaseName": "Phase 2: Classical Machine Learning",
    "category": "Validation & Diagnosis",
    "difficulty": "medium",
    "title": "Bias-Variance Tradeoff, Cross-Validation & Learning Curves",
    "summary": "Diagnose underfitting vs overfitting. Learn the mathematical decomposition of Expected Prediction Error into Bias^2 + Variance + Irreducible Error, and apply K-Fold CV.",
    "concepts": [
      "Bias-Variance Decomposition",
      "Underfitting (High Bias) Signals",
      "Overfitting (High Variance) Signals",
      "Stratified K-Fold Cross-Validation",
      "Learning Curves Analysis"
    ],
    "references": {
      "gfg": {
        "title": "Bias and Variance in Machine Learning",
        "url": "https://www.geeksforgeeks.org/bias-and-variance-in-machine-learning/"
      },
      "tutorialspoint": {
        "title": "ML Bias and Variance",
        "url": "https://www.tutorialspoint.com/machine_learning/machine_learning_bias_and_variance.htm"
      },
      "w3schools": {
        "title": "Cross Validation in Python",
        "url": "https://www.w3schools.com/python/python_ml_cross_validation.asp"
      }
    },
    "practice": "Plot training and validation error curves as a function of training sample size (10% to 100%) to diagnose bias vs variance.",
    "formula": "E[(y - f_hat)^2] = Bias[f_hat]^2 + Var(f_hat) + sigma_epsilon^2",
    "repoRef": "Interview_Questions.md#1-ml-fundamentals--math"
  },
  {
    "day": 24,
    "phase": 2,
    "phaseName": "Phase 2: Classical Machine Learning",
    "category": "Supervised Learning - Instance Based",
    "difficulty": "easy",
    "title": "K-Nearest Neighbors (KNN): Distance Metrics & Curse of Dimensionality",
    "summary": "Understand non-parametric lazy learning. Explore distance metrics (Euclidean, Manhattan, Cosine), choosing optimal k, KD-Trees/Ball-Trees, and how high dimensions degrade distance.",
    "concepts": [
      "Non-Parametric & Lazy Evaluation",
      "Distance Metrics (L1, L2, Minkowski)",
      "Optimal k Choice & Odd k for Ties",
      "KD-Tree & Ball Tree Acceleration",
      "Curse of Dimensionality on Distance"
    ],
    "references": {
      "gfg": {
        "title": "K-Nearest Neighbours Algorithm",
        "url": "https://www.geeksforgeeks.org/k-nearest-neighbours/"
      },
      "tutorialspoint": {
        "title": "KNN Algorithm Tutorial",
        "url": "https://www.tutorialspoint.com/machine_learning_with_python/machine_learning_with_python_knn_algorithm.htm"
      },
      "w3schools": {
        "title": "KNN in Python",
        "url": "https://www.w3schools.com/python/python_ml_knn.asp"
      }
    },
    "practice": "Build a KNearestNeighbors classifier from scratch in NumPy with predict_proba() and test accuracy on the Iris dataset.",
    "formula": "Minkowski Distance: d(x, y) = (sum |x_i - y_i|^p)^(1/p)",
    "repoRef": "Projects.md#2-classic-ml-algorithms--build-from-scratch"
  },
  {
    "day": 25,
    "phase": 2,
    "phaseName": "Phase 2: Classical Machine Learning",
    "category": "Supervised Learning - SVM",
    "difficulty": "medium",
    "title": "Support Vector Machines (SVM): Hyperplanes, Margins & Soft Margin C",
    "summary": "Master maximum margin classification. Understand functional and geometric margins, the primal optimization problem, support vectors, slack variables (xi), and the C parameter.",
    "concepts": [
      "Maximum Margin Hyperplane w^T x + b = 0",
      "Geometric Margin 2 / ||w||",
      "Support Vectors as Essential Points",
      "Slack Variables for Soft Margin",
      "Regularization Parameter C (Tolerance)"
    ],
    "references": {
      "gfg": {
        "title": "Support Vector Machine Algorithm",
        "url": "https://www.geeksforgeeks.org/support-vector-machine-algorithm/"
      },
      "tutorialspoint": {
        "title": "SVM with Python",
        "url": "https://www.tutorialspoint.com/machine_learning_with_python/machine_learning_with_python_support_vector_machine.htm"
      },
      "w3schools": {
        "title": "Support Vector Machines",
        "url": "https://www.w3schools.com/datascience/ds_support_vector_machines.asp"
      }
    },
    "practice": "Train a LinearSVC on separable synthetic 2D data and extract and plot the support vectors along with the margin boundary lines.",
    "formula": "min (1/2)||w||^2 + C * sum xi_i subject to y_i(w^T x_i + b) >= 1 - xi_i",
    "repoRef": "Books.md#2-classic-machine-learning"
  },
  {
    "day": 26,
    "phase": 2,
    "phaseName": "Phase 2: Classical Machine Learning",
    "category": "Supervised Learning - SVM",
    "difficulty": "hard",
    "title": "Kernel SVM: Non-linear Boundaries, RBF Kernel & The Dual Problem",
    "summary": "Project linearly inseparable points into infinite-dimensional Hilbert spaces without explicit mapping. Learn the Kernel Trick, Mercer's Theorem, and RBF gamma tuning.",
    "concepts": [
      "The Dual Formulation of SVM",
      "The Kernel Trick K(x, z) = <phi(x), phi(z)>",
      "Radial Basis Function (RBF / Gaussian Kernel)",
      "Polynomial & Sigmoid Kernels",
      "Hyperparameter Interaction (C and gamma)"
    ],
    "references": {
      "gfg": {
        "title": "Kernel Functions in SVM",
        "url": "https://www.geeksforgeeks.org/major-kernel-functions-in-support-vector-machine-svm/"
      },
      "tutorialspoint": {
        "title": "Scikit-Learn SVM",
        "url": "https://www.tutorialspoint.com/scikit_learn/scikit_learn_support_vector_machines.htm"
      },
      "w3schools": {
        "title": "SVM in Python",
        "url": "https://www.w3schools.com/python/python_ml_svm.asp"
      }
    },
    "practice": "Fit an RBF Kernel SVM to the concentric circles dataset (make_circles) and visualize the non-linear decision boundary contour.",
    "formula": "RBF Kernel: K(x, x') = exp(- gamma * ||x - x'||^2)",
    "repoRef": "CHEATSHEETS.md#4-common-loss-functions"
  },
  {
    "day": 27,
    "phase": 2,
    "phaseName": "Phase 2: Classical Machine Learning",
    "category": "Supervised Learning - Trees",
    "difficulty": "medium",
    "title": "Decision Trees: CART Algorithm, Entropy, Information Gain & Gini Impurity",
    "summary": "Construct recursive binary partition trees. Master Shannon Entropy, Information Gain (ID3), Gini Impurity (CART), continuous feature split thresholds, and regression variance reduction.",
    "concepts": [
      "Recursive Binary Splitting",
      "Shannon Entropy H(S)",
      "Information Gain IG(S, A)",
      "Gini Impurity (Gini Index)",
      "Finding Optimal Numerical Split Thresholds"
    ],
    "references": {
      "gfg": {
        "title": "Decision Tree in Machine Learning",
        "url": "https://www.geeksforgeeks.org/decision-tree/"
      },
      "tutorialspoint": {
        "title": "Decision Tree Algorithm",
        "url": "https://www.tutorialspoint.com/machine_learning_with_python/machine_learning_with_python_decision_tree.htm"
      },
      "w3schools": {
        "title": "Python Decision Tree",
        "url": "https://www.w3schools.com/python/python_ml_decision_tree.asp"
      }
    },
    "practice": "Implement the Gini Impurity calculation function and Best Split finder from scratch for a continuous feature and binary target.",
    "formula": "Gini = 1 - sum_{i=1}^C p_i^2; Entropy = - sum_{i=1}^C p_i log_2(p_i)",
    "repoRef": "Projects.md#2-classic-ml-algorithms--build-from-scratch"
  },
  {
    "day": 28,
    "phase": 2,
    "phaseName": "Phase 2: Classical Machine Learning",
    "category": "Supervised Learning - Trees",
    "difficulty": "medium",
    "title": "Decision Tree Pruning & Mitigating Overfitting",
    "summary": "Prevent decision trees from memorizing leaf-level noise. Understand pre-pruning stopping criteria (max_depth, min_samples_split) and post-pruning via Cost-Complexity Pruning (ccp_alpha).",
    "concepts": [
      "Tree Memorization & Overfitting",
      "Pre-Pruning (max_depth, min_samples_leaf)",
      "Post-Pruning with Cost-Complexity",
      "Cost-Complexity Criterion R_alpha(T)",
      "Feature Importance Calculation"
    ],
    "references": {
      "gfg": {
        "title": "Pruning Decision Trees",
        "url": "https://www.geeksforgeeks.org/pruning-decision-trees/"
      },
      "tutorialspoint": {
        "title": "Decision Tree Tuning",
        "url": "https://www.tutorialspoint.com/scikit_learn/scikit_learn_decision_trees.htm"
      },
      "w3schools": {
        "title": "Decision Tree Optimization",
        "url": "https://www.w3schools.com/datascience/ds_decision_trees.asp"
      }
    },
    "practice": "Use Scikit-Learn's cost_complexity_pruning_path to extract effective alphas, prune a deep tree, and find the alpha maximizing validation accuracy.",
    "formula": "R_alpha(T) = R(T) + alpha * |T| (where |T| is number of terminal nodes)",
    "repoRef": "Books.md#2-classic-machine-learning"
  },
  {
    "day": 29,
    "phase": 2,
    "phaseName": "Phase 2: Classical Machine Learning",
    "category": "Ensemble Methods",
    "difficulty": "medium",
    "title": "Ensemble Learning I: Bagging & Random Forests",
    "summary": "Combine multiple weak learners into a strong ensemble. Learn Bootstrap Aggregating (Bagging), feature subsampling (Random Forests), Out-Of-Bag (OOB) error, and variance reduction.",
    "concepts": [
      "Ensemble Philosophy (Wisdom of Crowds)",
      "Bootstrap Aggregation (Bagging)",
      "Random Feature Subspace (sqrt(D) features)",
      "Out-Of-Bag (OOB) Error as Free Validation",
      "MDI vs Permutation Feature Importance"
    ],
    "references": {
      "gfg": {
        "title": "Random Forest Algorithm",
        "url": "https://www.geeksforgeeks.org/random-forest-algorithm-in-machine-learning/"
      },
      "tutorialspoint": {
        "title": "Random Forest Tutorial",
        "url": "https://www.tutorialspoint.com/machine_learning_with_python/machine_learning_with_python_random_forest.htm"
      },
      "w3schools": {
        "title": "Random Forest in Python",
        "url": "https://www.w3schools.com/python/python_ml_random_forest.asp"
      }
    },
    "practice": "Build a mini RandomForestClassifier in Python: train 20 bootstrap decision trees with random feature subsets and implement majority voting.",
    "formula": "Variance of Ensemble = rho * sigma^2 + ((1 - rho)/B) * sigma^2 (subsampling decorrelates rho)",
    "repoRef": "Projects.md#1-foundational-ml-regression--classification--beginner"
  },
  {
    "day": 30,
    "phase": 2,
    "phaseName": "Phase 2: Classical Machine Learning",
    "category": "Ensemble Methods",
    "difficulty": "hard",
    "title": "Ensemble Learning II: Boosting Foundations & AdaBoost",
    "summary": "Train weak learners sequentially, with each subsequent model focusing on previous mistakes. Master AdaBoost (Adaptive Boosting), sample reweighting, and stump weighting.",
    "concepts": [
      "Sequential Ensemble vs Parallel Ensemble",
      "Decision Stumps (1-split trees)",
      "Sample Weight Update Distribution D_t",
      "Model Weight alpha_t based on Error",
      "Exponential Loss Minimization"
    ],
    "references": {
      "gfg": {
        "title": "AdaBoost Algorithm in Machine Learning",
        "url": "https://www.geeksforgeeks.org/adaboost-algorithm-in-machine-learning/"
      },
      "tutorialspoint": {
        "title": "AdaBoost Tutorial",
        "url": "https://www.tutorialspoint.com/machine_learning/machine_learning_adaboost.htm"
      },
      "w3schools": {
        "title": "AdaBoost in Data Science",
        "url": "https://www.w3schools.com/datascience/ds_adaboost.asp"
      }
    },
    "practice": "Implement AdaBoostClassifier from scratch with 10 decision stumps, calculating stump weight alpha = 0.5 * ln((1-err)/err) and sample weights.",
    "formula": "alpha_t = (1/2) * ln((1 - epsilon_t) / epsilon_t); w_i = w_i * exp(- alpha_t * y_i * h_t(x_i))",
    "repoRef": "CHEATSHEETS.md#6-optimizer-update-rules"
  },
  {
    "day": 31,
    "phase": 2,
    "phaseName": "Phase 2: Classical Machine Learning",
    "category": "Ensemble Methods",
    "difficulty": "hard",
    "title": "Advanced Boosting: Gradient Boosting (GBM), XGBoost & LightGBM",
    "summary": "Master competitive tabular ML. Learn how Gradient Boosting fits pseudo-residuals (negative gradients), 2nd order Taylor expansion in XGBoost, histogram binning in LightGBM, and CatBoost.",
    "concepts": [
      "Gradient Boosting on Pseudo-Residuals",
      "Second-Order Taylor Expansion (Gradients & Hessians)",
      "XGBoost Regularized Objective (gamma, lambda)",
      "LightGBM Histogram Binning & GOSS",
      "CatBoost Categorical Encoding"
    ],
    "references": {
      "gfg": {
        "title": "XGBoost in Machine Learning",
        "url": "https://www.geeksforgeeks.org/xgboost/"
      },
      "tutorialspoint": {
        "title": "XGBoost Tutorial",
        "url": "https://www.tutorialspoint.com/xgboost/index.htm"
      },
      "w3schools": {
        "title": "Gradient Boosting in Data Science",
        "url": "https://www.w3schools.com/datascience/ds_gradient_boosting.asp"
      }
    },
    "practice": "Train an XGBoost model on tabular data, plot feature importances, and perform early stopping based on validation logloss.",
    "formula": "Obj = sum [g_i f_t(x_i) + (1/2) h_i f_t(x_i)^2] + gamma T + (1/2) lambda sum w_j^2",
    "repoRef": "Tools.md#2-classic-machine-learning"
  },
  {
    "day": 32,
    "phase": 2,
    "phaseName": "Phase 2: Classical Machine Learning",
    "category": "Unsupervised Learning",
    "difficulty": "easy",
    "title": "Unsupervised Learning I: K-Means Clustering & The Elbow Method",
    "summary": "Discover hidden groupings without labels. Understand Lloyd's algorithm, Within-Cluster Sum of Squares (Inertia), K-Means++ smart centroid initialization, and Silhouette scores.",
    "concepts": [
      "Centroid-Based Clustering",
      "Lloyd's Algorithm (Assignment & Update)",
      "Within-Cluster Sum of Squares (WCSS / Inertia)",
      "K-Means++ Smart Probabilistic Seeding",
      "Elbow Method & Silhouette Coefficient (-1 to +1)"
    ],
    "references": {
      "gfg": {
        "title": "K-Means Clustering Introduction",
        "url": "https://www.geeksforgeeks.org/k-means-clustering-introduction/"
      },
      "tutorialspoint": {
        "title": "K-Means Clustering Tutorial",
        "url": "https://www.tutorialspoint.com/machine_learning_with_python/machine_learning_with_python_clustering_algorithms_k_means.htm"
      },
      "w3schools": {
        "title": "K-Means in Python",
        "url": "https://www.w3schools.com/python/python_ml_k-means.asp"
      }
    },
    "practice": "Implement KMeansFromScratch in NumPy, iterating between assigning points to nearest centroids and recalculating centroid means.",
    "formula": "WCSS = sum_{k=1}^K sum_{x in S_k} ||x - mu_k||^2; Silhouette s = (b - a) / max(a, b)",
    "repoRef": "Projects.md#2-classic-ml-algorithms--build-from-scratch"
  },
  {
    "day": 33,
    "phase": 2,
    "phaseName": "Phase 2: Classical Machine Learning",
    "category": "Unsupervised Learning",
    "difficulty": "medium",
    "title": "Unsupervised Learning II: Hierarchical Clustering & DBSCAN",
    "summary": "Overcome K-Means spherical limitations. Learn Agglomerative Hierarchical clustering, linkage criteria (Ward, Complete), dendrograms, and Density-Based DBSCAN for arbitrary shapes.",
    "concepts": [
      "Agglomerative (Bottom-up) Clustering",
      "Linkage Criteria (Single, Complete, Average, Ward)",
      "Dendrograms & Distance Cutting",
      "DBSCAN: Core Points, Border Points & Noise",
      "Epsilon Radius (eps) and min_samples"
    ],
    "references": {
      "gfg": {
        "title": "DBSCAN Clustering in ML",
        "url": "https://www.geeksforgeeks.org/dbscan-clustering-in-ml-density-based-clustering/"
      },
      "tutorialspoint": {
        "title": "Hierarchical Clustering Tutorial",
        "url": "https://www.tutorialspoint.com/machine_learning_with_python/machine_learning_with_python_clustering_algorithms_hierarchical.htm"
      },
      "w3schools": {
        "title": "Hierarchical Clustering in Python",
        "url": "https://www.w3schools.com/python/python_ml_hierarchical_clustering.asp"
      }
    },
    "practice": "Run DBSCAN on non-convex moon-shaped synthetic data (make_moons) where K-Means fails, and plot discovered clusters and noise points.",
    "formula": "Core Point condition: |N_eps(p)| >= min_samples; Point q is density-reachable from p",
    "repoRef": "Datasets.md#1-beginner-tabular--classic-ml"
  },
  {
    "day": 34,
    "phase": 2,
    "phaseName": "Phase 2: Classical Machine Learning",
    "category": "Dimensionality Reduction",
    "difficulty": "medium",
    "title": "Dimensionality Reduction: Principal Component Analysis (PCA) & SVD",
    "summary": "Compress high-dimensional feature spaces while preserving maximal variance. Learn covariance matrix eigendecomposition, Singular Value Decomposition (SVD), and scree plots.",
    "concepts": [
      "Projection onto Maximal Variance Axes",
      "Centering Data (Zero-Mean)",
      "Eigendecomposition of Covariance Matrix",
      "Singular Value Decomposition (X = U Sigma V^T)",
      "Explained Variance Ratio & Scree Plot"
    ],
    "references": {
      "gfg": {
        "title": "Principal Component Analysis (PCA)",
        "url": "https://www.geeksforgeeks.org/principal-component-analysis-pca/"
      },
      "tutorialspoint": {
        "title": "PCA with Python",
        "url": "https://www.tutorialspoint.com/machine_learning_with_python/machine_learning_with_python_pca.htm"
      },
      "w3schools": {
        "title": "PCA in Data Science",
        "url": "https://www.w3schools.com/datascience/ds_pca.asp"
      }
    },
    "practice": "Implement PCAFromScratch using np.linalg.svd: center features, compute principal components, and project 4D Iris dataset to 2D.",
    "formula": "Explained Variance_k = lambda_k / sum_{j=1}^D lambda_j; X_proj = X V_k",
    "repoRef": "CHEATSHEETS.md#1-linear-algebra"
  },
  {
    "day": 35,
    "phase": 2,
    "phaseName": "Phase 2: Classical Machine Learning",
    "category": "Phase 2 Milestone",
    "difficulty": "medium",
    "title": "Phase 2 Milestone: End-to-End Scikit-Learn Pipeline & Hyperparameter Tuning",
    "summary": "Consolidate Phase 2. Build a full ML workflow using Pipeline and ColumnTransformer, tune hyperparameters with GridSearchCV/RandomizedSearchCV, and generate a final classification report.",
    "concepts": [
      "Sklearn Pipeline Architecture",
      "ColumnTransformer (Heterogeneous Data)",
      "GridSearchCV vs RandomizedSearchCV",
      "Cross-Validation Scoring Strategy",
      "Model Serialization (joblib / pickle)"
    ],
    "references": {
      "gfg": {
        "title": "Hyperparameter Tuning in Python",
        "url": "https://www.geeksforgeeks.org/hyperparameter-tuning/"
      },
      "tutorialspoint": {
        "title": "Scikit-Learn Grid Search",
        "url": "https://www.tutorialspoint.com/scikit_learn/scikit_learn_grid_search.htm"
      },
      "w3schools": {
        "title": "Grid Search in Python",
        "url": "https://www.w3schools.com/python/python_ml_grid_search.asp"
      }
    },
    "practice": "Build a Pipeline with standard scaler, PCA, and Random Forest; tune n_estimators and max_depth with 5-fold CV; save trained model to disk.",
    "formula": "Pipeline: Data -> Imputer -> Scaler -> OneHot -> Classifier -> Score",
    "repoRef": "Projects.md#1-foundational-ml-regression--classification--beginner"
  },
  {
    "day": 36,
    "phase": 3,
    "phaseName": "Phase 3: Deep Learning Core & PyTorch",
    "category": "Neural Network Fundamentals",
    "difficulty": "easy",
    "title": "Biological to Artificial Neurons: The Perceptron & MLP",
    "summary": "Bridge biological synapses to computational graphs. Understand Frank Rosenblatt's Perceptron, linear separability, the XOR problem, and Multi-Layer Perceptrons (MLPs).",
    "concepts": [
      "McCulloch-Pitts Neuron & Rosenblatt Perceptron",
      "Weights, Bias & Linear Sum z = w^T x + b",
      "The XOR Failure of Single Perceptrons",
      "Multi-Layer Perceptron (Hidden Layers)",
      "Universal Approximation Theorem"
    ],
    "references": {
      "gfg": {
        "title": "Single Layer Perceptron in Python",
        "url": "https://www.geeksforgeeks.org/single-layer-perceptron-in-tensorflow/"
      },
      "tutorialspoint": {
        "title": "Artificial Neural Network - Perceptron",
        "url": "https://www.tutorialspoint.com/artificial_neural_network/artificial_neural_network_perceptron.htm"
      },
      "w3schools": {
        "title": "AI Perceptrons",
        "url": "https://www.w3schools.com/ai/ai_perceptrons.asp"
      }
    },
    "practice": "Code a single-layer Perceptron learning algorithm that successfully solves the logical AND gate and proves failure on XOR.",
    "formula": "y = step(w^T x + b); w_i = w_i + eta * (y_true - y_pred) * x_i",
    "repoRef": "Projects.md#5-deep-learning-internals--build-from-scratch"
  },
  {
    "day": 37,
    "phase": 3,
    "phaseName": "Phase 3: Deep Learning Core & PyTorch",
    "category": "Activation Functions",
    "difficulty": "easy",
    "title": "Activation Functions: Sigmoid, Tanh, ReLU, Leaky ReLU, GELU & Swish",
    "summary": "Introduce non-linearity so networks can learn arbitrary complex representations. Master saturation issues, vanishing gradients in Sigmoid/Tanh, Dying ReLU, and modern smooth GELU/Swish.",
    "concepts": [
      "Non-Linearity Requirement",
      "Sigmoid & Tanh Saturation",
      "ReLU & The Dying ReLU Problem",
      "Leaky ReLU & Parametric ReLU (PReLU)",
      "GELU (Gaussian Error Linear Unit) & Swish"
    ],
    "references": {
      "gfg": {
        "title": "Activation Functions in Neural Networks",
        "url": "https://www.geeksforgeeks.org/activation-functions-neural-networks/"
      },
      "tutorialspoint": {
        "title": "ANN Activation Functions",
        "url": "https://www.tutorialspoint.com/artificial_neural_network/artificial_neural_network_activation_functions.htm"
      },
      "w3schools": {
        "title": "Neural Networks Activation",
        "url": "https://www.w3schools.com/ai/ai_neural_networks.asp"
      }
    },
    "practice": "Plot all 6 major activation functions along with their first derivatives over [-5, 5] to observe gradient saturation behavior.",
    "formula": "GELU(x) approx 0.5x(1 + tanh(sqrt(2/pi)(x + 0.044715x^3))); ReLU(x) = max(0, x)",
    "repoRef": "CHEATSHEETS.md#5-activation-functions--derivatives"
  },
  {
    "day": 38,
    "phase": 3,
    "phaseName": "Phase 3: Deep Learning Core & PyTorch",
    "category": "Forward Propagation & Loss",
    "difficulty": "medium",
    "title": "Forward Propagation & Computational Graphs",
    "summary": "Trace inputs forward through layered transformations. Understand matrix forward propagation, layer caching for backward pass, and loss computation across mini-batches.",
    "concepts": [
      "Layer Transformation Z^{[l]} = W^{[l]} A^{[l-1]} + b^{[l]}",
      "Activation Application A^{[l]} = g(Z^{[l]})",
      "Computational Graph Directed Acyclic Graph (DAG)",
      "Loss Function Evaluation (MSE vs Cross-Entropy)",
      "Batch Forward Vectorization"
    ],
    "references": {
      "gfg": {
        "title": "Computation Graphs in Deep Learning",
        "url": "https://www.geeksforgeeks.org/computation-graphs-in-deep-learning/"
      },
      "tutorialspoint": {
        "title": "Deep Learning Computational Graphs",
        "url": "https://www.tutorialspoint.com/deep_learning/deep_learning_computational_graphs.htm"
      },
      "w3schools": {
        "title": "Loss Functions in AI",
        "url": "https://www.w3schools.com/ai/ai_loss_functions.asp"
      }
    },
    "practice": "Implement a pure NumPy forward pass for a 3-layer neural network (Input 4 -> Hidden 8 -> Hidden 8 -> Output 3) returning output probabilities and activations cache.",
    "formula": "Z^{[1]} = W^{[1]} X + b^{[1]}; A^{[1]} = relu(Z^{[1]}); Z^{[2]} = W^{[2]} A^{[1]} + b^{[2]}; Y_hat = softmax(Z^{[2]})",
    "repoRef": "Projects.md#5-deep-learning-internals--build-from-scratch"
  },
  {
    "day": 39,
    "phase": 3,
    "phaseName": "Phase 3: Deep Learning Core & PyTorch",
    "category": "Backpropagation",
    "difficulty": "hard",
    "title": "Backpropagation from Scratch: Matrix Calculus & Gradient Derivation",
    "summary": "Derive the fundamental engine of deep learning. Apply the multivariate Chain Rule backward through layers, deriving dW, db, and dZ, and verifying with numerical gradient checking.",
    "concepts": [
      "Backward Chain Rule Propagation",
      "Error Delta delta^{[l]} = del L / del Z^{[l]}",
      "Weight Gradient dW^{[l]} = (1/m) delta^{[l]} (A^{[l-1]})^T",
      "Bias Gradient db^{[l]} = (1/m) sum delta^{[l]}",
      "Numerical Gradient Checking (GradCheck)"
    ],
    "references": {
      "gfg": {
        "title": "Backpropagation in Neural Network",
        "url": "https://www.geeksforgeeks.org/backpropagation-in-neural-network/"
      },
      "tutorialspoint": {
        "title": "ANN Backpropagation",
        "url": "https://www.tutorialspoint.com/artificial_neural_network/artificial_neural_network_backpropagation.htm"
      },
      "w3schools": {
        "title": "Backpropagation in AI",
        "url": "https://www.w3schools.com/ai/ai_backpropagation.asp"
      }
    },
    "practice": "Build a complete 2-layer NeuralNetwork class from scratch in NumPy with forward pass, backward pass, and training loop on the planar moon dataset.",
    "formula": "dZ^{[2]} = A^{[2]} - Y; dW^{[2]} = (1/m) dZ^{[2]} (A^{[1]})^T; dZ^{[1]} = ((W^{[2]})^T dZ^{[2]}) * g'(Z^{[1]})",
    "repoRef": "Projects.md#5-deep-learning-internals--build-from-scratch"
  },
  {
    "day": 40,
    "phase": 3,
    "phaseName": "Phase 3: Deep Learning Core & PyTorch",
    "category": "PyTorch Framework",
    "difficulty": "easy",
    "title": "PyTorch Essentials: Tensors, Autograd & Building Custom nn.Module",
    "summary": "Transition from raw NumPy to industry-standard PyTorch. Learn Tensor operations, moving to CUDA/MPS devices, dynamic computation graphs via torch.autograd, and subclassing nn.Module.",
    "concepts": [
      "torch.Tensor & GPU Device Placement",
      "Autograd: requires_grad=True & tensor.backward()",
      "Subclassing nn.Module & Defining forward()",
      "torch.utils.data.Dataset & DataLoader",
      "Standard Training Epoch Loop (zero_grad, loss.backward, step)"
    ],
    "references": {
      "gfg": {
        "title": "Getting Started with PyTorch",
        "url": "https://www.geeksforgeeks.org/getting-started-with-pytorch/"
      },
      "tutorialspoint": {
        "title": "PyTorch Tutorial",
        "url": "https://www.tutorialspoint.com/pytorch/index.htm"
      },
      "w3schools": {
        "title": "PyTorch in AI",
        "url": "https://www.w3schools.com/ai/ai_pytorch.asp"
      }
    },
    "practice": "Define a custom PyTorch MLP classifier subclassing nn.Module, wrap dummy data in a DataLoader with batch size 32, and run 10 training epochs.",
    "formula": "loss.backward() accumulates gradients into param.grad; optimizer.step() updates weights",
    "repoRef": "Tools.md#3-deep-learning-frameworks"
  },
  {
    "day": 41,
    "phase": 3,
    "phaseName": "Phase 3: Deep Learning Core & PyTorch",
    "category": "Optimization Algorithms",
    "difficulty": "medium",
    "title": "Advanced Optimizers: SGD with Momentum, NAG, AdaGrad & RMSProp",
    "summary": "Accelerate convergence across pathological ravines. Learn exponentially weighted moving averages for Momentum, Nesterov look-ahead (NAG), per-parameter decay in AdaGrad, and RMSProp.",
    "concepts": [
      "Exponential Moving Averages (EMA)",
      "SGD with Momentum (Velocity v)",
      "Nesterov Accelerated Gradient (NAG)",
      "AdaGrad Sum of Squared Gradients",
      "RMSProp Exponential Decay of Squared Gradients"
    ],
    "references": {
      "gfg": {
        "title": "Optimizers in Deep Learning",
        "url": "https://www.geeksforgeeks.org/optimizers-in-deep-learning/"
      },
      "tutorialspoint": {
        "title": "Deep Learning Optimization Algorithms",
        "url": "https://www.tutorialspoint.com/deep_learning/deep_learning_optimization_algorithms.htm"
      },
      "w3schools": {
        "title": "AI Optimizers",
        "url": "https://www.w3schools.com/ai/ai_optimizers.asp"
      }
    },
    "practice": "Implement RMSProp update logic from scratch: s = beta * s + (1 - beta) * g^2; w = w - eta * g / (sqrt(s) + eps).",
    "formula": "RMSProp: s_t = beta s_{t-1} + (1-beta) g_t^2; theta_t = theta_{t-1} - (eta / sqrt(s_t + epsilon)) g_t",
    "repoRef": "CHEATSHEETS.md#6-optimizer-update-rules"
  },
  {
    "day": 42,
    "phase": 3,
    "phaseName": "Phase 3: Deep Learning Core & PyTorch",
    "category": "Optimization Algorithms",
    "difficulty": "medium",
    "title": "The Adam Optimizer & AdamW: Adaptive Moments & Decoupled Weight Decay",
    "summary": "Master the default optimizer of modern AI. Learn Adam's combination of first moment (momentum) and second moment (RMSprop), bias correction, and why AdamW fixes L2 weight decay.",
    "concepts": [
      "First Moment Vector m_t (Mean)",
      "Second Moment Vector v_t (Uncentered Variance)",
      "Bias Correction Terms (1 - beta_1^t) & (1 - beta_2^t)",
      "L2 Regularization vs Weight Decay Flaw in Adam",
      "AdamW Decoupled Weight Decay Solution"
    ],
    "references": {
      "gfg": {
        "title": "Adam Optimizer in Deep Learning",
        "url": "https://www.geeksforgeeks.org/adam-optimizer/"
      },
      "tutorialspoint": {
        "title": "PyTorch Optimizers",
        "url": "https://www.tutorialspoint.com/pytorch/pytorch_optimizers.htm"
      },
      "w3schools": {
        "title": "Deep Learning Data Science",
        "url": "https://www.w3schools.com/datascience/ds_deep_learning.asp"
      }
    },
    "practice": "Implement the complete Adam optimizer update rule from scratch in Python with bias correction and verify against torch.optim.Adam.",
    "formula": "m_hat = m_t / (1 - beta_1^t); v_hat = v_t / (1 - beta_2^t); theta = theta - eta * m_hat / (sqrt(v_hat) + eps) - eta * lambda * theta (AdamW)",
    "repoRef": "CHEATSHEETS.md#6-optimizer-update-rules"
  },
  {
    "day": 43,
    "phase": 3,
    "phaseName": "Phase 3: Deep Learning Core & PyTorch",
    "category": "Initialization & Training Stability",
    "difficulty": "medium",
    "title": "Weight Initialization Strategies: Xavier/Glorot & He/Kaiming",
    "summary": "Prevent activations and gradients from exploding or vanishing at step 0. Derive variance preservation across layers: Xavier/Glorot for Tanh/Sigmoid and He/Kaiming for ReLU networks.",
    "concepts": [
      "The Vanishing/Exploding Variance Problem",
      "Zero Initialization Symmetry Trap",
      "Xavier/Glorot Initialization (Var = 2 / (n_in + n_out))",
      "He/Kaiming Normal Initialization (Var = 2 / n_in)",
      "PyTorch torch.nn.init functions"
    ],
    "references": {
      "gfg": {
        "title": "Weight Initialization Techniques in Neural Networks",
        "url": "https://www.geeksforgeeks.org/weight-initialization-techniques-in-neural-networks/"
      },
      "tutorialspoint": {
        "title": "Deep Learning Weight Initialization",
        "url": "https://www.tutorialspoint.com/deep_learning/deep_learning_weight_initialization.htm"
      },
      "w3schools": {
        "title": "Neural Networks Math",
        "url": "https://www.w3schools.com/ai/ai_neural_networks.asp"
      }
    },
    "practice": "Simulate passing random Gaussian noise through 10 linear layers with (a) std=1.0, (b) Xavier init, and (c) He init, observing activation collapse.",
    "formula": "He Normal: W ~ N(0, 2 / n_in); Xavier Uniform: W ~ U(-sqrt(6/(n_in + n_out)), +sqrt(6/(n_in + n_out)))",
    "repoRef": "CHEATSHEETS.md#5-activation-functions--derivatives"
  },
  {
    "day": 44,
    "phase": 3,
    "phaseName": "Phase 3: Deep Learning Core & PyTorch",
    "category": "Regularization in Deep Learning",
    "difficulty": "easy",
    "title": "Deep Regularization: Dropout, Weight Decay & Early Stopping",
    "summary": "Ensure deep models generalize. Master inverted Dropout (randomly zeroing neuron activations with scaling), L2 weight decay, Early Stopping via validation monitoring, and Label Smoothing.",
    "concepts": [
      "Inverted Dropout (Scaling by 1 / (1 - p))",
      "Train vs Eval Mode (model.train() vs model.eval())",
      "L2 Weight Decay in PyTorch",
      "Early Stopping with Patience & Best Weights Restore",
      "Label Smoothing Regularization"
    ],
    "references": {
      "gfg": {
        "title": "Dropout in Neural Networks",
        "url": "https://www.geeksforgeeks.org/dropout-in-neural-networks/"
      },
      "tutorialspoint": {
        "title": "Deep Learning Regularization",
        "url": "https://www.tutorialspoint.com/deep_learning/deep_learning_regularization.htm"
      },
      "w3schools": {
        "title": "AI Regularization Techniques",
        "url": "https://www.w3schools.com/ai/ai_regularization.asp"
      }
    },
    "practice": "Implement Inverted Dropout in NumPy: during training mask activations with Bern(1-p)/(1-p), during inference return unscaled activations.",
    "formula": "mask = (np.random.rand(*A.shape) > p) / (1.0 - p); A_drop = A * mask",
    "repoRef": "Books.md#3-deep-learning-foundations"
  },
  {
    "day": 45,
    "phase": 3,
    "phaseName": "Phase 3: Deep Learning Core & PyTorch",
    "category": "Normalization Layers",
    "difficulty": "hard",
    "title": "Normalization Layers: Batch Normalization & Layer Normalization",
    "summary": "Stabilize internal covariate shift. Master Batch Normalization (normalizing across batch axis B) and Layer Normalization (normalizing across feature channels C, essential for Transformers).",
    "concepts": [
      "Internal Covariate Shift Phenomenon",
      "Batch Normalization (BatchNorm1d, BatchNorm2d)",
      "Learnable Scale (gamma) and Shift (beta)",
      "Running Mean & Running Variance for Inference",
      "Layer Normalization (LayerNorm across feature dimension)"
    ],
    "references": {
      "gfg": {
        "title": "Batch Normalization in Deep Learning",
        "url": "https://www.geeksforgeeks.org/batch-normalization-in-deep-learning/"
      },
      "tutorialspoint": {
        "title": "Deep Learning Batch Normalization",
        "url": "https://www.tutorialspoint.com/deep_learning/deep_learning_batch_normalization.htm"
      },
      "w3schools": {
        "title": "Deep Learning Architecture",
        "url": "https://www.w3schools.com/datascience/ds_deep_learning.asp"
      }
    },
    "practice": "Implement LayerNorm from scratch in PyTorch without using nn.LayerNorm and verify match on a tensor [B, S, D].",
    "formula": "x_hat = (x - mu) / sqrt(sigma^2 + eps); y = gamma * x_hat + beta",
    "repoRef": "CHEATSHEETS.md#7-transformer--attention-formulas"
  },
  {
    "day": 46,
    "phase": 3,
    "phaseName": "Phase 3: Deep Learning Core & PyTorch",
    "category": "Gradient Dynamics",
    "difficulty": "medium",
    "title": "Gradient Dynamics: Gradient Clipping & Residual Connections",
    "summary": "Control runaway gradients and train 100+ layer deep networks. Master L2 norm Gradient Clipping (torch.nn.utils.clip_grad_norm_) and Residual identity skip connections.",
    "concepts": [
      "Exploding Gradients & NaN Losses",
      "Gradient Norm vs Value Clipping",
      "Vanishing Gradients in Ultra-Deep Nets",
      "Residual Learning Formulation F(x) + x",
      "Gradient Highway Intuition"
    ],
    "references": {
      "gfg": {
        "title": "Vanishing and Exploding Gradient Problems",
        "url": "https://www.geeksforgeeks.org/vanishing-and-exploding-gradient-problems/"
      },
      "tutorialspoint": {
        "title": "Deep Learning Vanishing Gradient",
        "url": "https://www.tutorialspoint.com/deep_learning/deep_learning_vanishing_gradient.htm"
      },
      "w3schools": {
        "title": "Deep Learning Essentials",
        "url": "https://www.w3schools.com/ai/ai_deep_learning.asp"
      }
    },
    "practice": "Write a gradient clipping function: compute global gradient L2 norm, and scale all parameter gradients down if total norm exceeds max_norm=1.0.",
    "formula": "g = g * min(1, max_norm / ||g||_2); Residual block output: y = F(x, {W_i}) + x",
    "repoRef": "ResearchPaper.md#2-deep-cnn-architectures"
  },
  {
    "day": 47,
    "phase": 3,
    "phaseName": "Phase 3: Deep Learning Core & PyTorch",
    "category": "Computer Vision - CNNs",
    "difficulty": "medium",
    "title": "Convolutional Neural Networks (CNNs): 2D Convolutions & Strides",
    "summary": "Process grid-like spatial data. Learn how shared kernel weights enforce translation invariance and spatial locality, and calculate output spatial dimensions given stride and padding.",
    "concepts": [
      "Cross-Correlation vs Convolution",
      "Kernel/Filter Weights & Feature Maps",
      "Valid vs Same Padding",
      "Stride Parameter (Downsampling)",
      "Spatial Output Dimension Formula"
    ],
    "references": {
      "gfg": {
        "title": "Introduction to Convolution Neural Network",
        "url": "https://www.geeksforgeeks.org/introduction-convolution-neural-network/"
      },
      "tutorialspoint": {
        "title": "Deep Learning CNN Tutorial",
        "url": "https://www.tutorialspoint.com/deep_learning/deep_learning_convolutional_neural_networks.htm"
      },
      "w3schools": {
        "title": "CNN in AI",
        "url": "https://www.w3schools.com/ai/ai_cnn.asp"
      }
    },
    "practice": "Implement a 2D convolution forward pass in pure NumPy: take an input matrix (H x W) and kernel (K x K) and compute the convolved feature map.",
    "formula": "Output Dimension: O = floor((W - K + 2P) / S) + 1",
    "repoRef": "CHEATSHEETS.md#3-calculus-essentials"
  },
  {
    "day": 48,
    "phase": 3,
    "phaseName": "Phase 3: Deep Learning Core & PyTorch",
    "category": "Computer Vision - CNNs",
    "difficulty": "easy",
    "title": "CNN Pooling Layers, Feature Maps & Receptive Fields",
    "summary": "Downsample feature representations. Master MaxPooling, AveragePooling, GlobalAveragePooling, and compute the theoretical Receptive Field of deeper convolutional layers.",
    "concepts": [
      "MaxPooling (Translation Robustness)",
      "Average Pooling & Global Average Pooling (GAP)",
      "Eliminating Heavy Fully-Connected Layers via GAP",
      "Receptive Field Expansion Across Depth",
      "Channel Dimension Growth vs Spatial Reduction"
    ],
    "references": {
      "gfg": {
        "title": "CNN Introduction to Pooling Layer",
        "url": "https://www.geeksforgeeks.org/cnn-introduction-to-pooling-layer/"
      },
      "tutorialspoint": {
        "title": "PyTorch CNN Tutorial",
        "url": "https://www.tutorialspoint.com/pytorch/pytorch_convolutional_neural_network.htm"
      },
      "w3schools": {
        "title": "Image Processing in AI",
        "url": "https://www.w3schools.com/ai/ai_image_processing.asp"
      }
    },
    "practice": "Build a MaxPooling2D function from scratch in Python that extracts 2x2 non-overlapping spatial patches and returns the max value.",
    "formula": "Receptive Field: r_out = r_in + (k - 1) * j_in",
    "repoRef": "Projects.md#3-computer-vision"
  },
  {
    "day": 49,
    "phase": 3,
    "phaseName": "Phase 3: Deep Learning Core & PyTorch",
    "category": "Computer Vision - CNNs",
    "difficulty": "medium",
    "title": "Classic CNN Architectures: LeNet-5, AlexNet & VGG-16",
    "summary": "Study the milestone architectures that ignited the deep learning revolution. Analyze LeNet-5 (1998), AlexNet (2012 ImageNet winner), and VGG's small 3x3 stacked kernels philosophy.",
    "concepts": [
      "LeNet-5 Digit Recognition Architecture",
      "AlexNet (ReLU, Dropout, GPU Parallelism)",
      "VGG Principle (Stacking 3x3 Convolutions)",
      "Effective Receptive Field of Two 3x3 = One 5x5",
      "Parameter Count Comparison across Architectures"
    ],
    "references": {
      "gfg": {
        "title": "VGG-16 CNN Model Architecture",
        "url": "https://www.geeksforgeeks.org/vgg-16-cnn-model/"
      },
      "tutorialspoint": {
        "title": "Popular CNN Architectures",
        "url": "https://www.tutorialspoint.com/deep_learning/deep_learning_popular_cnn_architectures.htm"
      },
      "w3schools": {
        "title": "Computer Vision in AI",
        "url": "https://www.w3schools.com/ai/ai_computer_vision.asp"
      }
    },
    "practice": "Implement a simplified VGG-style PyTorch module with two ConvBlock(3x3)->ReLU->MaxPool blocks followed by GlobalAvgPool and a Linear classifier.",
    "formula": "Two 3x3 convs have 2*(3^2 * C^2) = 18C^2 params vs one 5x5 conv having 25C^2 params (28% savings)",
    "repoRef": "ResearchPaper.md#2-deep-cnn-architectures"
  },
  {
    "day": 50,
    "phase": 3,
    "phaseName": "Phase 3: Deep Learning Core & PyTorch",
    "category": "Computer Vision - CNNs",
    "difficulty": "hard",
    "title": "Modern CNN Architectures: ResNet & DenseNet",
    "summary": "Scale networks to 152+ layers without degradation. Master Residual Networks (ResNet) with BasicBlock and Bottleneck layers (1x1->3x3->1x1), and DenseNet feature reuse concatenation.",
    "concepts": [
      "Degradation Problem in Very Deep Nets",
      "ResNet Skip/Identity Connections",
      "Bottleneck Architecture (1x1 Dimensionality Reduction)",
      "DenseNet Dense Blocks & Feature Concatenation",
      "PyTorch torchvision.models.resnet50"
    ],
    "references": {
      "gfg": {
        "title": "Residual Networks (ResNet) Deep Learning",
        "url": "https://www.geeksforgeeks.org/residual-networks-resnet-deep-learning/"
      },
      "tutorialspoint": {
        "title": "PyTorch ResNet Tutorial",
        "url": "https://www.tutorialspoint.com/pytorch/pytorch_resnet.htm"
      },
      "w3schools": {
        "title": "ResNet in AI",
        "url": "https://www.w3schools.com/ai/ai_resnet.asp"
      }
    },
    "practice": "Code a custom ResidualBlock in PyTorch containing two 3x3 conv layers with BatchNorm, handling stride=2 spatial downsampling in the shortcut path.",
    "formula": "H(x) = F(x) + x; If dimensions change: H(x) = F(x) + W_s x (1x1 conv shortcut)",
    "repoRef": "ResearchPaper.md#2-deep-cnn-architectures"
  },
  {
    "day": 51,
    "phase": 3,
    "phaseName": "Phase 3: Deep Learning Core & PyTorch",
    "category": "Transfer Learning",
    "difficulty": "easy",
    "title": "Transfer Learning & Fine-Tuning Vision Models",
    "summary": "Leverage representations trained on 14M+ ImageNet images. Learn Feature Extraction (freezing backbone weights and replacing classifier head) vs End-to-End Fine-Tuning with low learning rate.",
    "concepts": [
      "Transfer Learning Principles",
      "Feature Extraction (Freezing param.requires_grad = False)",
      "Head Replacement (model.fc = nn.Linear(in_features, num_classes))",
      "Differential Learning Rates (Backbone vs Head)",
      "ImageNet Preprocessing & Normalization Statistics"
    ],
    "references": {
      "gfg": {
        "title": "Transfer Learning Guide",
        "url": "https://www.geeksforgeeks.org/transfer-learning/"
      },
      "tutorialspoint": {
        "title": "Deep Learning Transfer Learning",
        "url": "https://www.tutorialspoint.com/deep_learning/deep_learning_transfer_learning.htm"
      },
      "w3schools": {
        "title": "Transfer Learning in AI",
        "url": "https://www.w3schools.com/ai/ai_transfer_learning.asp"
      }
    },
    "practice": "Load a pretrained torchvision ResNet-18, freeze all layers except layer4 and fc, and set up AdamW with lr=1e-4 for the head and lr=1e-5 for layer4.",
    "formula": "ImageNet Normalization: mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]",
    "repoRef": "Projects.md#3-computer-vision"
  },
  {
    "day": 52,
    "phase": 3,
    "phaseName": "Phase 3: Deep Learning Core & PyTorch",
    "category": "Sequence Models",
    "difficulty": "medium",
    "title": "Sequence Models I: Recurrent Neural Networks (RNN) & BPTT",
    "summary": "Process ordered sequential data (text, time-series, audio). Learn hidden state recurrence, unrolling in time, Backpropagation Through Time (BPTT), and vanishing memory limits.",
    "concepts": [
      "Recurrent Hidden State h_t = tanh(W_hh h_{t-1} + W_xh x_t + b)",
      "Unrolling RNN Computations in Time",
      "Backpropagation Through Time (BPTT)",
      "Vanishing Gradient in Long Sequences",
      "Truncated BPTT"
    ],
    "references": {
      "gfg": {
        "title": "Introduction to Recurrent Neural Network",
        "url": "https://www.geeksforgeeks.org/introduction-to-recurrent-neural-network/"
      },
      "tutorialspoint": {
        "title": "Recurrent Neural Networks Tutorial",
        "url": "https://www.tutorialspoint.com/deep_learning/deep_learning_recurrent_neural_networks.htm"
      },
      "w3schools": {
        "title": "Recurrent Neural Networks",
        "url": "https://www.w3schools.com/ai/ai_rnn.asp"
      }
    },
    "practice": "Implement a simple RNN step function from scratch in NumPy: take x_t and h_{t-1}, compute new h_t, and output y_t.",
    "formula": "h_t = tanh(W_{hh} h_{t-1} + W_{xh} x_t + b_h); y_t = softmax(W_{hy} h_t + b_y)",
    "repoRef": "Books.md#3-deep-learning-foundations"
  },
  {
    "day": 53,
    "phase": 3,
    "phaseName": "Phase 3: Deep Learning Core & PyTorch",
    "category": "Sequence Models",
    "difficulty": "hard",
    "title": "Sequence Models II: Long Short-Term Memory (LSTM) Networks",
    "summary": "Conquer the vanishing gradient in sequential data. Master the constant error carousel (Cell State C_t) and the three regulatory gates: Forget Gate (f_t), Input Gate (i_t), and Output Gate (o_t).",
    "concepts": [
      "The Cell State Highway C_t",
      "Forget Gate f_t = sigma(W_f [h_{t-1}, x_t] + b_f)",
      "Input Gate i_t & Candidate State C_tilde_t",
      "Cell State Additive Update C_t = f_t * C_{t-1} + i_t * C_tilde_t",
      "Output Gate o_t & Hidden State h_t = o_t * tanh(C_t)"
    ],
    "references": {
      "gfg": {
        "title": "Introduction to Long Short-Term Memory (LSTM)",
        "url": "https://www.geeksforgeeks.org/deep-learning-introduction-to-long-short-term-memory/"
      },
      "tutorialspoint": {
        "title": "LSTM Networks Tutorial",
        "url": "https://www.tutorialspoint.com/deep_learning/deep_learning_lstm_networks.htm"
      },
      "w3schools": {
        "title": "LSTM in AI",
        "url": "https://www.w3schools.com/ai/ai_lstm.asp"
      }
    },
    "practice": "Implement a forward step of an LSTM cell from scratch in NumPy verifying gating equations on random inputs.",
    "formula": "C_t = f_t * C_{t-1} + i_t * C_tilde_t; h_t = o_t * tanh(C_t)",
    "repoRef": "ResearchPaper.md#3-sequence-models"
  },
  {
    "day": 54,
    "phase": 3,
    "phaseName": "Phase 3: Deep Learning Core & PyTorch",
    "category": "Sequence Models",
    "difficulty": "medium",
    "title": "Sequence Models III: Gated Recurrent Units (GRU) & Bidirectional RNNs",
    "summary": "Streamline sequential gates. Learn the GRU architecture merging cell state and hidden state via Reset (r_t) and Update (z_t) gates, and combine forward and backward contexts in Bidirectional RNNs.",
    "concepts": [
      "Gated Recurrent Unit (GRU) Simplification",
      "Update Gate z_t (Balancing Old & New)",
      "Reset Gate r_t (Discarding Irrelevant History)",
      "Bidirectional RNN (Forward h_t_fwd + Backward h_t_bwd)",
      "Multi-Layer Stacked RNNs"
    ],
    "references": {
      "gfg": {
        "title": "Gated Recurrent Unit (GRU) Networks",
        "url": "https://www.geeksforgeeks.org/gated-recurrent-unit-networks/"
      },
      "tutorialspoint": {
        "title": "PyTorch Recurrent Networks",
        "url": "https://www.tutorialspoint.com/pytorch/pytorch_recurrent_neural_network.htm"
      },
      "w3schools": {
        "title": "Sequential AI Models",
        "url": "https://www.w3schools.com/ai/ai_recurrent_neural_networks.asp"
      }
    },
    "practice": "Build a text sentiment classifier in PyTorch using nn.Embedding -> nn.GRU(bidirectional=True) -> nn.Linear.",
    "formula": "h_t = (1 - z_t) * h_{t-1} + z_t * h_tilde_t",
    "repoRef": "Projects.md#4-natural-language-processing"
  },
  {
    "day": 55,
    "phase": 3,
    "phaseName": "Phase 3: Deep Learning Core & PyTorch",
    "category": "Phase 3 Milestone",
    "difficulty": "hard",
    "title": "Phase 3 Milestone: Train an End-to-End Vision Classifier in PyTorch",
    "summary": "Consolidate Phase 3. Build a complete PyTorch deep learning pipeline on CIFAR-10 with data augmentation, learning rate scheduler (CosineAnnealingLR), checkpointing, and metric tracking.",
    "concepts": [
      "Torchvision Transforms & Augmentation",
      "Learning Rate Schedulers (CosineAnnealingLR)",
      "Training & Validation Checkpointing Loop",
      "Confusion Matrix on Test Set",
      "Phase 3 Deep Learning Audit"
    ],
    "references": {
      "gfg": {
        "title": "CIFAR-10 Image Classification in PyTorch",
        "url": "https://www.geeksforgeeks.org/cifar-10-image-classification-in-pytorch/"
      },
      "tutorialspoint": {
        "title": "PyTorch Model Training",
        "url": "https://www.tutorialspoint.com/pytorch/pytorch_neural_network_training.htm"
      },
      "w3schools": {
        "title": "AI Deep Learning Pipeline",
        "url": "https://www.w3schools.com/ai/ai_ml_pipeline.asp"
      }
    },
    "practice": "Train a custom CNN with Conv2D, BatchNorm, Dropout, and Cosine Annealing on CIFAR-10, achieving >= 75% test accuracy.",
    "formula": "eta_t = eta_min + (1/2) * (eta_max - eta_min) * (1 + cos(t * pi / T_max))",
    "repoRef": "Projects.md#3-computer-vision"
  },
  {
    "day": 56,
    "phase": 4,
    "phaseName": "Phase 4: Attention, Transformers & NLP",
    "category": "Classical NLP",
    "difficulty": "easy",
    "title": "Classical NLP: Tokenization, Stemming, Lemmatization & N-Grams",
    "summary": "Transform unstructured text into structured tokens. Learn sentence and word tokenization, Porter stemming, spaCy morphological lemmatization, stopword removal, and character/word N-grams.",
    "concepts": [
      "Word & Sentence Tokenization",
      "Porter vs Snowball Stemming",
      "Morphological Lemmatization with POS Tags",
      "Stopword Filtering Caveats",
      "N-Gram Language Models & Collocations"
    ],
    "references": {
      "gfg": {
        "title": "Natural Language Processing Overview",
        "url": "https://www.geeksforgeeks.org/natural-language-processing-overview/"
      },
      "tutorialspoint": {
        "title": "NLP Tutorial",
        "url": "https://www.tutorialspoint.com/natural_language_processing/index.htm"
      },
      "w3schools": {
        "title": "Python String Methods",
        "url": "https://www.w3schools.com/python/python_ref_string.asp"
      }
    },
    "practice": "Write a text cleaner using regex and NLTK/spaCy that tokenizes text, removes punctuation/numbers, lowercases, and returns lemmatized tokens.",
    "formula": "N-gram count: N_grams(sentence, n) = len(tokens) - n + 1",
    "repoRef": "Tools.md#4-nlp--llm-tooling"
  },
  {
    "day": 57,
    "phase": 4,
    "phaseName": "Phase 4: Attention, Transformers & NLP",
    "category": "Vector Space Models",
    "difficulty": "easy",
    "title": "Vector Space Models: Bag-of-Words & TF-IDF",
    "summary": "Represent documents as numeric vectors. Understand the Bag-of-Words (BoW) assumption, Term Frequency (TF), Inverse Document Frequency (IDF), and Cosine Similarity for document retrieval.",
    "concepts": [
      "Term-Document Matrix",
      "Bag-of-Words Limitation (Word Order Loss)",
      "Term Frequency TF(t, d)",
      "Inverse Document Frequency IDF(t, D)",
      "Cosine Similarity between Sparse Vectors"
    ],
    "references": {
      "gfg": {
        "title": "Understanding TF-IDF in NLP",
        "url": "https://www.geeksforgeeks.org/understanding-tf-idf-term-frequency-inverse-document-frequency/"
      },
      "tutorialspoint": {
        "title": "NLP TF-IDF Tutorial",
        "url": "https://www.tutorialspoint.com/natural_language_processing/natural_language_processing_tf_idf.htm"
      },
      "w3schools": {
        "title": "NLP in Data Science",
        "url": "https://www.w3schools.com/datascience/ds_nlp.asp"
      }
    },
    "practice": "Implement a TfidfVectorizer class from scratch in Python that computes TF, IDF, and normalized TF-IDF vectors for a list of 5 text documents.",
    "formula": "TF-IDF(t, d, D) = TF(t, d) * log(|D| / (1 + |{d in D : t in d}|))",
    "repoRef": "Datasets.md#3-classic-nlptext"
  },
  {
    "day": 58,
    "phase": 4,
    "phaseName": "Phase 4: Attention, Transformers & NLP",
    "category": "Word Embeddings",
    "difficulty": "medium",
    "title": "Distributed Word Embeddings: Word2Vec (Skip-Gram & CBOW) & GloVe",
    "summary": "Capture semantic relationships in continuous dense vector spaces. Master the distributional hypothesis ('A word is known by the company it keeps'), Word2Vec Skip-Gram with Negative Sampling, and GloVe.",
    "concepts": [
      "Distributional Hypothesis (Firth)",
      "Continuous Bag of Words (CBOW: Context -> Target)",
      "Skip-Gram Architecture (Target -> Context)",
      "Negative Sampling Loss Objective",
      "GloVe: Global Matrix Factorization of Co-occurrences"
    ],
    "references": {
      "gfg": {
        "title": "Word Embeddings in NLP",
        "url": "https://www.geeksforgeeks.org/word-embeddings-in-nlp/"
      },
      "tutorialspoint": {
        "title": "Word Embeddings Tutorial",
        "url": "https://www.tutorialspoint.com/natural_language_processing/natural_language_processing_word_embeddings.htm"
      },
      "w3schools": {
        "title": "Word Embeddings in AI",
        "url": "https://www.w3schools.com/ai/ai_word_embeddings.asp"
      }
    },
    "practice": "Load pretrained GloVe vectors and compute vector analogies: vector('King') - vector('Man') + vector('Woman') approx vector('Queen') via cosine similarity.",
    "formula": "Negative Sampling Loss: log sigma(v'_wO^T v_wI) + sum_{i=1}^k E_{w_i ~ P_n} [log sigma(- v'_{w_i}^T v_wI)]",
    "repoRef": "ResearchPaper.md#4-attention--transformers"
  },
  {
    "day": 59,
    "phase": 4,
    "phaseName": "Phase 4: Attention, Transformers & NLP",
    "category": "Seq2Seq Architectures",
    "difficulty": "medium",
    "title": "Sequence-to-Sequence (Seq2Seq) & The Information Bottleneck",
    "summary": "Map arbitrary input sequences to variable-length output sequences (machine translation). Learn the Encoder-Decoder RNN architecture, Teacher Forcing, and the fixed-size context bottleneck.",
    "concepts": [
      "Encoder-Decoder RNN Architecture",
      "Fixed-Length Context Vector Bottleneck",
      "Teacher Forcing During Training",
      "Autoregressive Generation During Inference",
      "Greedy Decoding vs Beam Search"
    ],
    "references": {
      "gfg": {
        "title": "Seq2Seq Model in Machine Learning",
        "url": "https://www.geeksforgeeks.org/seq2seq-model-in-machine-learning/"
      },
      "tutorialspoint": {
        "title": "Sequence to Sequence Models",
        "url": "https://www.tutorialspoint.com/natural_language_processing/natural_language_processing_sequence_to_sequence.htm"
      },
      "w3schools": {
        "title": "Seq2Seq Models in AI",
        "url": "https://www.w3schools.com/ai/ai_seq2seq.asp"
      }
    },
    "practice": "Implement a Beam Search decoder in Python that maintains top-k partial hypotheses across 5 time steps using cumulative log probabilities.",
    "formula": "Score(y_1, ..., y_t) = sum_{i=1}^t log P(y_i | y_{<i}, x)",
    "repoRef": "Projects.md#4-natural-language-processing"
  },
  {
    "day": 60,
    "phase": 4,
    "phaseName": "Phase 4: Attention, Transformers & NLP",
    "category": "Attention Mechanisms",
    "difficulty": "hard",
    "title": "The Attention Mechanism: Bahdanau & Luong Attention",
    "summary": "Break the fixed-vector information bottleneck. Allow decoders to selectively query and soft-align with all encoder hidden states. Compare Bahdanau (Additive) vs Luong (Multiplicative) attention.",
    "concepts": [
      "Dynamic Context Vector c_i = sum alpha_{ij} h_j",
      "Attention Alignment Scores e_{ij}",
      "Bahdanau Additive Score: v^T tanh(W_s s_{i-1} + W_h h_j)",
      "Luong Multiplicative Score: s_i^T W h_j",
      "Softmax Normalization over Source Positions"
    ],
    "references": {
      "gfg": {
        "title": "Attention Mechanism in NLP",
        "url": "https://www.geeksforgeeks.org/attention-mechanism-in-nlp/"
      },
      "tutorialspoint": {
        "title": "Deep Learning Attention Models",
        "url": "https://www.tutorialspoint.com/deep_learning/deep_learning_attention_models.htm"
      },
      "w3schools": {
        "title": "Attention Mechanism in AI",
        "url": "https://www.w3schools.com/ai/ai_attention.asp"
      }
    },
    "practice": "Compute attention weights alpha and the resulting context vector c given decoder state s and a matrix of encoder states H in pure NumPy.",
    "formula": "alpha_{ij} = exp(e_{ij}) / sum_k exp(e_{ik}); c_i = sum_j alpha_{ij} h_j",
    "repoRef": "ResearchPaper.md#4-attention--transformers"
  },
  {
    "day": 61,
    "phase": 4,
    "phaseName": "Phase 4: Attention, Transformers & NLP",
    "category": "Transformer Architecture",
    "difficulty": "hard",
    "title": "The Transformer Architecture: 'Attention Is All You Need' Overview",
    "summary": "Discard recurrence entirely for massively parallel self-attention. Trace the entire 2017 Vaswani et al. architecture: Query, Key, Value mappings, Encoder stack, and Decoder stack.",
    "concepts": [
      "Non-Recurrent Parallel Sequence Modeling",
      "Queries (Q), Keys (K) & Values (V) Analogy",
      "Encoder Layer Stack (Self-Attention + FFN)",
      "Decoder Layer Stack (Masked Self-Attention + Cross-Attention + FFN)",
      "Residual Connections & Pre-LN vs Post-LN"
    ],
    "references": {
      "gfg": {
        "title": "Transformer Neural Network Architecture",
        "url": "https://www.geeksforgeeks.org/transformer-neural-network-in-deep-learning/"
      },
      "tutorialspoint": {
        "title": "Transformer Models Tutorial",
        "url": "https://www.tutorialspoint.com/deep_learning/deep_learning_transformer_models.htm"
      },
      "w3schools": {
        "title": "Transformers in AI",
        "url": "https://www.w3schools.com/ai/ai_transformers.asp"
      }
    },
    "practice": "Draw and programmatically verify tensor dimensions at every stage of a 6-layer Transformer with d_model=512, batch=16, seq_len=64.",
    "formula": "Feed-Forward Network: FFN(x) = max(0, x W_1 + b_1) W_2 + b_2",
    "repoRef": "ResearchPaper.md#4-attention--transformers"
  },
  {
    "day": 62,
    "phase": 4,
    "phaseName": "Phase 4: Attention, Transformers & NLP",
    "category": "Transformer Architecture",
    "difficulty": "hard",
    "title": "Scaled Dot-Product Attention & Multi-Head Self-Attention from Scratch",
    "summary": "Implement the core mathematical equation powering all modern LLMs. Understand why sqrt(d_k) scaling prevents softmax gradient vanishing, and how Multi-Head splits heads for varied representation.",
    "concepts": [
      "Dot-Product Similarity Q K^T",
      "Scale Factor 1 / sqrt(d_k) Rationale",
      "Softmax Normalization across Keys",
      "Causal/Autoregressive Masking (-infinity in Upper Triangle)",
      "Multi-Head Attention Linear Projections (W_Q, W_K, W_V, W_O)"
    ],
    "references": {
      "gfg": {
        "title": "Self-Attention in NLP",
        "url": "https://www.geeksforgeeks.org/self-attention-in-nlp/"
      },
      "tutorialspoint": {
        "title": "PyTorch Attention Mechanism",
        "url": "https://www.tutorialspoint.com/pytorch/pytorch_attention_mechanism.htm"
      },
      "w3schools": {
        "title": "Self-Attention in AI",
        "url": "https://www.w3schools.com/ai/ai_self_attention.asp"
      }
    },
    "practice": "Implement ScaledDotProductAttention and MultiHeadAttention from scratch in PyTorch with batched matrix multiplication (torch.matmul) and causal masking.",
    "formula": "Attention(Q, K, V) = softmax((Q K^T) / sqrt(d_k)) V; MultiHead(Q,K,V) = Concat(head_1, ..., head_h) W^O",
    "repoRef": "CHEATSHEETS.md#7-transformer--attention-formulas"
  },
  {
    "day": 63,
    "phase": 4,
    "phaseName": "Phase 4: Attention, Transformers & NLP",
    "category": "Transformer Architecture",
    "difficulty": "hard",
    "title": "Positional Encodings: Sinusoidal, Learned & Rotary Embeddings (RoPE)",
    "summary": "Inject word order into permutation-invariant self-attention. Understand Vaswani's Sinusoidal frequencies, Learned Absolute Positional Embeddings, and modern Rotary Position Embeddings (RoPE).",
    "concepts": [
      "Permutation Invariance of Pure Self-Attention",
      "Vaswani Sinusoidal Positional Encoding Formulas",
      "Learned Absolute Embeddings (BERT/GPT-2)",
      "Relative Positional Encodings (T5)",
      "Rotary Position Embeddings (RoPE: LLaMA/Mistral)"
    ],
    "references": {
      "gfg": {
        "title": "Positional Encoding in Transformers",
        "url": "https://www.geeksforgeeks.org/positional-encoding-in-transformers/"
      },
      "tutorialspoint": {
        "title": "Positional Encoding Tutorial",
        "url": "https://www.tutorialspoint.com/deep_learning/deep_learning_positional_encoding.htm"
      },
      "w3schools": {
        "title": "Transformers Mathematics",
        "url": "https://www.w3schools.com/ai/ai_transformers_math.asp"
      }
    },
    "practice": "Generate a 100x128 Sinusoidal Positional Encoding matrix in NumPy and visualize the heatmap showing frequency variations across dimensions.",
    "formula": "PE(pos, 2i) = sin(pos / 10000^(2i/d_model)); PE(pos, 2i+1) = cos(pos / 10000^(2i/d_model))",
    "repoRef": "CHEATSHEETS.md#7-transformer--attention-formulas"
  },
  {
    "day": 64,
    "phase": 4,
    "phaseName": "Phase 4: Attention, Transformers & NLP",
    "category": "Pretrained Transformers",
    "difficulty": "medium",
    "title": "Encoder-Only Pretrained Models: BERT, RoBERTa & Masked LM (MLM)",
    "summary": "Learn bidirectional context representations. Master BERT's Masked Language Modeling (MLM: 15% masking rule), Next Sentence Prediction (NSP), [CLS]/[SEP] tokens, and RoBERTa improvements.",
    "concepts": [
      "Bidirectional Encoder Representations from Transformers",
      "Masked Language Modeling (80% [MASK], 10% Random, 10% Unchanged)",
      "Next Sentence Prediction (NSP) Objective",
      "[CLS] Token as Aggregate Classification Representation",
      "RoBERTa (Dynamic Masking, Larger Batches, No NSP)"
    ],
    "references": {
      "gfg": {
        "title": "Explanation of BERT Model in NLP",
        "url": "https://www.geeksforgeeks.org/explanation-of-bert-model-nlp/"
      },
      "tutorialspoint": {
        "title": "BERT Model Tutorial",
        "url": "https://www.tutorialspoint.com/deep_learning/deep_learning_bert_model.htm"
      },
      "w3schools": {
        "title": "BERT in AI",
        "url": "https://www.w3schools.com/ai/ai_bert.asp"
      }
    },
    "practice": "Use Hugging Face transformers pipeline('fill-mask', model='bert-base-uncased') to predict masked tokens and inspect top-5 candidate probabilities.",
    "formula": "Loss_BERT = Loss_MLM + Loss_NSP",
    "repoRef": "ResearchPaper.md#4-attention--transformers"
  },
  {
    "day": 65,
    "phase": 4,
    "phaseName": "Phase 4: Attention, Transformers & NLP",
    "category": "Pretrained Transformers",
    "difficulty": "medium",
    "title": "Decoder-Only Autoregressive Models: GPT Series & Causal LM",
    "summary": "Generate fluent natural language. Master the GPT architecture (Radford et al.), Causal Language Modeling objective (predict next token given left context), and Scaling Laws.",
    "concepts": [
      "Autoregressive Next-Token Prediction",
      "Causal Attention Masking (Preventing Future Peeking)",
      "GPT-1 (Pre-training + Task Fine-Tuning)",
      "GPT-2 (Zero-Shot Multi-Task Learners)",
      "GPT-3 (Few-Shot In-Context Learning & Scaling Laws)"
    ],
    "references": {
      "gfg": {
        "title": "What is GPT in NLP?",
        "url": "https://www.geeksforgeeks.org/what-is-gpt-in-nlp/"
      },
      "tutorialspoint": {
        "title": "GPT Models Tutorial",
        "url": "https://www.tutorialspoint.com/deep_learning/deep_learning_gpt_models.htm"
      },
      "w3schools": {
        "title": "GPT in AI",
        "url": "https://www.w3schools.com/ai/ai_gpt.asp"
      }
    },
    "practice": "Implement a simple autoregressive generation loop using greedy decoding and top-k/top-p (nucleus) sampling with temperature.",
    "formula": "Loss_CLM = - sum_{i=1}^T log P(u_i | u_{i-k}, ..., u_{i-1}; Theta); P_temp(x_i) = exp(z_i / T) / sum exp(z_j / T)",
    "repoRef": "ResearchPaper.md#5-large-language-models"
  },
  {
    "day": 66,
    "phase": 4,
    "phaseName": "Phase 4: Attention, Transformers & NLP",
    "category": "Pretrained Transformers",
    "difficulty": "medium",
    "title": "Encoder-Decoder Models: T5 & BART for Seq2Seq Tasks",
    "summary": "Master full encoder-decoder architectures for text-to-text transformation. Learn Raffel et al.'s T5 (casting all NLP problems as text-in, text-out) and Lewis et al.'s BART denoising autoencoder.",
    "concepts": [
      "Text-to-Text Unified Framework (T5)",
      "Span Corruption Denoising Objective",
      "BART Denoising Autoencoder (Token Deletion, Text Infilling)",
      "Abstractive Summarization & Translation Workflows",
      "Relative Position Bias (Bucket Position Embeddings)"
    ],
    "references": {
      "gfg": {
        "title": "T5: Text-to-Text Transfer Transformer",
        "url": "https://www.geeksforgeeks.org/t5-text-to-text-transfer-transformer/"
      },
      "tutorialspoint": {
        "title": "Deep Learning Sequence Models",
        "url": "https://www.tutorialspoint.com/deep_learning/deep_learning_sequence_models.htm"
      },
      "w3schools": {
        "title": "LLM Overview in AI",
        "url": "https://www.w3schools.com/ai/ai_llm_overview.asp"
      }
    },
    "practice": "Use Hugging Face pipeline('summarization', model='t5-small') to summarize a 500-word technical article into 3 concise sentences.",
    "formula": "T5 Input Format: 'translate English to German: That is good.' -> Output: 'Das ist gut.'",
    "repoRef": "Books.md#5-natural-language-processing"
  },
  {
    "day": 67,
    "phase": 4,
    "phaseName": "Phase 4: Attention, Transformers & NLP",
    "category": "Hugging Face Ecosystem",
    "difficulty": "easy",
    "title": "Hugging Face Ecosystem: Transformers, Datasets & Tokenizers",
    "summary": "Navigate the primary open-source AI platform. Master AutoModelForSequenceClassification, AutoTokenizer, datasets library loading, and TrainingArguments / Trainer API.",
    "concepts": [
      "AutoClasses (AutoConfig, AutoTokenizer, AutoModel)",
      "Tokenizers Fast Rust Implementations",
      "Hugging Face Datasets & Arrow Memory-Mapping",
      "Trainer & TrainingArguments Workflow",
      "Pushing Models to Hugging Face Model Hub"
    ],
    "references": {
      "gfg": {
        "title": "Getting Started with Hugging Face Transformers",
        "url": "https://www.geeksforgeeks.org/getting-started-with-hugging-face-transformers/"
      },
      "tutorialspoint": {
        "title": "Hugging Face Tutorial",
        "url": "https://www.tutorialspoint.com/huggingface/index.htm"
      },
      "w3schools": {
        "title": "Hugging Face in AI",
        "url": "https://www.w3schools.com/ai/ai_huggingface.asp"
      }
    },
    "practice": "Load a tiny text dataset using the datasets library, tokenize with padding='max_length', and inspect the resulting input_ids and attention_mask tensors.",
    "formula": "Tokenized Output: {'input_ids': [...], 'attention_mask': [1, 1, 1, 0, 0]}",
    "repoRef": "Tools.md#4-nlp--llm-tooling"
  },
  {
    "day": 68,
    "phase": 4,
    "phaseName": "Phase 4: Attention, Transformers & NLP",
    "category": "Tokenization Algorithms",
    "difficulty": "medium",
    "title": "Subword Tokenization: Byte-Pair Encoding (BPE), WordPiece & SentencePiece",
    "summary": "Solve out-of-vocabulary (OOV) and vocabulary explosion. Master Byte-Pair Encoding (BPE iterative pair merging), WordPiece (likelihood-based merging), and Byte-level BPE in GPT-4.",
    "concepts": [
      "Out-Of-Vocabulary (OOV) Dilemma",
      "Byte-Pair Encoding (BPE) Frequency Merges",
      "WordPiece (Maximizing Training Data Likelihood)",
      "Unigram Language Model Tokenizer",
      "Byte-Level BPE (No Unknown Tokens)"
    ],
    "references": {
      "gfg": {
        "title": "Byte Pair Encoding (BPE) in NLP",
        "url": "https://www.geeksforgeeks.org/byte-pair-encoding-bpe-in-nlp/"
      },
      "tutorialspoint": {
        "title": "NLP Tokenization Tutorial",
        "url": "https://www.tutorialspoint.com/natural_language_processing/natural_language_processing_tokenization.htm"
      },
      "w3schools": {
        "title": "Tokenization in AI",
        "url": "https://www.w3schools.com/ai/ai_tokenization.asp"
      }
    },
    "practice": "Implement a basic BPE algorithm in Python that starts with character vocabulary and performs 10 consecutive most-frequent pair merges.",
    "formula": "Initial vocab: characters; Iteratively: find most frequent pair (c1, c2) -> merge into new token 'c1c2'",
    "repoRef": "Books.md#5-natural-language-processing"
  },
  {
    "day": 69,
    "phase": 4,
    "phaseName": "Phase 4: Attention, Transformers & NLP",
    "category": "Downstream Fine-Tuning",
    "difficulty": "hard",
    "title": "Fine-Tuning Transformers: Classification & Named Entity Recognition (NER)",
    "summary": "Adapt general-purpose pretrained models to specialized enterprise tasks. Master sequence classification fine-tuning and token-level classification for Named Entity Recognition (NER).",
    "concepts": [
      "Sequence Classification Head ([CLS] -> Dropout -> Linear)",
      "Token Classification Head (Linear over every token hidden state)",
      "Label Alignment across Subword Tokens in NER",
      "Handling Class Imbalance with Weighted Cross-Entropy",
      "Evaluation with SeqEval for Span F1"
    ],
    "references": {
      "gfg": {
        "title": "Fine-Tuning BERT for Text Classification",
        "url": "https://www.geeksforgeeks.org/fine-tuning-bert-model-for-text-classification-in-nlp/"
      },
      "tutorialspoint": {
        "title": "Hugging Face Fine-Tuning Tutorial",
        "url": "https://www.tutorialspoint.com/huggingface/huggingface_fine_tuning.htm"
      },
      "w3schools": {
        "title": "Fine-Tuning in AI",
        "url": "https://www.w3schools.com/ai/ai_fine_tuning.asp"
      }
    },
    "practice": "Fine-tune distilbert-base-uncased on a sample sentiment dataset using Hugging Face Trainer and evaluate validation accuracy and F1.",
    "formula": "Trainer Arguments: learning_rate=2e-5, warmup_ratio=0.1, weight_decay=0.01",
    "repoRef": "Projects.md#4-natural-language-processing"
  },
  {
    "day": 70,
    "phase": 4,
    "phaseName": "Phase 4: Attention, Transformers & NLP",
    "category": "Phase 4 Milestone",
    "difficulty": "hard",
    "title": "Phase 4 Milestone: Production BERT Fine-Tuning Pipeline & Model Evaluation",
    "summary": "Consolidate Phase 4. Build a complete end-to-end sentiment classification service: tokenize, fine-tune BERT with PyTorch and Hugging Face, compute confusion matrix, and save for deployment.",
    "concepts": [
      "Complete NLP Pipeline Audit",
      "Cross-Validation on Transformers",
      "Error Analysis on Ambiguous Samples",
      "Exporting Model & Tokenizer Artifacts",
      "Phase 4 Self-Assessment"
    ],
    "references": {
      "gfg": {
        "title": "Sentiment Analysis using BERT",
        "url": "https://www.geeksforgeeks.org/sentiment-analysis-using-bert/"
      },
      "tutorialspoint": {
        "title": "NLP Sentiment Analysis",
        "url": "https://www.tutorialspoint.com/natural_language_processing/natural_language_processing_sentiment_analysis.htm"
      },
      "w3schools": {
        "title": "AI NLP Projects",
        "url": "https://www.w3schools.com/ai/ai_nlp_projects.asp"
      }
    },
    "practice": "Export your fine-tuned BERT model, load it in a standalone Python script, and run batch predictions with latency benchmarking.",
    "formula": "Inference Latency: average ms per sample across 100 test runs",
    "repoRef": "Projects.md#4-natural-language-processing"
  },
  {
    "day": 71,
    "phase": 5,
    "phaseName": "Phase 5: Computer Vision & Multimodal",
    "category": "Classical Computer Vision",
    "difficulty": "easy",
    "title": "Digital Image Processing with OpenCV: Filtering, Edges & Contours",
    "summary": "Process raw pixels before feeding into neural networks. Master OpenCV (cv2): BGR vs RGB color spaces, Gaussian blurring, Sobel & Canny edge detection, and morphological dilation/erosion.",
    "concepts": [
      "BGR to RGB/HSV Color Conversions",
      "Gaussian Smoothing & Kernel Convolutions",
      "Sobel Gradients & Canny Edge Detection",
      "Morphological Operations (Dilation, Erosion)",
      "Contour Detection & Bounding Rectangles"
    ],
    "references": {
      "gfg": {
        "title": "OpenCV Python Tutorial",
        "url": "https://www.geeksforgeeks.org/opencv-python-tutorial/"
      },
      "tutorialspoint": {
        "title": "OpenCV Tutorial",
        "url": "https://www.tutorialspoint.com/opencv/index.htm"
      },
      "w3schools": {
        "title": "Computer Vision in AI",
        "url": "https://www.w3schools.com/ai/ai_computer_vision.asp"
      }
    },
    "practice": "Write an OpenCV script that loads an image, applies Canny edge detection, finds external contours, and draws green bounding boxes around objects.",
    "formula": "Canny: Gaussian Filter -> Gradient Intensity -> Non-Maximum Suppression -> Hysteresis Thresholding",
    "repoRef": "Tools.md#5-computer-vision"
  },
  {
    "day": 72,
    "phase": 5,
    "phaseName": "Phase 5: Computer Vision & Multimodal",
    "category": "Image Segmentation",
    "difficulty": "hard",
    "title": "Image Segmentation Architectures: Semantic Segmentation & U-Net",
    "summary": "Classify every individual pixel in an image. Learn Semantic vs Instance segmentation, Fully Convolutional Networks (FCNs), and the symmetric Contracting/Expansive U-Net with skip connections.",
    "concepts": [
      "Semantic vs Instance Segmentation",
      "Transposed Convolutions (Deconvolution / Upsampling)",
      "U-Net Contracting Path (Encoder Context)",
      "U-Net Expansive Path (Decoder Localization)",
      "Skip Connections for Preserving Fine Spatial Details"
    ],
    "references": {
      "gfg": {
        "title": "U-Net Architecture Explained",
        "url": "https://www.geeksforgeeks.org/u-net-architecture-explained/"
      },
      "tutorialspoint": {
        "title": "Deep Learning Image Segmentation",
        "url": "https://www.tutorialspoint.com/deep_learning/deep_learning_image_segmentation.htm"
      },
      "w3schools": {
        "title": "Image Segmentation in AI",
        "url": "https://www.w3schools.com/ai/ai_image_segmentation.asp"
      }
    },
    "practice": "Implement a simplified PyTorch U-Net module with 2 downsampling blocks, 2 upsampling blocks (nn.ConvTranspose2d), and skip concatenation.",
    "formula": "Dice Coefficient = (2 * |X intersect Y|) / (|X| + |Y|); IoU = |X intersect Y| / |X union Y|",
    "repoRef": "Projects.md#3-computer-vision"
  },
  {
    "day": 73,
    "phase": 5,
    "phaseName": "Phase 5: Computer Vision & Multimodal",
    "category": "Object Detection",
    "difficulty": "medium",
    "title": "Object Detection Foundations: Bounding Boxes, Anchors & IoU",
    "summary": "Localize and classify multiple objects in single images. Master bounding box parameterization (xyxy vs xywh), Intersection over Union (IoU), Anchor Boxes, and mean Average Precision (mAP).",
    "concepts": [
      "Bounding Box Coordinates [x_min, y_min, x_max, y_max]",
      "Intersection over Union (IoU) Thresholds",
      "Anchor Boxes (Predefined Scales & Aspect Ratios)",
      "Ground-Truth Matching Criteria (IoU > 0.5)",
      "mean Average Precision (mAP@50 and mAP@50:95)"
    ],
    "references": {
      "gfg": {
        "title": "Intersection over Union (IoU) for Object Detection",
        "url": "https://www.geeksforgeeks.org/intersection-over-union-iou-for-object-detection/"
      },
      "tutorialspoint": {
        "title": "Deep Learning Object Detection",
        "url": "https://www.tutorialspoint.com/deep_learning/deep_learning_object_detection.htm"
      },
      "w3schools": {
        "title": "Object Detection in AI",
        "url": "https://www.w3schools.com/ai/ai_object_detection.asp"
      }
    },
    "practice": "Write an IoU function in Python taking two bounding boxes boxA and boxB and calculating exact intersection over union area.",
    "formula": "IoU = Area(A intersect B) / (Area(A) + Area(B) - Area(A intersect B))",
    "repoRef": "Datasets.md#7-advanced-computer-vision"
  },
  {
    "day": 74,
    "phase": 5,
    "phaseName": "Phase 5: Computer Vision & Multimodal",
    "category": "Object Detection",
    "difficulty": "hard",
    "title": "Single-Stage Detectors: The YOLO Architecture & Non-Max Suppression (NMS)",
    "summary": "Detect objects in real time (>30 FPS). Learn the YOLO (You Only Look Once) paradigm: grid division, simultaneous bounding box regression and class probabilities, and Non-Maximum Suppression (NMS).",
    "concepts": [
      "Single-Stage vs Two-Stage Tradeoffs",
      "S x S Grid Cell Prediction",
      "Confidence Score P(Obj) * IoU",
      "YOLO Loss (Localization + Objectness + Classification)",
      "Non-Maximum Suppression (NMS) Filtering Algorithm"
    ],
    "references": {
      "gfg": {
        "title": "YOLO Real-Time Object Detection",
        "url": "https://www.geeksforgeeks.org/yolo-you-only-look-once-real-time-object-detection/"
      },
      "tutorialspoint": {
        "title": "YOLO Tutorial",
        "url": "https://www.tutorialspoint.com/yolo/index.htm"
      },
      "w3schools": {
        "title": "YOLO Detection in AI",
        "url": "https://www.w3schools.com/ai/ai_yolo_detection.asp"
      }
    },
    "practice": "Implement the Non-Maximum Suppression (NMS) algorithm from scratch in Python given bounding boxes, confidence scores, and an IoU threshold of 0.5.",
    "formula": "NMS Algorithm: select highest score box B, discard all remaining boxes with IoU(B, box_i) > threshold; repeat",
    "repoRef": "Projects.md#3-computer-vision"
  },
  {
    "day": 75,
    "phase": 5,
    "phaseName": "Phase 5: Computer Vision & Multimodal",
    "category": "Object Detection",
    "difficulty": "hard",
    "title": "Two-Stage Detectors: Region Proposal Networks (RPN) & Faster R-CNN",
    "summary": "Master high-accuracy two-stage detection. Trace the evolution from R-CNN (selective search) to Fast R-CNN (RoI Pooling) to Faster R-CNN with end-to-end Region Proposal Networks (RPN).",
    "concepts": [
      "Selective Search Limitations",
      "RoI (Region of Interest) Pooling & RoIAlign",
      "Region Proposal Network (RPN) Sliding Windows",
      "Objectness vs Bounding Box Regression Heads",
      "End-to-End Joint Training with 4-way Loss"
    ],
    "references": {
      "gfg": {
        "title": "Faster R-CNN Architecture",
        "url": "https://www.geeksforgeeks.org/faster-r-cnn-ml/"
      },
      "tutorialspoint": {
        "title": "Deep Learning Faster R-CNN",
        "url": "https://www.tutorialspoint.com/deep_learning/deep_learning_faster_rcnn.htm"
      },
      "w3schools": {
        "title": "Object Detection Overview",
        "url": "https://www.w3schools.com/ai/ai_object_detection.asp"
      }
    },
    "practice": "Use torchvision.models.detection.fasterrcnn_resnet50_fpn to run inference on a test image and filter detections with score > 0.8.",
    "formula": "RPN Loss = L_cls(p_i, p_i*) + lambda * p_i* * L_reg(t_i, t_i*)",
    "repoRef": "Books.md#6-computer-vision"
  },
  {
    "day": 76,
    "phase": 5,
    "phaseName": "Phase 5: Computer Vision & Multimodal",
    "category": "Vision Transformers",
    "difficulty": "hard",
    "title": "Vision Transformers (ViT): Patch Embeddings & Self-Attention for Images",
    "summary": "Apply pure Transformer architectures directly to images. Master Dosovitskiy et al.'s Vision Transformer (ViT): splitting images into 16x16 non-overlapping patches, linear projection, and [CLS] token.",
    "concepts": [
      "Treating Image Patches as Words (Tokens)",
      "Patch Flattening & Linear Projection (P^2 * C -> D)",
      "Prepend [CLS] Token for Classification",
      "1D Learnable Positional Embeddings for 2D Patches",
      "Absence of Inductive Bias (Requiring Huge Datasets/JFT-300M)"
    ],
    "references": {
      "gfg": {
        "title": "Vision Transformer (ViT) Architecture",
        "url": "https://www.geeksforgeeks.org/vision-transformer-vit/"
      },
      "tutorialspoint": {
        "title": "Deep Learning Vision Transformers",
        "url": "https://www.tutorialspoint.com/deep_learning/deep_learning_vision_transformers.htm"
      },
      "w3schools": {
        "title": "Vision Transformers in AI",
        "url": "https://www.w3schools.com/ai/ai_vision_transformers.asp"
      }
    },
    "practice": "Implement a PatchEmbedding layer in PyTorch using nn.Conv2d(in_channels=3, out_channels=768, kernel_size=16, stride=16).",
    "formula": "Number of Patches: N = (H * W) / P^2; Input tensor [B, 3, 224, 224] -> [B, 196, 768]",
    "repoRef": "ResearchPaper.md#2-deep-cnn-architectures"
  },
  {
    "day": 77,
    "phase": 5,
    "phaseName": "Phase 5: Computer Vision & Multimodal",
    "category": "Multimodal AI",
    "difficulty": "hard",
    "title": "Contrastive Multimodal Learning: OpenAI CLIP & Zero-Shot Classification",
    "summary": "Bridge images and natural language in a shared embedding space. Master OpenAI CLIP (Contrastive Language-Image Pretraining): symmetric cross-entropy loss, dual encoders, and zero-shot labeling.",
    "concepts": [
      "Shared Multimodal Embedding Space",
      "Image Encoder (ViT/ResNet) & Text Encoder (Transformer)",
      "Cosine Similarity Matrix between N Images & N Texts",
      "InfoNCE Symmetric Cross-Entropy Loss",
      "Zero-Shot Classification via 'A photo of a {class}' Prompts"
    ],
    "references": {
      "gfg": {
        "title": "CLIP: Contrastive Language-Image Pre-Training",
        "url": "https://www.geeksforgeeks.org/clip-contrastive-language-image-pre-training/"
      },
      "tutorialspoint": {
        "title": "Multimodal Deep Learning",
        "url": "https://www.tutorialspoint.com/deep_learning/deep_learning_multimodal.htm"
      },
      "w3schools": {
        "title": "Multimodal AI Overview",
        "url": "https://www.w3schools.com/ai/ai_multimodal.asp"
      }
    },
    "practice": "Use Hugging Face transformers CLIPModel to perform zero-shot classification on an image across 4 candidate text labels.",
    "formula": "Loss_contrastive = (1/2) * (CrossEntropy(logits, targets) + CrossEntropy(logits^T, targets))",
    "repoRef": "ResearchPaper.md#9-multimodal"
  },
  {
    "day": 78,
    "phase": 5,
    "phaseName": "Phase 5: Computer Vision & Multimodal",
    "category": "Vision-Language Models",
    "difficulty": "hard",
    "title": "Vision-Language Models (VLMs): Visual Question Answering & LLaVA",
    "summary": "Enable LLMs to 'see' and reason about visual scenes. Understand Visual Instruction Tuning, cross-attention projections, BLIP-2 Q-Former, and LLaVA (Large Language and Vision Assistant).",
    "concepts": [
      "Vision-Language Alignment",
      "Projection MLP (Visual Tokens -> LLM Embedding Space)",
      "Visual Question Answering (VQA)",
      "BLIP-2 & Q-Former Query Transformer",
      "LLaVA Architecture (CLIP ViT-L + Vicuna LLM)"
    ],
    "references": {
      "gfg": {
        "title": "Multimodal Large Language Models",
        "url": "https://www.geeksforgeeks.org/multimodal-large-language-models/"
      },
      "tutorialspoint": {
        "title": "Deep Learning Visual QA",
        "url": "https://www.tutorialspoint.com/deep_learning/deep_learning_vqa.htm"
      },
      "w3schools": {
        "title": "Vision Language Models in AI",
        "url": "https://www.w3schools.com/ai/ai_vlm.asp"
      }
    },
    "practice": "Construct the forward pass of a lightweight Vision-Language connector: project 768-dim ViT features to 4096-dim LLM tokens via a 2-layer MLP with GELU.",
    "formula": "Z_v = MLP(Visual_Tokens); Sequence = [Z_v, Text_Embeddings]",
    "repoRef": "ResearchPaper.md#9-multimodal"
  },
  {
    "day": 79,
    "phase": 5,
    "phaseName": "Phase 5: Computer Vision & Multimodal",
    "category": "Generative Vision Models",
    "difficulty": "hard",
    "title": "Generative Models I: Generative Adversarial Networks (GANs) & DCGAN",
    "summary": "Pioneer generative image synthesis via game theory. Understand the minimax game between Generator G(z) and Discriminator D(x), mode collapse, and Deep Convolutional GAN (DCGAN) rules.",
    "concepts": [
      "Minimax Game Theory Objective",
      "Generator G(z): Latent Vector z -> Realistic Image",
      "Discriminator D(x): Real vs Fake Classifier",
      "Mode Collapse & Training Instability",
      "DCGAN Architectural Guidelines (Strided Convs, BatchNorm)"
    ],
    "references": {
      "gfg": {
        "title": "Generative Adversarial Network (GAN)",
        "url": "https://www.geeksforgeeks.org/generative-adversarial-network-gan/"
      },
      "tutorialspoint": {
        "title": "Generative Adversarial Networks",
        "url": "https://www.tutorialspoint.com/deep_learning/deep_learning_generative_adversarial_networks.htm"
      },
      "w3schools": {
        "title": "GANs in AI",
        "url": "https://www.w3schools.com/ai/ai_gans.asp"
      }
    },
    "practice": "Build and train a simple DCGAN on MNIST digits for 5 epochs and plot generated synthetic digit grids.",
    "formula": "min_G max_D V(D, G) = E_{x~p_data}[log D(x)] + E_{z~p_z}[log(1 - D(G(z)))]",
    "repoRef": "Projects.md#8-generative-models"
  },
  {
    "day": 80,
    "phase": 5,
    "phaseName": "Phase 5: Computer Vision & Multimodal",
    "category": "Phase 5 Milestone",
    "difficulty": "hard",
    "title": "Phase 5 Milestone: Real-Time Vision Pipeline with OpenCV & Pretrained Models",
    "summary": "Consolidate Phase 5. Build an end-to-end computer vision application: capture video/webcam feed, run real-time YOLO object detection or U-Net segmentation, and display annotated results.",
    "concepts": [
      "Real-Time Video Capture Loop",
      "Frame-by-Frame Preprocessing & Inference",
      "Overlaying Detection Bounding Boxes & Confidence Text",
      "FPS Throughput Benchmarking",
      "Phase 5 Vision Audit"
    ],
    "references": {
      "gfg": {
        "title": "Object Detection with YOLO in Python",
        "url": "https://www.geeksforgeeks.org/object-detection-with-yolo-in-python/"
      },
      "tutorialspoint": {
        "title": "OpenCV Object Detection Tutorial",
        "url": "https://www.tutorialspoint.com/opencv/opencv_object_detection.htm"
      },
      "w3schools": {
        "title": "AI Vision Projects",
        "url": "https://www.w3schools.com/ai/ai_vision_project.asp"
      }
    },
    "practice": "Build a Python script that takes a video file, runs object detection on each frame, counts detected persons, and saves the output video.",
    "formula": "FPS = Total_Frames / Elapsed_Time_Seconds",
    "repoRef": "Projects.md#3-computer-vision"
  },
  {
    "day": 81,
    "phase": 6,
    "phaseName": "Phase 6: Generative AI, LLMs & Fine-Tuning",
    "category": "Generative Models",
    "difficulty": "hard",
    "title": "Generative Models II: Variational Autoencoders (VAEs) & Reparameterization",
    "summary": "Generate smooth, continuous latent representations. Learn Variational Autoencoders (VAEs), Evidence Lower Bound (ELBO), KL Divergence regularization, and the Reparameterization Trick.",
    "concepts": [
      "Autoencoder Bottleneck Limitation (Discontinuous Latent Space)",
      "Probabilistic Latent Space z ~ q_phi(z|x)",
      "Evidence Lower Bound (ELBO)",
      "KL Divergence Penalty D_KL(q_phi(z|x) || p(z))",
      "The Reparameterization Trick z = mu + sigma * epsilon"
    ],
    "references": {
      "gfg": {
        "title": "Variational Autoencoders Explained",
        "url": "https://www.geeksforgeeks.org/variational-autoencoders/"
      },
      "tutorialspoint": {
        "title": "Deep Learning Autoencoders",
        "url": "https://www.tutorialspoint.com/deep_learning/deep_learning_autoencoders.htm"
      },
      "w3schools": {
        "title": "Autoencoders in AI",
        "url": "https://www.w3schools.com/ai/ai_autoencoders.asp"
      }
    },
    "practice": "Implement the VAE reparameterization function in PyTorch: given mu and logvar, sample epsilon from standard normal and return z.",
    "formula": "z = mu + exp(0.5 * logvar) * epsilon; Loss = Reconstruction_Loss + KL_Divergence",
    "repoRef": "ResearchPaper.md#6-generative-models"
  },
  {
    "day": 82,
    "phase": 6,
    "phaseName": "Phase 6: Generative AI, LLMs & Fine-Tuning",
    "category": "Diffusion Models",
    "difficulty": "hard",
    "title": "Diffusion Models: DDPM, Forward Noising & Reverse Denoising Process",
    "summary": "Master state-of-the-art generative imaging (Stable Diffusion, Midjourney). Learn Denoising Diffusion Probabilistic Models (DDPM), Markov forward noise schedule (beta_t), and U-Net noise prediction.",
    "concepts": [
      "Forward Diffusion Process (Adding Gaussian Noise)",
      "Reverse Denoising Process (Iterative Reconstruction)",
      "Noise Schedules (Linear, Cosine)",
      "U-Net as Noise Predictor epsilon_theta(x_t, t)",
      "Classifier-Free Guidance (CFG) for Prompt Adherence"
    ],
    "references": {
      "gfg": {
        "title": "Diffusion Models in Machine Learning",
        "url": "https://www.geeksforgeeks.org/diffusion-models-in-machine-learning/"
      },
      "tutorialspoint": {
        "title": "Deep Learning Diffusion Models",
        "url": "https://www.tutorialspoint.com/deep_learning/deep_learning_diffusion_models.htm"
      },
      "w3schools": {
        "title": "Diffusion Models in AI",
        "url": "https://www.w3schools.com/ai/ai_diffusion.asp"
      }
    },
    "practice": "Implement the closed-form forward diffusion sampling equation: compute x_t directly at timestep t from x_0 using alpha_bar_t.",
    "formula": "x_t = sqrt(alpha_bar_t) * x_0 + sqrt(1 - alpha_bar_t) * epsilon",
    "repoRef": "ResearchPaper.md#6-generative-models"
  },
  {
    "day": 83,
    "phase": 6,
    "phaseName": "Phase 6: Generative AI, LLMs & Fine-Tuning",
    "category": "Modern LLM Architectures",
    "difficulty": "medium",
    "title": "Modern Open LLM Architectures: LLaMA-3, Mistral, FlashAttention & MoE",
    "summary": "Explore cutting-edge advancements in open weights LLMs: RMSNorm, SwiGLU activation, RoPE positional encoding, Grouped-Query Attention (GQA), FlashAttention GPU kernel tiling, and MoE.",
    "concepts": [
      "LLaMA Innovations (RMSNorm, SwiGLU, RoPE)",
      "Multi-Query Attention (MQA) vs Grouped-Query Attention (GQA)",
      "FlashAttention IO-Aware GPU Memory Tiling",
      "Mixture of Experts (MoE: Sparse Top-2 Router)",
      "Sliding Window Attention (Mistral)"
    ],
    "references": {
      "gfg": {
        "title": "Mixture of Experts (MoE) in LLMs",
        "url": "https://www.geeksforgeeks.org/mixture-of-experts-moe-in-llms/"
      },
      "tutorialspoint": {
        "title": "LLM Tutorial",
        "url": "https://www.tutorialspoint.com/llm/index.htm"
      },
      "w3schools": {
        "title": "LLMs in AI",
        "url": "https://www.w3schools.com/ai/ai_llm.asp"
      }
    },
    "practice": "Implement RMSNorm (Root Mean Square Normalization) from scratch in PyTorch: x * w / sqrt(mean(x^2) + eps).",
    "formula": "RMSNorm(x) = (x / RMS(x)) * gamma; SwiGLU(x) = (x W_1 * Swish(x W_2)) W_3",
    "repoRef": "ResearchPaper.md#5-large-language-models"
  },
  {
    "day": 84,
    "phase": 6,
    "phaseName": "Phase 6: Generative AI, LLMs & Fine-Tuning",
    "category": "Parameter-Efficient Fine-Tuning",
    "difficulty": "medium",
    "title": "Parameter-Efficient Fine-Tuning (PEFT) I: LoRA (Low-Rank Adaptation)",
    "summary": "Fine-tune 70B+ parameter models on consumer GPUs. Understand Hu et al.'s Low-Rank Adaptation (LoRA): freezing pretrained weights W_0 and injecting low-rank decomposed matrices B (d x r) and A (r x k).",
    "concepts": [
      "Full Fine-Tuning Memory Bottleneck",
      "Intrinsic Low-Rank Hypothesis",
      "LoRA Formulation: W = W_0 + (alpha / r) * B * A",
      "Zero Initialization of B & Gaussian Init of A",
      "Inference Zero-Latency Weight Merging"
    ],
    "references": {
      "gfg": {
        "title": "LoRA: Low-Rank Adaptation of LLMs",
        "url": "https://www.geeksforgeeks.org/lora-low-rank-adaptation-of-large-language-models/"
      },
      "tutorialspoint": {
        "title": "Hugging Face PEFT Tutorial",
        "url": "https://www.tutorialspoint.com/huggingface/huggingface_peft.htm"
      },
      "w3schools": {
        "title": "LoRA Fine-Tuning in AI",
        "url": "https://www.w3schools.com/ai/ai_lora.asp"
      }
    },
    "practice": "Implement a custom LoRALinear layer in PyTorch that wraps an existing nn.Linear, freezes base weights, and trains adapters A and B.",
    "formula": "h = W_0 x + (alpha / r) B A x; Parameter count drops from d*k to r*(d + k) where r << min(d, k)",
    "repoRef": "Tools.md#4-nlp--llm-tooling"
  },
  {
    "day": 85,
    "phase": 6,
    "phaseName": "Phase 6: Generative AI, LLMs & Fine-Tuning",
    "category": "Quantization & QLoRA",
    "difficulty": "hard",
    "title": "PEFT II: QLoRA & Quantization (NF4, FP8 & Double Quantization)",
    "summary": "Fit massive models into single consumer GPUs. Understand Dettmers et al.'s QLoRA: 4-bit NormalFloat (NF4) data type, Double Quantization of scale constants, and Paged Optimizers for memory spikes.",
    "concepts": [
      "Quantization Principles (FP32 -> FP16 -> INT8 -> 4-bit)",
      "NormalFloat 4 (NF4) Information-Theoretically Optimal Quantization",
      "Double Quantization (Quantizing Quantization Constants)",
      "Paged Optimizers via CUDA Unified Memory",
      "Using Hugging Face bitsandbytes with PEFT"
    ],
    "references": {
      "gfg": {
        "title": "QLoRA: Quantized Low-Rank Adaptation",
        "url": "https://www.geeksforgeeks.org/qlora-quantized-low-rank-adaptation/"
      },
      "tutorialspoint": {
        "title": "LLM Fine-Tuning Guide",
        "url": "https://www.tutorialspoint.com/llm/llm_fine_tuning.htm"
      },
      "w3schools": {
        "title": "QLoRA in AI",
        "url": "https://www.w3schools.com/ai/ai_qlora.asp"
      }
    },
    "practice": "Configure a BitsAndBytesConfig in transformers with load_in_4bit=True, bnb_4bit_quant_type='nf4', and inspect parameter memory consumption.",
    "formula": "Memory Saving: 7B model requires ~28GB in FP32, ~14GB in FP16, and ~4.5GB in NF4 4-bit",
    "repoRef": "Projects.md#9-llms--fine-tuning"
  },
  {
    "day": 86,
    "phase": 6,
    "phaseName": "Phase 6: Generative AI, LLMs & Fine-Tuning",
    "category": "LLM Alignment",
    "difficulty": "hard",
    "title": "LLM Alignment I: Reinforcement Learning from Human Feedback (RLHF)",
    "summary": "Align language models with human values (Helpful, Harmless, Honest). Trace the 3-step RLHF pipeline: Supervised Fine-Tuning (SFT), Reward Model (RM) pairwise training, and PPO policy optimization.",
    "concepts": [
      "Pretraining vs Post-Training Alignment",
      "Supervised Fine-Tuning (SFT) Demonstrations",
      "Pairwise Preference Ranking & Bradley-Terry Model",
      "Reward Model Training (r_theta(prompt, response))",
      "Proximal Policy Optimization (PPO) with KL Penalty"
    ],
    "references": {
      "gfg": {
        "title": "RLHF in Machine Learning",
        "url": "https://www.geeksforgeeks.org/reinforcement-learning-from-human-feedback-rlhf/"
      },
      "tutorialspoint": {
        "title": "Reinforcement Learning Tutorial",
        "url": "https://www.tutorialspoint.com/reinforcement_learning/index.htm"
      },
      "w3schools": {
        "title": "Reinforcement Learning in AI",
        "url": "https://www.w3schools.com/ai/ai_reinforcement_learning.asp"
      }
    },
    "practice": "Implement the Bradley-Terry pairwise preference loss function in PyTorch: - log sigma(r(y_w) - r(y_l)).",
    "formula": "Loss_RM = - E_{(x, y_w, y_l)} [log sigma(r_theta(x, y_w) - r_theta(x, y_l))]",
    "repoRef": "Datasets.md#10-rlhf--alignment-datasets"
  },
  {
    "day": 87,
    "phase": 6,
    "phaseName": "Phase 6: Generative AI, LLMs & Fine-Tuning",
    "category": "LLM Alignment",
    "difficulty": "hard",
    "title": "LLM Alignment II: Direct Preference Optimization (DPO) & ORPO",
    "summary": "Eliminate complex PPO training loops. Learn Rafailov et al.'s Direct Preference Optimization (DPO), which analytically solves for the implicit reward directly from policy log-likelihoods.",
    "concepts": [
      "Instability of PPO RL Training",
      "DPO Mathematical Reformulation of Implicit Reward",
      "Direct Binary Cross-Entropy Loss on Policy Logits",
      "Reference Model pi_ref Freezing",
      "Odds Ratio Preference Optimization (ORPO) without SFT Step"
    ],
    "references": {
      "gfg": {
        "title": "Direct Preference Optimization (DPO)",
        "url": "https://www.geeksforgeeks.org/direct-preference-optimization-dpo/"
      },
      "tutorialspoint": {
        "title": "LLM Alignment Techniques",
        "url": "https://www.tutorialspoint.com/llm/llm_alignment.htm"
      },
      "w3schools": {
        "title": "LLM Alignment in AI",
        "url": "https://www.w3schools.com/ai/ai_llm_alignment.asp"
      }
    },
    "practice": "Calculate the DPO loss for a single preferred/dispreferred response pair given policy and reference model log-probabilities.",
    "formula": "Loss_DPO = - log sigma(beta * log(pi_theta(y_w|x)/pi_ref(y_w|x)) - beta * log(pi_theta(y_l|x)/pi_ref(y_l|x)))",
    "repoRef": "Projects.md#9-llms--fine-tuning"
  },
  {
    "day": 88,
    "phase": 6,
    "phaseName": "Phase 6: Generative AI, LLMs & Fine-Tuning",
    "category": "Retrieval-Augmented Generation",
    "difficulty": "medium",
    "title": "Retrieval-Augmented Generation (RAG): Chunking, Embeddings & Vector DBs",
    "summary": "Ground LLMs in enterprise private knowledge to eliminate hallucinations. Master document chunking strategies, dense embedding models, vector indices (HNSW, IVFFlat), and top-k retrieval.",
    "concepts": [
      "Hallucination Causes & Knowledge Cutoff",
      "Document Chunking Strategies (Fixed-size, Recursive, Semantic)",
      "Dense Text Embeddings (BGE, OpenAI text-embedding-3)",
      "Vector Similarity Indices (HNSW, Cosine, L2)",
      "Vector Databases (ChromaDB, Pinecone, Qdrant, Milvus)"
    ],
    "references": {
      "gfg": {
        "title": "Retrieval Augmented Generation (RAG)",
        "url": "https://www.geeksforgeeks.org/retrieval-augmented-generation-rag/"
      },
      "tutorialspoint": {
        "title": "LangChain Tutorial",
        "url": "https://www.tutorialspoint.com/langchain/index.htm"
      },
      "w3schools": {
        "title": "RAG in AI",
        "url": "https://www.w3schools.com/ai/ai_rag.asp"
      }
    },
    "practice": "Build a mini RAG pipeline in Python: chunk a markdown file, embed chunks with sentence-transformers, store in ChromaDB, and query with top-k retrieval.",
    "formula": "Cosine Similarity: sim(q, d) = (q . d) / (||q|| * ||d||)",
    "repoRef": "Tools.md#8-vector-databases--retrieval"
  },
  {
    "day": 89,
    "phase": 6,
    "phaseName": "Phase 6: Generative AI, LLMs & Fine-Tuning",
    "category": "Advanced RAG",
    "difficulty": "hard",
    "title": "Advanced RAG: Hybrid Search, Cross-Encoder Re-Ranking & Context Compression",
    "summary": "Build industrial-grade RAG systems. Learn Hybrid Search combining BM25 keyword matching with dense vector retrieval via Reciprocal Rank Fusion (RRF), Cross-Encoder re-rankers, and RAGAS metrics.",
    "concepts": [
      "Sparse Retrieval (BM25) vs Dense Vectors",
      "Reciprocal Rank Fusion (RRF) Algorithm",
      "Cross-Encoder Re-Ranking (Cohere / BGE-Reranker)",
      "Context Window Compression & Lost in the Middle Mitigation",
      "RAG Evaluation Triad: Faithfulness, Answer Relevance, Context Recall (Ragas)"
    ],
    "references": {
      "gfg": {
        "title": "Advanced RAG Techniques",
        "url": "https://www.geeksforgeeks.org/advanced-rag-techniques/"
      },
      "tutorialspoint": {
        "title": "Vector Databases Guide",
        "url": "https://www.tutorialspoint.com/vector_database/index.htm"
      },
      "w3schools": {
        "title": "Vector Search in AI",
        "url": "https://www.w3schools.com/ai/ai_vector_search.asp"
      }
    },
    "practice": "Implement Reciprocal Rank Fusion (RRF) in Python to combine two ranked result lists (BM25 and Vector Search) with k=60.",
    "formula": "RRF_score(d) = sum_{m in Models} 1 / (k + rank_m(d))",
    "repoRef": "Projects.md#10-rag-agents--llm-applications"
  },
  {
    "day": 90,
    "phase": 6,
    "phaseName": "Phase 6: Generative AI, LLMs & Fine-Tuning",
    "category": "AI Agents & Function Calling",
    "difficulty": "hard",
    "title": "Autonomous AI Agents: ReAct Framework, Tool Calling & Multi-Agent Systems",
    "summary": "Turn LLMs into autonomous problem-solving agents. Master the ReAct framework (Reasoning + Acting), structured JSON function calling, memory persistence, and multi-agent coordination with LangGraph.",
    "concepts": [
      "ReAct Loop: Thought -> Action -> Action Input -> Observation",
      "Function Calling & Pydantic Tool Schemas",
      "Short-Term vs Long-Term Memory (Scratchpads & Vector History)",
      "Cyclic Graph State Machines (LangGraph)",
      "Multi-Agent Collaboration & Supervisor Patterns"
    ],
    "references": {
      "gfg": {
        "title": "AI Agents Introduction",
        "url": "https://www.geeksforgeeks.org/ai-agents-introduction/"
      },
      "tutorialspoint": {
        "title": "LangChain Agents Tutorial",
        "url": "https://www.tutorialspoint.com/langchain/langchain_agents.htm"
      },
      "w3schools": {
        "title": "AI Agents Overview",
        "url": "https://www.w3schools.com/ai/ai_agents.asp"
      }
    },
    "practice": "Build a custom ReAct agent from scratch in Python that parses LLM thoughts, calls a calculator tool, feeds results back as observation, and returns a final answer.",
    "formula": "Prompt Pattern: 'Question: ... Thought: ... Action: [tool] Action Input: [...]'",
    "repoRef": "Projects.md#10-rag-agents--llm-applications"
  },
  {
    "day": 91,
    "phase": 7,
    "phaseName": "Phase 7: MLOps, System Design & Deployment",
    "category": "Model Serving & APIs",
    "difficulty": "easy",
    "title": "Model Serving & REST APIs: FastAPI, Pydantic & Async Endpoints",
    "summary": "Wrap models in production-grade REST APIs. Learn FastAPI: asynchronous async/await endpoints, input schema validation with Pydantic BaseModel, background tasks, and health checks.",
    "concepts": [
      "REST API Architecture for Machine Learning",
      "Pydantic Schema Validation & Type Hints",
      "FastAPI Dependency Injection (Depends)",
      "Async Event Loop & Concurrency",
      "Lifespan Context Managers (Loading Models at Startup)"
    ],
    "references": {
      "gfg": {
        "title": "FastAPI Python Tutorial",
        "url": "https://www.geeksforgeeks.org/fastapi-tutorial/"
      },
      "tutorialspoint": {
        "title": "FastAPI Tutorial",
        "url": "https://www.tutorialspoint.com/fastapi/index.htm"
      },
      "w3schools": {
        "title": "Python API Tutorial",
        "url": "https://www.w3schools.com/python/python_api.asp"
      }
    },
    "practice": "Build a FastAPI app with /predict and /health endpoints that accepts JSON features, runs inference through a pickled model, and returns probabilities.",
    "formula": "FastAPI Lifespan: @asynccontextmanager async def lifespan(app): app.state.model = load_model()",
    "repoRef": "Projects.md#11-mlops--deployment"
  },
  {
    "day": 92,
    "phase": 7,
    "phaseName": "Phase 7: MLOps, System Design & Deployment",
    "category": "Containerization & Docker",
    "difficulty": "medium",
    "title": "Containerization for Machine Learning: Docker & Multi-Stage Builds",
    "summary": "Package models, code, and CUDA dependencies into reproducible containers. Master Dockerfile syntax, multi-stage builds for small image footprints, GPU acceleration with NVIDIA Container Toolkit, and Docker Compose.",
    "concepts": [
      "Containers vs Virtual Machines",
      "Dockerfile Instructions (FROM, COPY, RUN, CMD)",
      "Multi-Stage Builds to Minimize Image Size",
      "NVIDIA Container Toolkit (--gpus all)",
      "Docker Compose for Multi-Service Orchestration"
    ],
    "references": {
      "gfg": {
        "title": "Docker Tutorial for Beginners",
        "url": "https://www.geeksforgeeks.org/docker-tutorial/"
      },
      "tutorialspoint": {
        "title": "Docker Tutorial",
        "url": "https://www.tutorialspoint.com/docker/index.htm"
      },
      "w3schools": {
        "title": "AI Model Deployment",
        "url": "https://www.w3schools.com/ai/ai_deployment.asp"
      }
    },
    "practice": "Write an optimized multi-stage Dockerfile for a FastAPI ML model that separates build dependencies from the final slim runtime image.",
    "formula": "Docker Build: docker build -t ml-api:v1 . ; docker run -p 8000:8000 ml-api:v1",
    "repoRef": "Tools.md#11-mlops-deployment--infrastructure"
  },
  {
    "day": 93,
    "phase": 7,
    "phaseName": "Phase 7: MLOps, System Design & Deployment",
    "category": "High-Throughput Inference",
    "difficulty": "hard",
    "title": "Optimized Inference Engines: ONNX Runtime, TensorRT & vLLM",
    "summary": "Reduce latency and maximize server throughput. Convert PyTorch models to ONNX (Open Neural Network Exchange), compile with TensorRT, and deploy LLMs with vLLM PagedAttention.",
    "concepts": [
      "Model Export to ONNX Graph Format",
      "ONNX Runtime Execution Providers (CPU, CUDA, TensorRT)",
      "Quantization (FP16, INT8 Post-Training Quantization)",
      "PagedAttention in vLLM (Eliminating KV-Cache Fragmentation)",
      "Continuous Batching for LLM Throughput"
    ],
    "references": {
      "gfg": {
        "title": "ONNX (Open Neural Network Exchange)",
        "url": "https://www.geeksforgeeks.org/onnx-open-neural-network-exchange/"
      },
      "tutorialspoint": {
        "title": "ML Model Deployment Tutorial",
        "url": "https://www.tutorialspoint.com/machine_learning/machine_learning_deployment.htm"
      },
      "w3schools": {
        "title": "ONNX in AI",
        "url": "https://www.w3schools.com/ai/ai_onnx.asp"
      }
    },
    "practice": "Export a PyTorch classifier to onnx format with torch.onnx.export and run inference using onnxruntime.InferenceSession.",
    "formula": "PagedAttention manages KV-cache memory as virtual pages, increasing serving throughput by 2x-4x",
    "repoRef": "Tools.md#9-model-serving--inference"
  },
  {
    "day": 94,
    "phase": 7,
    "phaseName": "Phase 7: MLOps, System Design & Deployment",
    "category": "Experiment Tracking",
    "difficulty": "medium",
    "title": "Experiment Tracking & Model Registry: MLflow & Weights & Biases",
    "summary": "Track hyperparameters, metrics, and model artifacts systematically. Learn MLflow Tracking, Model Registry (Staging, Production), autologging, and Weights & Biases (W&B) experiment dashboards.",
    "concepts": [
      "Reproducibility in Machine Learning",
      "MLflow Experiments, Runs & Autologging",
      "Logging Hyperparameters, Metrics & Artifacts",
      "MLflow Model Registry & Stage Transitions",
      "Weights & Biases (W&B) Custom Dashboards"
    ],
    "references": {
      "gfg": {
        "title": "MLflow Tutorial for Machine Learning",
        "url": "https://www.geeksforgeeks.org/mlflow-tutorial/"
      },
      "tutorialspoint": {
        "title": "ML Lifecycle Management",
        "url": "https://www.tutorialspoint.com/machine_learning/machine_learning_lifecycle.htm"
      },
      "w3schools": {
        "title": "MLOps in Data Science",
        "url": "https://www.w3schools.com/datascience/ds_mlops.asp"
      }
    },
    "practice": "Instrument a training script with mlflow.start_run(), log params (learning_rate, batch_size), metrics (accuracy, val_loss), and log the model artifact.",
    "formula": "MLflow Registry lifecycle: None -> Staging -> Production -> Archived",
    "repoRef": "Tools.md#6-experiment-tracking--evaluation"
  },
  {
    "day": 95,
    "phase": 7,
    "phaseName": "Phase 7: MLOps, System Design & Deployment",
    "category": "Data Pipelines & Feature Stores",
    "difficulty": "medium",
    "title": "Feature Stores & Automated Pipelines: Feast & Apache Airflow",
    "summary": "Prevent train/serve feature skew. Learn Feature Stores (Feast) for online low-latency lookups and offline historical point-in-time joins, and orchestrate DAG pipelines with Apache Airflow.",
    "concepts": [
      "Train/Serve Feature Skew Problem",
      "Online vs Offline Feature Stores",
      "Point-in-Time Correctness (Time-Travel Joins)",
      "Feast Feature Store Definitions",
      "Apache Airflow DAGs for Scheduled Retraining"
    ],
    "references": {
      "gfg": {
        "title": "Feature Store in Machine Learning",
        "url": "https://www.geeksforgeeks.org/feature-store-in-machine-learning/"
      },
      "tutorialspoint": {
        "title": "Apache Airflow Tutorial",
        "url": "https://www.tutorialspoint.com/apache_airflow/index.htm"
      },
      "w3schools": {
        "title": "Data Pipelines in Data Science",
        "url": "https://www.w3schools.com/datascience/ds_data_pipelines.asp"
      }
    },
    "practice": "Define a simple Airflow DAG in Python with BashOperator and PythonOperator that simulates extracting data, validating schema, and triggering model evaluation.",
    "formula": "Point-in-Time Join: attach features as of the observation event timestamp t_0 to prevent future lookahead leakage",
    "repoRef": "Tools.md#7-data-engineering--pipelines"
  },
  {
    "day": 96,
    "phase": 7,
    "phaseName": "Phase 7: MLOps, System Design & Deployment",
    "category": "Model Monitoring & Drift",
    "difficulty": "medium",
    "title": "Production Model Monitoring: Data Drift, Concept Drift & Alerting",
    "summary": "Detect model degradation in production before users notice. Learn Data Drift P(X) vs Concept Drift P(Y|X), statistical drift tests (KS-test, Population Stability Index), and Prometheus/Evidently AI.",
    "concepts": [
      "Data Drift (Covariate Shift: P(X) changes)",
      "Concept Drift (P(Y|X) relationship changes)",
      "Kolmogorov-Smirnov (KS) Test for Continuous Drift",
      "Population Stability Index (PSI < 0.1 stable, > 0.2 significant)",
      "Evidently AI Reports & Prometheus Metrics Exporters"
    ],
    "references": {
      "gfg": {
        "title": "Data Drift and Concept Drift in ML",
        "url": "https://www.geeksforgeeks.org/data-drift-and-concept-drift-in-machine-learning/"
      },
      "tutorialspoint": {
        "title": "ML Monitoring Guide",
        "url": "https://www.tutorialspoint.com/machine_learning/machine_learning_monitoring.htm"
      },
      "w3schools": {
        "title": "Model Monitoring in Data Science",
        "url": "https://www.w3schools.com/datascience/ds_monitoring.asp"
      }
    },
    "practice": "Implement Population Stability Index (PSI) in Python to compare feature distributions between training and production batches.",
    "formula": "PSI = sum (Actual_% - Expected_%) * ln(Actual_% / Expected_%)",
    "repoRef": "Books.md#9-mlops--systems"
  },
  {
    "day": 97,
    "phase": 7,
    "phaseName": "Phase 7: MLOps, System Design & Deployment",
    "category": "ML System Design",
    "difficulty": "hard",
    "title": "ML System Design: Recommendation Systems & Large-Scale Architectures",
    "summary": "Design planetary-scale AI systems for technical interviews. Master the two-stage recommendation architecture: Candidate Generation (Retrieval / Two-Tower Model) and Ranking (Heavy Cross-Features).",
    "concepts": [
      "Candidate Generation (Retrieval: Millions -> Hundreds)",
      "Ranking Stage (Hundreds -> Top 10)",
      "Two-Tower Neural Networks (User Tower & Item Tower)",
      "Cold Start Problem for Users and Items",
      "Balancing Exploration vs Exploitation (Bandits)"
    ],
    "references": {
      "gfg": {
        "title": "System Design for Machine Learning Applications",
        "url": "https://www.geeksforgeeks.org/system-design-for-machine-learning-applications/"
      },
      "tutorialspoint": {
        "title": "System Design Tutorial",
        "url": "https://www.tutorialspoint.com/system_design/index.htm"
      },
      "w3schools": {
        "title": "AI System Design",
        "url": "https://www.w3schools.com/ai/ai_system_design.asp"
      }
    },
    "practice": "Draw and document the complete system architecture for a video recommendation feed (YouTube/TikTok style), specifying SLAs and fallback caches.",
    "formula": "Two-Tower Score: Score(user, item) = User_Tower(user_features) . Item_Tower(item_features)",
    "repoRef": "Interview_Questions.md#10-ml-system-design--mlops"
  },
  {
    "day": 98,
    "phase": 8,
    "phaseName": "Phase 8: Capstone, Portfolio & Interview Prep",
    "category": "End-to-End Capstone",
    "difficulty": "hard",
    "title": "Full-Stack Capstone Project: Production Enterprise AI Application",
    "summary": "Package your complete skillset into a standout portfolio project. Build an end-to-end production application combining RAG / Fine-Tuned Model, FastAPI backend, Docker container, and interactive frontend.",
    "concepts": [
      "Architectural Blueprint & Tradeoffs",
      "Robust Error Handling & Graceful Degradation",
      "Comprehensive README with Benchmarks & Architecture Diagram",
      "Interactive Demo Deployment (Hugging Face Spaces / Cloud)",
      "Git Version Control & Clean Commit History"
    ],
    "references": {
      "gfg": {
        "title": "End-to-End Machine Learning Project",
        "url": "https://www.geeksforgeeks.org/end-to-end-machine-learning-project/"
      },
      "tutorialspoint": {
        "title": "Streamlit Tutorial",
        "url": "https://www.tutorialspoint.com/streamlit/index.htm"
      },
      "w3schools": {
        "title": "AI Capstone Guide",
        "url": "https://www.w3schools.com/ai/ai_capstone.asp"
      }
    },
    "practice": "Deploy your capstone project with public live demo link, automated test suite, and clear system architecture diagram in your portfolio README.",
    "formula": "Production Ready = Robust API + Containerization + Automated Tests + Monitoring",
    "repoRef": "Projects.md#11-mlops--deployment"
  },
  {
    "day": 99,
    "phase": 8,
    "phaseName": "Phase 8: Capstone, Portfolio & Interview Prep",
    "category": "Interview Masterclass",
    "difficulty": "hard",
    "title": "AI/ML Coding & DSA Masterclass: Live Coding & Matrix Ops",
    "summary": "Ace the live coding rounds at top tech companies. Practice common AI/ML coding problems: implementing custom layers, vectorized matrix operations, loss gradients, and time/space complexity analysis.",
    "concepts": [
      "Custom Forward/Backward Layer Implementation",
      "Vectorized NumPy Transformations Under Time Constraints",
      "Time & Space Complexity of Attention and Convolutions",
      "Numerical Stability Traps (LogSumExp, Epsilon)",
      "Whiteboard Problem Solving Communication"
    ],
    "references": {
      "gfg": {
        "title": "Machine Learning Interview Questions",
        "url": "https://www.geeksforgeeks.org/machine-learning-interview-questions/"
      },
      "tutorialspoint": {
        "title": "ML Interview Questions",
        "url": "https://www.tutorialspoint.com/machine_learning/machine_learning_interview_questions.htm"
      },
      "w3schools": {
        "title": "AI Quiz & Coding Practice",
        "url": "https://www.w3schools.com/ai/ai_quiz.asp"
      }
    },
    "practice": "Solve 3 classic ML coding interview problems in under 30 minutes: (1) Vectorized Cosine Similarity, (2) Softmax with Temperature, (3) 1D Convolution.",
    "formula": "Self-Attention Time Complexity: O(N^2 * d); Space Complexity: O(N^2)",
    "repoRef": "Interview_Questions.md#11-coding-dsa--practical"
  },
  {
    "day": 100,
    "phase": 8,
    "phaseName": "Phase 8: Capstone, Portfolio & Interview Prep",
    "category": "Graduation & Consolidating Mastery",
    "difficulty": "medium",
    "title": "Graduation: Comprehensive Interview Review & 100-Day Mastery",
    "summary": "Celebrate your completion of the 100 Days of AI/ML! Review the top 100 theoretical, architectural, and behavioral interview questions across all 8 phases. You are fully prepared.",
    "concepts": [
      "Comprehensive 100-Day Knowledge Consolidation",
      "Behavioral Interview Prep (STAR Method for ML Projects)",
      "Explaining Complex Math to Non-Technical Stakeholders",
      "Future Directions: Frontier Multimodal, Reasoners & Agentic AI",
      "Certificate & 100% Completion Badge"
    ],
    "references": {
      "gfg": {
        "title": "Top Machine Learning Interview Questions",
        "url": "https://www.geeksforgeeks.org/top-50-machine-learning-interview-questions/"
      },
      "tutorialspoint": {
        "title": "Data Science Interview Questions",
        "url": "https://www.tutorialspoint.com/data_science/data_science_interview_questions.htm"
      },
      "w3schools": {
        "title": "Data Science Interview Preparation",
        "url": "https://www.w3schools.com/datascience/ds_interview.asp"
      }
    },
    "practice": "Do a full self-mock interview: answer 5 random questions from Interview_Questions.md without notes and explain your capstone architecture in 2 minutes.",
    "formula": "STAR Method: Situation -> Task -> Action -> Result (Quantified in Accuracy / Latency / ROI)",
    "repoRef": "Interview_Questions.md#12-behavioral--take-home"
  }
];

if (typeof module !== 'undefined') { module.exports = { COURSE_DATA }; }
