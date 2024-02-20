---
title: 332, 重新安排行程
icon: discover
date: 2024-02-20
order: 17
sticky: true
category: backtracking
tag: 
  - medium
  - depth first search
  - graph
  - backtracking
---

## 一、题目描述
给你一份航线列表`tickets`，其中`tickets[i] = [fromi, toi]`表示飞机出发和降落的机场地点。请你对该行程进行重新规划排序。

所有这些机票都属于一个从`JFK`（肯尼迪国际机场）出发的先生，所以该行程必须从`JFK`开始。如果存在多种有效的行程，请你按字典排序返回最小的行程组合。
- 例如，行程`["JFK", "LGA"]`与`["JFK", "LGB"]`相比就更小，排序更靠前。

假定所有机票至少存在一种合理的行程。且所有的机票**必须都用一次**且**只能用一次**。

**示例 1**
![](../../../../../assets/leetcode/reconstruct_itinerary_1_332.png)
输入: tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
输出: ["JFK", "MUC", "LHR", "SFO", "SJC"]

**示例 2**
![](../../../../../assets/leetcode/reconstruct_itinerary_2_332.png)
输入: tickets = [["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]]
输出: ["JFK", "ATL", "JFK", "SFO", "ATL", "SFO"]
解释: 另一种有效的行程是 ["JFK", "SFO", "ATL", "JFK", "ATL", "SFO"] ，但是它字典排序更大更靠后。

**提示**
- `1 <= tickets.length <= 300`
- `tickets[i].length == 2`
- `fromi.length == 3`
- `toi.length == 3`
- `fromi`和`toi`由大写英文字母组成
- `fromi != toi`

**相关主题**
- 深度优先搜索
- 图
- 欧拉回路


## 二、题解
### 方法 1: 回溯
::: code-tabs
@tab Rust
```rust
pub fn find_itinerary(tickets: Vec<Vec<String>>) -> Vec<String> {
    const DFS: for<'a> fn(&'a Vec<Vec<String>>, &mut Vec<bool>, &mut Vec<&'a Vec<String>>, &mut Vec<String>) = 
        |tickets, used, path, res| {
            if !res.is_empty() {
                return;
            }

            if path.len() == tickets.len() {
                let len = path.len();
                path.iter().enumerate().for_each(|(i, p)| {
                    res.push(p[0].clone());
                    if i == len - 1 {
                        res.push(p[1].clone());
                    }
                });
                return;
            }

            for i in 0..tickets.len() {
                if used[i] {
                    continue;
                }
                if path.last().is_some_and(|last| last[1] != tickets[i][0]) {
                    continue;
                }
                if path.is_empty() && tickets[i][0] != "JFK" {
                    continue;
                }

                used[i] = true;
                path.push(&tickets[i]);

                DFS(tickets, used, path, res);

                used[i] = false;
                path.pop();
            }
    };
    tickets.sort_unstable();
    let mut used = vec![false; tickets.len()];
    let mut res = Vec::with_capacity(tickets.len());

    DFS(&tickets, &mut used, &mut vec![], &mut res);

    res
}
```

@tab Java
```java
@FunctionalInterface
interface QuadrConsumer<A, B, C, D> {
    void accept(A a, B b, C c, D d);
}

QuadrConsumer<List<List<String>>, boolean[], List<List<String>>, List<String>> dfs1 =
        (tickets, used, path, res) -> {
            if (!res.isEmpty()) {
                return;
            }

            if (path.size() == tickets.size()) {
                for (int i = 0, size = path.size(); i < size; i++) {
                    res.add(path.get(i).get(0));
                    if (i == size - 1) {
                        res.add(path.get(i).get(1));
                    }
                }
                return;
            }

            for (int i = 0, size = tickets.size(); i < size; i++) {
                if (used[i]) {
                    continue;
                }
                if (!path.isEmpty() && path.getLast().get(1) != tickets.get(i).get(0)) {
                    continue;
                }
                if (path.isEmpty() && tickets.get(i).get(0) != "JFK") {
                    continue;
                }

                used[i] = true;
                path.addLast(tickets.get(i));

                this.dfs1.accept(tickets, used, path, res);

                used[i] = false;
                path.removeLast();
            }
        };

public List<String> findItinerary(List<List<String>> tickets) {
    tickets.sort(Comparator.comparing((List<String> t) -> t.getFirst()).thenComparing(List::getLast));
    boolean[] used = new boolean[tickets.size()];
    List<String> res = new ArrayList<>();

    this.dfs1.accept(tickets, used, new ArrayList<>(), res);

    return res;
}
```
:::

### 方法 2: Hierholzer算法
::: code-tabs
@tab Rust
```rust
pub fn find_itinerary(tickets: Vec<Vec<String>>) -> Vec<String> {
    let mut map = tickets
            .into_iter()
            .fold(HashMap::new(), |mut map, mut t| {
                let (to, from) = (t.remove(1), t.remove(0));

                match map.get_mut(&from) {
                    None => {
                        map.insert(from, BinaryHeap::from([Reverse(to)]));
                    }
                    Some(heap) => {
                        heap.push(Reverse(to));
                    }
                };

                map
        });
    const DFS: fn(String, &mut HashMap<String, BinaryHeap<Reverse<String>>>, &mut Vec<String>) =
        |curr, map, res| {
            while map.contains_key(&curr) && !map[&curr].is_empty() {
                let next = map
                    .get_mut(&curr)
                    .and_then(|heap| heap.pop())
                    .unwrap_or_default();

                DFS(next.0, map, res);
            }

            res.push(curr)
        };
    let mut res = vec![];

    DFS("JFK".to_string(), &mut map, &mut res);

    res.reverse();
    res
}
```

@tab Java
```java
@FunctionalInterface
interface TriConsumer<A, B, C> {
    void accept(A a, B b, C c);
}

TriConsumer<String, Map<String, PriorityQueue<String>>, List<String>> dfs2 =
        (curr, map, res) -> {
            while (map.containsKey(curr) && !map.get(curr).isEmpty()) {
                String next = map.get(curr).poll();

                this.dfs2.accept(next, map, res);
            }

            res.add(curr);
        };

public List<String> findItinerary(List<List<String>> tickets) {
    Map<String, PriorityQueue<String>> map = new HashMap<>();
    for (List<String> t : tickets) {
        String from = t.getFirst();
        String to = t.getLast();

        PriorityQueue<String> minHeap = map.getOrDefault(from, new PriorityQueue<>());
        minHeap.add(to);
        
        map.put(from, minHeap);
    }
    List<String> res = new ArrayList<>();

    this.dfs2.accept("JFK", map, res);

    Collections.reverse(res);
    return res;
}
```
:::