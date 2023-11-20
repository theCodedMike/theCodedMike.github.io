---
title: 卡码网-54, 替换数字
icon: discover
date: 2023-11-20
order: 3
sticky: true
category: string
tag: 
  - easy
  - string
---

## 一、题目描述
给定一个字符串`s`，它包含小写字母和数字字符，请编写一个函数，将字符串中的字母字符保持不变，而将每个数字字符替换为`number`。 例如，对于输入字符串`"a1b2c3"`，函数应该将其转换为`"anumberbnumbercnumber"`。

**示例 1**
输入: a1b2c3
输出: anumberbnumbercnumber

**提示**
- `1 <= s.length < 10000`

**相关主题**
- string


## 二、题解
### 方法 1: 暴力解法
::: code-tabs
@tab Rust
```rust
pub fn replace_numbers(s: String) -> String {
    let number = "number";

    s.chars()
        .fold(String::with_capacity(s.len() * 2), |mut res, c| {
            if c.is_numeric() {
                res += number;
            } else {
                res.push(c);
            }
            res
        })
}
```

@tab Java
```java
public String replaceNumbers(String s) {
    String number = "number";
    StringBuilder sb = new StringBuilder(s.length() * 2);

    for (char c : s.toCharArray()) {
        if (Character.isDigit(c)) {
            sb.append(number);
        } else {
            sb.append(c);
        }
    }

    return sb.toString();
}
```
:::