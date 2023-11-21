---
title: 151, 翻转字符串里的单词
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

## 一、题目描述
给你一个字符串`s`，请你反转字符串中**单词**的顺序。

**单词**是由非空格字符组成的字符串。`s`中使用至少一个空格将字符串中的**单词**分隔开。

返回**单词**顺序颠倒且**单词**之间用单个空格连接的结果字符串。

**注意**：输入字符串`s`中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。


**示例 1**
输入: s = `"the sky is blue"`
输出: `"blue is sky the"`

**示例 2**
输入: s = `"  hello world  "`
输出: `"world hello"`
解释: 反转后的字符串中不能存在前导空格和尾随空格。

**示例 3**
输入: s = `"a good   example "`
输出: `"example good a"`
解释: 如果两个单词间有多余的空格，反转后的字符串需要将单词间的空格减少到仅有一个。

**提示**
- `1 <= s.length <= 10⁴`
- `s`包含英文大小写字母、数字和空格`' '`
- `s`中**至少存在一个**单词

**进阶**
如果字符串在你使用的编程语言中是一种可变数据类型，请尝试使用`O(1)`额外空间复杂度的**原地**解法。

**相关主题**
- 双指针
- 字符串


## 二、题解
### 方法 1: 使用标准库
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

### 方法 2: 自定义Split
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

### 方法 3: 使用栈
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
