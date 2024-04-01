---
title: 70, Climbing Stairs
icon: discover
date: 2024-03-31
order: 2
sticky: true
category: dynamic programming
tag: 
  - easy
  - math
  - dynamic programming
  - memoization
---

## I Problem
You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

**Example 1**
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

**Example 2**
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

**Constraints**
- `1 <= n <= 45`

**Related Topics**
- Math
- Dynamic Programming
- Memoization


## II Solution
### Approach 1: Dynamic Programming
::: code-tabs
@tab Rust
```rust
pub fn climb_stairs(n: i32) -> i32 {
    let (mut p, mut q, mut r) = (0, 0, 1);

    for _ in 0..n {
        p = q;
        q = r;
        r = p + q;
    }

    r
}
```

@tab Java
```java
public int climbStairs(int n) {
    int p = 0, q = 0, r = 1;

    for (int i = 0; i < n; i++) {
        p = q;
        q = r;
        r = p + q;
    }

    return r;
}
```

@tab Go
```go
func climbStairs(n int) int {
    p, q, r := 0, 0, 1
    
    for range n {
        p = q
        q = r
        r = p + q
    }
    
    return r
}
```
:::

### Approach 2: Matrix Fast Power
::: code-tabs
@tab Rust
```rust
pub fn climb_stairs(mut n: i32) -> i32 {
    let mut m = vec![vec![1, 1], vec![1, 0]];

    let multiply = |a: &[Vec<i64>], b: &[Vec<i64>]| {
        let mut c = vec![vec![0; 2]; 2];
        for i in 0..2 {
            for j in 0..2 {
                c[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j];
            }
        }
        c
    };
    let mut pow = || {
        let mut ret = vec![vec![1, 0], vec![0, 1]];
        while n > 0 {
            if n & 1 == 1 {
                ret = multiply(&ret, &m);
            }
            n >>= 1;
            m = multiply(&m, &m);
        }
        ret
    };

    let res = pow();

    res[0][0] as i32
}
```

@tab Java
```java
public int climbStairs(int n) {
    long[][] m = new long[][]{new long[]{1, 1}, new long[]{1, 0}};

    BiFunction<long[][], long[][], long[][]> multiply = (a, b) -> {
        long[][] c = new long[2][2];
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                c[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j];
            }
        }
        return c;
    };
    BiFunction<long[][], Integer, long[][]> pow = (_m, _n) -> {
        long[][] ret = new long[][]{new long[]{1, 0}, new long[]{0, 1}};
        while (_n > 0) {
            if ((_n & 1) == 1) {
                ret = multiply.apply(ret, _m);
            }
            _n >>= 1;
            _m = multiply.apply(_m, _m);
        }
        return ret;
    };

    long[][] res = pow.apply(m, n);

    return (int) res[0][0];
}
```

@tab Go
```go
func climbStairs(n int) int {
    m := make([][]int, 2)
    m[0], m[1] = []int{1, 1}, []int{1, 0}
    
    multiply := func(a, b [][]int) [][]int {
        c := make([][]int, 2)
        c[0], c[1] = []int{0, 0}, []int{0, 0}
        
        for i := range 2 {
            for j := range 2 {
                c[i][j] = a[i][0]*b[0][j] + a[i][1]*b[1][j]
            }
        }
        
        return c
    }
    pow := func() [][]int {
        ret := make([][]int, 2)
        ret[0], ret[1] = []int{1, 0}, []int{0, 1}
        
        for n > 0 {
            if n&1 == 1 {
                ret = multiply(ret, m)
            }
            n >>= 1
            m = multiply(m, m)
        }
        
        return ret
    }
    
    res := pow()
    return res[0][0]
}
```
:::

### Approach 3: General Formula
::: code-tabs
@tab Rust
```rust
pub fn climb_stairs(n: i32) -> i32 {
    let sqrt5 = 5_f64.sqrt();
    let fib_n = ((1.0 + sqrt5) / 2.0).powi(n + 1) - ((1.0 - sqrt5) / 2.0).powi(n + 1);

    return (fib_n / sqrt5).round() as i32;
}
```

@tab Java
```java
public int climbStairs(int n) {
    double sqrt5 = Math.sqrt(5);
    double fibN = Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1);

    return (int) Math.round(fibN / sqrt5);
}
```

@tab Go
```go
func climbStairs(n int) int {
    sqrt5 := math.Sqrt(5)
    fibN := math.Pow((1+sqrt5)/2, float64(n+1)) - math.Pow((1-sqrt5)/2, float64(n+1))
    
    return int(math.Round(fibN / sqrt5))
}
```
:::


### Approach 4: Combine
::: code-tabs
@tab Rust
```rust
pub fn climb_stairs(n: i32) -> i32 {
    let n = n as i64;
    let calc = |mut a, b| {
        let mut ans = 1;
        for i in 1..=b {
            ans *= a;
            a -= 1;
            ans /= i;
        }
        ans
    };

    let mut res = 1;
    for i in 1..=n / 2 {
        res += calc(n - i, i);
    }

    res as i32
}
```

@tab Java
```java
public int climbStairs(int n) {
    BiFunction<Integer, Integer, Long> calc = (a, b) -> {
        long ans = 1;
        for (int i = 1; i <= b; i++) {
            ans *= a;
            a--;
            ans /= i;
        }
        return ans;
    };

    long res = 1;
    for (int i = 1, times = n / 2; i <= times; i++) {
        res += calc.apply(n - i, i);
    }

    return (int) res;
}
```

@tab Go
```go
func climbStairs(n int) int {
    calc := func(a, b int) int {
        ans := 1
        for i := 1; i <= b; i++ {
            ans *= a
            a--
            ans /= i
        }
        return ans
    }
    
    res := 1
    for i, times := 1, n/2; i <= times; i++ {
        res += calc(n-i, i)
    }
    
    return res
}
```
:::