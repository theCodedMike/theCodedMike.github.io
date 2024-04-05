---
title: 740, Delete and Earn
icon: discover
date: 2024-04-04
order: 5
sticky: true
category: dynamic programming
tag: 
  - medium
  - array
  - hash table
  - dynamic programming
---

## I Problem
You are given an integer array `nums`. You want to maximize the number of points you get by performing the following operation any number of times:
- Pick any `nums[i]` and delete it to earn `nums[i]` points. Afterwards, you must delete **every** element equal to `nums[i] - 1` and every element equal to `nums[i] + 1`.

Return *the **maximum number of points** you can earn by applying the above operation some number of times*.

**Example 1**
Input: nums = [3, 4, 2]
Output: 6
Explanation: You can perform the following operations:
- Delete `4` to earn `4` points. Consequently, `3` is also deleted. nums = [2].
- Delete `2` to earn `2` points. nums = [].
You earn a total of `6` points.

**Example 2**
Input: nums = [2, 2, 3, 3, 3, 4]
Output: 9
Explanation: You can perform the following operations:
- Delete a `3` to earn `3` points. All `2's` and `4's` are also deleted. nums = [3, 3].
- Delete a `3` again to earn `3` points. nums = [3].
- Delete a `3` once more to earn `3` points. nums = [].
You earn a total of `9` points.

**Constraints**
- `1 <= nums.length <= 2 * 10⁴`
- `1 <= nums[i] <= 10⁴`

**Related Topics**
- Array
- Hash Table
- Dynamic Programming

## II Solution
### Approach 1: Dynamic Programming
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(N + M)
/// Space Complexity: O(M)
pub fn delete_and_earn(nums: Vec<i32>) -> i32 {
    let mut max_val = 0;
    for num in &nums {
        max_val = max(max_val, *num);
    }

    let mut sum = vec![0; max_val as usize + 1];
    for num in nums {
        sum[num as usize] += num;
    }

    let rob = || {
        let (mut first, mut second) = (sum[0], max(sum[0], sum[1]));
        for i in 2..sum.len() {
            (first, second) = (second, max(first + sum[i], second));
        }
        second
    };

    rob()
}
```

@tab Java
```java
public int deleteAndEarn(int[] nums) {
    int maxVal = 0;
    for (int num : nums) {
        maxVal = Math.max(maxVal, num);
    }

    int[] sum = new int[maxVal + 1];
    for (int num : nums) {
        sum[num] += num;
    }

    Supplier<Integer> rob = () -> {
        int first = sum[0], second = Math.max(sum[0], sum[1]);
        for (int i = 2; i < sum.length; i++) {
            int temp = second;
            second = Math.max(first + sum[i], second);
            first = temp;
        }
        return second;
    };

    return rob.get();
}
```

@tab Go
```go
func deleteAndEarn(nums []int) int {
    var maxVal int
    for _, num := range nums {
        maxVal = max(maxVal, num)
    }
    
    sum := make([]int, maxVal+1)
    for _, num := range nums {
        sum[num] += num
    }
    
    rob := func() int {
        first, second := sum[0], max(sum[0], sum[1])
        for i, size := 2, len(sum); i < size; i++ {
            first, second = second, max(first+sum[i], second)
        }
        return second
    }
    
    return rob()
}
```
:::

### Approach 2: Sorting + Dynamic Programming
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(N*log(N))
/// Space Complexity: O(N)
pub fn delete_and_earn(nums: Vec<i32>) -> i32 {
    let mut res = 0;
    nums.sort_unstable();

    let mut sum = vec![nums[0]; 1];
    let rob: fn(&mut [i32]) -> i32 = |sum| {
        let len = sum.len();
        if len == 1 {
            return sum[0];
        }
        let (mut first, mut second) = (sum[0], max(sum[0], sum[1]));
        for i in 2..len {
            (first, second) = (second, max(first + sum[i], second));
        }
        second
    };

    for i in 1..nums.len() {
        let val = nums[i];
        if val == nums[i - 1] {
            sum.last_mut().map(|last| *last += val);
        } else if val == nums[i - 1] + 1 {
            sum.push(val);
        } else {
            res += rob(&mut sum);
            sum.truncate(1);
            sum[0] = val;
        }
    }

    res += rob(&mut sum);
    res
}
```

@tab Java
```java
public int deleteAndEarn(int[] nums) {
    int res = 0;
    Arrays.sort(nums);

    List<Integer> sum = new ArrayList<>(1) {{
        this.add(nums[0]);
    }};
    Supplier<Integer> rob = () -> {
        int len =  sum.size();
        if (len == 1) {
            return sum.get(0);
        }
        int first = sum.get(0), second = Math.max(sum.get(0), sum.get(1));
        for (int i = 2; i < len; i++) {
            int temp = second;
            second = Math.max(first + sum.get(i), second);
            first = temp;
        }
        return second;
    };

    for (int i = 1; i < nums.length; i++) {
        int val = nums[i];
        if (val == nums[i - 1]) {
            sum.set(sum.size() - 1, sum.getLast() + val);
        } else if (val == nums[i - 1] + 1) {
            sum.add(val);
        } else {
            res += rob.get();
            sum.clear();
            sum.add(val);
        }
    }

    res += rob.get();
    return res;
}
```

@tab Go
```go
func deleteAndEarn(nums []int) int {
    res := 0
    slices.Sort(nums)
    
    sum := make([]int, 1)
    sum[0] = nums[0]
    rob := func() int {
        size := len(sum)
        if size == 1 {
            return sum[0]
        }
        
        first, second := sum[0], max(sum[0], sum[1])
        for i := 2; i < size; i++ {
            first, second = second, max(first+sum[i], second)
        }
        
        return second
    }
    
    for i, size := 1, len(nums); i < size; i++ {
        val := nums[i]
        if val == nums[i-1] {
            sum[len(sum)-1] += val
        } else if val == nums[i-1]+1 {
            sum = append(sum, val)
        } else {
            res += rob()
            sum = sum[:1]
            sum[0] = val
        }
    }
    
    res += rob()
    return res
}
```
:::