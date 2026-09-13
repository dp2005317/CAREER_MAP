import fs from 'fs';
import path from 'path';

const outDir = path.resolve('src/data/courses');

const dsVideos = [
  { num: 1, id: "_aWbUudZ5Yo", title: "Python Full Course for Beginners to Advanced | 12 Hours Complete Tutorial + Python Book", topics: ["Python Syntax & Types", "Control Flow & Functions", "Data Structures (Lists, Dicts)", "File Handling & Error Handling"] },
  { num: 2, id: "Utgwk0r9Zq4", title: "Complete Data Science Course for Beginners | NumPy | Sheryians AI School", topics: ["NumPy Ndarrays", "Vectorized Operations", "Broadcasting", "Linear Algebra with NumPy"] },
  { num: 3, id: "QUaSmqBeR9w", title: "Complete Data Science Course for Beginners| Pandas Library | Sheryians AI School", topics: ["Series & DataFrames", "Data Cleaning & Missing Values", "GroupBy & Aggregation", "Merging & Joining Data"] },
  { num: 4, id: "-jTD74eEy2I", title: "Complete Data Visualization Course for Beginners | Matplotlib & Seaborn | Sheryians AI School", topics: ["Histograms & Distributions", "Scatter & Line Plots", "Seaborn Heatmaps", "Boxplots & Outliers"] },
  { num: 5, id: "eF7HoC-cLRM", title: "Complete Statistics Course for Beginners | Data Science Tutorial | Sheryians AI School", topics: ["Descriptive Statistics", "Normal & Binomial Distributions", "Hypothesis Testing & P-values", "Central Limit Theorem"] },
  { num: 6, id: "1L420xXpDTg", title: "Complete Machine Learning Course for Beginners | Part 1- Foundation | Sheryians AI School", topics: ["Intro to ML & Supervised Learning", "Features & Labels", "Train-Test Split", "Overfitting vs Underfitting"] },
  { num: 7, id: "Lb0JzFtTmBs", title: "Part 2 - Supervised Learning | Complete Machine Learning Course for Beginners | Sheryians AI School", topics: ["Linear Regression", "Cost Function (MSE)", "Gradient Descent", "Learning Rate & Convergence"] },
  { num: 8, id: "omGvjpmPDoY", title: "Part 3 - Supervised Learning| Classification Algorithms for Beginners | Sheryians AI School", topics: ["Logistic Regression", "Decision Trees", "K-Nearest Neighbors", "Confusion Matrix & F1-Score"] },
  { num: 9, id: "UFAHXZW2hU8", title: "Part 4 - Model Tuning, Ensemble & Unsupervised Learning | Full ML Course | Sheryians AI School", topics: ["Random Forest", "K-Means Clustering", "PCA (Dimensionality Reduction)", "Hyperparameter Tuning"] },
  { num: 10, id: "p1epCuYb5OQ", title: "Complete SQL in 1 shot for Data analytics in 2025", topics: ["SQL Queries (SELECT, WHERE, ORDER BY)", "Aggregate Functions & GROUP BY", "SQL Joins (INNER, LEFT)", "Subqueries & Window Functions"] },
  { num: 11, id: "yiNS_Sh9KDA", title: "Learn Complete NLP with Project (Bag of Words, Tf-idf) | For Beginners", topics: ["Tokenization & Stopwords", "Bag of Words (BoW)", "TF-IDF Vectorizer", "Text Classification Pipeline"] },
  { num: 12, id: "losbBdEjyN4", title: "Deep Learning Complete Course | Part 1| ANN implementation.", topics: ["Perceptrons & Multi-Layer Perceptrons", "Activation Functions (ReLU, Softmax)", "Backpropagation", "Loss Optimization with Adam"] },
  { num: 13, id: "dh3ilHzIRd0", title: "Deep Learning Complete Course | Part 2| CNN implementation.", topics: ["Convolutional Kernels", "Padding & Stride", "MaxPooling", "CNN Image Classification"] },
  { num: 14, id: "0Q4yhrkwn7c", title: "Deep Learning Complete Course | Part 3| RNN implementation.", topics: ["Sequential & Time Series Data", "Recurrent Neural Networks", "Vanishing Gradients in Time", "LSTM & GRU Cells"] },
  { num: 15, id: "i2tlbIGyzKk", title: "Deep Learning Complete Course | Part 4 | Transformers & Attention Mechanism Completely Explained", topics: ["Attention Mechanism", "Self-Attention (Q, K, V)", "Multi-Head Attention", "Transformer Architecture"] }
];

