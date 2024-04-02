---
title: 746, Min Cost Climbing Stairs
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

## I Problem
You are given an integer array `cost` where `cost[i]` is the cost of `iᵗʰ` step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index `0`, or the step with index `1`.

Return *the minimum cost to reach the top of the floor*.

**Example 1**
Input: cost = [10, 15, 20]
Output: 15
Explanation: You will start at index `1`.
- Pay `15` and climb two steps to reach the top.
The total cost is `15`.

**Example 2**
Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
Output: 6
Explanation: You will start at index `0`.
- Pay `1` and climb two steps to reach index `2`.
- Pay `1` and climb two steps to reach index `4`.
- Pay `1` and climb two steps to reach index `6`.
- Pay `1` and climb one step to reach index `7`.
- Pay `1` and climb two steps to reach index `9`.
- Pay `1` and climb one step to reach the top.
The total cost is `6`.

**Constraints**
- `2 <= cost.length <= 1000`
- `0 <= cost[i] <= 999`

**Related Topics**
- Array
- Dynamic Programming


## II Solution
### Approach 1: Dynamic Programming
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
