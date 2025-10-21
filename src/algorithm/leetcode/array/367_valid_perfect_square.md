---
title: 367, Valid Perfect Square
icon: discover
date: 2023-10-01
order: 5
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

**Related Topics:**

- Math
- Binary Search

## II Solution

### Approach 1: Binary Search

::: code-tabs
@tab Rust

```rust
pub fn is_perfect_square(num: i32) -> bool {
    //Self::left_close_right_open(num)
    Self::left_close_right_close(num)
}

pub fn left_close_right_open(num: i32) -> bool {
    let num = num as i64;
    let (mut left, mut right) = (0_i64, num + 1);

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

pub fn left_close_right_close(num: i32) -> bool {
    let num = num as i64;
    let (mut left, mut right) = (0, num);

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
    //return this.leftCloseRightOpen(num);
    return this.leftCloseRightClose(num);
}

public boolean leftCloseRightOpen(int num) {
    long number = (long) num;
    long left = 0;
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

public boolean leftCloseRightClose(int num) {
    long number = (long) num;
    long left = 0;
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

@tab Go

```go
func isPerfectSquare(num int) bool {
    //return leftCloseRightOpen(num)
    return leftCloseRightClose(num)
}

func leftCloseRightOpen(num int) bool {
    number := int64(num)
    left, right := int64(0), number + 1

    for left < right {
        mid := left + (right-left)/2
        square := mid * mid
        if square > number {
            right = mid
        } else if square < number {
            left = mid + 1
        } else {
            return true
        }
    }

    return false;
}

func leftCloseRightClose(num int) bool {
    number := int64(num)
    left, right := int64(0), number

    for left <= right {
        mid := left + (right-left)/2
        square := mid * mid
        if square > number {
            right = mid - 1
        } else if square < number {
            left = mid + 1
        } else {
            return true
        }
    }

    return false;
}
```

@tab C\#

```csharp
public bool IsPerfectSquare(int num)
{
    //return LeftCloseRightOpen(num);
    return LeftCloseRightClose(num);
}

bool LeftCloseRightOpen(int num)
{
    long number = num;
    (long left, long right) = (0, number + 1);

    while (left < right)
    {
        long mid = left + (right - left) / 2;
        long square = mid * mid;
        if (square > number)
            right = mid;
        else if (square < number)
            left = mid + 1;
        else
            return true;
    }
    
    return false;
}

bool LeftCloseRightClose(int num)
{
    long number = num;
    (long left, long right) = (0, number);

    while (left <= right)
    {
        long mid = left + (right - left) / 2;
        long square = mid * mid;
        if (square > number)
            right = mid - 1;
        else if (square < number)
            left = mid + 1;
        else
            return true;
    }
    
    return false;
}
```

@tab C++

```cpp
bool isPerfectSquare(int num) {
    //return leftCloseRightOpen(num);
    return leftCloseRightClose(num);
}

bool leftCloseRightOpen(int num) {
    const long number = num;
    auto[left, right] = std::make_pair(0, number + 1);

    while (left < right) {
        const auto mid = left + (right - left) / 2;
        const auto square = mid * mid;
        if (square > number)
            right = mid;
        else if (square < number)
            left = mid + 1;
        else
            return true;
    }

    return false;
}

bool leftCloseRightClose(int x) {
    const long number = x;
    auto[left, right] = std::make_pair(0, number);

    while (left <= right) {
        const auto mid = left + (right - left) / 2;
        const auto square = mid * mid;
        if (square > number)
            right = mid - 1;
        else if (square < number)
            left = mid + 1;
        else
            return true;
    }

    return false;
}
```

:::
