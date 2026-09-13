import { Course } from '../types';

export const dataScienceCourseData: Course = {
  "courseId": "course-data-science",
  "title": "Complete Data Science & Machine Learning Masterclass",
  "description": "End-to-end Data Science bootcamp: Python, NumPy, Pandas, Visualization, Statistics, Machine Learning, SQL, NLP, Deep Learning (ANN, CNN, RNN), and Transformers.",
  "category": "data-science",
  "company": "Sheryians AI School",
  "instructor": "Sheryians AI School",
  "thumbnail": "https://i.ytimg.com/vi/_aWbUudZ5Yo/hqdefault.jpg",
  "difficulty": "Intermediate",
  "duration": "60 hours",
  "durationHours": 60,
  "language": "Hindi",
  "certificateAvailable": true,
  "isFree": true,
  "isTrending": true,
  "rating": 4.9,
  "learners": "280k+",
  "skills": [
    "Python",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Statistics",
    "Machine Learning",
    "SQL",
    "Deep Learning",
    "NLP",
    "Transformers"
  ],
  "jobRoles": [
    "Data Scientist",
    "Machine Learning Engineer",
    "AI Specialist",
    "Data Analyst"
  ],
  "source": {
    "type": "youtube_playlist",
    "playlistUrl": "https://youtube.com/playlist?list=PLaldQ9PzZd9qPYGj4aWUXitBlfWz72e9m&si=y2EubuGMNUKtYXFf"
  },
  "modules": [
    {
      "moduleId": "ds-mod-1",
      "title": "Module 1: Python, Math & Data Engineering (Lectures 1 - 5)",
      "lectures": [
        {
          "lectureId": "ds-lec-01",
          "lectureNumber": 1,
          "title": "Python Full Course for Beginners to Advanced | 12 Hours Complete Tutorial + Python Book",
          "videoUrl": "https://www.youtube.com/embed/_aWbUudZ5Yo",
          "topics": [
            "Python Syntax & Types",
            "Control Flow & Functions",
            "Data Structures (Lists, Dicts)",
            "File Handling & Error Handling"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "ds-1-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "In Data Science, what is the core concept behind Python Syntax & Types?",
              "options": [
                "It serves as an essential methodology for Python Syntax & Types in data analysis and modeling workflows",
                "It is only used for graphic design",
                "It cannot handle numerical calculations",
                "It is an obsolete manual procedure"
              ],
              "correctAnswer": 0,
              "explanation": "Python Syntax & Types is an essential skill in modern data science."
            },
            {
              "id": "ds-1-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which statement accurately describes Control Flow & Functions?",
              "options": [
                "It provides mathematically sound processing for Control Flow & Functions",
                "It deletes data columns randomly",
                "It only functions without CPU power",
                "It creates permanent file errors"
              ],
              "correctAnswer": 0,
              "explanation": "Control Flow & Functions enables reliable data transformations and modeling."
            },
            {
              "id": "ds-1-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "Why is Data Structures (Lists, Dicts) critical during model training and data evaluation?",
              "options": [
                "It controls bias-variance, handles high-dimensional structures, and ensures model generalization",
                "It guarantees execution without memory usage",
                "It replaces data cleaning entirely",
                "It converts Python scripts to HTML"
              ],
              "correctAnswer": 0,
              "explanation": "Data Structures (Lists, Dicts) is vital for building robust predictive pipelines."
            },
            {
              "id": "ds-1-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What pitfall must a data scientist avoid when implementing File Handling & Error Handling?",
              "options": [
                "Data leakage, unhandled missingness, and improper hyperparameter tuning",
                "Writing clean documentation",
                "Visualizing data distributions",
                "Using version control"
              ],
              "correctAnswer": 0,
              "explanation": "Rigorous methodology and validation safeguards prevent invalid inference."
            },
            {
              "id": "ds-1-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "In technical data science interviews, why is Python Full Course for Beginners to Advanced  frequently tested?",
              "options": [
                "It tests candidate ability to solve real-world industry data problems efficiently and correctly",
                "It is the only topic covered in academic papers",
                "It is required by GPU hardware manufacturers",
                "It cannot be coded in Python"
              ],
              "correctAnswer": 0,
              "explanation": "Industry applications demand strong foundational comprehension of algorithmic mechanics."
            }
          ],
          "codingQuestions": [
            {
              "id": "ds-1-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a Python function for Lecture 1 processing input for Python Syntax & Types.",
              "language": "python",
              "starterCode": "def process_data(data):\n    # Process data for Python Syntax & Types\n    return data",
              "expectedOutput": "Processed data",
              "solution": "def process_data(data):\n    return [x for x in data if x is not None]",
              "explanation": "Filters valid data entries."
            },
            {
              "id": "ds-1-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Implement a calculation function related to Control Flow & Functions.",
              "language": "python",
              "starterCode": "def calculate_stat(values):\n    # Compute summary metric\n    pass",
              "expectedOutput": "Summary metric",
              "solution": "def calculate_stat(values):\n    return sum(values) / len(values) if values else 0.0",
              "explanation": "Computes average summary statistic."
            },
            {
              "id": "ds-1-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Write an algorithmic implementation for Data Structures (Lists, Dicts).",
              "language": "python",
              "starterCode": "def transform_features(features):\n    # Transform features\n    pass",
              "expectedOutput": "Transformed features",
              "solution": "def transform_features(features):\n    min_v, max_v = min(features), max(features)\n    diff = max_v - min_v if max_v != min_v else 1.0\n    return [(x - min_v) / diff for x in features]",
              "explanation": "Scales features to standard [0, 1] range."
            },
            {
              "id": "ds-1-c-04",
              "type": "coding",
              "subType": "debugging",
              "difficulty": "medium",
              "question": "Fix bug in metric evaluation function: `def loss(y, y_hat): return sum(y - y_hat)`.",
              "language": "python",
              "starterCode": "def loss(y, y_hat):\n    # Fix error metric\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)",
              "expectedOutput": "MSE loss",
              "solution": "def loss(y, y_hat):\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)",
              "explanation": "Squared differences prevent cancellation of positive and negative errors."
            },
            {
              "id": "ds-1-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Implement an end-to-end evaluation pipeline function for File Handling & Error Handling.",
              "language": "python",
              "starterCode": "def evaluate_predictions(y_true, y_pred):\n    # Return dict of metrics\n    pass",
              "expectedOutput": "Dict of metrics",
              "solution": "def evaluate_predictions(y_true, y_pred):\n    acc = sum(1 for yt, yp in zip(y_true, y_pred) if yt == yp) / len(y_true)\n    return {'accuracy': acc, 'total_samples': len(y_true)}",
              "explanation": "Computes accuracy and summary metrics."
            }
          ]
        },
        {
          "lectureId": "ds-lec-02",
          "lectureNumber": 2,
          "title": "Complete Data Science Course for Beginners | NumPy | Sheryians AI School",
          "videoUrl": "https://www.youtube.com/embed/Utgwk0r9Zq4",
          "topics": [
            "NumPy Ndarrays",
            "Vectorized Operations",
            "Broadcasting",
            "Linear Algebra with NumPy"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "ds-2-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "In Data Science, what is the core concept behind NumPy Ndarrays?",
              "options": [
                "It serves as an essential methodology for NumPy Ndarrays in data analysis and modeling workflows",
                "It is only used for graphic design",
                "It cannot handle numerical calculations",
                "It is an obsolete manual procedure"
              ],
              "correctAnswer": 0,
              "explanation": "NumPy Ndarrays is an essential skill in modern data science."
            },
            {
              "id": "ds-2-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which statement accurately describes Vectorized Operations?",
              "options": [
                "It provides mathematically sound processing for Vectorized Operations",
                "It deletes data columns randomly",
                "It only functions without CPU power",
                "It creates permanent file errors"
              ],
              "correctAnswer": 0,
              "explanation": "Vectorized Operations enables reliable data transformations and modeling."
            },
            {
              "id": "ds-2-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "Why is Broadcasting critical during model training and data evaluation?",
              "options": [
                "It controls bias-variance, handles high-dimensional structures, and ensures model generalization",
                "It guarantees execution without memory usage",
                "It replaces data cleaning entirely",
                "It converts Python scripts to HTML"
              ],
              "correctAnswer": 0,
              "explanation": "Broadcasting is vital for building robust predictive pipelines."
            },
            {
              "id": "ds-2-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What pitfall must a data scientist avoid when implementing Linear Algebra with NumPy?",
              "options": [
                "Data leakage, unhandled missingness, and improper hyperparameter tuning",
                "Writing clean documentation",
                "Visualizing data distributions",
                "Using version control"
              ],
              "correctAnswer": 0,
              "explanation": "Rigorous methodology and validation safeguards prevent invalid inference."
            },
            {
              "id": "ds-2-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "In technical data science interviews, why is Complete Data Science Course for Beginners |  frequently tested?",
              "options": [
                "It tests candidate ability to solve real-world industry data problems efficiently and correctly",
                "It is the only topic covered in academic papers",
                "It is required by GPU hardware manufacturers",
                "It cannot be coded in Python"
              ],
              "correctAnswer": 0,
              "explanation": "Industry applications demand strong foundational comprehension of algorithmic mechanics."
            }
          ],
          "codingQuestions": [
            {
              "id": "ds-2-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a Python function for Lecture 2 processing input for NumPy Ndarrays.",
              "language": "python",
              "starterCode": "def process_data(data):\n    # Process data for NumPy Ndarrays\n    return data",
              "expectedOutput": "Processed data",
              "solution": "def process_data(data):\n    return [x for x in data if x is not None]",
              "explanation": "Filters valid data entries."
            },
            {
              "id": "ds-2-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Implement a calculation function related to Vectorized Operations.",
              "language": "python",
              "starterCode": "def calculate_stat(values):\n    # Compute summary metric\n    pass",
              "expectedOutput": "Summary metric",
              "solution": "def calculate_stat(values):\n    return sum(values) / len(values) if values else 0.0",
              "explanation": "Computes average summary statistic."
            },
            {
              "id": "ds-2-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Write an algorithmic implementation for Broadcasting.",
              "language": "python",
              "starterCode": "def transform_features(features):\n    # Transform features\n    pass",
              "expectedOutput": "Transformed features",
              "solution": "def transform_features(features):\n    min_v, max_v = min(features), max(features)\n    diff = max_v - min_v if max_v != min_v else 1.0\n    return [(x - min_v) / diff for x in features]",
              "explanation": "Scales features to standard [0, 1] range."
            },
            {
              "id": "ds-2-c-04",
              "type": "coding",
              "subType": "debugging",
              "difficulty": "medium",
              "question": "Fix bug in metric evaluation function: `def loss(y, y_hat): return sum(y - y_hat)`.",
              "language": "python",
              "starterCode": "def loss(y, y_hat):\n    # Fix error metric\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)",
              "expectedOutput": "MSE loss",
              "solution": "def loss(y, y_hat):\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)",
              "explanation": "Squared differences prevent cancellation of positive and negative errors."
            },
            {
              "id": "ds-2-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Implement an end-to-end evaluation pipeline function for Linear Algebra with NumPy.",
              "language": "python",
              "starterCode": "def evaluate_predictions(y_true, y_pred):\n    # Return dict of metrics\n    pass",
              "expectedOutput": "Dict of metrics",
              "solution": "def evaluate_predictions(y_true, y_pred):\n    acc = sum(1 for yt, yp in zip(y_true, y_pred) if yt == yp) / len(y_true)\n    return {'accuracy': acc, 'total_samples': len(y_true)}",
              "explanation": "Computes accuracy and summary metrics."
            }
          ]
        },
        {
          "lectureId": "ds-lec-03",
          "lectureNumber": 3,
          "title": "Complete Data Science Course for Beginners| Pandas Library | Sheryians AI School",
          "videoUrl": "https://www.youtube.com/embed/QUaSmqBeR9w",
          "topics": [
            "Series & DataFrames",
            "Data Cleaning & Missing Values",
            "GroupBy & Aggregation",
            "Merging & Joining Data"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "ds-3-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "In Data Science, what is the core concept behind Series & DataFrames?",
              "options": [
                "It serves as an essential methodology for Series & DataFrames in data analysis and modeling workflows",
                "It is only used for graphic design",
                "It cannot handle numerical calculations",
                "It is an obsolete manual procedure"
              ],
              "correctAnswer": 0,
              "explanation": "Series & DataFrames is an essential skill in modern data science."
            },
            {
              "id": "ds-3-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which statement accurately describes Data Cleaning & Missing Values?",
              "options": [
                "It provides mathematically sound processing for Data Cleaning & Missing Values",
                "It deletes data columns randomly",
                "It only functions without CPU power",
                "It creates permanent file errors"
              ],
              "correctAnswer": 0,
              "explanation": "Data Cleaning & Missing Values enables reliable data transformations and modeling."
            },
            {
              "id": "ds-3-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "Why is GroupBy & Aggregation critical during model training and data evaluation?",
              "options": [
                "It controls bias-variance, handles high-dimensional structures, and ensures model generalization",
                "It guarantees execution without memory usage",
                "It replaces data cleaning entirely",
                "It converts Python scripts to HTML"
              ],
              "correctAnswer": 0,
              "explanation": "GroupBy & Aggregation is vital for building robust predictive pipelines."
            },
            {
              "id": "ds-3-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What pitfall must a data scientist avoid when implementing Merging & Joining Data?",
              "options": [
                "Data leakage, unhandled missingness, and improper hyperparameter tuning",
                "Writing clean documentation",
                "Visualizing data distributions",
                "Using version control"
              ],
              "correctAnswer": 0,
              "explanation": "Rigorous methodology and validation safeguards prevent invalid inference."
            },
            {
              "id": "ds-3-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "In technical data science interviews, why is Complete Data Science Course for Beginners| P frequently tested?",
              "options": [
                "It tests candidate ability to solve real-world industry data problems efficiently and correctly",
                "It is the only topic covered in academic papers",
                "It is required by GPU hardware manufacturers",
                "It cannot be coded in Python"
              ],
              "correctAnswer": 0,
              "explanation": "Industry applications demand strong foundational comprehension of algorithmic mechanics."
            }
          ],
          "codingQuestions": [
            {
              "id": "ds-3-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a Python function for Lecture 3 processing input for Series & DataFrames.",
              "language": "python",
              "starterCode": "def process_data(data):\n    # Process data for Series & DataFrames\n    return data",
              "expectedOutput": "Processed data",
              "solution": "def process_data(data):\n    return [x for x in data if x is not None]",
              "explanation": "Filters valid data entries."
            },
            {
              "id": "ds-3-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Implement a calculation function related to Data Cleaning & Missing Values.",
              "language": "python",
              "starterCode": "def calculate_stat(values):\n    # Compute summary metric\n    pass",
              "expectedOutput": "Summary metric",
              "solution": "def calculate_stat(values):\n    return sum(values) / len(values) if values else 0.0",
              "explanation": "Computes average summary statistic."
            },
            {
              "id": "ds-3-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Write an algorithmic implementation for GroupBy & Aggregation.",
              "language": "python",
              "starterCode": "def transform_features(features):\n    # Transform features\n    pass",
              "expectedOutput": "Transformed features",
              "solution": "def transform_features(features):\n    min_v, max_v = min(features), max(features)\n    diff = max_v - min_v if max_v != min_v else 1.0\n    return [(x - min_v) / diff for x in features]",
              "explanation": "Scales features to standard [0, 1] range."
            },
            {
              "id": "ds-3-c-04",
              "type": "coding",
              "subType": "debugging",
              "difficulty": "medium",
              "question": "Fix bug in metric evaluation function: `def loss(y, y_hat): return sum(y - y_hat)`.",
              "language": "python",
              "starterCode": "def loss(y, y_hat):\n    # Fix error metric\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)",
              "expectedOutput": "MSE loss",
              "solution": "def loss(y, y_hat):\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)",
              "explanation": "Squared differences prevent cancellation of positive and negative errors."
            },
            {
              "id": "ds-3-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Implement an end-to-end evaluation pipeline function for Merging & Joining Data.",
              "language": "python",
              "starterCode": "def evaluate_predictions(y_true, y_pred):\n    # Return dict of metrics\n    pass",
              "expectedOutput": "Dict of metrics",
              "solution": "def evaluate_predictions(y_true, y_pred):\n    acc = sum(1 for yt, yp in zip(y_true, y_pred) if yt == yp) / len(y_true)\n    return {'accuracy': acc, 'total_samples': len(y_true)}",
              "explanation": "Computes accuracy and summary metrics."
            }
          ]
        },
        {
          "lectureId": "ds-lec-04",
          "lectureNumber": 4,
          "title": "Complete Data Visualization Course for Beginners | Matplotlib & Seaborn | Sheryians AI School",
          "videoUrl": "https://www.youtube.com/embed/-jTD74eEy2I",
          "topics": [
            "Histograms & Distributions",
            "Scatter & Line Plots",
            "Seaborn Heatmaps",
            "Boxplots & Outliers"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "ds-4-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "In Data Science, what is the core concept behind Histograms & Distributions?",
              "options": [
                "It serves as an essential methodology for Histograms & Distributions in data analysis and modeling workflows",
                "It is only used for graphic design",
                "It cannot handle numerical calculations",
                "It is an obsolete manual procedure"
              ],
              "correctAnswer": 0,
              "explanation": "Histograms & Distributions is an essential skill in modern data science."
            },
            {
              "id": "ds-4-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which statement accurately describes Scatter & Line Plots?",
              "options": [
                "It provides mathematically sound processing for Scatter & Line Plots",
                "It deletes data columns randomly",
                "It only functions without CPU power",
                "It creates permanent file errors"
              ],
              "correctAnswer": 0,
              "explanation": "Scatter & Line Plots enables reliable data transformations and modeling."
            },
            {
              "id": "ds-4-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "Why is Seaborn Heatmaps critical during model training and data evaluation?",
              "options": [
                "It controls bias-variance, handles high-dimensional structures, and ensures model generalization",
                "It guarantees execution without memory usage",
                "It replaces data cleaning entirely",
                "It converts Python scripts to HTML"
              ],
              "correctAnswer": 0,
              "explanation": "Seaborn Heatmaps is vital for building robust predictive pipelines."
            },
            {
              "id": "ds-4-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What pitfall must a data scientist avoid when implementing Boxplots & Outliers?",
              "options": [
                "Data leakage, unhandled missingness, and improper hyperparameter tuning",
                "Writing clean documentation",
                "Visualizing data distributions",
                "Using version control"
              ],
              "correctAnswer": 0,
              "explanation": "Rigorous methodology and validation safeguards prevent invalid inference."
            },
            {
              "id": "ds-4-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "In technical data science interviews, why is Complete Data Visualization Course for Beginn frequently tested?",
              "options": [
                "It tests candidate ability to solve real-world industry data problems efficiently and correctly",
                "It is the only topic covered in academic papers",
                "It is required by GPU hardware manufacturers",
                "It cannot be coded in Python"
              ],
              "correctAnswer": 0,
              "explanation": "Industry applications demand strong foundational comprehension of algorithmic mechanics."
            }
          ],
          "codingQuestions": [
            {
              "id": "ds-4-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a Python function for Lecture 4 processing input for Histograms & Distributions.",
              "language": "python",
              "starterCode": "def process_data(data):\n    # Process data for Histograms & Distributions\n    return data",
              "expectedOutput": "Processed data",
              "solution": "def process_data(data):\n    return [x for x in data if x is not None]",
              "explanation": "Filters valid data entries."
            },
            {
              "id": "ds-4-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Implement a calculation function related to Scatter & Line Plots.",
              "language": "python",
              "starterCode": "def calculate_stat(values):\n    # Compute summary metric\n    pass",
              "expectedOutput": "Summary metric",
              "solution": "def calculate_stat(values):\n    return sum(values) / len(values) if values else 0.0",
              "explanation": "Computes average summary statistic."
            },
            {
              "id": "ds-4-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Write an algorithmic implementation for Seaborn Heatmaps.",
              "language": "python",
              "starterCode": "def transform_features(features):\n    # Transform features\n    pass",
              "expectedOutput": "Transformed features",
              "solution": "def transform_features(features):\n    min_v, max_v = min(features), max(features)\n    diff = max_v - min_v if max_v != min_v else 1.0\n    return [(x - min_v) / diff for x in features]",
              "explanation": "Scales features to standard [0, 1] range."
            },
            {
              "id": "ds-4-c-04",
              "type": "coding",
              "subType": "debugging",
              "difficulty": "medium",
              "question": "Fix bug in metric evaluation function: `def loss(y, y_hat): return sum(y - y_hat)`.",
              "language": "python",
              "starterCode": "def loss(y, y_hat):\n    # Fix error metric\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)",
              "expectedOutput": "MSE loss",
              "solution": "def loss(y, y_hat):\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)",
              "explanation": "Squared differences prevent cancellation of positive and negative errors."
            },
            {
              "id": "ds-4-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Implement an end-to-end evaluation pipeline function for Boxplots & Outliers.",
              "language": "python",
              "starterCode": "def evaluate_predictions(y_true, y_pred):\n    # Return dict of metrics\n    pass",
              "expectedOutput": "Dict of metrics",
              "solution": "def evaluate_predictions(y_true, y_pred):\n    acc = sum(1 for yt, yp in zip(y_true, y_pred) if yt == yp) / len(y_true)\n    return {'accuracy': acc, 'total_samples': len(y_true)}",
              "explanation": "Computes accuracy and summary metrics."
            }
          ]
        },
        {
          "lectureId": "ds-lec-05",
          "lectureNumber": 5,
          "title": "Complete Statistics Course for Beginners | Data Science Tutorial | Sheryians AI School",
          "videoUrl": "https://www.youtube.com/embed/eF7HoC-cLRM",
          "topics": [
            "Descriptive Statistics",
            "Normal & Binomial Distributions",
            "Hypothesis Testing & P-values",
            "Central Limit Theorem"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "ds-5-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "In Data Science, what is the core concept behind Descriptive Statistics?",
              "options": [
                "It serves as an essential methodology for Descriptive Statistics in data analysis and modeling workflows",
                "It is only used for graphic design",
                "It cannot handle numerical calculations",
                "It is an obsolete manual procedure"
              ],
              "correctAnswer": 0,
              "explanation": "Descriptive Statistics is an essential skill in modern data science."
            },
            {
              "id": "ds-5-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which statement accurately describes Normal & Binomial Distributions?",
              "options": [
                "It provides mathematically sound processing for Normal & Binomial Distributions",
                "It deletes data columns randomly",
                "It only functions without CPU power",
                "It creates permanent file errors"
              ],
              "correctAnswer": 0,
              "explanation": "Normal & Binomial Distributions enables reliable data transformations and modeling."
            },
            {
              "id": "ds-5-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "Why is Hypothesis Testing & P-values critical during model training and data evaluation?",
              "options": [
                "It controls bias-variance, handles high-dimensional structures, and ensures model generalization",
                "It guarantees execution without memory usage",
                "It replaces data cleaning entirely",
                "It converts Python scripts to HTML"
              ],
              "correctAnswer": 0,
              "explanation": "Hypothesis Testing & P-values is vital for building robust predictive pipelines."
            },
            {
              "id": "ds-5-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What pitfall must a data scientist avoid when implementing Central Limit Theorem?",
              "options": [
                "Data leakage, unhandled missingness, and improper hyperparameter tuning",
                "Writing clean documentation",
                "Visualizing data distributions",
                "Using version control"
              ],
              "correctAnswer": 0,
              "explanation": "Rigorous methodology and validation safeguards prevent invalid inference."
            },
            {
              "id": "ds-5-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "In technical data science interviews, why is Complete Statistics Course for Beginners | Da frequently tested?",
              "options": [
                "It tests candidate ability to solve real-world industry data problems efficiently and correctly",
                "It is the only topic covered in academic papers",
                "It is required by GPU hardware manufacturers",
                "It cannot be coded in Python"
              ],
              "correctAnswer": 0,
              "explanation": "Industry applications demand strong foundational comprehension of algorithmic mechanics."
            }
          ],
          "codingQuestions": [
            {
              "id": "ds-5-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a Python function for Lecture 5 processing input for Descriptive Statistics.",
              "language": "python",
              "starterCode": "def process_data(data):\n    # Process data for Descriptive Statistics\n    return data",
              "expectedOutput": "Processed data",
              "solution": "def process_data(data):\n    return [x for x in data if x is not None]",
              "explanation": "Filters valid data entries."
            },
            {
              "id": "ds-5-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Implement a calculation function related to Normal & Binomial Distributions.",
              "language": "python",
              "starterCode": "def calculate_stat(values):\n    # Compute summary metric\n    pass",
              "expectedOutput": "Summary metric",
              "solution": "def calculate_stat(values):\n    return sum(values) / len(values) if values else 0.0",
              "explanation": "Computes average summary statistic."
            },
            {
              "id": "ds-5-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Write an algorithmic implementation for Hypothesis Testing & P-values.",
              "language": "python",
              "starterCode": "def transform_features(features):\n    # Transform features\n    pass",
              "expectedOutput": "Transformed features",
              "solution": "def transform_features(features):\n    min_v, max_v = min(features), max(features)\n    diff = max_v - min_v if max_v != min_v else 1.0\n    return [(x - min_v) / diff for x in features]",
              "explanation": "Scales features to standard [0, 1] range."
            },
            {
              "id": "ds-5-c-04",
              "type": "coding",
              "subType": "debugging",
              "difficulty": "medium",
              "question": "Fix bug in metric evaluation function: `def loss(y, y_hat): return sum(y - y_hat)`.",
              "language": "python",
              "starterCode": "def loss(y, y_hat):\n    # Fix error metric\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)",
              "expectedOutput": "MSE loss",
              "solution": "def loss(y, y_hat):\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)",
              "explanation": "Squared differences prevent cancellation of positive and negative errors."
            },
            {
              "id": "ds-5-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Implement an end-to-end evaluation pipeline function for Central Limit Theorem.",
              "language": "python",
              "starterCode": "def evaluate_predictions(y_true, y_pred):\n    # Return dict of metrics\n    pass",
              "expectedOutput": "Dict of metrics",
              "solution": "def evaluate_predictions(y_true, y_pred):\n    acc = sum(1 for yt, yp in zip(y_true, y_pred) if yt == yp) / len(y_true)\n    return {'accuracy': acc, 'total_samples': len(y_true)}",
              "explanation": "Computes accuracy and summary metrics."
            }
          ]
        }
      ]
    },
    {
      "moduleId": "ds-mod-2",
      "title": "Module 2: Machine Learning & SQL Pipelines (Lectures 6 - 10)",
      "lectures": [
        {
          "lectureId": "ds-lec-06",
          "lectureNumber": 6,
          "title": "Complete Machine Learning Course for Beginners | Part 1- Foundation | Sheryians AI School",
          "videoUrl": "https://www.youtube.com/embed/1L420xXpDTg",
          "topics": [
            "Intro to ML & Supervised Learning",
            "Features & Labels",
            "Train-Test Split",
            "Overfitting vs Underfitting"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "ds-6-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "In Data Science, what is the core concept behind Intro to ML & Supervised Learning?",
              "options": [
                "It serves as an essential methodology for Intro to ML & Supervised Learning in data analysis and modeling workflows",
                "It is only used for graphic design",
                "It cannot handle numerical calculations",
                "It is an obsolete manual procedure"
              ],
              "correctAnswer": 0,
              "explanation": "Intro to ML & Supervised Learning is an essential skill in modern data science."
            },
            {
              "id": "ds-6-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which statement accurately describes Features & Labels?",
              "options": [
                "It provides mathematically sound processing for Features & Labels",
                "It deletes data columns randomly",
                "It only functions without CPU power",
                "It creates permanent file errors"
              ],
              "correctAnswer": 0,
              "explanation": "Features & Labels enables reliable data transformations and modeling."
            },
            {
              "id": "ds-6-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "Why is Train-Test Split critical during model training and data evaluation?",
              "options": [
                "It controls bias-variance, handles high-dimensional structures, and ensures model generalization",
                "It guarantees execution without memory usage",
                "It replaces data cleaning entirely",
                "It converts Python scripts to HTML"
              ],
              "correctAnswer": 0,
              "explanation": "Train-Test Split is vital for building robust predictive pipelines."
            },
            {
              "id": "ds-6-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What pitfall must a data scientist avoid when implementing Overfitting vs Underfitting?",
              "options": [
                "Data leakage, unhandled missingness, and improper hyperparameter tuning",
                "Writing clean documentation",
                "Visualizing data distributions",
                "Using version control"
              ],
              "correctAnswer": 0,
              "explanation": "Rigorous methodology and validation safeguards prevent invalid inference."
            },
            {
              "id": "ds-6-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "In technical data science interviews, why is Complete Machine Learning Course for Beginner frequently tested?",
              "options": [
                "It tests candidate ability to solve real-world industry data problems efficiently and correctly",
                "It is the only topic covered in academic papers",
                "It is required by GPU hardware manufacturers",
                "It cannot be coded in Python"
              ],
              "correctAnswer": 0,
              "explanation": "Industry applications demand strong foundational comprehension of algorithmic mechanics."
            }
          ],
          "codingQuestions": [
            {
              "id": "ds-6-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a Python function for Lecture 6 processing input for Intro to ML & Supervised Learning.",
              "language": "python",
              "starterCode": "def process_data(data):\n    # Process data for Intro to ML & Supervised Learning\n    return data",
              "expectedOutput": "Processed data",
              "solution": "def process_data(data):\n    return [x for x in data if x is not None]",
              "explanation": "Filters valid data entries."
            },
            {
              "id": "ds-6-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Implement a calculation function related to Features & Labels.",
              "language": "python",
              "starterCode": "def calculate_stat(values):\n    # Compute summary metric\n    pass",
              "expectedOutput": "Summary metric",
              "solution": "def calculate_stat(values):\n    return sum(values) / len(values) if values else 0.0",
              "explanation": "Computes average summary statistic."
            },
            {
              "id": "ds-6-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Write an algorithmic implementation for Train-Test Split.",
              "language": "python",
              "starterCode": "def transform_features(features):\n    # Transform features\n    pass",
              "expectedOutput": "Transformed features",
              "solution": "def transform_features(features):\n    min_v, max_v = min(features), max(features)\n    diff = max_v - min_v if max_v != min_v else 1.0\n    return [(x - min_v) / diff for x in features]",
              "explanation": "Scales features to standard [0, 1] range."
            },
            {
              "id": "ds-6-c-04",
              "type": "coding",
              "subType": "debugging",
              "difficulty": "medium",
              "question": "Fix bug in metric evaluation function: `def loss(y, y_hat): return sum(y - y_hat)`.",
              "language": "python",
              "starterCode": "def loss(y, y_hat):\n    # Fix error metric\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)",
              "expectedOutput": "MSE loss",
              "solution": "def loss(y, y_hat):\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)",
              "explanation": "Squared differences prevent cancellation of positive and negative errors."
            },
            {
              "id": "ds-6-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Implement an end-to-end evaluation pipeline function for Overfitting vs Underfitting.",
              "language": "python",
              "starterCode": "def evaluate_predictions(y_true, y_pred):\n    # Return dict of metrics\n    pass",
              "expectedOutput": "Dict of metrics",
              "solution": "def evaluate_predictions(y_true, y_pred):\n    acc = sum(1 for yt, yp in zip(y_true, y_pred) if yt == yp) / len(y_true)\n    return {'accuracy': acc, 'total_samples': len(y_true)}",
              "explanation": "Computes accuracy and summary metrics."
            }
          ]
        },
        {
          "lectureId": "ds-lec-07",
          "lectureNumber": 7,
          "title": "Part 2 - Supervised Learning | Complete Machine Learning Course for Beginners | Sheryians AI School",
          "videoUrl": "https://www.youtube.com/embed/Lb0JzFtTmBs",
          "topics": [
            "Linear Regression",
            "Cost Function (MSE)",
            "Gradient Descent",
            "Learning Rate & Convergence"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "ds-7-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "In Data Science, what is the core concept behind Linear Regression?",
              "options": [
                "It serves as an essential methodology for Linear Regression in data analysis and modeling workflows",
                "It is only used for graphic design",
                "It cannot handle numerical calculations",
                "It is an obsolete manual procedure"
              ],
              "correctAnswer": 0,
              "explanation": "Linear Regression is an essential skill in modern data science."
            },
            {
              "id": "ds-7-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which statement accurately describes Cost Function (MSE)?",
              "options": [
                "It provides mathematically sound processing for Cost Function (MSE)",
                "It deletes data columns randomly",
                "It only functions without CPU power",
                "It creates permanent file errors"
              ],
              "correctAnswer": 0,
              "explanation": "Cost Function (MSE) enables reliable data transformations and modeling."
            },
            {
              "id": "ds-7-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "Why is Gradient Descent critical during model training and data evaluation?",
              "options": [
                "It controls bias-variance, handles high-dimensional structures, and ensures model generalization",
                "It guarantees execution without memory usage",
                "It replaces data cleaning entirely",
                "It converts Python scripts to HTML"
              ],
              "correctAnswer": 0,
              "explanation": "Gradient Descent is vital for building robust predictive pipelines."
            },
            {
              "id": "ds-7-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What pitfall must a data scientist avoid when implementing Learning Rate & Convergence?",
              "options": [
                "Data leakage, unhandled missingness, and improper hyperparameter tuning",
                "Writing clean documentation",
                "Visualizing data distributions",
                "Using version control"
              ],
              "correctAnswer": 0,
              "explanation": "Rigorous methodology and validation safeguards prevent invalid inference."
            },
            {
              "id": "ds-7-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "In technical data science interviews, why is Part 2 - Supervised Learning | Complete Machi frequently tested?",
              "options": [
                "It tests candidate ability to solve real-world industry data problems efficiently and correctly",
                "It is the only topic covered in academic papers",
                "It is required by GPU hardware manufacturers",
                "It cannot be coded in Python"
              ],
              "correctAnswer": 0,
              "explanation": "Industry applications demand strong foundational comprehension of algorithmic mechanics."
            }
          ],
          "codingQuestions": [
            {
              "id": "ds-7-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a Python function for Lecture 7 processing input for Linear Regression.",
              "language": "python",
              "starterCode": "def process_data(data):\n    # Process data for Linear Regression\n    return data",
              "expectedOutput": "Processed data",
              "solution": "def process_data(data):\n    return [x for x in data if x is not None]",
              "explanation": "Filters valid data entries."
            },
            {
              "id": "ds-7-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Implement a calculation function related to Cost Function (MSE).",
              "language": "python",
              "starterCode": "def calculate_stat(values):\n    # Compute summary metric\n    pass",
              "expectedOutput": "Summary metric",
              "solution": "def calculate_stat(values):\n    return sum(values) / len(values) if values else 0.0",
              "explanation": "Computes average summary statistic."
            },
            {
              "id": "ds-7-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Write an algorithmic implementation for Gradient Descent.",
              "language": "python",
              "starterCode": "def transform_features(features):\n    # Transform features\n    pass",
              "expectedOutput": "Transformed features",
              "solution": "def transform_features(features):\n    min_v, max_v = min(features), max(features)\n    diff = max_v - min_v if max_v != min_v else 1.0\n    return [(x - min_v) / diff for x in features]",
              "explanation": "Scales features to standard [0, 1] range."
            },
            {
              "id": "ds-7-c-04",
              "type": "coding",
              "subType": "debugging",
              "difficulty": "medium",
              "question": "Fix bug in metric evaluation function: `def loss(y, y_hat): return sum(y - y_hat)`.",
              "language": "python",
              "starterCode": "def loss(y, y_hat):\n    # Fix error metric\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)",
              "expectedOutput": "MSE loss",
              "solution": "def loss(y, y_hat):\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)",
              "explanation": "Squared differences prevent cancellation of positive and negative errors."
            },
            {
              "id": "ds-7-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Implement an end-to-end evaluation pipeline function for Learning Rate & Convergence.",
              "language": "python",
              "starterCode": "def evaluate_predictions(y_true, y_pred):\n    # Return dict of metrics\n    pass",
              "expectedOutput": "Dict of metrics",
              "solution": "def evaluate_predictions(y_true, y_pred):\n    acc = sum(1 for yt, yp in zip(y_true, y_pred) if yt == yp) / len(y_true)\n    return {'accuracy': acc, 'total_samples': len(y_true)}",
              "explanation": "Computes accuracy and summary metrics."
            }
          ]
        },
        {
          "lectureId": "ds-lec-08",
          "lectureNumber": 8,
          "title": "Part 3 - Supervised Learning| Classification Algorithms for Beginners | Sheryians AI School",
          "videoUrl": "https://www.youtube.com/embed/omGvjpmPDoY",
          "topics": [
            "Logistic Regression",
            "Decision Trees",
            "K-Nearest Neighbors",
            "Confusion Matrix & F1-Score"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "ds-8-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "In Data Science, what is the core concept behind Logistic Regression?",
              "options": [
                "It serves as an essential methodology for Logistic Regression in data analysis and modeling workflows",
                "It is only used for graphic design",
                "It cannot handle numerical calculations",
                "It is an obsolete manual procedure"
              ],
              "correctAnswer": 0,
              "explanation": "Logistic Regression is an essential skill in modern data science."
            },
            {
              "id": "ds-8-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which statement accurately describes Decision Trees?",
              "options": [
                "It provides mathematically sound processing for Decision Trees",
                "It deletes data columns randomly",
                "It only functions without CPU power",
                "It creates permanent file errors"
              ],
              "correctAnswer": 0,
              "explanation": "Decision Trees enables reliable data transformations and modeling."
            },
            {
              "id": "ds-8-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "Why is K-Nearest Neighbors critical during model training and data evaluation?",
              "options": [
                "It controls bias-variance, handles high-dimensional structures, and ensures model generalization",
                "It guarantees execution without memory usage",
                "It replaces data cleaning entirely",
                "It converts Python scripts to HTML"
              ],
              "correctAnswer": 0,
              "explanation": "K-Nearest Neighbors is vital for building robust predictive pipelines."
            },
            {
              "id": "ds-8-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What pitfall must a data scientist avoid when implementing Confusion Matrix & F1-Score?",
              "options": [
                "Data leakage, unhandled missingness, and improper hyperparameter tuning",
                "Writing clean documentation",
                "Visualizing data distributions",
                "Using version control"
              ],
              "correctAnswer": 0,
              "explanation": "Rigorous methodology and validation safeguards prevent invalid inference."
            },
            {
              "id": "ds-8-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "In technical data science interviews, why is Part 3 - Supervised Learning| Classification  frequently tested?",
              "options": [
                "It tests candidate ability to solve real-world industry data problems efficiently and correctly",
                "It is the only topic covered in academic papers",
                "It is required by GPU hardware manufacturers",
                "It cannot be coded in Python"
              ],
              "correctAnswer": 0,
              "explanation": "Industry applications demand strong foundational comprehension of algorithmic mechanics."
            }
          ],
          "codingQuestions": [
            {
              "id": "ds-8-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a Python function for Lecture 8 processing input for Logistic Regression.",
              "language": "python",
              "starterCode": "def process_data(data):\n    # Process data for Logistic Regression\n    return data",
              "expectedOutput": "Processed data",
              "solution": "def process_data(data):\n    return [x for x in data if x is not None]",
              "explanation": "Filters valid data entries."
            },
            {
              "id": "ds-8-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Implement a calculation function related to Decision Trees.",
              "language": "python",
              "starterCode": "def calculate_stat(values):\n    # Compute summary metric\n    pass",
              "expectedOutput": "Summary metric",
              "solution": "def calculate_stat(values):\n    return sum(values) / len(values) if values else 0.0",
              "explanation": "Computes average summary statistic."
            },
            {
              "id": "ds-8-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Write an algorithmic implementation for K-Nearest Neighbors.",
              "language": "python",
              "starterCode": "def transform_features(features):\n    # Transform features\n    pass",
              "expectedOutput": "Transformed features",
              "solution": "def transform_features(features):\n    min_v, max_v = min(features), max(features)\n    diff = max_v - min_v if max_v != min_v else 1.0\n    return [(x - min_v) / diff for x in features]",
              "explanation": "Scales features to standard [0, 1] range."
            },
            {
              "id": "ds-8-c-04",
              "type": "coding",
              "subType": "debugging",
              "difficulty": "medium",
              "question": "Fix bug in metric evaluation function: `def loss(y, y_hat): return sum(y - y_hat)`.",
              "language": "python",
              "starterCode": "def loss(y, y_hat):\n    # Fix error metric\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)",
              "expectedOutput": "MSE loss",
              "solution": "def loss(y, y_hat):\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)",
              "explanation": "Squared differences prevent cancellation of positive and negative errors."
            },
            {
              "id": "ds-8-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Implement an end-to-end evaluation pipeline function for Confusion Matrix & F1-Score.",
              "language": "python",
              "starterCode": "def evaluate_predictions(y_true, y_pred):\n    # Return dict of metrics\n    pass",
              "expectedOutput": "Dict of metrics",
              "solution": "def evaluate_predictions(y_true, y_pred):\n    acc = sum(1 for yt, yp in zip(y_true, y_pred) if yt == yp) / len(y_true)\n    return {'accuracy': acc, 'total_samples': len(y_true)}",
              "explanation": "Computes accuracy and summary metrics."
            }
          ]
        },
        {
          "lectureId": "ds-lec-09",
          "lectureNumber": 9,
          "title": "Part 4 - Model Tuning, Ensemble & Unsupervised Learning | Full ML Course | Sheryians AI School",
          "videoUrl": "https://www.youtube.com/embed/UFAHXZW2hU8",
          "topics": [
            "Random Forest",
            "K-Means Clustering",
            "PCA (Dimensionality Reduction)",
            "Hyperparameter Tuning"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "ds-9-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "In Data Science, what is the core concept behind Random Forest?",
              "options": [
                "It serves as an essential methodology for Random Forest in data analysis and modeling workflows",
                "It is only used for graphic design",
                "It cannot handle numerical calculations",
                "It is an obsolete manual procedure"
              ],
              "correctAnswer": 0,
              "explanation": "Random Forest is an essential skill in modern data science."
            },
            {
              "id": "ds-9-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which statement accurately describes K-Means Clustering?",
              "options": [
                "It provides mathematically sound processing for K-Means Clustering",
                "It deletes data columns randomly",
                "It only functions without CPU power",
                "It creates permanent file errors"
              ],
              "correctAnswer": 0,
              "explanation": "K-Means Clustering enables reliable data transformations and modeling."
            },
            {
              "id": "ds-9-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "Why is PCA (Dimensionality Reduction) critical during model training and data evaluation?",
              "options": [
                "It controls bias-variance, handles high-dimensional structures, and ensures model generalization",
                "It guarantees execution without memory usage",
                "It replaces data cleaning entirely",
                "It converts Python scripts to HTML"
              ],
              "correctAnswer": 0,
              "explanation": "PCA (Dimensionality Reduction) is vital for building robust predictive pipelines."
            },
            {
              "id": "ds-9-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What pitfall must a data scientist avoid when implementing Hyperparameter Tuning?",
              "options": [
                "Data leakage, unhandled missingness, and improper hyperparameter tuning",
                "Writing clean documentation",
                "Visualizing data distributions",
                "Using version control"
              ],
              "correctAnswer": 0,
              "explanation": "Rigorous methodology and validation safeguards prevent invalid inference."
            },
            {
              "id": "ds-9-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "In technical data science interviews, why is Part 4 - Model Tuning, Ensemble & Unsupervise frequently tested?",
              "options": [
                "It tests candidate ability to solve real-world industry data problems efficiently and correctly",
                "It is the only topic covered in academic papers",
                "It is required by GPU hardware manufacturers",
                "It cannot be coded in Python"
              ],
              "correctAnswer": 0,
              "explanation": "Industry applications demand strong foundational comprehension of algorithmic mechanics."
            }
          ],
          "codingQuestions": [
            {
              "id": "ds-9-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a Python function for Lecture 9 processing input for Random Forest.",
              "language": "python",
              "starterCode": "def process_data(data):\n    # Process data for Random Forest\n    return data",
              "expectedOutput": "Processed data",
              "solution": "def process_data(data):\n    return [x for x in data if x is not None]",
              "explanation": "Filters valid data entries."
            },
            {
              "id": "ds-9-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Implement a calculation function related to K-Means Clustering.",
              "language": "python",
              "starterCode": "def calculate_stat(values):\n    # Compute summary metric\n    pass",
              "expectedOutput": "Summary metric",
              "solution": "def calculate_stat(values):\n    return sum(values) / len(values) if values else 0.0",
              "explanation": "Computes average summary statistic."
            },
            {
              "id": "ds-9-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Write an algorithmic implementation for PCA (Dimensionality Reduction).",
              "language": "python",
              "starterCode": "def transform_features(features):\n    # Transform features\n    pass",
              "expectedOutput": "Transformed features",
              "solution": "def transform_features(features):\n    min_v, max_v = min(features), max(features)\n    diff = max_v - min_v if max_v != min_v else 1.0\n    return [(x - min_v) / diff for x in features]",
              "explanation": "Scales features to standard [0, 1] range."
            },
            {
              "id": "ds-9-c-04",
              "type": "coding",
              "subType": "debugging",
              "difficulty": "medium",
              "question": "Fix bug in metric evaluation function: `def loss(y, y_hat): return sum(y - y_hat)`.",
              "language": "python",
              "starterCode": "def loss(y, y_hat):\n    # Fix error metric\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)",
              "expectedOutput": "MSE loss",
              "solution": "def loss(y, y_hat):\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)",
              "explanation": "Squared differences prevent cancellation of positive and negative errors."
            },
            {
              "id": "ds-9-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Implement an end-to-end evaluation pipeline function for Hyperparameter Tuning.",
              "language": "python",
              "starterCode": "def evaluate_predictions(y_true, y_pred):\n    # Return dict of metrics\n    pass",
              "expectedOutput": "Dict of metrics",
              "solution": "def evaluate_predictions(y_true, y_pred):\n    acc = sum(1 for yt, yp in zip(y_true, y_pred) if yt == yp) / len(y_true)\n    return {'accuracy': acc, 'total_samples': len(y_true)}",
              "explanation": "Computes accuracy and summary metrics."
            }
          ]
        },
        {
          "lectureId": "ds-lec-10",
          "lectureNumber": 10,
          "title": "Complete SQL in 1 shot for Data analytics in 2025",
          "videoUrl": "https://www.youtube.com/embed/p1epCuYb5OQ",
          "topics": [
            "SQL Queries (SELECT, WHERE, ORDER BY)",
            "Aggregate Functions & GROUP BY",
            "SQL Joins (INNER, LEFT)",
            "Subqueries & Window Functions"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "ds-10-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "In Data Science, what is the core concept behind SQL Queries (SELECT, WHERE, ORDER BY)?",
              "options": [
                "It serves as an essential methodology for SQL Queries (SELECT, WHERE, ORDER BY) in data analysis and modeling workflows",
                "It is only used for graphic design",
                "It cannot handle numerical calculations",
                "It is an obsolete manual procedure"
              ],
              "correctAnswer": 0,
              "explanation": "SQL Queries (SELECT, WHERE, ORDER BY) is an essential skill in modern data science."
            },
            {
              "id": "ds-10-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which statement accurately describes Aggregate Functions & GROUP BY?",
              "options": [
                "It provides mathematically sound processing for Aggregate Functions & GROUP BY",
                "It deletes data columns randomly",
                "It only functions without CPU power",
                "It creates permanent file errors"
              ],
              "correctAnswer": 0,
              "explanation": "Aggregate Functions & GROUP BY enables reliable data transformations and modeling."
            },
            {
              "id": "ds-10-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "Why is SQL Joins (INNER, LEFT) critical during model training and data evaluation?",
              "options": [
                "It controls bias-variance, handles high-dimensional structures, and ensures model generalization",
                "It guarantees execution without memory usage",
                "It replaces data cleaning entirely",
                "It converts Python scripts to HTML"
              ],
              "correctAnswer": 0,
              "explanation": "SQL Joins (INNER, LEFT) is vital for building robust predictive pipelines."
            },
            {
              "id": "ds-10-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What pitfall must a data scientist avoid when implementing Subqueries & Window Functions?",
              "options": [
                "Data leakage, unhandled missingness, and improper hyperparameter tuning",
                "Writing clean documentation",
                "Visualizing data distributions",
                "Using version control"
              ],
              "correctAnswer": 0,
              "explanation": "Rigorous methodology and validation safeguards prevent invalid inference."
            },
            {
              "id": "ds-10-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "In technical data science interviews, why is Complete SQL in 1 shot for Data analytics in  frequently tested?",
              "options": [
                "It tests candidate ability to solve real-world industry data problems efficiently and correctly",
                "It is the only topic covered in academic papers",
                "It is required by GPU hardware manufacturers",
                "It cannot be coded in Python"
              ],
              "correctAnswer": 0,
              "explanation": "Industry applications demand strong foundational comprehension of algorithmic mechanics."
            }
          ],
          "codingQuestions": [
            {
              "id": "ds-10-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a Python function for Lecture 10 processing input for SQL Queries (SELECT, WHERE, ORDER BY).",
              "language": "python",
              "starterCode": "def process_data(data):\n    # Process data for SQL Queries (SELECT, WHERE, ORDER BY)\n    return data",
              "expectedOutput": "Processed data",
              "solution": "def process_data(data):\n    return [x for x in data if x is not None]",
              "explanation": "Filters valid data entries."
            },
            {
              "id": "ds-10-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Implement a calculation function related to Aggregate Functions & GROUP BY.",
              "language": "python",
              "starterCode": "def calculate_stat(values):\n    # Compute summary metric\n    pass",
              "expectedOutput": "Summary metric",
              "solution": "def calculate_stat(values):\n    return sum(values) / len(values) if values else 0.0",
              "explanation": "Computes average summary statistic."
            },
            {
              "id": "ds-10-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Write an algorithmic implementation for SQL Joins (INNER, LEFT).",
              "language": "python",
              "starterCode": "def transform_features(features):\n    # Transform features\n    pass",
              "expectedOutput": "Transformed features",
              "solution": "def transform_features(features):\n    min_v, max_v = min(features), max(features)\n    diff = max_v - min_v if max_v != min_v else 1.0\n    return [(x - min_v) / diff for x in features]",
              "explanation": "Scales features to standard [0, 1] range."
            },
            {
              "id": "ds-10-c-04",
              "type": "coding",
              "subType": "debugging",
              "difficulty": "medium",
              "question": "Fix bug in metric evaluation function: `def loss(y, y_hat): return sum(y - y_hat)`.",
              "language": "python",
              "starterCode": "def loss(y, y_hat):\n    # Fix error metric\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)",
              "expectedOutput": "MSE loss",
              "solution": "def loss(y, y_hat):\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)",
              "explanation": "Squared differences prevent cancellation of positive and negative errors."
            },
            {
              "id": "ds-10-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Implement an end-to-end evaluation pipeline function for Subqueries & Window Functions.",
              "language": "python",
              "starterCode": "def evaluate_predictions(y_true, y_pred):\n    # Return dict of metrics\n    pass",
              "expectedOutput": "Dict of metrics",
              "solution": "def evaluate_predictions(y_true, y_pred):\n    acc = sum(1 for yt, yp in zip(y_true, y_pred) if yt == yp) / len(y_true)\n    return {'accuracy': acc, 'total_samples': len(y_true)}",
              "explanation": "Computes accuracy and summary metrics."
            }
          ]
        }
      ]
    },
    {
      "moduleId": "ds-mod-3",
      "title": "Module 3: NLP, Deep Learning & Transformers (Lectures 11 - 15)",
      "lectures": [
        {
          "lectureId": "ds-lec-11",
          "lectureNumber": 11,
          "title": "Learn Complete NLP with Project (Bag of Words, Tf-idf) | For Beginners",
          "videoUrl": "https://www.youtube.com/embed/yiNS_Sh9KDA",
          "topics": [
            "Tokenization & Stopwords",
            "Bag of Words (BoW)",
            "TF-IDF Vectorizer",
            "Text Classification Pipeline"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "ds-11-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "In Data Science, what is the core concept behind Tokenization & Stopwords?",
              "options": [
                "It serves as an essential methodology for Tokenization & Stopwords in data analysis and modeling workflows",
                "It is only used for graphic design",
                "It cannot handle numerical calculations",
                "It is an obsolete manual procedure"
              ],
              "correctAnswer": 0,
              "explanation": "Tokenization & Stopwords is an essential skill in modern data science."
            },
            {
              "id": "ds-11-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which statement accurately describes Bag of Words (BoW)?",
              "options": [
                "It provides mathematically sound processing for Bag of Words (BoW)",
                "It deletes data columns randomly",
                "It only functions without CPU power",
                "It creates permanent file errors"
              ],
              "correctAnswer": 0,
              "explanation": "Bag of Words (BoW) enables reliable data transformations and modeling."
            },
            {
              "id": "ds-11-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "Why is TF-IDF Vectorizer critical during model training and data evaluation?",
              "options": [
                "It controls bias-variance, handles high-dimensional structures, and ensures model generalization",
                "It guarantees execution without memory usage",
                "It replaces data cleaning entirely",
                "It converts Python scripts to HTML"
              ],
              "correctAnswer": 0,
              "explanation": "TF-IDF Vectorizer is vital for building robust predictive pipelines."
            },
            {
              "id": "ds-11-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What pitfall must a data scientist avoid when implementing Text Classification Pipeline?",
              "options": [
                "Data leakage, unhandled missingness, and improper hyperparameter tuning",
                "Writing clean documentation",
                "Visualizing data distributions",
                "Using version control"
              ],
              "correctAnswer": 0,
              "explanation": "Rigorous methodology and validation safeguards prevent invalid inference."
            },
            {
              "id": "ds-11-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "In technical data science interviews, why is Learn Complete NLP with Project (Bag of Words frequently tested?",
              "options": [
                "It tests candidate ability to solve real-world industry data problems efficiently and correctly",
                "It is the only topic covered in academic papers",
                "It is required by GPU hardware manufacturers",
                "It cannot be coded in Python"
              ],
              "correctAnswer": 0,
              "explanation": "Industry applications demand strong foundational comprehension of algorithmic mechanics."
            }
          ],
          "codingQuestions": [
            {
              "id": "ds-11-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a Python function for Lecture 11 processing input for Tokenization & Stopwords.",
              "language": "python",
              "starterCode": "def process_data(data):\n    # Process data for Tokenization & Stopwords\n    return data",
              "expectedOutput": "Processed data",
              "solution": "def process_data(data):\n    return [x for x in data if x is not None]",
              "explanation": "Filters valid data entries."
            },
            {
              "id": "ds-11-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Implement a calculation function related to Bag of Words (BoW).",
              "language": "python",
              "starterCode": "def calculate_stat(values):\n    # Compute summary metric\n    pass",
              "expectedOutput": "Summary metric",
              "solution": "def calculate_stat(values):\n    return sum(values) / len(values) if values else 0.0",
              "explanation": "Computes average summary statistic."
            },
            {
              "id": "ds-11-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Write an algorithmic implementation for TF-IDF Vectorizer.",
              "language": "python",
              "starterCode": "def transform_features(features):\n    # Transform features\n    pass",
              "expectedOutput": "Transformed features",
              "solution": "def transform_features(features):\n    min_v, max_v = min(features), max(features)\n    diff = max_v - min_v if max_v != min_v else 1.0\n    return [(x - min_v) / diff for x in features]",
              "explanation": "Scales features to standard [0, 1] range."
            },
            {
              "id": "ds-11-c-04",
              "type": "coding",
              "subType": "debugging",
              "difficulty": "medium",
              "question": "Fix bug in metric evaluation function: `def loss(y, y_hat): return sum(y - y_hat)`.",
              "language": "python",
              "starterCode": "def loss(y, y_hat):\n    # Fix error metric\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)",
              "expectedOutput": "MSE loss",
              "solution": "def loss(y, y_hat):\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)",
              "explanation": "Squared differences prevent cancellation of positive and negative errors."
            },
            {
              "id": "ds-11-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Implement an end-to-end evaluation pipeline function for Text Classification Pipeline.",
              "language": "python",
              "starterCode": "def evaluate_predictions(y_true, y_pred):\n    # Return dict of metrics\n    pass",
              "expectedOutput": "Dict of metrics",
              "solution": "def evaluate_predictions(y_true, y_pred):\n    acc = sum(1 for yt, yp in zip(y_true, y_pred) if yt == yp) / len(y_true)\n    return {'accuracy': acc, 'total_samples': len(y_true)}",
              "explanation": "Computes accuracy and summary metrics."
            }
          ]
        },
        {
          "lectureId": "ds-lec-12",
          "lectureNumber": 12,
          "title": "Deep Learning Complete Course | Part 1| ANN implementation.",
          "videoUrl": "https://www.youtube.com/embed/losbBdEjyN4",
          "topics": [
            "Perceptrons & Multi-Layer Perceptrons",
            "Activation Functions (ReLU, Softmax)",
            "Backpropagation",
            "Loss Optimization with Adam"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "ds-12-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "In Data Science, what is the core concept behind Perceptrons & Multi-Layer Perceptrons?",
              "options": [
                "It serves as an essential methodology for Perceptrons & Multi-Layer Perceptrons in data analysis and modeling workflows",
                "It is only used for graphic design",
                "It cannot handle numerical calculations",
                "It is an obsolete manual procedure"
              ],
              "correctAnswer": 0,
              "explanation": "Perceptrons & Multi-Layer Perceptrons is an essential skill in modern data science."
            },
            {
              "id": "ds-12-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which statement accurately describes Activation Functions (ReLU, Softmax)?",
              "options": [
                "It provides mathematically sound processing for Activation Functions (ReLU, Softmax)",
                "It deletes data columns randomly",
                "It only functions without CPU power",
                "It creates permanent file errors"
              ],
              "correctAnswer": 0,
              "explanation": "Activation Functions (ReLU, Softmax) enables reliable data transformations and modeling."
            },
            {
              "id": "ds-12-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "Why is Backpropagation critical during model training and data evaluation?",
              "options": [
                "It controls bias-variance, handles high-dimensional structures, and ensures model generalization",
                "It guarantees execution without memory usage",
                "It replaces data cleaning entirely",
                "It converts Python scripts to HTML"
              ],
              "correctAnswer": 0,
              "explanation": "Backpropagation is vital for building robust predictive pipelines."
            },
            {
              "id": "ds-12-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What pitfall must a data scientist avoid when implementing Loss Optimization with Adam?",
              "options": [
                "Data leakage, unhandled missingness, and improper hyperparameter tuning",
                "Writing clean documentation",
                "Visualizing data distributions",
                "Using version control"
              ],
              "correctAnswer": 0,
              "explanation": "Rigorous methodology and validation safeguards prevent invalid inference."
            },
            {
              "id": "ds-12-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "In technical data science interviews, why is Deep Learning Complete Course | Part 1| ANN i frequently tested?",
              "options": [
                "It tests candidate ability to solve real-world industry data problems efficiently and correctly",
                "It is the only topic covered in academic papers",
                "It is required by GPU hardware manufacturers",
                "It cannot be coded in Python"
              ],
              "correctAnswer": 0,
              "explanation": "Industry applications demand strong foundational comprehension of algorithmic mechanics."
            }
          ],
          "codingQuestions": [
            {
              "id": "ds-12-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a Python function for Lecture 12 processing input for Perceptrons & Multi-Layer Perceptrons.",
              "language": "python",
              "starterCode": "def process_data(data):\n    # Process data for Perceptrons & Multi-Layer Perceptrons\n    return data",
              "expectedOutput": "Processed data",
              "solution": "def process_data(data):\n    return [x for x in data if x is not None]",
              "explanation": "Filters valid data entries."
            },
            {
              "id": "ds-12-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Implement a calculation function related to Activation Functions (ReLU, Softmax).",
              "language": "python",
              "starterCode": "def calculate_stat(values):\n    # Compute summary metric\n    pass",
              "expectedOutput": "Summary metric",
              "solution": "def calculate_stat(values):\n    return sum(values) / len(values) if values else 0.0",
              "explanation": "Computes average summary statistic."
            },
            {
              "id": "ds-12-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Write an algorithmic implementation for Backpropagation.",
              "language": "python",
              "starterCode": "def transform_features(features):\n    # Transform features\n    pass",
              "expectedOutput": "Transformed features",
              "solution": "def transform_features(features):\n    min_v, max_v = min(features), max(features)\n    diff = max_v - min_v if max_v != min_v else 1.0\n    return [(x - min_v) / diff for x in features]",
              "explanation": "Scales features to standard [0, 1] range."
            },
            {
              "id": "ds-12-c-04",
              "type": "coding",
              "subType": "debugging",
              "difficulty": "medium",
              "question": "Fix bug in metric evaluation function: `def loss(y, y_hat): return sum(y - y_hat)`.",
              "language": "python",
              "starterCode": "def loss(y, y_hat):\n    # Fix error metric\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)",
              "expectedOutput": "MSE loss",
              "solution": "def loss(y, y_hat):\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)",
              "explanation": "Squared differences prevent cancellation of positive and negative errors."
            },
            {
              "id": "ds-12-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Implement an end-to-end evaluation pipeline function for Loss Optimization with Adam.",
              "language": "python",
              "starterCode": "def evaluate_predictions(y_true, y_pred):\n    # Return dict of metrics\n    pass",
              "expectedOutput": "Dict of metrics",
              "solution": "def evaluate_predictions(y_true, y_pred):\n    acc = sum(1 for yt, yp in zip(y_true, y_pred) if yt == yp) / len(y_true)\n    return {'accuracy': acc, 'total_samples': len(y_true)}",
              "explanation": "Computes accuracy and summary metrics."
            }
          ]
        },
        {
          "lectureId": "ds-lec-13",
          "lectureNumber": 13,
          "title": "Deep Learning Complete Course | Part 2| CNN implementation.",
          "videoUrl": "https://www.youtube.com/embed/dh3ilHzIRd0",
          "topics": [
            "Convolutional Kernels",
            "Padding & Stride",
            "MaxPooling",
            "CNN Image Classification"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "ds-13-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "In Data Science, what is the core concept behind Convolutional Kernels?",
              "options": [
                "It serves as an essential methodology for Convolutional Kernels in data analysis and modeling workflows",
                "It is only used for graphic design",
                "It cannot handle numerical calculations",
                "It is an obsolete manual procedure"
              ],
              "correctAnswer": 0,
              "explanation": "Convolutional Kernels is an essential skill in modern data science."
            },
            {
              "id": "ds-13-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which statement accurately describes Padding & Stride?",
              "options": [
                "It provides mathematically sound processing for Padding & Stride",
                "It deletes data columns randomly",
                "It only functions without CPU power",
                "It creates permanent file errors"
              ],
              "correctAnswer": 0,
              "explanation": "Padding & Stride enables reliable data transformations and modeling."
            },
            {
              "id": "ds-13-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "Why is MaxPooling critical during model training and data evaluation?",
              "options": [
                "It controls bias-variance, handles high-dimensional structures, and ensures model generalization",
                "It guarantees execution without memory usage",
                "It replaces data cleaning entirely",
                "It converts Python scripts to HTML"
              ],
              "correctAnswer": 0,
              "explanation": "MaxPooling is vital for building robust predictive pipelines."
            },
            {
              "id": "ds-13-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What pitfall must a data scientist avoid when implementing CNN Image Classification?",
              "options": [
                "Data leakage, unhandled missingness, and improper hyperparameter tuning",
                "Writing clean documentation",
                "Visualizing data distributions",
                "Using version control"
              ],
              "correctAnswer": 0,
              "explanation": "Rigorous methodology and validation safeguards prevent invalid inference."
            },
            {
              "id": "ds-13-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "In technical data science interviews, why is Deep Learning Complete Course | Part 2| CNN i frequently tested?",
              "options": [
                "It tests candidate ability to solve real-world industry data problems efficiently and correctly",
                "It is the only topic covered in academic papers",
                "It is required by GPU hardware manufacturers",
                "It cannot be coded in Python"
              ],
              "correctAnswer": 0,
              "explanation": "Industry applications demand strong foundational comprehension of algorithmic mechanics."
            }
          ],
          "codingQuestions": [
            {
              "id": "ds-13-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a Python function for Lecture 13 processing input for Convolutional Kernels.",
              "language": "python",
              "starterCode": "def process_data(data):\n    # Process data for Convolutional Kernels\n    return data",
              "expectedOutput": "Processed data",
              "solution": "def process_data(data):\n    return [x for x in data if x is not None]",
              "explanation": "Filters valid data entries."
            },
            {
              "id": "ds-13-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Implement a calculation function related to Padding & Stride.",
              "language": "python",
              "starterCode": "def calculate_stat(values):\n    # Compute summary metric\n    pass",
              "expectedOutput": "Summary metric",
              "solution": "def calculate_stat(values):\n    return sum(values) / len(values) if values else 0.0",
              "explanation": "Computes average summary statistic."
            },
            {
              "id": "ds-13-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Write an algorithmic implementation for MaxPooling.",
              "language": "python",
              "starterCode": "def transform_features(features):\n    # Transform features\n    pass",
              "expectedOutput": "Transformed features",
              "solution": "def transform_features(features):\n    min_v, max_v = min(features), max(features)\n    diff = max_v - min_v if max_v != min_v else 1.0\n    return [(x - min_v) / diff for x in features]",
              "explanation": "Scales features to standard [0, 1] range."
            },
            {
              "id": "ds-13-c-04",
              "type": "coding",
              "subType": "debugging",
              "difficulty": "medium",
              "question": "Fix bug in metric evaluation function: `def loss(y, y_hat): return sum(y - y_hat)`.",
              "language": "python",
              "starterCode": "def loss(y, y_hat):\n    # Fix error metric\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)",
              "expectedOutput": "MSE loss",
              "solution": "def loss(y, y_hat):\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)",
              "explanation": "Squared differences prevent cancellation of positive and negative errors."
            },
            {
              "id": "ds-13-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Implement an end-to-end evaluation pipeline function for CNN Image Classification.",
              "language": "python",
              "starterCode": "def evaluate_predictions(y_true, y_pred):\n    # Return dict of metrics\n    pass",
              "expectedOutput": "Dict of metrics",
              "solution": "def evaluate_predictions(y_true, y_pred):\n    acc = sum(1 for yt, yp in zip(y_true, y_pred) if yt == yp) / len(y_true)\n    return {'accuracy': acc, 'total_samples': len(y_true)}",
              "explanation": "Computes accuracy and summary metrics."
            }
          ]
        },
        {
          "lectureId": "ds-lec-14",
          "lectureNumber": 14,
          "title": "Deep Learning Complete Course | Part 3| RNN implementation.",
          "videoUrl": "https://www.youtube.com/embed/0Q4yhrkwn7c",
          "topics": [
            "Sequential & Time Series Data",
            "Recurrent Neural Networks",
            "Vanishing Gradients in Time",
            "LSTM & GRU Cells"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "ds-14-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "In Data Science, what is the core concept behind Sequential & Time Series Data?",
              "options": [
                "It serves as an essential methodology for Sequential & Time Series Data in data analysis and modeling workflows",
                "It is only used for graphic design",
                "It cannot handle numerical calculations",
                "It is an obsolete manual procedure"
              ],
              "correctAnswer": 0,
              "explanation": "Sequential & Time Series Data is an essential skill in modern data science."
            },
            {
              "id": "ds-14-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which statement accurately describes Recurrent Neural Networks?",
              "options": [
                "It provides mathematically sound processing for Recurrent Neural Networks",
                "It deletes data columns randomly",
                "It only functions without CPU power",
                "It creates permanent file errors"
              ],
              "correctAnswer": 0,
              "explanation": "Recurrent Neural Networks enables reliable data transformations and modeling."
            },
            {
              "id": "ds-14-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "Why is Vanishing Gradients in Time critical during model training and data evaluation?",
              "options": [
                "It controls bias-variance, handles high-dimensional structures, and ensures model generalization",
                "It guarantees execution without memory usage",
                "It replaces data cleaning entirely",
                "It converts Python scripts to HTML"
              ],
              "correctAnswer": 0,
              "explanation": "Vanishing Gradients in Time is vital for building robust predictive pipelines."
            },
            {
              "id": "ds-14-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What pitfall must a data scientist avoid when implementing LSTM & GRU Cells?",
              "options": [
                "Data leakage, unhandled missingness, and improper hyperparameter tuning",
                "Writing clean documentation",
                "Visualizing data distributions",
                "Using version control"
              ],
              "correctAnswer": 0,
              "explanation": "Rigorous methodology and validation safeguards prevent invalid inference."
            },
            {
              "id": "ds-14-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "In technical data science interviews, why is Deep Learning Complete Course | Part 3| RNN i frequently tested?",
              "options": [
                "It tests candidate ability to solve real-world industry data problems efficiently and correctly",
                "It is the only topic covered in academic papers",
                "It is required by GPU hardware manufacturers",
                "It cannot be coded in Python"
              ],
              "correctAnswer": 0,
              "explanation": "Industry applications demand strong foundational comprehension of algorithmic mechanics."
            }
          ],
          "codingQuestions": [
            {
              "id": "ds-14-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a Python function for Lecture 14 processing input for Sequential & Time Series Data.",
              "language": "python",
              "starterCode": "def process_data(data):\n    # Process data for Sequential & Time Series Data\n    return data",
              "expectedOutput": "Processed data",
              "solution": "def process_data(data):\n    return [x for x in data if x is not None]",
              "explanation": "Filters valid data entries."
            },
            {
              "id": "ds-14-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Implement a calculation function related to Recurrent Neural Networks.",
              "language": "python",
              "starterCode": "def calculate_stat(values):\n    # Compute summary metric\n    pass",
              "expectedOutput": "Summary metric",
              "solution": "def calculate_stat(values):\n    return sum(values) / len(values) if values else 0.0",
              "explanation": "Computes average summary statistic."
            },
            {
              "id": "ds-14-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Write an algorithmic implementation for Vanishing Gradients in Time.",
              "language": "python",
              "starterCode": "def transform_features(features):\n    # Transform features\n    pass",
              "expectedOutput": "Transformed features",
              "solution": "def transform_features(features):\n    min_v, max_v = min(features), max(features)\n    diff = max_v - min_v if max_v != min_v else 1.0\n    return [(x - min_v) / diff for x in features]",
              "explanation": "Scales features to standard [0, 1] range."
            },
            {
              "id": "ds-14-c-04",
              "type": "coding",
              "subType": "debugging",
              "difficulty": "medium",
              "question": "Fix bug in metric evaluation function: `def loss(y, y_hat): return sum(y - y_hat)`.",
              "language": "python",
              "starterCode": "def loss(y, y_hat):\n    # Fix error metric\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)",
              "expectedOutput": "MSE loss",
              "solution": "def loss(y, y_hat):\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)",
              "explanation": "Squared differences prevent cancellation of positive and negative errors."
            },
            {
              "id": "ds-14-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Implement an end-to-end evaluation pipeline function for LSTM & GRU Cells.",
              "language": "python",
              "starterCode": "def evaluate_predictions(y_true, y_pred):\n    # Return dict of metrics\n    pass",
              "expectedOutput": "Dict of metrics",
              "solution": "def evaluate_predictions(y_true, y_pred):\n    acc = sum(1 for yt, yp in zip(y_true, y_pred) if yt == yp) / len(y_true)\n    return {'accuracy': acc, 'total_samples': len(y_true)}",
              "explanation": "Computes accuracy and summary metrics."
            }
          ]
        },
        {
          "lectureId": "ds-lec-15",
          "lectureNumber": 15,
          "title": "Deep Learning Complete Course | Part 4 | Transformers & Attention Mechanism Completely Explained",
          "videoUrl": "https://www.youtube.com/embed/i2tlbIGyzKk",
          "topics": [
            "Attention Mechanism",
            "Self-Attention (Q, K, V)",
            "Multi-Head Attention",
            "Transformer Architecture"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "ds-15-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "In Data Science, what is the core concept behind Attention Mechanism?",
              "options": [
                "It serves as an essential methodology for Attention Mechanism in data analysis and modeling workflows",
                "It is only used for graphic design",
                "It cannot handle numerical calculations",
                "It is an obsolete manual procedure"
              ],
              "correctAnswer": 0,
              "explanation": "Attention Mechanism is an essential skill in modern data science."
            },
            {
              "id": "ds-15-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which statement accurately describes Self-Attention (Q, K, V)?",
              "options": [
                "It provides mathematically sound processing for Self-Attention (Q, K, V)",
                "It deletes data columns randomly",
                "It only functions without CPU power",
                "It creates permanent file errors"
              ],
              "correctAnswer": 0,
              "explanation": "Self-Attention (Q, K, V) enables reliable data transformations and modeling."
            },
            {
              "id": "ds-15-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "Why is Multi-Head Attention critical during model training and data evaluation?",
              "options": [
                "It controls bias-variance, handles high-dimensional structures, and ensures model generalization",
                "It guarantees execution without memory usage",
                "It replaces data cleaning entirely",
                "It converts Python scripts to HTML"
              ],
              "correctAnswer": 0,
              "explanation": "Multi-Head Attention is vital for building robust predictive pipelines."
            },
            {
              "id": "ds-15-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What pitfall must a data scientist avoid when implementing Transformer Architecture?",
              "options": [
                "Data leakage, unhandled missingness, and improper hyperparameter tuning",
                "Writing clean documentation",
                "Visualizing data distributions",
                "Using version control"
              ],
              "correctAnswer": 0,
              "explanation": "Rigorous methodology and validation safeguards prevent invalid inference."
            },
            {
              "id": "ds-15-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "In technical data science interviews, why is Deep Learning Complete Course | Part 4 | Tran frequently tested?",
              "options": [
                "It tests candidate ability to solve real-world industry data problems efficiently and correctly",
                "It is the only topic covered in academic papers",
                "It is required by GPU hardware manufacturers",
                "It cannot be coded in Python"
              ],
              "correctAnswer": 0,
              "explanation": "Industry applications demand strong foundational comprehension of algorithmic mechanics."
            }
          ],
          "codingQuestions": [
            {
              "id": "ds-15-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a Python function for Lecture 15 processing input for Attention Mechanism.",
              "language": "python",
              "starterCode": "def process_data(data):\n    # Process data for Attention Mechanism\n    return data",
              "expectedOutput": "Processed data",
              "solution": "def process_data(data):\n    return [x for x in data if x is not None]",
              "explanation": "Filters valid data entries."
            },
            {
              "id": "ds-15-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Implement a calculation function related to Self-Attention (Q, K, V).",
              "language": "python",
              "starterCode": "def calculate_stat(values):\n    # Compute summary metric\n    pass",
              "expectedOutput": "Summary metric",
              "solution": "def calculate_stat(values):\n    return sum(values) / len(values) if values else 0.0",
              "explanation": "Computes average summary statistic."
            },
            {
              "id": "ds-15-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Write an algorithmic implementation for Multi-Head Attention.",
              "language": "python",
              "starterCode": "def transform_features(features):\n    # Transform features\n    pass",
              "expectedOutput": "Transformed features",
              "solution": "def transform_features(features):\n    min_v, max_v = min(features), max(features)\n    diff = max_v - min_v if max_v != min_v else 1.0\n    return [(x - min_v) / diff for x in features]",
              "explanation": "Scales features to standard [0, 1] range."
            },
            {
              "id": "ds-15-c-04",
              "type": "coding",
              "subType": "debugging",
              "difficulty": "medium",
              "question": "Fix bug in metric evaluation function: `def loss(y, y_hat): return sum(y - y_hat)`.",
              "language": "python",
              "starterCode": "def loss(y, y_hat):\n    # Fix error metric\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)",
              "expectedOutput": "MSE loss",
              "solution": "def loss(y, y_hat):\n    return sum((a - b) ** 2 for a, b in zip(y, y_hat)) / len(y)",
              "explanation": "Squared differences prevent cancellation of positive and negative errors."
            },
            {
              "id": "ds-15-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Implement an end-to-end evaluation pipeline function for Transformer Architecture.",
              "language": "python",
              "starterCode": "def evaluate_predictions(y_true, y_pred):\n    # Return dict of metrics\n    pass",
              "expectedOutput": "Dict of metrics",
              "solution": "def evaluate_predictions(y_true, y_pred):\n    acc = sum(1 for yt, yp in zip(y_true, y_pred) if yt == yp) / len(y_true)\n    return {'accuracy': acc, 'total_samples': len(y_true)}",
              "explanation": "Computes accuracy and summary metrics."
            }
          ]
        }
      ]
    }
  ]
};
