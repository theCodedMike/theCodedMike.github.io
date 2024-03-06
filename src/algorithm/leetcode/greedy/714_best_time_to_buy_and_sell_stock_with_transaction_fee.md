---
title: 714, Best Time to Buy and Sell Stock with Transaction Fee
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

## I Problem
You are given an array `prices` where `prices[i]` is the price of a given stock on the `iᵗʰ` day, and an integer `fee` representing a transaction fee.

Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.

**Note:**
- You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
- The transaction fee is only charged once for each stock purchase and sale.

**Example 1**
Input: prices = [1, 3, 2, 8, 4, 9], fee = 2
Output: 8
Explanation: The maximum profit can be achieved by:
- Buying at `prices[0] = 1`
- Selling at `prices[3] = 8`
- Buying at `prices[4] = 4`
- Selling at `prices[5] = 9`
The total profit is `((8 - 1) - 2) + ((9 - 4) - 2) = 8`.

**Example 2**
Input: prices = [1, 3, 7, 5, 10, 3], fee = 3
Output: 6

**Constraints**
- `1 <= prices.length <= 5 * 10⁴`
- `1 <= prices[i] < 5 * 10⁴`
- `0 <= fee < 5 * 10⁴`

**Related Topics**
- Greedy
- Array
- Dynamic Programming

## II Solution
### Approach 1: Greedy
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

### Approach 2: Dynamic Programming
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

### Approach 3: Optimized Dynamic Programming
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