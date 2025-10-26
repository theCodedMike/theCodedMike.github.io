---
title: 977, Squares of a Sorted Array
icon: discover
date: 2023-10-09
order: 10
sticky: true
category: array
tag: 
  - easy
  - array
  - two pointers
  - sorting
---

## I Problem

Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

**Example 1:**
Input: nums = [-4, -1, 0, 3, 10]
Output: [0, 1, 9, 16, 100]
Explanation: After squaring, the array becomes [16, 1, 0, 9, 100]. After sorting, it becomes [0, 1, 9, 16, 100].

**Example 2:**
Input: nums = [-7, -3, 2, 3, 11]
Output: [4, 9, 9, 49, 121]

**Constraints:**

- 1 <= nums.length <= 10⁴
- -10⁴ <= nums[i] <= 10⁴
- nums is sorted in non-decreasing order.

**Follow up:**
Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

**Related Topics:**

- Array
- Two Pointers
- Sorting

## II Solution

### Approach 1: Brute Force

::: code-tabs
@tab Rust

```rust
/// Time Complexity: O(nlog(n))
///
/// Space Complexity: O(log(n))
pub fn sorted_squares(nums: Vec<i32>) -> Vec<i32> {
    for num in &mut nums {
        *num = *num * *num;
    }
    nums.sort_unstable();

    nums
}
```

@tab Java

```java
public int[] sortedSquares(int[] nums) {
    for (int i = 0; i < nums.length; i++) {
        nums[i] *= nums[i];
    }
    Arrays.sort(nums);

    return nums;
}
```

@tab Go

```go
func sortedSquares(nums []int) []int {
    for i, num := range nums {
        nums[i] = num * num
    }
    slices.Sort(nums)

    return nums
}
```

@tab C\#

```csharp
public int[] SortedSquares(int[] nums)
{
    for (int i = 0; i < nums.Length; i++)
        nums[i] *= nums[i];
    Array.Sort(nums);

    return nums;
}
```

@tab C++

```cpp
#include <algorithm>

vector<int> sortedSquares(vector<int>& nums) {
    for (auto i = 0; i < nums.size(); ++i)
        nums[i] *= nums[i];
    std::sort(nums.begin(), nums.end());

    return nums;
}
```

:::

### Approach 2: Two Pointers

::: code-tabs
@tab Rust

```rust
/// Time Complexity: O(n)
///
/// Space Complexity: O(n)
pub fn sorted_squares(nums: Vec<i32>) -> Vec<i32> {
    //Self::two_pointers_1(nums)
    Self::two_pointers_2(nums)
}

pub fn two_pointers_1(nums: Vec<i32>) -> Vec<i32> {
    let (mut res, mut idx) = (vec![0; nums.len()], nums.len() as i32 - 1);
    let (mut left, mut right) = (0_i32, nums.len() as i32 - 1);

    while left <= right {
        let left_square = nums[left as usize] * nums[left as usize];
        let right_square = nums[right as usize] * nums[right as usize];
        if left_square > right_square {
            res[idx as usize] = left_square;
            left += 1;
            idx -= 1;
        } else if left_square < right_square {
            res[idx as usize] = right_square;
            right -= 1;
            idx -= 1;
        } else {
            res[idx as usize] = right_square;
            if left != right {
                res[idx as usize - 1] = left_square;
            }
            left += 1;
            right -= 1;
            idx -= 2;
        }
    }

    res
}

pub fn two_pointers_2(nums: Vec<i32>) -> Vec<i32> {
    let (mut res, mut idx) = (vec![0; nums.len()], nums.len() as i32 - 1);
    let (mut left, mut right) = (0_i32, nums.len() as i32 - 1);

    while left <= right {
        let left_square = nums[left as usize] * nums[left as usize];
        let right_square = nums[right as usize] * nums[right as usize];
        if left_square > right_square {
            res[idx as usize] = left_square;
            left += 1;
            idx -= 1;
        } else {
            res[idx as usize] = right_square;
            right -= 1;
            idx -= 1;
        }
    }

    res
}
```

@tab Java

```java
public int[] sortedSquares(int[] nums) {
    //return this.twoPointers1(nums);
    return this.twoPointers2(nums);
}
public int[] twoPointers1(int[] nums) {
    int[] res = new int[nums.length];
    int idx = nums.length - 1;
    int left = 0;
    int right = nums.length - 1;

    while (left <= right) {
        int square_of_left = nums[left] * nums[left];
        int square_of_right = nums[right] * nums[right];
        if (square_of_left > square_of_right) {
            res[idx] = square_of_left;
            idx--;
            left++;
        } else if (square_of_left < square_of_right) {
            res[idx] = square_of_right;
            idx--;
            right--;
        } else {
            res[idx] = square_of_right;
            if (left != right)
                res[idx - 1] = square_of_left;
            left++;
            right--;
            idx -= 2;
        }
    }

    return res;
}

public int[] twoPointers2(int[] nums) {
    int[] res = new int[nums.length];
    int idx = nums.length - 1;
    int left = 0;
    int right = nums.length - 1;

    while (left <= right) {
        int square_of_left = nums[left] * nums[left];
        int square_of_right = nums[right] * nums[right];
        if (square_of_left > square_of_right) {
            res[idx] = square_of_left;
            idx--;
            left++;
        } else {
            res[idx] = square_of_right;
            idx--;
            right--;
        }
    }

    return res;
}
```

