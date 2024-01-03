---
title: 106, Construct Binary Tree from Post-order and In-order Traversal
icon: discover
date: 2024-01-03
order: 24
sticky: true
category: binary tree
tag: 
  - medium
  - array
  - hash table
  - divide and conquer
  - binary tree
---

## I Problem
Given two integer arrays `inorder` and `postorder` where `inorder` is the inorder traversal of a binary tree and `postorder` is the postorder traversal of the same tree, construct and return *the binary tree*.

**Example 1**
![](../../../../assets/leetcode/5_nodes_102.png)
Input: inorder = [9, 3, 15, 20, 7], postorder = [9, 15, 7, 20, 3]
Output: [3, 9, 20, null, null, 15, 7]

**Example 2**
Input: inorder = [-1], postorder = [-1]
Output: [-1]

**Constraints**
- `1 <= inorder.length <= 3000`
- `postorder.length == inorder.length`
- `-3000 <= inorder[i], postorder[i] <= 3000`
- `inorder` and `postorder` consist of **unique** values.
- Each value of `postorder` also appears in `inorder`.
- `inorder` is **guaranteed** to be the inorder traversal of the tree.
- `postorder` is **guaranteed** to be the postorder traversal of the tree.

**Related Topics**
- Array
- Hash Table
- Divide and Conquer
- Tree
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
pub fn build_tree(inorder: Vec<i32>, postorder: Vec<i32>) -> Option<Rc<RefCell<TreeNode>>> {
    //Self::recur_1(inorder, postorder)
    Self::recur_2(inorder, postorder)
}

fn recur_1(inorder: Vec<i32>, postorder: Vec<i32>) -> Option<Rc<RefCell<TreeNode>>> {
    const RECUR: fn(&[i32], &[i32]) -> Option<Rc<RefCell<TreeNode>>> = |postorder, inorder| {
        let len = postorder.len();
        if len == 0 {
            return None;
        }

        let root_val = postorder[len - 1];
        let root = Rc::new(RefCell::new(TreeNode::new(root_val)));
        if len == 1 {
            return Some(root);
        }

        let mut childs_inorder = inorder.splitn(2, |&v| v == root_val);
        let left_inorder = childs_inorder.next().unwrap_or_default();
        let right_inorder = childs_inorder.next().unwrap_or_default();
        let (left_postorder, right_postorder) = postorder[..len - 1].split_at(left_inorder.len());

        root.borrow_mut().left = RECUR(left_postorder, left_inorder);
        root.borrow_mut().right = RECUR(right_postorder, right_inorder);

        Some(root)
    };

    RECUR(&postorder, &inorder)
}

fn recur_2(inorder: Vec<i32>, postorder: Vec<i32>) -> Option<Rc<RefCell<TreeNode>>> {
    let len = postorder.len();
    let map = inorder.iter().enumerate()
            .fold(HashMap::with_capacity(len), |mut map, (idx, &v)| {
                map.insert(v, idx);
                map
            });
    const RECUR: fn(
        &[i32], usize, usize, &[i32], usize, usize, &HashMap<i32, usize>,
    ) -> Option<Rc<RefCell<TreeNode>>> = 
    |postorder, postorder_l_idx, postorder_r_idx, inorder, inorder_l_idx, inorder_r_idx, map| {
        let len = postorder_r_idx - postorder_l_idx;
        if len == 0 {
            return None;
        }

        let root_val = postorder[postorder_r_idx - 1];
        let root = Rc::new(RefCell::new(TreeNode::new(root_val)));
        if len == 1 {
            return Some(root);
        }

        let idx_at_inorder = map[&root_val];
        let left_inorder_len = idx_at_inorder - inorder_l_idx;

        root.borrow_mut().left = RECUR(
            postorder, postorder_l_idx, postorder_l_idx + left_inorder_len,
            inorder, inorder_l_idx, idx_at_inorder,
            map,
        );
        root.borrow_mut().right = RECUR(
            postorder, postorder_l_idx + left_inorder_len, postorder_r_idx - 1,
            inorder, idx_at_inorder + 1, inorder_r_idx,
            map,
        );

        Some(root)
    };

    RECUR(&postorder, 0, len, &inorder, 0, len, &map)
}
```

@tab Java
```java
public TreeNode buildTree(int[] inorder, int[] postorder) {
    //return this.recur1(inorder, postorder);
    return this.recur2(inorder, postorder);
}

BiFunction<List<Integer>, List<Integer>, TreeNode> helper1 = (postorder, inorder) -> {
    int size = postorder.size();
    if (size == 0) {
        return null;
    }

    Integer rootVal = postorder.getLast();
    TreeNode root = new TreeNode(rootVal);
    if (size == 1) {
        return root;
    }

    int idxAtInorder = inorder.indexOf(rootVal);
    List<Integer> leftInorder = inorder.subList(0, idxAtInorder);
    List<Integer> rightInorder = inorder.subList(idxAtInorder + 1, size);
    List<Integer> leftPostorder = postorder.subList(0, leftInorder.size());
    List<Integer> rightPostorder = postorder.subList(leftInorder.size(), size - 1);

    root.left = this.helper1.apply(leftPostorder, leftInorder);
    root.right = this.helper1.apply(rightPostorder, rightInorder);

    return root;
};

