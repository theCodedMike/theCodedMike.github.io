---
title: 844, Backspace String Compare
icon: discover
date: 2023-10-08
order: 9
sticky: true
category: array
tag: 
  - easy
  - array
  - two pointers
  - stack
  - string
---

## I Problem

Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

**Example 1:**
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

**Example 2:**
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

**Example 3:**
Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".

**Constraints:**

- 1 <= s.length, t.length <= 200
- s and t only contain lowercase letters and '#' characters.

**Follow up:**
Can you solve it in O(n) time and O(1) space?

**Related Topics:**

- Two Pointers
- String
- Stack
- Simulation

## II Solution

### Approach 1: Build String

::: code-tabs
@tab Rust

```rust
///  Time Complexity: O(M+N)
///
/// Space Complexity: O(M+N)
pub fn backspace_compare(s: String, t: String) -> bool {
    let build = |str: String| -> String {
        let mut res = String::new();

        for c in str.chars() {
            match c {
                '#' => {
                    res.pop();
                }
                _ => {
                    res.push(c);
                }
            }
        }

        res
    };

    build(s) == build(t)
}
```

@tab Java

```java
import java.util.Arrays;
import java.util.Stack;
import java.util.function.Function;

public boolean backspaceCompare(String s, String t) {
    Function<String, String> build = (String str) -> {
        Stack<Character> chars = new Stack<>();

        for (char ch : str.toCharArray()) {
            if (ch == '#') {
                if (!chars.isEmpty()) {
                    chars.pop();
                }
            } else {
                chars.push(ch);
            }
        }

        return Arrays.toString(chars.toArray());
    };

    return build.apply(s).equals(build.apply(t));
}
```

@tab Go

```go
func backspaceCompare(s string, t string) bool {
    build := func(str string) string {
        res := make([]rune, 0)

        for _, char := range str {
            if char == '#' {
                if len(res) > 0 {
                    res = res[:len(res)-1]
                }
            } else {
                res = append(res, char)
            }
        }

        return string(res)
    }

    return build(s) == build(t)
}
```

@tab C\#

```csharp
public bool BackspaceCompare(string s, string t)
{
    Func<string, string> build = (str) =>
    {
        Stack<char> res = new Stack<char>();

        foreach (var ch in str.ToCharArray())
        {
            if (ch == '#')
            {
                if (res.Count != 0)
                    res.Pop();
            }
            else
                res.Push(ch);
        }

        return new string(res.ToArray());
    };

    return build(s) == build(t);
}
```

@tab C++

```cpp
bool backspaceCompare(string s, string t) {
    auto build = [](const string &str) -> string {
        string res;

        for (const char ch: str) {
            if (ch == '#') {
                if (!res.empty())
                    res.pop_back();
            } else
                res.push_back(ch);
        }

        return res;
    };

    return build(s) == build(t);
}
```

:::

### Approach 2: Two Pointers

::: code-tabs
@tab Rust

```rust
///  Time Complexity: O(M+N)
///
/// Space Complexity: O(1)
pub fn backspace_compare(s: String, t: String) -> bool {
    let (mut s_idx, mut t_idx) = (s.len() as i32 - 1, t.len() as i32 - 1);
    let (mut s_sharp_count, mut t_sharp_count) = (0, 0);

    while s_idx >= 0 || t_idx >= 0 {
        while s_idx >= 0 {
            if s.chars().nth(s_idx as usize) == Some('#') {
                s_sharp_count += 1;
                s_idx -= 1;
            } else if s_sharp_count > 0 {
                s_sharp_count -= 1;
                s_idx -= 1;
            } else {
                break;
            }
        }
        while t_idx >= 0 {
            if t.chars().nth(t_idx as usize) == Some('#') {
                t_sharp_count += 1;
                t_idx -= 1;
            } else if t_sharp_count > 0 {
                t_sharp_count -= 1;
                t_idx -= 1;
            } else {
                break;
            }
        }
        // If two characters are different
        if s_idx >= 0 && t_idx >= 0
            && s.chars().nth(s_idx as usize) != t.chars().nth(t_idx as usize) {
            return false;
        }
        // If char vs nothing
        if (s_idx >= 0) != (t_idx >= 0) {
            return false;
        }

        s_idx -= 1;
        t_idx -= 1;
    }

    true
}
```

