---
title: 236, 二叉树的最近公共祖先
icon: discover
date: 2024-01-12
order: 32
sticky: true
category: binary tree
tag: 
  - medium
  - binary tree
  - depth first search
---

## 一、题目描述
给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

[百度百科][LCA]中关于公共祖先的定义为："对于有根树`T`的两个节点`p`、`q`，最近公共祖先表示为一个节点`x`，满足`x`是`p`、`q`的祖先且`x`的深度尽可能大（**一个节点也可以是它自己的祖先**）。"

**示例 1**
![](../../../../../assets/leetcode/LCA_of_binary_tree_236.png)
输入: root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p = 5, q = 1
输出: 3
解释: 节点`5`和节点`1`的最近公共祖先是节点`3`。

**示例 2**
![](../../../../../assets/leetcode/LCA_of_binary_tree_236.png)
输入: root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p = 5, q = 4
输出: 5
解释: 节点`5`和节点`4`的最近公共祖先是节点`5`。因为根据定义最近公共祖先节点可以为节点本身。

**示例 3**
输入: root = [1, 2], p = 1, q = 2
输出: 1

**提示**
- 树中节点数目在范围`[2, 10⁵]`内
- `-10⁹ <= Node.val <= 10⁹`
- 所有`Node.val`**互不相同**。
- `p != q`
- `p`和`q`均存在于给定的二叉树中。

**相关主题**
- 树
- 深度优先搜索
- 二叉树

[LCA]: https://baike.baidu.com/item/%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88/8918834?fr=aladdin


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
pub fn lowest_common_ancestor(
    root: Option<Rc<RefCell<TreeNode>>>,
    p: Option<Rc<RefCell<TreeNode>>>,
    q: Option<Rc<RefCell<TreeNode>>>,
) -> Option<Rc<RefCell<TreeNode>>> {

    const POSTORDER: fn(
        Option<Rc<RefCell<TreeNode>>>,
        &Option<Rc<RefCell<TreeNode>>>,
        &Option<Rc<RefCell<TreeNode>>>,
    ) -> Option<Rc<RefCell<TreeNode>>> = |root, p, q| match root {
        None => None,
        root if root == *p || root == *q => root,
        Some(curr) => {
            let l_res = POSTORDER(curr.borrow().left.clone(), p, q);
            let r_res = POSTORDER(curr.borrow().right.clone(), p, q);

            if l_res.is_some() && r_res.is_some() {
                return Some(curr);
            }
            
            return if l_res.is_some() { l_res } else { r_res };
        }
    };

    POSTORDER(root, &p, &q)
}
```

@tab Java
```java
@FunctionalInterface
interface TriFunction<A, B, C, D> {
    D apply(A a, B b, C c);
}

TriFunction<TreeNode, Integer, Integer, TreeNode> postorder = (root, p, q) -> {
    if (root == null || root.val == p || root.val == q) {
        return root;
    }

    TreeNode l_res = this.postorder.apply(root.left, p, q);
    TreeNode r_res = this.postorder.apply(root.right, p, q);
    if (l_res != null && r_res != null) {
        return root;
    }

    return l_res != null ? l_res : r_res;
};

public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
    return this.postorder.apply(root, p.val, q.val);
}
```
:::

### 方法 2: 存储父节点
::: code-tabs
@tab Rust
```rust
pub fn lowest_common_ancestor(
    root: Option<Rc<RefCell<TreeNode>>>,
    p: Option<Rc<RefCell<TreeNode>>>,
    q: Option<Rc<RefCell<TreeNode>>>,
) -> Option<Rc<RefCell<TreeNode>>> {
    match root {
        None => None,
        Some(root) => {
            let mut map = HashMap::from([(root.borrow().val, (None, false))]);
            let mut queue = VecDeque::from([root]);

            while let Some(curr) = queue.pop_front() {
                if let Some(left) = curr.borrow().left.clone() {
                    map.insert(left.borrow().val, (Some(curr.clone()), false));
                    queue.push_back(left);
                }
                if let Some(right) = curr.borrow().right.clone() {
                    map.insert(right.borrow().val, (Some(curr.clone()), false));
                    queue.push_back(right);
                }
            }

            while let Some(ref p_val) = p {
                let key = p_val.borrow().val;
                if let Some((parent, is_visited)) = map.get_mut(&key) {
                    *is_visited = true;
                    p = parent.clone();
                }
            }

            while let Some(ref q_val) = q {
                let key = q_val.borrow().val;
                let (parent, is_visited) = &map[&key];
                if *is_visited {
                    return q;
                }
                q = parent.clone();
            }

            None
        }
    }
}
```

@tab Java
```java
public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
    Deque<TreeNode> queue = new ArrayDeque<>() {{
        this.addLast(root);
    }};
    Map<Integer, Object[]> map = new HashMap<>() {{
        this.put(root.val, new Object[]{null, false});
    }};

    while (!queue.isEmpty()) {
        TreeNode curr = queue.removeFirst();

        if (curr.left != null) {
            map.put(curr.left.val, new Object[]{curr, false});
            queue.addLast(curr.left);
        }
        if (curr.right != null) {
            map.put(curr.right.val, new Object[]{curr, false});
            queue.addLast(curr.right);
        }
    }

    while (p != null) {
        int key = p.val;
        Object[] objs = map.get(key);

        objs[1] = true;
        p = (TreeNode) objs[0];

        map.put(key, objs);
    }

    while (q != null) {
        int key = q.val;
        Object[] objs = map.get(key);

        if ((boolean) objs[1]) {
            return q;
        }
        q = (TreeNode) objs[0];
    }

    return null;
}
```
:::
