---
title: 62, 不同路径
icon: discover
date: 2024-04-16
order: 8
sticky: true
category: dynamic programming
tag: 
  - medium
  - math
  - dynamic programming
  - combinatorics
---

## 一、题目描述
一个机器人位于一个`m x n`网格的左上角（起始点在下图中标记为`Start`）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为`Finish`）。

问总共有多少条不同的路径？

**示例 1**
![](../../../../../assets/leetcode/unique_paths_62.png)
输入: m = 3, n = 7
输出: 28

**示例 2**
输入: m = 3, n = 2
输出: 3
解释: 从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右
3. 向下 -> 向右 -> 向下

**示例 3**
输入: m = 7, n = 3
输出: 28

**示例 4**
输入: m = 3, n = 3
输出: 6

**提示**
- `1 <= m, n <= 100`
- 题目数据保证答案小于等于`2 * 10⁹`

**相关主题**
- 数学
- 动态规划
- 组合数学


## 二、题解
### 方法 1: 动态规划
::: code-tabs
@tab Rust
```rust
pub fn unique_paths(m: i32, n: i32) -> i32 {
    let (m, n) = (m as usize, n as usize);
    let mut dp = vec![vec![0; n]; m];

    for i in 0..m {
        dp[i][0] = 1;
    }
    for i in 0..n {
        dp[0][i] = 1;
    }
    for i in 1..m {
        for j in 1..n {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    dp[m - 1][n - 1]
}
```

@tab Java
```java
public int uniquePaths(int m, int n) {
    int[][] dp = new int[m][n];

    for (int i = 0; i < m; i++) {
        dp[i][0] = 1;
    }
    for (int i = 0; i < n; i++) {
        dp[0][i] = 1;
    }
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
}
```

@tab Go
```go
func uniquePaths(m int, n int) int {
    f := make([][]int, m)
    for i := range f {
        f[i] = make([]int, n)
    }

    for i := 0; i < m; i++ {
        f[i][0] = 1
    }
    for i := 0; i < n; i++ {
        f[0][i] = 1
    }
    for i := 1; i < m; i++ {
        for j := 1; j < n; j++ {
            f[i][j] = f[i-1][j] + f[i][j-1]
        }
    }
    
    return f[m-1][n-1]
}
```
:::

### 方法 2: 优化的动态规划
::: code-tabs
@tab Rust
```rust
pub fn unique_paths(m: i32, n: i32) -> i32 {
    let n = n as usize;
    let mut dp = vec![1; n];

    for _ in 1..m {
        for j in 1..n {
            dp[j] += dp[j - 1];
        }
    }

    dp[n - 1]
}
```

@tab Java
```java
public int uniquePaths(int m, int n) {
    int[] dp = new int[n];
    Arrays.fill(dp, 1);

    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            dp[j] += dp[j - 1];
        }
    }
    
    return dp[n - 1];
}
```

@tab Go
```go
func uniquePaths(m int, n int) int {
    f := make([]int, n)
    for i := 0; i < n; i++ {
        f[i] = 1
    }
    
    for i := 1; i < m; i++ {
        for j := 1; j < n; j++ {
            f[j] += f[j-1]
        }
    }
    
    return f[n-1]
}
```
:::

### 方法 3: 组合数学
::: code-tabs
@tab Rust
```rust
pub fn unique_paths(m: i32, n: i32) -> i32 {
    let m = m as i64;
    let mut res = 1_i64;
    let (mut x, mut y) = (n as i64, 1);

    while y < m {
        res = res * x / y;
        (x, y) = (x + 1, y + 1);
    }

    res as i32
}
```

@tab Java
```java
public int uniquePaths(int m, int n) {
    long res = 1;

    for (int x = n, y = 1; y < m; x++, y++) {
        res = res * x / y;
    }

    return (int) res;
}
```

@tab Go
```go
func uniquePaths(m int, n int) int {
    res := 1
    
    for x, y := n, 1; y < m; x, y = x+1, y+1 {
        res = res * x / y
    }
    
    return res
}
```
:::