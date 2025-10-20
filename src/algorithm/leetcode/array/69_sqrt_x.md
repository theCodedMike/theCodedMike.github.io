---
title: 69, Sqrt(x)
icon: discover
date: 2023-09-30
order: 4
sticky: true
category: array
tag: 
  - easy
  - math
  - binary search
---


## I Problem

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

**Related Topics:**

- Math
- Binary Search

## II Solution

### Approach 1: Binary Search

::: code-tabs
@tab Rust

```rust
pub fn my_sqrt(x: i32) -> i32 {
    //Self::left_close_right_open(x)
    Self::left_close_right_close(x)
}

pub fn left_close_right_open(x: i32) -> i32 {
    let x = x as i64;
    let (mut left, mut right) = (0_i64, x + 1);

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

pub fn left_close_right_close(x: i32) -> i32 {
    let x = x as i64;
    let (mut left, mut right) = (0_i64, x);

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
    //return this.leftCloseRightOpen(x);
    return this.leftCloseRightClose(x);
}

public int leftCloseRightOpen(int x) {
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

    return (int)left - 1;
}

public int leftCloseRightClose(int x) {
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

@tab Go

```go
func mySqrt(x int) int {
    //return leftCloseRightOpen(x)
    return leftCloseRightClose(x)
}

func leftCloseRightOpen(x int) int {
    var newX = int64(x)
    left, right := int64(0), newX+1

    for left < right {
        mid := left + (right-left)/2
        square := mid * mid
        if square > newX {
            right = mid
        } else if square < newX {
            left = mid + 1
        } else {
            return int(mid)
        }
    }

    return int(left - 1)
}

func leftCloseRightClose(x int) int {
    var newX = int64(x)
    left, right := int64(0), newX

    for left <= right {
        mid := left + (right-left)/2
        square := mid * mid
        if square > newX {
            right = mid - 1
        } else if square < newX {
            left = mid + 1
        } else {
            return int(mid)
        }
    }

    return int(left - 1)
}
```

@tab C\#

```csharp
public int MySqrt(int x)
{
    //return LeftCloseRightOpen(x);
    return LeftCloseRightClose(x);
}

int LeftCloseRightOpen(int x)
{
    long newX = x;
    (long left, long right) = (0, newX + 1);

    while (left < right)
    {
        long mid = left + (right - left) / 2;
        long square = mid * mid;
        if (square > newX)
            right = mid;
        else if (square < newX)
            left = mid + 1;
        else
            return (int)mid;
    }

    return (int)left - 1;
}

int LeftCloseRightClose(int x)
{
    long newX = x;
    (long left, long right) = (0, newX);

    while (left <= right)
    {
        long mid = left + (right - left) / 2;
        long square = mid * mid;
        if (square > newX)
            right = mid - 1;
        else if (square < newX)
            left = mid + 1;
        else
            return (int)mid;
    }

    return (int)left - 1;
}
```

@tab C++

```cpp
int mySqrt(int x) {
    //return leftCloseRightOpen(x);
    return leftCloseRightClose(x);
}

int leftCloseRightOpen(int x) {
    const long new_x = x;
    auto[left, right] = std::make_pair(0, new_x + 1);

    while (left < right) {
        const auto mid = left + (right - left) / 2;
        const auto square = mid * mid;
        if (square > new_x)
            right = mid;
        else if (square < new_x)
            left = mid + 1;
        else
            return mid;
    }

    return left - 1;
}

int leftCloseRightClose(int x) {
    const long new_x = x;
    auto[left, right] = std::make_pair(0, new_x);

    while (left <= right) {
        const auto mid = left + (right - left) / 2;
        const auto square = mid * mid;
        if (square > new_x)
            right = mid - 1;
        else if (square < new_x)
            left = mid + 1;
        else
            return mid;
    }
    
    return left - 1;
}
```

:::
