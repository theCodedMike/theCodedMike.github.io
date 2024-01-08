---
title: 98, Validate Binary Search Tree
icon: discover
date: 2024-01-08
order: 28
sticky: true
category: binary tree
tag: 
  - medium
  - binary tree
  - depth first search
  - binary search tree
---

## I Problem
Given the `root` of a binary tree, *determine if it is a valid binary search tree (BST)*.

A **valid BST** is defined as follows:
- The left subtree of a node contains only nodes with keys **less than** the node's key.
- The right subtree of a node contains only nodes with keys **greater than** the node's key.
- Both the left and right subtrees must also be binary search trees.

**Example 1**
![](../../../../assets/leetcode/3_nodes_513.png)
Input: root = [2, 1, 3]
Output: true

**Example 2**
![](../../../../assets/leetcode/validate_binary_search_tree_98.png)
Input: root = [5, 1, 4, null, null, 3, 6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

**Constraints**
- The number of nodes in the tree is in the range `[1, 10⁴]`.
- `-2³¹ <= Node.val <= 2³¹ - 1`

**Related Topics**
- Tree
- Depth-First Search
- Binary Search Tree
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

### Approach 1: Squeeze Theorem
::: code-tabs
@tab Rust
```rust
pub fn is_valid_bst(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
    //Self::dfs_recur_1(root)
    //Self::dfs_iter_1(root)
    Self::bfs_iter_1(root)
}

///
/// DFS, recursion
///
fn dfs_recur_1(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
    const DETERMINE: fn(Option<Rc<RefCell<TreeNode>>>, i64, i64) -> bool =
        |root, min, max| match root {
            None => true,
            Some(curr) => {
                let curr_val = curr.borrow().val as i64;
                if !(min < curr_val && curr_val < max) {
                    return false;
                }

                let left = curr.borrow_mut().left.take();
                let right = curr.borrow_mut().right.take();

                DETERMINE(left, min, curr_val) && DETERMINE(right, curr_val, max)
            }
        };

    DETERMINE(root, i64::MIN, i64::MAX)
}

///
/// DFS, iteration
///
fn dfs_iter_1(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
    if let Some(root) = root {
        let mut stack = vec![(root, i64::MIN, i64::MAX)];

        while let Some((curr, min, max)) = stack.pop() {
            let curr_val = curr.borrow().val as i64;
            if !(min < curr_val && curr_val < max) {
                return false;
            }

            if let Some(right) = curr.borrow_mut().right.take() {
                stack.push((right, curr_val, max));
            }
            if let Some(left) = curr.borrow_mut().left.take() {
                stack.push((left, min, curr_val));
            }
        }
    }

    true
}

///
/// BFS, iteration
///
fn bfs_iter_1(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
    if let Some(root) = root {
        let mut queue = VecDeque::from([(root, i64::MIN, i64::MAX)]);

        while let Some((curr, min, max)) = queue.pop_front() {
            let curr_val = curr.borrow().val as i64;
            if !(min < curr_val && curr_val < max) {
                return false;
            }

            if let Some(left) = curr.borrow_mut().left.take() {
                queue.push_back((left, min, curr_val));
            }
            if let Some(right) = curr.borrow_mut().right.take() {
                queue.push_back((right, curr_val, max));
            }
        }
    }

    true
}
```

@tab Java
```java
public boolean isValidBST(TreeNode root) {
    //return this.dfsRecur1(root);
    //return this.dfsIter1(root);
    return this.bfsIter1(root);
}

@FunctionalInterface
interface TriPredicate<A, B, C> {
    boolean test(A a, B b, C c);
}

TriPredicate<TreeNode, Long, Long> determine1 = (root, min, max) -> {
    if (root == null) {
        return true;
    }

    long currVal = root.val;
    if (!(min < currVal && currVal < max)) {
        return false;
    }

    return this.determine1.test(root.left, min, currVal) && this.determine1.test(root.right, currVal, max);
};

/**
 * DFS, recursion
 */
boolean dfsRecur1(TreeNode root) {
    return this.determine1.test(root, Long.MIN_VALUE, Long.MAX_VALUE);
}

/**
 * DFS, iteration
 */
boolean dfsIter1(TreeNode root) {
    if (root != null) {
        Deque<Object[]> stack = new ArrayDeque<>() {{
            this.push(new Object[]{root, Long.MIN_VALUE, Long.MAX_VALUE});
        }};

        while (!stack.isEmpty()) {
            Object[] objs = stack.pop();
            TreeNode curr = (TreeNode) objs[0];
            long min = (long) objs[1];
            long max = (long) objs[2];

            long currVal = curr.val;
            if (!(min < currVal && currVal < max)) {
                return false;
            }

            if (curr.right != null) {
                stack.push(new Object[]{curr.right, currVal, max});
            }
            if (curr.left != null) {
                stack.push(new Object[]{curr.left, min, currVal});
            }
        }
    }

    return true;
}

/**
 * BFS, iteration
 */ 
boolean bfsIter1(TreeNode root) {
    if (root != null) {
        Deque<Object[]> queue = new ArrayDeque<>() {{
            this.addLast(new Object[]{root, Long.MIN_VALUE, Long.MAX_VALUE});
        }};

        while (!queue.isEmpty()) {
            Object[] objs = queue.removeFirst();
            TreeNode curr = (TreeNode) objs[0];
            long min = (long) objs[1];
            long max = (long) objs[2];

            long currVal = curr.val;
            if (!(min < currVal && currVal < max)) {
                return false;
            }

            if (curr.left != null) {
                queue.addLast(new Object[]{curr.left, min, currVal});
            }
            if (curr.right != null) {
                queue.addLast(new Object[]{curr.right, currVal, max});
            }
        }
    }

    return true;
}
```
:::

### Approach 2: In-order traversal is ordered
::: code-tabs
@tab Rust
```rust
pub fn is_valid_bst(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
    //Self::dfs_recur_2(root)
    Self::dfs_iter_2(root)
}

///
/// DFS, recursion
///
fn dfs_recur_2(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
    let mut vals = vec![];
    const DETERMINE: fn(Option<Rc<RefCell<TreeNode>>>, &mut Vec<i32>) -> bool =
        |root, vals| match root {
            None => true,
            Some(curr) => {
                if !DETERMINE(curr.borrow_mut().left.take(), vals) {
                    return false;
                }

                let curr_val = curr.borrow().val;
                if !vals.last().map_or(true, |&prev_val| curr_val > prev_val) {
                    return false;
                }
                vals.push(curr_val);

                DETERMINE(curr.borrow_mut().right.take(), vals)
            }
        };

    DETERMINE(root, &mut vals)
}

///
/// DFS, iteration
///
fn dfs_iter_2(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
    if let Some(root) = root {
        let mut vals = vec![];
        let mut stack = vec![Ok(root)];

        while let Some(curr) = stack.pop() {
            match curr {
                Ok(node) => {
                    if let Some(right) = node.borrow_mut().right.take() {
                        stack.push(Ok(right));
                    }

                    stack.push(Err(node.borrow().val));

                    if let Some(left) = node.borrow_mut().left.take() {
                        stack.push(Ok(left));
                    }
                }
                Err(curr_val) => {
                    if !vals.last().map_or(true, |&prev_val| curr_val > prev_val) {
                        return false;
                    }

                    vals.push(curr_val);
                }
            }
        }
    }

    true
}
```

@tab Java
```java
public boolean isValidBST(TreeNode root) {
    //return this.dfsRecur2(root);
    return this.dfsIter2(root);
}

BiPredicate<TreeNode, List<Integer>> determine2 = (root, vals) -> {
    if (root == null) {
        return true;
    }

    if (!this.determine2.test(root.left, vals)) {
        return false;
    }

    int currVal = root.val;
    if (!vals.isEmpty() && currVal <= vals.getLast()) {
        return false;
    }
    vals.add(currVal);

    return this.determine2.test(root.right, vals);
};
/**
 * DFS, recursion
 */
boolean dfsRecur2(TreeNode root) {
    List<Integer> vals = new ArrayList<>();

    return this.determine2.test(root, vals);
}

/**
 * DFS, iteration
 */
boolean dfsIter2(TreeNode root) {
    if (root != null) {
        List<Integer> vals = new ArrayList<>();
        Deque<Object> stack = new ArrayDeque<>() {{
            this.push(root);
        }};

        while (!stack.isEmpty()) {
            Object obj = stack.pop();
            switch (obj) {
                case TreeNode node -> {
                    if (node.right != null) {
                        stack.push(node.right);
                    }

                    stack.push(node.val);

                    if (node.left != null) {
                        stack.push(node.left);
                    }
                }
                case Integer currVal -> {
                    if (!vals.isEmpty() && currVal <= vals.getLast()) {
                        return false;
                    }

                    vals.add(currVal);
                }
                default -> throw new IllegalStateException("Unexpected value: " + obj);
            }
        }
    }

    return true;
}
```
:::