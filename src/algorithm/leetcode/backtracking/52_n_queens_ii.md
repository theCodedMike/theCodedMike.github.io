---
title: 52, N-Queens II
icon: discover
date: 2024-02-12
order: 13
sticky: true
category: backtracking
tag: 
  - hard
  - backtracking
---

## I Problem
The **n-queens** puzzle is the problem of placing `n`queens on an `n x n` chessboard such that no two queens attack each other.

Given an integer `n`, return *the number of distinct solutions to the **n-queens puzzle***.

**Example 1**
![](../../../../assets/leetcode/n_queens_51.png)
Input: n = 4
Output: 2
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown.

**Example 2**
Input: n = 1
Output: 1

**Constraints**
- `1 <= n <= 9`

**Related Topics**
- Backtracking


## II Solution
### Approach 1: Backtracking
::: code-tabs
@tab Rust
```rust
pub fn total_n_queens(n: i32) -> i32 {
    const DFS: fn(i32, i32, &mut Vec<(i32, i32)>, &mut i32) = 
        |row, len, pos, total| {
            if row == len {
                *total += 1;
                return;
            }

            for col in 0..len {
                if pos.iter().any(|&(r, c)| {
                    // same column
                    if c == col {
                        return true;
                    }
                    let slope = (row - r) as f64 / (col - c) as f64;
                    // same diagonal
                    slope == 1.0 || slope == -1.0
                }) {
                    continue;
                }

                pos.push((row, col));
                DFS(row + 1, len, pos, total);
                pos.pop();
            }
        };
    let mut res = 0;

    DFS(0, n, &mut vec![], &mut res);

    res
}
```

@tab Java
```java
@FunctionalInterface
interface QuadrConsumer<A, B, C, D> {
    void accept(A a, B b, C c, D d);
}

QuadrConsumer<Integer, Integer, List<int[]>, int[]> dfs =
        (row, len, pos, total) -> {
            if (Objects.equals(row, len)) {
                total[0] += 1;
                return;
            }

            for (int col = 0; col < len; col++) {
                int finalCol = col;
                if (pos.stream().anyMatch(p -> {
                    // 同一列
                    if (p[1] == finalCol) {
                        return true;
                    }
                    double slope = (double) (row - p[0]) / (finalCol - p[1]);
                    // 同一斜线
                    return slope == 1 || slope == -1;
                })) {
                    continue;
                }

                pos.addLast(new int[]{row, col});
                this.dfs.accept(row + 1, len, pos, total);
                pos.removeLast();
            }
        };

public int totalNQueens(int n) {
    int[] res = new int[1];

    this.dfs.accept(0, n, new ArrayList<>(), res);

    return res[0];
}
```
:::