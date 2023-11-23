---
title: 28, 找出字符串中第一个匹配项的下标
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

## 一、题目描述
给你两个字符串`haystack`和`needle`，请你在`haystack`字符串中找出`needle`字符串的第一个匹配项的下标（下标从`0`开始）。如果`needle`不是`haystack`的一部分，则返回 `-1`。 

**示例 1**
输入: `haystack = "sadbutsad", needle = "sad"`
输出: `0`
解释: `"sad"`在下标`0`和`6`处匹配。第一个匹配项的下标是`0`，所以返回`0`。

**示例 2**
输入: `haystack = "leetcode", needle = "leeto"`
输出: `-1`
解释: `"leeto"`没有在`"leetcode"`中出现，所以返回`-1`。

**提示**
- `1 <= haystack.length, needle.length <= 10⁴`
- `haystack`和`needle`仅由小写英文字符组成

**相关主题**
- 双指针
- 字符串
- 字符串匹配


## 二、题解
### 方法 1: 暴力解法
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

### 方法 2: KMP
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