---
title: 15, 三数之和
icon: discover
date: 2023-11-11
order: 9
sticky: true
category: hashtable
tag: 
  - medium
  - array
  - two pointers
  - sorting
---

## 一、题目描述
给你一个整数数组`nums`，判断是否存在三元组`[nums[i], nums[j], nums[k]]`满足`i != j、i != k 且 j != k`，同时还满足`nums[i] + nums[j] + nums[k] == 0`。请你返回所有和为`0`且不重复的三元组。

**注意**：答案中不可以包含重复的三元组。

**示例 1**
输入: nums = [-1, 0, 1, 2, -1, -4]
输出: [[-1, -1, 2], [-1, 0, 1]]
解释:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0。
不同的三元组是[-1, 0, 1] 和 [-1, -1, 2]。
注意，输出的顺序和三元组的顺序并不重要。

**示例 2**
输入: nums = [0, 1, 1]
输出: []
解释: 唯一可能的三元组和不为0。

**示例 3**
输入: nums = [0, 0, 0]
输出: [[0, 0, 0]]
解释: 唯一可能的三元组和为0。

**提示**
- `3 <= nums.length <= 3000`
- `-10⁵ <= nums[i] <= 10⁵`

**相关主题**
- 数组
- 双指针
- 排序

## 二、题解
### 方法 1: 暴力解法
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n^2*log(n))
///
/// Space Complexity: O(n)
pub fn three_sum(nums: Vec<i32>) -> Vec<Vec<i32>> {
    let len = nums.len();
    let mut res = HashSet::new();
    nums.sort_unstable();

    for i in 0..len {
        if i > 0 && nums[i] == nums[i - 1] {
            continue;
        }
        for j in i + 1..len {
            if let Ok(k) = &nums[j + 1..].binary_search(&(0 - (nums[i] + nums[j]))) {
                res.insert(vec![nums[i], nums[j], nums[*k + j + 1]]);
            }
        }
    }

    res.into_iter().collect()
}
```

@tab Java
```java
// Time Complexity: O(n^2*log(n))
//
// Space Complexity: O(n)
public List<List<Integer>> threeSum(int[] nums) {
    Arrays.sort(nums);
    Set<List<Integer>> set = new HashSet<>();

    for (int i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        for (int j = i + 1; j < nums.length; j++) {
            int k = Arrays.binarySearch(nums, j + 1, nums.length, -nums[i] - nums[j]);
            if (k > 0) {
                List<Integer> one = new ArrayList<>();
                one.add(nums[i]);
                one.add(nums[j]);
                one.add(nums[k]);
                set.add(one);
            }
        }
    }

    return set.stream().toList();
}
```
:::

### 方法 2: 排序 + 双指针
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n^2)
///
/// Space Complexity: O(n)
pub fn three_sum(nums: Vec<i32>) -> Vec<Vec<i32>> {
    let len = nums.len();
    let mut res = vec![];
    nums.sort_unstable();

    for i in 0..len {
        if i > 0 && nums[i] == nums[i - 1] {
            continue;
        }
        let mut left = i + 1;
        let mut right = len - 1;
        while left < right {
            let sum = nums[i] + nums[left] + nums[right];
            if sum > 0 {
                right -= 1;
            } else if sum < 0 {
                left += 1;
            } else {
                res.push(vec![nums[i], nums[left], nums[right]]);
                loop {
                    left += 1;
                    if nums[left] != nums[left - 1] || left >= right {
                        break;
                    }
                }
                loop {
                    right -= 1;
                    if nums[right] != nums[right + 1] || right <= left {
                        break;
                    }
                }
            }
        }
    }

    res
}
```

@tab Java
```java
// Time Complexity: O(n^2)
//
// Space Complexity: O(n)
public List<List<Integer>> threeSum(int[] nums) {
    Arrays.sort(nums);
    List<List<Integer>> res = new ArrayList<>();

    for (int i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        int left = i + 1;
        int right = nums.length - 1;
        while (left < right) {
            int sum = nums[i] + nums[left] + nums[right];
            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                List<Integer> one = new ArrayList<>();
                one.add(nums[i]);
                one.add(nums[left]);
                one.add(nums[right]);
                res.add(one);
                do {
                    left++;
                } while (nums[left] == nums[left - 1] && left < right);
                do {
                    right--;
                } while (nums[right] == nums[right + 1] && left < right);
            }
        }
    }

    return res;
}
```
:::
