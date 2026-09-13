import fs from 'fs';
import path from 'path';

const outDir = path.resolve('src/data/courses');

const linuxLectures = [
  {
    num: 1,
    id: "ldgl9Bd3lLg",
    title: "Chapter 1: Introduction to Linux, Distros & Architecture",
    topics: ["Linux Kernel vs Shell", "Popular Distributions (Ubuntu, Debian, CentOS, Arch)", "CLI vs GUI", "Terminal Setup & Basic Shell Interaction"],
    fundamental: [
      {
        id: "linux-01-f-01",
        type: "fundamental",
        difficulty: "easy",
        question: "What is the core component of the Linux Operating System responsible for resource management?",
        options: ["The Linux Kernel", "The Desktop Environment", "The Web Browser", "The File Manager"],
        correctAnswer: 0,
        explanation: "The kernel sits directly between hardware and software, managing CPU, memory, and devices."
      },
      {
        id: "linux-01-f-02",
        type: "fundamental",
        difficulty: "easy",
        question: "What role does the Linux Shell play?",
        options: [
          "It is a command language interpreter that executes commands entered from the terminal or scripts",
          "It is a database engine",
          "It is a hardware device",
          "It is an antivirus software"
        ],
        correctAnswer: 0,
        explanation: "The shell (e.g. bash, zsh) reads user commands and communicates with the kernel to execute them."
      },
      {
        id: "linux-01-f-03",
        type: "fundamental",
        difficulty: "medium",
        question: "What is the root user account (superuser) in Linux?",
        options: [
          "The administrative account with unrestricted full access and privileges over the entire system",
          "A guest account with read-only permissions",
          "An account created exclusively for web servers",
          "A temporary login session"
        ],
        correctAnswer: 0,
        explanation: "Root (UID 0) has complete administrative authority to read, write, and execute any file or process."
      },
      {
        id: "linux-01-f-04",
        type: "fundamental",
        difficulty: "medium",
        question: "What is the purpose of the `sudo` command?",
        options: [
          "Execute a command with the security privileges of the superuser or another user",
          "Shutdown the machine immediately",
          "Switch user passwords permanently",
          "Speed up command execution"
        ],
        correctAnswer: 0,
        explanation: "sudo (superuser do) temporarily elevates permissions for authorized users."
      },
      {
        id: "linux-01-f-05",
        type: "fundamental",
        difficulty: "hard",
        question: "What is the difference between monolithic kernels (like Linux) and microkernels?",
        options: [
          "Monolithic kernels execute core OS services (drivers, memory, filesystems) in kernel space; microkernels keep only essential IPC/scheduling in kernel space",
          "Monolithic kernels cannot run on servers",
          "Microkernels are written in Python",
          "There is no architectural difference"
        ],
        correctAnswer: 0,
        explanation: "Linux is a monolithic kernel providing high performance by executing drivers and services in supervisor space."
      }
    ],
    coding: [
      {
        id: "linux-01-c-01",
        type: "coding",
        subType: "implementation",
        difficulty: "easy",
        question: "Write the command to display the current logged-in username in terminal.",
        language: "bash",
        starterCode: "# Enter command\n",
        expectedOutput: "whoami",
        solution: "whoami",
        explanation: "whoami displays the effective username of the current user."
      },
      {
        id: "linux-01-c-02",
        type: "coding",
        subType: "implementation",
        difficulty: "easy",
        question: "Write the command to display kernel version and system architecture information.",
        language: "bash",
        starterCode: "# Enter command\n",
        expectedOutput: "uname -a",
        solution: "uname -a",
        explanation: "uname -a prints all system information including kernel name, release, and machine architecture."
      },
      {
        id: "linux-01-c-03",
        type: "coding",
        subType: "implementation",
        difficulty: "medium",
        question: "Write the command to view command history with line numbers.",
        language: "bash",
        starterCode: "# View history\n",
        expectedOutput: "history",
        solution: "history",
        explanation: "history lists previous commands executed in the current shell session."
      },
      {
        id: "linux-01-c-04",
        type: "coding",
        subType: "problem_solving",
        difficulty: "medium",
        question: "Write the command to create an alias named `ll` that runs `ls -la`.",
        language: "bash",
        starterCode: "# Create alias\n",
        expectedOutput: "alias ll='ls -la'",
        solution: "alias ll='ls -la'",
        explanation: "alias creates custom shortcuts in bash."
      },
      {
        id: "linux-01-c-05",
        type: "coding",
        subType: "interview_challenge",
        difficulty: "hard",
        question: "Write the command to find the absolute path of the executable binary `python3`.",
        language: "bash",
        starterCode: "# Find binary location\n",
        expectedOutput: "which python3",
        solution: "which python3",
        explanation: "which searches PATH directories and prints the binary file location."
      }
    ]
  },
  {
    num: 2,
    id: "ldgl9Bd3lLg",
    title: "Chapter 2: File System Hierarchy & Navigation",
    topics: ["Root Directory (`/`) & Standard Paths (`/etc`, `/var`, `/home`, `/bin`)", "Navigation (`cd`, `pwd`, `ls`)", "File & Directory Creation (`touch`, `mkdir -p`)", "Copying, Moving & Removing (`cp`, `mv`, `rm -rf`)"],
    fundamental: [
      {
        id: "linux-02-f-01",
        type: "fundamental",
        difficulty: "easy",
        question: "What is the single root directory at the top of the entire Linux filesystem hierarchy?",
        options: ["/ (forward slash)", "C:\\", "/root", "/home"],
        correctAnswer: 0,
        explanation: "In Linux, everything branches off the single top-level root directory represented as `/`."
      },
      {
        id: "linux-02-f-02",
        type: "fundamental",
        difficulty: "easy",
        question: "What directory in Linux conventionally stores system configuration files?",
        options: ["/etc", "/dev", "/tmp", "/bin"],
        correctAnswer: 0,
        explanation: "`/etc` holds host-specific system-wide configuration files (e.g., fstab, hosts, nginx.conf)."
      },
      {
        id: "linux-02-f-03",
        type: "fundamental",
        difficulty: "medium",
        question: "What is the difference between `.` and `..` in directory navigation?",
        options: [
          "`.` represents the current directory; `..` represents the parent directory",
          "`.` is for root; `..` is for home",
          "`.` deletes files; `..` creates files",
          "There is no difference"
        ],
        correctAnswer: 0,
        explanation: "Single dot refers to working directory; double dot refers to one level up in hierarchy."
      },
      {
        id: "linux-02-f-04",
        type: "fundamental",
        difficulty: "medium",
        question: "What is the difference between a Hard Link and a Soft (Symbolic) Link?",
        options: [
          "A hard link points directly to the file's inode on disk; a symbolic link is a pointer file containing the pathname of the target",
          "Hard links can cross file systems; soft links cannot",
          "Deleting the original file breaks hard links",
          "Symbolic links use more RAM"
        ],
        correctAnswer: 0,
        explanation: "Hard links share the same inode number; symlinks are independent pointer files that break if the target is moved."
      },
      {
        id: "linux-02-f-05",
        type: "fundamental",
        difficulty: "hard",
        question: "What is stored in `/var/log` on Linux servers?",
        options: [
          "Variable system logs, application logs, and service activity records",
          "Temporary files deleted on reboot",
          "User personal downloads",
          "Device hardware drivers"
        ],
        correctAnswer: 0,
        explanation: "`/var` contains variable data that dynamically changes during system operation, particularly log files."
      }
    ],
    coding: [
      {
        id: "linux-02-c-01",
        type: "coding",
        subType: "implementation",
        difficulty: "easy",
        question: "Write the command to print the full path of the current working directory.",
        language: "bash",
        starterCode: "# Print working directory\n",
        expectedOutput: "pwd",
        solution: "pwd",
        explanation: "pwd prints the current working directory path."
      },
      {
        id: "linux-02-c-02",
        type: "coding",
        subType: "implementation",
        difficulty: "easy",
        question: "Write the command to list all files, including hidden files (starting with dot), in detailed long format.",
        language: "bash",
        starterCode: "# List detailed hidden files\n",
        expectedOutput: "ls -la",
        solution: "ls -la",
        explanation: "-l specifies long format and -a includes hidden files."
      },
      {
        id: "linux-02-c-03",
        type: "coding",
        subType: "problem_solving",
        difficulty: "medium",
        question: "Write the command to create nested directories `projects/frontend/src` in a single command.",
        language: "bash",
        starterCode: "# Create nested directories\n",
        expectedOutput: "mkdir -p projects/frontend/src",
        solution: "mkdir -p projects/frontend/src",
        explanation: "mkdir with -p flag creates all non-existent parent directories."
      },
      {
        id: "linux-02-c-04",
        type: "coding",
        subType: "implementation",
        difficulty: "medium",
        question: "Write the command to recursively copy directory `source_folder` to `backup_folder`.",
        language: "bash",
        starterCode: "# Copy directory recursively\n",
        expectedOutput: "cp -r source_folder backup_folder",
        solution: "cp -r source_folder backup_folder",
        explanation: "cp with -r (or -R) copies directories recursively."
      },
      {
        id: "linux-02-c-05",
        type: "coding",
        subType: "interview_challenge",
        difficulty: "hard",
        question: "Write the command to create a symbolic link named `my_link` pointing to `/var/www/html`.",
        language: "bash",
        starterCode: "# Create symlink\n",
        expectedOutput: "ln -s /var/www/html my_link",
        solution: "ln -s /var/www/html my_link",
        explanation: "ln with -s flag creates a symbolic link."
      }
    ]
  },
  {
    num: 3,
    id: "ldgl9Bd3lLg",
    title: "Chapter 3: File Permissions & Ownership",
    topics: ["User, Group, Others (`u`, `g`, `o`)", "Read, Write, Execute (`r`, `w`, `x`)", "Octal Notation (755, 644, 777)", "Modifying Permissions (`chmod`) & Ownership (`chown`)"],
    fundamental: [
      {
        id: "linux-03-f-01",
        type: "fundamental",
        difficulty: "easy",
        question: "What do the three permission groups in Linux file security represent?",
        options: ["User (owner), Group, and Others (world)", "Admin, Guest, Root", "Local, Network, Cloud", "Read, Write, Execute"],
        correctAnswer: 0,
        explanation: "Linux separates access rights into User (u), Group (g), and Others (o)."
      },
      {
        id: "linux-03-f-02",
        type: "fundamental",
        difficulty: "easy",
        question: "In octal permission notation, what numerical value corresponds to Read (r=4), Write (w=2), and Execute (x=1)?",
        options: ["7 (4 + 2 + 1)", "3", "5", "6"],
        correctAnswer: 0,
        explanation: "r=4, w=2, x=1. Total full permission rwx equals 4+2+1 = 7."
      },
      {
        id: "linux-03-f-03",
        type: "fundamental",
        difficulty: "medium",
        question: "What permissions does `chmod 644 filename` grant?",
        options: [
          "Owner: Read/Write (6); Group: Read-only (4); Others: Read-only (4)",
          "Full access to everyone",
          "Read and execute for all",
          "Read-only for owner, write for others"
        ],
        correctAnswer: 0,
        explanation: "6 = rw-, 4 = r--, 4 = r--, standard for regular documents and web files."
      },
      {
        id: "linux-03-f-04",
        type: "fundamental",
        difficulty: "medium",
        question: "What does the Execute (x) permission mean on a directory in Linux?",
        options: [
          "Permission to enter (cd into) the directory and access files inside it",
          "Permission to run the directory as a program",
          "Permission to delete the directory",
          "Permission to rename the directory"
        ],
        correctAnswer: 0,
        explanation: "On directories, execute bit controls traversal rights to cd into and access subfiles."
      },
      {
        id: "linux-03-f-05",
        type: "fundamental",
        difficulty: "hard",
        question: "What is the Sticky Bit (e.g. on `/tmp` with mode 1777)?",
        options: [
          "A special permission flag preventing users from deleting or renaming files owned by other users within that shared directory",
          "A flag that locks files from editing",
          "An encryption algorithm",
          "A flag to compress files"
        ],
        correctAnswer: 0,
        explanation: "Sticky bit allows all users to write files to /tmp, but restricts deletion only to file owners or root."
      }
    ],
    coding: [
      {
        id: "linux-03-c-01",
        type: "coding",
        subType: "implementation",
        difficulty: "easy",
        question: "Write the command to make script `deploy.sh` executable by the file owner.",
        language: "bash",
        starterCode: "# Add execute permission\n",
        expectedOutput: "chmod +x deploy.sh",
        solution: "chmod +x deploy.sh",
        explanation: "chmod +x (or chmod u+x) adds execute permission."
      },
      {
        id: "linux-03-c-02",
        type: "coding",
        subType: "implementation",
        difficulty: "easy",
        question: "Write the command to set permissions on `index.html` to 644 using octal notation.",
        language: "bash",
        starterCode: "# Set mode 644\n",
        expectedOutput: "chmod 644 index.html",
        solution: "chmod 644 index.html",
        explanation: "chmod 644 index.html sets rw-r--r--."
      },
      {
        id: "linux-03-c-03",
        type: "coding",
        subType: "implementation",
        difficulty: "medium",
        question: "Write the command to change the owner of `app.log` to user `ubuntu`.",
        language: "bash",
        starterCode: "# Change owner\n",
        expectedOutput: "chown ubuntu app.log",
        solution: "chown ubuntu app.log",
        explanation: "chown modifies the user ownership of files."
      },
      {
        id: "linux-03-c-04",
        type: "coding",
        subType: "problem_solving",
        difficulty: "medium",
        question: "Write the command to change both owner to `www-data` and group to `www-data` recursively on `/var/www`.",
        language: "bash",
        starterCode: "# Change owner:group recursively\n",
        expectedOutput: "chown -R www-data:www-data /var/www",
        solution: "chown -R www-data:www-data /var/www",
        explanation: "chown -R user:group sets both user and group recursively."
      },
      {
        id: "linux-03-c-05",
        type: "coding",
        subType: "interview_challenge",
        difficulty: "hard",
        question: "Write the command to set permissions of directory `shared_folder` to 755 recursively.",
        language: "bash",
        starterCode: "# chmod recursively\n",
        expectedOutput: "chmod -R 755 shared_folder",
        solution: "chmod -R 755 shared_folder",
        explanation: "-R flag applies permission change across all child directories and files."
      }
    ]
  },
  {
    num: 4,
    id: "ldgl9Bd3lLg",
    title: "Chapter 4: Process Management & Monitoring",
    topics: ["Listing Processes (`ps aux`, `pstree`)", "Interactive Task Manager (`top`, `htop`)", "Terminating Processes (`kill`, `kill -9`, `pkill`)", "Service Management with systemd (`systemctl`)"],
    fundamental: [
      {
        id: "linux-04-f-01",
        type: "fundamental",
        difficulty: "easy",
        question: "What is a PID in Linux process management?",
        options: ["Process Identifier: a unique numerical identifier assigned to each running process by the kernel", "Program Instruction Descriptor", "Password Identification", "Port ID"],
        correctAnswer: 0,
        explanation: "Each active process on the system has a distinct integer PID."
      },
      {
        id: "linux-04-f-02",
        type: "fundamental",
        difficulty: "easy",
        question: "Which signal corresponds to graceful termination in Linux `kill` command (default signal 15)?",
        options: ["SIGTERM (15)", "SIGKILL (9)", "SIGHUP (1)", "SIGSTOP (19)"],
        correctAnswer: 0,
        explanation: "SIGTERM asks process to shut down cleanly; SIGKILL immediately forces process death without cleanup."
      },
      {
        id: "linux-04-f-03",
        type: "fundamental",
        difficulty: "medium",
        question: "What does the first process started by the Linux kernel with PID 1 represent in modern distributions?",
        options: [
          "systemd (or init): the ancestor of all other user-space processes",
          "The bash shell",
          "The web browser",
          "The network adapter"
        ],
        correctAnswer: 0,
        explanation: "PID 1 is the init/systemd system manager responsible for initializing the OS and managing services."
      },
      {
        id: "linux-04-f-04",
        type: "fundamental",
        difficulty: "medium",
        question: "What is a Zombie Process in Linux?",
        options: [
          "A process that has finished execution but still has an entry in the process table because its parent has not read its exit status",
          "A virus infecting the system",
          "A process taking 100% CPU",
          "A process running in the background"
        ],
        correctAnswer: 0,
        explanation: "Zombies occupy no memory but hold a process table entry until the parent calls wait()."
      },
      {
        id: "linux-04-f-05",
        type: "fundamental",
        difficulty: "hard",
        question: "What does the load average metric (1 min, 5 min, 15 min) in `uptime` or `top` measure?",
        options: [
          "The average number of processes in a runnable or uninterruptible state (waiting for CPU or disk I/O)",
          "The percentage of free RAM",
          "The network bandwidth in Megabits",
          "The temperature of the CPU in Celsius"
        ],
        correctAnswer: 0,
        explanation: "Load average represents demand for system resources (CPU and uninterruptible disk wait)."
      }
    ],
    coding: [
      {
        id: "linux-04-c-01",
        type: "coding",
        subType: "implementation",
        difficulty: "easy",
        question: "Write the command to list all currently running processes on the system using BSD syntax.",
        language: "bash",
        starterCode: "# List all processes\n",
        expectedOutput: "ps aux",
        solution: "ps aux",
        explanation: "ps aux displays all processes owned by all users with terminal and execution details."
      },
      {
        id: "linux-04-c-02",
        type: "coding",
        subType: "implementation",
        difficulty: "easy",
        question: "Write the command to force kill process with PID `1234` using SIGKILL.",
        language: "bash",
        starterCode: "# Force kill process\n",
        expectedOutput: "kill -9 1234",
        solution: "kill -9 1234",
        explanation: "kill -9 sends non-catchable SIGKILL to terminate PID 1234."
      },
      {
        id: "linux-04-c-03",
        type: "coding",
        subType: "implementation",
        difficulty: "medium",
        question: "Write the command to check the status of the `nginx` service using `systemctl`.",
        language: "bash",
        starterCode: "# Check service status\n",
        expectedOutput: "systemctl status nginx",
        solution: "systemctl status nginx",
        explanation: "systemctl status displays service state and recent journal logs."
      },
      {
        id: "linux-04-c-04",
        type: "coding",
        subType: "problem_solving",
        difficulty: "medium",
        question: "Write the command to restart the `nginx` service using systemctl with root permissions.",
        language: "bash",
        starterCode: "# Restart nginx service\n",
        expectedOutput: "sudo systemctl restart nginx",
        solution: "sudo systemctl restart nginx",
        explanation: "systemctl restart stops and restarts the service."
      },
      {
        id: "linux-04-c-05",
        type: "coding",
        subType: "interview_challenge",
        difficulty: "hard",
        question: "Write a command pipeline that finds all running processes matching `'node'` using `ps` and `grep`.",
        language: "bash",
        starterCode: "# Find node processes\n",
        expectedOutput: "ps aux | grep node",
        solution: "ps aux | grep node",
        explanation: "Pipes process list into grep filter to find matching process names."
      }
    ]
  },
  {
    num: 5,
    id: "ldgl9Bd3lLg",
    title: "Chapter 5: Text Processing & Package Management",
    topics: ["Package Managers (apt, apt-get, yum, dnf)", "Stream Search with `grep`", "Stream Editing with `sed` & `awk`", "Redirection (`>`, `>>`) and Piping (`|`)"],
    fundamental: [
      {
        id: "linux-05-f-01",
        type: "fundamental",
        difficulty: "easy",
        question: "What is the difference between standard output redirection `>` and `>>`?",
        options: [
          "`>` overwrites the target file; `>>` appends to the end of the file",
          "`>` copies the file; `>>` moves it",
          "`>` is for errors only; `>>` is for text",
          "They behave identically"
        ],
        correctAnswer: 0,
        explanation: "Single angle bracket truncates and overwrites; double angle bracket appends without erasing existing content."
      },
      {
        id: "linux-05-f-02",
        type: "fundamental",
        difficulty: "easy",
        question: "What does the pipe operator `|` do in Linux shell?",
        options: [
          "Directs the standard output of the command on the left as standard input to the command on the right",
          "Runs commands simultaneously without sharing data",
          "Terminates the second command",
          "Compresses the command output into zip"
        ],
        correctAnswer: 0,
        explanation: "Pipes chain commands together, feeding stdout of one into stdin of the next."
      },
      {
        id: "linux-05-f-03",
        type: "fundamental",
        difficulty: "medium",
        question: "What does the package management command `sudo apt update` do on Debian/Ubuntu?",
        options: [
          "Refreshes local package index lists from remote repositories to see available software versions",
          "Upgrades all installed applications to newest versions",
          "Uninstalls obsolete packages",
          "Reboots the server"
        ],
        correctAnswer: 0,
        explanation: "`apt update` updates package repository metadata; `apt upgrade` installs the new versions."
      },
      {
        id: "linux-05-f-04",
        type: "fundamental",
        difficulty: "medium",
        question: "What is `awk` primarily designed for in text processing?",
        options: [
          "Pattern scanning and text column/field processing language",
          "Drawing graphs in terminal",
          "Compiling C++ code",
          "Testing ping latency"
        ],
        correctAnswer: 0,
        explanation: "awk parses records into whitespace-delimited fields ($1, $2, ...) for extraction and aggregation."
      },
      {
        id: "linux-05-f-05",
        type: "fundamental",
        difficulty: "hard",
        question: "What file descriptor number represents `stderr` (Standard Error) in Linux?",
        options: ["2", "1 (stdout)", "0 (stdin)", "3"],
        correctAnswer: 0,
        explanation: "File descriptor 0 is stdin, 1 is stdout, and 2 is stderr (e.g., `2>&1` redirects stderr to stdout)."
      }
    ],
    coding: [
      {
        id: "linux-05-c-01",
        type: "coding",
        subType: "implementation",
        difficulty: "easy",
        question: "Write the command to search for lines containing `'ERROR'` case-insensitively in `app.log` using `grep`.",
        language: "bash",
        starterCode: "# grep command\n",
        expectedOutput: "grep -i 'ERROR' app.log",
        solution: "grep -i 'ERROR' app.log",
        explanation: "grep with -i flag executes case-insensitive matching."
      },
      {
        id: "linux-05-c-02",
        type: "coding",
        subType: "implementation",
        difficulty: "easy",
        question: "Write the command to display the first 15 lines of `server.log`.",
        language: "bash",
        starterCode: "# Display first 15 lines\n",
        expectedOutput: "head -n 15 server.log",
        solution: "head -n 15 server.log",
        explanation: "head with -n 15 displays the beginning 15 lines."
      },
      {
        id: "linux-05-c-03",
        type: "coding",
        subType: "implementation",
        difficulty: "medium",
        question: "Write the command to follow continuous real-time additions to log file `error.log` using `tail`.",
        language: "bash",
        starterCode: "# Follow live log\n",
        expectedOutput: "tail -f error.log",
        solution: "tail -f error.log",
        explanation: "tail -f keeps file open and streams live appended output."
      },
      {
        id: "linux-05-c-04",
        type: "coding",
        subType: "problem_solving",
        difficulty: "medium",
        question: "Write an `awk` command to print only the first column of each row in `data.csv` delimited by space.",
        language: "bash",
        starterCode: "# Print first column\n",
        expectedOutput: "awk '{print $1}' data.csv",
        solution: "awk '{print $1}' data.csv",
        explanation: "awk '{print $1}' outputs the first whitespace-separated column."
      },
      {
        id: "linux-05-c-05",
        type: "coding",
        subType: "interview_challenge",
        difficulty: "hard",
        question: "Write a command that counts the number of lines containing word `'404'` in `access.log` using `grep` and `wc`.",
        language: "bash",
        starterCode: "# Count 404 occurrences\n",
        expectedOutput: "grep '404' access.log | wc -l",
        solution: "grep '404' access.log | wc -l",
        explanation: "Pipes matching lines into wc -l to count total matches."
      }
    ]
  },
  {
    num: 6,
    id: "ldgl9Bd3lLg",
    title: "Chapter 6: Networking, SSH & Shell Scripting",
    topics: ["Network Diagnostics (`ping`, `netstat`, `ss`, `curl`)", "Remote Access via SSH & Key-Based Authentication", "File Transfer with `scp` and `rsync`", "Bash Scripting Basics (Variables, If, Loops, Shebang)"],
    fundamental: [
      {
        id: "linux-06-f-01",
        type: "fundamental",
        difficulty: "easy",
        question: "What is the standard port used by the Secure Shell (SSH) protocol for remote server access?",
        options: ["Port 22", "Port 80 (HTTP)", "Port 443 (HTTPS)", "Port 21 (FTP)"],
        correctAnswer: 0,
        explanation: "SSH operates on TCP port 22 by default."
      },
      {
        id: "linux-06-f-02",
        type: "fundamental",
        difficulty: "easy",
        question: "What is the Shebang (`#!/bin/bash`) line at the very start of a shell script?",
        options: [
          "An interpreter directive specifying which shell/interpreter binary executes the script",
          "A comment for developers only",
          "A compiler configuration",
          "A password hash"
        ],
        correctAnswer: 0,
        explanation: "#!/bin/bash directs the OS kernel program loader to run the script using /bin/bash."
      },
      {
        id: "linux-06-f-03",
        type: "fundamental",
        difficulty: "medium",
        question: "Why is SSH key-based authentication preferred over passwords in production DevOps environments?",
        options: [
          "Asymmetric cryptography (private/public keys) eliminates brute-force dictionary attacks and allows automated scripting without plaintext passwords",
          "Passwords are not supported in Linux",
          "SSH keys use zero bandwidth",
          "SSH keys expire every 5 minutes automatically"
        ],
        correctAnswer: 0,
        explanation: "Cryptographic key pairs provide robust security and support automated CI/CD pipelines safely."
      },
      {
        id: "linux-06-f-04",
        type: "fundamental",
        difficulty: "medium",
        question: "What tool is best for synchronizing files and directories between servers with delta-transfer algorithm?",
        options: ["rsync", "ftp", "telnet", "cat"],
        correctAnswer: 0,
        explanation: "rsync transmits only changed blocks across network links, minimizing bandwidth."
      },
      {
        id: "linux-06-f-05",
        type: "fundamental",
        difficulty: "hard",
        question: "In Bash scripting, what does the special variable `$?` contain immediately after a command finishes?",
        options: [
          "The exit status code of the last executed command (0 for success, non-zero for error)",
          "The PID of the current shell",
          "The number of arguments passed to script",
          "The current script filename"
        ],
        correctAnswer: 0,
        explanation: "$? holds the integer exit return code of the most recently executed foreground command."
      }
    ],
    coding: [
      {
        id: "linux-06-c-01",
        type: "coding",
        subType: "implementation",
        difficulty: "easy",
        question: "Write the command to SSH into remote server `192.168.1.50` with username `ubuntu`.",
        language: "bash",
        starterCode: "# Connect via SSH\n",
        expectedOutput: "ssh ubuntu@192.168.1.50",
        solution: "ssh ubuntu@192.168.1.50",
        explanation: "ssh user@hostname connects to the remote host."
      },
      {
        id: "linux-06-c-02",
        type: "coding",
        subType: "implementation",
        difficulty: "easy",
        question: "Write the command to download a web page or file from `https://example.com/data.json` using `curl`.",
        language: "bash",
        starterCode: "# Download file with curl\n",
        expectedOutput: "curl -O https://example.com/data.json",
        solution: "curl -O https://example.com/data.json",
        explanation: "curl with -O saves file using remote filename."
      },
      {
        id: "linux-06-c-03",
        type: "coding",
        subType: "implementation",
        difficulty: "medium",
        question: "Write the command to securely copy local file `build.zip` to `ubuntu@192.168.1.50:/home/ubuntu/` using `scp`.",
        language: "bash",
        starterCode: "# scp file to remote\n",
        expectedOutput: "scp build.zip ubuntu@192.168.1.50:/home/ubuntu/",
        solution: "scp build.zip ubuntu@192.168.1.50:/home/ubuntu/",
        explanation: "scp transfers files securely over SSH."
      },
      {
        id: "linux-06-c-04",
        type: "coding",
        subType: "problem_solving",
        difficulty: "medium",
        question: "Write a short Bash loop printing numbers 1 to 5.",
        language: "bash",
        starterCode: "# Write for loop\n",
        expectedOutput: "for i in {1..5}; do echo $i; done",
        solution: "for i in {1..5}; do echo $i; done",
        explanation: "Standard bash brace expansion loop."
      },
      {
        id: "linux-06-c-05",
        type: "coding",
        subType: "interview_challenge",
        difficulty: "hard",
        question: "Write a bash if condition checking if file `/etc/hosts` exists, and if so, echo 'Exists'.",
        language: "bash",
        starterCode: "# Check if file exists\n",
        expectedOutput: "if [ -f /etc/hosts ]; then echo 'Exists'; fi",
        solution: "if [ -f /etc/hosts ]; then echo 'Exists'; fi",
        explanation: "-f test operator checks if regular file exists."
      }
    ]
  }
];

