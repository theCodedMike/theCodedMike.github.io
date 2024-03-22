---
title: 56, 合并区间
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

## 一、题目描述
以数组`intervals`表示若干个区间的集合，其中单个区间为`intervals[i] = [starti, endi]`。请你合并所有重叠的区间，并返回*一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间*。 

**示例 1**
输入: intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
输出: [[1, 6], [8, 10], [15, 18]]
解释: 区间`[1, 3]`和`[2, 6]`重叠, 将它们合并为`[1, 6]`.

**示例 2**
输入: intervals = [[1, 4], [4, 5]]
输出: [[1, 5]]
解释: 区间`[1, 4]`和`[4, 5]`可被视为重叠区间。

**提示**
- `1 <= intervals.length <= 10⁴`
- `intervals[i].length == 2`
- `0 <= starti <= endi <= 10⁴`

**相关主题**
- 数组
- 排序


## 二、题解
### 方法 1: 暴力解法
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

### 方法 2: 排序
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