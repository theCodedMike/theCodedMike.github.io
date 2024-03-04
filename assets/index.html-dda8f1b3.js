import{_ as n,a as r,b as i}from"./queue-8f077c89.js";import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as d,c as u,a as e,d as o,w as s,e as h,b as t}from"./app-6ffb4f14.js";const m={},p=h('<h2 id="stack-queue" tabindex="-1"><a class="header-anchor" href="#stack-queue" aria-hidden="true">#</a> Stack/Queue</h2><h3 id="stack" tabindex="-1"><a class="header-anchor" href="#stack" aria-hidden="true">#</a> Stack</h3><p>In computer science, a <code>stack</code> is an abstract data type that serves as a collection of elements with two main operations:</p><ul><li><strong>Push</strong>, which adds an element to the collection, and</li><li><strong>Pop</strong>, which removes the most recently added element.<br><img src="'+n+'" alt="stack" loading="lazy"><br><img src="'+r+'" alt="stack" loading="lazy"></li></ul><p>Additionally, a <strong>peek</strong> operation can, without modifying the stack, return the value of the last element added. The name stack is an analogy to a set of physical items stacked one atop another, such as a stack of plates.</p><p>The order in which an element added to or removed from a stack is described as last in, first out, referred to by the acronym <strong>LIFO</strong>. As with a stack of physical objects, this structure makes it easy to take an item off the top of the stack, but accessing a datum deeper in the stack may require removing multiple other items first.</p><p>Considered a linear data structure, or more abstractly a sequential collection, a stack has one end which is the only position at which the push and pop operations may occur, the top of the stack, and is fixed at the other end, the bottom. This data structure makes it possible to implement a stack as a singly linked list and as a pointer to the top element. A stack may be implemented to have a bounded capacity. If the stack is full and does not contain enough space to accept another element, the stack is in a state of stack overflow.</p><p>A stack is needed to implement depth-first search.</p><h3 id="queue" tabindex="-1"><a class="header-anchor" href="#queue" aria-hidden="true">#</a> Queue</h3><p>In computer science, a <code>queue</code> is a collection of entities that are maintained in a sequence and can be modified by the addition of entities at one end of the sequence and the removal of entities from the other end of the sequence. By convention, the end of the sequence at which elements are added is called the back, tail, or rear of the queue, and the end at which elements are removed is called the head or front of the queue, analogously to the words used when people line up to wait for goods or services.<br><img src="'+i+'" alt="queue" loading="lazy"></p><p>The operation of adding an element to the rear of the queue is known as <strong>enqueue</strong>, and the operation of removing an element from the front is known as <strong>dequeue</strong>. Other operations may also be allowed, often including a peek or front operation that returns the value of the next element to be dequeued without dequeuing it.</p><p>The operations of a queue make it a first-in-first-out (<strong>FIFO</strong>) data structure. In a FIFO data structure, the first element added to the queue will be the first one to be removed. This is equivalent to the requirement that once a new element is added, all elements that were added before have to be removed before the new element can be removed. A queue is an example of a linear data structure, or more abstractly a sequential collection. Queues are common in computer programs, where they are implemented as data structures coupled with access routines, as an abstract data structure or in object-oriented languages as classes. Common implementations are circular buffers and linked lists.</p><p>Queues provide services in computer science, transport, and operations research where various entities such as data, objects, persons, or events are stored and held to be processed later. In these contexts, the queue performs the function of a buffer. Another usage of queues is in the implementation of breadth-first search.</p><h2 id="exercise" tabindex="-1"><a class="header-anchor" href="#exercise" aria-hidden="true">#</a> Exercise</h2>',14),f=e("br",null,null,-1),_=e("br",null,null,-1),k=e("br",null,null,-1),g=e("br",null,null,-1),b=e("br",null,null,-1),q=e("br",null,null,-1),v=e("h2",{id:"summary",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#summary","aria-hidden":"true"},"#"),t(" Summary")],-1);function w(y,x){const a=c("RouterLink");return d(),u("div",null,[p,e("p",null,[o(a,{to:"/algorithm/leetcode/stack_queue/232_implement_queue_using_stacks.html"},{default:s(()=>[t("232: Implement Queue using Stacks")]),_:1}),f,o(a,{to:"/algorithm/leetcode/stack_queue/225_implement_stack_using_queues.html"},{default:s(()=>[t("225: Implement Stack using Queues")]),_:1}),_,o(a,{to:"/algorithm/leetcode/stack_queue/20_valid_parentheses.html"},{default:s(()=>[t("20: Valid Parentheses")]),_:1}),k,o(a,{to:"/algorithm/leetcode/stack_queue/1047_remove_all_adjacent_duplicates_in_string.html"},{default:s(()=>[t("1047: Remove All Adjacent Duplicates In String")]),_:1}),g,o(a,{to:"/algorithm/leetcode/stack_queue/150_evaluate_reverse_polish_notation.html"},{default:s(()=>[t("150: Evaluate Reverse Polish Notation")]),_:1}),b,o(a,{to:"/algorithm/leetcode/stack_queue/239_sliding_window_maximum.html"},{default:s(()=>[t("239: Sliding Window Maximum")]),_:1}),q,o(a,{to:"/algorithm/leetcode/stack_queue/347_top_k_frequent_elements.html"},{default:s(()=>[t("347: Top K Frequent Elements")]),_:1})]),v])}const T=l(m,[["render",w],["__file","index.html.vue"]]);export{T as default};