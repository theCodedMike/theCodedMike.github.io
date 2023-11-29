---
title: 20, Valid Parentheses
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

## I Problem
Given a string s containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.


**Example 1**
Input: s = `"()"`
Output: true

**Example 2**
Input: s = `"()[]{}"`
Output: true

**Example 3**
Input: s = `"(]"`
Output: false


**Constraints**
- `1 <= s.length <= 10⁴`
- `s` consists of parentheses only `'()[]{}'`.

**Related Topics**
- String
- Stack


## II Solution
### Approach 1: Use Stack
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

### Approach 2: Optimize Use Stack
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