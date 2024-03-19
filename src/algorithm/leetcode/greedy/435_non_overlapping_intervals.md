---
title: 435, Non-overlapping Intervals
icon: discover
date: 2024-03-20
order: 13
sticky: true
category: greedy
tag: 
  - medium
  - array
  - greedy
  - dynamic programming
---

## I Problem
Given an array of intervals `intervals` where `intervals[i] = [starti, endi]`, return *the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping*. 

**Example 1**
Input: intervals = [[1, 2], [2, 3], [3, 4], [1, 3]]
Output: 1
Explanation: `[1, 3]` can be removed and the rest of the intervals are non-overlapping.

**Example 2**
Input: intervals = [[1, 2], [1, 2], [1, 2]]
Output: 2
Explanation: You need to remove two `[1, 2]` to make the rest of the intervals non-overlapping.

**Example 3**
Input: intervals = [[1, 2], [2, 3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

**Constraints**
- `1 <= intervals.length <= 10⁵`
- `intervals[i].length == 2`
- `-5 * 10⁴ <= starti < endi <= 5 * 10⁴`

**Related Topics**
- Greedy
- Array
- Dynamic Programming
- Sorting


## II Solution
### Approach 1: Dynamic Programming
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n^2)
/// Space Complexity: O(n)
pub fn erase_overlap_intervals(intervals: Vec<Vec<i32>>) -> i32 {
    intervals.sort_unstable_by(|a, b| a[0].cmp(&b[0]));

    let len = intervals.len();
    let mut f = vec![1; len];
    let mut max = 1;

    for i in 1..len {
        for j in 0..i {
            if intervals[i][0] >= intervals[j][1] {
                f[i] = std::cmp::max(f[i], f[j] + 1);
                if f[i] > max {
                    max = f[i];
                }
            }
        }
    }

    (len - max) as i32
}
```

@tab Java
```java
/**
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 */
public int eraseOverlapIntervals(int[][] intervals) {
    Arrays.sort(intervals, Comparator.comparingInt(a -> a[0]));

    int len = intervals.length;
    int[] f = new int[len];
    Arrays.fill(f, 1);
    int max = 1;

    for (int i = 1; i < len; i++) {
        for (int j = 0; j < i; j++) {
            if (intervals[i][0] >= intervals[j][1]) {
                f[i] = Math.max(f[i], f[j] + 1);
                if (f[i] > max) {
                    max = f[i];
                }
            }
        }
    }

    return len - max;
}
```

@tab Go
```go
// Time Complexity: O(n^2)
// Space Complexity: O(n)
func eraseOverlapIntervals(intervals [][]int) int {
    slices.SortFunc(intervals, func(a, b []int) int {
        return a[0] - b[0]
    })

    size := len(intervals)
    f := make([]int, size)
    f[0] = 1
    maxElem := 1

    for i := 1; i < size; i++ {
        for j := 0; j < i; j++ {
            if intervals[i][0] >= intervals[j][1] {
                f[i] = max(f[i], f[j]+1)
                if f[i] > maxElem {
                    maxElem = f[i]
                }
            }
        }
    }

    return size - maxElem
}
```
:::

### Approach 2: Greedy
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n*log(n))
/// Space Complexity: O(log(n))
pub fn erase_overlap_intervals(intervals: Vec<Vec<i32>>) -> i32 {
    intervals.sort_unstable_by(|a, b| a[1].cmp(&b[1]));

    let mut end = intervals[0][1];
    let mut res = 0;

    for i in 1..intervals.len() {
        if end <= intervals[i][0] {
            end = intervals[i][1];
        } else {
            res += 1;
        }
    }

    res
}
```

@tab Java
```java
/**
 * Time Complexity: O(n*log(n))
 * Space Complexity: O(log(n))
 */
public int eraseOverlapIntervals(int[][] intervals) {
    Arrays.sort(intervals, Comparator.comparingInt(a -> a[1]));

    int end = intervals[0][1];
    int res = 0;

    for (int i = 1; i < intervals.length; i++) {
        if (end <= intervals[i][0]) {
            end = intervals[i][1];
        } else {
            res++;
        }
    }

    return res;
}
```

@tab Go
```go
// Time Complexity: O(n*log(n))
// Space Complexity: O(log(n))
func eraseOverlapIntervals(intervals [][]int) int {
    slices.SortFunc(intervals, func(a, b []int) int {
        return a[1] - b[1]
    })

    end := intervals[0][1]
    res := 0

    for i, size := 1, len(intervals); i < size; i++ {
        if end <= intervals[i][0] {
            end = intervals[i][1]
        } else {
            res++
        }
    }

    return res
}
```
:::