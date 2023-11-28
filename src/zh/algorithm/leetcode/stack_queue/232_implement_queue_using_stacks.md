---
title: 232, 用栈实现队列
icon: discover
date: 2023-11-27
order: 1
sticky: true
category: stack/queue
tag: 
  - easy
  - stack
  - queue
  - design
---

## 一、题目描述
请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（`push`、`pop`、`peek`、`empty`）。

实现`MyQueue`类：
- `void push(int x)`将元素`x`推到队列的末尾
- `int pop()`从队列的开头移除并返回元素
- `int peek()`返回队列开头的元素
- `boolean empty()`如果队列为空，返回`true`；否则，返回`false`

**说明:**
- 你**只能**使用标准的栈操作——也就是只有`push to top`, `peek/pop from top`, `size`, 和`is empty`操作是合法的。
- 你所使用的语言也许不支持栈。你可以使用`list`或者`deque`（双端队列）来模拟一个栈，只要是标准的栈操作即可。

**示例 1**
输入:
`["MyQueue", "push", "push", "peek", "pop", "empty"]`
`[[], [1], [2], [], [], []]`
输出:
`[null, null, null, 1, 1, false]`
解释:
```java
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek();  // return 1
myQueue.pop();   // return 1, queue is [2]
myQueue.empty(); // return false
```

**提示**
- `1 <= x <= 9`
- 最多调用`100`次`push`、`pop`、`peek`和`empty`
- 假设所有操作都是有效的（例如，一个空的队列不会调用`pop`或者`peek`操作）

**进阶**
你能否实现每个操作[**均摊**][Amortized]时间复杂度为`O(1)`的队列？换句话说，执行`n`个操作的总时间复杂度为`O(n)`，即使其中一个操作可能花费较长时间。

**相关主题**
- 栈
- 设计
- 队列


## 二、题解
::: code-tabs
@tab Rust
```rust
pub struct MyQueue {
    s1: Vec<i32>,
    s2: Vec<i32>,
}

impl MyQueue {
    pub fn new() -> Self {
        MyQueue {
            s1: vec![],
            s2: vec![],
        }
    }
}
```

@tab Java
```java
public class MyQueue {
    private Deque<Integer> s1;
    private Deque<Integer> s2;

    public MyQueue() {
        this.s1 = new ArrayDeque<>();
        this.s2 = new ArrayDeque<>();
    }
}
```
:::

### 方法 1: 双栈法
::: code-tabs
@tab Rust
```rust
impl MyQueue {
    /// Time Complexity: O(n)
    ///
    /// Space Complexity: O(n)
    pub fn push(&mut self, x: i32) {
        while let Some(val) = self.s1.pop() {
            self.s2.push(val);
        }
        self.s1.push(x);
        while let Some(val) = self.s2.pop() {
            self.s1.push(val);
        }
    }

    /// Time Complexity: O(1)
    ///
    /// Space Complexity: O(1)
    pub fn pop(&mut self) -> i32 {
        self.s1.pop().unwrap()
    }

    /// Time Complexity: O(1)
    ///
    /// Space Complexity: O(1)
    pub fn peek(&mut self) -> i32 {
        *self.s1.last().unwrap()
    }

    /// Time Complexity: O(1)
    ///
    /// Space Complexity: O(1)
    pub fn empty(&self) -> bool {
        self.s1.is_empty()
    }
}
```

@tab Java
```java
class MyQueue {
    // Time Complexity: O(n)
    //
    // Space Complexity: O(n)
    public void push(int x) {
        while (!this.s1.isEmpty()) {
            this.s2.push(this.s1.pop());
        }
        this.s1.push(x);
        while (!this.s2.isEmpty()) {
            this.s1.push(this.s2.pop());
        }
    }

    // Time Complexity: O(1)
    //
    // Space Complexity: O(1)
    public int pop() {
        return this.s1.pop();
    }

    // Time Complexity: O(1)
    //
    // Space Complexity: O(1)
    public int peek() {
        return this.s1.peek();
    }

    // Time Complexity: O(1)
    //
    // Space Complexity: O(1)
    public boolean empty() {
        return this.s1.isEmpty();
    }
}
```
:::

### 方法 2: 优化双栈法
::: code-tabs
@tab Rust
```rust
impl MyQueue {
    /// Time Complexity: O(1)
    ///
    /// Space Complexity: O(n)
    pub fn push(&mut self, x: i32) {
        self.s1.push(x);
    }

    /// Time Complexity: Amortized O(1), Worst-case O(n)
    ///
    /// Space Complexity: O(1)
    pub fn pop(&mut self) -> i32 {
        if self.s2.is_empty() {
            while let Some(val) = self.s1.pop() {
                self.s2.push(val);
            }
        }
        self.s2.pop().unwrap()
    }

    /// Time Complexity: O(1)
    ///
    /// Space Complexity: O(1)
    pub fn peek(&mut self) -> i32 {
        if self.s2.is_empty() {
            *self.s1.first().unwrap()
        } else {
            *self.s2.last().unwrap()
        }
    }

    /// Time Complexity: O(1)
    ///
    /// Space Complexity: O(1)
    pub fn empty(&self) -> bool {
        self.s1.is_empty() && self.s2.is_empty()
    }
}
```

@tab Java
```java
class MyQueue {
    // Time Complexity: O(1)
    //
    // Space Complexity: O(1)
    public void push(int x) {
        this.s1.push(x);
    }

    // Time Complexity: Amortized O(1), Worst-case O(n)
    //
    // Space Complexity: O(1)
    public int pop() {
        if (this.s2.isEmpty()) {
            while (!this.s1.isEmpty()) {
                this.s2.push(this.s1.pop());
            }
        }
        return this.s2.pop();
    }

    // Time Complexity: O(1)
    //
    // Space Complexity: O(1)
    public int peek() {
        if (this.s2.isEmpty()) {
            return this.s1.peekLast();
        } else {
            return this.s2.peek();
        }
    }

    // Time Complexity: O(1)
    //
    // Space Complexity: O(1)
    public boolean empty() {
        return this.s1.isEmpty() && this.s2.isEmpty();
    }
}
```
:::

[Amortized]: https://zh.wikipedia.org/wiki/%E5%B9%B3%E6%91%8A%E5%88%86%E6%9E%90