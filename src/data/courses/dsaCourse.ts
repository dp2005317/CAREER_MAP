import { Course } from '../types';
import fs from 'fs';
import path from 'path';

// Read question.json for lecture 1
let questionJson: any = null;
try {
  const questionPath = path.join(process.cwd(), 'question.json');
  if (fs.existsSync(questionPath)) {
    questionJson = JSON.parse(fs.readFileSync(questionPath, 'utf8'));
  }
} catch (e) {
  console.error("Failed to read question.json", e);
}

export const dsaCourseData: Course = {
  courseId: "course-dsa",
  title: "Data Structures and Algorithms in C++",
  description: "Comprehensive C++ and DSA masterclass covering flowcharts, variables, loops, arrays, vectors, Kadane's algorithm, pointers, binary search, and problem solving.",
  category: "programming",
  company: "Apna College",
  instructor: "Shradha Khapra",
  thumbnail: "https://i.ytimg.com/vi/VTLCoHnyACE/hqdefault.jpg",
  difficulty: "Beginner",
  duration: "45 hours",
  durationHours: 45,
  language: "Hindi",
  certificateAvailable: true,
  isFree: true,
  isTrending: true,
  rating: 4.9,
  learners: "500k+",
  skills: ["C++", "Data Structures", "Algorithms", "Problem Solving", "Time Complexity", "Competitive Programming"],
  jobRoles: ["Software Engineer", "SDE 1", "Backend Developer"],
  source: {
    type: "youtube_playlist",
    playlistUrl: "https://youtube.com/playlist?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt"
  },
  modules: [
    {
      moduleId: "module-dsa-fundamentals",
      title: "Module 1: C++ Programming Fundamentals & Logic",
      lectures: [
        {
          lectureId: "dsa-lecture-01",
          lectureNumber: 1,
          title: "Lecture 1 : Flowchart & Pseudocode + Installation | DSA Series",
          videoUrl: "https://www.youtube.com/embed/VTLCoHnyACE",
          topics: ["Flowcharts & Symbols", "Pseudocode Writing", "C++ Setup & Compiler", "Basic Syntax & I/O"],
          assessment: { totalQuestions: 20, fundamentalQuestions: 10, codingQuestions: 10 },
          fundamentalQuestions: questionJson?.questions?.fundamental || [
            {
              id: "dsa-01-f-01",
              type: "fundamental",
              difficulty: "easy",
              question: "What is a flowchart in computer science?",
              options: [
                "A hardware blueprint for CPU circuits",
                "A diagrammatic representation of an algorithm or workflow",
                "A compiled binary executable file",
                "A database table schema"
              ],
              correctAnswer: 1,
              explanation: "A flowchart visually maps out steps in an algorithm using standard geometric symbols."
            },
            {
              id: "dsa-01-f-02",
              type: "fundamental",
              difficulty: "easy",
              question: "Which flowchart symbol represents decision-making (conditional branching)?",
              options: ["Diamond", "Rectangle", "Oval", "Parallelogram"],
              correctAnswer: 0,
              explanation: "A diamond symbol indicates a decision point with yes/no or true/false branches."
            },
            {
              id: "dsa-01-f-03",
              type: "fundamental",
              difficulty: "easy",
              question: "What is pseudocode?",
              options: [
                "Machine code consisting of zeros and ones",
                "An informal, high-level description of an algorithm written in human-readable plain language",
                "Encrypted source code",
                "A programming language compiler"
              ],
              correctAnswer: 1,
              explanation: "Pseudocode outlines algorithmic logic without strict programming syntax constraints."
            },
            {
              id: "dsa-01-f-04",
              type: "fundamental",
              difficulty: "medium",
              question: "What is the primary role of the C++ Compiler (such as g++)?",
              options: [
                "Translating C++ human-readable source code into machine-executable binary code",
                "Formatting text documents",
                "Connecting to Wi-Fi networks",
                "Running antivirus scans"
              ],
              correctAnswer: 0,
              explanation: "Compilers translate high-level C++ code into machine code the CPU can directly execute."
            },
            {
              id: "dsa-01-f-05",
              type: "fundamental",
              difficulty: "medium",
              question: "What does `#include <iostream>` do at the beginning of a C++ program?",
              options: [
                "Imports standard input/output stream declarations like cin and cout",
                "Allocates 1GB of memory",
                "Compiles the program into an executable",
                "Clears the terminal screen"
              ],
              correctAnswer: 0,
              explanation: "iostream header file includes definitions for standard stream objects like cout and cin."
            },
            {
              id: "dsa-01-f-06",
              type: "fundamental",
              difficulty: "medium",
              question: "What does the return value `return 0;` at the end of `main()` signify?",
              options: [
                "The program completed execution successfully without errors",
                "A fatal runtime error occurred",
                "The program output zero",
                "Memory allocation failed"
              ],
              correctAnswer: 0,
              explanation: "Returning 0 from main signals successful program execution to the operating system."
            },
            {
              id: "dsa-01-f-07",
              type: "fundamental",
              difficulty: "hard",
              question: "What is the purpose of the linker stage in C++ compilation?",
              options: [
                "Combining object files and library code into a final single executable file",
                "Checking for syntax spelling mistakes",
                "Running the program in memory",
                "Removing comments from code"
              ],
              correctAnswer: 0,
              explanation: "The linker resolves external symbol references and combines object files into the final executable."
            },
            {
              id: "dsa-01-f-08",
              type: "fundamental",
              difficulty: "hard",
              question: "Which symbol is used in flowcharts to represent input and output operations?",
              options: ["Parallelogram", "Rectangle", "Circle", "Triangle"],
              correctAnswer: 0,
              explanation: "Parallelograms designate input (reading values) and output (printing values) in standard flowchart conventions."
            },
            {
              id: "dsa-01-f-09",
              type: "fundamental",
              difficulty: "interview",
              question: "What is the difference between an algorithm and pseudocode?",
              options: [
                "An algorithm is a step-by-step problem-solving method; pseudocode is an informal textual representation of an algorithm",
                "An algorithm can only run on supercomputers",
                "Pseudocode can be directly compiled by g++",
                "There is no difference"
              ],
              correctAnswer: 0,
              explanation: "The algorithm is the conceptual logic; pseudocode is the language-agnostic textual notation expressing it."
            },
            {
              id: "dsa-01-f-10",
              type: "fundamental",
              difficulty: "interview",
              question: "Why should software engineers create flowcharts or pseudocode before writing code?",
              options: [
                "To verify algorithmic logic, identify edge cases, and reduce debugging complexity before implementation",
                "Because modern compilers refuse to compile without flowcharts",
                "To slow down development time",
                "Because flowcharts increase CPU clock rate"
              ],
              correctAnswer: 0,
              explanation: "Planning logic upfront reveals boundary conditions and logic gaps before getting bogged down in syntax errors."
            }
          ],
          codingQuestions: questionJson?.questions?.coding || [
            {
              id: "dsa-01-c-01",
              type: "coding",
              subType: "implementation",
              difficulty: "easy",
              question: "Write a C++ program to print 'Hello World' followed by a newline.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Print Hello World\n    return 0;\n}",
              expectedOutput: "Hello World",
              solution: "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Hello World\" << endl;\n    return 0;\n}",
              explanation: "cout with << operator outputs text to standard output."
            },
            {
              id: "dsa-01-c-02",
              type: "coding",
              subType: "implementation",
              difficulty: "easy",
              question: "Write a C++ program that declares an integer variable `x = 10` and prints its value.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write code here\n    return 0;\n}",
              expectedOutput: "10",
              solution: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 10;\n    cout << x << endl;\n    return 0;\n}",
              explanation: "Initializes int variable x to 10 and prints using cout."
            },
            {
              id: "dsa-01-c-03",
              type: "coding",
              subType: "implementation",
              difficulty: "easy",
              question: "Write a C++ program that calculates and prints the sum of two numbers `a = 15` and `b = 25`.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 15, b = 25;\n    // Print sum\n    return 0;\n}",
              expectedOutput: "40",
              solution: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 15, b = 25;\n    cout << (a + b) << endl;\n    return 0;\n}",
              explanation: "Evaluates addition (a + b) and prints 40."
            },
            {
              id: "dsa-01-c-04",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Write a C++ function `int calculateArea(int length, int width)` that returns the area of a rectangle.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint calculateArea(int length, int width) {\n    // Return area\n}\n\nint main() {\n    cout << calculateArea(5, 4) << endl;\n    return 0;\n}",
              expectedOutput: "20",
              solution: "#include <iostream>\nusing namespace std;\n\nint calculateArea(int length, int width) {\n    return length * width;\n}\n\nint main() {\n    cout << calculateArea(5, 4) << endl;\n    return 0;\n}",
              explanation: "Area of rectangle is length multiplied by width."
            },
            {
              id: "dsa-01-c-05",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Write a C++ program that calculates the average of three integers: 10, 20, 30 and prints the result.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 10, y = 20, z = 30;\n    // Print average\n    return 0;\n}",
              expectedOutput: "20",
              solution: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 10, y = 20, z = 30;\n    cout << (x + y + z) / 3 << endl;\n    return 0;\n}",
              explanation: "Sum divided by count yields average."
            },
            {
              id: "dsa-01-c-06",
              type: "coding",
              subType: "problem_solving",
              difficulty: "medium",
              question: "Write a program to calculate Simple Interest: `SI = (P * R * T) / 100` where P=1000, R=5, T=2.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int p = 1000, r = 5, t = 2;\n    // Calculate and print SI\n    return 0;\n}",
              expectedOutput: "100",
              solution: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int p = 1000, r = 5, t = 2;\n    int si = (p * r * t) / 100;\n    cout << si << endl;\n    return 0;\n}",
              explanation: "Multiplies principal, rate, time and divides by 100."
            },
            {
              id: "dsa-01-c-07",
              type: "coding",
              subType: "debugging",
              difficulty: "hard",
              question: "Fix the compilation error in: `#include <iostream> int main() { cout << \"Welcome\"; return 0; }`",
              language: "cpp",
              starterCode: "#include <iostream>\nint main() {\n    // Fix missing namespace or std prefix\n    cout << \"Welcome\";\n    return 0;\n}",
              expectedOutput: "Welcome",
              solution: "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Welcome\";\n    return 0;\n}",
              explanation: "cout resides in std namespace, requiring using namespace std or std::cout."
            },
            {
              id: "dsa-01-c-08",
              type: "coding",
              subType: "implementation",
              difficulty: "hard",
              question: "Write a program to swap two integer variables `a = 5` and `b = 10` using a temporary variable and print both.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 5, b = 10;\n    // Swap a and b\n    cout << a << \" \" << b << endl;\n    return 0;\n}",
              expectedOutput: "10 5",
              solution: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 5, b = 10;\n    int temp = a;\n    a = b;\n    b = temp;\n    cout << a << \" \" << b << endl;\n    return 0;\n}",
              explanation: "Uses temp variable to store a before overwriting with b."
            },
            {
              id: "dsa-01-c-09",
              type: "coding",
              subType: "interview_challenge",
              difficulty: "interview",
              question: "Write a program to swap two numbers `a = 7` and `b = 3` without using any third/temporary variable.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 7, b = 3;\n    // Swap without 3rd variable\n    cout << a << \" \" << b << endl;\n    return 0;\n}",
              expectedOutput: "3 7",
              solution: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 7, b = 3;\n    a = a + b; // a=10\n    b = a - b; // b=7\n    a = a - b; // a=3\n    cout << a << \" \" << b << endl;\n    return 0;\n}",
              explanation: "Arithmetic addition and subtraction swap values in-place."
            },
            {
              id: "dsa-01-c-10",
              type: "coding",
              subType: "interview_challenge",
              difficulty: "interview",
              question: "Write a C++ program that determines whether a number `n = 42` is even or odd and prints 'Even' or 'Odd'.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 42;\n    // Print Even or Odd\n    return 0;\n}",
              expectedOutput: "Even",
              solution: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 42;\n    if (n % 2 == 0) cout << \"Even\" << endl;\n    else cout << \"Odd\" << endl;\n    return 0;\n}",
              explanation: "Modulo operator % 2 checks if divisible by 2 with 0 remainder."
            }
          ]
        },
        {
          lectureId: "dsa-lecture-02",
          lectureNumber: 2,
          title: "Lecture 2 : Variable, Data Types & Operators | DSA Series | C++",
          videoUrl: "https://www.youtube.com/embed/Dxu7GKtdbnA",
          topics: ["Primitive Data Types (int, char, float, double, bool)", "Type Conversion & Type Casting", "Arithmetic, Relational & Logical Operators", "Sizeof Operator & Memory Limits"],
          assessment: { totalQuestions: 20, fundamentalQuestions: 10, codingQuestions: 10 },
          fundamentalQuestions: [
            {
              id: "dsa-02-f-01",
              type: "fundamental",
              difficulty: "easy",
              question: "How many bytes does a standard `int` data type occupy in modern 32/64-bit systems?",
              options: ["4 bytes", "1 byte", "8 bytes", "2 bytes"],
              correctAnswer: 0,
              explanation: "Standard 32/64-bit C++ compilers allocate 4 bytes (32 bits) for int."
            },
            {
              id: "dsa-02-f-02",
              type: "fundamental",
              difficulty: "easy",
              question: "What is the ASCII value of character 'A' in C++?",
              options: ["65", "97", "48", "1"],
              correctAnswer: 0,
              explanation: "The standard ASCII code for uppercase 'A' is 65 (and 'a' is 97)."
            },
            {
              id: "dsa-02-f-03",
              type: "fundamental",
              difficulty: "easy",
              question: "Which operator is used to evaluate the remainder of integer division?",
              options: ["% (modulo)", "/ (slash)", "* (asterisk)", "& (ampersand)"],
              correctAnswer: 0,
              explanation: "The modulo operator % returns the integer remainder of division."
            },
            {
              id: "dsa-02-f-04",
              type: "fundamental",
              difficulty: "medium",
              question: "What is the result of integer division `5 / 2` in C++?",
              options: ["2", "2.5", "3", "0"],
              correctAnswer: 0,
              explanation: "Dividing two integers performs integer division, truncating the fractional portion."
            },
            {
              id: "dsa-02-f-05",
              type: "fundamental",
              difficulty: "medium",
              question: "What is the difference between Implicit Type Conversion and Explicit Type Casting?",
              options: [
                "Implicit is performed automatically by the compiler; Explicit is manually specified by the programmer using (type) or static_cast",
                "Implicit always causes compilation errors",
                "Explicit conversion happens only at hardware boot",
                "They are completely identical"
              ],
              correctAnswer: 0,
              explanation: "Implicit conversion happens automatically from smaller to wider types; explicit casting overrides default types intentionally."
            },
            {
              id: "dsa-02-f-06",
              type: "fundamental",
              difficulty: "medium",
              question: "What is the difference between prefix increment `++x` and postfix increment `x++`?",
              options: [
                "`++x` increments x before returning its value; `x++` returns x's current value before incrementing",
                "`x++` increments by 2; `++x` increments by 1",
                "`++x` is only for floating point numbers",
                "There is no difference in any expression"
              ],
              correctAnswer: 0,
              explanation: "Prefix increments first and yields the updated value; postfix yields the original value and then increments."
            },
            {
              id: "dsa-02-f-07",
              type: "fundamental",
              difficulty: "hard",
              question: "What happens when an integer overflows beyond its maximum representable limit `INT_MAX`?",
              options: [
                "Signed integer overflow invokes Undefined Behavior in C++ (often wrapping to negative values in two's complement)",
                "The computer turns off",
                "The number automatically becomes float",
                "The compiler re-runs"
              ],
              correctAnswer: 0,
              explanation: "Signed overflow is undefined behavior in C++ standard, typically wrapping around in two's complement."
            },
            {
              id: "dsa-02-f-08",
              type: "fundamental",
              difficulty: "hard",
              question: "What does the `sizeof` operator in C++ return?",
              options: [
                "The size in bytes of a data type or variable at compile-time",
                "The number of characters in a string",
                "The memory address of a pointer",
                "The value stored inside the variable"
              ],
              correctAnswer: 0,
              explanation: "sizeof evaluates the byte size of any type or expression at compile time."
            },
            {
              id: "dsa-02-f-09",
              type: "fundamental",
              difficulty: "interview",
              question: "What is Short-Circuit Evaluation in C++ logical operators `&&` and `||`?",
              options: [
                "If the left operand determines the outcome (false for &&, true for ||), the right operand is not evaluated at all",
                "A hardware surge in the power supply",
                "Evaluating both sides concurrently in separate CPU threads",
                "Converting boolean to integer automatically"
              ],
              correctAnswer: 0,
              explanation: "&& halts if left side is false; || halts if left side is true, bypassing the second expression."
            },
            {
              id: "dsa-02-f-10",
              type: "fundamental",
              difficulty: "interview",
              question: "Why should `double` or `float` never be compared using exact equality `a == b`?",
              options: [
                "Floating-point numbers suffer from binary rounding imprecision; comparisons should check if `abs(a - b) < epsilon`",
                "Because equality operator is not defined for floats",
                "Because floats are always equal to zero",
                "Because double precision crashes comparisons"
              ],
              correctAnswer: 0,
              explanation: "Binary floating-point representation cannot represent all decimals exactly, causing minor rounding differences."
            }
          ],
          codingQuestions: [
            {
              id: "dsa-02-c-01",
              type: "coding",
              subType: "implementation",
              difficulty: "easy",
              question: "Write a program that prints the ASCII integer value of char variable `c = 'B'`.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    char c = 'B';\n    // Print ASCII value\n    return 0;\n}",
              expectedOutput: "66",
              solution: "#include <iostream>\nusing namespace std;\n\nint main() {\n    char c = 'B';\n    cout << (int)c << endl;\n    return 0;\n}",
              explanation: "Casting char to int outputs its ASCII numerical code (66)."
            },
            {
              id: "dsa-02-c-02",
              type: "coding",
              subType: "implementation",
              difficulty: "easy",
              question: "Write a C++ program that prints the byte size of `double` using `sizeof`.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Print sizeof(double)\n    return 0;\n}",
              expectedOutput: "8",
              solution: "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << sizeof(double) << endl;\n    return 0;\n}",
              explanation: "sizeof(double) returns 8 bytes on standard 64-bit architecture."
            },
            {
              id: "dsa-02-c-03",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Write a program that divides `int a = 5` by `int b = 2` to obtain accurate float `2.5` using explicit type casting.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 5, b = 2;\n    // Print 2.5\n    return 0;\n}",
              expectedOutput: "2.5",
              solution: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 5, b = 2;\n    cout << (double)a / b << endl;\n    return 0;\n}",
              explanation: "Casting operand a to double forces floating-point division."
            },
            {
              id: "dsa-02-c-04",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Given `int x = 5; int y = ++x + x++;` what is the final value of x? Write code to print x.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 5;\n    ++x;\n    x++;\n    cout << x << endl;\n    return 0;\n}",
              expectedOutput: "7",
              solution: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 5;\n    ++x;\n    x++;\n    cout << x << endl;\n    return 0;\n}",
              explanation: "Two increments change x from 5 to 7."
            },
            {
              id: "dsa-02-c-05",
              type: "coding",
              subType: "problem_solving",
              difficulty: "medium",
              question: "Write a program to extract the last digit of an integer `n = 2589` using the modulo operator.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 2589;\n    // Print last digit\n    return 0;\n}",
              expectedOutput: "9",
              solution: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 2589;\n    cout << (n % 10) << endl;\n    return 0;\n}",
              explanation: "n % 10 extracts the rightmost base-10 digit."
            },
            {
              id: "dsa-02-c-06",
              type: "coding",
              subType: "implementation",
              difficulty: "hard",
              question: "Write a function `bool isEpsilonEqual(double a, double b, double eps=1e-5)` that safely checks float equality.",
              language: "cpp",
              starterCode: "#include <iostream>\n#include <cmath>\nusing namespace std;\n\nbool isEpsilonEqual(double a, double b, double eps=1e-5) {\n    // Return true if difference is within eps\n}\n\nint main() {\n    cout << isEpsilonEqual(0.1 + 0.2, 0.3) << endl;\n    return 0;\n}",
              expectedOutput: "1",
              solution: "#include <iostream>\n#include <cmath>\nusing namespace std;\n\nbool isEpsilonEqual(double a, double b, double eps=1e-5) {\n    return fabs(a - b) < eps;\n}\n\nint main() {\n    cout << isEpsilonEqual(0.1 + 0.2, 0.3) << endl;\n    return 0;\n}",
              explanation: "fabs(a - b) < eps verifies floating numbers are equal within precision margin."
            },
            {
              id: "dsa-02-c-07",
              type: "coding",
              subType: "debugging",
              difficulty: "hard",
              question: "Fix bug: `int a = 100000; int b = 100000; int c = a * b;` overflows 32-bit int. Fix type to prevent overflow.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 100000, b = 100000;\n    // Fix overflow\n    long long c = (long long)a * b;\n    cout << c << endl;\n    return 0;\n}",
              expectedOutput: "10000000000",
              solution: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 100000, b = 100000;\n    long long c = (long long)a * b;\n    cout << c << endl;\n    return 0;\n}",
              explanation: "Casting to 64-bit long long prevents integer overflow."
            },
            {
              id: "dsa-02-c-08",
              type: "coding",
              subType: "implementation",
              difficulty: "hard",
              question: "Write a program that uses ternary operator `? :` to print 'Adult' if `age = 21 >= 18` else 'Minor'.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int age = 21;\n    // Use ternary operator\n    return 0;\n}",
              expectedOutput: "Adult",
              solution: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int age = 21;\n    cout << (age >= 18 ? \"Adult\" : \"Minor\") << endl;\n    return 0;\n}",
              explanation: "Condition ? expr1 : expr2 evaluates inline condition."
            },
            {
              id: "dsa-02-c-09",
              type: "coding",
              subType: "interview_challenge",
              difficulty: "interview",
              question: "Demonstrate short-circuit evaluation: write code showing that in `false && (++x > 0)`, `x = 5` remains unchanged.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 5;\n    bool res = false && (++x > 0);\n    cout << x << endl;\n    return 0;\n}",
              expectedOutput: "5",
              solution: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 5;\n    bool res = false && (++x > 0);\n    cout << x << endl;\n    return 0;\n}",
              explanation: "Because left operand is false, the right side (++x > 0) is skipped."
            },
            {
              id: "dsa-02-c-10",
              type: "coding",
              subType: "interview_challenge",
              difficulty: "interview",
              question: "Write a program that reverses a 3-digit integer `n = 456` arithmetically to `654`.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 456;\n    // Reverse and print\n    return 0;\n}",
              expectedOutput: "654",
              solution: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 456;\n    int rev = 0;\n    while (n > 0) {\n        rev = rev * 10 + n % 10;\n        n /= 10;\n    }\n    cout << rev << endl;\n    return 0;\n}",
              explanation: "Repeatedly extracts last digit with % 10 and appends to reversed number."
            }
          ]
        },
        {
          lectureId: "dsa-lecture-03",
          lectureNumber: 3,
          title: "Lecture 3: Conditional Statements & Loops | DSA Series | C++",
          videoUrl: "https://www.youtube.com/embed/qR9U6bKxJ7g",
          topics: ["if, else if, else conditions", "while, for, do-while loops", "break and continue statements", "Prime Number Checking"],
          assessment: { totalQuestions: 20, fundamentalQuestions: 10, codingQuestions: 10 },
          fundamentalQuestions: [
            {
              id: "dsa-03-f-01",
              type: "fundamental",
              difficulty: "easy",
              question: "What is the key difference between a `while` loop and a `do-while` loop in C++?",
              options: [
                "A do-while loop executes its body at least once before checking the condition; while checks first",
                "A while loop cannot take boolean expressions",
                "do-while loops only run on odd numbers",
                "while loops run infinitely by default"
              ],
              correctAnswer: 0,
              explanation: "do-while checks its exit condition after body execution, guaranteeing at least one run."
            },
            {
              id: "dsa-03-f-02",
              type: "fundamental",
              difficulty: "easy",
              question: "What does the `break` statement do inside a loop?",
              options: [
                "Terminates the loop immediately and transfers control to the statement after the loop",
                "Skips to the next iteration of the loop",
                "Restarts the loop from 0",
                "Terminates the entire operating system"
              ],
              correctAnswer: 0,
              explanation: "break exits the nearest enclosing loop or switch construct immediately."
            },
            {
              id: "dsa-03-f-03",
              type: "fundamental",
              difficulty: "easy",
              question: "What does the `continue` statement do inside a loop?",
              options: [
                "Skips the rest of the current iteration and jumps to the loop update/condition check",
                "Exits the loop permanently",
                "Prints the current iteration count",
                "Restarts the main function"
              ],
              correctAnswer: 0,
              explanation: "continue aborts the current iteration and initiates the next loop cycle."
            },
            {
              id: "dsa-03-f-04",
              type: "fundamental",
              difficulty: "medium",
              question: "What is the three-part header structure of a standard `for` loop in C++?",
              options: [
                "for (initialization; condition; update)",
                "for (condition; update; initialization)",
                "for (variable, size, step)",
                "for (start, stop)"
              ],
              correctAnswer: 0,
              explanation: "The header consists of initialization statement, loop continuation condition, and step increment/decrement."
            },
            {
              id: "dsa-03-f-05",
              type: "fundamental",
              difficulty: "medium",
              question: "What is the optimal time complexity to test if an integer N is a prime number?",
              options: ["O(sqrt(N))", "O(N)", "O(N^2)", "O(1)"],
              correctAnswer: 0,
              explanation: "Factors occur in pairs (d, N/d); if no divisor exists <= sqrt(N), N is prime."
            },
            {
              id: "dsa-03-f-06",
              type: "fundamental",
              difficulty: "medium",
              question: "What causes an infinite loop?",
              options: [
                "A loop continuation condition that always evaluates to true and has no internal break",
                "Using int instead of float",
                "Having more than 5 lines in the loop body",
                "Printing to standard output"
              ],
              correctAnswer: 0,
              explanation: "A loop runs infinitely if its termination condition is never satisfied."
            },
            {
              id: "dsa-03-f-07",
              type: "fundamental",
              difficulty: "hard",
              question: "In nested loops with outer count N and inner count M, what is the total number of iterations?",
              options: ["N * M", "N + M", "N^M", "max(N, M)"],
              correctAnswer: 0,
              explanation: "For each of the N outer steps, the inner loop executes M times, resulting in N * M iterations."
            },
            {
              id: "dsa-03-f-08",
              type: "fundamental",
              difficulty: "hard",
              question: "In a switch statement, what happens if a matching `case` does not include a `break` statement?",
              options: [
                "Execution falls through and continues into subsequent case blocks until a break or switch end",
                "The program crashes immediately",
                "The compiler flags a syntax error",
                "The switch condition is re-evaluated"
              ],
              correctAnswer: 0,
              explanation: "C++ exhibits fall-through behavior, executing succeeding case blocks unless stopped by break."
            },
            {
              id: "dsa-03-f-09",
              type: "fundamental",
              difficulty: "interview",
              question: "How can you check if a number N is prime in O(sqrt(N)) time?",
              options: [
                "Check divisibility by 2 and 3, then test numbers of the form 6k +/- 1 up to sqrt(N)",
                "Divide by every number from 2 to N - 1",
                "Check if N is odd",
                "Check if N % 10 == 1, 3, 7, or 9"
              ],
              correctAnswer: 0,
              explanation: "All primes > 3 are of the form 6k +/- 1; testing these up to sqrt(N) runs in O(sqrt(N))."
            },
            {
              id: "dsa-03-f-10",
              type: "fundamental",
              difficulty: "interview",
              question: "What is the scope of a variable declared inside the initialization clause of a for loop?",
              options: [
                "Block scope local to that for loop only",
                "Global scope across the whole file",
                "Function scope visible outside the loop",
                "Class scope"
              ],
              correctAnswer: 0,
              explanation: "Variables declared in for(int i=0; ...) exist strictly within the loop body and header."
            }
          ],
          codingQuestions: [
            {
              id: "dsa-03-c-01",
              type: "coding",
              subType: "implementation",
              difficulty: "easy",
              question: "Write a for loop that prints numbers from 1 to 5 on a single line separated by spaces.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Print 1 2 3 4 5 \n    return 0;\n}",
              expectedOutput: "1 2 3 4 5 ",
              solution: "#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 5; i++) {\n        cout << i << \" \";\n    }\n    cout << endl;\n    return 0;\n}",
              explanation: "Iterates i from 1 to 5 printing i and space."
            },
            {
              id: "dsa-03-c-02",
              type: "coding",
              subType: "implementation",
              difficulty: "easy",
              question: "Write a while loop to compute the sum of numbers from 1 to 10 and print the sum.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Compute sum 1..10\n    return 0;\n}",
              expectedOutput: "55",
              solution: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int sum = 0, i = 1;\n    while (i <= 10) {\n        sum += i;\n        i++;\n    }\n    cout << sum << endl;\n    return 0;\n}",
              explanation: "Accumulates sum: 1+2+...+10 = 55."
            },
            {
              id: "dsa-03-c-03",
              type: "coding",
              subType: "problem_solving",
              difficulty: "medium",
              question: "Write a function `bool isPrime(int n)` returning true if n is prime, false otherwise.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nbool isPrime(int n) {\n    // Check prime\n}\n\nint main() {\n    cout << isPrime(29) << \" \" << isPrime(15) << endl;\n    return 0;\n}",
              expectedOutput: "1 0",
              solution: "#include <iostream>\nusing namespace std;\n\nbool isPrime(int n) {\n    if (n <= 1) return false;\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i == 0) return false;\n    }\n    return true;\n}\n\nint main() {\n    cout << isPrime(29) << \" \" << isPrime(15) << endl;\n    return 0;\n}",
              explanation: "Loops up to i * i <= n checking divisibility."
            },
            {
              id: "dsa-03-c-04",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Write a program that prints all odd numbers between 1 and 10 using `continue` to skip even numbers.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Use continue\n    return 0;\n}",
              expectedOutput: "1 3 5 7 9 ",
              solution: "#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 10; i++) {\n        if (i % 2 == 0) continue;\n        cout << i << \" \";\n    }\n    cout << endl;\n    return 0;\n}",
              explanation: "continue skips printing for even integers."
            },
            {
              id: "dsa-03-c-05",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Write a program to calculate factorial of `n = 5` using a loop.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 5;\n    // Print 5!\n    return 0;\n}",
              expectedOutput: "120",
              solution: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 5;\n    long long fact = 1;\n    for (int i = 1; i <= n; i++) fact *= i;\n    cout << fact << endl;\n    return 0;\n}",
              explanation: "5! = 5 * 4 * 3 * 2 * 1 = 120."
            },
            {
              id: "dsa-03-c-06",
              type: "coding",
              subType: "problem_solving",
              difficulty: "hard",
              question: "Write a program to print the first 7 Fibonacci numbers: 0 1 1 2 3 5 8.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    // Print first 7 Fibonacci\n    return 0;\n}",
              expectedOutput: "0 1 1 2 3 5 8 ",
              solution: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 0, b = 1;\n    for (int i = 0; i < 7; i++) {\n        cout << a << \" \";\n        int next = a + b;\n        a = b;\n        b = next;\n    }\n    cout << endl;\n    return 0;\n}",
              explanation: "Iteratively generates Fibonacci series starting from 0, 1."
            },
            {
              id: "dsa-03-c-07",
              type: "coding",
              subType: "debugging",
              difficulty: "hard",
              question: "Fix infinite loop bug: `int i = 1; while(i <= 5) { cout << i; }`",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int i = 1;\n    while(i <= 5) {\n        // Fix missing increment\n        cout << i << \" \";\n        i++;\n    }\n    return 0;\n}",
              expectedOutput: "1 2 3 4 5 ",
              solution: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int i = 1;\n    while(i <= 5) {\n        cout << i << \" \";\n        i++;\n    }\n    return 0;\n}",
              explanation: "Adding i++ advances loop counter to terminate."
            },
            {
              id: "dsa-03-c-08",
              type: "coding",
              subType: "implementation",
              difficulty: "hard",
              question: "Implement GCD function `int gcd(int a, int b)` using Euclidean algorithm loop.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint gcd(int a, int b) {\n    // Euclidean algorithm\n}\n\nint main() {\n    cout << gcd(48, 18) << endl;\n    return 0;\n}",
              expectedOutput: "6",
              solution: "#include <iostream>\nusing namespace std;\n\nint gcd(int a, int b) {\n    while (b != 0) {\n        int rem = a % b;\n        a = b;\n        b = rem;\n    }\n    return a;\n}\n\nint main() {\n    cout << gcd(48, 18) << endl;\n    return 0;\n}",
              explanation: "Euclidean algorithm gcd(a, b) = gcd(b, a % b)."
            },
            {
              id: "dsa-03-c-09",
              type: "coding",
              subType: "interview_challenge",
              difficulty: "interview",
              question: "Write a program that checks if a number `n = 121` is a palindrome number and prints 1 (true) or 0 (false).",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 121;\n    // Check palindrome\n    return 0;\n}",
              expectedOutput: "1",
              solution: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 121;\n    int orig = n, rev = 0;\n    while (n > 0) {\n        rev = rev * 10 + n % 10;\n        n /= 10;\n    }\n    cout << (orig == rev) << endl;\n    return 0;\n}",
              explanation: "Reverses integer digits and compares with original number."
            },
            {
              id: "dsa-03-c-10",
              type: "coding",
              subType: "interview_challenge",
              difficulty: "interview",
              question: "Write a program to count total digits of integer `n = 78945` using a loop.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 78945;\n    // Count digits\n    return 0;\n}",
              expectedOutput: "5",
              solution: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 78945;\n    int count = 0;\n    while (n > 0) {\n        count++;\n        n /= 10;\n    }\n    cout << count << endl;\n    return 0;\n}",
              explanation: "Each division by 10 discards one digit until number reaches 0."
            }
          ]
        }
      ]
    },
    {
      moduleId: "module-dsa-arrays",
      title: "Module 2: Arrays, Vectors & Standard Algorithms",
      lectures: [
        {
          lectureId: "dsa-lecture-08",
          lectureNumber: 8,
          title: "Array Data Structure - Part1 | DSA Series | C++",
          videoUrl: "https://www.youtube.com/embed/8wmn7k1TTcI",
          topics: ["Array Representation & Memory Layout", "Pass by Reference in C++ Arrays", "Linear Search Algorithm", "Reversing an Array in O(N)"],
          assessment: { totalQuestions: 20, fundamentalQuestions: 10, codingQuestions: 10 },
          fundamentalQuestions: [
            {
              id: "dsa-08-f-01",
              type: "fundamental",
              difficulty: "easy",
              question: "How are elements of an array arranged in computer memory?",
              options: [
                "Contiguously in adjacent sequential memory locations",
                "Scattered randomly across memory addresses",
                "In separate CPU registers",
                "Inside a hash table"
              ],
              correctAnswer: 0,
              explanation: "Arrays allocate one contiguous block of memory where address(i) = base + i * sizeof(type)."
            },
            {
              id: "dsa-08-f-02",
              type: "fundamental",
              difficulty: "easy",
              question: "What is the time complexity of accessing an element in an array by its index `arr[i]`?",
              options: ["O(1) constant time", "O(N) linear time", "O(log N)", "O(N^2)"],
              correctAnswer: 0,
              explanation: "Direct index pointer arithmetic allows instant O(1) random access."
            },
            {
              id: "dsa-08-f-03",
              type: "fundamental",
              difficulty: "easy",
              question: "When passing an array `int arr[]` to a function in C++, how is it passed?",
              options: [
                "By pointer/reference to its first element (decays to pointer)",
                "By deep value copy of all elements",
                "As an immutable constant",
                "As a vector"
              ],
              correctAnswer: 0,
              explanation: "In C++, array arguments decay into a pointer pointing to the first element; modifications affect original array."
            },
            {
              id: "dsa-08-f-04",
              type: "fundamental",
              difficulty: "medium",
              question: "What is the worst-case time complexity of Linear Search on an unsorted array of size N?",
              options: ["O(N)", "O(1)", "O(log N)", "O(N log N)"],
              correctAnswer: 0,
              explanation: "In the worst case (target at last index or absent), all N elements must be scanned."
            },
            {
              id: "dsa-08-f-05",
              type: "fundamental",
              difficulty: "medium",
              question: "How can an array of size N be reversed in-place with O(1) auxiliary space?",
              options: [
                "Using two pointers (start = 0, end = N-1) swapping elements and moving toward the center",
                "Allocating a new array of size N",
                "Sorting the array descending",
                "Using binary search"
              ],
              correctAnswer: 0,
              explanation: "Two pointers swap arr[start] with arr[end] until start >= end, using zero extra memory."
            },
            {
              id: "dsa-08-f-06",
              type: "fundamental",
              difficulty: "medium",
              question: "What is an 'out-of-bounds' array access in C++?",
              options: [
                "Accessing index < 0 or >= size, causing undefined behavior (reading garbage or segmentation fault)",
                "A compiler error that prevents compilation",
                "Accessing index 0",
                "Resizing an array dynamically"
              ],
              correctAnswer: 0,
              explanation: "C++ raw arrays do not perform bounds checking; accessing invalid indices leads to undefined behavior."
            },
            {
              id: "dsa-08-f-07",
              type: "fundamental",
              difficulty: "hard",
              question: "Why does `sizeof(arr)` inside a function taking `int arr[]` return 8 on 64-bit systems instead of the total byte size?",
              options: [
                "Because array parameters decay into pointer types `int*`, and sizeof(pointer) is 8 bytes",
                "Because the array was deleted",
                "Because functions only accept 8 elements",
                "Because of compiler caching"
              ],
              correctAnswer: 0,
              explanation: "Inside functions, arr decays to a pointer; sizeof(arr) gives pointer size, not array capacity."
            },
            {
              id: "dsa-08-f-08",
              type: "fundamental",
              difficulty: "hard",
              question: "What is the minimum number of comparisons needed to find both the minimum and maximum in an array of size N?",
              options: [
                "Approximately 3N/2 comparisons by comparing elements in pairs",
                "2N comparisons",
                "N^2 comparisons",
                "N/4 comparisons"
              ],
              correctAnswer: 0,
              explanation: "Pairwise comparisons compare two elements with each other (1 comp) and then with min and max (2 comps), taking 3*(N/2) comps."
            },
            {
              id: "dsa-08-f-09",
              type: "fundamental",
              difficulty: "interview",
              question: "Why are raw static arrays in C++ limited compared to `std::vector`?",
              options: [
                "Static arrays have a fixed size defined at compile-time and cannot grow or shrink dynamically at runtime",
                "Static arrays are slower than vectors",
                "Static arrays cannot store integers",
                "Static arrays don't support indexing"
              ],
              correctAnswer: 0,
              explanation: "C-style arrays have fixed compile-time capacity and don't manage their own size or memory reallocation."
            },
            {
              id: "dsa-08-f-10",
              type: "fundamental",
              difficulty: "interview",
              question: "What is the cache locality benefit of contiguous array memory layout over Linked Lists?",
              options: [
                "Sequential array memory triggers CPU prefetching and spatial cache hits, yielding much faster traversal speeds",
                "Arrays use less RAM per element",
                "Linked lists cannot store pointers",
                "CPUs cannot access linked lists"
              ],
              correctAnswer: 0,
              explanation: "Contiguous elements loaded into L1/L2 cache lines provide high cache hit rates, unlike fragmented node memory."
            }
          ],
          codingQuestions: [
            {
              id: "dsa-08-c-01",
              type: "coding",
              subType: "implementation",
              difficulty: "easy",
              question: "Write a function `int findSmallest(int arr[], int n)` that returns the minimum element in an array.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint findSmallest(int arr[], int n) {\n    // Return minimum element\n}\n\nint main() {\n    int arr[] = {5, 12, 3, 9, 7};\n    cout << findSmallest(arr, 5) << endl;\n    return 0;\n}",
              expectedOutput: "3",
              solution: "#include <iostream>\nusing namespace std;\n\nint findSmallest(int arr[], int n) {\n    int min_val = arr[0];\n    for (int i = 1; i < n; i++) {\n        if (arr[i] < min_val) min_val = arr[i];\n    }\n    return min_val;\n}\n\nint main() {\n    int arr[] = {5, 12, 3, 9, 7};\n    cout << findSmallest(arr, 5) << endl;\n    return 0;\n}",
              explanation: "Iterates through array keeping track of smallest observed value."
            },
            {
              id: "dsa-08-c-02",
              type: "coding",
              subType: "implementation",
              difficulty: "easy",
              question: "Implement `int linearSearch(int arr[], int n, int target)` returning index if found, else -1.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint linearSearch(int arr[], int n, int target) {\n    // Return index or -1\n}\n\nint main() {\n    int arr[] = {10, 20, 30, 40};\n    cout << linearSearch(arr, 4, 30) << endl;\n    return 0;\n}",
              expectedOutput: "2",
              solution: "#include <iostream>\nusing namespace std;\n\nint linearSearch(int arr[], int n, int target) {\n    for (int i = 0; i < n; i++) {\n        if (arr[i] == target) return i;\n    }\n    return -1;\n}\n\nint main() {\n    int arr[] = {10, 20, 30, 40};\n    cout << linearSearch(arr, 4, 30) << endl;\n    return 0;\n}",
              explanation: "Scans array sequentially until target matches."
            },
            {
              id: "dsa-08-c-03",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Implement in-place reverse function `void reverseArray(int arr[], int n)`.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nvoid reverseArray(int arr[], int n) {\n    // Reverse in-place\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    reverseArray(arr, 5);\n    for (int i = 0; i < 5; i++) cout << arr[i] << \" \";\n    cout << endl;\n    return 0;\n}",
              expectedOutput: "5 4 3 2 1 ",
              solution: "#include <iostream>\nusing namespace std;\n\nvoid reverseArray(int arr[], int n) {\n    int s = 0, e = n - 1;\n    while (s < e) {\n        swap(arr[s], arr[e]);\n        s++;\n        e--;\n    }\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    reverseArray(arr, 5);\n    for (int i = 0; i < 5; i++) cout << arr[i] << \" \";\n    cout << endl;\n    return 0;\n}",
              explanation: "Two pointer swap from outside inwards."
            },
            {
              id: "dsa-08-c-04",
              type: "coding",
              subType: "implementation",
              difficulty: "medium",
              question: "Write `int sumArray(int arr[], int n)` calculating sum of all elements.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint sumArray(int arr[], int n) {\n    // Return total sum\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 10};\n    cout << sumArray(arr, 5) << endl;\n    return 0;\n}",
              expectedOutput: "20",
              solution: "#include <iostream>\nusing namespace std;\n\nint sumArray(int arr[], int n) {\n    int s = 0;\n    for (int i = 0; i < n; i++) s += arr[i];\n    return s;\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 10};\n    cout << sumArray(arr, 5) << endl;\n    return 0;\n}",
              explanation: "Accumulates elements into integer sum."
            },
            {
              id: "dsa-08-c-05",
              type: "coding",
              subType: "problem_solving",
              difficulty: "medium",
              question: "Implement function `void swapAlternate(int arr[], int n)` swapping adjacent pairs (e.g. 1 2 3 4 -> 2 1 4 3).",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nvoid swapAlternate(int arr[], int n) {\n    // Swap adjacent elements\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 4};\n    swapAlternate(arr, 4);\n    for (int x : arr) cout << x << \" \";\n    cout << endl;\n    return 0;\n}",
              expectedOutput: "2 1 4 3 ",
              solution: "#include <iostream>\nusing namespace std;\n\nvoid swapAlternate(int arr[], int n) {\n    for (int i = 0; i < n - 1; i += 2) {\n        swap(arr[i], arr[i + 1]);\n    }\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 4};\n    swapAlternate(arr, 4);\n    for (int x : arr) cout << x << \" \";\n    cout << endl;\n    return 0;\n}",
              explanation: "Steps by 2 swapping index i and i+1."
            },
            {
              id: "dsa-08-c-06",
              type: "coding",
              subType: "interview_challenge",
              difficulty: "hard",
              question: "Given an array where every element appears twice except one unique element, find the unique element in O(N) time and O(1) space using XOR.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint findUnique(int arr[], int n) {\n    // XOR trick\n}\n\nint main() {\n    int arr[] = {4, 1, 2, 1, 2};\n    cout << findUnique(arr, 5) << endl;\n    return 0;\n}",
              expectedOutput: "4",
              solution: "#include <iostream>\nusing namespace std;\n\nint findUnique(int arr[], int n) {\n    int ans = 0;\n    for (int i = 0; i < n; i++) ans ^= arr[i];\n    return ans;\n}\n\nint main() {\n    int arr[] = {4, 1, 2, 1, 2};\n    cout << findUnique(arr, 5) << endl;\n    return 0;\n}",
              explanation: "x ^ x = 0; duplicate pairs cancel out, leaving the single unique number."
            },
            {
              id: "dsa-08-c-07",
              type: "coding",
              subType: "debugging",
              difficulty: "hard",
              question: "Fix off-by-one boundary error in array loop: `for(int i = 0; i <= n; i++) sum += arr[i];`",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nint sumValid(int arr[], int n) {\n    int sum = 0;\n    // Fix loop condition\n    for (int i = 0; i < n; i++) sum += arr[i];\n    return sum;\n}\n\nint main() {\n    int arr[] = {10, 20};\n    cout << sumValid(arr, 2) << endl;\n    return 0;\n}",
              expectedOutput: "30",
              solution: "#include <iostream>\nusing namespace std;\n\nint sumValid(int arr[], int n) {\n    int sum = 0;\n    for (int i = 0; i < n; i++) sum += arr[i];\n    return sum;\n}\n\nint main() {\n    int arr[] = {10, 20};\n    cout << sumValid(arr, 2) << endl;\n    return 0;\n}",
              explanation: "Array indices run from 0 to n-1, so i < n is correct."
            },
            {
              id: "dsa-08-c-08",
              type: "coding",
              subType: "problem_solving",
              difficulty: "hard",
              question: "Write a function `bool isSorted(int arr[], int n)` checking if array is in non-decreasing order.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nbool isSorted(int arr[], int n) {\n    // Check if sorted\n}\n\nint main() {\n    int arr[] = {1, 2, 4, 8, 9};\n    cout << isSorted(arr, 5) << endl;\n    return 0;\n}",
              expectedOutput: "1",
              solution: "#include <iostream>\nusing namespace std;\n\nbool isSorted(int arr[], int n) {\n    for (int i = 1; i < n; i++) {\n        if (arr[i] < arr[i - 1]) return false;\n    }\n    return true;\n}\n\nint main() {\n    int arr[] = {1, 2, 4, 8, 9};\n    cout << isSorted(arr, 5) << endl;\n    return 0;\n}",
              explanation: "Verifies arr[i] >= arr[i-1] for all indices."
            },
            {
              id: "dsa-08-c-09",
              type: "coding",
              subType: "interview_challenge",
              difficulty: "interview",
              question: "Find second largest element in an array in a single pass O(N) time.",
              language: "cpp",
              starterCode: "#include <iostream>\n#include <climits>\nusing namespace std;\n\nint findSecondLargest(int arr[], int n) {\n    // Return 2nd largest\n}\n\nint main() {\n    int arr[] = {12, 35, 1, 10, 34, 1};\n    cout << findSecondLargest(arr, 6) << endl;\n    return 0;\n}",
              expectedOutput: "34",
              solution: "#include <iostream>\n#include <climits>\nusing namespace std;\n\nint findSecondLargest(int arr[], int n) {\n    int first = INT_MIN, second = INT_MIN;\n    for (int i = 0; i < n; i++) {\n        if (arr[i] > first) {\n            second = first;\n            first = arr[i];\n        } else if (arr[i] > second && arr[i] != first) {\n            second = arr[i];\n        }\n    }\n    return second;\n}\n\nint main() {\n    int arr[] = {12, 35, 1, 10, 34, 1};\n    cout << findSecondLargest(arr, 6) << endl;\n    return 0;\n}",
              explanation: "Updates first and second largest simultaneously in a single pass."
            },
            {
              id: "dsa-08-c-10",
              type: "coding",
              subType: "interview_challenge",
              difficulty: "interview",
              question: "Move all zeroes to the end of an array `arr[] = {0, 1, 0, 3, 12}` while maintaining relative order of non-zero elements.",
              language: "cpp",
              starterCode: "#include <iostream>\nusing namespace std;\n\nvoid moveZeroes(int arr[], int n) {\n    // Move zeroes to end\n}\n\nint main() {\n    int arr[] = {0, 1, 0, 3, 12};\n    moveZeroes(arr, 5);\n    for (int x : arr) cout << x << \" \";\n    cout << endl;\n    return 0;\n}",
              expectedOutput: "1 3 12 0 0 ",
              solution: "#include <iostream>\nusing namespace std;\n\nvoid moveZeroes(int arr[], int n) {\n    int insertPos = 0;\n    for (int i = 0; i < n; i++) {\n        if (arr[i] != 0) {\n            swap(arr[insertPos], arr[i]);\n            insertPos++;\n        }\n    }\n}\n\nint main() {\n    int arr[] = {0, 1, 0, 3, 12};\n    moveZeroes(arr, 5);\n    for (int x : arr) cout << x << \" \";\n    cout << endl;\n    return 0;\n}",
              explanation: "Two pointer swap: non-zero elements swap into insertPos position."
            }
          ]
        },
        {
          lectureId: "dsa-lecture-10",
          lectureNumber: 10,
          title: "Kadane's Algorithm | Maximum Subarray Sum | DSA Series",
          videoUrl: "https://www.youtube.com/embed/9IZYqostl2M",
          topics: ["Subarrays vs Subsequences", "Brute Force Subarray Sum O(N^3) to O(N^2)", "Kadane's Algorithm O(N)", "Handling All-Negative Arrays"],
          assessment: { totalQuestions: 20, fundamentalQuestions: 10, codingQuestions: 10 },
          fundamentalQuestions: [
            {
              id: "dsa-10-f-01",
              type: "fundamental",
              difficulty: "easy",
              question: "What is a subarray of an array?",
              options: [
                "A contiguous part of an array",
                "Any arbitrary subset of non-adjacent elements",
                "The sorted copy of an array",
                "The reversed array"
              ],
              correctAnswer: 0,
              explanation: "A subarray is a contiguous slice of consecutive elements from the original array."
            },
            {
              id: "dsa-10-f-02",
              type: "fundamental",
              difficulty: "easy",
              question: "How many total non-empty subarrays exist in an array of size N?",
              options: ["N * (N + 1) / 2", "2^N", "N^2", "N!"],
              correctAnswer: 0,
              explanation: "Choosing starting and ending index pairs gives sum(i=1..N) i = N * (N + 1) / 2."
            },
            {
              id: "dsa-10-f-03",
              type: "fundamental",
              difficulty: "easy",
              question: "What problem does Kadane's Algorithm solve?",
              options: [
                "Finding the contiguous subarray with the largest sum in O(N) time",
                "Sorting an array in O(N log N)",
                "Searching for an element in O(log N)",
                "Finding the shortest path in a graph"
              ],
              correctAnswer: 0,
              explanation: "Kadane's algorithm computes the Maximum Subarray Sum in linear O(N) time."
            },
            {
              id: "dsa-10-f-04",
              type: "fundamental",
              difficulty: "medium",
              question: "What is the core intuition behind Kadane's Algorithm?",
              options: [
                "Maintain a running current_sum; if current_sum drops below 0, reset it to 0 because negative prefixes decrease future subarray sums",
                "Sort the array first",
                "Multiply every element by -1",
                "Check every possible pair of indices"
              ],
              correctAnswer: 0,
              explanation: "A negative accumulated sum will always drag down any subsequent subarray sum, so resetting to 0 is optimal."
            },
            {
              id: "dsa-10-f-05",
              type: "fundamental",
              difficulty: "medium",
              question: "What is the time and space complexity of Kadane's Algorithm?",
              options: ["Time: O(N), Space: O(1)", "Time: O(N^2), Space: O(N)", "Time: O(N log N), Space: O(1)", "Time: O(2^N), Space: O(N)"],
              correctAnswer: 0,
              explanation: "It makes a single linear scan using two scalar tracker variables (current_sum, max_sum)."
            },
            {
              id: "dsa-10-f-06",
              type: "fundamental",
              difficulty: "medium",
              question: "If an array contains only negative numbers `[-5, -2, -8, -1]`, what should the Maximum Subarray Sum be?",
              options: [
                "-1 (the maximum single negative element)",
                "0",
                "-16",
                "Positive 1"
              ],
              correctAnswer: 0,
              explanation: "When at least one element must be chosen, the largest subarray sum of an all-negative array is its largest single value (-1)."
            },
            {
              id: "dsa-10-f-07",
              type: "fundamental",
              difficulty: "hard",
              question: "What is the brute force time complexity of checking all subarray sums without prefix sums?",
              options: ["O(N^3)", "O(N)", "O(log N)", "O(N!)"],
              correctAnswer: 0,
              explanation: "O(N^2) pairs of (start, end) multiplied by O(N) to sum the elements between them gives O(N^3)."
            },
            {
              id: "dsa-10-f-08",
              type: "fundamental",
              difficulty: "hard",
              question: "How can Kadane's Algorithm be extended to return the starting and ending indices of the maximum subarray?",
              options: [
                "Track the start index of the current running sum and update best_start / best_end whenever max_sum is updated",
                "Run a second binary search",
                "Sort the indices",
                "Use a hash map of all subarrays"
              ],
              correctAnswer: 0,
              explanation: "Recording the start index at each reset and capturing start/end when max_sum updates identifies the exact subarray."
            },
            {
              id: "dsa-10-f-09",
              type: "fundamental",
              difficulty: "interview",
              question: "How can Kadane's Algorithm be used to solve Maximum Circular Subarray Sum?",
              options: [
                "Max of (standard Kadane sum) and (Total Array Sum - Minimum Subarray Sum found via inverted Kadane)",
                "Running Kadane twice on the sorted array",
                "Circular arrays always have sum equal to total sum",
                "Circular subarrays cannot be solved in O(N)"
              ],
              correctAnswer: 0,
              explanation: "The wrapping maximum subarray corresponds to total_sum minus the minimum non-wrapping subarray sum."
            },
            {
              id: "dsa-10-f-10",
              type: "fundamental",
              difficulty: "interview",
              question: "Why does Dynamic Programming formulate Kadane's as `dp[i] = max(arr[i], dp[i-1] + arr[i])`?",
              options: [
                "At index i, the maximum subarray ending at i either starts fresh at arr[i] or extends the previous maximum ending at i-1",
                "Because dp arrays must store all prefixes",
                "Because recursion is always faster than loops",
                "To reduce space complexity from O(1) to O(N)"
              ],
              correctAnswer: 0,
              explanation: "The optimal substructure chooses between starting a new subarray at arr[i] or continuing the previous optimal subarray."
            }
          ],
          codingQuestions: [
            {
              id: "dsa-10-c-01",
              type: "coding",
              subType: "implementation",
              difficulty: "easy",
              question: "Implement standard Kadane's algorithm: `int maxSubarraySum(int arr[], int n)`.",
              language: "cpp",
              starterCode: "#include <iostream>\n#include <climits>\nusing namespace std;\n\nint maxSubarraySum(int arr[], int n) {\n    // Kadane algorithm\n}\n\nint main() {\n    int arr[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4};\n    cout << maxSubarraySum(arr, 9) << endl;\n    return 0;\n}",
              expectedOutput: "6",
              solution: "#include <iostream>\n#include <climits>\nusing namespace std;\n\nint maxSubarraySum(int arr[], int n) {\n    int max_so_far = INT_MIN, curr_sum = 0;\n    for (int i = 0; i < n; i++) {\n        curr_sum += arr[i];\n        if (curr_sum > max_so_far) max_so_far = curr_sum;\n        if (curr_sum < 0) curr_sum = 0;\n    }\n    return max_so_far;\n}\n\nint main() {\n    int arr[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4};\n    cout << maxSubarraySum(arr, 9) << endl;\n    return 0;\n}",
              explanation: "Linear scan tracking current_sum and max_so_far, resetting curr_sum when negative."
            },
            {
              id: "dsa-10-c-02",
              type: "coding",
              subType: "problem_solving",
              difficulty: "medium",
              question: "Implement Kadane's algorithm supporting all-negative arrays (e.g. `arr[] = {-3, -4, -1, -2}` returns -1).",
              language: "cpp",
              starterCode: "#include <iostream>\n#include <climits>\n#include <algorithm>\nusing namespace std;\n\nint maxSubArrayAllNegative(int arr[], int n) {\n    // Support all negative arrays\n}\n\nint main() {\n    int arr[] = {-3, -4, -1, -2};\n    cout << maxSubArrayAllNegative(arr, 4) << endl;\n    return 0;\n}",
              expectedOutput: "-1",
              solution: "#include <iostream>\n#include <climits>\n#include <algorithm>\nusing namespace std;\n\nint maxSubArrayAllNegative(int arr[], int n) {\n    int max_so_far = arr[0];\n    int curr_max = arr[0];\n    for (int i = 1; i < n; i++) {\n        curr_max = max(arr[i], curr_max + arr[i]);\n        max_so_far = max(max_so_far, curr_max);\n    }\n    return max_so_far;\n}\n\nint main() {\n    int arr[] = {-3, -4, -1, -2};\n    cout << maxSubArrayAllNegative(arr, 4) << endl;\n    return 0;\n}",
              explanation: "curr_max = max(arr[i], curr_max + arr[i]) correctly accommodates all negative arrays."
            },
            {
              id: "dsa-10-c-03",
              type: "coding",
              subType: "interview_challenge",
              difficulty: "hard",
              question: "Write Kadane's algorithm that also prints the start and end indices of the maximum subarray.",
              language: "cpp",
              starterCode: "#include <iostream>\n#include <climits>\nusing namespace std;\n\nvoid printMaxSubarrayIndices(int arr[], int n) {\n    // Print start and end index\n}\n\nint main() {\n    int arr[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4};\n    printMaxSubarrayIndices(arr, 9);\n    return 0;\n}",
              expectedOutput: "3 6",
              solution: "#include <iostream>\n#include <climits>\nusing namespace std;\n\nvoid printMaxSubarrayIndices(int arr[], int n) {\n    int max_so_far = INT_MIN, curr_sum = 0;\n    int start = 0, best_start = 0, best_end = 0;\n    for (int i = 0; i < n; i++) {\n        curr_sum += arr[i];\n        if (curr_sum > max_so_far) {\n            max_so_far = curr_sum;\n            best_start = start;\n            best_end = i;\n        }\n        if (curr_sum < 0) {\n            curr_sum = 0;\n            start = i + 1;\n        }\n    }\n    cout << best_start << \" \" << best_end << endl;\n}\n\nint main() {\n    int arr[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4};\n    printMaxSubarrayIndices(arr, 9);\n    return 0;\n}",
              explanation: "Tracks starting pointer at resets and logs best_start/best_end when max updates."
            }
          ]
        }
      ]
    }
  ]
};
