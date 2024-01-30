---
title: 40, Combination Sum II
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

## I Problem
Given a collection of candidate numbers (`candidates`) and a target number (`target`), find all unique combinations in `candidates` where the candidate numbers sum to `target`.

Each number in `candidates` may only be used **once** in the combination.

**Note**: The solution set must not contain duplicate combinations.

**Example 1**
Input: candidates = [10, 1, 2, 7, 6, 1, 5], target = 8
Output:
```text
[
  [1,1,6],
  [1,2,5],
  [1,7],
  [2,6]
]
```

**Example 2**
Input: candidates = [2, 5, 2, 1, 2], target = 5
Output:
```text
[
  [1,2,2],
  [5]
]
```

**Constraints**
- `1 <= candidates.length <= 100`
- `1 <= candidates[i] <= 50`
- `1 <= target <= 30`

**Related Topics**
- Array
- Backtracking


## II Solution
### Approach 1: Backtracking
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
