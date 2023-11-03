---
title: 49, Group Anagrams
icon: discover
date: 2023-11-03
order: 3
sticky: true
category: hashtable
tag: 
  - medium
  - array
  - hash table
  - string
  - sorting
---

## I Problem
Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1**
Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]

**Example 2**
Input: strs = [""]
Output: [[""]]

**Example 3**
Input: strs = ["a"]
Output: [["a"]]

**Constraints**

- `1 <= strs.length <= 10⁴`
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lowercase English letters

**Related Topics**

- Array
- Hash Table
- String
- Sorting

## II Solution
### Approach 1: Sorting
::: code-tabs
@tab Rust
```rust
pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
    let mut map = HashMap::with_capacity(strs.len());

    for str in strs {
        let mut key = str.clone().into_bytes();
        key.sort_unstable();
        match map.get_mut(&key) {
            None => {
                map.insert(key, vec![str]);
            }
            Some(v) => {
                v.push(str);
            }
        }
    }

    map.into_values().collect()
}
```

@tab Java
```java
public List<List<String>> groupAnagrams(String[] strs) {
    HashMap<String, List<String>> map = new HashMap<>(strs.length);

    for (String str: strs) {
        byte[] bytes = str.getBytes();
        Arrays.sort(bytes);
        String key = Arrays.toString(bytes);
        List<String> val = map.getOrDefault(key, new ArrayList<>());
        val.add(str);
        map.put(key, val);
    }

    return map.values().stream().toList();
}
```
:::

### Approach 2: Counting
::: code-tabs
@tab Rust
```rust
pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
    let mut map = HashMap::with_capacity(strs.len());
    let a_u8 = b'a';
    let mut counter = [0; 26];

    for str in strs {
        for c in str.chars() {
            counter[(c as u8 - a_u8) as usize] += 1;
        }

        let mut key = String::with_capacity(str.len());
        for i in 0..26 {
            if counter[i] != 0 {
                key.push_str(i.to_string().as_str());
                counter[i] = 0;
            }
        }

        match map.get_mut(&key) {
            None => {
                map.insert(key, vec![str]);
            }
            Some(v) => {
                v.push(str);
            }
        }
    }

    map.into_values().collect()
}
```

@tab Java
```java
public List<List<String>> groupAnagrams(String[] strs) {
    HashMap<String, List<String>> map = new HashMap<>(strs.length);
    int[] counter = new int[26];

    for (String str: strs) {
        for (char c : str.toCharArray()) {
            counter[c - 'a']++;
        }

        StringBuilder sb = new StringBuilder(str.length());
        for (int i = 0; i < 26; i++) {
            if (counter[i] != 0) {
                sb.append(i);
                counter[i] = 0;
            }
        }
        String key = sb.toString();

        List<String> val = map.getOrDefault(key, new ArrayList<>());
        val.add(str);
        map.put(key, val);
    }

    return map.values().stream().toList();
}
```
:::