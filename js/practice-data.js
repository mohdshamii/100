/**
 * AI/ML Coding Practice Problems Dataset
 * Modeled after GeeksforGeeks Practice Portal
 */

const PRACTICE_PROBLEMS = [
  {
    id: "p1",
    title: "Mean Squared Error (MSE) & Gradient",
    category: "Loss Functions",
    difficulty: "easy",
    accuracy: "84.2%",
    submissions: "24.5k",
    gfgLink: "https://www.geeksforgeeks.org/mean-squared-error/",
    description: "Given two 1D lists of real numbers <code>y_true</code> and <code>y_pred</code> of equal length $N$, calculate both the Mean Squared Error (MSE) and the gradient of the MSE loss with respect to <code>y_pred</code>.",
    constraints: "1 <= N <= 1000\n-10^4 <= y_true[i], y_pred[i] <= 10^4",
    examples: [
      {
        input: "y_true = [1.0, 2.0, 3.0], y_pred = [1.5, 2.0, 2.0]",
        output: "mse = 0.4167, grad = [0.3333, 0.0, -0.6667]",
        explanation: "Errors: [0.5, 0.0, -1.0]. Squared errors: [0.25, 0.0, 1.0]. Sum = 1.25. MSE = 1.25 / 3 = 0.4167. Gradient is (2/N) * (y_pred - y_true)."
      }
    ],
    starterCode: `def calculate_mse_and_grad(y_true, y_pred):
    """
    Calculate Mean Squared Error and its gradient with respect to y_pred.
    
    Args:
        y_true (list of float): Ground truth target values
        y_pred (list of float): Model predicted values
        
    Returns:
        tuple: (mse: float, grad: list of float)
    """
    # Your code here
    pass
`,
    solutionCode: `def calculate_mse_and_grad(y_true, y_pred):
    n = len(y_true)
    errors = [yp - yt for yt, yp in zip(y_true, y_pred)]
    mse = sum(e ** 2 for e in errors) / n
    grad = [(2.0 / n) * e for e in errors]
    return round(mse, 4), [round(g, 4) for g in grad]
`,
    hint: "Remember that MSE = (1/N) * sum((y_pred - y_true)^2). The derivative d(MSE)/d(y_pred) = (2/N) * (y_pred - y_true).",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    testCases: [
      {
        args: [[1.0, 2.0, 3.0], [1.5, 2.0, 2.0]],
        expected: [0.4167, [0.3333, 0.0, -0.6667]]
      },
      {
        args: [[0.0, 0.0], [1.0, -1.0]],
        expected: [1.0, [1.0, -1.0]]
      }
    ]
  },
  {
    id: "p2",
    title: "Sigmoid Activation & Derivative",
    category: "Activation Functions",
    difficulty: "easy",
    accuracy: "88.6%",
    submissions: "31.2k",
    gfgLink: "https://www.geeksforgeeks.org/activation-functions-neural-networks/",
    description: "Implement the Sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ and its derivative $\\sigma'(z) = \\sigma(z)(1 - \\sigma(z))$ for a given scalar or list of input values.",
    constraints: "-50.0 <= z <= 50.0",
    examples: [
      {
        input: "z = 0.0",
        output: "sigma = 0.5, d_sigma = 0.25",
        explanation: "1 / (1 + e^0) = 1/2 = 0.5. Derivative is 0.5 * (1 - 0.5) = 0.25."
      }
    ],
    starterCode: `import math

def sigmoid_and_derivative(z):
    """
    Compute sigmoid and its derivative.
    
    Args:
        z (float): Input value
        
    Returns:
        tuple: (sigmoid_val: float, derivative_val: float)
    """
    # Your code here
    pass
`,
    solutionCode: `import math

def sigmoid_and_derivative(z):
    s = 1.0 / (1.0 + math.exp(-z))
    ds = s * (1.0 - s)
    return round(s, 4), round(ds, 4)
`,
    hint: "Recall that d(sigmoid)/dz can be expressed cleanly in terms of sigmoid itself: sigma * (1 - sigma).",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    testCases: [
      { args: [0.0], expected: [0.5, 0.25] },
      { args: [2.0], expected: [0.8808, 0.1050] }
    ]
  },
  {
    id: "p3",
    title: "Numerically Stable Softmax",
    category: "Deep Learning",
    difficulty: "medium",
    accuracy: "69.1%",
    submissions: "18.9k",
    gfgLink: "https://www.geeksforgeeks.org/soft-max-activation-function-in-python/",
    description: "Given a list of logits (unnormalized log-probabilities), compute the Softmax distribution. To prevent numerical overflow when exponentiating large values, implement the numerical stability trick: subtract $\\max(z)$ from each logit before applying $e^z$.",
    constraints: "1 <= len(logits) <= 1000\n-1000.0 <= logits[i] <= 1000.0",
    examples: [
      {
        input: "logits = [1000.0, 1001.0, 1002.0]",
        output: "[0.0900, 0.2447, 0.6652]",
        explanation: "Naive exp(1002) causes floating-point overflow. Subtracting 1002 yields [-2, -1, 0]. Exp yields [e^-2, e^-1, 1], normalized to sum to 1."
      }
    ],
    starterCode: `import math

def stable_softmax(logits):
    """
    Compute numerically stable softmax over a list of logits.
    
    Args:
        logits (list of float): Unnormalized scores
        
    Returns:
        list of float: Probability distribution summing to 1.0
    """
    # Your code here
    pass
`,
    solutionCode: `import math

def stable_softmax(logits):
    max_val = max(logits)
    shifted_exp = [math.exp(x - max_val) for x in logits]
    total = sum(shifted_exp)
    return [round(e / total, 4) for e in shifted_exp]
`,
    hint: "Since Softmax(z)_i = e^{z_i - c} / sum(e^{z_j - c}) for any constant c, setting c = max(z) guarantees all exponents <= 0, completely avoiding overflow.",
    timeComplexity: "O(K) where K is number of classes",
    spaceComplexity: "O(K)",
    testCases: [
      { args: [[1000.0, 1001.0, 1002.0]], expected: [0.0900, 0.2447, 0.6652] },
      { args: [[1.0, 1.0]], expected: [0.5, 0.5] }
    ]
  },
  {
    id: "p4",
    title: "Binary Cross-Entropy Loss with Clipping",
    category: "Loss Functions",
    difficulty: "medium",
    accuracy: "73.5%",
    submissions: "19.8k",
    gfgLink: "https://www.geeksforgeeks.org/cross-entropy-loss-function/",
    description: "Given ground truth binary labels <code>y_true</code> (0 or 1) and predicted probabilities <code>y_pred</code> $\\in [0, 1]$, calculate Binary Cross-Entropy loss. Clip predictions to $[\\epsilon, 1-\\epsilon]$ with $\\epsilon = 10^{-15}$ to prevent $\\log(0) = -\\infty$.",
    constraints: "1 <= N <= 10^5\ny_true[i] in {0, 1}\n0.0 <= y_pred[i] <= 1.0",
    examples: [
      {
        input: "y_true = [1, 0, 1, 1], y_pred = [0.9, 0.1, 0.8, 0.7]",
        output: "0.1977",
        explanation: "- (1/4) * [log(0.9) + log(0.9) + log(0.8) + log(0.7)] approx 0.1977."
      }
    ],
    starterCode: `import math

def binary_cross_entropy(y_true, y_pred, eps=1e-15):
    """
    Compute binary cross-entropy with epsilon clipping.
    
    Args:
        y_true (list of int): Ground truth 0 or 1
        y_pred (list of float): Predicted probabilities
        eps (float): Numerical stability floor
        
    Returns:
        float: Average BCE loss rounded to 4 decimals
    """
    # Your code here
    pass
`,
    solutionCode: `import math

def binary_cross_entropy(y_true, y_pred, eps=1e-15):
    n = len(y_true)
    total_loss = 0.0
    for yt, yp in zip(y_true, y_pred):
        yp_clipped = min(max(yp, eps), 1.0 - eps)
        loss = -(yt * math.log(yp_clipped) + (1 - yt) * math.log(1.0 - yp_clipped))
        total_loss += loss
    return round(total_loss / n, 4)
`,
    hint: "Use min(max(p, eps), 1.0 - eps) to clamp the probabilities safely before computing math.log.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    testCases: [
      { args: [[1, 0, 1, 1], [0.9, 0.1, 0.8, 0.7]], expected: 0.1977 },
      { args: [[1, 0], [1.0, 0.0]], expected: 0.0 }
    ]
  },
  {
    id: "p5",
    title: "Cosine Similarity Between Embeddings",
    category: "NLP & Embeddings",
    difficulty: "easy",
    accuracy: "86.4%",
    submissions: "28.1k",
    gfgLink: "https://www.geeksforgeeks.org/cosine-similarity/",
    description: "Given two dense embedding vectors $u$ and $v$ of dimension $D$, compute their cosine similarity: $\\cos(u, v) = \\frac{u \\cdot v}{\\|u\\|_2 \\|v\\|_2}$. Return 0.0 if either vector has zero magnitude.",
    constraints: "1 <= D <= 1024",
    examples: [
      {
        input: "u = [1.0, 2.0, 3.0], v = [2.0, 4.0, 6.0]",
        output: "1.0",
        explanation: "Vector v is a direct positive scalar multiple of u (2 * u), so angle is 0 degrees and cosine similarity is 1.0."
      }
    ],
    starterCode: `import math

def cosine_similarity(u, v):
    """
    Calculate cosine similarity between two embedding vectors.
    
    Args:
        u (list of float): Vector 1
        v (list of float): Vector 2
        
    Returns:
        float: Cosine similarity in range [-1.0, 1.0]
    """
    # Your code here
    pass
`,
    solutionCode: `import math

def cosine_similarity(u, v):
    dot_prod = sum(a * b for a, b in zip(u, v))
    norm_u = math.sqrt(sum(a * a for a in u))
    norm_v = math.sqrt(sum(b * b for b in v))
    if norm_u == 0.0 or norm_v == 0.0:
        return 0.0
    return round(dot_prod / (norm_u * norm_v), 4)
`,
    hint: "Compute dot product and L2 norms separately. Guard against division by zero if norm is 0.",
    timeComplexity: "O(D)",
    spaceComplexity: "O(1)",
    testCases: [
      { args: [[1.0, 2.0, 3.0], [2.0, 4.0, 6.0]], expected: 1.0 },
      { args: [[1.0, 0.0], [0.0, 1.0]], expected: 0.0 }
    ]
  },
  {
    id: "p6",
    title: "Linear Regression Batch Gradient Descent Step",
    category: "Classic ML",
    difficulty: "medium",
    accuracy: "71.3%",
    submissions: "15.4k",
    gfgLink: "https://www.geeksforgeeks.org/gradient-descent-in-linear-regression/",
    description: "Given feature matrix $X$ (shape $N \\times D$), targets $y$ ($N$), current weight vector $w$ ($D$), bias $b$, and learning rate $\\alpha$, perform one single step of Batch Gradient Descent to update $w$ and $b$.",
    constraints: "1 <= N <= 1000, 1 <= D <= 50",
    examples: [
      {
        input: "X = [[1.0], [2.0]], y = [2.0, 4.0], w = [0.0], b = 0.0, alpha = 0.1",
        output: "w_new = [0.5], b_new = [0.3]",
        explanation: "Predictions are [0, 0]. Errors are [-2, -4]. dw = (2/2)*(-2*1 + -4*2) = -10. db = (2/2)*(-6) = -6. w := 0 - 0.1*(-10) = 1.0 (with factor of 2/N or 1/N convention)."
      }
    ],
    starterCode: `def bgd_step(X, y, w, b, alpha):
    """
    Perform one step of gradient descent on MSE loss: (1/N) * sum(y_hat - y)^2.
    
    Returns:
        tuple: (w_new: list, b_new: float)
    """
    # Your code here
    pass
`,
    solutionCode: `def bgd_step(X, y, w, b, alpha):
    N = len(X)
    D = len(w)
    
    # y_hat = Xw + b
    y_hat = [sum(X[i][j] * w[j] for j in range(D)) + b for i in range(N)]
    errors = [y_hat[i] - y[i] for i in range(N)]
    
    # Gradients with factor (2/N)
    dw = [0.0] * D
    for j in range(D):
        dw[j] = (2.0 / N) * sum(errors[i] * X[i][j] for i in range(N))
    db = (2.0 / N) * sum(errors)
    
    w_new = [round(w[j] - alpha * dw[j], 4) for j in range(D)]
    b_new = round(b - alpha * db, 4)
    return w_new, b_new
`,
    hint: "Error is (y_hat - y). The derivative dw_j is (2/N)*sum(error_i * X_ij) and db is (2/N)*sum(error_i).",
    timeComplexity: "O(N * D)",
    spaceComplexity: "O(D)",
    testCases: [
      {
        args: [[[1.0], [2.0]], [2.0, 4.0], [0.0], 0.0, 0.1],
        expected: [[1.0], 0.6]
      }
    ]
  },
  {
    id: "p7",
    title: "Confusion Matrix Metrics: Precision, Recall & F1",
    category: "Evaluation Metrics",
    difficulty: "easy",
    accuracy: "89.2%",
    submissions: "35.7k",
    gfgLink: "https://www.geeksforgeeks.org/confusion-matrix-machine-learning/",
    description: "Given lists of actual binary labels <code>y_true</code> and predictions <code>y_pred</code>, return a dictionary with precision, recall, and F1-score rounded to 4 decimals.",
    constraints: "1 <= N <= 10^4\ny_true[i], y_pred[i] in {0, 1}",
    examples: [
      {
        input: "y_true = [1, 1, 0, 1, 0], y_pred = [1, 0, 0, 1, 1]",
        output: "{'precision': 0.6667, 'recall': 0.6667, 'f1': 0.6667}",
        explanation: "TP = 2, FP = 1, FN = 1. Precision = 2/3 = 0.6667. Recall = 2/3 = 0.6667. F1 = 0.6667."
      }
    ],
    starterCode: `def classification_metrics(y_true, y_pred):
    """
    Calculate precision, recall, and F1-score.
    
    Returns:
        dict: {'precision': float, 'recall': float, 'f1': float}
    """
    # Your code here
    pass
`,
    solutionCode: `def classification_metrics(y_true, y_pred):
    tp = sum(1 for yt, yp in zip(y_true, y_pred) if yt == 1 and yp == 1)
    fp = sum(1 for yt, yp in zip(y_true, y_pred) if yt == 0 and yp == 1)
    fn = sum(1 for yt, yp in zip(y_true, y_pred) if yt == 1 and yp == 0)
    
    precision = tp / (tp + fp) if (tp + fp) > 0 else 0.0
    recall = tp / (tp + fn) if (tp + fn) > 0 else 0.0
    f1 = (2.0 * precision * recall) / (precision + recall) if (precision + recall) > 0 else 0.0
    
    return {
        'precision': round(precision, 4),
        'recall': round(recall, 4),
        'f1': round(f1, 4)
    }
`,
    hint: "Count TP (true=1, pred=1), FP (true=0, pred=1), FN (true=1, pred=0). F1 is the harmonic mean: 2*P*R / (P+R).",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    testCases: [
      {
        args: [[1, 1, 0, 1, 0], [1, 0, 0, 1, 1]],
        expected: {'precision': 0.6667, 'recall': 0.6667, 'f1': 0.6667}
      }
    ]
  },
  {
    id: "p8",
    title: "Intersection over Union (IoU) for Bounding Boxes",
    category: "Computer Vision",
    difficulty: "medium",
    accuracy: "76.8%",
    submissions: "22.3k",
    gfgLink: "https://www.geeksforgeeks.org/intersection-over-union-iou-for-object-detection/",
    description: "Given two bounding boxes <code>boxA</code> and <code>boxB</code> in format <code>[x1, y1, x2, y2]</code> (top-left and bottom-right coordinates), compute their Intersection over Union (IoU). Return 0.0 if boxes do not intersect.",
    constraints: "0 <= x1 < x2 <= 10^4, 0 <= y1 < y2 <= 10^4",
    examples: [
      {
        input: "boxA = [0, 0, 2, 2], boxB = [1, 1, 3, 3]",
        output: "0.1429",
        explanation: "Intersection area is [1, 1] to [2, 2] = 1*1 = 1. Area A = 4, Area B = 4. Union = 4 + 4 - 1 = 7. IoU = 1/7 approx 0.1429."
      }
    ],
    starterCode: `def calculate_iou(boxA, boxB):
    """
    Compute IoU between two bounding boxes [x1, y1, x2, y2].
    
    Returns:
        float: IoU value in [0.0, 1.0] rounded to 4 decimals
    """
    # Your code here
    pass
`,
    solutionCode: `def calculate_iou(boxA, boxB):
    xA = max(boxA[0], boxB[0])
    yA = max(boxA[1], boxB[1])
    xB = min(boxA[2], boxB[2])
    yB = min(boxA[3], boxB[3])
    
    inter_w = max(0, xB - xA)
    inter_h = max(0, yB - yA)
    inter_area = inter_w * inter_h
    
    areaA = (boxA[2] - boxA[0]) * (boxA[3] - boxA[1])
    areaB = (boxB[2] - boxB[0]) * (boxB[3] - boxB[1])
    
    union_area = areaA + areaB - inter_area
    if union_area == 0:
        return 0.0
    return round(inter_area / union_area, 4)
`,
    hint: "The intersection rectangle top-left is (max(x1_A, x1_B), max(y1_A, y1_B)) and bottom-right is (min(x2_A, x2_B), min(y2_A, y2_B)).",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    testCases: [
      { args: [[0, 0, 2, 2], [1, 1, 3, 3]], expected: 0.1429 },
      { args: [[0, 0, 1, 1], [2, 2, 3, 3]], expected: 0.0 }
    ]
  },
  {
    id: "p9",
    title: "Scaled Dot-Product Attention from Scratch",
    category: "Transformers & LLMs",
    difficulty: "hard",
    accuracy: "58.4%",
    submissions: "16.1k",
    gfgLink: "https://www.geeksforgeeks.org/self-attention-in-nlp/",
    description: "Implement single-head Scaled Dot-Product Attention: $\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{Q K^T}{\\sqrt{d_k}}\\right) V$. Given 2D matrices $Q$ ($S_q \\times d_k$), $K$ ($S_k \\times d_k$), and $V$ ($S_k \\times d_v$), compute the output matrix ($S_q \\times d_v$).",
    constraints: "1 <= S_q, S_k <= 64, 1 <= d_k, d_v <= 64",
    examples: [
      {
        input: "Q = [[1.0, 0.0]], K = [[1.0, 0.0], [0.0, 1.0]], V = [[1.0], [0.0]]",
        output: "[[0.7311]]",
        explanation: "QK^T = [1.0, 0.0]. Scale by sqrt(2) = 1.414 -> [0.7071, 0.0]. Softmax gives [0.670, 0.330] approx. Times V yields weighted value."
      }
    ],
    starterCode: `import math

def scaled_dot_product_attention(Q, K, V):
    """
    Compute Attention(Q, K, V) = softmax(Q K^T / sqrt(d_k)) V.
    
    Args:
        Q: list of list of float (Sq x d_k)
        K: list of list of float (Sk x d_k)
        V: list of list of float (Sk x d_v)
        
    Returns:
        list of list of float (Sq x d_v) rounded to 4 decimals
    """
    # Your code here
    pass
`,
    solutionCode: `import math

def scaled_dot_product_attention(Q, K, V):
    Sq = len(Q)
    Sk = len(K)
    dk = len(K[0])
    dv = len(V[0])
    scale = math.sqrt(dk)
    
    # 1. Q K^T
    scores = []
    for i in range(Sq):
        row_scores = []
        for j in range(Sk):
            dot = sum(Q[i][d] * K[j][d] for d in range(dk))
            row_scores.append(dot / scale)
        scores.append(row_scores)
        
    # 2. Softmax per row
    weights = []
    for row in scores:
        max_val = max(row)
        exps = [math.exp(x - max_val) for x in row]
        total = sum(exps)
        weights.append([e / total for e in exps])
        
    # 3. Weights * V
    output = []
    for i in range(Sq):
        out_row = []
        for d in range(dv):
            val = sum(weights[i][j] * V[j][d] for j in range(Sk))
            out_row.append(round(val, 4))
        output.append(out_row)
    return output
`,
    hint: "Multiply Q with K transpose, divide every element by math.sqrt(d_k), apply numerically stable softmax across columns for each row, and multiply by V.",
    timeComplexity: "O(S_q * S_k * d_k + S_q * S_k * d_v)",
    spaceComplexity: "O(S_q * S_k + S_q * d_v)",
    testCases: [
      {
        args: [
          [[1.0, 0.0]],
          [[1.0, 0.0], [0.0, 1.0]],
          [[1.0], [0.0]]
        ],
        expected: [[0.6700]]
      }
    ]
  },
  {
    id: "p10",
    title: "Inverted Dropout Forward Pass",
    category: "Deep Learning",
    difficulty: "medium",
    accuracy: "79.5%",
    submissions: "17.4k",
    gfgLink: "https://www.geeksforgeeks.org/dropout-in-neural-networks/",
    description: "Implement the forward pass of an Inverted Dropout layer for a 1D activation vector. Given drop probability $p \\in [0, 1)$ and a deterministic pseudo-random binary mask (1 for keep, 0 for drop), scale the retained activations by $\\frac{1}{1-p}$ so test-time inference requires no modifications.",
    constraints: "0.0 <= p < 1.0",
    examples: [
      {
        input: "activations = [2.0, 4.0, 6.0, 8.0], mask = [1, 0, 1, 0], p = 0.5",
        output: "[4.0, 0.0, 12.0, 0.0]",
        explanation: "Scale factor is 1 / (1 - 0.5) = 2.0. Retained elements are multiplied by 2.0: 2*2=4, 6*2=12."
      }
    ],
    starterCode: `def inverted_dropout(activations, mask, p):
    """
    Apply inverted dropout using the provided binary mask.
    
    Args:
        activations (list of float): Input activation vector
        mask (list of int): Binary mask (1=keep, 0=drop)
        p (float): Dropout probability
        
    Returns:
        list of float: Scaled activations rounded to 4 decimals
    """
    # Your code here
    pass
`,
    solutionCode: `def inverted_dropout(activations, mask, p):
    if p >= 1.0:
        return [0.0] * len(activations)
    scale = 1.0 / (1.0 - p)
    return [round(a * m * scale, 4) for a, m in zip(activations, mask)]
`,
    hint: "Inverted dropout scales retained activations by 1 / (1 - p). Multiply activations[i] * mask[i] * scale.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    testCases: [
      {
        args: [[2.0, 4.0, 6.0, 8.0], [1, 0, 1, 0], 0.5],
        expected: [4.0, 0.0, 12.0, 0.0]
      }
    ]
  }
];

if (typeof module !== 'undefined') {
  module.exports = { PRACTICE_PROBLEMS };
}
