import { Course } from '../types';

export const dataAnalyticsCourseData: Course = {
  "courseId": "course-data-analytics",
  "title": "Complete Data Analytics Playlist",
  "description": "Master end-to-end Data Analytics from Excel and SQL to Python, Pandas, Data Visualization, Statistics, and Power BI.",
  "category": "data-analytics",
  "company": "Sheryians AI School",
  "instructor": "Sheryians AI School",
  "thumbnail": "https://i.ytimg.com/vi/Zr0sNpeClV4/hqdefault.jpg",
  "difficulty": "Beginner",
  "duration": "35 hours",
  "durationHours": 35,
  "language": "Hindi",
  "certificateAvailable": true,
  "isFree": true,
  "isTrending": true,
  "rating": 4.9,
  "learners": "150k+",
  "skills": [
    "Excel",
    "SQL",
    "Python",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Seaborn",
    "Statistics",
    "PowerBI"
  ],
  "jobRoles": [
    "Data Analyst",
    "Business Analyst",
    "BI Developer"
  ],
  "source": {
    "type": "youtube_playlist",
    "playlistUrl": "https://youtube.com/playlist?list=PLaldQ9PzZd9pgZEBeIf0FYI4DEO1ibxPb&si=j3WQb-MTNH8hoMF3"
  },
  "modules": [
    {
      "moduleId": "da-mod-1",
      "title": "Module 1: Excel & SQL Fundamentals",
      "lectures": [
        {
          "lectureId": "da-lec-01",
          "lectureNumber": 1,
          "title": "Complete MS Excel course for Data Analyst | Job Oriented",
          "videoUrl": "https://www.youtube.com/embed/Zr0sNpeClV4",
          "topics": [
            "Excel Formulas (VLOOKUP, XLOOKUP, INDEX/MATCH)",
            "Pivot Tables & Pivot Charts",
            "Data Cleaning in Excel",
            "Conditional Formatting & Dashboards"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "da-01-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which Excel function has largely replaced VLOOKUP by supporting bidirectional lookups and default error handling?",
              "options": [
                "XLOOKUP",
                "HLOOKUP",
                "SUMIF",
                "CONCATENATE"
              ],
              "correctAnswer": 0,
              "explanation": "XLOOKUP works both left-to-right and right-to-left without column index numbers and handles missing values."
            },
            {
              "id": "da-01-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "What is the primary purpose of a Pivot Table in Excel?",
              "options": [
                "Summarize, aggregate, and analyze large datasets interactively",
                "Write VBA macros",
                "Protect workbooks with passwords",
                "Draw vector shapes"
              ],
              "correctAnswer": 0,
              "explanation": "Pivot tables allow slicing, grouping, and calculating aggregates like sum, average, and count across dimensions."
            },
            {
              "id": "da-01-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "Why is INDEX/MATCH combination preferred over traditional VLOOKUP in older Excel sheets?",
              "options": [
                "It doesn't break when columns are inserted or reordered and looks up to the left",
                "It runs faster on CPUs",
                "It uses less disk space",
                "It translates languages"
              ],
              "correctAnswer": 0,
              "explanation": "MATCH finds dynamic row index and INDEX retrieves value from target array without fixed column offsets."
            },
            {
              "id": "da-01-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What does the Excel formula `=COUNTIF(A2:A100, \">50\")` do?",
              "options": [
                "Counts cells in range A2:A100 containing numerical values strictly greater than 50",
                "Sums values greater than 50",
                "Multiplies cells by 50",
                "Deletes numbers less than 50"
              ],
              "correctAnswer": 0,
              "explanation": "COUNTIF applies criteria condition and counts matching occurrences."
            },
            {
              "id": "da-01-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "In Excel Power Query, what does 'Unpivot Columns' accomplish?",
              "options": [
                "Transforms wide crosstab columns into tabular attribute-value rows suitable for analysis",
                "Reverses text alphabetically",
                "Deletes duplicate rows",
                "Exports data to PDF"
              ],
              "correctAnswer": 0,
              "explanation": "Unpivoting normalizes wide format reports into normalized long records ideal for database queries and BI tools."
            }
          ],
          "codingQuestions": [
            {
              "id": "da-01-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a Python function `excel_vlookup(table, lookup_val, col_index)` mimicking VLOOKUP where table is a list of rows.",
              "language": "python",
              "starterCode": "def excel_vlookup(table, lookup_val, col_index):\n    # Return matched cell value or None\n    pass",
              "expectedOutput": "Cell value",
              "solution": "def excel_vlookup(table, lookup_val, col_index):\n    for row in table:\n        if row[0] == lookup_val:\n            return row[col_index]\n    return None",
              "explanation": "Scans first column for lookup_val and returns item at col_index."
            },
            {
              "id": "da-01-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write `excel_sumif(values, criteria_val)` returning sum of values equal to `criteria_val`.",
              "language": "python",
              "starterCode": "def excel_sumif(values, criteria_val):\n    # Return sum\n    pass",
              "expectedOutput": "Numerical sum",
              "solution": "def excel_sumif(values, criteria_val):\n    return sum(x for x in values if x == criteria_val)",
              "explanation": "Filters values matching criteria and computes sum."
            },
            {
              "id": "da-01-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Write a function `pivot_count(records, category_key)` returning a dictionary of category counts.",
              "language": "python",
              "starterCode": "def pivot_count(records, category_key):\n    # Return dict {category: count}\n    pass",
              "expectedOutput": "Dict of counts",
              "solution": "from collections import Counter\n\ndef pivot_count(records, category_key):\n    return dict(Counter(r[category_key] for r in records if category_key in r))",
              "explanation": "Groups and counts occurrences of each categorical value."
            },
            {
              "id": "da-01-c-04",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "medium",
              "question": "Write `clean_currency_strings(values)` that converts strings like `['$1,200', '$450.50']` into floats.",
              "language": "python",
              "starterCode": "def clean_currency_strings(values):\n    # Return list of floats\n    pass",
              "expectedOutput": "List of floats",
              "solution": "def clean_currency_strings(values):\n    return [float(v.replace('$', '').replace(',', '').strip()) for v in values]",
              "explanation": "Strips dollar signs and commas, casting to float."
            },
            {
              "id": "da-01-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Write `calculate_cagr(start_val, end_val, years)` returning Compound Annual Growth Rate `(end/start)**(1/years) - 1`.",
              "language": "python",
              "starterCode": "def calculate_cagr(start_val, end_val, years):\n    # Return CAGR float\n    pass",
              "expectedOutput": "Float percentage",
              "solution": "def calculate_cagr(start_val, end_val, years):\n    if start_val <= 0 or years <= 0:\n        return 0.0\n    return (end_val / start_val) ** (1.0 / years) - 1.0",
              "explanation": "Standard financial CAGR formula."
            }
          ]
        },
        {
          "lectureId": "da-lec-02",
          "lectureNumber": 2,
          "title": "Complete SQL in 1 shot for Data analytics in 2025",
          "videoUrl": "https://www.youtube.com/embed/p1epCuYb5OQ",
          "topics": [
            "SELECT, WHERE, ORDER BY, GROUP BY, HAVING",
            "SQL JOINs (INNER, LEFT, RIGHT, FULL)",
            "Aggregate Functions & Subqueries",
            "Window Functions (ROW_NUMBER, RANK, DENSE_RANK, LAG/LEAD)"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "da-02-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "What is the key difference between WHERE and HAVING clauses in SQL?",
              "options": [
                "WHERE filters rows before aggregation; HAVING filters aggregated groups after GROUP BY",
                "WHERE is only for numbers; HAVING is for strings",
                "HAVING cannot use comparison operators",
                "WHERE is optional but HAVING is mandatory"
              ],
              "correctAnswer": 0,
              "explanation": "WHERE operates on individual records before grouping; HAVING filters the grouped results using aggregate functions."
            },
            {
              "id": "da-02-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which SQL JOIN returns all records from the left table, and matched records from the right table?",
              "options": [
                "LEFT JOIN",
                "INNER JOIN",
                "CROSS JOIN",
                "RIGHT JOIN"
              ],
              "correctAnswer": 0,
              "explanation": "LEFT JOIN preserves every row from the left table and populates NULLs where no right table match exists."
            },
            {
              "id": "da-02-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What is the difference between RANK() and DENSE_RANK() window functions?",
              "options": [
                "RANK() leaves gaps in ranking order after ties (1, 2, 2, 4); DENSE_RANK() does not leave gaps (1, 2, 2, 3)",
                "DENSE_RANK() only works on unique keys",
                "RANK() sorts ascending only",
                "DENSE_RANK() deletes duplicate rows"
              ],
              "correctAnswer": 0,
              "explanation": "RANK skips ranks following tied values; DENSE_RANK increments consecutively without gaps."
            },
            {
              "id": "da-02-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What does the SQL window function `LAG(column, 1)` return?",
              "options": [
                "The value from the previous row within the partition/ordering window",
                "The average of all rows",
                "The last row of the entire table",
                "The time delay of the query"
              ],
              "correctAnswer": 0,
              "explanation": "LAG accesses data from a preceding row at a specified physical offset without a self-join."
            },
            {
              "id": "da-02-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "What is a Common Table Expression (CTE) defined with `WITH` keyword?",
              "options": [
                "A temporary named result set accessible within the scope of a single SELECT, INSERT, UPDATE, or DELETE statement",
                "A permanent physical table stored in database disk",
                "A foreign key constraint",
                "A stored procedure that sends emails"
              ],
              "correctAnswer": 0,
              "explanation": "CTEs simplify complex queries by modularizing subqueries into readable named blocks."
            }
          ],
          "codingQuestions": [
            {
              "id": "da-02-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write an SQL query to select `name` and `salary` from table `employees` where `salary > 50000` ordered by `salary` descending.",
              "language": "sql",
              "starterCode": "-- Write SQL query\n",
              "expectedOutput": "SELECT name, salary FROM employees WHERE salary > 50000 ORDER BY salary DESC;",
              "solution": "SELECT name, salary FROM employees WHERE salary > 50000 ORDER BY salary DESC;",
              "explanation": "Uses WHERE for filtering and ORDER BY DESC for sorting."
            },
            {
              "id": "da-02-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "medium",
              "question": "Write an SQL query to find average salary per `department_id` having average salary > 60000.",
              "language": "sql",
              "starterCode": "-- Write GROUP BY and HAVING query\n",
              "expectedOutput": "SELECT department_id, AVG(salary) FROM employees GROUP BY department_id HAVING AVG(salary) > 60000;",
              "solution": "SELECT department_id, AVG(salary) AS avg_sal FROM employees GROUP BY department_id HAVING AVG(salary) > 60000;",
              "explanation": "Aggregates with GROUP BY and filters groups using HAVING."
            },
            {
              "id": "da-02-c-03",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "medium",
              "question": "Write an SQL query performing an INNER JOIN between `customers c` and `orders o` on `c.id = o.customer_id`.",
              "language": "sql",
              "starterCode": "-- Write JOIN query\n",
              "expectedOutput": "SELECT c.name, o.order_id, o.amount FROM customers c INNER JOIN orders o ON c.id = o.customer_id;",
              "solution": "SELECT c.name, o.order_id, o.amount FROM customers c INNER JOIN orders o ON c.id = o.customer_id;",
              "explanation": "Matches customer records with order records on customer_id."
            },
            {
              "id": "da-02-c-04",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Write an SQL query using `DENSE_RANK()` to find the 2nd highest salary from `employees`.",
              "language": "sql",
              "starterCode": "-- Write window function query\n",
              "expectedOutput": "CTE or subquery with DENSE_RANK() = 2",
              "solution": "WITH RankedSalaries AS (\n  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rnk\n  FROM employees\n)\nSELECT DISTINCT salary FROM RankedSalaries WHERE rnk = 2;",
              "explanation": "DENSE_RANK assigns rank 2 to the second highest distinct salary."
            },
            {
              "id": "da-02-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Write an SQL query calculating month-over-month revenue growth using `LAG()` window function.",
              "language": "sql",
              "starterCode": "-- Calculate MoM revenue change\n",
              "expectedOutput": "revenue - LAG(revenue) OVER (ORDER BY month)",
              "solution": "SELECT month, revenue, revenue - LAG(revenue, 1) OVER (ORDER BY month) AS mom_growth FROM monthly_sales;",
              "explanation": "LAG(revenue, 1) subtracts prior month revenue from current month."
            }
          ]
        }
      ]
    },
    {
      "moduleId": "da-mod-2",
      "title": "Module 2: Python, NumPy & Pandas for Data Analysis",
      "lectures": [
        {
          "lectureId": "da-lec-03",
          "lectureNumber": 3,
          "title": "Python Full Course for Beginners to Advanced | 12 Hours Complete Tutorial",
          "videoUrl": "https://www.youtube.com/embed/_aWbUudZ5Yo",
          "topics": [
            "Python Data Structures (Lists, Tuples, Dictionaries, Sets)",
            "List Comprehensions & Lambdas",
            "Functions, Args & Kwargs",
            "Exception Handling & File I/O"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "da-03-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "What is the primary difference between a Python List and a Python Tuple?",
              "options": [
                "Lists are mutable (can be modified); Tuples are immutable (cannot be changed after creation)",
                "Tuples can only store numbers",
                "Lists have fixed length",
                "Tuples cannot be indexed"
              ],
              "correctAnswer": 0,
              "explanation": "Lists can be updated in-place via append/pop/assignment; tuples are immutable sequences."
            },
            {
              "id": "da-03-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "What is the time complexity of searching for a key in a Python dictionary on average?",
              "options": [
                "O(1) constant time",
                "O(N) linear time",
                "O(log N)",
                "O(N^2)"
              ],
              "correctAnswer": 0,
              "explanation": "Python dictionaries use hash tables, providing average O(1) key lookup."
            },
            {
              "id": "da-03-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What does the `*args` syntax in a Python function definition allow?",
              "options": [
                "Passing a variable number of non-keyword positional arguments as a tuple",
                "Pointers in memory",
                "Multiplication of function returns",
                "Mandatory keyword arguments"
              ],
              "correctAnswer": 0,
              "explanation": "*args packs arbitrary positional parameters into a tuple inside the function."
            },
            {
              "id": "da-03-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What is a Python Generator function and how does it differ from a standard function?",
              "options": [
                "It uses `yield` to return values lazily one at a time, conserving memory for large sequences",
                "It generates random numbers automatically",
                "It compiles code to C",
                "It cannot be called in loops"
              ],
              "correctAnswer": 0,
              "explanation": "Generators pause execution state at yield, producing items on demand without loading whole datasets into RAM."
            },
            {
              "id": "da-03-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "What is the purpose of Python's Global Interpreter Lock (GIL)?",
              "options": [
                "It prevents multiple native threads from executing Python bytecodes simultaneously in CPython",
                "It locks files on disk during writing",
                "It encrypts variable values",
                "It speeds up numpy operations"
              ],
              "correctAnswer": 0,
              "explanation": "GIL ensures thread safety for CPython memory management by serializing bytecode execution."
            }
          ],
          "codingQuestions": [
            {
              "id": "da-03-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a list comprehension that squares all even numbers in a list `nums = [1, 2, 3, 4, 5, 6]`.",
              "language": "python",
              "starterCode": "def square_evens(nums):\n    # Return list of squared even numbers\n    pass",
              "expectedOutput": "[4, 16, 36]",
              "solution": "def square_evens(nums):\n    return [x ** 2 for x in nums if x % 2 == 0]",
              "explanation": "List comprehension filters with `if x % 2 == 0` and squares."
            },
            {
              "id": "da-03-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a function `merge_dicts(dict1, dict2)` that returns a merged dictionary.",
              "language": "python",
              "starterCode": "def merge_dicts(dict1, dict2):\n    # Return merged dict\n    pass",
              "expectedOutput": "Combined dictionary",
              "solution": "def merge_dicts(dict1, dict2):\n    return {**dict1, **dict2}",
              "explanation": "Dictionary unpacking `{**d1, **d2}` combines dictionaries with right precedence."
            },
            {
              "id": "da-03-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Write a function `top_k_frequent(words, k)` returning the k most common words.",
              "language": "python",
              "starterCode": "from collections import Counter\n\ndef top_k_frequent(words, k):\n    # Return list of top k words\n    pass",
              "expectedOutput": "List of k words",
              "solution": "from collections import Counter\n\ndef top_k_frequent(words, k):\n    return [item[0] for item in Counter(words).most_common(k)]",
              "explanation": "Counter.most_common(k) extracts the top k frequent elements."
            },
            {
              "id": "da-03-c-04",
              "type": "coding",
              "subType": "debugging",
              "difficulty": "medium",
              "question": "Fix the mutable default parameter bug: `def append_to(element, target=[]): target.append(element); return target`.",
              "language": "python",
              "starterCode": "def append_to(element, target=None):\n    # Fix mutable default\n    pass",
              "expectedOutput": "Independent lists per call",
              "solution": "def append_to(element, target=None):\n    if target is None:\n        target = []\n    target.append(element)\n    return target",
              "explanation": "Default parameters are evaluated once at definition; using None avoids shared state across calls."
            },
            {
              "id": "da-03-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Write a generator function `fibonacci_gen(n)` yielding the first n Fibonacci numbers.",
              "language": "python",
              "starterCode": "def fibonacci_gen(n):\n    # Yield n fibonacci numbers\n    pass",
              "expectedOutput": "Generator object",
              "solution": "def fibonacci_gen(n):\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b",
              "explanation": "Yield produces values sequentially without holding the full list in memory."
            }
          ]
        },
        {
          "lectureId": "da-lec-04",
          "lectureNumber": 4,
          "title": "Complete Data Science Course for Beginners | NumPy",
          "videoUrl": "https://www.youtube.com/embed/Utgwk0r9Zq4",
          "topics": [
            "NumPy Ndarray Creation & Indexing",
            "Broadcasting Rules in NumPy",
            "Vectorized Array Math & Slicing",
            "Linear Algebra with np.linalg"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "da-04-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Why are NumPy arrays vastly faster than standard Python lists for numerical operations?",
              "options": [
                "NumPy arrays store homogeneous types in contiguous C-memory blocks with SIMD vectorization",
                "NumPy runs in the cloud",
                "NumPy deletes unnecessary data",
                "Python lists cannot store numbers"
              ],
              "correctAnswer": 0,
              "explanation": "Contiguous typed memory eliminates Python object pointer overhead and leverages CPU vector instructions."
            },
            {
              "id": "da-04-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "What is 'Broadcasting' in NumPy?",
              "options": [
                "How NumPy treats arrays with different shapes during arithmetic operations without making unnecessary copies",
                "Streaming audio data through Python",
                "Sending array data over a network",
                "Printing arrays to multiple monitors"
              ],
              "correctAnswer": 0,
              "explanation": "Broadcasting automatically stretches compatible dimensions (size 1 or matching) to execute element-wise operations."
            },
            {
              "id": "da-04-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What does the attribute `arr.shape` return for a NumPy array?",
              "options": [
                "A tuple of integers representing the size of each dimension of the array",
                "The geometric shape (circle, rectangle)",
                "The byte size in memory",
                "The data type of elements"
              ],
              "correctAnswer": 0,
              "explanation": "shape returns tuple (dim_0, dim_1, ...) showing array dimensions."
            },
            {
              "id": "da-04-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What is the difference between a view and a copy when slicing a NumPy array `sub = arr[1:5]`?",
              "options": [
                "Standard slices create views sharing underlying memory; modifying `sub` mutates the original `arr`",
                "Slices always make deep independent copies",
                "Views only work on 1D arrays",
                "Copies are created automatically by default"
              ],
              "correctAnswer": 0,
              "explanation": "Basic slicing produces a view to avoid memory allocation; `arr.copy()` must be explicitly called for independent copies."
            },
            {
              "id": "da-04-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "Which function performs matrix multiplication in NumPy between 2D arrays A and B?",
              "options": [
                "np.dot(A, B) or A @ B",
                "A * B",
                "np.multiply(A, B)",
                "A.cross(B)"
              ],
              "correctAnswer": 0,
              "explanation": "The `@` operator or `np.dot` / `np.matmul` performs matrix product; `*` computes element-wise multiplication."
            }
          ],
          "codingQuestions": [
            {
              "id": "da-04-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a function `create_range_matrix(n)` that returns an n x n NumPy array containing numbers 0 to n*n-1.",
              "language": "python",
              "starterCode": "import numpy as np\n\ndef create_range_matrix(n):\n    # Return n x n reshaped array\n    pass",
              "expectedOutput": "n x n array",
              "solution": "import numpy as np\n\ndef create_range_matrix(n):\n    return np.arange(n * n).reshape((n, n))",
              "explanation": "np.arange creates 1D range and reshape transforms into 2D."
            },
            {
              "id": "da-04-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write `filter_greater_than(arr, threshold)` returning 1D array of elements exceeding threshold using boolean indexing.",
              "language": "python",
              "starterCode": "import numpy as np\n\ndef filter_greater_than(arr, threshold):\n    # Boolean mask\n    pass",
              "expectedOutput": "Filtered 1D array",
              "solution": "import numpy as np\n\ndef filter_greater_than(arr, threshold):\n    return arr[arr > threshold]",
              "explanation": "arr > threshold creates boolean mask extracting matching elements."
            },
            {
              "id": "da-04-c-03",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "medium",
              "question": "Implement `normalize_columns(matrix)` that subtracts column mean and divides by column std in NumPy.",
              "language": "python",
              "starterCode": "import numpy as np\n\ndef normalize_columns(matrix):\n    # Normalize along axis=0\n    pass",
              "expectedOutput": "Normalized array",
              "solution": "import numpy as np\n\ndef normalize_columns(matrix):\n    mean = np.mean(matrix, axis=0)\n    std = np.std(matrix, axis=0)\n    std[std == 0] = 1.0\n    return (matrix - mean) / std",
              "explanation": "Broadcasting performs column-wise normalization across axis 0."
            },
            {
              "id": "da-04-c-04",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Write `matrix_multiply(A, B)` using the `@` operator in NumPy.",
              "language": "python",
              "starterCode": "import numpy as np\n\ndef matrix_multiply(A, B):\n    # Return matrix product\n    pass",
              "expectedOutput": "Result matrix",
              "solution": "import numpy as np\n\ndef matrix_multiply(A, B):\n    return A @ B",
              "explanation": "The `@` operator computes matrix product."
            },
            {
              "id": "da-04-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Implement pairwise Euclidean distance matrix between two sets of vectors X and Y in NumPy without explicit for loops.",
              "language": "python",
              "starterCode": "import numpy as np\n\ndef pairwise_distances(X, Y):\n    # X: (N, D), Y: (M, D) -> Return (N, M)\n    pass",
              "expectedOutput": "(N, M) distance matrix",
              "solution": "import numpy as np\n\ndef pairwise_distances(X, Y):\n    return np.sqrt(np.sum((X[:, np.newaxis, :] - Y[np.newaxis, :, :]) ** 2, axis=-1))",
              "explanation": "Broadcasting with np.newaxis evaluates all pairwise differences vectorially."
            }
          ]
        },
        {
          "lectureId": "da-lec-05",
          "lectureNumber": 5,
          "title": "Complete Data Science Course for Beginners| Pandas Library",
          "videoUrl": "https://www.youtube.com/embed/QUaSmqBeR9w",
          "topics": [
            "Series & DataFrame Architecture",
            "Data Cleaning, Handling Missing Values & Duplicates",
            "Filtering, Loc & Iloc Indexing",
            "GroupBy, Merge & Reshaping Data"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "da-05-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "What is the key difference between `.loc[]` and `.iloc[]` in Pandas?",
              "options": [
                "`.loc` indexes by label names; `.iloc` indexes by integer position indices",
                "`.loc` is for rows only; `.iloc` is for columns only",
                "`.iloc` cannot access series",
                "There is no difference"
              ],
              "correctAnswer": 0,
              "explanation": "loc uses row/column labels (including string names); iloc uses integer 0-indexed positions."
            },
            {
              "id": "da-05-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which Pandas method drops rows containing missing NaN values?",
              "options": [
                "df.dropna()",
                "df.fillna()",
                "df.isna()",
                "df.clean()"
              ],
              "correctAnswer": 0,
              "explanation": "dropna() removes rows (or columns with axis=1) containing null values."
            },
            {
              "id": "da-05-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What does the `df.groupby('category').agg({'revenue': 'sum', 'units': 'mean'})` operation do?",
              "options": [
                "Groups records by category, calculating total sum of revenue and average units per group",
                "Deletes duplicate category rows",
                "Sorts the dataset by category",
                "Exports data to Excel"
              ],
              "correctAnswer": 0,
              "explanation": "agg allows applying different aggregation functions to distinct columns per group."
            },
            {
              "id": "da-05-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What does `df.merge(df2, on='id', how='left')` do in Pandas?",
              "options": [
                "Performs a SQL-style LEFT JOIN combining columns where `id` matches",
                "Appends rows of df2 to bottom of df",
                "Deletes overlapping records",
                "Exports merged tables to CSV"
              ],
              "correctAnswer": 0,
              "explanation": "merge performs relational joins (left, right, inner, outer) on designated key columns."
            },
            {
              "id": "da-05-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "What is the difference between `apply()` and vectorized column operations in Pandas?",
              "options": [
                "Vectorized operations run in compiled C/NumPy code, while `apply()` iterates with Python function call overhead and is much slower",
                "`apply()` is always faster than vectorization",
                "Vectorized operations only work on integers",
                "apply cannot take lambda functions"
              ],
              "correctAnswer": 0,
              "explanation": "Direct vectorized expressions (df['a'] + df['b']) leverage optimized C loops; apply executes Python bytecode per row."
            }
          ],
          "codingQuestions": [
            {
              "id": "da-05-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a function `filter_sales(df, min_amount)` returning rows where `df['amount'] >= min_amount`.",
              "language": "python",
              "starterCode": "import pandas as pd\n\ndef filter_sales(df, min_amount):\n    # Return filtered DataFrame\n    pass",
              "expectedOutput": "Filtered DataFrame",
              "solution": "import pandas as pd\n\ndef filter_sales(df, min_amount):\n    return df[df['amount'] >= min_amount]",
              "explanation": "Boolean filtering on DataFrame column."
            },
            {
              "id": "da-05-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write `fill_missing_mean(df, column_name)` filling NaN values in the specified column with its mean.",
              "language": "python",
              "starterCode": "import pandas as pd\n\ndef fill_missing_mean(df, col):\n    # Impute NaNs with mean\n    pass",
              "expectedOutput": "DataFrame with imputed values",
              "solution": "import pandas as pd\n\ndef fill_missing_mean(df, col):\n    df_copy = df.copy()\n    df_copy[col] = df_copy[col].fillna(df_copy[col].mean())\n    return df_copy",
              "explanation": "fillna with mean replaces nulls."
            },
            {
              "id": "da-05-c-03",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "medium",
              "question": "Write `group_total_revenue(df)` that groups by `'region'` and computes sum of `'revenue'` sorted descending.",
              "language": "python",
              "starterCode": "import pandas as pd\n\ndef group_total_revenue(df):\n    # Return Series or DataFrame\n    pass",
              "expectedOutput": "Aggregated results",
              "solution": "import pandas as pd\n\ndef group_total_revenue(df):\n    return df.groupby('region')['revenue'].sum().sort_values(ascending=False)",
              "explanation": "Groups by region and aggregates sum sorted descending."
            },
            {
              "id": "da-05-c-04",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Write `create_age_group(df)` adding a column `'age_group'` ('Child' for age < 18, 'Adult' for 18-65, 'Senior' for > 65).",
              "language": "python",
              "starterCode": "import pandas as pd\n\ndef create_age_group(df):\n    # Add age_group column\n    pass",
              "expectedOutput": "Modified DataFrame",
              "solution": "import pandas as pd\n\ndef create_age_group(df):\n    df_copy = df.copy()\n    bins = [-float('inf'), 17, 65, float('inf')]\n    labels = ['Child', 'Adult', 'Senior']\n    df_copy['age_group'] = pd.cut(df_copy['age'], bins=bins, labels=labels)\n    return df_copy",
              "explanation": "pd.cut discretizes continuous age into categorized intervals."
            },
            {
              "id": "da-05-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Write `pivot_sales_matrix(df)` returning pivot table with index='date', columns='product', values='sales', fill_value=0.",
              "language": "python",
              "starterCode": "import pandas as pd\n\ndef pivot_sales_matrix(df):\n    # Return pivot table\n    pass",
              "expectedOutput": "Pivot table DataFrame",
              "solution": "import pandas as pd\n\ndef pivot_sales_matrix(df):\n    return df.pivot_table(index='date', columns='product', values='sales', aggfunc='sum', fill_value=0)",
              "explanation": "pivot_table reshapes rows into cross-tabulated matrix."
            }
          ]
        }
      ]
    },
    {
      "moduleId": "da-mod-3",
      "title": "Module 3: Visualization, Statistics & Power BI",
      "lectures": [
        {
          "lectureId": "da-lec-06",
          "lectureNumber": 6,
          "title": "Complete Data Visualization Course for Beginners | Matplotlib & Seaborn",
          "videoUrl": "https://www.youtube.com/embed/-jTD74eEy2I",
          "topics": [
            "Line, Bar, Scatter & Histogram Plots",
            "Subplots & Figure Customization",
            "Seaborn Statistical Plots (Boxplot, Heatmap, Violinplot)",
            "Color Palettes & Styling"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "da-06-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "What plot type is most suitable for visualizing the distribution and spread of continuous numerical data?",
              "options": [
                "Histogram / KDE plot",
                "Pie chart",
                "Network graph",
                "Stacked column plot"
              ],
              "correctAnswer": 0,
              "explanation": "Histograms bucket continuous values to reveal skewness, modes, and dispersion."
            },
            {
              "id": "da-06-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "What does a Box Plot (Box-and-Whisker) represent?",
              "options": [
                "Five-number summary: minimum, Q1 (25th percentile), median (50th), Q3 (75th percentile), and maximum/outliers",
                "Color histograms",
                "Three-dimensional surfaces",
                "Pie slices of percentages"
              ],
              "correctAnswer": 0,
              "explanation": "Box plots summarize quartiles and identify outliers beyond 1.5 * IQR."
            },
            {
              "id": "da-06-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What visualization is best for displaying the pairwise correlation matrix of multiple numerical features?",
              "options": [
                "Seaborn Heatmap with annotated values",
                "Line chart",
                "Donut chart",
                "Radar chart"
              ],
              "correctAnswer": 0,
              "explanation": "Heatmaps map correlation coefficients to a color spectrum with numerical annotations."
            },
            {
              "id": "da-06-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "In Matplotlib, what does `plt.subplots(nrows, ncols)` return?",
              "options": [
                "A tuple containing the Figure object and an Axes array",
                "A single image file",
                "A Pandas dataframe",
                "A database connection"
              ],
              "correctAnswer": 0,
              "explanation": "fig, axes = plt.subplots(...) returns the canvas figure and individual plot axes."
            },
            {
              "id": "da-06-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "Why should pie charts with more than 5 categories generally be avoided in professional data dashboards?",
              "options": [
                "Human perception struggles to accurately compare angles and slice areas compared to length in bar charts",
                "Pie charts cannot be exported to image formats",
                "Computers cannot render circles accurately",
                "Pie charts take too much RAM"
              ],
              "correctAnswer": 0,
              "explanation": "Visual angle and area estimation is cognitively harder than judging aligned lengths in horizontal/vertical bar charts."
            }
          ],
          "codingQuestions": [
            {
              "id": "da-06-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write code returning a list of outlier indices for list `data` exceeding 3 standard deviations from mean.",
              "language": "python",
              "starterCode": "import math\n\ndef find_zscore_outliers(data, threshold=3.0):\n    # Return list of indices\n    pass",
              "expectedOutput": "List of integer indices",
              "solution": "import math\n\ndef find_zscore_outliers(data, threshold=3.0):\n    n = len(data)\n    mean = sum(data) / n\n    std = math.sqrt(sum((x - mean) ** 2 for x in data) / n)\n    if std == 0:\n        return []\n    return [i for i, x in enumerate(data) if abs(x - mean) / std > threshold]",
              "explanation": "Identifies points where absolute z-score exceeds 3.0."
            },
            {
              "id": "da-06-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a function `calculate_iqr(values)` returning the Interquartile Range (Q3 - Q1).",
              "language": "python",
              "starterCode": "def calculate_iqr(values):\n    # Return IQR float\n    pass",
              "expectedOutput": "IQR float",
              "solution": "def calculate_iqr(values):\n    s = sorted(values)\n    n = len(s)\n    q1 = s[n // 4]\n    q3 = s[(3 * n) // 4]\n    return q3 - q1",
              "explanation": "Computes difference between 75th and 25th percentiles."
            },
            {
              "id": "da-06-c-03",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "medium",
              "question": "Write `histogram_bins(data, num_bins)` returning bin edges and count in each bin.",
              "language": "python",
              "starterCode": "def histogram_bins(data, num_bins):\n    # Return (bin_edges, counts)\n    pass",
              "expectedOutput": "Tuple of lists",
              "solution": "def histogram_bins(data, num_bins):\n    min_v, max_v = min(data), max(data)\n    step = (max_v - min_v) / num_bins if max_v != min_v else 1.0\n    edges = [min_v + i * step for i in range(num_bins + 1)]\n    counts = [0] * num_bins\n    for x in data:\n        idx = min(int((x - min_v) / step), num_bins - 1)\n        counts[idx] += 1\n    return edges, counts",
              "explanation": "Calculates bin boundaries and tallies counts per bucket."
            },
            {
              "id": "da-06-c-04",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Write a function `pearson_correlation(x, y)` computing linear correlation between two numeric lists.",
              "language": "python",
              "starterCode": "import math\n\ndef pearson_correlation(x, y):\n    # Return float in [-1, 1]\n    pass",
              "expectedOutput": "Correlation coefficient",
              "solution": "import math\n\ndef pearson_correlation(x, y):\n    n = len(x)\n    mx = sum(x) / n\n    my = sum(y) / n\n    num = sum((xi - mx) * (yi - my) for xi, yi in zip(x, y))\n    den = math.sqrt(sum((xi - mx) ** 2 for xi in x) * sum((yi - my) ** 2 for yi in y))\n    return num / den if den != 0 else 0.0",
              "explanation": "Covariance divided by product of standard deviations."
            },
            {
              "id": "da-06-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Write `correlation_matrix_dict(dataframe_dict)` computing pairwise Pearson correlation between all numeric column lists in a dict.",
              "language": "python",
              "starterCode": "def correlation_matrix_dict(df_dict):\n    # df_dict: {'colA': [..], 'colB': [..]}\n    pass",
              "expectedOutput": "Dict of dicts with correlations",
              "solution": "import math\n\ndef correlation_matrix_dict(df_dict):\n    def corr(x, y):\n        n = len(x)\n        mx, my = sum(x) / n, sum(y) / n\n        num = sum((a - mx) * (b - my) for a, b in zip(x, y))\n        den = math.sqrt(sum((a - mx) ** 2 for a in x) * sum((b - my) ** 2 for b in y))\n        return num / den if den != 0 else 0.0\n    keys = list(df_dict.keys())\n    res = {}\n    for k1 in keys:\n        res[k1] = {k2: corr(df_dict[k1], df_dict[k2]) for k2 in keys}\n    return res",
              "explanation": "Computes full correlation matrix across all feature pairs."
            }
          ]
        },
        {
          "lectureId": "da-lec-07",
          "lectureNumber": 7,
          "title": "Complete Statistics Course for Beginners | Data Science Tutorial",
          "videoUrl": "https://www.youtube.com/embed/eF7HoC-cLRM",
          "topics": [
            "Descriptive Statistics (Mean, Median, Mode, Variance, Std)",
            "Probability Distributions (Normal, Binomial, Poisson)",
            "Hypothesis Testing, P-values & Null Hypothesis",
            "A/B Testing & Confidence Intervals"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "da-07-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "What is a p-value in statistical hypothesis testing?",
              "options": [
                "The probability of observing results at least as extreme as the actual data, assuming the null hypothesis is true",
                "The probability that the alternative hypothesis is false",
                "The accuracy rate of the machine learning model",
                "The sample size percentage"
              ],
              "correctAnswer": 0,
              "explanation": "If p-value < significance level alpha (e.g. 0.05), we reject the null hypothesis in favor of the alternative."
            },
            {
              "id": "da-07-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "What is the Central Limit Theorem (CLT)?",
              "options": [
                "The distribution of sample means approaches a normal distribution as sample size N grows large, regardless of the population distribution shape",
                "All datasets must be normally distributed",
                "Mean equals median in every dataset",
                "A computer network theorem"
              ],
              "correctAnswer": 0,
              "explanation": "CLT enables inferential statistics and confidence intervals by establishing normality of sample means."
            },
            {
              "id": "da-07-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What is the difference between a Type I Error and a Type II Error?",
              "options": [
                "Type I is a False Positive (rejecting a true null hypothesis); Type II is a False Negative (failing to reject a false null hypothesis)",
                "Type I is a syntax error; Type II is a runtime error",
                "Type I only happens in large datasets",
                "Type II is always zero in A/B testing"
              ],
              "correctAnswer": 0,
              "explanation": "Type I (alpha) is convicting an innocent null; Type II (beta) is acquitting a guilty null."
            },
            {
              "id": "da-07-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "When a distribution is heavily right-skewed (positively skewed), what is the relationship between mean, median, and mode?",
              "options": [
                "Mean > Median > Mode",
                "Mode > Median > Mean",
                "Mean = Median = Mode",
                "Median > Mean > Mode"
              ],
              "correctAnswer": 0,
              "explanation": "Extreme large values pull the arithmetic mean to the right, followed by the median, while mode remains at peak."
            },
            {
              "id": "da-07-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "What does a 95% Confidence Interval for a population mean mean?",
              "options": [
                "If we repeat sampling many times, 95% of the calculated intervals will contain the true population mean",
                "There is a 95% probability that the specific interval contains every sample point",
                "The data is 95% clean",
                "Only 5% of data is erroneous"
              ],
              "correctAnswer": 0,
              "explanation": "Confidence intervals are frequentist properties reflecting the long-run capture rate of the estimation procedure."
            }
          ],
          "codingQuestions": [
            {
              "id": "da-07-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write `sample_variance(data)` calculating sample variance with Bessel's correction (n - 1 denominator).",
              "language": "python",
              "starterCode": "def sample_variance(data):\n    # Return sample variance float\n    pass",
              "expectedOutput": "Variance float",
              "solution": "def sample_variance(data):\n    n = len(data)\n    if n <= 1:\n        return 0.0\n    mean = sum(data) / n\n    return sum((x - mean) ** 2 for x in data) / (n - 1)",
              "explanation": "Divides sum of squared deviations by n-1 for unbiased sample variance."
            },
            {
              "id": "da-07-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write `z_score(val, mean, std)` returning standardized z-score.",
              "language": "python",
              "starterCode": "def z_score(val, mean, std):\n    # Return z-score\n    pass",
              "expectedOutput": "Float z-score",
              "solution": "def z_score(val, mean, std):\n    return (val - mean) / std if std != 0 else 0.0",
              "explanation": "(val - mean) / std."
            },
            {
              "id": "da-07-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Write a function `two_sample_t_statistic(x1, x2)` calculating two-sample t-statistic assuming equal variance.",
              "language": "python",
              "starterCode": "import math\n\ndef two_sample_t_statistic(x1, x2):\n    # Return t-statistic\n    pass",
              "expectedOutput": "Float t-stat",
              "solution": "import math\n\ndef two_sample_t_statistic(x1, x2):\n    n1, n2 = len(x1), len(x2)\n    m1, m2 = sum(x1) / n1, sum(x2) / n2\n    s1 = sum((x - m1) ** 2 for x in x1) / (n1 - 1)\n    s2 = sum((x - m2) ** 2 for x in x2) / (n2 - 1)\n    sp = math.sqrt(((n1 - 1) * s1 + (n2 - 1) * s2) / (n1 + n2 - 2))\n    return (m1 - m2) / (sp * math.sqrt(1/n1 + 1/n2))",
              "explanation": "Calculates difference of means over pooled standard error."
            },
            {
              "id": "da-07-c-04",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "medium",
              "question": "Write `confidence_interval_95(data)` returning tuple `(lower_bound, upper_bound)` using z = 1.96.",
              "language": "python",
              "starterCode": "import math\n\ndef confidence_interval_95(data):\n    # Return (low, high)\n    pass",
              "expectedOutput": "Tuple of 2 floats",
              "solution": "import math\n\ndef confidence_interval_95(data):\n    n = len(data)\n    mean = sum(data) / n\n    std = math.sqrt(sum((x - mean) ** 2 for x in data) / (n - 1))\n    se = std / math.sqrt(n)\n    return mean - 1.96 * se, mean + 1.96 * se",
              "explanation": "Constructs 95% interval: mean +/- 1.96 * (std / sqrt(n))."
            },
            {
              "id": "da-07-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Write `chi_square_goodness_of_fit(observed, expected)` calculating sum of `(O - E)^2 / E`.",
              "language": "python",
              "starterCode": "def chi_square_goodness_of_fit(observed, expected):\n    # Return chi-sq statistic\n    pass",
              "expectedOutput": "Chi-square float",
              "solution": "def chi_square_goodness_of_fit(observed, expected):\n    return sum((o - e) ** 2 / e for o, e in zip(observed, expected) if e > 0)",
              "explanation": "Standard chi-square goodness of fit formula."
            }
          ]
        },
        {
          "lectureId": "da-lec-08",
          "lectureNumber": 8,
          "title": "Complete powerBI Course for Data Analysis and Visualization | Job Oriented",
          "videoUrl": "https://www.youtube.com/embed/Te8ROybkRnQ",
          "topics": [
            "Power BI Desktop Interface & Data Ingestion",
            "Star Schema & Data Modeling",
            "DAX Formulas (CALCULATE, RELATED, SUMX)",
            "Interactive Report Design & Drillthrough"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "da-08-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "What is DAX in Power BI?",
              "options": [
                "Data Analysis Expressions: a formula expression language used for custom measures and calculated columns",
                "A database driver",
                "A data compression format",
                "A visual theme"
              ],
              "correctAnswer": 0,
              "explanation": "DAX is Power BI's functional expression language for dynamic calculations."
            },
            {
              "id": "da-08-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "What is the most versatile and powerful DAX function used to modify filter context?",
              "options": [
                "CALCULATE()",
                "SUM()",
                "COUNT()",
                "CONCATENATE()"
              ],
              "correctAnswer": 0,
              "explanation": "CALCULATE evaluates an expression in a context modified by given filters."
            },
            {
              "id": "da-08-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "In Power BI data modeling, what is the best practice schema architecture?",
              "options": [
                "Star Schema (central fact table linked to surrounding dimension tables)",
                "Single flat wide table",
                "Chain of 50 linked tables",
                "Circular schema"
              ],
              "correctAnswer": 0,
              "explanation": "Star schema optimizes VertiPaq engine performance and simplifies DAX calculations."
            },
            {
              "id": "da-08-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What is the difference between a Calculated Column and a Measure in Power BI?",
              "options": [
                "Calculated columns are computed during data refresh and stored in RAM; Measures are evaluated dynamically on-the-fly based on report filter context",
                "Measures can only show text",
                "Calculated columns use no memory",
                "They are identical"
              ],
              "correctAnswer": 0,
              "explanation": "Measures consume zero storage and recalculate dynamically with slicer interactions."
            },
            {
              "id": "da-08-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "What does the DAX iterator function `SUMX(table, expression)` do?",
              "options": [
                "Evaluates the expression row-by-row over the specified table and sums the results",
                "Calculates exponential growth",
                "Sums columns alphabetically",
                "Multiplies all numbers by X"
              ],
              "correctAnswer": 0,
              "explanation": "Iterator functions like SUMX create a row context and iterate row by row before aggregating."
            }
          ],
          "codingQuestions": [
            {
              "id": "da-08-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write Python logic mimicking DAX `DIVIDE(numerator, denominator, alternate_result)` with zero-division safety.",
              "language": "python",
              "starterCode": "def dax_divide(num, den, alternate=0.0):\n    # Return division safely\n    pass",
              "expectedOutput": "Division result or alternate",
              "solution": "def dax_divide(num, den, alternate=0.0):\n    return num / den if den != 0 else alternate",
              "explanation": "DAX DIVIDE safely handles zero denominators without error."
            },
            {
              "id": "da-08-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a function simulating DAX `SUMX(table, row_fn)` iterating rows and returning total sum.",
              "language": "python",
              "starterCode": "def dax_sumx(rows, row_expr):\n    # row_expr is a callable function taking a row dict\n    pass",
              "expectedOutput": "Sum float",
              "solution": "def dax_sumx(rows, row_expr):\n    return sum(row_expr(r) for r in rows)",
              "explanation": "Iterates through rows evaluating row_expr and summing."
            },
            {
              "id": "da-08-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Write `filter_context_evaluate(records, filters, measure_fn)` filtering records by dict criteria and applying measure_fn.",
              "language": "python",
              "starterCode": "def filter_context_evaluate(records, filters, measure_fn):\n    # Return measure evaluated on filtered records\n    pass",
              "expectedOutput": "Evaluated metric",
              "solution": "def filter_context_evaluate(records, filters, measure_fn):\n    filtered = [r for r in records if all(r.get(k) == v for k, v in filters.items())]\n    return measure_fn(filtered)",
              "explanation": "Applies filter context to dataset before evaluating aggregate measure."
            },
            {
              "id": "da-08-c-04",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "medium",
              "question": "Write `ytd_running_total(daily_sales)` computing cumulative year-to-date running sum for list of numbers.",
              "language": "python",
              "starterCode": "def ytd_running_total(daily_sales):\n    # Return list of running totals\n    pass",
              "expectedOutput": "List of cumulative sums",
              "solution": "def ytd_running_total(daily_sales):\n    run = 0\n    res = []\n    for s in daily_sales:\n        run += s\n        res.append(run)\n    return res",
              "explanation": "Mimics DAX TOTALYTD cumulative sum."
            },
            {
              "id": "da-08-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Write `dax_calculate(data, filter_override, base_filter, measure_fn)` showing how CALCULATE overrides base filters.",
              "language": "python",
              "starterCode": "def dax_calculate(data, filter_override, base_filter, measure_fn):\n    # Merge filters and evaluate\n    pass",
              "expectedOutput": "Calculated result",
              "solution": "def dax_calculate(data, filter_override, base_filter, measure_fn):\n    combined = {**base_filter, **filter_override}\n    subset = [row for row in data if all(row.get(k) == v for k, v in combined.items())]\n    return measure_fn(subset)",
              "explanation": "Overrides matching keys from base filter with explicit filter override."
            }
          ]
        }
      ]
    }
  ]
};
