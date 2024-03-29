---
title: 二叉树
icon: discover
date: 2023-12-05
dir:
  order: 7
category: leetcode
tag: binary tree
sticky: false
---

## 二叉树
### 定义
在计算机科学中，[**二叉树**][binary_tree]是每个节点最多只有两个分支（即不存在分支度大于2的节点）的树结构。通常分支被称作`左子树`或`右子树`。二叉树的分支具有左右次序，不能随意颠倒。
![binary_tree](../../../../../assets/leetcode/binary_tree.png)

### 在图论中的定义
二叉树是一个连通的无环图，并且每一个顶点的度不大于3。有根二叉树还要满足根节点的度不大于2。有了根节点之后，每个顶点定义了唯一的父节点，和最多2个子节点。然而，没有足够的信息来区分左节点和右节点。如果不考虑连通性，允许图中有多个连通分量，这样的结构叫做森林。

### 二叉树的类型
1. **满二叉树**：每个节点要么有0个孩子节点要么有2个孩子节点的二叉树，称为**满二叉树**。
![full binary tree](../../../../../assets/leetcode/full_binary_tree.png)

2. **完美二叉树**：一棵深度为`k`，且有`2^k − 1`个节点的二叉树，称为**完美二叉树**。这种树的特点是每一层上的节点数都是最大节点数。
![perfect binary tree](../../../../../assets/leetcode/perfect_binary_tree.png)

3. **完全二叉树**：在一颗二叉树中，若除最后一层外的其余层都是满的，并且最后一层要么是满的，要么在右边缺少连续若干节点，则此二叉树为**完全二叉树**。
![complete binary tree, not full binary tree](../../../../../assets/leetcode/complete_binary_tree.png)

4. **退化二叉树**：许多节点只有1个孩子节点，其行为表现更像是单链表的二叉树。
![degenerate tree](../../../../../assets/leetcode/degenerate_tree.png)

5. [**二叉搜索树**][BST]：又称二叉查找树、有序二叉树或排序二叉树，是指一棵空树或者具有下列性质的二叉树：
   - 若任意节点的左子树不空，则左子树上所有节点的值均小于它的根节点的值；
   - 若任意节点的右子树不空，则右子树上所有节点的值均大于它的根节点的值；
   - 任意节点的左、右子树也分别为二叉搜索树；
![AVL](../../../../../assets/leetcode/bst.png)

6. [**AVL**][AVL]：AVL树（Adelson-Velsky and Landis Tree）是计算机科学中最早被发明的自平衡二叉搜索树。在AVL树中，任一节点对应的两棵子树的最大高度差为1，因此它也被称为高度平衡树。
![AVL](../../../../../assets/leetcode/avl.png)

7. [**红黑树**][RBT]：红黑树（Red–black tree）是每个节点都带有颜色属性的一种自平衡二叉搜索树，其有以下额外要求：
   - 节点是红色或黑色；
   - 根是黑色；
   - 所有叶子都是黑色（叶子是NIL节点）；
   - 每个红色节点必须有两个黑色的子节点；
   - 从任一节点到其每个叶子的所有简单路径都包含相同数目的黑色节点；
![RBT](../../../../../assets/leetcode/rbt.png)

### 二叉树的性质
- 对于高度为`h`的满二叉树，其节点总数`n`和`h`的关系为`2h + 1 <= n <= 2^(h+1) - 1`。根节点的高度为0。对于一颗完美二叉树，其节点总数为`1 + 2 + 4 + … + 2^ℎ = 2^(ℎ+1) − 1`。

- 对于有`n`个节点的完美二叉树，其叶子节点个数为`l = (n + 1) / 2`。

- 对于任意一颗非空二叉树，其叶子节点个数`l`与度为2的内部节点个数`i2`的关系为`l = i2 + 1`。

- 对于有`n`个节点的二叉树，其最小的树高为`ℎ = log2(n + 1) − 1`，此时二叉树表现为完全二叉树。

- 对于有`l`个叶子节点的二叉树，其高度至少是`ℎ = log2(l)`。

