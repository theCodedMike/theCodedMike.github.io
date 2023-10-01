---
title: 367, 有效的完全平方数
icon: discover
date: 2023-10-01
order: 4
sticky: true
category: array
tag: 
  - easy
  - math
  - binary search
---


## 一、题目描述
给你一个正整数 num 。如果 num 是一个完全平方数，则返回 true ，否则返回 false 。

完全平方数 是一个可以写成某个整数的平方的整数。换句话说，它可以写成某个整数和自身的乘积。

不能使用任何内置的库函数，如 sqrt 。

**示例 1:**
输入: x = 16
输出: true
解释: 返回 true ，因为 4 * 4 = 16 且 4 是一个整数。

**示例 2:**
输入: x = 14
输出: false
解释: 返回 false ，因为 3.742 * 3.742 = 14 但 3.742 不是一个整数。

**提示:**

- 1 <= x <= 2³¹ - 1


**相关主题**

- 数学
- 二分查找

## 二、题解
### 方法 1: 二分查找
::: code-tabs
@tab Rust
```rust
pub fn is_perfect_square(num: i32) -> bool {
    //Self::binary_search_1(num)
    Self::binary_search_2(num)
}
pub fn binary_search_1(num: i32) -> bool {
    let num = num as i64;
    let mut left = 1_i64;
    let mut right = num + 1;
    while left < right {
        let mid = left + (right - left) / 2;
        let square = mid * mid;
        if square < num {
            left = mid + 1;
        } else if square > num {
            right = mid;
        } else {
            return true;
        }
    }
    false
}
pub fn binary_search_2(num: i32) -> bool {
    let num = num as i64;
    let mut left = 1;
    let mut right = num;
    while left <= right {
        let mid = left + (right - left) / 2;
        let square = mid * mid;
        if square < num {
            left = mid + 1;
        } else if square > num {
            right = mid - 1;
        } else {
            return true;
        }
    }
    false
}
```

@tab Java
```java
public boolean isPerfectSquare(int num) {
    //return this.binarySearch1(num);
    return this.binarySearch2(num);
}
public boolean binarySearch1(int num) {
    long number = (long) num;
    long left = 1;
    long right = number + 1;
    while (left < right) {
        long mid = left + (right - left) / 2;
        long square = mid * mid;
        if (square < number) {
            left = mid + 1;
        } else if (square > number) {
            right = mid;
        } else {
            return true;
        }
    }
    return false;
}
public boolean binarySearch2(int num) {
    long number = (long) num;
    long left = 1;
    long right = number;
    while (left <= right) {
        long mid = left + (right - left) / 2;
        long square = mid * mid;
        if (square < number) {
            left = mid + 1;
        } else if (square > number) {
            right = mid - 1;
        } else {
            return true;
        }
    }
    return false;
}
```
:::