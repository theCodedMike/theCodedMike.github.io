---
title: 1005, Maximize Sum Of Array After K Negations
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

## I Problem
Given an integer array `nums` and an integer `k`, modify the array in the following way:
- choose an index `i` and replace `nums[i]` with `-nums[i]`.

You should apply this process exactly `k` times. You may choose the same index `i` multiple times.

Return *the largest possible sum of the array after modifying it in this way*.

**Example 1**
Input: nums = [4, 2, 3], k = 1
Output: 5
Explanation: Choose index `1` and`nums`becomes `[4, -2, 3]`.

**Example 2**
Input: nums = [3, -1, 0, 2], k = 3
Output: 6
Explanation: Choose indices `(1, 2, 2)` and nums becomes `[3, 1, 0, 2]`.

**Example 3**
Input: nums = [2, -3, -1, 5, -4], k = 2
Output: 13
Explanation: Choose indices `(1, 4)` and nums becomes `[2, 3, -1, 5, 4]`.

**Constraints**
- `1 <= nums.length <= 10⁴`
- `-100 <= nums[i] <= 100`
- `1 <= k <= 10⁴`

**Related Topics**
- Greedy
- Array
- Sorting


## II Solution
### Approach 1: Modify Each Negative Number From Small To Large
::: code-tabs
@tab Rust
```rust
///
/// Time Complexity: O(n + C)，n is the len of nums, and C is range of the elems
/// Space Complexity: O(C)
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
 * Time Complexity: O(n + C), n is the len of nums, and C is range of the elems
 * Space Complexity: O(C)
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

### Approach 2: Sort Then Modify Each Negative Number
::: code-tabs
@tab Rust
```rust
///
/// Time Complexity: O(n * log(n))
/// Space Complexity: O(n)
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
 * Time Complexity: O(n * log(n))
 * Space Complexity: O(n)
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

### Approach 3: Use Min-Heap
::: code-tabs
@tab Rust
```rust
///
/// Time Complexity: O(n * log(n))
/// Space Complexity: O(n)
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
 * Time Complexity: O(n * log(n))
 * Space Complexity: O(n)
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