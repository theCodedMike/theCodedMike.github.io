---
title: KamaCoder-54, Replace Numbers
icon: discover
date: 2023-11-20
order: 3
sticky: true
category: string
tag: 
  - easy
  - string
---

## I Problem
Given a string `s` that contains lowercase alphabetic and numeric characters, write a function that leaves the alphabetic characters in the string unchanged and replaces each numeric character with a number. For example, for the input string `"a1b2c3"`, the function should convert it to `"anumberbnumbercnumber"`.

**Example 1**
Input: a1b2c3
Output: anumberbnumbercnumber

**Constraints**
- `1 <= s.length < 10000`

**Related Topics**
- string

## II Solution
### Approach 1: Brute Force
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
