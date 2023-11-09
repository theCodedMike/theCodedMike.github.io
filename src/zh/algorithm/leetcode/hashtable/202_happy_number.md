---
title: 202, 快乐数
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

## 一、题目描述
编写一个算法来判断一个数`n`是不是快乐数。

「**快乐数**」的定义为：
- 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
- 然后重复这个过程直到这个数变为`1`，也可能是**无限循环**但始终变不到`1`。
- 如果这个过程的结果为`1`，那么这个数就是快乐数。

如果`n`是*快乐数*就返回`true`；不是则返回`false`。

**示例 1**
输入: n = 19
输出: true
解释:
1² + 9² = 82
8² + 2² = 68
6² + 8² = 100
1² + 0² + 0² = 1

**示例 2**
输入: n = 2
输出: false

**提示**
- `1 <= n <= 2³¹ - 1`

**相关主题**
- 哈希表
- 数学
- 双指针

## 二、题解
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

### 方法 1: 使用哈希
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

### 方法 2: 双指针
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