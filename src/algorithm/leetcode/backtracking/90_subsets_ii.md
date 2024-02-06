---
title: 90, Subsets II
icon: discover
date: 2024-02-06
order: 9
sticky: true
category: backtracking
tag: 
  - medium
  - array
  - backtracking
  - bit manipulation
---

## I Problem
Given an integer array `nums` that may contain duplicates, return *all possible subsets (the power set)*.

The solution set **must not** contain duplicate subsets. Return the solution in **any order**.

**Example 1**
Input: nums = [1, 2, 2]
Output: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]

**Example 2**
Input: nums = [0]
Output: [[], [0]]

**Constraints**
- `1 <= nums.length <= 10`
- `-10 <= nums[i] <= 10`

**Related Topics**
- Array
- Backtracking
- Bit Manipulation


## II Solution
### Approach 1: Backtracking
::: code-tabs
@tab Rust
```rust
pub fn subsets_with_dup(mut nums: Vec<i32>) -> Vec<Vec<i32>> {
    nums.sort_unstable();

    const DFS: fn(usize, &[i32], &mut Vec<i32>, &mut Vec<Vec<i32>>) = 
        |i, nums, subset, res| {
            res.push(subset.clone());
            if i == nums.len() {
                return;
            }

            for j in i..nums.len() {
                if j > i && nums[j] == nums[j - 1] {
                    continue;
                }

                subset.push(nums[j]);
                DFS(j + 1, nums, subset, res);
                subset.pop();
            }
        };
    let mut res = vec![];

    DFS(0, &nums, &mut vec![], &mut res);

    res
}
```

@tab Java
```java
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
                if (j > i && nums[j] == nums[j - 1]) {
                    continue;
                }

                subset.addLast(nums[j]);
                this.dfs.accept(j + 1, nums, subset, res);
                subset.removeLast();
            }
        };

public List<List<Integer>> subsetsWithDup(int[] nums) {
    Arrays.sort(nums);
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
pub fn subsets_with_dup(mut nums: Vec<i32>) -> Vec<Vec<i32>> {
    nums.sort_unstable();
    let mut res = vec![vec![]];
    let (mut pre_len, mut len) = (0, 0);

    for i in 0..nums.len() {
        (pre_len, len) = (len, res.len());

        if i > 0 && nums[i] != nums[i - 1] {
            pre_len = 0;
        }

        for j in pre_len..len {
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
public List<List<Integer>> subsetsWithDup(int[] nums) {
    Arrays.sort(nums);
    List<List<Integer>> res = new ArrayList<>() {{
        this.add(new ArrayList<>());
    }};
    int preSize = 0;
    int size = 0;

    for (int i = 0; i < nums.length; i++) {
        preSize = size;
        size = res.size();

        if (i > 0 && nums[i] != nums[i - 1]) {
            preSize = 0;
        }

        for (int j = preSize; j < size; j++) {
            ArrayList<Integer> subset = new ArrayList<>(res.get(j));
            subset.add(nums[i]);
            res.add(subset);
        }
    }

    return res;
}
```
:::