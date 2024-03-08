---
title: 135, Candy
icon: discover
date: 2024-03-08
order: 8
sticky: true
category: greedy
tag: 
  - hard
  - array
  - greedy
---

## I Problem
There are `n` children standing in a line. Each child is assigned a rating value given in the integer array `ratings`.

You are giving candies to these children subjected to the following requirements:
- Each child must have at least one candy.
- Children with a higher rating get more candies than their neighbors.

Return *the minimum number of candies you need to have to distribute the candies to the children*.

**Example 1**
Input: ratings = [1, 0, 2]
Output: 5
Explanation: You can allocate to the first, second and third child with `2, 1, 2` candies respectively.

**Example 2**
Input: ratings = [1, 2, 2]
Output: 4
Explanation: You can allocate to the first, second and third child with `1, 2, 1` candies respectively. The third child gets `1` candy because it satisfies the above two conditions.

**Constraints**
- `n == ratings.length`
- `1 <= n <= 2 * 10⁴`
- `0 <= ratings[i] <= 2 * 10⁴`

**Related Topics**
- Greedy
- Array

## II Solution
### Approach 1: Double Traverse
::: code-tabs
@tab Rust
```rust
pub fn candy(ratings: Vec<i32>) -> i32 {
    let len = ratings.len();
    let mut left = vec![1; len];

    for i in 1..len {
        if ratings[i - 1] < ratings[i] {
            left[i] = left[i - 1] + 1;
        }
    }

    let (mut right, mut res) = (0, 0);
    for i in (0..len).rev() {
        if i != len - 1 && ratings[i] > ratings[i + 1] {
            right += 1;
        } else {
            right = 1;
        }
        res += std::cmp::max(right, left[i]);
    }

    res
}
```

@tab Java
```java
public int candy(int[] ratings) {
    int len = ratings.length;
    int[] left = new int[len];

    for (int i = 0; i < len; i++) {
        if (i != 0 && ratings[i - 1] < ratings[i]) {
            left[i] = left[i - 1] + 1;
        } else {
            left[i] = 1;
        }
    }

    int res = 0, right = 0;
    for (int i = len - 1; i >= 0; i--) {
        if (i != len - 1 && ratings[i] > ratings[i + 1]) {
            right++;
        } else {
            right = 1;
        }
        res += Math.max(right, left[i]);
    }

    return res;
}
```

@tab Go
```go
func candy(ratings []int) int {
    size := len(ratings)
    left := make([]int, size)

    for i := 0; i < size; i++ {
        if i != 0 && ratings[i-1] < ratings[i] {
            left[i] = left[i-1] + 1
        } else {
            left[i] = 1
        }
    }
    
    res, right := 0, 0
    for i := size - 1; i >= 0; i-- {
        if i != size-1 && ratings[i] > ratings[i+1] {
            right++
        } else {
            right = 1
        }
        res += max(right, left[i])
    }
    
    return res
}
```
:::

### Approach 2: Single Traverse
::: code-tabs
@tab Rust
```rust
pub fn candy(ratings: Vec<i32>) -> i32 {
    let (mut res, len) = (1, ratings.len());
    let (mut inc, mut dec, mut pre) = (1, 0, 1);

    for i in 1..len {
        if ratings[i - 1] <= ratings[i] {
            dec = 0;
            pre = if ratings[i - 1] == ratings[i] {
                1
            } else {
                pre + 1
            };
            res += pre;
            inc = pre;
        } else {
            dec += 1;
            if dec == inc {
                dec += 1;
            }
            res += dec;
            pre = 1;
        }
    }

    res
}
```

@tab Java
```java
public int candy(int[] ratings) {
    int res = 1, len = ratings.length;
    int inc = 1, dec = 0, pre = 1;

    for (int i = 1; i < len; i++) {
        if (ratings[i - 1] <= ratings[i]) {
            dec = 0;
            pre = ratings[i - 1] == ratings[i] ? 1 : pre + 1;
            res += pre;
            inc = pre;
        } else {
            dec++;
            if (dec == inc) {
                dec++;
            }
            res += dec;
            pre = 1;
        }
    }

    return res;
}
```

@tab Go
```go
func candy(ratings []int) int {
    res, size := 1, len(ratings)
    inc, dec, pre := 1, 0, 1
    
    for i := 1; i < size; i++ {
        if ratings[i-1] <= ratings[i] {
            dec = 0
            if ratings[i-1] == ratings[i] {
                pre = 1
            } else {
                pre++
            }
            res += pre
            inc = pre
        } else {
            dec++
            if dec == inc {
                dec++
            }
            res += dec
            pre = 1
        }
    }
    
    return res
}
```
:::