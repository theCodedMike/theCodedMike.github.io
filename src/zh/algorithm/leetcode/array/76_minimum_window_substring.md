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

**相关主题:**

- 哈希表
- 字符串
- 滑动窗口

## 二、题解

### 方法 1: 滑动窗口

::: code-tabs
@tab Rust

```rust
pub fn min_window(s: String, t: String) -> String {
    let t_map = t.chars().fold(HashMap::new(), |mut map, c| {
        map.entry(c).and_modify(|v| *v += 1).or_insert(1);
        map
    });
    let (mut left, mut left_when_min, mut w_len) = (0, 0, usize::MAX);
    let mut s_map = HashMap::new();

    for (right, c) in s.chars().enumerate() {
        s_map.entry(c).and_modify(|v| *v += 1).or_insert(1);
        while Self::s_map_contains_t_map(&s_map, &t_map) {
            if w_len > (right - left + 1) {
                w_len = right - left + 1;
                left_when_min = left;
            };
            if let Some(v) = s_map.get_mut(&s.chars().nth(left).unwrap()) {
                *v -= 1;
            }
            left += 1;
        }
    }

    if w_len == usize::MAX {
        "".to_string()
    } else {
        s[left_when_min..left_when_min + w_len].to_string()
    }
}

fn s_map_contains_t_map(s_map: &HashMap<char, i32>, t_map: &HashMap<char, i32>) -> bool {
    t_map
        .into_iter()
        .all(|(t_key, &t_val)| s_map.get(t_key).map_or(false, |&s_val| s_val >= t_val))
}
```

@tab Java

```java
public String minWindow(String s, String t) {
    HashMap<Character, Integer> tMap = new HashMap<>();
    for (int i = 0, len = t.length(); i < len; i++) {
        char c = t.charAt(i);
        tMap.put(c, tMap.getOrDefault(c, 0) + 1);
    }
    int left = 0;
    int leftWhenMin = 0;
    int wLen = Integer.MAX_VALUE;
    HashMap<Character, Integer> sMap = new HashMap<>();
    
    for (int right = 0, len = s.length(); right < len; right++) {
        char c = s.charAt(right);
        sMap.put(c, sMap.getOrDefault(c, 0) + 1);
        while (sMapContainsTmap(sMap, tMap)) {
            if (wLen > (right - left + 1)) {
                wLen = right - left + 1;
                leftWhenMin = left;
            }
            char leftC = s.charAt(left);
            sMap.put(leftC, sMap.get(leftC) - 1);
            left++;
        }
    }
    return wLen == Integer.MAX_VALUE ? "" : s.substring(leftWhenMin, leftWhenMin + wLen);
}

boolean sMapContainsTmap(HashMap<Character, Integer> sMap, HashMap<Character, Integer> tMap) {
    return tMap.entrySet().stream().allMatch((tEntry) -> {
        if (!sMap.containsKey(tEntry.getKey()))
            return false;
        return sMap.get(tEntry.getKey()) >= tEntry.getValue();
    });
}
```

@tab Go

```go
import "math"

func minWindow(s string, t string) string {
    tMap := make(map[byte]int)
    for i := 0; i < len(t); i++ {
        tMap[t[i]]++
    }
    left, leftWhenMin, wLen := 0, 0, math.MaxInt
    sMap := make(map[byte]int)

    for right := 0; right < len(s); right++ {
        sMap[s[right]]++
        for sMapContainsTmap(sMap, tMap) {
            if wLen > (right-left+1) {
                wLen = right-left+1
                leftWhenMin = left
            }
            sMap[s[left]]--
            left++
        }
    }

    if wLen == math.MaxInt {
        return ""
    } else {
        return s[leftWhenMin : leftWhenMin+wLen]
    }
}

func sMapContainsTmap(map1 map[byte]int, map2 map[byte]int) bool {
    for tKey, tVal := range tMap {
        if _, ok := sMap[tKey]; !ok {
            return false
        }
        if sMap[tKey] < tVal {
            return false
        }
    }
    return true
}
```

@tab C\#

```csharp
public string MinWindow(string s, string t)
{
    Dictionary<char, int> tMap = new Dictionary<char, int>();
    foreach (var c in t)
        if (!tMap.TryAdd(c, 1))
            tMap[c]++;
    (int left, int leftWhenMin, int wLen) = (0, 0, Int32.MaxValue);
    Dictionary<char, int> sMap = new Dictionary<char, int>();
    
    for (int right = 0; right < s.Length; right++)
    {
        if (!sMap.TryAdd(s[right], 1))
            sMap[s[right]]++;
        
        while (SmapContainsTmap(sMap, tMap))
        {
            if (wLen > right - left + 1)
            {
                wLen = right - left + 1;
                leftWhenMin = left;
            }
            sMap[s[left]]--;
            left++;
        }
    }

    return wLen == Int32.MaxValue ? "" : s.Substring(leftWhenMin, wLen);
}

bool SmapContainsTmap(Dictionary<char, int> sMap, Dictionary<char, int> tMap)
{
    return tMap.All(pair =>
    {
        if (!sMap.TryGetValue(pair.Key, out var sVal))
            return false;
        return sVal >= pair.Value;
    });
}
```

@tab C++

```cpp
#include <algorithm>
#include <iostream>
#include <numeric>
#include <unordered_map>

string minWindow(string s, string t) {
    const auto t_map =
        std::accumulate(
            t.cbegin(), t.cend(), unordered_map<char, int>(),[](unordered_map<char, int> map, char c) {
                ++map[c];
                return map;
    });
    auto [left, left_when_min, w_len] = std::make_tuple(0, 0, INT_MAX);
    unordered_map<char, int> s_map;
    
    for (int right = 0; right < s.size(); ++right) {
        s_map[s[right]]++;
        while (smap_contains_tmap(s_map, t_map)) {
            if (w_len > right - left + 1) {
                w_len = right - left + 1;
                left_when_min = left;
            }
            s_map[s[left]]--;
            left++;
        }
    }

    return w_len == INT_MAX ? "" : s.substr(left_when_min, w_len);
}

bool smap_contains_tmap(const unordered_map<char, int> &smap, const unordered_map<char, int> &tmap) {
    return std::all_of(tmap.cbegin(), tmap.cend(), [&smap](auto &pair) {
        if (smap.count(pair.first) == 0)
            return false;
        return smap.at(pair.first) >= pair.second;
    });
}
```

:::
