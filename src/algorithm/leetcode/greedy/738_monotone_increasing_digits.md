---
title: 738, Monotone Increasing Digits
icon: discover
date: 2024-03-04
order: 5
sticky: true
category: greedy
tag: 
  - medium
  - greedy
  - math
---

## I Problem
An integer has **monotone increasing digits** if and only if each pair of adjacent digits `x` and `y` satisfy `x <= y`.

Given an integer `n`, return *the largest number that is less than or equal to `n` with **monotone increasing digits***.

**Example 1**
Input: n = 10
Output: 9

**Example 2**
Input: n = 1234
Output: 1234

**Example 3**
Input: n = 332
Output: 299

**Constraints**
- `0 <= n <= 10⁹`

**Related Topics**
- Greedy
- Math


## II Solution
### Approach 1: Brute Force
::: code-tabs
@tab Rust
```rust
pub fn monotone_increasing_digits(n: i32) -> i32 {
    let mut res = n;
    let is_monotone_increasing = |mut m: i32| {
        let mut rem_count = 0;
        let (mut curr, mut prev) = (0, 0);

        while m != 0 {
            prev = curr;
            curr = m % 10;
            rem_count += 1;

            if rem_count >= 2 && curr > prev {
                return false;
            }
            m /= 10;
        }

        true
    };

    loop {
        if is_monotone_increasing(n) {
            res = n;
            break;
        }
        n -= 1;
    }

    res
}
```

@tab Java
```java
Predicate<Integer> isMonotoneIncreasing = m -> {
    int remCount = 0;
    int curr = 0, prev = 0;

    while (m != 0) {
        prev = curr;
        curr = m % 10;
        remCount++;

        if (remCount >= 2 && curr > prev) {
            return false;
        }
        m /= 10;
    }

    return true;
};

public int monotoneIncreasingDigits(int n) {
    int res = n;

    while (true) {
        if (this.isMonotoneIncreasing.test(n)) {
            res = n;
            break;
        }
        n--;
    }

    return res;
}
```
:::

### Approach 2: Greedy
::: code-tabs
@tab Rust
```rust
pub fn monotone_increasing_digits(n: i32) -> i32 {
    let mut str_n = n.to_string();
    let bytes_n = unsafe { str_n.as_bytes_mut() };
    let len = bytes_n.len();

    let mut i = 1;
    while i < len && bytes_n[i - 1] <= bytes_n[i] {
        i += 1;
    }

    if i < len {
        while i > 0 && bytes_n[i - 1] > bytes_n[i] {
            bytes_n[i - 1] -= 1;
            i -= 1;
        }
        for j in i + 1..len {
            bytes_n[j] = b'9';
        }
    }

    str_n.parse::<i32>().unwrap()
}
```

@tab Java
```java
public int monotoneIncreasingDigits(int n) {
    byte[] bytes_n = String.valueOf(n).getBytes();
    int len = bytes_n.length;

    int i = 1;
    while (i < len && bytes_n[i - 1] <= bytes_n[i]) {
        i++;
    }

    if (i < len) {
        while (i > 0 && bytes_n[i - 1] > bytes_n[i]) {
            bytes_n[i - 1]--;
            i--;
        }
        for (int j = i + 1; j < len; j++) {
            bytes_n[j] = (byte)'9';
        }
    }
    
    return Integer.parseInt(new String(bytes_n));
}
```
:::