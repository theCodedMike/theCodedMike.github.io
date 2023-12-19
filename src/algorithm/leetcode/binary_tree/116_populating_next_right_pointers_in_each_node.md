---
title: 116, Populating Next Right Pointers in Each Node
icon: discover
date: 2023-12-17
order: 10
sticky: true
category: binary tree
tag: 
  - medium
  - binary tree
  - linked list
  - depth first search
  - breadth first search
---

## I Problem
You are given a **perfect binary tree** where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:
```c
struct Node {
    int val;
    Node *left;
    Node *right;
    Node *next;
}
```

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to `NULL`.

Initially, all next pointers are set to `NULL`.

**Example 1**
![picture116](../../../../assets/leetcode/next_right_pointers_116.png)
Input: root = [1, 2, 3, 4, 5, 6, 7]
Output: [1, #, 2, 3, #, 4, 5, 6, 7, #]
Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.

**Example 2**
Input: root = []
Output: []

**Constraints**
- The number of nodes in the tree is in the range `[0, 2¹² - 1]`
- `-1000 <= Node.val <= 1000`

**Follow up**
- You may only use constant extra space.
- The recursive approach is fine. You may assume implicit stack space does not count as extra space for this problem.

**Related Topics**
- Linked List
- Depth-First Search
- Breadth-First Search
- Binary Tree


## II Solution
::: code-tabs
@tab Rust Node Definition(SmartPointer)
```rust
#[derive(Debug, PartialEq, Eq)]
pub struct Node {
    pub val: i32,
    pub left: Option<Rc<RefCell<Node>>>,
    pub right: Option<Rc<RefCell<Node>>>,
    pub next: Option<Rc<RefCell<Node>>>,
}

impl Node {
    pub fn new(val: i32) -> Option<Rc<RefCell<Node>>> {
        Some(Rc::new(RefCell::new(Node {
            val,
            left: None,
            right: None,
            next: None,
        })))
    }
    pub fn new_with_children(
        val: i32,
        left: Option<Rc<RefCell<Node>>>,
        right: Option<Rc<RefCell<Node>>>,
    ) -> Option<Rc<RefCell<Node>>> {
        Some(Rc::new(RefCell::new(Node {
            val,
            left,
            right,
            next: None,
        })))
    }
}
```

@tab Rust Node Definition(RawPointer)
```rust
#[derive(Debug, PartialEq, Eq)]
pub struct Node {
    pub val: i32,
    pub left: *mut Node,
    pub right: *mut Node,
    pub next: *mut Node,
}

impl Node {
    pub fn new(val: i32) -> *mut Node {
        Box::into_raw(Box::new(Node {
            val,
            left: null_mut(),
            right: null_mut(),
            next: null_mut(),
        }))
    }
    pub fn new_with_children(
        val: i32, 
        left: *mut Node, 
        right: *mut Node
    ) -> *mut Node {
        Box::into_raw(Box::new(Node {
            val,
            left,
            right,
            next: null_mut(),
        }))
    }
}
```

@tab Rust Node Definition(NonNull)
```rust
#[derive(Debug, PartialEq, Eq)]
pub struct Node {
    pub val: i32,
    pub left: Option<NonNull<Node>>,
    pub right: Option<NonNull<Node>>,
    pub next: Option<NonNull<Node>>,
}

impl Node {
    pub fn new(val: i32) -> Option<NonNull<Node>> {
        NonNull::new(Box::into_raw(Box::new(Node {
            val,
            left: None,
            right: None,
            next: None,
        })))
    }
    pub fn new_with_children(
        val: i32,
        left: Option<NonNull<Node>>,
        right: Option<NonNull<Node>>,
    ) -> Option<NonNull<Node>> {
        NonNull::new(Box::into_raw(Box::new(Node {
            val,
            left,
            right,
            next: None,
        })))
    }
}
```

@tab Java Node Definition
```java
public class Node {
    public int val;
    public Node left;
    public Node right;
    public Node next;

    public Node() {}
    public Node(int _val) {
        val = _val;
    }
    public Node(int _val, Node _left, Node _right, Node _next) {
        val = _val;
        left = _left;
        right = _right;
        next = _next;
    }
}
```
:::

### Approach 1: Breadth-First Search
::: code-tabs
@tab Rust(SmartPointer)
```rust
pub fn connect(root: Option<Rc<RefCell<Node>>>) -> Option<Rc<RefCell<Node>>> {
    //Self::bfs_iter_1(root)
    Self::bfs_iter_2(root)
}

fn bfs_iter_1(root: Option<Rc<RefCell<Node>>>) -> Option<Rc<RefCell<Node>>> {
    if let Some(root) = root.clone() {
        let mut queue = VecDeque::from([root]);

        while !queue.is_empty() {
            let level_len = queue.len();
            let mut prev: Option<Rc<RefCell<Node>>> = None;

            for i in 0..level_len {
                if let Some(curr) = queue.pop_front() {
                    if i > 0 {
                        prev.map(|prev| {
                            prev.borrow_mut().next = Some(curr.clone());
                        });
                    }
                    prev = Some(curr.clone());
                    if let Some(left) = curr.borrow().left.clone() {
                        queue.push_back(left);
                    }
                    if let Some(right) = curr.borrow().right.clone() {
                        queue.push_back(right);
                    }
                };
            }
        }
    }

    root
}

fn bfs_iter_2(root: Option<Rc<RefCell<Node>>>) -> Option<Rc<RefCell<Node>>> {
    if let Some(root) = root.clone() {
        let mut queue = VecDeque::from([(root.clone(), 0)]);
        let mut prev: (Option<Rc<RefCell<Node>>>, i32) = (None, -1);

        while let Some((curr, level)) = queue.pop_front() {
            if prev.1 == level {
                prev.0.map(|prev| {
                    prev.borrow_mut().next = Some(curr.clone());
                });
            };
            prev = (Some(curr.clone()), level);

            if let Some(left) = curr.borrow().left.clone() {
                queue.push_back((left, level + 1));
            }
            if let Some(right) = curr.borrow().right.clone() {
                queue.push_back((right, level + 1));
            }
        }
    }

    root
}
```

@tab Rust(RawPointer)
```rust
pub fn connect(root: *mut Node) -> *mut Node {
    //Self::bfs_iter_1(root)
    Self::bfs_iter_2(root)
}

fn bfs_iter_1(root: *mut Node) -> *mut Node {
    if !root.is_null() {
        let mut queue = VecDeque::from([root]);

        while !queue.is_empty() {
            let level_len = queue.len();
            let mut prev: *mut Node = null_mut();

            for i in 0..level_len {
                if let Some(curr) = queue.pop_front() {
                    unsafe {
                        if i > 0 {
                            (*prev).next = curr;
                        }
                        prev = curr;
                        if !(*curr).left.is_null() {
                            queue.push_back((*curr).left);
                        }
                        if !(*curr).right.is_null() {
                            queue.push_back((*curr).right);
                        }
                    }
                }
            }
        }
    }

    root
}

fn bfs_iter_2(root: *mut Node) -> *mut Node {
    if !root.is_null() {
        let mut queue = VecDeque::from([(root, 0)]);
        let mut prev: (*mut Node, i32) = (null_mut(), -1);

        while !queue.is_empty() {
            if let Some((curr, level)) = queue.pop_front() {
                unsafe {
                    if level == prev.1 {
                        (*prev.0).next = curr;
                    }
                    prev = (curr, level);

                    if !(*curr).left.is_null() {
                        queue.push_back(((*curr).left, level + 1));
                    }
                    if !(*curr).right.is_null() {
                        queue.push_back(((*curr).right, level + 1));
                    }
                }
            }
        }
    }

    root
}
```

@tab Rust(NonNull)
```rust
pub fn connect(root: Option<NonNull<Node>>) -> Option<NonNull<Node>> {
    //Self::bfs_iter_1(root)
    Self::bfs_iter_2(root)
}

fn bfs_iter_1(root: Option<NonNull<Node>>) -> Option<NonNull<Node>> {
    if let Some(root) = root {
        let mut queue = VecDeque::from([root]);

        while !queue.is_empty() {
            let level_len = queue.len();
            let mut prev: NonNull<Node> = NonNull::dangling();

            for i in 0..level_len {
                if let Some(curr) = queue.pop_front() {
                    unsafe {
                        if i > 0 {
                            (*prev.as_ptr()).next = Some(curr);
                        }
                        prev = curr;
                        if let Some(left) = curr.as_ref().left {
                            queue.push_back(left);
                        }
                        if let Some(right) = curr.as_ref().right {
                            queue.push_back(right);
                        }
                    }
                }
            }
        }
    }

    root
}

fn bfs_iter_2(root: Option<NonNull<Node>>) -> Option<NonNull<Node>> {
    if let Some(root) = root {
        let mut queue = VecDeque::from([(root, 0)]);
        let mut prev: (NonNull<Node>, i32) = (NonNull::dangling(), -1);

        while let Some((curr, level)) = queue.pop_front() {
            unsafe {
                if level == prev.1 {
                    (*prev.0.as_ptr()).next = Some(curr);
                }
                prev = (curr, level);

                if let Some(left) = curr.as_ref().left {
                    queue.push_back((left, level + 1));
                }
                if let Some(right) = curr.as_ref().right {
                    queue.push_back((right, level + 1));
                }
            }
        }
    }

    root
}
```

@tab Java
```java
public Node connect(Node root) {
    //return this.bfsIter1(root);
    return this.bfsIter2(root);
}

Node bfsIter1(Node root) {
    if (root != null) {
        ArrayDeque<Node> queue = new ArrayDeque<>() {{
            this.addLast(root);
        }};

        while (!queue.isEmpty()) {
            int levelSize = queue.size();
            Node prev = null;

            for (int i = 0; i < levelSize; i++) {
                Node curr = queue.removeFirst();
                if (i > 0) {
                    prev.next = curr;
                }
                prev = curr;
                if (curr.left != null) {
                    queue.addLast(curr.left);
                }
                if (curr.right != null) {
                    queue.addLast(curr.right);
                }
            }
        }
    }

    return root;
}

Node bfsIter2(Node root) {
    if (root != null) {
        ArrayDeque<Object[]> queue = new ArrayDeque<>() {{
            this.addLast(new Object[]{root, 0});
        }};
        Node prev = null;
        int prevLevel = -1;

        while (!queue.isEmpty()) {
            Object[] objs = queue.removeFirst();
            Node curr = (Node) objs[0];
            int level = (int) objs[1];
            if (level == prevLevel) {
              prev.next = curr;
            }
            prev = curr;
            prevLevel = level;
            
            if (curr.left != null) {
                queue.addLast(new Object[]{curr.left, level + 1});
            }
            if (curr.right != null) {
                queue.addLast(new Object[]{curr.right, level + 1});
            }
        }
    }

    return root;
}
```
:::

### Approach 2: Use Established Next Pointer
::: code-tabs
@tab Rust(SmartPointer)
```rust
pub fn connect(root: Option<Rc<RefCell<Node>>>) -> Option<Rc<RefCell<Node>>> {
    //Self::use_next_pointer_iter(root)
    Self::use_next_pointer_recur(root)
}
///
/// Iteration
///
fn use_next_pointer_iter(root: Option<Rc<RefCell<Node>>>) -> Option<Rc<RefCell<Node>>> {
    let mut leftmost = root.clone();

    while let Some(level_first) = leftmost {
        let mut level = Some(level_first.clone());

        while let Some(curr) = level {
            match (curr.borrow().left.clone(), curr.borrow().right.clone()) {
                (Some(left), Some(right)) => {
                    left.borrow_mut().next = Some(right.clone());
                    if let Some(next) = curr.borrow().next.clone() {
                        right.borrow_mut().next = next.borrow().left.clone();
                    }
                }
                (_, _) => break,
            }
            level = curr.borrow().next.clone();
        }

        leftmost = level_first.borrow().left.clone();
    }

    root
}
///
/// Recursion(Pre-Order)
///
fn use_next_pointer_recur(root: Option<Rc<RefCell<Node>>>) -> Option<Rc<RefCell<Node>>> {
    const PRE_ORDER: fn(Option<Rc<RefCell<Node>>>) = |root| {
        if let Some(curr) = root {
            match (curr.borrow().left.clone(), curr.borrow().right.clone()) {
                (Some(left), Some(right)) => {
                    left.borrow_mut().next = Some(right.clone());
                    if let Some(next) = curr.borrow().next.clone() {
                        right.borrow_mut().next = next.borrow().left.clone();
                    }
                }
                (_, _) => return,
            }

            PRE_ORDER(curr.borrow().left.clone());
            PRE_ORDER(curr.borrow().right.clone());
        }
    };

    PRE_ORDER(root.clone());

    root
}
```

@tab Rust(RawPointer)
```rust
pub fn connect(root: *mut Node) -> *mut Node {
    //Self::use_next_pointer_iter(root)
    Self::use_next_pointer_recur(root)
}
///
/// Iteration
///
fn use_next_pointer_iter(root: *mut Node) -> *mut Node {
    let mut leftmost = root;

    while !leftmost.is_null() {
        unsafe {
            let mut curr = leftmost;

            while !curr.is_null() {
                if !(*curr).left.is_null() {
                    (*(*curr).left).next = (*curr).right;
                    if !(*curr).next.is_null() {
                        (*(*curr).right).next = (*(*curr).next).left;
                    }
                }
                curr = (*curr).next;
            }
            
            leftmost = (*leftmost).left;
        }
    }

    root
}
///
/// Recursion(Pre-Order)
///
fn use_next_pointer_recur(root: *mut Node) -> *mut Node {
    const PRE_ORDER: fn(*mut Node) = |root| unsafe {
        if root.is_null() || (*root).left.is_null() {
            return;
        }
        (*(*root).left).next = (*root).right;
        if !(*root).next.is_null() {
            (*(*root).right).next = (*(*root).next).left;
        }

        PRE_ORDER((*root).left);
        PRE_ORDER((*root).right);
    };

    PRE_ORDER(root);
    
    root
}
```

@tab Rust(NonNull)
```rust
pub fn connect(root: Option<NonNull<Node>>) -> Option<NonNull<Node>> {
    //Self::use_next_pointer_iter(root)
    Self::use_next_pointer_recur(root)
}
///
/// Iteration
///
fn use_next_pointer_iter(root: Option<NonNull<Node>>) -> Option<NonNull<Node>> {
    let mut leftmost = root.clone();

    while let Some(level_first) = leftmost {
        unsafe {
            let mut level = Some(level_first);

            while let Some(curr) = level {
                match (curr.as_ref().left, curr.as_ref().right) {
                    (Some(left), Some(right)) => {
                        (*left.as_ptr()).next = Some(right);
                        if let Some(next) = curr.as_ref().next {
                            (*right.as_ptr()).next = next.as_ref().left;
                        }
                    }
                    (_, _) => break,
                }
                level = curr.as_ref().next;
            }

            leftmost = level_first.as_ref().left;
        }
    }

    root
}
///
/// Recursion(Pre-Order)
///
fn use_next_pointer_recur(root: Option<NonNull<Node>>) -> Option<NonNull<Node>> {
    const PRE_ORDER: fn(Option<NonNull<Node>>) = |root| unsafe {
        if let Some(curr) = root {
            match (curr.as_ref().left, curr.as_ref().right) {
                (Some(left), Some(right)) => {
                    (*left.as_ptr()).next = Some(right);
                    if let Some(next) = curr.as_ref().next {
                        (*right.as_ptr()).next = next.as_ref().left;
                    }
                }
                (_, _) => return,
            }

            PRE_ORDER(curr.as_ref().left);
            PRE_ORDER(curr.as_ref().right);
        }
    };

    PRE_ORDER(root);

    root
}
```

@tab Java
```java
public Node connect(Node root) {
    //return this.useNextPointerIter(root);
    return this.useNextPointerRecur(root);
}
/**
 * Iteration
 */
Node useNextPointerIter(Node root) {
    Node leftmost = root;

    while (leftmost != null) {
        Node curr = leftmost;

        while (curr != null) {
            if (curr.left != null) {
                curr.left.next = curr.right;
                if (curr.next != null) {
                    curr.right.next = curr.next.left;
                }
            }

            curr = curr.next;
        }

        leftmost = leftmost.left;
    }

    return root;
}
/**
 * Recursion(Pre-Order)
 */
Node useNextPointerRecur(Node root) {
    this.preOrder.accept(root);
    return root;
}
Consumer<Node> preOrder = (root) -> {
    if (root == null || root.left == null) {
        return;
    }
    root.left.next = root.right;
    if (root.next != null) {
        root.right.next = root.next.left;
    }

    this.preOrder.accept(root.left);
    this.preOrder.accept(root.right);
};
```
:::