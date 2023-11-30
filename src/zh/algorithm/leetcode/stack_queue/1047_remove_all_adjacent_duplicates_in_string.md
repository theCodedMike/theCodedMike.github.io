---
title: 1047, 删除字符串中的所有相邻重复项
icon: discover
date: 2023-11-30
order: 4
sticky: true
category: stack/queue
tag: 
  - easy
  - string
  - stack
---

## 一、题目描述
给出由小写字母组成的字符串`S`，**重复项删除操作**会选择两个相邻且相同的字母，并删除它们。

在`S`上反复执行重复项删除操作，直到无法继续删除。

在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。


**示例 1**
输入: `"abbaca"`
输出: `"ca"`
解释: 在`"abbaca"`中，我们可以删除`"bb"`由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串`"aaca"`，其中又只有`"aa"`可以执行重复项删除操作，所以最后的字符串为`"ca"`。

**示例 2**
输入: s = `"azxxzy"`
输出: `"ay"`

**提示**
- `1 <= S.length <= 20000`
- `S`仅由小写英文字母组成。

**相关主题**
- 栈
- 字符串


## 二、题解
### 方法 1: 暴力解法
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n^2)
///
/// Space Complexity: O(1)
pub fn remove_duplicates(s: String) -> String {
    let bytes = unsafe { s.as_mut_vec() };
    let mut curr = 0;
    let mut next = 1;

    while next < bytes.len() {
        if bytes[curr] == bytes[next] {
            loop {
                if curr == 0 || next == bytes.len() - 1 {
                    break;
                }
                if bytes[curr - 1] == bytes[next + 1] {
                    curr -= 1;
                    next += 1;
                } else {
                    break;
                }
            }
            bytes.drain(curr..=next);
            curr = 0;
            next = 1;
        } else {
            curr = next;
            next += 1;
        }
    }

    s
}
```

@tab Java
```java
// Time Complexity: O(n^2)
//
// Space Complexity: O(n)
public String removeDuplicates(String s) {
    StringBuilder chars = new StringBuilder(s);
    int curr = 0;
    int next = 1;

    while (next < chars.length()) {
        if (chars.charAt(curr) == chars.charAt(next)) {
            while (true) {
                if (curr == 0 || next == chars.length() - 1) {
                    break;
                }
                if (chars.charAt(curr - 1) == chars.charAt(next + 1)) {
                    curr--;
                    next++;
                } else {
                    break;
                }
            }
            chars.delete(curr, next + 1);
            curr = 0;
            next = 1;
        } else {
            curr = next;
            next++;
        }
    }

    return chars.toString();
}
```
:::

### 方法 2: 使用栈
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n)
///
/// Space Complexity: O(n)
pub fn remove_duplicates(s: String) -> String {
    let mut stack = String::with_capacity(s.len() / 2);

    for ch in s.chars() {
        match stack.pop() {
            None => {
                stack.push(ch);
            }
            Some(top) => {
                if top != ch {
                    stack.push(top);
                    stack.push(ch);
                }
            }
        }
    }

    stack
}
```

@tab Java
```java
// Time Complexity: O(n)
//
// Space Complexity: O(n)
public String removeDuplicates(String s) {
    StringBuilder stack = new StringBuilder(s.length() / 2);
    int top = -1;

    for (int i = 0, len = s.length(); i < len; i++) {
        char ch = s.charAt(i);
        if (stack.isEmpty() || stack.charAt(top) != ch) {
            stack.append(ch);
            top++;
        } else {
            stack.deleteCharAt(top);
            top--;
        }
    }

    return stack.toString();
}
```
:::