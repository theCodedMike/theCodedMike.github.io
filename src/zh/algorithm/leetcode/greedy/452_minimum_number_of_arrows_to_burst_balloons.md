---
title: 452, 用最少数量的箭引爆气球
icon: discover
date: 2024-03-18
order: 12
sticky: true
category: greedy
tag: 
  - medium
  - array
  - greedy
  - sorting
---

## 一、题目描述
有一些球形气球贴在一堵用`XY`平面表示的墙面上。墙面上的气球记录在整数数组`points`，其中`points[i] = [xstart, xend]`表示水平直径在`xstart`和`xend`之间的气球。你不知道气球的确切`y`坐标。

一支弓箭可以沿着`x`轴从不同点**完全垂直**地射出。在坐标`x`处射出一支箭，若有一个气球的直径的开始和结束坐标为`xstart`，`xend`，且满足`xstart ≤ x ≤ xend`，则该气球会被**引爆**。可以射出的弓箭的数量**没有限制**。弓箭一旦被射出之后，可以无限地前进。

给你一个数组`points`，*返回引爆所有气球所必须射出的**最小**弓箭数*。

**示例 1**
输入: points = [[10, 16], [2, 8], [1, 6], [7, 12]]
输出: 2
解释: 气球可以用2支箭来爆破:
-在`x = 6`处射出箭，击破气球`[2, 8]`和`[1, 6]`。
-在`x = 11`处发射箭，击破气球`[10, 16]`和`[7, 12]`。

**示例 2**
输入: points = [[1, 2], [3, 4], [5, 6], [7, 8]]
输出: 4
解释: 每个气球需要射出一支箭，总共需要`4`支箭。

**示例 3**
输入: points = [[1, 2], [2, 3], [3, 4], [4, 5]]
输出: 2
解释: 气球可以用2支箭来爆破:
- 在`x = 2`处发射箭，击破气球`[1, 2]`和`[2, 3]`。
- 在`x = 4`处射出箭，击破气球`[3, 4]`和`[4, 5]`。

**提示**
- `1 <= points.length <= 10⁵`
- `points[i].length == 2`
- `-2³¹ <= xstart < xend <= 2³¹ - 1`

**相关主题**
- 贪心
- 数组
- 排序


## 二、题解
### 方法 1: 暴力解法
::: code-tabs
@tab Rust
```rust
/// 时间复杂度：O(n^2)
/// 空间复杂度：O(n)
pub fn find_min_arrow_shots(points: Vec<Vec<i32>>) -> i32 {
    points.sort_unstable_by(|a, b| a[1].cmp(&b[1]));

    let len = points.len();
    let mut burst = vec![false; len];
    let (mut idx, mut res) = (0, 0);
    let has_false = |idx: &mut usize, burst: &[bool]| {
        for i in 0..len {
            if !burst[i] {
                *idx = i;
                return true;
            }
        }
        false
    };

    while has_false(&mut idx, &burst) {
        res += 1;
        for j in idx..len {
            if points[j][0] <= points[idx][1] {
                burst[j] = true;
            }
        }
    }

    res
}
```

@tab Java
```java
BiPredicate<int[], boolean[]> hasFalse = (tup, burst) -> {
    for (int i = 0; i < burst.length; i++) {
        if (!burst[i]) {
            tup[0] = i;
            return true;
        }
    }
    return false;
};
/**
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(n)
 */
public int findMinArrowShots(int[][] points) {
    Arrays.sort(points, Comparator.comparingInt(a -> a[1]));

    int len = points.length;
    boolean[] burst = new boolean[len];
    int[] tup = new int[2];

    while (this.hasFalse.test(tup, burst)) {
        tup[1]++;
        for (int j = tup[0], i = tup[0]; j < len; j++) {
            if (points[j][0] <= points[i][1]) {
                burst[j] = true;
            }
        }
    }

    return tup[1];
}
```

@tab Go
```go
// 时间复杂度：O(n^2)
// 空间复杂度：O(n)
func findMinArrowShots(points [][]int) int {
    slices.SortFunc(points, func(a, b []int) int {
        return cmp.Compare(a[1], b[1])
    })

    size := len(points)
    burst := make([]bool, size)
    idx, res := 0, 0
    hasFalse := func() bool {
        for i, v := range burst {
            if !v {
                idx = i
                return true
            }
        }
        return false
    }

    for hasFalse() {
        res++
        for j := idx; j < size; j++ {
            if points[j][0] <= points[idx][1] {
                burst[j] = true
            }
        }
    }

    return res
}
```
:::

### 方法 2: 贪心
::: code-tabs
@tab Rust
```rust
/// 时间复杂度：O(n*log(n))
/// 空间复杂度：O(n)
pub fn find_min_arrow_shots(points: Vec<Vec<i32>>) -> i32 {
    points.sort_unstable_by(|a, b| a[1].cmp(&b[1]));

    let (mut pos, mut res) = (points[0][1], 1);
    for p in points {
        if p[0] > pos {
            res += 1;
            pos = p[1];
        }
    }

    res
}
```

@tab Java
```java
/**
 * 时间复杂度：O(n*log(n))
 * 空间复杂度：O(n)
 */
public int findMinArrowShots(int[][] points) {
    Arrays.sort(points, Comparator.comparingInt(a -> a[1]));

    int pos = points[0][1], res = 1;
    for (int[] p : points) {
        if (p[0] > pos) {
            res++;
            pos = p[1];
        }
    }

    return res;
}
```

@tab Go
```go
// 时间复杂度：O(n*log(n))
// 空间复杂度：O(n)
func findMinArrowShots(points [][]int) int {
    slices.SortFunc(points, func(a, b []int) int {
        return cmp.Compare(a[1], b[1])
    })

    pos, res := points[0][1], 1  
    for _, p := range points {
        if p[0] > pos {
            res++
            pos = p[1]
        }
    }
    
    return res
}
```
:::
