---
title: 26, Remove Duplicates from Sorted Array
icon: discover
date: 2023-10-06
order: 7
sticky: true
category: array
tag: 
  - easy
  - array
  - two pointers
---

## I Problem

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

- Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially.
  The remaining elements of nums are not important as well as the size of nums.
- Return k.

**Example 1:**
Input: nums = [1, 1, 2]
Output: 2, nums = [1, 2, _]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

**Example 2:**
Input: nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
Output: 5, nums = [0, 1, 2, 3, 4, _, _, _, _, _]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

**Constraints:**

- 1 <= nums.length <= 3 * 10⁴
- -10⁴ <= nums[i] <= 10⁴
- nums is sorted in non-decreasing order.

**Related Topics:**

- Array
- Two Pointers

## II Solution

### Approach 1: Brute Force

::: code-tabs
@tab Rust

```rust
pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
    let mut len = nums.len();
    let mut target = nums[0];
    let mut i = 1;

    while i < len {
        if nums[i] == target {
            for j in i..len {
                nums[j - 1] = nums[j];
            }
            len -= 1;
        } else {
            target = nums[i];
            i += 1;
        }
    }
    
    len as i32
}
```

@tab Java

```java
public int removeDuplicates(int[] nums) {
    int len = nums.length;
    int target = nums[0];

    for (int i = 1; i < len; i++) {
        if (nums[i] == target) {
            for (int j = i; j < len; j++) {
                nums[j - 1] = nums[j];
            }
            --len;
            --i;
        } else {
            target = nums[i];
        }
    }

    return len;
}
```

@tab Go

```go
func removeDuplicates(nums []int) int {
    size := len(nums)
    target := nums[0]

    for i := 1; i < size; i++ {
        if nums[i] == target {
            for j := i; j < size; j++ {
                nums[j-1] = nums[j]
            }
            size--
            i--
        } else {
            target = nums[i]
        }
    }

    return size
}
```

@tab C\#

```csharp
public int RemoveDuplicates(int[] nums)
{
    int len = nums.Length;
    int target = nums[0];

    for (int i = 1; i < len; ++i)
    {
        if (nums[i] == target)
        {
            for (int j = i; j < len; ++j)
                nums[j - 1] = nums[j];
            --len;
            --i;
        }
        else
            target = nums[i];
    }

    return len;
}
```

@tab C++

```cpp
int removeDuplicates(vector<int>& nums) {
    auto len = nums.size();
    auto target = nums[0];

    for (auto i = 1; i < len; ++i) {
        if (nums[i] == target) {
            for (auto j = i; j < len; ++j)
                nums[j - 1] = nums[j];
            --len;
            --i;
        } else
            target = nums[i];
    }

    return len;
}
```

:::

### Approach 2: Two Pointers

::: code-tabs
@tab Rust

```rust
pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
    let mut slow = 0;

    for fast in 1..nums.len() {
        if nums[fast] != nums[slow] {
            slow += 1;
            nums[slow] = nums[fast];
        }
    }

    slow as i32 + 1
}
```

@tab Java

```java
public int removeDuplicates(int[] nums) {
    int slow = 0;

    for (int fast = 1; fast < nums.length; fast++) {
        if (nums[fast] != nums[slow]) {
            ++slow;
            nums[slow] = nums[fast];
        }
    }

    return slow + 1;
}
```

@tab Go

```go
func removeDuplicates(nums []int) int {
    slow := 0

    for fast := 1; fast < len(nums); fast++ {
        if nums[slow] != nums[fast] {
            slow++
            nums[slow] = nums[fast]
        }
    }

    return slow + 1
}
```

@tab C\#

```csharp
public int RemoveDuplicates(int[] nums)
{
    int slow = 0;

    for (int fast = 1; fast < nums.Length; ++fast)
    {
        if (nums[slow] != nums[fast])
        {
            ++slow;
            nums[slow] = nums[fast];
        }
    }

    return slow + 1;
}
```

@tab C++

```cpp
int removeDuplicates(vector<int>& nums) {
    auto slow = 0;

    for (auto fast = 1; fast < nums.size(); ++fast) {
        if (nums[slow] != nums[fast]) {
            ++slow;
            nums[slow] = nums[fast];
        }
    }

    return slow + 1;
}
```

:::
