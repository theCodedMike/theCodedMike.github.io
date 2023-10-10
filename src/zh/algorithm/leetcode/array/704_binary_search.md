---
title: 704, 二分查找
icon: discover
date: 2023-10-10
order: 1
sticky: true
category: array
tag: 
  - easy
  - array
  - binary search
---

## 一、题目描述
给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

你所使用的算法，其时间复杂度必须为O(log n)。

**示例 1:**
输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4

**示例 2:**
输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1

**提示:**

- 1 <= nums.length <= 10⁴
- -10⁴ < nums[i], target < 10⁴
- nums中的所有元素都不重复
- nums中的元素按升序排序

**相关主题**

- 数组
- 二分查找


## 二、题解
```rust
macro_rules! mid_idx {
    ($left:expr, $right:expr) => {
        $left + (($right - $left) >> 1)
    };
}
```
### 方法 1: 找到确切的值
::: code-tabs
@tab Rust
```rust
pub fn search(nums: Vec<i32>, target: i32) -> i32 {
    let mut left = 0;
    let mut right = nums.len();

    while left < right {
        let mid = mid_idx!(left, right);
        if target < nums[mid] {
            right = mid;
        } else if nums[mid] < target {
            left = mid + 1;
        } else {
            return mid as i32;
        }
    }

    -1
}
```

@tab Java
```java
public int search(int[] nums, int target) {
    int left = 0;
    int right = nums.length;

    while (left < right) {
        int mid = left + ((right - left) >> 1);
        if (target < nums[mid]) {
            right = mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            return mid;
        }
    }

    return -1;
}
```
:::

### 方法 2: 找到上界
::: code-tabs
@tab Rust
```rust
pub fn search(nums: Vec<i32>, target: i32) -> i32 {
    let mut left = 0;
    let mut right = nums.len();

    while left < right {
        let mid = mid_idx!(left, right);
        if nums[mid] <= target {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    if left > 0 && nums[left - 1] == target {
        left as i32 - 1
    } else {
        -1
    }
}
```

@tab Java
```java
public int search(int[] nums, int target) {
    int left = 0;
    int right = nums.length;

    while (left < right) {
        int mid = left + ((right - left) >> 1);
        if (nums[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    if (left > 0 && nums[left - 1] == target) {
        return left - 1;
    } else {
        return -1;
    }
}
```
:::

### 方法 3: 找到下界
::: code-tabs
@tab Rust
```rust
pub fn search(nums: Vec<i32>, target: i32) -> i32 {
    let mut left = 0;
    let mut right = nums.len();

    while left < right {
        let mid = mid_idx!(left, right);
        if target <= nums[mid] {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    if left < nums.len() && nums[left] == target {
        left as i32
    } else {
        -1
    }
}
```

@tab Java
```java
public int search(int[] nums, int target) {
    int left = 0;
    int right = nums.length;

    while (left < right) {
        int mid = left + ((right - left) >> 1);
        if (target <= nums[mid]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    if (left < nums.length && nums[left] == target) {
        return left;
    } else {
        return -1;
    }
}
```
:::

### 方法 4: 使用库函数
::: code-tabs
@tab Rust
```rust
pub fn search(nums: Vec<i32>, target: i32) -> i32 {
    match nums.binary_search(&target) {
        Ok(idx) => idx as i32,
        Err(_) => -1,
    }
}
```

@tab Java
```java
public int search(int[] nums, int target) {
    int idx = Arrays.binarySearch(nums, target);
    return idx < 0 ? -1 : idx;
}
```
:::