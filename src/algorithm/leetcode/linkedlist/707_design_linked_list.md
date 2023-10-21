---
title: 707, Design Linked List
icon: discover
date: 2023-10-21
order: 2
sticky: true
category: linkedlist
tag: 
  - medium
  - linked list
  - design
---

## I Problem
Design your implementation of the linked list. You can choose to use a singly or doubly linked list.

A node in a singly linked list should have two attributes: `val` and `next`. `val` is the value of the current node, and `next` is a pointer reference to the next node. If you want to use the doubly linked list, you will need one more attribute `prev` to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement the MyLinkedList class:

- `MyLinkedList()` Initializes the `MyLinkedList` object.
- `int get(int index)` Get the value of the `indexᵗʰ` node in the linked list. If the index is invalid, return -1.
- `void addAtHead(int val)` Add a node of value `val` before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
- `void addAtTail(int val)` Append a node of value `val` as the last element of the linked list.
- `void addAtIndex(int index, int val)` Add a node of value `val` before the `indexᵗʰ` node in the linked list. If `index` equals the length of the linked list, the node will be appended to the end of the linked list. If `index` is greater than the length, the node will not be inserted.
- `void deleteAtIndex(int index)` Delete the `indexᵗʰ` node in the linked list, if the index is valid.

**Example 1**
Input:
["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
[[], [1], [3], [1, 2], [1], [1], [1]]
Output: [null, null, null, null, 2, null, 3]
Explanation:
```java
MyLinkedList myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
myLinkedList.get(1);              // return 2
myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
myLinkedList.get(1);              // return 3
```

**Constraints**

- `0 <= index, val <= 1000`
- Please do not use the built-in `LinkedList` library
- At most 2000 calls will be made to `get`, `addAtHead`, `addAtTail`, `addAtIndex` and `deleteAtIndex`

**Related Topics**

- Linked List
- Design

## II Solution
### Approach 1: Brute Force
::: code-tabs
@tab Rust(SmartPointer)
```rust
type NLink = Option<Rc<RefCell<Node>>>;

struct Node {
    elem: i32,
    prev: NLink,
    next: NLink,
}

impl Node {
    fn new(elem: i32, prev: NLink, next: NLink) -> Rc<RefCell<Self>> {
        Rc::new(RefCell::new(Node { elem, prev, next }))
    }
}

pub struct MyLinkedList {
    len: usize,
    head: NLink,
    tail: NLink,
}

impl MyLinkedList {
    pub fn new() -> Self {
        MyLinkedList {
            len: 0,
            head: None,
            tail: None,
        }
    }

    pub fn get(&self, index: i32) -> i32 {
        if self.len == 0 || index < 0 || index >= self.len as i32 {
            return -1;
        }

        let mut p = self.head.clone();
        for _ in 0..index {
            let next = p.unwrap().borrow().next.clone();
            p = next;
        }

        p.map(|curr| curr.borrow().elem).unwrap_or(-1)
    }

    pub fn add_at_head(&mut self, val: i32) {
        let new_node = Node::new(val, None, None);
        match self.head.take() {
            None => {
                // list is empty
                self.tail = Some(new_node.clone());
                self.head = Some(new_node);
            }
            Some(old_head) => {
                old_head.borrow_mut().prev = Some(new_node.clone());
                new_node.borrow_mut().next = Some(old_head);
                self.head = Some(new_node);
            }
        }
        self.len += 1;
    }

    pub fn add_at_tail(&mut self, val: i32) {
        let new_node = Node::new(val, None, None);
        match self.tail.take() {
            None => {
                // list is empty
                self.head = Some(new_node.clone());
                self.tail = Some(new_node);
            }
            Some(old_tail) => {
                old_tail.borrow_mut().next = Some(new_node.clone());
                new_node.borrow_mut().prev = Some(old_tail);
                self.tail = Some(new_node);
            }
        }
        self.len += 1;
    }

    pub fn add_at_index(&mut self, index: i32, val: i32) {
        if index < 0 || index > self.len as i32 {
            return;
        }
        match index as usize {
            0 => self.add_at_head(val),
            idx if idx == self.len => self.add_at_tail(val),
            _ => {
                // insert at middle
                let new_node = Node::new(val, None, None);
                let mut prev = self.head.clone();
                // Move p to the previous element of the element to be deleted
                for _ in 0..index - 1 {
                    let node = prev.unwrap().borrow().next.clone();
                    prev = node;
                }

                prev.map(|prev| {
                    if let Some(next) = prev.borrow_mut().next.take() {
                        next.borrow_mut().prev = Some(new_node.clone());
                        new_node.borrow_mut().next = Some(next);
                    }
                    new_node.borrow_mut().prev = Some(prev.clone());
                    prev.borrow_mut().next = Some(new_node);
                });
                self.len += 1;
            }
        }
    }

    pub fn delete_at_head(&mut self) -> i32 {
        self.head
            .take()
            .map(|old_head| {
                match old_head.borrow_mut().next.take() {
                    None => {
                        self.tail = None;
                    }
                    Some(next) => {
                        next.borrow_mut().prev = None;
                        self.head = Some(next);
                    }
                }
                self.len -= 1;
                old_head.borrow().elem
            })
            .unwrap_or(-1)
    }

    pub fn delete_at_tail(&mut self) -> i32 {
        self.tail
            .take()
            .map(|old_tail| {
                match old_tail.borrow_mut().prev.take() {
                    None => {
                        self.head = None;
                    }
                    Some(prev) => {
                        prev.borrow_mut().next = None;
                        self.tail = Some(prev);
                    }
                }
                self.len -= 1;
                old_tail.borrow().elem
            })
            .unwrap_or(-1)
    }

    pub fn delete_at_index(&mut self, index: i32) -> i32 {
        if self.len == 0 || index < 0 || index >= self.len as i32 {
            return -1;
        }

        match index as usize {
            0 => self.delete_at_head(),
            idx if idx == (self.len - 1) => self.delete_at_tail(),
            _ => {
                let mut del = self.head.clone();
                // Move p to the element to be deleted
                for _ in 0..index {
                    let node = del.unwrap().borrow().next.clone();
                    del = node;
                }

                del.map(|del| {
                    let mut del = del.borrow_mut();
                    del.prev.take().map(|prev| {
                        del.next.take().map(|next| {
                            next.borrow_mut().prev = Some(prev.clone());
                            prev.borrow_mut().next = Some(next);
                        });
                    });
                    self.len -= 1;
                    del.elem
                })
                .unwrap_or(-1)
            }
        }
    }
}
```

@tab Rust(RawPointer)
```rust
type NLink = *mut Node;

struct Node {
    elem: i32,
    prev: NLink,
    next: NLink,
}

impl Node {
    fn new(elem: i32, prev: NLink, next: NLink) -> NLink {
        Box::into_raw(Box::new(Node { elem, prev, next }))
    }
}

pub struct MyLinkedList {
    len: usize,
    head: NLink,
    tail: NLink,
}

impl MyLinkedList {
    pub fn new() -> Self {
        MyLinkedList {
            len: 0,
            head: null_mut(),
            tail: null_mut(),
        }
    }

    pub fn get(&self, index: i32) -> i32 {
        if self.len == 0 || index < 0 || index >= self.len as i32 {
            return -1;
        }

        let mut p = self.head;
        for _ in 0..index {
            unsafe {
                p = (*p).next;
            }
        }

        unsafe { (*p).elem }
    }

    pub fn add_at_head(&mut self, val: i32) {
        let new_node = Node::new(val, null_mut(), null_mut());
        if self.len == 0 {
            self.tail = new_node;
            self.head = new_node;
        } else {
            unsafe {
                (*self.head).prev = new_node;
                (*new_node).next = self.head;
            }
            self.head = new_node;
        }
        self.len += 1;
    }

    pub fn add_at_tail(&mut self, val: i32) {
        let new_node = Node::new(val, null_mut(), null_mut());
        if self.len == 0 {
            self.head = new_node;
            self.tail = new_node;
        } else {
            unsafe {
                (*new_node).prev = self.tail;
                (*self.tail).next = new_node;
            }
            self.tail = new_node;
        }
        self.len += 1;
    }

    pub fn add_at_index(&mut self, index: i32, val: i32) {
        if index < 0 || index > self.len as i32 {
            return;
        }
        match index as usize {
            0 => self.add_at_head(val),
            idx if idx == self.len => self.add_at_tail(val),
            _ => {
                let new_node = Node::new(val, null_mut(), null_mut());
                let mut prev = self.head;
                // Move p to the previous element of the element to be deleted
                for _ in 0..index - 1 {
                    unsafe {
                        prev = (*prev).next;
                    }
                }
                unsafe {
                    let next = (*prev).next;
                    (*next).prev = new_node;
                    (*new_node).next = next;
                    (*new_node).prev = prev;
                    (*prev).next = new_node;
                }
                self.len += 1;
            }
        }
    }

    pub fn delete_at_head(&mut self) -> i32 {
        if self.len == 0 {
            return -1;
        }
        let head = self.head;
        self.len -= 1;
        if self.len == 0 {
            self.tail = null_mut();
        }
        unsafe {
            self.head = (*self.head).next;
            Box::from_raw(head).elem
        }
    }

    pub fn delete_at_tail(&mut self) -> i32 {
        if self.len == 0 {
            return -1;
        }
        let tail = self.tail;
        self.len -= 1;
        if self.len == 0 {
            self.head = null_mut();
        }
        unsafe {
            self.tail = (*self.tail).prev;
            Box::from_raw(tail).elem
        }
    }

    pub fn delete_at_index(&mut self, index: i32) -> i32 {
        if self.len == 0 || index < 0 || index >= self.len as i32 {
            return -1;
        }

        match index as usize {
            0 => self.delete_at_head(),
            idx if idx == (self.len - 1) => self.delete_at_tail(),
            _ => {
                let mut del = self.head;
                // Move p to the element to be deleted
                for _ in 0..index {
                    unsafe {
                        del = (*del).next;
                    }
                }

                unsafe {
                    let prev = (*del).prev;
                    let next = (*del).next;
                    (*next).prev = prev;
                    (*prev).next = next;
                    self.len -= 1;
                    Box::from_raw(del).elem
                }
            }
        }
    }
}
```

@tab Rust(NonNull)
```rust
type NLink = Option<NonNull<Node>>;

struct Node {
    elem: i32,
    prev: NLink,
    next: NLink,
}

impl Node {
    fn new(elem: i32, prev: NLink, next: NLink) -> NonNull<Node> {
        unsafe { NonNull::new_unchecked(Box::into_raw(Box::new(Node { elem, prev, next }))) }
    }
}

pub struct MyLinkedList {
    len: usize,
    head: NLink,
    tail: NLink,
}

impl MyLinkedList {
    pub fn new() -> Self {
        MyLinkedList {
            len: 0,
            head: None,
            tail: None,
        }
    }

    pub fn get(&self, index: i32) -> i32 {
        if self.len == 0 || index < 0 || index >= self.len as i32 {
            return -1;
        }

        let mut p = self.head.unwrap();
        for _ in 0..index {
            unsafe {
                p = (*p.as_ptr()).next.unwrap();
            }
        }

        unsafe { (*p.as_ptr()).elem }
    }

    pub fn add_at_head(&mut self, val: i32) {
        let new_node = Node::new(val, None, None);
        if self.len == 0 {
            self.tail = Some(new_node);
            self.head = Some(new_node);
        } else {
            self.head.take().map(|old_head| unsafe {
                (*old_head.as_ptr()).prev = Some(new_node);
                (*new_node.as_ptr()).next = Some(old_head);
                self.head = Some(new_node);
            });
        }
        self.len += 1;
    }

    pub fn add_at_tail(&mut self, val: i32) {
        let new_node = Node::new(val, None, None);
        if self.len == 0 {
            self.head = Some(new_node);
            self.tail = Some(new_node);
        } else {
            self.tail.take().map(|old_tail| unsafe {
                (*new_node.as_ptr()).prev = Some(old_tail);
                (*old_tail.as_ptr()).next = Some(new_node);
                self.tail = Some(new_node);
            });
        }
        self.len += 1;
    }

    pub fn add_at_index(&mut self, index: i32, val: i32) {
        if index < 0 || index > self.len as i32 {
            return;
        }
        match index as usize {
            0 => self.add_at_head(val),
            idx if idx == self.len => self.add_at_tail(val),
            _ => {
                let new_node = Node::new(val, None, None);
                let mut prev = self.head.unwrap();
                // Move p to the previous element of the element to be deleted
                for _ in 0..index - 1 {
                    unsafe {
                        prev = (*prev.as_ptr()).next.unwrap();
                    }
                }

                unsafe {
                    (*prev.as_ptr()).next.take().map(|next| {
                        (*next.as_ptr()).prev = Some(new_node);
                        (*new_node.as_ptr()).next = Some(next);
                    });
                    (*new_node.as_ptr()).prev = Some(prev);
                    (*prev.as_ptr()).next = Some(new_node);
                }
                self.len += 1;
            }
        }
    }

    pub fn delete_at_head(&mut self) -> i32 {
        self.head
            .take()
            .map(|old_head| unsafe {
                match (*old_head.as_ptr()).next.take() {
                    None => {
                        self.tail = None;
                    }
                    Some(next) => {
                        (*next.as_ptr()).prev = None;
                        self.head = Some(next);
                    }
                }
                self.len -= 1;
                (*old_head.as_ptr()).elem
            })
            .unwrap_or(-1)
    }

    pub fn delete_at_tail(&mut self) -> i32 {
        self.tail
            .take()
            .map(|old_tail| unsafe {
                match (*old_tail.as_ptr()).prev.take() {
                    None => {
                        self.head = None;
                    }
                    Some(prev) => {
                        (*prev.as_ptr()).next = None;
                        self.tail = Some(prev);
                    }
                }
                self.len -= 1;
                (*old_tail.as_ptr()).elem
            })
            .unwrap_or(-1)
    }

    pub fn delete_at_index(&mut self, index: i32) -> i32 {
        if self.len == 0 || index < 0 || index >= self.len as i32 {
            return -1;
        }

        match index as usize {
            0 => self.delete_at_head(),
            idx if idx == (self.len - 1) => self.delete_at_tail(),
            _ => {
                let mut del = self.head.unwrap();
                // Move p to the element to be deleted
                for _ in 0..index {
                    unsafe {
                        del = (*del.as_ptr()).next.unwrap();
                    }
                }
                unsafe {
                    (*del.as_ptr()).prev.take().map(|prev| {
                        (*del.as_ptr()).next.take().map(|next| {
                            (*next.as_ptr()).prev = Some(prev);
                            (*prev.as_ptr()).next = Some(next);
                        });
                    });

                    self.len -= 1;
                    Box::from_raw(del.as_ptr()).elem
                }
            }
        }
    }
}
```

@tab Java
```java
class MyLinkedList {
    private int len;
    private Node head;
    private Node tail;

    static class Node {
        int elem;
        Node prev;
        Node next;

        Node(int elem) {
            this.elem = elem;
            this.prev = null;
            this.next = null;
        }
    }
    public MyLinkedList() {
        this.len = 0;
        this.head = null;
        this.tail = null;
    }
    
    public int get(int index) {
        if (this.len == 0 || index < 0 || index >= this.len) {
            return -1;
        }
        Node p = this.head;
        for (int i = 0; i < index; i++) {
            p = p.next;
        }
        return p.elem;
    }
    
    public void addAtHead(int val) {
        Node new_node = new Node(val);
        if (this.len == 0) {
            this.head = new_node;
            this.tail = new_node;
        } else {
            this.head.prev = new_node;
            new_node.next = this.head;
            this.head = new_node;
        }
        this.len++;
    }
    
    public void addAtTail(int val) {
        Node new_node = new Node(val);
        if (this.len == 0) {
            this.head = new_node;
            this.tail = new_node;
        } else {
            new_node.prev = this.tail;
            this.tail.next = new_node;
            this.tail = new_node;
        }
        this.len++;
    }
    
    public void addAtIndex(int index, int val) {
        if (index < 0 || index > this.len) {
            return;
        }
        if (index == 0) {
            this.addAtHead(val);
        } else if (index == this.len) {
            this.addAtTail(val);
        } else {
            Node new_node = new Node(val);
            Node prev = this.head;
            for (int i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            Node next = prev.next;
            next.prev = new_node;
            new_node.next = next;
            new_node.prev = prev;
            prev.next = new_node;
            this.len++;
        }
    }

    public int deleteAtHead() {
        if (this.len == 0) {
            return -1;
        }
        Node head = this.head;
        this.head = head.next;
        this.len--;
        if (this.len == 0) {
            this.tail = null;
        }

        return head.elem;
    }

    public int deleteAtTail() {
        if (this.len == 0) {
            return -1;
        }
        Node tail = this.tail;
        this.tail = tail.prev;
        this.len--;
        if (this.len == 0) {
            this.head = null;
        }
        return tail.elem;
    }
    public int deleteAtIndex(int index) {
        if (this.len == 0 || index < 0 || index >= this.len) {
            return -1;
        }
        if (index == 0) {
            return this.deleteAtHead();
        } else if (index == this.len - 1) {
            return this.deleteAtTail();
        } else {
            Node del = this.head;
            for (int i = 0; i < index; i++) {
                del = del.next;
            }
            Node prev = del.prev;
            Node next = del.next;
            next.prev = prev;
            prev.next = next;
            this.len--;
            return del.elem;
        }
    }
}
```
:::
