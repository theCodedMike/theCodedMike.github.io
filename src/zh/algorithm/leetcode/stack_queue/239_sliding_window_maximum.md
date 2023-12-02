---
title: 239, 滑动窗口最大值
icon: discover
date: 2023-12-02
order: 6
sticky: true
category: stack/queue
tag: 
  - hard
  - array
  - queue
  - sliding window
  - head
  - monotonic queue
---

## 一、题目描述
给你一个整数数组`nums`，有一个大小为`k`的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的`k`个数字。滑动窗口每次只向右移动一位。

返回*滑动窗口中的最大值*。

**示例 1**
输入: nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
输出: [3, 3, 5, 5, 6, 7]
解释:
```text
滑动窗口的位置                  最大值
-----------------------------------
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

**示例 2**
输入: nums = [1], k = 1
输出: [1]

**提示**
- `1 <= nums.length <= 10⁵`
- `-10⁴ <= nums[i] <= 10⁴`
- `1 <= k <= nums.length`

**相关主题**
- 队列
- 数组
- 滑动窗口
- 单调队列
- 堆（优先队列）


## 二、题解
### 方法 1: 优先队列
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n*log(n))
///
/// Space Complexity: O(n)
pub fn max_sliding_window(nums: Vec<i32>, k: i32) -> Vec<i32> {
    let len = nums.len();
    let mut res = Vec::with_capacity(len - k + 1);
    let mut heap = BinaryHeap::with_capacity(len);

    for i in 0..k {
        heap.push((nums[i], i));
    }
    res.push((*heap.peek().unwrap()).0);

    for i in k..len {
        heap.push((nums[i], i));
        while let Some((max, idx)) = heap.peek() {
            if *idx <= i - k {
                heap.pop();
            } else {
                res.push(*max);
                break;
            }
        }
    }

    res
}
```

@tab Java
```java
// Time Complexity: O(n*log(n))
//
// Space Complexity: O(n)
public int[] maxSlidingWindow(int[] nums, int k) {
    int[] res = new int[nums.length - k + 1];
    int n = 0;
    Queue<int[]> heap = new PriorityQueue<>(nums.length, (e1, e2) -> e2[0] - e1[0]);

    for (int i = 0; i < k; i++) {
        heap.add(new int[]{nums[i], i});
    }
    res[n++] = heap.element()[0];

    for (int i = k; i < nums.length; i++) {
        heap.add(new int[]{nums[i], i});
        while (!heap.isEmpty() && heap.element()[1] <= i - k) {
            heap.remove();
        }
        res[n++] = heap.element()[0];
    }

    return res;
}
```
:::

### 方法 2: 单调队列
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n)
///
/// Space Complexity: O(k)
pub fn max_sliding_window(nums: Vec<i32>, k: i32) -> Vec<i32> {
    let len = nums.len();
    let mut res = Vec::with_capacity(len - k + 1);
    let mut deque = VecDeque::with_capacity(k);
    let push_back = |deque: &mut VecDeque<usize>, i: usize| {
        while let Some(&back) = deque.back() {
            if nums[i] >= nums[back] {
                deque.pop_back();
            } else {
                break;
            }
        }
        deque.push_back(i);
    };

    for i in 0..k {
        push_back(&mut deque, i);
    }
    res.push(nums[*deque.front().unwrap()]);

    for i in k..len {
        push_back(&mut deque, i);
        while let Some(&front) = deque.front() {
            if front <= i - k {
                deque.pop_front();
            } else {
                res.push(nums[front]);
                break;
            }
        }
    }

    res
}
```

@tab Java
```java
@FunctionalInterface
interface TriConsumer<X, Y, Z> {
    void accept(X x, Y y, Z z);
}

TriConsumer<Deque<Integer>, int[], Integer> pushBack = (deque, nums, i) -> {
    while (!deque.isEmpty() && nums[i] >= nums[deque.getLast()]) {
        deque.removeLast();
    }
    deque.addLast(i);
};

// Time Complexity: O(n)
//
// Space Complexity: O(k)
public int[] maxSlidingWindow(int[] nums, int k) {
    int[] res = new int[nums.length - k + 1];
    int n = 0;
    Deque<Integer> deque = new ArrayDeque<>(k);

    for (int i = 0; i < k; i++) {
        this.pushBack.accept(deque, nums, i);
    }
    res[n++] = nums[deque.getFirst()];

    for (int i = k; i < nums.length; i++) {
        this.pushBack.accept(deque, nums, i);
        while (!deque.isEmpty() && deque.getFirst() <= i - k) {
            deque.removeFirst();
        }
        res[n++] = nums[deque.getFirst()];
    }

    return res;
}
```
:::

### 方法 3: 分块处理
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n)
///
/// Space Complexity: O(n)
pub fn max_sliding_window(nums: Vec<i32>, k: i32) -> Vec<i32> {
    let len = nums.len();
    let mut prefix_max = vec![0; len];
    let mut suffix_max = vec![0; len];
    
    for mut i in 0..len {
        if i % k == 0 {
            prefix_max[i] = nums[i];
        } else {
            prefix_max[i] = std::cmp::max(prefix_max[i - 1], nums[i]);
        }
        i = len - 1 - i;
        if i == len - 1 || (i + 1) % k == 0 {
            suffix_max[i] = nums[i];
        } else {
            suffix_max[i] = std::cmp::max(suffix_max[i + 1], nums[i]);
        }
    }

    let mut res = Vec::with_capacity(len - k + 1);
    for i in 0..=len - k {
        res.push(std::cmp::max(suffix_max[i], prefix_max[i + k - 1]));
    }
    res
}
```

@tab Java
```java
// Time Complexity: O(n)
//
// Space Complexity: O(n)
public int[] maxSlidingWindow(int[] nums, int k) {
    int[] prefix_max = new int[nums.length];
    int[] suffix_max = new int[nums.length];

    for (int i = 0, j; i < nums.length; i++) {
        if (i % k == 0) {
            prefix_max[i] = nums[i];
        } else {
            prefix_max[i] = Integer.max(prefix_max[i - 1], nums[i]);
        }
        j = nums.length - 1 - i;
        if (j == nums.length - 1 || (j + 1) % k == 0) {
            suffix_max[j] = nums[j];
        } else {
            suffix_max[j] = Integer.max(suffix_max[j + 1], nums[j]);
        }
    }

    int[] res = new int[nums.length - k + 1];
    for (int i = 0; i <= nums.length - k; i++) {
        res[i] = Integer.max(suffix_max[i], prefix_max[i + k - 1]);
    }
    return res;
}
```
:::
