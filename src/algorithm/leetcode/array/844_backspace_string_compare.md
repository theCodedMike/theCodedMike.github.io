---
title: 844, Backspace String Compare
icon: discover
date: 2023-10-08
order: 7
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

**Related Topics**

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
:::

### Approach 2: Two Pointers
::: code-tabs
@tab Rust
```rust
///  Time Complexity: O(M+N)
///
/// Space Complexity: O(1)
pub fn backspace_compare(s: String, t: String) -> bool {
    let mut s_idx = s.len() as i32 - 1;
    let mut t_idx = t.len() as i32 - 1;
    let mut s_sharp_count = 0;
    let mut t_sharp_count = 0;

    while s_idx >= 0 || t_idx >= 0 {
        while s_idx >= 0 {
            if s.index(s_idx as usize..s_idx as usize + 1) == "#" {
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
            if t.index(t_idx as usize..t_idx as usize + 1) == "#" {
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
        if s_idx >= 0 && t_idx >= 0 && 
           s.index(s_idx as usize..s_idx as usize + 1) != t.index(t_idx as usize..t_idx as usize + 1) {
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
    int s_idx = s.length() - 1;
    int t_idx = t.length() - 1;
    int s_sharp_count = 0;
    int t_sharp_count = 0;

    while (s_idx >= 0 || t_idx >= 0) {
        while (s_idx >= 0) {
            if (s.charAt(s_idx) == '#') {
                s_sharp_count++;
                s_idx--;
            } else if (s_sharp_count > 0) {
                s_sharp_count--;
                s_idx--;
            } else {
                break;
            }
        }
        while (t_idx >= 0) {
            if (t.charAt(t_idx) == '#') {
                t_sharp_count++;
                t_idx--;
            } else if (t_sharp_count > 0) {
                t_sharp_count--;
                t_idx--;
            } else {
                break;
            }
        }
        // If two characters are different
        if (s_idx >= 0 && t_idx >= 0 && s.charAt(s_idx) != t.charAt(t_idx)) {
            return false;
        }
        // If char vs nothing
        if ((s_idx >= 0) != (t_idx >= 0)) {
            return false;
        }

        s_idx--;
        t_idx--;
    }

    return true;
}
```
:::