---
title: 203, 移除链表元素
icon: discover
date: 2023-10-20
order: 1
sticky: true
category: linkedlist
tag: 
  - easy
  - linked list
  - recursion
---

## 一、题目描述
给你一个链表的头节点head和一个整数val，请你删除链表中所有满足Node.val == val的节点，并返回新的头节点。

**示例 1**
![Linked List](../../../../../assets/leetcode/listed_list_203.png)
输入: head = [1, 2, 6, 3, 4, 5, 6], val = 6
输出: [1, 2, 3, 4, 5]

**示例 2**
输入: head = [], val = 1
输出: []

**示例 3**
输入: head = [7, 7, 7, 7], val = 7
输出: []

**进阶**

- 列表中的节点数目在范围[0, 10⁴]内
- 1 <= Node.val <= 50
- 0 <= val <= 50

**相关主题**

- 链表
- 递归

## 二、题解
::: code-tabs
@tab ListNode(Rust)
```rust
#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    fn new(val: i32) -> Self {
        ListNode { next: None, val }
    }
}
```

@tab ListNode(Java)
```java
public class ListNode {
    int val;
    ListNode next;

    public ListNode() {}
    public ListNode(int val) { this.val = val; }
    public ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}
```
:::

### 方法 1: 迭代
::: code-tabs
@tab Rust
```rust
pub fn remove_elements(head: Option<Box<ListNode>>, val: i32) -> Option<Box<ListNode>> {
    match head {
        None => None,
        Some(head) => {
            let mut dummy = ListNode::new(-1);
            dummy.next = Some(head);
            let mut p = &mut dummy;

            while let Some(curr) = p.next.take() {
                if curr.val == val {
                    p.next = curr.next;
                } else {
                    p.next = Some(curr);
                    p = p.next.as_mut().unwrap();
                }
            }

            dummy.next
        }
    }
}
```

@tab Java
```java
public ListNode removeElements(ListNode head, int val) {
    if (head == null) {
        return null;
    }

    ListNode dummy = new ListNode(-1, head);
    ListNode p = dummy;
    while (p.next != null) {
        ListNode curr = p.next;
        if (curr.val == val) {
            p.next = curr.next;
        } else {
            p = curr;
        }
    }

    return dummy.next;
}
```
:::

### 方法 2: 递归
::: code-tabs
@tab Rust
```rust
pub fn remove_elements(head: Option<Box<ListNode>>, val: i32) -> Option<Box<ListNode>> {
    match head {
        None => None,
        Some(mut head) => {
            head.next = Self::recursion_helper(head.next.take(), val);
            if head.val == val {
                head.next
            } else {
                Some(head)
            }
        }
    }
}
```

@tab Java
```java
public ListNode removeElements(ListNode head, int val) {
    if (head == null) {
        return null;
    }
    
    head.next = this.recursionHelper(head.next, val);
    return head.val == val ? head.next : head;
}
```
:::