@tab Go

```go
func sortedSquares(nums []int) []int {
    //return twoPointers1(nums)
    return twoPointers2(nums)
}

func twoPointers1(nums []int) []int {
    res, idx := make([]int, len(nums)), len(nums)-1
    left, right := 0, len(nums)-1

    for left <= right {
        leftSquare := nums[left] * nums[left]
        rightSquare := nums[right] * nums[right]
        if leftSquare > rightSquare {
            res[idx] = leftSquare
            left++
            idx--
        } else if leftSquare < rightSquare {
            res[idx] = rightSquare
            right--
            idx--
        } else {
            res[idx] = rightSquare
            if left != right {
                res[idx-1] = leftSquare
            }
            left++
            right--
            idx -= 2
        }
    }

    return res
}

func twoPointers2(nums []int) []int {
    res, idx := make([]int, len(nums)), len(nums)-1
    left, right := 0, len(nums)-1

    for left <= right {
        leftSquare := nums[left] * nums[left]
        rightSquare := nums[right] * nums[right]
        if leftSquare > rightSquare {
            res[idx] = leftSquare
            left++
            idx--
        } else {
            res[idx] = rightSquare
            right--
            idx--
        }
    }

    return res
}
```

@tab C\#

```csharp
public int[] SortedSquares(int[] nums)
{
    //return TwoPointers1(nums);
    return TwoPointers2(nums);
}

int[] TwoPointers1(int[] nums)
{
    (int[] res, int idx) = (new int[nums.Length], nums.Length - 1);
    (int left, int right) = (0, nums.Length - 1);

    while (left <= right)
    {
        int leftSquare = nums[left] * nums[left];
        int rightSquare = nums[right] * nums[right];
        if (leftSquare > rightSquare)
        {
            res[idx] = leftSquare;
            left++;
            idx--;
        } else if (leftSquare < rightSquare)
        {
            res[idx] = rightSquare;
            right--;
            idx--;
        }
        else
        {
            res[idx] = rightSquare;
            if (left != right)
                res[idx - 1] = leftSquare;
            right--;
            left++;
            idx -= 2;
        }
    }

    return res;
}

int[] TwoPointers2(int[] nums)
{
    (int[] res, int idx) = (new int[nums.Length], nums.Length - 1);
    (int left, int right) = (0, nums.Length - 1);

    while (left <= right)
    {
        int leftSquare = nums[left] * nums[left];
        int rightSquare = nums[right] * nums[right];
        if (leftSquare > rightSquare)
        {
            res[idx] = leftSquare;
            left++;
            idx--;
        } else
        {
            res[idx] = rightSquare;
            right--;
            idx--;
        }
    }

    return res;
}
```

@tab C++

```cpp
vector<int> sortedSquares(vector<int>& nums) {
    //return twoPointers1(nums);
    return twoPointers2(nums);
}

vector<int> twoPointers1(vector<int>& nums) {
    auto[res, idx] = std::make_pair(vector<int>(nums.size()), nums.size() - 1);
    auto[left, right] = std::make_pair(0, static_cast<int>(nums.size()) - 1);

    while (left <= right) {
        auto left_square = nums[left] * nums[left];
        auto right_square = nums[right] * nums[right];
        if (left_square > right_square) {
            res[idx] = left_square;
            left++;
            idx--;
        } else if (left_square < right_square) {
            res[idx] = right_square;
            right--;
            idx--;
        } else {
            res[idx] = right_square;
            if (left != right)
                res[idx - 1] = left_square;
            left++;
            right--;
            idx -= 2;
        }
    }

    return res;
}

vector<int> twoPointers2(vector<int>& nums) {
    auto[res, idx] = std::make_pair(vector<int>(nums.size()), nums.size() - 1);
    auto[left, right] = std::make_pair(0, static_cast<int>(nums.size()) - 1);

    while (left <= right) {
        auto left_square = nums[left] * nums[left];
        auto right_square = nums[right] * nums[right];
        if (left_square > right_square) {
            res[idx] = left_square;
            left++;
            idx--;
        } else {
            res[idx] = right_square;
            right--;
            idx--;
        }
    }

    return res;
}
```

:::
