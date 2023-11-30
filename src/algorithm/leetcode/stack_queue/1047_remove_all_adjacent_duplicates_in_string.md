---
title: 1047, Remove All Adjacent Duplicates In String
icon: discover
date: 2023-11-30
order: 4
sticky: true
category: stack/queue
tag: 
  - easy
  - string
  - stack
---

## I Problem
You are given a string `s` consisting of lowercase English letters. A **duplicate removal** consists of choosing two **adjacent** and **equal** letters and removing them.

We repeatedly make **duplicate removals** on `s` until we no longer can.

Return the *final string after all such duplicate removals have been made*. It can be proven that the answer is **unique**.


**Example 1**
Input: s = `"abbaca"`
Output: `"ca"`
Explanation: For example, in `"abbaca"` we could remove `"bb"` since the letters are adjacent and equal, and this is the only possible move. The result of this move is that the string is `"aaca"`, of which only `"aa"` is possible, so the final string is `"ca"`.

**Example 2**
Input: s = `"azxxzy"`
Output: `"ay"`

**Constraints**
- `1 <= s.length <= 10⁵`
- `s` consists of lowercase English letters.

**Related Topics**
- String
- Stack


## II Solution
### Approach 1: Brute Force
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n^2)
///
/// Space Complexity: O(1)
pub fn remove_duplicates(s: String) -> String {
    let bytes = unsafe { s.as_mut_vec() };
    let mut curr = 0;
    let mut next = 1;

    while next < bytes.len() {
        if bytes[curr] == bytes[next] {
            loop {
                if curr == 0 || next == bytes.len() - 1 {
                    break;
                }
                if bytes[curr - 1] == bytes[next + 1] {
                    curr -= 1;
                    next += 1;
                } else {
                    break;
                }
            }
            bytes.drain(curr..=next);
            curr = 0;
            next = 1;
        } else {
            curr = next;
            next += 1;
        }
    }

    s
}
```

@tab Java
```java
// Time Complexity: O(n^2)
//
// Space Complexity: O(n)
public String removeDuplicates(String s) {
    StringBuilder chars = new StringBuilder(s);
    int curr = 0;
    int next = 1;

    while (next < chars.length()) {
        if (chars.charAt(curr) == chars.charAt(next)) {
            while (true) {
                if (curr == 0 || next == chars.length() - 1) {
                    break;
                }
                if (chars.charAt(curr - 1) == chars.charAt(next + 1)) {
                    curr--;
                    next++;
                } else {
                    break;
                }
            }
            chars.delete(curr, next + 1);
            curr = 0;
            next = 1;
        } else {
            curr = next;
            next++;
        }
    }

    return chars.toString();
}
```
:::

### Approach 2: Use Stack
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n)
///
/// Space Complexity: O(n)
pub fn remove_duplicates(s: String) -> String {
    let mut stack = String::with_capacity(s.len() / 2);

    for ch in s.chars() {
        match stack.pop() {
            None => {
                stack.push(ch);
            }
            Some(top) => {
                if top != ch {
                    stack.push(top);
                    stack.push(ch);
                }
            }
        }
    }

    stack
}
```

@tab Java
```java
// Time Complexity: O(n)
//
// Space Complexity: O(n)
public String removeDuplicates(String s) {
    StringBuilder stack = new StringBuilder(s.length() / 2);
    int top = -1;

    for (int i = 0, len = s.length(); i < len; i++) {
        char ch = s.charAt(i);
        if (stack.isEmpty() || stack.charAt(top) != ch) {
            stack.append(ch);
            top++;
        } else {
            stack.deleteCharAt(top);
            top--;
        }
    }

    return stack.toString();
}
```
:::