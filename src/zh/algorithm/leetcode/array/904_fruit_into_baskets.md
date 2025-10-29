---
title: 904, 水果成篮
icon: discover
date: 2023-10-13
order: 12
sticky: true
category: array
tag: 
  - medium
  - array
  - hash table
  - sliding window
---

## 一、题目描述

你正在探访一家农场，农场从左到右种植了一排果树。这些树用一个整数数组fruits表示，其中fruits[i]是第i棵树上的水果种类。

你想要尽可能多地收集水果。然而，农场的主人设定了一些严格的规矩，你必须按照要求采摘水果：

- 你只有两个篮子，并且每个篮子只能装单一类型的水果。每个篮子能够装的水果总量没有限制。
- 你可以选择任意一棵树开始采摘，你必须从每棵树（包括开始采摘的树）上恰好摘一个水果 。采摘的水果应当符合篮子中的水果类型。每采摘一次，你将会向右移动到下一棵树，并继续采摘。
- 一旦你走到某棵树前，但水果不符合篮子的水果类型，那么就必须停止采摘。

给你一个整数数组fruits，返回你可以收集的水果的最大数目。

**示例 1:**
输入: fruits = [1, 2, 1]
输出: 3
解释: 可以采摘全部3棵树。

**示例 2:**
输入: fruits = [0, 1, 2, 2]
输出: 3
解释: 可以采摘[1, 2, 2]这三棵树。如果从第一棵树开始采摘，则只能采摘[0, 1]这两棵树。

**示例 3:**
输入: fruits = [1, 2, 3, 2, 2]
输出: 4
解释: 可以采摘[2, 3, 2, 2]这四棵树。如果从第一棵树开始采摘，则只能采摘[1, 2]这两棵树。

**示例 4:**
输入: fruits = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]
输出: 5
解释: 可以采摘[1, 2, 1, 1, 2]这五棵树。

**提示:**

- 1 <= fruits.length <= 10⁵
- 0 <= fruits[i] < fruits.length

**相关主题:**

- 数组
- 哈希表
- 滑动窗口

## 二、题解

### 方法 1: 暴力解法

::: code-tabs
@tab Rust

```rust
/// Time Limit Exceeded
///
/// Time Complexity: O(n^3)
/// Space Complexity: O(1)
pub fn total_fruit(fruits: Vec<i32>) -> i32 {
    let len = fruits.len();
    let mut set = HashSet::new();

    for width in (2..=len).rev() {
        let mut left = 0;
        let mut right = width;

        while right <= len {
            for i in left..right {
                set.insert(fruits[i]);
                if set.len() > 2 {
                    break;
                }
            }
            if set.len() == 2 {
                return width as i32;
            }

            left += 1;
            right = left + width;
            set.clear();
        }
    }

    len as i32
}
```

@tab Java

```java
public int totalFruit(int[] fruits) {
    HashSet<Integer> set = new HashSet<>();

    for (int width = fruits.length; width >= 2; width--) {
        int left = 0;
        int right = width;

        while (right <= fruits.length) {
            for (int i = left; i < right; i++) {
                set.add(fruits[i]);
                if (set.size() > 2) {
                    break;
                }
            }
            if (set.size() == 2) {
                return width;
            }

            left++;
            right = left + width;
            set.clear();
        }
    }
    
    return fruits.length;
}
```

@tab Go

```go
func totalFruit(fruits []int) int {
    size := len(fruits)
    set := make(map[int]struct{})

    for width := size; width >= 2; width-- {
        left, right := 0, width

        for right <= size {
            for i := left; i < right; i++ {
                set[fruits[i]] = struct{}{}
                if len(set) > 2 {
                    break
                }
            }
            if len(set) == 2 {
                return width
            }

            left++
            right = left + width
            clear(set)
        }
    }

    return size
}
```

@tab C\#

