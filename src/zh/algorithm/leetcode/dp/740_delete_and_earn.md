---
title: 740, 删除并获得点数
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

## 一、题目描述
给你一个整数数组`nums`，你可以对它进行一些操作。

每次操作中，选择任意一个`nums[i]`，删除它并获得`nums[i]`的点数。之后，你必须删除**所有**等于`nums[i] - 1`和`nums[i] + 1`的元素。

开始你拥有`0`个点数。返回你能通过这些操作获得的最大点数。

**示例 1**
输入: nums = [3, 4, 2]
输出: 6
解释:
删除`4`获得`4`个点数，因此`3`也被删除。
之后，删除`2`获得`2`个点数。总共获得`6`个点数。

**示例 2**
输入: nums = [2, 2, 3, 3, 3, 4]
输出: 9
解释:
删除`3`获得`3`个点数，接着要删除两个`2`和`4`。
之后，再次删除`3`获得`3`个点数，再次删除`3`获得`3`个点数。
总共获得`9`个点数。

**提示**
- `1 <= nums.length <= 2 * 10⁴`
- `1 <= nums[i] <= 10⁴`

**相关主题**
- 数组
- 哈希表
- 动态规划


## 二、题解
### 方法 1: 动态规划
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

### 方法 2: 排序 + 动态规划
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