---
title: KamaCoder-55, Right-Rotated String
icon: discover
date: 2023-11-22
order: 5
sticky: true
category: string
tag: 
  - easy
  - string
---

## I Problem
The right rotation operation of a string is to transfer several characters at the end of the string to the front of the string. Given a string `s` and a positive integer `k`, please write a function to move the following `k` characters in the string to the front of the string, achieving the right rotation operation of the string.

For example, for the input string `"abcdefg"` and integer `2`, the function should convert it to `"fgabcde"`.

**Example 1**
Input: k = 2, s = `"abcdefg"`
Output: `"fgabcde"`

**Example 2**
Input: k = 5, s = `"abcdefg"`
Output: `"cdefgab"`

**Constraints**
- `1 <= k < 10000`
- `1 <= s.length < 10000`

**Related Topics**
- string


## II Solution
### Approach 1: Brute Force
::: code-tabs
@tab Rust
```rust
pub fn right_rotate_string(mut s: String, mut k: usize) -> String {
    let p = unsafe { s.as_bytes_mut() };
    let len = p.len();
    if k == len || k == 0 {
        return s;
    }

    if k <= len / 2 {
        // rotate right
        while k != 0 {
            let temp = p[len - 1];
            for i in (0..len - 1).rev() {
                p[i + 1] = p[i];
            }
            p[0] = temp;
            k -= 1;
        }
    } else {
        // rotate left
        k = len - k;
        while k != 0 {
            let temp = p[0];
            for i in 1..len {
                p[i - 1] = p[i];
            }
            p[len - 1] = temp;
            k -= 1;
        }
    }

    s
}
```

@tab Java
```java
public String rightRotateString(String s, int k) {
    char[] chars = s.toCharArray();
    int len = chars.length;
    if (k == len || k == 0) {
        return s;
    }

    if (k <= len / 2) {
        // rotate right
        while (k-- != 0) {
            char temp = chars[len - 1];
            for (int i = len - 2; i >= 0; i--) {
                chars[i + 1] = chars[i];
            }
            chars[0] = temp;
        }
    } else {
        // rotate left
        k = len - k;
        while (k-- != 0) {
            char temp = chars[0];
            for (int i = 1; i < len; i++) {
                chars[i - 1] = chars[i];
            }
            chars[len - 1] = temp;
        }
    }

    return new String(chars);
}
```
:::

### Approach 2: Optimize Brute Force
::: code-tabs
@tab Rust
```rust
pub fn right_rotate_string(mut s: String, mut k: usize) -> String {
    let p = unsafe { s.as_bytes_mut() };
    let len = p.len();
    if k == len || k == 0 {
        return s;
    }

    if k <= len / 2 {
        // rotate right
        let mut temp = vec![0; k];
        for i in 0..k {
            temp[i] = p[len - k + i];
        }
        for i in (0..len - k).rev() {
            p[i + k] = p[i];
        }
        for i in 0..k {
            p[i] = temp[i];
        }
    } else {
        // rotate left
        k = len - k;
        let mut temp = vec![0; k];
        for i in 0..k {
            temp[i] = p[i];
        }
        for i in k..len {
            p[i - k] = p[i];
        }
        for i in 0..k {
            p[len - k + i] = temp[i];
        }
    }

    s
}
```

@tab Java
```java
public String rightRotateString(String s, int k) {
    char[] chars = s.toCharArray();
    int len = chars.length;
    if (k == len || k == 0) {
        return s;
    }

    if (k <= len / 2) {
        // rotate right
        char[] temp = new char[k];
        for (int i = 0; i < k; i++) {
            temp[i] = chars[len - k + i];
        }
        for (int i = len - 1 - k; i >= 0; i--) {
            chars[i + k] = chars[i];
        }
        for (int i = 0; i < k; i++) {
            chars[i] = temp[i];
        }
    } else {
        // rotate left
        k = len - k;
        char[] temp = new char[k];
        for (int i = 0; i < k; i++) {
            temp[i] = chars[i];
        }
        for (int i = k; i < len; i++) {
            chars[i - k] = chars[i];
        }
        for (int i = 0; i < k; i++) {
            chars[len - k + i] = temp[i];
        }
    }
    
    return new String(chars);
}
```
:::