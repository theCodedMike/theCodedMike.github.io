---
title: 15, Three Sum
icon: discover
date: 2023-11-11
order: 9
sticky: true
category: hashtable
tag: 
  - medium
  - array
  - two pointers
  - sorting
---

## I Problem
Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j, i != k, and j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

**Example 1**
Input: nums = [-1, 0, 1, 2, -1, -4]
Output: [[-1, -1, 2],[-1, 0, 1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1, 0, 1] and [-1, -1, 2].
Notice that the order of the output and the order of the triplets does not matter.

**Example 2**
Input: nums = [0, 1, 1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

**Example 3**
Input: nums = [0, 0, 0]
Output: [[0, 0, 0]]
Explanation: The only possible triplet sums up to 0.

**Constraints**
- `3 <= nums.length <= 3000`
- `-10⁵ <= nums[i] <= 10⁵`

**Related Topics**
- Array
- Two Pointers
- Sorting

## II Solution
### Approach 1: Brute Force
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n^2*log(n))
///
/// Space Complexity: O(n)
pub fn three_sum(nums: Vec<i32>) -> Vec<Vec<i32>> {
    let len = nums.len();
    let mut res = HashSet::new();
    nums.sort_unstable();

    for i in 0..len {
        if i > 0 && nums[i] == nums[i - 1] {
            continue;
        }
        for j in i + 1..len {
            if let Ok(k) = &nums[j + 1..].binary_search(&(0 - (nums[i] + nums[j]))) {
                res.insert(vec![nums[i], nums[j], nums[*k + j + 1]]);
            }
        }
    }

    res.into_iter().collect()
}
```

@tab Java
```java
// Time Complexity: O(n^2*log(n))
//
// Space Complexity: O(n)
public List<List<Integer>> threeSum(int[] nums) {
    Arrays.sort(nums);
    Set<List<Integer>> set = new HashSet<>();

    for (int i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        for (int j = i + 1; j < nums.length; j++) {
            int k = Arrays.binarySearch(nums, j + 1, nums.length, -nums[i] - nums[j]);
            if (k > 0) {
                List<Integer> one = new ArrayList<>();
                one.add(nums[i]);
                one.add(nums[j]);
                one.add(nums[k]);
                set.add(one);
            }
        }
    }

    return set.stream().toList();
}
```
:::

### Approach 2: Sorting + Two Pointers
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n^2)
///
/// Space Complexity: O(n)
pub fn three_sum(nums: Vec<i32>) -> Vec<Vec<i32>> {
    let len = nums.len();
    let mut res = vec![];
    nums.sort_unstable();

    for i in 0..len {
        if i > 0 && nums[i] == nums[i - 1] {
            continue;
        }
        let mut left = i + 1;
        let mut right = len - 1;
        while left < right {
            let sum = nums[i] + nums[left] + nums[right];
            if sum > 0 {
                right -= 1;
            } else if sum < 0 {
                left += 1;
            } else {
                res.push(vec![nums[i], nums[left], nums[right]]);
                loop {
                    left += 1;
                    if nums[left] != nums[left - 1] || left >= right {
                        break;
                    }
                }
                loop {
                    right -= 1;
                    if nums[right] != nums[right + 1] || right <= left {
                        break;
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
// Time Complexity: O(n^2)
//
// Space Complexity: O(n)
public List<List<Integer>> threeSum(int[] nums) {
    Arrays.sort(nums);
    List<List<Integer>> res = new ArrayList<>();

    for (int i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        int left = i + 1;
        int right = nums.length - 1;
        while (left < right) {
            int sum = nums[i] + nums[left] + nums[right];
            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                List<Integer> one = new ArrayList<>();
                one.add(nums[i]);
                one.add(nums[left]);
                one.add(nums[right]);
                res.add(one);
                do {
                    left++;
                } while (nums[left] == nums[left - 1] && left < right);
                do {
                    right--;
                } while (nums[right] == nums[right + 1] && left < right);
            }
        }
    }

    return res;
}
```
:::