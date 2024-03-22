---
title: 763, 划分字母区间
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

## 一、题目描述
给你一个字符串 s 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。

注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 s 。

返回一个表示每个字符串片段的长度的列表。

**示例 1**
输入: s = "ababcbacadefegdehijhklij"
输出: [9, 7, 8]
解释: 
划分结果为`"ababcbaca"`、`"defegde"`、`"hijhklij"`。
每个字母最多出现在一个片段中。
像`"ababcbacadefegde"`, `"hijhklij"`这样的划分是错误的，因为划分的片段数较少。

**示例 2**
输入: s = "eccbbbbdec"
输出: [10]

**提示**
- `1 <= s.length <= 500`
- `s`仅由小写英文字母组成

**相关主题**
- 贪心
- 哈希表
- 双指针
- 字符串


## 二、题解
### 方法 1: 贪心
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