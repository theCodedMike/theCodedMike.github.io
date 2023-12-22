---
title: 111, Minimum Depth of Binary Tree
icon: discover
date: 2023-12-22
order: 14
sticky: true
category: binary tree
tag: 
  - easy
  - binary tree
  - depth first search
  - breadth first search
---

## I Problem
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

**Note**: A leaf is a node with no children.

**Example 1**
![5_nodes](../../../../assets/leetcode/5_nodes_102.png)
Input: root = [3, 9, 20, null, null, 15, 7]
Output: 2

**Example 2**
Input: root = [2, null, 3, null, 4, null, 5, null, 6]
Output: 5

**Constraints**
- The number of nodes in the tree is in the range `[0, 10⁵]`.
- `-1000 <= Node.val <= 1000`

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
pub fn min_depth(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
    //Self::dfs_recur(root)
    //Self::dfs_pre_order_iter_1(root)
    //Self::dfs_pre_order_iter_2(root)
    Self::dfs_pre_order_iter_3(root)
}

///
/// DFS - Recursion
///
fn dfs_recur(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
    const HELPER: fn(Option<Rc<RefCell<TreeNode>>>) -> i32 = |root| {
        if let Some(curr) = root {
            match (curr.borrow().left.clone(), curr.borrow().right.clone()) {
                (None, None) => 1,
                (left, None) => HELPER(left) + 1,
                (None, right) => HELPER(right) + 1,
                (left, right) => std::cmp::min(HELPER(left), HELPER(right)) + 1,
            }
        } else {
            0
        }
    };
    HELPER(root)
}

///
/// DFS - Iteration(Pre-Order)
///
fn dfs_pre_order_iter_1(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
    if root.is_none() {
        return 0;
    }

    let mut min_depth = i32::MAX;
    let mut stack = vec![];
    let mut root = (root, 1);

    while root.0.is_some() || !stack.is_empty() {
        while let Some(curr) = root.0 {
            let level = root.1;
            if curr.borrow().left.is_none()
                && curr.borrow().right.is_none()
                && level < min_depth
            {
                min_depth = level;
            }
            root = (curr.borrow_mut().left.take(), level + 1);
            stack.push((curr, level));
        }
        if let Some((curr, level)) = stack.pop() {
            root = (curr.borrow_mut().right.take(), level + 1);
        }
    }

    min_depth
}

///
/// DFS - Iteration(Pre-Order)
///
fn dfs_pre_order_iter_2(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
    if root.is_none() {
        return 0;
    }

    let mut min_depth = i32::MAX;
    let mut stack = vec![];
    let mut root = (root, 1);

    while root.0.is_some() || !stack.is_empty() {
        if let Some(curr) = root.0 {
            let level = root.1;
            if curr.borrow().left.is_none()
                && curr.borrow().right.is_none()
                && level < min_depth
            {
                min_depth = level;
            }
            root = (curr.borrow_mut().left.take(), level + 1);
            stack.push((curr, level));
        } else {
            if let Some((curr, level)) = stack.pop() {
                root = (curr.borrow_mut().right.take(), level + 1);
            }
        }
    }

    min_depth
}

///
/// DFS - Iteration(Pre-Order)
///
fn dfs_pre_order_iter_3(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
    let mut min_depth = 0;

    if let Some(root) = root {
        min_depth = i32::MAX;

        let mut stack = vec![(root, 1)];
        while let Some((curr, level)) = stack.pop() {
            if curr.borrow().left.is_none()
                && curr.borrow().right.is_none()
                && level < min_depth
            {
                min_depth = level;
            }
            if let Some(right) = curr.borrow_mut().right.take() {
                stack.push((right, level + 1));
            }
            if let Some(left) = curr.borrow_mut().left.take() {
                stack.push((left, level + 1));
            }
        }
    }

    min_depth
}
```

@tab Java
```java
public int minDepth(TreeNode root) {
    //return this.dfsRecur(root);
    //return this.dfsPreOrderIter1(root);
    //return this.dfsPreOrderIter2(root);
    return this.dfsPreOrderIter3(root);
}

Function<TreeNode, Integer> helper = root -> {
    if (root == null) {
        return 0;
    }
    if (root.left == null && root.right == null) {
        return 1;
    }
    if (root.left == null) {
        return this.helper.apply(root.right) + 1;
    }
    if (root.right == null) {
        return this.helper.apply(root.left) + 1;
    }
    return Math.min(this.helper.apply(root.left), this.helper.apply(root.right)) + 1;
};
/**
 * DFS - Recursion
 */
