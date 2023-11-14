---
title: 454, 四数之和II
icon: discover
date: 2023-11-14
order: 12
sticky: true
category: hashtable
tag: 
  - medium
  - array
  - hash table
---

## 一、题目描述
给你四个整数数组`nums1`、`nums2`、`nums3`和`nums4`，数组长度都是`n`，请你计算有多少个元组`(i, j, k, l)`能满足：
- `0 <= i, j, k, l < n`
- `nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0`


**示例 1**
输入: nums1 = [1, 2], nums2 = [-2, -1], nums3 = [-1, 2], nums4 = [0, 2]
输出: 2
解释: 两个元组如下：
1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0

**示例 2**
输入: nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
输出: 1

**提示**
- `n == nums1.length`
- `n == nums2.length`
- `n == nums3.length`
- `n == nums4.length` 
- `1 <= n <= 200`
- `-2²⁸ <= nums1[i], nums2[j], nums3[k], nums4[l] <= 2²⁸`

**相关主题**
- 数组
- 哈希表


## 二、题解
### 方法 1: 使用哈希
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n^2)
///
/// Space Complexity: O(n^2)
pub fn four_sum_count(nums1: Vec<i32>, nums2: Vec<i32>, nums3: Vec<i32>, nums4: Vec<i32>) -> i32 {
    let len = nums1.len();
    let mut map = HashMap::with_capacity(len * len);
    for i in 0..len {
        for j in 0..len {
            map.entry(nums1[i] + nums2[j])
                .and_modify(|v| *v += 1)
                .or_insert(1);
        }
    }

    let mut res = 0;
    for k in 0..len {
        for l in 0..len {
            if let Some(v) = map.get(&(0 - nums3[k] - nums4[l])) {
                res += *v;
            }
        }
    }

    res
}
```

@tab Java
```java
// Time Complexity: O(n^2)
//
// Space Complexity: O(n^2)
public int fourSumCount(int[] nums1, int[] nums2, int[] nums3, int[] nums4) {
    int len = nums1.length;
    Map<Integer, Integer> map = new HashMap<>(len * len);
    for (int i = 0; i < len; i++) {
        for (int j = 0; j < len; j++) {
            int key = nums1[i] + nums2[j];
            map.put(key, map.getOrDefault(key, 0) + 1);
        }
    }

    int res = 0;
    for (int k = 0; k < len; k++) {
        for (int l = 0; l < len; l++) {
            int key = -nums3[k] - nums4[l];
            res += map.getOrDefault(key, 0);
        }
    }

    return res;
}
```
:::