TreeNode recur1(int[] _inorder, int[] _postorder) {
    List<Integer> inorder = Arrays.stream(_inorder).boxed().collect(Collectors.toList());
    List<Integer> postorder = Arrays.stream(_postorder).boxed().collect(Collectors.toList());
    return this.helper1.apply(postorder, inorder);
}


@FunctionalInterface
interface SeptFunction<A, B, C, D, E, F, G, H> {
    H apply(A a, B b, C c, D d, E e, F f, G g);
}

SeptFunction<int[], Integer, Integer, int[], Integer, Integer, Map<Integer, Integer>, TreeNode> helper2 =
        (postorder, postorderLIdx, postorderRIdx, inorder, inorderLIdx, inorderRIdx, map) -> {
            int size = postorderRIdx - postorderLIdx;
            if (size == 0) {
                return null;
            }

            int rootVal = postorder[postorderRIdx - 1];
            TreeNode root = new TreeNode(rootVal);
            if (size == 1) {
                return root;
            }

            int idxAtInorder = map.get(rootVal);
            int leftInorderSize = idxAtInorder - inorderLIdx;
            root.left = this.helper2.apply(
                    postorder, postorderLIdx, postorderLIdx + leftInorderSize,
                    inorder, inorderLIdx, idxAtInorder,
                    map
            );
            root.right = this.helper2.apply(
                    postorder, postorderLIdx + leftInorderSize, postorderRIdx - 1,
                    inorder, idxAtInorder + 1, inorderRIdx,
                    map
            );
            
            return root;
        };

TreeNode recur2(int[] inorder, int[] postorder) {
    int size = inorder.length;
    Map<Integer, Integer> map = new HashMap<>(size);
    
    for (int i = 0; i < size; i++) {
        map.put(inorder[i], i);
    }

    return this.helper2.apply(postorder, 0, size, inorder, 0, size, map);
}
```
:::

### Approach 2: Iteration
::: code-tabs
@tab Rust
```rust
pub fn build_tree(inorder: Vec<i32>, postorder: Vec<i32>) -> Option<Rc<RefCell<TreeNode>>> {
    Self::iter_1(inorder, postorder)
}

fn iter_1(inorder: Vec<i32>, postorder: Vec<i32>) -> Option<Rc<RefCell<TreeNode>>> {
    let len = postorder.len();
    if len == 0 {
        return None;
    }

    let root = Rc::new(RefCell::new(TreeNode::new(postorder[len - 1])));
    let mut stack = vec![root.clone()];
    let mut inorder_idx = len - 1;

    for postorder_val in postorder.into_iter().rev().skip(1) {
        if let Some(last) = stack.last_mut() {
            if last.borrow().val != inorder[inorder_idx] {
                let right = Rc::new(RefCell::new(TreeNode::new(postorder_val)));
                last.borrow_mut().right = Some(right.clone());
                stack.push(right);
            } else {
                let mut last_curr = None;

                while let Some(curr) = stack.pop() {
                    last_curr = Some(curr);
                    inorder_idx -= 1;
                    if let Some(last) = stack.last() {
                        if last.borrow().val != inorder[inorder_idx] {
                            break;
                        }
                    }
                }

                last_curr.map(|curr| {
                    let left = Rc::new(RefCell::new(TreeNode::new(postorder_val)));
                    curr.borrow_mut().left = Some(left.clone());
                    stack.push(left);
                });
            }
        }
    }

    Some(root)
}
```

@tab Java
```java
public TreeNode buildTree(int[] inorder, int[] postorder) {
    return this.iter1(inorder, postorder);
}

TreeNode iter1(int[] inorder, int[] postorder) {
    int size = postorder.length;
    if (size == 0) {
        return null;
    }

    TreeNode root = new TreeNode(postorder[size - 1]);
    Deque<TreeNode> stack = new ArrayDeque<>() {{
        this.push(root);
    }};
    int inorderIdx = size - 1;

    for (int i = size - 2; i >= 0; i--) {
        int postorderVal = postorder[i];
        TreeNode top = stack.peek();
        if (top.val != inorder[inorderIdx]) {
            top.right = new TreeNode(postorderVal);
            stack.push(top.right);
        } else {
            do {
                top = stack.pop();
                inorderIdx--;
            } while (!stack.isEmpty() && stack.peek().val == inorder[inorderIdx]);

            top.left = new TreeNode(postorderVal);
            stack.push(top.left);
        }
    }

    return root;
}
```
:::