- 对于一颗节点总数为`n`、边总数为`e`的非空二叉树，则节点总数与边的关系为`e = n - 1`。

- 对于一颗节点总数为`n`的二叉树，其缺失的孩子节点总数为`n + 1`。

- 对于有`n`个节点的完全二叉树，其内部节点的个数为`⌊n/2⌋`。

### 二叉树的操作
#### 插入
- 叶子节点
- 内部节点
![The process of inserting a node into a binary tree](../../../../../assets/leetcode/insert_node_in_a_tree.png)

#### 删除
- 无孩子节点或有1个孩子节点的节点
- 有2个孩子节点的节点
![The process of deleting an internal node in a binary tree](../../../../../assets/leetcode/delete_node_in_a_tree.png)

#### 遍历
##### 深度优先遍历（DFS）
![depth first traversal of a binary tree](../../../../../assets/leetcode/dfs.png)
- 前序遍历(根左右), 红色●表示其访问顺序: F, B, A, D, C, E, G, I, H
::: code-tabs
@tab 递归实现
```text
procedure pre_order(node)
    if node = null
        return
    visit(node)
    pre_order(node.left)
    pre_order(node.right)
```

@tab 迭代实现
```text
procedure pre_order(node)
    if node = null
        return
    stack ← empty stack
    stack.push(node)
    while not stack.isEmpty()
        node ← stack.pop()
        visit(node)
        // right child is pushed first so that left is processed first
        if node.right ≠ null
            stack.push(node.right)
        if node.left ≠ null
            stack.push(node.left)
```
:::

- 中序遍历(左根右), 绿色●表示其访问顺序: A, B, C, D, E, F, G, H, I
::: code-tabs
@tab 递归实现
```text
procedure in_order(node)
    if node = null
        return
    in_order(node.left)
    visit(node)
    in_order(node.right)
```

@tab 迭代实现
```text
procedure in_order(node)
    stack ← empty stack
    while not stack.isEmpty() or node ≠ null
        if node ≠ null
            stack.push(node)
            node ← node.left
        else
            node ← stack.pop()
            visit(node)
            node ← node.right
```
:::

- 后序遍历(左右根), 蓝色●表示其访问顺序: A, C, E, D, B, H, I, G, F
::: code-tabs
@tab 递归实现
```text
procedure post_order(node)
    if node = null
        return
    post_order(node.left)
    post_order(node.right)
    visit(node)
```

@tab 迭代实现
```text
procedure post_order(node)
    stack ← empty stack
    lastNodeVisited ← null
    while not stack.isEmpty() or node ≠ null
        if node ≠ null
            stack.push(node)
            node ← node.left
        else
            peekNode ← stack.peek()
            // if right child exists and traversing node
            // from left child, then move right
            if peekNode.right ≠ null and lastNodeVisited ≠ peekNode.right
                node ← peekNode.right
            else
                visit(peekNode)
                lastNodeVisited ← stack.pop()
```
:::

##### 广度优先遍历（BFS）
![breadth first search](../../../../../assets/leetcode/bfs.png)
- 层序遍历: F, B, G, A, D, I, C, E, H
::: code-tabs
@tab 迭代实现
```text
procedure level_order(node)
    queue ← empty queue
    queue.enqueue(node)
    while not queue.isEmpty()
        node ← queue.dequeue()
        visit(node)
        if node.left ≠ null
            queue.enqueue(node.left)
        if node.right ≠ null
            queue.enqueue(node.right)
```
:::

### 复杂度
#### 时间复杂度
|Operation|Average|Worst case|
|-|-|-|
|Search|O(log(n))|O(n)|
|Insert|O(log(n))|O(n)|
|Delete|O(log(n))|O(n)|

#### 空间复杂度
|Operation|Average|Worst case|
|-|-|-|
|Space|O(n)|O(n)|


## 习题
### 二叉树的遍历方式
[144: 二叉树的前序遍历](144_binary_tree_pre_order_traversal.md)
[94: 二叉树的中序遍历](94_binary_tree_in_order_traversal.md)
[145: 二叉树的后序遍历](145_binary_tree_post_order_traversal.md)
[102: 二叉树的层序遍历](102_binary_tree_level_order_traversal.md)

