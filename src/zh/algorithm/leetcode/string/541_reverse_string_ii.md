---
title: 541, 反转字符串II
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

## 一、题目描述
给定一个字符串`s`和一个整数`k`，从字符串开头算起，每计数至`2k`个字符，就反转这`2k`字符中的前`k`个字符。
- 如果剩余字符少于`k`个，则将剩余字符全部反转。
- 如果剩余字符小于`2k`但大于或等于`k`个，则反转前`k`个字符，其余字符保持原样。

**示例 1**
输入: "abcdefg", k = 2
输出: "bacdfeg"

**示例 2**
输入: s = "abcd", k = 2
输出: "bacd"

**提示**
- `1 <= s.length <= 10⁴`
- `s`仅由小写英文组成
- `1 <= k <= 10⁴`

**相关主题**
- 双指针
- 字符串


## 二、题解
### 方法 1: 双指针
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