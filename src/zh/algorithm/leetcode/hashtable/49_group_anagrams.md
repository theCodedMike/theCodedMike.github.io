---
title: 49, 字母异位词分组
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

## 一、题目描述
给你一个字符串数组，请你将**字母异位词**组合在一起。可以按任意顺序返回结果列表。

**字母异位词**是由重新排列源单词的所有字母得到的一个新单词。

**示例 1**
输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]

**示例 2**
输入: strs = [""]
输出: [[""]]

**示例 3**
输入: strs = ["a"]
输出: [["a"]]

**提示**

- `1 <= strs.length <= 10⁴`
- `0 <= strs[i].length <= 100`
- `strs[i]`仅包含小写字母

**相关主题**

- 数组
- 哈希表
- 字符串
- 排序

## 二、题解
### 方法 1: 排序
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

### 方法 2: 计数
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