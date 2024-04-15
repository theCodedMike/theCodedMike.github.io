---
title: 343, Integer Break
icon: discover
date: 2024-04-15
order: 7
sticky: true
category: dynamic programming
tag: 
  - medium
  - math
  - dynamic programming
---

## I Problem
Given an integer `n`, break it into the sum of `k` **positive integers**, where `k >= 2`, and maximize the product of those integers.

Return *the maximum product you can get*.

**Example 1**
Input: n = 2
Output: 1
Explanation: 2 = 1 + 1, 1 × 1 = 1.

**Example 2**
Input: n = 10
Output: 36
Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.

**Constraints**
- `2 <= n <= 58`

**Related Topics**
- Math
- Dynamic Programming


## II Solution
### Approach 1: Dynamic Programming
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n^2)
/// Space Complexity: O(n)
pub fn integer_break(n: i32) -> i32 {
    let n = n as usize;
    let mut dp = vec![0; n + 1];

    for i in 2..=n {
        let mut curr_max = 0;
        for j in 1..i {
            curr_max = max(curr_max, max(j * (i - j), j * dp[i - j]));
        }
        dp[i] = curr_max;
    }

    dp[n] as i32
}
```

@tab Java
```java
/**
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 */
public int integerBreak(int n) {
    int[] dp = new int[n + 1];

    for (int i = 2; i <= n; i++) {
        int currMax = 0;
        for (int j = 1; j < i; j++) {
            currMax = Math.max(currMax, Math.max(j * (i - j), j * dp[i - j]));
        }
        dp[i] = currMax;
    }

    return dp[n];
}
```

@tab Go
```go
// Time Complexity: O(n^2)
// Space Complexity: O(n)
func integerBreak(n int) int {
    dp := make([]int, n+1)

    for i := 2; i <= n; i++ {
        currMax := 0
        for j := 1; j < i; j++ {
            currMax = max(currMax, max(j*(i-j), j*dp[i-j]))
        }
        dp[i] = currMax
    }

    return dp[n]
}
```
:::


### Approach 2: Optimized Dynamic Programming
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n)
/// Space Complexity: O(n)
pub fn integer_break(n: i32) -> i32 {
    if n <= 3 {
        return n - 1;
    }

    let n = n as usize;
    let mut dp = vec![0; n + 1];
    dp[2] = 1;

    for i in 3..=n {
        dp[i] = max(
            max(2 * (i - 2), 2 * dp[i - 2]),
            max(3 * (i - 3), 3 * dp[i - 3]),
        )
    }

    dp[n] as i32
}
```

@tab Java
```java
/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
public int integerBreak(int n) {
    if (n <= 3) {
        return n - 1;
    }

    int[] dp = new int[n + 1];
    dp[2] = 1;

    for (int i = 3; i <= n; i++) {
        dp[i] = Math.max(
                Math.max(2 * (i - 2), 2 * dp[i - 2]),
                Math.max(3 * (i - 3), 3 * dp[i - 3])
        );
    }

    return dp[n];
}
```

@tab Go
```go
// Time Complexity: O(n)
// Space Complexity: O(n)
func integerBreak(n int) int {
    if n <= 3 {
        return n - 1
    }

    dp := make([]int, n+1)
    dp[2] = 1

    for i := 3; i <= n; i++ {
        dp[i] = max(
            max(2*(i-2), 2*dp[i-2]),
            max(3*(i-3), 3*dp[i-3]),
        )
    }

    return dp[n]
}
```
:::


### Approach 3: Math
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(1)
/// Space Complexity: O(1)
pub fn integer_break(n: i32) -> i32 {
    if n <= 3 {
        return n - 1;
    }

    let (quotient, remainder) = ((n / 3) as u32, n % 3);

    match remainder {
        0 => 3_i32.pow(quotient),
        1 => 3_i32.pow(quotient - 1) * 4,
        _ => 3_i32.pow(quotient) * 2,
    }
}
```

@tab Java
```java
/**
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
public int integerBreak(int n) {
    if (n <= 3) {
        return n - 1;
    }

    int quotient = n / 3, remainder = n % 3;

    switch (remainder) {
        case 0 -> {
            return (int) Math.pow(3, quotient);
        }
        case 1 -> {
            return (int) (Math.pow(3, quotient - 1) * 4);
        }
        default -> {
            return (int) (Math.pow(3, quotient) * 2);
        }
    }
}
```

@tab Go
```go
// Time Complexity: O(1)
// Space Complexity: O(1)
func integerBreak(n int) int {
    if n <= 3 {
        return n - 1
    }

    quotient, remainder := float64(n/3), n%3

    switch remainder {
    case 0:
        return int(math.Pow(3, quotient))
    case 1:
        return int(math.Pow(3, quotient-1) * 4)
    default:
        return int(math.Pow(3, quotient) * 2)
    }
}
```
:::