const linuxCourse = {
  courseId: "course-linux",
  title: "Linux Tutorial For Beginners & DevOps",
  description: "Complete Linux masterclass covering architecture, terminal commands, directory navigation, file permissions, process monitoring, package management, SSH, networking, and shell scripting.",
  category: "devops",
  company: "CodeWithHarry",
  instructor: "CodeWithHarry",
  thumbnail: "https://i.ytimg.com/vi/ldgl9Bd3lLg/hqdefault.jpg",
  difficulty: "Beginner",
  duration: "10 hours",
  rating: 4.9,
  learners: "450k+",
  skills: ["Linux", "Bash", "Terminal", "File System", "Chmod/Chown", "Process Management", "Systemctl", "Networking", "SSH", "DevOps"],
  jobRoles: ["DevOps Engineer", "Cloud Engineer", "System Administrator", "Backend Developer"],
  source: {
    type: "youtube_video",
    videoUrl: "https://youtu.be/ldgl9Bd3lLg?si=h9zxDQRThiRyNQOF"
  },
  modules: [
    {
      moduleId: "linux-mod-1",
      title: "Module 1: Architecture, Filesystem & Permissions",
      lectures: linuxLectures.slice(0, 3).map(l => ({
        lectureId: `linux-lec-0${l.num}`,
        lectureNumber: l.num,
        title: l.title,
        videoUrl: `https://www.youtube.com/embed/${l.id}`,
        topics: l.topics,
        assessment: { totalQuestions: 10, fundamentalQuestions: 5, codingQuestions: 5 },
        fundamentalQuestions: l.fundamental,
        codingQuestions: l.coding
      }))
    },
    {
      moduleId: "linux-mod-2",
      title: "Module 2: Processes, Text Processing & Networking",
      lectures: linuxLectures.slice(3).map(l => ({
        lectureId: `linux-lec-0${l.num}`,
        lectureNumber: l.num,
        title: l.title,
        videoUrl: `https://www.youtube.com/embed/${l.id}`,
        topics: l.topics,
        assessment: { totalQuestions: 10, fundamentalQuestions: 5, codingQuestions: 5 },
        fundamentalQuestions: l.fundamental,
        codingQuestions: l.coding
      }))
    }
  ]
};

fs.writeFileSync(path.join(outDir, 'linuxCourse.ts'), `import { Course } from '../types';\n\nexport const linuxCourseData: Course = ${JSON.stringify(linuxCourse, null, 2)};\n`);
console.log("Wrote linuxCourse.ts");
