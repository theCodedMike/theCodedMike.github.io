---
title: 404, 左叶子之和
icon: discover
date: 2023-12-27
order: 18
sticky: true
category: binary tree
tag: 
  - easy
  - binary tree
  - depth first search
  - breadth first search
---

## 一、题目描述
给定二叉树的根节点`root`，返回所有左叶子之和。

**示例 1**
![sum of left leaves](../../../../../assets/leetcode/5_nodes_102.png)
输入: [3, 9, 20, null, null, 15, 7]
输出: 24
解释: 在这个二叉树中，有两个左叶子，分别是9和15，所以返回24

**示例 2**
输入: root = [1]
输出: 0

**提示**
- 节点数在`[1, 1000]`范围内
- `-1000 <= Node.val <= 1000`

**相关主题**
- 树
- 深度优先搜索
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

### 方法 1: 深度优先搜索
::: code-tabs
@tab Rust
```rust
pub fn sum_of_left_leaves(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
    //Self::dfs_recur_1(root)
    //Self::dfs_recur_2(root)
    Self::dfs_iter(root)
}

fn dfs_recur_1(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
    let mut sum = 0;
    const RECUR: fn(Option<Rc<RefCell<TreeNode>>>, bool, &mut i32) = |root, is_left, sum| {
        if let Some(curr) = root {
            let left = curr.borrow_mut().left.take();
            let right = curr.borrow_mut().right.take();
            match (left, right) {
                (None, None) => {
                    if is_left {
                        *sum += curr.borrow().val;
                    }
                }
                (left, right) => {
                    if left.is_some() {
                        RECUR(left, true, sum);
                    }
                    if right.is_some() {
                        RECUR(right, false, sum);
                    }
                }
            }
        }
    };

    RECUR(root, false, &mut sum);

    sum
}

fn dfs_recur_2(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
    const RECUR: fn(Option<Rc<RefCell<TreeNode>>>, bool) -> i32 = |root, is_left| match root {
        None => 0,
        Some(curr) => {
            let left = curr.borrow_mut().left.take();
            let right = curr.borrow_mut().right.take();
            match (left, right) {
                (None, None) => {
                    if is_left {
                        curr.borrow().val
                    } else {
                        0
                    }
                }
                (left, right) => RECUR(left, true) + RECUR(right, false),
            }
        }
    };

    RECUR(root, false)
}

fn dfs_iter(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
    let mut sum = 0;

    if let Some(root) = root {
        let mut stack = vec![(root, false)];

        while let Some((curr, is_left)) = stack.pop() {
            let left = curr.borrow_mut().left.take();
            let right = curr.borrow_mut().right.take();

            if left.is_none() && right.is_none() && is_left {
                sum += curr.borrow().val;
            }
            if let Some(right) = right {
                stack.push((right, false));
            }
            if let Some(left) = left {
                stack.push((left, true));
            }
        }
    }

    sum
}
```

@tab Java
```java
public int sumOfLeftLeaves(TreeNode root) {
    //return this.dfsRecur1(root);
    //return this.dfsRecur2(root);
    return this.dfsIter(root);
}

@FunctionalInterface
interface TriConsumer<A, B, C> {
    void accept(A a, B b, C c);
}
TriConsumer<TreeNode, Boolean, int[]> recur1 = (root, isLeft, sum) -> {
    if (root == null) {
        return;
    }
    if (root.left == null && root.right == null) {
        if (isLeft) {
            sum[0] += root.val;
        }
    } else {
        if (root.left != null) {
            this.recur1.accept(root.left, true, sum);
        }
        if (root.right != null) {
            this.recur1.accept(root.right, false, sum);
        }
    }
};
int dfsRecur1(TreeNode root) {
    int[] sum = new int[]{0};
    this.recur1.accept(root, false, sum);
    return sum[0];
}

BiFunction<TreeNode, Boolean, Integer> recur2 = (root, isLeft) -> {
    if (root == null) {
        return 0;
    }
    if (root.left == null && root.right == null) {
        if (isLeft) {
            return root.val;
        } else {
            return 0;
        }
    } else {
        return this.recur2.apply(root.left, true) + this.recur2.apply(root.right, false);
    }
};
int dfsRecur2(TreeNode root) {
    return this.recur2.apply(root, false);
}

int dfsIter(TreeNode root) {
    int sum = 0;

    if (root != null) {
        Deque<Object[]> stack = new ArrayDeque<>() {{
            this.push(new Object[]{root, false});
        }};

        while (!stack.isEmpty()) {
            Object[] objs = stack.pop();
            TreeNode curr = (TreeNode) objs[0];
            boolean isLeft = (boolean) objs[1];

            if (curr.left == null && curr.right == null && isLeft) {
                sum += curr.val;
            }
            if (curr.right != null) {
                stack.push(new Object[]{curr.right, false});
            }
            if (curr.left != null) {
                stack.push(new Object[]{curr.left, true});
            }
        }
    }

    return sum;
}
```
:::

### 方法 2: 广度优先搜索
::: code-tabs
@tab Rust
```rust
pub fn sum_of_left_leaves(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
    Self::bfs_iter(root)
}

fn bfs_iter(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
    let mut sum = 0;

    if let Some(root) = root {
        let mut queue = VecDeque::from([(root, false)]);

        while let Some((curr, is_left)) = queue.pop_front() {
            let left = curr.borrow_mut().left.take();
            let right = curr.borrow_mut().right.take();

            if left.is_none() && right.is_none() && is_left {
                sum += curr.borrow().val;
            }
            if let Some(left) = left {
                queue.push_back((left, true));
            }
            if let Some(right) = right {
                queue.push_back((right, false));
            }
        }
    }

    sum
}
```

@tab Java
```java
public int sumOfLeftLeaves(TreeNode root) {
    return this.bfsIter(root);
}

int bfsIter(TreeNode root) {
    int sum = 0;

    if (root != null) {
        Deque<Object[]> queue = new ArrayDeque<>() {{
            this.addLast(new Object[]{root, false});
        }};

        while (!queue.isEmpty()) {
            Object[] objs = queue.removeFirst();
            TreeNode curr = (TreeNode) objs[0];
            boolean isLeft = (boolean) objs[1];

            if (curr.left == null && curr.right == null && isLeft) {
                sum += curr.val;
            }
            if (curr.left != null) {
                queue.addLast(new Object[]{curr.left, true});
            }
            if (curr.right != null) {
                queue.addLast(new Object[]{curr.right, false});
            }
        }
    }

    return sum;
}
```
:::