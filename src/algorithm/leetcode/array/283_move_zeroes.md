---
title: 283, Move Zeroes
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

## I Problem
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

**Example 1:**
Input: nums = [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]

**Example 2:**
Input: nums = [0]
Output: [0]

**Constraints:**

- 1 <= nums.length <= 10⁴
- -2³¹ <= nums[i] <= 2³¹ - 1

**Follow up:**
Could you minimize the total number of operations done?

**Related Topics**

- Array
- Two Pointers

## II Solution
### Approach 1: Copy Array
::: code-tabs
@tab Rust
```rust
///  Time Complexity: O(n)
///
/// Space Complexity: O(n)
pub fn move_zeroes(nums: &mut Vec<i32>) {
    // Count the zeroes
    let mut zero_count = 0;
    for num in nums.iter() {
        if *num == 0 {
            zero_count += 1;
        }
    }
    // Make all the non-zero elements retain their original order.
    let mut copy_array = Vec::with_capacity(nums.len());
    for num in nums.iter() {
        if *num != 0 {
            copy_array.push(*num);
        }
    }
    // Move all zeroes to the end
    while zero_count != 0 {
        copy_array.push(0);
        zero_count -= 1;
    }
    // Combine the result
    for i in 0..nums.len() {
        nums[i] = copy_array[i]
    }
}
```

@tab Java
```java
public void moveZeroes(int[] nums) {
    // Count the zeroes
    int zeroCount = 0;
    for (int num: nums) {
        if (num == 0) {
            zeroCount++;
        }
    }
    // Make all the non-zero elements retain their original order.
    int[] copyArray = new int[nums.length];
    int idx = 0;
    for (int num: nums) {
        if (num != 0) {
            copyArray[idx++]  = num;
        }
    }
    // Move all zeroes to the end
    while (zeroCount-- != 0) {
        copyArray[idx++] = 0;
    }
    // Combine the result
    for (int i = 0; i < nums.length; i++) {
        nums[i] = copyArray[i];
    }
}
```
:::

### Approach 2: Two Pointers
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