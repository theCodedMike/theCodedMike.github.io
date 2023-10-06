---
title: 26, 删除有序数组中的重复项
icon: discover
date: 2023-10-06
order: 5
sticky: true
category: array
tag: 
  - easy
  - array
  - two pointers
---

## 一、题目描述
给你一个非严格递增排列的数组nums，请你原地删除重复出现的元素，使每个元素只出现一次，返回删除后数组的新长度。元素的相对顺序应该保持一致。然后返回nums中唯一元素的个数。

考虑nums的唯一元素的数量为k，你需要做以下事情确保你的题解可以被通过：

- 更改数组nums，使nums的前k个元素包含唯一元素，并按照它们最初在nums中出现的顺序排列。nums的其余元素与nums的大小不重要。
- 返回k。

**示例 1:**
输入: nums = [1,1,2]
输出: ```2, nums = [1,2,_]```
解释: 函数应该返回新的长度2，并且原数组nums的前两个元素被修改为1, 2。不需要考虑数组中超出新长度后面的元素。

**示例 2:**
输入: nums = [0,0,1,1,1,2,2,3,3,4]
输出: ```5, nums = [0,1,2,3,4,_,_,_,_,_]```
解释: 函数应该返回新的长度5，并且原数组nums的前五个元素被修改为0, 1, 2, 3, 4。不需要考虑数组中超出新长度后面的元素。

**提示:**

- 1 <= nums.length <= 3 * 10⁴
- -10⁴ <= nums[i] <= 10⁴
- nums按非递减排序

**相关主题**

- 数组
- 双指针

## 二、题解
### 方法 1: 暴力解法
::: code-tabs
@tab Rust
```rust
pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
    let mut len = nums.len();
    let mut target = nums[0];
    let mut i = 1;
    while i < len {
        if nums[i] == target {
            for j in i..len {
                nums[j - 1] = nums[j];
            }
            len -= 1;
        } else {
            target = nums[i];
            i += 1;
        }
    }
    len as i32
}
```

@tab Java
```java
public int removeDuplicates(int[] nums) {
    int len = nums.length;
    int target = nums[0];
    for (int i = 1; i < len; i++) {
        if (nums[i] == target) {
            for (int j = i; j < len; j++) {
                nums[j - 1] = nums[j];
            }
            --len;
            --i;
        } else {
            target = nums[i];
        }
    }
    return len;
}
```
:::

### 方法 2: 双指针
::: code-tabs
@tab Rust
```rust
pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
    let mut slow = 0;
    for fast in 1..nums.len() {
        if nums[fast] != nums[slow] {
            slow += 1;
            nums[slow] = nums[fast];
        }
    }
    slow as i32 + 1
}
```

@tab Java
```java
public int removeDuplicates(int[] nums) {
    int slow = 0;
    for (int fast = 1; fast < nums.length; fast++) {
        if (nums[fast] != nums[slow]) {
            ++slow;
            nums[slow] = nums[fast];
        }
    }
    return slow + 1;
}
```
:::