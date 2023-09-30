---
title: 69, Sqrt(x)
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


## 1 Problem
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

**Example 1:**
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.

**Example 2:**
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

**Constraints:**

- 0 <= x <= 2³¹ - 1


**Related Topics**

- Math
- Binary Search

## 2 Solution
### Approach 1: Binary Search

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