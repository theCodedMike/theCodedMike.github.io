---
title: 225, 用队列实现栈
icon: discover
date: 2023-11-28
order: 2
sticky: true
category: stack/queue
tag: 
  - easy
  - stack
  - queue
  - design
---

## 一、题目描述
请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（`push`、`top`、`pop`和`empty`）。

实现`MyStack`类：
- `void push(int x)`将元素`x`压入栈顶。
- `int pop()`移除并返回栈顶元素。
- `int top()`返回栈顶元素。
- `boolean empty()`如果栈是空的，返回`true`；否则，返回`false`。

**注意:**
- 你只能使用队列的基本操作 —— 也就是`push to back`、`peek/pop from front`、`size`和`is empty`这些操作。
- 你所使用的语言也许不支持队列。你可以使用`list`（列表）或者`deque`（双端队列）来模拟一个队列，只要是标准的队列操作即可。

**示例 1**
输入:
`["MyStack", "push", "push", "top", "pop", "empty"]`
`[[], [1], [2], [], [], []]`
输出:
`[null, null, null, 2, 2, false]`
解释:
```java
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top();   // 返回 2
myStack.pop();   // 返回 2
myStack.empty(); // 返回 False
```

**提示**
- `1 <= x <= 9`
- 最多调用`100`次`push`、`pop`、`top`和`empty`
- 每次调用`pop`和`top`都保证栈不为空

**进阶**
你能否仅用一个队列来实现栈。

**相关主题**
- 栈
- 设计
- 队列


## 二、题解
### 方法 1: 两个队列
::: code-tabs
@tab Rust
```rust
pub struct MyStack {
    q1: VecDeque<i32>,
    q2: VecDeque<i32>,
}

impl MyStack {
    pub fn new() -> Self {
        MyStack {
            q1: VecDeque::new(),
            q2: VecDeque::new(),
        }
    }

    /// Time Complexity: O(n)
    ///
    /// Space Complexity: O(n)
    pub fn push(&mut self, x: i32) {
        self.q2.push_back(x);

        while let Some(val) = self.q1.pop_front() {
            self.q2.push_back(val);
        }

        std::mem::swap(&mut self.q1, &mut self.q2);
    }

    /// Time Complexity: O(1)
    ///
    /// Space Complexity: O(1)
    pub fn pop(&mut self) -> i32 {
        self.q1.pop_front().unwrap()
    }

    /// Time Complexity: O(1)
    ///
    /// Space Complexity: O(1)
    pub fn top(&mut self) -> i32 {
        *self.q1.front().unwrap()
    }

    /// Time Complexity: O(1)
    ///
    /// Space Complexity: O(1)
    pub fn empty(&self) -> bool {
        self.q1.is_empty()
    }
}
```

@tab Java
```java
public class MyStack {
    private Deque<Integer> q1;
    private Deque<Integer> q2;


    public MyStack() {
        this.q1 = new ArrayDeque<>();
        this.q2 = new ArrayDeque<>();
    }

    // Time Complexity: O(n)
    //
    // Space Complexity: O(n)
    public void push(int x) {
        this.q2.add(x);

        while (!this.q1.isEmpty()) {
            this.q2.add(this.q1.remove());
        }

        Deque<Integer> temp = this.q1;
        this.q1 = this.q2;
        this.q2 = temp;
    }

    // Time Complexity: O(1)
    //
    // Space Complexity: O(1)
    public int pop() {
        return this.q1.remove();
    }

    // Time Complexity: O(1)
    //
    // Space Complexity: O(1)
    public int top() {
        return this.q1.peek();
    }

    // Time Complexity: O(1)
    //
    // Space Complexity: O(1)
    public boolean empty() {
        return this.q1.isEmpty();
    }
}
```
:::

### 方法 2: 一个队列
::: code-tabs
@tab Rust
```rust
pub struct MyStack {
    q1: VecDeque<i32>,
}

impl MyStack {
    pub fn new() -> Self {
        MyStack {
            q1: VecDeque::new(),
        }
    }

    /// Time Complexity: O(n)
    ///
    /// Space Complexity: O(n)
    pub fn push(&mut self, x: i32) {
        let mut len = self.q1.len();
        self.q1.push_back(x);

        while len != 0 {
            if let Some(val) = self.q1.pop_front() {
                self.q1.push_back(val);
            }
            len -= 1;
        }
    }

    /// Time Complexity: O(1)
    ///
    /// Space Complexity: O(1)
    pub fn pop(&mut self) -> i32 {
        self.q1.pop_front().unwrap()
    }

    /// Time Complexity: O(1)
    ///
    /// Space Complexity: O(1)
    pub fn top(&mut self) -> i32 {
        *self.q1.front().unwrap()
    }

    /// Time Complexity: O(1)
    ///
    /// Space Complexity: O(1)
    pub fn empty(&self) -> bool {
        self.q1.is_empty()
    }
}
```

@tab Java
```java
public class MyStack {
    private Deque<Integer> q1;


    public MyStack() {
        this.q1 = new ArrayDeque<>();
    }

    // Time Complexity: O(n)
    //
    // Space Complexity: O(n)
    public void push(int x) {
        int size = this.q1.size();

        this.q1.add(x);

        while (size-- != 0) {
            this.q1.add(this.q1.remove());
        }
    }

    // Time Complexity: O(1)
    //
    // Space Complexity: O(1)
    public int pop() {
        return this.q1.remove();
    }

    // Time Complexity: O(1)
    //
    // Space Complexity: O(1)
    public int top() {
        return this.q1.peek();
    }

    // Time Complexity: O(1)
    //
    // Space Complexity: O(1)
    public boolean empty() {
        return this.q1.isEmpty();
    }
}
```
:::
