---
title: 367, Valid Perfect Square
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


## I Problem
Given a positive integer num, return true if num is a perfect square or false otherwise.

A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

You must not use any built-in library function, such as sqrt.

**Example 1:**
Input: num = 16
Output: true
Explanation: We return true because 4 * 4 = 16 and 4 is an integer.

**Example 2:**
Input: num = 14
Output: false
Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.

**Constraints:**

- 1 <= x <= 2³¹ - 1


**Related Topics**

- Math
- Binary Search

## II Solution
### Approach 1: Binary Search

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