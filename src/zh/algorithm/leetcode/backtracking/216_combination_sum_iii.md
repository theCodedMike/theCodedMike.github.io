---
title: 216, 组合总和III
icon: discover
date: 2024-02-01
order: 5
sticky: true
category: backtracking
tag: 
  - medium
  - array
  - backtracking
---

## 一、题目描述
找出所有相加之和为`n`的`k`个数的组合，且满足下列条件：
- 只使用数字`1`到`9`
- 每个数字**最多使用一次**

返回*所有可能的有效组合的列表*。该列表不能包含相同的组合两次，组合可以以任何顺序返回。

**示例 1**
输入: k = 3, n = 7
输出: [[1, 2, 4]]
解释: `1 + 2 + 4 = 7`，没有其他符合的组合了。

**示例 2**
输入: k = 3, n = 9
输出: [[1, 2, 6], [1, 3, 5], [2, 3, 4]]
解释:
```text
1 + 2 + 6 = 9
1 + 3 + 5 = 9
2 + 3 + 4 = 9
```
没有其他符合的组合了。

**示例 3**
输入: k = 4, n = 1
输出: []
解释: 不存在有效的组合。在[1, 9]范围内使用`4`个不同的数字，我们可以得到的最小和是`1 + 2 + 3 + 4 = 10`，因为 10 > 1`，没有有效的组合。

**提示**
- `2 <= k <= 9`
- `1 <= n <= 60`

**相关主题**
- 数组
- 回溯


## 二、题解
### 方法 1: 回溯
::: code-tabs
@tab Rust
```rust
pub fn combination_sum3(k: i32, n: i32) -> Vec<Vec<i32>> {
    const DFS: fn(i32, i32, i32, &mut Vec<i32>, &mut Vec<Vec<i32>>) =
        |idx, k, n, combine, res| {
            if k == 0 {
                if n == 0 {
                    res.push(combine.clone());
                }
                return;
            }

            for i in idx..=9 {
                if n < i || (n == i && k != 1) {
                    break;
                }
                combine.push(i);
                DFS(i + 1, k - 1, n - i, combine, res);
                combine.pop();
            }
        };
    let mut res = vec![];

    DFS(1, k, n, &mut vec![], &mut res);

    res
}
```

@tab Java
```java
@FunctionalInterface
interface QuintConsumer<A, B, C, D, E> {
    void accept(A a, B b, C c, D d, E e);
}

QuintConsumer<Integer, Integer, Integer, List<Integer>, List<List<Integer>>> dfs =
        (idx, k, n, combine, res) -> {
            if (k == 0) {
                if (n == 0) {
                    res.add(new ArrayList<>(combine));
                }
                return;
            }

            for (int i = idx; i <= 9; i++) {
                if (n < i || (n == i && k != 1)) {
                    break;
                }
                combine.addLast(i);
                this.dfs.accept(i + 1, k - 1, n - i, combine, res);
                combine.removeLast();
            }
        };

public List<List<Integer>> combinationSum3(int k, int n) {
    List<List<Integer>> res = new ArrayList<>();

    this.dfs.accept(1, k, n, new ArrayList<>(), res);

    return res;
}
```
:::

### 方法 2: 子集枚举
::: code-tabs
@tab Rust
```rust
pub fn combination_sum3(k: i32, n: i32) -> Vec<Vec<i32>> {
    let mut res = vec![];
    let mut combine = vec![];

    let check = |mask, k, n, combine: &mut Vec<i32>| {
        combine.clear();
        let mut sum = 0;

        for i in 0..9 {
            if (1 << i) & mask != 0 {
                sum += i + 1;
                combine.push(i + 1);
            }
        }

        combine.len() as i32 == k && sum == n
    };

    for mask in 0..(1 << 9) {
        if check(mask, k, n, &mut combine) {
            res.push(combine.clone());
        }
    }

    res
}
```

@tab Java
```java
@FunctionalInterface
interface QuadrPredicate<A, B, C, D> {
    boolean test(A a, B b, C c, D d);
}

QuadrPredicate<Integer, Integer, Integer, List<Integer>> check =
        (mask, k, n, combine) -> {
            combine.clear();
            int sum = 0;

            for (int i = 0; i < 9; i++) {
                if (((1 << i) & mask) != 0) {
                    sum += i + 1;
                    combine.add(i + 1);
                }
            }

            return combine.size() == k && sum == n;
        };

public List<List<Integer>> combinationSum3(int k, int n) {
    List<List<Integer>> res = new ArrayList<>();
    List<Integer> combine = new ArrayList<>();

    for (int mask = 0, max = 1 << 9; mask < max; mask++) {
        if (this.check.test(mask, k, n, combine)) {
            res.add(new ArrayList<>(combine));
        }
    }
    
    return res;
}
```
:::