---
title: 198, House Robber
icon: discover
date: 2024-04-07
order: 6
sticky: true
category: dynamic programming
tag: 
  - medium
  - array
  - dynamic programming
---

## I Problem
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and **it will automatically contact the police if two adjacent houses were broken into on the same night**.

Given an integer array `nums` representing the amount of money of each house, return *the maximum amount of money you can rob tonight **without alerting the police***.

**Example 1**
Input: nums = [1, 2, 3, 1]
Output: 4
Explanation: Rob house `1` (money = 1) and then rob house `3` (money = 3).
Total amount you can rob = 1 + 3 = 4.

**Example 2**
Input: nums = [2, 7, 9, 3, 1]
Output: 12
Explanation: Rob house `1` (money = 2), rob house `3` (money = 9) and rob house `5` (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.

**Constraints**
- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 400`

**Related Topics**
- Array
- Dynamic Programming


## II Solution
### Approach 1: Dynamic Programming
::: code-tabs
@tab Rust
```rust
pub fn rob(nums: Vec<i32>) -> i32 {
    //Self::dp(nums)

    Self::optimize_dp(nums)
}

fn dp(nums: Vec<i32>) -> i32 {
    let len = nums.len();
    match len {
        0 => 0,
        1 => nums[0],
        _ => {
            let mut dp = vec![0; len];
            (dp[0], dp[1]) = (nums[0], max(nums[0], nums[1]));

            for i in 2..len {
                dp[i] = max(dp[i - 2] + nums[i], dp[i - 1]);
            }
            dp[len - 1]
        }
    }
}

fn optimize_dp(nums: Vec<i32>) -> i32 {
    let len = nums.len();
    match len {
        0 => 0,
        1 => nums[0],
        _ => {
            let (mut first, mut second) = (nums[0], max(nums[0], nums[1]));

            for i in 2..len {
                (first, second) = (second, max(first + nums[i], second));
            }

            second
        }
    }
}
```

@tab Java
```java
public int rob(int[] nums) {
    //return this.dp(nums);

    return this.optimizeDP(nums);
}

int dp(int[] nums) {
     switch (nums.length) {
        case 0 -> {
            return 0;
        }
         case 1 -> {
             return nums[0];
         }
         default -> {
            int[] dp = new int[nums.length];
            dp[0] = nums[0];
            dp[1] = Math.max(nums[0], nums[1]);

            for (int i = 2; i < nums.length; i++) {
                dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
            }

            return dp[nums.length - 1];
        }
    }
}

int optimizeDP(int[] nums) {
    switch (nums.length) {
        case 0 -> {
            return 0;
        }
        case 1 -> {
            return nums[0];
        }
        default -> {
            int first = nums[0], second = Math.max(nums[0], nums[1]);

            for (int i = 2; i < nums.length; i++) {
                int temp = second;
                second = Math.max(first + nums[i], second);
                first = temp;
            }

            return second;
        }
    }
}
```

@tab Go
```go
func rob(nums []int) int {
    //return dp(nums)

    return optimizeDP(nums)
}

func dp(nums []int) int {
    size := len(nums)
    switch size {
    case 0:
        return 0
    case 1:
        return nums[0]
    default:
        dp := make([]int, size)
        dp[0], dp[1] = nums[0], max(nums[0], nums[1])
        
        for i := 2; i < size; i++ {
            dp[i] = max(dp[i-2]+nums[i], dp[i-1])
        }
        
        return dp[size-1]
    }
}

func optimizeDP(nums []int) int {
    size := len(nums)
    switch size {
    case 0:
        return 0
    case 1:
        return nums[0]
    default:
        first, second := nums[0], max(nums[0], nums[1])
    
        for i := 2; i < size; i++ {
            first, second = second, max(first+nums[i], second)
        }
    
        return second
    }
}
```
:::
