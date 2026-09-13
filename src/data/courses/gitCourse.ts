import { Course } from "../types";

export const gitCourseData: Course = {
  courseId: "git-and-github",
  title: "Git & GitHub For First Year Students (What Actually Matters)",
  description: "A complete, practical guide to Git and GitHub designed specifically for engineering and CS students. Learn version control, branching, PRs, merge conflict resolution, and open-source contribution workflows.",
  company: "Not Your College",
  difficulty: "Beginner",
  duration: "1 hr 45 min",
  category: "Web Development",
  rating: 4.9,
  learners: "28.5k",
  certificateAvailable: true,
  isFree: true,
  isTrending: true,
  isNew: true,
  thumbnail: "https://i.ytimg.com/vi/BnEFaIfcwOU/hqdefault.jpg",
  officialUrl: "https://youtu.be/BnEFaIfcwOU?si=i4bs8AyS8eJXE3TX",
  skills: ["Git", "GitHub", "Version Control", "Open Source", "Branching", "Pull Requests", "Merge Conflicts"],
  jobRoles: ["Software Engineer", "Frontend Developer", "Backend Developer", "DevOps Engineer"],
  source: {
    type: "youtube_video",
    videoUrl: "https://youtu.be/BnEFaIfcwOU?si=i4bs8AyS8eJXE3TX",
    playlistUrl: "https://youtu.be/BnEFaIfcwOU?si=i4bs8AyS8eJXE3TX"
  },
  instructor: "Not Your College",
  modules: [
    {
      moduleId: "git-basics-module",
      title: "Module 1: Git & GitHub Essentials (What Actually Matters)",
      lectures: [
        {
          lectureId: "git-github-masterclass",
          lectureNumber: 1,
          title: "Git & GitHub Full Course (What Actually Matters)",
          duration: "1:45:00",
          videoUrl: "https://www.youtube-nocookie.com/embed/BnEFaIfcwOU",
          topics: [
            "Why Git & Version Control is Essential",
            "Git Installation & Global Config (user.name & user.email)",
            "Git Architecture: Working Directory, Staging Area & Repository",
            "git init, git status, git add & git commit",
            "git log, git diff & inspecting commit history",
            "Branching Strategies: git branch, checkout & switch",
            "Merging & Handling Merge Conflicts",
            "GitHub Setup: SSH Keys vs Personal Access Tokens",
            "git remote add origin & git push / git pull",
            "Forks, Pull Requests (PRs) & Open Source Contribution Workflow",
            "Best Practices for .gitignore and Commit Messages"
          ],
          assessment: {
            totalQuestions: 20,
            fundamentalQuestions: 10,
            codingQuestions: 10
          },
          fundamentalQuestions: [
            {
              id: "git-q1",
              type: "fundamental",
              question: "What is the primary difference between Git and GitHub?",
              options: [
                "Git is a local distributed version control system; GitHub is a cloud hosting platform for Git repositories.",
                "Git is a cloud platform; GitHub is a command-line software tool.",
                "Git is only for Linux; GitHub is for Windows and macOS.",
                "There is no difference; they are different names for the same software."
              ],
              correctAnswer: 0,
              explanation: "Git is a local CLI distributed version control system created by Linus Torvalds, while GitHub is a web-based hosting service and collaboration platform for Git repositories.",
              difficulty: "easy"
            },
            {
              id: "git-q2",
              type: "fundamental",
              question: "Which command initializes a new empty Git repository in the current folder?",
              options: ["git start", "git create", "git init", "git new"],
              correctAnswer: 2,
              explanation: "`git init` creates an empty Git repository by generating a hidden `.git` folder in the root of the project.",
              difficulty: "easy"
            },
            {
              id: "git-q3",
              type: "fundamental",
              question: "What are the three fundamental states/areas of files in a local Git repository?",
              options: [
                "Draft, Review, and Production",
                "Working Directory, Staging Area (Index), and Git Repository (.git)",
                "Local, Remote, and Cache",
                "Client, Server, and Cloud"
              ],
              correctAnswer: 1,
              explanation: "Files in Git move between the Working Directory (modified files), the Staging Area (prepared files via `git add`), and the Repository (saved snapshots via `git commit`).",
              difficulty: "medium"
            },
            {
              id: "git-q4",
              type: "fundamental",
              question: "Which command stages all modified and newly created files in the current directory for the next commit?",
              options: ["git commit -a", "git push --all", "git add .", "git stage *"],
              correctAnswer: 2,
              explanation: "`git add .` stages all changes in the current directory and its subdirectories to the staging area.",
              difficulty: "easy"
            },
            {
              id: "git-q5",
              type: "fundamental",
              question: "What does the `.gitignore` file do?",
              options: [
                "It deletes uncommitted files from disk automatically.",
                "It specifies untracked files and folders (e.g. node_modules, .env) that Git should intentionally ignore.",
                "It prevents other developers from pulling code from your repository.",
                "It hides secret branches from the GitHub UI."
              ],
              correctAnswer: 1,
              explanation: "The `.gitignore` file contains pattern rules specifying file paths and directories that Git should ignore, preventing build artifacts, dependencies, and environment secrets from being committed.",
              difficulty: "easy"
            },
            {
              id: "git-q6",
              type: "fundamental",
              question: "What command creates and immediately switches to a new branch named 'feature-login'?",
              options: [
                "git branch -c feature-login",
                "git checkout -b feature-login (or git switch -c feature-login)",
                "git branch feature-login --switch",
                "git new feature-login"
              ],
              correctAnswer: 1,
              explanation: "`git checkout -b <branch>` or the modern `git switch -c <branch>` both create the branch and immediately switch the HEAD pointer to it.",
              difficulty: "medium"
            },
            {
              id: "git-q7",
              type: "fundamental",
              question: "When does a merge conflict occur in Git?",
              options: [
                "When a file has too many lines of code.",
                "When two branches modify different files in the repository.",
                "When different commits modify the same lines of a file in different ways, and Git cannot resolve it automatically.",
                "When you commit without providing a commit message."
              ],
              correctAnswer: 2,
              explanation: "A merge conflict happens when competing changes are made to the same lines of a file, requiring human intervention to choose which code to keep.",
              difficulty: "medium"
            },
            {
              id: "git-q8",
              type: "fundamental",
              question: "What is the difference between `git pull` and `git fetch`?",
              options: [
                "`git fetch` downloads remote changes but does not merge them; `git pull` executes `git fetch` followed by `git merge`.",
                "`git pull` only downloads commits; `git fetch` uploads local commits to GitHub.",
                "There is no difference; they are aliases.",
                "`git fetch` overwrites local files completely; `git pull` creates backup copies."
              ],
              correctAnswer: 0,
              explanation: "`git fetch` updates your local copy of remote branches without modifying your working files. `git pull` fetches the remote commits and immediately merges them into your current branch.",
              difficulty: "medium"
            },
            {
              id: "git-q9",
              type: "fundamental",
              question: "What is a Pull Request (PR) on GitHub?",
              options: [
                "A command line shortcut to execute `git pull`.",
                "A formal proposal to review and merge changes from one branch (or fork) into another branch.",
                "A request sent to GitHub support for repository access.",
                "A method to delete a branch after merging."
              ],
              correctAnswer: 1,
              explanation: "A Pull Request (PR) is a GitHub feature that lets developers notify team members about code they have pushed, opening a discussion for code review, CI/CD checks, and approval before merging.",
              difficulty: "easy"
            },
            {
              id: "git-q10",
              type: "fundamental",
              question: "Which command shows a condensed, single-line representation of commit history?",
              options: ["git log --oneline", "git show -s", "git history --short", "git status -s"],
              correctAnswer: 0,
              explanation: "`git log --oneline` prints each commit with its truncated 7-character SHA-1 hash and the commit title.",
              difficulty: "medium"
            }
          ],
          codingQuestions: [
            {
              id: "git-c1",
              type: "coding",
              subType: "problem_solving",
              difficulty: "easy",
              question: "Write the command sequence to set your global Git username to 'John Doe' and user email to 'john@example.com'.",
              starterCode: "# Write git config commands here\n",
              solution: "git config --global user.name \"John Doe\"\ngit config --global user.email \"john@example.com\"",
              language: "bash",
              explanation: "Use `git config --global user.name` and `git config --global user.email` to set system-wide credentials."
            },
            {
              id: "git-c2",
              type: "coding",
              subType: "problem_solving",
              difficulty: "easy",
              question: "Write the commands to stage all current files in the repository and commit them with the message 'feat: initial project setup'.",
              starterCode: "# Write commands to add and commit\n",
              solution: "git add .\ngit commit -m \"feat: initial project setup\"",
              language: "bash",
              explanation: "Use `git add .` to stage changes followed by `git commit -m \"...\"`."
            },
            {
              id: "git-c3",
              type: "coding",
              subType: "problem_solving",
              difficulty: "easy",
              question: "Write the modern command to create and switch immediately to a new branch named 'feature/auth-login'.",
              starterCode: "# Create and switch branch\n",
              solution: "git switch -c feature/auth-login",
              language: "bash",
              explanation: "You can use `git switch -c <name>` or `git checkout -b <name>`."
            },
            {
              id: "git-c4",
              type: "coding",
              subType: "problem_solving",
              difficulty: "medium",
              question: "Given the remote repository URL `https://github.com/user/my-app.git`, write commands to add origin and push the 'main' branch setting upstream.",
              starterCode: "# Add remote origin and push upstream\n",
              solution: "git remote add origin https://github.com/user/my-app.git\ngit push -u origin main",
              language: "bash",
              explanation: "Use `git remote add origin <url>` and `git push -u origin main`."
            },
            {
              id: "git-c5",
              type: "coding",
              subType: "problem_solving",
              difficulty: "medium",
              question: "Write the command to discard all unstaged changes in the working directory for a file named `src/index.js`.",
              starterCode: "# Restore modified file to HEAD\n",
              solution: "git restore src/index.js",
              language: "bash",
              explanation: "In modern Git, `git restore <filename>` restores the file to the last committed state."
            },
            {
              id: "git-c6",
              type: "coding",
              subType: "problem_solving",
              difficulty: "medium",
              question: "Assume you are currently on the 'main' branch. Write the command to merge the 'feature/navbar' branch into 'main'.",
              starterCode: "# Merge feature/navbar into current branch\n",
              solution: "git merge feature/navbar",
              language: "bash",
              explanation: "Use `git merge <branch-name>` while checked out on main."
            },
            {
              id: "git-c7",
              type: "coding",
              subType: "problem_solving",
              difficulty: "medium",
              question: "Write the command to stash all uncommitted changes with a message 'WIP: payment gateway'.",
              starterCode: "# Stash working changes\n",
              solution: "git stash push -m \"WIP: payment gateway\"",
              language: "bash",
              explanation: "Use `git stash push -m \"message\"` to save uncommitted work safely."
            },
            {
              id: "git-c8",
              type: "coding",
              subType: "problem_solving",
              difficulty: "easy",
              question: "Write the command to reapply the most recently stashed changes and remove them from the stash list.",
              starterCode: "# Apply and drop latest stash\n",
              solution: "git stash pop",
              language: "bash",
              explanation: "`git stash pop` applies and deletes stash@{0}."
            },
            {
              id: "git-c9",
              type: "coding",
              subType: "problem_solving",
              difficulty: "easy",
              question: "Write the command to clone `https://github.com/facebook/react.git` into a local directory named `react-repo`.",
              starterCode: "# Clone repo\n",
              solution: "git clone https://github.com/facebook/react.git react-repo",
              language: "bash",
              explanation: "Pass the directory name as the second argument: `git clone <url> <dir>`."
            },
            {
              id: "git-c10",
              type: "coding",
              subType: "problem_solving",
              difficulty: "easy",
              question: "Write the command to view unstaged differences line-by-line between the working tree and the staging area.",
              starterCode: "# View unstaged diff\n",
              solution: "git diff",
              language: "bash",
              explanation: "`git diff` displays unstaged changes; `git diff --staged` displays staged changes."
            }
          ]
        }
      ]
    }
  ]
};
