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
/// Time Complexity: O(m * n)
///
/// Space Complexity: O(1)
pub fn str_str(haystack: String, needle: String) -> i32 {
    let m = needle.len();
    let n = haystack.len();
    let needle = needle.as_bytes();
    let haystack = haystack.as_bytes();

    for end in m..=n {
        let mut all_equal = true;
        for i in end - m..end {
            if haystack[i] != needle[i - end + m] {
                all_equal = false;
                break;
            }
        }
        if all_equal {
            return (end - m) as i32;
        }
    }

    -1
}
```

@tab Java
```java
// Time Complexity: O(m * n)
//
// Space Complexity: O(1)
public int strStr(String haystack, String needle) {
    int n = haystack.length();
    int m = needle.length();

    for (int end = m; end <= n; end++) {
        boolean allEqual = true;
        for (int i = end - m; i < end; i++) {
            if (haystack.charAt(i) != needle.charAt(i - end + m)) {
                allEqual = false;
                break;
            }
        }
        if (allEqual) {
            return end - m;
        }
    }

    return -1;
}
```
:::

### Approach 2: KMP
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(m + n)
///
/// Space Complexity: O(m)
pub fn str_str(haystack: String, needle: String) -> i32 {
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

    let needle = needle.as_bytes();
    let next = get_next(needle);
    let m = needle.len();
    let n = haystack.len();
    let haystack = haystack.as_bytes();
    let mut j = 0;
    for i in 0..n {
        while j > 0 && haystack[i] != needle[j] {
            j = next[j - 1];
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

// Time Complexity: O(m + n)
//
// Space Complexity: O(m)
public int strStr(String haystack, String needle) {
    int[] next = this.getNext.apply(needle);
    int n = haystack.length();
    int m = needle.length();
    
    for (int i = 0, j = 0; i < n; i++) {
        while (j > 0 && haystack.charAt(i) != needle.charAt(j)) {
            j = next[j - 1];
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