---
title: 151, Reverse words in a String
icon: discover
date: 2023-11-21
order: 4
sticky: true
category: string
tag: 
  - medium
  - string
  - two pointers
---

## I Problem
Given an input string `s`, reverse the order of the **words**.

A **word** is defined as a sequence of non-space characters. The **words** in `s` will be separated by at least one space.

Return a *string of the words in reverse order concatenated by a single space*.

**Note** that `s` may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

**Example 1**
Input: s = `"the sky is blue"`
Output: `"blue is sky the"`

**Example 2**
Input: s = `"  hello world  "`
Output: `"world hello"`
Explanation: Your reversed string should not contain leading or trailing spaces.

**Example 3**
Input: s = `"a good   example "`
Output: `"example good a"`
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

**Constraints**
- `1 <= s.length <= 10⁴`
- `s` contains English letters (upper-case and lower-case), digits, and spaces `' '`.
- There is **at least one** word in `s`.

**Follow-up**
If the string data type is mutable in your language, can you solve it **in-place** with `O(1)` extra space?

**Related Topics**
- Two Pointers
- String

## II Solution
### Approach 1: Use Std Lib
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n)
///
/// Space Complexity: O(n)
pub fn reverse_words(s: String) -> String {
    s.split_whitespace().rev().collect::<Vec<_>>().join(" ")
}
```

@tab Java
```java
// Time Complexity: O(n)
//
// Space Complexity: O(n)
public String reverseWords(String s) {
    List<String> words = Arrays.stream(s.split(" ")).filter(word -> !word.isBlank()).collect(Collectors.toList());
    Collections.reverse(words);
    return String.join(" ", words);
}
```
:::

### Approach 2: Use Custom Split
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n)
///
/// Space Complexity: O(1)
pub fn reverse_words(s: String) -> String {
    let reverse = |p: &mut [u8]| {
        let mut begin = 0;
        let mut end = p.len() - 1;
        while begin < end {
            p.swap(begin, end);
            begin += 1;
            end -= 1;
        }
    };

    let p = unsafe { s.as_bytes_mut() };
    reverse(p);

    let p = unsafe { s.as_mut_vec() };
    // Remove leading spaces
    while p[0].is_ascii_whitespace() {
        p.remove(0);
    }
    // Remove trailing spaces
    while p[p.len() - 1].is_ascii_whitespace() {
        p.remove(p.len() - 1);
    }

    // Reverse the mid by word
    let mut space = 0;
    let mut slow = 0;
    let mut fast = 0;
    while fast < p.len() {
        if p[fast].is_ascii_whitespace() {
            space += 1;
            if space == 1 {
                reverse(p.index_mut(slow..fast));
                slow = fast + 1;
                fast += 1;
            } else {
                p.remove(fast);
            }
        } else {
            space = 0;
            fast += 1;
            if fast == p.len() {
                reverse(p.index_mut(slow..fast));
            }
        }
    }

    s
}
```

@tab Java
```java
@FunctionalInterface
interface TriConsumer<T1, T2, T3> {
    void accept(T1 t1, T2 t2, T3 t3);
}

TriConsumer<List<Character>, Integer, Integer> reverse = (List<Character> list, Integer in, Integer out) -> {
    int begin = in;
    int end = out - 1;
    while (begin < end) {
        Character temp = list.get(begin);
        list.set(begin, list.get(end));
        list.set(end, temp);
        begin++;
        end--;
    }
};

// Time Complexity: O(n)
//
// Space Complexity: O(n)
public String reverseWords(String s) {
    List<Character> chars = s.chars().mapToObj(i -> (char) i).collect(Collectors.toList());
    this.reverse.accept(chars, 0, chars.size());

    // remove leading spaces
    while (Character.isSpaceChar(chars.get(0))) {
        chars.remove(0);
    }
    // remove trailing spaces
    while (Character.isSpaceChar(chars.get(chars.size() - 1))) {
        chars.remove(chars.size() - 1);
    }

    // Reverse the mid by word
    int space = 0;
    int slow = 0;
    int fast = 0;
    while (fast < chars.size()) {
        if (Character.isSpaceChar(chars.get(fast))) {
            space++;
            if (space == 1) {
                this.reverse.accept(chars, slow, fast);
                slow = fast + 1;
                fast++;
            } else {
                chars.remove(fast);
            }
        } else {
            space = 0;
            fast++;
            if (fast == chars.size()) {
                this.reverse.accept(chars, slow, fast);
            }
        }
    }

    return chars.stream().collect(StringBuilder::new, StringBuilder::append, StringBuilder::append).toString();
}
```
:::

### Approach 3: Use Stack
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n)
///
/// Space Complexity: O(n)
pub fn reverse_words(s: String) -> String {
    let len = s.len();
    let p = s.as_bytes();
    let mut stack = vec![];
    let mut begin = 0;
    let mut end = 0;

    for i in 0..len {
        if !p[i].is_ascii_whitespace() {
            if i == 0 || p[i - 1].is_ascii_whitespace() {
                begin = i;
            }
            if i + 1 == len || p[i + 1].is_ascii_whitespace() {
                end = i + 1;
                stack.push((begin, end));
            }
        }
    }

    let mut res = String::with_capacity(len);
    while let Some(idx) = stack.pop() {
        res.push_str(s.index(idx.0..idx.1));
        if !stack.is_empty() {
            res.push(' ');
        }
    }

    res
}
```

@tab Java
```java
// Time Complexity: O(n)
//
// Space Complexity: O(n)
public String reverseWords(String s) {
    char[] chars = s.toCharArray();
    Stack<Integer[]> stack = new Stack<>();
    int begin = 0, end = 0;

    for (int i = 0; i < chars.length; i++) {
        if (!Character.isSpaceChar(chars[i])) {
            if (i == 0 || Character.isSpaceChar(chars[i - 1])) {
                begin = i;
            }
            if (i + 1 == chars.length || Character.isSpaceChar(chars[i + 1])) {
                end = i + 1;
                stack.push(new Integer[]{begin, end});
            }
        }
    }

    StringBuilder sb = new StringBuilder(chars.length);
    while (!stack.isEmpty()) {
        Integer[] idx = stack.pop();
        sb.append(s, idx[0], idx[1]);
        if (!stack.isEmpty()) {
            sb.append(' ');
        }
    }

    return sb.toString();
}
```
:::