---
title: 47, Permutations II
icon: discover
date: 2024-02-10
order: 11
sticky: true
category: backtracking
tag: 
  - medium
  - array
  - backtracking
---

## I Problem
Given a collection of numbers, `nums`, that might contain duplicates, return *all possible unique permutations **in any order***.

**Example 1**
Input: nums = [1, 1, 2]
Output: [[1, 1, 2], [1, 2, 1], [2, 1, 1]]

**Example 2**
Input: nums = [1, 2, 3]
Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

**Constraints**
- `1 <= nums.length <= 8`
- `-10 <= nums[i] <= 10`

**Related Topics**
- Array
- Backtracking


## II Solution
### Approach 1: Backtracking
::: code-tabs
@tab Rust
```rust
pub fn permute_unique(mut nums: Vec<i32>) -> Vec<Vec<i32>> {
    nums.sort_unstable();
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
                if i > 0 && nums[i] == nums[i - 1] {
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
                if (i > 0 && nums[i] == nums[i - 1]) {
                    continue;
                }

                permute.addLast(nums[i]);
                nums[i] = Integer.MIN_VALUE;
                this.dfs.accept(nums, permute, res);
                nums[i] = permute.removeLast();
            }
        };
public List<List<Integer>> permuteUnique(int[] nums) {
    Arrays.sort(nums);
    List<List<Integer>> res = new ArrayList<>();

    this.dfs.accept(nums, new ArrayList<>(), res);

    return res;
}
```
:::

### Approach 2: Recursion
::: code-tabs
@tab Rust
```rust
pub fn permute_unique(nums: Vec<i32>) -> Vec<Vec<i32>> {
    nums.sort_unstable();

    const DFS: fn(Vec<i32>) -> Vec<Vec<i32>> = |nums| {
        let mut res = vec![];

        if nums.len() <= 1 {
            res.push(nums);
            return res;
        }

        for i in 0..nums.len() {
            if i > 0 && nums[i] == nums[i - 1] {
                continue;
            }

            let num = nums[i];
            let new_nums = nums
                .iter()
                .enumerate()
                .filter_map(|(idx, &val)| if idx == i { None } else { Some(val) })
                .collect::<Vec<_>>();

            let perms = DFS(new_nums);
            for mut perm in perms {
                perm.push(num);
                res.push(perm);
            }
        }
        res
    };

    DFS(nums)
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
        if (i > 0 && nums.get(i) == nums.get(i - 1)) {
            continue;
        }

        Integer num = nums.get(i);
        int finalI = i;
        List<Integer> newNums = IntStream.range(0, nums.size())
                .filter(idx -> idx != finalI)
                .mapToObj(nums::get)
                .collect(Collectors.toList());

        List<List<Integer>> perms = this.recur.apply(newNums);
        for (List<Integer> perm : perms) {
            perm.add(num);
            res.add(perm);
        }
    }

    return res;
};
public List<List<Integer>> permuteUnique(int[] _nums) {
    Arrays.sort(_nums);

    List<Integer> nums = Arrays.stream(_nums).boxed().collect(Collectors.toList());

    return this.recur.apply(nums);
}
```
:::