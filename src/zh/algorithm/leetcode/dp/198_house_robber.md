---
title: 198, 打家劫舍
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

## 一、题目描述
你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，**如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警**。

给定一个代表每个房屋存放金额的非负整数数组，计算你**不触动警报装置的情况下**，一夜之内能够偷窃到的最高金额。

**示例 1**
输入: [1, 2, 3, 1]
输出: 4
解释: 偷窃`1`号房屋(金额 = 1)，然后偷窃`3`号房屋(金额 = 3)。
偷窃到的`最高金额 = 1 + 3 = 4`。

**示例 2**
输入: [2, 7, 9, 3, 1]
输出: 12
解释: 偷窃`1`号房屋(金额 = 2)，偷窃`3`号房屋(金额 = 9)，接着偷窃`5`号房屋(金额 = 1)。
偷窃到的`最高金额 = 2 + 9 + 1 = 12`。

**提示**
- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 400`

**相关主题**
- 数组
- 动态规划


## 二、题解
### 方法 1: 动态规划
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
