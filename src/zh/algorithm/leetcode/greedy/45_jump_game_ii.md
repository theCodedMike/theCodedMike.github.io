---
title: 45, 跳跃游戏II
icon: discover
date: 2024-03-17
order: 11
sticky: true
category: greedy
tag: 
  - medium
  - array
  - greedy
  - dynamic programming
---

## 一、题目描述
给定一个长度为`n`的`0`**索引**整数数组`nums`。初始位置为`nums[0]`。

每个元素`nums[i]`表示从索引`i`向前跳转的最大长度。换句话说，如果你在`nums[i]`处，你可以跳转到任意`nums[i + j]`处:
- `0 <= j <= nums[i]`
- `i + j < n`

返回到达`nums[n - 1]`的最小跳跃次数。生成的测试用例可以到达`nums[n - 1]`。

**示例 1**
输入: nums = [2, 3, 1, 1, 4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是`2`。从下标为`0`跳到下标为`1`的位置，跳`1`步，然后跳`3`步到达数组的最后一个位置。

**示例 2**
输入: nums = [2, 3, 0, 1, 4]
输出: 2

**提示**
- `1 <= nums.length <= 10⁴`
- `0 <= nums[i] <= 1000`
- 题目保证可以到达`nums[n - 1]`

**相关主题**
- 贪心
- 数组
- 动态规划


## 二、题解
### 方法 1: 反向遍历查找
::: code-tabs
@tab Rust
```rust
pub fn jump(nums: Vec<i32>) -> i32 {
    let mut pos = nums.len() - 1;
    let mut steps = 0;

    while pos != 0 {
        for i in 0..pos {
            if i + nums[i] as usize >= pos {
                pos = i;
                steps += 1;
                break;
            }
        }
    }

    steps
}
```

@tab Java
```java
public int jump(int[] nums) {
    int pos = nums.length - 1;
    int steps = 0;

    while (pos != 0) {
        for (int i = 0; i < pos; i++) {
            if (i + nums[i] >= pos) {
                pos = i;
                steps++;
                break;
            }
        }
    }

    return steps;
}
```

@tab Go
```go
func jump(nums []int) int {
    pos := len(nums) - 1
    steps := 0
    
    for pos != 0 {
        for i := 0; i < pos; i++ {
            if i + nums[i] >= pos {
                pos = i
                steps++
                break
            }
        }
    }

    return steps
}
```
:::

### 方法 2: 贪心
::: code-tabs
@tab Rust
```rust
pub fn jump(nums: Vec<i32>) -> i32 {
    let (mut max_pos, len, mut end) = (0, nums.len(), 0);
    let mut steps = 0;

    for i in 0..len - 1 {
        if max_pos >= i {
            max_pos = std::cmp::max(max_pos, i + nums[i] as usize);
            if i == end {
                end = max_pos;
                steps += 1;
            }
        }
    }

    steps
}
```

@tab Java
```java
public int jump(int[] nums) {
    int maxPos = 0, len = nums.length, end = 0;
    int steps = 0;

    for (int i = 0; i < len - 1; i++) {
        if (maxPos >= i) {
            maxPos = Math.max(maxPos, i + nums[i]);
            if (i == end) {
                end = maxPos;
                steps++;
            }
        }
    }

    return steps;
}
```

@tab Go
```go
func jump(nums []int) int {
    maxPos, size, end := 0, len(nums), 0
    steps := 0
    
    for i := 0; i < size - 1; i++ {
        if maxPos >= i {
            maxPos = max(maxPos, i + nums[i])
            if i == end {
                end = maxPos
                steps++
            }
        }
    }

    return steps
}
```
:::