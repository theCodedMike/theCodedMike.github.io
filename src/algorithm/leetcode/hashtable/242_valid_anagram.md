---
title: 242, Valid Anagram
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

## I Problem
Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1**
Input: s = "anagram", t = "nagaram"
Output: true

**Example 2**
Input: s = "rat", t = "car"
Output: false

**Constraints**

- `1 <= s.length, t.length <= 5 * 10⁴`
- `s` and `t` consist of lowercase English letters.

**Follow up**
What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

**Related Topics**

- Hash Table
- String
- Sorting

## II Solution
### Approach 1: Sort
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

### Approach 2: Use HashTable
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