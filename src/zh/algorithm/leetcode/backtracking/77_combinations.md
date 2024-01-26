---
title: 77, 组合
icon: discover
date: 2024-01-26
order: 1
sticky: true
category: Backtracking
tag: 
  - medium
  - backtracking
---

## 一、题目描述
给定两个整数`n`和`k`，返回范围`[1, n]`中所有可能的`k`个数的组合。

你可以按**任何顺序**返回答案。

**示例 1**
输入: n = 4, k = 2
输出: [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]

**示例 2**
输入: n = 1, k = 1
输出: [[1]]

**提示**
- `1 <= n <= 20`
- `1 <= k <= n`

**相关主题**
- 回溯


## 二、题解
### 方法 1: 回溯
::: code-tabs
@tab Rust
```rust
pub fn combine(n: i32, k: i32) -> Vec<Vec<i32>> {
    const BACKTRACKING: fn(i32, i32, usize, &mut Vec<i32>, &mut Vec<Vec<i32>>) =
        |start, n, k, path, res| {
            // 剪枝
            if (n - start + 1) as usize + path.len() < k {
                return;
            }

            if path.len() == k {
                res.push(path.clone());
                return;
            }

            for i in start..=n {
                path.push(i);
                BACKTRACKING(i + 1, n, k, path, res);
                path.pop();
            }
        };

    let mut res = vec![];

    BACKTRACKING(1, n, k as usize, &mut vec![], &mut res);

    res
}
```

@tab Java
```java
@FunctionalInterface
interface QuintConsumer<A, B, C, D, E> {
    void accept(A a, B b, C c, D d, E e);
}

QuintConsumer<Integer, Integer, Integer, List<Integer>, List<List<Integer>>> recur = 
    (start, n, k, path, res) -> {
        // 剪枝
        if (n - start + 1 + path.size() < k) {
            return;
        }
    
        if (path.size() == k) {
            res.add(new ArrayList<>(path));
            return;
        }
    
        for (int i = start; i <= n; i++) {
            path.add(i);
            this.recur.accept(i + 1, n, k, path, res);
            path.removeLast();
        }
    };

public List<List<Integer>> combine(int n, int k) {
    List<List<Integer>> res = new ArrayList<>();

    this.recur.accept(1, n, k, new ArrayList<>(), res);

    return res;
}
```
:::

### 方法 2: 递归实现组合型枚举
::: code-tabs
@tab Rust
```rust
pub fn combine(n: i32, k: i32) -> Vec<Vec<i32>> {
    const DFS: fn(i32, i32, usize, &mut Vec<i32>, &mut Vec<Vec<i32>>) =
        |start, n, k, path, res| {
            // 剪枝
            if (n - start + 1) as usize + path.len() < k {
                return;
            }

            if path.len() == k {
                res.push(path.clone());
                return;
            }

            path.push(start);
            DFS(start + 1, n, k, path, res);
            path.pop();
            DFS(start + 1, n, k, path, res);
        };

    let mut res = vec![];

    DFS(1, n, k as usize, &mut vec![], &mut res);

    res
}
```

@tab Java
```java
QuintConsumer<Integer, Integer, Integer, List<Integer>, List<List<Integer>>> dfs = 
    (start, n, k, path, res) -> {
        // 剪枝
        if (n - start + 1 + path.size() < k) {
            return;
        }
    
        if (path.size() == k) {
            res.add(new ArrayList<>(path));
            return;
        }
    
        path.add(start);
        this.dfs.accept(start + 1, n, k, path, res);
        path.removeLast();
        this.dfs.accept(start + 1, n, k, path, res);
    };

public List<List<Integer>> combine(int n, int k) {
    List<List<Integer>> res = new ArrayList<>();

    this.dfs.accept(1, n, k, new ArrayList<>(), res);

    return res;
}
```
:::

### 方法 3: 非递归（字典序法）实现组合型枚举
::: code-tabs
@tab Rust
```rust
pub fn combine(n: i32, k: i32) -> Vec<Vec<i32>> {
    let mut res = vec![];
    let mut path = (1..=k)
        .into_iter()
        .fold(Vec::with_capacity(k + 1), |mut path, val| {
            path.push(val as i32);
            path
        });
    path.push(n + 1);

    let mut j = 0;
    while j < k {
        res.push(path[..k].to_vec());

        j = 0;
        while j < k && path[j] + 1 == path[j + 1] {
            path[j] = j as i32 + 1;
            j += 1;
        }

        path[j] += 1;
    }

    res
}
```

@tab Java
```java
public List<List<Integer>> combine(int n, int k) {
    List<List<Integer>> res = new ArrayList<>();
    List<Integer> path = new ArrayList<>(k + 1);
    for (int i = 1; i <= k; i++) {
        path.add(i);
    }
    path.add(n + 1);

    int j = 0;
    while (j < k) {
        res.add(new ArrayList<>(path.subList(0, k)));

        j = 0;
        while (j < k && path.get(j) + 1 == path.get(j + 1)) {
            path.set(j, j + 1);
            j++;
        }
        
        path.set(j, path.get(j) + 1);
    }

    return res;
}
```
:::