---
title: 135, 分发糖果
icon: discover
date: 2024-03-08
order: 8
sticky: true
category: greedy
tag: 
  - hard
  - array
  - greedy
---

## 一、题目描述
`n`个孩子站成一排。给你一个整数数组`ratings`表示每个孩子的评分。

你需要按照以下要求，给这些孩子分发糖果：
- 每个孩子至少分配到`1`个糖果。
- 相邻两个孩子评分更高的孩子会获得更多的糖果。

请你给每个孩子分发糖果，计算并返回需要准备的**最少糖果数目**。

**示例 1**
输入: ratings = [1, 0, 2]
输出: 5
解释: 你可以分别给第一个、第二个、第三个孩子分发`2、1、2`颗糖果。

**示例 2**
输入: ratings = [1, 2, 2]
输出: 4
解释: 你可以分别给第一个、第二个、第三个孩子分发`1、2、1`颗糖果。第三个孩子只得到`1`颗糖果，这满足题面中的两个条件。

**提示**
- `n == ratings.length`
- `1 <= n <= 2 * 10⁴`
- `0 <= ratings[i] <= 2 * 10⁴`

**相关主题**
- 贪心
- 数组


## 二、题解
### 方法 1: 遍历二次
::: code-tabs
@tab Rust
```rust
pub fn candy(ratings: Vec<i32>) -> i32 {
    let len = ratings.len();
    let mut left = vec![1; len];

    for i in 1..len {
        if ratings[i - 1] < ratings[i] {
            left[i] = left[i - 1] + 1;
        }
    }

    let (mut right, mut res) = (0, 0);
    for i in (0..len).rev() {
        if i != len - 1 && ratings[i] > ratings[i + 1] {
            right += 1;
        } else {
            right = 1;
        }
        res += std::cmp::max(right, left[i]);
    }

    res
}
```

@tab Java
```java
public int candy(int[] ratings) {
    int len = ratings.length;
    int[] left = new int[len];

    for (int i = 0; i < len; i++) {
        if (i != 0 && ratings[i - 1] < ratings[i]) {
            left[i] = left[i - 1] + 1;
        } else {
            left[i] = 1;
        }
    }

    int res = 0, right = 0;
    for (int i = len - 1; i >= 0; i--) {
        if (i != len - 1 && ratings[i] > ratings[i + 1]) {
            right++;
        } else {
            right = 1;
        }
        res += Math.max(right, left[i]);
    }

    return res;
}
```

@tab Go
```go
func candy(ratings []int) int {
    size := len(ratings)
    left := make([]int, size)

    for i := 0; i < size; i++ {
        if i != 0 && ratings[i-1] < ratings[i] {
            left[i] = left[i-1] + 1
        } else {
            left[i] = 1
        }
    }
    
    res, right := 0, 0
    for i := size - 1; i >= 0; i-- {
        if i != size-1 && ratings[i] > ratings[i+1] {
            right++
        } else {
            right = 1
        }
        res += max(right, left[i])
    }
    
    return res
}
```
:::

### 方法 2: 遍历一次
::: code-tabs
@tab Rust
```rust
pub fn candy(ratings: Vec<i32>) -> i32 {
    let (mut res, len) = (1, ratings.len());
    let (mut inc, mut dec, mut pre) = (1, 0, 1);

    for i in 1..len {
        if ratings[i - 1] <= ratings[i] {
            dec = 0;
            pre = if ratings[i - 1] == ratings[i] {
                1
            } else {
                pre + 1
            };
            res += pre;
            inc = pre;
        } else {
            dec += 1;
            if dec == inc {
                dec += 1;
            }
            res += dec;
            pre = 1;
        }
    }

    res
}
```

@tab Java
```java
public int candy(int[] ratings) {
    int res = 1, len = ratings.length;
    int inc = 1, dec = 0, pre = 1;

    for (int i = 1; i < len; i++) {
        if (ratings[i - 1] <= ratings[i]) {
            dec = 0;
            pre = ratings[i - 1] == ratings[i] ? 1 : pre + 1;
            res += pre;
            inc = pre;
        } else {
            dec++;
            if (dec == inc) {
                dec++;
            }
            res += dec;
            pre = 1;
        }
    }

    return res;
}
```

@tab Go
```go
func candy(ratings []int) int {
    res, size := 1, len(ratings)
    inc, dec, pre := 1, 0, 1
    
    for i := 1; i < size; i++ {
        if ratings[i-1] <= ratings[i] {
            dec = 0
            if ratings[i-1] == ratings[i] {
                pre = 1
            } else {
                pre++
            }
            res += pre
            inc = pre
        } else {
            dec++
            if dec == inc {
                dec++
            }
            res += dec
            pre = 1
        }
    }
    
    return res
}
```
:::