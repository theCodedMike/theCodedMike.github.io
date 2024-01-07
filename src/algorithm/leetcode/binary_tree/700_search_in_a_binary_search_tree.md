---
title: 700, Search in a Binary Search Tree
icon: discover
date: 2024-01-07
order: 27
sticky: true
category: binary tree
tag: 
  - easy
  - binary tree
  - binary search tree
---

## I Problem
You are given the `root` of a binary search tree (BST) and an integer `val`.

Find the node in the BST that the node's value equals `val` and return the subtree rooted with that node. If such a node does not exist, return `null`.

**Example 1**
![](../../../../assets/leetcode/search_in_a_binary_search_tree_1_700.png)
Input: root = [4, 2, 7, 1, 3], val = 2
Output: [2, 1, 3]

**Example 2**
![](../../../../assets/leetcode/search_in_a_binary_search_tree_2_700.png)
Input: root = [4, 2, 7, 1, 3], val = 5
Output: []

**Constraints**
- The number of nodes in the tree is in the range `[1, 5000]`.
- `1 <= Node.val <= 10⁷`
- `root` is a binary search tree.
- `1 <= val <= 10⁷`

**Related Topics**
- Tree
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

### Approach 1: Recursion
::: code-tabs
@tab Rust
```rust
///
/// Time Complexity: O(n)
/// Space Complexity: O(n)
///
pub fn search_bst(root: Option<Rc<RefCell<TreeNode>>>, val: i32) -> Option<Rc<RefCell<TreeNode>>> {
    const SEARCH: fn(Option<Rc<RefCell<TreeNode>>>, i32) -> Option<Rc<RefCell<TreeNode>>> =
        |root, val| match root {
            None => None,
            Some(curr) => {
                let curr_val = curr.borrow().val;
                let left = curr.borrow().left.clone();
                let right = curr.borrow().right.clone();

                if val > curr_val {
                    SEARCH(right, val)
                } else if val < curr_val {
                    SEARCH(left, val)
                } else {
                    Some(curr)
                }
            }
        };

    SEARCH(root, val)
}
```

@tab Java
```java
BiFunction<TreeNode, Integer, TreeNode> search = (curr, val) -> {
    if (curr == null) {
        return null;
    }
    
    if (val > curr.val) {
        return this.search.apply(curr.right, val);
    } else if (val < curr.val) {
        return this.search.apply(curr.left, val);
    } else {
        return curr;
    }
};
/**
 * Time Complexity：O(n)
 * Space Complexity：O(n)
 */
public TreeNode searchBST(TreeNode root, int val) {
    return this.search.apply(root, val);
}
```
:::

### Approach 2: Iteration
::: code-tabs
@tab Rust
```rust
///
/// Time Complexity: O(n)
/// Space Complexity: O(1)
///
pub fn search_bst(mut root: Option<Rc<RefCell<TreeNode>>>, val: i32) -> Option<Rc<RefCell<TreeNode>>> {
    while let Some(curr) = root {
        let curr_val = curr.borrow().val;
        let left = curr.borrow().left.clone();
        let right = curr.borrow().right.clone();

        if val > curr_val {
            root = right;
        } else if val < curr_val {
            root = left;
        } else {
            return Some(curr);
        }
    }

    None
}
```

@tab Java
```java
/**
 * Time Complexity：O(n)
 * Space Complexity：O(1)
 */
public TreeNode searchBST(TreeNode root, int val) {
    while (root != null) {
        if (val > root.val) {
            root = root.right;
        } else if (val < root.val) {
            root = root.left;
        } else {
            return root;
        }
    }

    return null;
}
```
:::