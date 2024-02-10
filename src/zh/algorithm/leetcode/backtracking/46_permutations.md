---
title: 46, 全排列
icon: discover
date: 2024-02-07
order: 10
sticky: true
category: backtracking
tag: 
  - medium
  - array
  - backtracking
---

## 一、题目描述
给定一个不含重复数字的数组`nums`，返回其*所有可能的全排列*。你可以**按任意顺序**返回答案。

**示例 1**
输入: nums = [1, 2, 3]
输出: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

**示例 2**
输入: nums = [0, 1]
输出: [[0, 1], [1, 0]]

**示例 3**
输入: nums = [1]
输出: [[1]]

**提示**
- `1 <= nums.length <= 6`
- `-10 <= nums[i] <= 10`
- `nums`中的所有整数**互不相同**

**相关主题**
- 数组
- 回溯


## 二、题解
### 方法 1: 回溯
::: code-tabs
@tab Rust
```rust
pub fn permute(mut nums: Vec<i32>) -> Vec<Vec<i32>> {
    const DFS: fn(&mut Vec<i32>, &mut Vec<i32>, &mut Vec<Vec<i32>>) = 
        |nums, permute, res| {
            if permute.len() == nums.len() {
                res.push(permute.clone());
                return;
            }

            for i in 0..nums.len() {
                if nums[i] == i32::MIN {
                    continue;
                }

                permute.push(nums[i]);
                nums[i] = i32::MIN;

                DFS(nums, permute, res);

                nums[i] = permute.pop().unwrap_or_default();
            }
        };
    let mut res = vec![];

    DFS(&mut nums, &mut vec![], &mut res);

    res
}
```

@tab Java
```java
@FunctionalInterface
interface TriConsumer<A, B, C> {
    void accept(A a, B b, C c);
}

TriConsumer<int[], List<Integer>, List<List<Integer>>> dfs =
        (nums, permute, res) -> {
            if (permute.size() == nums.length) {
                res.add(new ArrayList<>(permute));
                return;
            }

            for (int i = 0; i < nums.length; i++) {
                if (nums[i] == Integer.MIN_VALUE) {
                    continue;
                }

                permute.addLast(nums[i]);
                nums[i] = Integer.MIN_VALUE;

                this.dfs.accept(nums, permute, res);

                nums[i] = permute.removeLast();
            }
        };

public List<List<Integer>> permute(int[] nums) {
    List<List<Integer>> res = new ArrayList<>();

    this.dfs.accept(nums, new ArrayList<>(), res);

    return res;
}
```
:::

### 方法 2: 递归
::: code-tabs
@tab Rust
```rust
pub fn permute(nums: Vec<i32>) -> Vec<Vec<i32>> {
    const PERMUTE: fn(Vec<i32>) -> Vec<Vec<i32>> = |nums| {
        let mut res = vec![];

        if nums.len() <= 1 {
            res.push(nums);
            return res;
        }

        for i in 0..nums.len() {
            let num = nums[i];
            let new_nums = nums
                .iter()
                .enumerate()
                .filter_map(|(idx, &val)| if idx == i { None } else { Some(val) })
                .collect::<Vec<_>>();

            let perms = PERMUTE(new_nums);

            for mut perm in perms {
                perm.push(num);
                res.push(perm);
            }
        }

        res
    };

    PERMUTE(nums)
}
```

@tab Java
```java
Function<List<Integer>, List<List<Integer>>> recur = (nums) -> {
    List<List<Integer>> res = new ArrayList<>();

    if (nums.size() <= 1) {
        res.add(nums);
        return res;
    }

    for (int i = 0; i < nums.size(); i++) {
        int num = nums.get(i);
        int finalI = i;
        List<Integer> newNums =
                IntStream.range(0, nums.size())
                        .filter(idx -> idx != finalI)
                        .boxed()
                        .map(nums::get)
                        .collect(Collectors.toList());

        List<List<Integer>> perms = this.recur.apply(newNums);

        for (List<Integer> perm : perms) {
            perm.add(num);
            res.add(perm);
        }
    }

    return res;
};

public List<List<Integer>> permute(int[] _nums) {
    List<Integer> nums = Arrays.stream(_nums).boxed().collect(Collectors.toList());

    return this.recur.apply(nums);
}
```
:::