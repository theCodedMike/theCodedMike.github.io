---
title: 134, 加油站
icon: discover
date: 2024-03-25
order: 17
sticky: true
category: greedy
tag: 
  - medium
  - array
  - greedy
---

## 一、题目描述
在一条环路上有`n`个加油站，其中第`i`个加油站有汽油`gas[i]`升。

你有一辆油箱容量无限的的汽车，从第`i`个加油站开往第`i+1`个加油站需要消耗汽油`cost[i]`升。你从其中的一个加油站出发，开始时油箱为空。

给定两个整数数组`gas`和`cost`，如果你可以按顺序绕环路行驶一周，则返回出发时加油站的编号，否则返回`-1`。如果存在解，则**保证**它是**唯一**的。

**示例 1**
输入: gas = [1, 2, 3, 4, 5], cost = [3, 4, 5, 1, 2]
输出: 3
解释:
从`3`号加油站(索引为`3`处)出发，可获得`4`升汽油。此时油箱有`0 + 4 = 4`升汽油
开往`4`号加油站，此时油箱有`4 - 1 + 5 = 8`升汽油
开往`0`号加油站，此时油箱有`8 - 2 + 1 = 7`升汽油
开往`1`号加油站，此时油箱有`7 - 3 + 2 = 6`升汽油
开往`2`号加油站，此时油箱有`6 - 4 + 3 = 5`升汽油
开往`3`号加油站，你需要消耗`5`升汽油，正好足够你返回到`3`号加油站。
因此，`3`可为起始索引。

**示例 2**
输入: gas = [2, 3, 4], cost = [3, 4, 3]
输出: -1
解释:
你不能从`0`号或`1`号加油站出发，因为没有足够的汽油可以让你行驶到下一个加油站。
我们从`2`号加油站出发，可以获得`4`升汽油。此时油箱有`0 + 4 = 4`升汽油
开往`0`号加油站，此时油箱有`4 - 3 + 2 = 3`升汽油
开往`1`号加油站，此时油箱有`3 - 3 + 3 = 3`升汽油
你无法返回`2`号加油站，因为返程需要消耗`4`升汽油，但是你的油箱只有`3`升汽油。
因此，无论怎样，你都不可能绕环路行驶一周。

**提示**
- `n == gas.length == cost.length`
- `1 <= n <= 10⁵`
- `0 <= gas[i], cost[i] <= 10⁴`

**相关主题**
- 贪心
- 数组


## 二、题解
### 方法 1: 暴力解法
::: code-tabs
@tab Rust
```rust
pub fn can_complete_circuit(gas: Vec<i32>, cost: Vec<i32>) -> i32 {
    let (len, mut start, mut curr_gas) = (gas.len(), 0, 0);

    'outer: for i in 0..len {
        start = len;
        for j in i..len {
            if gas[j] >= cost[j] {
                start = j;
                break;
            }
        }

        if start == len {
            break;
        }

        curr_gas = gas[start] - cost[start];
        for i in (start + 1..len).chain(0..start) {
            curr_gas += gas[i];
            if curr_gas < cost[i] {
                continue 'outer;
            }
            curr_gas -= cost[i];
        }

        return start as i32;
    }

    return -1;
}
```

@tab Java
```java
public int canCompleteCircuit(int[] gas, int[] cost) {
    int len = gas.length, start, curr_gas;

    outer: for (int i = 0; i < len; i++) {
        start = len;
        for (int j = i; j < len; j++) {
            if (gas[j] >= cost[j]) {
                start = j;
                break;
            }
        }

        if (start == len) {
            break;
        }

        curr_gas = gas[start] - cost[start];
        for (int j = 1; j < len; j++) {
            int k = (start + j) % len;
            curr_gas += gas[k];
            if (curr_gas < cost[k]) {
                continue outer;
            }
            curr_gas -= cost[k];
        }

        return start;
    }

    return -1;
}
```

@tab Go
```go
func canCompleteCircuit(gas []int, cost []int) int {
    size, start, currGas := len(gas), 0, 0

outer:
    for i := 0; i < size; i++ {
        start = size
        for j := i; j < size; j++ {
            if gas[j] >= cost[j] {
                start = j
                break
            }
        }
        
        if start == size {
            break
        }
        
        currGas = gas[start] - cost[start]
        for j := 1; j < size; j++ {
            k := (start + j) % size
            currGas += gas[k]
            if currGas < cost[k] {
                continue outer
            }
            currGas -= cost[k]
        }
        
        return start
    }

    return -1
}
```
:::

### 方法 2: 遍历一次
::: code-tabs
@tab Rust
```rust
pub fn can_complete_circuit(gas: Vec<i32>, cost: Vec<i32>) -> i32 {
    let (len, mut i) = (gas.len(), 0);

    while i < len {
        let (mut sum_of_gas, mut sum_of_cost, mut cnt) = (0, 0, 0);

        while cnt < len {
            let j = (i + cnt) % len;
            sum_of_gas += gas[j];
            sum_of_cost += cost[j];
            if sum_of_cost > sum_of_gas {
                break;
            }
            cnt += 1;
        }

        if cnt == len {
            return i as i32;
        } else {
            i += cnt + 1;
        }
    }

    return -1;
}
```

@tab Java
```java
public int canCompleteCircuit(int[] gas, int[] cost) {
    int len = gas.length, i = 0;

    while (i < len) {
        int sumOfGas = 0, sumOfCost = 0, cnt = 0;

        while (cnt < len) {
            int j = (i + cnt) % len;
            sumOfGas += gas[j];
            sumOfCost += cost[j];
            if (sumOfCost > sumOfGas) {
                break;
            }
            cnt++;
        }

        if (cnt == len) {
            return i;
        } else {
            i += cnt + 1;
        }
    }

    return -1;
}
```

@tab Go
```go
func canCompleteCircuit(gas []int, cost []int) int {
    size, i := len(gas), 0

    for i < size {
        sumOfGas, sumOfCost, cnt := 0, 0, 0

        for cnt < size {
            j := (i + cnt) % size
            sumOfGas += gas[j]
            sumOfCost += cost[j]
            if sumOfCost > sumOfGas {
                break
            }
            cnt++
        }

        if cnt == size {
            return i
        } else {
            i += cnt + 1
        }
    }

    return -1
}
```
:::