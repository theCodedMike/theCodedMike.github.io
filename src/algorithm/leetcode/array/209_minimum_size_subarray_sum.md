---
title: 209, Minimum Size Subarray Sum
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

## I Problem
Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

**Example 1:**
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

**Example 2:**
Input: target = 4, nums = [1,4,4]
Output: 1

**Example 3:**
Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0

**Constraints:**

- 1 <= target <= 10⁹
- 1 <= nums.length <= 10⁵
- 1 <= nums[i] <= 10⁴

**Follow up:**
If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n*log(n)).

**Related Topics**

- array
- binary search
- sliding window
- prefix sum

## II Solution
### Approach 1: Brute Force
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

### Approach 2: Using Binary Search
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

### Approach 3: Sliding Window
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