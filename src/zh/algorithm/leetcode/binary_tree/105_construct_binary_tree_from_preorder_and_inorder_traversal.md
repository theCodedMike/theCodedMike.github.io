---
title: 105, 从中序与先序遍历序列构造二叉树
icon: discover
date: 2024-01-02
order: 23
sticky: true
category: binary tree
tag: 
  - medium
  - array
  - hash table
  - divide and conquer
  - binary tree
---

## 一、题目描述
给定两个整数数组`preorder`和`inorder`，其中`preorder`是二叉树的**先序遍历**，`inorder`是同一棵树的**中序遍历**，请构造二叉树并返回其根节点。

**示例 1**
![](../../../../../assets/leetcode/5_nodes_102.png)
输入: preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]
输出: [3, 9, 20, null, null, 15, 7]

**示例 2**
输入: preorder = [-1], inorder = [-1]
输出: [-1]

**提示**
- `1 <= preorder.length <= 3000`
- `inorder.length == preorder.length`
- `-3000 <= preorder[i], inorder[i] <= 3000`
- `preorder`和`inorder`均**无重复**元素
- `inorder`均出现在`preorder`
- `preorder`**保证**为二叉树的前序遍历序列
- `inorder`**保证**为二叉树的中序遍历序列

**相关主题**
- 树
- 数组
- 哈希表
- 分治
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
pub fn build_tree(preorder: Vec<i32>, inorder: Vec<i32>) -> Option<Rc<RefCell<TreeNode>>> {
    //Self::recur_1(preorder, inorder)
    Self::recur_2(preorder, inorder)
}

fn recur_1(preorder: Vec<i32>, inorder: Vec<i32>) -> Option<Rc<RefCell<TreeNode>>> {
    const RECUR: fn(&[i32], &[i32]) -> Option<Rc<RefCell<TreeNode>>> = |preorder, inorder| {
        let len = preorder.len();
        if len == 0 {
            return None;
        }

        let root_val = preorder[0];
        let root = Rc::new(RefCell::new(TreeNode::new(root_val)));
        if len == 1 {
            return Some(root);
        }

        // len > 1
        let mut childs_inorder = inorder.splitn(2, |&v| v == root_val);
        let left_inorder = childs_inorder.next().unwrap_or_default();
        let right_inorder = childs_inorder.next().unwrap_or_default();
        let (left_preorder, right_preorder) = preorder[1..].split_at(left_inorder.len());

        root.borrow_mut().left = RECUR(left_preorder, left_inorder);
        root.borrow_mut().right = RECUR(right_preorder, right_inorder);

        Some(root)
    };

    RECUR(&preorder, &inorder)
}

fn recur_2(preorder: Vec<i32>, inorder: Vec<i32>) -> Option<Rc<RefCell<TreeNode>>> {
    let len = preorder.len();
    let map = inorder.iter().enumerate()
            .fold(HashMap::with_capacity(len), |mut map, (idx, &v)| {
                map.insert(v, idx);
                map
            });
    const RECUR: fn(
        &[i32], usize, usize, &[i32], usize, usize, &HashMap<i32, usize>
    ) -> Option<Rc<RefCell<TreeNode>>> = 
    |preorder, preorder_l_idx, preorder_r_idx, inorder, inorder_l_idx, inorder_r_idx, map| {
        let mut len = preorder_r_idx - preorder_l_idx;
        if len == 0 {
            return None;
        }

        let root_val = preorder[preorder_l_idx];
        let root = Rc::new(RefCell::new(TreeNode::new(root_val)));
        if len == 1 {
            return Some(root);
        }

        // len > 1
        let idx_at_inorder = map[&root_val];
        let left_inorder_len = idx_at_inorder - inorder_l_idx;
        let right_inorder_len = inorder_r_idx - idx_at_inorder - 1;

        root.borrow_mut().left = RECUR(
            preorder, preorder_l_idx + 1, preorder_l_idx + 1 + left_inorder_len,
            inorder, inorder_l_idx, idx_at_inorder,
            map,
        );
        root.borrow_mut().right = RECUR(
            preorder, preorder_r_idx - right_inorder_len, preorder_r_idx,
            inorder, idx_at_inorder + 1, inorder_r_idx,
            map,
        );

        Some(root)
    };

    RECUR(&preorder, 0, len, &inorder, 0, len, &map)
}
```

@tab Java
```java
public TreeNode buildTree(int[] preorder, int[] inorder) {
    //return this.recur1(preorder, inorder);
    return this.recur2(preorder, inorder);
}

