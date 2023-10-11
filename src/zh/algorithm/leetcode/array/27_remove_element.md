---
title: 27, 移除元素
icon: discover
date: 2023-10-11
order: 6
sticky: true
category: array
tag: 
  - easy
  - array
  - two pointers
---

## 一、题目描述
给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

**示例 1:**
输入: nums = [3,2,2,3], val = 3
输出: 2, nums = `[2,2,_,_]`
解释: 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。

**示例 2:**
输入: nums = [0,1,2,2,3,0,4,2], val = 2
输出: 5, nums = `[0,1,3,0,4,_,_,_]`
解释: 函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。

**提示:**

- 0 <= nums.length <= 100
- 0 <= nums[i] <= 50
- 0 <= val <= 100

**相关主题**

- 数组
- 双指针

## 二、题解
### 方法 1: 双指针
::: code-tabs
@tab Rust
```rust
pub fn remove_element(nums: &mut Vec<i32>, val: i32) -> i32 {
    let mut idx = 0;

    for i in 0..nums.len() {
        if nums[i] != val {
            nums[idx] = nums[i];
            idx += 1;
        }
    }

    idx as i32
}
```

@tab Java
```java
public int removeElement(int[] nums, int val) {
    int idx = 0;

    for (int i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[idx] = nums[i];
            idx++;
        }
    }

    return idx;
}
```
:::
### 方法 2: 双指针(适用于移除元素较少时)
::: code-tabs
@tab Rust
```rust
pub fn remove_element(nums: &mut Vec<i32>, val: i32) -> i32 {
    let mut idx = 0;
    let mut len = nums.len();

    while idx < len {
        if nums[idx] == val {
            nums[idx] = nums[len - 1];
            len -= 1;
        } else {
            idx += 1;
        }
    }

    len as i32
}
```

@tab Java
```java
public int removeElement(int[] nums, int val) {
    int idx = 0;
    int len = nums.length;

    while (idx < len) {
        if (nums[idx] == val) {
            nums[idx] = nums[len - 1];
            len--;
        } else {
            idx++;
        }
    }

    return len;
}
```
:::