function generateDSQuestions(lec) {
  const f = [
    {
      id: `ds-${lec.num}-f-01`,
      type: "fundamental",
      difficulty: "easy",
      question: `In Data Science, what is the core concept behind ${lec.topics[0]}?`,
      options: [
        `It serves as an essential methodology for ${lec.topics[0]} in data analysis and modeling workflows`,
        "It is only used for graphic design",
        "It cannot handle numerical calculations",
        "It is an obsolete manual procedure"
      ],
      correctAnswer: 0,
      explanation: `${lec.topics[0]} is an essential skill in modern data science.`
    },
    {
      id: `ds-${lec.num}-f-02`,
      type: "fundamental",
      difficulty: "easy",
      question: `Which statement accurately describes ${lec.topics[1]}?`,
      options: [
        `It provides mathematically sound processing for ${lec.topics[1]}`,
        "It deletes data columns randomly",
        "It only functions without CPU power",
        "It creates permanent file errors"
      ],
      correctAnswer: 0,
      explanation: `${lec.topics[1]} enables reliable data transformations and modeling.`
    },
    {
      id: `ds-${lec.num}-f-03`,
      type: "fundamental",
      difficulty: "medium",
      question: `Why is ${lec.topics[2]} critical during model training and data evaluation?`,
      options: [
        `It controls bias-variance, handles high-dimensional structures, and ensures model generalization`,
        "It guarantees execution without memory usage",
        "It replaces data cleaning entirely",
        "It converts Python scripts to HTML"
      ],
      correctAnswer: 0,
      explanation: `${lec.topics[2]} is vital for building robust predictive pipelines.`
    },
    {
      id: `ds-${lec.num}-f-04`,
      type: "fundamental",
      difficulty: "medium",
      question: `What pitfall must a data scientist avoid when implementing ${lec.topics[3]}?`,
      options: [
        "Data leakage, unhandled missingness, and improper hyperparameter tuning",
        "Writing clean documentation",
        "Visualizing data distributions",
        "Using version control"
      ],
      correctAnswer: 0,
      explanation: "Rigorous methodology and validation safeguards prevent invalid inference."
    },
    {
      id: `ds-${lec.num}-f-05`,
      type: "fundamental",
      difficulty: "hard",
      question: `In technical data science interviews, why is ${lec.title.slice(0, 45)} frequently tested?`,
      options: [
        "It tests candidate ability to solve real-world industry data problems efficiently and correctly",
        "It is the only topic covered in academic papers",
        "It is required by GPU hardware manufacturers",
        "It cannot be coded in Python"
      ],
      correctAnswer: 0,
      explanation: "Industry applications demand strong foundational comprehension of algorithmic mechanics."
    }
  ];

  const c = [
    {
      id: `ds-${lec.num}-c-01`,
      type: "coding",
      subType: "implementation",
      difficulty: "easy",
      question: `Write a Python function for Lecture ${lec.num} processing input for ${lec.topics[0]}.`,
      language: "python",
      starterCode: `def process_data(data):\n    # Process data for ${lec.topics[0]}\n    return data`,
      expectedOutput: "Processed data",
      solution: `def process_data(data):\n    return [x for x in data if x is not None]`,
      explanation: `Filters valid data entries.`
    },
    {
      id: `ds-${lec.num}-c-02`,
      type: "coding",
      subType: "implementation",
      difficulty: "easy",
      question: `Implement a calculation function related to ${lec.topics[1]}.`,
      language: "python",
      starterCode: `def calculate_stat(values):\n    # Compute summary metric\n    pass`,
      expectedOutput: "Summary metric",
      solution: `def calculate_stat(values):\n    return sum(values) / len(values) if values else 0.0`,
      explanation: "Computes average summary statistic."
    },
    {
      id: `ds-${lec.num}-c-03`,
      type: "coding",
      subType: "problem_solving",
      difficulty: "medium",
      question: `Write an algorithmic implementation for ${lec.topics[2]}.`,
      language: "python",
      starterCode: `def transform_features(features):\n    # Transform features\n    pass`,
      expectedOutput: "Transformed features",
      solution: `def transform_features(features):\n    min_v, max_v = min(features), max(features)\n    diff = max_v - min_v if max_v != min_v else 1.0\n    return [(x - min_v) / diff for x in features]`,
      explanation: "Scales features to standard [0, 1] range."
    },
    {
      id: `ds-${lec.num}-c-04`,
      type: "coding",
      subType: "debugging",
      difficulty: "medium",
      question: `Fix bug in metric evaluation function: \`def loss(y, y_hat): return sum(y - y_hat)\`.`,
      language: "python",
      starterCode: `def loss(y, y_hat):\n    # Fix error metric\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)`,
      expectedOutput: "MSE loss",
      solution: `def loss(y, y_hat):\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)`,
      explanation: "Squared differences prevent cancellation of positive and negative errors."
    },
    {
      id: `ds-${lec.num}-c-05`,
      type: "coding",
      subType: "interview_challenge",
      difficulty: "hard",
      question: `Implement an end-to-end evaluation pipeline function for ${lec.topics[3]}.`,
      language: "python",
      starterCode: `def evaluate_predictions(y_true, y_pred):\n    # Return dict of metrics\n    pass`,
      expectedOutput: "Dict of metrics",
      solution: `def evaluate_predictions(y_true, y_pred):\n    acc = sum(1 for yt, yp in zip(y_true, y_pred) if yt == yp) / len(y_true)\n    return {'accuracy': acc, 'total_samples': len(y_true)}`,
      explanation: "Computes accuracy and summary metrics."
    }
  ];

  return { fundamental: f, coding: c };
}

