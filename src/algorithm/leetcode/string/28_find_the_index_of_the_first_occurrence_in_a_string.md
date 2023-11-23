---
title: 28, Find the Index of the First Occurrence in a String
icon: discover
date: 2023-11-23
order: 6
sticky: true
category: string
tag: 
  - easy
  - string
  - string matching
  - two pointers
---

## I Problem
Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.

**Example 1**
Input: `haystack = "sadbutsad", needle = "sad"`
Output: `0`
Explanation: `"sad"` occurs at index `0` and `6`. The first occurrence is at index `0`, so we return `0`.

**Example 2**
Input: `haystack = "leetcode", needle = "leeto"`
Output: `-1`
Explanation: `"leeto"` did not occur in `"leetcode"`, so we return `-1`.

**Constraints**
- `1 <= haystack.length, needle.length <= 10⁴`
- `haystack` and `needle` consist of only lowercase English characters

**Related Topics**
- Two Pointers
- String
- String Matching


## II Solution
### Approach 1: Brute Force
::: code-tabs
@tab Rust
```rust
pub fn str_str(haystack: String, needle: String) -> i32 {
    let m = needle.len();
    let n = haystack.len();
    let mut start = 0;
    let mut end = m;
    let needle = needle.as_bytes();

    while end <= n {
        let sub = haystack.index(start..end).as_bytes();
        let mut all_equal = true;
        for i in 0..m {
            if needle[i] != sub[i] {
                all_equal = false;
                break;
            }
        }
        if all_equal {
            return start as i32;
        }
        start += 1;
        end = start + m;
    }

    -1
}
```

@tab Java
```java
public int strStr(String haystack, String needle) {
    int n = haystack.length();
    int m = needle.length();
    int start = 0;
    int end = m;

    while (end <= n) {
        boolean allEqual = true;
        for (int i = start; i < end; i++) {
            if (haystack.charAt(i) != needle.charAt(i - start)) {
                allEqual = false;
                break;
            }
        }
        if (allEqual) {
            return start;
        }
        start++;
        end = start + m;
    }

    return -1;
}
```
:::

### Approach 2: KMP
::: code-tabs
@tab Rust
```rust
pub fn str_str(haystack: String, needle: String) -> i32 {
    let m = needle.len();
    let mut pi = vec![0; m];
    let mut j = 0;
    let needle = needle.as_bytes();
    for i in 1..m {
        while j > 0 && needle[i] != needle[j] {
            j = pi[j - 1];
        }
        if needle[i] == needle[j] {
            j += 1;
        }
        pi[i] = j;
    }

    let n = haystack.len();
    let haystack = haystack.as_bytes();
    j = 0;
    for i in 0..n {
        while j > 0 && haystack[i] != needle[j] {
            j = pi[j - 1];
        }
        if haystack[i] == needle[j] {
            j += 1;
        }
        if j == m {
            return i as i32 - m as i32 + 1;
        }
    }

    -1
}
```

@tab Java
```java
public int strStr(String haystack, String needle) {
    int m = needle.length();
    int[] pi = new int[m];
    for (int i = 1, j = 0; i < m; i++) {
        while (j > 0 && needle.charAt(i) != needle.charAt(j)) {
            j = pi[j - 1];
        }
        if (needle.charAt(i) == needle.charAt(j)) {
            j++;
        }
        pi[i] = j;
    }

    int n = haystack.length();
    for (int i = 0, j = 0; i < n; i++) {
        while (j > 0 && haystack.charAt(i) != needle.charAt(j)) {
            j = pi[j - 1];
        }
        if (haystack.charAt(i) == needle.charAt(j)) {
            j++;
        }
        if (j == m) {
            return i - m + 1;
        }
    }

    return -1;
}
```
:::