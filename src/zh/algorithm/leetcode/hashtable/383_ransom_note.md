---
title: 383, 赎金信
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

## 一、题目描述
给你两个字符串:`ransomNote`和`magazine`，判断`ransomNote`能不能由`magazine`里面的字符构成。

如果可以，返回`true`；否则返回`false`。

`magazine`中的每个字符只能在`ransomNote`中使用一次。

**示例 1**
输入: ransomNote = "a", magazine = "b"
输出: false

**示例 2**
输入: ransomNote = "aa", magazine = "ab"
输出: false

**示例 3**
输入: ransomNote = "aa", magazine = "aab"
输出: true

**提示**

- `1 <= ransomNote.length, magazine.length <= 10⁵`
- `ransomNote`和`magazine`由小写英文字母组成

**相关主题**

- 哈希表
- 字符串
- 计数


## 二、题解
### 方法 1: 哈希表
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
