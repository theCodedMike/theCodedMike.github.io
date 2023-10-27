---
title: 142, 环形链表II
icon: discover
date: 2023-10-27
order: 8
sticky: true
category: linkedlist
tag: 
  - medium
  - hash table
  - linked list
  - two pointers
---

## 一、题目描述
给定一个链表的头节点`head`，返回链表开始入环的第一个节点。*如果链表无环，则返回`null`*。

如果链表中有某个节点，可以通过连续跟踪`next`指针再次到达，则链表中存在环。
为了表示给定链表中的环，评测系统内部使用整数`pos`来表示链表尾连接到链表中的位置（**索引从`0`开始**）。
如果`pos`是`-1`，则在该链表中没有环。**注意：`pos`不作为参数进行传递**，仅仅是为了标识链表的实际情况。

**不允许修改**链表。

**示例 1**
![4 nodes with cycle](../../../../../assets/leetcode/linked_list_cycle_1_141.png)
输入: head = [3, 2, 0, -4], pos = 1
输出: 返回索引为 1 的链表节点
解释: 链表中有一个环，其尾部连接到第二个节点。

**示例 2**
![2 nodes with cycle](../../../../../assets/leetcode/linked_list_cycle_2_141.png)
输入: head = [1, 2], pos = 0
输出: 返回索引为 0 的链表节点
解释: 链表中有一个环，其尾部连接到第一个节点。

**示例 3**
![1 node](../../../../../assets/leetcode/linked_list_cycle_3_141.png)
输入: head = [1], pos = -1
输出: 返回 null
解释: 链表中没有环。

**提示**

- 链表中节点的数目范围在范围`[0, 10⁴]`内
- `-10⁵ <= Node.val <= 10⁵`
- `pos`的值为`-1`或者链表中的一个有效索引

**进阶**
你是否可以使用`O(1)`空间解决此题？

**相关主题**

- 哈希表
- 链表
- 双指针


## 二、题解
::: code-tabs
@tab ListNode(Rust)
```rust
type NLink = *mut ListNode;

pub struct ListNode {
    pub val: i32,
    pub next: NLink,
}

impl ListNode {
    pub fn new(val: i32, next: NLink) -> NLink {
        Box::into_raw(Box::new(ListNode { val, next }))
    }
}
```

@tab ListNode(Java)
```java
public class ListNode {
    int val;
    ListNode next;

    public ListNode() {}
    public ListNode(int val) { 
        this.val = val; 
    }
    public ListNode(int val, ListNode next) { 
        this.val = val; 
        this.next = next; 
    }
}
```
:::

### 方法 1: 使用哈希表
::: code-tabs
@tab Rust
```rust
pub fn detect_cycle(head: *mut ListNode) -> *mut ListNode {
    let mut set = HashSet::new();

    while !head.is_null() {
        if !set.insert(head) {
            return head;
        }
        unsafe {
            head = (*head).next;
        }
    }

    null_mut()
}
```

@tab Java
```java
public ListNode detectCycle(ListNode head) {
    HashSet<ListNode> set = new HashSet<>();

    while (head != null) {
        if (!set.add(head)) {
            return head;
        }
        head = head.next;
    }

    return null;
}
```
:::

### 方法 2: 双指针
::: code-tabs
@tab Rust
```rust
pub fn detect_cycle(head: *mut ListNode) -> *mut ListNode {
    let mut fast = head;
    let mut slow = head;

    while !fast.is_null() {
        unsafe {
            fast = (*fast).next;
            if fast.is_null() {
                break;
            }
            fast = (*fast).next;
            slow = (*slow).next;

            if fast == slow {
                fast = head;
                while fast != slow {
                    fast = (*fast).next;
                    slow = (*slow).next;
                }
                break;
            }
        }
    }

    fast
}
```

@tab Java
```java
public ListNode detectCycle(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;

    while (fast != null) {
        fast = fast.next;
        if (fast == null) {
            break;
        }
        fast = fast.next;
        slow = slow.next;

        if (fast == slow) {
            fast = head;
            while (fast != slow) {
                fast = fast.next;
                slow = slow.next;
            }
            break;
        }
    }
    
    return fast;
}
```
:::
