---
title: 455, Assign Cookies
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

## I Problem
Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

Each child `i` has a greed factor `g[i]`, which is the minimum size of a cookie that the child will be content with; and each cookie `j` has a size `s[j]`. If `s[j] >= g[i]`, we can assign the cookie `j` to the child `i`, and the child `i` will be content. Your goal is to maximize the number of your content children and output the maximum number.

**Example 1**
Input: g = [1, 2, 3], s = [1, 1]
Output: 1
Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content. You need to output 1.

**Example 2**
Input: g = [1, 2], s = [1, 2, 3]
Output: 2
Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2. You have 3 cookies and their sizes are big enough to gratify all of the children. You need to output 2.

**Constraints**
- `1 <= g.length <= 3 * 10⁴`
- `0 <= s.length <= 3 * 10⁴`
- `1 <= g[i], s[j] <= 2³¹ - 1`

**Related Topics**
- Greedy
- Array
- Two Pointers
- Sorting

## II Solution
### Approach 1: Brute Force
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

### Approach 2: Two Pointers + Greedy
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