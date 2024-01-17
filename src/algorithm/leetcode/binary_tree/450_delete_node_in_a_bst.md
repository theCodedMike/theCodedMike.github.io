---
title: 450, Delete Node in a BST
icon: discover
date: 2024-01-17
order: 35
sticky: true
category: binary tree
tag: 
  - medium
  - binary tree
  - binary search tree
---

## I Problem
Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return *the **root node reference** (possibly updated) of the BST*.

Basically, the deletion can be divided into two stages:
1. Search for a node to remove.
2. If the node is found, delete the node.

**Example 1**
![](../../../../assets/leetcode/delete_node_in_a_bst_1_450.png)
Input: root = [5, 3, 6, 2, 4, null, 7], key = 3
Output: [5, 4, 6, 2, null, null, 7]
Explanation: Given key to delete is `3`. So we find the node with value `3` and delete it.

One valid answer is [5, 4, 6, 2, null, null, 7], shown in the above BST.

Please notice that another valid answer is [5, 2, 6, null, 4, null, 7] and it's also accepted.
![](../../../../assets/leetcode/delete_node_in_a_bst_2_450.png)

**Example 2**
Input: root = [5, 3, 6, 2, 4, null, 7], key = 0
Output: [5, 3, 6, 2, 4, null, 7]
Explanation: The tree does not contain a node with value = 0.

**Example 3**
Input: root = [], key = 0
Output: []

**Constraints**
- The number of nodes in the tree is in the range `[0, 10⁴]`.
- `-10⁵ <= Node.val <= 10⁵`
- Each node has a **unique** value.
- `root` is a valid binary search tree.
- `-10⁵ <= key <= 10⁵`

**Follow up**
Could you solve it with time complexity O(`height of tree`)?

**Related Topics**
- Tree
- Binary Tree
- Binary Search Tree


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
pub fn delete_node(mut root: Option<Rc<RefCell<TreeNode>>>, key: i32) -> Option<Rc<RefCell<TreeNode>>> {
    const DELETE: fn(&mut Option<Rc<RefCell<TreeNode>>>, i32, Option<Rc<RefCell<TreeNode>>>, bool) = 
        |root, key, mut parent, is_left| {
            if let Some(curr) = root {
                let curr_val = curr.borrow().val;

                if curr_val == key {
                    let right = curr.borrow_mut().right.take();
                    let left = curr.borrow_mut().left.take();

                    let child = if right.is_some() {
                        let mut leftmost = right.clone();

                        while let Some(ref curr) = leftmost {
                            let left = curr.borrow().left.clone();
                            if left.is_none() {
                                break;
                            } else {
                                leftmost = left;
                            }
                        }

                        if let Some(curr) = leftmost {
                            curr.borrow_mut().left = left;
                        }

                        right
                    } else {
                        left
                    };

                    if let Some(p) = parent {
                        if is_left {
                            p.borrow_mut().left = child;
                        } else {
                            p.borrow_mut().right = child;
                        }
                    } else {
                        *root = child;
                    }
                } else {
                    parent = Some(curr.clone());

                    if key < curr_val {
                        let mut left = curr.borrow().left.clone();
                        DELETE(&mut left, key, parent, true)
                    } else {
                        let mut right = curr.borrow().right.clone();
                        DELETE(&mut right, key, parent, false)
                    }
                }
            }
        };

    DELETE(&mut root, key, None, false);

    root
}
```

@tab Java
```java
@FunctionalInterface
interface QuadrConsumer<A, B, C, D> {
    void accept(A a, B b, C c, D d);
}

QuadrConsumer<TreeNode[], Integer, TreeNode, Boolean> delete = (roots, key, parent, isLeft) -> {
    TreeNode root = roots[0];
    if (root == null) {
        return;
    }

    if (root.val == key) {
        TreeNode child;
        if (root.right != null) {
            child = root.right;

            TreeNode leftmost = root.right;
            while (leftmost.left != null) {
                leftmost = leftmost.left;
            }

            leftmost.left = root.left;
        } else {
            child = root.left;
        }

        if (parent == null) {
            roots[0] = child;
        } else {
            if (isLeft) {
                parent.left = child;
            } else {
                parent.right = child;
            }
        }
    } else {
        if (key < root.val) {
            this.delete.accept(new TreeNode[]{root.left}, key, root, true);
        } else {
            this.delete.accept(new TreeNode[]{root.right}, key, root, false);
        }
    }
};

public TreeNode deleteNode(TreeNode _root, int key) {
    TreeNode[] root = {_root};

    this.delete.accept(root, key, null, false);

    return root[0];
}
```
:::

### Approach 2: Iteration
::: code-tabs
@tab Rust
```rust
pub fn delete_node(mut root: Option<Rc<RefCell<TreeNode>>>, key: i32) -> Option<Rc<RefCell<TreeNode>>> {
    let mut parent: Option<Rc<RefCell<TreeNode>>> = None;
    let mut is_left = false;
    let mut curr_node = root.clone();

    while let Some(curr) = curr_node {
        let curr_val = curr.borrow().val;

        if curr_val == key {
            let left = curr.borrow_mut().left.take();
            let right = curr.borrow_mut().right.take();

            let child = if right.is_some() {
                let mut leftmost = right.clone();

                while let Some(ref curr) = leftmost {
                    let left = curr.borrow().left.clone();
                    if left.is_none() {
                        break;
                    }
                    leftmost = left;
                }

                if let Some(curr) = leftmost {
                    curr.borrow_mut().left = left;
                }

                right
            } else {
                left
            };

            if let Some(p) = parent {
                if is_left {
                    p.borrow_mut().left = child;
                } else {
                    p.borrow_mut().right = child;
                }
            } else {
                root = child;
            }

            break;
        } else {
            parent = Some(curr.clone());

            if key < curr_val {
                is_left = true;
                curr_node = curr.borrow().left.clone();
            } else {
                is_left = false;
                curr_node = curr.borrow().right.clone();
            }
        }
    }

    root
}
```

@tab Java
```java
public TreeNode deleteNode(TreeNode root, int key) {
    TreeNode parent = null;
    boolean isLeft = false;
    TreeNode curr = root;

    while (curr != null) {
        if (curr.val == key) {
            TreeNode child;
            if (curr.right != null) {
                child = curr.right;

                TreeNode leftmost = curr.right;
                while (leftmost.left != null) {
                    leftmost = leftmost.left;
                }

                leftmost.left = curr.left;
            } else {
                child = curr.left;
            }

            if (parent == null) {
                root = child;
            } else {
                if (isLeft) {
                    parent.left = child;
                } else {
                    parent.right = child;
                }
            }

            break;
        } else {
            parent = curr;

            if (key < curr.val) {
                isLeft = true;
                curr = curr.left;
            } else {
                isLeft = false;
                curr = curr.right;
            }
        }
    }

    return root;
}
```
:::