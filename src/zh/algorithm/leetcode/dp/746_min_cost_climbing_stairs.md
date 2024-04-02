---
title: 746, 使用最小花费爬楼梯
icon: discover
date: 2024-04-03
order: 4
sticky: true
category: dynamic programming
tag: 
  - easy
  - array
  - dynamic programming
---

## 一、题目描述
给你一个整数数组`cost`，其中`cost[i]`是从楼梯第`i`个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。 

你可以选择从下标为`0`或下标为`1`的台阶开始爬楼梯。

请你计算并返回达到楼梯顶部的最低花费。

**示例 1**
输入: cost = [10, 15, 20]
输出: 15
解释: 你将从下标为`1`的台阶开始。
- 支付`15`，向上爬两个台阶，到达楼梯顶部。
总花费为`15`。

**示例 2**
输入: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
输出: 6
解释: 你将从下标为`0`的台阶开始。
- 支付`1`，向上爬两个台阶，到达下标为`2`的台阶。
- 支付`1`，向上爬两个台阶，到达下标为`4`的台阶。
- 支付`1`，向上爬两个台阶，到达下标为`6`的台阶。
- 支付`1`，向上爬一个台阶，到达下标为`7`的台阶。
- 支付`1`，向上爬两个台阶，到达下标为`9`的台阶。
- 支付`1`，向上爬一个台阶，到达楼梯顶部。
总花费为`6`。

**提示**
- `2 <= cost.length <= 1000`
- `0 <= cost[i] <= 999`

**相关主题**
- 数组
- 动态规划


## 二、题解
### 方法 1: 动态规划
::: code-tabs
@tab Rust
```rust
pub fn min_cost_climbing_stairs(cost: Vec<i32>) -> i32 {
    //Self::dp(cost)
    Self::optimize_dp(cost)
}

/// Time Complexity: O(n)
/// Space Complexity: O(n)
fn dp(cost: Vec<i32>) -> i32 {
    let len = cost.len();
    let mut dp = vec![0; len + 1];

    for i in 2..=len {
        dp[i] = std::cmp::min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }

    dp[len]
}

/// Time Complexity: O(n)
/// Space Complexity: O(1)
fn optimize_dp(cost: Vec<i32>) -> i32 {
    let (mut prev, mut curr) = (0, 0);

    for i in 2..=cost.len() {
        let next = std::cmp::min(curr + cost[i - 1], prev + cost[i - 2]);
        (prev, curr) = (curr, next);
    }

    curr
}
```

@tab Java
```java
public int minCostClimbingStairs(int[] cost) {
    //return this.dp(cost);
    return this.optimizeDP(cost);
}

int dp(int[] cost) {
    int len = cost.length;
    int[] dp = new int[len + 1];

    for (int i = 2; i <= len; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }

    return dp[len];
}

int optimizeDP(int[] cost) {
    int prev = 0, curr = 0;

    for (int i = 2; i <= cost.length; i++) {
        int next = Math.min(curr + cost[i - 1], prev + cost[i - 2]);
        prev = curr;
        curr = next;
    }

    return curr;
}
```

@tab Go
```go
func minCostClimbingStairs(cost []int) int {
    //return dp(cost)
    return optimizeDP(cost)
}

func dp(cost []int) int {
    size := len(cost)
    dp := make([]int, size+1)
    
    for i := 2; i <= size; i++ {
        dp[i] = min(dp[i-1]+cost[i-1], dp[i-2]+cost[i-2])
    }

    return dp[size]
}

func optimizeDP(cost []int) int {
    prev, curr := 0, 0
    
    for i, size := 2, len(cost); i <= size; i++ {
        next := min(curr+cost[i-1], prev+cost[i-2])
        prev, curr = curr, next
    }

    return curr
}
```
:::
