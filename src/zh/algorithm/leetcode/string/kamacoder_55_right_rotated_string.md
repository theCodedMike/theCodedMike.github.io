---
title: 卡码网-55, 右旋字符串
icon: discover
date: 2023-11-22
order: 5
sticky: true
category: string
tag: 
  - easy
  - string
---

## 一、题目描述
字符串的右旋转操作是把字符串尾部的若干个字符转移到字符串的前面。给定一个字符串`s`和一个正整数`k`，请编写一个函数，将字符串中的后面`k`个字符移到字符串的前面，实现字符串的右旋转操作。

例如，对于输入字符串`"abcdefg"`和整数`2`，函数应该将其转换为`"fgabcde"`。

**示例 1**
输入: k = 2, s = `"abcdefg"`
输出: `"fgabcde"`

**示例 2**
输入: k = 5, s = `"abcdefg"`
输出: `"cdefgab"`


**提示**
- `1 <= k < 10000`
- `1 <= s.length < 10000`

**相关主题**
- string


## 二、题解
### 方法 1: 暴力解法
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
        // 右旋
        while k != 0 {
            let temp = p[len - 1];
            for i in (0..len - 1).rev() {
                p[i + 1] = p[i];
            }
            p[0] = temp;
            k -= 1;
        }
    } else {
        // 左旋
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
        // 右旋
        while (k-- != 0) {
            char temp = chars[len - 1];
            for (int i = len - 2; i >= 0; i--) {
                chars[i + 1] = chars[i];
            }
            chars[0] = temp;
        }
    } else {
        // 左旋
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

### 方法 2: 优化暴力解法
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
        // 右旋
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
        // 左旋
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
        // 右旋
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
        // 左旋
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