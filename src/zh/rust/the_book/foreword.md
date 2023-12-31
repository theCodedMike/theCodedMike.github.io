---
title: 前言
icon: note
date: 2023-09-24
category: Rust语法
tag:
  - 前言
---

## Foreword 前言

It wasn't always so clear, but the Rust programming language is fundamentally
about empowerment: no matter what kind of code you are writing now, Rust empowers
you to reach farther, to program with confidence in a wider variety of domains
than you did before.
译：有一点需要澄清，那就是Rust语言从根本上讲是关于"赋能"的：无论你现在使用的是哪种语言，Rust都能让你走得更远，让你在比以前更广泛的领域中自信地编码。

Take, for example, "systems-level" work that deals with low-level details of memory
management, data representation, and concurrency. Traditionally, this realm of
programming is seen as arcane, accessible only to a select few who have devoted the
necessary years learning to avoid its infamous pitfalls. And even those who practice
it do so with caution, lest their code be open to exploits, crashes, or corruption.
译：比如，处理"系统级"的工作，这些工作涉及到内存管理、数据表示、并发等底层细节。传统上，这一编程领域是非常晦涩难懂的，只有少数人才能涉足，他们需要花费数年的时间来学习才能避开其中的陷阱。即使这些人如此小心谨慎，他们也要避免自己的代码出现漏洞或崩溃。

Rust breaks down these barriers by eliminating the old pitfalls and providing a
friendly, polished set of tools to help you along the way.
Programmers who need to "dip down" into lower-level control can do so with Rust,
without taking on the customary risk of crashes or security holes, and without
having to learn the fine points of a fickle toolchain. Better yet, the language
is designed to guide you naturally towards reliable code that is efficient in
terms of speed and memory usage.
译：然而Rust打破了这些障碍，它通过消除原来的陷阱并提供了一套友好的、精良的工具来为你保驾护航。那些需要"深入"底层控制的程序员现在可以使用Rust来实现这一目标，同时不必承担常见的崩溃或安全漏洞风险，也不必了解经常更新的工具链中的细节。更妙的是，这种语言的设计会引导你自然而然地写出可靠的代码，并在速度和内存利用方面同时达到高效。

Programmers who are already working with low-level code can use Rust to raise their
ambitions. For example, introducing parallelism in Rust is a relatively low-risk
operation: the compiler will catch the classical mistakes for you. And you can
tackle more aggressive optimizations in your code with the confidence that you
won't accidentally introduce crashes or vulnerabilities.
译：那些早就和底层代码打交道的程序员现在可以使用Rust来实现更远大的目标。例如，在Rust中引入并行是一件风险相对较低的操作，因为编译器会帮你捕获常见的错误。你要做的是更激进地优化你的代码，并确信不会意外地引入崩溃或漏洞。

But Rust isn't limited to low-level systems programming. It's expressive and ergonomic
enough to make CLI apps, web servers, and many other kinds of code quite pleasant to
write — you'll find simple examples of both later in the book. Working with Rust
allows you to build skills that transfer from one domain to another; you can learn
Rust by writing a web app, then apply those same skills to target your Raspberry Pi.
译：但Rust并不局限于底层系统编程领域。它的表现力和人体工程学让它足以可以在CLI应用、Web服务器以及其他领域写出让人愉悦的代码（在本书的后面，你会找到这些示例代码）。使用Rust还可以培养跨领域的技能：你可以通过编写Web应用来学习Rust，然后可以将这些技能应用于树莓派。

This book fully embraces the potential of Rust to empower its users. It's a friendly
and approachable text intended to help you level up not just your knowledge of Rust,
but also your reach and confidence as a programmer in general. So dive in, get ready
to learn—and welcome to the Rust community!
译：这本书将充分体现Rust赋能用户的潜力。本书用词亲切、平易近人，不仅能帮助你掌握Rust知识，还能帮助你提升作为程序员的能力和信心。所以，请潜下心来，准备学习，欢迎来到Rust社区！

— Nicholas Matsakis and Aaron Turon