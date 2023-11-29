---
title: 20, 有效的括号
icon: discover
date: 2023-11-29
order: 3
sticky: true
category: stack/queue
tag: 
  - easy
  - string
  - stack
---

## 一、题目描述
给定一个只包括`'('`，`')'`，`'{'`，`'}'`，`'['`，`']'`的字符串`s`，判断字符串是否有效。

有效字符串需满足：
1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。
3. 每个右括号都有一个对应的相同类型的左括号。

**示例 1**
输入: s = `"()"`
输出: true

**示例 2**
输入: s = `"()[]{}"`
输出: true

**示例 3**
输入: s = `"(]"`
输出: false

**提示**
- `1 <= s.length <= 10⁴`
- `s`仅由括号`'()[]{}'`组成

**相关主题**
- 栈
- 字符串


## 二、题解
### 方法 1: 使用栈
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n)
///
/// Space Complexity: O(n)
pub fn is_valid(s: String) -> bool {
    let mut stack = vec![];
    let is_match = |l_char: char, r_char: char| -> bool {
        match (l_char, r_char) {
            ('(', ')') | ('{', '}') | ('[', ']') => true,
            _ => false,
        }
    };

    for ch in s.chars() {
        match ch {
            '(' | '{' | '[' => {
                stack.push(ch);
            }
            ')' | '}' | ']' => match stack.pop() {
                None => return false,
                Some(l_ch) => {
                    if !is_match(l_ch, ch) {
                        return false;
                    }
                }
            },
            _ => panic!("Unsupported char: {}", ch),
        }
    }

    stack.is_empty()
}
```

@tab Java
```java
BiFunction<Character, Character, Boolean> isMatch = (l_char, r_char) -> switch (l_char) {
    case '(' -> r_char == ')';
    case '{' -> r_char == '}';
    case '[' -> r_char == ']';
    default -> false;
};

// Time Complexity: O(n)
//
// Space Complexity: O(n)
public boolean isValid(String s) {
    Deque<Character> stack = new ArrayDeque<>();

    for (char ch : s.toCharArray()) {
        switch (ch) {
            case '(':
            case '{':
            case '[': stack.push(ch); break;
            case ')':
            case '}':
            case ']': {
                if (stack.isEmpty() || !this.isMatch.apply(stack.pop(), ch)) {
                    return false;
                }
                break;
            }
            default:
                throw new UnsupportedOperationException("Unsupported char");
        }
    }

    return stack.isEmpty();
}
```
:::

### 方法 2: 优化方法1
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n)
///
/// Space Complexity: O(n + ∣Σ∣)
pub fn is_valid(s: String) -> bool {
    let mut stack = vec![];
    let map = HashMap::from([(')', '('), ('}', '{'), (']', '[')]);

    for ch in s.chars() {
        match map.get(&ch) {
            None => {
                stack.push(ch);
            }
            Some(&map_l_ch) => match stack.pop() {
                None => return false,
                Some(stack_l_ch) => {
                    if map_l_ch != stack_l_ch {
                        return false;
                    }
                }
            },
        }
    }

    stack.is_empty()
}
```

@tab Java
```java
// Time Complexity: O(n)
//
// Space Complexity: O(n + ∣Σ∣)
public boolean isValid(String s) {
    Deque<Character> stack = new ArrayDeque<>();
    Map<Character, Character> map = new HashMap<>() {{
        put(')', '(');
        put('}', '{');
        put(']', '[');
    }};

    for (char ch : s.toCharArray()) {
        if (map.containsKey(ch)) {
            if (stack.isEmpty() || stack.pop() != map.get(ch)) {
                return false;
            }
        } else {
            stack.push(ch);
        }
    }

    return stack.isEmpty();
}
```
:::