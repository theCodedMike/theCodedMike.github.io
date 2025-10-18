---
title: 35, 搜索插入位置
icon: discover
date: 2023-09-27
order: 2
sticky: true
category: array
tag: 
  - easy
  - array
  - binary search
---


## 一、题目描述

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。

**示例 1:**

输入: nums = [1,3,5,6], target = 5

输出: 2

**示例 2:**

输入: nums = [1,3,5,6], target = 2

输出: 1

**示例 3:**

输入: nums = [1,3,5,6], target = 7

输出: 4

**提示:**

- 1 <= nums.length <= 10⁴

- -10⁴ <= nums[i] <= 10⁴

- nums contains distinct values sorted in ascending order.

- -10⁴ <= target <= 10⁴

**相关主题：**

- 数组
- 二分查找

## 二、题解

### 方法 1: 二分查找

::: code-tabs
@tab Rust

```rust
pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {
    //Self::left_close_right_open(nums, target)
    Self::left_close_right_close(nums, target)
}

pub fn left_close_right_open(nums: Vec<i32>, target: i32) -> i32 {
    let mut left = 0;
    let mut right = nums.len();

    while left < right {
        let mid = left + (right - left) / 2;
        if target < nums[mid] {
            right = mid;
        } else if nums[mid] < target {
            left = mid + 1;
        } else {
            return mid as i32;
        }
    }

    left as i32
}

pub fn left_close_right_close(nums: Vec<i32>, target: i32) -> i32 {
    let mut left = 0_i32;
    let mut right = nums.len() as i32 - 1;

    while left <= right {
        let mid = left + (right - left) / 2;
        if target < nums[mid as usize] {
            right = mid - 1;
        } else if nums[mid as usize] < target {
            left = mid + 1;
        } else {
            return mid;
        }
    }

    left
}
```

@tab Java

```java
public int searchInsert(int[] nums, int target) {
    //return this.leftCloseRightOpen(nums, target);
    return this.leftCloseRightClose(nums, target);
}

public int leftCloseRightOpen(int[] nums, int target) {
    int left = 0;
    int right = nums.length;

    while (left < right) {
        int mid = left + (right - left) / 2;
        if (target < nums[mid]) {
            right = mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            return mid;
        }
    }

    return left;
}

public int leftCloseRightClose(int[] nums, int target) {
    int left = 0;
    int right = nums.length - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (target < nums[mid]) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            return mid;
        }
    }

    return left;
}
```

@tab Go

```go
func searchInsert(nums []int, target int) int {
    //return leftCloseRightOpen(nums, target)
    return leftCloseRightClose(nums, target)
}

func leftCloseRightOpen(nums []int, target int) int {
    left, right := 0, len(nums)

    for left < right {
        mid := left + (right-left)/2
        if target < nums[mid] {
            right = mid
        } else if nums[mid] < target {
            left = mid + 1
        } else {
            return mid
        }
    }

    return left
}

func leftCloseRightClose(nums []int, target int) int {
    left, right := 0, len(nums)-1

    for left <= right {
        mid := left + (right-left)/2
        if target < nums[mid] {
            right = mid - 1
        } else if nums[mid] < target {
            left = mid + 1
        } else {
            return mid
        }
    }

    return left
}
```

@tab C\#

```csharp
public int SearchInsert(int[] nums, int target)
{
    //return LeftCloseRightOpen(nums, target);
    return LeftCloseRightClose(nums, target);
}

private int LeftCloseRightOpen(int[] nums, int target)
{
    (int left, int right) = (0, nums.Length);

    while (left < right)
    {
        int mid = left + (right - left) / 2;
        if (target < nums[mid])
            right = mid;
        else if (nums[mid] < target)
            left = mid + 1;
        else
            return mid;
    }

    return left;
}

private int LeftCloseRightClose(int[] nums, int target)
{
    (int left, int right) = (0, nums.Length - 1);

    while (left <= right)
    {
        int mid = left + (right - left) / 2;
        if (target < nums[mid])
            right = mid - 1;
        else if (nums[mid] < target)
            left = mid + 1;
        else
            return mid;
    }

    return left;
}
```

@tab C++

```cpp
int searchInsert(vector<int>& nums, int target) {
    //return leftCloseRightOpen(nums, target);
    return leftCloseRightClose(nums, target);
}

int leftCloseRightOpen(const vector<int>& nums, const int target) {
    auto[left, right] = std::make_pair(0, static_cast<int>(nums.size()));

    while (left < right) {
        int mid = left + (right - left) / 2;
        if (target < nums[mid])
            right = mid;
        else if (nums[mid] < target)
            left = mid + 1;
        else
            return mid;
    }

    return left;
}

int leftCloseRightClose(const vector<int>& nums, const int target) {
    auto[left, right] = std::make_pair(0, static_cast<int>(nums.size()) - 1);

    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (target < nums[mid])
            right = mid - 1;
        else if (nums[mid] < target)
            left = mid + 1;
        else
            return mid;
    }

    return left;
}
```

:::
