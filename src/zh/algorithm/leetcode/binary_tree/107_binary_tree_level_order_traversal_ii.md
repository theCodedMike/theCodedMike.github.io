---
title: 107, 二叉树的层序遍历II
icon: discover
date: 2023-12-12
order: 5
sticky: true
category: binary tree
tag: 
  - medium
  - queue
  - binary tree
  - breadth first search
---

## 一、题目描述
给你二叉树的根节点`root`，返回其节点值**自底向上的层序遍历**。（即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

**示例 1**
![5 nodes](../../../../../assets/leetcode/5_nodes_102.png)
输入: root = [3, 9, 20, null, null, 15, 7]
输出: [[15, 7], [9, 20], [3]]

**示例 2**
输入: root = [1]
输出: [[1]]

**示例 3**
输入: root = []
输出: []

**提示**
- 树中节点数目在范围`[0, 2000]`内
- `-1000 <= Node.val <= 1000`

**相关主题**
- 树
- 广度优先搜索
- 二叉树


## 二、题解
::: code-tabs
@tab Rust节点定义
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

@tab Java节点定义
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

### 方法 1: 递归
::: code-tabs
@tab Rust
```rust
pub fn level_order_bottom(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Vec<i32>> {
    let mut res = vec![];
    const RECUR_IMPL: fn(Option<Rc<RefCell<TreeNode>>>, usize, &mut Vec<Vec<i32>>) =
        |root, level, res| match root {
            None => {}
            Some(curr) => {
                if level == res.len() {
                    res.push(vec![]);
                }
                res[level].push(curr.borrow().val);
                RECUR_IMPL(curr.borrow_mut().left.take(), level + 1, res);
                RECUR_IMPL(curr.borrow_mut().right.take(), level + 1, res);
            }
        };

    RECUR_IMPL(root, 0, &mut res);
    res.reverse();

    res
}
```

@tab Java
```java
@FunctionalInterface
interface TriConsumer<U, V, W> {
    void accept(U u, V v, W w);
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

public List<List<Integer>> levelOrderBottom(TreeNode root) {
    List<List<Integer>> res = new ArrayList<>();
    this.recurImpl.accept(root, 0, res);
    Collections.reverse(res);
    return res;
}
```
:::

### 方法 2: 迭代
::: code-tabs
@tab Rust
```rust
pub fn level_order_bottom(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Vec<i32>> {
    //Self::iteration_impl_1(root)
    Self::iteration_impl_2(root)
}

fn iteration_impl_1(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Vec<i32>> {
    let mut res = vec![];

    if let Some(root) = root {
        let mut queue = VecDeque::from([(root, 0)]);

        while let Some((curr, level)) = queue.pop_front() {
            if res.len() == level {
                res.push(vec![]);
            }
            res[level].push(curr.borrow().val);

            if let Some(left) = curr.borrow_mut().left.take() {
                queue.push_back((left, level + 1));
            }
            if let Some(right) = curr.borrow_mut().right.take() {
                queue.push_back((right, level + 1));
            }
        }

        res.reverse();
    }

    res
}

fn iteration_impl_2(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Vec<i32>> {
    let mut res = vec![];

    if let Some(root) = root {
        let mut queue = VecDeque::from([root]);

        while !queue.is_empty() {
            let level_len = queue.len();
            let mut level_vec = Vec::with_capacity(level_len);

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

        res.reverse();
    }

    res
}

```

@tab Java
```java
public List<List<Integer>> levelOrderBottom(TreeNode root) {
    //return this.iterationImpl1(root);
    return this.iterationImpl2(root);
}

List<List<Integer>> iterationImpl1(TreeNode root) {
    List<List<Integer>> res = new ArrayList<>();

    if (root != null) {
        Deque<Object[]> queue = new ArrayDeque<>() {{
            this.add(new Object[]{root, 0});
        }};

        while (!queue.isEmpty()) {
            Object[] obj = queue.removeFirst();
            TreeNode curr = (TreeNode) obj[0];
            Integer level = (Integer) obj[1];

            if (level == res.size()) {
                res.add(new ArrayList<>());
            }
            res.get(level).add(curr.val);

            if (curr.left != null) {
                queue.addLast(new Object[]{curr.left, level + 1});
            }
            if (curr.right != null) {
                queue.addLast(new Object[]{curr.right, level + 1});
            }
        }

        Collections.reverse(res);
    }

    return res;
}

List<List<Integer>> iterationImpl2(TreeNode root) {
    List<List<Integer>> res = new ArrayList<>();

    if (root != null) {
        Deque<TreeNode> queue = new ArrayDeque<>() {{
            this.add(root);
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

        Collections.reverse(res);
    }

    return res;
}

```
:::