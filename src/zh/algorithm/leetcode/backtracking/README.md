---
title: 回溯
icon: discover
date: 2024-01-25
dir:
  order: 8
category: leetcode
tag: backtracking
sticky: false
---

## 回溯
回溯算法实际上是一个类似枚举的搜索尝试过程，主要是在搜索尝试过程中寻找问题的解，当发现已不满足求解条件时，就**回溯**返回，尝试别的路径。

回溯是递归的副产品，只要有递归就会有回溯。

回溯法并不是什么⾼效的算法，如果想让回溯法⾼效⼀些，可以加⼀些剪枝的操作，但也改不了回溯法就是穷举的本质。

回溯法解决的问题可以概括如下：
- 组合问题：N个数⾥⾯按⼀定规则找出k个数的集合
- 切割问题：⼀个字符串按⼀定规则有⼏种切割⽅式
- ⼦集问题：⼀个N个数的集合⾥有多少符合条件的⼦集
- 排列问题：N个数按⼀定规则全排列，有⼏种排列⽅式
- 棋盘问题：N皇后，解数独等等

回溯法解决的问题都可以抽象为树形结构。

回溯算法模板框架如下：
```text
void backtracking(参数) {
    if (终⽌条件) {
        存放结果;
        return;
    }

    for (选择：本层集合中元素（树中孩⼦节点的数量就是集合的⼤⼩）) {
        处理节点;
        backtracking(路径，选择列表); // 递归
        回溯，撤销处理结果;
    }
}
```

## 习题
### 组合
[77: 组合](77_combinations.md)
[17: 电话号码的字母组合](17_letter_combinations_of_a_phone_number.md)
[39: 组合总和](39_combination_sum.md)
[40: 组合总和II](40_combination_sum_ii.md)
[216: 组合总和III](216_combination_sum_iii.md)

### 分割
[131: 分割回文串](131_palindrome_partitioning.md)
[93: 复原IP地址](93_restore_ip_addresses.md)

### 子集
[78: 子集](78_subsets.md)
[90: 子集II](90_subsets_ii.md)

### 排列
[46: 全排列](46_permutations.md)
[47: 全排列II](47_permutations_ii.md)

### 棋盘问题
[51: N皇后](51_n_queens.md)
[52: N皇后II](52_n_queens_ii.md)
[36: 有效的数独](36_valid_sudoku.md)
[37: 解数独](37_sudoku_solver.md)

### 其他
[491: 递增子序列](491_non_decreasing_subsequences.md)
[332: 重新安排行程](332_reconstruct_itinerary.md)


## 总结
