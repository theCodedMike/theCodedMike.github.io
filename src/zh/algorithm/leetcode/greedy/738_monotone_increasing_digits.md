---
title: 738, 单调递增的数字
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

## 一、题目描述
当且仅当每个相邻位数上的数字`x`和`y`满足`x <= y`时，我们称这个整数是**单调递增**的。

给定一个整数`n`，返回*小于或等于`n`的最大数字，且数字呈**单调递增***。

**示例 1**
输入: n = 10
输出: 9

**示例 2**
输入: n = 1234
输出: 1234

**示例 3**
输入: n = 332
输出: 299

**提示**
- `0 <= n <= 10⁹`

**相关主题**
- 贪心
- 数学


## 二、题解
### 方法 1: 暴力解法
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

### 方法 2: 贪心
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