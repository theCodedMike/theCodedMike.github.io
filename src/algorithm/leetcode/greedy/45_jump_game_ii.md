---
title: 45, Jump Game II
icon: discover
date: 2024-03-17
order: 11
sticky: true
category: greedy
tag: 
  - medium
  - array
  - greedy
  - dynamic programming
---

## I Problem
You are given a **0-indexed** array of integers `nums` of length `n`. You are initially positioned at `nums[0]`.

Each element `nums[i]` represents the maximum length of a forward jump from index `i`. In other words, if you are at `nums[i]`, you can jump to any `nums[i + j]` where:
- `0 <= j <= nums[i]` and
- `i + j < n`

Return *the minimum number of jumps to reach `nums[n - 1]`*. The test cases are generated such that you can reach `nums[n - 1]`.

**Example 1**
Input: nums = [2, 3, 1, 1, 4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is `2`. Jump `1` step from index `0` to `1`, then `3` steps to the last index.

**Example 2**
Input: nums = [2, 3, 0, 1, 4]
Output: 2

**Constraints**
- `1 <= nums.length <= 10⁴`
- `0 <= nums[i] <= 1000`
- It's guaranteed that you can reach `nums[n - 1]`.

**Related Topics**
- Greedy
- Array
- Dynamic Programming


## II Solution
### Approach 1: Reverse Traversal
::: code-tabs
@tab Rust
```rust
pub fn jump(nums: Vec<i32>) -> i32 {
    let mut pos = nums.len() - 1;
    let mut steps = 0;

    while pos != 0 {
        for i in 0..pos {
            if i + nums[i] as usize >= pos {
                pos = i;
                steps += 1;
                break;
            }
        }
    }

    steps
}
```

@tab Java
```java
public int jump(int[] nums) {
    int pos = nums.length - 1;
    int steps = 0;

    while (pos != 0) {
        for (int i = 0; i < pos; i++) {
            if (i + nums[i] >= pos) {
                pos = i;
                steps++;
                break;
            }
        }
    }

    return steps;
}
```

@tab Go
```go
func jump(nums []int) int {
    pos := len(nums) - 1
    steps := 0
    
    for pos != 0 {
        for i := 0; i < pos; i++ {
            if i + nums[i] >= pos {
                pos = i
                steps++
                break
            }
        }
    }

    return steps
}
```
:::

### Approach 2: Greedy
::: code-tabs
@tab Rust
```rust
pub fn jump(nums: Vec<i32>) -> i32 {
    let (mut max_pos, len, mut end) = (0, nums.len(), 0);
    let mut steps = 0;

    for i in 0..len - 1 {
        if max_pos >= i {
            max_pos = std::cmp::max(max_pos, i + nums[i] as usize);
            if i == end {
                end = max_pos;
                steps += 1;
            }
        }
    }

    steps
}
```

@tab Java
```java
public int jump(int[] nums) {
    int maxPos = 0, len = nums.length, end = 0;
    int steps = 0;

    for (int i = 0; i < len - 1; i++) {
        if (maxPos >= i) {
            maxPos = Math.max(maxPos, i + nums[i]);
            if (i == end) {
                end = maxPos;
                steps++;
            }
        }
    }

    return steps;
}
```

@tab Go
```go
func jump(nums []int) int {
    maxPos, size, end := 0, len(nums), 0
    steps := 0
    
    for i := 0; i < size - 1; i++ {
        if maxPos >= i {
            maxPos = max(maxPos, i + nums[i])
            if i == end {
                end = maxPos
                steps++
            }
        }
    }

    return steps
}
```
:::