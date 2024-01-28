---
title: 17, 电话号码的字母组合
icon: discover
date: 2024-01-28
order: 2
sticky: true
category: Backtracking
tag: 
  - medium
  - hash table
  - string
  - backtracking
---

## 一、题目描述
给定一个仅包含数字`2-9`的字符串，返回所有它能表示的字母组合。答案可以按**任意顺序**返回。

给出数字到字母的映射如下（与电话按键相同）。注意`1`不对应任何字母。

![](../../../../../assets/leetcode/phone_number_17.png)

**示例 1**
输入: digits = "23"
输出: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

**示例 2**
输入: digits = ""
输出: []

**示例 3**
输入: digits = "2"
输出: ["a", "b", "c"]

**提示**
- `0 <= digits.length <= 4`
- `digits[i]`是范围`['2', '9']`的一个数字。

**相关主题**
- 哈希表
- 字符串
- 回溯


## 二、题解
### 方法 1: 回溯
::: code-tabs
@tab Rust
```rust
pub fn letter_combinations(digits: String) -> Vec<String> {
    let mut res = vec![];
    if digits.is_empty() {
        return res;
    }

    let map = HashMap::from([
        ("2", "abc"),
        ("3", "def"),
        ("4", "ghi"),
        ("5", "jkl"),
        ("6", "mno"),
        ("7", "pqrs"),
        ("8", "tuv"),
        ("9", "wxyz"),
    ]);

    const BACKTRACKING: fn(usize, &str, &mut String, &mut Vec<String>, &HashMap<&str, &str>) =
        |idx, digits, path, res, map| {
            if path.len() == digits.len() {
                res.push(path.clone());
                return;
            }
            let digit = &digits[idx..idx + 1];
            for ch in map[digit].chars() {
                path.push(ch);
                BACKTRACKING(idx + 1, digits, path, res, map);
                path.pop();
            }
        };

    BACKTRACKING(0, &digits, &mut String::new(), &mut res, &map);

    res
}
```

@tab Java
```java
@FunctionalInterface
interface QuintConsumer<A, B, C, D, E> {
    void accept(A a, B b, C c, D d, E e);
}

QuintConsumer<Integer, String, StringBuilder, List<String>, Map<Character, String>> recur =
        (idx, digits, path, res, map) -> {
            if (path.length() == digits.length()) {
                res.add(path.toString());
                return;
            }

            String s = map.get(digits.charAt(idx));
            
            for (int i = 0, len = s.length(); i < len; i++) {
                path.append(s.charAt(i));
                this.recur.accept(idx + 1, digits, path, res, map);
                path.deleteCharAt(path.length() - 1);
            }
        };

public List<String> letterCombinations(String digits) {
    List<String> res = new ArrayList<>();
    if (digits.isEmpty()) {
        return res;
    }

    Map<Character, String> map = new HashMap<>() {{
        this.put('2', "abc");
        this.put('3', "def");
        this.put('4', "ghi");
        this.put('5', "jkl");
        this.put('6', "mno");
        this.put('7', "pqrs");
        this.put('8', "tuv");
        this.put('9', "wxyz");
    }};

    this.recur.accept(0, digits, new StringBuilder(), res, map);
    
    return res;
}
```
:::
