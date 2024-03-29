---
title: 509, 斐波那契数
icon: discover
date: 2024-03-30
order: 1
sticky: true
category: dynamic programming
tag: 
  - easy
  - recursion
  - memoization
  - math
  - dynamic programming
---

## 一、题目描述
**斐波那契数**（通常用`F(n)`表示）形成的序列称为**斐波那契数列**。该数列由`0`和`1`开始，后面的每一项数字都是前面两项数字的和。也就是：
- F(0) = 0，F(1) = 1
- F(n) = F(n - 1) + F(n - 2)，其中 n > 1

给定`n`，请计算`F(n)`。

**示例 1**
输入: n = 2
输出: 1
解释: F(2) = F(1) + F(0) = 1 + 0 = 1

**示例 2**
输入: n = 3
输出: 2
解释: F(3) = F(2) + F(1) = 1 + 1 = 2

**示例 3**
输入: n = 4
输出: 3
解释: F(4) = F(3) + F(2) = 2 + 1 = 3

**提示**
- `0 <= n <= 30`

**相关主题**
- 递归
- 记忆化搜索
- 数学
- 动态规划


## 二、题解
### 方法 1: 递归
::: code-tabs
@tab Rust
```rust
/// 时间复杂度：O(n)
/// 空间复杂度：O(n)
pub fn fib(n: i32) -> i32 {
    if n < 2 {
        return n;
    }

    let mut s = vec![-1; n as usize + 1];
    (s[0], s[1]) = (0, 1);
    const RECUR: fn(usize, &mut [i32]) -> i32 = |n, s| {
        if s[n] != -1 {
            return s[n];
        }
        let res = RECUR(n - 1, s) + RECUR(n - 2, s);
        s[n] = res;
        res
    };

    RECUR(n as usize, &mut s)
}
```

@tab Java
```java
BiFunction<Integer, int[], Integer> recur = (n, s) -> {
    if (s[n] != -1) {
        return s[n];
    }

    int res = this.recur.apply(n - 1, s) + this.recur.apply(n - 2, s);
    s[n] = res;

    return res;
};
/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
public int fib(int n) {
    if (n < 2) {
        return n;
    }

    int[] s = new int[n + 1];
    Arrays.fill(s, -1);
    s[0] = 0;
    s[1] = 1;

    return this.recur.apply(n, s);
}
```

@tab Go
```go
// 时间复杂度：O(n)
// 空间复杂度：O(n)
func fib(n int) int {
    if n < 2 {
        return n
    }
    
    s := make([]int, n+1)
    for i := range n + 1 {
        if i < 2 {
            s[i] = i
        } else {
            s[i] = -1
        }
    }
    
    var recur func(int) int
    recur = func(n int) int {
        if s[n] != -1 {
            return s[n]
        }
        
        res := recur(n-1) + recur(n-2)
        s[n] = res
        
        return res
    }
    
    return recur(n)
}
```
:::

### 方法 2: 动态规划
::: code-tabs
@tab Rust
```rust
/// 时间复杂度：O(n)
/// 空间复杂度：O(1)
pub fn fib(n: i32) -> i32 {
    if n < 2 {
        return n;
    }

    let (mut prev, mut curr, mut sum) = (0, 0, 1);
    for _ in 1..n {
        prev = curr;
        curr = sum;
        sum = prev + curr;
    }

    sum
}
```

@tab Java
```java
/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
public int fib(int n) {
    if (n < 2) {
        return n;
    }

    int prev = 0, curr = 0, sum = 1;
    for (int i = 1; i < n; i++) {
        prev = curr;
        curr = sum;
        sum = prev + curr;
    }

    return sum;
}
```

@tab Go
```go
// 时间复杂度：O(n)
// 空间复杂度：O(1)
func fib(n int) int {
    if n < 2 {
        return n
    }
    
    prev, curr, sum := 0, 0, 1
    for range n - 1 {
        prev = curr
        curr = sum
        sum = prev + curr
    }
    
    return sum
}
```
:::

