---
title: 376, Wiggle Subsequence
icon: discover
date: 2024-03-01
order: 4
sticky: true
category: greedy
tag: 
  - medium
  - array
  - greedy
  - dynamic programming
---

## I Problem
A **wiggle sequence** is a sequence where the differences between successive numbers strictly alternate between positive and negative. The first difference (if one exists) may be either positive or negative. A sequence with one element and a sequence with two non-equal elements are trivially wiggle sequences.
- For example, `[1, 7, 4, 9, 2, 5]` is a **wiggle sequence** because the differences `(6, -3, 5, -7, 3)` alternate between positive and negative.
- In contrast, `[1, 4, 7, 2, 5]` and `[1, 7, 4, 5, 5]` are not wiggle sequences. The first is not because its first two differences are positive, and the second is not because its last difference is zero.

A **subsequence** is obtained by deleting some elements (possibly zero) from the original sequence, leaving the remaining elements in their original order.

Given an integer array `nums`, return *the length of the longest **wiggle subsequence** of `nums`*.

**Example 1**
Input: nums = [1, 7, 4, 9, 2, 5]
Output: 6
Explanation: The entire sequence is a wiggle sequence with differences `(6, -3, 5, -7, 3)`.

**Example 2**
Input: nums = [1, 17, 5, 10, 13, 15, 10, 5, 16, 8]
Output: 7
Explanation: There are several subsequences that achieve this length. One is `[1, 17, 10, 13, 10, 16, 8]` with differences `(16, -7, 3, -3, 6, -8)`.

**Example 3**
Input: nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
Output: 2

**Constraints**
- `1 <= nums.length <= 1000`
- `0 <= nums[i] <= 1000`

**Follow up**
Could you solve this in `O(n)` time?

**Related Topics**
- Greedy
- Array
- Dynamic Programming

## II Solution
### Approach 1: Greedy
::: code-tabs
@tab Rust
```rust
pub fn wiggle_max_length(nums: Vec<i32>) -> i32 {
    let len = nums.len();
    if len <= 1 {
        return len as i32;
    }

    let mut prev_diff = nums[1] - nums[0];
    let mut res = if prev_diff == 0 { 1 } else { 2 };
    for i in 2..len {
        let diff = nums[i] - nums[i - 1];
        if (diff > 0 && prev_diff <= 0) || (diff < 0 && prev_diff >= 0) {
            prev_diff = diff;
            res += 1;
        }
    }

    res
}
```

@tab Java
```java
public int wiggleMaxLength(int[] nums) {
    int len = nums.length;
    if (len <= 1) {
        return len;
    }

    int prevDiff = nums[1] - nums[0];
    int res = prevDiff == 0 ? 1 : 2;
    for (int i = 2; i < len; i++) {
        int diff = nums[i] - nums[i - 1];
        if ((diff > 0 && prevDiff <= 0) || (diff < 0 && prevDiff >= 0)) {
            prevDiff = diff;
            res++;
        }
    }

    return res;
}
```
:::

### Approach 2: Dynamic Programming
::: code-tabs
@tab Rust
```rust
pub fn wiggle_max_length(nums: Vec<i32>) -> i32 {
    let len = nums.len();
    if len <= 1 {
        return len as i32;
    }

    let (mut up, mut down) = (vec![0; len], vec![0; len]);
    (up[0], down[0]) = (1, 1);
    for i in 1..len {
        if nums[i - 1] < nums[i] {
            up[i] = std::cmp::max(up[i - 1], down[i - 1] + 1);
            down[i] = down[i - 1];
        } else if nums[i - 1] > nums[i] {
            up[i] = up[i - 1];
            down[i] = std::cmp::max(up[i - 1] + 1, down[i - 1]);
        } else {
            up[i] = up[i - 1];
            down[i] = down[i - 1];
        }
    }

    std::cmp::max(up[len - 1], down[len - 1])
}
```

@tab Java
```java
public int wiggleMaxLength(int[] nums) {
    int len = nums.length;
    if (len <= 1) {
        return len;
    }

    int[] up = new int[len], down = new int[len];
    up[0] = down[0] = 1;
    for (int i = 1; i < len; i++) {
        if (nums[i - 1] < nums[i]) {
            up[i] = Math.max(up[i - 1], down[i - 1] + 1);
            down[i] = down[i - 1];
        } else if (nums[i - 1] > nums[i]) {
            up[i] = up[i - 1];
            down[i] = Math.max(up[i - 1] + 1, down[i - 1]);
        } else {
            up[i] = up[i - 1];
            down[i] = down[i - 1];
        }
    }

    return Math.max(up[len - 1], down[len - 1]);
}
```
:::

### Approach 3: Optimized Dynamic Programming
::: code-tabs
@tab Rust
```rust
pub fn wiggle_max_length(nums: Vec<i32>) -> i32 {
    let len = nums.len();
    if len <= 1 {
        return len as i32;
    }

    let (mut up, mut down) = (1, 1);
    for i in 1..len {
        if nums[i - 1] < nums[i] {
            up = std::cmp::max(up, down + 1);
        } else if nums[i - 1] > nums[i] {
            down = std::cmp::max(up + 1, down);
        }
    }

    std::cmp::max(up, down)
}
```

@tab Java
```java
public int wiggleMaxLength(int[] nums) {
    int len = nums.length;
    if (len <= 1) {
        return len;
    }

    int up = 1, down = 1;
    for (int i = 1; i < len; i++) {
        if (nums[i - 1] < nums[i]) {
            up = Math.max(up, down + 1);
        } else if (nums[i - 1] > nums[i]) {
            down = Math.max(up + 1, down);
        }
    }
    
    return Math.max(up, down);
}
```
:::