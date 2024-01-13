---
title: 236, Lowest Common Ancestor of a Binary Tree
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

## I Problem
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the [definition of LCA on Wikipedia][LCA]: "The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where we allow **a node to be a descendant of itself**)."

**Example 1**
![](../../../../assets/leetcode/LCA_of_binary_tree_236.png)
Input: root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes `5` and `1` is `3`.

**Example 2**
![](../../../../assets/leetcode/LCA_of_binary_tree_236.png)
Input: root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes `5` and `4` is `5`, since a node can be a descendant of itself according to the LCA definition.

**Example 3**
Input: root = [1, 2], p = 1, q = 2
Output: 1

**Constraints**
- The number of nodes in the tree is in the range `[2, 10⁵]`
- `-10⁹ <= Node.val <= 10⁹`
- All `Node.val` are **unique**.
- `p != q`
- `p` and `q` will exist in the tree.

**Related Topics**
- Tree
- Depth-First Search
- Binary Tree


[LCA]: https://en.wikipedia.org/wiki/Lowest_common_ancestor


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

### Approach 2: Store Parent Node
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
