---
title: Common Vulnerabilities
created: 2024-08-21
tags: ['Non-technical']
---

<script>
  import { YouTube, Spotify, SoundCloud } from 'sveltekit-embed'
</script>

Before we get started, take a moment to unwind. Put on this soothing music, relax, and let the vibes flow as we dive into the intersection of relaxation and hacking. The perfect blend for a chill yet focused exploration.

<br/>
<SoundCloud
  soundcloudLink="https://soundcloud.com/relaxing-music-production/sets/playlist-of-relaxing-soft"
  width="200"
  height="100"
/>
<br/>
<br/>

# Introduction: The Importance of Cybersecurity in Today’s World
In today’s digital age, protecting both businesses and personal information is more critical than ever. With the rise of cyber threats, every organization and individual faces constant risks that could lead to data breaches, financial losses, and compromised security. Whether you’re managing a company’s network or simply safeguarding your own online presence, understanding and addressing these risks is crucial.

That’s why today, we’re going to dive into the world of cybersecurity. We’ll explore different types of vulnerabilities, discuss potential exploits, and highlight key strategies to keep both enterprises and personal data secure. From SQL injections to social engineering attacks, we’ll cover the essentials that everyone should know to stay protected in an increasingly connected world.

Let's get started by breaking down the most common vulnerabilities and how they can be exploited.

# Types of Vulnerabilities and Their Criticality

In this section, we'll explore some common types of vulnerabilities in cybersecurity and categorize them based on their level of criticality.

| **Vulnerability Type**       | **Description**                                                                                             | **Criticality Level** |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------- |
| **SQL Injection (SQLi)**     | A code injection technique where attackers manipulate a database query to access unauthorized information.  | High                  |
| **Cross-Site Scripting (XSS)**| A vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users.      | Medium to High        |
| **Buffer Overflow**          | Occurs when more data is written to a buffer than it can hold, leading to crashes or code execution.        | High                  |
| **Cross-Site Request Forgery (CSRF)** | Forces a user to execute unwanted actions on a web application where they are authenticated.           | Medium                |
| **Insecure Deserialization** | Leads to remote code execution or other attacks by manipulating serialized objects.                         | High                  |
| **Misconfigured Security Settings** | Weak configurations, such as default passwords or open ports, expose systems to attacks.            | Medium to High        |
| **Weak or Reused Passwords** | Common and easily guessable passwords make systems vulnerable to brute-force or credential-stuffing attacks. | Medium                |
| **Unpatched Software**       | Outdated software with known vulnerabilities that haven’t been updated or patched by administrators.        | High                  |
| **Insufficient Access Controls** | Improperly defined access permissions can lead to unauthorized access to sensitive data.              | High                  |
| **Social Engineering**       | Attacks like phishing that trick users into revealing sensitive information.                                 | Medium to High        |

---

**Criticality Level Explanation:**

- **Low:** The vulnerability is unlikely to be exploited or has limited impact.
- **Medium:** The vulnerability could be exploited and lead to moderate damage.
- **High:** The vulnerability is critical and could cause severe damage if exploited.

### Example Exploits:

#### 1. **SQL Injection Example:**

```sql title="sql-injection-example.sql"
SELECT * FROM users WHERE username = 'admin' AND password = '' OR '1'='1';
```

This classic SQL Injection bypasses authentication by exploiting a poorly constructed SQL query.

#### 2. **Cross-Site Scripting (XSS) Example:**

```html title="xss-alert-example.html"
<script>alert('XSS Attack');</script>
```

This script could be injected into a vulnerable website, leading to malicious actions.

#### 3. **Buffer Overflow Example:**

```c title="buffer-overflow-example.c"
char buffer[8];
strcpy(buffer, "AAAAAAAAAA");
```

This code causes a buffer overflow, potentially leading to arbitrary code execution.

#### 4. **Cross-Site Request Forgery (CSRF) Example:**

```html title="csrf-example.html"
<img src="http://victim.com/delete?account=1">
```

This image tag could trick a user into performing unwanted actions on a vulnerable website.

#### 5. **Insecure Deserialization Example:**

```python title="insecure-deserialization-example.py"
import pickle

# Untrusted input
untrusted_input = b"cos\nsystem\n(S'ls -la'\ntR."

# Deserialize the data
serialized_data = pickle.loads(untrusted_input)
```

This code demonstrates how deserializing untrusted data can lead to code execution.

#### 6. **Misconfigured Security Settings Example:**

```txt title="misconfigured-settings-example.txt"
Username: admin
Password: admin
```

Default credentials like these can leave systems exposed to unauthorized access.

#### 7. **Weak or Reused Passwords Example:**

```python title="weak-passwords-example.py"
password_list = ['123456', 'password', 'admin']
```

This Python list contains commonly used passwords that are easily guessable.

#### 8. **Unpatched Software Example:**

```bash title="unpatched-software-example.sh"
sudo apt-get install --only-upgrade vulnerable-package
```

Running this command updates a package to address known vulnerabilities.

#### 9. **Insufficient Access Controls Example:**

```js title="insufficient-access-example.js"
if (user.role === 'guest') {
    viewSensitiveData();
}
```

This code snippet demonstrates how insufficient access control can allow unauthorized users to access sensitive data.

#### 10. **Social Engineering Example:**

```html title="phishing-example.html"
<a href="http://fakebank.com/login">Click here to reset your password</a>
```

A phishing link that tricks users into providing their login credentials on a fraudulent website.
