---
title: 344, Reverse String
icon: discover
date: 2023-11-16
order: 1
sticky: true
category: string
tag: 
  - easy
  - string
  - two pointers
---

## I Problem
Write a function that reverses a string. The input string is given as an array of characters `s`.

You must do this by modifying the input array [**in-place**](https://en.wikipedia.org/wiki/In-place_algorithm) with `O(1)` extra memory.

**Example 1**
Input: s = ["h", "e", "l", "l", "o"]
Output: ["o", "l", "l", "e", "h"]

**Example 2**
Input: s = ["H", "a", "n", "n", "a", "h"]
Output: ["h", "a", "n", "n", "a", "H"]

**Constraints**
- `1 <= s.length <= 10⁵`
- `s[i]` is a [**printable ascii character**](https://en.wikipedia.org/wiki/ASCII#Printable_characters)

**Related Topics**
- Two Pointers
- String


## II Solution
### Approach 1: Two Pointers
::: code-tabs
@tab Rust
```rust
pub fn reverse_string(s: &mut Vec<char>) {
    let mut l = 0;
    let mut r = s.len() - 1;

    while l < r {
        s.swap(l, r);
        l += 1;
        r -= 1;
    }
}
```

@tab Java
```java
public void reverseString(char[] s) {
    int l = 0;
    int r = s.length - 1;

    while (l < r) {
        char temp = s[l];
        s[l] = s[r];
        s[r] = temp;
        l++;
        r--;
    }
}
```
:::