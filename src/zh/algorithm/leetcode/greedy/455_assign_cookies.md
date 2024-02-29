---
title: 455, 分发饼干
icon: discover
date: 2024-02-26
order: 1
sticky: true
category: greedy
tag: 
  - easy
  - greedy
  - array
  - two pointers
  - sorting
---

## 一、题目描述
假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。

对每个孩子`i`，都有一个胃口值`g[i]`，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干`j`，都有一个尺寸`s[j]`。如果`s[j] >= g[i]`，我们可以将这个饼干`j`分配给孩子`i`，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。

**示例 1**
输入: g = [1, 2, 3], s = [1, 1]
输出: 1
解释: 你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。所以你应该输出1。

**示例 2**
输入: g = [1, 2], s = [1, 2, 3]
输出: 2
解释: 你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。你拥有的饼干数量和尺寸都足以让所有孩子满足。所以你应该输出2.

**提示**
- `1 <= g.length <= 3 * 10⁴`
- `0 <= s.length <= 3 * 10⁴`
- `1 <= g[i], s[j] <= 2³¹ - 1`

**相关主题**
- 贪心
- 数组
- 双指针
- 排序

## 二、题解
### 方法 1: 暴力解法
::: code-tabs
@tab Rust
```rust
pub fn find_content_children(g: Vec<i32>, s: Vec<i32>) -> i32 {
    s.sort_unstable();
    let mut map = g
        .into_iter()
        .fold(BTreeMap::new(), |mut map, i| {
            map.entry(i).and_modify(|c| *c += 1).or_insert(1);
            map
        });
    let mut res = 0;

    for j in s {
        if map.is_empty() {
            break;
        }

        if let Some(mut entry) = map.first_entry() {
            if j >= *entry.key() {
                res += 1;
                *entry.get_mut() -= 1;
                if *entry.get() == 0 {
                    entry.remove_entry();
                }
            }
        }
    }

    res
}
```

@tab Java
```java
public int findContentChildren(int[] g, int[] s) {
    Arrays.sort(s);
    TreeMap<Integer, Integer> map = new TreeMap<>();
    for (int i : g) {
        map.put(i, map.getOrDefault(i, 0) + 1);
    }

    int res = 0;
    for (int j : s) {
        if (map.isEmpty()) {
            break;
        }

        Integer key = map.firstKey();
        if (j >= key) {
            res++;
            map.put(key, map.get(key) - 1);
            if (map.get(key) == 0) {
                map.remove(key);
            }
        }
    }

    return res;
}
```
:::

### 方法 2: 双指针 + 贪心算法
::: code-tabs
@tab Rust
```rust
pub fn find_content_children(g: Vec<i32>, s: Vec<i32>) -> i32 {
    g.sort_unstable();
    s.sort_unstable();

    let mut res = 0;
    let (m, n) = (g.len(), s.len());
    let (mut i, mut j) = (0, 0);
    while i < m && j < n {
        while j < n && g[i] > s[j] {
            j += 1;
        }
        if j < n {
            res += 1;
        }
        i += 1;
        j += 1;
    }

    res
}
```

@tab Java
```java
public int findContentChildren(int[] g, int[] s) {
    Arrays.sort(g);
    Arrays.sort(s);

    int res = 0;
    int m = g.length;
    int n = s.length;
    for (int i = 0, j = 0; i < m && j < n; i++, j++) {
        while (j < n && g[i] > s[j]) {
            j++;
        }
        if (j < n) {
            res++;
        }
    }
    
    return res;
}
```
:::

### 方法 3: 双指针 + 贪心算法
::: code-tabs
@tab Rust
```rust
pub fn find_content_children(g: Vec<i32>, s: Vec<i32>) -> i32 {
    g.sort_unstable();
    s.sort_unstable();

    let mut j = 0;
    for i in s {
        if j < g.len() && g[j] <= i {
            j += 1;
        }
    }
    
    j as i32
}
```

@tab Java
```java
public int findContentChildren(int[] g, int[] s) {
    Arrays.sort(g);
    Arrays.sort(s);

    int j = 0;
    for (int i : s) {
        if (j < g.length && g[j] <= i) {
            j++;
        }
    }

    return j;
}
```
:::