---
title: 283, 移动零
icon: discover
date: 2023-10-07
order: 8
sticky: true
category: array
tag: 
  - easy
  - array
  - two pointers
---

## 一、题目描述
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。

**示例 1:**
输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]

**示例 2:**
输入: nums = [0]
输出: [0]

**提示:**

- 1 <= nums.length <= 10⁴
- -2³¹ <= nums[i] <= 2³¹ - 1

**进阶:**
你能尽量减少完成的操作次数吗？

**相关主题**

- 数组
- 双指针

## 二、题解
### 方法 1: 复制数组
::: code-tabs
@tab Rust
```rust
///  Time Complexity: O(n)
///
/// Space Complexity: O(n)
pub fn move_zeroes(nums: &mut Vec<i32>) {
    // 计数0的个数
    let mut zero_count = 0;
    for num in nums.iter() {
        if *num == 0 {
            zero_count += 1;
        }
    }
    // 复制一个数组来保存新的数值
    let mut copy_array = Vec::with_capacity(nums.len());
    for num in nums.iter() {
        if *num != 0 {
            copy_array.push(*num);
        }
    }
    // 将0填充在末尾
    while zero_count != 0 {
        copy_array.push(0);
        zero_count -= 1;
    }
    // 合并结果
    for i in 0..nums.len() {
        nums[i] = copy_array[i]
    }
}
```

@tab Java
```java
public void moveZeroes(int[] nums) {
    // 计数0的个数
    int zeroCount = 0;
    for (int num: nums) {
        if (num == 0) {
            zeroCount++;
        }
    }
    // 复制一个数组来保存新的数值
    int[] copyArray = new int[nums.length];
    int idx = 0;
    for (int num: nums) {
        if (num != 0) {
            copyArray[idx++]  = num;
        }
    }
    // 将0填充在末尾
    while (zeroCount-- != 0) {
        copyArray[idx++] = 0;
    }
    // 合并结果
    for (int i = 0; i < nums.length; i++) {
        nums[i] = copyArray[i];
    }
}
```
:::

### 方法 2: 双指针
::: code-tabs
@tab Rust
```rust
///  Time Complexity: O(n)
///
/// Space Complexity: O(1)
pub fn move_zeroes(nums: &mut Vec<i32>) {
    let mut slow = 0;
    for fast in 0..nums.len() {
        if nums[fast] != 0 {
            nums.swap(slow, fast);
            slow += 1;
        }
    }
}
```

@tab Java
```java
public void moveZeroes(int[] nums) {
    for (int slow = 0, fast = 0; fast < nums.length; fast++) {
        if (nums[fast] != 0) {
            int tmp = nums[slow];
            nums[slow++] = nums[fast];
            nums[fast] = tmp;
        }
    }
}
```
:::