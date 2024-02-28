---
title: 1005, K次取反后最大化的数组和
icon: discover
date: 2024-02-27
order: 2
sticky: true
category: greedy
tag: 
  - easy
  - greedy
  - array
  - sorting
---

## 一、题目描述
给你一个整数数组`nums`和一个整数`k`，按以下方法修改该数组：
- 选择某个下标`i`并将`nums[i]`替换为`-nums[i]`。

重复这个过程恰好`k`次。可以多次选择同一个下标`i`。

以这种方式修改数组后，返回数组**可能的最大和**。

**示例 1**
输入: nums = [4, 2, 3], k = 1
输出: 5
解释: 选择下标`1`，`nums`变为`[4, -2, 3]`。

**示例 2**
输入: nums = [3, -1, 0, 2], k = 3
输出: 6
解释: 选择下标`(1, 2, 2)`，`nums`变为`[3, 1, 0, 2]`。

**示例 3**
输入: nums = [2, -3, -1, 5, -4], k = 2
输出: 13
解释: 选择下标`(1, 4)`，`nums`变为`[2, 3, -1, 5, 4]`。

**提示**
- `1 <= nums.length <= 10⁴`
- `-100 <= nums[i] <= 100`
- `1 <= k <= 10⁴`

**相关主题**
- 贪心
- 数组
- 排序


## 二、题解
### 方法 1: 从小到大修改每个负数
::: code-tabs
@tab Rust
```rust
///
/// 时间复杂度：O(n + C)，其中n是数组nums的长度，C是数组nums中元素的范围
/// 空间复杂度：O(C)
///
pub fn largest_sum_after_k_negations(nums: Vec<i32>, k: i32) -> i32 {
    let mut freq = HashMap::with_capacity(nums.len());
    let mut sum = 0;

    for num in nums {
        sum += num;
        freq.entry(num).and_modify(|c| *c += 1).or_insert(1);
    }

    for i in -100..0 {
        if freq.contains_key(&i) {
            let ops = std::cmp::min(k, freq[&i]);

            sum += (-i) * ops * 2;
            *freq.entry(i).or_insert(0) -= ops;
            *freq.entry(-i).or_insert(0) += ops;
            k -= ops;

            if k == 0 {
                break;
            }
        }
    }

    if k % 2 == 1 && !freq.contains_key(&0) {
        for i in 1..=100 {
            if freq.contains_key(&i) && freq[&i] != 0 {
                sum -= i * 2;
                break;
            }
        }
    }

    sum
}
```

@tab Java
```java
/**
 * 时间复杂度：O(n + C)，其中n是数组nums的长度，C是数组nums中元素的范围
 * 空间复杂度：O(C)
 */
public int largestSumAfterKNegations(int[] nums, int k) {
    Map<Integer, Integer> freq = new HashMap<>(nums.length);
    int sum = 0;

    for (int num : nums) {
        sum += num;
        freq.put(num, freq.getOrDefault(num, 0) + 1);
    }

    for (int i = -100; i < 0; i++) {
        if (freq.containsKey(i)) {
            int ops = Math.min(k, freq.get(i));

            sum += (-i) * ops * 2;
            freq.put(i, freq.get(i) - ops);
            freq.put(-i, freq.getOrDefault(-i, 0) + ops);
            k -= ops;

            if (k == 0) {
                break;
            }
        }
    }

    if (k % 2 == 1 && !freq.containsKey(0)) {
        for (int i = 1; i <= 100; i++) {
            if (freq.containsKey(i) && freq.get(i) != 0) {
                sum -= i * 2;
                break;
            }
        }
    }

    return sum;
}
```
:::

### 方法 2: 先排序再修改负数
::: code-tabs
@tab Rust
```rust
///
/// 时间复杂度：O(n * log(n))
/// 空间复杂度：O(n)
///
pub fn largest_sum_after_k_negations(nums: Vec<i32>, k: i32) -> i32 {
    nums.sort_unstable();
    let mut sum = 0;
    let mut min = i32::MAX;

    for i in 0..nums.len() {
        if nums[i] < 0 && k > 0 {
            nums[i] = -nums[i];
            k -= 1;
        }

        sum += nums[i];

        if nums[i] < min {
            min = nums[i];
        }
    }

    sum - (if k % 2 == 0 { 0 } else { 2 * min })
}
```

@tab Java
```java
/**
 * 时间复杂度：O(n * log(n))
 * 空间复杂度：O(n)
 */
public int largestSumAfterKNegations(int[] nums, int k) {
    Arrays.sort(nums);
    int sum = 0;
    int min = Integer.MAX_VALUE;

    for (int i = 0; i < nums.length; i++) {
        if (nums[i] < 0 && k > 0) {
            nums[i] = -nums[i];
            k--;
        }

        sum += nums[i];

        if (nums[i] < min) {
            min = nums[i];
        }
    }

    return sum - (k % 2 == 0 ? 0 : 2 * min);
}
```
:::

### 方法 3: 使用小顶堆
::: code-tabs
@tab Rust
```rust
///
/// 时间复杂度：O(n * log(n))
/// 空间复杂度：O(n)
///
pub fn largest_sum_after_k_negations(nums: Vec<i32>, k: i32) -> i32 {
    let mut heap = BinaryHeap::with_capacity(nums.len());
    let mut sum = 0;

    for num in nums {
        sum += num;
        heap.push(std::cmp::Reverse(num));
    }

    while k > 0 {
        let min = heap.pop().unwrap_or_default().0;
        sum -= 2 * min;
        heap.push(std::cmp::Reverse(-min));
        k -= 1;
    }

    sum
}
```

@tab Java
```java
/**
 * 时间复杂度：O(n * log(n))
 * 空间复杂度：O(n)
 */
public int largestSumAfterKNegations(int[] nums, int k) {
    PriorityQueue<Integer> heap = new PriorityQueue<>(nums.length);
    int sum = 0;

    for (int num : nums) {
        sum += num;
        heap.add(num);
    }

    while (k-- > 0) {
        int min = heap.poll();
        sum -= 2 * min;
        heap.add(-min);
    }
    
    return sum;
}
```
:::