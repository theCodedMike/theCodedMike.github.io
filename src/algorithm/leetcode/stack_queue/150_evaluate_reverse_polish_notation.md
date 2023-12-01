---
title: 150, Evaluate Reverse Polish Notation
icon: discover
date: 2023-12-01
order: 5
sticky: true
category: stack/queue
tag: 
  - medium
  - array
  - math
  - stack
---

## I Problem
You are given an array of strings `tokens` that represents an arithmetic expression in a [Reverse Polish Notation][Reverse Polish Notation].

Evaluate the expression. Return *an integer that represents the value of the expression*.

**Note** that:
- The valid operators are `'+'`, `'-'`, `'*'`, and `'/'`.
- Each operand may be an integer or another expression.
- The division between two integers always **truncates toward zero**.
- There will not be any division by zero.
- The input represents a valid arithmetic expression in a reverse polish notation.
- The answer and all the intermediate calculations can be represented in a **32-bit** integer.

**Example 1**
Input: tokens = `["2", "1", "+", "3", "*"]`
Output: 9
Explanation: `((2 + 1) * 3) = 9`

**Example 2**
Input: tokens = `["4", "13", "5", "/", "+"]`
Output: 6
Explanation: `(4 + (13 / 5)) = 6`

**Example 3**
Input: tokens = `["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]`
Output: 22
Explanation: 
```text
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
```

**Constraints**
- `1 <= tokens.length <= 10⁴`
- `tokens[i]` is either an operator: `"+"`, `"-"`, `"*"`, or `"/"`, or an integer in the range `[-200, 200]`.

**Related Topics**
- Array
- Math
- Stack


## II Solution
::: code-tabs
@tab Rust
```rust
const CALC: fn(i32, i32, &str) -> i32 = |left, right, operator| match operator {
    "+" => left + right,
    "-" => left - right,
    "*" => left * right,
    "/" => left / right,
    _ => panic!("Unsupported operator: {}", operator),
};

const IS_OPERATOR: fn(&str) -> bool = |token| match token {
    "+" | "-" | "*" | "/" => true,
    _ => false,
};
```

@tab Java
```java
Predicate<String> isOperator = (token) -> switch (token) {
    case "+", "-", "*", "/" -> true;
    default -> false;
};

@FunctionalInterface
interface TriFunction<X, Y, Z, W> {
    W apply(X x, Y y, Z z);
}

TriFunction<Integer, Integer, String, Integer> calc = (left, right, operator) -> switch (operator) {
    case "+" -> left + right;
    case "-" -> left - right;
    case "*" -> left * right;
    case "/" -> left / right;
    default -> throw new UnsupportedOperationException("UnsupportedOperator");
};
```
:::

### Approach 1: Simulate Stack
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n^2)
///
/// Space Complexity: O(1)
pub fn eval_rpn(tokens: Vec<String>) -> i32 {
    let len = tokens.len();

    for i in 0..len {
        if IS_OPERATOR(&tokens[i]) {
            let mut r = i - 1;
            while tokens[r].is_empty() {
                r -= 1;
            }
            let right = tokens[r].parse::<i32>().unwrap();

            let mut l = r - 1;
            while tokens[l].is_empty() {
                l -= 1;
            }
            let left = tokens[l].parse::<i32>().unwrap();

            tokens[i] = CALC(left, right, &tokens[i]).to_string();
            tokens[r].clear();
            tokens[l].clear();
        }
    }

    tokens[len - 1].parse::<i32>().unwrap()
}
```

@tab Java
```java
// Time Complexity: O(n^2)
//
// Space Complexity: O(1)
public int evalRPN(String[] tokens) {
    int len = tokens.length;

    for (int i = 0; i < len; i++) {
        if (this.isOperator.test(tokens[i])) {
            int r = i - 1;
            while (tokens[r].isBlank()) {
                r--;
            }
            int right = Integer.parseInt(tokens[r]);

            int l = r - 1;
            while (tokens[l].isBlank()) {
                l--;
            }
            int left = Integer.parseInt(tokens[l]);

            tokens[i] = this.calc.apply(left, right, tokens[i]).toString();
            tokens[r] = "";
            tokens[l] = "";
        }
    }

    return Integer.parseInt(tokens[len - 1]);
}
```
:::

### Approach 2: Use Stack
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n)
///
/// Space Complexity: O(n)
pub fn eval_rpn(tokens: Vec<String>) -> i32 {
    let mut stack = Vec::with_capacity(tokens.len() / 2);

    for ref token in tokens {
        if IS_OPERATOR(token) {
            let right = stack.pop().unwrap();
            let left = stack.pop().unwrap();
            stack.push(CALC(left, right, token));
        } else {
            stack.push(token.parse::<i32>().unwrap())
        }
    }

    stack[0]
}
```

@tab Java
```java
// Time Complexity: O(n)
//
// Space Complexity: O(n)
public int evalRPN(String[] tokens) {
    Deque<Integer> stack = new ArrayDeque<>();

    for (int i = 0; i < tokens.length; i++) {
        if (this.isOperator.test(tokens[i])) {
            Integer right = stack.pop();
            Integer left = stack.pop();
            stack.push(this.calc.apply(left, right, tokens[i]));
        } else {
            stack.push(Integer.parseInt(tokens[i]));
        }
    }

    return stack.getFirst();
}
```
:::

[Reverse Polish Notation]: https://en.wikipedia.org/wiki/Reverse_Polish_notation