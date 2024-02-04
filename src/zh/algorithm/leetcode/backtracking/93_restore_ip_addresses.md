---
title: 93, 复原IP地址
icon: discover
date: 2024-02-04
order: 7
sticky: true
category: backtracking
tag: 
  - medium
  - string
  - backtracking
---

## 一、题目描述
**有效IP地址**正好由四个整数（每个整数位于`0`到`255`之间组成，且不能含有前导`0`），整数之间用`'.'`分隔。
- 例如：`"0.1.2.201"`和`"192.168.1.1"`是**有效**IP地址，但是`"0.011.255.245"`、`"192.168.1.312"`和`"192.168@1.1"`是**无效**IP地址。

给定一个只包含数字的字符串`s`，用以表示一个**IP**地址，返回所有可能的**有效IP地址**，这些地址可以通过在`s`中插入`'.'`来形成。你**不能**重新排序或删除`s`中的任何数字。你可以按**任何**顺序返回答案。

**示例 1**
输入: s = "25525511135"
输出: ["255.255.11.135", "255.255.111.35"]

**示例 2**
输入: s = "0000"
输出: ["0.0.0.0"]

**示例 3**
输入: s = "101023"
输出: ["1.0.10.23", "1.0.102.3", "10.1.0.23", "10.10.2.3", "101.0.2.3"]

**提示**
- `1 <= s.length <= 20`
- `s`仅由数字组成

**相关主题**
- 字符串
- 回溯


## 二、题解
### 方法 1: 回溯
::: code-tabs
@tab Rust
```rust
pub fn restore_ip_addresses(s: String) -> Vec<String> {
    const DFS: for<'a> fn(usize, &'a str, &mut Vec<&'a str>, &mut Vec<String>) =
        |i, s, address, res| {
            if address.len() == 4 {
                res.push(address.join("."));
                return;
            }

            let start = if address.len() != 3 { i + 1 } else { s.len() };
            
            for j in start..=s.len() {
                let substr = &s[i..j];
                if substr.is_empty() {
                    break;
                }
                if substr.starts_with('0') && substr.len() > 1 {
                    break;
                }
                if substr.parse::<usize>().is_ok_and(|num| num > 255) {
                    break;
                }

                address.push(substr);
                DFS(j, s, address, res);
                address.pop();
            }
        };
    let mut res = vec![];

    DFS(0, &s, &mut vec![], &mut res);

    res
}
```

@tab Java
```java
@FunctionalInterface
interface QuadrConsumer<A, B, C, D> {
    void accept(A a, B b, C c, D d);
}

QuadrConsumer<Integer, String, List<String>, List<String>> dfs =
        (i, s, address, res) -> {
            if (address.size() == 4) {
                res.add(String.join(".", address));
                return;
            }

            Integer start = i + 1;
            if (address.size() == 3) {
                start = s.length();
            }

            for (int j = start; j <= s.length(); j++) {
                String substr = s.substring(i, j);
                if (substr.isEmpty()) {
                    break;
                }
                if (substr.startsWith("0") && substr.length() > 1) {
                    break;
                }
                if (Long.parseUnsignedLong(substr) > 255) {
                    break;
                }

                address.addLast(substr);
                this.dfs.accept(j, s, address, res);
                address.removeLast();
            }
        };

public List<String> restoreIpAddresses(String s) {
    List<String> res = new ArrayList<>();

    this.dfs.accept(0, s, new ArrayList<>(), res);

    return res;
}
```
:::