```csharp
public int TotalFruit(int[] fruits)
{
    HashSet<int> set = new HashSet<int>();

    for (int width = fruits.Length; width >= 2; --width)
    {
        int left = 0;
        int right = width;

        while (right <= fruits.Length)
        {
            for (int i = left; i < right; ++i)
            {
                set.Add(fruits[i]);
                if (set.Count > 2)
                    break;
            }
            if (set.Count == 2)
                return width;

            ++left;
            right = left + width;
            set.Clear();
        }
    }

    return fruits.Length;
}
```

@tab C++

```cpp
int totalFruit(vector<int>& fruits) {
    auto size = fruits.size();
    unordered_set<int> set;

    for (auto width = size; width >= 2; --width) {
        auto left = 0;
        auto right = width;

        while (right <= size) {
            for (auto i = left; i < right; ++i) {
                set.insert(fruits[i]);
                if (set.size() > 2)
                    break;
            }
            if (set.size() == 2)
                return width;
            
            ++left;
            right = left + width;
            set.clear();
        }
    }

    return size;
}
```

:::

### 方法 2: 滑动窗口

::: code-tabs
@tab Rust

```rust
pub fn total_fruit(fruits: Vec<i32>) -> i32 {
    let mut map = HashMap::new();
    let mut left = 0;
    let mut res = 0;

    for right in 0..fruits.len() {
        map.entry(fruits[right])
            .and_modify(|v| *v += 1)
            .or_insert(1);

        while map.len() > 2 {
            if let Some(v) = map.get_mut(&fruits[left]) {
                *v -= 1;
            }
            if map[&fruits[left]] == 0 {
                map.remove(&fruits[left]);
            }
            left += 1;
        }

        res = std::cmp::max(res, right - left + 1);
    }

    res as i32
}
```

@tab Java

```java
public int totalFruit(int[] fruits) {
    int left = 0;
    int res = 0;
    HashMap<Integer, Integer> map = new HashMap<>();

    for (int right = 0; right < fruits.length; right++) {
        map.put(fruits[right], map.getOrDefault(fruits[right], 0) + 1);

        while (map.size() > 2) {
            map.put(fruits[left], map.get(fruits[left]) - 1);
            if (map.get(fruits[left]) == 0) {
                map.remove(fruits[left]);
            }
            left++;
        }

        res = Math.max(res, right - left + 1);
    }

    return res;
}
```

@tab Go

```go
func totalFruit(fruits []int) int {
    left, res := 0, 0
    _map := make(map[int]int)

    for right := 0; right < len(fruits); right++ {
        _map[fruits[right]]++

        for len(_map) > 2 {
            _map[fruits[left]]--
            if _map[fruits[left]] == 0 {
                delete(_map, fruits[left])
            }
            left++
        }

        res = max(res, right-left+1)
    }

    return res
}
```

@tab C\#

```csharp
public int TotalFruit(int[] fruits)
{
    int res = 0;
    int left = 0;
    Dictionary<int, int> map = new Dictionary<int, int>();

    for (int right = 0; right < fruits.Length; right++)
    {
        if (map.TryGetValue(fruits[right], out var count))
            map[fruits[right]] = count + 1;
        else
            map[fruits[right]] = 1;
        
        while (map.Count > 2)
        {
            map[fruits[left]]--;
            if (map[fruits[left]] == 0)
                map.Remove(fruits[left]);
            ++left;
        }

        res = Math.Max(res, right - left + 1);
    }
    
    return res;
}
```

@tab C++

```cpp
int totalFruit(vector<int>& fruits) {
    int res = 0;
    int left = 0;
    unordered_map<int, int> map;

    for (auto right = 0; right < fruits.size(); ++right) {
        map[fruits[right]]++;

        while (map.size() > 2) {
            map[fruits[left]]--;
            if (map[fruits[left]] == 0)
                map.erase(fruits[left]);
            ++left;
        }

        res = std::max(res, right - left + 1);
    }

    return res;
}
```

:::
