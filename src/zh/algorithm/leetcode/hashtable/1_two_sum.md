---
title: 1, 两数之和
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

## 一、题目描述
给定一个整数数组`nums`和一个整数目标值`target`，请你在该数组中找出**和为目标值**`target`的那**两个**整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

**示例 1**
输入: nums = [2, 7, 11, 15], target = 9
输出: [0, 1]
解释: 因为`nums[0] + nums[1] == 9`，返回[0, 1]。

**示例 2**
输入: nums = [3, 2, 4], target = 6
输出: [1, 2]

**示例 3**
输入: nums = [3, 3], target = 6
输出: [0, 1]

**提示**
- `2 <= nums.length <= 10⁴`
- `-10⁹ <= nums[i] <= 10⁹`
- `-10⁹ <= target <= 10⁹` 
- **只会存在一个有效答案**

**进阶**
你可以想出一个时间复杂度小于`O(n²)`的算法吗？

**相关主题**
- 数组
- 哈希表


## 二、题解
### 方法 1: 暴力解法
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

### 方法 2: 使用哈希
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