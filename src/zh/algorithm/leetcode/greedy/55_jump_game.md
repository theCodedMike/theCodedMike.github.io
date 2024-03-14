---
title: 55, 跳跃游戏
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

## 一、题目描述
给你一个非负整数数组`nums`，你最初位于数组的**第一个下标**。数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个下标，如果可以，返回`true`；否则，返回`false`。

**示例 1**
输入: nums = [2, 3, 1, 1, 4]
输出: true
解释: 可以先跳`1`步，从下标`0`到达下标`1`, 然后再从下标`1`跳`3`步到达最后一个下标。

**示例 2**
输入: nums = [3, 2, 1, 0, 4]
输出: false
解释: 无论怎样，总会到达下标为`3`的位置。但该下标的最大跳跃长度是`0`，所以永远不可能到达最后一个下标。

**提示**
- `1 <= nums.length <= 10⁴`
- `0 <= nums[i] <= 10⁵`

**相关主题**
- 贪心
- 数组
- 动态规划


## 二、题解
### 方法 1: 贪心
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

### 方法 2: 倒序遍历
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