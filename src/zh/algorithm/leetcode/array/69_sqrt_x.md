---
title: 69, x的平方根
icon: discover
date: 2023-09-30
order: 3
sticky: true
category: array
tag: 
  - easy
  - math
  - binary search
---


## 一、题目描述
给你一个非负整数 x ，计算并返回 x 的 算术平方根 。

由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。

注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。

**示例 1:**
输入: x = 4
输出: 2
解释: 4的平方根是2，所以返回2.

**示例 2:**
输入: x = 8
输出: 2
解释: 8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。

**提示:**

- 0 <= x <= 2³¹ - 1


**相关主题**

- 数学
- 二分查找

## 二、题解
### 方法 1: 二分查找

::: code-tabs
@tab Rust
```rust
pub fn my_sqrt(x: i32) -> i32 {
    //Self::binary_search_1(x)
    Self::binary_search_2(x)
}

pub fn binary_search_1(x: i32) -> i32 {
    let x = x as i64;
    let mut left = 0_i64; // 这里为i64是因为x有可能为i32::MAX，+1会溢出，当然mid*mid也有可能溢出
    let mut right = x + 1; // 这里+1是为了左闭右开，因为当x为1时，此时right就必须为x+1

    while left < right {
        let mid = left + (right - left) / 2;
        let square = mid * mid;
        if square > x {
            right = mid;
        } else if square < x {
            left = mid + 1;
        } else {
            return mid as i32;
        }
    }

    left as i32 - 1
}

pub fn binary_search_2(x: i32) -> i32 {
    let x = x as i64; // 这里为i64是因为mid*mid有可能溢出
    let mut left = 0_i64;
    let mut right = x;

    while left <= right {
        let mid = left + (right - left) / 2;
        let square = mid * mid;
        if square > x {
            right = mid - 1;
        } else if square < x {
            left = mid + 1;
        } else {
            return mid as i32;
        }
    }

    left as i32 - 1
}
```

@tab Java
```java
public int mySqrt(int x) {
    //return this.binarySearch1(x);
    return this.binarySearch2(x);
}

public int binarySearch1(int x) {
    long len = (long)x;
    long left = 0;
    long right = len + 1; // 左闭右开，right需要为len+1

    while (left < right) {
        long mid = left + (right - left) / 2;
        long square = mid * mid;
        if (square > len) {
            right = mid;
        } else if (square < len) {
            left = mid + 1;
        } else {
            return (int) mid;
        }
    }

    return (int) (left - 1);
}

public int binarySearch2(int x) {
    long len = (long)x;
    long left = 0;
    long right = len;

    while (left <= right) {
        long mid = left + (right - left) / 2;
        long square = mid * mid;
        if (square > len) {
            right = mid - 1;
        } else if (square < len) {
            left = mid + 1;
        } else {
            return (int)mid;
        }
    }

    return (int)left - 1;
}
```
:::