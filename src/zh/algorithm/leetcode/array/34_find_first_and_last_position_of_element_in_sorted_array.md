---
title: 34, 在排序数组中查找元素的第一个和最后一个位置
icon: discover
date: 2023-09-28
order: 2
category: array
tag: 
  - medium
  - array
  - binary search
---

## 一、题目描述
给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

**示例 1:**
输入: nums = [5,7,7,8,8,10], target = 8
输出: [3,4]

**示例 2:**
输入: nums = [5,7,7,8,8,10], target = 6
输出: [-1,-1]

**示例 3:**
输入: nums = [], target = 0
输出: [-1,-1]

**提示:**

- 0 <= nums.length <= 10⁵
- -10⁹ <= nums[i] <= 10⁹
- nums is a non-decreasing array
- -10⁹ <= target <= 10⁹

**相关主题**

- 数组
- 二分查找

## 二、题解
### 方法 1: 二分查找
::: code-tabs
@tab Rust
```rust
pub fn search_range(nums: Vec<i32>, target: i32) -> Vec<i32> {
    let mut res = vec![-1, -1];
    let len = nums.len();
    let mut left = 0;
    let mut right = len;

    while left < right {
        let mid = left + (right - left) / 2;
        if target < nums[mid] {
            right = mid;
        } else if nums[mid] < target {
            left = mid + 1;
        } else {
            // num[mid]肯定等于target，往左右两边遍历
            let mut prev = mid;
            let mut next = mid;
            let mut move_prev = false;
            let mut move_next = false;
            loop {
                move_prev = false;
                if prev != 0 && nums[prev - 1] == target {
                    move_prev = true;
                    prev -= 1;
                }
                move_next = false;
                if next != len - 1 && nums[next + 1] == target {
                    move_next = true;
                    next += 1;
                }
                if !move_prev && !move_next {
                    break;
                }
            }
            res[0] = prev as i32;
            res[1] = next as i32;
            break;
        }
    }

    res
}
```

@tab Java
```java
public int[] searchRange(int[] nums, int target) {
    int[] res = new int[] {-1, -1};
    int left = 0;
    int right = nums.length;

    while (left < right) {
        int mid = left + (right - left) / 2;
        if (target < nums[mid]) {
            right = mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            int prev = mid;
            int next = mid;
            boolean move_prev = false;
            boolean move_next = false;
            while (true) {
                move_prev = false;
                if (prev != 0 && nums[prev - 1] == target) {
                    move_prev = true;
                    prev -= 1;
                }
                move_next = false;
                if (next != nums.length - 1 && nums[next + 1] == target) {
                    move_next = true;
                    next += 1;
                }
                if (!move_prev && !move_next) {
                    break;
                }
            }
            res[0] = prev;
            res[1] = next;
            break;
        }
    }

    return res;
}
```
:::