---
title: 383, Ransom Note
icon: discover
date: 2023-11-02
order: 2
sticky: true
category: hashtable
tag: 
  - easy
  - hash table
  - string
  - counting
---

## I Problem
Given two strings `ransomNote` and `magazine`, return `true` if `ransomNote` can be constructed by using the letters from `magazine` and `false` otherwise.

Each letter in `magazine` can only be used once in `ransomNote`.

**Example 1**
Input: ransomNote = "a", magazine = "b"
Output: false

**Example 2**
Input: ransomNote = "aa", magazine = "ab"
Output: false

**Example 3**
Input: ransomNote = "aa", magazine = "aab"
Output: true

**Constraints**

- `1 <= ransomNote.length, magazine.length <= 10⁵`
- `ransomNote`and`magazine`consist of lowercase English letters.

**Related Topics**

- Hash Table
- String
- Counting


## II Solution
### Approach 1: Hash Table
::: code-tabs
@tab Rust
```rust
pub fn can_construct(ransom_note: String, magazine: String) -> bool {
    let a_u8 = b'a';
    let mut arr = magazine.chars().fold([0; 26], |mut arr, c| {
        let i = (c as u8 - a_u8) as usize;
        arr[i] += 1;
        arr
    });

    for c in ransom_note.chars() {
        let i = (c as u8 - a_u8) as usize;
        arr[i] -= 1;
        if arr[i] < 0 {
            return false;
        }
    }
    
    true
}
```

@tab Java
```java
public boolean canConstruct(String ransomNote, String magazine) {
    int[] arr = new int[26];
    for (char c : magazine.toCharArray()) {
        arr[c - 'a']++;
    }

    for (char c : ransomNote.toCharArray()) {
        int i = c - 'a';
        arr[i]--;
        if (arr[i] < 0) {
            return false;
        }
    }

    return true;
}
```
:::