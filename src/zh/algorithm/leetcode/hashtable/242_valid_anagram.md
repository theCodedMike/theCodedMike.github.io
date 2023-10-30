---
title: 242, 有效的字母异位词
icon: discover
date: 2023-10-30
order: 1
sticky: true
category: hashtable
tag: 
  - easy
  - hash table
  - string
  - sorting
---

## 一、题目描述
给定两个字符串`s`和`t`，编写一个函数来判断`t`是否是`s`的字母异位词。

注意：若`s`和`t`中每个字符出现的次数都相同，则称`s`和`t`互为字母异位词。

**示例 1**
输入: s = "anagram", t = "nagaram"
输出: true

**示例 2**
输入: s = "rat", t = "car"
输出: false

**提示**

- `1 <= s.length, t.length <= 5 * 10⁴`
- `s`和`t`仅包含小写字母

**进阶**
如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

**相关主题**

- 哈希表
- 字符串
- 排序

## 二、题解
### 方法 1: 排序
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n*log(n))
///
/// Space Complexity: O(log(n))
pub fn is_anagram(s: String, t: String) -> bool {
    if s.len() != t.len() {
        return false;
    }

    let (s, t) = unsafe { (s.as_mut_vec(), t.as_mut_vec()) };
    s.sort();
    t.sort();

    s == t
}
```

@tab Java
```java
// Time Complexity: O(n*log(n))
//
// Space Complexity: O(log(n))
public boolean isAnagram(String s, String t) {
    if (s.length() != t.length()) {
        return false;
    }

    char[] s_chars = s.toCharArray();
    char[] t_chars = t.toCharArray();
    Arrays.sort(s_chars);
    Arrays.sort(t_chars);

    return Arrays.equals(s_chars, t_chars);
}
```
:::

### 方法 2: 哈希
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n)
///
/// Space Complexity: O(n)
pub fn is_anagram(s: String, t: String) -> bool {
    if s.len() != t.len() {
        return false;
    }

    let mut map = s.chars().fold(HashMap::new(), |mut map, c| {
        map.entry(c).and_modify(|v| *v += 1).or_insert(1);
        map
    });
    for c in t.chars() {
        match map.get_mut(&c) {
            None => return false,
            Some(v) => {
                *v -= 1;
                if *v < 0 {
                    return false;
                }
            }
        }
    }

    true
}
```

@tab Java
```java
// Time Complexity: O(n)
//
// Space Complexity: O(n)
public boolean isAnagram(String s, String t) {
    if (s.length() != t.length()) {
        return false;
    }

    HashMap<Character, Integer> map = new HashMap<>();
    for (char c : s.toCharArray()) {
        map.put(c, map.getOrDefault(c, 0) + 1);
    }
    for (char c : t.toCharArray()) {
        if (!map.containsKey(c)) {
            return false;
        }
        Integer count = map.get(c);
        if (count == 0) {
            return false;
        }
        map.put(c, count - 1);
    }

    return true;
}
```
:::