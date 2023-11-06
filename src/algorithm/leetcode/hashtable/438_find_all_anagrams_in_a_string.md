---
title: 438, Find All Anagrams in a String
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

## I Problem
Given two strings `s` and `p`, return an array of all the start indices of `p`'s anagrams in `s`. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1**
Input: s = "cbaebabacd", p = "abc"  
Output: [0, 6]  
Explanation:  
The substring with start index = 0 is "cba", which is an anagram of "abc".  
The substring with start index = 6 is "bac", which is an anagram of "abc".

**Example 2**
Input: s = "abab", p = "ab"  
Output: [0, 1, 2]  
Explanation:  
The substring with start index = 0 is "ab", which is an anagram of "ab".  
The substring with start index = 1 is "ba", which is an anagram of "ab".  
The substring with start index = 2 is "ab", which is an anagram of "ab".

**Constraints**
- `1 <= s.length, p.length <= 3 * 10⁴`
- `s` and `p` consist of lowercase English letters.

**Related Topics**
- Hash Table
- String
- Sliding Window

## II Solution
### Approach 1: Sliding Window
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

### Approach 2: Optimize Sliding Window
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
            diff -= 1;
        } else if counter[l] == 0 {
            diff += 1;
        }
        counter[l] -= 1;
        let r = (s_bytes[i] - a_u8) as usize;
        if counter[r] == -1 {
            diff -= 1;
        } else if counter[r] == 0 {
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
            diff--;
        } else if (counter[l] == 0) {
            diff++;
        }
        counter[l]--;
        int r = s.charAt(i) - 'a';
        if (counter[r] == -1) {
            diff--;
        } else if (counter[r] == 0) {
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