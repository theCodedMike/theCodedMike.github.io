---
title: 76, 最小覆盖子串
icon: discover
date: 2023-10-16
order: 13
sticky: true
category: array
tag: 
  - hard
  - hash table
  - string
  - sliding window
---

## 一、题目描述
给你一个字符串s、一个字符串t。返回s中涵盖t所有字符的最小子串。如果s中不存在涵盖t所有字符的子串，则返回空字符串 ""。

注意：

- 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
- 如果 s 中存在这样的子串，我们保证它是唯一的答案。

**示例 1**
输入: s = "ADOBECODEBANC", t = "ABC"
输出: "BANC"
解释: 最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。

**示例 2**
输入: s = "a", t = "a"
输出: "a"
解释: 整个字符串 s 是最小覆盖子串。

**示例 3**
输入: s = "a", t = "aa"
输出: ""
解释: t 中两个字符 'a' 均应包含在 s 的子串中，因此没有符合条件的子字符串，返回空字符串。

**提示:**

- m == s.length
- n == t.length
- 1 <= m, n <= 10⁵
- s 和 t 由英文字母组成

**进阶:**
你能设计一个在O(m+n) 时间内解决此问题的算法吗？

**相关主题**

- 哈希表
- 字符串
- 滑动窗口

## 二、题解
### 方法 1: 滑动窗口
::: code-tabs
@tab Rust
```rust
pub fn min_window(s: String, t: String) -> String {
    let mut w_len = usize::MAX;
    let mut left = 0;
    let mut left_when_min = 0;
    let map2 = t.chars().fold(HashMap::new(), |mut map, c| {
        map.entry(c).and_modify(|v| *v += 1).or_insert(1);
        map
    });

    let mut map1 = HashMap::new();
    let chars = s.chars().collect::<Vec<_>>();
    for (right, &c) in chars.iter().enumerate() {
        map1.entry(c).and_modify(|v| *v += 1).or_insert(1);
        while Self::map1_contains_map2(&map1, &map2) {
            if w_len > (right - left + 1) {
                left_when_min = left;
                w_len = right - left + 1
            };
            if let Some(v) = map1.get_mut(&chars[left]) {
                *v -= 1;
            }
            left += 1;
        }
    }

    if w_len == usize::MAX {
        "".to_string()
    } else {
        s.index(left_when_min..left_when_min + w_len).to_string()
    }
}

fn map1_contains_map2(map1: &HashMap<char, i32>, map2: &HashMap<char, i32>) -> bool {
    map2.into_iter()
        .all(|(k2, &v2)| map1.get(k2).map_or(false, |&v1| v1 >= v2))
}
```

@tab Java
```java
public String minWindow(String s, String t) {
    HashMap<Character, Integer> map2 = new HashMap<>();
    for (int i = 0, len = t.length(); i < len; i++) {
        char c = t.charAt(i);
        map2.put(c, map2.getOrDefault(c, 0) + 1);
    }
    int left = 0;
    int left_when_min = 0;
    int w_len = Integer.MAX_VALUE;
    HashMap<Character, Integer> map1 = new HashMap<>();

    for (int right = 0, len = s.length(); right < len; right++) {
        char c = s.charAt(right);
        map1.put(c, map1.getOrDefault(c, 0) + 1);
        while (map1_contains_map2(map1, map2)) {
            if ((right - left + 1) < w_len) {
                w_len = right - left + 1;
                left_when_min = left;
            }
            char left_c = s.charAt(left);
            map1.put(left_c, map1.get(left_c) - 1);
            left++;
        }
    }

    return w_len == Integer.MAX_VALUE ? "" : s.substring(left_when_min, left_when_min + w_len);
}

boolean map1_contains_map2(HashMap<Character, Integer> map1, HashMap<Character, Integer> map2) {
    return map2.keySet().stream().allMatch((k2) -> {
        if (!map1.containsKey(k2)) {
            return false;
        }
        return map1.get(k2) >= map2.get(k2);
    });
}
```
:::
