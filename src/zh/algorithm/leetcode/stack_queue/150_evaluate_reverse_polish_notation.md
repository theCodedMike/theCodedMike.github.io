---
title: 150, 逆波兰表达式求值
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

## 一、题目描述
给你一个字符串数组`tokens`，表示一个根据[逆波兰表示法][Reverse Polish Notation]表示的算术表达式。

请你计算该表达式。返回一个表示表达式值的整数。

**注意：**
- 有效的算符为`'+'`、`'-'`、`'*'`和`'/'`。
- 每个操作数（运算对象）都可以是一个整数或者另一个表达式。
- 两个整数之间的除法总是**向零截断**。
- 表达式中不含除零运算。
- 输入是一个根据逆波兰表示法表示的算术表达式。
- 答案及所有中间计算结果可以用**32 位**整数表示。


**示例 1**
输入: tokens = `["2", "1", "+", "3", "*"]`
输出: 9
解释: 该算式转化为常见的中缀算术表达式为：`((2 + 1) * 3) = 9`

**示例 2**
输入: tokens = `["4", "13", "5", "/", "+"]`
输出: 6
解释: 该算式转化为常见的中缀算术表达式为：`(4 + (13 / 5)) = 6`

**示例 3**
输入: tokens = `["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]`
输出: 22
解释: 该算式转化为常见的中缀算术表达式为：
```text
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
```

**提示**
- `1 <= tokens.length <= 10⁴`
- `tokens[i]`是一个算符（`"+"`、`"-"`、`"*"`或`"/"`），或是在范围`[-200, 200]`内的一个整数

**逆波兰表达式：**
逆波兰表达式是一种后缀表达式，所谓后缀就是指算符写在后面。
- 平常使用的算式则是一种中缀表达式，如`( 1 + 2 ) * ( 3 + 4 )`。 
- 该算式的逆波兰表达式写法为`( ( 1 2 + ) ( 3 4 + ) * )`。 

逆波兰表达式主要有以下两个优点：
- 去掉括号后表达式无歧义，上式即便写成`1 2 + 3 4 + *`也可以依据次序计算出正确结果。
- 适合用栈操作运算：遇到数字则入栈；遇到算符则取出栈顶两个数字进行计算，并将结果压入栈中。

**相关主题**
- 栈
- 数组
- 数学


## 二、题解
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

### 方法 1: 模拟栈
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

### 方法 2: 使用栈
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

[Reverse Polish Notation]: https://zh.wikipedia.org/wiki/%E9%80%86%E6%B3%A2%E5%85%B0%E8%A1%A8%E7%A4%BA%E6%B3%95