---
title: 347, 前K个高频元素
icon: discover
date: 2023-12-03
order: 7
sticky: true
category: stack/queue
tag: 
  - medium
  - hash table
  - divide and conquer
  - sorting
  - heap(priority queue)
  - bucket sort
  - counting
  - quick select
---

## 一、题目描述
给你一个整数数组`nums`和一个整数`k`，请你返回其中出现频率前`k`高的元素。你可以按**任意顺序**返回答案。

**示例 1**
输入: nums = [1, 1, 1, 2, 2, 3], k = 2
输出: [1, 2]

**示例 2**
输入: nums = [1], k = 1
输出: [1]

**提示**
- `1 <= nums.length <= 10⁵`
- `k`的取值范围是`[1, 数组中不相同的元素的个数]`
- 题目数据保证答案唯一，换句话说，数组中前`k`个高频元素的集合是唯一的

**进阶**
你所设计算法的时间复杂度**必须**优于`O(n*log(n))`，其中`n`是数组大小。

**相关主题**
- 数组
- 哈希表
- 分治
- 桶排序
- 计数
- 快速选择
- 排序
- 堆（优先队列）


## 二、题解
### 方法 1: 排序
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n*log(n))
///
/// Space Complexity: O(n)
pub fn top_k_frequent(nums: Vec<i32>, k: i32) -> Vec<i32> {
    let len = nums.len();
    if k == len {
        return nums;
    }

    let mut map = HashMap::with_capacity(len / 2);
    for num in nums {
        map.entry(num)
            .and_modify(|(count, _key)| {
                *count += 1;
            })
            .or_insert((1, num));
    }

    let mut values = map.into_values().collect::<Vec<_>>();
    values.sort_unstable_by(|&v1, &v2| v2.0.cmp(&v1.0));

    values.into_iter().take(k).map(|v| v.1).collect()
}
```

@tab Java
```java
// Time Complexity: O(n*log(n))
//
// Space Complexity: O(n)
public int[] topKFrequent(int[] nums, int k) {
    if (nums.length == k) {
        return nums;
    }

    Map<Integer, int[]> map = new HashMap<>(nums.length / 2);
    for (int num : nums) {
        int[] val = map.getOrDefault(num, new int[]{0, num});
        val[0] += 1;
        map.put(num, val);
    }

    return map.values().stream()
            .sorted((v1, v2) -> v2[0] - v1[0])
            .limit(k)
            .map(v -> v[1])
            .mapToInt(Integer::intValue)
            .toArray();
}
```
:::

### 方法 2: 优先队列
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n*log(k))
///
/// Space Complexity: O(n + k)
pub fn top_k_frequent(nums: Vec<i32>, k: i32) -> Vec<i32> {
    // O(1) time
    let len = nums.len();
    if len == k {
        return nums;
    }

    // 1. Build hash map: element and how often it appears
    // O(N) time
    let mut map = HashMap::with_capacity(len / 2);
    for num in nums {
        map.entry(num)
            .and_modify(|(count, _key)| {
                *count += 1;
            })
            .or_insert((1, num));
    }

    // init heap 'the less frequent element first'
    let mut heap = BinaryHeap::with_capacity(k + 1);
    // 2. Keep k top frequent elements in the heap
    // O(N*log(k)) < O(N*log(N)) time
    for v in map.into_values() {
        heap.push(std::cmp::Reverse(v));
        if heap.len() > k {
            heap.pop();
        }
    }

    // 3. Build an output array
    // O(k*log(k)) time
    let mut res = vec![0; k];
    let mut i = k;
    while let Some(std::cmp::Reverse((_, num))) = heap.pop() {
        i -= 1;
        res[i] = num;
    }

    res
}
```

@tab Java
```java
// Time Complexity: O(n*log(k))
//
// Space Complexity: O(n + k)
public int[] topKFrequent(int[] nums, int k) {
    // O(1) time
    if (nums.length == k) {
        return nums;
    }

    // 1. Build hash map: element and how often it appears
    // O(N) time
    Map<Integer, Integer> map = new HashMap<>(nums.length / 2);
    for (int num : nums) {
        map.put(num, map.getOrDefault(num, 0) + 1);
    }

    // 2. Keep k top frequent elements in the heap
    // O(N*log(k)) < O(N*log(N)) time
    Queue<Integer> heap = new PriorityQueue<>(k + 1, Comparator.comparingInt(map::get));
    for (Integer key : map.keySet()) {
        heap.add(key);
        if (heap.size() > k) {
            heap.poll();
        }
    }

    // 3. Build an output array
    // O(k*log(k)) time
    int[] res = new int[k];
    for (int i = k - 1; i >= 0; i--) {
        res[i] = heap.poll();
    }

    return res;
}
```
:::

