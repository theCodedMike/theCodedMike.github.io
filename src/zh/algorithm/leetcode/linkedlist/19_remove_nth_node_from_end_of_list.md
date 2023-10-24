---
title: 19, 删除链表的倒数第N个节点
icon: discover
date: 2023-10-24
order: 5
sticky: true
category: linkedlist
tag: 
  - medium
  - linked list
  - two pointers
---

## 一、题目描述
给你一个链表，删除链表的倒数第n个结点，并且返回链表的头结点。

**示例 1**
![remove node](../../../../../assets/leetcode/remove_nth_node_from_end_of_list_19.png)
输入: head = [1, 2, 3, 4, 5], n = 2
输出: [1, 2, 3, 5]

**示例 2**
输入: head = [1], n = 1
输出: []

**示例 3**
输入: head = [1, 2], n = 1
输出: [1]

**提示**

- 链表中结点的数目为 sz
- 1 <= sz <= 30
- 0 <= Node.val <= 100
- 1 <= n <= sz

**进阶**
你能尝试使用一趟扫描实现吗？

**相关主题**

- 链表
- 双指针

## 二、题解
```text
// Rust代码中使用
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

// Java代码中使用
public class ListNode {
    int val;
    ListNode next;
}
```
### 方法 1: 计算链表长度
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n)
///
/// Space Complexity: O(1)
pub fn remove_nth_from_end(head: Option<Box<ListNode>>, n: i32) -> Option<Box<ListNode>> {
    // calculate the len of linked list
    let mut counter = head.as_ref();
    let mut len = 0;
    while let Some(curr) = counter {
        len += 1;
        counter = curr.next.as_ref();
    }

    let mut dummy = ListNode::new(-1);
    dummy.next = head;
    let mut p = &mut dummy;
    // move p to the previous node of to be deleted node
    for _ in 0..(len - n) {
        p = p.next.as_mut().unwrap();
    }
    if let Some(mut to_be_del) = p.next.take() {
        p.next = to_be_del.next.take();
    }

    dummy.next
}
```

@tab Java
```java
/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
public ListNode removeNthFromEnd(ListNode head, int n) {
    // calculate the len of linked list
    int len = 0;
    for (ListNode p = head; p != null; ++len) {
        p = p.next;
    }

    // move p to the previous node of to be deleted node
    ListNode dummy = new ListNode(-1, head);
    ListNode p = dummy;
    for (int i = 0; i < len - n; i++) {
        p = p.next;
    }
    p.next = p.next.next;

    return dummy.next;
}
```
:::

### 方法 2: 使用栈
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n)
///
/// Space Complexity: O(n)
pub fn remove_nth_from_end(head: Option<Box<ListNode>>, n: i32) -> Option<Box<ListNode>> {
    let mut stack = vec![];
    while let Some(mut curr) = head {
        head = curr.next.take();
        stack.push(curr);
    }

    let mut i = 0;
    let mut head = None;
    while let Some(mut curr) = stack.pop() {
        i += 1;
        if i != n {
            curr.next = head;
            head = Some(curr);
        }
    }

    head
}
```

@tab Java
```java
/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
public ListNode removeNthFromEnd(ListNode head, int n) {
    Stack<ListNode> stack = new Stack<>();
    while (head != null) {
        ListNode curr = head;
        stack.push(curr);
        head = head.next;
    }

    int i = 0;
    ListNode new_head = null;
    while (!stack.isEmpty()) {
        ListNode node = stack.pop();
        ++i;
        if (i != n) {
            node.next = new_head;
            new_head = node;
        }
    }

    return new_head;
}
```
:::

### 方法 3: 双指针
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n)
///
/// Space Complexity: O(1)
pub fn remove_nth_from_end(head: Option<Box<ListNode>>, n: i32) -> Option<Box<ListNode>> {
    let mut dummy = ListNode::new(-1);
    dummy.next = head;
    let mut fast = &dummy as *const ListNode;
    let mut slow = &mut dummy as *mut ListNode;

    unsafe {
        for _ in 0..n {
            fast = (*fast).next.as_deref().unwrap();
        }
        loop {
            if (*fast).next.is_none() {
                break;
            }
            fast = (*fast).next.as_deref().unwrap();
            slow = (*slow).next.as_deref_mut().unwrap();
        }
        if let Some(mut to_be_del) = (*slow).next.take() {
            (*slow).next = to_be_del.next.take();
        }
    }

    dummy.next
}
```

@tab Java
```java
/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
public ListNode removeNthFromEnd(ListNode head, int n) {
    ListNode dummy = new ListNode(-1, head);
    ListNode fast = dummy;
    ListNode slow = dummy;

    for (int i = 0; i < n; i++) {
        fast = fast.next;
    }
    while (fast.next != null) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;

    return dummy.next;
}
```
:::

### 方法 4: 递归
::: code-tabs
@tab Rust
```rust
/// Time Complexity: O(n)
///
/// Space Complexity: O(n)
pub fn remove_nth_from_end(head: Option<Box<ListNode>>, n: i32) -> Option<Box<ListNode>> {
    const RECURSION_HELPER: fn(Option<Box<ListNode>>, i32) -> (i32, Option<Box<ListNode>>) =
        |curr, n| match curr {
            None => (0, None),
            Some(mut curr) => {
                let (level, next) = RECURSION_HELPER(curr.next.take(), n);
                curr.next = next;
                if level + 1 == n {
                    (level + 1, curr.next)
                } else {
                    (level + 1, Some(curr))
                }
            }
        };

    RECURSION_HELPER(head, n).1
}
```

@tab Java
```java
static class Tuple {
    ListNode data;
    int level;
}

BiFunction<ListNode, Integer, Tuple> recursionHelper = (curr, n) -> {
    if (curr == null) {
        return new Tuple(null, 0);
    }
    Tuple res = this.recursionHelper.apply(curr.next, n);
    curr.next = res.data;
    return res.level + 1 == n ? new Tuple(curr.next, res.level + 1) : new Tuple(curr, res.level + 1);
};

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
public ListNode removeNthFromEnd(ListNode head, int n) {
    return this.recursionHelper.apply(head, n).data;
}
```
:::
