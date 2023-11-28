---
title: 232, Implement Queue using Stacks
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

## I Problem
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (`push`, `peek`, `pop`, and `empty`).

Implement the `MyQueue` class:
- `void push(int x)` Pushes element x to the back of the queue.
- `int pop()` Removes the element from the front of the queue and returns it.
- `int peek()` Returns the element at the front of the queue.
- `boolean empty()` Returns `true` if the queue is empty, `false` otherwise.

**Notes:**
- You must use **only** standard operations of a stack, which means only `push to top`, `peek/pop from top`, `size`, and `is empty` operations are valid.
- Depending on your language, the stack may not be supported natively. You may simulate a stack using a `list` or `deque` (double-ended queue) as long as you use only a stack's standard operations.

**Example 1**
Input:
`["MyQueue", "push", "push", "peek", "pop", "empty"]`
`[[], [1], [2], [], [], []]`
Output:
`[null, null, null, 1, 1, false]`
Explanation:
```java
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek();  // return 1
myQueue.pop();   // return 1, queue is [2]
myQueue.empty(); // return false
```

**Constraints**
- `1 <= x <= 9`
- At most `100` calls will be made to `push`, `pop`, `peek`, and `empty`.
- All the calls to `pop` and `peek` are valid.

**Follow up**
Can you implement the queue such that each operation is [**amortized**][Amortized] `O(1)` time complexity? In other words, performing `n` operations will take overall `O(n)` time even if one of those operations may take longer.

**Related Topics**
- Stack
- Design
- Queue


## II Solution
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

### Approach 1: Two Stacks
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

### Approach 2: Optimize Two Stacks
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

[Amortized]: https://en.wikipedia.org/wiki/Amortized_analysis