---
title: 102, Binary Tree Level Order Traversal
icon: discover
date: 2023-12-11
order: 4
sticky: true
category: binary tree
tag: 
  - medium
  - queue
  - binary tree
  - breadth first search
---

## I Problem
Given the `root` of a binary tree, return *the level order traversal of its nodes' values*. (i.e., from left to right, level by level).

**Example 1**
![5 nodes](../../../../assets/leetcode/5_nodes_102.png)
Input: [3, 9, 20, null, null, 15, 7]
Output: [[3], [9, 20], [15, 7]]

**Example 2**
Input: root = [1]
Output: [[1]]

**Example 3**
Input: root = []
Output: []

**Constraints**
- The number of nodes in the tree is in the range `[0, 2000]`.
- `-1000 <= Node.val <= 1000`

**Related Topics**
- Tree
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

### Approach 1: Recursion
::: code-tabs
@tab Rust
```rust
pub fn level_order(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Vec<i32>> {
    let mut res = vec![];
    const RECURSION_IMPL: fn(Option<Rc<RefCell<TreeNode>>>, usize, &mut Vec<Vec<i32>>) =
        |root, level, res| match root {
            None => {}
            Some(curr) => {
                if level == res.len() {
                    res.push(vec![]);
                }
                res[level].push(curr.borrow().val);

                if let Some(left) = curr.borrow_mut().left.take() {
                    RECURSION_IMPL(Some(left), level + 1, res);
                }

                if let Some(right) = curr.borrow_mut().right.take() {
                    RECURSION_IMPL(Some(right), level + 1, res);
                }
            }
        };

    RECURSION_IMPL(root, 0, &mut res);

    res
}
```

@tab Java
```java
@FunctionalInterface
interface TriConsumer<X, Y, Z> {
    void accept(X x, Y y, Z z);
}

TriConsumer<TreeNode, Integer, List<List<Integer>>> recurImpl = (root, level, res) -> {
    if (root == null) {
        return;
    }

    if (level == res.size()) {
        res.add(new ArrayList<>());
    }
    res.get(level).add(root.val);

    if (root.left != null) {
        this.recurImpl.accept(root.left, level + 1, res);
    }

    if (root.right != null) {
        this.recurImpl.accept(root.right, level + 1, res);
    }
};

public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> res = new ArrayList<>();

    this.recurImpl.accept(root, 0, res);

    return res;
}
```
:::

### Approach 2: Iteration
::: code-tabs
@tab Rust
```rust
pub fn level_order(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Vec<i32>> {
    //Self::iteration_impl_1(root)
    Self::iteration_impl_2(root)
}

fn iteration_impl_1(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Vec<i32>> {
    let mut res = vec![];

    if let Some(root) = root {
        let mut queue = VecDeque::from([(0, root)]);

        while let Some((level, curr)) = queue.pop_front() {
            if level == res.len() {
                res.push(vec![]);
            }
            res[level].push(curr.borrow().val);

            if let Some(left) = curr.borrow_mut().left.take() {
                queue.push_back((level + 1, left));
            }

            if let Some(right) = curr.borrow_mut().right.take() {
                queue.push_back((level + 1, right));
            }
        }
    }

    res
}

fn iteration_impl_2(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Vec<i32>> {
    let mut res = vec![];

    if let Some(root) = root {
        let mut queue = VecDeque::from([root]);

        while !queue.is_empty() {
            let level_len = queue.len();
            let mut level_vec = vec![];

            for _ in 0..level_len {
                if let Some(curr) = queue.pop_front() {
                    level_vec.push(curr.borrow().val);

                    if let Some(left) = curr.borrow_mut().left.take() {
                        queue.push_back(left);
                    }

                    if let Some(right) = curr.borrow_mut().right.take() {
                        queue.push_back(right);
                    }
                }
            }

            res.push(level_vec);
        }
    }

    res
}

```

@tab Java
```java
public List<List<Integer>> levelOrder(TreeNode root) {
    //return this.iterationImpl1(root);
    return this.iterationImpl2(root);
}

List<List<Integer>> iterationImpl1(TreeNode root) {
    List<List<Integer>> res = new ArrayList<>();

    if (root != null) {
        Deque<Object[]> queue = new ArrayDeque<>() {{
            this.addLast(new Object[]{0, root});
        }};

        while (!queue.isEmpty()) {
            Object[] pop = queue.removeFirst();
            int level = (int) pop[0];
            TreeNode curr = (TreeNode) pop[1];

            if (level == res.size()) {
                res.add(new ArrayList<>());
            }
            res.get(level).add(curr.val);

            if (curr.left != null) {
                queue.addLast(new Object[]{level + 1, curr.left});
            }

            if (curr.right != null) {
                queue.addLast(new Object[]{level + 1, curr.right});
            }
        }
    }

    return res;
}

List<List<Integer>> iterationImpl2(TreeNode root) {
    List<List<Integer>> res = new ArrayList<>();

    if (root != null) {
        Deque<TreeNode> queue = new ArrayDeque<>() {{
            this.addLast(root);
        }};

        while (!queue.isEmpty()) {
            int levelSize = queue.size();
            List<Integer> levelList = new ArrayList<>();

            for (int i = 0; i < levelSize; i++) {
                TreeNode curr = queue.removeFirst();
                levelList.add(curr.val);

                if (curr.left != null) {
                    queue.addLast(curr.left);
                }
                
                if (curr.right != null) {
                    queue.addLast(curr.right);
                }
            }

            res.add(levelList);
        }
    }

    return res;
}

```
:::