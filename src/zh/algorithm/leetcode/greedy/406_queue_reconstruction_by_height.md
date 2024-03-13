---
title: 406, 根据身高重建队列
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

## 一、题目描述
假设有打乱顺序的一群人站成一个队列，数组`people`表示队列中一些人的属性（不一定按顺序）。每个`people[i] = [hi, ki]`表示第`i`个人的身高为`hi`，前面**正好**有`ki`个身高大于或等于`hi`的人。

请你重新构造并返回输入数组`people`所表示的队列。返回的队列应该格式化为数组`queue`，其中`queue[j] = [hj, kj]`是队列中第`j`个人的属性（`queue[0]`是排在队列前面的人）。

**示例 1**
输入: people = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]
输出: [[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]]
解释:
编号为`0`的人身高为`5`，没有身高更高或者相同的人排在他前面。
编号为`1`的人身高为`7`，没有身高更高或者相同的人排在他前面。
编号为`2`的人身高为`5`，有`2`个身高更高或者相同的人排在他前面，即编号为`0`和`1`的人。
编号为`3`的人身高为`6`，有`1`个身高更高或者相同的人排在他前面，即编号为`1`的人。
编号为`4`的人身高为`4`，有`4`个身高更高或者相同的人排在他前面，即编号为`0、1、2、3`的人。
编号为`5`的人身高为`7`，有`1`个身高更高或者相同的人排在他前面，即编号为`1`的人。
因此[[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]]是重新构造后的队列。

**示例 2**
输入: people = [[6, 0], [5, 0], [4, 0], [3, 2], [2, 2], [1, 4]]
输出: [[4, 0], [5, 0], [2, 2], [3, 2], [1, 4], [6, 0]]

**提示**
- `1 <= people.length <= 2000`
- `0 <= hi <= 10⁶`
- `0 <= ki < people.length`
- 题目数据确保队列可以被重建

**相关主题**
- 树状数组
- 线段树
- 数组
- 排序


## 二、题解
### 方法 1: 从低到高考虑
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

### 方法 2: 从高到低考虑
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