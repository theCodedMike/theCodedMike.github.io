---
title: 78, 子集
icon: discover
date: 2024-02-05
order: 8
sticky: true
category: backtracking
tag: 
  - medium
  - string
  - backtracking
---

## 一、题目描述
给你一个整数数组`nums`，数组中的元素**互不相同**。返回该数组所有可能的子集（幂集）。

解集**不能**包含重复的子集。你可以按**任意顺序**返回解集。

**示例 1**
输入: nums = [1, 2, 3]
输出: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

**示例 2**
输入: nums = [0]
输出: [[], [0]]

**提示**
- `1 <= nums.length <= 10`
- `-10 <= nums[i] <= 10`
- `nums`中的所有元素**互不相同**

**相关主题**
- 位运算
- 数组
- 回溯


## 二、题解
### 方法 1: 回溯
::: code-tabs
@tab Rust
```rust
pub fn subsets(nums: Vec<i32>) -> Vec<Vec<i32>> {
    const DFS: fn(usize, &[i32], &mut Vec<i32>, &mut Vec<Vec<i32>>) = 
        |i, nums, subset, res| {
            res.push(subset.clone());

            if i == nums.len() {
                return;
            }

            for j in i..nums.len() {
                subset.push(nums[j]);
                DFS(j + 1, nums, subset, res);
                subset.pop();
            }
        };
    let mut res = Vec::with_capacity(2_usize.pow(nums.len() as u32));

    DFS(0, &nums, &mut vec![], &mut res);

    res
}
```

@tab Java
```java
@FunctionalInterface
interface QuadrConsumer<A, B, C, D> {
    void accept(A a, B b, C c, D d);
}

QuadrConsumer<Integer, int[], List<Integer>, List<List<Integer>>> dfs =
        (i, nums, subset, res) -> {
            res.add(new ArrayList<>(subset));

            if (i == nums.length) {
                return;
            }

            for (int j = i; j < nums.length; j++) {
                subset.addLast(nums[j]);
                this.dfs.accept(j + 1, nums, subset, res);
                subset.removeLast();
            }
        };

public List<List<Integer>> subsets(int[] nums) {
    List<List<Integer>> res = new ArrayList<>();
    this.dfs.accept(0, nums, new ArrayList<>(), res);
    return res;
}
```
:::

### 方法 2: 迭代
::: code-tabs
@tab Rust
```rust
pub fn subsets(nums: Vec<i32>) -> Vec<Vec<i32>> {
    let mut res = vec![vec![]];

    for i in 0..nums.len() {
        for j in 0..res.len() {
            let mut subset = res[j].clone();

            subset.push(nums[i]);

            res.push(subset);
        }
    }

    res
}
```

@tab Java
```java
public List<List<Integer>> subsets(int[] nums) {
    List<List<Integer>> res = new ArrayList<>() {{
        this.add(new ArrayList<>());
    }};

    for (int i = 0; i < nums.length; i++) {
        for (int j = 0, size = res.size(); j < size; j++) {
            ArrayList<Integer> subset = new ArrayList<>(res.get(j));

            subset.add(nums[i]);
            
            res.add(subset);
        }
    }

    return res;
}
```
:::