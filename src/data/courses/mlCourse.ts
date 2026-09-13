import { Course } from '../types';

export const mlCourseData: Course = {
  courseId: "course-ml",
  title: "Machine Learning & Deep Learning Playlist",
  description: "Complete hands-on Machine Learning & Deep Learning curriculum from foundations to Transformers & Attention Mechanism.",
  category: "ai",
  company: "Sheryians AI School",
  instructor: "Sheryians AI School",
  thumbnail: "https://i.ytimg.com/vi/1L420xXpDTg/hqdefault.jpg",
  difficulty: "Intermediate",
  duration: "30 hours",
  durationHours: 30,
  language: "Hindi",
  certificateAvailable: true,
  isFree: true,
  isTrending: true,
  rating: 4.9,
  learners: "200k+",
  skills: ["Python", "Machine Learning", "Scikit-Learn", "Deep Learning", "NLP", "CNN", "RNN", "Transformers"],
  jobRoles: ["Data Scientist", "Machine Learning Engineer", "AI Researcher"],
  source: {
    type: "youtube_playlist",
    playlistUrl: "https://youtube.com/playlist?list=PLaldQ9PzZd9qT0KsKJ7yCq70iFFP3MFJ5&si=Q1PVx1HxQhku0qHl"
  },
  modules: [
    {
      moduleId: "module-ml-foundations",
      title: "Module 1: Machine Learning Foundations & Supervised Learning",
      lectures: [
        {
          lectureId: "ml-lecture-01",
          lectureNumber: 1,
          title: "Complete Machine Learning Course for Beginners | Part 1- Foundation",
          videoUrl: "https://www.youtube.com/embed/1L420xXpDTg",
          topics: ["Intro to Machine Learning", "AI vs ML vs Deep Learning", "Numpy & Pandas Foundations", "Features, Labels & Datasets"],
          assessment: { totalQuestions: 20, fundamentalQuestions: 10, codingQuestions: 10 },
          fundamentalQuestions: [
            {
              id: "ml-01-f-01",
              type: "fundamental",
              difficulty: "easy",
              question: "What is the primary definition of Machine Learning?",
              options: [
                "Writing explicit rule-based scripts for every scenario",
                "Enabling computers to learn and improve from experience without explicit programming",
                "Building physical hardware robots",
                "Designing relational database schemas"
              ],
              correctAnswer: 1,
              explanation: "Machine Learning is the field of study that gives computers the ability to learn without being explicitly programmed."
            },
            {
              id: "ml-01-f-02",
              type: "fundamental",
              difficulty: "easy",
              question: "In Machine Learning terminology, what does a 'feature' represent?",
              options: [
                "The target variable being predicted",
                "An individual measurable property or characteristic of a phenomenon being observed",
                "The hyperparameter tuning library",
                "A bug in the training pipeline"
              ],
              correctAnswer: 1,
              explanation: "A feature is an input variable used by the model to make predictions."
            },
            {
              id: "ml-01-f-03",
              type: "fundamental",
              difficulty: "easy",
              question: "Which of the following belongs to Unsupervised Learning?",
              options: [
                "Predicting house prices using square footage",
                "Classifying emails as spam or not spam",
                "Clustering customers into distinct market segments",
                "Forecasting next month's stock prices"
              ],
              correctAnswer: 2,
              explanation: "Customer segmentation via clustering is unsupervised because there are no predetermined labels provided."
            },
            {
              id: "ml-01-f-04",
              type: "fundamental",
              difficulty: "medium",
              question: "Why do we split datasets into Training, Validation, and Test sets?",
              options: [
                "To speed up hard drive storage allocation",
                "To evaluate how well the model generalizes to unseen data and prevent overfitting",
                "Because Python libraries require at least three arrays",
                "To balance memory between CPU and GPU cores"
              ],
              correctAnswer: 1,
              explanation: "Splitting data allows unbiased assessment of the model's ability to generalize to new, unseen data."
            },
            {
              id: "ml-01-f-05",
              type: "fundamental",
              difficulty: "medium",
              question: "What does the 'bias-variance tradeoff' describe in machine learning?",
              options: [
                "The trade-off between CPU memory and GPU execution speed",
                "The conflict between underfitting (high bias) and overfitting (high variance)",
                "The ratio between categorical features and numerical features",
                "The speed difference between NumPy and Pure Python"
              ],
              correctAnswer: 1,
              explanation: "High bias leads to underfitting (oversimplified model), while high variance leads to overfitting (capturing noise)."
            },
            {
              id: "ml-01-f-06",
              type: "fundamental",
              difficulty: "medium",
              question: "Which library in Python is primarily optimized for fast vectorized numerical array operations?",
              options: ["Flask", "NumPy", "BeautifulSoup", "Django"],
              correctAnswer: 1,
              explanation: "NumPy provides multidimensional arrays and vectorization implemented in C for high performance."
            },
            {
              id: "ml-01-f-07",
              type: "fundamental",
              difficulty: "hard",
              question: "What is data leakage in an ML pipeline?",
              options: [
                "Data lost due to hard disk corruption",
                "Information from outside the training dataset being inappropriately used to train the model",
                "When features have too many missing values",
                "When model weights are leaked to the public"
              ],
              correctAnswer: 1,
              explanation: "Data leakage happens when information from the target or test set is inadvertently introduced into the training process, causing overly optimistic performance."
            },
            {
              id: "ml-01-f-08",
              type: "fundamental",
              difficulty: "hard",
              question: "Why is feature scaling (Standardization/Normalization) essential for gradient-based models?",
              options: [
                "It makes the dataset smaller on disk",
                "It ensures gradients descend smoothly and equally across features rather than oscillating",
                "It converts all strings into integers automatically",
                "It prevents CPU threads from locking"
              ],
              correctAnswer: 1,
              explanation: "Unequal feature scales cause elongated contour surfaces for cost functions, making gradient descent oscillate and converge much slower."
            },
            {
              id: "ml-01-f-09",
              type: "fundamental",
              difficulty: "interview",
              question: "What is the difference between parametric and non-parametric models?",
              options: [
                "Parametric models have a fixed number of parameters regardless of data size, while non-parametric models can grow parameters with data",
                "Parametric models cannot be trained on computers",
                "Non-parametric models never make predictions",
                "Parametric models are only used for unsupervised clustering"
              ],
              correctAnswer: 0,
              explanation: "Parametric models summarize data with a fixed set of parameters (like Linear Regression); non-parametric models (like KNN, Decision Trees) make fewer assumptions."
            },
            {
              id: "ml-01-f-10",
              type: "fundamental",
              difficulty: "interview",
              question: "How does k-fold cross validation evaluate model performance?",
              options: [
                "It tests on the exact same data it trains on k times",
                "It partitions the dataset into k subsets, training on k-1 and validating on the remaining fold iteratively",
                "It creates k copies of the training set to increase memory footprint",
                "It trains k completely different algorithms and selects the fastest"
              ],
              correctAnswer: 1,
              explanation: "K-fold cross-validation rotates the validation fold across all k splits, providing a comprehensive assessment of model stability."
            }
          ],
          codingQuestions: [
            {
              id: "ml-01-c-01",
              type: "coding",
              subType: "implementation",
              difficulty: "easy",
              question: "Write a Python function `create_feature_matrix(rows, cols)` that returns a NumPy 2D array of zeros with shape (rows, cols).",
              language: "python",
              starterCode: "import numpy as np\n\ndef create_feature_matrix(rows, cols):\n    # Return numpy zeros array\n    pass",
              expectedOutput: "zeros array with shape (rows, cols)",
              solution: "import numpy as np\n\ndef create_feature_matrix(rows, cols):\n    return np.zeros((rows, cols))",
              explanation: "np.zeros((rows, cols)) creates an array filled with 0.0 with the specified dimensions."
            },
            {
              id: "ml-01-c-02",
              type: "coding",
              subType: "implementation",
              difficulty: "easy",
              question: "Write a function `calculate_mean(values)` that computes and returns the arithmetic mean of a Python list of numbers without using external libraries.",
              language: "python",
              starterCode: "def calculate_mean(values):\n    # Calculate mean\n    pass",
              expectedOutput: "mean value",
              solution: "def calculate_mean(values):\n    if not values:\n        return 0.0\n    return sum(values) / len(values)",
              explanation: "Summing the elements and dividing by the length yields the arithmetic mean."
            },
            {
              id: "ml-01-c-03",
              type: "coding",
              subType: "implementation",
              difficulty: "easy",
              question: "Write a function `train_test_split_indices(n, test_ratio=0.2)` that returns two lists of indices: `train_idx` and `test_idx` for `n` samples.",
              language: "python",
              starterCode: "def train_test_split_indices(n, test_ratio=0.2):\n    # Return (train_idx, test_idx)\n    pass",
              expectedOutput: "train and test index lists",
              solution: "def train_test_split_indices(n, test_ratio=0.2):\n    test_size = int(n * test_ratio)\n    train_idx = list(range(n - test_size))\n    test_idx = list(range(n - test_size, n))\n    return train_idx, test_idx",
              explanation: "Slices indices sequentially based on the split ratio."
            },
            {
              id: "ml-01-c-04",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Write a function `min_max_scale(data)` that scales a 1D list of numerical numbers between 0 and 1 using formula: (x - min) / (max - min).",
              language: "python",
              starterCode: "def min_max_scale(data):\n    # Return scaled list\n    pass",
              expectedOutput: "List of floats between 0 and 1",
              solution: "def min_max_scale(data):\n    min_val, max_val = min(data), max(data)\n    if max_val == min_val:\n        return [0.0] * len(data)\n    return [(x - min_val) / (max_val - min_val) for x in data]",
              explanation: "Normalizes each number by subtracting the minimum and dividing by the range."
            },
            {
              id: "ml-01-c-05",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Write a function `standardize(data)` that transforms a list of numbers to have mean 0 and standard deviation 1.",
              language: "python",
              starterCode: "import math\n\ndef standardize(data):\n    # Return standardized list\n    pass",
              expectedOutput: "Z-scored list",
              solution: "import math\n\ndef standardize(data):\n    n = len(data)\n    mean = sum(data) / n\n    variance = sum((x - mean) ** 2 for x in data) / n\n    std = math.sqrt(variance)\n    if std == 0:\n        return [0.0] * n\n    return [(x - mean) / std for x in data]",
              explanation: "Computes z-score (x - mean) / std for every element."
            },
            {
              id: "ml-01-c-06",
              type: "coding",
              subType: "problem_solving",
              difficulty: "medium",
              question: "Implement a function `one_hot_encode(labels, categories)` that returns a list of one-hot encoded binary lists for given categorical labels.",
              language: "python",
              starterCode: "def one_hot_encode(labels, categories):\n    # Return list of one-hot vectors\n    pass",
              expectedOutput: "List of binary vectors",
              solution: "def one_hot_encode(labels, categories):\n    cat_to_idx = {cat: i for i, cat in enumerate(categories)}\n    encoded = []\n    for label in labels:\n        vec = [0] * len(categories)\n        if label in cat_to_idx:\n            vec[cat_to_idx[label]] = 1\n        encoded.append(vec)\n    return encoded",
              explanation: "Maps each category to an index and sets that position to 1 in a zero vector."
            },
            {
              id: "ml-01-c-07",
              type: "coding",
              subType: "debugging",
              difficulty: "hard",
              question: "Fix the bug in this function calculating Mean Squared Error: `def mse(y_true, y_pred): return sum(y_true - y_pred) / len(y_true)`",
              language: "python",
              starterCode: "def mse(y_true, y_pred):\n    # Fix bug where errors cancel out\n    return sum(y_true - y_pred) / len(y_true)",
              expectedOutput: "Correct MSE value",
              solution: "def mse(y_true, y_pred):\n    return sum((yt - yp) ** 2 for yt, yp in zip(y_true, y_pred)) / len(y_true)",
              explanation: "Differences must be squared before summing to prevent positive and negative errors from canceling."
            },
            {
              id: "ml-01-c-08",
              type: "coding",
              subType: "implementation",
              difficulty: "hard",
              question: "Implement a function `impute_missing_median(values)` that replaces `None` values in a list of numbers with the median of non-null values.",
              language: "python",
              starterCode: "def impute_missing_median(values):\n    # Impute None values with median\n    pass",
              expectedOutput: "Imputed list",
              solution: "def impute_missing_median(values):\n    clean = sorted([x for x in values if x is not None])\n    if not clean:\n        return values\n    n = len(clean)\n    median = clean[n // 2] if n % 2 == 1 else (clean[n // 2 - 1] + clean[n // 2]) / 2\n    return [median if x is None else x for x in values]",
              explanation: "Calculates the median of existing values and fills the None entries."
            },
            {
              id: "ml-01-c-09",
              type: "coding",
              subType: "interview_challenge",
              difficulty: "interview",
              question: "Implement a function `matrix_vector_multiply(matrix, vector)` in pure Python without NumPy.",
              language: "python",
              starterCode: "def matrix_vector_multiply(matrix, vector):\n    # Return result of matrix * vector\n    pass",
              expectedOutput: "Resulting list",
              solution: "def matrix_vector_multiply(matrix, vector):\n    return [sum(row[i] * vector[i] for i in range(len(vector))) for row in matrix]",
              explanation: "Takes the dot product of each matrix row with the column vector."
            },
            {
              id: "ml-01-c-10",
              type: "coding",
              subType: "interview_challenge",
              difficulty: "interview",
              question: "Write a function `k_fold_splits(data, k)` that generates k tuples of `(train_data, val_data)`.",
              language: "python",
              starterCode: "def k_fold_splits(data, k):\n    # Return list of (train, val) pairs\n    pass",
              expectedOutput: "k fold partitions",
              solution: "def k_fold_splits(data, k):\n    n = len(data)\n    fold_size = n // k\n    splits = []\n    for i in range(k):\n        start = i * fold_size\n        end = (i + 1) * fold_size if i != k - 1 else n\n        val = data[start:end]\n        train = data[:start] + data[end:]\n        splits.append((train, val))\n    return splits",
              explanation: "Partitions data into k slices, using each slice once as validation and the rest for training."
            }
          ]
        },
        {
          lectureId: "ml-lecture-02",
          lectureNumber: 2,
          title: "Part 2 - Supervised Learning | Complete Machine Learning Course for Beginners",
          videoUrl: "https://www.youtube.com/embed/Lb0JzFtTmBs",
          topics: ["Linear Regression", "Cost Functions (MSE / SSE)", "Gradient Descent Optimization", "Learning Rate & Convergence"],
          assessment: { totalQuestions: 20, fundamentalQuestions: 10, codingQuestions: 10 },
          fundamentalQuestions: [
            {
              id: "ml-02-f-01",
              type: "fundamental",
              difficulty: "easy",
              question: "What is the hypothesis function in Simple Linear Regression?",
              options: [
                "y = w * x + b",
                "y = 1 / (1 + e^-x)",
                "y = log(x)",
                "y = max(0, x)"
              ],
              correctAnswer: 0,
              explanation: "Simple linear regression models the relationship between target y and feature x as y = w*x + b."
            },
            {
              id: "ml-02-f-02",
              type: "fundamental",
              difficulty: "easy",
              question: "What is the role of a Cost Function in Linear Regression?",
              options: [
                "To calculate computational hardware pricing",
                "To measure the error between predicted outputs and actual target values",
                "To increase learning rate during training",
                "To download dataset files"
              ],
              correctAnswer: 1,
              explanation: "The cost function quantifies the discrepancy between model predictions and true targets."
            },
            {
              id: "ml-02-f-03",
              type: "fundamental",
              difficulty: "easy",
              question: "What direction does Gradient Descent move model parameters towards?",
              options: [
                "Towards the direction of steepest descent (negative gradient) of the cost function",
                "Towards higher cost values",
                "Randomly across all directions",
                "Towards the maximum possible weights"
              ],
              correctAnswer: 0,
              explanation: "Gradient descent updates parameters in the direction opposite to the gradient to minimize cost."
            },
            {
              id: "ml-02-f-04",
              type: "fundamental",
              difficulty: "medium",
              question: "What occurs if the learning rate alpha is chosen to be too large in gradient descent?",
              options: [
                "The algorithm always converges in one step",
                "The updates can overshoot the minimum and fail to converge or diverge",
                "The model produces perfect accuracy immediately",
                "The features are deleted from memory"
              ],
              correctAnswer: 1,
              explanation: "An excessively large learning rate causes drastic jumps that overshoot valleys and may lead to numerical explosion."
            },
            {
              id: "ml-02-f-05",
              type: "fundamental",
              difficulty: "medium",
              question: "What is the difference between Batch Gradient Descent and Stochastic Gradient Descent (SGD)?",
              options: [
                "Batch uses the entire dataset per update; SGD updates weights after each individual training sample",
                "Batch is only for classification; SGD is only for regression",
                "SGD cannot run on GPUs",
                "Batch requires no loss function"
              ],
              correctAnswer: 0,
              explanation: "Batch GD computes gradients across all samples per step, while SGD updates parameters per sample for noisy but fast updates."
            },
            {
              id: "ml-02-f-06",
              type: "fundamental",
              difficulty: "medium",
              question: "What is R-squared (Coefficient of Determination) measuring in regression?",
              options: [
                "The runtime of the algorithm",
                "The proportion of variance in the dependent variable that is predictable from the independent variables",
                "The number of features in the model",
                "The maximum gradient slope"
              ],
              correctAnswer: 1,
              explanation: "R-squared measures the proportion of variance explained by the regression line compared to a simple mean baseline."
            },
            {
              id: "ml-02-f-07",
              type: "fundamental",
              difficulty: "hard",
              question: "What is the Normal Equation in Linear Regression?",
              options: [
                "An analytical closed-form solution: theta = (X^T * X)^-1 * X^T * y",
                "A sorting algorithm for regression weights",
                "A technique to remove outliers",
                "A heuristic for setting learning rates"
              ],
              correctAnswer: 0,
              explanation: "The normal equation computes exact optimal regression weights directly without iterative gradient descent."
            },
            {
              id: "ml-02-f-08",
              type: "fundamental",
              difficulty: "hard",
              question: "Why might the Normal Equation become computationally prohibitive for very large datasets?",
              options: [
                "Because computing the matrix inverse (X^T * X)^-1 has O(d^3) complexity where d is feature count",
                "Because it only works with binary features",
                "Because it causes division by zero automatically",
                "Because it requires internet access"
              ],
              correctAnswer: 0,
              explanation: "Inverting an n x n matrix is computationally expensive (approx O(n^3)), making gradient descent preferred for large feature spaces."
            },
            {
              id: "ml-02-f-09",
              type: "fundamental",
              difficulty: "interview",
              question: "What are the four classical assumptions of Linear Regression?",
              options: [
                "Linearity, Independence of errors, Homoscedasticity, Normality of residuals",
                "High variance, high bias, zero loss, infinite learning rate",
                "Multi-threading, GPU support, C++ backend, RAM caching",
                "Categorical target, high dimensionality, non-linear activation, pooling"
              ],
              correctAnswer: 0,
              explanation: "Linear regression assumes linear relationship, independent observations, constant error variance (homoscedasticity), and normally distributed errors."
            },
            {
              id: "ml-02-f-10",
              type: "fundamental",
              difficulty: "interview",
              question: "How do you detect multicollinearity among features in multiple regression?",
              options: [
                "By inspecting Variance Inflation Factor (VIF) and correlation matrix",
                "By measuring the size of training data in megabytes",
                "By evaluating the execution duration of gradient descent",
                "By counting the number of null rows"
              ],
              correctAnswer: 0,
              explanation: "High correlation coefficients and VIF values exceeding 5-10 signal severe multicollinearity."
            }
          ],
          codingQuestions: [
            {
              id: "ml-02-c-01",
              type: "coding",
              subType: "implementation",
              difficulty: "easy",
              question: "Write a function `predict_linear(x, w, b)` that returns predictions `y_hat = w * x + b` for a list of inputs `x`.",
              language: "python",
              starterCode: "def predict_linear(x, w, b):\n    # Return list of predictions\n    pass",
              expectedOutput: "List of floats",
              solution: "def predict_linear(x, w, b):\n    return [w * val + b for val in x]",
              explanation: "Applies the linear equation to each input element."
            },
            {
              id: "ml-02-c-02",
              type: "coding",
              subType: "implementation",
              difficulty: "easy",
              question: "Implement `mean_squared_error(y_true, y_pred)` that computes MSE between two equal-length lists.",
              language: "python",
              starterCode: "def mean_squared_error(y_true, y_pred):\n    # Compute MSE\n    pass",
              expectedOutput: "Float MSE",
              solution: "def mean_squared_error(y_true, y_pred):\n    return sum((yt - yp) ** 2 for yt, yp in zip(y_true, y_pred)) / len(y_true)",
              explanation: "Calculates average of squared differences."
            },
            {
              id: "ml-02-c-03",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Implement `gradient_descent_step(x, y, w, b, lr)` that performs one parameter update step for simple linear regression.",
              language: "python",
              starterCode: "def gradient_descent_step(x, y, w, b, lr):\n    # Return (new_w, new_b)\n    pass",
              expectedOutput: "Tuple (new_w, new_b)",
              solution: "def gradient_descent_step(x, y, w, b, lr):\n    n = len(x)\n    dw = sum(-2 * x[i] * (y[i] - (w * x[i] + b)) for i in range(n)) / n\n    db = sum(-2 * (y[i] - (w * x[i] + b)) for i in range(n)) / n\n    new_w = w - lr * dw\n    new_b = b - lr * db\n    return new_w, new_b",
              explanation: "Computes partial derivatives dw and db and updates weights using learning rate lr."
            },
            {
              id: "ml-02-c-04",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Implement `r_squared(y_true, y_pred)` returning the coefficient of determination R^2.",
              language: "python",
              starterCode: "def r_squared(y_true, y_pred):\n    # Return R2 score\n    pass",
              expectedOutput: "R2 float",
              solution: "def r_squared(y_true, y_pred):\n    mean_y = sum(y_true) / len(y_true)\n    ss_tot = sum((y - mean_y) ** 2 for y in y_true)\n    ss_res = sum((yt - yp) ** 2 for yt, yp in zip(y_true, y_pred))\n    if ss_tot == 0:\n        return 1.0\n    return 1 - (ss_res / ss_tot)",
              explanation: "R2 is 1 - (SS_res / SS_tot)."
            },
            {
              id: "ml-02-c-05",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Write `mae(y_true, y_pred)` computing Mean Absolute Error.",
              language: "python",
              starterCode: "def mae(y_true, y_pred):\n    # Return MAE\n    pass",
              expectedOutput: "MAE float",
              solution: "def mae(y_true, y_pred):\n    return sum(abs(yt - yp) for yt, yp in zip(y_true, y_pred)) / len(y_true)",
              explanation: "Average of absolute differences between predictions and truth."
            },
            {
              id: "ml-02-c-06",
              type: "coding",
              subType: "implementation",
              difficulty: "hard",
              question: "Implement `fit_simple_linear_regression(x, y, epochs=100, lr=0.01)` that trains w and b from scratch.",
              language: "python",
              starterCode: "def fit_simple_linear_regression(x, y, epochs=100, lr=0.01):\n    # Return (w, b)\n    pass",
              expectedOutput: "Trained (w, b)",
              solution: "def fit_simple_linear_regression(x, y, epochs=100, lr=0.01):\n    w, b = 0.0, 0.0\n    n = len(x)\n    for _ in range(epochs):\n        dw = sum(-2 * x[i] * (y[i] - (w * x[i] + b)) for i in range(n)) / n\n        db = sum(-2 * (y[i] - (w * x[i] + b)) for i in range(n)) / n\n        w -= lr * dw\n        b -= lr * db\n    return w, b",
              explanation: "Iterates through epochs updating w and b with gradient descent."
            },
            {
              id: "ml-02-c-07",
              type: "coding",
              subType: "debugging",
              difficulty: "hard",
              question: "Fix the bug where weights explode: in gradient descent update, `w += lr * dw` was written instead of subtracting gradient.",
              language: "python",
              starterCode: "def update_weights(w, b, dw, db, lr):\n    # Fix sign error\n    w += lr * dw\n    b += lr * db\n    return w, b",
              expectedOutput: "Correctly updated weights",
              solution: "def update_weights(w, b, dw, db, lr):\n    w -= lr * dw\n    b -= lr * db\n    return w, b",
              explanation: "Gradient descent moves in the opposite direction of the gradient (- lr * grad)."
            },
            {
              id: "ml-02-c-08",
              type: "coding",
              subType: "implementation",
              difficulty: "hard",
              question: "Implement `ridge_regression_loss(y_true, y_pred, weights, l2_penalty)` computing MSE + L2 regularization.",
              language: "python",
              starterCode: "def ridge_regression_loss(y_true, y_pred, weights, l2_penalty):\n    # Return Ridge loss\n    pass",
              expectedOutput: "Regularized loss",
              solution: "def ridge_regression_loss(y_true, y_pred, weights, l2_penalty):\n    mse = sum((yt - yp) ** 2 for yt, yp in zip(y_true, y_pred)) / len(y_true)\n    l2 = l2_penalty * sum(w ** 2 for w in weights)\n    return mse + l2",
              explanation: "Ridge loss adds lambda * sum(w_i^2) to the standard mean squared error."
            },
            {
              id: "ml-02-c-09",
              type: "coding",
              subType: "interview_challenge",
              difficulty: "interview",
              question: "Implement analytical OLS slope formula: `w = cov(x, y) / var(x)` in pure Python.",
              language: "python",
              starterCode: "def ols_slope(x, y):\n    # Return analytical optimal slope w\n    pass",
              expectedOutput: "Optimal slope w",
              solution: "def ols_slope(x, y):\n    mean_x = sum(x) / len(x)\n    mean_y = sum(y) / len(y)\n    numerator = sum((x[i] - mean_x) * (y[i] - mean_y) for i in range(len(x)))\n    denominator = sum((x[i] - mean_x) ** 2 for i in range(len(x)))\n    return numerator / denominator if denominator != 0 else 0.0",
              explanation: "Calculates the exact closed-form slope for simple linear regression."
            },
            {
              id: "ml-02-c-10",
              type: "coding",
              subType: "interview_challenge",
              difficulty: "interview",
              question: "Write a function `predict_multivariate(X, weights, bias)` where X is a 2D matrix of shape (n_samples, n_features).",
              language: "python",
              starterCode: "def predict_multivariate(X, weights, bias):\n    # Return list of predictions for each sample\n    pass",
              expectedOutput: "List of float predictions",
              solution: "def predict_multivariate(X, weights, bias):\n    return [sum(row[j] * weights[j] for j in range(len(weights))) + bias for row in X]",
              explanation: "Computes dot product of each row vector with weight vector and adds bias."
            }
          ]
        },
        {
          lectureId: "ml-lecture-03",
          lectureNumber: 3,
          title: "Part 3 - Supervised Learning| Classification Algorithms for Beginners",
          videoUrl: "https://www.youtube.com/embed/omGvjpmPDoY",
          topics: ["Logistic Regression & Sigmoid Function", "Decision Trees & Information Gain", "K-Nearest Neighbors (KNN)", "Confusion Matrix & F1-Score"],
          assessment: { totalQuestions: 20, fundamentalQuestions: 10, codingQuestions: 10 },
          fundamentalQuestions: [
            {
              id: "ml-03-f-01",
              type: "fundamental",
              difficulty: "easy",
              question: "Why is Linear Regression unsuitable for binary classification problems?",
              options: [
                "Because predicted outputs can exceed [0, 1] range and linear decision boundaries are sensitive to outliers",
                "Because linear regression takes too much disk space",
                "Because linear regression can only run on C++",
                "Because binary targets cannot be stored in variables"
              ],
              correctAnswer: 0,
              explanation: "Linear regression predicts unbounded continuous numbers rather than calibrated probabilities between 0 and 1."
            },
            {
              id: "ml-03-f-02",
              type: "fundamental",
              difficulty: "easy",
              question: "What does the Sigmoid function do in Logistic Regression?",
              options: [
                "It maps any real number into an output between 0 and 1 representing probability",
                "It calculates the training speed in seconds",
                "It multiplies features by two",
                "It drops null rows automatically"
              ],
              correctAnswer: 0,
              explanation: "sigma(z) = 1 / (1 + e^-z) compresses inputs to [0, 1] for probability estimation."
            },
            {
              id: "ml-03-f-03",
              type: "fundamental",
              difficulty: "easy",
              question: "How does the K-Nearest Neighbors (KNN) algorithm classify a new data point?",
              options: [
                "By training deep neural layers with backpropagation",
                "By identifying the k closest training examples using a distance metric and taking a majority vote",
                "By constructing binary trees with Gini impurity",
                "By calculating matrix eigenvectors"
              ],
              correctAnswer: 1,
              explanation: "KNN computes distances to all training points and assigns the most common label among the k nearest neighbors."
            },
            {
              id: "ml-03-f-04",
              type: "fundamental",
              difficulty: "medium",
              question: "What metric does a Decision Tree commonly use to choose the best feature to split on?",
              options: [
                "Information Gain / Entropy or Gini Impurity",
                "R-squared score",
                "Mean Squared Error",
                "Cosine similarity"
              ],
              correctAnswer: 0,
              explanation: "Decision trees evaluate splits using Gini impurity or Information Gain (reduction in Entropy) to create homogenous child nodes."
            },
            {
              id: "ml-03-f-05",
              type: "fundamental",
              difficulty: "medium",
              question: "In a medical diagnosis task, which metric is most critical when false negatives must be minimized?",
              options: ["Recall (Sensitivity)", "Precision", "Accuracy", "Specificity"],
              correctAnswer: 0,
              explanation: "Recall measures the proportion of actual positive cases detected; high recall minimizes dangerous false negatives."
            },
            {
              id: "ml-03-f-06",
              type: "fundamental",
              difficulty: "medium",
              question: "What is the F1-Score?",
              options: [
                "The arithmetic mean of accuracy and loss",
                "The harmonic mean of Precision and Recall",
                "The maximum gradient of the cost function",
                "The ratio of true negatives to false positives"
              ],
              correctAnswer: 1,
              explanation: "F1 = 2 * (Precision * Recall) / (Precision + Recall), giving a balanced metric especially for imbalanced datasets."
            },
            {
              id: "ml-03-f-07",
              type: "fundamental",
              difficulty: "hard",
              question: "What is the loss function used to train Logistic Regression models?",
              options: [
                "Binary Cross-Entropy (Log Loss)",
                "Mean Absolute Error",
                "Hinge Loss",
                "Huber Loss"
              ],
              correctAnswer: 0,
              explanation: "Binary Cross-Entropy penalizes confident wrong predictions exponentially and produces convex loss for logistic regression."
            },
            {
              id: "ml-03-f-08",
              type: "fundamental",
              difficulty: "hard",
              question: "Why do Decision Trees tend to suffer from high variance (overfitting) when grown deep?",
              options: [
                "Because they can create complex, arbitrary decision boundaries tailored to noise in the training set",
                "Because they don't support categorical variables",
                "Because the learning rate is too high",
                "Because trees cannot handle numeric data"
              ],
              correctAnswer: 0,
              explanation: "Unconstrained trees branch until every training leaf is pure, memorizing training noise and failing to generalize."
            },
            {
              id: "ml-03-f-09",
              type: "fundamental",
              difficulty: "interview",
              question: "What is the curse of dimensionality and how does it degrade KNN performance?",
              options: [
                "As feature count increases, data becomes extremely sparse and distance metrics become equidistant and uninformative",
                "Memory runs out after 10 features",
                "KNN only works in 2D space",
                "Labels become corrupted when features exceed 100"
              ],
              correctAnswer: 0,
              explanation: "In high dimensions, the volume of space expands exponentially, causing points to appear equally far apart and rendering Euclidean distance meaningless."
            },
            {
              id: "ml-03-f-10",
              type: "fundamental",
              difficulty: "interview",
              question: "What is the ROC-AUC score measuring?",
              options: [
                "The trade-off between True Positive Rate and False Positive Rate across all classification thresholds",
                "The execution time of the classifier",
                "The total number of parameters in the model",
                "The ratio between training and testing data"
              ],
              correctAnswer: 0,
              explanation: "ROC-AUC measures the model's ability to rank positive instances higher than negative instances across all decision thresholds."
            }
          ],
          codingQuestions: [
            {
              id: "ml-03-c-01",
              type: "coding",
              subType: "implementation",
              difficulty: "easy",
              question: "Write a function `sigmoid(z)` that returns `1 / (1 + math.exp(-z))`.",
              language: "python",
              starterCode: "import math\n\ndef sigmoid(z):\n    # Return sigmoid value\n    pass",
              expectedOutput: "Float between 0 and 1",
              solution: "import math\n\ndef sigmoid(z):\n    # Clipping to prevent overflow\n    z = max(min(z, 500), -500)\n    return 1.0 / (1.0 + math.exp(-z))",
              explanation: "Computes the logistic sigmoid function with clipping for numerical stability."
            },
            {
              id: "ml-03-c-02",
              type: "coding",
              subType: "implementation",
              difficulty: "easy",
              question: "Implement `predict_class(prob, threshold=0.5)` returning 1 if `prob >= threshold` else 0.",
              language: "python",
              starterCode: "def predict_class(prob, threshold=0.5):\n    # Return 1 or 0\n    pass",
              expectedOutput: "Integer 0 or 1",
              solution: "def predict_class(prob, threshold=0.5):\n    return 1 if prob >= threshold else 0",
              explanation: "Applies decision threshold to convert probabilities to binary classes."
            },
            {
              id: "ml-03-c-03",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Write `euclidean_distance(p1, p2)` computing distance between two numerical feature vectors.",
              language: "python",
              starterCode: "import math\n\ndef euclidean_distance(p1, p2):\n    # Compute Euclidean distance\n    pass",
              expectedOutput: "Float distance",
              solution: "import math\n\ndef euclidean_distance(p1, p2):\n    return math.sqrt(sum((a - b) ** 2 for a, b in zip(p1, p2)))",
              explanation: "Takes square root of sum of squared differences."
            },
            {
              id: "ml-03-c-04",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Implement `confusion_matrix(y_true, y_pred)` returning a dictionary with keys: `tp`, `fp`, `tn`, `fn`.",
              language: "python",
              starterCode: "def confusion_matrix(y_true, y_pred):\n    # Return dict with tp, fp, tn, fn\n    pass",
              expectedOutput: "{'tp': int, 'fp': int, 'tn': int, 'fn': int}",
              solution: "def confusion_matrix(y_true, y_pred):\n    tp = sum(1 for yt, yp in zip(y_true, y_pred) if yt == 1 and yp == 1)\n    fp = sum(1 for yt, yp in zip(y_true, y_pred) if yt == 0 and yp == 1)\n    tn = sum(1 for yt, yp in zip(y_true, y_pred) if yt == 0 and yp == 0)\n    fn = sum(1 for yt, yp in zip(y_true, y_pred) if yt == 1 and yp == 0)\n    return {'tp': tp, 'fp': fp, 'tn': tn, 'fn': fn}",
              explanation: "Tallies True Positives, False Positives, True Negatives, and False Negatives."
            },
            {
              id: "ml-03-c-05",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Implement `precision_recall_f1(tp, fp, fn)` returning a tuple `(precision, recall, f1)`.",
              language: "python",
              starterCode: "def precision_recall_f1(tp, fp, fn):\n    # Return (precision, recall, f1)\n    pass",
              expectedOutput: "Tuple of 3 floats",
              solution: "def precision_recall_f1(tp, fp, fn):\n    precision = tp / (tp + fp) if (tp + fp) > 0 else 0.0\n    recall = tp / (tp + fn) if (tp + fn) > 0 else 0.0\n    f1 = (2 * precision * recall) / (precision + recall) if (precision + recall) > 0 else 0.0\n    return precision, recall, f1",
              explanation: "Calculates precision, recall, and harmonic mean F1-score."
            },
            {
              id: "ml-03-c-06",
              type: "coding",
              subType: "problem_solving",
              difficulty: "hard",
              question: "Implement `knn_predict(train_X, train_y, test_point, k=3)` that predicts binary class for `test_point`.",
              language: "python",
              starterCode: "def knn_predict(train_X, train_y, test_point, k=3):\n    # Return majority class (0 or 1)\n    pass",
              expectedOutput: "0 or 1",
              solution: "def knn_predict(train_X, train_y, test_point, k=3):\n    import math\n    distances = []\n    for x, y in zip(train_X, train_y):\n        dist = math.sqrt(sum((a - b) ** 2 for a, b in zip(x, test_point)))\n        distances.append((dist, y))\n    distances.sort(key=lambda item: item[0])\n    k_nearest = [y for _, y in distances[:k]]\n    return 1 if k_nearest.count(1) > k_nearest.count(0) else 0",
              explanation: "Finds k nearest points by Euclidean distance and takes the majority class label."
            },
            {
              id: "ml-03-c-07",
              type: "coding",
              subType: "implementation",
              difficulty: "hard",
              question: "Write `binary_cross_entropy(y_true, y_probs)` computing average log loss across samples.",
              language: "python",
              starterCode: "import math\n\ndef binary_cross_entropy(y_true, y_probs):\n    # Return float loss\n    pass",
              expectedOutput: "Float BCE loss",
              solution: "import math\n\ndef binary_cross_entropy(y_true, y_probs):\n    eps = 1e-15\n    n = len(y_true)\n    loss = 0.0\n    for y, p in zip(y_true, y_probs):\n        p = max(min(p, 1 - eps), eps)\n        loss += -(y * math.log(p) + (1 - y) * math.log(1 - p))\n    return loss / n",
              explanation: "Standard cross-entropy formula with epsilon clipping to avoid log(0)."
            },
            {
              id: "ml-03-c-08",
              type: "coding",
              subType: "debugging",
              difficulty: "hard",
              question: "Fix the bug in Gini impurity calculation: `def gini(p): return 1 - p` (formula should be `1 - sum(p_i^2)`).",
              language: "python",
              starterCode: "def gini_impurity(class_probabilities):\n    # Fix calculation\n    return 1 - sum(class_probabilities)",
              expectedOutput: "Float Gini index",
              solution: "def gini_impurity(class_probabilities):\n    return 1.0 - sum(p ** 2 for p in class_probabilities)",
              explanation: "Gini impurity is 1 minus the sum of squared probabilities of each class."
            },
            {
              id: "ml-03-c-09",
              type: "coding",
              subType: "interview_challenge",
              difficulty: "interview",
              question: "Implement `entropy(labels)` calculating Shannon entropy in bits for a list of string/int labels.",
              language: "python",
              starterCode: "import math\n\ndef entropy(labels):\n    # Compute Shannon entropy\n    pass",
              expectedOutput: "Float entropy",
              solution: "import math\nfrom collections import Counter\n\ndef entropy(labels):\n    if not labels:\n        return 0.0\n    counts = Counter(labels)\n    n = len(labels)\n    return -sum((cnt / n) * math.log2(cnt / n) for cnt in counts.values() if cnt > 0)",
              explanation: "Calculates - sum(p * log2(p)) over all unique label frequencies."
            },
            {
              id: "ml-03-c-10",
              type: "coding",
              subType: "interview_challenge",
              difficulty: "interview",
              question: "Implement `logistic_gradient_step(X, y, weights, bias, lr)` updating weights and bias for multivariate logistic regression.",
              language: "python",
              starterCode: "def logistic_gradient_step(X, y, weights, bias, lr):\n    # Return (updated_weights, updated_bias)\n    pass",
              expectedOutput: "Updated (weights, bias)",
              solution: "import math\n\ndef logistic_gradient_step(X, y, weights, bias, lr):\n    n = len(X)\n    n_feats = len(weights)\n    dw = [0.0] * n_feats\n    db = 0.0\n    for i in range(n):\n        z = sum(X[i][j] * weights[j] for j in range(n_feats)) + bias\n        z = max(min(z, 500), -500)\n        p = 1.0 / (1.0 + math.exp(-z))\n        err = p - y[i]\n        for j in range(n_feats):\n            dw[j] += err * X[i][j]\n        db += err\n    new_w = [weights[j] - lr * (dw[j] / n) for j in range(n_feats)]\n    new_b = bias - lr * (db / n)\n    return new_w, new_b",
              explanation: "Applies vectorized gradient descent using the derivative of log loss."
            }
          ]
        },
        {
          lectureId: "ml-lecture-04",
          lectureNumber: 4,
          title: "Part 4 - Model Tuning, Ensemble & Unsupervised Learning | Full ML Course",
          videoUrl: "https://www.youtube.com/embed/UFAHXZW2hU8",
          topics: ["Hyperparameter Tuning & Grid Search", "Ensemble Methods (Bagging & Boosting)", "Random Forests", "K-Means Clustering & PCA"],
          assessment: { totalQuestions: 20, fundamentalQuestions: 10, codingQuestions: 10 },
          fundamentalQuestions: [
            {
              id: "ml-04-f-01",
              type: "fundamental",
              difficulty: "easy",
              question: "What is an Ensemble Method in Machine Learning?",
              options: [
                "Using multiple learning algorithms or models to obtain better predictive performance than any single model",
                "Training models only on cloud servers",
                "Using exclusively linear regression models",
                "Deleting redundant features from a database"
              ],
              correctAnswer: 0,
              explanation: "Ensemble learning combines predictions from diverse base models to reduce variance or bias."
            },
            {
              id: "ml-04-f-02",
              type: "fundamental",
              difficulty: "easy",
              question: "What core technique does Bagging (Bootstrap Aggregating) use?",
              options: [
                "Sequential training where each model fixes errors of previous models",
                "Training multiple models independently on random bootstrap subsets of training data and averaging predictions",
                "Removing 50% of the features randomly",
                "Running models without any training data"
              ],
              correctAnswer: 1,
              explanation: "Bagging creates multiple bootstrap datasets with replacement and trains models in parallel to decrease variance."
            },
            {
              id: "ml-04-f-03",
              type: "fundamental",
              difficulty: "easy",
              question: "What is the difference between Bagging and Boosting?",
              options: [
                "Bagging trains models in parallel to reduce variance; Boosting trains sequentially to reduce bias",
                "Bagging is for images only; Boosting is for text only",
                "Boosting does not use loss functions",
                "Bagging requires neural networks"
              ],
              correctAnswer: 0,
              explanation: "Boosting trains models sequentially, weighting misclassified samples higher to systematically reduce model bias."
            },
            {
              id: "ml-04-f-04",
              type: "fundamental",
              difficulty: "medium",
              question: "How does a Random Forest improve upon standard Decision Trees?",
              options: [
                "By combining bagging with random feature subsets at each split, decorrelating individual trees",
                "By using gradient descent instead of tree splits",
                "By converting all data into text embeddings",
                "By eliminating the need for validation sets"
              ],
              correctAnswer: 0,
              explanation: "Random Forest introduces random feature subspace sampling, preventing dominant features from making trees overly correlated."
            },
            {
              id: "ml-04-f-05",
              type: "fundamental",
              difficulty: "medium",
              question: "What does the K-Means algorithm optimize during clustering?",
              options: [
                "Minimizing the within-cluster sum of squared distances (inertia)",
                "Maximizing classification accuracy against labeled targets",
                "Minimizing training execution time",
                "Maximizing feature covariance"
              ],
              correctAnswer: 0,
              explanation: "K-Means iteratively updates centroids to minimize the sum of squared Euclidean distances between points and their assigned centroid."
            },
            {
              id: "ml-04-f-06",
              type: "fundamental",
              difficulty: "medium",
              question: "What is Principal Component Analysis (PCA) used for?",
              options: [
                "Supervised text translation",
                "Dimensionality reduction by finding orthogonal axes of maximum variance",
                "Generating deepfake images",
                "Testing CPU clock speed"
              ],
              correctAnswer: 1,
              explanation: "PCA projects high-dimensional data onto orthogonal eigenvectors (principal components) that preserve maximum variance."
            },
            {
              id: "ml-04-f-07",
              type: "fundamental",
              difficulty: "hard",
              question: "How does the Elbow Method help determine the optimal number of clusters K in K-Means?",
              options: [
                "By plotting inertia vs K and selecting the point of diminishing returns where the curve bends",
                "By testing when the algorithm crashes",
                "By choosing the cluster count with highest CPU usage",
                "By matching K to the number of columns in the dataset"
              ],
              correctAnswer: 0,
              explanation: "The elbow point represents the value of K where adding more clusters yields diminishing reduction in inertia."
            },
            {
              id: "ml-04-f-08",
              type: "fundamental",
              difficulty: "hard",
              question: "What is Gradient Boosting (GBDT)?",
              options: [
                "An ensemble technique where each subsequent tree fits the negative gradient (pseudo-residuals) of the loss function",
                "A hardware acceleration technique for GPUs",
                "A method to normalize data columns",
                "A linear regression solver"
              ],
              correctAnswer: 0,
              explanation: "Gradient Boosting fits new base estimators directly to the pseudo-residuals of the current ensemble's loss."
            },
            {
              id: "ml-04-f-09",
              type: "fundamental",
              difficulty: "interview",
              question: "What is the difference between Grid Search and Random Search for hyperparameter tuning?",
              options: [
                "Grid Search exhaustively tries all combinations of provided hyperparameter values, while Random Search samples a fixed number of combinations randomly",
                "Grid Search only works on linear regression",
                "Random search guarantees finding the global optimum every time",
                "Grid Search does not use cross-validation"
              ],
              correctAnswer: 0,
              explanation: "Random Search is often more efficient than Grid Search in high-dimensional spaces because it tests more distinct values per parameter."
            },
            {
              id: "ml-04-f-10",
              type: "fundamental",
              difficulty: "interview",
              question: "Why must data be standardized (mean 0, variance 1) before applying PCA?",
              options: [
                "Features with larger numerical scales would artificially dominate the calculation of variance and principal components",
                "Because PCA crashes with non-zero means",
                "Because eigenvalues cannot be computed on integers",
                "Standardization is optional and has no effect"
              ],
              correctAnswer: 0,
              explanation: "Without scaling, features measured in larger units dominate variance calculations, misleading the PCA decomposition."
            }
          ],
          codingQuestions: [
            {
              id: "ml-04-c-01",
              type: "coding",
              subType: "implementation",
              difficulty: "easy",
              question: "Write `ensemble_vote(predictions)` that takes a list of binary predictions `[0, 1, 1, 0, 1]` from different models and returns majority class.",
              language: "python",
              starterCode: "def ensemble_vote(predictions):\n    # Return majority class (0 or 1)\n    pass",
              expectedOutput: "0 or 1",
              solution: "def ensemble_vote(predictions):\n    return 1 if predictions.count(1) >= len(predictions) / 2.0 else 0",
              explanation: "Counts ones and returns 1 if count >= half of total votes."
            },
            {
              id: "ml-04-c-02",
              type: "coding",
              subType: "implementation",
              difficulty: "easy",
              question: "Write `calculate_inertia(points, centroid)` that computes sum of squared Euclidean distances of points to a single centroid.",
              language: "python",
              starterCode: "def calculate_inertia(points, centroid):\n    # Return sum of squared distances\n    pass",
              expectedOutput: "Float inertia",
              solution: "def calculate_inertia(points, centroid):\n    return sum(sum((p[i] - centroid[i]) ** 2 for i in range(len(centroid))) for p in points)",
              explanation: "Sums the squared Euclidean distance from each point to the centroid."
            },
            {
              id: "ml-04-c-03",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Implement `assign_clusters(points, centroids)` that assigns each point to the index of its nearest centroid.",
              language: "python",
              starterCode: "def assign_clusters(points, centroids):\n    # Return list of centroid indices\n    pass",
              expectedOutput: "List of integer cluster IDs",
              solution: "def assign_clusters(points, centroids):\n    assignments = []\n    for p in points:\n        dists = [sum((p[i] - c[i]) ** 2 for i in range(len(c))) for c in centroids]\n        assignments.append(dists.index(min(dists)))\n    return assignments",
              explanation: "Computes squared distance to all centroids and selects the minimum index."
            },
            {
              id: "ml-04-c-04",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Implement `update_centroids(points, assignments, k)` that calculates the new mean coordinates for each of the k clusters.",
              language: "python",
              starterCode: "def update_centroids(points, assignments, k):\n    # Return list of k new centroid vectors\n    pass",
              expectedOutput: "List of k coordinate vectors",
              solution: "def update_centroids(points, assignments, k):\n    dim = len(points[0])\n    new_centroids = []\n    for cluster_id in range(k):\n        cluster_points = [points[i] for i in range(len(points)) if assignments[i] == cluster_id]\n        if cluster_points:\n            mean_vec = [sum(pt[j] for pt in cluster_points) / len(cluster_points) for j in range(dim)]\n            new_centroids.append(mean_vec)\n        else:\n            new_centroids.append([0.0] * dim)\n    return new_centroids",
              explanation: "Calculates average coordinate across all points assigned to each cluster."
            },
            {
              id: "ml-04-c-05",
              type: "coding",
              subType: "problem_solving",
              difficulty: "medium",
              question: "Write `bootstrap_sample(data, sample_size=None)` that returns a random sample with replacement from `data`.",
              language: "python",
              starterCode: "import random\n\ndef bootstrap_sample(data, sample_size=None):\n    # Return bootstrap sample\n    pass",
              expectedOutput: "List of sampled items",
              solution: "import random\n\ndef bootstrap_sample(data, sample_size=None):\n    size = sample_size if sample_size is not None else len(data)\n    return [random.choice(data) for _ in range(size)]",
              explanation: "Samples elements with replacement using random.choice."
            },
            {
              id: "ml-04-c-06",
              type: "coding",
              subType: "implementation",
              difficulty: "hard",
              question: "Implement `grid_search(model_func, param_grid, X, y)` that evaluates all parameter combinations and returns `(best_params, best_score)`.",
              language: "python",
              starterCode: "def grid_search(model_func, param_grid, X, y):\n    # param_grid = {'lr': [0.01, 0.1], 'epochs': [10, 50]}\n    pass",
              expectedOutput: "Tuple of (dict, float)",
              solution: "import itertools\n\ndef grid_search(model_func, param_grid, X, y):\n    keys = list(param_grid.keys())\n    combinations = list(itertools.product(*[param_grid[k] for k in keys]))\n    best_score = -float('inf')\n    best_params = None\n    for comb in combinations:\n        params = dict(zip(keys, comb))\n        score = model_func(params, X, y)\n        if score > best_score:\n            best_score = score\n            best_params = params\n    return best_params, best_score",
              explanation: "Generates cartesian product of all hyperparameter lists and evaluates each configuration."
            },
            {
              id: "ml-04-c-07",
              type: "coding",
              subType: "debugging",
              difficulty: "hard",
              question: "Fix K-Means termination check bug where it checked identity instead of coordinate equality.",
              language: "python",
              starterCode: "def has_converged(old_c, new_c, tol=1e-4):\n    # Fix bug: old_c == new_c was comparing references\n    return old_c is new_c",
              expectedOutput: "Boolean convergence flag",
              solution: "def has_converged(old_c, new_c, tol=1e-4):\n    import math\n    for c1, c2 in zip(old_c, new_c):\n        dist = math.sqrt(sum((a - b) ** 2 for a, b in zip(c1, c2)))\n        if dist > tol:\n            return False\n    return True",
              explanation: "Checks if the Euclidean distance between successive centroid iterations is below tolerance."
            },
            {
              id: "ml-04-c-08",
              type: "coding",
              subType: "implementation",
              difficulty: "hard",
              question: "Implement `covariance_matrix(data)` for centered matrix `data` of shape (n_samples, n_features) in pure Python.",
              language: "python",
              starterCode: "def covariance_matrix(data):\n    # Return n_features x n_features matrix\n    pass",
              expectedOutput: "2D list covariance matrix",
              solution: "def covariance_matrix(data):\n    n = len(data)\n    p = len(data[0])\n    cov = [[0.0] * p for _ in range(p)]\n    for i in range(p):\n        for j in range(p):\n            cov[i][j] = sum(data[k][i] * data[k][j] for k in range(n)) / (n - 1 if n > 1 else 1)\n    return cov",
              explanation: "Computes pairwise sample covariance (X^T * X) / (n - 1)."
            },
            {
              id: "ml-04-c-09",
              type: "coding",
              subType: "interview_challenge",
              difficulty: "interview",
              question: "Implement `pca_project_1d(data, top_eigenvector)` projecting 2D data onto a 1D line defined by top eigenvector.",
              language: "python",
              starterCode: "def pca_project_1d(data, top_eigenvector):\n    # Return 1D projections list\n    pass",
              expectedOutput: "List of float projections",
              solution: "def pca_project_1d(data, top_eigenvector):\n    return [sum(row[i] * top_eigenvector[i] for i in range(len(top_eigenvector))) for row in data]",
              explanation: "Computes dot product of each row vector with the principal eigenvector."
            },
            {
              id: "ml-04-c-10",
              type: "coding",
              subType: "interview_challenge",
              difficulty: "interview",
              question: "Implement AdaBoost sample weight update formula: `w_new = w * exp(alpha * (1 if misclassified else -1))`.",
              language: "python",
              starterCode: "import math\n\ndef update_adaboost_weights(weights, y_true, y_pred, alpha):\n    # Return normalized weights\n    pass",
              expectedOutput: "List of normalized weights",
              solution: "import math\n\ndef update_adaboost_weights(weights, y_true, y_pred, alpha):\n    new_w = []\n    for w, yt, yp in zip(weights, y_true, y_pred):\n        factor = math.exp(alpha if yt != yp else -alpha)\n        new_w.append(w * factor)\n    total = sum(new_w)\n    return [val / total for val in new_w]",
              explanation: "Increases weights of misclassified instances and decreases weights of correctly classified instances, then normalizes."
            }
          ]
        }
      ]
    },
    {
      moduleId: "module-ml-nlp",
      title: "Module 2: Natural Language Processing (NLP)",
      lectures: [
        {
          lectureId: "ml-lecture-05",
          lectureNumber: 5,
          title: "Learn Complete NLP with Project (Bag of Words, Tf-idf) | For Beginners",
          videoUrl: "https://www.youtube.com/embed/yiNS_Sh9KDA",
          topics: ["Text Preprocessing & Normalization", "Tokenization, Lemmatization & Stopwords", "Bag of Words (BoW) Representation", "TF-IDF (Term Frequency-Inverse Document Frequency)"],
          assessment: { totalQuestions: 20, fundamentalQuestions: 10, codingQuestions: 10 },
          fundamentalQuestions: [
            {
              id: "ml-05-f-01",
              type: "fundamental",
              difficulty: "easy",
              question: "What is Tokenization in Natural Language Processing?",
              options: [
                "Encrypting text with security passwords",
                "Breaking text into smaller individual units such as words, subwords, or characters",
                "Translating text to another language automatically",
                "Counting total storage bytes of a file"
              ],
              correctAnswer: 1,
              explanation: "Tokenization segments raw strings into semantic units called tokens for numerical processing."
            },
            {
              id: "ml-05-f-02",
              type: "fundamental",
              difficulty: "easy",
              question: "What are Stopwords in NLP?",
              options: [
                "Punctuation characters only",
                "Common words (like 'is', 'the', 'and') that carry minimal distinctive informational value and are often filtered out",
                "Words that cause syntax errors in Python",
                "Capitalized proper nouns"
              ],
              correctAnswer: 1,
              explanation: "Stopwords are ubiquitous words filtered out to reduce vocabulary size without losing domain meaning."
            },
            {
              id: "ml-05-f-03",
              type: "fundamental",
              difficulty: "easy",
              question: "What is the primary limitation of the Bag of Words (BoW) model?",
              options: [
                "It cannot count word occurrences",
                "It discards word order, grammar, and syntactic context entirely",
                "It requires GPU compilation",
                "It cannot work with English words"
              ],
              correctAnswer: 1,
              explanation: "BoW treats documents as unordered frequency counts, ignoring sequence and grammatical relationships."
            },
            {
              id: "ml-05-f-04",
              type: "fundamental",
              difficulty: "medium",
              question: "What is the difference between Stemming and Lemmatization?",
              options: [
                "Stemming chops word endings heuristically (often producing non-words); Lemmatization uses vocabulary and morphological analysis to return valid base words (lemmas)",
                "Stemming is for sentences; Lemmatization is for individual characters",
                "Lemmatization does not require linguistic knowledge",
                "Stemming produces dictionary roots every time"
              ],
              correctAnswer: 0,
              explanation: "Stemming uses crude rules (Porter stemmer), while Lemmatization maps words to dictionary base forms using POS tags."
            },
            {
              id: "ml-05-f-05",
              type: "fundamental",
              difficulty: "medium",
              question: "In TF-IDF, why do we multiply Term Frequency (TF) by Inverse Document Frequency (IDF)?",
              options: [
                "To penalize words that appear frequently across all documents and reward words unique to specific documents",
                "To increase the vector length to 10,000",
                "To turn negative numbers positive",
                "To speed up text reading"
              ],
              correctAnswer: 0,
              explanation: "IDF downweights common ubiquitous terms across the corpus, highlighting distinctive, informative keywords."
            },
            {
              id: "ml-05-f-06",
              type: "fundamental",
              difficulty: "medium",
              question: "What is an N-gram in text processing?",
              options: [
                "A contiguous sequence of n items (words or characters) from a given sample of text",
                "A weight unit in neural networks",
                "A metric for document file size",
                "A type of regex compiler"
              ],
              correctAnswer: 0,
              explanation: "N-grams capture local word combinations (e.g. bigrams 'machine learning', trigrams 'deep neural network')."
            },
            {
              id: "ml-05-f-07",
              type: "fundamental",
              difficulty: "hard",
              question: "What does the Cosine Similarity metric measure between two text TF-IDF vectors?",
              options: [
                "The cosine of the angle between them, measuring orientation similarity regardless of document length",
                "The Euclidean distance in centimeters",
                "The number of characters shared between sentences",
                "The grammatical correctness of the text"
              ],
              correctAnswer: 0,
              explanation: "Cosine similarity (A . B / ||A|| ||B||) measures directional alignment, which is length-invariant."
            },
            {
              id: "ml-05-f-08",
              type: "fundamental",
              difficulty: "hard",
              question: "What is Out-Of-Vocabulary (OOV) problem and how do subword tokenizers (e.g. Byte-Pair Encoding) address it?",
              options: [
                "When words not seen during training appear; subword tokenizers break unknown words into known subword fragments",
                "When disk space runs out during tokenization",
                "When text contains non-ASCII characters only",
                "When vocabulary size exceeds 1,000 words"
              ],
              correctAnswer: 0,
              explanation: "Subword tokenizers decompose novel words into recognized sub-tokens (e.g., 'unfriendly' -> 'un' + 'friend' + 'ly')."
            },
            {
              id: "ml-05-f-09",
              type: "fundamental",
              difficulty: "interview",
              question: "Why do traditional Bag of Words representations result in extremely sparse matrices?",
              options: [
                "Because any single document only contains a tiny fraction of all unique words in the corpus vocabulary",
                "Because of compression bugs in Python",
                "Because documents are deleted during training",
                "Because TF-IDF rounds all numbers to zero"
              ],
              correctAnswer: 0,
              explanation: "Vocabularies easily exceed 50,000 words while individual sentences contain only 10-50 words, yielding 99%+ zero entries."
            },
            {
              id: "ml-05-f-10",
              type: "fundamental",
              difficulty: "interview",
              question: "How do dense semantic embeddings (Word2Vec / GloVe) improve upon sparse TF-IDF vectors?",
              options: [
                "They capture semantic similarity in continuous low-dimensional space where synonyms have high cosine similarity",
                "They convert text into binary numbers only",
                "They eliminate the need for training algorithms",
                "They cannot be used with classification models"
              ],
              correctAnswer: 0,
              explanation: "Embeddings represent words as dense vectors where geometric relationships reflect linguistic semantics."
            }
          ],
          codingQuestions: [
            {
              id: "ml-05-c-01",
              type: "coding",
              subType: "implementation",
              difficulty: "easy",
              question: "Write `tokenize(text)` that converts text to lowercase and splits it into a list of alphanumeric words.",
              language: "python",
              starterCode: "import re\n\ndef tokenize(text):\n    # Return list of lowercase words\n    pass",
              expectedOutput: "List of word strings",
              solution: "import re\n\ndef tokenize(text):\n    return re.findall(r'\\b\\w+\\b', text.lower())",
              explanation: "Finds all word character sequences and converts them to lowercase."
            },
            {
              id: "ml-05-c-02",
              type: "coding",
              subType: "implementation",
              difficulty: "easy",
              question: "Write `remove_stopwords(tokens, stopwords)` returning tokens not present in the stopwords set.",
              language: "python",
              starterCode: "def remove_stopwords(tokens, stopwords):\n    # Return filtered tokens\n    pass",
              expectedOutput: "Filtered tokens list",
              solution: "def remove_stopwords(tokens, stopwords):\n    stop_set = set(stopwords)\n    return [t for t in tokens if t not in stop_set]",
              explanation: "Filters out words belonging to the stopwords set."
            },
            {
              id: "ml-05-c-03",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Write `build_vocab(documents)` that builds a sorted list of unique words present across all documents.",
              language: "python",
              starterCode: "def build_vocab(documents):\n    # Return sorted list of unique tokens\n    pass",
              expectedOutput: "Sorted list of unique words",
              solution: "def build_vocab(documents):\n    vocab = set()\n    for doc in documents:\n        for word in doc.lower().split():\n            vocab.add(word)\n    return sorted(list(vocab))",
              explanation: "Collects all tokens into a set and returns them in sorted alphabetical order."
            },
            {
              id: "ml-05-c-04",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Implement `bag_of_words_vector(doc, vocab)` returning word counts in the order of `vocab`.",
              language: "python",
              starterCode: "def bag_of_words_vector(doc, vocab):\n    # Return list of integer counts\n    pass",
              expectedOutput: "List of integer frequencies",
              solution: "from collections import Counter\n\ndef bag_of_words_vector(doc, vocab):\n    counts = Counter(doc.lower().split())\n    return [counts[word] for word in vocab]",
              explanation: "Creates frequency vector matching vocabulary ordering."
            },
            {
              id: "ml-05-c-05",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Write `compute_tf(doc_tokens)` returning a dictionary mapping each word to its relative term frequency.",
              language: "python",
              starterCode: "def compute_tf(doc_tokens):\n    # Return dict {word: tf_value}\n    pass",
              expectedOutput: "Dict of TF scores",
              solution: "from collections import Counter\n\ndef compute_tf(doc_tokens):\n    n = len(doc_tokens)\n    if n == 0:\n        return {}\n    counts = Counter(doc_tokens)\n    return {word: count / n for word, count in counts.items()}",
              explanation: "Divides count of each word by total word count in the document."
            },
            {
              id: "ml-05-c-06",
              type: "coding",
              subType: "implementation",
              difficulty: "hard",
              question: "Write `compute_idf(corpus_tokens, vocab)` returning IDF for each vocabulary word using formula `log(N / (df + 1)) + 1`.",
              language: "python",
              starterCode: "import math\n\ndef compute_idf(corpus_tokens, vocab):\n    # corpus_tokens: list of token lists\n    pass",
              expectedOutput: "Dict {word: idf_value}",
              solution: "import math\n\ndef compute_idf(corpus_tokens, vocab):\n    n = len(corpus_tokens)\n    idf = {}\n    for word in vocab:\n        df = sum(1 for doc in corpus_tokens if word in doc)\n        idf[word] = math.log((n + 1) / (df + 1)) + 1.0\n    return idf",
              explanation: "Applies smoothed inverse document frequency formula."
            },
            {
              id: "ml-05-c-07",
              type: "coding",
              subType: "implementation",
              difficulty: "hard",
              question: "Implement `cosine_similarity(vec1, vec2)` computing cosine similarity between two numerical vectors.",
              language: "python",
              starterCode: "import math\n\ndef cosine_similarity(vec1, vec2):\n    # Return float similarity\n    pass",
              expectedOutput: "Float in [-1, 1]",
              solution: "import math\n\ndef cosine_similarity(vec1, vec2):\n    dot = sum(a * b for a, b in zip(vec1, vec2))\n    norm1 = math.sqrt(sum(a ** 2 for a in vec1))\n    norm2 = math.sqrt(sum(b ** 2 for b in vec2))\n    if norm1 == 0 or norm2 == 0:\n        return 0.0\n    return dot / (norm1 * norm2)",
              explanation: "Divides dot product by product of Euclidean norms."
            },
            {
              id: "ml-05-c-08",
              type: "coding",
              subType: "debugging",
              difficulty: "hard",
              question: "Fix bug in n-gram generation: `def get_bigrams(tokens): return [tokens[i] for i in range(len(tokens))]`.",
              language: "python",
              starterCode: "def get_bigrams(tokens):\n    # Fix bigram generator\n    return [tokens[i] for i in range(len(tokens))]",
              expectedOutput: "List of 2-tuples",
              solution: "def get_bigrams(tokens):\n    return [(tokens[i], tokens[i + 1]) for i in range(len(tokens) - 1)]",
              explanation: "Generates consecutive pairs of tokens (token[i], token[i+1])."
            },
            {
              id: "ml-05-c-09",
              type: "coding",
              subType: "interview_challenge",
              difficulty: "interview",
              question: "Write `generate_ngrams(tokens, n)` that returns all contiguous n-tuples of length n.",
              language: "python",
              starterCode: "def generate_ngrams(tokens, n):\n    # Return list of n-tuples\n    pass",
              expectedOutput: "List of tuples",
              solution: "def generate_ngrams(tokens, n):\n    if len(tokens) < n:\n        return []\n    return [tuple(tokens[i:i + n]) for i in range(len(tokens) - n + 1)]",
              explanation: "Extracts sliding window slices of size n."
            },
            {
              id: "ml-05-c-10",
              type: "coding",
              subType: "interview_challenge",
              difficulty: "interview",
              question: "Implement `tfidf_vector(doc_tokens, vocab, idf_dict)` returning normalized TF-IDF vector for a document.",
              language: "python",
              starterCode: "import math\n\ndef tfidf_vector(doc_tokens, vocab, idf_dict):\n    # Return list of TF-IDF values\n    pass",
              expectedOutput: "Float vector",
              solution: "import math\nfrom collections import Counter\n\ndef tfidf_vector(doc_tokens, vocab, idf_dict):\n    counts = Counter(doc_tokens)\n    n = len(doc_tokens) if doc_tokens else 1\n    raw_tfidf = [(counts[w] / n) * idf_dict.get(w, 1.0) for w in vocab]\n    norm = math.sqrt(sum(v ** 2 for v in raw_tfidf))\n    if norm == 0:\n        return raw_tfidf\n    return [v / norm for v in raw_tfidf]",
              explanation: "Multiplies TF by IDF and L2-normalizes the vector."
            }
          ]
        }
      ]
    },
    {
      moduleId: "module-ml-deep-learning",
      title: "Module 3: Deep Learning, CNNs, RNNs & Transformers",
      lectures: [
        {
          lectureId: "ml-lecture-06",
          lectureNumber: 6,
          title: "Deep Learning Complete Course | Part 1| ANN implementation",
          videoUrl: "https://www.youtube.com/embed/losbBdEjyN4",
          topics: ["Artificial Neural Networks (ANN)", "Perceptrons & Multi-Layer Perceptrons (MLP)", "Activation Functions (ReLU, Sigmoid, Softmax)", "Backpropagation & Chain Rule"],
          assessment: { totalQuestions: 20, fundamentalQuestions: 10, codingQuestions: 10 },
          fundamentalQuestions: [
            {
              id: "ml-06-f-01",
              type: "fundamental",
              difficulty: "easy",
              question: "What is an Artificial Neuron (Perceptron)?",
              options: [
                "A mathematical function that computes a weighted sum of inputs plus bias, passed through an activation function",
                "A biological brain cell implanted in computers",
                "A database storage engine",
                "A type of wireless sensor"
              ],
              correctAnswer: 0,
              explanation: "A perceptron computes z = sum(w_i * x_i) + b, followed by activation f(z)."
            },
            {
              id: "ml-06-f-02",
              type: "fundamental",
              difficulty: "easy",
              question: "Why are non-linear activation functions essential in deep neural networks?",
              options: [
                "Without non-linearities, any stack of linear layers collapses into a single equivalent linear transformation",
                "They prevent code from timing out",
                "They convert floating point numbers to integers",
                "They make training use less memory"
              ],
              correctAnswer: 0,
              explanation: "Stacking linear operations results only in linear functions; non-linear activations allow networks to approximate arbitrary functions."
            },
            {
              id: "ml-06-f-03",
              type: "fundamental",
              difficulty: "easy",
              question: "What is the formula for the Rectified Linear Unit (ReLU) activation function?",
              options: [
                "f(x) = max(0, x)",
                "f(x) = 1 / (1 + e^-x)",
                "f(x) = tanh(x)",
                "f(x) = x^2"
              ],
              correctAnswer: 0,
              explanation: "ReLU outputs x if x > 0, and 0 otherwise, providing fast computation and mitigating vanishing gradients."
            },
            {
              id: "ml-06-f-04",
              type: "fundamental",
              difficulty: "medium",
              question: "What algorithm is used to compute gradients of the loss with respect to all network weights?",
              options: [
                "Backpropagation (applying calculus chain rule backwards through layers)",
                "Dijkstra's Shortest Path",
                "Binary Search",
                "Merge Sort"
              ],
              correctAnswer: 0,
              explanation: "Backpropagation applies the chain rule from the loss backwards through each layer to compute parameter gradients."
            },
            {
              id: "ml-06-f-05",
              type: "fundamental",
              difficulty: "medium",
              question: "What is the Vanishing Gradient problem in deep networks?",
              options: [
                "When gradients shrink exponentially as they propagate backward through many layers, preventing early layers from updating",
                "When weights become infinitely large",
                "When data is deleted during gradient descent",
                "When the model trains too quickly"
              ],
              correctAnswer: 0,
              explanation: "Multiplying small gradient values (< 1) repeatedly through many deep layers causes gradients to vanish near zero."
            },
            {
              id: "ml-06-f-06",
              type: "fundamental",
              difficulty: "medium",
              question: "What activation function is typically placed at the final output layer of a multi-class classification neural network?",
              options: ["Softmax", "ReLU", "Step function", "Linear"],
              correctAnswer: 0,
              explanation: "Softmax converts raw logits into a normalized probability distribution across all classes that sums to 1."
            },
            {
              id: "ml-06-f-07",
              type: "fundamental",
              difficulty: "hard",
              question: "How does Dropout regularization prevent overfitting in neural networks during training?",
              options: [
                "By randomly deactivating a fraction of neurons on each forward pass, forcing redundant independent feature learning",
                "By dropping random rows from the database",
                "By terminating the training session early",
                "By setting all weights to zero"
              ],
              correctAnswer: 0,
              explanation: "Dropout prevents co-adaptation of neurons by zeroing random unit activations with probability p during training."
            },
            {
              id: "ml-06-f-08",
              type: "fundamental",
              difficulty: "hard",
              question: "What is the Dying ReLU problem and how can Leaky ReLU resolve it?",
              options: [
                "Neurons outputting negative values get gradient 0 and never update; Leaky ReLU allows a small positive slope (e.g. 0.01x) for negative inputs",
                "When CPU runs out of memory during ReLU execution",
                "When weights become NaN",
                "When activations become larger than 1.0"
              ],
              correctAnswer: 0,
              explanation: "If a ReLU neuron stays negative, its gradient is 0, freezing it; Leaky ReLU provides non-zero gradient for negative inputs."
            },
            {
              id: "ml-06-f-09",
              type: "fundamental",
              difficulty: "interview",
              question: "Why is Xavier (Glorot) / He weight initialization critical for deep neural network convergence?",
              options: [
                "It scales initial weight variances so signal variance remains stable across deep layers, preventing vanishing or exploding activations",
                "It sets all weights to identical constant values",
                "It makes GPU memory allocation contiguous",
                "It encrypts model weights"
              ],
              correctAnswer: 0,
              explanation: "Proper initialization prevents activations from either exploding to infinity or decaying to zero as depth increases."
            },
            {
              id: "ml-06-f-10",
              type: "fundamental",
              difficulty: "interview",
              question: "How does the Adam optimizer combine Momentum and RMSprop?",
              options: [
                "It tracks both the exponential moving average of past gradients (first moment) and past squared gradients (second moment)",
                "It alternates between decision trees and linear regression",
                "It disables learning rate decay",
                "It computes exact matrix inverses"
              ],
              correctAnswer: 0,
              explanation: "Adam combines momentum (smoothing oscillations) and RMSprop (adapting per-parameter learning rates using squared gradients)."
            }
          ],
          codingQuestions: [
            {
              id: "ml-06-c-01",
              type: "coding",
              subType: "implementation",
              difficulty: "easy",
              question: "Implement `relu(x)` returning `max(0.0, x)`.",
              language: "python",
              starterCode: "def relu(x):\n    # Return ReLU of x\n    pass",
              expectedOutput: "Float value >= 0",
              solution: "def relu(x):\n    return max(0.0, float(x))",
              explanation: "Returns x if positive, else 0.0."
            },
            {
              id: "ml-06-c-02",
              type: "coding",
              subType: "implementation",
              difficulty: "easy",
              question: "Implement `relu_derivative(x)` returning 1.0 if x > 0 else 0.0.",
              language: "python",
              starterCode: "def relu_derivative(x):\n    # Return gradient\n    pass",
              expectedOutput: "1.0 or 0.0",
              solution: "def relu_derivative(x):\n    return 1.0 if x > 0 else 0.0",
              explanation: "Derivative of ReLU is 1 for positive numbers and 0 for non-positive numbers."
            },
            {
              id: "ml-06-c-03",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Implement `softmax(logits)` returning a normalized probability distribution.",
              language: "python",
              starterCode: "import math\n\ndef softmax(logits):\n    # Return list of probabilities summing to 1.0\n    pass",
              expectedOutput: "List of probabilities",
              solution: "import math\n\ndef softmax(logits):\n    max_val = max(logits)\n    exp_vals = [math.exp(x - max_val) for x in logits]\n    total = sum(exp_vals)\n    return [v / total for v in exp_vals]",
              explanation: "Applies numerically stable softmax with max subtraction."
            },
            {
              id: "ml-06-c-04",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Write `dense_forward(inputs, weights, bias)` computing `f(x) = sum(x_i * w_i) + b`.",
              language: "python",
              starterCode: "def dense_forward(inputs, weights, bias):\n    # Compute linear activation\n    pass",
              expectedOutput: "Float value",
              solution: "def dense_forward(inputs, weights, bias):\n    return sum(x * w for x, w in zip(inputs, weights)) + bias",
              explanation: "Calculates inner product of inputs and weights plus bias."
            },
            {
              id: "ml-06-c-05",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Implement `cross_entropy_multiclass(y_true_idx, pred_probs)` computing -log(pred_probs[y_true_idx]).",
              language: "python",
              starterCode: "import math\n\ndef cross_entropy_multiclass(y_true_idx, pred_probs):\n    # Return cross entropy loss\n    pass",
              expectedOutput: "Float loss",
              solution: "import math\n\ndef cross_entropy_multiclass(y_true_idx, pred_probs):\n    eps = 1e-15\n    p = max(min(pred_probs[y_true_idx], 1.0 - eps), eps)\n    return -math.log(p)",
              explanation: "Negative log probability of the true target class."
            },
            {
              id: "ml-06-c-06",
              type: "coding",
              subType: "problem_solving",
              difficulty: "hard",
              question: "Implement forward pass for a 2-layer MLP `mlp_forward(x, W1, b1, W2, b2)` with ReLU hidden activation.",
              language: "python",
              starterCode: "def mlp_forward(x, W1, b1, W2, b2):\n    # Return output scalar\n    pass",
              expectedOutput: "Float output",
              solution: "def mlp_forward(x, W1, b1, W2, b2):\n    # Hidden layer\n    hidden = []\n    for row, b in zip(W1, b1):\n        z = sum(xi * wi for xi, wi in zip(x, row)) + b\n        hidden.append(max(0.0, z))\n    # Output layer\n    out = sum(h * w for h, w in zip(hidden, W2)) + b2\n    return out",
              explanation: "Computes hidden activations with ReLU and passes them to output layer."
            },
            {
              id: "ml-06-c-07",
              type: "coding",
              subType: "debugging",
              difficulty: "hard",
              question: "Fix numerical overflow bug in Sigmoid when input is large negative or positive.",
              language: "python",
              starterCode: "import math\n\ndef safe_sigmoid(x):\n    # Prevent overflow error\n    return 1 / (1 + math.exp(-x))",
              expectedOutput: "Safe float in [0, 1]",
              solution: "import math\n\ndef safe_sigmoid(x):\n    if x >= 0:\n        z = math.exp(-x)\n        return 1.0 / (1.0 + z)\n    else:\n        z = math.exp(x)\n        return z / (1.0 + z)",
              explanation: "Uses branching implementation to avoid exp(700+) overflow."
            },
            {
              id: "ml-06-c-08",
              type: "coding",
              subType: "implementation",
              difficulty: "hard",
              question: "Implement `dropout(activations, drop_prob, is_training=True)` with inverted dropout scaling.",
              language: "python",
              starterCode: "def dropout(activations, drop_prob=0.5, is_training=True):\n    # Return scaled activations\n    pass",
              expectedOutput: "List of activations",
              solution: "import random\n\ndef dropout(activations, drop_prob=0.5, is_training=True):\n    if not is_training or drop_prob == 0.0:\n        return activations\n    keep_prob = 1.0 - drop_prob\n    return [(x / keep_prob) if random.random() < keep_prob else 0.0 for x in activations]",
              explanation: "Inverted dropout scales surviving activations by 1/keep_prob so inference requires no modification."
            },
            {
              id: "ml-06-c-09",
              type: "coding",
              subType: "interview_challenge",
              difficulty: "interview",
              question: "Implement `sgd_momentum_update(param, grad, velocity, lr, beta=0.9)` returning `(new_param, new_velocity)`.",
              language: "python",
              starterCode: "def sgd_momentum_update(param, grad, velocity, lr, beta=0.9):\n    # Return (new_param, new_velocity)\n    pass",
              expectedOutput: "Tuple of 2 floats",
              solution: "def sgd_momentum_update(param, grad, velocity, lr, beta=0.9):\n    new_v = beta * velocity + (1 - beta) * grad\n    new_param = param - lr * new_v\n    return new_param, new_v",
              explanation: "Updates exponential moving average of gradients and adjusts parameters."
            },
            {
              id: "ml-06-c-10",
              type: "coding",
              subType: "interview_challenge",
              difficulty: "interview",
              question: "Implement backprop gradient for a single neuron: given inputs `x`, output `y_pred`, target `y_true`, return gradients `(dw_list, db)` for MSE.",
              language: "python",
              starterCode: "def neuron_backward(x, y_pred, y_true):\n    # Return (dw, db)\n    pass",
              expectedOutput: "(dw_list, db)",
              solution: "def neuron_backward(x, y_pred, y_true):\n    diff = 2 * (y_pred - y_true)\n    dw = [diff * xi for xi in x]\n    db = diff\n    return dw, db",
              explanation: "Computes partial derivatives of squared error with respect to weights and bias."
            }
          ]
        },
        {
          lectureId: "ml-lecture-07",
          lectureNumber: 7,
          title: "Deep Learning Complete Course | Part 2| CNN implementation",
          videoUrl: "https://www.youtube.com/embed/dh3ilHzIRd0",
          topics: ["Convolutional Neural Networks (CNN)", "Kernels & Filters", "Padding (Valid vs Same) & Stride", "Pooling Layers (MaxPooling, AveragePooling)"],
          assessment: { totalQuestions: 20, fundamentalQuestions: 10, codingQuestions: 10 },
          fundamentalQuestions: [
            {
              id: "ml-07-f-01",
              type: "fundamental",
              difficulty: "easy",
              question: "Why are CNNs superior to fully connected Dense networks for image data?",
              options: [
                "CNNs leverage parameter sharing and spatial translation invariance, drastically reducing parameters",
                "Dense networks cannot process 2D arrays",
                "CNNs don't require training data",
                "Dense networks cannot be deployed on mobile devices"
              ],
              correctAnswer: 0,
              explanation: "Convolutional filters scan across the entire image using shared weights, capturing localized patterns regardless of spatial location."
            },
            {
              id: "ml-07-f-02",
              type: "fundamental",
              difficulty: "easy",
              question: "What is a 'Kernel' or 'Filter' in a convolutional layer?",
              options: [
                "A small matrix of learnable weights (e.g. 3x3) that slides over input data to compute feature maps",
                "A hardware cooler on GPU chips",
                "A technique to crop images automatically",
                "A tool for deleting duplicate images"
              ],
              correctAnswer: 0,
              explanation: "Filters are small weight matrices trained to detect specific spatial visual patterns (edges, textures, shapes)."
            },
            {
              id: "ml-07-f-03",
              type: "fundamental",
              difficulty: "easy",
              question: "What does a Max Pooling layer do?",
              options: [
                "It takes the maximum value in each subregion, downsampling spatial dimensions and providing translational invariance",
                "It adds random noise to image pixels",
                "It multiplies all pixel values by two",
                "It converts colored RGB images to black-and-white"
              ],
              correctAnswer: 0,
              explanation: "MaxPooling downsamples spatial height and width by keeping the maximum activation in each window."
            },
            {
              id: "ml-07-f-04",
              type: "fundamental",
              difficulty: "medium",
              question: "What is the difference between 'Valid' and 'Same' padding?",
              options: [
                "Valid padding applies no padding (output shrinks); Same padding pads borders with zeros so output has identical spatial dimensions",
                "Valid padding is for RGB; Same padding is for grayscale",
                "Same padding increases image resolution",
                "Valid padding causes memory leaks"
              ],
              correctAnswer: 0,
              explanation: "Valid padding performs convolutions strictly inside boundaries; Same padding adds zero-padding so output dimension matches input."
            },
            {
              id: "ml-07-f-05",
              type: "fundamental",
              difficulty: "medium",
              question: "Given an input of size W x W, filter size F x F, padding P, and stride S, what is the output dimension?",
              options: [
                "((W - F + 2P) / S) + 1",
                "(W * F) / S",
                "W - F + S",
                "((W + F) / S) - P"
              ],
              correctAnswer: 0,
              explanation: "Output size = floor((W - F + 2P) / S) + 1."
            },
            {
              id: "ml-07-f-06",
              type: "fundamental",
              difficulty: "medium",
              question: "What is the Receptive Field of a neuron in a CNN?",
              options: [
                "The specific region in the original input image that contributes to that neuron's activation",
                "The memory buffer allocated in VRAM",
                "The range of values of the activation function",
                "The learning rate decay factor"
              ],
              correctAnswer: 0,
              explanation: "The receptive field is the sensory patch of input space affecting a particular feature unit."
            },
            {
              id: "ml-07-f-07",
              type: "fundamental",
              difficulty: "hard",
              question: "What is the primary innovation introduced by Residual Networks (ResNet)?",
              options: [
                "Skip connections (residual shortcuts) that allow gradients to flow directly, enabling training of ultra-deep networks (100+ layers)",
                "Replacing convolutions with dense layers",
                "Eliminating activation functions",
                "Using only 1x1 image sizes"
              ],
              correctAnswer: 0,
              explanation: "ResNet's skip connections let layers learn residual functions F(x) = H(x) - x, solving vanishing gradient in deep models."
            },
            {
              id: "ml-07-f-08",
              type: "fundamental",
              difficulty: "hard",
              question: "What is a 1x1 Convolution (Pointwise Convolution) primarily used for?",
              options: [
                "Dimensionality reduction/expansion across channel depth while preserving spatial dimensions",
                "Detecting large geometric shapes",
                "Blurring images",
                "Replacing the GPU driver"
              ],
              correctAnswer: 0,
              explanation: "1x1 convolutions compute linear combinations across channel channels, reducing or increasing feature depth efficiently."
            },
            {
              id: "ml-07-f-09",
              type: "fundamental",
              difficulty: "interview",
              question: "What is Batch Normalization and where is it typically placed in a CNN?",
              options: [
                "It normalizes layer inputs across the mini-batch to zero mean and unit variance, typically placed between convolution and activation",
                "It normalizes dataset files on disk before reading",
                "It sorts pixels from brightest to darkest",
                "It restricts batch sizes to powers of 2"
              ],
              correctAnswer: 0,
              explanation: "BatchNorm stabilizes internal covariate shift, allowing higher learning rates and acting as a mild regularizer."
            },
            {
              id: "ml-07-f-10",
              type: "fundamental",
              difficulty: "interview",
              question: "How does Transfer Learning with pre-trained CNNs (e.g. VGG, ResNet) work for custom classification tasks?",
              options: [
                "Freeze early convolutional layers (which capture generic edges/textures) and fine-tune or train new fully connected classification heads",
                "Retrain all weights from scratch with random values",
                "Transfer models across different programming languages only",
                "Use the pre-trained model without providing any training data"
              ],
              correctAnswer: 0,
              explanation: "Early CNN layers learn universal visual representations, making them reusable across novel visual domains."
            }
          ],
          codingQuestions: [
            {
              id: "ml-07-c-01",
              type: "coding",
              subType: "implementation",
              difficulty: "easy",
              question: "Implement `calc_conv_output_size(input_size, filter_size, padding, stride)`.",
              language: "python",
              starterCode: "def calc_conv_output_size(w, f, p, s):\n    # Return integer output dimension\n    pass",
              expectedOutput: "Integer dimension",
              solution: "def calc_conv_output_size(w, f, p, s):\n    return ((w - f + 2 * p) // s) + 1",
              explanation: "Standard formula for 1D/2D convolutional output dimension."
            },
            {
              id: "ml-07-c-02",
              type: "coding",
              subType: "implementation",
              difficulty: "easy",
              question: "Implement `max_pool_2x2(patch)` that takes a 2x2 list of lists and returns the maximum element.",
              language: "python",
              starterCode: "def max_pool_2x2(patch):\n    # patch is 2x2 list of numbers\n    pass",
              expectedOutput: "Scalar maximum",
              solution: "def max_pool_2x2(patch):\n    return max(patch[0][0], patch[0][1], patch[1][0], patch[1][1])",
              explanation: "Finds max value in a 2x2 window."
            },
            {
              id: "ml-07-c-03",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Write `pad_2d(matrix, p)` that adds `p` layers of zero padding around a 2D matrix.",
              language: "python",
              starterCode: "def pad_2d(matrix, p):\n    # Return padded 2D matrix\n    pass",
              expectedOutput: "Padded 2D matrix",
              solution: "def pad_2d(matrix, p):\n    if p == 0:\n        return [row[:] for row in matrix]\n    rows = len(matrix)\n    cols = len(matrix[0])\n    new_cols = cols + 2 * p\n    padded = [[0] * new_cols for _ in range(p)]\n    for row in matrix:\n        padded.append([0] * p + list(row) + [0] * p)\n    for _ in range(p):\n        padded.append([0] * new_cols)\n    return padded",
              explanation: "Surrounds 2D matrix with p rows and columns of zeroes."
            },
            {
              id: "ml-07-c-04",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Implement 2D convolution without padding: `conv2d_valid(image, kernel)`.",
              language: "python",
              starterCode: "def conv2d_valid(image, kernel):\n    # Return output feature map 2D matrix\n    pass",
              expectedOutput: "2D list output map",
              solution: "def conv2d_valid(image, kernel):\n    h, w = len(image), len(image[0])\n    kh, kw = len(kernel), len(kernel[0])\n    out_h = h - kh + 1\n    out_w = w - kw + 1\n    out = []\n    for i in range(out_h):\n        row = []\n        for j in range(out_w):\n            val = sum(image[i + ki][j + kj] * kernel[ki][kj] for ki in range(kh) for kj in range(kw))\n            row.append(val)\n        out.append(row)\n    return out",
              explanation: "Slides kernel over image computing element-wise dot products."
            },
            {
              id: "ml-07-c-05",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Implement `maxpool_layer(image, pool_size=2, stride=2)` for a 2D image.",
              language: "python",
              starterCode: "def maxpool_layer(image, pool_size=2, stride=2):\n    # Return downsampled 2D map\n    pass",
              expectedOutput: "Downsampled 2D matrix",
              solution: "def maxpool_layer(image, pool_size=2, stride=2):\n    h, w = len(image), len(image[0])\n    out_h = (h - pool_size) // stride + 1\n    out_w = (w - pool_size) // stride + 1\n    out = []\n    for i in range(out_h):\n        row = []\n        for j in range(out_w):\n            r_start = i * stride\n            c_start = j * stride\n            patch = [image[r_start + ki][c_start + kj] for ki in range(pool_size) for kj in range(pool_size)]\n            row.append(max(patch))\n        out.append(row)\n    return out",
              explanation: "Performs max pooling across non-overlapping or overlapping windows."
            },
            {
              id: "ml-07-c-06",
              type: "coding",
              subType: "problem_solving",
              difficulty: "hard",
              question: "Implement `flatten_feature_maps(feature_maps)` converting a list of 2D matrices into a 1D vector.",
              language: "python",
              starterCode: "def flatten_feature_maps(feature_maps):\n    # feature_maps: list of 2D matrices\n    pass",
              expectedOutput: "1D list of numbers",
              solution: "def flatten_feature_maps(feature_maps):\n    flat = []\n    for fmap in feature_maps:\n        for row in fmap:\n            flat.extend(row)\n    return flat",
              explanation: "Flattens 3D tensor (channels, H, W) into a 1D array for input into dense layers."
            },
            {
              id: "ml-07-c-07",
              type: "coding",
              subType: "debugging",
              difficulty: "hard",
              question: "Fix horizontal edge detection kernel: `[[1, 1, 1], [0, 0, 0], [-1, -1, -1]]` was written with wrong signs.",
              language: "python",
              starterCode: "def horizontal_sobel_kernel():\n    # Return standard 3x3 horizontal edge kernel\n    return [[1, 2, 1], [0, 0, 0], [-1, -2, -1]]",
              expectedOutput: "3x3 kernel matrix",
              solution: "def horizontal_sobel_kernel():\n    return [[-1, -2, -1], [0, 0, 0], [1, 2, 1]]",
              explanation: "Sobel horizontal gradient filter checks vertical difference with weight factor 2 in center column."
            },
            {
              id: "ml-07-c-08",
              type: "coding",
              subType: "implementation",
              difficulty: "hard",
              question: "Implement `count_conv_params(in_channels, out_channels, kernel_size, use_bias=True)`.",
              language: "python",
              starterCode: "def count_conv_params(in_c, out_c, k, use_bias=True):\n    # Return total parameter count\n    pass",
              expectedOutput: "Integer parameter count",
              solution: "def count_conv_params(in_c, out_c, k, use_bias=True):\n    weights = in_c * out_c * k * k\n    bias = out_c if use_bias else 0\n    return weights + bias",
              explanation: "Each filter has shape (in_c, k, k), and there are out_c filters plus optional bias per filter."
            },
            {
              id: "ml-07-c-09",
              type: "coding",
              subType: "interview_challenge",
              difficulty: "interview",
              question: "Implement `residual_block(x, conv_output)` computing skip connection: `relu(x + conv_output)` element-wise.",
              language: "python",
              starterCode: "def residual_block(x, conv_output):\n    # Return residual addition + ReLU\n    pass",
              expectedOutput: "2D matrix",
              solution: "def residual_block(x, conv_output):\n    h, w = len(x), len(x[0])\n    return [[max(0.0, x[i][j] + conv_output[i][j]) for j in range(w)] for i in range(h)]",
              explanation: "Computes identity shortcut addition followed by non-linear activation."
            },
            {
              id: "ml-07-c-10",
              type: "coding",
              subType: "interview_challenge",
              difficulty: "interview",
              question: "Implement `global_average_pooling(feature_maps)` returning average value of each 2D feature map channel.",
              language: "python",
              starterCode: "def global_average_pooling(feature_maps):\n    # feature_maps: list of 2D matrices\n    pass",
              expectedOutput: "List of floats (one per channel)",
              solution: "def global_average_pooling(feature_maps):\n    out = []\n    for fmap in feature_maps:\n        total = sum(sum(row) for row in fmap)\n        count = len(fmap) * len(fmap[0])\n        out.append(total / count if count > 0 else 0.0)\n    return out",
              explanation: "Computes spatial average for each channel, commonly used before the final classification head."
            }
          ]
        },
        {
          lectureId: "ml-lecture-08",
          lectureNumber: 8,
          title: "Deep Learning Complete Course | Part 3| RNN implementation",
          videoUrl: "https://www.youtube.com/embed/0Q4yhrkwn7c",
          topics: ["Recurrent Neural Networks (RNN)", "Sequential & Time-Series Data", "Vanishing Gradients through Time (BPTT)", "LSTM & GRU Gating Mechanisms"],
          assessment: { totalQuestions: 20, fundamentalQuestions: 10, codingQuestions: 10 },
          fundamentalQuestions: [
            {
              id: "ml-08-f-01",
              type: "fundamental",
              difficulty: "easy",
              question: "What makes Recurrent Neural Networks (RNN) uniquely suitable for sequential data?",
              options: [
                "They maintain an internal hidden state memory carried from step to step, capturing sequential temporal dependencies",
                "They use larger image filters",
                "They only execute on audio files",
                "They don't use weights"
              ],
              correctAnswer: 0,
              explanation: "RNNs process inputs sequentially while maintaining a recurrent hidden state vector h_t that acts as temporal memory."
            },
            {
              id: "ml-08-f-02",
              type: "fundamental",
              difficulty: "easy",
              question: "What is Backpropagation Through Time (BPTT)?",
              options: [
                "Unrolling the recurrent network across all time steps and applying backpropagation to accumulate gradients",
                "Backing up code to historical Git commits",
                "Training models in reverse chronological order",
                "A hardware clock speed adjustment"
              ],
              correctAnswer: 0,
              explanation: "BPTT unfolds the computation graph across sequence steps to compute gradients of recurrent weights."
            },
            {
              id: "ml-08-f-03",
              type: "fundamental",
              difficulty: "easy",
              question: "Why do standard vanilla RNNs struggle with long-term dependencies (e.g. 50+ steps)?",
              options: [
                "Because gradients vanish or explode exponentially when multiplied repeatedly across time steps",
                "Because text cannot be longer than 20 characters",
                "Because memory arrays are limited to 10 entries",
                "Because Python lists crash on long inputs"
              ],
              correctAnswer: 0,
              explanation: "Repeated multiplication by recurrent weight matrices causes gradient signals from distant past steps to vanish exponentially."
            },
            {
              id: "ml-08-f-04",
              type: "fundamental",
              difficulty: "medium",
              question: "What are the three core gates in a Long Short-Term Memory (LSTM) cell?",
              options: [
                "Forget Gate, Input Gate, Output Gate",
                "Start Gate, Stop Gate, Pause Gate",
                "Convolution Gate, Pooling Gate, Dense Gate",
                "Cache Gate, Disk Gate, RAM Gate"
              ],
              correctAnswer: 0,
              explanation: "LSTMs regulate information flow into and out of the cell state via Forget, Input, and Output gates."
            },
            {
              id: "ml-08-f-05",
              type: "fundamental",
              difficulty: "medium",
              question: "What is the primary function of the Forget Gate in an LSTM cell?",
              options: [
                "Deciding what fraction of past cell state information C_{t-1} to retain or discard using sigmoid activation",
                "Deleting training data from the disk",
                "Resetting network weights to random values",
                "Clearing CPU cache"
              ],
              correctAnswer: 0,
              explanation: "f_t = sigmoid(W_f * [h_{t-1}, x_t] + b_f) outputs numbers between 0 (completely forget) and 1 (completely keep)."
            },
            {
              id: "ml-08-f-06",
              type: "fundamental",
              difficulty: "medium",
              question: "How does a Gated Recurrent Unit (GRU) differ from an LSTM?",
              options: [
                "GRU merges the cell state and hidden state, using only two gates (Reset and Update gates) making it computationally faster",
                "GRU cannot process sequential data",
                "GRU requires three times more parameters than LSTM",
                "GRU is only used for image classification"
              ],
              correctAnswer: 0,
              explanation: "GRUs simplify the LSTM architecture by combining cell state with hidden state and replacing three gates with Update and Reset gates."
            },
            {
              id: "ml-08-f-07",
              type: "fundamental",
              difficulty: "hard",
              question: "What is a Bidirectional RNN?",
              options: [
                "A network that runs two separate recurrent layers simultaneously: one processing sequences forward and one backward in time",
                "A network that translates code back and forth",
                "A network with two output labels",
                "A model that updates weights twice per step"
              ],
              correctAnswer: 0,
              explanation: "Bidirectional RNNs process text in both directions, giving hidden states access to both past and future context."
            },
            {
              id: "ml-08-f-08",
              type: "fundamental",
              difficulty: "hard",
              question: "What is Gradient Clipping and why is it frequently applied when training RNNs?",
              options: [
                "Thresholding gradient norms to a maximum value to prevent exploding gradients from destabilizing training",
                "Removing negative weights",
                "Cutting sequences in half",
                "Dropping 50% of the training dataset"
              ],
              correctAnswer: 0,
              explanation: "If gradient norm exceeds a threshold, it is scaled down proportionally to prevent numerical explosion."
            },
            {
              id: "ml-08-f-09",
              type: "fundamental",
              difficulty: "interview",
              question: "Why does the LSTM Cell State maintain long-term memory better than the hidden state?",
              options: [
                "The cell state acts as a linear conveyor belt with additive modifications, allowing error gradients to backpropagate without exponential decay",
                "The cell state is stored in permanent flash memory",
                "The cell state does not participate in backpropagation",
                "The cell state only stores integer values"
              ],
              correctAnswer: 0,
              explanation: "Additive updates (C_t = f_t * C_{t-1} + i_t * C~_t) provide uninterrupted highway paths for gradient flow over long horizons."
            },
            {
              id: "ml-08-f-10",
              type: "fundamental",
              difficulty: "interview",
              question: "What is the computational bottleneck of recurrent models that led to the development of Transformers?",
              options: [
                "Sequential step-by-step recurrence prevents parallelization across sequence length during training",
                "RNNs cannot run on GPUs",
                "RNNs have too few parameters",
                "RNNs can only handle sequences of exactly 10 tokens"
              ],
              correctAnswer: 0,
              explanation: "Because step t depends on step t-1, training cannot be parallelized across the time dimension, slowing training on massive datasets."
            }
          ],
          codingQuestions: [
            {
              id: "ml-08-c-01",
              type: "coding",
              subType: "implementation",
              difficulty: "easy",
              question: "Implement `rnn_step(x_t, h_prev, W_xh, W_hh, b)` computing `tanh(W_xh * x_t + W_hh * h_prev + b)`.",
              language: "python",
              starterCode: "import math\n\ndef rnn_step(x_t, h_prev, w_xh, w_hh, b):\n    # Return scalar new hidden state\n    pass",
              expectedOutput: "Float in [-1, 1]",
              solution: "import math\n\ndef rnn_step(x_t, h_prev, w_xh, w_hh, b):\n    z = w_xh * x_t + w_hh * h_prev + b\n    return math.tanh(z)",
              explanation: "Single vanilla RNN recurrent step with tanh activation."
            },
            {
              id: "ml-08-c-02",
              type: "coding",
              subType: "implementation",
              difficulty: "easy",
              question: "Implement `clip_gradient(grad, max_norm=5.0)` scaling scalar gradient if `abs(grad) > max_norm`.",
              language: "python",
              starterCode: "def clip_gradient(grad, max_norm=5.0):\n    # Return clipped gradient\n    pass",
              expectedOutput: "Clipped float",
              solution: "def clip_gradient(grad, max_norm=5.0):\n    if abs(grad) > max_norm:\n        return max_norm if grad > 0 else -max_norm\n    return grad",
              explanation: "Restricts gradient values within [-max_norm, max_norm]."
            },
            {
              id: "ml-08-c-03",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Implement `rnn_forward_sequence(x_seq, h_init, w_xh, w_hh, b)` returning all hidden states for sequence `x_seq`.",
              language: "python",
              starterCode: "import math\n\ndef rnn_forward_sequence(x_seq, h_init, w_xh, w_hh, b):\n    # Return list of hidden states\n    pass",
              expectedOutput: "List of floats",
              solution: "import math\n\ndef rnn_forward_sequence(x_seq, h_init, w_xh, w_hh, b):\n    h = h_init\n    states = []\n    for x in x_seq:\n        h = math.tanh(w_xh * x + w_hh * h + b)\n        states.append(h)\n    return states",
              explanation: "Sequentially processes tokens updating the hidden state."
            },
            {
              id: "ml-08-c-04",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Implement LSTM forget gate: `forget_gate(x, h_prev, w_f, u_f, b_f)` returning sigmoid activation.",
              language: "python",
              starterCode: "import math\n\ndef forget_gate(x, h_prev, w_f, u_f, b_f):\n    # Return forget gate value in [0, 1]\n    pass",
              expectedOutput: "Float in [0, 1]",
              solution: "import math\n\ndef forget_gate(x, h_prev, w_f, u_f, b_f):\n    z = w_f * x + u_f * h_prev + b_f\n    z = max(min(z, 500), -500)\n    return 1.0 / (1.0 + math.exp(-z))",
              explanation: "Sigmoid computation for LSTM forget gate."
            },
            {
              id: "ml-08-c-05",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Implement LSTM cell state update: `update_cell_state(c_prev, f_t, i_t, c_cand)` where `c_t = f_t * c_prev + i_t * c_cand`.",
              language: "python",
              starterCode: "def update_cell_state(c_prev, f_t, i_t, c_cand):\n    # Return new cell state\n    pass",
              expectedOutput: "Float cell state",
              solution: "def update_cell_state(c_prev, f_t, i_t, c_cand):\n    return f_t * c_prev + i_t * c_cand",
              explanation: "Calculates updated cell state combining forgotten old state with scaled candidate state."
            },
            {
              id: "ml-08-c-06",
              type: "coding",
              subType: "problem_solving",
              difficulty: "hard",
              question: "Implement `lstm_step(x, h_prev, c_prev, params)` that returns `(h_next, c_next)` for 1D scalar weights.",
              language: "python",
              starterCode: "def lstm_step(x, h_prev, c_prev, params):\n    # params: dict with w_f, u_f, b_f, w_i, u_i, b_i, w_c, u_c, b_c, w_o, u_o, b_o\n    pass",
              expectedOutput: "Tuple of (float, float)",
              solution: "import math\n\ndef lstm_step(x, h_prev, c_prev, params):\n    def sig(val): return 1.0 / (1.0 + math.exp(-max(min(val, 500), -500)))\n    f = sig(params['w_f'] * x + params['u_f'] * h_prev + params['b_f'])\n    i = sig(params['w_i'] * x + params['u_i'] * h_prev + params['b_i'])\n    c_cand = math.tanh(params['w_c'] * x + params['u_c'] * h_prev + params['b_c'])\n    c_next = f * c_prev + i * c_cand\n    o = sig(params['w_o'] * x + params['u_o'] * h_prev + params['b_o'])\n    h_next = o * math.tanh(c_next)\n    return h_next, c_next",
              explanation: "Executes full LSTM cell equations: forget gate, input gate, candidate cell, new cell, output gate, new hidden state."
            },
            {
              id: "ml-08-c-07",
              type: "coding",
              subType: "debugging",
              difficulty: "hard",
              question: "Fix bug in vector gradient norm clipping where components weren't squared before taking square root.",
              language: "python",
              starterCode: "def clip_grad_vector(grads, max_norm=10.0):\n    # Fix norm calculation\n    norm = sum(grads)\n    pass",
              expectedOutput: "Clipped gradients list",
              solution: "import math\n\ndef clip_grad_vector(grads, max_norm=10.0):\n    norm = math.sqrt(sum(g ** 2 for g in grads))\n    if norm > max_norm:\n        scale = max_norm / norm\n        return [g * scale for g in grads]\n    return grads",
              explanation: "Computes L2 norm and rescales components by max_norm / norm if threshold is exceeded."
            },
            {
              id: "ml-08-c-08",
              type: "coding",
              subType: "implementation",
              difficulty: "hard",
              question: "Implement `gru_hidden_step(h_prev, candidate_h, update_gate_z)` where `h_t = (1 - z) * h_prev + z * candidate_h`.",
              language: "python",
              starterCode: "def gru_hidden_step(h_prev, candidate_h, update_gate_z):\n    # Return interpolated h_t\n    pass",
              expectedOutput: "Float state",
              solution: "def gru_hidden_step(h_prev, candidate_h, update_gate_z):\n    return (1.0 - update_gate_z) * h_prev + update_gate_z * candidate_h",
              explanation: "GRUs perform linear interpolation between previous hidden state and candidate state controlled by update gate z."
            },
            {
              id: "ml-08-c-09",
              type: "coding",
              subType: "interview_challenge",
              difficulty: "interview",
              question: "Implement `bidirectional_merge(forward_states, backward_states)` concatenating corresponding states at each time step.",
              language: "python",
              starterCode: "def bidirectional_merge(fwd, bwd):\n    # Return list of concatenated pairs\n    pass",
              expectedOutput: "List of tuples/lists",
              solution: "def bidirectional_merge(fwd, bwd):\n    # bwd is provided in reverse sequence or already aligned\n    return [[f, b] for f, b in zip(fwd, bwd)]",
              explanation: "Merges the forward and backward hidden representations for each token index."
            },
            {
              id: "ml-08-c-10",
              type: "coding",
              subType: "interview_challenge",
              difficulty: "interview",
              question: "Write `pad_sequences(sequences, max_len, pad_value=0)` ensuring all lists have length `max_len`.",
              language: "python",
              starterCode: "def pad_sequences(sequences, max_len, pad_value=0):\n    # Return padded list of lists\n    pass",
              expectedOutput: "Uniform length lists",
              solution: "def pad_sequences(sequences, max_len, pad_value=0):\n    result = []\n    for seq in sequences:\n        if len(seq) >= max_len:\n            result.append(seq[:max_len])\n        else:\n            result.append(seq + [pad_value] * (max_len - len(seq)))\n    return result",
              explanation: "Truncates long sequences and appends pad values to short sequences for uniform mini-batch tensor processing."
            }
          ]
        },
        {
          lectureId: "ml-lecture-09",
          lectureNumber: 9,
          title: "Deep Learning Complete Course | Part 4 | Transformers & Attention Mechanism Completely Explained",
          videoUrl: "https://www.youtube.com/embed/i2tlbIGyzKk",
          topics: ["Attention Mechanism", "Self-Attention (Scaled Dot-Product)", "Multi-Head Attention", "Transformer Encoder & Decoder Architecture"],
          assessment: { totalQuestions: 20, fundamentalQuestions: 10, codingQuestions: 10 },
          fundamentalQuestions: [
            {
              id: "ml-09-f-01",
              type: "fundamental",
              difficulty: "easy",
              question: "What core breakthrough did the Transformer architecture ('Attention Is All You Need') introduce?",
              options: [
                "Replacing sequential recurrence and convolutions entirely with self-attention mechanisms, enabling massive parallel training",
                "Eliminating backpropagation",
                "Running solely on CPU memory",
                "Restricting input text to 5 words"
              ],
              correctAnswer: 0,
              explanation: "Transformers discarded recurrent loops in favor of self-attention, allowing entire sequences to be processed in parallel."
            },
            {
              id: "ml-09-f-02",
              type: "fundamental",
              difficulty: "easy",
              question: "What are the three fundamental vectors computed for each token in Self-Attention?",
              options: [
                "Query (Q), Key (K), and Value (V)",
                "Input, Hidden, Output",
                "Weight, Bias, Gradient",
                "Alpha, Beta, Gamma"
              ],
              correctAnswer: 0,
              explanation: "Self-attention computes Queries, Keys, and Values through linear projection of token embeddings."
            },
            {
              id: "ml-09-f-03",
              type: "fundamental",
              difficulty: "easy",
              question: "What is the mathematical formula for Scaled Dot-Product Attention?",
              options: [
                "Attention(Q, K, V) = softmax((Q * K^T) / sqrt(d_k)) * V",
                "Attention(Q, K, V) = Q + K + V",
                "Attention(Q, K, V) = Q * K * V",
                "Attention(Q, K, V) = max(0, Q * K)"
              ],
              correctAnswer: 0,
              explanation: "The query-key dot product is scaled by sqrt(d_k), passed through softmax to produce weights, and multiplied by values."
            },
            {
              id: "ml-09-f-04",
              type: "fundamental",
              difficulty: "medium",
              question: "Why do we scale the dot products by sqrt(d_k) in Scaled Dot-Product Attention?",
              options: [
                "For large dimension d_k, dot products grow large in magnitude, pushing softmax into regions with extremely small gradients",
                "To convert vectors into integers",
                "To speed up disk read operations",
                "To fit vectors into CPU registers"
              ],
              correctAnswer: 0,
              explanation: "Scaling counteracts variance growth of dot products, preventing softmax from saturating with near-zero gradients."
            },
            {
              id: "ml-09-f-05",
              type: "fundamental",
              difficulty: "medium",
              question: "What is the benefit of Multi-Head Attention over single-head attention?",
              options: [
                "It allows the model to jointly attend to information from different representation subspaces at different positions",
                "It requires fewer GPU cores",
                "It reduces the number of vocabulary words",
                "It prevents memory from being utilized"
              ],
              correctAnswer: 0,
              explanation: "Different attention heads learn distinct relationship patterns (e.g. syntactic, coreference, thematic dependencies) simultaneously."
            },
            {
              id: "ml-09-f-06",
              type: "fundamental",
              difficulty: "medium",
              question: "Why do Transformers require Positional Encodings?",
              options: [
                "Because self-attention is permutation-invariant and has no inherent sense of word order or sequence positions",
                "Because text cannot be stored without indices",
                "Because attention cannot process matrices",
                "Because words must be sorted alphabetically"
              ],
              correctAnswer: 0,
              explanation: "Since attention treats sequences as sets of tokens, positional embeddings must be added to provide sequential order context."
            },
            {
              id: "ml-09-f-07",
              type: "fundamental",
              difficulty: "hard",
              question: "What is Masked Multi-Head Attention in the Transformer Decoder?",
              options: [
                "Attention that sets future position scores to -infinity before softmax to prevent positions from attending to subsequent tokens (autoregressive causality)",
                "Attention that removes all vowels from sentences",
                "Masking random weights in the model",
                "Attention applied only to images"
              ],
              correctAnswer: 0,
              explanation: "Masking future tokens enforces causal autoregressive generation where token t cannot look ahead to tokens t+1, t+2."
            },
            {
              id: "ml-09-f-08",
              type: "fundamental",
              difficulty: "hard",
              question: "How does Layer Normalization differ from Batch Normalization?",
              options: [
                "LayerNorm normalizes across the feature dimensions for each individual sample independently, making it ideal for variable-length sequences",
                "LayerNorm normalizes across mini-batch columns",
                "LayerNorm cannot run on GPUs",
                "LayerNorm only works on images"
              ],
              correctAnswer: 0,
              explanation: "LayerNorm does not rely on batch statistics and computes mean and variance across feature channels per sequence sample."
            },
            {
              id: "ml-09-f-09",
              type: "fundamental",
              difficulty: "interview",
              question: "What is the primary architectural difference between BERT and GPT?",
              options: [
                "BERT is an Encoder-only bidirectional model trained with masked language modeling; GPT is a Decoder-only autoregressive causal model trained to predict the next token",
                "BERT only works with images; GPT only works with code",
                "BERT has no attention mechanism",
                "GPT uses recurrent LSTM cells"
              ],
              correctAnswer: 0,
              explanation: "BERT uses bidirectional encoder blocks for understanding/classification, while GPT uses causal masked decoder blocks for text generation."
            },
            {
              id: "ml-09-f-10",
              type: "fundamental",
              difficulty: "interview",
              question: "What is the computational and memory complexity of standard Self-Attention with respect to sequence length N?",
              options: [
                "O(N^2) in both time and memory because computing the attention matrix requires comparing every token against every other token",
                "O(N) linear complexity",
                "O(log N) logarithmic complexity",
                "O(1) constant complexity"
              ],
              correctAnswer: 0,
              explanation: "Computing the N x N pairwise attention matrix scales quadratically O(N^2) with sequence length N."
            }
          ],
          codingQuestions: [
            {
              id: "ml-09-c-01",
              type: "coding",
              subType: "implementation",
              difficulty: "easy",
              question: "Implement `dot_product(v1, v2)` computing the inner product of two 1D vectors.",
              language: "python",
              starterCode: "def dot_product(v1, v2):\n    # Return scalar dot product\n    pass",
              expectedOutput: "Float value",
              solution: "def dot_product(v1, v2):\n    return sum(a * b for a, b in zip(v1, v2))",
              explanation: "Sum of element-wise products."
            },
            {
              id: "ml-09-c-02",
              type: "coding",
              subType: "implementation",
              difficulty: "easy",
              question: "Write `scale_attention_scores(scores, d_k)` dividing each element in a 2D matrix by `math.sqrt(d_k)`.",
              language: "python",
              starterCode: "import math\n\ndef scale_attention_scores(scores, d_k):\n    # Return scaled 2D matrix\n    pass",
              expectedOutput: "Scaled 2D matrix",
              solution: "import math\n\ndef scale_attention_scores(scores, d_k):\n    scale = math.sqrt(d_k)\n    return [[val / scale for val in row] for row in scores]",
              explanation: "Applies 1 / sqrt(d_k) scaling to prevent softmax saturation."
            },
            {
              id: "ml-09-c-03",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Implement `matrix_softmax(matrix)` applying softmax row-wise to a 2D attention score matrix.",
              language: "python",
              starterCode: "def matrix_softmax(matrix):\n    # Return 2D matrix where each row sums to 1.0\n    pass",
              expectedOutput: "2D matrix of probabilities",
              solution: "import math\n\ndef matrix_softmax(matrix):\n    out = []\n    for row in matrix:\n        max_v = max(row)\n        exps = [math.exp(x - max_v) for x in row]\n        total = sum(exps)\n        out.append([e / total for e in exps])\n    return out",
              explanation: "Normalizes each row into probability attention weights."
            },
            {
              id: "ml-09-c-04",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Implement `apply_attention_mask(scores, mask)` where mask is binary (1 for valid, 0 for masked). Set masked values to -1e9.",
              language: "python",
              starterCode: "def apply_attention_mask(scores, mask):\n    # Return masked scores 2D matrix\n    pass",
              expectedOutput: "Masked 2D matrix",
              solution: "def apply_attention_mask(scores, mask):\n    h, w = len(scores), len(scores[0])\n    return [[scores[i][j] if mask[i][j] == 1 else -1e9 for j in range(w)] for i in range(h)]",
              explanation: "Sets masked elements to -1e9 so their softmax output is effectively 0."
            },
            {
              id: "ml-09-c-05",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Implement `causal_mask(seq_len)` generating a lower-triangular binary matrix where position i cannot attend to j > i.",
              language: "python",
              starterCode: "def causal_mask(seq_len):\n    # Return seq_len x seq_len binary matrix\n    pass",
              expectedOutput: "Lower-triangular 2D matrix",
              solution: "def causal_mask(seq_len):\n    return [[1 if j <= i else 0 for j in range(seq_len)] for i in range(seq_len)]",
              explanation: "Produces lower triangular mask (1s on and below main diagonal, 0s above) for causal decoder attention."
            },
            {
              id: "ml-09-c-06",
              type: "coding",
              subType: "problem_solving",
              difficulty: "hard",
              question: "Implement `scaled_dot_product_attention(Q, K, V)` where Q, K, V are matrices represented as lists of lists.",
              language: "python",
              starterCode: "def scaled_dot_product_attention(Q, K, V):\n    # Q: (n, d_k), K: (m, d_k), V: (m, d_v)\n    pass",
              expectedOutput: "Attention output matrix (n, d_v)",
              solution: "import math\n\ndef scaled_dot_product_attention(Q, K, V):\n    d_k = len(Q[0])\n    scale = math.sqrt(d_k)\n    # Compute Q * K^T\n    scores = []\n    for q in Q:\n        row = [sum(qi * ki for qi, ki in zip(q, k)) / scale for k in K]\n        scores.append(row)\n    # Softmax row-wise\n    weights = []\n    for row in scores:\n        max_v = max(row)\n        exps = [math.exp(x - max_v) for x in row]\n        tot = sum(exps)\n        weights.append([e / tot for e in exps])\n    # Multiply weights by V\n    d_v = len(V[0])\n    output = []\n    for w_row in weights:\n        out_vec = [sum(w_row[k] * V[k][j] for k in range(len(V))) for j in range(d_v)]\n        output.append(out_vec)\n    return output",
              explanation: "Full implementation of Scaled Dot-Product Attention: softmax(Q K^T / sqrt(d_k)) * V."
            },
            {
              id: "ml-09-c-07",
              type: "coding",
              subType: "debugging",
              difficulty: "hard",
              question: "Fix bug in sinusoidal positional encoding formula where odd indices should use cosine instead of sine.",
              language: "python",
              starterCode: "import math\n\ndef positional_encoding_val(pos, i, d_model):\n    # Fix formula for odd vs even indices\n    return math.sin(pos / (10000 ** (2 * i / d_model)))",
              expectedOutput: "Float positional encoding",
              solution: "import math\n\ndef positional_encoding_val(pos, i, d_model):\n    denom = 10000.0 ** (2 * (i // 2) / d_model)\n    return math.sin(pos / denom) if i % 2 == 0 else math.cos(pos / denom)",
              explanation: "Uses sine for even dimensions (2i) and cosine for odd dimensions (2i+1)."
            },
            {
              id: "ml-09-c-08",
              type: "coding",
              subType: "implementation",
              difficulty: "hard",
              question: "Implement `layer_norm(x, gamma=1.0, beta=0.0, eps=1e-5)` for a 1D feature vector.",
              language: "python",
              starterCode: "import math\n\ndef layer_norm(x, gamma=1.0, beta=0.0, eps=1e-5):\n    # Return normalized vector\n    pass",
              expectedOutput: "Normalized vector",
              solution: "import math\n\ndef layer_norm(x, gamma=1.0, beta=0.0, eps=1e-5):\n    n = len(x)\n    mean = sum(x) / n\n    var = sum((val - mean) ** 2 for val in x) / n\n    std = math.sqrt(var + eps)\n    return [gamma * ((val - mean) / std) + beta for val in x]",
              explanation: "Normalizes across features of a single vector: gamma * (x - mean) / std + beta."
            },
            {
              id: "ml-09-c-09",
              type: "coding",
              subType: "interview_challenge",
              difficulty: "interview",
              question: "Implement `multi_head_split(X, num_heads)` that splits feature dimension `d_model` into `num_heads` smaller subspace chunks.",
              language: "python",
              starterCode: "def multi_head_split(X, num_heads):\n    # X shape: (seq_len, d_model)\n    pass",
              expectedOutput: "List of num_heads matrices each of shape (seq_len, d_k)",
              solution: "def multi_head_split(X, num_heads):\n    seq_len = len(X)\n    d_model = len(X[0])\n    d_k = d_model // num_heads\n    heads = []\n    for h in range(num_heads):\n        start = h * d_k\n        end = start + d_k\n        heads.append([[row[i] for i in range(start, end)] for row in X])\n    return heads",
              explanation: "Splits the embedding dimension across multiple attention heads."
            },
            {
              id: "ml-09-c-10",
              type: "coding",
              subType: "interview_challenge",
              difficulty: "interview",
              question: "Implement Transformer feed-forward network: `ffn(x, W1, b1, W2, b2)` with intermediate expansion and ReLU.",
              language: "python",
              starterCode: "def ffn(x, W1, b1, W2, b2):\n    # Return output vector\n    pass",
              expectedOutput: "Output vector of length d_model",
              solution: "def ffn(x, W1, b1, W2, b2):\n    # Linear 1 + ReLU\n    inter = []\n    for row, b in zip(W1, b1):\n        z = sum(xi * wi for xi, wi in zip(x, row)) + b\n        inter.append(max(0.0, z))\n    # Linear 2\n    out = []\n    for row, b in zip(W2, b2):\n        z = sum(hi * wi for hi, wi in zip(inter, row)) + b\n        out.append(z)\n    return out",
              explanation: "Two-layer position-wise feed-forward network with inner ReLU activation."
            }
          ]
        }
      ]
    }
  ]
};
