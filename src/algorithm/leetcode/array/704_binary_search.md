---
title: 704, Binary Search
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

## I Problem

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

**Example 1:**
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

**Example 2:**
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

**Constraints:**

- 1 <= nums.length <= 10⁴
- -10⁴ < nums[i], target < 10⁴
- All the integers in nums are unique.
- nums is sorted in ascending order.

**Related Topics:**

- Array
- Binary Search

## II Solution

```rust
macro_rules! mid_idx {
    ($left:expr, $right:expr) => {
        $left + (($right - $left) >> 1)
    };
}
```

### Approach 1: Find the Exact Value

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

@tab Go

```go
func search(nums []int, target int) int {
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

    return -1
}
```

@tab C\#

```csharp
public int Search(int[] nums, int target)
{
    int left = 0, right = nums.Length;

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

    return -1;
}
```

@tab C++

```c++
int search(vector<int>& nums, int target) {
    auto left = 0;
    auto right = nums.size();

    while (left < right) {
        auto mid = left + ((right - left) >> 1);
        if (target < nums[mid])
            right = mid;
        else if (target > nums[mid])
            left = mid + 1;
        else
            return mid;
    }

    return -1;
}
```

:::

### Approach 2: Find Upper Bound

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

@tab Go

```go
func search(nums []int, target int) int {
    left, right := 0, len(nums)

    for left < right {
        mid := left + (right-left)/2
        if nums[mid] <= target {
            left = mid + 1
        } else {
            right = mid
        }
    }

    if left > 0 && nums[left-1] == target {
        return left - 1
    } else {
        return -1
    }
}
```

@tab C\#

```csharp
public int Search(int[] nums, int target)
{
    int left = 0, right = nums.Length;

    while (left < right)
    {
        int mid = left + (right - left) / 2;
        if (target >= nums[mid])
            left = mid + 1;
        else
            right = mid;
    }

    if (left > 0 && nums[left - 1] == target)
        return left - 1;
    return -1;
}
```

@tab C++

```c++
int search(vector<int>& nums, int target) {
    auto left = 0;
    auto right = nums.size();

    while (left < right) {
        auto mid = left + ((right - left) >> 1);
        if (target >= nums[mid])
            left = mid + 1;
        else
            right = mid;
    }

    if (left > 0 && nums[left - 1] == target)
        return left - 1;
    return -1;
}
```

:::

### Approach 3: Find Lower Bound

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

@tab Go

```go
func search(nums []int, target int) int {
    left, right := 0, len(nums)

    for left < right {
        mid := left + (right-left)/2
        if target <= nums[mid] {
            right = mid
        } else {
            left = mid + 1
        }
    }

    if left < len(nums) && nums[left] == target {
        return left
    } else {
        return -1
    }
}
```

@tab C\#

```csharp
public int Search(int[] nums, int target)
{
    int left = 0, right = nums.Length;

    while (left < right)
    {
        int mid = left + (right - left) / 2;
        if (target <= nums[mid])
            right = mid;
        else
            left = mid + 1;
    }

    if (left < nums.Length && nums[left] == target)
        return left;
    return -1;
}
```

@tab C++

```c++
int search(vector<int>& nums, int target) {
    auto left = 0;
    auto right = nums.size();

    while (left < right) {
        auto mid = left + ((right - left) >> 1);
        if (target <= nums[mid])
            right = mid;
        else
            left = mid + 1;
    }

    if (left < nums.size() && nums[left] == target)
        return left;
    return -1;
}
```

:::

### Approach 4: Use built-in Tools

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

@tab Go

```go
import "slices"

func search(nums []int, target int) int {
    if idx, find := slices.BinarySearch(nums, target); find {
        return idx;
    } else {
        return -1
    }
}
```

@tab C\#

```csharp
public int Search(int[] nums, int target)
{
    int idx = Array.BinarySearch(nums, target);
    return idx >= 0 ? idx : -1;
}
```

@tab C++

```c++
#include <algorithm>
#include <vector>

int search(vector<int>& nums, int target) {
    if (std::binary_search(nums.cbegin(), nums.cend(), target))
        return std::lower_bound(nums.cbegin(), nums.cend(), target) - nums.cbegin();

    return -1;
}
```

:::
