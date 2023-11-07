---
title: 349, 两个数组的交集
icon: discover
date: 2023-11-07
order: 5
sticky: true
category: hashtable
tag: 
  - easy
  - array
  - hash table
  - binary search
  - sorting
  - two pointers
---

## 一、题目描述
给定两个数组`nums1`和`nums2`，返回*它们的交集*。输出结果中的每个元素一定是**唯一**的。我们可以**不考虑输出结果的顺序**。

**示例 1**
输入: nums1 = [1, 2, 2, 1], nums2 = [2, 2]
输出: [2]

**示例 2**
输入: nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
输出: [9, 4]
解释: [4, 9]也是可以通过的

**提示**
- `1 <= nums1.length, nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 1000`

**相关主题**
- 数组
- 哈希表
- 双指针
- 二分查找
- 排序

## 二、题解
### 方法 1: 哈希
::: code-tabs
@tab Rust
```rust
pub fn intersection(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
    let mut map =
        nums1
            .into_iter()
            .fold(HashMap::with_capacity(nums2.len()), |mut map, num| {
                map.entry(num).or_insert(true);
                map
            });

    nums2
        .into_iter()
        .filter(|num| match map.get_mut(num) {
            None => false,
            Some(val) => {
                let contains = *val;
                if contains {
                    *val = false;
                }
                contains
            }
        })
        .collect()
}
```

@tab Java
```java
public int[] intersection(int[] nums1, int[] nums2) {
    Map<Integer, Boolean> map = Arrays.stream(nums1)
            .boxed()
            .collect(Collectors.toMap(Integer::intValue, (num) -> true, (key1, key2) -> key1));

    return Arrays.stream(nums2).filter(num -> {
        Boolean contains = map.getOrDefault(num, false);
        if (contains) {
            map.put(num, false);
        }
        return contains;
    }).toArray();
}
```
:::

### 方法 2: 排序 + 双指针
::: code-tabs
@tab Rust
```rust
pub fn intersection(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
    nums1.sort_unstable();
    nums2.sort_unstable();
    let mut set = HashSet::with_capacity(nums1.len());
    let mut i1 = 0;
    let mut i2 = 0;

    while i1 < nums1.len() && i2 < nums2.len() {
        if nums1[i1] < nums2[i2] {
            i1 += 1;
        } else if nums1[i1] > nums2[i2] {
            i2 += 1;
        } else {
            set.insert(nums1[i1]);
            i1 += 1;
            i2 += 1;
        }
    }

    set.into_iter().collect()
}
```

@tab Java
```java
public int[] intersection(int[] nums1, int[] nums2) {
    Arrays.sort(nums1);
    Arrays.sort(nums2);
    HashSet<Integer> set = new HashSet<>();
    int i1 = 0;
    int i2 = 0;

    while (i1 < nums1.length && i2 < nums2.length) {
        if (nums1[i1] > nums2[i2]) {
            i2++;
        } else if (nums1[i1] < nums2[i2]) {
            i1++;
        } else {
            set.add(nums1[i1]);
            i1++;
            i2++;
        }
    }

    return set.stream().mapToInt(Integer::intValue).toArray();
}
```
:::