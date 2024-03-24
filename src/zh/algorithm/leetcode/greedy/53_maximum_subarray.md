---
title: 53, 最大子序和
icon: discover
date: 2024-03-24
order: 16
sticky: true
category: greedy
tag: 
  - medium
  - array
  - divide and conquer
  - dynamic programming
---

## 一、题目描述
给你一个整数数组`nums`，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

**子数组**是数组中的一个连续部分。

**示例 1**
输入: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
输出: 6
解释: 连续子数组`[4,-1,2,1]`的和最大，为`6`。

**示例 2**
输入: nums = [1]
输出: 1

**示例 3**
输入: nums = [5, 4, -1, 7, 8]
输出: 23

**提示**
- `1 <= nums.length <= 10⁵`
- `-10⁴ <= nums[i] <= 10⁴`

**进阶**
如果你已经实现复杂度为`O(n)`的解法，尝试使用更为精妙的**分治法**求解。

**相关主题**
- 数组
- 分治
- 动态规划


## 二、题解
### 方法 1: 动态规划
::: code-tabs
@tab Rust
```rust
/// 时间复杂度：O(n)
/// 空间复杂度：O(1)
pub fn max_sub_array(nums: Vec<i32>) -> i32 {
    let (mut pre, mut res) = (0, nums[0]);

    for num in nums {
        pre = max(pre + num, num);
        res = max(res, pre);
    }

    res
}
```

@tab Java
```java
/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
public int maxSubArray(int[] nums) {
    int pre = 0, res = nums[0];

    for (int num : nums) {
        pre = Math.max(pre + num, num);
        res = Math.max(res, pre);
    }

    return res;
}
```

@tab Go
```go
// 时间复杂度：O(n)
// 空间复杂度：O(1)
func maxSubArray(nums []int) int {
    pre, res := 0, nums[0]

    for _, num := range nums {
        pre = max(pre+num, num)
        res = max(res, pre)
    }

    return res
}
```
:::

### 方法 2: 前缀和
::: code-tabs
@tab Rust
```rust
/// 时间复杂度：O(n)
/// 空间复杂度：O(1)
pub fn max_sub_array(nums: Vec<i32>) -> i32 {
    let mut res = i32::MIN;
    let (mut min_pre_sum, mut pre_sum) = (0, 0);

    for num in nums {
        pre_sum += num;
        res = max(res, pre_sum - min_pre_sum);
        min_pre_sum = min(min_pre_sum, pre_sum);
    }

    res
}
```

@tab Java
```java
/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
public int maxSubArray(int[] nums) {
    int res = Integer.MIN_VALUE;
    int min_pre_sum = 0, pre_sum = 0;

    for (int num : nums) {
        pre_sum += num;
        res = Math.max(res, pre_sum - min_pre_sum);
        min_pre_sum = Math.min(min_pre_sum, pre_sum);
    }

    return res;
}
```

@tab Go
```go
// 时间复杂度：O(n)
// 空间复杂度：O(1)
func maxSubArray(nums []int) int {
    res := math.MinInt
    minPreSum, preSum := 0, 0

    for _, num := range nums {
        preSum += num
        res = max(res, preSum-minPreSum)
        minPreSum = min(minPreSum, preSum)
    }

    return res
}
```
:::

### 方法 3: 分治
::: code-tabs
@tab Rust
```rust
/// 时间复杂度：O(n)
/// 空间复杂度：O(log(n))
pub fn max_sub_array(nums: Vec<i32>) -> i32 {
    struct Status {
        l_sum: i32,
        r_sum: i32,
        m_sum: i32,
        i_sum: i32,
    }

    const PUSH_UP: fn(Status, Status) -> Status = |l, r| Status {
        l_sum: max(l.l_sum, l.i_sum + r.l_sum),
        r_sum: max(r.r_sum, r.i_sum + l.r_sum),
        m_sum: max(max(l.m_sum, r.m_sum), l.r_sum + r.l_sum),
        i_sum: l.i_sum + r.i_sum,
    };

    const GET: fn(&[i32], usize, usize) -> Status = |nums, l, r| {
        if l == r {
            return Status {
                l_sum: nums[l],
                r_sum: nums[l],
                m_sum: nums[l],
                i_sum: nums[l],
            };
        }

        let m = (l + r) >> 1;
        let l_sub = GET(nums, l, m);
        let r_sub = GET(nums, m + 1, r);

        PUSH_UP(l_sub, r_sub)
    };

    GET(&nums, 0, nums.len() - 1).m_sum
}
```

@tab Java
```java
static class Status {
    int lSum; // 表示区间[l,r]内以l为左端点的最大子段和
    int rSum; // 表示区间[l,r]内以r为右端点的最大子段和
    int mSum; // 表示区间[l,r]内的最大子段和
    int iSum; // 表示区间[l,r]内的区间和
}

@FunctionalInterface
interface TriFunction<A, B, C, D> {
    D apply(A a, B b, C c);
}

BiFunction<Status, Status, Status> pushUp = (l, r) -> {
    Status s = new Status();
    s.lSum = Math.max(l.lSum, l.iSum + r.lSum);
    s.rSum = Math.max(r.rSum, r.iSum + l.rSum);
    s.mSum = Math.max(Math.max(l.mSum, r.mSum), l.rSum + r.lSum);
    s.iSum = l.iSum + r.iSum;
    return s;
};

TriFunction<int[], Integer, Integer, Status> get = (nums, l, r) -> {
    if (Objects.equals(l, r)) {
        Status s = new Status();
        s.lSum = s.rSum = s.mSum = s.iSum = nums[l];
        return s;
    }

    int m = (l + r) >> 1;
    Status lSub = this.get.apply(nums, l, m);
    Status rSub = this.get.apply(nums, m + 1, r);

    return this.pushUp.apply(lSub, rSub);
};

/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(log(n))
 */
public int maxSubArray(int[] nums) {
    return this.get.apply(nums, 0, nums.length - 1).mSum;
}
```

@tab Go
```go
// 时间复杂度：O(n)
// 空间复杂度：O(log(n))
func maxSubArray(nums []int) int {
    type Status struct {
        lSum, rSum, mSum, iSum int
    }

    pushUp := func(l Status, r Status) Status {
        return Status{
            max(l.lSum, l.iSum+r.lSum),
            max(r.rSum, r.iSum+l.rSum),
            max(max(l.mSum, r.mSum), l.rSum+r.lSum),
            l.iSum + r.iSum,
        }
    }

    var get func(nums []int, l int, r int) Status
    get = func(nums []int, l int, r int) Status {
        if l == r {
            return Status{
                nums[l], nums[l], nums[l], nums[l],
            }
        }

        m := (l + r) >> 1
        lSub := get(nums, l, m)
        rSub := get(nums, m+1, r)

        return pushUp(lSub, rSub)
    }

    return get(nums, 0, len(nums)-1).mSum
}
```
:::