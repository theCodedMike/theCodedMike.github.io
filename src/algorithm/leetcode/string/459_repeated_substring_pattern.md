---
title: 459, Repeated Substring Pattern
icon: discover
date: 2023-11-24
order: 7
sticky: true
category: string
tag: 
  - easy
  - string
  - string matching
---

## I Problem
Given a string `s`, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

**Example 1**
Input: `s = "abab"`
Output: true
Explanation: It is the substring `"ab"` twice.

**Example 2**
Input: `s = "aba"`
Output: false

**Example 3**
Input: `s = "abcabcabcabc"`
Output: true
Explanation: It is the substring `"abc"` four times or the substring `"abcabc"` twice.

**Constraints**
- `1 <= s.length <= 10⁴`
- `s` consists of lowercase English letters.

**Related Topics**
- String
- String Matching


## II Solution
### Approach 1: Brute Force
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n^2)
///
/// Space Complexity: O(1)
pub fn repeated_substring_pattern(s: String) -> bool {
    let s = s.as_bytes();
    let len = s.len();

    for sub_len in 1..=len / 2 {
        if len % sub_len == 0 {
            let mut all_equal = true;
            for i in sub_len..len {
                if s[i] != s[i % sub_len] {
                    all_equal = false;
                    break;
                }
            }
            if all_equal {
                return true;
            }
        }
    }

    false
}
```

@tab Java
```java
// Time Complexity: O(n^2)
//
// Space Complexity: O(1)
public boolean repeatedSubstringPattern(String s) {
    int len = s.length();

    for (int sub_len = 1; sub_len * 2 <= len; sub_len++) {
        if (len % sub_len == 0) {
            boolean allEqual = true;
            for (int i = sub_len; i < len; i++) {
                if (s.charAt(i) != s.charAt(i % sub_len)) {
                    allEqual = false;
                    break;
                }
            }
            if (allEqual) {
                return true;
            }
        }
    }

    return false;
}
```
:::

### Approach 2: KMP
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n)
///
/// Space Complexity: O(n)
pub fn repeated_substring_pattern(s: String) -> bool {
    let get_next = |needle: &[u8]| -> Vec<usize> {
        let m = needle.len();
        let mut next = vec![0; m];
        let mut j = 0;

        for i in 1..m {
            while j > 0 && needle[i] != needle[j] {
                j = next[j - 1];
            }
            if needle[i] == needle[j] {
                j += 1;
            }
            next[i] = j;
        }
        
        next
    };

    let needle = s.as_bytes();
    let next = get_next(needle);
    let len = needle.len();

    next[len - 1] != 0 && len % (len - next[len - 1]) == 0
}
```

@tab Java
```java
Function<String, int[]> getNext = (needle) -> {
    int m = needle.length();
    int[] next = new int[m];

    for (int i = 1, j = 0; i < m; i++) {
        while (j > 0 && needle.charAt(i) != needle.charAt(j)) {
            j = next[j - 1];
        }
        if (needle.charAt(i) == needle.charAt(j)) {
            j++;
        }
        next[i] = j;
    }

    return next;
};

// Time Complexity: O(n)
//
// Space Complexity: O(n)
public boolean repeatedSubstringPattern(String s) {
    int[] next = this.getNext.apply(s);
    int len = s.length();

    return next[len - 1] != 0 && len % (len - next[len - 1]) == 0;
}
```
:::