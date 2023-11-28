---
title: 225, Implement Stack using Queues
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


## I Problem
Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (`push`, `top`, `pop`, and `empty`).

Implement the `MyStack` class:
- `void push(int x)` Pushes element x to the top of the stack.
- `int pop()` Removes the element on the top of the stack and returns it.
- `int top()` Returns the element on the top of the stack.
- `boolean empty()` Returns `true` if the stack is empty, `false` otherwise.

**Notes:**
- You must use **only** standard operations of a queue, which means that only `push to back`, `peek/pop from front`, `size` and `is empty` operations are valid.
- Depending on your language, the queue may not be supported natively. You may simulate a queue using a `list` or `deque` (double-ended queue) as long as you use only a queue's standard operations.


**Example 1**
Input:
`["MyStack", "push", "push", "top", "pop", "empty"]`
`[[], [1], [2], [], [], []]`
Output:
`[null, null, null, 2, 2, false]`
Explanation:
```java
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top();   // return 2
myStack.pop();   // return 2
myStack.empty(); // return False
```

**Constraints**
- `1 <= x <= 9`
- At most `100` calls will be made to `push`, `pop`, `top`, and `empty`.
- All the calls to `pop` and `top` are valid.

**Follow up**
Can you implement the stack using only one queue?

**Related Topics**
- Stack
- Design
- Queue


## II Solution
### Approach 1: Two Queues
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

### Approach 2: One Queue
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