---
title: 18, Four Sum
icon: discover
date: 2023-11-13
order: 11
sticky: true
category: hashtable
tag: 
  - medium
  - array
  - two pointers
  - sorting
---

## I Problem
Given an array `nums` of `n` integers, return *an array of all the **unique** quadruplets* `[nums[a], nums[b], nums[c], nums[d]]` such that:
- `0 <= a, b, c, d < n`
- `a`, `b`, `c`, and `d` are **distinct**.
- `nums[a] + nums[b] + nums[c] + nums[d] == target`

You may return the answer in **any order**.

**Example 1**
Input: nums = [1, 0, -1, 0, -2, 2], target = 0
Output: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]

**Example 2**
Input: nums = [2, 2, 2, 2, 2], target = 8
Output: [[2, 2, 2, 2]]

**Constraints**
- `1 <= nums.length <= 200`
- `10⁹ <= nums[i] <= 10⁹`
- `10⁹ <= target <= 10⁹`

**Related Topics**
- Array
- Two Pointers
- Sorting

## II Solution
### Approach 1: Sorting + Two Pointers
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n^3)
///
/// Space Complexity: O(n)
pub fn four_sum(nums: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
    let len = nums.len();
    let mut res = vec![];
    if len < 4 {
        return res;
    }
    nums.sort_unstable();

    for i in 0..len - 3 {
        if i > 0 && nums[i] == nums[i - 1] {
            continue;
        }
        for j in i + 1..len - 2 {
            if j > i + 1 && nums[j] == nums[j - 1] {
                continue;
            }

            let mut m = j + 1;
            let mut n = len - 1;
            while m < n {
                let sum = nums[i] as i64 + nums[j] as i64 + nums[m] as i64 + nums[n] as i64;
                if sum > target {
                    n -= 1;
                } else if sum < target {
                    m += 1;
                } else {
                    res.push(vec![nums[i], nums[j], nums[m], nums[n]]);
                    loop {
                        m += 1;
                        if nums[m] != nums[m - 1] || m >= n {
                            break;
                        }
                    }
                    loop {
                        n -= 1;
                        if nums[n] != nums[n + 1] || m >= n {
                            break;
                        }
                    }
                }
            }
        }
    }

    res
}
```

@tab Java
```java
// Time Complexity: O(n^3)
//
// Space Complexity: O(n)
public List<List<Integer>> fourSum(int[] nums, int target) {
    int len = nums.length;
    List<List<Integer>> res = new ArrayList<>();
    if (len < 4) {
        return res;
    }
    Arrays.sort(nums);

    for (int i = 0; i < len - 3; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        for (int j = i + 1; j < len - 2; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1]) {
                continue;
            }

            int m = j + 1;
            int n = len - 1;
            while (m < n) {
                long sum = (long)nums[i] + (long)nums[j] + (long)nums[m] + (long)nums[n];
                if (sum > target) {
                    n--;
                } else if (sum < target) {
                    m++;
                } else {
                    res.add(List.of(nums[i], nums[j], nums[m], nums[n]));
                    do {
                        m++;
                    } while (nums[m] == nums[m - 1] && m < n);
                    do {
                        n--;
                    } while (nums[n] == nums[n + 1] && m < n);
                }
            }
        }
    }

    return res;
}
```
:::

### Approach 2: Sorting + Four Pointers
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n^2)
///
/// Space Complexity: O(n)
pub fn four_sum(nums: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
    let len = nums.len();
    let mut res = vec![];
    if len < 4 {
        return res;
    }
    nums.sort_unstable();

    let mut i = 0;
    let mut j = len - 1;
    while i < j {
        let mut m = i + 1;
        let mut n = j - 1;
        while m < n {
            let sum = nums[i] as i64 + nums[j] as i64 + nums[m] as i64 + nums[n] as i64;
            if sum > target {
                n -= 1;
            } else if sum < target {
                m += 1;
            } else {
                res.push(vec![nums[i], nums[m], nums[n], nums[j]]);
                loop {
                    m += 1;
                    if nums[m] != nums[m - 1] || m >= n {
                        break;
                    }
                }
                loop {
                    n -= 1;
                    if nums[n] != nums[n + 1] || m >= n {
                        break;
                    }
                }
            }
        }
        if i + 3 <= j {
            loop {
                j -= 1;
                if nums[j] != nums[j + 1] || i + 3 > j {
                    break;
                }
            }
        } else {
            j = len - 1;
            loop {
                i += 1;
                if nums[i] != nums[i - 1] || i + 3 > j {
                    break;
                }
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
// Space Complexity: O(n)
public List<List<Integer>> fourSum(int[] nums, int target) {
    int len = nums.length;
    List<List<Integer>> res = new ArrayList<>();
    if (len < 4) {
        return res;
    }
    Arrays.sort(nums);

    int i = 0;
    int j = len - 1;
    while (i < j) {
        int m = i + 1;
        int n = j - 1;
        while (m < n) {
            long sum = (long)nums[i] + (long)nums[j] + (long)nums[m] + (long)nums[n];
            if (sum > target) {
                n--;
            } else if (sum < target) {
                m++;
            } else {
                res.add(List.of(nums[i], nums[m], nums[n], nums[j]));
                do {
                    m++;
                } while (nums[m] == nums[m - 1] && m < n);
                do {
                    n--;
                } while (nums[n] == nums[n + 1] && m < n);
            }
        }
        if (i + 3 <= j) {
            do {
                j--;
            } while (nums[j] == nums[j + 1] && i + 3 <= j);
        } else {
            j = len - 1;
            do {
                i++;
            } while (nums[i] == nums[i - 1] && i + 3 <= j);
        }
    }

    return res;
}
```
:::