BiFunction<List<Integer>, List<Integer>, TreeNode> helper1 = (preorder, inorder) -> {
    int size = preorder.size();
    if (size == 0) {
        return null;
    }

    Integer rootVal = preorder.getFirst();
    TreeNode root = new TreeNode(rootVal);
    if (size == 1) {
        return root;
    }

    int idxAtInorder = inorder.indexOf(rootVal);
    List<Integer> leftInorder = inorder.subList(0, idxAtInorder);
    List<Integer> rightInorder = inorder.subList(idxAtInorder + 1, inorder.size());
    preorder = preorder.subList(1, preorder.size());
    List<Integer> leftPreOrder = preorder.subList(0, leftInorder.size());
    List<Integer> rightPreOrder = preorder.subList(leftInorder.size(), preorder.size());

    root.left = this.helper1.apply(leftPreOrder, leftInorder);
    root.right = this.helper1.apply(rightPreOrder, rightInorder);

    return root;
};
TreeNode recur1(int[] _preorder, int[] _inorder) {
    List<Integer> preorder = Arrays.stream(_preorder).boxed().collect(Collectors.toList());
    List<Integer> inorder = Arrays.stream(_inorder).boxed().collect(Collectors.toList());
    return this.helper1.apply(preorder, inorder);
}

@FunctionalInterface
interface SeptFunction<A, B, C, D, E, F, G, H> {
    H apply(A a, B b, C c, D d, E e, F f, G g);
}

SeptFunction<int[], Integer, Integer, int[], Integer, Integer, Map<Integer, Integer>, TreeNode> helper2 = (preorder, preorderLIdx, preorderRIdx, inorder, inorderLIdx, inorderRIdx, map) -> {
    int size = preorderRIdx - preorderLIdx;
    if (size == 0) {
        return null;
    }

    int rootVal = preorder[preorderLIdx];
    TreeNode root = new TreeNode(rootVal);
    if (size == 1) {
        return root;
    }

    int idxAtInorder = map.get(rootVal);
    int leftInorderSize = idxAtInorder - inorderLIdx;
    int rightInorderSize = inorderRIdx - idxAtInorder - 1;

    root.left = this.helper2.apply(preorder, preorderLIdx + 1, preorderLIdx + 1 + leftInorderSize, inorder, inorderLIdx, idxAtInorder, map);
    root.right = this.helper2.apply(preorder, preorderRIdx - rightInorderSize, preorderRIdx, inorder, idxAtInorder + 1, inorderRIdx, map);

    return root;
};

TreeNode recur2(int[] preorder, int[] inorder) {
    int size = preorder.length;
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < size; i++) {
        map.put(inorder[i], i);
    }
    return this.helper2.apply(preorder, 0, size, inorder, 0, size, map);
}
```
:::

### 方法 2: 迭代
::: code-tabs
@tab Rust
```rust
pub fn build_tree(preorder: Vec<i32>, inorder: Vec<i32>) -> Option<Rc<RefCell<TreeNode>>> {
    Self::iter_1(preorder, inorder)
}

fn iter_1(preorder: Vec<i32>, inorder: Vec<i32>) -> Option<Rc<RefCell<TreeNode>>> {
    if preorder.is_empty() {
        return None;
    }
    let root = Rc::new(RefCell::new(TreeNode::new(preorder[0])));
    let mut stack = vec![root.clone()];
    let mut inorder_idx = 0;

    for preorder_val in preorder.into_iter().skip(1) {
        if let Some(last) = stack.last_mut() {
            if last.borrow().val != inorder[inorder_idx] {
                let left = Rc::new(RefCell::new(TreeNode::new(preorder_val)));
                last.borrow_mut().left = Some(left.clone());
                stack.push(left);
            } else {
                let mut last_curr = None;

                while let Some(curr) = stack.pop() {
                    last_curr = Some(curr);
                    inorder_idx += 1;
                    if let Some(last) = stack.last() {
                        if last.borrow().val != inorder[inorder_idx] {
                            break;
                        }
                    }
                }

                last_curr.map(|curr| {
                    let right = Rc::new(RefCell::new(TreeNode::new(preorder_val)));
                    curr.borrow_mut().right = Some(right.clone());
                    stack.push(right);
                });
            }
        }
    }

    Some(root)
}
```

@tab Java
```java
public TreeNode buildTree(int[] preorder, int[] inorder) {
    return this.iter1(preorder, inorder);
}

TreeNode iter1(int[] preorder, int[] inorder) {
    if (preorder.length == 0) {
        return null;
    }
    TreeNode root = new TreeNode(preorder[0]);
    Deque<TreeNode> stack = new ArrayDeque<>() {{
        this.push(root);
    }};
    int inorderIdx = 0;

    for (int i = 1; i < preorder.length; i++) {
        int preorderVal = preorder[i];
        TreeNode top = stack.peek();

        if (top.val != inorder[inorderIdx]) {
            top.left = new TreeNode(preorderVal);
            stack.push(top.left);
        } else {
            do {
                top = stack.pop();
                inorderIdx++;
            } while (!stack.isEmpty() && stack.peek().val == inorder[inorderIdx]);
            
            top.right = new TreeNode(preorderVal);
            stack.push(top.right);
        }
    }

    return root;
}
```
:::