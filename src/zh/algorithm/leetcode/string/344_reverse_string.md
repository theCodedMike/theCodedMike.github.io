---
title: 344, 反转字符串
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

## 一、题目描述
编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组`s`的形式给出。

不要给另外的数组分配额外的空间，你必须[**原地**](https://zh.wikipedia.org/wiki/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95)修改输入数组，使用`O(1)`的额外空间解决这一问题。

**示例 1**
输入: s = ["h", "e", "l", "l", "o"]
输出: ["o", "l", "l", "e", "h"]

**示例 2**
输入: s = ["H", "a", "n", "n", "a", "h"]
输出: ["h", "a", "n", "n", "a", "H"]

**提示**
- 1 <= s.length <= 10⁵
- `s[i]` 都是ASCII码表中的[**可显示字符**](https://zh.wikipedia.org/wiki/ASCII#%E5%8F%AF%E6%98%BE%E7%A4%BA%E5%AD%97%E7%AC%A6)

**相关主题**
- 双指针
- 字符串 


## 二、题解
### 方法 1: 双指针
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