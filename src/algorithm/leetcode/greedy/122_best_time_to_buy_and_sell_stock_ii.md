---
title: 122, Best Time to Buy and Sell Stock II
icon: discover
date: 2024-03-05
order: 6
sticky: true
category: greedy
tag: 
  - medium
  - greedy
  - array
  - dynamic programming
---

## I Problem
You are given an integer array `prices` where `prices[i]` is the price of a given stock on the `iᵗʰ` day.

On each day, you may decide to buy and/or sell the stock. You can only hold **at most one** share of the stock at any time. However, you can buy it then immediately sell it on the **same day**.

Find and return *the **maximum** profit you can achieve*.

**Example 1**
Input: prices = [7, 1, 5, 3, 6, 4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = `5 - 1 = 4`. Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = `6 - 3 = 3`. Total profit is `4 + 3 = 7`.

**Example 2**
Input: prices = [1, 2, 3, 4, 5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = `5 - 1 = 4`. Total profit is 4.

**Example 3**
Input: prices = [7, 6, 4, 3, 1]
Output: 0
Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.

**Constraints**
- `1 <= prices.length <= 3 * 10⁴`
- `0 <= prices[i] <= 10⁴`

**Related Topics**
- Greedy
- Array
- Dynamic Programming


## II Solution
### Approach 1: Greedy
::: code-tabs
@tab Rust
```rust
pub fn max_profit(prices: Vec<i32>) -> i32 {
    let mut res = 0;

    for i in 1..prices.len() {
        res += std::cmp::max(0, prices[i] - prices[i - 1]);
    }

    res
}
```

@tab Java
```java
public int maxProfit(int[] prices) {
    int res = 0;
    
    for (int i = 1; i < prices.length; i++) {
        res += Math.max(0, prices[i] - prices[i - 1]);
    }

    return res;
}
```

@tab Go
```go
func maxProfit(prices []int) int {
    res := 0

    for i, size := 1, len(prices); i < size; i++ {
        res += max(0, prices[i]-prices[i-1])
    }

    return res
}
```
:::

### Approach 2: Dynamic Programming
::: code-tabs
@tab Rust
```rust
pub fn max_profit(prices: Vec<i32>) -> i32 {
    let len = prices.len();
    let mut dp = vec![[0; 2]; len];
    (dp[0][0], dp[0][1]) = (0, -prices[0]);

    for i in 1..len {
        dp[i][0] = std::cmp::max(dp[i-1][0], dp[i-1][1] + prices[i]);
        dp[i][1] = std::cmp::max(dp[i-1][1], dp[i-1][0] - prices[i]);
    }

    dp[len -1][0]
}
```

@tab Java
```java
public int maxProfit(int[] prices) {
    int len = prices.length;
    int[][] dp = new int[len][2];
    dp[0][0] = 0;
    dp[0][1] = -prices[0];

    for (int i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i]);
    }

    return dp[len-1][0];
}
```

@tab Go
```go
func maxProfit(prices []int) int {
    size := len(prices)
    dp := make([][2]int, size)
    dp[0][0], dp[0][1] = 0, -prices[0]

    for i := 1; i < size; i++ {
        dp[i][0] = max(dp[i-1][0], dp[i-1][1]+prices[i])
        dp[i][1] = max(dp[i-1][1], dp[i-1][0]-prices[i])
    }

    return dp[size-1][0]
}
```
:::

### Approach 3: Optimized Dynamic Programming
::: code-tabs
@tab Rust
```rust
pub fn max_profit(prices: Vec<i32>) -> i32 {
    let (mut dp0, mut dp1) = (0, -prices[0]);

    for i in 1..prices.len() {
        (dp0, dp1) = (
            std::cmp::max(dp0, dp1 + prices[i]),
            std::cmp::max(dp1, dp0 - prices[i]),
        );
    }

    dp0
}
```

@tab Java
```java
public int maxProfit(int[] prices) {
    int dp0 = 0, dp1 = -prices[0];

    for (int i = 1; i < prices.length; i++) {
        int newDp0 = Math.max(dp0, dp1 + prices[i]);
        int newDp1 = Math.max(dp1, dp0 - prices[i]);
        dp0 = newDp0;
        dp1 = newDp1;
    }

    return dp0;
}
```

@tab Go
```go
func maxProfit(prices []int) int {
    dp0, dp1 := 0, -prices[0]

    for i, size := 1, len(prices); i < size; i++ {
        dp0, dp1 = max(dp0, dp1+prices[i]), max(dp1, dp0-prices[i])
    }

    return dp0
}
```
:::