@tab Java

```java
public boolean backspaceCompare(String s, String t) {
    int sIdx = s.length() - 1;
    int tIdx = t.length() - 1;
    int sSharpCount = 0;
    int tSharpCount = 0;

    while (sIdx >= 0 || tIdx >= 0) {
        while (sIdx >= 0) {
            if (s.charAt(sIdx) == '#') {
                sSharpCount++;
                sIdx--;
            } else if (sSharpCount > 0) {
                sSharpCount--;
                sIdx--;
            } else {
                break;
            }
        }
        while (tIdx >= 0) {
            if (t.charAt(tIdx) == '#') {
                tSharpCount++;
                tIdx--;
            } else if (tSharpCount > 0) {
                tSharpCount--;
                tIdx--;
            } else {
                break;
            }
        }
        // If two characters are different
        if (sIdx >= 0 && tIdx >= 0 && s.charAt(sIdx) != t.charAt(tIdx)) {
            return false;
        }
        // If char vs nothing
        if ((sIdx >= 0) != (tIdx >= 0)) {
            return false;
        }

        sIdx--;
        tIdx--;
    }

    return true;
}
```

@tab Go

```go
func backspaceCompare(s string, t string) bool {
    sIdx, tIdx := len(s)-1, len(t)-1
    sSharpCount, tSharpCount := 0, 0

    for sIdx >= 0 || tIdx >= 0 {
        for sIdx >= 0 {
            if s[sIdx] == '#' {
                sSharpCount++
                sIdx--
            } else if sSharpCount > 0 {
                sSharpCount--
                sIdx--
            } else {
                break
            }
        }
        for tIdx >= 0 {
            if t[tIdx] == '#' {
                tSharpCount++
                tIdx--
            } else if tSharpCount > 0 {
                tSharpCount--
                tIdx--
            } else {
                break
            }
        }

        if sIdx >= 0 && tIdx >= 0 && s[sIdx] != t[tIdx] {
            return false
        }
        if (sIdx >= 0) != (tIdx >= 0) {
            return false
        }

        sIdx--
        tIdx--
    }

    return true
}
```

@tab C\#

```csharp
public bool BackspaceCompare(string s, string t)
{
    (int sIdx, int tIdx) = (s.Length - 1, t.Length - 1);
    (int sSharpCount, int tSharpCount) = (0, 0);

    while (sIdx >= 0 || tIdx >= 0)
    {
        while (sIdx >= 0)
        {
            if (s[sIdx] == '#')
            {
                sSharpCount++;
                sIdx--;
            } else if (sSharpCount > 0)
            {
                sSharpCount--;
                sIdx--;
            }
            else
                break;
        }
        while (tIdx >= 0)
        {
            if (t[tIdx] == '#')
            {
                tSharpCount++;
                tIdx--;
            } 
            else if (tSharpCount > 0)
            {
                tSharpCount--;
                tIdx--;
            }
            else
                break;
        }
        
        if (sIdx >= 0 && tIdx >= 0 && s[sIdx] != t[tIdx])
            return false;
        if ((sIdx >= 0) != (tIdx >= 0))
            return false;
        
        sIdx--;
        tIdx--;
    }

    return true;
}
```

@tab C++

```cpp
bool backspaceCompare(string s, string t) {
    auto [sIdx, tIdx] = std::make_pair(
        static_cast<int>(s.size()) - 1, static_cast<int>(t.size()) - 1);
    auto [sSharpCount, tSharpCount] = std::make_pair(0, 0);
    
    while (sIdx >= 0 || tIdx >= 0) {
        while (sIdx >= 0) {
            if (s[sIdx] == '#') {
                sSharpCount++;
                sIdx--;
            } else if (sSharpCount > 0) {
                sSharpCount--;
                sIdx--;
            } else
                break;
        }
        while (tIdx >= 0) {
            if (t[tIdx] == '#') {
                tSharpCount++;
                tIdx--;
            } else if (tSharpCount > 0) {
                tSharpCount--;
                tIdx--;
            } else
                break;
        }

        if (sIdx >= 0 && tIdx >= 0 && s[sIdx] != t[tIdx])
            return false;
        if ((sIdx >= 0) != (tIdx >= 0))
            return false;

        sIdx--;
        tIdx--;
    }

    return true;
}
```

:::
