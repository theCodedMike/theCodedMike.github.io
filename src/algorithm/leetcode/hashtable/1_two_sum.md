---
title: 1, Two Sum
icon: discover
date: 2023-11-10
order: 8
sticky: true
category: hashtable
tag: 
  - easy
  - array
  - hash table
---

## I Problem
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.

**Example 1**
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: Because`nums[0] + nums[1] == 9`, we return [0, 1].

**Example 2**
Input: nums = [3, 2, 4], target = 6
Output: [1, 2]

**Example 3**
Input: nums = [3, 3], target = 6
Output: [0, 1]

**Constraints**
- `2 <= nums.length <= 10⁴`
- `-10⁹ <= nums[i] <= 10⁹`
- `-10⁹ <= target <= 10⁹`
- **Only one valid answer exists**

**Follow up**
Can you come up with an algorithm that is less than `O(n²)` time complexity?

**Related Topics**
- Array
- Hash Table


## II Solution
### Approach 1: Brute Force
::: code-tabs
@tab Rust
```rust
pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
    let len = nums.len();
    let mut res = Vec::with_capacity(2);

    'outer: for i in 0..len {
        for j in i + 1..len {
            if nums[i] + nums[j] == target {
                res.push(i as i32);
                res.push(j as i32);
                break 'outer;
            }
        }
    }

    res
}
```

@tab Java
```java
public int[] twoSum(int[] nums, int target) {
    int[] res = new int[2];

    outer: for (int i = 0; i < nums.length; i++) {
        for (int j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                res[0] = i;
                res[1] = j;
                break outer;
            }
        }
    }

    return res;
}
```
:::

### Approach 2: Use Hash
::: code-tabs
@tab Rust
```rust
pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
    let len = nums.len();
    let mut map = HashMap::with_capacity(len);
    let mut res = Vec::with_capacity(2);

    for i in 0..len {
        let diff = target - nums[i];
        match map.get(&diff) {
            None => {
                map.insert(nums[i], i);
            }
            Some(idx) => {
                res.push(*idx as i32);
                res.push(i as i32);
                break;
            }
        }
    }

    res
}
```

@tab Java
```java
public int[] twoSum(int[] nums, int target) {
    int[] res = new int[2];
    Map<Integer, Integer> map = new HashMap<>();

    for (int i = 0; i < nums.length; i++) {
        int diff = target - nums[i];
        Integer idx = map.getOrDefault(diff, Integer.MIN_VALUE);
        if (idx == Integer.MIN_VALUE) {
            map.put(nums[i], i);
        } else {
            res[0] = idx;
            res[1] = i;
            break;
        }
    }

    return res;
}
```
:::