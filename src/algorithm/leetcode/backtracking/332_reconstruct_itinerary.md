---
title: 332, Reconstruct Itinerary
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

## I Problem
You are given a list of airline `tickets` where `tickets[i] = [fromi, toi]` represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.

All of the tickets belong to a man who departs from `"JFK"`, thus, the itinerary must begin with `"JFK"`. If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.
- For example, the itinerary `["JFK", "LGA"]` has a smaller lexical order than `["JFK", "LGB"]`.

You may assume all tickets form at least one valid itinerary. You must **use all the tickets once** and **only once**.

**Example 1**
![](../../../../assets/leetcode/reconstruct_itinerary_1_332.png)
Input: tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]

**Example 2**
![](../../../../assets/leetcode/reconstruct_itinerary_2_332.png)
Input: tickets = [["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]]
Output: ["JFK", "ATL", "JFK", "SFO", "ATL", "SFO"]
Explanation: Another possible reconstruction is ["JFK", "SFO", "ATL", "JFK", "ATL", "SFO"] but it is larger in lexical order.

**Constraints**
- `1 <= tickets.length <= 300`
- `tickets[i].length == 2`
- `fromi.length == 3`
- `toi.length == 3`
- `fromi` and `toi` consist of uppercase English letters.
- `fromi != toi`

**Related Topics**
- Depth-First Search
- Graph
- Eulerian Circuit


## II Solution
### Approach 1: Backtracking
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

### Approach 2: Hierholzer Approach
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