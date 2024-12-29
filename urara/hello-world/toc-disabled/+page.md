---
title: Termux What is it and Basic Concepts
summary: Introduction to Termux and its fundamentals for beginners.
created: 2024-12-29
tags: ['Termux', 'Linux', 'Android']
---

# Introduction to [Termux](https://en.wikipedia.org/wiki/Termux)

![Termux Logo](https://imgs.search.brave.com/DrVxsM8SiWFRBsCOhbzUFpeTPaOwEYO0JQtRWTuYD74/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I1L1Rlcm11eC5z/dmc)

Welcome! Today, we’re going to discuss an incredible application that is a must-have for those in the fields of development, programming, server management, hacking, and more.

Yes, we’re talking about **Termux**.

Termux is a terminal emulator based on GNU/Linux. It provides a shell interface with commands similar to those you would use in any Linux distribution. Out of the box, it comes with a set of preinstalled packages to get you started. But the real power lies in its extensive repositories, distributed globally, allowing you to download many more utilities.

### Updating Packages

To keep the system up to date, you can check for updates and install them using two options: `apt` and `pkg`.

#### Example using `apt`:

```bash
apt update && apt upgrade -y
```

#### Example using `pkg`:

```bash
pkg update && pkg upgrade
```

If you encounter any issues with the repositories, you can check which one is closest to you and has the lowest ping using:

```bash
termux-change-repo
```

### Installing Utilities

Once everything is up to date, you can download essential utilities. For example, let’s install:

- **nano** and **vim**: Popular text editors for the terminal.
- **htop**: A tool to monitor running processes, CPU, and RAM usage.
- **fastfetch**: A system information tool, similar to `neofetch`, but faster since it’s written in C.

To install them, use:

```bash
apt install -y fastfetch nano vim htop
```

### Understanding the Shell Prompt

The prompt is the line where you input commands, typically represented as:

```bash
~ $
```

This interface is called the **Shell**. Various shell types include:

- `bash`
- `ash`
- `sh`
- `zsh`

Most shells allow customization to display additional data in the prompt, such as time, user, path, or exit codes.

#### Checking Your Current Shell

You can identify the shell you are using with the following commands:

```bash
env | grep "SHELL"
```

This will return the absolute path, often indicating you’re using `bash`.

Alternatively, you can use:

```bash
echo $SHELL
```

This references an **environment variable**, and other useful variables include:

- `$TERM`: Terminal type
- `$USER`: Current user
- `$PWD`: Current directory

For prompt customization, consider using:

- [oh-my-bash](https://github.com/ohmybash/oh-my-bash)
- [oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh)

These projects provide installation guides to enhance your shell prompt.

### Accessing System Paths

To access system directories such as `Downloads`, `DCIM`, `Pictures`, and more, you need to grant Termux storage access. Use:

```bash
termux-setup-storage
```

Allow the requested permissions when prompted.

### Creating Scripts

At this stage, you’re ready to create scripts in languages like Python, Bash, C++, and Java. Ensure the required dependencies or compilers are installed. For example:

#### Installing Python:

```bash
apt install python  # Installs Python 3
apt install python2 # Installs Python 2
```

#### Installing a C++ Compiler:

```bash
apt install g++
```

### Important Note

The version of Termux available on the Play Store is outdated and may generate errors. It is recommended to download Termux from:

- [GitHub](https://github.com/termux/termux-app)
- [F-Droid](https://f-droid.org/packages/com.termux/)

### Conclusion

This concludes our introduction to Termux and its basic functionalities. If you’re interested in learning more about GNU/Linux basics, there are many resources available online. From my side, I’ll continue to upload tutorials on this and other topics.

Thank you for reading!


