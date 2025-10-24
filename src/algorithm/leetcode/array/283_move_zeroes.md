---
title: 283, Move Zeroes
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

## I Problem

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

**Example 1:**
Input: nums = [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]

**Example 2:**
Input: nums = [0]
Output: [0]

**Constraints:**

- 1 <= nums.length <= 10⁴
- -2³¹ <= nums[i] <= 2³¹ - 1

**Follow up:**
Could you minimize the total number of operations done?

**Related Topics:**

- Array
- Two Pointers

## II Solution

### Approach 1: One Pointer(Insertion)

::: code-tabs
@tab Rust

```rust
/// Time Complexity: O(n^2)
///
/// Space Complexity: O(n)
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

### Approach 2: Two Pointers

::: code-tabs
@tab Rust

```rust
/// Time Complexity: O(n)
///
/// Space Complexity: O(1)
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
    int slow = 0;

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
