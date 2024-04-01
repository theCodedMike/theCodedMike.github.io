---
title: 1137, 第N个泰波那契数
icon: discover
date: 2024-04-01
order: 3
sticky: true
category: dynamic programming
tag: 
  - easy
  - math
  - dynamic programming
  - memoization
---

## 一、题目描述
泰波那契序列`Tn`定义如下：
T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2

给你整数`n`，请返回第`n`个泰波那契数`Tn`的值。

**示例 1**
输入: n = 4
输出: 4
解释:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4

**示例 2**
输入: n = 25
输出: 1389537

**提示**
- `0 <= n <= 37`
- 答案保证是一个`32`位整数，即`answer <= 2^31 - 1`。

**相关主题**
- 记忆化搜索
- 数学
- 动态规划


## 二、题解
### 方法 1: 动态规划
::: code-tabs
@tab Rust
```rust
pub fn tribonacci(n: i32) -> i32 {
    //Self::dp_recur(n)
    Self::dp_iter(n)
}

/// Time Complexity: O(n)
/// Space Complexity: O(n)
fn dp_recur(n: i32) -> i32 {
    let len = if n < 3 { 3 } else { n as usize + 1 };
    let mut cache = vec![-1; len];
    (cache[0], cache[1], cache[2]) = (0, 1, 1);

    const RECUR: fn(&mut [i64], usize) -> i64 = |cache, n| {
        if cache[n] != -1 {
            return cache[n];
        }

        let sum = RECUR(cache, n - 1) + RECUR(cache, n - 2) + RECUR(cache, n - 3);
        cache[n] = sum;

        sum
    };

    RECUR(&mut cache, n as usize) as i32
}

/// Time Complexity: O(n)
/// Space Complexity: O(1)
fn dp_iter(n: i32) -> i32 {
    match n {
        0 => 0,
        1 | 2 => 1,
        _ => {
            let (mut t0, mut t1, mut t2, mut sum) = (0_i64, 0, 1, 1);

            for _ in 2..n {
                (t0, t1, t2) = (t1, t2, sum);
                sum = t0 + t1 + t2;
            }

            sum as i32
        }
    }
}
```

@tab Java
```java
public int tribonacci(int n) {
    //return dpRecur(n);
    return dpIter(n);
}

BiFunction<long[], Integer, Long> recur = (cache, n) -> {
    if (cache[n] != -1) {
        return cache[n];
    }

    long sum = this.recur.apply(cache, n - 1) + this.recur.apply(cache, n - 2) + this.recur.apply(cache, n - 3);
    cache[n] = sum;

    return sum;
};

int dpRecur(int n) {
    int len = n < 3 ? 3 : n + 1;
    long[] cache = new long[len];
    for (int i = 0; i < len; i++) {
        if (i == 0) {
            cache[i] = 0;
        } else if (i == 1 || i == 2) {
            cache[i] = 1;
        } else {
            cache[i] = -1;
        }
    }

    return this.recur.apply(cache, n).intValue();
}

int dpIter(int n) {
    switch (n) {
        case 0 -> {
            return 0;
        }
        case 1, 2 -> {
            return 1;
        }
        default -> {
            long t0 = 0, t1 = 0, t2 = 1, sum = 1;

            for (int i = 2; i < n; i++) {
                t0 = t1;
                t1 = t2;
                t2 = sum;
                sum = t0 + t1 + t2;
            }

            return (int) sum;
        }
    }
}
```

@tab Go
```go
func tribonacci(n int) int {
    //return dpRecur(n)
    return dpIter(n)
}

func dpRecur(n int) int {
    size := n + 1
    if size < 3 {
        size = 3
    }

    cache := make([]int, size)
    for i := range size {
        if i == 0 {
            cache[i] = 0
        } else if i == 1 || i == 2 {
            cache[i] = 1
        } else {
            cache[i] = -1
        }
    }    

    var recur func([]int, int) int
    recur = func(cache []int, n int) int {
        if cache[n] != -1 {
            return cache[n]
        }    
        sum := recur(cache, n-1) + recur(cache, n-2) + recur(cache, n-3)
        cache[n] = sum    
        return sum
    }

    return recur(cache, n)
}

func dpIter(n int) int {
    switch n {
    case 0:
        return 0
    case 1, 2:
        return 1
    default:
        t0, t1, t2, sum := 0, 0, 1, 1

        for i := 2; i < n; i++ {
        	t0, t1, t2 = t1, t2, sum
        	sum = t0 + t1 + t2
        }

        return sum
    }
}
```
:::

### 方法 2: 矩阵快速幂
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(log(n))
/// Space Complexity: O(1)
pub fn tribonacci(n: i32) -> i32 {
    match n {
        0 => 0,
        1 | 2 => 1,
        _ => {
            let multiply = |a: &[Vec<i32>], b: &[Vec<i32>]| {
                let mut c = vec![vec![0; 3]; 3];
                for i in 0..3 {
                    for j in 0..3 {
                        c[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j] + a[i][2] * b[2][j];
                    }
                }
                c
            };

            let mut m = vec![vec![1, 1, 1], vec![1, 0, 0], vec![0, 1, 0]];
            let mut pow = || {
                let mut ret = vec![vec![1, 0, 0], vec![0, 1, 0], vec![0, 0, 1]];
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
            res[0][2]
        }
    }
}
```

@tab Java
```java
public int tribonacci(int n) {
    if (n == 0) {
        return 0;
    }
    if (n <= 2) {
        return 1;
    }

    BiFunction<int[][], int[][], int[][]> multiply = (a, b) -> {
        int[][] c = new int[3][3];
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                c[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j] + a[i][2] * b[2][j];
            }
        }
        return c;
    };

    int[][] m = new int[][]{new int[]{1, 1, 1}, new int[]{1, 0, 0}, new int[]{0, 1, 0}};
    BiFunction<int[][], Integer, int[][]> pow = (_m, _n) -> {
        int[][] ret = new int[][]{new int[]{1, 0, 0}, new int[]{0, 1, 0}, new int[]{0, 0, 1}};
        while (_n > 0) {
            if ((_n & 1) == 1) {
                ret = multiply.apply(ret, _m);
            }
            _n >>= 1;
            _m = multiply.apply(_m, _m);
        }
        return ret;
    };

    int[][] res = pow.apply(m, n);
    return res[0][2];
}
```

@tab Go
```go
func tribonacci(n int) int {
    if n == 0 {
        return 0
    }
    if n <= 2 {
        return 1
    }    

    multiply := func(a, b *[][]int) [][]int {
        c := make([][]int, 3)
        c[0], c[1], c[2] = []int{0, 0, 0}, []int{0, 0, 0}, []int{0, 0, 0}    
        for i := range 3 {
            for j := range 3 {
            	c[i][j] = (*a)[i][0]*(*b)[0][j] + (*a)[i][1]*(*b)[1][j] + (*a)[i][2]*(*b)[2][j]
            }
        }    
        return c
    }

    m := make([][]int, 3)
    m[0], m[1], m[2] = []int{1, 1, 1}, []int{1, 0, 0}, []int{0, 1, 0}
    pow := func() [][]int {
        ret := make([][]int, 3)
        ret[0], ret[1], ret[2] = []int{1, 0, 0}, []int{0, 1, 0}, []int{0, 0, 1}    
        for n > 0 {
            if n&1 == 1 {
                ret = multiply(&ret, &m)
            }
            n >>= 1
            m = multiply(&m, &m)
        }    
        return ret
    }

    res := pow()
    return res[0][2]
}
```
:::