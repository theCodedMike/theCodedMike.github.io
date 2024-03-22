---
title: 56, Merge Intervals
icon: discover
date: 2024-03-23
order: 15
sticky: true
category: greedy
tag: 
  - medium
  - array
  - sorting
---

## I Problem
Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return *an array of the non-overlapping intervals that cover all the intervals in the input*.

**Example 1**
Input: intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
Output: [[1, 6], [8, 10], [15, 18]]
Explanation: Since intervals `[1, 3]` and `[2, 6]` overlap, merge them into `[1, 6]`.

**Example 2**
Input: intervals = [[1, 4], [4, 5]]
Output: [[1, 5]]
Explanation: Intervals `[1, 4]` and `[4, 5]` are considered overlapping.

**Constraints**
- `1 <= intervals.length <= 10⁴`
- `intervals[i].length == 2`
- `0 <= starti <= endi <= 10⁴`

**Related Topics**
- Array
- Sorting


## II Solution
### Approach 1: Brute Force
::: code-tabs
@tab Rust
```rust
pub fn merge(intervals: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
    intervals.sort_unstable();

    let (mut start, mut end) = (i32::MAX, i32::MIN);
    let (mut res, len) = (vec![], intervals.len());
    for i in 0..len {
        start = std::cmp::min(start, intervals[i][0]);
        end = std::cmp::max(end, intervals[i][1]);

        if (i < len - 1 && end < intervals[i + 1][0]) || (i == len - 1) {
            res.push(vec![start, end]);
            (start, end) = (i32::MAX, i32::MIN);
        }
    }

    res
}
```

@tab Java
```java
public int[][] merge(int[][] intervals) {
    Arrays.sort(intervals, Comparator.comparingInt(a -> a[0]));

    int start = Integer.MAX_VALUE, end = Integer.MIN_VALUE;
    List<int[]> res = new ArrayList<>();
    for (int i = 0, len = intervals.length; i < len; i++) {
        start = Math.min(start, intervals[i][0]);
        end = Math.max(end, intervals[i][1]);

        if ((i < len - 1 && end < intervals[i + 1][0]) || i == len - 1) {
            res.add(new int[]{start, end});
            start = Integer.MAX_VALUE;
            end = Integer.MIN_VALUE;
        }
    }

    return res.toArray(new int[res.size()][]);
}
```

@tab Go
```go
func merge(intervals [][]int) [][]int {
    slices.SortFunc(intervals, func(a, b []int) int {
        return a[0] - b[0]
    })

    start, end := math.MaxInt, math.MinInt
    res := make([][]int, 0)
    for i, size := 0, len(intervals); i < size; i++ {
        start = min(start, intervals[i][0])
        end = max(end, intervals[i][1])
        
        if (i < size-1 && end < intervals[i+1][0]) || (i == size-1) {
            res = append(res, []int{start, end})
            start, end = math.MaxInt, math.MinInt
        }
    }

    return res
}
```
:::

### Approach 2: Sorting
::: code-tabs
@tab Rust
```rust
pub fn merge(intervals: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
    intervals.sort_unstable();

    let mut res: Vec<Vec<i32>> = vec![];
    for interval in intervals {
        let (l, r) = (interval[0], interval[1]);
        let len = res.len();

        if len == 0 || res[len - 1][1] < l {
            res.push(vec![l, r]);
        } else {
            res[len - 1][1] = std::cmp::max(res[len - 1][1], r);
        }
    }

    res
}
```

@tab Java
```java
public int[][] merge(int[][] intervals) {
    Arrays.sort(intervals, Comparator.comparingInt(a -> a[0]));

    List<int[]> res = new ArrayList<>();
    for (int[] interval : intervals) {
        int l = interval[0], r = interval[1];

        if (res.isEmpty() || res.getLast()[1] < l) {
            res.add(new int[]{l, r});
        } else {
            res.getLast()[1] = Math.max(res.getLast()[1], r);
        }
    }

    return res.toArray(new int[res.size()][]);
}
```

@tab Go
```go
func merge(intervals [][]int) [][]int {
    slices.SortFunc(intervals, func(a, b []int) int {
        return a[0] - b[0]
    })

    res := make([][]int, 0)
    for _, interval := range intervals {
        l, r := interval[0], interval[1]
        size := len(res)

        if size == 0 || res[size-1][1] < l {
            res = append(res, []int{l, r})
        } else {
            res[size-1][1] = max(res[size-1][1], r)
        }
    }

    return res
}
```
:::