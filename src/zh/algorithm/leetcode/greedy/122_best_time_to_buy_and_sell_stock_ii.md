---
title: 122, 买卖股票的最佳时机II
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

## 一、题目描述
给你一个整数数组`prices`，其中`prices[i]`表示某支股票第`i`天的价格。

在每一天，你可以决定是否购买和/或出售股票。你在任何时候**最多**只能持有**一股**股票。你也可以先购买，然后在**同一天**出售。

返回*你能获得的**最大**利润*。

**示例 1**
输入: prices = [7, 1, 5, 3, 6, 4]
输出: 7
解释: 在第`2`天（股票价格 = 1）的时候买入，在第`3`天（股票价格 = 5）的时候卖出，这笔交易所能获得利润 = `5 - 1 = 4`。随后，在第`4`天（股票价格 = 3）的时候买入，在第`5`天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = `6 - 3 = 3`。总利润为`4 + 3 = 7`。

**示例 2**
输入: prices = [1, 2, 3, 4, 5]
输出: 4
解释: 在第`1`天（股票价格 = 1）的时候买入，在第`5`天（股票价格 = 5）的时候卖出，这笔交易所能获得利润 = `5 - 1 = 4`。总利润为`4`。

**示例 3**
输入: prices = [7, 6, 4, 3, 1]
输出: 0
解释: 在这种情况下, 交易无法获得正利润，所以不参与交易可以获得最大利润，最大利润为`0`。

**提示**
- `1 <= prices.length <= 3 * 10⁴`
- `0 <= prices[i] <= 10⁴`

**相关主题**
- 贪心
- 数组
- 动态规划


## 二、题解
### 方法 1: 贪心
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

### 方法 2: 动态规划
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

### 方法 3: 优化的动态规划
::: code-tabs
@tab Rust
```rust
pub fn max_profit(prices: Vec<i32>) -> i32 {
    let (mut dp0, mut dp1) = (0, -prices[0]);

    for i in 1..prices.len() {
        let new_dp0 = std::cmp::max(dp0, dp1 + prices[i]);
        let new_dp1 = std::cmp::max(dp1, dp0 - prices[i]);
        (dp0, dp1) = (new_dp0, new_dp1);
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