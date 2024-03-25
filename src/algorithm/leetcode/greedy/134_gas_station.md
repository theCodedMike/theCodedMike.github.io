---
title: 134, Gas Station
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

## I Problem
There are `n` gas stations along a circular route, where the amount of gas at the `iᵗʰ` station is `gas[i]`.

You have a car with an unlimited gas tank and it costs `cost[i]` of gas to travel from the `iᵗʰ` station to its next `(i + 1)ᵗʰ` station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays `gas` and `cost`, return *the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return `-1`*. If there exists a solution, it is **guaranteed to be unique**.

**Example 1**
Input: gas = [1, 2, 3, 4, 5], cost = [3, 4, 5, 1, 2]
Output: 3
Explanation:
Start at station `3` (index 3) and fill up with `4` unit of gas. Your tank = `0 + 4 = 4`
Travel to station `4`. Your tank = `4 - 1 + 5 = 8`
Travel to station `0`. Your tank = `8 - 2 + 1 = 7`
Travel to station `1`. Your tank = `7 - 3 + 2 = 6`
Travel to station `2`. Your tank = `6 - 4 + 3 = 5`
Travel to station `3`. The cost is `5`. Your gas is just enough to travel back to station `3`.
Therefore, return `3` as the starting index.

**Example 2**
Input: gas = [2, 3, 4], cost = [3, 4, 3]
Output: -1
Explanation:
You can't start at station `0` or `1`, as there is not enough gas to travel to the next station.
Let's start at station `2` and fill up with `4` unit of gas. Your tank = `0 + 4 = 4`
Travel to station `0`. Your tank = `4 - 3 + 2 = 3`
Travel to station `1`. Your tank = `3 - 3 + 3 = 3`
You cannot travel back to station `2`, as it requires `4` unit of gas but you only have `3`.
Therefore, you can't travel around the circuit once no matter where you start.

**Constraints**
- `n == gas.length == cost.length`
- `1 <= n <= 10⁵`
- `0 <= gas[i], cost[i] <= 10⁴`

**Related Topics**
- Greedy
- Array


## II Solution
### Approach 1: Brute Force
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

### Approach 2: Traverse Once
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