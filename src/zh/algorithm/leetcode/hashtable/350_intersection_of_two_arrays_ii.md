---
title: 350, 两个数组的交集II
icon: discover
date: 2023-11-08
order: 6
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
给你两个整数数组`nums1`和`nums2`，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。

**示例 1**
输入: nums1 = [1, 2, 2, 1], nums2 = [2, 2]
输出: [2, 2]

**示例 2**
输入: nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
输出: [4, 9]
解释: [9, 4]也是可以接受的。

**提示**
- `1 <= nums1.length, nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 1000`

**进阶**
- 如果给定的数组已经排好序呢？你将如何优化你的算法？
- 如果`nums1`的大小比`nums2`小，哪种方法更优？
- 如果`nums2`的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？

**相关主题**
- 数组
- 哈希表
- 双指针
- 二分查找
- 排序

## 二、题解
### 方法 1: 暴力解法
::: code-tabs
@tab Rust
```rust
pub fn intersect(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
    let mut res = vec![];

    for i in 0..nums1.len() {
        for j in 0..nums2.len() {
            if nums1[i] == nums2[j] {
                res.push(nums1[i]);
                nums2[j] = i32::MIN;
                break;
            }
        }
    }

    res
}
```

@tab Java
```java
public int[] intersect(int[] nums1, int[] nums2) {
    List<Integer> res = new ArrayList<>();

    for (int num1 : nums1) {
        for (int j = 0; j < nums2.length; j++) {
            if (num1 == nums2[j]) {
                res.add(num1);
                nums2[j] = Integer.MIN_VALUE;
                break;
            }
        }
    }

    return res.stream().mapToInt(Integer::intValue).toArray();
}
```
:::

### 方法 2: 哈希
::: code-tabs
@tab Rust
```rust
pub fn intersect(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
    let mut map =
        nums1
            .into_iter()
            .fold(HashMap::with_capacity(nums2.len()), |mut map, num| {
                map.entry(num).and_modify(|v| *v += 1).or_insert(1);
                map
            });

    nums2
        .into_iter()
        .filter(|num| match map.get_mut(num) {
            None => false,
            Some(v) => {
                let count = *v;
                *v -= 1;
                count > 0
            }
        })
        .collect()
}
```

@tab Java
```java
public int[] intersect(int[] nums1, int[] nums2) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int num: nums1) {
        map.put(num, map.getOrDefault(num, 0) + 1);
    }

    return Arrays.stream(nums2).filter(num -> {
        Integer count = map.getOrDefault(num, 0);
        map.put(num, count - 1);
        return count > 0;
    }).toArray();
}
```
:::

### 方法 3: 排序 + 双指针
::: code-tabs
@tab Rust
```rust
pub fn intersect(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
    nums1.sort_unstable();
    nums2.sort_unstable();

    let mut res = vec![];
    let mut i1 = 0;
    let mut i2 = 0;
    while i1 < nums1.len() && i2 < nums2.len() {
        if nums1[i1] > nums2[i2] {
            i2 += 1;
        } else if nums1[i1] < nums2[i2] {
            i1 += 1;
        } else {
            res.push(nums1[i1]);
            i1 += 1;
            i2 += 1;
        }
    }

    res
}
```

@tab Java
```java
public int[] intersect(int[] nums1, int[] nums2) {
    Arrays.sort(nums1);
    Arrays.sort(nums2);

    List<Integer> res = new ArrayList<>();
    int i1 = 0, i2 = 0;
    while (i1 < nums1.length && i2 < nums2.length) {
        if (nums1[i1] < nums2[i2]) {
            i1++;
        } else if (nums1[i1] > nums2[i2]) {
            i2++;
        } else {
            res.add(nums1[i1]);
            i1++;
            i2++;
        }
    }

    return res.stream().mapToInt(Integer::intValue).toArray();
}
```
:::
