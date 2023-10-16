---
title: 76, Minimum Window Substring
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

## I Problem
Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

**Example 1**
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

**Example 2**
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

**Example 3**
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window. Since the largest window of s only has one 'a', return empty string.

**Constraints**

- m == s.length
- n == t.length
- 1 <= m, n <= 10⁵
- s and t consist of uppercase and lowercase English letters.

**Follow up**
Could you find an algorithm that runs in O(m + n) time?

**Related Topics**

- Hash Table
- String
- Sliding Window

## II Solution
### Approach 1: Sliding Window
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