### 二叉树的层序遍历
[107: 二叉树的层序遍历II](107_binary_tree_level_order_traversal_ii.md)
[199: 二叉树的右视图](199_binary_tree_right_side_view.md)
[637: 二叉树的层平均值](637_average_of_levels_in_binary_tree.md)
[429: N叉树的层序遍历](429_n_ary_tree_level_order_traversal.md)
[515: 在每个树行中找最大值](515_find_largest_value_in_each_tree_row.md)
[116: 填充每个节点的下一个右侧节点指针](116_populating_next_right_pointers_in_each_node.md)
[117: 填充每个节点的下一个右侧节点指针II](117_populating_next_right_pointers_in_each_node_ii.md)

### 二叉树的属性
[101: 对称二叉树](101_symmetric_tree.md)
[104: 二叉树的最大深度](104_maximum_depth_of_binary_tree.md)
[111: 二叉树的最小深度](111_minimum_depth_of_binary_tree.md)
[222: 完全二叉树的节点个数](222_count_complete_tree_nodes.md)
[110: 平衡二叉树](110_balanced_binary_tree.md)
[257: 二叉树的所有路径](257_binary_tree_paths.md)
[404: 左叶子之和](404_sum_of_left_leaves.md)
[513: 找树左下角的值](513_find_bottom_left_tree_value.md)
[112: 路径总和](112_path_sum.md)
[113: 路径总和II](113_path_sum_ii.md)

### 二叉树的修改与构造
[226: 翻转二叉树](226_invert_binary_tree.md)
[105: 从中序与先序遍历序列构造二叉树](105_construct_binary_tree_from_preorder_and_inorder_traversal.md)
[106: 从中序与后序遍历序列构造二叉树](./106_construct_binary_tree_from_post_order_and_in_order_traversal.md)
[654: 最大二叉树](654_maximum_binary_tree.md)
[617: 合并二叉树](617_merge_two_binary_trees.md)

### 二叉搜索树的属性
[700: 二叉搜索树中的搜索](700_search_in_a_binary_search_tree.md)
[98: 验证二叉搜索树](98_validate_binary_search_tree.md)
[530: 二叉搜索树的最小绝对差](530_minimum_absolute_difference_in_bst.md)
[501: 二叉搜索树中的众数](501_find_mode_in_binary_search_tree.md)
[538: 把二叉搜索树转换为累加树](538_convert_bst_to_greater_tree.md)

### 二叉树公共祖先问题
[236: 二叉树的最近公共祖先](236_lowest_common_ancestor_of_a_binary_tree.md)
[235: 二叉搜索树的最近公共祖先](235_lowest_common_ancestor_of_a_binary_search_tree.md)

### 二叉搜索树的修改与构造
[701: 二叉搜索树中的插入操作](701_insert_into_a_binary_search_tree.md)
[450: 删除二叉搜索树中的节点](450_delete_node_in_a_bst.md)
[669: 修剪二叉搜索树](669_trim_a_binary_search_tree.md)
[108: 将有序数组转换为二叉搜索树](108_convert_sorted_array_to_binary_search_tree.md)
[109: 将有序列表转换为二叉搜索树](109_convert_sorted_list_to_binary_search_tree.md)

### 其他
[100: 相同的树](100_same_tree.md)
[572: 另一棵树的子树](572_subtree_of_another_tree.md)
[559: N叉树的最大深度](559_maximum_depth_of_n_ary_tree.md)

## 总结


[binary_tree]: https://zh.wikipedia.org/wiki/%E4%BA%8C%E5%8F%89%E6%A0%91
[BST]: https://zh.wikipedia.org/zh-cn/%E4%BA%8C%E5%85%83%E6%90%9C%E5%B0%8B%E6%A8%B9
[AVL]: https://zh.wikipedia.org/wiki/AVL%E6%A0%91
[RBT]: https://zh.wikipedia.org/wiki/%E7%BA%A2%E9%BB%91%E6%A0%91