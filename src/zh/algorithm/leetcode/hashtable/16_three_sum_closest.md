---
title: 16, 最接近的三数之和
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

## 一、题目描述
给你一个长度为`n`的整数数组`nums`和一个目标值`target`。请你从`nums`中选出三个整数，使它们的和与`target`最接近。

返回这三个数的和。

假定每组输入恰好只存在一个解。

**示例 1**
输入: nums = [-1, 2, 1, -4], target = 1
输出: 2
解释: 与target最接近的和是2 (-1 + 2 + 1 = 2)。

**示例 2**
输入: nums = [0, 0, 0], target = 1
输出: 0
解释: 与target最接近的和是0 (0 + 0 + 0 = 0)。

**提示**
- `3 <= nums.length <= 1000` 
- `1000 <= nums[i] <= 1000` 
- `10⁴ <= target <= 10⁴` 

**相关主题**
- 数组
- 双指针
- 排序

## 二、题解
### 方法 1: 暴力解法
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

### 方法 2: 排序 + 双指针
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