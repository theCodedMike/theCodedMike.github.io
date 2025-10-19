---
title: 34, 在排序数组中查找元素的第一个和最后一个位置
icon: discover
date: 2023-09-28
order: 3
sticky: true
category: array
tag: 
  - medium
  - array
  - binary search
---

## 一、题目描述

给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

**示例 1:**
输入: nums = [5,7,7,8,8,10], target = 8
输出: [3,4]

**示例 2:**
输入: nums = [5,7,7,8,8,10], target = 6
输出: [-1,-1]

**示例 3:**
输入: nums = [], target = 0
输出: [-1,-1]

**提示:**

- 0 <= nums.length <= 10⁵
- -10⁹ <= nums[i] <= 10⁹
- nums is a non-decreasing array
- -10⁹ <= target <= 10⁹

**相关主题：**

- 数组
- 二分查找

## 二、题解

### 方法 1: 二分查找

::: code-tabs
@tab Rust

```rust
pub fn search_range(nums: Vec<i32>, target: i32) -> Vec<i32> {
    let mut res = vec![-1, -1];
    let (mut left, mut right) = (0, nums.len());

    while left < right {
        let mid = left + (right - left) / 2;
        if target < nums[mid] {
            right = mid;
        } else if nums[mid] < target {
            left = mid + 1;
        } else {
            let (mut prev, mut next) = (mid, mid);
            let (mut move_prev, mut move_next) = (false, false);

            loop {
                move_prev = false;
                if prev != 0 && nums[prev - 1] == target {
                    move_prev = true;
                    prev -= 1;
                }
                move_next = false;
                if next != nums.len() - 1 && nums[next + 1] == target {
                    move_next = true;
                    next += 1;
                }
                if !move_prev && !move_next {
                    break;
                }
            }

            res[0] = prev as i32;
            res[1] = next as i32;
            break;
        }
    }

    res
}
```

@tab Java

```java
public int[] searchRange(int[] nums, int target) {
    int[] res = new int[] {-1, -1};
    int left = 0;
    int right = nums.length;

    while (left < right) {
        int mid = left + (right - left) / 2;
        if (target < nums[mid]) {
            right = mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            int prev = mid;
            int next = mid;
            boolean move_prev = false;
            boolean move_next = false;
            while (true) {
                move_prev = false;
                if (prev != 0 && nums[prev - 1] == target) {
                    move_prev = true;
                    prev -= 1;
                }
                move_next = false;
                if (next != nums.length - 1 && nums[next + 1] == target) {
                    move_next = true;
                    next += 1;
                }
                if (!move_prev && !move_next) {
                    break;
                }
            }
            res[0] = prev;
            res[1] = next;
            break;
        }
    }

    return res;
}
```

@tab Go

```go
func searchRange(nums []int, target int) []int {
    res := []int{-1, -1}
    left, right := 0, len(nums)

    for left < right {
        mid := left + (right-left)/2
        if target < nums[mid] {
            right = mid
        } else if nums[mid] < target {
            left = mid + 1
        } else {
            prev, next := mid, mid
            movePrev, moveNext := false, false

            for {
                movePrev = false
                moveNext = false

                if prev != 0 && nums[prev-1] == target {
                    movePrev = true
                    prev--
                }
                if next != len(nums)-1 && nums[next+1] == target {
                    moveNext = true
                    next++
                }

                if !movePrev && !moveNext {
                    break
                }
            }

            res[0] = prev
            res[1] = next
            break
        }
    }

    return res
}
```

@tab C\#

```csharp
public int[] SearchRange(int[] nums, int target)
{
    (int left, int right) = (0, nums.Length);
    int[] res = [-1, -1];

    while (left < right)
    {
        int mid = left + (right - left) / 2;
        if (target < nums[mid])
            right = mid;
        else if (nums[mid] < target)
            left = mid + 1;
        else
        {
            (int prev, int next) = (mid, mid);
            (bool movePrev, bool moveNext) = (false, false);

            while (true)
            {
                movePrev = false;
                moveNext = false;
                
                if (prev != 0 && nums[prev - 1] == target)
                {
                    movePrev = true;
                    --prev;
                }
                if (next != nums.Length - 1 && nums[next + 1] == target)
                {
                    moveNext = true;
                    ++next;
                }
                if (!movePrev && !moveNext)
                    break;
            }

            res[0] = prev;
            res[1] = next;
            break;
        }
    }

    return res;
}
```

@tab C++

```cpp
vector<int> searchRange(vector<int>& nums, int target) {
    const int size = static_cast<int>(nums.size());
    auto[left, right] = std::make_pair(0, size);
    vector<int> res = {-1, -1};

    while (left < right) {
        auto mid = left + (right - left) / 2;
        if (target < nums[mid])
            right = mid;
        else if (nums[mid] < target)
            left = mid + 1;
        else {
            auto[prev, next] = std::make_pair(mid, mid);
            auto[move_prev, move_next] = std::make_pair(false, false);

            while (true) {
                move_prev = false;
                move_next = false;
                if (prev != 0 && nums[prev - 1] == target) {
                    move_prev = true;
                    --prev;
                }
                if (next != size - 1 && nums[next + 1] == target) {
                    move_next = true;
                    ++next;
                }
                if (!move_prev && !move_next)
                    break;
            }

            res[0] = prev;
            res[1] = next;
            break;
        }
    }

    return res;
}
```

:::
