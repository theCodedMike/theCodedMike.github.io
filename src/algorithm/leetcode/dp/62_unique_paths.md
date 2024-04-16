---
title: 62, Unique Paths
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

## I Problem
There is a robot on an `m x n` grid. The robot is initially located at the **top-left corner** (i.e., `grid[0][0]`). The robot tries to move to the **bottom-right corner** (i.e., `grid[m - 1][n - 1]`). The robot can only move either down or right at any point in time.

Given the two integers `m` and `n`, return *the number of possible unique paths that the robot can take to reach the bottom-right corner*.

The test cases are generated so that the answer will be less than or equal to `2 * 10⁹`.


**Example 1**
![](../../../../assets/leetcode/unique_paths_62.png)
Input: m = 3, n = 7
Output: 28

**Example 2**
Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down

**Constraints**
- `1 <= m, n <= 100`

**Related Topics**
- Math
- Dynamic Programming
- Combinatorics


## II Solution
### Approach 1: Dynamic Programming
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

### Approach 2: Optimized Dynamic Programming
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

### Approach 3: Combinatorics
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