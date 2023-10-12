---
title: 209, 长度最小的子数组
icon: discover
date: 2023-10-12
order: 11
sticky: true
category: array
tag: 
  - medium
  - array
  - binary search
  - sliding window
  - prefix sum
---

## 一、题目描述
给定一个含有 n 个正整数的数组和一个正整数 target。找出该数组中满足其总和大于等于 target 且长度最小的连续子数组 [nums[l], nums[l+1], ..., nums[r-1], nums[r]]，并返回其长度。如果不存在符合条件的子数组，则返回 0。

**示例 1:**
输入: target = 7, nums = [2,3,1,2,4,3]
输出: 2
解释: 子数组[4,3]是该条件下的长度最小的子数组。

**示例 2:**
输入: target = 4, nums = [1,4,4]
输出: 1

**示例 3:**
输入: target = 11, nums = [1,1,1,1,1,1,1,1]
输出: 0

**提示:**

- 1 <= target <= 10⁹
- 1 <= nums.length <= 10⁵
- 1 <= nums[i] <= 10⁵

**进阶:**
如果你已经实现 O(n) 时间复杂度的解法, 请尝试设计一个 O(n*log(n)) 时间复杂度的解法。

**相关主题**

- 数组
- 二分查找
- 滑动窗口
- 前缀和


## 二、题解
### 方法 1: 暴力解法
::: code-tabs
@tab Rust
```rust
/// Time Limit Exceeded
///
/// Time Complexity: O(n^3), Space complexity: O(1)
pub fn min_sub_array_len(target: i32, nums: Vec<i32>) -> i32 {
    let len = nums.len();

    for width in 1..=len {
        let mut begin = 0;
        let mut end = begin + width;

        while end <= len {
            let mut sum = 0;
            for i in begin..end {
                sum += nums[i];
            }

            if sum >= target {
                return width as i32;
            }
            begin += 1;
            end = begin + width;
        }
    }

    0
}
```

@tab Java
```java
// Time Limit Exceeded
//
// Time Complexity: O(n^3), Space complexity: O(1)
public int minSubArrayLen(int target, int[] nums) {
    for (int width = 1; width <= nums.length; width++) {
        int begin = 0;
        int end = begin + width;

        while (end <= nums.length) {
            int sum = 0;
            for (int i = begin; i < end; i++) {
                sum += nums[i];
            }
            if (sum >= target) {
                return width;
            }

            begin++;
            end = begin + width;
        }
    }

    return 0;
}
```
:::


### 方法 2: 二分查找
::: code-tabs
@tab Rust
```rust
/// Time complexity: O(n*log(n)), Space complexity: O(n)
pub fn min_sub_array_len(target: i32, nums: Vec<i32>) -> i32 {
    let len = nums.len();
    let mut res = usize::MAX;
    let mut sums = vec![0; len + 1];

    for i in 0..len {
        sums[i + 1] = sums[i] + nums[i];
    }

    for i in 0..len {
        let to_find = target + sums[i];
        let idx = match sums.binary_search(&to_find) {
            Ok(idx) => idx,
            Err(idx) => idx,
        };
        if idx != sums.len() {
            res = std::cmp::min(res, idx - i);
        }
    }

    if res != usize::MAX {
        res as i32
    } else {
        0
    }
}
```

@tab Java
```java
// Time complexity: O(n*log(n)), Space complexity: O(n)
public int minSubArrayLen(int target, int[] nums) {
    int res = Integer.MAX_VALUE;
    int[] sums = new int[nums.length + 1];

    for (int i = 0; i < nums.length; i++) {
        sums[i + 1] = sums[i] + nums[i];
    }
    for (int i = 0; i < nums.length; i++) {
        int toFind = target + sums[i];
        int idx = Arrays.binarySearch(sums, toFind);
        idx = idx < 0 ? Math.abs(idx) - 1 : idx;
        if (idx != sums.length) {
            res = Math.min(res, idx - i);
        }
    }

    return res == Integer.MAX_VALUE ? 0 : res;
}
```
:::


### 方法 3: 双指针
::: code-tabs
@tab Rust
```rust
/// Time complexity: O(n), Space complexity: O(1)
pub fn min_sub_array_len(target: i32, nums: Vec<i32>) -> i32 {
    let len = nums.len();
    let mut res = usize::MAX;
    let mut left = 0;
    let mut sum = 0;

    for i in 0..len {
        sum += nums[i];
        while sum >= target {
            res = std::cmp::min(res, i + 1 - left);
            sum -= nums[left];
            left += 1;
        }
    }

    if res == usize::MAX {
        0
    } else {
        res as i32
    }
}
```

@tab Java
```java
// Time complexity: O(n), Space complexity: O(1)
public int minSubArrayLen(int target, int[] nums) {
    int res = Integer.MAX_VALUE;
    int left = 0;
    int sum = 0;

    for (int i = 0; i < nums.length; i++) {
        sum += nums[i];
        while (sum >= target) {
            res = Math.min(res, i + 1 - left);
            sum -= nums[left++];
        }
    }

    return res == Integer.MAX_VALUE ? 0 : res;
}
```
:::