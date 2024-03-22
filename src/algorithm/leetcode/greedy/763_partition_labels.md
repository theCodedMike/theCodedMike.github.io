---
title: 763, Partition Labels
icon: discover
date: 2024-03-21
order: 14
sticky: true
category: greedy
tag: 
  - medium
  - greedy
  - two pointers
  - hash table
  - string
---

## I Problem
You are given a string `s`. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

Note that the partition is done so that after concatenating all the parts in order, the resultant string should be `s`.

Return *a list of integers representing the size of these parts*.

**Example 1**
Input: s = "ababcbacadefegdehijhklij"
Output: [9, 7, 8]
Explanation:
The partition is `"ababcbaca"`, `"defegde"`, `"hijhklij"`.
This is a partition so that each letter appears in at most one part.
A partition like `"ababcbacadefegde"`, `"hijhklij"` is incorrect, because it splits s into less parts.

**Example 2**
Input: s = "eccbbbbdec"
Output: [10]

**Constraints**
- `1 <= s.length <= 500`
- `s consists of lowercase English letters`

**Related Topics**
- Greedy
- Hash Table
- Two Pointers
- String


## II Solution
### Approach 1: Greedy
::: code-tabs
@tab Rust
```rust
pub fn partition_labels(s: String) -> Vec<i32> {
    let mut helper = [0; 26];
    let s_bytes = s.as_bytes();
    let len = s.len();
    for i in 0..len {
        let idx = (s_bytes[i] - b'a') as usize;
        helper[idx] = i;
    }

    let mut res = vec![];
    let (mut first, mut last) = (0, 0);
    for i in 0..len {
        let idx = (s_bytes[i] - b'a') as usize;
        last = std::cmp::max(last, helper[idx]);
        if i == last {
            res.push((last - first + 1) as i32);
            first = last + 1;
        }
    }

    res
}
```

@tab Java
```java
public List<Integer> partitionLabels(String s) {
    int[] helper = new int[26];
    int len = s.length();
    for (int i = 0; i < len; i++) {
        helper[s.charAt(i) - 'a'] = i;
    }

    List<Integer> res = new ArrayList<>();
    int first = 0, last = 0;
    for (int i = 0; i < len; i++) {
        last = Math.max(last, helper[s.charAt(i) - 'a']);
        if (i == last) {
            res.add(last - first + 1);
            first = last + 1;
        }
    }

    return res;
}
```

@tab Go
```go
func partitionLabels(s string) []int {
    helper := make([]int, 26)
    size := len(s)
    for i := 0; i < size; i++ {
        helper[s[i]-'a'] = i
    }

    first, last := 0, 0
    res := make([]int, 0)
    for i := 0; i < size; i++ {
        last = max(last, helper[s[i]-'a'])
        if i == last {
            res = append(res, last-first+1)
            first = last + 1
        }
    }

    return res
}
```
:::
