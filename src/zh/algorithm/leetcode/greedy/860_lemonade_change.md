---
title: 860, 柠檬水找零
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

## 一、题目描述
在柠檬水摊上，每一杯柠檬水的售价为`5`美元。顾客排队购买你的产品，（按账单`bills`支付的顺序）一次购买一杯。

每位顾客只买一杯柠檬水，然后向你付`5`美元、`10`美元或`20`美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付`5`美元。

注意，一开始你手头没有任何零钱。

给你一个整数数组`bills`，其中`bills[i]`是第`i`位顾客付的账。如果你能给每位顾客正确找零，返回`true`，否则返回`false`。

**示例 1**
输入: bills = [5, 5, 5, 10, 20]
输出: true
解释:
前`3`位顾客那里，我们按顺序收取`3`张`5`美元的钞票。
第`4`位顾客那里，我们收取一张`10`美元的钞票，并返还`5`美元。
第`5`位顾客那里，我们找还一张`10`美元的钞票和一张`5`美元的钞票。
由于所有客户都得到了正确的找零，所以我们输出`true`。

**示例 2**
输入: bills = [5, 5, 10, 10, 20]
输出: false
解释:
前`2`位顾客那里，我们按顺序收取`2`张`5`美元的钞票。
对于接下来的`2`位顾客，我们收取一张`10`美元的钞票，然后返还`5`美元。
对于最后一位顾客，我们无法退回`15`美元，因为我们现在只有两张`10`美元的钞票。
由于不是每位顾客都得到了正确的找零，所以答案是`false`。

**提示**
- `1 <= bills.length <= 10⁵`
- `bills[i]`不是`5`就是`10`或是`20`

**相关主题**
- 贪心
- 数组


## 二、题解
### 方法 1: 贪心
::: code-tabs
@tab Rust
```rust
pub fn lemonade_change(bills: Vec<i32>) -> bool {
    let mut counter = [0; 3];

    for bill in bills {
        match bill {
            20 => { // 共找零15元
                if counter[1] == 0 {
                    // 没有10元，15 = 3 * 5
                    if counter[0] < 3 {
                        return false;
                    }
                    counter[0] -= 3;
                } else {
                    // 有10元，15 = 10 + 5
                    if counter[0] == 0 {
                        return false;
                    }
                    counter[0] -= 1;
                    counter[1] -= 1;
                }
                counter[2] += 1;
            }
            10 => { // 共找零5元
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
            case 20: { // 共找零15元
                if (counter[1] == 0) { // 没有10元，15 = 3 * 5
                    if (counter[0] < 3) {
                        return false;
                    }
                    counter[0] -= 3;
                } else { // 有10元，15 = 10 + 5
                    if (counter[0] == 0) {
                        return false;
                    }
                    counter[0]--;
                    counter[1]--;
                }
                counter[2]++;
                break;
            }
            case 10: { // 共找零5元
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