---
title: 438, 找到字符串中所有字母异位词
icon: discover
date: 2023-11-06
order: 4
sticky: true
category: hashtable
tag: 
  - medium
  - hash table
  - string
  - sliding window
---

## 一、题目描述
给定两个字符串`s`和`p`，找到`s`中所有`p`的**异位词**的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

**异位词**指由相同字母重排列形成的字符串（包括相同的字符串）。 

**示例 1**
输入: s = "cbaebabacd", p = "abc"
输出: [0, 6]
解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。

**示例 2**
输入: s = "abab", p = "ab"
输出: [0, 1, 2]
解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。

**进阶**
- `1 <= s.length, p.length <= 3 * 10⁴`
- `s`和`p`仅包含小写字母

**相关主题**
- 哈希表
- 字符串
- 滑动窗口

## 二、题解
### 方法 1: 滑动窗口
::: code-tabs
@tab Rust
```rust
pub fn find_anagrams(s: String, p: String) -> Vec<i32> {
    let mut res = vec![];
    let s_len = s.len();
    let p_len = p.len();
    if s_len < p_len {
        return res;
    }

    let mut s_counter = [0; 26];
    let mut p_counter = [0; 26];
    let p_bytes = p.as_bytes();
    let s_bytes = s.as_bytes();
    let a_u8 = b'a';

    for i in 0..p_len {
        p_counter[(p_bytes[i] - a_u8) as usize] += 1;
        s_counter[(s_bytes[i] - a_u8) as usize] += 1;
    }
    if s_counter == p_counter {
        res.push(0);
    }

    for i in p_len..s_len {
        s_counter[(s_bytes[i - p_len] - a_u8) as usize] -= 1;
        s_counter[(s_bytes[i] - a_u8) as usize] += 1;
        if s_counter == p_counter {
            res.push((i - p_len + 1) as i32);
        }
    }

    res
}
```

@tab Java
```java
public List<Integer> findAnagrams(String s, String p) {
    List<Integer> res = new ArrayList<>();
    int s_len = s.length();
    int p_len = p.length();
    if (s_len < p_len) {
        return res;
    }

    int[] s_counter = new int[26];
    int[] p_counter = new int[26];
    for (int i = 0; i < p_len; i++) {
        p_counter[p.charAt(i) - 'a']++;
        s_counter[s.charAt(i) - 'a']++;
    }
    if (Arrays.equals(s_counter, p_counter)) {
        res.add(0);
    }

    for (int i = p_len; i < s_len; i++) {
        s_counter[s.charAt(i - p_len) - 'a']--;
        s_counter[s.charAt(i) - 'a']++;
        if (Arrays.equals(s_counter, p_counter)) {
            res.add(i - p_len + 1);
        }
    }

    return res;
}
```
:::

### 方法 2: 优化滑动窗口
::: code-tabs
@tab Rust
```rust
pub fn find_anagrams(s: String, p: String) -> Vec<i32> {
    let mut res = vec![];
    let s_len = s.len();
    let p_len = p.len();
    if s_len < p_len {
        return res;
    }

    let mut counter = [0; 26];
    let s_bytes = s.as_bytes();
    let p_bytes = p.as_bytes();
    let a_u8 = b'a';
    for i in 0..p_len {
        counter[(s_bytes[i] - a_u8) as usize] += 1;
        counter[(p_bytes[i] - a_u8) as usize] -= 1;
    }
    let mut diff = 0;
    for i in 0..26 {
        if counter[i] != 0 {
            diff += 1;
        }
    }
    if diff == 0 {
        res.push(0);
    }

    for i in p_len..s_len {
        let l = (s_bytes[i - p_len] - a_u8) as usize;
        if counter[l] == 1 {
            // 窗口中字母s[l]的数量与字符串p中的数量从不同变得相同
            diff -= 1;
        } else if counter[l] == 0 {
            // 窗口中字母s[l]的数量与字符串p中的数量从相同变得不同
            diff += 1;
        }
        counter[l] -= 1;
        let r = (s_bytes[i] - a_u8) as usize;
        if counter[r] == -1 {
            // 窗口中字母s[r]的数量与字符串p中的数量从不同变得相同
            diff -= 1;
        } else if counter[r] == 0 {
            // 窗口中字母s[r]的数量与字符串p中的数量从相同变得不同
            diff += 1;
        }
        counter[r] += 1;

        if diff == 0 {
            res.push((i - p_len + 1) as i32);
        }
    }

    res
}
```

@tab Java
```java
public List<Integer> findAnagrams(String s, String p) {
    List<Integer> res = new ArrayList<>
    int s_len = s.length();
    int p_len = p.length();
    if (s_len < p_len) {
        return res;
    }

    int[] counter = new int[26];
    for (int i = 0; i < p_len; i++) {
        counter[s.charAt(i) - 'a']++;
        counter[p.charAt(i) - 'a']--;
    }
    int diff = 0;
    for (int i = 0; i < 26; i++) {
        if (counter[i] != 0) {
            diff++;
        }
    }
    if (diff == 0) {
        res.add(0);
    }

    for (int i = p_len; i < s_len; i++) {
        int l = s.charAt(i - p_len) - 'a';
        if (counter[l] == 1) {
            // 窗口中字母s[l]的数量与字符串p中的数量从不同变得相同
            diff--;
        } else if (counter[l] == 0) {
            // 窗口中字母s[l]的数量与字符串p中的数量从相同变得不同
            diff++;
        }
        counter[l]--;
        int r = s.charAt(i) - 'a';
        if (counter[r] == -1) {
            // 窗口中字母s[r]的数量与字符串p中的数量从不同变得相同
            diff--;
        } else if (counter[r] == 0) {
            // 窗口中字母s[r]的数量与字符串p中的数量从相同变得不同
            diff++;
        }
        counter[r]++;

        if (diff == 0) {
            res.add(i - p_len + 1);
        }
    }

    return res;
}
```
:::