---
title: 406, Queue Reconstruction by Height
icon: discover
date: 2024-03-12
order: 9
sticky: true
category: greedy
tag: 
  - medium
  - binary indexed tree
  - segment tree
  - array
  - sorting
---

## I Problem
You are given an array of people, `people`, which are the attributes of some people in a queue (not necessarily in order). Each `people[i] = [hi, ki]` represents the `iᵗʰ` person of height `hi` with **exactly** `ki` other people in front who have a height greater than or equal to `hi`.

Reconstruct and return *the queue that is represented by the input array `people`*. The returned queue should be formatted as an array `queue`, where `queue[j] = [hj, kj]` is the attributes of the `jᵗʰ` person in the queue (`queue[0]` is the person at the front of the queue).

**Example 1**
Input: people = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]
Output: [[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]]
Explanation:
Person `0` has height `5` with no other people taller or the same height in front.
Person `1` has height `7` with no other people taller or the same height in front.
Person `2` has height `5` with two persons taller or the same height in front, which is person `0` and `1`.
Person `3` has height `6` with one person taller or the same height in front, which is person `1`.
Person `4` has height `4` with four people taller or the same height in front, which are people `0, 1, 2, and 3`.
Person `5` has height `7` with one person taller or the same height in front, which is person `1`.
Hence [[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]] is the reconstructed queue.

**Example 2**
Input: people = [[6, 0], [5, 0], [4, 0], [3, 2], [2, 2], [1, 4]]
Output: [[4, 0], [5, 0], [2, 2], [3, 2], [1, 4], [6, 0]]

**Constraints**
- `1 <= people.length <= 2000`
- `0 <= hi <= 10⁶`
- `0 <= ki < people.length`
- It is guaranteed that the queue can be reconstructed.

**Related Topics**
- Binary Indexed Tree
- Segment Tree
- Array
- Sorting

## II Solution
### Approach 1: Consider From Low to High
::: code-tabs
@tab Rust
```rust
pub fn reconstruct_queue(people: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
    people.sort_unstable_by(|a, b| a[0].cmp(&b[0]).then(b[1].cmp(&a[1])));
    let len = people.len();
    let mut res = vec![vec![]; len];

    for p in people {
        let mut spaces = p[1] + 1;
        for i in 0..len {
            if res[i].is_empty() {
                spaces -= 1;
                if spaces == 0 {
                    res[i] = p;
                    break;
                }
            }
        }
    }

    res
}
```

@tab Java
```java
public int[][] reconstructQueue(int[][] people) {
    Arrays.sort(
            people,
            Comparator.comparingInt((int[] o) -> o[0]).thenComparing((o1, o2) -> o2[1] - o1[1])
    );
    int len = people.length;
    int[][] res = new int[len][];

    for (int[] p : people) {
        int spaces = p[1] + 1;
        for (int i = 0; i < len; i++) {
            if (res[i] == null) {
                spaces--;
                if (spaces == 0) {
                    res[i] = p;
                    break;
                }
            }
        }
    }

    return res;
}
```

@tab Go
```go
func reconstructQueue(people [][]int) [][]int {
    sort.Slice(people, func(i, j int) bool {
        a, b := people[i], people[j]
        return a[0] < b[0] || a[0] == b[0] && a[1] > b[1]
    })
    size := len(people)
    res := make([][]int, size)

    for _, p := range people {
        spaces := p[1] + 1
        for i := 0; i < size; i++ {
            if res[i] == nil {
                spaces--
                if spaces == 0 {
                    res[i] = p
                    break
                }
            }
        }
    }

    return res
}
```
:::

### Approach 2: Consider From High to Low
::: code-tabs
@tab Rust
```rust
pub fn reconstruct_queue(people: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
    people.sort_unstable_by(|a, b| b[0].cmp(&a[0]).then(a[1].cmp(&b[1])));
    let mut res = Vec::with_capacity(people.len());

    for p in people {
        let idx = p[1] as usize;
        res.insert(idx, p);
    }

    res
}
```

@tab Java
```java
public int[][] reconstructQueue(int[][] people) {
    Arrays.sort(
            people,
            Comparator.comparingInt((int[] o) -> o[0]).reversed().thenComparingInt(o -> o[1])
    );
    int len = people.length;
    List<int[]> res = new ArrayList<>(len);

    for (int[] p : people) {
        res.add(p[1], p);
    }

    return res.toArray(new int[len][]);
}
```

@tab Go
```go
func reconstructQueue(people [][]int) [][]int {
    sort.Slice(people, func(i, j int) bool {
        a, b := people[i], people[j]
        return a[0] > b[0] || a[0] == b[0] && a[1] < b[1]
    })
    res := make([][]int, 0)
    
    for _, p := range people {
        idx := p[1]
        res = append(res[:idx], append([][]int{p}, res[idx:]...)...)
    }

    return res
}
```
:::