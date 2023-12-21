---
title: 104, Maximum Depth of Binary Tree
icon: discover
date: 2023-12-21
order: 13
sticky: true
category: binary tree
tag: 
  - easy
  - binary tree
  - depth first search
  - breadth first search
---

## I Problem
Given the `root` of a binary tree, return *its maximum depth*.

A binary tree's **maximum depth** is the number of nodes along the longest path from the root node down to the farthest leaf node.

**Example 1**
![5_nodes](../../../../assets/leetcode/5_nodes_102.png)
Input: root = [3, 9, 20, null, null, 15, 7]
Output: 3

**Example 2**
Input: root = [1, null, 2]
Output: 2

**Constraints**
- The number of nodes in the tree is in the range `[0, 10⁴]`.
- `-100 <= Node.val <= 100`

**Related Topics**
- Tree
- Depth-First Search
- Breadth-First Search
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

### Approach 1: Depth-First Search
::: code-tabs
@tab Rust
```rust
pub fn max_depth(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
    const HELPER: fn(Option<Rc<RefCell<TreeNode>>>) -> i32 = |root| {
        if let Some(curr) = root {
            std::cmp::max(
                HELPER(curr.borrow().left.clone()),
                HELPER(curr.borrow().right.clone()),
            ) + 1
        } else {
            0
        }
    };

    HELPER(root)
}
```

@tab Java
```java
Function<TreeNode, Integer> helper = root -> {
    if (root == null) {
        return 0;
    }
    return Math.max(this.helper.apply(root.left), this.helper.apply(root.right)) + 1;
};

public int maxDepth(TreeNode root) {
    return this.helper.apply(root);
}
```
:::

### Approach 2: Breadth-First Search
::: code-tabs
@tab Rust
```rust
pub fn max_depth(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
    //Self::bfs_iter_1(root)
    Self::bfs_iter_2(root)
}

fn bfs_iter_1(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
    let mut max_depth = 0;

    if let Some(root) = root {
        let mut queue = VecDeque::from([(root, 1)]);

        while let Some((curr, level)) = queue.pop_front() {
            max_depth = level;

            if let Some(left) = curr.borrow_mut().left.take() {
                queue.push_back((left, level + 1));
            }
            if let Some(right) = curr.borrow_mut().right.take() {
                queue.push_back((right, level + 1));
            }
        }
    }

    max_depth
}

fn bfs_iter_2(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
    let mut max_depth = 0;

    if let Some(root) = root {
        let mut queue = VecDeque::from([root]);

        while !queue.is_empty() {
            let level_len = queue.len();

            for _ in 0..level_len {
                if let Some(curr) = queue.pop_front() {
                    if let Some(left) = curr.borrow_mut().left.take() {
                        queue.push_back(left);
                    }
                    if let Some(right) = curr.borrow_mut().right.take() {
                        queue.push_back(right);
                    }
                }
            }

            max_depth += 1;
        }
    }

    max_depth
}
```

@tab Java
```java
public int maxDepth(TreeNode root) {
    //return this.bfsIter1(root);
    return this.bfsIter2(root);
}

int bfsIter1(TreeNode root) {
    int maxDepth = 0;

    if (root != null) {
        Deque<Object[]> queue = new ArrayDeque<>() {{
            this.addLast(new Object[]{root, 1});
        }};

        while (!queue.isEmpty()) {
            Object[] obj = queue.removeFirst();
            TreeNode curr = (TreeNode) obj[0];
            int level = (int) obj[1];
            maxDepth = level;

            if (curr.left != null) {
                queue.addLast(new Object[]{curr.left, level + 1});
            }
            if (curr.right != null) {
                queue.addLast(new Object[]{curr.right, level + 1});
            }
        }
    }

    return maxDepth;
}

int bfsIter2(TreeNode root) {
    int maxDepth = 0;

    if (root != null) {
        Deque<TreeNode> queue = new ArrayDeque<>() {{
            this.addLast(root);
        }};

        while (!queue.isEmpty()) {
            int levelSize = queue.size();

            while (levelSize-- > 0) {
                TreeNode curr = queue.removeFirst();

                if (curr.left != null) {
                    queue.addLast(curr.left);
                }
                if (curr.right != null) {
                    queue.addLast(curr.right);
                }
            }

            maxDepth++;
        }
    }

    return maxDepth;
}
```
:::