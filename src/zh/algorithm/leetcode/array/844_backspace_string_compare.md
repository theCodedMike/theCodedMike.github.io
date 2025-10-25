---
title: 844, 比较含退格的字符串
icon: discover
date: 2023-10-08
order: 9
sticky: true
category: array
tag: 
  - easy
  - array
  - two pointers
  - stack
  - string
---

## 一、题目描述

给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。

注意：如果对空文本输入退格字符，文本继续为空。

**示例 1:**
输入: s = "ab#c", t = "ad#c"
输出: true
解释: s 和 t 都会变成 "ac"。

**示例 2:**
输入: s = "ab##", t = "c#d#"
输出: true
解释: s 和 t 都会变成 ""。

**示例 3:**
输入: s = "a#c", t = "b"
输出: false
解释: s 会变成 "c"，但 t 仍然是 "b"。

**提示:**

- 1 <= s.length, t.length <= 200
- s 和 t 只含有小写字母以及字符 '#'

**进阶:**
你可以用 O(n) 的时间复杂度和 O(1) 的空间复杂度解决该问题吗？

**相关主题:**

- 栈
- 双指针
- 字符串
- 模拟

## 二、题解

### 方法 1: 利用栈构建有效字符串

::: code-tabs
@tab Rust

```rust
///  Time Complexity: O(M+N)
///
/// Space Complexity: O(M+N)
pub fn backspace_compare(s: String, t: String) -> bool {
    let build = |str: String| -> String {
        let mut res = String::new();

        for c in str.chars() {
            match c {
                '#' => {
                    res.pop();
                }
                _ => {
                    res.push(c);
                }
            }
        }

        res
    };

    build(s) == build(t)
}
```

@tab Java

```java
import java.util.Arrays;
import java.util.Stack;
import java.util.function.Function;

public boolean backspaceCompare(String s, String t) {
    Function<String, String> build = (String str) -> {
        Stack<Character> chars = new Stack<>();

        for (char ch : str.toCharArray()) {
            if (ch == '#') {
                if (!chars.isEmpty()) {
                    chars.pop();
                }
            } else {
                chars.push(ch);
            }
        }

        return Arrays.toString(chars.toArray());
    };

    return build.apply(s).equals(build.apply(t));
}
```

@tab Go

```go
func backspaceCompare(s string, t string) bool {
    build := func(str string) string {
        res := make([]rune, 0)

        for _, char := range str {
            if char == '#' {
                if len(res) > 0 {
                    res = res[:len(res)-1]
                }
            } else {
                res = append(res, char)
            }
        }

        return string(res)
    }

    return build(s) == build(t)
}
```

@tab C\#

```csharp
public bool BackspaceCompare(string s, string t)
{
    Func<string, string> build = (str) =>
    {
        Stack<char> res = new Stack<char>();

        foreach (var ch in str.ToCharArray())
        {
            if (ch == '#')
            {
                if (res.Count != 0)
                    res.Pop();
            }
            else
                res.Push(ch);
        }

        return new string(res.ToArray());
    };

    return build(s) == build(t);
}
```

@tab C++

```cpp
bool backspaceCompare(string s, string t) {
    auto build = [](const string &str) -> string {
        string res;

        for (const char ch: str) {
            if (ch == '#') {
                if (!res.empty())
                    res.pop_back();
            } else
                res.push_back(ch);
        }

        return res;
    };

    return build(s) == build(t);
}
```

:::

### 方法 2: 双指针

::: code-tabs
@tab Rust

```rust
///  Time Complexity: O(M+N)
///
/// Space Complexity: O(1)
pub fn backspace_compare(s: String, t: String) -> bool {
    let (mut s_idx, mut t_idx) = (s.len() as i32 - 1, t.len() as i32 - 1);
    let (mut s_sharp_count, mut t_sharp_count) = (0, 0);

    while s_idx >= 0 || t_idx >= 0 {
        while s_idx >= 0 {
            if s.chars().nth(s_idx as usize) == Some('#') {
                s_sharp_count += 1;
                s_idx -= 1;
            } else if s_sharp_count > 0 {
                s_sharp_count -= 1;
                s_idx -= 1;
            } else {
                break;
            }
        }
        while t_idx >= 0 {
            if t.chars().nth(t_idx as usize) == Some('#') {
                t_sharp_count += 1;
                t_idx -= 1;
            } else if t_sharp_count > 0 {
                t_sharp_count -= 1;
                t_idx -= 1;
            } else {
                break;
            }
        }
        // If two characters are different
        if s_idx >= 0 && t_idx >= 0
            && s.chars().nth(s_idx as usize) != t.chars().nth(t_idx as usize) {
            return false;
        }
        // If char vs nothing
        if (s_idx >= 0) != (t_idx >= 0) {
            return false;
        }

        s_idx -= 1;
        t_idx -= 1;
    }

    true
}
```

