---
title: 113, 路径总和II
icon: discover
date: 2023-12-30
order: 21
sticky: true
category: binary tree
tag: 
  - medium
  - backtracking
  - binary tree
  - depth first search
  - breadth first search
---

## 一、题目描述
给你二叉树的根节点`root`和一个整数目标和`targetSum`，找出所有**从根节点到叶子节点**路径总和等于给定目标和的路径。

**叶子节点**是指没有子节点的节点。

**示例 1**
![](../../../../../assets/leetcode/path_sum_ii_113.png)
输入: root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], targetSum = 22
输出: [[5, 4, 11, 2], [5, 8, 4, 5]]

**示例 2**
![](../../../../../assets/leetcode/3_nodes_112.png)
输入: root = [1, 2, 3], targetSum = 5
输出: []

**示例 3**
输入: root = [1, 2], targetSum = 0
输出: []

**提示**
- 树中节点总数在范围`[0, 5000]`内
- `-1000 <= Node.val <= 1000`
- `-1000 <= targetSum <= 1000`

**相关主题**
- 树
- 深度优先搜索
- 回溯
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
pub fn path_sum(root: Option<Rc<RefCell<TreeNode>>>, target_sum: i32) -> Vec<Vec<i32>> {
    //Self::dfs_recur_1(root, target_sum
    //Self::dfs_iter_1(root, target_sum)
    Self::dfs_recur_2(root, target_sum)
}

fn dfs_recur_1(root: Option<Rc<RefCell<TreeNode>>>, target_sum: i32) -> Vec<Vec<i32>> {
    let mut paths = vec![];
    const RECUR: fn(Option<Rc<RefCell<TreeNode>>>, i32, i32, Vec<i32>, &mut Vec<Vec<i32>>) =
        |root, target_sum, sum, mut path, paths| {
            if let Some(curr) = root {
                let curr_val = curr.borrow().val;
                let curr_sum = sum + curr_val;
                path.push(curr_val);

                let left = curr.borrow_mut().left.take();
                let right = curr.borrow_mut().right.take();

                if left.is_none() && right.is_none() && curr_sum == target_sum {
                    paths.push(path);
                } else {
                    if left.is_some() {
                        RECUR(left, target_sum, curr_sum, path.clone(), paths);
                    }
                    if right.is_some() {
                        RECUR(right, target_sum, curr_sum, path, paths);
                    }
                }
            }
        };

    RECUR(root, target_sum, 0, vec![], &mut paths);

    paths
}

fn dfs_iter_1(root: Option<Rc<RefCell<TreeNode>>>, target_sum: i32) -> Vec<Vec<i32>> {
    let mut paths = vec![];

    if let Some(root) = root {
        let mut stack = vec![(root, 0, vec![])];

        while let Some((curr, sum, mut path)) = stack.pop() {
            let curr_val = curr.borrow().val;
            let curr_sum = sum + curr_val;
            path.push(curr_val);

            let left = curr.borrow_mut().left.take();
            let right = curr.borrow_mut().right.take();

            if left.is_none() && right.is_none() && curr_sum == target_sum {
                paths.push(path);
            } else {
                if let Some(right) = right {
                    stack.push((right, curr_sum, path.clone()));
                }
                if let Some(left) = left {
                    stack.push((left, curr_sum, path));
                }
            }
        }
    }

    paths
}

fn dfs_recur_2(root: Option<Rc<RefCell<TreeNode>>>, target_sum: i32) -> Vec<Vec<i32>> {
    const RECUR: fn(Option<Rc<RefCell<TreeNode>>>, i32, i32) -> Vec<Vec<i32>> =
        |root, target_sum, sum| match root {
            None => vec![],
            Some(curr) => {
                let curr_val = curr.borrow().val;
                let curr_sum = curr_val + sum;

                let left = curr.borrow_mut().left.take();
                let right = curr.borrow_mut().right.take();

                if left.is_none() && right.is_none() {
                    let mut paths = vec![];

                    if curr_sum == target_sum {
                        paths.push(vec![curr_val]);
                    }

                    paths
                } else {
                    let mut l_paths = RECUR(left, target_sum, curr_sum);
                    let mut r_paths = RECUR(right, target_sum, curr_sum);

                    l_paths.iter_mut().for_each(|p| p.insert(0, curr_val));
                    r_paths.iter_mut().for_each(|p| p.insert(0, curr_val));
                    l_paths.append(&mut r_paths);

                    l_paths
                }
            }
        };

    RECUR(root, target_sum, 0)
}
```

@tab Java
```java
public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
    //return this.dfsRecur1(root, targetSum);
    //return this.dfsIter1(root, targetSum);
    return this.dfsRecur2(root, targetSum);
}

