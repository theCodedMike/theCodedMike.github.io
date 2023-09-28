---
title: 34, Find First and Last Position of Element in Sorted Array
icon: discover
date: 2023-09-28
order: 2
category: array
tag: 
  - medium
  - array
  - binary search
---

## 1 Problem
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

**Example 1:**
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

**Example 2:**
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

**Example 3:**
Input: nums = [], target = 0
Output: [-1,-1]

**Constraints:**

- 0 <= nums.length <= 10⁵
- -10⁹ <= nums[i] <= 10⁹
- nums is a non-decreasing array
- -10⁹ <= target <= 10⁹

**Related Topics**

- Array
- Binary Search

## 2 Solution
### Approach 1: Binary Search
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