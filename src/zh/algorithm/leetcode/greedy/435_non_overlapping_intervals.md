---
title: 435, 无重叠区间
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

## 一、题目描述
给定一个区间的集合`intervals`，其中`intervals[i] = [starti, endi]`。返回*需要移除区间的最小数量，使剩余区间互不重叠*。

**示例 1**
输入: intervals = [[1, 2], [2, 3], [3, 4], [1, 3]]
输出: 1
解释: 移除`[1, 3]`后，剩下的区间没有重叠。

**示例 2**
输入: intervals = [[1, 2], [1, 2], [1, 2]]
输出: 2
解释: 你需要移除两个`[1, 2]`来使剩下的区间没有重叠。

**示例 3**
输入: intervals = [[1, 2], [2, 3]]
输出: 0
解释: 你不需要移除任何区间，因为它们已经是无重叠的了。

**提示**
- `1 <= intervals.length <= 10⁵`
- `intervals[i].length == 2`
- `-5 * 10⁴ <= starti < endi <= 5 * 10⁴`

**相关主题**
- 贪心
- 数组
- 动态规划
- 排序


## 二、题解
### 方法 1: 动态规划
::: code-tabs
@tab Rust
```rust
/// 时间复杂度：O(n^2)
/// 空间复杂度：O(n)
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
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(n)
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
// 时间复杂度：O(n^2)
// 空间复杂度：O(n)
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

### 方法 2: 贪心
::: code-tabs
@tab Rust
```rust
/// 时间复杂度：O(n*log(n))
/// 空间复杂度：O(log(n))
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
 * 时间复杂度：O(n*log(n))
 * 空间复杂度：O(log(n))
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
// 时间复杂度：O(n*log(n))
// 空间复杂度：O(log(n))
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