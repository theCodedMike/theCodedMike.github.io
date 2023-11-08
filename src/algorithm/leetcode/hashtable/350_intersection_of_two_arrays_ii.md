---
title: 350, Intersection of Two Arrays II
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

## I Problem
Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must appear as many times as it shows in both arrays and you may return the result in **any order**   .

**Example 1**
Input: nums1 = [1, 2, 2, 1], nums2 = [2, 2]
Output: [2, 2]

**Example 2**
Input: nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
Output: [4, 9]
Explanation: [9, 4] is also accepted.

**Constraints**
- `1 <= nums1.length, nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 1000`

**Follow Up**
- What if the given array is already sorted? How would you optimize your algorithm?
- What if `nums1`'s size is small compared to `nums2`'s size? Which algorithm is better?
- What if elements of `nums2` are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

**Related Topics**
- Array
- Hash Table
- Two Pointers
- Binary Search
- Sorting

## II Solution
### Approach 1: Brute Force
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

### Approach 2: Use Hash
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

### Approach 3: Sorting + Two Pointers
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