int dfsRecur(TreeNode root) {
    return this.helper.apply(root);
}

/**
 * DFS - Iteration(Pre-Order)
 */
int dfsPreOrderIter1(TreeNode _root) {
    if (_root == null) {
        return 0;
    }
    int min_depth = Integer.MAX_VALUE;
    Object[] root = new Object[]{_root, 1};
    Deque<Object[]> stack = new ArrayDeque<>();

    while (root[0] != null || !stack.isEmpty()) {
        while (root[0] != null) {
            TreeNode curr = (TreeNode) root[0];
            int level = (int) root[1];
            if (curr.left == null && curr.right == null && level < min_depth) {
                min_depth = level;
            }

            root[0] = curr.left;
            root[1] = level + 1;
            stack.push(new Object[]{curr, level});
        }

        Object[] objs = stack.pop();
        TreeNode curr = (TreeNode) objs[0];
        int level = (int) objs[1];

        root[0] = curr.right;
        root[1] = level + 1;
    }

    return min_depth;
}

/**
 * DFS - Iteration(Pre-Order)
 */
int dfsPreOrderIter2(TreeNode _root) {
    if (_root == null) {
        return 0;
    }
    int min_depth = Integer.MAX_VALUE;
    Object[] root = new Object[]{_root, 1};
    Deque<Object[]> stack = new ArrayDeque<>();

    while (root[0] != null || !stack.isEmpty()) {
        if (root[0] != null) {
            TreeNode curr = (TreeNode) root[0];
            int level = (int) root[1];
            if (curr.left == null && curr.right == null && level < min_depth) {
                min_depth = level;
            }

            root[0] = curr.left;
            root[1] = level + 1;
            stack.push(new Object[]{curr, level});
        } else {
            Object[] objs = stack.pop();
            TreeNode curr = (TreeNode) objs[0];
            int level = (int) objs[1];

            root[0] = curr.right;
            root[1] = level + 1;
        }
    }

    return min_depth;
}

/**
 * DFS - Iteration(Pre-Order)
 */
int dfsPreOrderIter3(TreeNode _root) {
    if (_root == null) {
        return 0;
    }
    int min_depth = Integer.MAX_VALUE;
    Deque<Object[]> stack = new ArrayDeque<>() {{
        this.push(new Object[]{_root, 1});
    }};

    while (!stack.isEmpty()) {
        Object[] objs = stack.pop();
        TreeNode curr = (TreeNode) objs[0];
        int level = (int) objs[1];
        if (curr.left == null && curr.right == null && level < min_depth) {
            min_depth = level;
        }

        if (curr.right != null) {
            stack.push(new Object[] {curr.right, level + 1});
        }
        if (curr.left != null) {
            stack.push(new Object[] {curr.left, level + 1});
        }
    }

    return min_depth;
}
```
:::

### Approach 2: Breadth-First Search
::: code-tabs
@tab Rust
```rust
pub fn min_depth(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
    Self::bfs_iter(root)
}

fn bfs_iter(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
    let mut min_depth = 0;

    if let Some(root) = root {
        let mut queue = VecDeque::from([(root, 1)]);

        while !queue.is_empty() {
            if let Some((curr, level)) = queue.pop_front() {
                if curr.borrow().left.is_none() && curr.borrow().right.is_none() {
                    min_depth = level;
                    break;
                }

                if let Some(left) = curr.borrow_mut().left.take() {
                    queue.push_back((left, level + 1));
                }
                if let Some(right) = curr.borrow_mut().right.take() {
                    queue.push_back((right, level + 1));
                }
            }
        }
    }

    min_depth
}
```

@tab Java
```java
public int minDepth(TreeNode root) {
    return this.bfsIter(root);
}

int bfsIter(TreeNode root) {
    if (root == null) {
        return 0;
    }
    int min_depth = 0;
    Deque<Object[]> queue = new ArrayDeque<>() {{
        this.addLast(new Object[]{root, 1});
    }};

    while (!queue.isEmpty()) {
        Object[] objs = queue.pollFirst();
        TreeNode curr = (TreeNode) objs[0];
        int level = (int) objs[1];
        if (curr.left == null && curr.right == null) {
            min_depth = level;
            break;
        }
        
        if (curr.left != null) {
            queue.addLast(new Object[]{curr.left, level + 1});
        }
        if (curr.right != null) {
            queue.addLast(new Object[]{curr.right, level + 1});
        }
    }

    return min_depth;
}
```
:::