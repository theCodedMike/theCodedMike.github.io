---
title: 860, Lemonade Change
icon: discover
date: 2024-02-29
order: 3
sticky: true
category: greedy
tag: 
  - easy
  - greedy
  - array
---

## I Problem
At a lemonade stand, each lemonade costs `$5`. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a `$5`, `$10`, or `$20` bill. You must provide the correct change to each customer so that the net transaction is that the customer pays `$5`.

Note that you do not have any change in hand at first.

Given an integer array `bills` where `bills[i]` is the bill the `iᵗʰ` customer pays, return `true` *if you can provide every customer with the correct change, or `false` otherwise*.

**Example 1**
Input: bills = [5, 5, 5, 10, 20]
Output: true
Explanation:
From the first `3` customers, we collect three `$5` bills in order.
From the fourth customer, we collect a `$10` bill and give back a `$5`.
From the fifth customer, we give a `$10` bill and a `$5` bill.
Since all customers got correct change, we output `true`.

**Example 2**
Input: bills = [5, 5, 10, 10, 20]
Output: false
Explanation:
From the first two customers in order, we collect two `$5` bills.
For the next two customers in order, we collect a `$10` bill and give back a `$5` bill.
For the last customer, we can not give the change of `$15` back because we only have two `$10` bills.
Since not every customer received the correct change, the answer is `false`.

**Constraints**
- `1 <= bills.length <= 10⁵`
- `bills[i]` is either `5`, `10`, or `20`.

**Related Topics**
- Greedy
- Array


## II Solution
### Approach 1: Greedy
::: code-tabs
@tab Rust
```rust
pub fn lemonade_change(bills: Vec<i32>) -> bool {
    let mut counter = [0; 3];

    for bill in bills {
        match bill {
            20 => {
                if counter[1] == 0 {
                    // if you don't have $10, 15 = 3 * 5
                    if counter[0] < 3 {
                        return false;
                    }
                    counter[0] -= 3;
                } else {
                    // if you have $10, 15 = 10 + 5
                    if counter[0] == 0 {
                        return false;
                    }
                    counter[0] -= 1;
                    counter[1] -= 1;
                }
                counter[2] += 1;
            }
            10 => {
                if counter[0] == 0 {
                    return false;
                }
                counter[0] -= 1;
                counter[1] += 1;
            }
            _ => counter[0] += 1,
        }
    }

    true
}
```

@tab Java
```java
public boolean lemonadeChange(int[] bills) {
    int[] counter = {0, 0, 0}; // 5, 10, 20

    for (int bill : bills) {
        switch (bill) {
            case 20: {
                if (counter[1] == 0) { 
                    // if you don't have $10, 15 = 3 * 5
                    if (counter[0] < 3) {
                        return false;
                    }
                    counter[0] -= 3;
                } else {
                    // if you have $10, 15 = 10 + 5
                    if (counter[0] == 0) {
                        return false;
                    }
                    counter[0]--;
                    counter[1]--;
                }
                counter[2]++;
                break;
            }
            case 10: {
                if (counter[0] == 0) {
                    return false;
                }
                counter[0]--;
                counter[1]++;
                break;
            }
            default: counter[0]++;
        }
    }
    
    return true;
}
```
:::