---
title: 16, Three Sum Closest
icon: discover
date: 2023-11-12
order: 10
sticky: true
category: hashtable
tag: 
  - medium
  - array
  - two pointers
  - sorting
---

## I Problem
Given an integer array `nums` of length `n` and an integer `target`, find three integers in `nums` such that the sum is closest to `target`.

Return *the sum of the three integers.*

You may assume that each input would have exactly one solution.

**Example 1**
Input: nums = [-1, 2, 1, -4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

**Example 2**
Input: nums = [0, 0, 0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

**Constraints**
- `3 <= nums.length <= 500`
- `1000 <= nums[i] <= 1000`
- `10⁴ <= target <= 10⁴`

**Related Topics**
- Array
- Two Pointers
- Sorting

## II Solution
### Approach 1: Brute Force
::: code-tabs
@tab Rust
```rust
pub fn three_sum_closest(nums: Vec<i32>, target: i32) -> i32 {
    let len = nums.len();
    nums.sort_unstable();
    let mut best = i32::MAX / 2;

    for i in 0..len {
        if i > 0 && nums[i] == nums[i - 1] {
            continue;
        }
        for j in i + 1..len - 1 {
            let sub_nums = &nums[j + 1..];
            let third = target - nums[i] - nums[j];
            let (find, k) = match sub_nums.binary_search(&third) {
                Ok(k) => (true, k + j + 1),
                Err(mut k) => {
                    match k {
                        0 => {}
                        _ if k == sub_nums.len() => {
                            k -= 1;
                        }
                        _ => {
                            if third - sub_nums[k - 1] < sub_nums[k] - third {
                                k -= 1;
                            }
                        }
                    }
                    (false, k + j + 1)
                }
            };

            let sum = nums[i] + nums[j] + nums[k];
            if find {
                return sum;
            }
            if (sum - target).abs() < (best - target).abs() {
                best = sum;
            }
        }
    }

    best
}
```

@tab Java
```java
public int threeSumClosest(int[] nums, int target) {
    Arrays.sort(nums);
    int best = Integer.MAX_VALUE / 2;

    for (int i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        for (int j = i + 1; j < nums.length - 1; j++) {
            int third = target - nums[i] - nums[j];
            int k = Arrays.binarySearch(nums, j + 1, nums.length, third);
            if (k >= 0) {
                return target;
            }

            k = -(k + 1);
            if (k == j + 1) {
            } else if (k == nums.length) {
                k--;
            } else {
                if ((third - nums[k - 1]) < (nums[k] - third)) {
                    k--;
                }
            }

            int sum = nums[i] + nums[j] + nums[k];
            if (Math.abs(sum - target) < Math.abs(best - target)) {
                best = sum;
            }
        }
    }

    return best;
}
```
:::

### Approach 2: Sorting + Two Pointers
::: code-tabs
@tab Rust
```rust
pub fn three_sum_closest(nums: Vec<i32>, target: i32) -> i32 {
    let len = nums.len();
    nums.sort_unstable();
    let mut best = i32::MAX / 2;

    for i in 0..len {
        if i > 0 && nums[i] == nums[i - 1] {
            continue;
        }
        let mut left = i + 1;
        let mut right = len - 1;
        while left < right {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum - target).abs() < (best - target).abs() {
                best = sum;
            }
            
            if sum < target {
                left += 1;
            } else if sum > target {
                right -= 1;
            } else {
                return best;
            }
        }
    }

    best
}
```

@tab Java
```java
public int threeSumClosest(int[] nums, int target) {
    Arrays.sort(nums);
    int best = Integer.MAX_VALUE / 2;

    for (int i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        int left = i + 1;
        int right = nums.length - 1;
        while (left < right) {
            int sum = nums[i] + nums[left] + nums[right];
            if (Math.abs(sum - target) < Math.abs(best - target)) {
                best = sum;
            }

            if (sum > target) {
                right--;
            } else if (sum < target) {
                left++;
            } else {
                return best;
            }
        }
    }

    return best;
}
```
:::