---
title: 491, Non-decreasing Subsequences
icon: discover
date: 2024-02-19
order: 16
sticky: true
category: backtracking
tag: 
  - medium
  - array
  - hash table
  - bit manipulation
  - backtracking
---

## I Problem
Given an integer array `nums`, return *all the different possible non-decreasing subsequences of the given array with at least two elements*. You may return the answer in **any order**.

**Example 1**
Input: nums = [4, 6, 7, 7]
Output: [[4, 6], [4, 6, 7], [4, 6, 7, 7], [4, 7], [4, 7, 7], [6, 7], [6, 7, 7], [7, 7]]

**Example 2**
Input: nums = [4, 4, 3, 2, 1]
Output: [[4, 4]]

**Constraints**
- `1 <= nums.length <= 15`
- `-100 <= nums[i] <= 100`

**Related Topics**
- Bit Manipulation
- Array
- Hash Table
- Backtracking


## II Solution
### Approach 1: Backtracking
::: code-tabs
@tab Rust
```rust
pub fn find_subsequences(nums: Vec<i32>) -> Vec<Vec<i32>> {
    const DFS: fn(usize, &Vec<i32>, &mut Vec<i32>, &mut Vec<Vec<i32>>) =
        |idx, nums, sub_seq, res| {
            if sub_seq.len() >= 2 {
                res.push(sub_seq.clone());
            }
            if idx == nums.len() {
                return;
            }

            let mut used = HashSet::new();
            for i in idx..nums.len() {
                if idx > 0 && nums[idx - 1] > nums[i] {
                    continue;
                }
                if used.contains(&nums[i]) {
                    continue;
                }

                used.insert(nums[i]);
                sub_seq.push(nums[i]);

                DFS(i + 1, nums, sub_seq, res);

                sub_seq.pop();
            }
        };
    let mut res = vec![];

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
        (idx, nums, subSeq, res) -> {
            if (subSeq.size() >= 2) {
                res.add(new ArrayList<>(subSeq));
            }
            if (idx == nums.length) {
                return;
            }

            Set<Integer> used = new HashSet<>();
            for (int i = idx; i < nums.length; i++) {
                if (idx > 0 && nums[idx - 1] > nums[i]) {
                    continue;
                }
                if (used.contains(nums[i])) {
                    continue;
                }

                used.add(nums[i]);
                subSeq.addLast(nums[i]);

                this.dfs.accept(i + 1, nums, subSeq, res);

                subSeq.removeLast();
            }
        };

public List<List<Integer>> findSubsequences(int[] nums) {
    List<List<Integer>> res = new ArrayList<>();
    this.dfs.accept(0, nums, new ArrayList<>(), res);
    return res;
}
```
:::
