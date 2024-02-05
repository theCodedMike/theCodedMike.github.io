---
title: 78, Subsets
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

## I Problem
Given an integer array `nums` of **unique** elements, return *all possible subsets (the power set)*.

The solution set **must not** contain duplicate subsets. Return the solution in **any order**.

**Example 1**
Input: nums = [1, 2, 3]
Output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

**Example 2**
Input: nums = [0]
Output: [[], [0]]

**Constraints**
- `1 <= nums.length <= 10`
- `-10 <= nums[i] <= 10`
- All the numbers of `nums` are **unique**.

**Related Topics**
- Array
- Backtracking
- Bit Manipulation


## II Solution
### Approach 1: Backtracking
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

### Approach 2: Iteration
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