---
title: 94, Binary Tree In-order Traversal
icon: discover
date: 2023-12-09
order: 2
sticky: true
category: binary tree
tag: 
  - easy
  - stack
  - binary tree
  - depth first search
---

## I Problem
Given the `root` of a binary tree, return *the inorder traversal of its nodes' values*.

**Example 1**
![3 nodes](../../../../assets/leetcode/3_nodes_144.png)
Input: root = [1, null, 2, 3]
Output: [1, 3, 2]

**Example 2**
Input: root = []
Output: []

**Example 3**
Input: root = [1]
Output: [1]

**Constraints**
- The number of nodes in the tree is in the range `[0, 100]`
- `-100 <= Node.val <= 100`

**Follow up**
Recursive solution is trivial, could you do it iteratively?

**Related Topics**
- Stack
- Depth-First Search
- Binary Tree


## II Solution
::: code-tabs
@tab Rust Node Definition
```rust
#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        TreeNode {
            val,
            left: None,
            right: None,
        }
    }
}
```

@tab Java Node Definition
```java
public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
```
:::

### Approach 1: Recursion
::: code-tabs
@tab Rust
```rust
pub fn inorder_traversal(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
    let mut res = vec![];
    const RECURSION_IMPL: fn(root: Option<Rc<RefCell<TreeNode>>>, res: &mut Vec<i32>) =
        |root, res| match root {
            None => {}
            Some(root) => {
                RECURSION_IMPL(root.borrow_mut().left.take(), res);
                res.push(root.borrow().val);
                RECURSION_IMPL(root.borrow_mut().right.take(), res);
            }
        };

    RECURSION_IMPL(root, &mut res);
    return res;
}
```

@tab Java
```java
BiConsumer<TreeNode, List<Integer>> recursionImpl = (root, res) -> {
    if (root == null) {
        return;
    }
    this.recursionImpl.accept(root.left, res);
    res.add(root.val);
    this.recursionImpl.accept(root.right, res);
};

public List<Integer> inorderTraversal(TreeNode root) {
    List<Integer> res = new ArrayList<>();
    this.recursionImpl.accept(root, res);
    return res;
}
```
:::

### Approach 2: Iteration
::: code-tabs
@tab Rust
```rust
pub fn inorder_traversal(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
    //Self::iteration_impl_1(root)
    //Self::iteration_impl_2(root)
    Self::iteration_impl_3(root)
}

fn iteration_impl_1(mut root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
    let mut res = vec![];
    let mut stack = vec![];

    while root.is_some() || !stack.is_empty() {
        while let Some(curr) = root {
            root = curr.borrow_mut().left.take();
            stack.push(curr);
        }
        if let Some(curr) = stack.pop() {
            res.push(curr.borrow().val);
            root = curr.borrow_mut().right.take();
        }
    }

    res
}

fn iteration_impl_2(mut root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
    let mut res = vec![];
    let mut stack = vec![];

    while root.is_some() || !stack.is_empty() {
        match root {
            Some(curr) => {
                root = curr.borrow_mut().left.take();
                stack.push(curr);
            }
            None => {
                if let Some(curr) = stack.pop() {
                    res.push(curr.borrow().val);
                    root = curr.borrow_mut().right.take();
                }
            }
        }
    }

    res
}

fn iteration_impl_3(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
    let mut res = vec![];
    
    if let Some(root) = root {
        let mut stack = vec![Ok(root)];
        while let Some(curr) = stack.pop() {
            match curr {
                Ok(node) => {
                    if let Some(right) = node.borrow_mut().right.take() {
                        stack.push(Ok(right));          // Right
                    }
                    stack.push(Err(node.borrow().val)); // Root
                    if let Some(left) = node.borrow_mut().left.take() {
                        stack.push(Ok(left));           // Left
                    }
                }
                Err(val) => res.push(val),
            }
        }
    }

    res
}

```

@tab Java
```java
public List<Integer> inorderTraversal(TreeNode root) {
    //return this.iterationImpl1(root);
    //return this.iterationImpl2(root);
    return this.iterationImpl3(root);
}

List<Integer> iterationImpl1(TreeNode root) {
    List<Integer> res = new ArrayList<>();
    Deque<TreeNode> stack = new ArrayDeque<>();

    while (root != null || !stack.isEmpty()) {
        while (root != null) {
            stack.push(root);
            root = root.left;
        }
        TreeNode curr = stack.pop();
        root = curr.right;
        res.add(curr.val);
    }

    return res;
}

List<Integer> iterationImpl2(TreeNode root) {
    List<Integer> res = new ArrayList<>();
    Deque<TreeNode> stack = new ArrayDeque<>();

    while (root != null || !stack.isEmpty()) {
        if (root != null) {
            stack.push(root);
            root = root.left;
        } else {
            TreeNode curr = stack.pop();
            root = curr.right;
            res.add(curr.val);
        }
    }

    return res;
}

List<Integer> iterationImpl3(TreeNode root) {
    List<Integer> res = new ArrayList<>();

    if (root != null) {
        Deque<Object> stack = new ArrayDeque<>() {{
            this.push(root);
        }};
        while (!stack.isEmpty()) {
            Object curr = stack.pop();
            switch (curr) {
                case TreeNode node -> {
                    if (node.right != null) {
                        stack.push(node.right);
                    }
                    stack.push(node.val);
                    if (node.left != null) {
                        stack.push(node.left);
                    }
                }
                case Integer val -> res.add(val);
                default -> throw new IllegalStateException("Unexpected value: " + curr);
            }
        }
    }

    return res;
}

```
:::