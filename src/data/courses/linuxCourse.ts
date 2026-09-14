import { Course } from '../types';

export const linuxCourseData: Course = {
  "courseId": "course-linux",
  "title": "Linux Tutorial For Beginners & DevOps",
  "description": "Complete Linux masterclass covering architecture, terminal commands, directory navigation, file permissions, process monitoring, package management, SSH, networking, and shell scripting.",
  "category": "devops",
  "company": "CodeWithHarry",
  "instructor": "CodeWithHarry",
  "thumbnail": "https://i.ytimg.com/vi/ldgl9Bd3lLg/hqdefault.jpg",
  "difficulty": "Beginner",
  "duration": "10 hours",
  "durationHours": 10,
  "language": "Hindi",
  "certificateAvailable": true,
  "isFree": true,
  "isTrending": true,
  "rating": 4.9,
  "learners": "450k+",
  "skills": [
    "Linux",
    "Bash",
    "Terminal",
    "File System",
    "Chmod/Chown",
    "Process Management",
    "Systemctl",
    "Networking",
    "SSH",
    "DevOps"
  ],
  "jobRoles": [
    "DevOps Engineer",
    "Cloud Engineer",
    "System Administrator",
    "Backend Developer"
  ],
  "source": {
    "type": "youtube_video",
    "videoUrl": "https://youtu.be/ldgl9Bd3lLg?si=h9zxDQRThiRyNQOF"
  },
  "modules": [
    {
      "moduleId": "linux-mod-1",
      "title": "Module 1: Architecture, Filesystem & Permissions",
      "lectures": [
        {
          "lectureId": "linux-lec-01",
          "lectureNumber": 1,
          "title": "Chapter 1: Introduction to Linux, Distros & Architecture",
          "videoUrl": "https://www.youtube.com/embed/ldgl9Bd3lLg",
          "topics": [
            "Linux Kernel vs Shell",
            "Popular Distributions (Ubuntu, Debian, CentOS, Arch)",
            "CLI vs GUI",
            "Terminal Setup & Basic Shell Interaction"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "linux-01-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "What is the core component of the Linux Operating System responsible for resource management?",
              "options": [
                "The Linux Kernel",
                "The Desktop Environment",
                "The Web Browser",
                "The File Manager"
              ],
              "correctAnswer": 0,
              "explanation": "The kernel sits directly between hardware and software, managing CPU, memory, and devices."
            },
            {
              "id": "linux-01-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "What role does the Linux Shell play?",
              "options": [
                "It is a command language interpreter that executes commands entered from the terminal or scripts",
                "It is a database engine",
                "It is a hardware device",
                "It is an antivirus software"
              ],
              "correctAnswer": 0,
              "explanation": "The shell (e.g. bash, zsh) reads user commands and communicates with the kernel to execute them."
            },
            {
              "id": "linux-01-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What is the root user account (superuser) in Linux?",
              "options": [
                "The administrative account with unrestricted full access and privileges over the entire system",
                "A guest account with read-only permissions",
                "An account created exclusively for web servers",
                "A temporary login session"
              ],
              "correctAnswer": 0,
              "explanation": "Root (UID 0) has complete administrative authority to read, write, and execute any file or process."
            },
            {
              "id": "linux-01-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What is the purpose of the `sudo` command?",
              "options": [
                "Execute a command with the security privileges of the superuser or another user",
                "Shutdown the machine immediately",
                "Switch user passwords permanently",
                "Speed up command execution"
              ],
              "correctAnswer": 0,
              "explanation": "sudo (superuser do) temporarily elevates permissions for authorized users."
            },
            {
              "id": "linux-01-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "What is the difference between monolithic kernels (like Linux) and microkernels?",
              "options": [
                "Monolithic kernels execute core OS services (drivers, memory, filesystems) in kernel space; microkernels keep only essential IPC/scheduling in kernel space",
                "Monolithic kernels cannot run on servers",
                "Microkernels are written in Python",
                "There is no architectural difference"
              ],
              "correctAnswer": 0,
              "explanation": "Linux is a monolithic kernel providing high performance by executing drivers and services in supervisor space."
            }
          ],
          "codingQuestions": [
            {
              "id": "linux-01-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write the command to display the current logged-in username in terminal.",
              "language": "bash",
              "starterCode": "# Enter command\n",
              "expectedOutput": "whoami",
              "solution": "whoami",
              "explanation": "whoami displays the effective username of the current user."
            },
            {
              "id": "linux-01-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write the command to display kernel version and system architecture information.",
              "language": "bash",
              "starterCode": "# Enter command\n",
              "expectedOutput": "uname -a",
              "solution": "uname -a",
              "explanation": "uname -a prints all system information including kernel name, release, and machine architecture."
            },
            {
              "id": "linux-01-c-03",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "medium",
              "question": "Write the command to view command history with line numbers.",
              "language": "bash",
              "starterCode": "# View history\n",
              "expectedOutput": "history",
              "solution": "history",
              "explanation": "history lists previous commands executed in the current shell session."
            },
            {
              "id": "linux-01-c-04",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Write the command to create an alias named `ll` that runs `ls -la`.",
              "language": "bash",
              "starterCode": "# Create alias\n",
              "expectedOutput": "alias ll='ls -la'",
              "solution": "alias ll='ls -la'",
              "explanation": "alias creates custom shortcuts in bash."
            },
            {
              "id": "linux-01-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Write the command to find the absolute path of the executable binary `python3`.",
              "language": "bash",
              "starterCode": "# Find binary location\n",
              "expectedOutput": "which python3",
              "solution": "which python3",
              "explanation": "which searches PATH directories and prints the binary file location."
            }
          ]
        },
        {
          "lectureId": "linux-lec-02",
          "lectureNumber": 2,
          "title": "Chapter 2: File System Hierarchy & Navigation",
          "videoUrl": "https://www.youtube.com/embed/ldgl9Bd3lLg",
          "topics": [
            "Root Directory (`/`) & Standard Paths (`/etc`, `/var`, `/home`, `/bin`)",
            "Navigation (`cd`, `pwd`, `ls`)",
            "File & Directory Creation (`touch`, `mkdir -p`)",
            "Copying, Moving & Removing (`cp`, `mv`, `rm -rf`)"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "linux-02-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "What is the single root directory at the top of the entire Linux filesystem hierarchy?",
              "options": [
                "/ (forward slash)",
                "C:\\",
                "/root",
                "/home"
              ],
              "correctAnswer": 0,
              "explanation": "In Linux, everything branches off the single top-level root directory represented as `/`."
            },
            {
              "id": "linux-02-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "What directory in Linux conventionally stores system configuration files?",
              "options": [
                "/etc",
                "/dev",
                "/tmp",
                "/bin"
              ],
              "correctAnswer": 0,
              "explanation": "`/etc` holds host-specific system-wide configuration files (e.g., fstab, hosts, nginx.conf)."
            },
            {
              "id": "linux-02-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What is the difference between `.` and `..` in directory navigation?",
              "options": [
                "`.` represents the current directory; `..` represents the parent directory",
                "`.` is for root; `..` is for home",
                "`.` deletes files; `..` creates files",
                "There is no difference"
              ],
              "correctAnswer": 0,
              "explanation": "Single dot refers to working directory; double dot refers to one level up in hierarchy."
            },
            {
              "id": "linux-02-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What is the difference between a Hard Link and a Soft (Symbolic) Link?",
              "options": [
                "A hard link points directly to the file's inode on disk; a symbolic link is a pointer file containing the pathname of the target",
                "Hard links can cross file systems; soft links cannot",
                "Deleting the original file breaks hard links",
                "Symbolic links use more RAM"
              ],
              "correctAnswer": 0,
              "explanation": "Hard links share the same inode number; symlinks are independent pointer files that break if the target is moved."
            },
            {
              "id": "linux-02-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "What is stored in `/var/log` on Linux servers?",
              "options": [
                "Variable system logs, application logs, and service activity records",
                "Temporary files deleted on reboot",
                "User personal downloads",
                "Device hardware drivers"
              ],
              "correctAnswer": 0,
              "explanation": "`/var` contains variable data that dynamically changes during system operation, particularly log files."
            }
          ],
          "codingQuestions": [
            {
              "id": "linux-02-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write the command to print the full path of the current working directory.",
              "language": "bash",
              "starterCode": "# Print working directory\n",
              "expectedOutput": "pwd",
              "solution": "pwd",
              "explanation": "pwd prints the current working directory path."
            },
            {
              "id": "linux-02-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write the command to list all files, including hidden files (starting with dot), in detailed long format.",
              "language": "bash",
              "starterCode": "# List detailed hidden files\n",
              "expectedOutput": "ls -la",
              "solution": "ls -la",
              "explanation": "-l specifies long format and -a includes hidden files."
            },
            {
              "id": "linux-02-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Write the command to create nested directories `projects/frontend/src` in a single command.",
              "language": "bash",
              "starterCode": "# Create nested directories\n",
              "expectedOutput": "mkdir -p projects/frontend/src",
              "solution": "mkdir -p projects/frontend/src",
              "explanation": "mkdir with -p flag creates all non-existent parent directories."
            },
            {
              "id": "linux-02-c-04",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "medium",
              "question": "Write the command to recursively copy directory `source_folder` to `backup_folder`.",
              "language": "bash",
              "starterCode": "# Copy directory recursively\n",
              "expectedOutput": "cp -r source_folder backup_folder",
              "solution": "cp -r source_folder backup_folder",
              "explanation": "cp with -r (or -R) copies directories recursively."
            },
            {
              "id": "linux-02-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Write the command to create a symbolic link named `my_link` pointing to `/var/www/html`.",
              "language": "bash",
              "starterCode": "# Create symlink\n",
              "expectedOutput": "ln -s /var/www/html my_link",
              "solution": "ln -s /var/www/html my_link",
              "explanation": "ln with -s flag creates a symbolic link."
            }
          ]
        },
        {
          "lectureId": "linux-lec-03",
          "lectureNumber": 3,
          "title": "Chapter 3: File Permissions & Ownership",
          "videoUrl": "https://www.youtube.com/embed/ldgl9Bd3lLg",
          "topics": [
            "User, Group, Others (`u`, `g`, `o`)",
            "Read, Write, Execute (`r`, `w`, `x`)",
            "Octal Notation (755, 644, 777)",
            "Modifying Permissions (`chmod`) & Ownership (`chown`)"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "linux-03-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "What do the three permission groups in Linux file security represent?",
              "options": [
                "User (owner), Group, and Others (world)",
                "Admin, Guest, Root",
                "Local, Network, Cloud",
                "Read, Write, Execute"
              ],
              "correctAnswer": 0,
              "explanation": "Linux separates access rights into User (u), Group (g), and Others (o)."
            },
            {
              "id": "linux-03-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "In octal permission notation, what numerical value corresponds to Read (r=4), Write (w=2), and Execute (x=1)?",
              "options": [
                "7 (4 + 2 + 1)",
                "3",
                "5",
                "6"
              ],
              "correctAnswer": 0,
              "explanation": "r=4, w=2, x=1. Total full permission rwx equals 4+2+1 = 7."
            },
            {
              "id": "linux-03-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What permissions does `chmod 644 filename` grant?",
              "options": [
                "Owner: Read/Write (6); Group: Read-only (4); Others: Read-only (4)",
                "Full access to everyone",
                "Read and execute for all",
                "Read-only for owner, write for others"
              ],
              "correctAnswer": 0,
              "explanation": "6 = rw-, 4 = r--, 4 = r--, standard for regular documents and web files."
            },
            {
              "id": "linux-03-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What does the Execute (x) permission mean on a directory in Linux?",
              "options": [
                "Permission to enter (cd into) the directory and access files inside it",
                "Permission to run the directory as a program",
                "Permission to delete the directory",
                "Permission to rename the directory"
              ],
              "correctAnswer": 0,
              "explanation": "On directories, execute bit controls traversal rights to cd into and access subfiles."
            },
            {
              "id": "linux-03-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "What is the Sticky Bit (e.g. on `/tmp` with mode 1777)?",
              "options": [
                "A special permission flag preventing users from deleting or renaming files owned by other users within that shared directory",
                "A flag that locks files from editing",
                "An encryption algorithm",
                "A flag to compress files"
              ],
              "correctAnswer": 0,
              "explanation": "Sticky bit allows all users to write files to /tmp, but restricts deletion only to file owners or root."
            }
          ],
          "codingQuestions": [
            {
              "id": "linux-03-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write the command to make script `deploy.sh` executable by the file owner.",
              "language": "bash",
              "starterCode": "# Add execute permission\n",
              "expectedOutput": "chmod +x deploy.sh",
              "solution": "chmod +x deploy.sh",
              "explanation": "chmod +x (or chmod u+x) adds execute permission."
            },
            {
              "id": "linux-03-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write the command to set permissions on `index.html` to 644 using octal notation.",
              "language": "bash",
              "starterCode": "# Set mode 644\n",
              "expectedOutput": "chmod 644 index.html",
              "solution": "chmod 644 index.html",
              "explanation": "chmod 644 index.html sets rw-r--r--."
            },
            {
              "id": "linux-03-c-03",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "medium",
              "question": "Write the command to change the owner of `app.log` to user `ubuntu`.",
              "language": "bash",
              "starterCode": "# Change owner\n",
              "expectedOutput": "chown ubuntu app.log",
              "solution": "chown ubuntu app.log",
              "explanation": "chown modifies the user ownership of files."
            },
            {
              "id": "linux-03-c-04",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Write the command to change both owner to `www-data` and group to `www-data` recursively on `/var/www`.",
              "language": "bash",
              "starterCode": "# Change owner:group recursively\n",
              "expectedOutput": "chown -R www-data:www-data /var/www",
              "solution": "chown -R www-data:www-data /var/www",
              "explanation": "chown -R user:group sets both user and group recursively."
            },
            {
              "id": "linux-03-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Write the command to set permissions of directory `shared_folder` to 755 recursively.",
              "language": "bash",
              "starterCode": "# chmod recursively\n",
              "expectedOutput": "chmod -R 755 shared_folder",
              "solution": "chmod -R 755 shared_folder",
              "explanation": "-R flag applies permission change across all child directories and files."
            }
          ]
        }
      ]
    }
  ]
};
