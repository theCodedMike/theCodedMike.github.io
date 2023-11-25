---
title: 27, Remove Element
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

## I Problem
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

- Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
  The remaining elements of nums are not important as well as the size of nums.
- Return k.

**Example 1:**
Input: nums = [3, 2, 2, 3], val = 3
Output: 2, nums = `[2, 2, _, _]`
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).

**Example 2:**
Input: nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2
Output: 5, nums = `[0, 1, 3, 0, 4, _, _, _]`
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).

**Constraints:**

- 0 <= nums.length <= 100
- 0 <= nums[i] <= 50
- 0 <= val <= 100

**Related Topics**

- Array
- Two Pointers

## II Solution
### Approach 1: Two Pointers
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
### Approach 2: Two Pointers - when elements to remove are rare
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