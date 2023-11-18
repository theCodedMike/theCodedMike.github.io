---
title: 541, Reverse String II
icon: discover
date: 2023-11-18
order: 2
sticky: true
category: string
tag: 
  - easy
  - string
  - two pointers
---

## I Problem
Given a string `s` and an integer `k`, reverse the first `k` characters for every `2k` characters counting from the start of the string.
- If there are fewer than `k` characters left, reverse all of them.
- If there are less than `2k` but greater than or equal to `k` characters, then reverse the first `k` characters and leave the other as original.

**Example 1**
Input: s = "abcdefg", k = 2
Output: "bacdfeg"

**Example 2**
Input: s = "abcd", k = 2
Output: "bacd"

**Constraints**
- `1 <= s.length <= 10⁴`
- `s` consists of only lowercase English letters
- `1 <= k <= 10⁴`

**Related Topics**
- Two Pointers
- String


## II Solution
### Approach 1: Two Pointers
::: code-tabs
@tab Rust
```rust
pub fn reverse_str(s: String, k: i32) -> String {
    let k = k as usize;
    let len = s.len();
    let p = unsafe { s.as_bytes_mut() };
    let mut begin = 0_usize;
    let mut end = begin + k;

    loop {
        if begin >= len {
            break;
        }
        if end > len {
            end = len;
        }

        let mut l = begin;
        let mut r = end - 1;
        while l < r {
            p.swap(l, r);
            l += 1;
            r -= 1;
        }

        begin += 2 * k;
        end = begin + k;
    }

    s
}
```

@tab Java
```java
public String reverseStr(String s, int k) {
    char[] chars = s.toCharArray();
    int len = chars.length;
    int begin = 0;
    int end = begin + k;

    do {
        if (end > len) {
            end = len;
        }

        int l = begin;
        int r = end - 1;
        while (l < r) {
            char temp = chars[l];
            chars[l] = chars[r];
            chars[r] = temp;
            l++;
            r--;
        }

        begin += 2 * k;
        end = begin + k;
    } while (begin < len);

    return String.valueOf(chars);
}
```
:::