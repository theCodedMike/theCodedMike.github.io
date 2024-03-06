---
title: 714, 买卖股票的最佳时机含手续费
icon: discover
date: 2024-03-06
order: 7
sticky: true
category: greedy
tag: 
  - medium
  - greedy
  - array
  - dynamic programming
---

## 一、题目描述
给定一个整数数组`prices`，其中`prices[i]`表示第`i`天的股票价格；整数`fee`代表了交易股票的手续费用。

你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。

返回获得利润的最大值。

**注意:** 这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。

**示例 1**
输入: prices = [1, 3, 2, 8, 4, 9], fee = 2
输出: 8
解释: 能够达到的最大利润:
在此处买入`prices[0] = 1`
在此处卖出`prices[3] = 8`
在此处买入`prices[4] = 4`
在此处卖出`prices[5] = 9`
总利润: `((8 - 1) - 2) + ((9 - 4) - 2) = 8`

**示例 2**
输入: prices = [1, 3, 7, 5, 10, 3], fee = 3
输出: 6

**提示**
- `1 <= prices.length <= 5 * 10⁴`
- `1 <= prices[i] < 5 * 10⁴`
- `0 <= fee < 5 * 10⁴`

**相关主题**
- 贪心
- 数组
- 动态规划


## 二、题解
### 方法 1: 贪心
::: code-tabs
@tab Rust
```rust
pub fn max_profit(prices: Vec<i32>, fee: i32) -> i32 {
    let mut profit = 0;
    let mut buy = prices[0] + fee;

    for i in 1..prices.len() {
        if prices[i] + fee < buy {
            buy = prices[i] + fee;
        } else if prices[i] > buy {
            profit += prices[i] - buy;
            buy = prices[i];
        }
    }

    profit
}
```

@tab Java
```java
public int maxProfit(int[] prices, int fee) {
    int profit = 0;
    int buy = prices[0] + fee;

    for (int i = 1; i < prices.length; i++) {
        if (prices[i] + fee < buy) {
            buy = prices[i] + fee;
        } else if (prices[i] > buy) {
            profit += prices[i] - buy;
            buy = prices[i];
        }
    }

    return profit;
}
```

@tab Go
```go
func maxProfit(prices []int, fee int) int {
    profit := 0

    for i, buy := 1, prices[0]+fee; i < len(prices); i++ {
        if prices[i]+fee < buy {
            buy = prices[i] + fee
        } else if prices[i] > buy {
            profit += prices[i] - buy
            buy = prices[i]
        }
    }

    return profit
}
```
:::

### 方法 2: 动态规划
::: code-tabs
@tab Rust
```rust
pub fn max_profit(prices: Vec<i32>, fee: i32) -> i32 {
    let len = prices.len();
    let mut dp = vec![[0; 2]; len];
    (dp[0][0], dp[0][1]) = (0, -prices[0]);

    for i in 1..len {
        dp[i][0] = std::cmp::max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
        dp[i][1] = std::cmp::max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    }

    dp[len - 1][0]
}
```

@tab Java
```java
public int maxProfit(int[] prices, int fee) {
    int len = prices.length;
    int[][] dp = new int[len][2];
    dp[0][0] = 0;
    dp[0][1] = -prices[0];

    for (int i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i] - fee);
        dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i]);
    }

    return dp[len - 1][0];
}
```

@tab Go
```go
func maxProfit(prices []int, fee int) int {
    size := len(prices)
    dp := make([][2]int, size)
    dp[0][0], dp[0][1] = 0, -prices[0]

    for i := 1; i < size; i++ {
        dp[i][0] = max(dp[i-1][0], dp[i-1][1]+prices[i]-fee)
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
pub fn max_profit(prices: Vec<i32>, fee: i32) -> i32 {
    let (mut sell, mut buy) = (0, -prices[0]);

    for i in 1..prices.len() {
        (sell, buy) = (
            std::cmp::max(sell, buy + prices[i] - fee),
            std::cmp::max(buy, sell - prices[i]),
        );
    }

    sell
}
```

@tab Java
```java
public int maxProfit(int[] prices, int fee) {
    int sell = 0, buy = -prices[0];

    for (int i = 1; i < prices.length; i++) {
        int newSell = Math.max(sell, buy + prices[i] - fee);
        int newBuy = Math.max(buy, sell - prices[i]);
        sell = newSell;
        buy = newBuy;
    }

    return sell;
}
```

@tab Go
```go
func maxProfit(prices []int, fee int) int {
    sell, buy := 0, -prices[0]

    for i := 1; i < len(prices); i++ {
        sell, buy = max(sell, buy + prices[i] - fee), max(buy, sell - prices[i])
    }
    
    return sell
}
```
:::