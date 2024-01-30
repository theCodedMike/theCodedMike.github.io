---
title: 40, 组合总和II
icon: discover
date: 2024-01-30
order: 4
sticky: true
category: backtracking
tag: 
  - medium
  - array
  - backtracking
---

## 一、题目描述
给定一个候选人编号的集合`candidates`和一个目标数`target`，找出`candidates`中所有可以使数字和为`target`的组合。

`candidates`中的每个数字在每个组合中只能使用**一次**。

**注意**：解集不能包含重复的组合。

**示例 1**
输入: candidates = [10, 1, 2, 7, 6, 1, 5], target = 8
输出:
```text
[
  [1,1,6],
  [1,2,5],
  [1,7],
  [2,6]
]
```

**示例 2**
输入: candidates = [2, 5, 2, 1, 2], target = 5
输出:
```text
[
  [1,2,2],
  [5]
]
```

**提示**
- `1 <= candidates.length <= 100`
- `1 <= candidates[i] <= 50`
- `1 <= target <= 30`

**相关主题**
- 数组
- 回溯


## 二、题解
### 方法 1: 回溯
::: code-tabs
@tab Rust
```rust
pub fn combination_sum2(candidates: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
    //Self::backtracking_1(candidates, target)
    Self::backtracking_2(candidates, target)
}

fn backtracking_1(mut candidates: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
    candidates.sort_unstable();

    const BACKTRACK: fn(usize, &[i32], i32, &mut Vec<i32>, &mut Vec<Vec<i32>>) =
        |idx, candidates, target, combine, res| {
            if target == 0 {
                res.push(combine.clone());
                return;
            }

            for i in idx..candidates.len() {
                if i > idx && candidates[i] == candidates[i - 1] {
                    continue;
                }

                if target < candidates[i] {
                    break;
                }

                combine.push(candidates[i]);
                BACKTRACK(i + 1, candidates, target - candidates[i], combine, res);
                combine.pop();
            }
        };
    let mut res = vec![];

    BACKTRACK(0, &candidates, target, &mut vec![], &mut res);

    res
}

fn backtracking_2(candidates: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
    let freq = candidates
        .into_iter()
        .fold(BTreeMap::new(), |mut map, val| {
            map.entry(val).and_modify(|freq| *freq += 1).or_insert(1);
            map
        })
        .into_iter()
        .collect::<Vec<_>>();

    const BACKTRACK: fn(usize, &[(i32, i32)], i32, &mut Vec<i32>, &mut Vec<Vec<i32>>) =
        |idx, freq, target, combine, res| {
            if target == 0 {
                res.push(combine.clone());
                return;
            }

            if idx == freq.len() || target < freq[idx].0 {
                return;
            }

            BACKTRACK(idx + 1, freq, target, combine, res);

            let most = std::cmp::min(target / freq[idx].0, freq[idx].1);
            for i in 1..=most {
                combine.push(freq[idx].0);
                BACKTRACK(idx + 1, freq, target - i * freq[idx].0, combine, res);
            }

            for _ in 1..=most {
                combine.pop();
            }
        };
    let mut res = vec![];

    BACKTRACK(0, &freq, target, &mut vec![], &mut res);

    res
}
```

@tab Java
```java
public List<List<Integer>> combinationSum2(int[] candidates, int target) {
    //return this.backtracking1(candidates, target);
    return this.backtracking2(candidates, target);
}

@FunctionalInterface
interface QuintConsumer<A, B, C, D, E> {
    void accept(A a, B b, C c, D d, E e);
}

QuintConsumer<Integer, int[], Integer, List<Integer>, List<List<Integer>>> backtrack1 =
        (idx, candidates, target, combine, res) -> {
            if (target == 0) {
                res.add(new ArrayList<>(combine));
                return;
            }

            for (int i = idx; i < candidates.length; i++) {
                if (i > idx && candidates[i] == candidates[i - 1]) {
                    continue;
                }

                if (target < candidates[i]) {
                    break;
                }

                combine.addLast(candidates[i]);
                this.backtrack1.accept(i + 1, candidates, target - candidates[i], combine, res);
                combine.removeLast();
            }
        };

List<List<Integer>> backtracking1(int[] candidates, int target) {
    Arrays.sort(candidates);
    List<List<Integer>> res = new ArrayList<>();

    this.backtrack1.accept(0, candidates, target, new ArrayList<>(), res);

    return res;
}


QuintConsumer<Integer, int[][], Integer, List<Integer>, List<List<Integer>>> backtrack2 =
        (idx, freq, target, combine, res) -> {
            if (target == 0) {
                res.add(new ArrayList<>(combine));
                return;
            }

            if (idx == freq.length || target < freq[idx][0]) {
                return;
            }

            this.backtrack2.accept(idx + 1, freq, target, combine, res);

            int most = Math.min(target / freq[idx][0], freq[idx][1]);
            for (int i = 1; i <= most; i++) {
                combine.addLast(freq[idx][0]);
                this.backtrack2.accept(idx + 1, freq, target - i * freq[idx][0], combine, res);
            }
            
            for (int i = 1; i <= most; i++) {
                combine.removeLast();
            }
        };

List<List<Integer>> backtracking2(int[] candidates, int target) {
    TreeMap<Integer, Integer> map = new TreeMap<>();
    for (int candidate : candidates) {
        map.put(candidate, map.getOrDefault(candidate, 0) + 1);
    }
    int[][] freq = map.keySet().stream().map(k -> new int[]{k, map.get(k)}).toArray(int[][]::new);

    List<List<Integer>> res = new ArrayList<>();
    this.backtrack2.accept(0, freq, target, new ArrayList<>(), res);

    return res;
}
```
:::