const dsModules = [
  {
    moduleId: "ds-mod-1",
    title: "Module 1: Python, Math & Data Engineering (Lectures 1 - 5)",
    lectures: dsVideos.slice(0, 5).map(v => {
      const q = generateDSQuestions(v);
      return {
        lectureId: `ds-lec-${String(v.num).padStart(2, '0')}`,
        lectureNumber: v.num,
        title: v.title,
        videoUrl: `https://www.youtube.com/embed/${v.id}`,
        topics: v.topics,
        assessment: { totalQuestions: 10, fundamentalQuestions: 5, codingQuestions: 5 },
        fundamentalQuestions: q.fundamental,
        codingQuestions: q.coding
      };
    })
  },
  {
    moduleId: "ds-mod-2",
    title: "Module 2: Machine Learning & SQL Pipelines (Lectures 6 - 10)",
    lectures: dsVideos.slice(5, 10).map(v => {
      const q = generateDSQuestions(v);
      return {
        lectureId: `ds-lec-${String(v.num).padStart(2, '0')}`,
        lectureNumber: v.num,
        title: v.title,
        videoUrl: `https://www.youtube.com/embed/${v.id}`,
        topics: v.topics,
        assessment: { totalQuestions: 10, fundamentalQuestions: 5, codingQuestions: 5 },
        fundamentalQuestions: q.fundamental,
        codingQuestions: q.coding
      };
    })
  },
  {
    moduleId: "ds-mod-3",
    title: "Module 3: NLP, Deep Learning & Transformers (Lectures 11 - 15)",
    lectures: dsVideos.slice(10).map(v => {
      const q = generateDSQuestions(v);
      return {
        lectureId: `ds-lec-${String(v.num).padStart(2, '0')}`,
        lectureNumber: v.num,
        title: v.title,
        videoUrl: `https://www.youtube.com/embed/${v.id}`,
        topics: v.topics,
        assessment: { totalQuestions: 10, fundamentalQuestions: 5, codingQuestions: 5 },
        fundamentalQuestions: q.fundamental,
        codingQuestions: q.coding
      };
    })
  }
];

const dsCourse = {
  courseId: "course-data-science",
  title: "Complete Data Science & Machine Learning Masterclass",
  description: "End-to-end Data Science bootcamp: Python, NumPy, Pandas, Visualization, Statistics, Machine Learning, SQL, NLP, Deep Learning (ANN, CNN, RNN), and Transformers.",
  category: "data-science",
  company: "Sheryians AI School",
  instructor: "Sheryians AI School",
  thumbnail: "https://i.ytimg.com/vi/_aWbUudZ5Yo/hqdefault.jpg",
  difficulty: "Intermediate",
  duration: "60 hours",
  rating: 4.9,
  learners: "280k+",
  skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Statistics", "Machine Learning", "SQL", "Deep Learning", "NLP", "Transformers"],
  jobRoles: ["Data Scientist", "Machine Learning Engineer", "AI Specialist", "Data Analyst"],
  source: {
    type: "youtube_playlist",
    playlistUrl: "https://youtube.com/playlist?list=PLaldQ9PzZd9qPYGj4aWUXitBlfWz72e9m&si=y2EubuGMNUKtYXFf"
  },
  modules: dsModules
};

fs.writeFileSync(path.join(outDir, 'dataScienceCourse.ts'), `import { Course } from '../types';\n\nexport const dataScienceCourseData: Course = ${JSON.stringify(dsCourse, null, 2)};\n`);
console.log("Wrote dataScienceCourse.ts");
