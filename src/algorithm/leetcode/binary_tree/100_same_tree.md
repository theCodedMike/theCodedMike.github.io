---
title: 100, Same Tree
icon: discover
date: 2024-01-22
order: 39
sticky: true
category: binary tree
tag: 
  - easy
  - binary tree
  - depth first search
  - breadth first search
---

## I Problem
Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

**Example 1**
![](../../../../assets/leetcode/same_tree_1_100.png)
Input: p = [1, 2, 3], q = [1, 2, 3]
Output: true

**Example 2**
![](../../../../assets/leetcode/same_tree_2_100.png)
Input: p = [1, 2], q = [1, null, 2]
Output: false

**Example 3**
![](../../../../assets/leetcode/same_tree_3_100.png)
Input: p = [1, 2, 1], q = [1, 1, 2]
Output: false

**Constraints**
- The number of nodes in both trees is in the range `[0, 100]`.
- `-10⁴ <= Node.val <= 10⁴`

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
pub fn is_same_tree(p: Option<Rc<RefCell<TreeNode>>>, q: Option<Rc<RefCell<TreeNode>>>) -> bool {
    //Self::dfs_recur(p, q)
    Self::dfs_iter(p, q)
}

fn dfs_recur(p: Option<Rc<RefCell<TreeNode>>>, q: Option<Rc<RefCell<TreeNode>>>) -> bool {
    const COMPARE: fn(Option<Rc<RefCell<TreeNode>>>, Option<Rc<RefCell<TreeNode>>>) -> bool =
        |p, q| match (p, q) {
            (None, None) => true,
            (Some(p), Some(q)) => {
                if p.borrow().val != q.borrow().val {
                    return false;
                }

                COMPARE(p.borrow_mut().left.take(), q.borrow_mut().left.take())
                    && COMPARE(p.borrow_mut().right.take(), q.borrow_mut().right.take())
            }
            _ => false,
        };

    COMPARE(p, q)
}

fn dfs_iter(p: Option<Rc<RefCell<TreeNode>>>, q: Option<Rc<RefCell<TreeNode>>>) -> bool {
    let mut stack = vec![(p, q)];

    while let Some((p, q)) = stack.pop() {
        match (p, q) {
            (None, None) => {}
            (Some(p), Some(q)) => {
                if p.borrow().val != q.borrow().val {
                    return false;
                }

                stack.push((p.borrow_mut().right.take(), q.borrow_mut().right.take()));
                stack.push((p.borrow_mut().left.take(), q.borrow_mut().left.take()));
            }
            _ => return false,
        }
    }

    true
}
```

@tab Java
```java
public boolean isSameTree(TreeNode p, TreeNode q) {
    //return this.dfsRecur(p, q);
    return this.dfsIter(p, q);
}

BiFunction<TreeNode, TreeNode, Boolean> compare = (p, q) -> {
    if (p == null && q == null) {
        return true;
    } else if (p != null && q != null) {
        if (p.val != q.val) {
            return false;
        }

        return this.compare.apply(p.left, q.left)
                && this.compare.apply(p.right, q.right);
    } else {
        return false;
    }
};

boolean dfsRecur(TreeNode p, TreeNode q) {
    return this.compare.apply(p, q);
}

boolean dfsIter(TreeNode _p, TreeNode _q) {
    Deque<TreeNode[]> stack = new ArrayDeque<>() {{
        this.push(new TreeNode[]{_p, _q});
    }};

    while (!stack.isEmpty()) {
        TreeNode[] nodes = stack.pop();
        TreeNode p = nodes[0];
        TreeNode q = nodes[1];

        if (p != null && q != null) {
            if (p.val != q.val) {
                return false;
            }

            stack.push(new TreeNode[]{p.right, q.right});
            stack.push(new TreeNode[]{p.left, q.left});
        } else {
            if (!(p == null && q == null)) {
                return false;
            }
        }
    }

    return true;
}
```
:::

### Approach 2: Breadth-First Search
::: code-tabs
@tab Rust
```rust
pub fn is_same_tree(p: Option<Rc<RefCell<TreeNode>>>, q: Option<Rc<RefCell<TreeNode>>>) -> bool {
    Self::bfs_iter(p, q)
}

fn bfs_iter(p: Option<Rc<RefCell<TreeNode>>>, q: Option<Rc<RefCell<TreeNode>>>) -> bool {
    let mut queue = VecDeque::from([(p, q)]);

    while let Some((p, q)) = queue.pop_front() {
        match (p, q) {
            (None, None) => {}
            (Some(p), Some(q)) => {
                if p.borrow().val != q.borrow().val {
                    return false;
                }

                queue.push_back((p.borrow_mut().left.take(), q.borrow_mut().left.take()));
                queue.push_back((p.borrow_mut().right.take(), q.borrow_mut().right.take()));
            }
            _ => return false,
        }
    }

    true
}
```

@tab Java
```java
public boolean isSameTree(TreeNode p, TreeNode q) {
    return this.bfsIter(p, q);
}

boolean bfsIter(TreeNode _p, TreeNode _q) {
    Deque<TreeNode[]> queue = new ArrayDeque<>() {{
        this.addLast(new TreeNode[]{_p, _q});
    }};

    while (!queue.isEmpty()) {
        TreeNode[] nodes = queue.removeFirst();
        TreeNode p = nodes[0];
        TreeNode q = nodes[1];

        if (p != null && q != null) {
            if (p.val != q.val) {
                return false;
            }
            
            queue.addLast(new TreeNode[]{p.left, q.left});
            queue.addLast(new TreeNode[]{p.right, q.right});
        } else {
            if (!(p == null && q == null)) {
                return false;
            }
        }
    }

    return true;
}
```
:::