### 方法 3: 基于快排
::: code-tabs
@tab Rust
```rust
/// Average Time Complexity: O(n), Worst Case: O(n^2)
///
/// Space Complexity: O(n)
pub fn top_k_frequent(nums: Vec<i32>, k: i32) -> Vec<i32> {
    // O(1) time
    let len = nums.len();
    if len == k {
        return nums;
    }

    // build hash map: element and how often it appears
    let mut map = HashMap::with_capacity(len / 2);
    for num in nums {
        map.entry(num).and_modify(|count| *count += 1).or_insert(1);
    }

    // array of unique elements
    let m = map.len();
    let mut values = Vec::with_capacity(m);
    for (num, count) in map {
        values.push((num, count));
    }

    // kth top frequent element is (n - k)th less frequent.
    // Do a partial sort: from less frequent to the most frequent, till
    // (n - k)th less frequent element takes its place (n - k) in a sorted arra
    // All elements on the left are less frequent.
    // All the elements on the right are more frequent.
    Self::qsort(0, m - 1, m - k, &mut values);

    // Return top k frequent elements
    values.into_iter().skip(m - k).map(|v| v.0).collect()
}

fn qsort(start: usize, end: usize, k: usize, values: &mut Vec<(i32, i32)>) {
    // Sort a list within start..end till kth less frequent element takes its place.
    // Base case: the list contains only one element
    if start == end {
        return;
    }
    
    // Select a random pivot_index
    let mut pivot_idx = (std::time::SystemTime::now()
        .duration_since(std::time::UNIX_EPOCH)
        .unwrap()
        .as_nanos()
        % (end - start + 1) as u128
        + start as u128) as usize;
    pivot_idx = Self::partition(start, end, pivot_idx, values);

    if k < pivot_idx {
        // go left
        Self::qsort(start, pivot_idx - 1, k, values);
    } else if k > pivot_idx {
        // go right
        Self::qsort(pivot_idx + 1, end, k, values);
    } else {
        // If the pivot is in its final sorted position
        return;
    }
}

fn partition(start: usize, end: usize, pivot_idx: usize, values: &mut Vec<(i32, i32)>) -> usize {
    let pivot_freq = values[pivot_idx].1;
    // 1. Move pivot to end
    values.swap(pivot_idx, end);
    // Find the pivot position in a sorted list
    let mut store_idx = start;

    // 2. Move all less frequent elements to the left
    for i in start..=end {
        if values[i].1 < pivot_freq {
            values.swap(store_idx, i);
            store_idx += 1;
        }
    }

    // 3. Move the pivot to its final place
    values.swap(store_idx, end);
    store_idx
}

```

@tab Java
```java
// Average Time Complexity: O(n), Worst Case: O(n^2)
//
// Space Complexity: O(n)
public int[] topKFrequent(int[] nums, int k) {
    // O(1) time
    if (nums.length == k) {
        return nums;
    }

    // build hash map: element and how often it appears
    Map<Integer, Integer> map = new HashMap<>(nums.length / 2);
    for (int num : nums) {
        map.put(num, map.getOrDefault(num, 0) + 1);
    }

    // array of unique elements
    int m = map.size();
    List<int[]> values = new ArrayList<>(m);
    map.forEach((key, val) -> {
        values.add(new int[]{key, val});
    });

    // kth top frequent element is (m - k)th less frequent.
    // Do a partial sort: from less frequent to the most frequent, till
    // (m - k)th less frequent element takes its place (m - k) in a sorted array.
    // All elements on the left are less frequent.
    // All the elements on the right are more frequent.
    this.qsort(0, m - 1, m - k, values);

    // Return top k frequent elements
    return values.stream().skip(m - k)
            .map(v -> v[0]).mapToInt(Integer::intValue).toArray();
}

void qsort(int start, int end, int k, List<int[]> values) {
    // Sort a list within start..end till kth less frequent element takes its place.
    // Base case: the list contains only one element
    if (start == end) {
        return;
    }

    // Select a random pivot_index
    int pivotIdx = (int) (System.currentTimeMillis() % (end - start + 1) + start);
    pivotIdx = this.partition(start, end, pivotIdx, values);

    if (k < pivotIdx) {
        // go left
        this.qsort(start, pivotIdx - 1, k, values);
    } else if (k > pivotIdx) {
        // go right
        this.qsort(pivotIdx + 1, end, k, values);
    } else {
        return;
    }
}

int partition(int start, int end, int pivotIdx, List<int[]> values) {
    int pivotFreq = values.get(pivotIdx)[1];
    // 1. Move pivot to end
    Collections.swap(values, pivotIdx, end);
    // Find the pivot position in a sorted list
    int storeIdx = start;

    // 2. Move all less frequent elements to the left
    for (int i = start; i <= end; i++) {
        if (values.get(i)[1] < pivotFreq) {
            Collections.swap(values, storeIdx, i);
            storeIdx++;
        }
    }

    // 3. Move the pivot to its final place
    Collections.swap(values, storeIdx, end);

    return storeIdx;
}
```
:::