@tab Java

```java
public boolean backspaceCompare(String s, String t) {
    int s_idx = s.length() - 1;
    int t_idx = t.length() - 1;
    int s_sharp_count = 0;
    int t_sharp_count = 0;

    while (s_idx >= 0 || t_idx >= 0) {
        while (s_idx >= 0) {
            if (s.charAt(s_idx) == '#') {
                s_sharp_count++;
                s_idx--;
            } else if (s_sharp_count > 0) {
                s_sharp_count--;
                s_idx--;
            } else {
                break;
            }
        }
        while (t_idx >= 0) {
            if (t.charAt(t_idx) == '#') {
                t_sharp_count++;
                t_idx--;
            } else if (t_sharp_count > 0) {
                t_sharp_count--;
                t_idx--;
            } else {
                break;
            }
        }
        // 如果2个字符不一样
        if (s_idx >= 0 && t_idx >= 0 && s.charAt(s_idx) != t.charAt(t_idx)) {
            return false;
        }
        // 如果一侧有字符而另一侧为空
        if ((s_idx >= 0) != (t_idx >= 0)) {
            return false;
        }

        s_idx--;
        t_idx--;
    }

    return true;
}
```

@tab Go

```go
func backspaceCompare(s string, t string) bool {
    sIdx, tIdx := len(s)-1, len(t)-1
    sSharpCount, tSharpCount := 0, 0

    for sIdx >= 0 || tIdx >= 0 {
        for sIdx >= 0 {
            if s[sIdx] == '#' {
                sSharpCount++
                sIdx--
            } else if sSharpCount > 0 {
                sSharpCount--
                sIdx--
            } else {
                break
            }
        }
        for tIdx >= 0 {
            if t[tIdx] == '#' {
                tSharpCount++
                tIdx--
            } else if tSharpCount > 0 {
                tSharpCount--
                tIdx--
            } else {
                break
            }
        }

        if sIdx >= 0 && tIdx >= 0 && s[sIdx] != t[tIdx] {
            return false
        }
        if (sIdx >= 0) != (tIdx >= 0) {
            return false
        }

        sIdx--
        tIdx--
    }

    return true
}
```

@tab C\#

```csharp
public bool BackspaceCompare(string s, string t)
{
    (int sIdx, int tIdx) = (s.Length - 1, t.Length - 1);
    (int sSharpCount, int tSharpCount) = (0, 0);

    while (sIdx >= 0 || tIdx >= 0)
    {
        while (sIdx >= 0)
        {
            if (s[sIdx] == '#')
            {
                sSharpCount++;
                sIdx--;
            } else if (sSharpCount > 0)
            {
                sSharpCount--;
                sIdx--;
            }
            else
                break;
        }
        while (tIdx >= 0)
        {
            if (t[tIdx] == '#')
            {
                tSharpCount++;
                tIdx--;
            } 
            else if (tSharpCount > 0)
            {
                tSharpCount--;
                tIdx--;
            }
            else
                break;
        }
        
        if (sIdx >= 0 && tIdx >= 0 && s[sIdx] != t[tIdx])
            return false;
        if ((sIdx >= 0) != (tIdx >= 0))
            return false;
        
        sIdx--;
        tIdx--;
    }

    return true;
}
```

@tab C++

```cpp
bool backspaceCompare(string s, string t) {
    auto[sIdx, tIdx] = std::make_pair(
        static_cast<int>(s.size()) - 1, static_cast<int>(t.size()) - 1);
    auto[sSharpCount, tSharpCount] = std::make_pair(0, 0);
    
    while (sIdx >= 0 || tIdx >= 0) {
        while (sIdx >= 0) {
            if (s[sIdx] == '#') {
                sSharpCount++;
                sIdx--;
            } else if (sSharpCount > 0) {
                sSharpCount--;
                sIdx--;
            } else
                break;
        }
        while (tIdx >= 0) {
            if (t[tIdx] == '#') {
                tSharpCount++;
                tIdx--;
            } else if (tSharpCount > 0) {
                tSharpCount--;
                tIdx--;
            } else
                break;
        }

        if (sIdx >= 0 && tIdx >= 0 && s[sIdx] != t[tIdx])
            return false;
        if ((sIdx >= 0) != (tIdx >= 0))
            return false;

        sIdx--;
        tIdx--;
    }

    return true;
}
```

:::
