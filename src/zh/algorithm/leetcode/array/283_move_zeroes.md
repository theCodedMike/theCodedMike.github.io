---
title: 283, 移动零
icon: discover
date: 2023-10-07
order: 8
sticky: true
category: array
tag: 
  - easy
  - array
  - two pointers
---

## 一、题目描述

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。

**示例 1:**
输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]

**示例 2:**
输入: nums = [0]
输出: [0]

**提示:**

- 1 <= nums.length <= 10⁴
- -2³¹ <= nums[i] <= 2³¹ - 1

**进阶:**
你能尽量减少完成的操作次数吗？

**相关主题：**

- 数组
- 双指针

## 二、题解

### 方法 1: 单指针(插入)

::: code-tabs
@tab Rust

```rust
/// 时间复杂度: O(n^2)
///
/// 空间复杂度: O(n)
pub fn move_zeroes(nums: &mut Vec<i32>) {
    for i in 1..nums.len() {
        if nums[i] != 0 {
            let mut j = i;
            while j > 0 && nums[j - 1] == 0 {
                j -= 1;
            }
            nums.swap(i, j);
        }
    }
}
```

@tab Java

```java
public void moveZeroes(int[] nums) {
    for (int i = 1; i < nums.length; ++i) {
        if (nums[i] != 0) {
            int j = i;
            while (j > 0 && nums[j - 1] == 0)
                --j;
            int temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
        }
    }
}
```

@tab Go

```go
func moveZeroes(nums []int) {
    for i := 1; i < len(nums); i++ {
        if nums[i] != 0 {
            j := i
            for j > 0 && nums[j-1] == 0 {
                j--
            }
            nums[j], nums[i] = nums[i], nums[j]
        }
    }
}
```

@tab C\#

```csharp
public void MoveZeroes(int[] nums) 
{
    for (int i = 1; i < nums.Length; ++i)
    {
        if (nums[i] != 0)
        {
            int j = i;
            while (j > 0 && nums[j - 1] == 0)
                --j;
            (nums[j], nums[i]) = (nums[i], nums[j]);
        }
    }
}
```

@tab C++

```cpp
void moveZeroes(vector<int>& nums) {
    for (auto i = 1; i < nums.size(); ++i) {
        if (nums[i] != 0) {
            auto j = i;
            while (j > 0 && nums[j - 1] == 0)
                --j;
            std::swap(nums[j], nums[i]);
        }
    }
}
```

:::

### 方法 2: 双指针

::: code-tabs
@tab Rust

```rust
/// 时间复杂度: O(n)
///
/// 空间复杂度: O(1)
pub fn move_zeroes(nums: &mut Vec<i32>) {
    let mut slow = 0;

    for fast in 0..nums.len() {
        if nums[fast] != 0 {
            nums.swap(slow, fast);
            slow += 1;
        }
    }
}
```

@tab Java

```java
public void moveZeroes(int[] nums) {
    int slow = 0；

    for (fast = 0; fast < nums.length; ++fast) {
        if (nums[fast] != 0) {
            int tmp = nums[slow];
            nums[slow] = nums[fast];
            nums[fast] = tmp;
            ++slow;
        }
    }
}
```

@tab Go

```go
func moveZeroes(nums []int) {
    slow := 0

    for fast := 0; fast < len(nums); fast++ {
        if nums[fast] != 0 {
            nums[slow], nums[fast] = nums[fast], nums[slow]
            slow++
        }
    }
}
```

@tab C\#

```csharp
public void MoveZeroes(int[] nums) 
{
    int slow = 0;

    for (int fast = 0; fast < nums.Length; ++fast)
    {
        if (nums[fast] != 0)
        {
            (nums[slow], nums[fast]) = (nums[fast], nums[slow]);
            ++slow;
        }
    }
}
```

@tab C++

```cpp
void moveZeroes(vector<int>& nums) {
    auto slow = 0;
    
    for (auto fast = 0; fast < nums.size(); ++fast) {
        if (nums[fast] != 0) {
            std::swap(nums[slow], nums[fast]);
            ++slow;
        }
    }
}
```

:::
