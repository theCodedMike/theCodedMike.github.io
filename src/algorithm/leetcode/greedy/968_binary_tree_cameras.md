---
title: 968, Binary Tree Cameras
icon: discover
date: 2024-03-26
order: 18
sticky: true
category: greedy
tag: 
  - hard
  - binary tree
  - depth first search
  - dynamic programming
---

## I Problem
You are given the `root` of a binary tree. We install cameras on the tree nodes where each camera at a node can monitor its parent, itself, and its immediate children.

Return *the minimum number of cameras needed to monitor all nodes of the tree*.

**Example 1**
![](../../../../assets/leetcode/bst_cameras_1_968.png)
Input: root = [0, 0, null, 0, 0]
Output: 1
Explanation: One camera is enough to monitor all nodes if placed as shown.

**Example 2**
![](../../../../assets/leetcode/bst_cameras_2_968.png)
Input: root = [0, 0, null, 0, null, 0, null, null, 0]
Output: 2
Explanation: At least two cameras are needed to monitor all nodes of the tree. The above image shows one of the valid configurations of camera placement.

**Constraints**
- The number of nodes in the tree is in the range `[1, 1000]`.
- `Node.val == 0`

**Related Topics**
- Tree
- Depth-First Search
- Dynamic Programming
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

@tab Go Node Definition
```go
type TreeNode struct {
    Val   int
    Left  *TreeNode
    Right *TreeNode
}
```
:::

### Approach 1: Dynamic Programming
::: code-tabs
@tab Rust
```rust
pub fn min_camera_cover(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
    const DFS: fn(Option<Rc<RefCell<TreeNode>>>) -> (i32, i32, i32) = 
        |root| match root {
            None => (i32::MAX / 2, 0, 0),
            Some(curr) => {
                let (la, lb, lc) = DFS(curr.borrow_mut().left.take());
                let (ra, rb, rc) = DFS(curr.borrow_mut().right.take());

                // 状态a：`root`必须放置摄像头的情况下，覆盖整棵树需要的摄像头数目。
                // 状态b：覆盖整棵树需要的摄像头数目，无论`root`是否放置摄像头。
                // 状态c：覆盖两棵子树需要的摄像头数目，无论节点`root`本身是否被监控到。
                let a = lc + rc + 1;
                let b = min(a, min(la + rb, ra + lb));
                let c = min(a, lb + rb);

                (a, b, c)
            }
        };

    DFS(root).1
}
```

@tab Java
```java
Function<TreeNode, int[]> dfs1 = (root) -> {
    if (root == null) {
        return new int[]{Integer.MAX_VALUE / 2, 0, 0};
    }

    int[] left = this.dfs1.apply(root.left);
    int[] right = this.dfs1.apply(root.right);

    // 状态a：`root`必须放置摄像头的情况下，覆盖整棵树需要的摄像头数目。
    // 状态b：覆盖整棵树需要的摄像头数目，无论`root`是否放置摄像头。
    // 状态c：覆盖两棵子树需要的摄像头数目，无论节点`root`本身是否被监控到。
    int a = left[2] + right[2] + 1;
    int b = Math.min(a, Math.min(left[0] + right[1], right[0] + left[1]));
    int c = Math.min(a, left[1] + right[1]);

    return new int[]{a, b, c};
};

public int minCameraCover(TreeNode root) {
    return this.dfs1.apply(root)[1];
}
```

@tab Go
```go
func minCameraCover(root *TreeNode) int {
    var dfs func(*TreeNode) (int, int, int)
    dfs = func(root *TreeNode) (int, int, int) {
        if root == nil {
            return math.MaxInt / 2, 0, 0
        }

        la, lb, lc := dfs(root.Left)
        ra, rb, rc := dfs(root.Right)

        // 状态a：`root`必须放置摄像头的情况下，覆盖整棵树需要的摄像头数目。
        // 状态b：覆盖整棵树需要的摄像头数目，无论`root`是否放置摄像头。
        // 状态c：覆盖两棵子树需要的摄像头数目，无论节点`root`本身是否被监控到。
        a := lc + rc + 1
        b := min(a, min(la+rb, ra+lb))
        c := min(a, lb+rb)

        return a, b, c
    }

    _, b, _ := dfs(root)

    return b
}
```
:::

### Approach 2: Greedy
::: code-tabs
@tab Rust
```rust
pub fn min_camera_cover(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
    const DFS: fn(Option<Rc<RefCell<TreeNode>>>, &mut i32) -> i32 = 
        |root, res| match root {
            None => 2,
            Some(curr) => {
                let left = DFS(curr.borrow_mut().left.take(), res);
                let right = DFS(curr.borrow_mut().right.take(), res);

                if left == 2 && right == 2 {
                    return 0;
                }

                if left == 0 || right == 0 {
                    *res += 1;
                    return 1;
                }

                if left == 1 || right == 1 {
                    return 2;
                }

                -1
            }
        };

    let mut res = 0;
    // 0：this node is not monitored
    // 1：a camera is installed on this node
    // 2：this node is monitored
    if DFS(root, &mut res) == 0 {
        res += 1;
    }

    res
}
```

@tab Java
```java
BiFunction<TreeNode, int[], Integer> dfs2 = (root, res) -> {
    if (root == null) {
        return 2;
    }

    int left = this.dfs2.apply(root.left, res);
    int right = this.dfs2.apply(root.right, res);

    if (left == 2 && right == 2) {
        return 0;
    }

    if (left == 0 || right == 0) {
        res[0]++;
        return 1;
    }

    if (left == 1 || right == 1) {
        return 2;
    }

    return -1;
};

public int minCameraCover(TreeNode root) {
    int[] res = new int[]{0};
    // 0：this node is not monitored
    // 1：a camera is installed on this node
    // 2：this node is monitored
    if (this.dfs2.apply(root, res) == 0) {
        res[0]++;
    }

    return res[0];
}
```

@tab Go
```go
func minCameraCover(root *TreeNode) int {
    var dfs func(*TreeNode, *int) int
    dfs = func(root *TreeNode, res *int) int {
        if root == nil {
            return 2
        }

        left := dfs(root.Left, res)
        right := dfs(root.Right, res)

        if left == 2 && right == 2 {
            return 0
        }

        if left == 0 || right == 0 {
            *res++
            return 1
        }

        if left == 1 || right == 1 {
            return 2
        }

        return -1
    }

    res := 0
    // 0：this node is not monitored
    // 1：a camera is installed on this node
    // 2：this node is monitored
    if dfs(root, &res) == 0 {
    	res++
    }

    return res
}
```
:::
