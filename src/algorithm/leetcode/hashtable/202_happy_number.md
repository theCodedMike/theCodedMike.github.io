---
title: 202, Happy Number
icon: discover
date: 2023-11-10
order: 7
sticky: true
category: hashtable
tag: 
  - easy
  - hash table
  - math
  - two pointers
---

## I Problem
Write an algorithm to determine if a number `n` is happy.

A **happy number** is a number defined by the following process:
- Starting with any positive integer, replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals `1`(where it will stay), or it **loops endlessly in a cycle** which does not include `1`.
- Those numbers for which this process **ends in 1** are happy.

Return `true` if `n` is a happy number, and `false` if not.

**Example 1**
Input: n = 19
Output: true
Explanation:
1² + 9² = 82
8² + 2² = 68
6² + 8² = 100
1² + 0² + 0² = 1

**Example 2**
Input: n = 2
Output: false

**Constraints**
- `1 <= n <= 2³¹ - 1`

**Related Topics**
- Hash Table
- Math
- Two Pointers

## II Solution
::: code-tabs
@tab Rust
```rust
pub fn get_next(mut n: i32) -> i32 {
    let mut sum = 0;

    while n != 0 {
        let i = n % 10;
        sum += i * i;
        n /= 10;
    }

    sum
}
```

@tab Java
```java
public int getNext(int n) {
    int sum = 0;

    while (n != 0) {
        int i = n % 10;
        sum += i * i;
        n /= 10;
    }

    return sum;
}
```
:::

### Approach 1: Use Hash
::: code-tabs
@tab Rust
```rust
pub fn is_happy(n: i32) -> bool {
    let mut set = HashSet::new();

    while n != 1 && !set.contains(&n) {
        set.insert(n);
        n = Self::get_next(n);
    }

    n == 1
}
```

@tab Java
```java
public boolean isHappy(int n) {
    Set<Integer> set = new HashSet<>();

    while (n != 1 && !set.contains(n)) {
        set.add(n);
        n = this.getNext(n);
    }

    return n == 1;
}
```
:::

### Approach 2: Two Pointers
::: code-tabs
@tab Rust
```rust
pub fn is_happy(n: i32) -> bool {
    let mut slow = n;
    let mut fast = n;

    loop {
        slow = Self::get_next(slow);
        fast = Self::get_next(Self::get_next(fast));
        if slow == fast || fast == 1 {
            break;
        }
    }

    fast == 1
}
```

@tab Java
```java
public boolean isHappy(int n) {
    int slow = n;
    int fast = n;

    do {
        slow = this.getNext(slow);
        fast = this.getNext(this.getNext(fast));
    } while (slow != fast && fast != 1);

    return fast == 1;
}
```
:::