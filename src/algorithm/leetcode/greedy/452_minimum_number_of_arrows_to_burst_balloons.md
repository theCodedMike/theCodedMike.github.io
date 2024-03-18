---
title: 452, Minimum Number of Arrows to Burst Balloons
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

## I Problem
There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array `points` where `points[i] = [xstart, xend]` denotes a balloon whose **horizontal diameter** stretches between `xstart` and `xend`. You do not know the exact y-coordinates of the balloons.

Arrows can be shot up **directly vertically** (in the positive y-direction) from different points along the x-axis. A balloon with `xstart` and `xend` is **burst** by an arrow shot at `x` if `xstart <= x <= xend`. There is **no limit** to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.

Given the array `points`, return *the **minimum** number of arrows that must be shot to burst all balloons*.

**Example 1**
Input: points = [[10, 16], [2, 8], [1, 6], [7, 12]]
Output: 2
Explanation: The balloons can be burst by 2 arrows:
- Shoot an arrow at `x = 6`, bursting the balloons `[2, 8]` and `[1, 6]`.
- Shoot an arrow at `x = 11`, bursting the balloons `[10, 16]` and `[7, 12]`.

**Example 2**
Input: points = [[1, 2], [3, 4], [5, 6], [7, 8]]
Output: 4
Explanation: One arrow needs to be shot for each balloon for a total of `4` arrows.

**Example 3**
Input: points = [[1, 2], [2, 3], [3, 4], [4, 5]]
Output: 2
Explanation: The balloons can be burst by 2 arrows:
- Shoot an arrow at `x = 2`, bursting the balloons `[1, 2]` and `[2, 3]`.
- Shoot an arrow at `x = 4`, bursting the balloons `[3, 4]` and `[4, 5]`.

**Constraints**
- `1 <= points.length <= 10⁵`
- `points[i].length == 2`
- `-2³¹ <= xstart < xend <= 2³¹ - 1`

**Related Topics**
- Greedy
- Array
- Sorting


## II Solution
### Approach 1: Brute Force
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n^2)
/// Space Complexity: O(n)
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
 * Time Complexity：O(n^2)
 * Space Complexity：O(n)
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
// Time Complexity: O(n^2)
// Space Complexity: O(n)
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

### Approach 2: Greedy
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n*log(n))
/// Space Complexity: O(n)
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
 * Time Complexity：O(n*log(n))
 * Space Complexity：O(n)
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
// Time Complexity: O(n*log(n))
// Space Complexity: O(n)
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
