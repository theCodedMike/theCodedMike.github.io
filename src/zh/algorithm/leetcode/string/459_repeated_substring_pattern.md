---
title: 459, 重复的子字符串
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

## 一、题目描述
给定一个非空的字符串`s`，检查是否可以通过由它的一个子串重复多次构成。

**示例 1**
输入: `s = "abab"`
输出: true
解释: 可由子串`"ab"`重复两次构成。

**示例 2**
输入: `s = "aba"`
输出: false

**示例 3**
输入: `s = "abcabcabcabc"`
输出: true
解释: 可由子串`"abc"`重复四次构成。(或子串`"abcabc"`重复两次构成。)

**提示**
- `1 <= s.length <= 10⁴`
- `s`由小写英文字母组成

**相关主题**
- 字符串
- 字符串匹配


## 二、题解
### 方法 1: 暴力解法
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

### 方法 2: KMP
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