### 方法 3: 矩阵快速幂
::: code-tabs
@tab Rust
```rust
/// 时间复杂度：O(log(n))
/// 空间复杂度：O(1)
pub fn fib(n: i32) -> i32 {
    if n < 2 {
        return n;
    }

    let matrix_multiply = |a: &[Vec<i32>], b: &[Vec<i32>]| {
        let mut c = vec![vec![0, 0], vec![0, 0]];
        for i in 0..2 {
            for j in 0..2 {
                c[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j];
            }
        }
        c
    };
    let matrix_pow = |mut a: Vec<Vec<i32>>, mut n: i32| {
        let mut ret = vec![vec![1, 0], vec![0, 1]];
        while n > 0 {
            if n & 1 != 0 {
                ret = matrix_multiply(&ret, &a);
            }
            n >>= 1;
            a = matrix_multiply(&a, &a);
        }
        ret
    };

    let m = vec![vec![1, 1], vec![1, 0]];
    let res = matrix_pow(m, n - 1);

    res[0][0]
}
```

@tab Java
```java
BiFunction<int[][], int[][], int[][]> matrixMultiply = (a, b) -> {
    int[][] c = new int[][]{{0, 0}, {0, 0}};
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            c[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j];
        }
    }
    return c;
};

BiFunction<int[][], Integer, int[][]> matrixPow = (a, n) -> {
    int[][] ret = new int[][]{{1, 0}, {0, 1}};
    while (n > 0) {
        if ((n & 1) != 0) {
            ret = this.matrixMultiply.apply(ret, a);
        }
        n >>= 1;
        a = this.matrixMultiply.apply(a, a);
    }
    return ret;
};

/**
 * 时间复杂度：O(log(n))
 * 空间复杂度：O(1)
 */
public int fib(int n) {
    if (n < 2) {
        return n;
    }

    int[][] m = new int[][]{{1, 1}, {1, 0}};
    int[][] res = this.matrixPow.apply(m, n - 1);

    return res[0][0];
}
```

@tab Go
```go
// 时间复杂度：O(log(n))
// 空间复杂度：O(1)
func fib(n int) int {
    if n < 2 {
        return n
    }
    
    matrixMultiply := func(a, b [][]int) [][]int {
        c := make([][]int, 2)
        c[0], c[1] = []int{0, 0}, []int{0, 0}
        
        for i := range 2 {
            for j := range 2 {
                c[i][j] = a[i][0]*b[0][j] + a[i][1]*b[1][j]
            }
        }
        
        return c
    }
	matrixPow := func(a [][]int, n int) [][]int {
        ret := make([][]int, 2)
        ret[0], ret[1] = []int{1, 0}, []int{0, 1}
        
        for n > 0 {
            if n&1 != 0 {
                ret = matrixMultiply(ret, a)
            }
            n >>= 1
            a = matrixMultiply(a, a)
        }
        
        return ret
    }
    
    m := make([][]int, 2)
    m[0], m[1] = []int{1, 1}, []int{1, 0}
    res := matrixPow(m, n-1)
    
    return res[0][0]
}
```
:::

### 方法 4: 通项公式
::: code-tabs
@tab Rust
```rust
/// 时间复杂度：O(?)
/// 空间复杂度：O(1)
pub fn fib(n: i32) -> i32 {
    let sqrt_5 = 5_f64.sqrt();
    let fib_n = ((1.0 + sqrt_5) / 2.0).powi(n) - ((1.0 - sqrt_5) / 2.0).powi(n);

    (fib_n / sqrt_5).round() as i32
}
```

@tab Java
```java
/**
 * 时间复杂度：O(?)
 * 空间复杂度：O(1)
 */
public int fib(int n) {
    double sqrt5 = Math.sqrt(5);
    double fibN = Math.pow((1 + sqrt5) / 2, n) - Math.pow((1 - sqrt5) / 2, n);

    return (int) Math.round(fibN / sqrt5);
}
```

@tab Go
```go
// 时间复杂度：O(?)
// 空间复杂度：O(1)
func fib(n int) int {
    sqrt5 := math.Sqrt(5)
    fibN := math.Pow((1+sqrt5)/2, float64(n)) - math.Pow((1-sqrt5)/2, float64(n))
    
    return int(math.Round(fibN / sqrt5))
}
```
:::