---
title: 55, Jump Game
icon: discover
date: 2024-03-14
order: 10
sticky: true
category: greedy
tag: 
  - medium
  - array
  - greedy
  - dynamic programming
---

## I Problem
You are given an integer array `nums`. You are initially positioned at the array's **first index**, and each element in the array represents your maximum jump length at that position.

Return *`true` if you can reach the last index, or `false` otherwise*.

**Example 1**
Input: nums = [2, 3, 1, 1, 4]
Output: true
Explanation: Jump `1` step from index `0` to `1`, then `3` steps to the last index.

**Example 2**
Input: nums = [3, 2, 1, 0, 4]
Output: false
Explanation: You will always arrive at index `3` no matter what. Its maximum jump length is `0`, which makes it impossible to reach the last index.

**Constraints**
- `1 <= nums.length <= 10⁴`
- `0 <= nums[i] <= 10⁵`

**Related Topics**
- Array
- Dynamic Programming
- Greedy


## II Solution
### Approach 1: Greedy
::: code-tabs
@tab Rust
```rust
pub fn can_jump(nums: Vec<i32>) -> bool {
    let max_idx = nums.len() - 1;
    let mut rightmost = 0;

    for i in 0..=max_idx {
        if i <= rightmost {
            rightmost = std::cmp::max(rightmost, i + nums[i] as usize);
            if rightmost >= max_idx {
                return true;
            }
        }
    }

    false
}
```

@tab Java
```java
public boolean canJump(int[] nums) {
    int maxIdx = nums.length - 1;
    int rightmost = 0;

    for (int i = 0; i <= maxIdx; i++) {
        if (i <= rightmost) {
            rightmost = Math.max(rightmost, i + nums[i]);
            if (rightmost >= maxIdx) {
                return true;
            }
        }
    }

    return false;
}
```

@tab Go
```go
func canJump(nums []int) bool {
    maxIdx := len(nums) - 1
    rightmost := 0
    
    for i := 0; i <= maxIdx; i++ {
        if i <= rightmost {
            rightmost = max(rightmost, i+nums[i])
            if rightmost >= maxIdx {
                return true
            }
        }
    }
    
    return false
}
```
:::

### Approach 2: Reverse Traversal
::: code-tabs
@tab Rust
```rust
pub fn can_jump(nums: Vec<i32>) -> bool {
    let mut jump_len = 1;

    for i in (0..nums.len() - 1).rev() {
        if nums[i] >= jump_len {
            jump_len = 1;
        } else {
            jump_len += 1;
        }
    }

    jump_len == 1
}
```

@tab Java
```java
public boolean canJump(int[] nums) {
    int jumpLen = 1;

    for (int i = nums.length - 2; i >= 0; i--) {
        if (nums[i] >= jumpLen) {
            jumpLen = 1;
        } else {
            jumpLen++;
        }
    }

    return jumpLen == 1;
}
```

@tab Go
```go
func canJump(nums []int) bool {
    jumpLen := 1

    for i := len(nums) - 2; i >= 0; i-- {
        if nums[i] >= jumpLen {
            jumpLen = 1
        } else {
            jumpLen++
        }
    }

    return jumpLen == 1
}
```
:::