---
title: 977, Squares of a Sorted Array
icon: discover
date: 2023-10-09
order: 10
sticky: true
category: array
tag: 
  - easy
  - array
  - two pointers
  - sorting
---

## I Problem
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

**Example 1:**
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100]. After sorting, it becomes [0,1,9,16,100].

**Example 2:**
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

**Constraints:**

- 1 <= nums.length <= 10⁴
- -10⁴ <= nums[i] <= 10⁴
- nums is sorted in non-decreasing order.

**Follow up:**
Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

**Related Topics**

- Array
- Two Pointers
- Sorting

## II Solution
### Approach 1: Brute Force
::: code-tabs
@tab Rust
```rust
pub fn sorted_squares(nums: Vec<i32>) -> Vec<i32> {
    let mut res = nums.into_iter().map(|v| v * v).collect::<Vec<_>>();

    res.sort_unstable();

    res
}
```

@tab Java
```java
public int[] sortedSquares(int[] nums) {
    for (int i = 0; i < nums.length; i++) {
        nums[i] *= nums[i];
    }

    Arrays.sort(nums);
    return nums;
}
```
:::

### Approach 2: Two Pointers
::: code-tabs
@tab Rust
```rust
pub fn sorted_squares(nums: Vec<i32>) -> Vec<i32> {
    //Self::two_pointers_1(nums)
    Self::two_pointers_2(nums)
}
pub fn two_pointers_1(nums: Vec<i32>) -> Vec<i32> {
    let len = nums.len();
    let mut left = 0;
    let mut right = len - 1;
    let mut res = vec![0; len];
    let mut idx = len - 1;

    loop {
        let square_of_left = nums[left].pow(2);
        let square_of_right = nums[right].pow(2);
        if square_of_left > square_of_right {
            res[idx] = square_of_left;
            idx -= 1;
            left += 1;
        } else if square_of_left < square_of_right {
            res[idx] = square_of_right;
            idx -= 1;
            right -= 1;
        } else {
            res[idx] = square_of_right;
            if left == right {
                break;
            }
            idx -= 1;
            res[idx] = square_of_left;
            if left + 1 == right {
                break;
            }
            idx -= 1;
            right -= 1;
            left += 1;
        }
    }

    res
}

pub fn two_pointers_2(nums: Vec<i32>) -> Vec<i32> {
    let mut left = 0;
    let mut right = nums.len() as i32 - 1;
    let mut idx = nums.len() as i32 - 1;
    let mut res = vec![0; nums.len()];

    while left <= right {
        let square_of_left = nums[left as usize].pow(2);
        let square_of_right = nums[right as usize].pow(2);
        res[idx as usize] = if square_of_left > square_of_right {
            left += 1;
            square_of_left
        } else {
            right -= 1;
            square_of_right
        };
        idx -= 1;
    }

    res
}
```

@tab Java
```java
public int[] sortedSquares(int[] nums) {
    //return this.twoPointers1(nums);
    return this.twoPointers2(nums);
}
public int[] twoPointers1(int[] nums) {
    int[] res = new int[nums.length];
    int left = 0;
    int right = nums.length - 1;
    int idx = nums.length - 1;

    while (true) {
        int square_of_left = nums[left] * nums[left];
        int square_of_right = nums[right] * nums[right];
        if (square_of_left > square_of_right) {
            res[idx] = square_of_left;
            idx--;
            left++;
        } else if (square_of_left < square_of_right) {
            res[idx] = square_of_right;
            idx--;
            right--;
        } else {
            res[idx] = square_of_right;
            if (left == right) {
                break;
            }
            idx--;
            res[idx] = square_of_left;
            if (left + 1 == right) {
                break;
            }
            idx--;
            left++;
            right--;
        }
    }

    return res;
}

public int[] twoPointers2(int[] nums) {
    int[] res = new int[nums.length];

    for (int idx = nums.length - 1, left = 0, right = nums.length - 1; left <= right;) {
        int square_of_left = nums[left] * nums[left];
        int square_of_right = nums[right] * nums[right];
        if (square_of_left > square_of_right) {
            res[idx--] = square_of_left;
            left++;
        } else {
            res[idx--] = square_of_right;
            right--;
        }
    }

    return res;
}
```
:::