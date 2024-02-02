---
title: 131, Palindrome Partitioning
icon: discover
date: 2024-02-02
order: 6
sticky: true
category: backtracking
tag: 
  - medium
  - string
  - dynamic programming
  - backtracking
---

## I Problem
Given a string `s`, partition `s` such that every substring of the partition is a **palindrome**. Return *all possible palindrome partitioning of `s`*.

**Example 1**
Input: s = "aab"
Output: [["a", "a", "b"],["aa", "b"]]

**Example 2**
Input: s = "a"
Output: [["a"]]

**Constraints**
- `1 <= s.length <= 16`
- `s` contains only lowercase English letters.

**Related Topics**
- String
- Dynamic Programming
- Backtracking


## II Solution
### Approach 1: Backtracking
::: code-tabs
@tab Rust
```rust
pub fn partition(s: String) -> Vec<Vec<String>> {
    const IS_PALINDROME: fn(&str) -> bool = |s| {
        let mut is_palindrome = true;
        let (mut i, mut j) = (0, s.len() - 1);

        while i < j {
            if &s[i..i + 1] != &s[j..j + 1] {
                is_palindrome = false;
            }
            (i, j) = (i + 1, j - 1)
        }

        is_palindrome
    };

    const DFS: for<'a> fn(usize, &'a str, &mut Vec<&'a str>, &mut Vec<Vec<String>>) =
        |i, s, combine, res| {
            if i == s.len() {
                res.push(combine.iter().map(|&s| s.to_string()).collect::<Vec<_>>());
                return;
            }

            for j in (i + 1)..=s.len() {
                let substring = &s[i..j];

                if IS_PALINDROME(substring) {
                    combine.push(substring);
                    DFS(j, s, combine, res);
                    combine.pop();
                }
            }
        };
    let mut res = vec![];

    DFS(0, &s, &mut vec![], &mut res);

    res
}
```

@tab Java
```java
Predicate<String> isPalindrome = (s) -> {
    int i = 0;
    int j = s.length() - 1;
    boolean isPalindrome = true;

    while (i < j) {
        if (s.charAt(i++) != s.charAt(j--)) {
            isPalindrome = false;
        }
    }

    return isPalindrome;
};

@FunctionalInterface
interface QuadrConsumer<A, B, C, D> {
    void accept(A a, B b, C c, D d);
}

QuadrConsumer<Integer, String, List<String>, List<List<String>>> dfs1 =
        (i, s, combine, res) -> {
            if (i == s.length()) {
                res.add(new ArrayList<>(combine));
                return;
            }

            for (int j = i + 1; j <= s.length(); j++) {
                String substring = s.substring(i, j);

                if (this.isPalindrome.test(substring)) {
                    combine.addLast(substring);
                    this.dfs1.accept(j, s, combine, res);
                    combine.removeLast();
                }
            }
        };

public List<List<String>> partition(String s) {
    List<List<String>> res = new ArrayList<>();

    this.dfs1.accept(0, s, new ArrayList<>(), res);

    return res;
}
```
:::

### Approach 2: Backtracking + Dynamic Programming
::: code-tabs
@tab Rust
```rust
pub fn partition(s: String) -> Vec<Vec<String>> {
    let len = s.len();
    let mut f = vec![vec![true; len]; len];

    for i in (0..len).rev() {
        for j in i + 1..len {
            f[i][j] = (&s[i..i + 1] == &s[j..j + 1]) && f[i + 1][j - 1];
        }
    }

    const DFS: fn(usize, &str, &mut Vec<String>, &mut Vec<Vec<String>>, &Vec<Vec<bool>>) =
        |i, s, combine, res, f| {
            if i == s.len() {
                res.push(combine.clone());
                return;
            }

            for j in i..s.len() {
                if f[i][j] {
                    combine.push(s[i..j + 1].to_string());
                    DFS(j + 1, s, combine, res, f);
                    combine.pop();
                }
            }
        };
    let mut res = vec![];

    DFS(0, &s, &mut vec![], &mut res, &f);

    res
}
```

@tab Java
```java
interface QuintConsumer<A, B, C, D, E> {
    void accept(A a, B b, C c, D d, E e);
}

QuintConsumer<Integer, String, List<String>, List<List<String>>, boolean[][]> dfs2 =
        (i, s, combine, res, f) -> {
            if (i == s.length()) {
                res.add(new ArrayList<>(combine));
                return;
            }

            for (int j = i; j < s.length(); j++) {
                if (f[i][j]) {
                    combine.addLast(s.substring(i, j + 1));
                    this.dfs2.accept(j + 1, s, combine, res, f);
                    combine.removeLast();
                }
            }
        };

public List<List<String>> partition(String s) {
    int len = s.length();
    boolean[][] f = new boolean[len][len];
    for (int i = 0; i < len; i++) {
        Arrays.fill(f[i], true);
    }

    for (int i = len - 1; i >= 0; i--) {
        for (int j = i + 1; j < len; j++) {
            f[i][j] = (s.charAt(i) == s.charAt(j)) && f[i + 1][j - 1];
        }
    }

    List<List<String>> res = new ArrayList<>();

    this.dfs2.accept(0, s, new ArrayList<>(), res, f);

    return res;
}
```
:::