@FunctionalInterface
interface QuintConsumer<A, B, C, D, E> {
    void accept(A a, B b, C c, D d, E e);
}
QuintConsumer<TreeNode, Integer, Integer, List<Integer>, List<List<Integer>>> recur1 = (root, targetSum, sum, path, paths) -> {
    if (root == null) {
        return;
    }

    int currSum = sum + root.val;
    path.add(root.val);

    if (root.left == null && root.right == null && currSum == targetSum) {
        paths.add(path);
    } else {
        if (root.left != null) {
            this.recur1.accept(root.left, targetSum, currSum, new ArrayList<>(path), paths);
        }
        if (root.right != null) {
            this.recur1.accept(root.right, targetSum, currSum, path, paths);
        }
    }
};
List<List<Integer>> dfsRecur1(TreeNode root, int targetSum) {
    List<List<Integer>> paths = new ArrayList<>();

    this.recur1.accept(root, targetSum, 0, new ArrayList<>(), paths);
    
    return paths;
}

List<List<Integer>> dfsIter1(TreeNode root, int targetSum) {
    List<List<Integer>> paths = new ArrayList<>();

    if (root != null) {
        Deque<Object[]> stack = new ArrayDeque<>() {{
            this.push(new Object[]{root, 0, new ArrayList<>()});
        }};

        while (!stack.isEmpty()) {
            Object[] objs = stack.pop();
            TreeNode curr = (TreeNode) objs[0];
            int sum = (int) objs[1];
            List<Integer> path = (List<Integer>) objs[2];
            
            int currSum = sum + curr.val;
            path.add(curr.val);

            if (curr.left == null && curr.right == null && currSum == targetSum) {
                paths.add(path);
            } else {
                if (curr.right != null) {
                    stack.push(new Object[]{curr.right, currSum, new ArrayList<>(path)});
                }
                if (curr.left != null) {
                    stack.push(new Object[]{curr.left, currSum, path});
                }
            }
        }
    }

    return paths;
}

@FunctionalInterface
interface TriFunction<A, B, C, D> {
    D apply(A a, B b, C c);
}
TriFunction<TreeNode, Integer, Integer, List<List<Integer>>> recur2 = (root, targetSum, sum) -> {
    if (root == null) {
        return new ArrayList<>();
    }

    int currVal = root.val;
    int currSum = sum + currVal;

    if (root.left == null && root.right == null) {
        List<List<Integer>> paths = new ArrayList<>();

        if (currSum == targetSum) {
            paths.add(new ArrayList<>() {{
                this.add(currVal);
            }});
        }

        return paths;
    } else {
        List<List<Integer>> l_paths = this.recur2.apply(root.left, targetSum, currSum);
        List<List<Integer>> r_paths = this.recur2.apply(root.right, targetSum, currSum);

        l_paths.forEach(p -> p.addFirst(currVal));
        r_paths.forEach(p -> p.addFirst(currVal));
        l_paths.addAll(r_paths);

        return l_paths;
    }
};
List<List<Integer>> dfsRecur2(TreeNode root, int targetSum) {
    return this.recur2.apply(root, targetSum, 0);
}
```
:::

### 方法 2: 广度优先搜索
::: code-tabs
@tab Rust
```rust
pub fn path_sum(root: Option<Rc<RefCell<TreeNode>>>, target_sum: i32) -> Vec<Vec<i32>> {
    Self::bfs_iter(root, target_sum)
}

fn bfs_iter(root: Option<Rc<RefCell<TreeNode>>>, target_sum: i32) -> Vec<Vec<i32>> {
    let mut paths = vec![];

    if let Some(root) = root {
        let mut queue = VecDeque::from([(root, 0, vec![])]);

        while let Some((curr, sum, mut path)) = queue.pop_front() {
            let curr_val = curr.borrow().val;
            let curr_sum = curr_val + sum;
            path.push(curr_val);

            let left = curr.borrow_mut().left.take();
            let right = curr.borrow_mut().right.take();

            if left.is_none() && right.is_none() && curr_sum == target_sum {
                paths.push(path);
            } else {
                if let Some(left) = left {
                    queue.push_back((left, curr_sum, path.clone()));
                }
                if let Some(right) = right {
                    queue.push_back((right, curr_sum, path));
                }
            }
        }
    }

    paths
}
```

@tab Java
```java
public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
    return this.bfsIter(root, targetSum);
}

List<List<Integer>> bfsIter(TreeNode root, int targetSum) {
    List<List<Integer>> paths = new ArrayList<>();

    if (root != null) {
        Deque<Object[]> queue = new ArrayDeque<>() {{
            this.addLast(new Object[]{root, 0, new ArrayList<>()});
        }};

        while (!queue.isEmpty()) {
            Object[] objs = queue.removeFirst();
            TreeNode curr = (TreeNode) objs[0];
            int sum = (int) objs[1];
            List<Integer> path = (List<Integer>) objs[2];

            int currSum = sum + curr.val;
            path.add(curr.val);

            if (curr.left == null && curr.right == null && currSum == targetSum) {
                paths.add(path);
            } else {
                if (curr.left != null) {
                    queue.addLast(new Object[]{curr.left, currSum, new ArrayList<>(path)});
                }
                if (curr.right != null) {
                    queue.addLast(new Object[]{curr.right, currSum, path});
                }
            }
        }
    }

    return paths;
}
```
:::